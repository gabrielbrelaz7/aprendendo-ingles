export class Coracao {

    constructor(
        public cheio:boolean,
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png',
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png'
    ) {}

    public exibeCoracao():string {

        if(this.cheio) {
            return this.urlCoracaoCheio
        }

        if(this.cheio=false) {
            return this.urlCoracaoVazio
        }

    }

}