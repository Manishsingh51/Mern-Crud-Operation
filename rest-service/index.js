const express = require("express");
const mongoose = require("mongoose");
const Item = require("./item.js");
const item = require("./item.js");
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

// get test api
app.get("/", (req, res) => {
  res.send("Welcome in Node.js Serverrrr...");
});


//get items api
app.get("/getItem", async (req, res) => {

  //if we want to get items by id then use ('/get-item/:id).
  const item = await Item.find({});
  try {
    res.status(200).json({
      status: "Success",
      data: {
        item,
        count: item.length
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});


//post api

app.post("/api/items", async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).json({
      status: "Success",
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

//delete api

app.delete("/delete-item/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);

  try {
    res.status(204).json({
      status: "Success",
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

//update api

app.put("/update-item/:id", async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,  //for use to get new date after update
    runValidators: true,
  });
  try {
    res.status(200).json({
      status: "Success",
      data: {
        updatedItem,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});


//mongodb connection

mongoose
  .connect(
    "mongodb+srv://manishsingh2782001:3OIv31XoJc2bakG1@cluster0.rrscj.mongodb.net/crud_operation?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(() => {
    console.log("connection failed!");
  });
  

//port
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
