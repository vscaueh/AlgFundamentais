const Quicksort = require("../JavaScript/quicksort");
test("ordena a lista do exemplo", () => expect(Quicksort([5, 3, 8, 1, 9, 2, 7])).toEqual([1, 2, 3, 5, 7, 8, 9]));
test("ordena repetidos, negativos e lista vazia", () => {
  expect(Quicksort([3, -1, 3, 0])).toEqual([-1, 0, 3, 3]);
  expect(Quicksort([])).toEqual([]);
});
test("rejeita valores inválidos", () => expect(() => Quicksort([2, NaN])).toThrow(TypeError));
