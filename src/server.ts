import cors from "cors";
import express from "express";
import { categoriesRouter } from "./routes/categories";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "OK" });
});

app.use("/api/v1/categories", categoriesRouter);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});


