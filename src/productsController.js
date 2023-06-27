
const { readJSONFile } = require("./helpers.js");
const { faker } = require("@faker-js/faker");

let games = readJSONFile("./data", "games.json");
let nfts = readJSONFile("./data", "nfts.json");
let programs = readJSONFile("./data", "programs.json");

const inform = console.log;

function create(productType, productName, price, inStock) {
    const productName = process.argv[4];
    const price = Number(process.argv[5]);
    const inStock = process.argv[6];
    let productInventory = [];

    switch (productType) {
        case "games":
            const game = {
                _id: faker.string.uuid(),
                productName: productName,
                price: price,
                inStock: inStock
            }
            productInventory.push(game);
            break;
        case "nfts":
            const nft = {
                _id: faker.string.uuid(),
                itemPreview: faker.image.urlLoremFlickr({ width: 50, height: 50, category: 'abstract' }),
                productName: productName,
                price: price,
                inStock: inStock
            }
            productInventory.push(nft);
            break;
        case "programs":
            const program = {
                _id: faker.string.uuid(),
                productName: productName,
                price: price,
                inStock: inStock,
                version: faker.system.semver()
            }
            productInventory.push(program);
            break;
        default:"There was an error."
    }
    return productInventory;
}

function index(productType) {
    let result;

    switch (productType) {
        case "games":
            result = games.map((game) => game._id + " " + game.productName).join("\n");
            break;
        case "nfts":
            result = nfts.map((nft) => nft._id + " " + nft.productName).join("\n");
            break;
        case "programs":
            result = programs.map((program) => program._id + " " + program.productName).join("\n");
            break;
        default: "There was an error."
    }
    return result;
}

function show(productType, productIdentifier) {
    productIdentifier = process.argv[4];
    let result;

    switch (productType) {
        case "games":
            result = games.find((game) => game._id === productIdentifier);
            break;
        case "nfts":
            result = nfts.find((nft) => nft._id === productIdentifier);
            break;
        case "programs":
            result = programs.find((program) => program._id === productIdentifier);
            break;
        default: "There was an error."
    }
    return result._id + " " + result.productName + " " + result.price + " " + result.inStock;
}

function destroy(productType, productIdentifier) {
    productIdentifier = process.argv[4];
    let result;

    switch (productType) {
        case "games":
            games = games.filter((game) => game._id !== productIdentifier);
            result = games;
            break;
        case "nfts":
            nfts = nfts.filter((nft) => nft._id !== productIdentifier);
            result = nfts;
            break;
        case "programs":
            programs = programs.filter((program) => program._id !== productIdentifier);
            result = programs;
            break;
        default: "There was an error."
    }
    return result;
}

function edit(productType, productIdentifier, productToUpdate, price, inStock) {
    productIdentifier = process.argv[4];
    productToUpdate = process.argv[5];
    price = process.argv[6]
    inStock = process.argv[7]
    let index;
    let result;
    
    switch (productType) {
        case "games":
            index = games.findIndex((game) => game.id === productIdentifier);
            if (index > -1) {
                games[index] =
                {
                    _id: faker.string.uuid(),
                    productName: productToUpdate,
                    price: price,
                    inStock: inStock
                }
                inform("Product updated.");
                result = games;
            } else {
                inform("Product not found.");
                result = games;
            }
            break;
        case "nfts":
            index = nfts.findIndex((nft) => nft.id === productIdentifier);
            if (index > -1) {
                nfts[index] =
                {
                    _id: faker.string.uuid(),
                    itemPreview: faker.image.urlLoremFlickr({ width: 50, height: 50, category: 'abstract' }),
                    productName: productToUpdate,
                    price: price,
                    inStock: inStock
                }
                inform("Product updated.");
                result = nfts;
            } else {
                inform("Product not found.");
                result = nfts;
            }
            break;
        case "programs":
            index = programs.findIndex((program) => program.id === productIdentifier);
            if (index > -1) {
                programs[index] =
                {
                    _id: faker.string.uuid(),
                    productName: productToUpdate,
                    price: price,
                    inStock: inStock,
                    version: faker.system.semver()
                }
                inform("Product updated.");
                result = programs;
            } else {
                inform("Product not found.");
                result = programs;
            }
            break;
        default: "There was an error."
    }
    return result;
}






        
module.exports = { create, index, show, destroy, edit };