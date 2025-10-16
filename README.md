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

![image.png](attachment:8b12b507-aed0-4260-8c02-194fc41742d9:image.png)

Sempre quando quer utilizar os components de um modulo dentro dos components de um outro modulo, precisa exportar os components do modulo 2 e colocar no modulo 1 que você quer utilizar esses components.

(app.ts sempre vai ser a pasta base, tudo precisa estar importado dentro dela e dentro do app.html para funcionar)

**MODULO 1:** imports “as pastas do modulo criado”

![image.png](attachment:e1b21456-cfd7-44fa-9434-8812eefab177:image.png)

**MODULO 2:** imports “os components criados” ; exports “os components exportados para usar no modulo 1” 

![image.png](attachment:fbf018f5-bd2d-4a6b-a725-f840cf251b83:image.png)

![image.png](attachment:c48bca03-44a6-4917-8e53-caac2a706e22:image.png)

**Interpolação permite incorporar valores de variaveis JS diretamente no HTML e a sintaxe chave para isso é {{ }}. para acessar propriedades de uma classe precisa utilizar o this.(nome da classe.)**

binding no angular vai ficar ouvindo as propriedades que forem referenciadas no html.

caso dentro da interpolação o ultimo valor que o angular resolveu seja undefined, o html não vai fazer o display de nenhum valor.

![image.png](attachment:fffb1944-5476-40d4-b796-151bfe00ef34:image.png)

![image.png](attachment:99bbe760-add4-4fd2-afcb-8e2ab05c134a:image.png)

**Import de styles:** para criar uma variavel sass de css é só colocar $bgColor no arquivo e usar no codigo.

![image.png](attachment:cdc6a687-41d9-4ac9-b4fb-1184270f7e30:image.png)

Para importa-las em outro css é preciso usar o caminho do arquivo original, ex: @import  "../../styles.scss";

**Ng Deep:** serve para acessar classes css dos components filho que utiliza nos components pai, pode ser components que criamos ou components de bibliotecas externas. O ng-deep faz alteração global na aplicação

referencia para utilizar: ::ng-deep

![image.png](attachment:ab4dc7ae-8240-4e23-8bf8-c7c1d9197619:image.png)

:host é usado para especificar a classe e ser usado em um componente só

Angular materia (procurar um tutorial recente)

**View Encapsulation none**: ele remove a encapsulação do component, por ex: todo css do componente pode afetar outro component pois ele fica global.  “encapsulation: ViewEncapsulation.None”

**View Encapsulation Emulated:** os estilos que estão nesse component na folha de estilo dele não vazam para fora, não afetam outros components, fica encapsulado nos elementos html do component, mas ele é afetado por estilo css global.