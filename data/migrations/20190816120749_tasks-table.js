exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    tbl.increments();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE");
    tbl.string("name", 255).notNullable();
    tbl.string("description", 255).notNullable();
    tbl.string("notes", 255).notNullable();
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
