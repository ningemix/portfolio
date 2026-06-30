// Funcionalidade 1: Alternar entre Tema Claro e Escuro
const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleButton.addEventListener('click', function() {
    // Adiciona ou remove a classe 'dark-theme' do body
    bodyElement.classList.toggle('dark-theme');
});

// Funcionalidade 2: Validação e Simulação de Envio do Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Evita o comportamento padrão de recarregar a página
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica de campos vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário antes de enviar.');
        return;
    }

    // Validação de formato de e-mail usando Expressão Regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).');
        return;
    }

    // Simulação de envio com sucesso
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
    
    // Limpa os campos do formulário após o envio
    contactForm.reset();
});