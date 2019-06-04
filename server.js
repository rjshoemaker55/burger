const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const router = require('./controllers/burgers_controller')

const PORT = process.env.PORT || 3306;
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use('/', router)

app.listen(PORT, function() {
    console.log('')
    console.log('----------')
    console.log('server up and running on port ' + PORT)
    console.log('----------')
})