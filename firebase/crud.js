let inputName, inputEmail, inputMensagem;

function readForm() {
  inputName = document.getElementById('name').value;
  inputEmail = document.getElementById('email').value;
  inputMensagem = document.getElementById('mensagem').value;
  
  console.log(inputName + ' & ' + inputEmail + ' & ' + inputMensagem )
}

function getId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatarDataHora() {
  const agora = new Date();
  
  const dia = String(agora.getDate()).padStart(2, '0');
  const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
  const ano = agora.getFullYear();
  
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  
  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

document.getElementById('sendMessage').onclick = function() {
  readForm();
  firebase.database().ref('messages/' + getId(1, 99999)).set({
    date: formatarDataHora(),
    name: inputName,
    email: inputEmail,
    message: inputMensagem,
  })
  alert('dados gravados.')
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('mensagem').value = "";
}


