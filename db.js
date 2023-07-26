// db.js: This code provides a thin wrapper around a mysql server

import { createPool } from "mysql";

var pool = createPool({
  host: "localhost",
  user: "tlangan",
  password: "-UnderAWhiteSky1",
  database: "todos", //schema
  // Remember, connections are lazily created
  connectionLimit: 10,
});
// console.log(pool);

function fetchTodos() {
  return new Promise(func);

  function func(resolve, reject) {
    pool.query("select * from todos", function (error, rows) {
      if (error) reject(error);
      resolve(rows);
    });
  } // func
} // fetchTodos

export async function getTodos(callback) {
  try {
    var rows = await fetchTodos();
    callback(rows);
  } catch (err) {
    console.log("Database error", err);
  }
}

export async function addTodo() {
  return new Promise(fn);

  function fn(resolve, reject) {
    pool.getConnection(function (err, con) {
      if (err) {
        return reject(err);
      } else {
        con.query(
          "insert into todos (TODO_id, TODO_name) values (5, 'fifth todo')",
          function (err, rows) {
            if (err) {
              return reject(err);
            } else {
              con.release(); // releasing connection to pool
              return resolve(rows);
            }
          }
        );
      }
    }); // getConnection
  }
}

// To test as a stand-alone node app
// console.log(getTodos());
// var rows = await getTodos();
// console.log(rows);
