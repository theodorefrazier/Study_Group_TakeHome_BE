const db = require("../db/dbConfig.js");

const getAllGroups = async () => {
    try {
        const allGroups = await db.any("SELECT * FROM groups");
        return allGroups;
    } catch (error) {
        return error;
    }
}


//Begin exports here 

module.exports = {
    getAllGroups,
}