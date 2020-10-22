const canvas = document.querySelector("#campoDoJogo")
const contexto_canvas = canvas.getContext("2d")
var tamanho_celula = document.getElementById("tamanho-celula").value;


const jogo = new JogoDaVida()
jogo.jogoSetup()

window.onload = () => {

    document.querySelector("#comece-aleatorio").addEventListener("click", () => {
        jogo.arrayAleatorio();
        jogo.arrayPreencher();
        window.setInterval(() => {
            jogo.jogoIniciar();
        }, 300)
    })

    document.querySelector("#pare").addEventListener("click", () => {
        jogo.jogoSetup();
    })

}