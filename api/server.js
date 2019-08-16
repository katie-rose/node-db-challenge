const express = require("express");
const server = express();

const projectsRouter = require("./routers/projectRouter");
const tasksRouter = require("./routers/taskRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
