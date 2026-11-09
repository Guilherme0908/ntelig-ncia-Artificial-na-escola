// Botão "Saiba Mais" - rola suavemente até a seção
document.getElementById('btnSaibaMais').addEventListener('click', () => {
  document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Quiz interativo
function verificar(opcao) {
  const resultado = document.getElementById('resultado');
  if (opcao === 1) {
    resultado.textContent = "✅ Correto! A correção automática é uma aplicação real de IA.";
    resultado.style.color = "#38a169";
  } else {
    resultado.textContent = "❌ Não exatamente. Tente novamente!";
    resultado.style.color = "#e53e3e";
  }
}

// Animação de entrada dos cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s, transform 0.6s';
  observer.observe(card);
});

// Mensagem de boas-vindas no console
console.log("🤖 Bem-vindo ao site sobre IA na Escola!");