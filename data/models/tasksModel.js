const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById
};

async function find() {
  return await db("tasks");
}

async function findById(id) {
  return (
    (await db("tasks")
      .where({ id })
      .first()) || null
  );
}

async function add(task) {
  const id = await db("tasks").insert(task, "id");
  return findById(...id);
}
