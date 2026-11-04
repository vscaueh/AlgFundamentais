function Contagem(dados) {
  if (!Array.isArray(dados) || !dados.every(Number.isFinite)) {
    throw new TypeError("Informe uma lista de números finitos.");
  }
  return dados.filter(Number.isInteger).length;
}
module.exports = Contagem;
if (require.main === module) {
  const dados = [1, 2.5, 3, 4.7, 5];
  console.log("Valores inteiros: " + Contagem(dados));
}
