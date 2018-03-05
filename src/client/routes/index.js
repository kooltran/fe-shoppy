import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import {Helmet} from '../common';
import {HomePage, ProductsPage, FrontError} from './codeSplitSync';
class Root extends Component {
    static propTypes = {
        route: PropTypes.object.isRequired
    };

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Shoppy</title>
                    <meta name="description" content="site desc here" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                </Helmet>
                {renderRoutes(this.props.route.routes)}
            </React.Fragment>
        );
    }
}

const routes = [
  {
    component: Root,
    routes: [
      { path: '/', exact: true, component: HomePage  },
      { path: '/products', component: ProductsPage  },
      { path: '*', component: FrontError  }
    ]
  }
];

export default routes;
