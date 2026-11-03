// routes/productroutes.js
// Only connects URLs to controller functions. No logic here.

const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");

router.get("/", getAllProducts);        // get all products
router.post("/", createProduct);        // create a product
router.get("/:id", getProductById);     // get one product
router.put("/:id", replaceProduct);     // replace a product
router.patch("/:id", updateProduct);    // update part of a product
router.delete("/:id", deleteProduct);   // delete a product

module.exports = router;
