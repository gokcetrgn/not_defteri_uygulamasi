const express = require("express");
const dbs = require("./data/db");
const userRoutes = require("./routes/users"); 


const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));


const PORT = process.env.PORT || 3001;

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor: http://localhost:${PORT}`);
});