const db = require("../db/dbConfig.js");

const retrieveAllGroups = async () => {
    try {
        const allGroups = await db.any("SELECT * FROM groups"); // * get all
        return allGroups;
    } catch (error) {
        return error;
    }
}


//Begin exports here 

module.exports = {
    retrieveAllGroups,
}