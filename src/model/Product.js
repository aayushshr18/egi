const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  status: { type: String, enum: ["pending", "inprogress", "verified"] },
  images: { type: Array },
  mrp: { type: Number },
  egi: { type: Number },
  userId:{type:String},

  ee: { type: Number },
  nrc: { type: Number },
  eol: { type: Number },
  ap: { type: Number },

  rewards: { type: Number },
  updatedDate: { type: Date },
  createdDate: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
