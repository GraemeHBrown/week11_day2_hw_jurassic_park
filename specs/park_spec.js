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
    tricer = new Dinosaur('Triceratops');
    trex.numberOfOffspring = 3;
    tricer.numberOfOffspring = 4;
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

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    park.addDinosaur(velociraptor);
    park.addDinosaur(trex);
    park.addDinosaur(tricer);
    const foundDinosaurs = park.getAllDinosaursForOffspringCount(2);
    assert.strictEqual(foundDinosaurs.length, 2);

  });

});
