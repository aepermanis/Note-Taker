//const router = require('express').router()
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3003;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});


app.get('/api/notes', (req,res)=>{


});

app.post('/api/notes', (req,res)=>{
    try{
        let newNote = req.body
        const notes = JSON.parse(fs.readFile('db.json'));
        notes.push(newNote);
        fs.writeFile('db.json', JSON.stringify(notes))
    }catch{
        console.log(err)
    }
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


