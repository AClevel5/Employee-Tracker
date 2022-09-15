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

const addDepartments = async (answer) => {
    const addDepartment = `INSERT INTO department(department_name) VALUES (?)`
    let response = await db.promise().query(addDepartment, [answer.deptName]);
};


module.exports = { getDepartments, addDepartments };

