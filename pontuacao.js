
function showConfetti() {
    var confettiContainer = document.querySelector('.confetti');

    for (var i = 0; i < 100; i++) { // Adiciona 100 confetes
        var confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        confettiPiece.style.animationDelay = Math.random() * 3 + 's'; // Atraso aleatório para a animação
        confettiContainer.appendChild(confettiPiece);
    }
}
