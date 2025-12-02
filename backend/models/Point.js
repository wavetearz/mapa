const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  lat: { type: Number, default: "" },
  lng: { type: Number, default: "" },
  description: { type: String, default: "" }
});

module.exports = mongoose.model("Point", PointSchema);
