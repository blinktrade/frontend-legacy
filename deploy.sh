#!/bin/bash

SOURCE_BRANCH=`git rev-parse --abbrev-ref HEAD`
DEV_HASH=`git log --format='%H' -n 1`
DEV_PRETTY_HASH=`git log --pretty=format:'%h' -n 1`

if [ $# -eq 0 ]; then
  DEST_BRANCH=master
else
  DEST_BRANCH=$1
fi

if [ "$SOURCE_BRANCH" = "$DEST_BRANCH" ]; then 
  echo "You can't deploy to $DEST_BRANCH from $SOURCE_BRANCH"
  exit 1
fi

echo "Version: $DEV_HASH ( $DEV_PRETTY_HASH )"

sed -i -pie "s/\(deploy_version: \)\(\".*\"\)/\1\"$DEV_PRETTY_HASH\"/g" _config.yml
jekyll build
mv -f _config.yml-pie  _config.yml

git checkout $DEST_BRANCH
cp -r _site/* . && rm -rf _site/ es/_posts pt_BR/_posts deploy.sh  _plugins/ .idea/
git add --all . && git commit -m "Regenerate files ( $DEV_HASH )"
git checkout $SOURCE_BRANCH && git clean -f -d
mkdir _site/ && jekyll build
