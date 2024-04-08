#!/bin/sh

echo "starting entrypoint"

./env.sh

exec "$@"
