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
router.use("/how_it_is_work", function(req,res){
    res.render("how_it_is_work")
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