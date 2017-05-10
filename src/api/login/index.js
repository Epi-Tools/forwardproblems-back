/**
 * Created by carlen on 4/21/17.
 */
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Model = require('../../services/users/users')
const { responseError, responseValid } = require('../../../utils/msg')
const { isInvalid, isVoid, isTrue } = require('../../../utils/validator')

const login = ctx => isInvalid(ctx)
    .then(() => Model.getUserByLogin(ctx.request.body.login)
        .then(user => isVoid(user)
            .then(user => bcrypt.compare(ctx.request.body.password, user[0].password)
                .then(res => isTrue(res)
                    .then(() => ctx.body = {
                        message: 'Successfully logged in!',
                        acl: user[0].acl,
                        id: user[0].id,
                        token: jwt.sign({ id: user[0].id, login: user[0].login , acl: user[0].acl },
                            process.env.JWT_SECRET, { expiresIn: "1d"})
                        })
                    .catch(() => responseError(ctx, 400, 'Invalid User Info')))
                .catch(() => responseError(ctx, 400, 'Invalid User Info')))
            .catch(() => responseError(ctx, 400, 'Invalid User Info')))
        .catch(() => responseError(ctx, 400, 'Invalid User Info')))
    .catch(() => responseError(ctx, 400, (ctx.invalid.body) ? ctx.invalid.body.msg : "Invalid User Info"))


module.exports = { login }