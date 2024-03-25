require('dotenv').config()
const express = require('express') //this syntax is usually used for common js
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at Chai aur Code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Arth aur Code</h2>')
})

// we had installed dotenv and pass our port info of server which is confidential through process class .env
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
