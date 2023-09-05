//funções para o semáfaro "aceso"

    function red() {
        var cor = document.getElementById('red');
        cor.style.backgroundColor = "red";

        setTimeout(function () {
            cor.style.backgroundColor = "rgb(49, 21, 21)"
            green()
        }, 1000)
    }

    function yellow() {
        var cor = document.getElementById('yellow');
        cor.style.backgroundColor = "yellow";

        setTimeout(function () {
            cor.style.backgroundColor = "rgb(48, 48, 20)"
            red()
        }, 1000)
    }


    function green() {
        var cor = document.getElementById('green');
        cor.style.backgroundColor = "lawngreen";

        setTimeout(function () {
            cor.style.backgroundColor = "rgb(39, 54, 25)"
            yellow()
        }, 1000)
    }
    green()

