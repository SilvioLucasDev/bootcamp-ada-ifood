import { v4 as uuid } from 'uuid';
import { productsRepository } from '../../infra/db/sequelize/repositories/ProductRepository';

interface Request {
  name: string;
  price: number;
  id_image: string;
}

class CreateProductsService {
  async execute({ name, price, id_image }: Request) {
    const newProduct = {
      id: uuid(),
      name,
      price,
      id_image
    }

    await productsRepository.create(newProduct);
  }
}

const createProductsService = new CreateProductsService();

export { createProductsService };