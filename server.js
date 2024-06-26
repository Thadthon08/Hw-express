const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Born To Dev! ");
});

app.get("/products", (req, res) => {
  res.send("Display all products");
});

app.post("/products", (req, res) => {
  res.send("Add a product");
});

app.put("/products", (req, res) => {
  res.send("Update a product");
});

app.delete("/products", (req, res) => {
  res.send("Delete a product");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
