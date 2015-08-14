#!/bin/bash

if [ $# -eq 0 ]; then
  LANG=en_US
else
  LANG=$1
fi

python ./closure-library/closure/bin/build/closurebuilder.py  \
  --root=./bitex \
  --root=./closure-library/ \
  --root=./closure-bootstrap/javascript/ \
  --root=./scottlogic/ \
  --root=./uniform/ \
  --root=./libphonenumber/i18n/phonenumbers/ \
  --root=./expression_evaluator/ \
  --namespace=bitex.app.BlinkTrade \
  --output_mode=compiled \
  --compiler_jar=./tools/XtbGenerator.jar \
  --compiler_flags="--lang=$LANG" \
  --compiler_flags="--translations_file=./translations/$LANG.xtb.xml" \
  --compiler_flags="--xtb_output_file=./translations/$LANG.xtb.xml"
