const Park = function(){
  this.enclosure = [];
}

Park.prototype.dinosaurCountInEnclosure = function() {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
 this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaur = function (type) {
  let newarray = this.enclosure.filter(s => s.type !==type);
  this.enclosure = newarray;
};

Park.prototype.getAllDinosaursForOffspringCount = function (count) {
  foundDinosaurs = this.enclosure.filter(s => s.numberOfOffspring >2);
  return foundDinosaurs;
};

module.exports = Park;
