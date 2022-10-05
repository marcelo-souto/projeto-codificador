let qs = (el) => document.querySelector(el);
let qsAll = (el) => document.querySelectorAll(el);

let slides = qsAll(".slide");
let inputMensagem = qs("#mensagem");

window.addEventListener('load', () => {
  mostrarDiv(slides[0], 'flex')
})

function esconderDiv(div) {
  div.style.opacity = 0;
  div.style.transform = 'translateY(50px)'
  div.style.display = 'none';
}

function mostrarDiv(div, display) {
  div.style.display = display;
  setTimeout(() => {
    div.style.opacity = 1;
    div.style.transform = 'translateY(0px)'
  }, 200);
}

qs(".btn-proximo").addEventListener("click", () => {
  if (inputMensagem.value.length < 1) {
    qs(".mensagem-erro").style.display = "block";
    inputMensagem.classList.add("erro");
  } else {
    esconderDiv(slides[0])
    mostrarDiv(slides[1], 'flex')
  }
});

qsAll(".btn-proximo")[1].addEventListener("click", () => {
  if (qs("button[data-escolha].selected")) {
    esconderDiv(slides[1])
    mostrarDiv(slides[2], 'flex')
  } else {
    qs(".botao-erro").style.display = "block";
  }

  qsAll(".escolha").forEach((span) => {
    if (qs("button[data-escolha].selected")) {
      span.innerHTML = qs("button[data-escolha].selected").getAttribute(
        "data-escolha"
      );
    }
  });
});

inputMensagem.addEventListener("input", () => {
  if (inputMensagem.value.length > 0) {
    qs(".mensagem-erro").style.display = "none";
    inputMensagem.classList.remove("erro");
  }
});

qsAll("button[data-escolha]").forEach((botao) => {
  botao.addEventListener("click", () => {
    qs(".botao-erro").style.display = "none";

    if (qs("button[data-escolha].selected")) {
      qs("button[data-escolha].selected").classList.remove("selected");
    }

    botao.classList.add("selected");
  });
});














qsAll("button[data-encrip]").forEach((botao) => {
  botao.addEventListener("click", () => {
    let data = botao.getAttribute("data-encrip");

    if (data === "base64") {
      esconderDiv(qs(".container-desloc"))
      mostrarDiv(qs(".btn-finalizar"), 'block')
    } else {
      mostrarDiv(qs(".container-desloc"), 'block')
      mostrarDiv(qs(".btn-finalizar"), 'block')
    }

    if (qs("button[data-encrip].selected")) {
      qs("button[data-encrip].selected").classList.remove("selected");
    }

    botao.classList.add("selected");
  });
});


qs(".btn-finalizar").addEventListener("click", () => {
  let mensagem = new Message(inputMensagem.value);
  let escolha = qs("button[data-escolha].selected").getAttribute(
    "data-escolha"
  );
  let encrip = qs("button[data-encrip].selected").getAttribute("data-encrip");
  let deslocamento;

  if (encrip === "cifradecesar") {
    if (qs("#deslocamento").value.length < 1) {

      qsAll(".mensagem-erro")[1].style.display = "block";
      qs("#deslocamento").classList.add("erro");

    } else if (/[^0-9]/.test(qs("#deslocamento").value)) {

      qs(".mensagem-erro-2").style.display = "block";
      qs("#deslocamento").classList.add("erro");

    } else {

      deslocamento = Number(qs("#deslocamento").value);
      esconderDiv(slides[2])
      mostrarDiv(slides[3], 'flex')
    }

  } else if (encrip === "base64") {
    esconderDiv(slides[2])
    mostrarDiv(slides[3], 'flex')
  }

  if (escolha === "criptografar") {
    qs("#resultado").value = mensagem.criptografar(encrip, deslocamento);
  } else if (escolha === "descriptografar") {
    qs("#resultado").value = mensagem.descriptografar(encrip, deslocamento);
  }
});

qs("#deslocamento").addEventListener("keyup", () => {
  if (qs("#deslocamento").value.length > 0) {
    qsAll(".mensagem-erro")[1].style.display = "none";
    qs("#deslocamento").classList.remove("erro");
  }
  qs(".mensagem-erro-2").style.display = "none";
  qs("#deslocamento").classList.remove("erro");
});


qs(".btn-recomecar").addEventListener("click", () => {
  qsAll(".selected").forEach((selecionado) => {
    selecionado.classList.remove("selected");
  });

  inputMensagem.value = "";
  qs("#deslocamento").value = "";

  esconderDiv(qs(".container-desloc"))
  esconderDiv(qs(".btn-finalizar"))

  esconderDiv(slides[3])
  mostrarDiv(slides[0], 'flex')
});
