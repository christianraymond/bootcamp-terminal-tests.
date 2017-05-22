const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');

describe('The countAllFromTown function', function(){
    it('Should count all registrations numbers from town', function(){
        assert.equal(countAllFromTown('CA, CY, CA'));
    });
});
