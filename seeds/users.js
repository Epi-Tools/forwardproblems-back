const bcrypt = require('bcrypt')
require('dotenv').config()

exports.seed = knex => knex('users').del()
    .then(() => bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
        .then(salt => bcrypt.hash(process.env.DEFAULT_ADMIN_PWD, salt)
        .then(hash => knex('users').insert([
            { id: 1, login: process.env.DEFAULT_ADMIN_NAME, password: hash, acl: 1 }
        ]))))
