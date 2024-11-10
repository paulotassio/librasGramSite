

var pontuacao2 = 0;
var tentativas = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedFase = document.getElementById(data);
    var target = ev.target;
    var pontuacao = Number(document.getElementById('pontuacao').innerHTML);


    if (target.classList.contains('target')) {
        if (target.dataset.fase.trim() === draggedFase.innerHTML.trim()) {
            target.classList.add('correct');
            draggedFase.setAttribute('draggable', 'false');
            draggedFase.style.opacity = '0.5';
            target.style.cursor = 'default';
            target.removeAttribute('ondrop');
            target.removeAttribute('ondragover');
            target.textContent = draggedFase.textContent;
            target.dataset.fase = draggedFase.textContent;

            // Verificar se todas as fases estão corretas
            if (document.querySelectorAll('.correct').length === document.querySelectorAll('.target').length) {
                               
                var fraseCompleta = "o lápis está em cima da mesa"; 
                document.getElementById('fraseCompleta').innerText = fraseCompleta;

                pontuacao += 10;
                pontuacao2 = pontuacao;

                document.getElementById('avancarBtn').disabled = false;

                showConfetti(); // Mostrar confetes

                tornarGifVisivel();

            }
            
        } else {
            //document.body.classList.add('flash-red');
            //setTimeout(function() {
            //    document.body.classList.remove('flash-red');
            //}, 100); // Tempo de duração da animação em milissegundos (300ms = 0.3s)

            flashRed();
            tentativas +=1;
        }


    }

    // Atualizar a exibição da pontuação e do número de tentativas
    document.getElementById('pontuacao').textContent = pontuacao;
    document.getElementById('tentativas').textContent = tentativas;

}

function voltar() {
    window.history.back(); // Retorna à página anterior
}

function avancar() {
    /*alert("PARABÉNS!");*/
    window.location.href = "nivel5.html?pontuacao=" + pontuacao2;
}

function flashRed() {
    // Cria um elemento div para representar o efeito de flash
    var flashDiv = document.createElement('div');
    flashDiv.classList.add('flash-border');

    // Adiciona o elemento à página
    document.body.appendChild(flashDiv);

    // Remove o elemento após um breve intervalo de tempo
    setTimeout(function() {
        flashDiv.parentNode.removeChild(flashDiv);
    }, 1000); // Tempo em milissegundos (1 segundo)
}

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



function tornarGifVisivel() {
    document.getElementById('gif-b').style.display = 'block';
}


// Função para exibir o GIF quando o mouse está sobre o botão
function exibirGif() {
    var gif = document.getElementById('gif');
    gif.style.display = 'block'; // Torna o GIF visível
}


// Função para ocultar o GIF quando o mouse sai do botão
function ocultarGif() {
    var gif = document.getElementById('gif');
    gif.style.display = 'none'; // Torna o GIF invisível
}

// Função para exibir o GIF do botão "Avançar" quando o mouse está sobre ele
function exibirGifAvancar() {
    var botaoAvancar = document.getElementById('avancarBtn');
    if (!botaoAvancar.disabled) { // Verifica se o botão "Avançar" está habilitado
        var gifAvancar = document.getElementById('gif-avancar');
        gifAvancar.style.display = 'block'; // Torna o GIF visível
    }
}

// Função para ocultar o GIF do botão "Avançar" quando o mouse sai do botão
function ocultarGifAvancar() {
    var gifAvancar = document.getElementById('gif-avancar');
    gifAvancar.style.display = 'none'; // Torna o GIF invisível
}



/////////////////////////////////////////////////////////////////

// Função para obter uma posição aleatória
        function getRandomPosition(max) {
            return Math.floor(Math.random() * max);
        }

        // Função para verificar a colisão entre duas divs
        function isColliding(div1, div2) {
            const rect1 = div1.getBoundingClientRect();
            const rect2 = div2.getBoundingClientRect();

            return !(
                rect1.top + rect1.height < rect2.top ||
                rect1.top > rect2.top + rect2.height ||
                rect1.left + rect1.width < rect2.left ||
                rect1.left > rect2.left + rect2.width
            );
        }

        document.addEventListener("DOMContentLoaded", () => {
            const container = document.querySelector(".container");
            const fases = container.querySelectorAll(".fase");
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            fases.forEach(fase => {
                let isOverlapping;
                let randomX, randomY;
                do {
                    isOverlapping = false;
                    randomX = getRandomPosition(containerWidth - fase.offsetWidth);
                    randomY = getRandomPosition(containerHeight - fase.offsetHeight);
                    fase.style.position = "absolute";
                    fase.style.left = `${randomX}px`;
                    fase.style.top = `${randomY}px`;

                    fases.forEach(otherFase => {
                        if (fase !== otherFase && isColliding(fase, otherFase)) {
                            isOverlapping = true;
                        }
                    });
                } while (isOverlapping);
            });
        });



