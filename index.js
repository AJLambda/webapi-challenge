// implement your API here

//import express from 'express'; // ES2015 Module Import
const express = require("express"); // define the server; // CommonJS Module Import

const helmet = require("helmet");
const morgan = require("morgan");

//initialize router
// const actions = require("./data/routers/actions");
// const projects = require("./data/routers/projects");

const server = express(); // instantiate the server; return back the server

//parses body and add it to req object
const parser = express.json();
server.use(parser); // server now knows how to write JSON. Extends express by using middleware
server.use(helmet()); // 3rd party security for headers. Hides x powered by Express
server.use(morgan("dev")); // 3rd party logger (logs i.e. GET /api/hubs 200 35.336 ms - 470)

// server.use("/api/actions", actions);
// server.use("/api/projects", projects);

server.get("/", (req, res) => {
  //this function is a request handler. It is also middleware.
  //request and response are positional arguments.
  res.status(200).send("hello"); // .send is a method of the response object. This sends a quick response back to the client
});

const port = 3000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
