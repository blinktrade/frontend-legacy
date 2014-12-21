#!/bin/bash

#############################################
# remove all compiled soy templates
#############################################
rm -rf ./bitex/templates/*.soy.js
rm -rf ./bitex/ui/*.soy.js

if [ $# -eq 0 ]; then
  LANG=en_US
else
  LANG=$1
fi

if [ $# -eq 1 ]; then
  THEME=default
else
  THEME=$2
fi


#############################################
# compile soy templates
#############################################
echo "templates.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/templates/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/templates/templates.$THEME.soy

echo "bitex_datagrid.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/bitex_datagrid.$THEME.soy

echo "bitex_listview.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/bitex_listview.$THEME.soy

echo "order_book.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/order_book.$THEME.soy

echo "simple_chart.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/simple_chart.$THEME.soy

echo "withdraw_methods.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/withdraw_methods.$THEME.soy

echo "withdraw_method_editor.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/withdraw_method_editor.$THEME.soy

echo "advanced_order_entry.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/advanced_order_entry.$THEME.soy

echo "simple_order_entry.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/simple_order_entry.$THEME.soy

echo "market_view_table.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/market_view_table.$THEME.soy

echo "change_password.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/change_password.$THEME.soy

echo "algorithm_selector.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/algorithm_selector.$THEME.soy

echo "algorithm_runner.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/algorithm_runner.$THEME.soy

echo "locked_balance_display.soy"
java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/ui/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/ui/locked_balance_display.$THEME.soy


echo "done with soy templates"

## Messages - Uncomment this to generate the translation file
#python ./closure-library/closure/bin/build/closurebuilder.py  \
#  --root=./bitex \
#  --root=./closure-library/ \
#  --root=./closure-bootstrap/javascript/ \
#  --root=./scottlogic/ \
#  --root=./uniform/ \
#  --namespace=bitex.app.BlinkTrade \
#  --output_mode=compiled \
#  --compiler_jar=./tools/XtbGenerator.jar \
#  --compiler_flags="--lang=$LANG" \
#  --compiler_flags="--translations_file=./translations/$LANG.xtb.xml" \
#  --compiler_flags="--xtb_output_file=./translations/$LANG.xtb.xml"


# BlinkTrade Application - enUS
python ./closure-library/closure/bin/build/closurebuilder.py  \
  --root=./closure-library/ \
  --root=./closure-bootstrap/javascript/ \
  --root=./scottlogic/ \
  --root=./uniform/ \
  --root=./bitex \
  --namespace=bitex.app.BlinkTrade \
  --output_mode=compiled \
  --compiler_jar=./tools/compiler.jar \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  --compiler_flags="--define=goog.DEBUG=0" \
  --compiler_flags="--define=goog.LOCALE='$LANG'" \
  --compiler_flags="--externs=./externs/google.js" \
  --compiler_flags="--externs=./externs/plusone.js" \
  --compiler_flags="--externs=./externs/zopim.js" \
  --compiler_flags="--externs=./externs/jquery-1.9.js" \
  --compiler_flags="--externs=./externs/twitter-bootstrap.js" \
  --compiler_flags="--externs=./externs/google_analytics_api.js" \
  --compiler_flags="--externs=./externs/parsley.js" \
  --compiler_flags="--externs=./externs/jquerymobile-1.4.3.js" \
  --compiler_flags="--externs=./externs/sticky.js" \
  --compiler_flags="--externs=./externs/facebook_javascript_sdk.js" \
  --compiler_flags="--translations_file=./translations/$LANG.xtb.xml" \
   > ../assets/js/bitex_app_blink_trade.compiled.$LANG.$THEME.js

# enable those flags to debug the compiled code.
#  --compiler_flags="--debug=TRUE" \
#  --compiler_flags="--formatting=PRETTY_PRINT" \
#  --compiler_flags="--formatting=PRINT_INPUT_DELIMITER" \

