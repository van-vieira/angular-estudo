import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAzul } from '../card-azul/card-azul';
import { Card } from '../card/card';
import { CardButtom } from '../card-buttom/card-buttom';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Card, CardAzul, CardButtom
  ],
  exports: [ Card, CardAzul, CardButtom

  ],
})
export class CardsModuloModule { }
