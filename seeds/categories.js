exports.seed = (knex, Promise) => knex('categories').del()
    .then(() => knex('categories').insert([
        { id: 1, name: 'Remarques sur les locaux' },
        { id: 2, name: 'Remarques sur la pédagogie' },
        { id: 3, name: 'Suggestions' },
        { id: 4, name: 'Autres remarques' }
      ]))