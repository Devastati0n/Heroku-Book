const express = require('express'); 
const router = require('.');
const app = express(); 

//all authors route
router.get('/', (req,res)=>{
res.render('authors/index'); 
//https://www.youtube.com/watch?v=esy4nRuShl8&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=7
})

// new author route 

router.get('/', (req,res)=>{
    res.render('authors/new'); 

})


//create author route
router.post('/', (req,res)=>{
    res.send('Create')

})



module.exports = router; 

