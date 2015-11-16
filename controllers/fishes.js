// Require the model/s you're controlling
var Fish = require("../models/fish");

//||||||||||||||||||||||||||--
//  GET FISH
//||||||||||||||||||||||||||--
var fishShow = function(req, res, next){
  var id = req.params.id;

  Fish.findById(id, function(err, fish){
    if (err) {
      res.send(err);
    }

    // return that fish as JSON
    res.json(fish);
  });
};

//||||||||||||||||||||||||||--
// GET FISHES
//||||||||||||||||||||||||||--
var fishesAll = function(req, res) {
  Fish.find({}, function(err, fishes) {
    if (err) {
      res.send(err);
    }

    // return the fishes
    res.json(fishes);
  });
}

//||||||||||||||||||||||||||--
// CREATE FISH
//||||||||||||||||||||||||||--
var fishCreate = function(req, res) {
  var fish       = new Fish();   // create a new instance of the Fish model

  fish.name      = req.body.name;
  fish.category  = req.body.category;

  fish.save(function(err) {
    if (err) {
      res.send(err)
    }
    // return a message
    res.json({ message: 'Fish remembered!' });
  });
};

//||||||||||||||||||||||||||--
// UPDATE FISH
//||||||||||||||||||||||||||--
var fishUpdate = function(req, res) {
  var id = req.params.id;

  Fish.findById(id, function(err, fish) {

    if (err) {
      res.send(err);
    }

    // set the new fish information if it exists in the request
    if (req.body.name) fish.name = req.body.name;
    if (req.body.category) fish.category = req.body.category;

    // save the fish
    fish.save(function(err) {
      if (err) {
        res.send(err);
      }
      // return a message
      res.json({ message: "Oh, that's the fish!" });
    });
  });
}

//||||||||||||||||||||||||||--
// DESTROY FISH
//||||||||||||||||||||||||||--
var fishDelete = function(req, res) {
  var id = req.params.id;

  Fish.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Forget that Fish!' });
  });
}

// Export the function/s as JSON
module.exports = {
  fishShow:   fishShow,
  fishesAll:  fishesAll,
  fishCreate: fishCreate,
  fishUpdate: fishUpdate,
  fishDelete: fishDelete
}

