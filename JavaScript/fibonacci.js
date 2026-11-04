function Fibonacci(posicao) {
  if (!Number.isSafeInteger(posicao) || posicao < 0 || posicao > 78) {
    throw new RangeError("A posição deve ser um inteiro entre 0 e 78.");
  }
  if (posicao === 0) return 0;
  let anterior = 0;
  let atual = 1;
  for (let indice = 2; indice <= posicao; indice++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
  return atual;
}
module.exports = Fibonacci;
if (require.main === module) {
  for (let posicao = 0; posicao <= 8; posicao++) console.log("Termo " + posicao + ": " + Fibonacci(posicao));
}
