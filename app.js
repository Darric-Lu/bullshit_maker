const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const bullshitMaker = require('./bullshit_maker')
const characterData = require('./character.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { data: characterData.data })
})

app.post('/', (req, res) => {
  const bullshit = bullshitMaker(req.body)
  res.render('index', { bullshit, data: characterData.data })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})