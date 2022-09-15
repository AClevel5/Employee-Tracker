const db = require("../db/database");
const cTable = require('console.table');

// Get (view) all employees
const getEmployees = async () => {
    const getEmployee = `
    SELECT 
    e.id,
    e.first_name,
    e.last_name,
    j.title,
    j.salary,
    d.department_name,
    CONCAT(m.first_name, ' ', m.last_name) AS Manager
    FROM employee AS e
    LEFT JOIN job as j
    ON e.job_id=j.id
    LEFT JOIN department as d
    ON j.department_id=d.id
    LEFT JOIN employee AS m
    ON e.manager_id = m.id
    ;`;
    let [rows] = await db.promise().query(getEmployee)
    console.table(rows);
};


// Add an employee

// update employee role




module.exports = { getEmployees };