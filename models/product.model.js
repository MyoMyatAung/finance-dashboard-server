const mongoose = require("mongoose");
const { loadType } = require("mongoose-currency");

loadType(mongoose);

const productSchema = new mongoose.Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    transactions: [{ type: mongoose.Types.ObjectId, ref: "Transaction" }],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
