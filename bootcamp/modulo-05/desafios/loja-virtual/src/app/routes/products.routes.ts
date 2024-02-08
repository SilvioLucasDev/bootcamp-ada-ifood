import { Router } from 'express';
import { productsController } from '../controllers/ProductsController';
import { validateSchema } from './middlewares/validationSchemaMiddleware';
import { createProductSchema } from './schemas/createProductSchema';

const productsRoutes = Router();

productsRoutes.get('/products', productsController.listAll);
productsRoutes.get('/products/:id', productsController.list);
productsRoutes.post('/products', validateSchema(createProductSchema), productsController.create);

export { productsRoutes };