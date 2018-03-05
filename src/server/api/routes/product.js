import { Router } from 'express';
import * as productsController from '../controllers/product';

const router = new Router();

router.route('/products/getAll').get(productsController.getProducts);

export default router;
