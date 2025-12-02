const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pointsRouter = require("./routes/points");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:XwXI5pi9XZDg6XLK@map-cluster.pyclnzd.mongodb.net/?appName=map-cluster");

app.use("/points", pointsRouter);

app.listen(4000, () => console.log("backend working"));
