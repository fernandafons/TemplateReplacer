var dataset;
var myTemplate;
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
myTemplate = "I like to eat {{bread}} and {{cheese}}";
dataset = {
    bread: 'baguette',
    cheese: 'brie cheese'
};
chop(myTemplate, dataset);
// >> 'I like to eat baguette and brie cheese'
module.exports = { chop: chop, myTemplate: myTemplate, dataset: dataset };
