const readeline = require("readline");

const bash = readeline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

bash.question("Cor? ", function (resposta) {
    console.log(`Sua cor Favorita ${resposta}`);
});
