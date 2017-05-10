exports.up = knex => knex.schema
    .createTable('pools', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.integer('users_id').unsigned()
        table.foreign('users_id').references('users.id')
        table.integer('status').unsigned().defaultTo(1)
    })

exports.down = knex => knex.schema.dropTable('pools')