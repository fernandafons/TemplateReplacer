
interface DatasetInterface {
    bread: string|number;
    cheese: string|number;
}

const dataset: DatasetInterface = {
    bread: 'baguette',
    cheese: 'brie cheese'
};

const myTemplate = "I like to eat {{bread}} and {{cheese}}";

const chop = (template: string, dataset: object): string => {
    console.log(`template: ${template};`)
    for (let expression in dataset) {
        const regex = /{{[\w\d?]+}}/i;
        template = template.replace(regex, dataset[expression])
    }

    console.log(`template after changes: ${template};`)
    return `${template};`
};

chop(myTemplate, dataset);
// >> 'I like to eat baguette and brie cheese'