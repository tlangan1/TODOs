// I have written JavaScript code for fetching data from a MySQL database. I have used connection pooling and Promise API.

// var mySql = require("mysql");
import { createPool } from "mysql";

var pool = createPool({
  host: "localhost",
  user: "tlangan",
  password: "-UnderAWhiteSky1",
  database: "todos", //schema
  connectionLimit: 13, // at a time 13 connection be created in pool
});
// console.log(pool);

function fetchTodos() {
  return new Promise(fn);

  function fn(resolve, reject) {
    pool.getConnection(function (err, con) {
      if (err) {
        return reject(err);
      } else {
        con.query("select * from todos", function (err, rows) {
          if (err) {
            return reject(err);
          } else {
            con.release(); // releasing connection to pool
            return resolve(rows);
          }
        });
      }
    }); // getConnection
  } // fn
} // getDepartments

export async function getTodos(callback) {
  var rows = await fetchTodos();

  rows.forEach((element) => {
    console.log(element.todo_name);
  });

  console.log("return", rows);
  callback(rows);

  //   return fetchTodos();
}

// To test as a stand-alone node app
// console.log(getTodos());
// var rows = await getTodos();
// console.log(rows);
