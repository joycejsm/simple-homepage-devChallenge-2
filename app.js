// Seleciona o botão dentro do elemento com ID 'switch'
const switchButton = document.querySelector('#switch button');
const body = document.body;

// Função para carregar o tema salvo no localStorage
function loadThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        switchButton.classList.remove('right');
        switchButton.classList.add('left');
    } else {
        body.classList.remove('dark-mode');
        switchButton.classList.remove('left');
        switchButton.classList.add('right');
    }
}

// Função para alternar o tema entre claro e escuro
function toggleTheme() {
    if (switchButton.classList.contains('right')) {
        switchButton.classList.remove('right');
        switchButton.classList.add('left');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        switchButton.classList.remove('left');
        switchButton.classList.add('right');
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Seleção dos elementos do menu e ícones
const burgerIcon = document.querySelector('#burguer');
const closeMenuIcon = document.querySelector('#close-menu');
const menu = document.querySelector('#menu');
const switchElement = document.querySelector('#switch');

// Função para abrir o menu e exibir o switch
function openMenu() {
    menu.style.display = 'block'; // Mostra o menu
    closeMenuIcon.style.display = 'block'; // Exibe o ícone de fechar
    burgerIcon.style.display = 'none'; // Oculta o ícone de hambúrguer
    switchElement.style.display = 'flex'; // Exibe o switch quando o menu é aberto
}

// Função para fechar o menu e ocultar o switch
function closeMenu() {
    menu.style.display = 'none'; // Oculta o menu
    closeMenuIcon.style.display = 'none'; // Oculta o ícone de fechar
    burgerIcon.style.display = 'block'; // Mostra o ícone de hambúrguer
    switchElement.style.display = 'none'; // Oculta o switch quando o menu é fechado
}

// Eventos de clique
switchButton.addEventListener('click', toggleTheme);
burgerIcon.addEventListener('click', openMenu);
closeMenuIcon.addEventListener('click', closeMenu);

// Carrega o tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', loadThemeFromLocalStorage);

