# Chop

This script was build to make possible replace information inside a template. The main function is called 'chop' and expects two parameters: template(string) and dataset(object). If any of these parameters is missing or do not match with the expected type an error message will be shown. The error messages are provided by the variablesValidation function. The variablesValidation method also verifies if the data sent in dataset is either string or number, and if that is not the case, shows a error message.

To make the replace in the template possible the expression inside double brackets should be equal to the keys passed in dataset. Example of possible template: "My name is {{name}} and I am {{age}} years old". In this case, dataset has to have 'name' and 'age' as keys for values that should be placed into template.
If you want to change the name of the keys in dataset variable make sure to change it in its interface (DatasetInterface) too.

Tests were made using jest. We test if type of myTemplate is string, if type of dataset is object and if chop function returns string.

## Running chop

1. Clone this project on your local machine
2. Make sure you have Typescript installed. You can check how to do that [here](https://www.typescriptlang.org/download)
3. Make sure you are in "Chops" directory
4. Run `tsc chop.ts -w`
5. Copy the path of index.html file
6. Open you Browser and paste the path copied in the previous step
7. Check the console on your inspect tool

----------------------------
## Making changes in variables template and dataset

Both variables can be find in the end of the main file 'chop.ts'. Make sure the expressions you want to be replaced with dataset information is inside double brackets as the following: {{x}}. The chop function tries to find this pattern, so if the expression is not evolved with {{}} chop function will not be able to find it and therefore to replace it correctly.

----------------------------
## Running tests

1. Make sure you have jest installed. You can learn how to do it [here](https://jestjs.io/docs/getting-started#:~:text=Running%20from%20command%20line,a%20variety%20of%20useful%20options.&text=If%20you'd%20like%20to,the%20Jest%20CLI%20Options%20page.)
2. Uncomment the last line of 'chop.ts' file, where chop is exported (further information about this step is given in "Note" section of this readme)
3. Run `tsc chop.ts`
4. Run `npm run test`
----------------------------

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [Jest](https://jestjs.io/docs/getting-started)
----------------------------

## Note
An `Uncaught ReferenceError: module is not defined` error is shown in the browser when the last line of 'chop.ts' file is uncommented. For now, commenting the export line works for the application, but makes the testing impossible, so make sure to uncomment it before running the tests. 

I decided to import via 'require' and not via regular `import {x} from './x';` because I was getting an error with regular import: "Jest encountered an unexpected token". I'm currently working on it and trying to find a better solution. 