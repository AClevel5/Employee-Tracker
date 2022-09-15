const inquirer = require('inquirer');
const db = require('../db/database');
const { getDepartments } = require('./department');
const { getEmployees } = require('./employee');
const { getJobs } = require('./job');



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
                "Exit",
            ]
        })
        .then(function ({ task }) {
            switch (task) {
                case "View Departments":
                    getDepartments().then(startApp);

                    break;
                case "Add a Department":
                    addDepartment().then(startApp);
                    break;
                case "View Jobs":
                    getJobs().then(startApp);
                    break;
                case "Add a Job":
                    addJobs().then(startApp);
                    break;
                case "View Employees":
                    getEmployees().then(startApp);
                    break;
                case "Update an Employee Role":
                    updateEmployeeRole().then(startApp);
                    break;
                case "Exit":
                    process.exit();
            }
        })
}


module.exports = { startApp };