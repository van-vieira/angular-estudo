# EstudosAngular

### **Component e Module**

**Component:** é um layout que pode ser utilizado em locais diferentes, e dentro do codigo vai ter uma logica especifica, quando cria um component é para armazenar uma logica em um local especifico. um component pode ser usado para varias coisa sem precisar ficar criando vários components para o mesmo layout.

**Module:** serve para organizar os components, caso crie uma pagina e queira declarar os components dessa pagina pode ser feita declarado pelo module. sempre declarar components.

só é possível declarar um component por modulo, para usar dois components no mesmo modulo precisa exportar, os modules são feitos para separar os components.

- Todo component é uma classe
- O termo “decorate” é usado para falar para o angular que aquela classe é um component; ex: @component, @ngmodule, @input e @output

### **Propriedades do component**

**selector:** nome do component usado para referenciar no html

**templateUrl:** ele aponta o caminho para um arquivo, ele vai apontar para o template do component, é o html que vai carregar dentro de algum outro component

**styleUrl:** vai carregar o estilo do component

"import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

}"

Sempre quando quer utilizar os components de um modulo dentro dos components de um outro modulo, precisa exportar os components do modulo 2 e colocar no modulo 1 que você quer utilizar esses components.

(app.ts sempre vai ser a pasta base, tudo precisa estar importado dentro dela e dentro do app.html para funcionar)

**MODULO 1:** imports “as pastas do modulo criado”

"src > app > app.ts > ...

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { CardAzul } from "./card-azul/card-azul";
import { CardButtom } from "./card-buttom/card-buttom";
import { CardsModuloModule } from './cards-modulo/cards-modulo-module';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CardsModuloModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('estudos-angular');
}"

**MODULO 2:** imports “os components criados” ; exports “os components exportados para usar no modulo 1” 

"app > cards-modulo > cards-modulo-module.ts CardsModuloModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAzul } from '../card-azul/card-azul';
import { Card } from '../card/card';
import { CardButtom } from '../card-buttom/card-buttom';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, Card, CardAzul, CardButtom
  ],
  exports: [ Card, CardAzul, CardButtom
  ],
})
export class CardsModuloModule { }"

"src
└── app
    ├── card
    ├── card-azul
    ├── card-buttom
    ├── cards-modulo
    │   ├── cards-mo... U  (cards-modulo-module.ts)
    │   └── ...
    ├── app.config.ts
    ├── app.html
    ├── app.routes.ts
    ├── app.scss
    ├── app.spec.ts
    └── app.ts 1, M"

**Interpolação permite incorporar valores de variaveis JS diretamente no HTML e a sintaxe chave para isso é {{ }}. para acessar propriedades de uma classe precisa utilizar o this.(nome da classe.)**

binding no angular vai ficar ouvindo as propriedades que forem referenciadas no html.

caso dentro da interpolação o ultimo valor que o angular resolveu seja undefined, o html não vai fazer o display de nenhum valor.

"export class Card {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
      // ... (campo com o cursor)
    }
  };
}"

"<div class="card__plan card__item">Plano <b>{{plano.infos.tipo}}</b></div>
<div class="card__price card__item">{{plano.infos.preco}}</div>"

**Import de styles:** para criar uma variavel sass de css é só colocar $bgColor no arquivo e usar no codigo.

"/* Variáveis de Cores */
$primary-color: #007bff; // Azul
$bg-dark: #f8f9fa; // Fundo do sidebar
$text-dark: #343a40; // Texto principal
$border-color: #dee2e6; // Borda leve
$card-bg: #ffffff; // Fundo do cartão
$page-bg: #f4f6f9; // Fundo geral da página
$active-link: #e9ecef; // Fundo do link ativo na sidebar"

Para importa-las em outro css é preciso usar o caminho do arquivo original, ex: @import  "../../styles.scss";

**Ng Deep:** serve para acessar classes css dos components filho que utiliza nos components pai, pode ser components que criamos ou components de bibliotecas externas. O ng-deep faz alteração global na aplicação

referencia para utilizar: ::ng-deep

"::ng-deep .card-cancel-button {
  background-color: yellow !important;
}"

:host é usado para especificar a classe e ser usado em um componente só

Angular materia (procurar um tutorial recente)

**View Encapsulation none**: ele remove a encapsulação do component, por ex: todo css do componente pode afetar outro component pois ele fica global.  “encapsulation: ViewEncapsulation.None”

**View Encapsulation Emulated:** os estilos que estão nesse component na folha de estilo dele não vazam para fora, não afetam outros components, fica encapsulado nos elementos html do component, mas ele é afetado por estilo css global.