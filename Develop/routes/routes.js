
const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});


router.get('/api/notes', async (req,res)=>{
        const notes = await JSON.parse(fs.readFileSync('Develop/db/db.json'))
        console.log(notes)
        res.json(notes)
});

router.post('/api/notes', (req,res)=>{
    try{
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: '' + Math.floor(Math.random() * 100)
        }
        const notes = JSON.parse(fs.readFileSync('Develop/db/db.json'));
        notes.push(newNote);
        fs.writeFileSync('Develop/db/db.json', JSON.stringify(notes))
        res.json(notes)
    }catch{
        console.log(err)
    }
});

module.exports = router




