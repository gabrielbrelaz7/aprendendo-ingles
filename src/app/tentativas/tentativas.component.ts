import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input('tentativas') public tentativas: number = 3

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]
 
  constructor() { }

  ngOnChanges(): void {
    
    if ((this.tentativas == this.tentativas) && (this.tentativas !== 3)) {
      let indice = this.tentativas 
      this.coracoes[indice].cheio=false
    }


  }

  ngOnInit(): void {
  }

}
