#!/bin/bash

echo "Building javascript"
cd jsdev

echo "default theme"
sh build_release.sh en_US default
sh build_release.sh es default
sh build_release.sh pt_BR default
sh build_release.sh ro default

echo "whitedev theme"
sh build_release.sh en_US whitedev
sh build_release.sh es whitedev
sh build_release.sh pt_BR whitedev
sh build_release.sh ro whitedev

echo "ander theme"
sh build_release.sh en_US ander
sh build_release.sh es ander
sh build_release.sh pt_BR ander
sh build_release.sh ro ander

echo "done"
cd ../
