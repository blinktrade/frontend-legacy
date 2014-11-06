#!/bin/bash

DEV_HASH=`git log --format='%H' -n 1`
DEV_PRETTY_HASH=`git log --pretty=format:'%h' -n 1`

echo $DEV_HASH
echo $DEV_PRETTY_HASH 

sed -i -pie "s/\(deploy_version: \)\(\".*\"\)/\1\"$DEV_PRETTY_HASH\"/g" _config.yml
jekyll build
mv -f _config.yml-pie  _config.yml

git checkout master
cp -r _site/* . && rm -rf _site/ es/_posts pt_BR/_posts deploy.sh  _plugins/ .idea/
git add --all . && git commit -m "Regenerate files ( $DEVHASH )"
git checkout development && git clean -f -d
mkdir _site/ && jekyll build
