# NNPTUD-C6-NguyenNgocThanhTruong-T6-b4

## Thông tin sinh viên

- **Họ tên**: Nguyen Ngoc Thanh Truong
- **MSSV**: 2280603492
- **Bài nộp**: Cá nhân

## Mô tả

REST API (Express + TypeScript) cho `categories` và endpoint:

- `GET /api/v1/categories` (có truy vấn theo `name`)
- `GET /api/v1/categories/:id`
- `GET /api/v1/categories/slug/:slug`
- `POST /api/v1/categories`
- `PUT /api/v1/categories/:id`
- `DELETE /api/v1/categories/:id`
- `GET /api/v1/categories/:id/products` (trả về toàn bộ products trong file có `categoryId` tương ứng)

## Cách chạy

```bash
npm install
npm run dev
```

Mặc định chạy ở `http://localhost:3000`.

## Ví dụ gọi API nhanh

```bash
# getAll (query theo name)
curl "http://localhost:3000/api/v1/categories?name=cloth"

# getById
curl "http://localhost:3000/api/v1/categories/7"

# getBySlug
curl "http://localhost:3000/api/v1/categories/slug/clothes"

# get products theo category id
curl "http://localhost:3000/api/v1/categories/7/products"
```

## Các hàm HTTP Request (theo đề)

- File: `src/client/categoriesApi.ts`
- Gồm: `getAll`, `getById`, `getBySlug`, `create`, `edit`, `delete`, `getProductsByCategoryId`
