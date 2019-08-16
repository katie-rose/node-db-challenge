const express = require("express");
const server = express();

const projectsRouter = require("../routers/projectsRouter");
const tasksRouter = require("../routers/tasksRouter");
const resourcesRouter = require("../routers/resourcesRouter");

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

module.exports = server;
