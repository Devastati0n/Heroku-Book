const express = require('express'); 
const router = express.Router(); 
const Author = require('../models/author')


//all authors route
router.get('/', (req,res)=>{
res.render('authors/index'); 
//https://www.youtube.com/watch?v=esy4nRuShl8&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=7
})


// new author route 
router.get('/new', (req,res)=>{
    res.render('authors/new', {author: new Author()}); 

})


//create author route
router.post('/', async (req,res)=>{
    const author = new Author({
    name: req.body.name
    })
    try{
      const newAuthor = await author.save()
      res.render('authors')
     }catch{
      res.render('authors/new',{
        author: author,
        errorMessage:'Error Creating Author'
      })
    }

  //   author.save().
  //   then((newAuthor)=>{
  //       res.render('authors')
  // }).
  //   catch((err)=>{
  //       res.render('authors/new',{
  //           author: author,
  //           errorMessage:'Error Creating Author...'
  //       })
  //       })
      })
    



module.exports = router; 

