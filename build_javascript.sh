#!/bin/bash

echo "Building javascript"
cd jsdev

echo "default theme"
sh build_release.sh en_US default
sh build_release.sh es default
sh build_release.sh pt_BR default

echo "ander theme"
sh build_release.sh en_US ander
sh build_release.sh es ander
sh build_release.sh pt_BR ander

echo "done"
cd ../
