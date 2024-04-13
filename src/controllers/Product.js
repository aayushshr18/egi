const Product = require("../model/Product");
const User = require("../model/UserAuth");


exports.createProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body, userId: req.user.id });
    const savedProd = await product.save(); // Await the save operation
    res.json({ status: true, savedProd });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const { name } = req.query;
    const query = { userId: req.user.id };
    if (name) {
      query.name = { $regex: new RegExp(name, 'i') };
    }

    const products = await Product.find(query);

    res.json({ status: true, products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};

exports.productDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found", status: false });
    }
    res.json({ status: true, product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found", status: false });
    }
    res.json({ status: true, product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }

}


exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found", status: false });
    }
    res.json({ status: true, message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};

