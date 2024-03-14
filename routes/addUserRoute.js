const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

router.post("/add", async (req, res) => {
  const { userName } = req.body;
  try {
    // Append new user to file
    await fs.appendFile("users.txt", `${userName}\n`);
    // Redirect to users page
    res.redirect("/users");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
