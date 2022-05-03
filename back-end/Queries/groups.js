const db = require("../db/dbConfig.js");

const retrieveAllGroups = async () => {
  try {
    const allGroups = await db.any("SELECT * FROM groups"); // * get all
    return allGroups;
  } catch (error) {
    return error;
  }
};

const getOneGroup = async (id) => {
  try {
    const oneGroup = await db.one("SELECT * FROM groups WHERE id = $1", id); //select fomr where id
    return oneGroup;
  } catch (error) {
    return error;
  }
};

const createGroup = async (group) => {
  try {
    const newGroup = await db.one("INSERT INTO groups (name, city, state, event, is_free) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [group.name, group.city, group.state, group.events, group.is_free]
    );
    return newGroup;
  } catch (error) {
    return error;
  }
};

const updateGroup = async (id, group) => {
  try {
    const updatedGroup = await db.oneOrNone(
      "UPDATE groups SET name=$1, city=$2, state=$3, events=$4, is_free=$5 WHERE id=$6 RETURNING *;",

      [group.name, group.city, group.state, group.events, group.is_free, id]

    );
    return updatedGroup;
  } catch (error) {
    return error;
  }
};

//Begin exports here

module.exports = {
  retrieveAllGroups,
  getOneGroup,
  createGroup,
  updateGroup,
};
