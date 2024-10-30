import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "employee_tracker",
    password: "password",
});
const result = await pool.query("Select * from department");
console.log(result.rows);
