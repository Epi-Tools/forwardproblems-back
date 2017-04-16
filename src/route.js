/**
 * Created by carlen on 4/16/17.
 */
const _  = require('koa-route')
const categories = require('./api/categories/index')
const app = require('./app')

app.use(_.get('/api/categories', categories.get))
