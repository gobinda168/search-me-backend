import express, { Express } from "express";
import dotenv from "dotenv";
import searchAPIRouter from "./routes/searchRouter";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use("/api/search", searchAPIRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
