
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Cole', password: "test123"},
        {id: 2, username: 'Brittany', password: "test123"},
        {id: 3, username: 'Hugo', password: "test123"}
      ]);
    });
};