const fizzBuzz = require('./fizzBuzz');

test('return an array with the numbers from 1 to 100', () => {
  const numbers = fizzBuzz();
  expect(numbers.length).toBe(100);
});