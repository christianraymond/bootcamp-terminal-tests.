const assert = require('assert');
const greet = require('../greet');

describe('The greet function', function(){
    it('it should return Hello Andre!', function(){
        assert.equal(greet('Andre'), 'Hello Andre')
    });

    it('should greet any other name inputed', function(){
      assert.equal(greet('Ipreo'), 'Hello Ipreo')
    })
});
