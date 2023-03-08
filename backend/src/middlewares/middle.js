const validar = (request, response, next) =>{
    const {body} = request
    if (body.title == undefined) {
        return response.status(400).json({Mensagem: 'Title é importante para a execução!'})
    } else if (body.title == ""){
        return response.status(400).json({Mensagem: `Title não pode ser vazio!`})
    } 
    next()
};

module.exports = {
    validar,
}