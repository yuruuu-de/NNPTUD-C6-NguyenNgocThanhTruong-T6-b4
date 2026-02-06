import type { Product } from "../types";

// NOTE: File products mẫu để phục vụ endpoint:
// GET /api/v1/categories/:id/products
export const products: Product[] = [
  {
    id: 101,
    title: "Basic T-Shirt",
    price: 15,
    description: "Cotton t-shirt, regular fit.",
    images: ["https://i.imgur.com/QkIa5tT.jpeg"],
    categoryId: 7,
    creationAt: "2026-02-06T00:00:00.000Z",
    updatedAt: "2026-02-06T00:00:00.000Z"
  },
  {
    id: 102,
    title: "Slim Jeans",
    price: 35,
    description: "Dark blue slim jeans.",
    images: ["https://i.imgur.com/QkIa5tT.jpeg"],
    categoryId: 7,
    creationAt: "2026-02-06T00:00:00.000Z",
    updatedAt: "2026-02-06T00:00:00.000Z"
  },
  {
    id: 201,
    title: "Wireless Headphones",
    price: 59,
    description: "Bluetooth headphones with noise isolation.",
    images: ["https://i.imgur.com/ZANVnHE.jpeg"],
    categoryId: 8,
    creationAt: "2026-02-06T00:00:00.000Z",
    updatedAt: "2026-02-06T00:00:00.000Z"
  },
  {
    id: 202,
    title: "Mechanical Keyboard",
    price: 79,
    description: "Compact 68-key mechanical keyboard.",
    images: ["https://i.imgur.com/ZANVnHE.jpeg"],
    categoryId: 8,
    creationAt: "2026-02-06T00:00:00.000Z",
    updatedAt: "2026-02-06T00:00:00.000Z"
  },
  {
    id: 301,
    title: "Wooden Chair",
    price: 40,
    description: "Simple wooden chair for dining room.",
    images: ["https://i.imgur.com/Qphac99.jpeg"],
    categoryId: 9,
    creationAt: "2026-02-06T00:00:00.000Z",
    updatedAt: "2026-02-06T00:00:00.000Z"
  },
  {
    id: 401,
    title: "Running Shoes",
    price: 45,
    description: "Lightweight shoes for daily running.",
    images: ["https://i.imgur.com/qNOjJje.jpeg"],
    categoryId: 10,
    creationAt: "2026-02-06T00:00:00.000Z",
    updatedAt: "2026-02-06T00:00:00.000Z"
  }
];


