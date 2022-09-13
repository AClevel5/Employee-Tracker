//Require express and mysql
const express = require('express');

//Create Port variable and instance of express
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});