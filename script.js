// Atualizar data e hora de última atualização
const dataAtualizacao = document.getElementById("ultimaAtualizacao");
const data = new Date();
dataAtualizacao.textContent = `${data.toLocaleDateString()} às ${data.toLocaleTimeString()}`;

// Função para atualizar nome e e-mail
function atualizarInformacoes() {
    document.getElementById("nome").textContent = "Seu Nome Atualizado";
    document.getElementById("email").textContent = "email@atualizado.com";
}

// Chamando a função de atualização ao carregar a página
atualizarInformacoes();

// Função para enviar o formulário de contato
function enviarFormulario() {
    const nome = document.getElementById("contato-nome").value;
    const email = document.getElementById("contato-email").value;
    const mensagem = document.getElementById("contato-mensagem").value;

    if (nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        // Aqui, você pode adicionar a lógica para integrar com um serviço de email
        document.getElementById("form-contato").reset(); // Limpar o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Manipulação do envio de formulário com prevenção do comportamento padrão
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    enviarFormulario();
});


