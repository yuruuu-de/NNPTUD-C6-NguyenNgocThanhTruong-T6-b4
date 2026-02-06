import type { Category, Product } from "../types";
import { HttpClient } from "./http";

export type ApiEnvelope<T> = { data: T };

export type CreateCategoryInput = Pick<Category, "name" | "slug" | "image">;
export type EditCategoryInput = Partial<CreateCategoryInput>;

export function createCategoriesApi(baseUrl = "http://localhost:3000") {
  const http = new HttpClient({ baseUrl });

  return {
    // getAll (query theo name)
    getAll: (name?: string) => {
      const qs = name ? `?name=${encodeURIComponent(name)}` : "";
      return http.request<ApiEnvelope<Category[]>>("GET", `/api/v1/categories${qs}`);
    },

    getById: (id: number) =>
      http.request<ApiEnvelope<Category>>("GET", `/api/v1/categories/${id}`),

    getBySlug: (slug: string) =>
      http.request<ApiEnvelope<Category>>("GET", `/api/v1/categories/slug/${slug}`),

    create: (input: CreateCategoryInput) =>
      http.request<ApiEnvelope<Category>>("POST", "/api/v1/categories", input),

    edit: (id: number, input: EditCategoryInput) =>
      http.request<ApiEnvelope<Category>>("PUT", `/api/v1/categories/${id}`, input),

    delete: (id: number) =>
      http.request<ApiEnvelope<Category>>("DELETE", `/api/v1/categories/${id}`),

    // GET /api/v1/categories/{id}/products
    getProductsByCategoryId: (id: number) =>
      http.request<ApiEnvelope<Product[]>>("GET", `/api/v1/categories/${id}/products`)
  };
}


