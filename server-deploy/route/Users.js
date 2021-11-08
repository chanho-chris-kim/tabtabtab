const express = require("express");
const router = express.Router();
const Users = require("../models/Users.js");
const jwt = require("jsonwebtoken");

router.get("/", (_req, res) => {
  try {
    Users.Find().then((users) => {
      res.status(200).json(users);
    });
  } catch (err) {
    return res.status(500).json({ error: "couldn't get users" });
  }
});

router.post("/", (req, res) => {
  try {
    Users.Add(req.body).then((user) => {
      res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).send("The user cannot be added");
  }
});

router.get("/:userID", (req, res) => {
  try {
    console.log(req);
    const userID = req.params.userID;
    Users.FindById(userID).then((users) => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: "record not found" });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: "couldn't get users" });
  }
});

router.put("/:userID", (req, res) => {
  try {
    const userID = req.params.userID;
    const body = req.body;

    Users.Update(userID, body).then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `Record not found for : ${userID}` });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: `Error updating record for: ${userID}, Error: ${error}`});
  }
});

router.delete("/:userID", (req, res) => {
  try {
    let userID = req.params.userID;
    Users.Remove(userID).then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "Successfully deleted" });
      } else {
        res
          .status(404)
          .json({ message: `Unable to locate record for: ${userID}` });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "user couldn't be deleted : " + err });
  }
});

module.exports = router;
