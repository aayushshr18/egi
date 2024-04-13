const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: { type: Number },
  profileType: { type: String },
  orders: { type: Array },
  city: { type: String },
  state: { type: String },
  address: { type: String },
  country: { type: String },
  cart: { type: Array },
  pinCode: { type: Number },
  rewards: { type: Number },
  profileType: { type: String, enum: ["Customer", "Vendor", "Inspector"] },
  //Vendor Details to be Added



  //Inpector Details to be Added



  createdDate: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
