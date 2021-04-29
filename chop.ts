// variables initialization
interface DatasetInterface {
    bread: string|number;
    cheese: string|number;
}

let dataset: DatasetInterface;
let myTemplate: string;

// Methods
const chop = (template: string, dataset: object): string => {
    console.log(`template: ${template};`)
    variablesValidation(template, dataset)
    for (let expression in dataset) {
        const regex = `{{${expression}}}`;
        template = template.replace(regex, dataset[expression])
    }
    console.log(`template after changes: ${template};`)
    return `${template};`
};

const variablesValidation = (template: string, dataset: object) => {
    if (template == null || dataset == null) {
        console.error("template and dataset are mandatory parameters");
    } else if (typeof template != "string"){
        console.error("template should be a string");
    } else if (typeof dataset != "object"){
        console.error("dataset should be an object");
    } else {
        for (let expression in dataset) {
            if (typeof dataset[expression] != "string" && typeof dataset[expression] != "number") {
                console.error("All values in dataset should be either string or number");
            }
        }
    }
};

// variables definition
myTemplate = "I like to eat {{bread}} and {{cheese}}";
// changes made in dataset keys need to be made in DatasetInterface as well
dataset  = {
    bread: 'baguette',
    cheese: 'brie cheese'
};

chop(myTemplate, dataset);

// export modules to be used in chop.test.js
// module.exports = {chop: chop, myTemplate: myTemplate, dataset: dataset};
