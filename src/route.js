/**
 * Created by carlen on 4/16/17.
 */
const _  = require('koa-route')
const categories = require('./api/categories/index')
const pools = require('./api/pools/index')
const app = require('./app')

app.use(_.get('/api/categories', categories.get))
app.use(_.get('/api/pools/messages/:id', pools.getMessagesId))
app.use(_.get('/api/pools/:id', pools.getId))
app.use(_.get('/api/pools', pools.get))
