const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
   const articles = [{
     title: 'Test Articles',
     createdAt: Date.now(),
     description: 'Test description'
  }]
    res.render('articlesPage', { articles: articles })
})



//Export router to be used in main server 
module.exports = router