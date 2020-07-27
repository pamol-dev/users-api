var express = require('express');
const User = require('../model/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  User.find({})
  .exec((err, data)=>{
    if (err){
      return res.json({
        status: 200,
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
  res.send('Got a POST request');
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
