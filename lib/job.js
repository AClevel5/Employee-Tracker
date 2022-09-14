const db = require("../db/database");


// Get (view) for roles
const getJob = `
SELECT * FROM job;`;

const getJobs = () => {
    let jobs = db.Query(getJob);
    return jobs;
};





// Add a role


module.exports = { getJobs };