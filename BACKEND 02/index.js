console.log("Hello");
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cp' , (req , res)=> {
    res.send('CP Kaisa hai')
})
app.get('/youtube', (req, res) => {
    res.send('<a href="https://www.youtube.com/" target="_blank">Open YouTube</a>');
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
