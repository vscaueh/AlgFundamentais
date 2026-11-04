function Quicksort(numeros) {
  if (!Array.isArray(numeros) || !numeros.every(Number.isFinite)) {
    throw new TypeError("Informe uma lista de números finitos.");
  }
  ordenarTrecho(numeros, 0, numeros.length - 1);
  return numeros;
}
function ordenarTrecho(numeros, inicio, fim) {
  if (inicio >= fim) return;
  const indicePivo = Particionar(numeros, inicio, fim);
  ordenarTrecho(numeros, inicio, indicePivo - 1);
  ordenarTrecho(numeros, indicePivo + 1, fim);
}
function Particionar(numeros, inicio, fim) {
  const pivo = numeros[fim];
  let indiceMenores = inicio - 1;
  for (let indice = inicio; indice < fim; indice++) {
    if (numeros[indice] <= pivo) {
      indiceMenores++;
      [numeros[indiceMenores], numeros[indice]] = [numeros[indice], numeros[indiceMenores]];
    }
  }
  [numeros[indiceMenores + 1], numeros[fim]] = [numeros[fim], numeros[indiceMenores + 1]];
  return indiceMenores + 1;
}
module.exports = Quicksort;
if (require.main === module) {
  const lista = [5, 3, 8, 1, 9, 2, 7];
  console.log("Antes: " + lista.join(", "));
  console.log("Depois: " + Quicksort(lista).join(", "));
}
