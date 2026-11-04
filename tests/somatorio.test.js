const Somatorio = require("../JavaScript/somatorio");
test("soma cinco números", () => expect(Somatorio([1, 2, 3, 4, 5])).toBe(15));
test("soma lista vazia e negativos", () => {
  expect(Somatorio([])).toBe(0);
  expect(Somatorio([-2, 5, -1])).toBe(2);
});
test("rejeita elementos não numéricos", () => expect(() => Somatorio([1, "2"])).toThrow(TypeError));
