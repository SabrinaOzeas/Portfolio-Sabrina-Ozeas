// 1. Scroll suave nos links de navegação
document.querySelectorAll('.botoesiniciais a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de scroll
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Scroll suave
        });
    });
});

// 2. Efeito hover nos links de contato (aumenta o tamanho ao passar o mouse)
document.querySelectorAll('.contato-link').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)'; // Aumenta o tamanho do link ao passar o mouse
    });

    link.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)'; // Restaura o tamanho original ao sair o mouse
    });
});

// 3. Alerta de boas-vindas ao carregar a página
window.onload = function() {
    alert('Bem-vindo ao portfólio de Sabrina Ozeas! :)');
};

!function(){document.querySelectorAll(".botoesiniciais a").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})}),document.querySelectorAll(".contato-link").forEach(function(a){a.addEventListener("mouseover",function(){this.style.transform="scale(1.1)"}),a.addEventListener("mouseout",function(){this.style.transform="scale(1)"})})}();