const express = require('express')
const routes = require('./Develop/routes/routes.js')

//creates application 
const app = express()
const PORT = process.env.PORT || 3004;

//creates access to the public folder 
app.use(express.json());
app.use(express.static('Develop/public'))
app.use(routes)
app.use(express.urlencoded({ extended: true }))

//starts the application at specified port
app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);