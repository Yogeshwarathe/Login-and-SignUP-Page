/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('UserInfo', function (table) {
        table.increments('id').primary();
        table.string('Name');
        table.string('Gmail');
        table.integer('Number');
        table.integer('Password')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('UserInfo');

};
