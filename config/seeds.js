var mongoose = require('./database');

var Fish = require('../models/fish');

var fishes = [
  { // 0
    name: "Michelin Tire",
    category:  "Trash"
  },
  { // 1
    name: "Tabby (Derry's Dog)",
    category:  "Corpse"
  },
  { // 2
    name: "Trout",
    category: "Fish"
  },
  { // 3
    name: "Flounder",
    category: "Fish"
  },
  { // 4
    name: "Left Boot",
    category: "Clothing"
  }
];

Fish.remove({}, function(err) {
  if (err) console.log(err);
  Fish.create(fishes, function(err, fishes) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + fishes.length  + " fishes.");
      mongoose.disconnect();
    }
  });
});
