const express = require("express");
const routerV1 = new express.Router();
const userAuth = require("../controllers/Authorization");
const product= require("../controllers/Product");


//user auth
routerV1.get("/user",userAuth.userDetails);
routerV1.patch("/user",userAuth.updateUser);
routerV1.delete("/user",userAuth.deleteUser);


routerV1.post("/product",product.createProduct);
routerV1.get("/allproduct",product.getAllProducts);
routerV1.get("/product/:id",product.productDetails);
routerV1.patch("/product/:id",product.updateProduct);
routerV1.delete("/product/:id",product.deleteProduct);

module.exports = routerV1;