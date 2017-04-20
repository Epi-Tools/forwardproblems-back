exports.up = knex => knex.schema
    .createTable('problems', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.integer('importance').unsigned().defaultTo(0)
        table.integer('status').unsigned().defaultTo(0)
        table.string('user_name')
    })

exports.down = knex => knex.schema.dropTable('problems')