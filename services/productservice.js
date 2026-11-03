// services/productservice.js
// The business logic: everything that talks to the database lives here.
// Controllers call these functions, so they never touch the database directly.

const Product = require("../models/productmodel");

// Builds a search that ignores capital letters ("nike" matches "Nike").
// The replace() stops special characters like * or ( from breaking the search.
const matchIgnoringCase = (text) =>
  new RegExp(`^${text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i");

// Get all products (optionally filtered by manufacturer and/or size)
const getAllProducts = async (manufacturer, size) => {
  const filter = {};
  if (manufacturer) filter.manufacturer = matchIgnoringCase(manufacturer);
  if (size) filter.size = matchIgnoringCase(size);
  return Product.find(filter);
};

// Get one product by its id
const getProductById = async (id) => {
  return Product.findById(id);
};

// Create a new product
const createProduct = async (data) => {
  return Product.create(data);
};

// PUT: replace the whole product (every required field must be sent)
const replaceProduct = async (id, data) => {
  return Product.findOneAndReplace({ _id: id }, data, {
    new: true,
    runValidators: true,
  });
};

// PATCH: update only the fields that were sent
const updateProduct = async (id, data) => {
  return Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Delete a product
const deleteProduct = async (id) => {
  return Product.findByIdAndDelete(id);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
