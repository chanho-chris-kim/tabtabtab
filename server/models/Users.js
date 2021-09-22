const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

function Find(){
    return db("users");
}

function FindById(id){
    return db("users")
    .where({ id })
    .first();
}

async function Add(user){
    await db("users").insert(user);
    return Find();
}

function Remove(id){
    return db("users")
    .where({ id })
    .del()
}

function Update(id, changes){
    return(
        db("users")
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