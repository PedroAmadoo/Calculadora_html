function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;

    let resultado; // Chave removida daqui!

    if (operacao == "+") {
        resultado = num1 + num2;
    } else if (operacao == "-") {
        resultado = num1 - num2;
    } else if (operacao == "*") {
        resultado = num1 * num2;
    } else if (operacao == "/") {
        resultado = num1 / num2;
    }

    document.getElementById("resultado").textContent = resultado;
}