exports.seed = (knex, Promise) => knex('messages').del()
    .then(() => knex('messages').insert([
        { message: 'Just a little test 1', categories_id: 1 },
        { message: 'Just a little test 2', categories_id: 2 },
        { message: 'Just a little test 3', categories_id: 3 },
    ]))
