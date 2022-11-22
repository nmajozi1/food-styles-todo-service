/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // truncate all existing tables
  await knex.raw('truncate table user');
  await knex.raw('truncate table todos');
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('user').insert([
    {id: 1, name: 'ntokozo', email: 'ntokozo.test@gmail.com', password: 'password'},
    {id: 2, name: 'majozi', email: 'majozi.test@gmail.com', password: 'password'},
  ]);

  await knex('todos').insert([
    {id: 1, todo: 'create migration', completion: true},
    {id: 2, todo: 'insert tables', completion: false},
  ]);
};
