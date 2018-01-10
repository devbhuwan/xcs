#!/bin/bash -e

function buildWithDockerImage() {
    echo "Clean and Build Project"
    ./gradlew clean build copyDocker docker -x test
}

function publishToCloudfoundry() {
    echo "Publish To Cloudfoundry"
    cf push
}

function lunchDockerContainers() {
    echo "Launch Local Docker Running Containers"
    docker-compose up
}

buildWithDockerImage && publishToCloudfoundry