exports.seed = knex => knex('problems').del()
    .then(() => knex('problems').insert([
        { id: 1, name: 'A little problem test',  user_name: 'test.test@epitech.eu' },
        { id: 2, name: 'A little problem test 2',  user_name: 'test.test@epitech.eu' }
    ]))
