exports.seed = (knex, Promise) => knex('categories').del()
    .then(() => knex('categories').insert([
        { id: 1, name: 'rowValue1' },
        { id: 2, name: 'rowValue2' },
        { id: 3, name: 'rowValue3' }
      ]))