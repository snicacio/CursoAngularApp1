import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public vidaCheia: string = "/assets/1UpFull.png"
  public vidaVazia: string = "/assets/1UPEmpty.png"

  constructor() { }

  ngOnInit() {
  }

}
