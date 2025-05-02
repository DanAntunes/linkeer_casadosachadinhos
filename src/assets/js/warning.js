document.addEventListener('DOMContentLoaded', () => {
  const warningBubble = document.getElementById('warningBubble');
  
  function showWarning(event, platform) {
    event.preventDefault();
    
    const rect = event.currentTarget.getBoundingClientRect();
    warningBubble.style.left = `${rect.left + rect.width/2 - 100}px`;
    warningBubble.style.top = `${rect.top - 50}px`;
    warningBubble.textContent = `Grupo no ${platform} ainda em desenvolvimento.`;
    
    warningBubble.classList.add('show');
    setTimeout(() => {
      warningBubble.classList.remove('show');
    }, 3000);
  }

  document.querySelector('.whatsapp-btn').addEventListener('click', (e) => showWarning(e, 'WhatsApp'));
  document.querySelector('.telegram-btn').addEventListener('click', (e) => showWarning(e, 'Telegram'));
});