// server.js: This code provides a thin wrapper around an express server
// listening for http requests on port 3001

import express from "express";
import { addTodo, getTodos } from "./db.js";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:3000" }));
// app.use(function (req, res, next) {
//   res.set("access-control-allow-origin", "http://127.0.0.1:3000");
//   next();
// });

app.get("*", (req, res) => {
  console.log("Server Get Request:", req.url);

  switch (req.url) {
    case "/test":
      //   console.log(__dirname + "/test.html");
      res.sendFile(__dirname + "/test.html");
      break;
    case "/todos":
      try {
        var s = getTodos(cb);
      } catch (err) {
        console.log(err);
      }
      function cb(data) {
        // console.log(data);
        // res.set("access-control-allow-origin", "http://127.0.0.1:3000");
        res.json(data);
      }
      break;
    default:
      res.sendFile(__dirname + "/unknown.html");
      break;
  }
});

app.post("*", (req, res) => {
  console.log("Server Post Request:", req.url);
  switch (req.url) {
    case "/Addtodo":
      console.log(req.body);
      try {
        addTodo(req.body);
      } catch (err) {
        addTodo(err);
      }
      break;
    default:
      res.sendFile(__dirname + "/unknown.html");
      break;
  }
});

app.listen(port, () => console.log("Example app is listening on port 3001."));
