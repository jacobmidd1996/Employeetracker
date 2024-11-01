import inquirer from "inquirer";
import database from "./db/index.js";

const db = new database();

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "view all employees",
            value: "viewemployees",
          },
          {
            name: "View all departments",
            value: "viewdepartments",
          },
          { name: "view all roles", value: "viewroles" },
          { name: "add new department", value: "adddep" },
          { name: "add new role", value: "addrole" },
        ],
      },
    ])
    .then((response) => {
      switch (response.choice) {
        case "viewemployees":
          viewemployees();
          break;
        case "viewdepartments":
          viewdepartments();
          break;
        case "viewroles":
          viewroles();
          break;
        case "adddep":
          adddep();
          break;
        case "addrole":
          addrole();
          break;
      }
    });
}

function viewemployees() {
  db.findemps().then(({ rows }) => {
    console.log(rows);
    console.log("\n");
    console.table(rows);
  });
}
function viewdepartments() {
  db.finddep().then(({ rows }) => {
    console.log(rows);
    console.log("\n");
    console.table(rows);
  });
}
function viewroles() {
  db.findrole().then(({ rows }) => {
    console.log(rows);
    console.log("\n");
    console.table(rows);
  });
}
function adddep() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the new department",
      },
    ])
    .then((department) => {
      db.adddepartment(department).then(({ rows }) => {
        console.log(rows);
        console.log("\n");
        console.table(rows);
        mainMenu();
      });
    });
}
function addrole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the new roll",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for the new role?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department ID for this role?",
      },
    ])
    .then((roles) => {
      console.log(roles);
      db.addroles(roles).then(({ rows }) => {
        console.log(rows);
        console.log("\n");
      });
    });
}
mainMenu();
