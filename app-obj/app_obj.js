const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/login", (req, res) => {
    res.send("Login successful!");
});

const loggerMiddleware = (req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.path}`);
    next();
};

app.use(loggerMiddleware);

app.get("/about", (req, res) => {
    res.send("About Us");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});