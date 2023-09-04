//funções para o semáfaro "aceso"

function red() {
    var cor = document.getElementById('red');
    cor.style.backgroundColor = "red";

    setTimeout(function () {
        cor.style.backgroundColor = "rgb(49, 21, 21)"
        green()
    }, 5000)
}

function yellow() {
    var cor = document.getElementById('yellow');
    cor.style.backgroundColor = "yellow";

    setTimeout(function () {
        cor.style.backgroundColor = "rgb(48, 48, 20)"
        red()
    }, 3000)
}


function green() {
    var cor = document.getElementById('green');
    cor.style.backgroundColor = "lawngreen";

    setTimeout(function () {
        cor.style.backgroundColor = "rgb(39, 54, 25)"
        yellow()
    }, 5000)
}

green()