const allocateRandomAngPao = require('../src/allocation.js')

test('Number of Ang Pao should be equal to number of receivers.', () => {
  let amount = 1000
  expect(allocateRandomAngPao(amount, 1000).length).toBe(1000)
  expect(allocateRandomAngPao(amount, 100).length).toBe(100)
  expect(allocateRandomAngPao(amount, 20).length).toBe(20);
  expect(allocateRandomAngPao(amount, 1).length).toBe(1);
});

test('Sum of all Ang Pao should equal to initial amount', () => {
  let numberOfReceiver = 20
  expect(allocateRandomAngPao(1000, numberOfReceiver).reduce((a, b) => (parseFloat(a, 10) + parseFloat(b, 10)).toFixed(1), 0)).toBe('1000.0');
  expect(allocateRandomAngPao(100, numberOfReceiver).reduce((a, b) => (parseFloat(a, 10) + parseFloat(b, 10)).toFixed(1), 0)).toBe('100.0');
  expect(allocateRandomAngPao(10, numberOfReceiver).reduce((a, b) => (parseFloat(a, 10) + parseFloat(b, 10)).toFixed(1), 0)).toBe('10.0');
  expect(allocateRandomAngPao(1, numberOfReceiver).reduce((a, b) => (parseFloat(a, 10) + parseFloat(b, 10)).toFixed(1), 0)).toBe('1.0');
});

test('Maximum amount of every Ang Pao should be less than amount.', () => {
  expect(allocateRandomAngPao(1000, 20).reduce(
    function(a, b) {return Math.max(a, b)})
  ).toBeLessThan(1000);
  expect(allocateRandomAngPao(1, 20).reduce(
    function(a, b) {return Math.max(a, b)})
  ).toBeLessThan(1);
});


