
const { Router } = require('express');
const { check } = require('express-validator');


const { usuariosGet, usuariosPut, usuariosPost, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');
const { esRoleValido } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get("/", usuariosGet );

router.put("/:id", usuariosPut);

router.post("/", [
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'password', 'El password debe ser de 6 letras o mas' ).isLength( { min:6 } ),
    check( 'correo', 'El correo no es valido' ).isEmail(),
    check( 'rol').custom( esRoleValido ),
    validarCampos
] , usuariosPost);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);



module.exports = router;