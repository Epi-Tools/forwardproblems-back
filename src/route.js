/**
 * Created by carlen on 4/16/17.
 */
const _  = require('koa-route')
const categories = require('./categories/index')
const app = require('./app')

app.use(_.get('/categories', categories.get))
