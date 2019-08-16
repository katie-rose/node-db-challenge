exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Kilo", description: "Fat boy", completed: true },
        {
          name: "React",
          description: "Ecommerce website and store",
          completed: false
        },
        {
          name: "JavaScript 30",
          description: "Complete all 30 projects",
          completed: false
        }
      ]);
    });
};
