const { Router } = require("express");
const KPI = require("../models/kpi.model");
const kpiRouter = Router();

kpiRouter.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    return res.status(200).json(kpis);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

module.exports = kpiRouter;
