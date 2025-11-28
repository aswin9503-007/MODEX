const express = require("express");
const app = express();

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "User 4" },
  { id: 5, name: "User 5" },
  { id: 6, name: "User 6" },
  { id: 7, name: "User 7" },
  { id: 8, name: "User 8" },
  { id: 9, name: "User 9" },
  { id: 10, name: "User 10" },
  { id: 11, name: "User 11" },
];

app.get("/users", (req, res) => {
  let page = parseInt(req.query.page) || 1;   // default page = 1
  let limit = parseInt(req.query.limit) || 5; // default limit = 5

  let start = (page - 1) * limit;
  let end = start + limit;

  const paginatedData = users.slice(start, end);

  res.json({
    page,
    limit,
    total: users.length,
    totalPages: Math.ceil(users.length / limit),
    data: paginatedData,
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
