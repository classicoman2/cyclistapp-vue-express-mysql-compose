#!/bin/bash

docker rm mongo-cyclistapp 
docker run -d --rm  --network cyclistapp-net --name mongo-cyclistapp \
        -p 27017:27017 \
        -e MONGO_INITDB_ROOT_USERNAME=dbUser \
        -e MONGO_INITDB_ROOT_PASSWORD=abcWqqQ9ZWUu0p4dW \
    mongo