

function Manutencao() {
    var cor = document.getElementById('yellow');
    cor.style.backgroundColor = "rgb(48, 48, 20)";

    setInterval(() => {
        cor.style.backgroundColor = "yellow";
        var manutencao = setTimeout(function () {
            cor.style.backgroundColor = "rgb(48, 48, 20)"
        }, 500)
    }, 1000);
}

Manutencao()