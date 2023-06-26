const { faker } = require("@faker-js/faker");

function createRandomProgram() {

    const program = {
        _id: faker.string.uuid(),
        productName: faker.company.buzzVerb(),
        price: faker.commerce.price({ min: 159.99, max: 499.99 }),
        inStock: faker.datatype.boolean(),
        version: faker.system.semver()
    }
    return program;
}

function randomProgramCreator(number) {
    const programs = [];
    for (let i = 0; i < number; i++) {
        programs.push(createRandomProgram());
    }
    return programs;
}


module.exports = { createRandomProgram, randomProgramCreator };