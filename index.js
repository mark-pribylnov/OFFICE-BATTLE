// Tutorial: https://www.youtube.com/watch?v=_7UQPve99r4

import express from "express";
import mongoose from "mongoose";
// import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";

const app = express();

// MIDDLEWARE
// allow using JSON when recieving data
app.use(express.json());
// allow using urlelcoded (I don't know what's that yet). Seems like sending data with html forms
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/products", productRoute);

const SERVER_PORT = 3000;

const ATLAS_PASSWORD = "MongoDB_99911011";
const ATLAS_COLLECTION_NAME = "Node_API";

const DB_LOCALHOST = `mongodb://localhost:27017/${ATLAS_COLLECTION_NAME}?retryWrites=true`;

const ATLAS_URL = `mongodb+srv://mark-pribylnov:${ATLAS_PASSWORD}@backenddb.incy2iv.mongodb.net/${ATLAS_COLLECTION_NAME}?retryWrites=true&w=majority&appName=BackendDB`;

app.get("/", (req, res) => {
  res.send("Server is running");
});

// //  get all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// get a product by id
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// add a product
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// update a product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) return res.status(404).json({ message: "Product not found" });

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// delete a product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id, req.body);

//     if (!product) return res.status(404).json({ message: "Product not found" });

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  // .connect(ATLAS_URL)
  .connect(DB_LOCALHOST)
  .then(() => {
    console.log("Connected to database!");
    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection to database failed");
  });

// PASSWORD DON'T UPLOAD TO GITHUB

// mongodb+srv://mark-pribylnov:MongoDB_99911011@backenddb.incy2iv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://mark-pribylnov:MongoDB_99911011@backenddb.incy2iv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
