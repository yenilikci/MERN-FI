const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Fi = require('./models/Fi')

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/fi',{useNewUrlParser:true,useCreateIndex:true},(err) => {
    if(err) throw err
    console.log('Başarılı mongoose bağlantısı')
})

app.get('/kullanici',(req,res) => {
    res.send(
        {
            ad:'Melih',
            soyad:'Çelik'
        }
    )
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
        if(err) throw err
        console.log('Kaydedildi');
    })
})

//nodemon -r esm server.js
app.listen(5555)
