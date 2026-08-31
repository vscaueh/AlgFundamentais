function Primo(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const num = 9;

console.log("--- Verificador de Número Primo ---");
console.log("O número " + num + (Primo(num) ? " é primo" : " não é primo"));