# vue + express + mysql/sqlite + Docker Compose

Crear una aplicació d'estadístiques de ciclistes.
La idea és crear 2 serveis i integrar-los amb `docker-compose` en una `network`. 

Fases/Versions:

1. **Servei 2: Crear un contenidor amb una API rest amb node.js**
  - Port 8081 (dev)
  - Primer, provar amb un servei amb `MongoDB`. Més endavant, provar `Sqlite` i  / `MySQL` o `Postgres`
  - Estàra configurat per poder alternar entre aquelles bases de dades - si no està disponible mongoDB, passar mySQL o a SQlite, etc
  - Crear un `volume` amb docker
  - Crear un contenidor amb `mongo`
    - Amb un _volume_ amb el sql de la base de dades (?)
    - Integrar-la amb la API en una `network` **cyclistapp** i que sigui accessible al servei 1

    Disponible a [docs](./docs/log.md)

2. **docker-compose**
  - Agilitzar el procés de posada en marxa dels 2 serveis amb un fitxer `docker compose`

3. **Client amb Vue.js**
  - Crear client amb Vue.js  --> fer build del codi front a una carpeta  /server/public  com el meu projecte `traversilandia`

4. **Provar de Desplegar a remot (VPS) ??**
  - Pujar a VPS i provar en mode producció
  - Configurar HTTPS and TLS en remot per [Docker](https://docs.docker.com/engine/security/https/#:~:text=If%20you%20need%20Docker%20to,certificate%20signed%20by%20that%20CA.)

5. **Afegir mysql, sqlite.. el que faci falta**



## Webgraphy

- [Docker 102: Docker Compose (juliol 2018)](https://itnext.io/docker-102-docker-compose-6bec46f18a0e)
- Idea del projecte basada en  l'[aplicació de Docker Docs - Getting Started](https://docs.docker.com/get-started/02_our_app/) i en Docker Docs
- [Using MySQL with Node.js and the mysql JavaScript Client](https://www.sitepoint.com/using-node-mysql-javascript-client/)