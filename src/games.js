const { faker } = require("@faker-js/faker");

function createRandomGame() {

    const game = {
        _id: faker.datatype.uuid(),
        productName: faker.company.bsBuzz(),
        price: faker.commerce.price({ min: 29.99, max: 59.99 }),
        inStock: faker.datatype.boolean(),
    }
    return game;
}

function randomGameCreator(number) {
    const games = [];
    for (let i = 0; i < number; i++) {
        games.push(createRandomGame());
    }
    return games;
}


module.exports = { createRandomGame, randomGameCreator };