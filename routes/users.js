var express = require('express');
const User = require('../model/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  User.find({})
  .exec((err, data)=>{
    if (err){
      return res.json({
        status: 500,
        mensaje: 'Error en la peticion'
      })
    }

    res.json({
      status: 200,
      data
    })

  });
});

/* ADD user */
router.post('/', function (req, res) {
  let body = req.body;

  let user = new User({
    name:body.name,
    lastName: body.lastName,
    age:body.age,
    birthDate:body.birthDate
  })

  user.save((err, data) => {
    if (err){
      return res.json({
        status: 400,
        mensaje: 'Error al crear usuario',
        err
      })
    }

    res.json({
      status: 200,
      data,
      mensaje: "Usuario creado"
    })

})

});

/* UPDATE user */
router.put('/:id', function (req, res) {
  res.send('Got a PUT request');
});

/* DELETE user */
router.delete('/:id', function (req, res) {
  res.send('Got a DELETE request');
});

module.exports = router;
