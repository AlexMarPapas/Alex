
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000;

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });


  app.listen(port, function () {
    console.log("The server is running on the port " + port);
  });