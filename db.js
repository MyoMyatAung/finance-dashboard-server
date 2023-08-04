const mongoose = require("mongoose");
function connect() {
  try {
    const conn = mongoose.createConnection(process.env.MONGO_URI);
    console.log("MONGO DB CONNECTED");
    return conn;
  } catch (error) {
    console.log("ERROR DB CONNECT: ", error);
    process.exit(1);
  }
}

module.exports = connect;
