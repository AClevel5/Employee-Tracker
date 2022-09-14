const db = require("../db/database");

// GET from department 
const getDept = `
SELECT * FROM department;`;

const getDepartments = () => {
    let departments = db.Query(getDept);
    return departments;
};

// ADD a department

