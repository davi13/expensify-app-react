const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;
test('should add tow numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});
test('should retunr a string with a name', () => {
    const gettingGreeting = generateGreeting('Mike');
    expect(gettingGreeting).toBe(`Hello Mike!`);
});

test('should ', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})

