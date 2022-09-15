//Require Packages
const inquirer = require('inquirer');
const db = require('../db/database');
//Require functions from other files
const { getDepartments, addDepartments } = require('./department');
const { getEmployees, addEmployees, updateEmployees } = require('./employee');
const { getJobs, addJobs } = require('./job');

//Start App Function
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
                    jobInquire();
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

//Employee Questions -> Add Employee
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

//Employee Questions -> Update Employees
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

//Department Questions -> Add Department
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

//Job Questions -> Add Job
function jobInquire() {
    inquirer
        .prompt([{
            type: "input",
            name: "title",
            message: "What is the Job Title?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the Job Salary?",
        },
        {
            type: "input",
            name: "deptId",
            message: "What is the Department ID?",
        }
        ])
        .then(
            (res) => {
                addJobs(res)
                startApp()
            }
        );
};

module.exports = { startApp };