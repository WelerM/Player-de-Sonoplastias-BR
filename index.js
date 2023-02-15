const express = require('express')
const app = express()
app.listen(4000, () => console.log('http://localhost:4000/'))
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

const fs = require('fs');
const audioFolder = './public/audios';



const read_audios =  () => {
    fs.readdir(audioFolder, (err, files) => {
        send_audios(files)
    })
}
read_audios()


function send_audios(x) {
    app.get('/getData', (req, res) => {
        res.send(x)
    })
}




