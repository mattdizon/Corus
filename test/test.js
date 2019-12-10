var assert = require('assert');
const { expect } = require('chai')
let primes = require('../generatePrime.js')

describe('Prime Generator', function() {
  describe('generatePrimes', function() {
    it('should return [-1] when no number is prime', function() {
        assert.equal(-1, primes.generatePrime(1));
      });
    it('should return [2, 3, 5, 7, 11, 13, 17, 19] when given 20', function() {
        const res = [2, 3, 5, 7, 11, 13, 17, 19 ]
        expect(res).to.deep.equal(primes.generatePrime(20));
    });
  });
});
