// Description: This file is the entry point for the application. It will be used to run the application from the command line.

const { writeJSONFile} = require("./helpers.js");
const { create, index, show, destroy, edit } = require("./src/productsController.js");



const inform = console.log;

function run() {
    let writeToFile = false;
    let updatedProducts = [];
    const action = process.argv[2];
    const productType = process.argv[3];

    switch (action) {
        case "index":
            const productView = index(productType);
            inform(productView);
            break;
        case "create":
            updatedProducts = create(productType, productName, price, inStock);
            writeToFile = true;
            break;
        case "show":
            const selectedProduct = show(productType, productIdentifier);
            inform(selectedProduct);
            break;
        case "update":
            updatedProducts = edit(productType, productIdentifier, productToUpdate, price, inStock);
            writeToFile = true;            
            break;
        case "destroy":
            updatedProducts = destroy(productType, productIdentifier);
            writeToFile = true;
            break;
        default:
            inform("There was an error.");
    }
    if (writeToFile) {
        writeJSONFile("./data", `${productType}.json`, updatedProducts);
    }
}

run();