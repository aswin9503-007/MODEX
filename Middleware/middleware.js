const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Built-in middleware
app.use(express.json());

// Third-party middleware
app.use(cors());
app.use(morgan("dev"));

// Application-level middleware
app.use((req, res, next) => {
    console.log("Application-level middleware");
    next();
});

// Router-level middleware
const router = express.Router();

router.use((req, res, next) => {
    console.log("Router-level middleware");
    next();
});

router.get("/test", (req, res) => {
    res.send("Router Test");
});

app.use("/api", router);

// Error-handling middleware
app.use((err, req, res, next) => {
    res.status(500).send("Error: " + err.message);
});

app.listen(3000, () => console.log("Server running"));
