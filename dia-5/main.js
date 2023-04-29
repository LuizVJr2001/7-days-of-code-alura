const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];


var acabou = false;


//categorias


while (!acabou) {
    var continuar = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com sim ou não.");

    if(continuar == "não") {
        acabou = true;

        alert(`Sua lista é:
        frutas: ${frutas};
        laticinios: ${laticinios};
        congelados: ${congelados};
        doces: ${doces};`);
        break;
    }

    var comida = prompt("Qual comida você deseja inserir?");
    var categoria = prompt(`Qual categoria você deseja adicionar ${comida}? frutas, laticinios, congelados ou doces.`);
    
    if(categoria === "frutas") {
        frutas.push(comida);
    } else if(categoria == "laticinios") {
        laticinios.push(comida);
    } else if(categoria == "congelados") {
        congelados.push(comida);
    } else if(categoria == "doces") {
        doces.push(comida);
    } else {
        alert("não existe essa categoria!");
    }
}
