const chop = require('../chop').chop
const myTemplate = require('../chop').myTemplate
const dataset = require('../chop').dataset

test('checks if type of myTemplate is string', () => {
    expect(typeof myTemplate).toBe('string');
});

test('checks if type of dataset is object', () => {
    expect(dataset instanceof Object).toBe(true);
});

test('checks if chop function returns string', () => {
    const returnType = chop(myTemplate, dataset);
    expect(typeof returnType).toBe('string');
});