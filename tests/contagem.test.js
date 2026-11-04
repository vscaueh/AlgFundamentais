const Contagem = require("../JavaScript/contagem");
test("conta inteiros em lista mista", () => expect(Contagem([1, 2.5, 3, 4.7, 5])).toBe(3));
test("trata lista vazia e números negativos", () => {
  expect(Contagem([])).toBe(0);
  expect(Contagem([-2, -1.5, 0])).toBe(2);
});
test("rejeita dados não numéricos", () => expect(() => Contagem([1, null])).toThrow(TypeError));
