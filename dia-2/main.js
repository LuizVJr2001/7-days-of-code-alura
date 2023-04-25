const form = document.querySelector(".formulario");
const resposta = document.querySelector(".resposta");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");
    const linguagem = document.querySelector("#linguagem");

    var mensagem = "Olá " + nome.value + ", você tem " + idade.value +" anos e já está aprendendo " + linguagem.value + "!";

    var gostaLinguagem = prompt("Você gosta de estudar " + linguagem.value + " ? Responda o número 1 para SIM ou 2 para NÃO.");
    
    if(gostaLinguagem == "1") {
        mensagem2 = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else {
        mensagem2 = "Ahh que pena... Já tentou aprender outras linguagens?";
    }
    
    texto = document.createTextNode(mensagem);
    texto2 = document.createTextNode(mensagem2);
    resposta.appendChild(texto);
    resposta.appendChild(texto2);
});