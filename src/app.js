const Koa = require('koa')
const helmet = require('koa-helmet')
const hbs = require('koa-hbs')
require('dotenv').config()

const app = module.exports = new Koa()

//middleware
app.use(hbs.middleware({ viewPath: __dirname + '/../views' }))
app.use(helmet())

require('./route')

app.listen(process.env.PORT || 8000)