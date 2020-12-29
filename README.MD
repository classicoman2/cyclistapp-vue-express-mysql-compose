# vue + express + mysql/sqlite + Docker Compose

Crear una aplicació d'estadístiques de ciclistes.
La idea és crear 3 serveis i integrar-los amb una `network` de Docker. 

Documentació, proves, etc a fitxer [docs](./docs/log.md)

Fases/Versions:

1. **Servei 1: Crear un contenidor amb front Vue.js**
  - vue create amb Vue 2 (default): eslint, babel
  - Port 8080 (dev)

2. **Servei 2: Crear un contenidor amb una API rest amb node.js**
  - Port 8081 (dev)
  - Empra `Sqlite` i `MongoDB` / `MySQL`
  - Està configurat de manera que pugui alternar entre `Sqlite` i  `MySQL` - si no està disponible mySQL, llavors emprar SQlite
  - Cal crear um `volume` amb docker

3. **Servei 3: Crear un contenidor amb `mongo` i `mysql`**
  - Amb un _volume_ amb el sql de la base de dades (?)
  - Integrar-la amb la API en una `network` **cyclistapp** i que sigui accessible al servei 2

4. **docker-compose: amb 3 serveis**
  - Agilitzar el procés de posada en marxa dels 3 serveis amb un fitxer `docker compose`

5. **Desplegar a remot (VPS)**
  - Pujar a VPS i provar en mode producció
  - Configurar HTTPS and TLS en remot per [Docker](https://docs.docker.com/engine/security/https/#:~:text=If%20you%20need%20Docker%20to,certificate%20signed%20by%20that%20CA.)

## Webgraphy

- Idea del projecte basada en  l'[aplicació de Docker Docs - Getting Started](https://docs.docker.com/get-started/02_our_app/) i en Docker Docs
- [Using MySQL with Node.js and the mysql JavaScript Client](https://www.sitepoint.com/using-node-mysql-javascript-client/)