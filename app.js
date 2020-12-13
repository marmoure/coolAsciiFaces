require("dotenv").config();

const express = require("express");
const cool = require("cool-ascii-faces");


const app = express();

app.use((req, res, next) => {
    console.log("gotten a request ");
    next();
  })
  

app.use((req, res, next) => {
    res.send(cool());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
