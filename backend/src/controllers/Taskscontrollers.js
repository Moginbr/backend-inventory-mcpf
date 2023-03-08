const { response } = require("express")
const tasksmodels = require(`../models/tasksmodels`)
const getAll = async (request, response) =>{
    const tasks = await tasksmodels.getAll()
    return response.status(200).json(tasks)
}

const createTk = async(request, response) => {
    const criarTask = await tasksmodels.createTk(request.body);
    return response.status(201).json(criarTask)
}


const deletetTk = async(request, response) =>{
    const { id } = request.params
    await tasksmodels.deletetTk(id)
    return response.status(204).json()
}

const atualiza = async (request, response) =>{
    const { id } = request.params
    await tasksmodels.atualiza(id, request.body)
    return response.status(204).json()
}
module.exports = {
    getAll,
    createTk,
    deletetTk,
    atualiza,
}

