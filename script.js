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

const str = "ola tudo bem".split('');

let indices = [];

str.map((item) => {
  letras.forEach((letra, letraIndex) => {
    if (letra == item) {
      indices.push(letraIndex);
    }
  });
});

console.log(indices)