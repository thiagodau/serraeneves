function verificarLogin() {
  // Verificar se o item 'logado' está presente e é 'true'
  const logado = localStorage.getItem('logado');

  if (logado !== 'true') {
      // Redirecionar para a página de login se não estiver logado
      window.location.href = './../login.html';
  }
}

verificarLogin();

function deslogar() {
  // Remover o item 'logado' do localStorage
  localStorage.removeItem('logado');

  // Redirecionar para a página de login após o logout
  window.location.href = './../login.html';
}