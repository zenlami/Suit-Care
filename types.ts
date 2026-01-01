
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  isHot?: boolean;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}
