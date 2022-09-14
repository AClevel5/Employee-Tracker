const db = require("../db/database");

// GET (view) from department 
const getDept = `
SELECT * FROM department;`;

const getDepartments = () => {
    let departments = db.Query(getDept);
    return departments;
};

// ADD a department


module.exports = { getDepartments };

