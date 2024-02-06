import { productsRepository } from '../../infra/db/sequelize/repositories/ProductRepository';

class ListAllProductsService {
  async execute() {
    const products = await productsRepository.listAll();
    return products;
  }
}

const listAllProductsService = new ListAllProductsService();

export { listAllProductsService };