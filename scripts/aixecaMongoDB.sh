#!/bin/bash

docker stop mongo
docker rm mongo
docker run -d --rm  --network cyclistapp-net --name mongo \
        -p 27017:27017 \
        -e MONGO_INITDB_ROOT_USERNAME=dbUser \
        -e MONGO_INITDB_ROOT_PASSWORD=abcWqqQ9ZWUu0p4dW \
        -v $(pwd)/mongo-volume:/data/db \
    mongo