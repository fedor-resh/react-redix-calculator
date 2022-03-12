
const exported = require('./Calculator/calcFunctions')
let assert = require('assert');

describe("p10_p", function() {
    it("возводит число в степень n", function() {
        assert.equal(exported.p10_p(2, 1,2), 10);
    });
    it('...',()=>{
        assert.equal(exported.p10_p(3, 3), 1);
    })
});