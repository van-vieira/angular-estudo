import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { CardAzul } from './card-azul/card-azul';
import { CardButtom } from './card-buttom/card-buttom';
import { CardsModuloModule } from './cards-modulo/cards-modulo-module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardsModuloModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('estudos-angular');
}
