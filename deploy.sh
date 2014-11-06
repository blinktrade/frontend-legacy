#!/bin/bash

DEVHASH=`git log --pretty=format:'%h' -n 1`

echo $DEVHASH

#jekyll build
#git checkout master
#cp -r _site/* . && rm -rf _site/ es/_posts pt_BR/_posts deploy.sh  _plugins/ .idea/
#git add --all . && git commit -m "Regenerate files ( $DEVHASH )"
#git checkout development && git clean -f -d
#mkdir _site/ && jekyll build
