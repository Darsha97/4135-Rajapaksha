 
 const router = require("express").Router();
 const User = require("../model/user");
 //const Leave = require("../models/Leave");
 
 // Register a User
 router.route("/user/register").post((req, res) => {
   const employeeNumber = req.body.employeeNumber;
   const fullName = req.body.fullName;
   const password = req.body.password;
   const role = req.body.role || 'user'; // Default to 'user' if not provided
 
   const newUser = new User({
     employeeNumber,
     fullName,
     password,
     role
   });
 
   newUser.save()
     .then(() => {
       res.json(newUser);
     })
     .catch((err) => {
       console.log(err);
       res.status(500).json({ error: "Failed to register User" });
     });
 });
 
 