
const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
});

router.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
});


router.get('/api/notes', (req,res)=>{
    try{
        const notes = JSON.parse(fs.readFile('db.json'))
        res.json(JSON.parse(notes))
    }catch{
        console.log(err)
    }
});

router.post('/api/notes', (req,res)=>{
    try{
        let newNote = req.body
        const notes = JSON.parse(fs.readFile('db.json'));
        notes.push(newNote);
        fs.writeFile('db.json', JSON.stringify(notes))
    }catch{
        console.log(err)
    }
});

module.exports = router




