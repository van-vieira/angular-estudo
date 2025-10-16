import { Component, ViewEncapsulation } from '@angular/core';
import { CardButtom } from "../card-buttom/card-buttom";

@Component({
  selector: 'app-card',
  imports: [CardButtom],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Card {
plano = {
  infos: {
    tipo: 'Simples',
    preco: 100,
  }
};

}

