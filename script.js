const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const str = "cartaz".split('');

let indices = [];

str.map((item) => {
  letras.forEach((letra, letraIndex) => {
    if (letra == item) {
      letraIndex += 2
      if (letraIndex > 26) {
        letraIndex = letraIndex - 26
      }
      indices.push(letraIndex)
    }
  });
});

console.log(indices)

indices.forEach(indice => {
  let mensagem = letras[indice]

  console.log(mensagem)
})

