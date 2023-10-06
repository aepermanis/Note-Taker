const express = require('express')
const routes = require('./Develop/routes/routes.js')


const app = express()
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.static('Develop/public'))
app.use(routes)
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);