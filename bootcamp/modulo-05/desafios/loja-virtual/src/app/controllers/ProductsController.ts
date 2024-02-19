import { Request, Response } from "express";
import path from 'path';

import { createTemplate } from '../helpers/TemplateHelper';
import { listAllProductsService } from "../services/ListAllProductsService";
import { createProductsService } from "../services/CreateProductsService";
import { listProductsService } from "../services/ListProductsService";



class ProductsController {
  async list(req: Request, res: Response) {
    const { id } = req.params;
    const products = await listProductsService.execute(id);

    res.format({
      'application/json': () => {
        res.send(products);
      },
      'text/html': () => {
        const templatePath = path.resolve(__dirname, '..', '..', 'infra', 'templates', 'handlebars', 'product.hbs');
        const template = createTemplate(templatePath);
        res.send(template(products));
      }
    })
  }

  async listAll(req: Request, res: Response) {
    const products = await listAllProductsService.execute();

    res.format({
      "application/json": () => {
        res.send(products);
      },
      "text/html": () => {
        const templatePath = path.resolve(__dirname, '..', '..', 'infra', 'templates', 'handlebars', 'products.hbs');
        const template = createTemplate(templatePath);
        res.send(template(products));
      }
    })
  }

  async create(req: Request, res: Response) {
    const { name, price, id_image } = req.body;
    await createProductsService.execute({ name, price, id_image });
    res.status(201).send();
  }
}

const productsController = new ProductsController();

export { productsController };