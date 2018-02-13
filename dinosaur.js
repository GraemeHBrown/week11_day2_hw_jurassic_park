const Dinosaur = function(type){
  this.type = type;
  this.numberOfOffspring = 0;
}

Dinosaur.prototype.countOffspring = function() {
  return this.numberOfOffspring;
}

module.exports = Dinosaur;
