# vue + express + mongo/mysql/postgres/sqlite + docker

Crear una aplicació d'estadístiques de ciclistes.
La idea és crear 2 serveis i integrar-los amb `docker-compose` en una `network`. 

## TODO

Immediat:

- [ ] Carregar dades a mongo des de fitxers `.json`
- [ ] :hammer: Crear tests amb **Mocha/Chai** sobre fitxers .json per validar dades

Upgrades:

- [ ] Pujar a VPS i provar en mode producció
- [ ] Configurar HTTPS and TLS en remot per [Docker](https://docs.docker.com/engine/security/https/#:~:text=If%20you%20need%20Docker%20to,certificate%20signed%20by%20that%20CA.)
- [ ] Afegir mysql, sqlite.. etc

## (kind of) log deBranches/versions

### dev1.1

  - Resum: Crear un contenidor amb una API rest amb node.js**
  - Port 8081 (dev)
  - Primer, provar amb un servei amb `MongoDB`. Més endavant, provar `Sqlite` i  / `MySQL` o `Postgres`
  - Estàra configurat per poder alternar entre aquelles bases de dades - si no està disponible mongoDB, passar mySQL o a SQlite, etc
  - Crear un `volume` amb docker
  - Crear un contenidor amb `mongo`
    - Amb un _volume_ amb el sql de la base de dades (?)
    - Integrar-la amb la API en una `network` **cyclistapp** i que sigui accessible al servei 1

  - Log disponible a [docs](./docs/log.md)

### dev1.2

  - Agilitzar el procés de posada en marxa dels 2 serveis amb un fitxer `docker compose`
  ```js
     sudo docker-compose up -d --remove-orphans
  ```

### dev1.3 
  - Crear client amb Vue.js  --> fer build del codi front a una carpeta  /server/public  com el meu projecte `traversilandia`
  - Afegit script `npm run load` que carrega els fitxers json
  - Afegit `scripts/aixecaMongoDBalone.sh` que permet aixecar container `mongo` que puc atacar amb `npm run dev` (server) i `npm run load` (linia anterior). en principi, aquest container té persistència de dades - veure directiva `-v`
  - `loadData.js` inserts TEAMS names into bdd and front fetches and shows them in `Teams.vue` component


## Webgraphy
- [Persistent Databases Using Docker’s Volumes and MongoDB](https://medium.com/better-programming/persistent-databases-using-dockers-volumes-and-mongodb-9ac284c25b39)
- [Docker 102: Docker Compose (juliol 2018)](https://itnext.io/docker-102-docker-compose-6bec46f18a0e)
- Idea del projecte basada en  l'[aplicació de Docker Docs - Getting Started](https://docs.docker.com/get-started/02_our_app/) i en Docker Docs
- [Using MySQL with Node.js and the mysql JavaScript Client](https://www.sitepoint.com/using-node-mysql-javascript-client/)
- [Environment variables in Compose - docker.docs](Environment variables in Compose)