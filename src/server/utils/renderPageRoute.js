import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import config from 'config';
import {Helmet} from 'react-helmet';

import routes from '../../client/routes';
import reducers from '../../client/reducers';

export default async (req, res) => {
  try {
    let content, store, helmet,
      clientData = {
        clientConfig: config.clientConfig,
        SSR: config.enableServerSideRender,
        initialState: {},
      };

    if(config.enableServerSideRender){
      store = await fetchDataAndInitReduxStore(req.url);
      clientData.initialState = store.getState();
      content = renderReactAppContent(store, req.url);
      helmet = Helmet.renderStatic();
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(renderHTML(content, clientData, helmet));
  } catch (error) {
      console.log(error);
    res.status(500).sendFile('src/server/views/500.html', {root: process.cwd() });
  }
};

async function fetchDataAndInitReduxStore(url){
  const store = createStore(reducers, applyMiddleware(thunk));
  const branch = matchRoutes(routes, url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
  });
  await Promise.all(promises);
  return store;
}

function renderReactAppContent(store, url){
  let context = {};
  return renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
}

function renderHTML(content, clientData, helmet){
  return `<!DOCTYPE html>
<html ${helmet ? ' ' + helmet.htmlAttributes.toString() : ''}>
  <head>
    <meta charset="utf-8" />
    ${helmet ? ' ' + helmet.title.toString() : ''}
    ${helmet ? ' ' + helmet.meta.toString() : ''}
    ${helmet ? ' ' + helmet.link.toString() : ''}
    <link rel="stylesheet" type="text/css" href="/bundles/index.css">
  </head>
  <body ${helmet ? ' ' + helmet.bodyAttributes.toString() : ''}>
    <div id="app">${content ? content : ''}</div>
    <script>
      window.__INIT_DATA_FROM_SERVER_RENDER__ = ${JSON.stringify(clientData)};
    </script>
    <script src="/bundles/index.js"></script>
  </body>
</html>  
  `;
}
