const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3005; 

const productsData = require("../data/Products.JSON"); 

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(productsData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
