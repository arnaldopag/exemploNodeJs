const fs = require("fs");
const request = require("request");
const { json } = require("stream/consumers");
const caminho = "marcas.Json";

const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

request(url, function (err, reposta, corpo) {
    if (!err) {
        let marcas = JSON.parse(corpo);
        let filtroMarcas = marcas.filter(function (item) {
            return item.nome[0] == "S";
        });
        console.log(filtroMarcas);
        let stringMarcas = JSON.stringify(filtroMarcas);
        fs.writeFileSync(caminho, stringMarcas, {
            encoding: "utf-8",
            flag: "w",
        });
    }
});
