const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

function FindById(user_id) {
  return db("URLList").where({ user_id });
}

function FindByURLId(user_id, id){
    return FindById(user_id).where({id})
}

async function Add(body, user_id) {
  await db("URLList").insert(body);
  return FindById(user_id);
}

function Update(id, user_id, body) {
  return db("URLList")
  .where({ id })
  .update(body)
  .then(()=>{
      return FindById(user_id);
  })
}

function Remove(id) {
    return db("URLList")
    .where({ id })
    .del()
}

module.exports = {
  FindById,
  FindByURLId,
  Add,
  Update,
  Remove,
};
