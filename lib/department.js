const db = require("../db/database");
// const inquirer = require('inquirer');
// GET (view) from department 


// const getDepartments = async () => {
//     const getDept = `
//         SELECT * FROM department;`;
//     let [rows] = await db.promise().query(getDept)
//     // console.log(rows);
//     return rows;
// };

function getDepartments() {
    const getDept = `
SELECT * FROM department;`;
    db.query(getDept, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
};


// ADD a department

const addDepartment = (departmentName) => {


}


module.exports = { getDepartments };

