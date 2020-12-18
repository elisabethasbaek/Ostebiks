require("dotenv").config();
var express = require("express");
var app = express();
var formidable = require("express-formidable");
var cors = require("cors");

require("./database");
app.use(cors());
app.use(formidable());

require("./cheese.route")(app);

app.listen(process.env.PORT || 6666, function() {
	console.log("Suck my dick on port", process.env.PORT || 6666);
});
