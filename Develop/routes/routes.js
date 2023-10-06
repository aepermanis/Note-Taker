
const router = require('express').Router()
const fs = require('fs')
const path = require('path')

//creates route to homepage
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//opens notes html page to user
router.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//retrieves notes from the database
router.get('/api/notes', async (req,res)=>{
        const notes = await JSON.parse(fs.readFileSync('Develop/db/db.json'))
        console.log(notes)
        res.json(notes)
});

//adds new notes from user input
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

//exports router for server to use
module.exports = router




