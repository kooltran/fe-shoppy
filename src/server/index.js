import express from 'express';
import path from 'path';
import config from 'config';

import { log } from './utils/logs';
import renderPageRoute from './utils/renderPageRoute';
import ProductsRoutes from './api/routes/product';
import sampleData from './mongoose/sampleData';

sampleData();

const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../../dist/bundles')));

app.use(
  '/api',
  ProductsRoutes,
);

app.get('*', renderPageRoute);

const server = app.listen(config.port, function () {
  console.log(`Server started on port ${server.address().port} in ${app.get('env')} mode`);
    log({
        title: 'Browser ready!',
        level: 'info',
        message: `Server started on port ${server.address().port} in ${app.get('env')} mode`,
        notify: true,
    });
});

export default server;
