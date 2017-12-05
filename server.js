var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/demoController.js");
app.use("/", routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Listening on port: %s", PORT);
});
