let inputName, inputEmail, inputMensagem;
const mensagemresposta = document.getElementById("mensagemresposta");

function readForm() {
  inputName = document.getElementById("name").value;
  inputEmail = document.getElementById("email").value;
  inputMensagem = document.getElementById("mensagem").value;
  let validacao = 0;

  inputName ? validacao++ : executarTremor("name");
  validarEmail(inputEmail) ? validacao++ : executarTremor("email");
  inputMensagem ? validacao++ : executarTremor("mensagem");
  return validacao;
}

function executarTremor(inputId) {
  const input = document.getElementById(inputId);

  // Adiciona a classe de tremor
  input.classList.add("shake");

  // Remove a classe de tremor após a animação (para permitir reexecução)
  setTimeout(() => {
    input.classList.remove("shake");
  }, 500); // Duração da animação (0.5s)
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function getId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatarDataHora() {
  const agora = new Date();

  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0"); // Meses começam em 0
  const ano = agora.getFullYear();

  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

document.getElementById("sendMessage").onclick = function () {
  if (readForm() == 3) {
    firebase
      .database()
      .ref("messages/" + getId(1, 99999))
      .set({
        date: formatarDataHora(),
        name: inputName,
        email: inputEmail,
        message: inputMensagem,
      });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
    document.getElementById("sendMessage").style.backgroundColor = "#f0f0f0";
    document.getElementById("sendMessage").style.color = "#d3d3d3";
    document.getElementById("sendMessage").style.cursor = "no-drop";

    mensagemresposta.style.display = "block";
    mensagemresposta.textContent = "Mensagem enviada, obrigado!";
    mensagemresposta.style.color = "green";
    setTimeout(function () {
      mensagemresposta.style.display = "none";
    }, 5000);
  }
};

document.getElementById("mensagem").addEventListener("input", function () {
  if (readForm() == 3) {
    document.getElementById("sendMessage").style.backgroundColor = "#2a6a67";
    document.getElementById("sendMessage").style.color = "#fff";
    document.getElementById("sendMessage").style.cursor = "pointer";
  } else {
    document.getElementById("sendMessage").style.backgroundColor = "#f0f0f0";
    document.getElementById("sendMessage").style.color = "#d3d3d3";
    document.getElementById("sendMessage").style.cursor = "no-drop";
  }
});
