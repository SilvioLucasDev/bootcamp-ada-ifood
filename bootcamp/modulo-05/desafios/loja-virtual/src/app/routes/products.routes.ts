import { Router } from 'express';
import { productsController } from '../controllers/ProductsController';

const productsRoutes = Router();

productsRoutes.get('/products', productsController.listAll);
productsRoutes.post('/products', productsController.create);

export { productsRoutes };