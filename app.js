
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require('path');
const port = 3000;

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

  app.get('/resume', (req, res) => {
    const resumePath = path.join(__dirname, 'public', 'resume', 'Resume_CV');
    res.download(resumePath);
  });

app.get("*", function (req, res) {
    res.redirect("https://www.gmail.com/")
  });

app.listen(port, function () {
    console.log("The server is running on the port " + port);
  });