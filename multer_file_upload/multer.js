const express = require("express");
const multer = require("multer");
const app = express();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Single file upload route
app.post("/upload", upload.single("myfile"), (req, res) => {
  res.send("File uploaded successfully!");
});

// Server
app.listen(3000, () => console.log("Server running on port 3000"));
