#!/bin/bash

if [ $# -ge 1 ]; then
	LANGUAGE=$1
else
	echo "Fast deployment script - only build default theme"
	echo
	echo "Syntax: ./minideploy.sh [language]"
	echo "e.g. ./minideploy.sh vi"
	exit 1
fi

echo "Deploying $LANGUAGE ..."

git checkout gh-pages
git pull 
git checkout master
ln -s _config.bitcoinvietnam.testnet.yml  _config.yml

echo "Building javascript..."
cd jsdev
LANG=$LANGUAGE THEME=default sh build_release.sh
echo "done"
cd ../

git commit -am "Release $LANGUAGE - mini"
./deploy.sh gh-pages ""
git push origin gh-pages
git checkout HEAD
git branch -D master
git checkout master