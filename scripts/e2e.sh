#!/bin/bash

set -e

NODE_ENV="test" ./node_modules/gulp/bin/gulp.js test --silent
