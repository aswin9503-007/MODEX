const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/error", (req, res, next) => {
    next(new Error("Forced error"));
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({
        success: false,
        message: err.message,
    });
});

app.listen(3000, () => console.log("Server running"));
