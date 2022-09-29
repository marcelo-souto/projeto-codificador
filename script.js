// ((Codigo ASCII da letra + Codido da primeira letra + Deslocamento escolhido pelo usuario) % Tamanho do alfabeto) + Codido da primeira letra

let str = ".,!;:?><[]~´";
let deslocamento = 545;

const criptografar = (string) => {
  let criptografado = "";
  let resultado;

  for (let i = 0; i < string.length; i++) {
    let asc = string.charCodeAt([i]);

    let primeiraLetra;

    if (/[A-Z]/.test(string[i])) {
      primeiraLetra = 65;
    } else {
      primeiraLetra = 97;
    }

    if (/[^a-zA-Z0-9]+/g.test(string[i])) {
      // Devolve os caracteres especias

      resultado = asc;
    } else if (string[i] == " ") {
      resultado = asc;
    } else {
      resultado = ((asc - primeiraLetra + deslocamento) % 26) + primeiraLetra;
    }

    criptografado += String.fromCharCode(resultado);
  }

  return criptografado;
};

const descriptografar = (string) => {
  let descriptografado = "";
  let resultado;

  for (let i = 0; i < string.length; i++) {
    let asc = string.charCodeAt([i]);

    let primeiraLetra;

    if (/[A-Z]/.test(string[i])) {
      primeiraLetra = 65;
    } else {
      primeiraLetra = 97;
    }

    if (/[^a-zA-Z0-9]+/g.test(string[i])) {
      // Devolve os caracteres especias

      resultado = asc;
    } else if (string[i] == " ") {
      resultado = asc;
    } else {
      let num = asc - primeiraLetra - deslocamento;

      let i = 0;
      while (num < 0) {
        num += 26;
        i++;
      }

      resultado = (num % 26) + primeiraLetra;
    }

    descriptografado += String.fromCharCode(resultado);
  }

  return descriptografado;
};

console.log(criptografar(str));
console.log(descriptografar(criptografar(str)));
