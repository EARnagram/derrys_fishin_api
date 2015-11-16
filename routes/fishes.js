var express = require('express');
var router = express.Router();

// Require fishes controller
var FishesCtrl = require('../controllers/fishes')

//||||||||||||||||||||||||||--
// FISHES CRUD SERVICES
//||||||||||||||||||||||||||--
router.get('/:id',    FishesCtrl.fishShow);
router.get('/',       FishesCtrl.fishIndex);
router.post('/',      FishesCtrl.fishCreate);
router.put('/:id',    FishesCtrl.fishUpdate);
router.delete('/:id', FishesCtrl.fishDelete);

module.exports = router;
