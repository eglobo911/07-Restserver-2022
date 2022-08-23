const { response } = require('express');

// const { validationResult } = require('express-validator');

const bcryptjs = require('bcryptjs');



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
    
  // const errors = validationResult(req);
  // if ( !errors.isEmpty() ) {
  //   return res.status(400).json(errors);
  // }

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne( { correo } );
    if ( existeEmail ) {
      return res.status(400).json( { 
        msg: 'El correo ya esta registrado'
       } );
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync( password, salt )

    // Guardar en BD
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