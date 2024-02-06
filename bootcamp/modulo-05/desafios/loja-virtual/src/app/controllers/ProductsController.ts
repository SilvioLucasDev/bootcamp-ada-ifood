import { Request, Response } from "express";
import { listAllProductsService } from "../services/ListAllProductsService";
import { createProductsService } from "../services/CreateProductsService";

class ProductsController {
  async listAll(req: Request, res: Response) {
    const products = await listAllProductsService.execute();
    res.send(products);
  }

  async create(req: Request, res: Response) {
    const { name, price, id_image } = req.body;
    await createProductsService.execute({ name, price, id_image });
    res.status(201).send();
  }
}

const productsController = new ProductsController();

export { productsController };