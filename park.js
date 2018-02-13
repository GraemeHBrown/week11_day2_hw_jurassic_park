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

module.exports = Park;
