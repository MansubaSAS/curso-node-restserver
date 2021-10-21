const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { a, pepe } = req.query;

    res.json({
            id: 1,
            msg: 'Get API - Controller',
            pepe,
            a
    });
    }

const usuariosPost = (req, res) => {

    const { nombre, edad} = req.body;

    res.json({
        id: 1,
        msg: 'Post API - Controller',
        nombre,
        edad
    });
    }

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        id,
        msg: 'Put Api - Controller',
    });
    }

const usuariosPatch = (req, res) => {
    res.json({
        id: 1,
        msg: 'Patch API - Controller'
    });
    }

const usuariosDelete = (req, res) => {
    res.json({
        id: 1,
        msg: 'Delete API - Controller'
    });
    }

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}