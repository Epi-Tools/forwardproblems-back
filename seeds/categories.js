exports.seed = (knex, Promise) => knex('categories').del()
    .then(() => knex('categories').insert([
        { name: 'rowValue1' },
        { name: 'rowValue2' },
        { name: 'rowValue3' }
      ]))
