const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(5, 5);

  expect(result).toBe(10);
});

test('should say hi to Mike', () => {
  const result = generateGreeting('Mike');

  expect(result).toBe('Hello Mike');
});