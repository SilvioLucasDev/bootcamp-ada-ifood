import { IProductRequest, IProductResponse, IProductsRepository } from "../../../../app/repositories/IProductsRepository";
import { ProductModel } from "../Models/Products";
import { ImageModel } from "../Models/Images";

class ProductsRepository implements IProductsRepository {
  async list(id: string): Promise<any> {
    const product = await ProductModel.findOne({
      where: { id },
      include: {
        model: ImageModel
      }
    });

    return {
      id: product?.dataValues.id,
      name: product?.dataValues.name,
      price: product?.dataValues.price,
      image: product?.dataValues.image
    }
  }
  async listAll(): Promise<IProductResponse[]> {
    const products = await ProductModel.findAll({
      include: {
        model: ImageModel
      }
    });

    return products.map(item => {
      return {
        id: item.dataValues.id,
        name: item.dataValues.name,
        price: item.dataValues.price,
        image: item.dataValues.image
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