const validarStatus = (request, response, next) => {
    const {body} = request
    if (body.status == undefined){
        return response.status(400).json({Message: "Status é importante para a aplicação!"})
    } else if (body.status == ""){
        return response.status(400).json({Message: "O status não pode ser vazio!"})
    }
    next()
}


module.exports = {
    validarStatus,
}