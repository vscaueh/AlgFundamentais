const Mdc = require("../JavaScript/mdc");
test("calcula MDC de 48 e 18", () => expect(Mdc(48, 18)).toBe(6));
test("trata valores negativos e zero", () => {
  expect(Mdc(-48, 18)).toBe(6);
  expect(Mdc(0, 7)).toBe(7);
});
test("rejeita dois zeros", () => expect(() => Mdc(0, 0)).toThrow(RangeError));
