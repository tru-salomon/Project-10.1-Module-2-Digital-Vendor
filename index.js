const { createRandomGame, randomGameCreator } = require("./src/games.js");
const { createRandomNft, randomNftCreator } = require("./src/nft.js");
const { createRandomProgram, randomProgramCreator } = require("./src/programs.js");
const { writeJSONFile, readJSONFile } = require("./helpers.js");
const { create, index, show } = require("./src/productsController.js");
const { up } = require("inquirer/lib/utils/readline.js");



const inform = console.log;

function run() {
    let writeToFile = false;
    let updatedProduct = [];
    const action = process.argv[2];
    const productType = process.argv[3];

    switch (action) {
        case "index":
            const productView = index(productType);
            inform(productView);
            break;
        case "create":
            updatedProduct = create(productType, productName, price, inStock);
            writeToFile = true;
            break;
        case "show":
            const selectedProduct = show(productType, productIdentifier);
            inform(selectedProduct);
            break;
        case "update":
            inform(action, productType, productIdentifier);
            break;
        case "destroy":
            updatedProduct = destroy(productType, productIdentifier);
            writeToFile = true;
            break;
        case "score":
            inform(action);
            break;
        default:
            inform("There was an error.");
    }
    if (writeToFile) {
        writeJSONFile("./data", `${productType}.json`, updatedProduct);
}
run();