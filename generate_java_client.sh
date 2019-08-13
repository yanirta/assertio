#!/bin/bash
java \
-DapiTests=false -DapiDocs=false -DmodelTests=false -DmodelDocs=false \
-jar openapi-generator-cli-4.1.0.jar \
generate \
-g java \
-i api/assertio-1.0.0-swagger.yaml \
-o clients/assertio-java-client/ \
-c clients/assertio-java-client/openapi-generator-config.json
