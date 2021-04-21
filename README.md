# Chop

This script was build to make possible replace information inside a template. The main function is called 'chop' and expects two parameters: template(string) and dataset(object). If any of these parameters is missing or do not match with the expected type an error message will be shown. The error messages are provided by the variablesValidation function. The variablesValidation method also verifies if the data sent in dataset is either string or number, and if that is not the case, shows a error message.

To make the replace of the expressions possible I decided to use regex, this way the user can use any word in its template with no need of matching it with the key passed in dataset, as long as it is inside double brackets as so: {{}}. Example of possible template: "My name is {{name}} and I am {{age}} years old".
If you want to change the name of the keys in dataset variable make sure to change it in its interface (DatasetInterface) too.

Tests were made using jest. We test if type of myTemplate is string, if type of dataset is object and if chop function returns string.

## Running chop

1. Clone this project on your local machine
2. Make sure you have Typescript installed. You can check how to do that [here](https://www.typescriptlang.org/download)
3. Make sure you are in "Chops" directory
4. Run `tsc chop.ts -w`
6. Copy the path of index.html file
5. Open you Browser and paste the path copied in the previous step
6. Check the console on your inspect tool

----------------------------
## Making changes in variables template and dataset

Both variables can be find in the end of the main file 'chop.ts'. Make sure the expressions you want to be replaced with dataset information is inside double brackets as the following: {{x}}. The chop function uses regex to find this pattern, so if the expression is not evolved with {{}} regex will not be able to find it and therefore to replace it correctly.

----------------------------
## Running tests

1. Make sure you have jest installed. You can learn how to do it [here](https://jestjs.io/docs/getting-started#:~:text=Running%20from%20command%20line,a%20variety%20of%20useful%20options.&text=If%20you'd%20like%20to,the%20Jest%20CLI%20Options%20page.)
1. Run `tsc chop.ts`
2. Run `npm run test`
----------------------------

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [Jest](https://jestjs.io/docs/getting-started)
----------------------------

## Note
An `Uncaught ReferenceError: module is not defined` error is being shown in the final line on console log. Since this error do not interfere with the proper functioning of the script I decided to commit it, but I'm working on it.