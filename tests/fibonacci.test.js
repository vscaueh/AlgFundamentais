const Fibonacci = require("../JavaScript/fibonacci");
test("calcula o oitavo termo", () => expect(Fibonacci(8)).toBe(21));
test("respeita os dois casos iniciais", () => {
  expect(Fibonacci(0)).toBe(0);
  expect(Fibonacci(1)).toBe(1);
});
test("rejeita posição fora do intervalo", () => expect(() => Fibonacci(-1)).toThrow(RangeError));
