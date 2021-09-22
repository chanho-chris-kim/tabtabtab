const express = require("express");
const router = express.Router();
const { v4: uuid4 } = require("uuid");
const List = require("../models/List.js");

router.get("/:userID", (req, res) => {
  try {
    const userID = req.params.userID;
    List.FindById(userID).then((users) => {

      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: "record not found" });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: "couldn't get the users" });
  }
});

router.get("/:userID/:urlID", (req,res)=>{
  try{
    const userID = req.params.userID;
    const urlID = req.params.urlID;
    List.FindByURLId(userID, urlID)
    .then((list)=>{
      res.status(200).json(list)
    })
    .catch((err)=>{
      res.status(404).json({message: `could not fetch the data of ${urlID} from the user ${userID}. Error: ${err}`})
    })
  } catch(err){
    res.status(500).json({message: `could not fetch the data of ${urlID} from the user ${userID}. Error: ${err}`})
  }

})

router.post("/:userID", (req, res) => {
  try {
    const userID = req.params.userID;
    const body = req.body;

    if(!body.id){
      body["id"] = uuid4();
    }

    if(!body.user_id){
      body["user_id"] = userID;
    }

    List.FindById(userID)
    .then(user =>{
      if (!user){
        res.status(404).json({ message: `User ID, ${userID}, not found.`})
      }
      if (!body.URLName || !body.URLPath){
        res.status(400).json({ message: `Must provide both URLName and URLPath, but I got URLName: ${URLName}, URLPath: ${URLPath}`})
      }
      List.Add(body, userID)
      .then(body=>{
        if(body){
          res.status(200).json(body)
        } else{
          res.status(400).json({message: `Could not Add URL List to user ID: ${userID}, `})
        }
      })
    })
  } catch (error) {
    return res.status(500).send(`The URL cannot be added for user ID: ${userID}, body: ${body}. Error: ${error}`);
  }
});

router.put("/:userID/:urlID", (req, res) => {
  const userID = req.params.userID;
  const urlID = req.params.urlID;
  const body = req.body;
  try {
    List.FindById(userID)
    .then(URLList=>{
      if(URLList){
        List.Update(urlID, userID, body)
        .then(updatedURLList=>{
          res.status(200).json(updatedURLList)
        })
        .catch(err=>{
          res.status(500).json({message: `Error updating URL list. Error: ${err}. For URL ID: ${urlID}, USER ID: ${userID}, and BODY: ${body}`})
        })
      } else{
        res.status(404).json({message: `Could Not Find User With the ID of ${userID}`})
      }
    })
  } catch (error) {
    return res.status(500).send(`The user info couldn't be changed. Error: ${error}`);
  }
});

router.delete("/:userID/:urlID", (req, res) => {
  try {
    const userID = req.params.userID;
    const urlID = req.params.urlID;

    List.FindById(userID)
    .then(URLList=>{
      if(URLList){
        List.Remove(urlID)
        .then(count=>{
          if( count > 0 ){
            res.status(200).json({ message: "Successfully deleted" });
          } else{
            res.status(404)
            .json({ message: `Unable to locate record for: ${userID}` });
          }
        })
        .catch((err)=>{
          res.status(500).json({message: `Error. ${err}`})
        })
      } else{
        res.status(404).json({message: `Could Not Find User With the ID of ${userID}`})
      }
    })
  } catch (err) {
    return res.status(500).json({ error: "url couldn't be deleted : " + err });
  }
});

module.exports = router;
