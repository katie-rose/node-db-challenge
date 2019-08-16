exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          name: "Kilo exercise",
          description: "Walk the doggo",
          notes: "Listen to music to pass the time",
          completed: true
        },
        {
          project_id: 2,
          name: "Andre's React course",
          description: "Setup the Stripe API",
          notes: "Be sure to save process in Notion",
          completed: false
        },
        {
          project_id: 3,
          name: "Wes Bos JS course",
          description: "Pay attention",
          notes: "Make tweaks to customize",
          completed: false
        }
      ]);
    });
};
