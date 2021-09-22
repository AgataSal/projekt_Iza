const express = require('express')
require('./users_functions.js')();

const port = process.env.PORT || 8000;

const app = express()
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.set('view engine', 'hbs')

app.get('/', (req,res) =>{
    res.render('newuser',{

    });
})

app.post('/', (req,res) =>{
    const { mail, password} = req.body
         if(validate(mail)) {
            register(mail, password)
            res.render('newuser',{message: 'Rejestracja przebiegla pomyslnie'})
         }else
            res.render('newuser',{message: 'Mail juz w uzyciu'})
    }
    

)

app.listen(port);
console.log("Server running...")