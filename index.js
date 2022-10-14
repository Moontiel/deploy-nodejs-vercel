let express = require("express");
let app = express();
let port = process.env.PORT || 3000;

let path = require("path");

app.use(express.static(path.join(__dirname, "./src")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

const r_views = require("./src/routes/r-views");

app.use("", r_views);

app.listen(port, (err) => {
	err ? console.log("server no found") : console.log("server ok");
});
