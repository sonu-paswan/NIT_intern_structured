const express=require('express');
const App=express();
App.set('view engine','ejs');
const port=1000;

App.use(express.static("public"));

App.get('/',(req,res)=>{
    res.render('index');
})

App.listen(port,()=>{
    console.log('listening on port :'+port);
})