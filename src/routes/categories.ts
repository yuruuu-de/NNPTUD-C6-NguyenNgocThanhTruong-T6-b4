import { Router } from "express";
import { categories } from "../data/categories";
import { products } from "../data/products";
import type { Category } from "../types";
import { nowIso } from "../utils/time";

type CreateCategoryBody = Partial<Pick<Category, "name" | "slug" | "image">>;

function nextCategoryId(): number {
  const maxId = categories.reduce((max, c) => Math.max(max, c.id), 0);
  return maxId + 1;
}

function parseId(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n) || n <= 0) return null;
  return n;
}

export const categoriesRouter = Router();

// GET /api/v1/categories?name=Clothes
categoriesRouter.get("/", (req, res) => {
  const nameQ = typeof req.query.name === "string" ? req.query.name.trim() : "";

  const data =
    nameQ.length === 0
      ? categories
      : categories.filter((c) => c.name.toLowerCase().includes(nameQ.toLowerCase()));

  return res.json({ data });
});

// GET /api/v1/categories/slug/:slug
categoriesRouter.get("/slug/:slug", (req, res) => {
  const slug = String(req.params.slug || "").trim();
  const found = categories.find((c) => c.slug === slug);
  if (!found) return res.status(404).json({ message: "Category not found" });
  return res.json({ data: found });
});

// GET /api/v1/categories/:id
categoriesRouter.get("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ message: "Invalid id" });

  const found = categories.find((c) => c.id === id);
  if (!found) return res.status(404).json({ message: "Category not found" });
  return res.json({ data: found });
});

// GET /api/v1/categories/:id/products
categoriesRouter.get("/:id/products", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ message: "Invalid id" });

  const cat = categories.find((c) => c.id === id);
  if (!cat) return res.status(404).json({ message: "Category not found" });

  const data = products.filter((p) => p.categoryId === id);
  return res.json({ data });
});

// POST /api/v1/categories
categoriesRouter.post("/", (req, res) => {
  const body: CreateCategoryBody = req.body ?? {};
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const slug = typeof body.slug === "string" ? body.slug.trim() : "";
  const image = typeof body.image === "string" ? body.image.trim() : "";

  if (!name || !slug || !image) {
    return res.status(400).json({ message: "name, slug, image are required" });
  }
  if (categories.some((c) => c.slug === slug)) {
    return res.status(409).json({ message: "slug already exists" });
  }

  const now = nowIso();
  const created: Category = {
    id: nextCategoryId(),
    name,
    slug,
    image,
    creationAt: now,
    updatedAt: now
  };
  categories.push(created);
  return res.status(201).json({ data: created });
});

// PUT /api/v1/categories/:id
categoriesRouter.put("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ message: "Invalid id" });

  const found = categories.find((c) => c.id === id);
  if (!found) return res.status(404).json({ message: "Category not found" });

  const body: CreateCategoryBody = req.body ?? {};
  const name = typeof body.name === "string" ? body.name.trim() : undefined;
  const slug = typeof body.slug === "string" ? body.slug.trim() : undefined;
  const image = typeof body.image === "string" ? body.image.trim() : undefined;

  if (slug && categories.some((c) => c.slug === slug && c.id !== id)) {
    return res.status(409).json({ message: "slug already exists" });
  }

  if (name !== undefined) found.name = name;
  if (slug !== undefined) found.slug = slug;
  if (image !== undefined) found.image = image;
  found.updatedAt = nowIso();

  return res.json({ data: found });
});

// DELETE /api/v1/categories/:id
categoriesRouter.delete("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ message: "Invalid id" });

  const idx = categories.findIndex((c) => c.id === id);
  if (idx === -1) return res.status(404).json({ message: "Category not found" });

  const deleted = categories.splice(idx, 1)[0];
  return res.json({ data: deleted });
});


