#!/bin/bash -e

function run-integration-tests() {
   exit
}

function buildWithDockerImage() {
    echo "Clean and Build Project"
    ./gradlew clean build copyDocker docker -x test
    exit 0
}

function publishToCloudfoundry() {
    echo "Publish To CF"
    cf push
    exit 0
}

function lunchDockerContainers() {
    echo "Publish To CF"
    docker-compose up
    exit
}

buildWithDockerImage && publishToCloudfoundry