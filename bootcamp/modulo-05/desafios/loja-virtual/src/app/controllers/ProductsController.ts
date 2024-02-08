import { Request, Response } from "express";
import { listAllProductsService } from "../services/ListAllProductsService";
import { createProductsService } from "../services/CreateProductsService";
import { listProductsService } from "../services/ListProductsService";

class ProductsController {
  async list(req: Request, res: Response) {
    const { id } = req.params;
    const products = await listProductsService.execute(id);
    res.send(products);
    }
  
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