const express = require("express");
const db = require("./data/db");
const userRoutes = require("./routes/users"); 


const app = express();
app.use(express.json()); 
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));


const PORT = process.env.PORT || 3001;

app.post("/", (req, res) => {
    const { notesName, desc } = req.body; // `desc` yerine `description` kullandım

    if (!notesName || !desc) {
        return res.status(400).json({ message: "Tüm alanları doldurun!" });
    }

    const sql = "INSERT INTO `notes` (`notesName`, `desc`) VALUES (?, ?);";

    db.query(sql, [notesName, desc], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Not eklenirken hata oluştu." });
        }
        res.status(200).json({ message: "Not başarıyla eklendi!" });
    });
});

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor: http://localhost:${PORT}`);
});