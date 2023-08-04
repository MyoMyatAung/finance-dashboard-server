const mongoose = require("mongoose");
const { loadType } = require("mongoose-currency");

loadType(mongoose);

const transactionSchema = new mongoose.Schema(
  {
    buyer: String,
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
