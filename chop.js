var dataset;
var myTemplate;
// Methods
var chop = function (template, dataset) {
    console.log("template: " + template + ";");
    variablesValidation(template, dataset);
    for (var expression in dataset) {
        var regex = /{{[\w\d?]+}}/i;
        template = template.replace(regex, dataset[expression]);
    }
    console.log("template after changes: " + template + ";");
    return template + ";";
};
var variablesValidation = function (template, dataset) {
    if (template == null || dataset == null) {
        console.error("template and dataset are mandatory parameters");
    }
    else if (typeof template != "string") {
        console.error("template should be a string");
    }
    else if (typeof dataset != "object") {
        console.error("dataset should be an object");
    }
    else {
        for (var expression in dataset) {
            if (typeof dataset[expression] != "string" && typeof dataset[expression] != "number") {
                console.error("All values in dataset should be either string or number");
            }
        }
    }
};
// variables definition
myTemplate = "I like to eat {{x}} and {{x}}";
// changes made in dataset keys need to be made in DatasetInterface as well
dataset = {
    bread: 'baguette',
    cheese: 'brie cheese'
};
chop(myTemplate, dataset);
// export modules to be used in chop.test.js
// module.exports = {chop: chop, myTemplate: myTemplate, dataset: dataset}
