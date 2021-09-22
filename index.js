const express = require('express')
const StormDB = require("stormdb")
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000;
const app = express()
app.use(express.static('public'))
const engine = new StormDB.localFileEngine("./db.json");
const db = new StormDB(engine);
db.default({ users: [] });


//create user try 1

const register = (name,surname,login,pass) =>{
    let newuser = {name:name,surname:surname,login:login,password:pass}
    db.get("users").push(newuser)
    db.save()
}


app.use(bodyParser.urlencoded({
    extended: true
}))


app.set('view engine', 'hbs')


app.get('/', (req,res) =>{
    res.render('newuser',{

    });
})
app.post('/', (req,res) =>{
    const { name, surname, login, password} = req.body
    register(name, surname, login, password)
    return res.redirect('/')
})
app.listen(port);
console.log("Server running...")