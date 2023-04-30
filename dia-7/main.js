function escolheOperacao() {
    var operação = prompt("Que operação matemática você quer realizar? soma, subtração, multiplicação, divisão ou sair");
    return operação;
}

function soma(A, B) {
    return A + B;
}

function subtracao(A, B) {
    return A - B;
}

function multiplicacao(A, B) {
    return A * B;
}

function divisao(A, B) {
    return A / B;
}

function efetuaCalculo(operacao) {
    switch (operacao) {

        case "soma":
            var A = parseFloat(prompt("Digite o valor de A"));
            var B = parseFloat(prompt("Digite o valor de B"));
            alert(`O resultado da ${operacao} é: ${soma(A,B)}`);
            break;

        case "subtração":
            var A = parseFloat(prompt("Digite o valor de A"));
            var B = parseFloat(prompt("Digite o valor de B"));
            alert(`O resultado da ${operacao} é: ${subtracao(A,B)}`);
            break;

        case "multiplicação":
            var A = parseFloat(prompt("Digite o valor de A"));
            var B = parseFloat(prompt("Digite o valor de B"));
            alert(`O resultado da ${operacao} é: ${multiplicacao(A,B)}`);
            break;

        case "divisão":
            var A = parseFloat(prompt("Digite o valor de A"));
            var B = parseFloat(prompt("Digite o valor de B"));
            alert(`O resultado da ${operacao} é: ${divisao(A,B)}`);
            break;

        default:
            alert("Até a próxima")
            return continuar = false;
    }
}

var continuar = true;

while (continuar) {
    var operacao = escolheOperacao();
    efetuaCalculo(operacao)
}