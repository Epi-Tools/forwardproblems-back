const Koa = require('koa')
const helmet = require('koa-helmet')
const Router = require('koa-joi-router')
const cors = require('koa-cors')
const convert = require('koa-convert')

require('dotenv').config()

const app = new Koa()
const router = new Router()

//middleware
app.use(convert(cors()))
app.use(helmet())

module.exports = { app, router }

require('./route')

app.use(router.middleware())

app.listen(process.env.PORT || 8000)
