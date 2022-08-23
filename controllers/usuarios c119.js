const { response } = require('express');

const Usuario = require('../models/Usuario')

const usuariosGet = (req, res = response ) => {

    const { q, nombre = 'No name received', apikey, page = 1, limit } = req.query;

    res.json({
      msg: "get api - controlador",
      q,
      nombre,
      apikey,
      page,
      limit
    });
  };

const usuariosPut = (req, res = response ) => {
    
    const {id} = req.params;
    
    res.json({
      msg: "put api - controlador",
      id
    });
  };

const usuariosPost = async (req, res = response ) => {
    
    const body = req.body;
    const usuario = new Usuario( body );

    await usuario.save();
    
    res.json({
      usuario
    });
  };

const usuariosDelete = (req, res = response ) => {
    res.json({
      msg: "delete api - controlador"
    });
  };

const usuariosPatch = (req, res = response ) => {
    res.json({
      msg: "patch api - controlador"
    });
  };

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
  }