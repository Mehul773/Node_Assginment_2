const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  // Display greeting and navigation links
  res.send(`
          <h1>Welcome to User Management System!</h1>
          <a href="/users">View Users</a>
          <a href="/create">Create User</a>
      `);
});
module.exports = router;
