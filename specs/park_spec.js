const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function(){
  let park;
  let velociraptor;
  let trex;

  beforeEach(function(){
    park = new Park();
    velociraptor = new Dinosaur('Velociraptor');
    trex = new Dinosaur('Tyrannosaurus');
  });

  it('enclosure should start empty', function(){
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur', function(){
    park.addDinosaur(velociraptor);
    const actual = park.dinosaurCountInEnclosure();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove all dinosaurs of a particular type', function(){
    park.addDinosaur(velociraptor);
    park.addDinosaur(trex);
    park.addDinosaur(trex);
    const countBefore = park.dinosaurCountInEnclosure();
    assert.strictEqual(countBefore, 3);
    park.removeDinosaur('Tyrannosaurus');
    const countAfter = park.dinosaurCountInEnclosure();
    assert.strictEqual(countAfter, 1);
    assert(!park.enclosure.includes(trex));
  });

});
