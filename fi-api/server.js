const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Fi = require('./models/Fi')
const Admin = require('./models/Admin')

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/fi',{useNewUrlParser:true,useCreateIndex:true},(err) => {
    if(err) throw err
    console.log('Başarılı mongoose bağlantısı')
})

/*
app.get('/admin',(req,res) => {
    Admin.create({
        username:'yenilikci',
        password:'123456'
    }, err => {
        if(err) res.sendStatus(400)
        res.sendStatus(200)
        //res.send('başarılı')
    })
}) */

app.post('/giris',(req,res) => {
    const {username,password} = req.body
    console.log(username)
})

app.post('/fikirkaydet',(req,res) => {
    //console.log(req.body);
    const {tamIsim,emailAdres,fikirTuru,fikir} = req.body
    Fi.create({
        gonderenIsim:tamIsim,
        emailAdres,
        fikirTuru,
        fikir
    }, err => {
        if(err) res.sendStatus(400)
        res.sendStatus(200)
        //res.send('başarılı')
    })
})

//nodemon -r esm server.js
app.listen(5555)
