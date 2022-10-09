
const express=require('express');
const App=express();
App.set('view engine','ejs');
const port=1000;
App.use(express.urlencoded({extended:true}));
App.use(express.static("public"));

//front page and home
App.get('/',(req,res)=>{
    res.render('index');
})
App.get('/home',(req,res)=>{
    res.render('home');
})

//for login and register
App.get("/login",(req,res)=>{
    res.render("login");
})
App.get("/register",(req,res)=>{
    res.render("register");
})
App.post("/register",(req,res)=>{
console.log(req.body);
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let mobile = req.body.mobile;
  let gender = req.body.gender;
  let city = req.body.city;
  let pin = req.body.pin;
  let state = req.body.state;
  let Department=req.body.Department;
  let password = req.body.password;
  let conpassword = req.body.conpassword;

})

//department
App.get('/department/:name',(req,res)=>{
    let {name}=req.params;
    res.render("department");
})

// faculty and courses
App.get('/faculty',(req,res)=>{
    res.render("faculty");
})
App.get('/courses',(req,res)=>{
    res.render("courses");
})

App.listen(port,()=>{
    console.log('listening on port :'+port);
})

