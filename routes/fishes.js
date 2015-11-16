var express = require('express');
var router = express.Router();
var FishesCtrl = require('../controllers/fishes')

//||||||||||||||||||||||||||--
// ROUTES FOR CRUD SERVICES
//||||||||||||||||||||||||||--

// USERS CRUD
router.get('/:id',    FishesCtrl.fishShow);
router.get('/',    FishesCtrl.fishesAll);
router.post('/',   FishesCtrl.fishCreate);
router.put('/:id',    FishesCtrl.fishUpdate);
router.delete('/:id', FishesCtrl.fishDestroy);

module.exports = router;
