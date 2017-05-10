exports.up = knex => knex.schema
    .createTable('messages', (table) => {
        table.increments('id').primary()
        table.text('message')
        table.string('username')
        table.integer('categories_id').unsigned()
        table.integer('pools_id').unsigned()
        table.foreign('categories_id').references('categories.id')
        table.foreign('pools_id').references('pools.id')
    })

exports.down = knex=> knex.schema.dropTable('messages')