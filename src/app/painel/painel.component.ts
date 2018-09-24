import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ""

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(resposta)
  }

  public verificaResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      if (this.rodada < this.frases.length) {
        this.rodada++
        this.progresso += (100 / this.frases.length)
        if (this.progresso < 100)
          this.atualizaRodada()
      }
    }
    else {
      this.tentativas--
      if(this.tentativas === -1)
      alert('Você perdeu!')
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
