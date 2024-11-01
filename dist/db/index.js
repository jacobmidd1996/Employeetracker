import { pool } from "./connection.js";
export default class database {
    constructor() { }
    async query(sequel, args = []) {
        const client = await pool.connect();
        try {
            const databack = await client.query(sequel, args);
            // console.log(databack);
            return databack;
        }
        finally {
            client.release();
        }
    }
    async findemps() {
        return this.query("select employee.id, employee.first_name,employee.last_name,roles.title,roles.salary,roles.department_id,Department.department_name from employee left join roles on employee.role_id = roles.id left join Department on roles.department_id = Department.id;");
    }
    async finddep() {
        return this.query("SELECT department_name,title,salary FROM department  d LEFT JOIN roles r ON d.id = r.department_id ORDER BY d.department_name;");
    }
    async findrole() {
        return this.query("SELECT* FROM roles;");
    }
    async adddepartment(department) {
        return this.query("INSERT INTO department (department_name) values ($1)", [
            department.department_name,
        ]);
    }
    async addroles(role) {
        return this.query("INSERT INTO roles (title,salary,department_id) values ($1,$2,$3)", [role.title, role.salary, role.department_id]);
    }
}
