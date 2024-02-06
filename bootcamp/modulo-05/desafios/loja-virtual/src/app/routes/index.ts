import { Router } from 'express';
import { productsRoutes } from './products.routes';

const routes = Router();

routes.use(productsRoutes);

export { routes };