exports.seed = (knex, Promise) => knex('pools').del()
    .then(() => knex('pools').insert([
        { name: 'First Pools',  users_id: 1 },
    ]))
