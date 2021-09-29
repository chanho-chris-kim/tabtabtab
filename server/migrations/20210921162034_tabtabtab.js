
exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
      table.string("id").primary().unique();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("image").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("URLList", (table) => {
      table.increments("id").primary();
      table.string("URLName").notNullable();
      table.string("URLPath").notNullable();
      table.string("user_id").notNullable();
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("URLList").dropTable("users");
};
