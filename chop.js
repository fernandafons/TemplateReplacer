var dataset = {
    bread: 'baguette',
    cheese: 'brie cheese'
};
var myTemplate = "I like to eat {{bread}} and {{cheese}}";
var chop = function (template, dataset) {
    console.log("template: " + template + ";");
    for (var expression in dataset) {
        var regex = /{{[\w\d?]+}}/i;
        template = template.replace(regex, dataset[expression]);
    }
    console.log("template after changes: " + template + ";");
    return template + ";";
};
chop(myTemplate, dataset);
// >> 'I like to eat baguette and brie cheese'
