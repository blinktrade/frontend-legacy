#!/bin/bash

SOURCE_BRANCH=`git rev-parse --abbrev-ref HEAD`
DEV_HASH=`git log --format='%H' -n 1`
DEV_PRETTY_HASH=`git log --pretty=format:'%h' -n 1`
REMOTE_NAME=`git remote -v | head -n1 | awk '{print $2}' | sed -e 's/.*\/\(.*\)\.git/\1/'`

if [ $# -ge 1 ]; then
  DEST_BRANCH=$1
else
  DEST_BRANCH=master
fi

if [ "$SOURCE_BRANCH" = "$DEST_BRANCH" ]; then 
  echo "You can't deploy to $DEST_BRANCH from $SOURCE_BRANCH"
  exit 1
fi

BASE_URL=""
if [ $# -ge 2  ]; then
  BASE_URL=$2
else
  echo "f $REMOTE_NAME"
  if [[ $REMOTE_NAME =~ github.io$ ]]; then
    BASE_URL=""
  else
    BASE_URL="\/$REMOTE_NAME"
  fi
fi

sed -i -pie "s/\(deploy_version: \)\(\".*\"\)/\1\"$DEV_PRETTY_HASH\"/g" _config.yml
mv _config.yml-pie  _config.yml-pie-deploy  #just for debug purposes 

sed -i -pie "s/\(baseurl: \)\(\".*\"\)/\1\"$BASE_URL\"/g"  _config.yml
mv _config.yml-pie  _config.yml-pie-baseurl # just for debug purposes 

cat _config.yml | grep "deploy_version"
cat _config.yml | grep "baseurl"

jekyll build
rm -rf _config.yml-pie-deploy 
rm -rf _config.yml-pie-baseurl
git checkout _config.yml 

git checkout $DEST_BRANCH
cp -r _site/* . && rm -rf _site/ es/_posts pt_BR/_posts deploy.sh  _plugins/ .idea/
git add --all . && git commit -m "Regenerate files ( $DEV_HASH )"
git checkout $SOURCE_BRANCH && git clean -f -d
mkdir _site/ && jekyll build
