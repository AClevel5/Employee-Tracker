const inquirer = require('inquirer');
const db = require('../db/database');
const { getDepartments } = require('./department');

//view all departments,
//  view all roles, 
//  view all employees,
//   add a department,
//    add a role,
//     add an employee,
//      and update an employee role

function startApp() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "View Departments",
                "Add a Department",
                "View Jobs",
                "Add a Job",
                "View Employees",
                "Add an Employee",
                "Update an Employee Role",
                "Exit"
            ]
        })
        .then(function ({ task }) {
            switch (task) {
                case "View Departments":
                    getDepartments();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "View Jobs":
                    getJobs();
                    break;
                case "Add a Job":
                    addJobs();
                    break;
                case "View Employees":
                    getEmployees();
                    break;
                case "Update an Employee Role":
                    updateEmployeeRole();
                    break;
                case "Exit":
                    db.end()
                    break;
            }
        })
}


module.exports = { startApp };