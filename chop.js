const dataset = {
    bread: "baguette",
    cheese: "brie cheese",
    };
    
// The info inside the {{}} needs to be the same key in dataset
const myTemplate = "I like to eat {{bread}} and {{cheese}}";

const chop = (template, dataset) => {
    console.log(`${template};`)
    for (i in dataset) {
        const chartoreplace = `{{${i}}}`;
        template = template.replace(chartoreplace, dataset[i])
    }

    console.log(`${template};`)
    return `${template};`
};

chop(myTemplate, dataset);
// >> 'I like to eat baguette and brie cheese'