exports.seed = knex => knex('problems').del()
    .then(() => knex('problems').insert([
        { name: 'A little problem test',  user_name: 'test.test@epitech.eu' },
        { name: 'A little problem test 2',  user_name: 'test.test@epitech.eu' }
    ]))
