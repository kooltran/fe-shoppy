import 'isomorphic-fetch';
import config from 'config';

export default {
  getProducts: ()=>{
    return fetch(`${config.clientConfig.apiHost}/products/getAll`)
      .then(res => {
        return res.json();
      });
  }
};
