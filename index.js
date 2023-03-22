const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')


const app = express()

dotenv.config()
const port = process.env.PORT || 5000

// http log
app.use(morgan('combined'))

// set view engine ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () =>{
    console.log(`server listen at ${port}`)
})