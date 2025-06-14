const sum = require('./sum');
const sumAsync = require('./sum').sumAsync;

// Test 1

test('Suma dos números', () => {
  expect(sum(1, 2)).toBe(3);
});

// Test 2
test('Suma dos números asíncrona', async () => {
  const result = await sumAsync(1, 2);
  expect(result).toBe(3);
});

