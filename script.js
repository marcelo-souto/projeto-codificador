// ((Codigo ASCII da letra + Codido da primeira letra + Deslocamento escolhido pelo usuario) % Tamanho do alfabeto) + Codido da primeira letra

let str = "Áá";
let deslocamento = 154;
const isNotALetter = /[^a-zA-Z]+/
const isAnUpperCaseLetter = /[A-Z]/

const criptografar = (string) => {
  let criptografado = "";
  let resultado;
  
  for (let i = 0; i < string.length; i++) {
    let asc = string.charCodeAt([i]);

    let primeiraLetra;

    if (isAnUpperCaseLetter.test(string[i])) {
      primeiraLetra = 65;
    } else {
      primeiraLetra = 97;
    }

    if (
      isNotALetter.test(string[i])
    ) {
      // Checa se há caracteres especiais - Checa se há espaços - Checa se há números
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

    if (isAnUpperCaseLetter.test(string[i])) {
      primeiraLetra = 65;
    } else {
      primeiraLetra = 97;
    }

    if (
      isNotALetter.test(string[i])
    ) {
      // Checa se há caracteres especiais - Checa se há espaços - Checa se há números
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



// function trocarLetrasMinusculasAcentuadas (text){       
                                                          
//   text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
//   text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
//   text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
//   text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
//   text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
//   text = text.replace(new RegExp('[Ç]','gi'), 'c');
//   return text;                 
// }

// function trocarLetrasMaiusculasAcentuadas (text){       
                                                          
//   text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
//   text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
//   text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
//   text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
//   text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
//   text = text.replace(new RegExp('[Ç]','gi'), 'C');
//   return text;                 
// }