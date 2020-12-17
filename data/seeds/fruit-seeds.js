
exports.seed = function(knex) {
  return knex('fruits').del()
    .then(function () {
      return knex('fruits').insert([
        {name: 'Strawberry'},
        {name: 'Banana'},
        {name: 'Bluebs'}
      ]);
    });
};
