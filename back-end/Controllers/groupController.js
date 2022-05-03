//Require the express APP
const express = require("express");

//
const groups = express.Router();

// Accessing Queries for Groups => returning an object

const { retrieveAllGroups } = require("../Queries/groups.js");

//GET ALL GROUPS

groups.get("/", async (request, response) => {
  try {
    const allGroups = await retrieveAllGroups();
    if (allGroups[0]) {
      response.status(200).json(allGroups);
    } else {
      response.status(404).json({ Error: "Data Not Found!" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = groups;
