const inquirer = require('inquirer');
const db = require('../db/database');
const { getDepartments, addDepartments } = require('./department');
const { getEmployees, addEmployees, updateEmployees } = require('./employee');
const { getJobs, addJobs } = require('./job');



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
                    deptInquire();
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
                case "Add an Employee":
                    employeeInquire();
                    break;
                case "Update an Employee Role":
                    updateInqEmployee();
                    break;
                case "Exit":
                    process.exit();
            }
        })
};

function employeeInquire() {
    inquirer
        .prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employees First name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees Last name?",
        },
        {
            type: "input",
            name: "jobId",
            message: "What is the employees Job ID?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the employees' Manager's ID",
        }])
        .then(
            (res) => {
                addEmployees(res)
                startApp()
            }


        );
};


function updateInqEmployee() {
    inquirer
        .prompt([{
            type: "input",
            name: "employeeId",
            message: "What is the employees ID?",
        },
        {
            type: "input",
            name: "jobId",
            message: "What is the Job ID",
        },
        ])
        .then(
            (res) => {
                updateEmployees(res)
                startApp()
            }
        );
};

function deptInquire() {
    inquirer
        .prompt([{
            type: "input",
            name: "deptName",
            message: "What is the name of the Department you would like to add?",
        },
        ])
        .then(
            (res) => {
                addDepartments(res)
                startApp()
            }
        );
};

module.exports = { startApp };