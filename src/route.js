/**
 * Created by carlen on 4/16/17.
 */
const _ = require('koa-route')
const categories = require('./api/categories/index')
const pools = require('./api/pools/index')
const messages = require('./api/messages/index')
const problems = require('./api/problems/index')
const login = require('./api/login/index')
const { app, router } = require('./app')
const { ValidMsg, ValidPool, ValidId, ValidStatus, validateJson, validateParam, ValidProblem, ValidLogin } = require('../utils/validator')
const jwt = require('./../utils/jwt')

//users
router.post('/login', validateJson(ValidLogin), login.login)

app.use(router.middleware())

//TODO(carlendev) READDD AUTH
//auth
app.use(jwt)

//api
app.use(_.get('/api/categories', categories.get))

app.use(_.get('/api/pools/messages/:id', pools.getMessagesId))
app.use(_.get('/api/pools/max', pools.getMaxId))
app.use(_.get('/api/pools/:id', pools.getId))
app.use(_.get('/api/pools', pools.get))
router.post('/api/pools', validateJson(ValidPool), jwt, pools.post)

app.use(_.get('/api/messages', messages.get))
router.post('/api/messages', validateJson(ValidMsg), jwt, messages.post)

app.use(_.get('/api/problems', problems.get))
router.post('/api/problems', validateJson(ValidProblem), jwt, problems.post)
router.put('/api/problems/:id/:status', validateParam(ValidStatus), jwt, problems.putStatus)
router.put('/api/problems/:id', validateParam(ValidId), jwt, problems.putId)
router.get('/api/problems/:id', validateParam(ValidId), jwt, problems.getId)
router.delete('/api/problems/:id', validateParam(ValidId), jwt, problems.deleteId)