const { query } = require("./connection");
const connection = require("./connection")

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks")
    return tasks
};

const createTk = async (task) => {
    const {title} = task
    const datanow = new Date(Date.now()).toUTCString()
    const query = `INSERT INTO tasks(title, status, create_at) VALUES (?,?,?)`
    const [criartask] = await connection.execute(query, [title, `pendente`, datanow])
    return {insertId: criartask.insertId}
};

const deletetTk = async (id) =>{
    const remover = await connection.execute(`DELETE FROM tasks WHERE id = ?`, [id])
    return remover
}

const atualiza = async (id, task) =>{
    const query = (`UPDATE tasks SET title = ?, status = ? WHERE id = ?`)
    const {title, status} = task
    const atualTk = await connection.execute(query, [title, status, id])
    return atualTk
}

module.exports = {
    getAll,
    createTk,
    deletetTk,
    atualiza,
};

