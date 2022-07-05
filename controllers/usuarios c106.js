
const { response } = require('express');

const usuariosGet = (req, res = response ) => {
    res.json({
      msg: "get api - controlador"
    });
  };

const usuariosPut = (req, res = response ) => {
    res.json({
      msg: "put api - controlador"
    });
  };

const usuariosPost = (req, res = response ) => {
    res.json({
      msg: "post api - controlador"
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
