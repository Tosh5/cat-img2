#!/bin/sh

# [proto-loader-gen-types](https://www.npmjs.com/package/@grpc/proto-loader)

PROTO_DIR=protos
OUT_DIR=$PROTO_DIR/generated
[ -d $OUT_DIR ] && rm -rf $OUT_DIR
mkdir -p $OUT_DIR
yarn proto-loader-gen-types --grpcLib=grpc --outDir=$OUT_DIR $PROTO_DIR/*.proto