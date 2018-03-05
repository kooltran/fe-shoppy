const initData = window.__INIT_DATA_FROM_SERVER_RENDER__ || {clientConfig:{}};
console.log('SSR: ', initData.SSR);

const config = {
  clientConfig: initData.clientConfig
};
export default config;
