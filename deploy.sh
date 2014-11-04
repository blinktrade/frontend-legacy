#!/bin/bash

echo "Building javascript"
cd jsdev
sh build_release.sh en_US default
sh build_release.sh en_US ander
sh build_release.sh es default
sh build_release.sh es ander
sh build_release.sh pt_BR default
sh build_release.sh pt_BR ander

echo "Building static website"
cd ../
jekyll build
git checkout master
cp -r _site/* . && rm -rf _site/ es/_posts pt_BR/_posts deploy.sh  _plugins/ .idea/
git add --all . && git commit -m "Regenerate files (jekyll deployment)"
git checkout development && git clean -f -d
mkdir _site/ && jekyll build
