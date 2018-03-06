const express = require('express');

const app = new express();
const port = process.env.PORT || 4202;

app.use(express.static(__dirname + "/public"));
app.listen(port);

console.log ("server is now up at port " + port);
