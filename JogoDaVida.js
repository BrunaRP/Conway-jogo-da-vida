class JogoDaVida{

    constructor() {
       //tentativa de não precisar mudar aqui o tamanho mas sim pelo input que o usuario der
        this.celula_tamanho = tamanho_celula;
        
        this.cor_morta='#05618a';
        this.cor_viva= '#e8eaea';
        
        //matematica pra contar quantas linhas e colunas preciso com o numero colocado como tamanho de celula
        //floor arredonda o numero
        this.celulas_em_colunas= Math.floor(canvas.width/this.celula_tamanho);
        this.celulas_em_linhas= Math.floor(canvas.height/this.celula_tamanho);

        //array que guarda o estado do ciclo de vida atual
        this.array_ativo=[];
        //array que guarda o estado do ciclo de vida anterior
        this.array_inativo=[];


        // vai preencher os arrays com zeros 
        this.arrayIniciar = () => {
            console.log("array iniciado vazio");
            for (let i = 0; i < this.celulas_em_linhas; i++) {
                this.array_ativo[i] = [];
                for (let j = 0; j < this.celulas_em_colunas; j++) {
                   this.array_ativo[i][j] = 0;
                }
             }
             this.array_inativo = this.array_ativo;

        };
        
        // loop no array ativo e atribuindo com 50% de chance os valores um ou \ero pra cada celula aleatoriamente
        this.arrayAleatorio = () => {
            console.log("começando vivo aleatorio");
            for (let i = 0; i < this.celulas_em_linhas; i++){
                for (let j= 0; j< this.celulas_em_colunas; j++){
                    this.array_ativo[i][j] = (Math.random() > 0.5) ? 1 : 0; 
                }
            }
        };

        // //dá cor e uma localização pra cada celula baseada no seu estado color
        this.arrayPreencher = () => {
            for (let i = 0; i < this.celulas_em_linhas; i++) {
                for (let j = 0; j < this.celulas_em_colunas; j++) {
                     let cor;
                     if (this.array_ativo[i][j] == 1)
                         cor = this.cor_viva;
                     else
                         cor = this.cor_morta;
                    //O método CanvasRenderingContext2D.fillRect() da API Canvas 2D desenha um retângulo preenchido na posição (x, y), no qual o tamanho é determinado pela width (largura) e pela height (altura), e cujo o estilo é determinado pelo atributo fillStyle. https://developer.mozilla.org/pt-BR/docs/Web/API/CanvasRenderingContext2D/fillRect
                     contexto_canvas.fillStyle = cor;
                     contexto_canvas.fillRect(j * this.celula_tamanho, i * this.celula_tamanho, this.celula_tamanho, this.celula_tamanho);
                }
            }
            console.log("array preenchido");
        };

       //função que lida com indices negativos e indices maiores que o tamanho do array. "tente pegar o valor [-1][-1] do array ativo. Vc pode? Beleza, não pode? me retorna zero no lugar.
        this.setValorCelula = (linhas, colunas) => {
            
            try {
                return this.array_ativo[linhas][colunas];
            }
            catch {
                return 0;
             }
             
        }; 

        // função que ajuda a que contar os vizinhos. Pro atualizarValorCelula não ficar gigante já que ele tem as regras de negócio do jogo.
        this.contaVizinhos = (linhas, colunas) => {
            
            let total_vizinhos = 0;
            //contando vizinhos uma linha pra cima
            total_vizinhos += this.setValorCelula(linhas - 1, colunas - 1);
            total_vizinhos += this.setValorCelula(linhas - 1, colunas);
            total_vizinhos += this.setValorCelula(linhas - 1, colunas + 1);
            //na mesma linha
            total_vizinhos += this.setValorCelula(linhas, colunas - 1);
            total_vizinhos += this.setValorCelula(linhas, colunas + 1);
            // contando uma linha pra baixo
            total_vizinhos += this.setValorCelula(linhas + 1, colunas - 1);
            total_vizinhos += this.setValorCelula(linhas + 1, colunas);
            total_vizinhos += this.setValorCelula(linhas + 1, colunas + 1);
            
            return total_vizinhos;
            
        };

        
        this.atualizarValorCelula = (linhas, colunas) => {
            const total = this.contaVizinhos(linhas, colunas);
            
                // celula com mais de 4 e menos que 3 vizinhos morre. 1 => 0; 0 => 0.
                if (total > 4 || total < 3) {
                    return 0;
                    
                }
                // celula morta com 3 vizinhos revive. 0 => 1
                else if (this.array_ativo[linhas][colunas] === 0 && total === 3) {
                    return 1;
                }
                // ou retornar seu status de volta. 0 => 0; 1 => 1   <<<< ?
                else {
                    return this.array_ativo[linhas][colunas];
                }
        };


        //looping por todas a celulas, retornando o novo estado para a celula especifica, e trocando o seu valor para o array_inativo. Depois que o loop termina, o array_inativo volta volta a ficar ativo.
        this.atualizarCicloVida = () => {
           
            for (let i = 0; i < this.celulas_em_linhas; i++) {
                for (let j = 0; j < this.celulas_em_colunas; j++) {
                    let novo_estado = this.atualizarValorCelula(i, j);
                    this.array_inativo[i][j] = novo_estado;
                }
            }
            this.array_ativo = this.array_inativo;
        };
        

        this.jogoSetup = () => {
            this.arrayIniciar();
        };

        this.jogoIniciar = () => {
            this.atualizarCicloVida();
            this.arrayPreencher();
        };
    
    }
}