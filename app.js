const express = require("express");
const path =require('path');
const fs =require('fs');
 const app = express();
 const port = 80;
   
//  app.use(express.static('static',Opt ion));

 app.use('/static',express.static('static'))
 app.use(express.urlencoded())


 app.set('view engine','png')
 app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
     
    const parms={ }
res.status(200).render('index.pug',parms)
});
app.get('/contact',(req,res)=>{
     
    const parms={ }
res.status(200).render('contact.pug',parms)
});

app.listen(port ,()=>{
    console.log(`the application started successfully on port ${port}`)
});