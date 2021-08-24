# language: pt

Funcionalidade: Doutor
    Como um Doutor
    Eu devo curar meus companheiros
    Para que eles possam seguir a viagem saudável.

    Contexto:
        Dado um Doutor de nome "Dr.Joe"
        E o Doutor sempre começa a viagem com 1 refeição
        E o Doutor sempre começa a viagem saudável.

    Cenário: Traveler estava Doente e foi Curado
        Quando o Doctor curar
        Então o Traveler sera curado

    Cenário: Traveler estava saudável e foi Curado
        Quando o Doctor curar
        E se o Traveler ja estiver saudável, ele continua
    