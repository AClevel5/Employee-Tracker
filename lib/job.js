const db = require("../db/database");
const cTable = require('console.table');

// Get (view) for roles
const getJobs = async () => {
    const getJob = `
SELECT 
j.id,
j.title,
j.salary,
d.department_name
FROM job AS j
LEFT JOIN department as d
ON j.department_id=d.id;`;
    let [rows] = await db.promise().query(getJob)
    console.table(rows);
};

// Add a role


module.exports = { getJobs };