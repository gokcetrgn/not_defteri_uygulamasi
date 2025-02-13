const express = require("express");
const dbs = require("./data/db");


const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));


const PORT = process.env.PORT || 3001;
app.use("/login", function(req, res){
    res.render("login");
});
app.use("/signup", function(req, res){
    res.render("signup");
});

app.use("/", function(req, res){
    dbs.execute("Select * from notes")
    .then
    (
        result=> {console.log(result[0]);
        res.render("index", {
            notes : result[0]
        });
    }).
    catch(err => console.log(err));
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor: http://localhost:${PORT}`);
});