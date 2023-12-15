const express = require("express");
const fs = require("fs");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Read the products data from the JSON file
const productsData = fs.readFileSync("src/node-api/products.json");
let products = JSON.parse(productsData);

// GET a specific product by ID
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  if (!product) return res.status(404).send({ error: "Product not found" });
  res.status(200).json(product);
});

// POST a new product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  // Assuming products have unique IDs; you might want to handle ID generation
  products.push(newProduct);
  fs.writeFileSync("src/node-api/products.json", JSON.stringify(products)); // Update the JSON file
  res.status(201).json(newProduct); // Respond with the newly created product
});

// PUT/UPDATE an existing product by ID
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  const index = products.findIndex((product) => product.id == id);
  if (index === -1) {
    return res.status(404).send({ error: "Product not found" });
  }
  products[index] = { ...products[index], ...updatedProduct };
  fs.writeFileSync("src/node-api/products.json", JSON.stringify(products)); // Update the JSON file
  res.status(200).json(products[index]); // Respond with the updated product
});

// DELETE a product by ID
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id == id);
  if (index === -1) {
    return res.status(404).send({ error: "Product not found" });
  }
  const deletedProduct = products.splice(index, 1)[0];
  fs.writeFileSync("src/node-api/products.json", JSON.stringify(products)); // Update the JSON file
  res.status(200).json(deletedProduct); // Respond with the deleted product
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
