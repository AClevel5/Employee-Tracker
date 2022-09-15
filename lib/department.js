const db = require("../db/database");
const cTable = require('console.table');


// GET (view) from department 
const getDepartments = async () => {
    const getDept = `
        SELECT * FROM department;`;
    let [rows] = await db.promise().query(getDept)
    console.table(rows);
};

// ADD a department

const addDepartment = (departmentName) => {


}


module.exports = { getDepartments };

