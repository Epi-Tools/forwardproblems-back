exports.seed = (knex, Promise) => knex('messages').del()
    .then(() => knex('messages').insert([
        { message: 'Just a little test 1', categories_id: 1, pools_id: 1, username: 'donavan.aziaka@epitech.eu' },
        { message: 'Just a little test 2', categories_id: 2, pools_id: 1, username: 'donavan.aziaka@epitech.eu' },
        { message: 'Just a little test 3', categories_id: 3, pools_id: 1, username: 'donavan.aziaka@epitech.eu' },
    ]))
