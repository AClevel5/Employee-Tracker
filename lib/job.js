const db = require("../db/database");
const cTable = require('console.table');


// Get (view) for roles
const getJobs = async () => {
    const getJob = `
SELECT * FROM job;`;
    let [rows] = await db.promise().query(getJob)
    console.table(rows);
};





// Add a role


module.exports = { getJobs };