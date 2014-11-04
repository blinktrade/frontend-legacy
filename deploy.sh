#!/bin/bash

jekyll build
git checkout master
cp -r _site/* . && rm -rf _site/ es/_posts pt_BR/_posts deploy.sh  _plugins/ .idea/
git add --all . && git commit -m "Regenerate files (jekyll deployment)"
git checkout development && git clean -f -d
mkdir _site/ && jekyll build
