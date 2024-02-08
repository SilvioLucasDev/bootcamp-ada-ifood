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
  image: any;
}

export interface IProductsRepository {
  listAll(): Promise<IProductResponse[]>;
  create(data: IProductRequest): Promise<void>;
}