//https://github.com/lorenwest/node-config/wiki/Configuration-Files
module.exports = {
  host: undefined,
  port: process.env.PORT || 1234,
  clientConfig:{
    apiHost: 'http://localhost:1234/api',
  },
  db: {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/fe-shoppy' || 'mongodb://shoppyadmin:adminshoppy@ds153778.mlab.com:53778/shoppy',
  },
  enableServerSideRender: false,
};
