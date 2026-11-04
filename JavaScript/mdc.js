function Mdc(primeiro, segundo) {
  if (!Number.isSafeInteger(primeiro) || !Number.isSafeInteger(segundo)) {
    throw new TypeError("Os valores devem ser inteiros seguros.");
  }
  if (primeiro === 0 && segundo === 0) throw new RangeError("MDC de 0 e 0 não é definido.");
  let a = Math.abs(primeiro);
  let b = Math.abs(segundo);
  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}
module.exports = Mdc;
if (require.main === module) console.log("MDC(48, 18) = " + Mdc(48, 18));
