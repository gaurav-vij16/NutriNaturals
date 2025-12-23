import Logo from "@/../public/Logo.png";
import { StaticImageData } from "next/image";

export interface Product {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: StaticImageData;
  Tags: string; // category: Hot Selling / Moderate Selling / Low Selling
}

const products: Product[] = [
  {
    name: "MP Atta",
    description: "Premium quality MP wheat flour for soft and healthy rotis.",
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.6,
    reviews: 128,
    image: Logo,
    Tags: "Hot Selling",
  },
  {
    name: "Sugar-Free Atta",
    description: "Specially crafted atta without wheat, ideal for diabetics.",
    price: 449,
    originalPrice: 549,
    discount: 18,
    rating: 4.7,
    reviews: 94,
    image: Logo,
    Tags: "Hot Selling",
  },
  {
    name: "Multigrain Atta",
    description: "A nutritious blend of multiple grains for balanced meals.",
    price: 429,
    originalPrice: 529,
    discount: 19,
    rating: 4.8,
    reviews: 156,
    image: Logo,
    Tags: "Hot Selling",
  },
  {
    name: "Ragi Atta",
    description: "High-fiber ragi flour, perfect for diabetics and weight control.",
    price: 419,
    originalPrice: 519,
    discount: 19,
    rating: 4.9,
    reviews: 203,
    image: Logo,
    Tags: "Protein",
  },
  {
    name: "Jowar Atta",
    description: "Gluten-free jowar flour for light and healthy digestion.",
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.6,
    reviews: 87,
    image: Logo,
    Tags: "Diabetic",
  },
  {
    name: "Bajra Atta",
    description: "Iron-rich bajra flour, great for energy and immunity.",
    price: 389,
    originalPrice: 479,
    discount: 19,
    rating: 4.5,
    reviews: 72,
    image: Logo,
    Tags: "Other",
  },
  {
    name: "Bajra Atta (Without Chilka)",
    description: "Smooth-textured bajra atta without husk for easy digestion.",
    price: 429,
    originalPrice: 529,
    discount: 19,
    rating: 4.7,
    reviews: 61,
    image: Logo,
    Tags: "Diabetic",
  },
  {
    name: "Chana Atta",
    description: "Protein-rich chana flour for healthy and filling meals.",
    price: 449,
    originalPrice: 549,
    discount: 18,
    rating: 4.8,
    reviews: 133,
    image: Logo,
    Tags: "Protein",
  },
  {
    name: "Pure Besan",
    description: "Finely ground pure besan, perfect for snacks and cooking.",
    price: 459,
    originalPrice: 559,
    discount: 18,
    rating: 4.7,
    reviews: 110,
    image: Logo,
    Tags: "Other",
  },
  {
    name: "Oats Atta",
    description: "High-fiber oats flour for heart health and weight management.",
    price: 469,
    originalPrice: 569,
    discount: 18,
    rating: 4.6,
    reviews: 89,
    image: Logo,
    Tags: "Other",
  },
  {
    name: "Weight Management Atta",
    description: "Specially formulated atta to support healthy weight loss.",
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.8,
    reviews: 145,
    image: Logo,
    Tags: "Hot Selling",
  },
  {
    name: "Low Gluten Atta",
    description: "Low-gluten flour for easier digestion and gut health.",
    price: 489,
    originalPrice: 589,
    discount: 17,
    rating: 4.5,
    reviews: 67,
    image: Logo,
    Tags: "Diabetic",
  },
  {
    name: "Gluten-Free Atta",
    description: "100% gluten-free flour, safe for gluten-sensitive diets.",
    price: 529,
    originalPrice: 649,
    discount: 18,
    rating: 4.9,
    reviews: 178,
    image: Logo,
    Tags: "Hot Selling",
  },
];

export default products;
