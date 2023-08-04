require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connect = require("./db");
const kpiRouter = require("./routes/kpi.routes");

/** CONFIGURATION */
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("common"));

/** DB CONNECTION */
connect();

/** ROUTES */
app.use("/api/v1", kpiRouter);

/** APPLICATION */
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});
