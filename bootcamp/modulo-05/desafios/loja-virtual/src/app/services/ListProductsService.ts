import { productsRepository } from '../../infra/db/sequelize/repositories/ProductRepository';

class ListProductsService {
  async execute(id: string) {
    const products = await productsRepository.list(id);
    return products;
  }
}

const listProductsService = new ListProductsService();

export { listProductsService };