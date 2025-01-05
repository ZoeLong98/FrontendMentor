export interface DetailPageProps {
  item: {
    id: number;
    slug: string;
    name: string;
    image: { desktop: string; tablet: string; mobile: string };
    category: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: { quantity: number; item: string }[];
    gallery: {
      first: { desktop: string; tablet: string; mobile: string };
      second: { desktop: string; tablet: string; mobile: string };
      third: { desktop: string; tablet: string; mobile: string };
    };
    others: {
      slug: string;
      name: string;
      image: { desktop: string; tablet: string; mobile: string };
    }[];
  };
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  categoryImage: { desktop: string; tablet: string; mobile: string };
  image: { desktop: string; tablet: string; mobile: string };
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { desktop: string; tablet: string; mobile: string };
    second: { desktop: string; tablet: string; mobile: string };
    third: { desktop: string; tablet: string; mobile: string };
  };
  others: {
    slug: string;
    name: string;
    image: { desktop: string; tablet: string; mobile: string };
  }[];
}

export interface CartItem {
  id: number;
  name: string;
  amount: number;
  price: number;
  image: string;
}
