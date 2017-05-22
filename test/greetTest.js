const assert = require('assert');
const greet = require('../greet');

describe('The greet function', function(){
    it('it should return Hello Andre!', function(){
        assert.equal(greet('Andre'), 'Hello Andre')
    });
});
