/**
 * Created by carlen on 4/16/17.
 */
const _ = require('koa-route')
const categories = require('./api/categories/index')
const pools = require('./api/pools/index')
const messages = require('./api/messages/index')
const { app, router } = require('./app')
const { ValidMsg, ValidPool, validateJson } = require('../utils/validator')

app.use(_.get('/api/categories', categories.get))

app.use(_.get('/api/pools/messages/:id', pools.getMessagesId))
app.use(_.get('/api/pools/:id', pools.getId))
app.use(_.get('/api/pools', pools.get))
router.post('/api/pools', validateJson(ValidPool), pools.post)

app.use(_.get('/api/messages', messages.get))
router.post('/api/messages', validateJson(ValidMsg), messages.post)