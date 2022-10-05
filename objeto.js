// ((Codigo ASCII da letra + Codido da primeira letra + Deslocamento escolhido pelo usuario) % Tamanho do alfabeto) + Codido da primeira letra

class Message {
  constructor(conteudo) {
    this.conteudo = conteudo;
    this.tamanho = conteudo.length;
    this.letrasAcentuadas = /[ÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇ]/gi.test(this.conteudo);
  }

  tratar() {
    let conteudo = this.conteudo;

    if (this.letrasAcentuadas) {
      for (let i = 0; i < this.tamanho; i++) {
        if (/[ÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇ]/.test(conteudo[i])) {
          let maius = trocarLetrasMaiusculasAcentuadas(conteudo[i]);
          conteudo = conteudo.replace(conteudo[i], maius);
        } else if (/[áàâãéèêíìîóòôõúùûç]/.test(conteudo[i])) {
          let minus = trocarLetrasMinusculasAcentuadas(conteudo[i]);
          conteudo = conteudo.replace(conteudo[i], minus);
        }
      }

      return conteudo;
    } else {
      return conteudo;
    }

    function trocarLetrasMinusculasAcentuadas(letter) {
      letter = letter.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
      letter = letter.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
      letter = letter.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
      letter = letter.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
      letter = letter.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
      letter = letter.replace(new RegExp("[Ç]", "gi"), "c");
      return letter;
    }

    function trocarLetrasMaiusculasAcentuadas(letter) {
      letter = letter.replace(new RegExp("[ÁÀÂÃ]", "gi"), "A");
      letter = letter.replace(new RegExp("[ÉÈÊ]", "gi"), "E");
      letter = letter.replace(new RegExp("[ÍÌÎ]", "gi"), "I");
      letter = letter.replace(new RegExp("[ÓÒÔÕ]", "gi"), "O");
      letter = letter.replace(new RegExp("[ÚÙÛ]", "gi"), "U");
      letter = letter.replace(new RegExp("[Ç]", "gi"), "C");
      return letter;
    }
  }

  criptografar(escolha, deslocamento) {
    let mensagem = this.tratar();

    const isNotALetter = /[^a-zA-Z]+/;
    const isAnUpperCaseLetter = /[A-Z]/;

    let criptografado = "";
    let resultado;

    if (escolha === "cifradecesar") {
      for (let i = 0; i < this.tamanho; i++) {
        let asc = mensagem.charCodeAt([i]);

        let primeiraLetra;

        if (isAnUpperCaseLetter.test(mensagem[i])) {
          primeiraLetra = 65;
        } else {
          primeiraLetra = 97;
        }

        if (isNotALetter.test(mensagem[i])) {
          resultado = asc;
        } else {
          resultado =
            ((asc - primeiraLetra + deslocamento) % 26) + primeiraLetra;
        }

        criptografado += String.fromCharCode(resultado);
      }

      return criptografado;
    } else if (escolha === "base64") {
      return btoa(mensagem);
    }
  }

  descriptografar(escolha, deslocamento) {
    let mensagem = this.tratar();

    const isNotALetter = /[^a-zA-Z]+/;
    const isAnUpperCaseLetter = /[A-Z]/;

    let descriptografado = "";
    let resultado;

    if (escolha === "cifradecesar") {
      for (let i = 0; i < this.tamanho; i++) {
        let asc = mensagem.charCodeAt([i]);

        let primeiraLetra;

        if (isAnUpperCaseLetter.test(mensagem[i])) {
          primeiraLetra = 65;
        } else {
          primeiraLetra = 97;
        }

        if (isNotALetter.test(mensagem[i])) {
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
    } else if (escolha === "base64") {
      return atob(mensagem)
    }
  }
}