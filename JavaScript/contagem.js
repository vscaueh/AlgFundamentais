function Contagem(dados) {
  let contador = 0;

  for (let i = 0; i < dados.length; i++) {
    if (Number.isInteger(dados[i])) {
      contador++;
    }
  }
  return contador;
}

const dados = [1, 2.5, 3, 4.7, 5];

console.log("--- Contagem de Valores Inteiros ---");
console.log("Total de dados (N): " + dados.length);
console.log("Valores inteiros: " + Contagem(dados));