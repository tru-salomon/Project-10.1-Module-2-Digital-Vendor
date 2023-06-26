const { faker } = require("@faker-js/faker");

function createRandomNft() {

    const nft = {
        _id: faker.datatype.uuid(),
        itemPreview: faker.image.abstract(50, 50, true),
        productName: faker.company.buzzPhrase(),
        price: faker.commerce.price({ min: 299.99, max: 899.99 }),
        inStock: faker.datatype.boolean(),
    }
    return nft;
}

function randomNftCreator(number) {
    const nfts = [];
    for (let i = 0; i < number; i++) {
        nfts.push(createRandomNft());
    }
    return nfts;
}


module.exports = { createRandomNft, randomNftCreator };