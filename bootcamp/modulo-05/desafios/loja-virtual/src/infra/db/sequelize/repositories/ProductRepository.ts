import { IProductRequest, IProductResponse, IProductsRepository } from "../../../../app/repositories/IProductsRepository";
import { ProductModel } from "../Models/Products";

class ProductsRepository implements IProductsRepository {
  async listAll(): Promise<IProductResponse[]> {
    const products = await ProductModel.findAll();
    return products.map(item => {
      return {
        id: item.dataValues.id,
        name: item.dataValues.name,
        price: item.dataValues.price,
        id_image: item.dataValues.id_image
      }
    });
  }

  async create(data: IProductRequest): Promise<void> {
    await ProductModel.create({
      id: data.id,
      name: data.name,
      price: data.price,
      id_image: data.id_image
    });
  }
}

const productsRepository = new ProductsRepository();

export { productsRepository };