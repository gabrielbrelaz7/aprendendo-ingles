import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import {FRASES} from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit,OnDestroy {

  public frases: Array<Frase> = FRASES
  public instrucao: string = 'Traduza a frase:' 
  public resposta: string = ''
  public rodadaFrase: Frase
  public rodada: number = 0
  public progresso:number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 

    this.atualizarRodada()
  
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }

  // Método para pegar input em tempo de digitação do usuário em um elemento no template 
  public atualizarResposta(resposta:Event):void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  // Método para verificar resposta ao click 
  public verificarResposta():void {

    if (this.rodadaFrase.frasePtbr == this.resposta) {

       // Trocar pergunta da rodada
       this.rodada++

      this.progresso = this.progresso + 25

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria')
      }

      this.atualizarRodada()

    }

    else {
      this.tentativas--
      // Limpar a resposta da rodada
      this.resposta = ''

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  } 

  public atualizarRodada():void {
    // Atualizar o objeto rodadaFrase
    this.rodadaFrase = this.frases[this.rodada]
    // Limpar a resposta da rodada
    this.resposta = ''
  }
}


