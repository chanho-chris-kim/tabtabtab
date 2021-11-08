const knex =
process.env.NODE_ENV === 'production'
  ? require('knex')(require('../knexfile').production)
  : require('knex')(require('../knexfile').development);

function FindById(user_id) {
  return knex("URLList").where({ user_id });
}

function FindByURLId(user_id, id){
    return FindById(user_id).where({id})
}

async function Add(body, user_id) {
  await knex("URLList").insert(body);
  return FindById(user_id);
}

function Update(id, user_id, body) {
  return knex("URLList")
  .where({ id })
  .update(body)
  .then(()=>{
      return FindById(user_id);
  })
}

function Remove(id) {
    return knex("URLList")
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
