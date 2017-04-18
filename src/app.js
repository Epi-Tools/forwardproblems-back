const Koa = require('koa')
const helmet = require('koa-helmet')
const Router = require('koa-joi-router');

require('dotenv').config()

const app = new Koa()
const router = new Router()

module.exports = { app, router }

//middleware
app.use(helmet())

require('./route')

app.use(router.middleware())

app.listen(process.env.PORT || 8000)
