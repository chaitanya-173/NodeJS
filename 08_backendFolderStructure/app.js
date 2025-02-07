import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoute from "./routes/user.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);  // /api/v1/user/register  /api/v1/user/login

app.use(function (req, res, next) {
  console.log("Middleware is called");
  next();
});

app.get("/", (req, res) => {
  console.log("Home page is called");
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
