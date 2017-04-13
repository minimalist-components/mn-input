#!/bin/bash

set -e

: ${browser:=nightmare}
browserList=${1:-$browser}

./node_modules/.bin/testcafe "$browserList" \
./sources/scripts/*.spec.js \
--app './node_modules/.bin/http-server . -s'

