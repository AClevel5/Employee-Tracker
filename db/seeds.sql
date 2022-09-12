USE employees_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Customer Service"),
       ("Accounting");

INSERT INTO job (title, salary, department_id)
VALUES ("Sales Coordinator", 40000, 1),
       ("Account Manager", 80000, 1),
       ("Software Engineer", 100000, 2),
       ("Product Manager", 120000, 2),
       ("Customer Service Rep", 40000, 3),
       ("Customer Service Lead", 60000, 3),
       ("Accountant", 80000, 4),
       ("Accounting Manager", 100000, 4);

INSERT INTO employee (first_name, last_name, job_id)
VALUES ("Tom", "Brady", 2),
       ("Justin", "Herbert", 1),
       ("Kenny", "Pickett", 3),
       ("Deshaun", "Watson", 4),
       ("Jalen", "Hurts", 5),
       ("Josh", "Allen", 6),
       ("Jimmy", "G", 7),
       ("Justin", "Herbert", 8);

UPDATE employee SET manager_id = null WHERE id = 1;
UPDATE employee SET manager_id = 1 WHERE id = 2;
UPDATE employee SET manager_id = 4 WHERE id = 3;
UPDATE employee SET manager_id = null WHERE id = 4;
UPDATE employee SET manager_id = 6 WHERE id = 5;
UPDATE employee SET manager_id = null WHERE id = 6;
UPDATE employee SET manager_id = 8 WHERE id = 7;
UPDATE employee SET manager_id = null WHERE id = 8;