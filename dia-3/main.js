function escolheTecnologia(area) {
    if (area == "Front-End") {
        var tecnologia = prompt("Que técnologia você quer aprender em " + area + ": React ou Vue ?");
    } else if(area == "Back-End") {
        var tecnologia = prompt("Que técnologia você quer aprender em " + area + ": C# ou Java ?");
    } else {
        alert("Você digitou errado!");
    }
    return tecnologia;
}

const area = prompt("Front-End ou Back-End ?");
console.log(area);
var tecnologia = escolheTecnologia(area);
console.log(tecnologia);
var nivel = prompt("Especializar em "+area+" ou FullStack");
console.log(nivel);

if (nivel == "Especializar") {
    alert("Muito bem! Você quer se Especializar em "+area);
} else if (nivel == "FullStack") {
    alert("Muito bem! Você quer se tornar um FullStack");
}

var listaTecnologias = [];

var querAprender = 0;

while (querAprender < 1) {
    var teste = prompt("quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer. Digite uma por uma");
    listaTecnologias.push(teste);
    querAprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender. Digite 0 para Sim, e 1 para não");
}

alert("Meus parabéns! Você quer aprender todas essas tecnologias:" + listaTecnologias);