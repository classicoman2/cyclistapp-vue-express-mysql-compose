
29/12
    - Crear un contenidor amb: API bàsica Node.js + Express que connecti a mongo db
    - Crear un contenidor amb mongodb
    - Prova:
        - Posar en marxa els 2 contenidors en una mateixa NETWORK i veure si l'aplicació funciona
        - Provar amb DOCKER COMPOSE a veure si funciona


## NOTES  Versió 1.1

- Crea la xarxa amb:  `sudo docker network create cyclistapp-net`

https://hub.docker.com/_/mongo
    --> pots crear usuari i contrasenya quan "aixeques" el contenidor !!

    https://hub.docker.com/_/mongo  

1)
Creat `scripts/aixecaMongoDB.sh`

    **NOTA**: poso     `-p 27017:27017` per provar si el codi de server me funciona!

2)

    --> empro aquesta **imatge de docker amb node.js preparat**: [node:12](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

    Crear la imatge del server amb:  

`sudo docker build -t cyclistapp-server .`

Creat `aixecaServer.sh`

