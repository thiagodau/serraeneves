/* NEWSLETTER */
let emailinput = document.getElementById("email-input");
const mensagemInformativa = document.getElementById("mensagem");

emailinput.addEventListener("input", function () {
  const valor = emailinput.value;
  if (validarEmail(valor)) {
    document.getElementById("btn-newsletter").style.backgroundColor = "#2a6a67";
    document.getElementById("btn-newsletter").style.color = "#fff";
    document.getElementById("btn-newsletter").style.cursor = "pointer";
  } else {
    document.getElementById("btn-newsletter").style.backgroundColor = "#f0f0f0";
    document.getElementById("btn-newsletter").style.color = "#d3d3d3";
    document.getElementById("btn-newsletter").style.cursor = "no-drop";
  }
});

document.getElementById("btn-newsletter").onclick = function () {
  let emailInformado = document.getElementById("email-input").value;
  if (validarEmail(emailInformado)) {
    /* GRAVA NO BD */
    firebase
      .database()
      .ref("newsletter/" + getId(1, 99999))
      .set({
        date: formatarDataHora(),
        email: emailInformado,
      });
    alert("E-mail cadastrado, obrigado.");
  } else {
    mensagemInformativa.style.display = "block";
    mensagemInformativa.textContent = "E-mail inválido!";
    mensagemInformativa.style.color = "red";

    setTimeout(function () {
      mensagemInformativa.style.display = "none";
    }, 4000);
  }
  /* LIMPA OS CAMPOS USADOS */
  document.getElementById("email-input").value = "";
  document.getElementById("btn-newsletter").style.backgroundColor = "#f0f0f0";
  document.getElementById("btn-newsletter").style.color = "#fff";
  document.getElementById("btn-newsletter").style.cursor = "pointer";
};

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
