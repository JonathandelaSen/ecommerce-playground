import { Router } from 'express';
import { ProductsGetController } from './controllers/ProductsGetController';

export const register = (app: Router) => {
  const getController = new ProductsGetController();
  app.get('/products', getController.run.bind(getController));
};