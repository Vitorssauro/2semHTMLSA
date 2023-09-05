//funções para o semáfaro "aceso"

function manutencao() {
    var cor = document.getElementById('yellow');
    return setInterval(() => {
        cor.style.backgroundColor = "yellow";
        setTimeout(function () {
            cor.style.backgroundColor = "rgb(48, 48, 20)"
        }, 500)
    }, 1000);
}

function red() {
    var cor = document.getElementById('red');
    cor.style.backgroundColor = "red";
    setTimeout(function () {
        cor.style.backgroundColor = "rgb(49, 21, 21)"
    }, 1000);
}

function yellow() {
    var cor = document.getElementById('yellow');
    cor.style.backgroundColor = "yellow";
    setTimeout(function () {
        cor.style.backgroundColor = "rgb(48, 48, 20)"
    }, 1000);
}

function green() {
    var cor = document.getElementById('green');
    cor.style.backgroundColor = "lawngreen";
    setTimeout(function () {
        cor.style.backgroundColor = "rgb(39, 54, 25)"
    }, 1000);
}

function funcionando() {
    green()
    setTimeout(function () { yellow() }, 1000)
    setTimeout(function () { red() }, 2000)
}

//ativação da manutenção

var rodar = true;

function manutar() {
    rodar = false;
    clearInterval(ciclo);
    manutencao()
}

if (rodar == true) {
    funcionando() //remover delay inicial
    var ciclo = setInterval(funcionando, 3000);
}