function Mdc(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

const a = 48;
const b = 18;

console.log("--- Máximo Divisor Comum ---");
console.log("MDC(" + a + ", " + b + ") = " + Mdc(a, b));