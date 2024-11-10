
var pontuacao = 0;

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
                //var fase1Text = document.getElementById('fase3').innerHTML;         
                //var fase2Text = document.getElementById('fase1').innerHTML;
                //var fase3Text = document.getElementById('fase6').innerHTML; 
                
                //var fraseCompleta = fase1Text + " " + fase2Text + " " + fase3Text; 
                var fraseCompleta = "eu vou para a escola";
                document.getElementById('fraseCompleta').innerText = fraseCompleta;

                pontuacao += 10;

                document.getElementById('avancarBtn').disabled = false;

                showConfetti(); // Mostrar confetes

                tornarGifVisivel();

            }
            
        } else {
            document.body.classList.add('flash-red');
            setTimeout(function() {
                document.body.classList.remove('flash-red');
            }, 100); // Tempo de duração da animação em milissegundos (300ms = 0.3s)

            tentativas +=1;
        }


    }

    // Atualizar a exibição da pontuação e do número de tentativas
    document.getElementById('pontuacao').textContent = pontuacao;
    document.getElementById('tentativas').textContent = tentativas;

}

function voltar() {
     window.location.href = "nivel1.html?pontuacao=" + pontuacao;


function avancar() {
    /*alert("PARABÉNS!");*/
    window.location.href = "nivel2.html?pontuacao=" + pontuacao;

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






















