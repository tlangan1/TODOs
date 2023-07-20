// const express = require("express");
import express from "express";
// var express = require("express");
import { getTodos } from "./db.js";
// var getTODOs = require("./db");
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => {
  var s = getTodos(cb);
  function cb(data) {
    console.log(data);
    res.json(data);

    // res.setHeader("Content-Type", "application/json");
    // res.end(JSON.stringify(data));

    // res.send(`Successful response: returning ${data[0].todo_name}`);
    // res.send(JSON.stringify(data));
  }
});

app.get("*", (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/test":
      //   console.log(__dirname + "/test.html");
      res.sendFile(__dirname + "/test.html");
      break;
    case "/todos":
      var s = getTodos(cb);
      function cb(data) {
        console.log(data);
        res.set("access-control-allow-origin", "http://127.0.0.1:3000");
        res.json(data);
      }
      break;
    default:
      res.sendFile(__dirname + "/unknown.html");
      break;
  }
});

// app.get("/test", (req, res) => {
//   console.log(__dirname + "/test.html");
//   res.sendFile(__dirname + "/test.html");
// });

app.use(cors({ origin: "http://127.0.0.1:3000" }));
// app.use(function (req, res, next) {
//   res.set("access-control-allow-origin", "http://127.0.0.1:3000");
//   next();
// });

app.listen(3001, () => console.log("Example app is listening on port 3001."));
