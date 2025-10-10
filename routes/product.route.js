import express from "express";
// import Product from "../models/product.model.js";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

// get all
router.get("/", getProducts);
// get one
router.get("/:id", getProduct);
// add one
router.post("/", createProduct);
// update one
router.put("/:id", updateProduct);
// delete one
router.delete("/:id", deleteProduct);

export default router;
