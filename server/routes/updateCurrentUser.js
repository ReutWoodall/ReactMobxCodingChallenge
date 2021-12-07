const express = require('express');
const { UserModel } = require("../models/userModel");

const router = express.Router();

router.get("/:userId", async(req, res) => {
  let userId = req.params.userId;
  try{
  let data = await UserModel.findOneAndUpdate({_id: userId});
  res.json(data);
  }
  catch (err) {
    router.post("/", async(req,res) => {
      let validBody = validUser(req.body);
      if (validBody.error) {
        console.log(validBody.error);
        return res.status(400).json(validBody.error.details);
      }
      try{
        let user = new UserModel(req.body);
        user.save();
        res.status(201).json()
        console.log(user);
      }
      catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
    })
    
  }
});

module.exports = router;