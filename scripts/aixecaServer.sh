#!/bin/bash   
   
    docker run -rm -d --network  cyclistapp-net  \
        --name cyclistapp-server   \
        -p 8081:8081 \
        -v ${PWD}:/usr/src/app \
    cyclistapp-server