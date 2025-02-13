const express = require("express");



const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));


const data = [
   { id: 1, noteName : "Not 1", desc:"lorem"},
   { id: 2 , noteName : "Not 1", desc:"lorem" },
   { id: 3, noteName : "Not 1", desc:"lorem" },
   { id: 4, noteName : "Not 1", desc:"lorem" },
   { id: 5, noteName : "Not 1", desc:"lorem" },
   { id: 6, noteName : "Not 1", desc:"lorem" },

]



const PORT = process.env.PORT || 3001;
app.use("/login", function(req, res){
    res.render("login");
});
app.use("/signup", function(req, res){
    res.render("signup");
});

app.use("/", function(req, res){
    res.render("index", {
        notes : data
    });
});
// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor: http://localhost:${PORT}`);
});