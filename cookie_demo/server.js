const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// Read headers
app.get("/read-header", (req, res) => {
    const agent = req.headers["user-agent"];
    res.send("Your browser is: " + agent);
});

// Set cookie
app.get("/set-cookie", (req, res) => {
    res.cookie("id", "12345", { httpOnly: true });
    res.send("Cookie set!");
});

// Read cookie
app.get("/get-cookie", (req, res) => {
    res.send("Cookie ID: " + req.cookies.id);
});

// Delete cookie
app.get("/clear-cookie", (req, res) => {
    res.clearCookie("id");
    res.send("Cookie cleared!");
});

app.listen(3000, () => console.log("Server running"));
