// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('expects to output fizz, buzz or fizz-buzz for multiples of 3, 5 or 15', function() {
    // range of normal inputs, including
    // notable cases like number that are 
    // divisible by all  3 multiples
    const normalCases = [
      {num: 48, expected: 'fizz'},
      {num: 45, expected: 'fizz-buzz'},
      {num: 40, expected: 'buzz'},
      {num: 35, expected: 'buzz'},      
      {num: 30, expected: 'fizz-buzz'},
      {num: 21, expected: 'fizz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 12, expected: 'fizz'},
      {num: 10, expected: 'buzz'}
    ];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should raise error if arg not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
     'a', 'four', true, false, '', [1,2,3,4]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});