#!/bin/bash

echo "Building javascript"
cd jsdev

echo "default theme"
LANG=en_US THEME=default sh build_release.sh
LANG=es    THEME=default sh build_release.sh
LANG=pt_BR THEME=default sh build_release.sh
LANG=ro    THEME=default sh build_release.sh
LANG=zn_CN THEME=default sh build_release.sh
LANG=vi    THEME=default sh build_release.sh

echo "coinage theme"
LANG=en_US THEME=coinage sh build_release.sh
LANG=es    THEME=coinage sh build_release.sh
LANG=pt_BR THEME=coinage sh build_release.sh
LANG=ro    THEME=coinage sh build_release.sh
LANG=zn_CN THEME=coinage sh build_release.sh
LANG=vi    THEME=coinage sh build_release.sh

echo "done"
cd ../
