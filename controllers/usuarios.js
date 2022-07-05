
const { response } = require('express');

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

const usuariosPost = (req, res = response ) => {
    
    const { nombre, edad } = req.body;
    
    res.json({
      msg: "post api - controlador",
      nombre,
      edad
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
