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
            result = games.filter((game) => game._id !== productIdentifier);
module.exports = { create, index, show };