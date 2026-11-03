// controllers/productcontroller.js
// Controllers handle the request and response.
// They read what the user sent, call the service, and send back an answer.

const mongoose = require("mongoose");
const productService = require("../services/productservice");

// Checks that an id looks like a real MongoDB id
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const { manufacturer, size } = req.query;
    const products = await productService.getAllProducts(manufacturer, size);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: "Invalid product id" });

    const product = await productService.getProductById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/products
const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    // 400 because the user sent bad or missing data
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/products/:id
const replaceProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: "Invalid product id" });

    const product = await productService.replaceProduct(id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PATCH /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: "Invalid product id" });

    const product = await productService.updateProduct(id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: "Invalid product id" });

    const product = await productService.deleteProduct(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
