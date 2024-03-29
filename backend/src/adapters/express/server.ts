import "dotenv/config";
import expres, { Application, NextFunction, Request, Response } from "express";
import { userRouter } from "./routes/userRouter";
import connectToDatabase from "../../infrastructure/database/database";
import { authRouter } from "./routes/authRoute";
import cors from 'cors'
import morgan from 'morgan'

const app: Application = expres();

connectToDatabase();

app.use(expres.json());
app.use(morgan('dev'))
app.use(
  cors({
    origin:"http://localhost:5173",
    optionsSuccessStatus:200
  })
)

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
