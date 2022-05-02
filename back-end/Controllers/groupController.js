//Require the express APP
const express = require("express");

//
const groups = express.Router();

// Accessing Queries for Groups => returning an object

const {retriveAllGroups} = require("../Queries/groups.js")



groups.get("/", async (request, response) => {
  try {
    const allGroups = await retriveAllGroups();
    if (allGroups[0]) {
      response.status(200).json(allGroups);
    } else {
      response.status(404).json({ Error: "Data Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
});


module.exports = groups