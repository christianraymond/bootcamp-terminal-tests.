const assert = require('assert');
const countRegNumber = require('../countRegNumber');

describe('The countRegNumber', function(){
  it('it should count all registrations numbers from different towns', function(){
    assert.equal(countRegNumber('CL 124,CY 567,CL 345,CJ 456,CL 341,CL'), 6)
  })
});
