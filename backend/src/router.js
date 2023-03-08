const express = require("express");
const router = express.Router();
const taskscontrollers = require("./controllers/Taskscontrollers");
const middlewares = require("./middlewares/middle")
const middlewaresST = require("./middlewares/middleST")


router.get("/tasks",  taskscontrollers.getAll);
router.post("/tasks", middlewares.validar, taskscontrollers.createTk);
router.delete("/tasks/:id", taskscontrollers.deletetTk );
router.put("/tasks/:id", middlewares.validar, middlewaresST.validarStatus, taskscontrollers.atualiza );

module.exports = router