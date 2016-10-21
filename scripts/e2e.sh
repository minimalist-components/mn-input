#!/bin/bash

set -e

./node_modules/testcafe/bin/testcafe.js chrome sources/scripts/mn-input.spec.js
