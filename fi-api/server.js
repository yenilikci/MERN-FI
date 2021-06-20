import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/kullanici',(req,res) => {
    res.send(
        {
            ad:'Melih',
            soyad:'Çelik'
        }
    )
})

//nodemon -r esm server.js
app.listen(5555)
