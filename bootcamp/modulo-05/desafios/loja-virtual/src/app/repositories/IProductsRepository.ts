export interface IProductRequest {
  id: string;
  name: string;
  price: number;
  id_image: string;
}

export interface IProductResponse {
  id: string;
  name: string;
  price: string;
  id_image: string;
}

export interface IProductsRepository {
  listAll(): Promise<IProductResponse[]>;
  create(data: IProductRequest): Promise<void>;
}