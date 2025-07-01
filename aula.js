document.getElementById('btn_enviar').addEventListener('click', function(event) {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (!nome || !idade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (idade >= 18) {
        alert('Você é maior de idade!');
    } else {
        alert('Você é menor de idade!');
    }
});