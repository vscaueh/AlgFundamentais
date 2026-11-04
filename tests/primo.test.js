const Primo = require("../JavaScript/primo");
test("reconhece número primo", () => expect(Primo(97)).toBe(true));
test("rejeita número composto e valores menores que 2", () => {
  expect(Primo(9)).toBe(false);
  expect(Primo(1)).toBe(false);
});
test("rejeita entrada inválida", () => expect(() => Primo("7")).toThrow(TypeError));
