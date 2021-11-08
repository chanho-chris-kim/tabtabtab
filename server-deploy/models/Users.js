const knex =
process.env.NODE_ENV === 'production'
  ? require('knex')(require('../knexfile').production)
  : require('knex')(require('../knexfile').development);

function Find(){
    return knex("users");
}

function FindById(id){
    return knex("users")
    .where({ id })
    .first();
}

async function Add(user){
    await knex("users").insert(user);
    return Find();
}

function Remove(id){
    return knex("users")
    .where({ id })
    .del()
}

function Update(id, changes){
    return(
        knex("users")
        .where({id})
        .update(changes)
        .then(()=>{
            return FindById(id)
        })
    )
}

module.exports = {
    Find,
    FindById,
    Add,
    Remove,
    Update,
}