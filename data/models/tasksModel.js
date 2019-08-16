const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById
};

async function find() {
  return await db("tasks");
}

async function findById(project_id) {
  return (
    (await db("tasks")
      .where({ project_id })
      .first()) || null
  );
}

async function add(project) {
  const id = await db("tasks").insert(project, "id");
  return findById(...id);
}
