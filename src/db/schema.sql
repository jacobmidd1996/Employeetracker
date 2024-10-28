DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

\c employee_tracker;

CREATE TABLE Department (
  id SERIAL PRIMARY KEY,
department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) unique not null,
    salary DECIMAL NOT NULL,
    department_id INTEGER  NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
create TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id integer not null,
    manager_id integer,
    foreign key (role_id) REFERENCES roles(id),
    foreign key (manager_id)  REFERENCES employee(id) ON DELETE SET NULL
)
