// import {chop} from '../chop';
const chop = require('../chop').chop
console.log(require('../chop'))
// console.log("dasdiasdisjadijaisd")
const myTemplate = require('../chop').myTemplate
const dataset = require('../chop').dataset
// const DatasetInterface = require('../chop')

// import { chop, dataset, myTemplate } from "../chop";

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