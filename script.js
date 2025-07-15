document.getElementById('actionButton').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = '¡Gracias por hacer clic!';
    message.style.opacity = 1;
});
