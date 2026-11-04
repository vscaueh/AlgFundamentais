function Primo(numero) {
  if (!Number.isSafeInteger(numero)) throw new TypeError("Informe um inteiro seguro.");
  if (numero < 2) return false;
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) return false;
  }
  return true;
}
module.exports = Primo;
if (require.main === module) {
  const numero = 9;
  console.log("O número " + numero + (Primo(numero) ? " é primo" : " não é primo"));
}
