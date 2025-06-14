const sum = require('./sum');
const sumAsync = require('./sum').sumAsync;

test('Suma dos números', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Suma dos números asíncrona', async () => {
  const result = await sumAsync(1, 2);
  expect(result).toBe(3);
});

