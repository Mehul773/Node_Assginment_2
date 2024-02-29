const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

router.get("/users", async (req, res) => {
  try {
    // Read user data from file
    const data = await fs.readFile("users.txt", "utf8");
    const users = data.split("\n").filter(Boolean);
    if (users.length === 0) {
      // Redirect to create page if no users
      res.redirect("/create");
      return;
    }
    // Display users and navigation links
    res.send(`
              <h2>Users:</h2>
              <ul>
                  ${users.map((user) => `<li>${user}</li>`).join("")}
              </ul>
              <a href="/">Home</a>
              <a href="/create">Create User</a>
          `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
