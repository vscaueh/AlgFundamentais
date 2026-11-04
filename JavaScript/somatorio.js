function Somatorio(numeros) {
  if (!Array.isArray(numeros) || !numeros.every(Number.isFinite)) {
    throw new TypeError("Informe uma lista de números finitos.");
  }
  const soma = numeros.reduce((total, numero) => total + numero, 0);
  if (!Number.isFinite(soma)) throw new RangeError("A soma excede o limite numérico.");
  return soma;
}
module.exports = Somatorio;
if (require.main === module) {
  const numeros = [1, 2, 3, 4, 5];
  console.log("Números: " + numeros.join(", "));
  console.log("Soma: " + Somatorio(numeros));
}
