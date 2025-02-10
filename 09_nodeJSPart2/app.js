import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/database.js";
import userRouter from "./routes/user.js";
const app = express();

dotenv.config();

connectDB();

app.use(express.json()); // middle-wares
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

// http://localhost:8000/api/v1/user

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
