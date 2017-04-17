exports.up = knex => knex.schema
    .createTable('messages', (table) => {
        table.increments('id').primary()
        table.text('message')
        table.integer('categories_id').unsigned()
        table.foreign('categories_id').references('categories.id')
    })

exports.down = knex=> knex.schema.dropTable('messages')