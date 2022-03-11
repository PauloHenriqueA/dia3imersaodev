var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    // == --> comparação; = --> atribuição
    elementoResultado.innerHTML = "Você acertou, pode jogar na MEGA SENA!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Só são válidos números de 0 a 10";
  } else if (chute > numeroSecreto) {
    tentativas--;
    elementoResultado.innerHTML =
      "O número secreto é menor! Você ainda tem mais " +
      tentativas +
      " tentativas";
  } else if (chute < numeroSecreto) {
    tentativas--;
    elementoResultado.innerHTML =
      "O número secreto é maior! Você ainda tem mais " +
      tentativas +
      " tentativas";
  } else {
    tentativas--;
    elementoResultado.innerHTML =
      "Você errou o número secreto. Ainda tem " + tentativas + " tentativas";
  }
  if (tentativas == 0) {
    elementoResultado.innerHTML =
      "Acabaram suas chances! O número secreto era: " + numeroSecreto;
  }
}
