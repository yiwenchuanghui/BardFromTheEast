const express = require("express");

const app = express();

app.use(express.static("client/build"));

// Express will serve up index.html file
// if it doesnt recognize the route

if (process.env.NODE_ENV === "production") {
  // express will serve up production assets
  // Like our main.js file, or main.css file
  app.use(express.static("client/build"));

  // Express will serve up index.html file
  // if it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
