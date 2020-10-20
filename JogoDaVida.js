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


        this.array_iniciar = () => {
            // vai preencher os arrays com zeros 
            for (let i = 0; i < this.celulas_em_linhas; i++) {
                this.array_ativo[i] = [];
                for (let j = 0; j < this.celulas_em_colunas; j++) {
                   this.array_ativo[i][j] = 0;
                }
             }
             this.array_inativo = this.array_ativo;
        };
        
        this.array_aleatorio = () => {
            for (let i = 0; i < this.celulas_em_linhas; i++){
                for (let j= 0; j< this.celulas_em_colunas; j++){
                    // loop no array ativo e atribuindo valores um ou \ero pra cada celula aleatoriamente
                    this.array_ativo[i][j] = (Math.random() > 0.5) ? 1 : 0; 

                }
            }
        };

        this.array_preencher = () => {

        };

        this.contar_vizinhos = () => {

        };

    
       
    }

}