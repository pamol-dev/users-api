var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
