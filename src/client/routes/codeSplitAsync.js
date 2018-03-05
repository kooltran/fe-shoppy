import { asyncComponent } from 'react-async-component';
import {Loading, ErrorMessage} from '../common/';

function makeAsyncComponent(importFunc){
  return asyncComponent({
    resolve: importFunc,
    LoadingComponent: Loading,
    ErrorComponent: ErrorMessage
  });
}

export const HomePage = makeAsyncComponent(() => import('./HomePage'));
export const ProductsPage = makeAsyncComponent(() => import('./ProductsPage'));
export const FrontError = makeAsyncComponent(() => import('../common/layouts/FrontError'));
