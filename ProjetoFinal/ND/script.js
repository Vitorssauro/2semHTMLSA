document.addEventListener("DOMContentLoaded", function () {
    const tabuleiro = document.querySelector("#tabuleiro");
    const mensagem = document.querySelector("#mensagem");
    const reiniciarBtn = document.querySelector("#reiniciar");
    const casas = [];

    let jogadorAtual = "X";
    let tabuleiroEstado = ["", "", "", "", "", "", "", "", ""];
    let jogoAtivo = true;

    // Criação das casas do tabuleiro
    for (let i = 0; i < 9; i++) {
        const casa = document.createElement("div");
        casa.classList.add("casa");
        casa.dataset.index = i;
        casa.addEventListener("click", () => fazerJogada(i));
        casas.push(casa);
        tabuleiro.appendChild(casa);
    }

    // Função para realizar uma jogada
    function fazerJogada(index) {
        if (!jogoAtivo || tabuleiroEstado[index] !== "") return;

        tabuleiroEstado[index] = jogadorAtual;
        casas[index].textContent = jogadorAtual;
        
        if (verificarVitoria(jogadorAtual)) {
            mensagem.textContent = `O jogador ${jogadorAtual} venceu!`;
            jogoAtivo = false;
        } else if (!tabuleiroEstado.includes("")) {
            mensagem.textContent = "Empate!";
            jogoAtivo = false;
        } else {
            jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        }
    }

    // Função para verificar se há um vencedor
    function verificarVitoria(jogador) {
        const combinacoesVitoria = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combinacao of combinacoesVitoria) {
            const [a, b, c] = combinacao;
            if (tabuleiroEstado[a] === jogador && tabuleiroEstado[b] === jogador && tabuleiroEstado[c] === jogador) {
                return true;
            }
        }
        return false;
    }

    // Função para reiniciar o jogo
    function reiniciarJogo() {
        tabuleiroEstado = ["", "", "", "", "", "", "", "", ""];
        casas.forEach((casa) => casa.textContent = "");
        mensagem.textContent = "";
        jogoAtivo = true;
        jogadorAtual = "X";
    }

    reiniciarBtn.addEventListener("click", reiniciarJogo);
    // Função para gerar uma cor aleatória hexadecimal
function corAleatoria() {
    const letrasHex = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
    
}
// Função para alterar a cor de fundo do HTML
function mudarCorDeFundo() {
    document.body.style.backgroundColor = corAleatoria();
}

// Adicione um ouvinte de evento de clique ao tabuleiro para chamar a função de mudança de cor
document.querySelector("#tabuleiro").addEventListener("click", mudarCorDeFundo);

});



