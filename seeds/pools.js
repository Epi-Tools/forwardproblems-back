exports.seed = (knex, Promise) => knex('pools').del()
    .then(() => knex('pools').insert([
        { id: 1, name: 'First Pools',  users_id: 1, status: 0 },
        { id: 2, name: 'Second Pools',  users_id: 1 },
    ]))
