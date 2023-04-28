var numeroDaSorte = sorteiaNum();
// console.log(numeroDaSorte);

var chute = pedeChute();
var chance = 2; 

verificaAcerto(chute);





function sorteiaNum () {
    return Math.floor(Math.random() * (10 - 0 + 1) + 0);
}

function pedeChute() {
    return prompt("Digite um número entre 0 e 10");
}

function verificaAcerto(chute) {
    if(chance > 0) {
        if (chute == numeroDaSorte) {
            alert("Você acertou! O número era "+numeroDaSorte);
        } else {
            alert("Você errou! te resta mais "+chance+" chances");
            chance--;
            chute = pedeChute()
            verificaAcerto(chute);
        }
    } else if (chute == numeroDaSorte) {
        alert("Você acertou! O número era "+numeroDaSorte);
    } else {
        alert("Você falhou!");
    }
}