const { response, request } = require('express');


const usuariosGet = (req, res = response) => {
    res.json({
        msg: ' get Api - Controlador'
    })
}
const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: ' post Api - Controlador',
        nombre,
        edad
    })
}

// Recoge parámetros del url 
// router.put('/:id', usuariosPut);
const usuariosPut = (req, res = response) => {
    const id = req.params.id;


    res.json({
        msg: ' put Api - Controlador',
        id
    })
}

// Usar parámetros  opcionales
// son opcionales si el url tiene un signo de interrogación
// y en seguida el nombre de una variable
// ?q
const usuariosDelete = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        msg: ' delete Api - Controlador',
        q,
        nombre,
        apikey
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}