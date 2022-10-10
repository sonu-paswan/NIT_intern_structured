
const express=require('express');
const { model, Schema } = require('mongoose');
const App=express();
const mongoose=require('mongoose',{});
App.set('view engine','ejs');
const port=1000;
App.use(express.urlencoded({extended:true}));
App.use(express.static("public"));

// mongoose connection
mongoose.connect('mongodb://localhost:27017/department');
const dSchema=Schema({
    id:Number,
    name:String,
    about:String,
    faculty:Array
})
const dModel=mongoose.model('department',dSchema);


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

    dModel.find({'id':name},(err,docs)=>{
        if(err) console.log(err);
        else{
            // console.log(docs[0]);
            res.render("department",{depart:docs[0]});
        }
    })
})

// faculty and courses
let arr=['','Basic and Applied Science','Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Electronic and Communication Engineering','Mechanical Engineering'];
App.get('/faculty/:id',(req,res)=>{
    // res.render("faculty");
    let {id}=req.params;
    dModel.find({'id':id},(err,docs)=>{
        if(err) console.log(err);
        else{
            // console.log(docs[0].faculty);
            res.render("faculty",{faculty:docs[0].faculty,depart:arr[id]});
        }
    })
})
App.get('/courses',(req,res)=>{
    res.render("courses");
})

App.listen(port,()=>{
    console.log('listening on port :'+port);
})

