const assert = require('assert');
const testedFunction = require('../countAllPaarl');

describe('The countAllPaarl function', function(){
  it('Should return all car registration numbers from Paarl', function(){
    assert.equal(testedFunction('CP, CY, CP'))
  })
})
