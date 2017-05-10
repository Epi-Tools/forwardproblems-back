/**
 * Created by carlen on 4/16/17.
 */
const categories = require('./api/categories/index')
const pools = require('./api/pools/index')
const messages = require('./api/messages/index')
const problems = require('./api/problems/index')
const login = require('./api/login/index')
const { app, router } = require('./app')
const { admin } = require('../utils/middleware')
const { ValidMsg,
    ValidPool,
    ValidId,
    ValidStatus,
    validateJson,
    validateParam,
    ValidProblem,
    ValidLogin } = require('../utils/validator')
const jwt = require('./../utils/jwt')

//users
router.post('/login', validateJson(ValidLogin), login.login)

app.use(router.middleware())

//auth
app.use(jwt)

//api
router.get('/api/categories', jwt, categories.get)

router.get('/api/pools/messages/:id', jwt, pools.getMessagesId)
router.get('/api/pools/max', jwt, pools.getMaxId)
router.get('/api/pools/:id', jwt, pools.getId)
router.get('/api/pools', jwt, admin, pools.get)
router.post('/api/pools', validateJson(ValidPool), jwt, admin, pools.post)

router.get('/api/messages', jwt, admin, messages.get)
router.post('/api/messages', validateJson(ValidMsg), jwt, messages.post)

router.get('/api/problems', jwt, problems.get)
router.post('/api/problems', validateJson(ValidProblem), jwt, problems.post)
router.put('/api/problems/:id/:status', validateParam(ValidStatus), jwt, problems.putStatus)
router.put('/api/problems/:id', validateParam(ValidId), jwt, problems.putId)
router.get('/api/problems/:id', validateParam(ValidId), jwt, problems.getId)
router.delete('/api/problems/:id', validateParam(ValidId), jwt, problems.deleteId)