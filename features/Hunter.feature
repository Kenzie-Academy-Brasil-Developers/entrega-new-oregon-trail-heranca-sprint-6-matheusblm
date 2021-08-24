# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar para ter mais mantimentos
    Para que eu possa ajudar os Traveler com comida.

    Contexto:
        Dado um Hunter de nome "Cleitin"
        E o Hunter sempre começa a viagem com 2 refeição
        E o Huntere começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições do Hunter depois deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        E o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições do primeiro Hunter deve ser igual a 5
        E o Hunter não ficará doente

    Cenário: Deu comida a outro Traveler
        Quando o Hunter parar para dar comida 1 vezes
        E o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições dada deve ser igual 2 
        E o Hunter ficará com 5

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições do hunter deve ser 0
        E o Hunter ficará doente


    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições do hunter deve ser igual a 3
        E o Hunter não ficará doente
        
    Cenário: Saiu para caçar, comeu, deu comida e ficou saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        E o Hunter douo comida 1 vezes
        Então a quantidade de refeições do hunter deve ser igual a 6
        E o Hunter não ficará doente

   Cenário: Saiu para caçar, comeu, deu comida e ficou doente
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter parar para comer 2 vezes
        E o Hunter douo 1 veze 
        Então a quantidade de refeições do hunter deve ser igual a 1
        E o Hunter ficará doente