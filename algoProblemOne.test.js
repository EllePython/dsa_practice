const onlyOnce = require('./algoProblemOne');

describe('check number that appears once in the array to return', () => {
    test('check single number is not repeated', () => {
        const numsList = [2, 1, 2, 3, 3, 5, 1];
    expect(onlyOnce(numsList)).toBe(5);

    });
});