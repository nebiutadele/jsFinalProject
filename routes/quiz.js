const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
   res.render('quiz')
})



//Export router to be used in main server 
module.exports = router