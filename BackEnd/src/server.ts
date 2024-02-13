import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
const app = express();
import morgan from "morgan";
import { connect } from "mongoose";
import transactionRouter from "./routes/transactionRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/transactions", transactionRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  // @ts-ignore
  const statusCode = err.statusCode || 500;
  const msg = err.message || "something went wrong, try again later";
  res.status(statusCode).send({ msg });
});

const PORT = process.env.PORT || 3000;
try {
  await connect(`${process.env.MONGO_URL}`);
  console.log("connected to DB successfully ...");
  app.listen(PORT, () => {
    console.log(
      `server running on PORT ${PORT} ... <http://localhost:${PORT}/>`
    );
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
