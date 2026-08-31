function Fibonacci(n) {
  if (n === 0) return 0;

  let anterior = 0;
  let atual = 1;

  for (let i = 2; i <= n; i++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
  return atual;
}

const n = 8;

console.log("--- Fibonacci ---");
for (let i = 0; i <= n; i++) {
  console.log("Termo " + i + ": " + Fibonacci(i));
}