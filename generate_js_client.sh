#!/bin/sh
java \
-jar openapi-generator-cli-4.1.0.jar \
generate \
-g javascript \
-i api/assertio-1.0.0-swagger.yaml \
-o clients/assertio-js-client \
-c clients/assertio-js-client/openapi-generator-config.json
