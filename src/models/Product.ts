export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  rating?: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}
