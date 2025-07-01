// Simula um banco de dados de usuários
const usuarios = {};

function validarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário e senha estão corretos
    if (usuarios[username] && usuarios[username] === password) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}

function cadastrarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Adiciona o novo usuário ao "banco de dados"
    if (usuarios[newUsername]) {
        alert('Usuário já existe. Escolha outro nome de usuário.');
    } else {
        usuarios[newUsername] = newPassword;
        alert('Usuário cadastrado com sucesso!');
    }
}