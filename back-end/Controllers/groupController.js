//Require the express APP
const express = require("express");
const { request, response } = require("../app.js");

//
const groups = express.Router();

// Accessing Queries for Groups => returning an object

const {
  retrieveAllGroups,
  createGroup,
  updateGroup,
} = require("../Queries/groups.js");

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

//Get one ID
groups.get("/:groupID", async (request, response) => {
  const { groupID } = request.params;
  try {
    const group = await getOneGroup(groupID);
    if (group.id) {
      response.status(200).json(group);
    } else {
      response.status(404).json({ error: "server error" });
    }
  } catch (error) {
    console.log(error);
  }
});

//Create new event

groups.post("/", async (request, response) => {
  const { body } = request;
  try {
    const createdGroup = await createGroup(body);
    if (createdGroup.id) {
      response.status(200).json(createdGroup);
    } else {
      response.status(422).json({ error: "error" });
    }
  } catch (error) {
    console.log(error);
  }
});

groups.put("/:groupID", async (request, response) => {
  const { groupID } = request.params;
  const { body } = request;
  const updatedGroup = await updateGroup(groupID, body);
  if (updatedGroup.id) {
    response.status(200).json(updatedGroup);
  } else {
    response.status(404).json({ error: "error" });
  }
});

// Events start here

module.exports = groups;
