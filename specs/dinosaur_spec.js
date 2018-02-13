const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Velociraptor');
  });

  it('should have a type', function(){
    const actual = dinosaur.type;
    assert.strictEqual(actual, 'Velociraptor');
  });

  it('should have a number of offspring', function(){
    dinosaur.numberOfOffspring = 1;
    const actual = dinosaur.countOffspring();
    assert.strictEqual(actual, 1);
  })

});
