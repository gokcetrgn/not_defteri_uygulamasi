const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));


const PORT = process.env.PORT || 3001;
app.use("/login", function(req, res){
    res.render("login");
});
app.use("/signup", function(req, res){
    res.render("signupki");
});

app.use("/", function(req, res){
    res.render("index");
});
// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor: http://localhost:${PORT}`);
});