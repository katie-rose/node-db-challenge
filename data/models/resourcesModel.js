const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById
};

async function find() {
  return await db("resources");
}

async function findById(id) {
  return (
    (await db("resources")
      .where({ id })
      .first()) || null
  );
}

async function add(resource) {
  const id = await db("resources").insert(resource, "id");
  return findById(...id);
}
