const express = require("express");
const router = express.Router();
const dbs = require("../data/db");



router.use("/login", function(req, res){
    res.render("login");
});
router.use("/signup", function(req, res){
    res.render("signup");
});

router.use("/", async function(req, res){
    try {
        const [notes, ] = await dbs.execute("Select * from notes");
        res.render("index", {
            notes : notes
        });
    } catch (error) {
        onsole.log(error)
    }

});

module.exports = router;