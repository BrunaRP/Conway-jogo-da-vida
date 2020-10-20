const canvas = document.querySelector("#campoDoJogo")
const contexto_canvas = canvas.getContext("2d")


const jogo = new JogoDaVida()
jogo.jogoSetup();


window.onload = () => {

    document.querySelector("#comece_aleatorio").addEventListener("click", () => {
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