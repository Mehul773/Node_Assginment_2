const express = require("express");
const router = express.Router();

router.get("/create", (req, res) => {
  // Display form for creating user and navigation links
  res.send(`
          <h2>Create User:</h2>
          <form action="/add" method="post">
              <label for="userName">User Name:</label>
              <input type="text" id="userName" name="userName" required>
              <button type="submit">Submit</button>
          </form>
          <a href="/">Home</a>
          <a href="/users">View Users</a>
      `);
});

module.exports = router;
