const { createRandomGame, randomGameCreator } = require("./src/games.js");
const { createRandomNft, randomNftCreator } = require("./src/nft.js");
const { createRandomProgram, randomProgramCreator } = require("./src/programs.js");
const { writeJSONFile, readJSONFile } = require("./helpers.js");
const inform = console.log;

function run() {
    let games = readJSONFile("./data", "games.json");
    let nfts = readJSONFile("./data", "nfts.json");
    let programs = readJSONFile("./data", "programs.json");
    const action = process.argv[2];
    const productType = process.argv[3];
    const productIdentifier = process.argv[4];
    switch (action) {
        case "index":
            inform(action);
            break;
        case "create":
            inform(action, productType);
            break;
        case "show":
            inform(action, productType, productIdentifier);
            break;
        case "update":
            inform(action, productType, productIdentifier);
            break;
        case "delete":
            inform(action, productType, productIdentifier);
            break;
        case "score":
            inform(action);
            break;
        default:
            inform("There was an error.");
    }
}
run();