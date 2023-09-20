
        var contador = 0;

        function ligarDesligarLampada() {
            var ligada = document.getElementById("ligada");
            var desligada = document.getElementById("desligada");
            var status = document.getElementById("status");
            var contadorSpan = document.getElementById("contador");


            contador++;

            if (ligada.style.display === "none") {
                ligada.style.display = "inline";
                desligada.style.display = "none";
                status.innerText = "ligada";
                document.getElementById("ligar").style.display = "none";
                document.getElementById("desligar").style.display = "inline";
            } 
            else {
                ligada.style.display = "none";
                desligada.style.display = "inline";
                document.getElementById("ligar").style.display = "inline";
                document.getElementById("desligar").style.display = "none";
                status.innerText = "desligada";
            }

            contadorSpan.innerText = contador;

            if (contador >= 10) {
                document.getElementById("ligar").style.display = "none";
                document.getElementById("ligada").style.display = "none";
                document.getElementById("quebrada").style.display = "inline";
                document.getElementById("trocar").style.display = "inline";
                document.getElementById("desligar").style.display = "none";
                status.innerText = "quebrada";
                contador = 0;

            }
        }

        function trocar() {
            document.getElementById("desligar").style.display = "none";
            document.getElementById("ligada").style.display = "inline";
            document.getElementById("quebrada").style.display = "none";
            document.getElementById("ligar").style.display = "inline";
            document.getElementById("trocar").style.display = "none";
        }
