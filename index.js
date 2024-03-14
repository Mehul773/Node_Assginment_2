const express = require("express");
const bodyParser = require("body-parser");

const homeRoute = require("./routes/homeRoute");
const usersRoute = require("./routes/usersRoute");
const createUserRoute = require("./routes/createUserRoute");
const addUserRoute = require("./routes/addUserRoute");

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Custom middleware for print method and url in all request
app.use((req, res, next) => {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next();
});

//Home Route
app.use("/", homeRoute);

// Users route
app.get("/users", usersRoute);

// Create route
app.get("/create", createUserRoute);

// Add route (for adding a user)
app.post("/add", addUserRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} open http://localhost:3000/`);
});
