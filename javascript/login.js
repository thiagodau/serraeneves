/*login ao painel */
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Obter os valores dos campos
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validação simples
  const validUsername = "advogado"; 
  const validPassword = "soeusei";

  if (username === validUsername && password === validPassword) {
    // Armazenar a variável "logado" no localStorage como true
    localStorage.setItem('logado', 'true');
    // Redirecionar se as credenciais estiverem corretas
    window.location.href = "./painel/dashboard.html";
  } else {
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
});