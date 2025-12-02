const express = require("express");
const router = express.Router();
const Point = require("../models/Point");

router.get("/", async (req, res) => {
  const points = await Point.find();
  res.json(points);
});

router.post("/", async (req, res) => {
  const { lat, lng, description } = req.body;
  
  const point = await Point.create({ lat, lng, description });
  res.json(point);
});

module.exports = router;
