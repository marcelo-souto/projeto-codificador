// ((Codigo ASCII da letra + Codido da primeira letra + Deslocamento escolhido pelo usuario) % Tamanho do alfabeto) + Codido da primeira letra

let str = "Um pequeno jabuti xereta viu dez cegonhas felizes.";
let deslocamento = 2;
let regex = /([\u0300-\u036f]|[^0-9a-zA-Z])/g;





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

    if (regex.test(string[i]) || /\s+/g.test(string[i])) {
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

    if (regex.test(string[i]) || /\s+/g.test(string[i])) {
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
