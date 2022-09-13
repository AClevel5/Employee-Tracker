//Require express and mysql
const express = require('express');
const mysql = require('mysql2');


//Create Port variable and instance of express
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});