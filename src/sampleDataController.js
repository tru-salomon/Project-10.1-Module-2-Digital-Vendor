const { randomGameCreator } = require("./src/games.js");
const { randomNftCreator } = require("./src/nft.js");
const { randomProgramCreator } = require("./src/programs.js");

const { writeJSONFile } = require("./helpers.js");

const inform = console.log;

function populateJSONFile() {
    let result;
    const productType = process.argv[2];
    const number = Number(process.argv[3]);

    switch (productType) {
        case "games":
            if (number !== 0) {
                result = writeJSONFile("./data", "games.json", randomGameCreator(number));
            } else {
                throw new Error("Please enter a number greater than 0.");
            }
            break;
        case "nfts":
            if (number !== 0) {
                result = writeJSONFile("./data", "nfts.json", randomNftCreator(number));
            } else {
                throw new Error("Please enter a number greater than 0.");
            }
            break;
        case "programs":
            if (number !== 0) {
                result = writeJSONFile("./data", "programs.json", randomProgramCreator(number));
            } else {
                throw new Error("Please enter a number greater than 0.");
            }
            break;
        default:
            result = "There was an error."
    }
     inform(result);
}

populateJSONFile();