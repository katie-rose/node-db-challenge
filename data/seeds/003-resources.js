exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "Doggo resources",
          description: "Check ze Google"
        },
        {
          name: "React resources",
          description: "Check ze Google"
        },
        {
          name: "JS resources",
          description: "Check ze Google"
        }
      ]);
    });
};
