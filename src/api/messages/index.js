/**
 * Created by carlen on 4/18/17.
 */
const Model = require('../../services/messages/messages')

const post = ctx => console.log(ctx.request.body)

module.exports = { post }