const { faker } = require("@faker-js/faker");

function createRandomNft() {

    const nft = {
        _id: faker.string.uuid(),
        itemPreview: faker.image.urlLoremFlickr({ width: 50, height: 50, category: 'abstract' }),
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