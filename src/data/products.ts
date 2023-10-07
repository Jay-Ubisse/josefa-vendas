import AvonLogo from "../assets/img/products/avon-logo.png";
import TupperwareLogo from "../assets/img/products/tupperware.svg";

export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  brand: string;
  category: string;
  price: string;
};

export const products: Product[] = [
  {
    id: 11,
    name: "Base Líquida Avon",
    brand: "Avon",
    description:
      "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: AvonLogo,
    category: "Maquiagem",
    price: "150,00 MT",
  },
  {
    id: 12,
    name: "Musk Fresh",
    brand: "Avon",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: AvonLogo,
    category: "Perfumes",
    price: "150,00 MT",
  },
  {
    id: 13,
    name: "Avon Care Age",
    brand: "Avon",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: AvonLogo,
    category: "Cremes",
    price: "150,00 MT",
  },
  {
    id: 16,
    name: "Eco Tupper Redonda Plus",
    brand: "Tupperware",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: TupperwareLogo,
    category: "Bebedores",
    price: "150,00 MT",
  },
  {
    id: 15,
    name: "Tigela Toque Mágico 550ml",
    brand: "Tupperware",
    description:
      "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: TupperwareLogo,
    category: "Tigelas",
    price: "150,00 MT",
  },
  {
    id: 17,
    name: "Colher Compact",
    brand: "Tupperware",
    description:
      "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: TupperwareLogo,
    category: "Utensílios",
    price: "150,00 MT",
  },
  {
    id: 14,
    name: "Abridor de garrafas",
    brand: "Tupperware",
    description:
    "Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto. Descrição do produto.",
    imageUrl: TupperwareLogo,
    category: "Utensílios",
    price: "150,00 MT",
  },
];

export const cart = [];
