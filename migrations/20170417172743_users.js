exports.up = knex => knex.schema
    .createTable('users', (table) => {
        table.increments('id').primary()
        table.string('login')
        table.string('password')
        table.integer('acl').unsigned().defaultTo(0)
    })

exports.down = knex=> knex.schema.dropTable('users')