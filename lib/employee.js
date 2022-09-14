const db = require("../db/database");


// Get (view) all employees
const getEmployee = `
SELECT * FROM employee;`;


const getEmployees = () => {
    let employees = db.Query(getEmployee);
    return employees;
};


// Add an employee

// update employee role




module.exports = { getEmployees };