#!/bin/bash

echo "Building javascript"
cd jsdev

THEMES="default whitedev ander coinage"
LANGS="en_US es pt_BR ro zn_CN"

for THEME in $THEMES ; do
    echo "$THEME theme"
    for LANG in $LANGS ; do
        sh build_release.sh
    done
done

echo "done"
cd ../
