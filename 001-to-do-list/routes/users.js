const express = require("express");
const router = express.Router();
const dbs = require("../data/db");



router.use("/notes", async function(req, res){
    try {
        const [notes, ] = await dbs.execute("Select * from notes");
        res.render("notes", {
            notes : notes
        });
    } catch (error) {
        onsole.log(error)
    }

});
router.use("/info_page", function(req,res){
    res.render("info_page")
})

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