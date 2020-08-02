var express = require("express");
var app = express();

app.get("/xolb", (req, res, next) => {
 res.json({"id":1, "name":"Usama", "description":"Hero"});
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
 console.log("Type < http://localhost:3000/xolb > in your browser");
});