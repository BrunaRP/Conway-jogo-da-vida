class JogoDaVida{

    constructor() {
        this.celula_tamanho = 5;
        this.cor_morta='#181818';
        this.cor_viva='#FF75GB';
        
        //matematica pra contar quantas linhas e colunas preciso com o numero colocado como tamanho de celula
        //floor arredonda o numero
        this.celulas_em_colunas= Math.floor(canvas.widht/this.celula_tamanho);
        this.celulas_em_linhas= Math.floor(canvas.height/this.celula_tamanho);

        //array que guarda o estado do ciclo de vida atual
        this.array_ativo=[];
        //array que guarda o estado do ciclo de vida anterior
        this.array_inativo=[];

        this.arrayIniciar = () => {
            // vai preencher os arrays com zeros 
            for (let i = 0; i < this.celulas_em_linhas; i++) {
                this.array_ativo[i] = [];
                for (let j = 0; j < this.celulas_em_colunas; j++) {
                   this.array_ativo[i][j] = 0;
                }
             }
             this.array_inativo = this.array_ativo;
        };
        
        this.arrayAleatorio = () => {
            for (let i = 0; i < this.celulas_em_linhas; i++){
                for (let j= 0; j< this.celulas_em_colunas; j++){
                    // loop no array ativo e atribuindo com 50% de chance os de valores um ou \ero pra cada celula aleatoriamente
                    this.array_ativo[i][j] = (Math.random() > 0.5) ? 1 : 0; 
                }
            }
        };

        this.arrayPreencher = () => {
            for (let i = 0; i < this.celulas_em_linhas; i++) {
                for (let j = 0; j < this.celulas_em_colunas; j++) {
                     let cor;
                     if (this.active_array[i][j] == 1)
                         cor = this.cor_viva;
                     else
                         cor = this.cor_morta;
                    //O método CanvasRenderingContext2D.fillRect() da API Canvas 2D desenha um retângulo preenchido na posição (x, y), no qual o tamanho é determinado pela width (largura) e pela height (altura), e cujo o estilo é determinado pelo atributo fillStyle. https://developer.mozilla.org/pt-BR/docs/Web/API/CanvasRenderingContext2D/fillRect
                     contexto_canvas.fillStyle = cor;
                     contexto_canvas.fillRect(j * this.celula_tamanho, i * this.celula_tamanho, this.celula_tamanho, this.celula_tamanho);
                }
            }
        };

        this.contarVizinhos = () => {

        };


        this.jogoSetup = () => {
            this.arrayIniciar();
        };

        this.jogoIniciar = () => {
            this.arrayPreencher();
        };
        

    
       
    }
}