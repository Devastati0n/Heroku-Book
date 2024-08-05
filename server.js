if(process.env.NODE_ENV !== 'production'){
require("dotenv").config()

}

const express = require('express'); 
const app = express(); 
const expressLayouts = require('express-ejs-layouts'); 

const indexRouter = require('./routes/index'); 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.set('layout', 'layouts/layout'); 
app.use(expressLayouts); 
app.use(express.static('public'))


const mongoose = require('mongoose'); 
mongoose.connect(process.env.DATABASE_URL);


const db = mongoose.connection; 
db.on('error', error => console.error(error)); 
db.once('open', () => console.log('connected to mongoose')); 











app.use('/', indexRouter); 

app.listen(process.env.PORT || 3000); 










/* 
npm i express ejs express-ejs-layouts
npm i --save-dev nodemon
npm i mongoose
git init 
npm run devStart

git remote add origin https://github.com/Devastati0n/full.git
git branch -M main
git push -u origin main

Set-ExecutionPolicy –ExecutionPolicy RemoteSigned
*/ 


//PIurGCPggKnLLI7U
//mongodb+srv://havokcs1:<PIurGCPggKnLLI7U>@cluster0.hzry53b.mongodb.net/

