const express = require('express')
const cors = require('cors')
const db = require('./models')
const authController = require('./controllers/auth')
const playerController = require('./controllers/player')
const newsController = require('./controllers/news')
const response = require('./middlewares/response')
const checkJwt = require('./middlewares/jwt')

const app = express()

app.use(cors())
app.use(response)
app.use(checkJwt)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/account', authController)
app.use('/player', playerController)
app.use('/dashboard', newsController)

app.get('/', (req, res) => {
	return res.json('OK')
})

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log('***** Listening on port 3001')
	})
})
