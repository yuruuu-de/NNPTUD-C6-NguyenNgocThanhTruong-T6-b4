export type IsoDateString = string;

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: IsoDateString;
  updatedAt: IsoDateString;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  categoryId: number;
  creationAt: IsoDateString;
  updatedAt: IsoDateString;
};


