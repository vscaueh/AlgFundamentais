function Quicksort(arr, inicio = 0, fim = arr.length - 1) {
  if (inicio < fim) {
    const p = Particionar(arr, inicio, fim);
    Quicksort(arr, inicio, p - 1);
    Quicksort(arr, p + 1, fim);
  }
  return arr;
}

function Particionar(arr, inicio, fim) {
  const pivo = arr[fim];
  let i = inicio - 1;

  for (let j = inicio; j < fim; j++) {
    if (arr[j] <= pivo) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[fim]] = [arr[fim], arr[i + 1]];
  return i + 1;
}

const lista = [5, 3, 8, 1, 9, 2, 7];

console.log("--- Ordenação com Quicksort ---");
console.log("Antes:  " + lista.join(", "));
Quicksort(lista);
console.log("Depois: " + lista.join(", "));