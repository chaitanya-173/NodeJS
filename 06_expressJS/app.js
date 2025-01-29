const express = require("express");

// 1st step to create a web server
const app = express();

app.get("/home", (req, res) => {
  res.send("<h1>Hello, This is HOME page</h1>");
});

app.get("/api/v1/user/profile", (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      username: "chaitanya987",
      email: "chaitanya1@gmail.com",
    },
  });
});

app.get("/api/v1/product/:productId/comment/:commentId", (req, res) => {
  // const id = req.params.productId;
  const { productId, commentId } = req.params; // Destructuring
  console.log(productId);
  console.log(commentId);

  const product = {
    id: 1,
    name: "Macbook M1 pro",
  };

  res.status(200).json({
    success: true,
    product,
  });
});

app.listen(8000, () => {
  console.log("Server listen at port 8000");
});
