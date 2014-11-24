// Input 0
function $JSCompiler_alias_THROW$$($jscomp_throw_param$$) {
  throw $jscomp_throw_param$$;
}
var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$63$$, $opt_object$$) {
  var $parts$$ = $name$$63$$.split("."), $cur$$ = $goog$global$$;
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $goog$isDef$$($opt_object$$) ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
function $goog$getObjectByName$$($name$$64_parts$$1$$) {
  $name$$64_parts$$1$$ = $name$$64_parts$$1$$.split(".");
  for(var $cur$$1$$ = $goog$global$$, $part$$1$$;$part$$1$$ = $name$$64_parts$$1$$.shift();) {
    if($cur$$1$$[$part$$1$$] != $JSCompiler_alias_NULL$$) {
      $cur$$1$$ = $cur$$1$$[$part$$1$$]
    }else {
      return $JSCompiler_alias_NULL$$
    }
  }
  return $cur$$1$$
}
function $goog$nullFunction$$() {
}
function $goog$addSingletonGetter$$($ctor$$) {
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ ? $ctor$$.$instance_$ : $ctor$$.$instance_$ = new $ctor$$
  }
}
function $goog$typeOf$$($value$$49$$) {
  var $s$$2$$ = typeof $value$$49$$;
  if("object" == $s$$2$$) {
    if($value$$49$$) {
      if($value$$49$$ instanceof Array) {
        return"array"
      }
      if($value$$49$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$2$$ = Object.prototype.toString.call($value$$49$$);
      if("[object Window]" == $className$$2$$) {
        return"object"
      }
      if("[object Array]" == $className$$2$$ || "number" == typeof $value$$49$$.length && "undefined" != typeof $value$$49$$.splice && "undefined" != typeof $value$$49$$.propertyIsEnumerable && !$value$$49$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$2$$ || "undefined" != typeof $value$$49$$.call && "undefined" != typeof $value$$49$$.propertyIsEnumerable && !$value$$49$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$49$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isDef$$($val$$) {
  return $val$$ !== $JSCompiler_alias_VOID$$
}
function $goog$isDefAndNotNull$$($val$$2$$) {
  return $val$$2$$ != $JSCompiler_alias_NULL$$
}
function $goog$isArray$$($val$$3$$) {
  return"array" == $goog$typeOf$$($val$$3$$)
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$52$$ = $goog$typeOf$$($val$$4$$);
  return"array" == $type$$52$$ || "object" == $type$$52$$ && "number" == typeof $val$$4$$.length
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isNumber$$($val$$8$$) {
  return"number" == typeof $val$$8$$
}
function $goog$isFunction$$($val$$9$$) {
  return"function" == $goog$typeOf$$($val$$9$$)
}
function $goog$isObject$$($val$$10$$) {
  var $type$$53$$ = typeof $val$$10$$;
  return"object" == $type$$53$$ && $val$$10$$ != $JSCompiler_alias_NULL$$ || "function" == $type$$53$$
}
function $goog$getUid$$($obj$$36$$) {
  return $obj$$36$$[$goog$UID_PROPERTY_$$] || ($obj$$36$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$37$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$38$$) {
  $fn$$1$$ || $JSCompiler_alias_THROW$$(Error());
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$39$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments)
}
function $goog$partial$$($fn$$3$$, $var_args$$40$$) {
  var $args$$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = Array.prototype.slice.call(arguments);
    $newArgs$$1$$.unshift.apply($newArgs$$1$$, $args$$3$$);
    return $fn$$3$$.apply(this, $newArgs$$1$$)
  }
}
var $goog$now$$ = Date.now || function() {
  return+new Date
};
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$
}
;
// Input 1
// Input 2
// Input 3
function $goog$string$isEmpty$$($str$$16$$) {
  return/^[\s\xa0]*$/.test($str$$16$$)
}
function $goog$string$trim$$($str$$27$$) {
  return $str$$27$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function $goog$string$htmlEscape$$($str$$33$$) {
  if(!$goog$string$allRe_$$.test($str$$33$$)) {
    return $str$$33$$
  }
  -1 != $str$$33$$.indexOf("&") && ($str$$33$$ = $str$$33$$.replace($goog$string$amperRe_$$, "&amp;"));
  -1 != $str$$33$$.indexOf("<") && ($str$$33$$ = $str$$33$$.replace($goog$string$ltRe_$$, "&lt;"));
  -1 != $str$$33$$.indexOf(">") && ($str$$33$$ = $str$$33$$.replace($goog$string$gtRe_$$, "&gt;"));
  -1 != $str$$33$$.indexOf('"') && ($str$$33$$ = $str$$33$$.replace($goog$string$quotRe_$$, "&quot;"));
  return $str$$33$$
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
function $goog$string$remove$$($s$$10$$, $ss$$2$$) {
  var $re$$ = RegExp($goog$string$regExpEscape$$($ss$$2$$), "");
  return $s$$10$$.replace($re$$, "")
}
function $goog$string$regExpEscape$$($s$$12$$) {
  return String($s$$12$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function $goog$string$getRandomString$$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36)
}
function $goog$string$toNumber$$($str$$43$$) {
  var $num$$5$$ = Number($str$$43$$);
  return 0 == $num$$5$$ && $goog$string$isEmpty$$($str$$43$$) ? NaN : $num$$5$$
}
function $goog$string$toCamelCase$$($str$$44$$) {
  return String($str$$44$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase()
  })
}
function $goog$string$toTitleCase$$($str$$46$$) {
  var $delimiters$$ = $goog$isString$$($JSCompiler_alias_VOID$$) ? $goog$string$regExpEscape$$($JSCompiler_alias_VOID$$) : "\\s";
  return $str$$46$$.replace(RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$1$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase()
  })
}
;
// Input 4
// Input 5
var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$16$$, $obj$$40$$, $opt_fromIndex$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$16$$, $obj$$40$$, $opt_fromIndex$$6$$)
} : function($arr$$17$$, $obj$$41$$, $fromIndex$$2_i$$12_opt_fromIndex$$7$$) {
  $fromIndex$$2_i$$12_opt_fromIndex$$7$$ = $fromIndex$$2_i$$12_opt_fromIndex$$7$$ == $JSCompiler_alias_NULL$$ ? 0 : 0 > $fromIndex$$2_i$$12_opt_fromIndex$$7$$ ? Math.max(0, $arr$$17$$.length + $fromIndex$$2_i$$12_opt_fromIndex$$7$$) : $fromIndex$$2_i$$12_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$17$$)) {
    return!$goog$isString$$($obj$$41$$) || 1 != $obj$$41$$.length ? -1 : $arr$$17$$.indexOf($obj$$41$$, $fromIndex$$2_i$$12_opt_fromIndex$$7$$)
  }
  for(;$fromIndex$$2_i$$12_opt_fromIndex$$7$$ < $arr$$17$$.length;$fromIndex$$2_i$$12_opt_fromIndex$$7$$++) {
    if($fromIndex$$2_i$$12_opt_fromIndex$$7$$ in $arr$$17$$ && $arr$$17$$[$fromIndex$$2_i$$12_opt_fromIndex$$7$$] === $obj$$41$$) {
      return $fromIndex$$2_i$$12_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$20$$, $f$$, $opt_obj$$1$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$20$$, $f$$, $opt_obj$$1$$)
} : function($arr$$21$$, $f$$1$$, $opt_obj$$2$$) {
  for(var $l$$2$$ = $arr$$21$$.length, $arr2$$ = $goog$isString$$($arr$$21$$) ? $arr$$21$$.split("") : $arr$$21$$, $i$$14$$ = 0;$i$$14$$ < $l$$2$$;$i$$14$$++) {
    $i$$14$$ in $arr2$$ && $f$$1$$.call($opt_obj$$2$$, $arr2$$[$i$$14$$], $i$$14$$, $arr$$21$$)
  }
}, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$23$$, $f$$3$$, $opt_obj$$4$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$23$$, $f$$3$$, $opt_obj$$4$$)
} : function($arr$$24$$, $f$$4$$, $opt_obj$$5$$) {
  for(var $l$$4$$ = $arr$$24$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$24$$) ? $arr$$24$$.split("") : $arr$$24$$, $i$$16$$ = 0;$i$$16$$ < $l$$4$$;$i$$16$$++) {
    if($i$$16$$ in $arr2$$2$$) {
      var $val$$11$$ = $arr2$$2$$[$i$$16$$];
      $f$$4$$.call($opt_obj$$5$$, $val$$11$$, $i$$16$$, $arr$$24$$) && ($res$$[$resLength$$++] = $val$$11$$)
    }
  }
  return $res$$
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$25$$, $f$$5$$, $opt_obj$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$25$$, $f$$5$$, $opt_obj$$6$$)
} : function($arr$$26$$, $f$$6$$, $opt_obj$$7$$) {
  for(var $l$$5$$ = $arr$$26$$.length, $res$$1$$ = Array($l$$5$$), $arr2$$3$$ = $goog$isString$$($arr$$26$$) ? $arr$$26$$.split("") : $arr$$26$$, $i$$17$$ = 0;$i$$17$$ < $l$$5$$;$i$$17$$++) {
    $i$$17$$ in $arr2$$3$$ && ($res$$1$$[$i$$17$$] = $f$$6$$.call($opt_obj$$7$$, $arr2$$3$$[$i$$17$$], $i$$17$$, $arr$$26$$))
  }
  return $res$$1$$
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$31$$, $f$$11$$, $opt_obj$$12$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$31$$, $f$$11$$, $opt_obj$$12$$)
} : function($arr$$32$$, $f$$12$$, $opt_obj$$13$$) {
  for(var $l$$7$$ = $arr$$32$$.length, $arr2$$5$$ = $goog$isString$$($arr$$32$$) ? $arr$$32$$.split("") : $arr$$32$$, $i$$19$$ = 0;$i$$19$$ < $l$$7$$;$i$$19$$++) {
    if($i$$19$$ in $arr2$$5$$ && !$f$$12$$.call($opt_obj$$13$$, $arr2$$5$$[$i$$19$$], $i$$19$$, $arr$$32$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$array$find$$($arr$$35$$, $f$$14$$) {
  var $i$$20$$ = $goog$array$findIndex$$($arr$$35$$, $f$$14$$, $JSCompiler_alias_VOID$$);
  return 0 > $i$$20$$ ? $JSCompiler_alias_NULL$$ : $goog$isString$$($arr$$35$$) ? $arr$$35$$.charAt($i$$20$$) : $arr$$35$$[$i$$20$$]
}
function $goog$array$findIndex$$($arr$$36$$, $f$$15$$, $opt_obj$$16$$) {
  for(var $l$$8$$ = $arr$$36$$.length, $arr2$$6$$ = $goog$isString$$($arr$$36$$) ? $arr$$36$$.split("") : $arr$$36$$, $i$$21$$ = 0;$i$$21$$ < $l$$8$$;$i$$21$$++) {
    if($i$$21$$ in $arr2$$6$$ && $f$$15$$.call($opt_obj$$16$$, $arr2$$6$$[$i$$21$$], $i$$21$$, $arr$$36$$)) {
      return $i$$21$$
    }
  }
  return-1
}
function $goog$array$contains$$($arr$$39$$, $obj$$44$$) {
  return 0 <= $goog$array$indexOf$$($arr$$39$$, $obj$$44$$)
}
function $goog$array$remove$$($arr$$46$$, $obj$$48$$) {
  var $i$$26$$ = $goog$array$indexOf$$($arr$$46$$, $obj$$48$$);
  0 <= $i$$26$$ && $goog$array$removeAt$$($arr$$46$$, $i$$26$$)
}
function $goog$array$removeAt$$($arr$$47$$, $i$$27$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$47$$, $i$$27$$, 1)
}
function $goog$array$toArray$$($object$$2$$) {
  var $length$$15$$ = $object$$2$$.length;
  if(0 < $length$$15$$) {
    for(var $rv$$3$$ = Array($length$$15$$), $i$$29$$ = 0;$i$$29$$ < $length$$15$$;$i$$29$$++) {
      $rv$$3$$[$i$$29$$] = $object$$2$$[$i$$29$$]
    }
    return $rv$$3$$
  }
  return[]
}
function $goog$array$splice$$($arr$$49$$, $index$$53$$, $howMany$$, $var_args$$55$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.splice.apply($arr$$49$$, $goog$array$slice$$(arguments, 1))
}
function $goog$array$slice$$($arr$$50$$, $start$$6$$, $opt_end$$13$$) {
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$50$$, $start$$6$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$50$$, $start$$6$$, $opt_end$$13$$)
}
;
// Input 6
var $goog$dom$defaultDomHelper_$$;
function $goog$dom$classes$get$$($className$$5_element$$9$$) {
  $className$$5_element$$9$$ = $className$$5_element$$9$$.className;
  return $goog$isString$$($className$$5_element$$9$$) && $className$$5_element$$9$$.match(/\S+/g) || []
}
function $goog$dom$classes$add$$($element$$10$$, $var_args$$58$$) {
  var $classes$$ = $goog$dom$classes$get$$($element$$10$$), $args$$6$$ = $goog$array$slice$$(arguments, 1), $expectedCount$$ = $classes$$.length + $args$$6$$.length;
  $goog$dom$classes$add_$$($classes$$, $args$$6$$);
  $element$$10$$.className = $classes$$.join(" ");
  return $classes$$.length == $expectedCount$$
}
function $goog$dom$classes$remove$$($element$$11$$, $var_args$$59$$) {
  var $classes$$1$$ = $goog$dom$classes$get$$($element$$11$$), $args$$7$$ = $goog$array$slice$$(arguments, 1), $newClasses$$ = $goog$dom$classes$getDifference_$$($classes$$1$$, $args$$7$$);
  $element$$11$$.className = $newClasses$$.join(" ");
  return $newClasses$$.length == $classes$$1$$.length - $args$$7$$.length
}
function $goog$dom$classes$add_$$($classes$$2$$, $args$$8$$) {
  for(var $i$$41$$ = 0;$i$$41$$ < $args$$8$$.length;$i$$41$$++) {
    $goog$array$contains$$($classes$$2$$, $args$$8$$[$i$$41$$]) || $classes$$2$$.push($args$$8$$[$i$$41$$])
  }
}
function $goog$dom$classes$getDifference_$$($arr1$$4$$, $arr2$$12$$) {
  return $goog$array$filter$$($arr1$$4$$, function($item$$) {
    return!$goog$array$contains$$($arr2$$12$$, $item$$)
  })
}
function $goog$dom$classes$addRemove$$($element$$13$$, $classesToRemove$$, $classesToAdd$$) {
  var $classes$$4$$ = $goog$dom$classes$get$$($element$$13$$);
  $goog$isString$$($classesToRemove$$) ? $goog$array$remove$$($classes$$4$$, $classesToRemove$$) : $goog$isArray$$($classesToRemove$$) && ($classes$$4$$ = $goog$dom$classes$getDifference_$$($classes$$4$$, $classesToRemove$$));
  $goog$isString$$($classesToAdd$$) && !$goog$array$contains$$($classes$$4$$, $classesToAdd$$) ? $classes$$4$$.push($classesToAdd$$) : $goog$isArray$$($classesToAdd$$) && $goog$dom$classes$add_$$($classes$$4$$, $classesToAdd$$);
  $element$$13$$.className = $classes$$4$$.join(" ")
}
function $goog$dom$classes$has$$($element$$14$$, $className$$6$$) {
  return $goog$array$contains$$($goog$dom$classes$get$$($element$$14$$), $className$$6$$)
}
;
// Input 7
function $goog$object$forEach$$($obj$$49$$, $f$$19$$, $opt_obj$$22$$) {
  for(var $key$$22$$ in $obj$$49$$) {
    $f$$19$$.call($opt_obj$$22$$, $obj$$49$$[$key$$22$$], $key$$22$$, $obj$$49$$)
  }
}
function $goog$object$getValues$$($obj$$58$$) {
  var $res$$4$$ = [], $i$$43$$ = 0, $key$$30$$;
  for($key$$30$$ in $obj$$58$$) {
    $res$$4$$[$i$$43$$++] = $obj$$58$$[$key$$30$$]
  }
  return $res$$4$$
}
function $goog$object$getKeys$$($obj$$59$$) {
  var $res$$5$$ = [], $i$$44$$ = 0, $key$$31$$;
  for($key$$31$$ in $obj$$59$$) {
    $res$$5$$[$i$$44$$++] = $key$$31$$
  }
  return $res$$5$$
}
function $goog$object$findKey$$($obj$$63$$, $f$$24$$) {
  for(var $key$$34$$ in $obj$$63$$) {
    if($f$$24$$.call($JSCompiler_alias_VOID$$, $obj$$63$$[$key$$34$$], $key$$34$$, $obj$$63$$)) {
      return $key$$34$$
    }
  }
}
function $goog$object$isEmpty$$() {
  var $obj$$65$$ = $goog$fx$anim$activeAnimations_$$, $key$$36$$;
  for($key$$36$$ in $obj$$65$$) {
    return $JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_alias_TRUE$$
}
function $goog$object$remove$$($obj$$67$$, $key$$37$$) {
  $key$$37$$ in $obj$$67$$ && delete $obj$$67$$[$key$$37$$]
}
function $goog$object$add$$($obj$$68$$, $key$$38$$, $val$$18$$) {
  $key$$38$$ in $obj$$68$$ && $JSCompiler_alias_THROW$$(Error('The object already contains the key "' + $key$$38$$ + '"'));
  $obj$$68$$[$key$$38$$] = $val$$18$$
}
function $goog$object$get$$($obj$$69$$, $key$$39$$, $opt_val$$) {
  return $key$$39$$ in $obj$$69$$ ? $obj$$69$$[$key$$39$$] : $opt_val$$
}
function $goog$object$unsafeClone$$($obj$$73$$) {
  var $clone$$1_type$$56$$ = $goog$typeOf$$($obj$$73$$);
  if("object" == $clone$$1_type$$56$$ || "array" == $clone$$1_type$$56$$) {
    if($obj$$73$$.clone) {
      return $obj$$73$$.clone()
    }
    var $clone$$1_type$$56$$ = "array" == $clone$$1_type$$56$$ ? [] : {}, $key$$43$$;
    for($key$$43$$ in $obj$$73$$) {
      $clone$$1_type$$56$$[$key$$43$$] = $goog$object$unsafeClone$$($obj$$73$$[$key$$43$$])
    }
    return $clone$$1_type$$56$$
  }
  return $obj$$73$$
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$48$$, $var_args$$61$$) {
  for(var $key$$45$$, $source$$2$$, $i$$47$$ = 1;$i$$47$$ < arguments.length;$i$$47$$++) {
    $source$$2$$ = arguments[$i$$47$$];
    for($key$$45$$ in $source$$2$$) {
      $target$$48$$[$key$$45$$] = $source$$2$$[$key$$45$$]
    }
    for(var $j$$4$$ = 0;$j$$4$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$4$$++) {
      $key$$45$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$4$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$45$$) && ($target$$48$$[$key$$45$$] = $source$$2$$[$key$$45$$])
    }
  }
}
;
// Input 8
// Input 9
var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$, $goog$userAgent$detectedMac_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$
}
function $goog$userAgent$getNavigator$$() {
  return $goog$global$$.navigator
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_101$$;
if($ua$$inline_101$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_102$$ = $goog$userAgent$getNavigator$$();
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_101$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_101$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_101$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_102$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $navigator$$inline_104$$ = $goog$userAgent$getNavigator$$();
$goog$userAgent$detectedMac_$$ = -1 != ($navigator$$inline_104$$ && $navigator$$inline_104$$.platform || "").indexOf("Mac");
var $goog$userAgent$X11$$ = !!$goog$userAgent$getNavigator$$() && -1 != ($goog$userAgent$getNavigator$$().appVersion || "").indexOf("X11");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$4$$ = $goog$global$$.document;
  return $doc$$4$$ ? $doc$$4$$.documentMode : $JSCompiler_alias_VOID$$
}
var $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_107$$ = "", $re$$inline_108$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_109$$ = $goog$global$$.opera.version, $version$$inline_107$$ = "function" == typeof $operaVersion$$inline_109$$ ? $operaVersion$$inline_109$$() : $operaVersion$$inline_109$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_108$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_108$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_108$$ = /WebKit\/(\S+)/), $re$$inline_108$$) {
      var $arr$$inline_110$$ = $re$$inline_108$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_107$$ = $arr$$inline_110$$ ? $arr$$inline_110$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_111$$ = $goog$userAgent$getDocumentMode_$$();
    if($docMode$$inline_111$$ > parseFloat($version$$inline_107$$)) {
      $goog$userAgent$VERSION$$ = String($docMode$$inline_111$$);
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_107$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$81_order$$inline_115$$;
  if(!($JSCompiler_temp$$81_order$$inline_115$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$81_order$$inline_115$$ = 0;
    for(var $v1Subs$$inline_116$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_117$$ = $goog$string$trim$$(String($version$$8$$)).split("."), $subCount$$inline_118$$ = Math.max($v1Subs$$inline_116$$.length, $v2Subs$$inline_117$$.length), $subIdx$$inline_119$$ = 0;0 == $JSCompiler_temp$$81_order$$inline_115$$ && $subIdx$$inline_119$$ < $subCount$$inline_118$$;$subIdx$$inline_119$$++) {
      var $v1Sub$$inline_120$$ = $v1Subs$$inline_116$$[$subIdx$$inline_119$$] || "", $v2Sub$$inline_121$$ = $v2Subs$$inline_117$$[$subIdx$$inline_119$$] || "", $v1CompParser$$inline_122$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_123$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_124$$ = $v1CompParser$$inline_122$$.exec($v1Sub$$inline_120$$) || ["", "", ""], $v2Comp$$inline_125$$ = $v2CompParser$$inline_123$$.exec($v2Sub$$inline_121$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_124$$[0].length && 0 == $v2Comp$$inline_125$$[0].length) {
          break
        }
        $JSCompiler_temp$$81_order$$inline_115$$ = ((0 == $v1Comp$$inline_124$$[1].length ? 0 : parseInt($v1Comp$$inline_124$$[1], 10)) < (0 == $v2Comp$$inline_125$$[1].length ? 0 : parseInt($v2Comp$$inline_125$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_124$$[1].length ? 0 : parseInt($v1Comp$$inline_124$$[1], 10)) > (0 == $v2Comp$$inline_125$$[1].length ? 0 : parseInt($v2Comp$$inline_125$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_124$$[2].length) < (0 == $v2Comp$$inline_125$$[2].length) ? -1 : (0 == 
        $v1Comp$$inline_124$$[2].length) > (0 == $v2Comp$$inline_125$$[2].length) ? 1 : 0) || ($v1Comp$$inline_124$$[2] < $v2Comp$$inline_125$$[2] ? -1 : $v1Comp$$inline_124$$[2] > $v2Comp$$inline_125$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$81_order$$inline_115$$)
    }
    $JSCompiler_temp$$81_order$$inline_115$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$81_order$$inline_115$$
  }
  return $JSCompiler_temp$$81_order$$inline_115$$
}
var $doc$$inline_127$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = !$doc$$inline_127$$ || !$goog$userAgent$IE$$ ? $JSCompiler_alias_VOID$$ : $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_127$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5);
// Input 10
function $goog$math$Size$$($width$$12$$, $height$$11$$) {
  this.width = $width$$12$$;
  this.height = $height$$11$$
}
$goog$math$Size$$.prototype.clone = function $$goog$math$Size$$$$clone$() {
  return new $goog$math$Size$$(this.width, this.height)
};
$goog$math$Size$$.prototype.ceil = function $$goog$math$Size$$$$ceil$() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
$goog$math$Size$$.prototype.floor = function $$goog$math$Size$$$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
$goog$math$Size$$.prototype.round = function $$goog$math$Size$$$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
// Input 11
var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ = !$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1"), $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9"), 
$goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$ = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$;
// Input 12
// Input 13
function $goog$math$Coordinate$$($opt_x$$, $opt_y$$) {
  this.x = $goog$isDef$$($opt_x$$) ? $opt_x$$ : 0;
  this.y = $goog$isDef$$($opt_y$$) ? $opt_y$$ : 0
}
$goog$math$Coordinate$$.prototype.clone = function $$goog$math$Coordinate$$$$clone$() {
  return new $goog$math$Coordinate$$(this.x, this.y)
};
$goog$math$Coordinate$$.prototype.ceil = function $$goog$math$Coordinate$$$$ceil$() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
$goog$math$Coordinate$$.prototype.floor = function $$goog$math$Coordinate$$$$floor$() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
$goog$math$Coordinate$$.prototype.round = function $$goog$math$Coordinate$$$$round$() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
// Input 14
function $goog$dom$getDomHelper$$($opt_element$$10$$) {
  return $opt_element$$10$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$10$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)
}
function $goog$dom$getElement$$($element$$17$$) {
  return $goog$isString$$($element$$17$$) ? document.getElementById($element$$17$$) : $element$$17$$
}
function $goog$dom$getElementsByTagNameAndClass$$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return $goog$dom$getElementsByTagNameAndClass_$$(document, $opt_tag$$, $opt_class$$, $opt_el$$)
}
function $goog$dom$getElementsByClass$$($className$$9$$, $opt_el$$1$$) {
  var $parent$$2$$ = $opt_el$$1$$ || document;
  return $parent$$2$$.querySelectorAll && $parent$$2$$.querySelector ? $parent$$2$$.querySelectorAll("." + $className$$9$$) : $parent$$2$$.getElementsByClassName ? $parent$$2$$.getElementsByClassName($className$$9$$) : $goog$dom$getElementsByTagNameAndClass_$$(document, "*", $className$$9$$, $opt_el$$1$$)
}
function $goog$dom$getElementByClass$$($className$$10$$, $opt_el$$2$$) {
  var $parent$$3$$ = $opt_el$$2$$ || document, $retVal$$ = $JSCompiler_alias_NULL$$;
  return($retVal$$ = $parent$$3$$.querySelectorAll && $parent$$3$$.querySelector ? $parent$$3$$.querySelector("." + $className$$10$$) : $goog$dom$getElementsByClass$$($className$$10$$, $opt_el$$2$$)[0]) || $JSCompiler_alias_NULL$$
}
function $goog$dom$getElementsByTagNameAndClass_$$($doc$$6_els_parent$$5$$, $className$$11_opt_tag$$1_tagName$$1$$, $opt_class$$1$$, $arrayLike_opt_el$$3$$) {
  $doc$$6_els_parent$$5$$ = $arrayLike_opt_el$$3$$ || $doc$$6_els_parent$$5$$;
  $className$$11_opt_tag$$1_tagName$$1$$ = $className$$11_opt_tag$$1_tagName$$1$$ && "*" != $className$$11_opt_tag$$1_tagName$$1$$ ? $className$$11_opt_tag$$1_tagName$$1$$.toUpperCase() : "";
  if($doc$$6_els_parent$$5$$.querySelectorAll && $doc$$6_els_parent$$5$$.querySelector && ($className$$11_opt_tag$$1_tagName$$1$$ || $opt_class$$1$$)) {
    return $doc$$6_els_parent$$5$$.querySelectorAll($className$$11_opt_tag$$1_tagName$$1$$ + ($opt_class$$1$$ ? "." + $opt_class$$1$$ : ""))
  }
  if($opt_class$$1$$ && $doc$$6_els_parent$$5$$.getElementsByClassName) {
    $doc$$6_els_parent$$5$$ = $doc$$6_els_parent$$5$$.getElementsByClassName($opt_class$$1$$);
    if($className$$11_opt_tag$$1_tagName$$1$$) {
      $arrayLike_opt_el$$3$$ = {};
      for(var $len$$ = 0, $i$$51$$ = 0, $el$$1$$;$el$$1$$ = $doc$$6_els_parent$$5$$[$i$$51$$];$i$$51$$++) {
        $className$$11_opt_tag$$1_tagName$$1$$ == $el$$1$$.nodeName && ($arrayLike_opt_el$$3$$[$len$$++] = $el$$1$$)
      }
      $arrayLike_opt_el$$3$$.length = $len$$;
      return $arrayLike_opt_el$$3$$
    }
    return $doc$$6_els_parent$$5$$
  }
  $doc$$6_els_parent$$5$$ = $doc$$6_els_parent$$5$$.getElementsByTagName($className$$11_opt_tag$$1_tagName$$1$$ || "*");
  if($opt_class$$1$$) {
    $arrayLike_opt_el$$3$$ = {};
    for($i$$51$$ = $len$$ = 0;$el$$1$$ = $doc$$6_els_parent$$5$$[$i$$51$$];$i$$51$$++) {
      $className$$11_opt_tag$$1_tagName$$1$$ = $el$$1$$.className, "function" == typeof $className$$11_opt_tag$$1_tagName$$1$$.split && $goog$array$contains$$($className$$11_opt_tag$$1_tagName$$1$$.split(/\s+/), $opt_class$$1$$) && ($arrayLike_opt_el$$3$$[$len$$++] = $el$$1$$)
    }
    $arrayLike_opt_el$$3$$.length = $len$$;
    return $arrayLike_opt_el$$3$$
  }
  return $doc$$6_els_parent$$5$$
}
function $goog$dom$setProperties$$($element$$18$$, $properties$$3$$) {
  $goog$object$forEach$$($properties$$3$$, function($val$$20$$, $key$$46$$) {
    "style" == $key$$46$$ ? $element$$18$$.style.cssText = $val$$20$$ : "class" == $key$$46$$ ? $element$$18$$.className = $val$$20$$ : "for" == $key$$46$$ ? $element$$18$$.htmlFor = $val$$20$$ : $key$$46$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$18$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$46$$], $val$$20$$) : 0 == $key$$46$$.lastIndexOf("aria-", 0) || 0 == $key$$46$$.lastIndexOf("data-", 0) ? $element$$18$$.setAttribute($key$$46$$, $val$$20$$) : $element$$18$$[$key$$46$$] = 
    $val$$20$$
  })
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $goog$dom$getViewportSize_$$($doc$$7_el$$2_win$$) {
  $doc$$7_el$$2_win$$ = $doc$$7_el$$2_win$$.document;
  $doc$$7_el$$2_win$$ = "CSS1Compat" == $doc$$7_el$$2_win$$.compatMode ? $doc$$7_el$$2_win$$.documentElement : $doc$$7_el$$2_win$$.body;
  return new $goog$math$Size$$($doc$$7_el$$2_win$$.clientWidth, $doc$$7_el$$2_win$$.clientHeight)
}
function $goog$dom$getWindow_$$($doc$$11$$) {
  return $doc$$11$$.parentWindow || $doc$$11$$.defaultView
}
function $goog$dom$createDom$$($tagName$$2$$, $opt_attributes$$, $var_args$$67$$) {
  return $goog$dom$createDom_$$(document, arguments)
}
function $goog$dom$createDom_$$($doc$$12$$, $args$$9$$) {
  var $element$$19_tagName$$3_tagNameArr$$ = $args$$9$$[0], $attributes$$ = $args$$9$$[1];
  if(!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$ && ($attributes$$.name || $attributes$$.type)) {
    $element$$19_tagName$$3_tagNameArr$$ = ["<", $element$$19_tagName$$3_tagNameArr$$];
    $attributes$$.name && $element$$19_tagName$$3_tagNameArr$$.push(' name="', $goog$string$htmlEscape$$($attributes$$.name), '"');
    if($attributes$$.type) {
      $element$$19_tagName$$3_tagNameArr$$.push(' type="', $goog$string$htmlEscape$$($attributes$$.type), '"');
      var $clone$$2$$ = {};
      $goog$object$extend$$($clone$$2$$, $attributes$$);
      delete $clone$$2$$.type;
      $attributes$$ = $clone$$2$$
    }
    $element$$19_tagName$$3_tagNameArr$$.push(">");
    $element$$19_tagName$$3_tagNameArr$$ = $element$$19_tagName$$3_tagNameArr$$.join("")
  }
  $element$$19_tagName$$3_tagNameArr$$ = $doc$$12$$.createElement($element$$19_tagName$$3_tagNameArr$$);
  $attributes$$ && ($goog$isString$$($attributes$$) ? $element$$19_tagName$$3_tagNameArr$$.className = $attributes$$ : $goog$isArray$$($attributes$$) ? $goog$dom$classes$add$$.apply($JSCompiler_alias_NULL$$, [$element$$19_tagName$$3_tagNameArr$$].concat($attributes$$)) : $goog$dom$setProperties$$($element$$19_tagName$$3_tagNameArr$$, $attributes$$));
  2 < $args$$9$$.length && $goog$dom$append_$$($doc$$12$$, $element$$19_tagName$$3_tagNameArr$$, $args$$9$$, 2);
  return $element$$19_tagName$$3_tagNameArr$$
}
function $goog$dom$append_$$($doc$$13$$, $parent$$6$$, $args$$10$$, $i$$52_startIndex$$) {
  function $childHandler$$($child$$1$$) {
    $child$$1$$ && $parent$$6$$.appendChild($goog$isString$$($child$$1$$) ? $doc$$13$$.createTextNode($child$$1$$) : $child$$1$$)
  }
  for(;$i$$52_startIndex$$ < $args$$10$$.length;$i$$52_startIndex$$++) {
    var $arg$$5$$ = $args$$10$$[$i$$52_startIndex$$];
    $goog$isArrayLike$$($arg$$5$$) && !($goog$isObject$$($arg$$5$$) && 0 < $arg$$5$$.nodeType) ? $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$5$$) ? $goog$array$toArray$$($arg$$5$$) : $arg$$5$$, $childHandler$$) : $childHandler$$($arg$$5$$)
  }
}
function $goog$dom$appendChild$$($parent$$7$$, $child$$2$$) {
  $parent$$7$$.appendChild($child$$2$$)
}
function $goog$dom$append$$($parent$$8$$, $var_args$$68$$) {
  $goog$dom$append_$$($goog$dom$getOwnerDocument$$($parent$$8$$), $parent$$8$$, arguments, 1)
}
function $goog$dom$removeChildren$$($node$$6$$) {
  for(var $child$$3$$;$child$$3$$ = $node$$6$$.firstChild;) {
    $node$$6$$.removeChild($child$$3$$)
  }
}
function $goog$dom$insertSiblingBefore$$($newNode$$1$$, $refNode$$8$$) {
  $refNode$$8$$.parentNode && $refNode$$8$$.parentNode.insertBefore($newNode$$1$$, $refNode$$8$$)
}
function $goog$dom$insertChildAt$$($parent$$9$$, $child$$4$$, $index$$57$$) {
  $parent$$9$$.insertBefore($child$$4$$, $parent$$9$$.childNodes[$index$$57$$] || $JSCompiler_alias_NULL$$)
}
function $goog$dom$removeNode$$($node$$7$$) {
  return $node$$7$$ && $node$$7$$.parentNode ? $node$$7$$.parentNode.removeChild($node$$7$$) : $JSCompiler_alias_NULL$$
}
function $goog$dom$getChildren$$($element$$21$$) {
  return $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ && $element$$21$$.children != $JSCompiler_alias_VOID$$ ? $element$$21$$.children : $goog$array$filter$$($element$$21$$.childNodes, function($node$$8$$) {
    return 1 == $node$$8$$.nodeType
  })
}
function $goog$dom$getFirstElementChild$$($node$$9$$) {
  return $node$$9$$.firstElementChild != $JSCompiler_alias_VOID$$ ? $node$$9$$.firstElementChild : $goog$dom$getNextElementNode_$$($node$$9$$.firstChild)
}
function $goog$dom$getNextElementSibling$$($node$$11$$) {
  return $node$$11$$.nextElementSibling != $JSCompiler_alias_VOID$$ ? $node$$11$$.nextElementSibling : $goog$dom$getNextElementNode_$$($node$$11$$.nextSibling)
}
function $goog$dom$getNextElementNode_$$($node$$13$$) {
  for(;$node$$13$$ && 1 != $node$$13$$.nodeType;) {
    $node$$13$$ = $node$$13$$.nextSibling
  }
  return $node$$13$$
}
function $goog$dom$getParentElement$$($element$$22_parent$$12$$) {
  if($goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$) {
    return $element$$22_parent$$12$$.parentElement
  }
  $element$$22_parent$$12$$ = $element$$22_parent$$12$$.parentNode;
  return $goog$isObject$$($element$$22_parent$$12$$) && 1 == $element$$22_parent$$12$$.nodeType ? $element$$22_parent$$12$$ : $JSCompiler_alias_NULL$$
}
function $goog$dom$contains$$($parent$$13$$, $descendant$$) {
  if($parent$$13$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$13$$ == $descendant$$ || $parent$$13$$.contains($descendant$$)
  }
  if("undefined" != typeof $parent$$13$$.compareDocumentPosition) {
    return $parent$$13$$ == $descendant$$ || Boolean($parent$$13$$.compareDocumentPosition($descendant$$) & 16)
  }
  for(;$descendant$$ && $parent$$13$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode
  }
  return $descendant$$ == $parent$$13$$
}
function $goog$dom$getOwnerDocument$$($node$$18$$) {
  return 9 == $node$$18$$.nodeType ? $node$$18$$ : $node$$18$$.ownerDocument || $node$$18$$.document
}
function $goog$dom$setTextContent$$($element$$23$$, $text$$7$$) {
  if("textContent" in $element$$23$$) {
    $element$$23$$.textContent = $text$$7$$
  }else {
    if($element$$23$$.firstChild && 3 == $element$$23$$.firstChild.nodeType) {
      for(;$element$$23$$.lastChild != $element$$23$$.firstChild;) {
        $element$$23$$.removeChild($element$$23$$.lastChild)
      }
      $element$$23$$.firstChild.data = $text$$7$$
    }else {
      $goog$dom$removeChildren$$($element$$23$$), $element$$23$$.appendChild($goog$dom$getOwnerDocument$$($element$$23$$).createTextNode(String($text$$7$$)))
    }
  }
}
var $goog$dom$TAGS_TO_IGNORE_$$ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, $goog$dom$PREDEFINED_TAG_VALUES_$$ = {IMG:" ", BR:"\n"};
function $goog$dom$isFocusableTabIndex$$($element$$25_index$$58$$) {
  var $attrNode$$ = $element$$25_index$$58$$.getAttributeNode("tabindex");
  return $attrNode$$ && $attrNode$$.specified ? ($element$$25_index$$58$$ = $element$$25_index$$58$$.tabIndex, $goog$isNumber$$($element$$25_index$$58$$) && 0 <= $element$$25_index$$58$$ && 32768 > $element$$25_index$$58$$) : $JSCompiler_alias_FALSE$$
}
function $goog$dom$setFocusableTabIndex$$($element$$26$$, $enable$$7$$) {
  $enable$$7$$ ? $element$$26$$.tabIndex = 0 : ($element$$26$$.tabIndex = -1, $element$$26$$.removeAttribute("tabIndex"))
}
function $goog$dom$getTextContent$$($node$$19_textContent$$) {
  if($goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ && "innerText" in $node$$19_textContent$$) {
    $node$$19_textContent$$ = $node$$19_textContent$$.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var $buf$$ = [];
    $goog$dom$getTextContent_$$($node$$19_textContent$$, $buf$$, $JSCompiler_alias_TRUE$$);
    $node$$19_textContent$$ = $buf$$.join("")
  }
  $node$$19_textContent$$ = $node$$19_textContent$$.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  $node$$19_textContent$$ = $node$$19_textContent$$.replace(/\u200B/g, "");
  $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ || ($node$$19_textContent$$ = $node$$19_textContent$$.replace(/ +/g, " "));
  " " != $node$$19_textContent$$ && ($node$$19_textContent$$ = $node$$19_textContent$$.replace(/^\s*/, ""));
  return $node$$19_textContent$$
}
function $goog$dom$getRawTextContent$$($node$$20$$) {
  var $buf$$1$$ = [];
  $goog$dom$getTextContent_$$($node$$20$$, $buf$$1$$, $JSCompiler_alias_FALSE$$);
  return $buf$$1$$.join("")
}
function $goog$dom$getTextContent_$$($child$$7_node$$21$$, $buf$$2$$, $normalizeWhitespace$$) {
  if(!($child$$7_node$$21$$.nodeName in $goog$dom$TAGS_TO_IGNORE_$$)) {
    if(3 == $child$$7_node$$21$$.nodeType) {
      $normalizeWhitespace$$ ? $buf$$2$$.push(String($child$$7_node$$21$$.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : $buf$$2$$.push($child$$7_node$$21$$.nodeValue)
    }else {
      if($child$$7_node$$21$$.nodeName in $goog$dom$PREDEFINED_TAG_VALUES_$$) {
        $buf$$2$$.push($goog$dom$PREDEFINED_TAG_VALUES_$$[$child$$7_node$$21$$.nodeName])
      }else {
        for($child$$7_node$$21$$ = $child$$7_node$$21$$.firstChild;$child$$7_node$$21$$;) {
          $goog$dom$getTextContent_$$($child$$7_node$$21$$, $buf$$2$$, $normalizeWhitespace$$), $child$$7_node$$21$$ = $child$$7_node$$21$$.nextSibling
        }
      }
    }
  }
}
function $goog$dom$isNodeList$$($val$$21$$) {
  if($val$$21$$ && "number" == typeof $val$$21$$.length) {
    if($goog$isObject$$($val$$21$$)) {
      return"function" == typeof $val$$21$$.item || "string" == typeof $val$$21$$.item
    }
    if($goog$isFunction$$($val$$21$$)) {
      return"function" == typeof $val$$21$$.item
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $goog$dom$getAncestorByTagNameAndClass$$($element$$27$$, $opt_tag$$2$$, $opt_class$$2$$) {
  if(!$opt_tag$$2$$ && !$opt_class$$2$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $tagName$$4$$ = $opt_tag$$2$$ ? $opt_tag$$2$$.toUpperCase() : $JSCompiler_alias_NULL$$;
  return $goog$dom$getAncestor$$($element$$27$$, function($node$$24$$) {
    return(!$tagName$$4$$ || $node$$24$$.nodeName == $tagName$$4$$) && (!$opt_class$$2$$ || $goog$dom$classes$has$$($node$$24$$, $opt_class$$2$$))
  })
}
function $goog$dom$getAncestor$$($element$$29$$, $matcher$$) {
  for(var $steps$$ = 0;$element$$29$$;) {
    if($matcher$$($element$$29$$)) {
      return $element$$29$$
    }
    $element$$29$$ = $element$$29$$.parentNode;
    $steps$$++
  }
  return $JSCompiler_alias_NULL$$
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $goog$dom$getDomHelper$$;
function $JSCompiler_StaticMethods_getDocument$$($JSCompiler_StaticMethods_getDocument$self$$) {
  return $JSCompiler_StaticMethods_getDocument$self$$.$document_$
}
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$30$$) {
  return $goog$isString$$($element$$30$$) ? this.$document_$.getElementById($element$$30$$) : $element$$30$$
};
$JSCompiler_prototypeAlias$$.$getElementsByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementsByClass$$($className$$13$$, $opt_el$$5$$) {
  return $goog$dom$getElementsByClass$$($className$$13$$, $opt_el$$5$$ || this.$document_$)
};
$JSCompiler_prototypeAlias$$.$getElementByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementByClass$$($className$$14$$, $opt_el$$6$$) {
  return $goog$dom$getElementByClass$$($className$$14$$, $opt_el$$6$$ || this.$document_$)
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($tagName$$5$$, $opt_attributes$$1$$, $var_args$$70$$) {
  return $goog$dom$createDom_$$(this.$document_$, arguments)
};
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$67$$) {
  return this.$document_$.createElement($name$$67$$)
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$5$$) {
  return this.$document_$.createTextNode(String($content$$5$$))
};
function $JSCompiler_StaticMethods_getDocumentScroll$$($JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_130$$) {
  var $doc$$inline_129_win$$inline_131$$ = $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_130$$.$document_$;
  $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_130$$ = !$goog$userAgent$WEBKIT$$ && "CSS1Compat" == $doc$$inline_129_win$$inline_131$$.compatMode ? $doc$$inline_129_win$$inline_131$$.documentElement : $doc$$inline_129_win$$inline_131$$.body;
  $doc$$inline_129_win$$inline_131$$ = $goog$dom$getWindow_$$($doc$$inline_129_win$$inline_131$$);
  return new $goog$math$Coordinate$$($doc$$inline_129_win$$inline_131$$.pageXOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_130$$.scrollLeft, $doc$$inline_129_win$$inline_131$$.pageYOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_130$$.scrollTop)
}
$JSCompiler_prototypeAlias$$.appendChild = $goog$dom$appendChild$$;
$JSCompiler_prototypeAlias$$.$removeChildren$ = $goog$dom$removeChildren$$;
$JSCompiler_prototypeAlias$$.$insertSiblingBefore$ = $goog$dom$insertSiblingBefore$$;
$JSCompiler_prototypeAlias$$.$insertChildAt$ = $goog$dom$insertChildAt$$;
$JSCompiler_prototypeAlias$$.removeNode = $goog$dom$removeNode$$;
$JSCompiler_prototypeAlias$$.$getChildren$ = $goog$dom$getChildren$$;
$JSCompiler_prototypeAlias$$.$getFirstElementChild$ = $goog$dom$getFirstElementChild$$;
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
$JSCompiler_prototypeAlias$$.$setTextContent$ = $goog$dom$setTextContent$$;
// Input 15
function $goog$soy$renderElement$$($element$$31$$, $template$$1$$, $opt_templateData$$) {
  $element$$31$$.innerHTML = $goog$soy$verifyTemplateOutputSafe_$$($template$$1$$($opt_templateData$$ || $goog$soy$defaultTemplateData_$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$))
}
function $goog$soy$renderAsElement$$($firstChild_template$$3$$, $opt_templateData$$2$$, $opt_injectedData$$2$$, $opt_domHelper$$1_wrapper$$) {
  $opt_domHelper$$1_wrapper$$ = ($opt_domHelper$$1_wrapper$$ || $goog$dom$getDomHelper$$()).createElement("DIV");
  $opt_domHelper$$1_wrapper$$.innerHTML = $goog$soy$verifyTemplateOutputSafe_$$($firstChild_template$$3$$($opt_templateData$$2$$ || $goog$soy$defaultTemplateData_$$, $JSCompiler_alias_VOID$$, $opt_injectedData$$2$$));
  return 1 == $opt_domHelper$$1_wrapper$$.childNodes.length && ($firstChild_template$$3$$ = $opt_domHelper$$1_wrapper$$.firstChild, 1 == $firstChild_template$$3$$.nodeType) ? $firstChild_template$$3$$ : $opt_domHelper$$1_wrapper$$
}
function $goog$soy$verifyTemplateOutputSafe_$$($templateResult$$) {
  return!$goog$isObject$$($templateResult$$) ? String($templateResult$$) : "zSoyz"
}
var $goog$soy$defaultTemplateData_$$ = {};
// Input 16
function $goog$math$Box$$($top$$2$$, $right$$5$$, $bottom$$1$$, $left$$5$$) {
  this.top = $top$$2$$;
  this.right = $right$$5$$;
  this.bottom = $bottom$$1$$;
  this.left = $left$$5$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Box$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$math$Box$$(this.top, this.right, this.bottom, this.left)
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($other$$4$$) {
  return!this || !$other$$4$$ ? $JSCompiler_alias_FALSE$$ : $other$$4$$ instanceof $goog$math$Box$$ ? $other$$4$$.left >= this.left && $other$$4$$.right <= this.right && $other$$4$$.top >= this.top && $other$$4$$.bottom <= this.bottom : $other$$4$$.x >= this.left && $other$$4$$.x <= this.right && $other$$4$$.y >= this.top && $other$$4$$.y <= this.bottom
};
$JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
// Input 17
function $goog$math$Rect$$($x$$59$$, $y$$37$$, $w$$5$$, $h$$4$$) {
  this.left = $x$$59$$;
  this.top = $y$$37$$;
  this.width = $w$$5$$;
  this.height = $h$$4$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Rect$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$math$Rect$$(this.left, this.top, this.width, this.height)
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($another$$) {
  return $another$$ instanceof $goog$math$Rect$$ ? this.left <= $another$$.left && this.left + this.width >= $another$$.left + $another$$.width && this.top <= $another$$.top && this.top + this.height >= $another$$.top + $another$$.height : $another$$.x >= this.left && $another$$.x <= this.left + this.width && $another$$.y >= this.top && $another$$.y <= this.top + this.height
};
$JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
// Input 18
// Input 19
function $goog$style$setStyle$$($element$$32$$, $style$$, $opt_value$$6$$) {
  $goog$isString$$($style$$) ? $goog$style$setStyle_$$($element$$32$$, $opt_value$$6$$, $style$$) : $goog$object$forEach$$($style$$, $goog$partial$$($goog$style$setStyle_$$, $element$$32$$))
}
function $goog$style$setStyle_$$($element$$33$$, $value$$69$$, $prefixedStyle$$inline_136_style$$1$$) {
  var $camelStyle$$inline_135_propertyName$$8$$;
  a: {
    if($camelStyle$$inline_135_propertyName$$8$$ = $goog$string$toCamelCase$$($prefixedStyle$$inline_136_style$$1$$), $element$$33$$.style[$camelStyle$$inline_135_propertyName$$8$$] === $JSCompiler_alias_VOID$$ && ($prefixedStyle$$inline_136_style$$1$$ = ($goog$userAgent$WEBKIT$$ ? "Webkit" : $goog$userAgent$GECKO$$ ? "Moz" : $goog$userAgent$IE$$ ? "ms" : $goog$userAgent$OPERA$$ ? "O" : $JSCompiler_alias_NULL$$) + $goog$string$toTitleCase$$($prefixedStyle$$inline_136_style$$1$$), $element$$33$$.style[$prefixedStyle$$inline_136_style$$1$$] !== 
    $JSCompiler_alias_VOID$$)) {
      $camelStyle$$inline_135_propertyName$$8$$ = $prefixedStyle$$inline_136_style$$1$$;
      break a
    }
  }
  $camelStyle$$inline_135_propertyName$$8$$ && ($element$$33$$.style[$camelStyle$$inline_135_propertyName$$8$$] = $value$$69$$)
}
function $goog$style$getComputedStyle$$($element$$37$$, $property$$4$$) {
  var $doc$$24_styles$$ = $goog$dom$getOwnerDocument$$($element$$37$$);
  return $doc$$24_styles$$.defaultView && $doc$$24_styles$$.defaultView.getComputedStyle && ($doc$$24_styles$$ = $doc$$24_styles$$.defaultView.getComputedStyle($element$$37$$, $JSCompiler_alias_NULL$$)) ? $doc$$24_styles$$[$property$$4$$] || $doc$$24_styles$$.getPropertyValue($property$$4$$) || "" : ""
}
function $goog$style$getStyle_$$($element$$39$$, $style$$5$$) {
  return $goog$style$getComputedStyle$$($element$$39$$, $style$$5$$) || ($element$$39$$.currentStyle ? $element$$39$$.currentStyle[$style$$5$$] : $JSCompiler_alias_NULL$$) || $element$$39$$.style && $element$$39$$.style[$style$$5$$]
}
function $goog$style$setPosition$$($el$$4$$, $arg1$$77_y$$38$$, $opt_arg2$$) {
  var $x$$60$$, $buggyGeckoSubPixelPos$$ = $goog$userAgent$GECKO$$ && ($goog$userAgent$detectedMac_$$ || $goog$userAgent$X11$$) && $goog$userAgent$isVersion$$("1.9");
  $arg1$$77_y$$38$$ instanceof $goog$math$Coordinate$$ ? ($x$$60$$ = $arg1$$77_y$$38$$.x, $arg1$$77_y$$38$$ = $arg1$$77_y$$38$$.y) : ($x$$60$$ = $arg1$$77_y$$38$$, $arg1$$77_y$$38$$ = $opt_arg2$$);
  $el$$4$$.style.left = $goog$style$getPixelStyleValue_$$($x$$60$$, $buggyGeckoSubPixelPos$$);
  $el$$4$$.style.top = $goog$style$getPixelStyleValue_$$($arg1$$77_y$$38$$, $buggyGeckoSubPixelPos$$)
}
function $goog$style$setSize$$($element$$52$$, $w$$6$$, $h$$5_opt_h$$) {
  $w$$6$$ instanceof $goog$math$Size$$ ? ($h$$5_opt_h$$ = $w$$6$$.height, $w$$6$$ = $w$$6$$.width) : $h$$5_opt_h$$ == $JSCompiler_alias_VOID$$ && $JSCompiler_alias_THROW$$(Error("missing height argument"));
  $goog$style$setWidth$$($element$$52$$, $w$$6$$);
  $element$$52$$.style.height = $goog$style$getPixelStyleValue_$$($h$$5_opt_h$$, $JSCompiler_alias_TRUE$$)
}
function $goog$style$getPixelStyleValue_$$($value$$70$$, $round$$) {
  "number" == typeof $value$$70$$ && ($value$$70$$ = ($round$$ ? Math.round($value$$70$$) : $value$$70$$) + "px");
  return $value$$70$$
}
function $goog$style$setWidth$$($element$$54$$, $width$$13$$) {
  $element$$54$$.style.width = $goog$style$getPixelStyleValue_$$($width$$13$$, $JSCompiler_alias_TRUE$$)
}
function $goog$style$getSize$$($element$$55_size$$10$$) {
  if("none" != $goog$style$getStyle_$$($element$$55_size$$10$$, "display")) {
    return $goog$style$getSizeWithDisplay_$$($element$$55_size$$10$$)
  }
  var $style$$6$$ = $element$$55_size$$10$$.style, $originalDisplay$$ = $style$$6$$.display, $originalVisibility$$ = $style$$6$$.visibility, $originalPosition$$ = $style$$6$$.position;
  $style$$6$$.visibility = "hidden";
  $style$$6$$.position = "absolute";
  $style$$6$$.display = "inline";
  $element$$55_size$$10$$ = $goog$style$getSizeWithDisplay_$$($element$$55_size$$10$$);
  $style$$6$$.display = $originalDisplay$$;
  $style$$6$$.position = $originalPosition$$;
  $style$$6$$.visibility = $originalVisibility$$;
  return $element$$55_size$$10$$
}
function $goog$style$getSizeWithDisplay_$$($doc$$inline_143_element$$56$$) {
  var $offsetWidth_rect$$inline_142$$ = $doc$$inline_143_element$$56$$.offsetWidth, $offsetHeight$$ = $doc$$inline_143_element$$56$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth_rect$$inline_142$$ && !$offsetHeight$$;
  return(!$goog$isDef$$($offsetWidth_rect$$inline_142$$) || $webkitOffsetsZero$$) && $doc$$inline_143_element$$56$$.getBoundingClientRect ? ($offsetWidth_rect$$inline_142$$ = $doc$$inline_143_element$$56$$.getBoundingClientRect(), $goog$userAgent$IE$$ && ($doc$$inline_143_element$$56$$ = $doc$$inline_143_element$$56$$.ownerDocument, $offsetWidth_rect$$inline_142$$.left -= $doc$$inline_143_element$$56$$.documentElement.clientLeft + $doc$$inline_143_element$$56$$.body.clientLeft, $offsetWidth_rect$$inline_142$$.top -= 
  $doc$$inline_143_element$$56$$.documentElement.clientTop + $doc$$inline_143_element$$56$$.body.clientTop), new $goog$math$Size$$($offsetWidth_rect$$inline_142$$.right - $offsetWidth_rect$$inline_142$$.left, $offsetWidth_rect$$inline_142$$.bottom - $offsetWidth_rect$$inline_142$$.top)) : new $goog$math$Size$$($offsetWidth_rect$$inline_142$$, $offsetHeight$$)
}
function $goog$style$setOpacity$$($el$$15$$, $alpha$$3$$) {
  var $style$$8$$ = $el$$15$$.style;
  "opacity" in $style$$8$$ ? $style$$8$$.opacity = $alpha$$3$$ : "MozOpacity" in $style$$8$$ ? $style$$8$$.MozOpacity = $alpha$$3$$ : "filter" in $style$$8$$ && ($style$$8$$.filter = "" === $alpha$$3$$ ? "" : "alpha(opacity=" + 100 * $alpha$$3$$ + ")")
}
function $goog$style$showElement$$($el$$18$$, $display$$) {
  $el$$18$$.style.display = $display$$ ? "" : "none"
}
function $goog$style$isRightToLeft$$($el$$22$$) {
  return"rtl" == $goog$style$getStyle_$$($el$$22$$, "direction")
}
var $goog$style$unselectableStyle_$$ = $goog$userAgent$GECKO$$ ? "MozUserSelect" : $goog$userAgent$WEBKIT$$ ? "WebkitUserSelect" : $JSCompiler_alias_NULL$$, $goog$style$ieBorderWidthKeywords_$$ = {thin:2, medium:4, thick:6};
function $goog$style$getIePixelBorder_$$($element$$69$$, $prop$$4$$) {
  if("none" == ($element$$69$$.currentStyle ? $element$$69$$.currentStyle[$prop$$4$$ + "Style"] : $JSCompiler_alias_NULL$$)) {
    return 0
  }
  var $pixelValue$$inline_151_width$$15$$ = $element$$69$$.currentStyle ? $element$$69$$.currentStyle[$prop$$4$$ + "Width"] : $JSCompiler_alias_NULL$$, $JSCompiler_temp$$30_oldStyleValue$$inline_149$$;
  if($pixelValue$$inline_151_width$$15$$ in $goog$style$ieBorderWidthKeywords_$$) {
    $JSCompiler_temp$$30_oldStyleValue$$inline_149$$ = $goog$style$ieBorderWidthKeywords_$$[$pixelValue$$inline_151_width$$15$$]
  }else {
    if(/^\d+px?$/.test($pixelValue$$inline_151_width$$15$$)) {
      $JSCompiler_temp$$30_oldStyleValue$$inline_149$$ = parseInt($pixelValue$$inline_151_width$$15$$, 10)
    }else {
      $JSCompiler_temp$$30_oldStyleValue$$inline_149$$ = $element$$69$$.style.left;
      var $oldRuntimeValue$$inline_150$$ = $element$$69$$.runtimeStyle.left;
      $element$$69$$.runtimeStyle.left = $element$$69$$.currentStyle.left;
      $element$$69$$.style.left = $pixelValue$$inline_151_width$$15$$;
      $pixelValue$$inline_151_width$$15$$ = $element$$69$$.style.pixelLeft;
      $element$$69$$.style.left = $JSCompiler_temp$$30_oldStyleValue$$inline_149$$;
      $element$$69$$.runtimeStyle.left = $oldRuntimeValue$$inline_150$$;
      $JSCompiler_temp$$30_oldStyleValue$$inline_149$$ = $pixelValue$$inline_151_width$$15$$
    }
  }
  return $JSCompiler_temp$$30_oldStyleValue$$inline_149$$
}
function $goog$style$getBorderBox$$($bottom$$5_element$$70$$) {
  if($goog$userAgent$IE$$) {
    var $left$$8$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderLeft"), $right$$9$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderRight"), $top$$6$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderTop");
    $bottom$$5_element$$70$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderBottom");
    return new $goog$math$Box$$($top$$6$$, $right$$9$$, $bottom$$5_element$$70$$, $left$$8$$)
  }
  $left$$8$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderLeftWidth");
  $right$$9$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderRightWidth");
  $top$$6$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderTopWidth");
  $bottom$$5_element$$70$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderBottomWidth");
  return new $goog$math$Box$$(parseFloat($top$$6$$), parseFloat($right$$9$$), parseFloat($bottom$$5_element$$70$$), parseFloat($left$$8$$))
}
;
// Input 20
// Input 21
// Input 22
function $goog$Disposable$$() {
  0 != $goog$Disposable$MonitoringMode$OFF$$ && (this.$creationStack$ = Error().stack, $goog$Disposable$instances_$$[$goog$getUid$$(this)] = this)
}
var $goog$Disposable$MonitoringMode$OFF$$ = 0, $goog$Disposable$instances_$$ = {};
$goog$Disposable$$.prototype.$disposed_$ = $JSCompiler_alias_FALSE$$;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  if(!this.$disposed_$ && (this.$disposed_$ = $JSCompiler_alias_TRUE$$, this.$disposeInternal$(), 0 != $goog$Disposable$MonitoringMode$OFF$$)) {
    var $uid$$ = $goog$getUid$$(this);
    delete $goog$Disposable$instances_$$[$uid$$]
  }
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if(this.$onDisposeCallbacks_$) {
    for(;this.$onDisposeCallbacks_$.length;) {
      this.$onDisposeCallbacks_$.shift()()
    }
  }
};
function $goog$dispose$$($obj$$82$$) {
  $obj$$82$$ && "function" == typeof $obj$$82$$.$dispose$ && $obj$$82$$.$dispose$()
}
;
// Input 23
function $goog$events$Event$$($type$$57$$, $opt_target$$1$$) {
  this.type = $type$$57$$;
  this.currentTarget = this.target = $opt_target$$1$$
}
$JSCompiler_prototypeAlias$$ = $goog$events$Event$$.prototype;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$dispose$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$propagationStopped_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.defaultPrevented = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$returnValue_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  this.$propagationStopped_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  this.defaultPrevented = $JSCompiler_alias_TRUE$$;
  this.$returnValue_$ = $JSCompiler_alias_FALSE$$
};
function $goog$events$Event$preventDefault$$($e$$15$$) {
  $e$$15$$.preventDefault()
}
;
// Input 24
var $goog$events$ListenableKey$counter_$$ = 0;
// Input 25
function $goog$events$Listener$$() {
}
$JSCompiler_prototypeAlias$$ = $goog$events$Listener$$.prototype;
$JSCompiler_prototypeAlias$$.key = 0;
$JSCompiler_prototypeAlias$$.$removed$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$callOnce$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($listener$$32$$, $proxy$$, $src$$5$$, $type$$58$$, $capture$$, $opt_handler$$) {
  $goog$isFunction$$($listener$$32$$) ? this.$isFunctionListener_$ = $JSCompiler_alias_TRUE$$ : $listener$$32$$ && $listener$$32$$.handleEvent && $goog$isFunction$$($listener$$32$$.handleEvent) ? this.$isFunctionListener_$ = $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  this.$listener$ = $listener$$32$$;
  this.proxy = $proxy$$;
  this.src = $src$$5$$;
  this.type = $type$$58$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$callOnce$ = $JSCompiler_alias_FALSE$$;
  this.key = ++$goog$events$ListenableKey$counter_$$;
  this.$removed$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($eventObject$$) {
  return this.$isFunctionListener_$ ? this.$listener$.call(this.$handler$ || this.src, $eventObject$$) : this.$listener$.handleEvent.call(this.$listener$, $eventObject$$)
};
// Input 26
var $goog$events$BrowserFeature$HAS_W3C_BUTTON$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
// Input 27
// Input 28
// Input 29
// Input 30
function $goog$reflect$sinkValue$$($x$$62$$) {
  $goog$reflect$sinkValue$$[" "]($x$$62$$);
  return $x$$62$$
}
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
// Input 31
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $opt_e$$ && this.init($opt_e$$, $opt_currentTarget$$)
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
var $goog$events$BrowserEvent$IEButtonMap$$ = [1, 4, 2];
$JSCompiler_prototypeAlias$$ = $goog$events$BrowserEvent$$.prototype;
$JSCompiler_prototypeAlias$$.target = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.relatedTarget = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.offsetX = 0;
$JSCompiler_prototypeAlias$$.offsetY = 0;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.button = 0;
$JSCompiler_prototypeAlias$$.keyCode = 0;
$JSCompiler_prototypeAlias$$.charCode = 0;
$JSCompiler_prototypeAlias$$.ctrlKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.altKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.shiftKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.metaKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$platformModifierKey$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$event_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($e$$17$$, $opt_currentTarget$$1$$) {
  var $type$$60$$ = this.type = $e$$17$$.type;
  $goog$events$Event$$.call(this, $type$$60$$);
  this.target = $e$$17$$.target || $e$$17$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$17$$.relatedTarget;
  if($relatedTarget$$) {
    if($goog$userAgent$GECKO$$) {
      var $JSCompiler_inline_result$$37$$;
      a: {
        try {
          $goog$reflect$sinkValue$$($relatedTarget$$.nodeName);
          $JSCompiler_inline_result$$37$$ = $JSCompiler_alias_TRUE$$;
          break a
        }catch($e$$inline_155$$) {
        }
        $JSCompiler_inline_result$$37$$ = $JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$37$$ || ($relatedTarget$$ = $JSCompiler_alias_NULL$$)
    }
  }else {
    "mouseover" == $type$$60$$ ? $relatedTarget$$ = $e$$17$$.fromElement : "mouseout" == $type$$60$$ && ($relatedTarget$$ = $e$$17$$.toElement)
  }
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetX : $e$$17$$.layerX;
  this.offsetY = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetY : $e$$17$$.layerY;
  this.clientX = $e$$17$$.clientX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientX : $e$$17$$.pageX;
  this.clientY = $e$$17$$.clientY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientY : $e$$17$$.pageY;
  this.screenX = $e$$17$$.screenX || 0;
  this.screenY = $e$$17$$.screenY || 0;
  this.button = $e$$17$$.button;
  this.keyCode = $e$$17$$.keyCode || 0;
  this.charCode = $e$$17$$.charCode || ("keypress" == $type$$60$$ ? $e$$17$$.keyCode : 0);
  this.ctrlKey = $e$$17$$.ctrlKey;
  this.altKey = $e$$17$$.altKey;
  this.shiftKey = $e$$17$$.shiftKey;
  this.metaKey = $e$$17$$.metaKey;
  this.$platformModifierKey$ = $goog$userAgent$detectedMac_$$ ? $e$$17$$.metaKey : $e$$17$$.ctrlKey;
  this.state = $e$$17$$.state;
  this.$event_$ = $e$$17$$;
  $e$$17$$.defaultPrevented && this.preventDefault();
  delete this.$propagationStopped_$
};
function $JSCompiler_StaticMethods_isMouseActionButton$$($JSCompiler_StaticMethods_isMouseActionButton$self$$) {
  return($goog$events$BrowserFeature$HAS_W3C_BUTTON$$ ? 0 == $JSCompiler_StaticMethods_isMouseActionButton$self$$.$event_$.button : "click" == $JSCompiler_StaticMethods_isMouseActionButton$self$$.type ? $JSCompiler_alias_TRUE$$ : !!($JSCompiler_StaticMethods_isMouseActionButton$self$$.$event_$.button & $goog$events$BrowserEvent$IEButtonMap$$[0])) && !($goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && $JSCompiler_StaticMethods_isMouseActionButton$self$$.ctrlKey)
}
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  $goog$events$BrowserEvent$$.$superClass_$.stopPropagation.call(this);
  this.$event_$.stopPropagation ? this.$event_$.stopPropagation() : this.$event_$.cancelBubble = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$event_$;
  if($be$$.preventDefault) {
    $be$$.preventDefault()
  }else {
    if($be$$.returnValue = $JSCompiler_alias_FALSE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1
        }
      }catch($ex$$1$$) {
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = $JSCompiler_emptyFn$$();
// Input 32
var $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};
function $goog$events$listen$$($listenableKey_src$$8$$, $key$$48_type$$61$$, $listener$$35$$, $opt_capt$$2$$, $opt_handler$$1$$) {
  if($goog$isArray$$($key$$48_type$$61$$)) {
    for(var $i$$62$$ = 0;$i$$62$$ < $key$$48_type$$61$$.length;$i$$62$$++) {
      $goog$events$listen$$($listenableKey_src$$8$$, $key$$48_type$$61$$[$i$$62$$], $listener$$35$$, $opt_capt$$2$$, $opt_handler$$1$$)
    }
    return $JSCompiler_alias_NULL$$
  }
  $listenableKey_src$$8$$ = $goog$events$listen_$$($listenableKey_src$$8$$, $key$$48_type$$61$$, $listener$$35$$, $JSCompiler_alias_FALSE$$, $opt_capt$$2$$, $opt_handler$$1$$);
  $key$$48_type$$61$$ = $listenableKey_src$$8$$.key;
  $goog$events$listeners_$$[$key$$48_type$$61$$] = $listenableKey_src$$8$$;
  return $key$$48_type$$61$$
}
function $goog$events$listen_$$($src$$9$$, $type$$62$$, $listener$$36$$, $callOnce$$, $capture$$1_opt_capt$$3$$, $opt_handler$$2$$) {
  $type$$62$$ || $JSCompiler_alias_THROW$$(Error("Invalid event type"));
  $capture$$1_opt_capt$$3$$ = !!$capture$$1_opt_capt$$3$$;
  var $listenerObj_map$$ = $goog$events$listenerTree_$$;
  $type$$62$$ in $listenerObj_map$$ || ($listenerObj_map$$[$type$$62$$] = {$count_$:0, $remaining_$:0});
  $listenerObj_map$$ = $listenerObj_map$$[$type$$62$$];
  $capture$$1_opt_capt$$3$$ in $listenerObj_map$$ || ($listenerObj_map$$[$capture$$1_opt_capt$$3$$] = {$count_$:0, $remaining_$:0}, $listenerObj_map$$.$count_$++);
  var $listenerObj_map$$ = $listenerObj_map$$[$capture$$1_opt_capt$$3$$], $srcUid$$ = $goog$getUid$$($src$$9$$), $listenerArray$$;
  $listenerObj_map$$.$remaining_$++;
  if($listenerObj_map$$[$srcUid$$]) {
    $listenerArray$$ = $listenerObj_map$$[$srcUid$$];
    for(var $i$$63_proxy$$1$$ = 0;$i$$63_proxy$$1$$ < $listenerArray$$.length;$i$$63_proxy$$1$$++) {
      if($listenerObj_map$$ = $listenerArray$$[$i$$63_proxy$$1$$], $listenerObj_map$$.$listener$ == $listener$$36$$ && $listenerObj_map$$.$handler$ == $opt_handler$$2$$) {
        if($listenerObj_map$$.$removed$) {
          break
        }
        $callOnce$$ || ($listenerArray$$[$i$$63_proxy$$1$$].$callOnce$ = $JSCompiler_alias_FALSE$$);
        return $listenerArray$$[$i$$63_proxy$$1$$]
      }
    }
  }else {
    $listenerArray$$ = $listenerObj_map$$[$srcUid$$] = [], $listenerObj_map$$.$count_$++
  }
  $i$$63_proxy$$1$$ = $goog$events$getProxy$$();
  $listenerObj_map$$ = new $goog$events$Listener$$;
  $listenerObj_map$$.init($listener$$36$$, $i$$63_proxy$$1$$, $src$$9$$, $type$$62$$, $capture$$1_opt_capt$$3$$, $opt_handler$$2$$);
  $listenerObj_map$$.$callOnce$ = $callOnce$$;
  $i$$63_proxy$$1$$.src = $src$$9$$;
  $i$$63_proxy$$1$$.$listener$ = $listenerObj_map$$;
  $listenerArray$$.push($listenerObj_map$$);
  $goog$events$sources_$$[$srcUid$$] || ($goog$events$sources_$$[$srcUid$$] = []);
  $goog$events$sources_$$[$srcUid$$].push($listenerObj_map$$);
  $src$$9$$.addEventListener ? ($src$$9$$ == $goog$global$$ || !$src$$9$$.$customEvent_$) && $src$$9$$.addEventListener($type$$62$$, $i$$63_proxy$$1$$, $capture$$1_opt_capt$$3$$) : $src$$9$$.attachEvent($type$$62$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$62$$] : $goog$events$onStringMap_$$[$type$$62$$] = "on" + $type$$62$$, $i$$63_proxy$$1$$);
  return $listenerObj_map$$
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$26$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$1$$) {
    return $proxyCallbackFunction$$.call($f$$26$$.src, $f$$26$$.$listener$, $eventObject$$1$$)
  } : function($eventObject$$2_v$$) {
    $eventObject$$2_v$$ = $proxyCallbackFunction$$.call($f$$26$$.src, $f$$26$$.$listener$, $eventObject$$2_v$$);
    if(!$eventObject$$2_v$$) {
      return $eventObject$$2_v$$
    }
  };
  return $f$$26$$
}
function $goog$events$listenOnce$$($listenableKey$$1_src$$10$$, $key$$49_type$$63$$, $listener$$37$$, $opt_capt$$4$$, $opt_handler$$3$$) {
  if($goog$isArray$$($key$$49_type$$63$$)) {
    for(var $i$$64$$ = 0;$i$$64$$ < $key$$49_type$$63$$.length;$i$$64$$++) {
      $goog$events$listenOnce$$($listenableKey$$1_src$$10$$, $key$$49_type$$63$$[$i$$64$$], $listener$$37$$, $opt_capt$$4$$, $opt_handler$$3$$)
    }
    return $JSCompiler_alias_NULL$$
  }
  $listenableKey$$1_src$$10$$ = $goog$events$listen_$$($listenableKey$$1_src$$10$$, $key$$49_type$$63$$, $listener$$37$$, $JSCompiler_alias_TRUE$$, $opt_capt$$4$$, $opt_handler$$3$$);
  $key$$49_type$$63$$ = $listenableKey$$1_src$$10$$.key;
  $goog$events$listeners_$$[$key$$49_type$$63$$] = $listenableKey$$1_src$$10$$;
  return $key$$49_type$$63$$
}
function $goog$events$unlisten$$($listenerArray$$1_src$$12$$, $type$$64$$, $listener$$39$$, $capture$$2_opt_capt$$6$$, $opt_handler$$5$$) {
  if($goog$isArray$$($type$$64$$)) {
    for(var $i$$65$$ = 0;$i$$65$$ < $type$$64$$.length;$i$$65$$++) {
      $goog$events$unlisten$$($listenerArray$$1_src$$12$$, $type$$64$$[$i$$65$$], $listener$$39$$, $capture$$2_opt_capt$$6$$, $opt_handler$$5$$)
    }
  }else {
    if($capture$$2_opt_capt$$6$$ = !!$capture$$2_opt_capt$$6$$, $listenerArray$$1_src$$12$$ = $goog$events$getListeners_$$($listenerArray$$1_src$$12$$, $type$$64$$, $capture$$2_opt_capt$$6$$)) {
      for($i$$65$$ = 0;$i$$65$$ < $listenerArray$$1_src$$12$$.length;$i$$65$$++) {
        if($listenerArray$$1_src$$12$$[$i$$65$$].$listener$ == $listener$$39$$ && $listenerArray$$1_src$$12$$[$i$$65$$].capture == $capture$$2_opt_capt$$6$$ && $listenerArray$$1_src$$12$$[$i$$65$$].$handler$ == $opt_handler$$5$$) {
          $goog$events$unlistenByKey$$($listenerArray$$1_src$$12$$[$i$$65$$].key);
          break
        }
      }
    }
  }
}
function $goog$events$unlistenByKey$$($key$$50$$) {
  var $listener$$40_listenerArray$$2$$ = $goog$events$listeners_$$[$key$$50$$];
  if(!$listener$$40_listenerArray$$2$$ || $listener$$40_listenerArray$$2$$.$removed$) {
    return $JSCompiler_alias_FALSE$$
  }
  var $src$$13_srcUid$$1$$ = $listener$$40_listenerArray$$2$$.src, $type$$65$$ = $listener$$40_listenerArray$$2$$.type, $proxy$$2_sourcesArray$$ = $listener$$40_listenerArray$$2$$.proxy, $capture$$3$$ = $listener$$40_listenerArray$$2$$.capture;
  $src$$13_srcUid$$1$$.removeEventListener ? ($src$$13_srcUid$$1$$ == $goog$global$$ || !$src$$13_srcUid$$1$$.$customEvent_$) && $src$$13_srcUid$$1$$.removeEventListener($type$$65$$, $proxy$$2_sourcesArray$$, $capture$$3$$) : $src$$13_srcUid$$1$$.detachEvent && $src$$13_srcUid$$1$$.detachEvent($type$$65$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$65$$] : $goog$events$onStringMap_$$[$type$$65$$] = "on" + $type$$65$$, $proxy$$2_sourcesArray$$);
  $src$$13_srcUid$$1$$ = $goog$getUid$$($src$$13_srcUid$$1$$);
  $goog$events$sources_$$[$src$$13_srcUid$$1$$] && ($proxy$$2_sourcesArray$$ = $goog$events$sources_$$[$src$$13_srcUid$$1$$], $goog$array$remove$$($proxy$$2_sourcesArray$$, $listener$$40_listenerArray$$2$$), 0 == $proxy$$2_sourcesArray$$.length && delete $goog$events$sources_$$[$src$$13_srcUid$$1$$]);
  $listener$$40_listenerArray$$2$$.$removed$ = $JSCompiler_alias_TRUE$$;
  if($listener$$40_listenerArray$$2$$ = $goog$events$listenerTree_$$[$type$$65$$][$capture$$3$$][$src$$13_srcUid$$1$$]) {
    $listener$$40_listenerArray$$2$$.$needsCleanup_$ = $JSCompiler_alias_TRUE$$, $goog$events$cleanUp_$$($type$$65$$, $capture$$3$$, $src$$13_srcUid$$1$$, $listener$$40_listenerArray$$2$$)
  }
  delete $goog$events$listeners_$$[$key$$50$$];
  return $JSCompiler_alias_TRUE$$
}
function $goog$events$cleanUp_$$($type$$66$$, $capture$$4$$, $srcUid$$2$$, $listenerArray$$3$$) {
  if(!$listenerArray$$3$$.$locked_$ && $listenerArray$$3$$.$needsCleanup_$) {
    for(var $oldIndex$$ = 0, $newIndex$$ = 0;$oldIndex$$ < $listenerArray$$3$$.length;$oldIndex$$++) {
      $listenerArray$$3$$[$oldIndex$$].$removed$ ? $listenerArray$$3$$[$oldIndex$$].proxy.src = $JSCompiler_alias_NULL$$ : ($oldIndex$$ != $newIndex$$ && ($listenerArray$$3$$[$newIndex$$] = $listenerArray$$3$$[$oldIndex$$]), $newIndex$$++)
    }
    $listenerArray$$3$$.length = $newIndex$$;
    $listenerArray$$3$$.$needsCleanup_$ = $JSCompiler_alias_FALSE$$;
    0 == $newIndex$$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$][$srcUid$$2$$], $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$--, 0 == $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$], $goog$events$listenerTree_$$[$type$$66$$].$count_$--), 0 == $goog$events$listenerTree_$$[$type$$66$$].$count_$ && delete $goog$events$listenerTree_$$[$type$$66$$])
  }
}
function $goog$events$removeAll$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$) {
  var $count$$9$$ = 0;
  if($opt_obj$$27_sourcesArray$$1_srcUid$$3$$ != $JSCompiler_alias_NULL$$) {
    if($opt_obj$$27_sourcesArray$$1_srcUid$$3$$ = $goog$getUid$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$), $goog$events$sources_$$[$opt_obj$$27_sourcesArray$$1_srcUid$$3$$]) {
      $opt_obj$$27_sourcesArray$$1_srcUid$$3$$ = $goog$events$sources_$$[$opt_obj$$27_sourcesArray$$1_srcUid$$3$$];
      for(var $i$$66$$ = $opt_obj$$27_sourcesArray$$1_srcUid$$3$$.length - 1;0 <= $i$$66$$;$i$$66$$--) {
        $goog$events$unlistenByKey$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$[$i$$66$$].key), $count$$9$$++
      }
    }
  }else {
    $goog$object$forEach$$($goog$events$listeners_$$, function($listener$$43$$, $key$$51$$) {
      $goog$events$unlistenByKey$$($key$$51$$);
      $count$$9$$++
    })
  }
}
function $goog$events$getListeners_$$($obj$$86_objUid$$, $type$$68$$, $capture$$6$$) {
  var $map$$1$$ = $goog$events$listenerTree_$$;
  return $type$$68$$ in $map$$1$$ && ($map$$1$$ = $map$$1$$[$type$$68$$], $capture$$6$$ in $map$$1$$ && ($map$$1$$ = $map$$1$$[$capture$$6$$], $obj$$86_objUid$$ = $goog$getUid$$($obj$$86_objUid$$), $map$$1$$[$obj$$86_objUid$$])) ? $map$$1$$[$obj$$86_objUid$$] : $JSCompiler_alias_NULL$$
}
function $goog$events$fireListeners_$$($map$$4$$, $obj$$89_objUid$$2$$, $type$$72$$, $capture$$9$$, $eventObject$$4$$) {
  var $retval$$ = 1;
  $obj$$89_objUid$$2$$ = $goog$getUid$$($obj$$89_objUid$$2$$);
  if($map$$4$$[$obj$$89_objUid$$2$$]) {
    var $remaining$$ = --$map$$4$$.$remaining_$, $listenerArray$$5$$ = $map$$4$$[$obj$$89_objUid$$2$$];
    $listenerArray$$5$$.$locked_$ ? $listenerArray$$5$$.$locked_$++ : $listenerArray$$5$$.$locked_$ = 1;
    try {
      for(var $length$$16$$ = $listenerArray$$5$$.length, $i$$68$$ = 0;$i$$68$$ < $length$$16$$;$i$$68$$++) {
        var $listener$$46$$ = $listenerArray$$5$$[$i$$68$$];
        $listener$$46$$ && !$listener$$46$$.$removed$ && ($retval$$ &= $goog$events$fireListener$$($listener$$46$$, $eventObject$$4$$) !== $JSCompiler_alias_FALSE$$)
      }
    }finally {
      $map$$4$$.$remaining_$ = Math.max($remaining$$, $map$$4$$.$remaining_$), $listenerArray$$5$$.$locked_$--, $goog$events$cleanUp_$$($type$$72$$, $capture$$9$$, $obj$$89_objUid$$2$$, $listenerArray$$5$$)
    }
  }
  return Boolean($retval$$)
}
function $goog$events$fireListener$$($listener$$47$$, $eventObject$$5$$) {
  $listener$$47$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$47$$.key);
  return $listener$$47$$.handleEvent($eventObject$$5$$)
}
function $goog$events$handleBrowserEvent_$$($listener$$48$$, $opt_evt$$) {
  if($listener$$48$$.$removed$) {
    return $JSCompiler_alias_TRUE$$
  }
  var $be$$1_type$$74$$ = $listener$$48$$.type, $map$$6$$ = $goog$events$listenerTree_$$;
  if(!($be$$1_type$$74$$ in $map$$6$$)) {
    return $JSCompiler_alias_TRUE$$
  }
  var $map$$6$$ = $map$$6$$[$be$$1_type$$74$$], $ieEvent_retval$$1$$, $targetsMap$$1$$;
  if(!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    $ieEvent_retval$$1$$ = $opt_evt$$ || $goog$getObjectByName$$("window.event");
    var $hasCapture$$2$$ = $JSCompiler_alias_TRUE$$ in $map$$6$$, $hasBubble$$1$$ = $JSCompiler_alias_FALSE$$ in $map$$6$$;
    if($hasCapture$$2$$) {
      if(0 > $ieEvent_retval$$1$$.keyCode || $ieEvent_retval$$1$$.returnValue != $JSCompiler_alias_VOID$$) {
        return $JSCompiler_alias_TRUE$$
      }
      a: {
        var $evt$$16_useReturnValue$$inline_161$$ = $JSCompiler_alias_FALSE$$;
        if(0 == $ieEvent_retval$$1$$.keyCode) {
          try {
            $ieEvent_retval$$1$$.keyCode = -1;
            break a
          }catch($ex$$inline_162$$) {
            $evt$$16_useReturnValue$$inline_161$$ = $JSCompiler_alias_TRUE$$
          }
        }
        if($evt$$16_useReturnValue$$inline_161$$ || $ieEvent_retval$$1$$.returnValue == $JSCompiler_alias_VOID$$) {
          $ieEvent_retval$$1$$.returnValue = $JSCompiler_alias_TRUE$$
        }
      }
    }
    $evt$$16_useReturnValue$$inline_161$$ = new $goog$events$BrowserEvent$$;
    $evt$$16_useReturnValue$$inline_161$$.init($ieEvent_retval$$1$$, this);
    $ieEvent_retval$$1$$ = $JSCompiler_alias_TRUE$$;
    try {
      if($hasCapture$$2$$) {
        for(var $ancestors$$2$$ = [], $parent$$19$$ = $evt$$16_useReturnValue$$inline_161$$.currentTarget;$parent$$19$$;$parent$$19$$ = $parent$$19$$.parentNode) {
          $ancestors$$2$$.push($parent$$19$$)
        }
        $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_TRUE$$];
        $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
        for(var $i$$70$$ = $ancestors$$2$$.length - 1;!$evt$$16_useReturnValue$$inline_161$$.$propagationStopped_$ && 0 <= $i$$70$$ && $targetsMap$$1$$.$remaining_$;$i$$70$$--) {
          $evt$$16_useReturnValue$$inline_161$$.currentTarget = $ancestors$$2$$[$i$$70$$], $ieEvent_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$70$$], $be$$1_type$$74$$, $JSCompiler_alias_TRUE$$, $evt$$16_useReturnValue$$inline_161$$)
        }
        if($hasBubble$$1$$) {
          $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_FALSE$$];
          $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
          for($i$$70$$ = 0;!$evt$$16_useReturnValue$$inline_161$$.$propagationStopped_$ && $i$$70$$ < $ancestors$$2$$.length && $targetsMap$$1$$.$remaining_$;$i$$70$$++) {
            $evt$$16_useReturnValue$$inline_161$$.currentTarget = $ancestors$$2$$[$i$$70$$], $ieEvent_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$70$$], $be$$1_type$$74$$, $JSCompiler_alias_FALSE$$, $evt$$16_useReturnValue$$inline_161$$)
          }
        }
      }else {
        $ieEvent_retval$$1$$ = $goog$events$fireListener$$($listener$$48$$, $evt$$16_useReturnValue$$inline_161$$)
      }
    }finally {
      $ancestors$$2$$ && ($ancestors$$2$$.length = 0)
    }
    return $ieEvent_retval$$1$$
  }
  $be$$1_type$$74$$ = new $goog$events$BrowserEvent$$($opt_evt$$, this);
  return $ieEvent_retval$$1$$ = $goog$events$fireListener$$($listener$$48$$, $be$$1_type$$74$$)
}
var $goog$events$uniqueIdCounter_$$ = 0;
// Input 33
function $goog$events$EventHandler$$($opt_handler$$8$$) {
  $goog$Disposable$$.call(this);
  this.$handler_$ = $opt_handler$$8$$;
  this.$keys_$ = []
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
function $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$self$$, $src$$17$$, $type$$75$$, $opt_fn$$4$$, $opt_capture$$1$$) {
  $goog$isArray$$($type$$75$$) || ($goog$events$EventHandler$typeArray_$$[0] = $type$$75$$, $type$$75$$ = $goog$events$EventHandler$typeArray_$$);
  for(var $i$$71$$ = 0;$i$$71$$ < $type$$75$$.length;$i$$71$$++) {
    var $key$$53$$ = $goog$events$listen$$($src$$17$$, $type$$75$$[$i$$71$$], $opt_fn$$4$$ || $JSCompiler_StaticMethods_listen$self$$, $opt_capture$$1$$ || $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_listen$self$$.$handler_$ || $JSCompiler_StaticMethods_listen$self$$);
    $JSCompiler_StaticMethods_listen$self$$.$keys_$.push($key$$53$$)
  }
  return $JSCompiler_StaticMethods_listen$self$$
}
function $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_listenOnce$self$$, $key$$54_src$$18$$, $type$$76$$, $opt_fn$$5$$, $opt_capture$$2$$, $opt_handler$$10$$) {
  if($goog$isArray$$($type$$76$$)) {
    for(var $i$$72$$ = 0;$i$$72$$ < $type$$76$$.length;$i$$72$$++) {
      $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_listenOnce$self$$, $key$$54_src$$18$$, $type$$76$$[$i$$72$$], $opt_fn$$5$$, $opt_capture$$2$$, $opt_handler$$10$$)
    }
  }else {
    $key$$54_src$$18$$ = $goog$events$listenOnce$$($key$$54_src$$18$$, $type$$76$$, $opt_fn$$5$$ || $JSCompiler_StaticMethods_listenOnce$self$$, $opt_capture$$2$$, $opt_handler$$10$$ || $JSCompiler_StaticMethods_listenOnce$self$$.$handler_$ || $JSCompiler_StaticMethods_listenOnce$self$$), $JSCompiler_StaticMethods_listenOnce$self$$.$keys_$.push($key$$54_src$$18$$)
  }
}
function $JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$self$$, $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$, $i$$inline_171_type$$77$$, $listener$$inline_166_opt_fn$$6$$, $capture$$inline_169_opt_capture$$3$$, $opt_handler$$12_opt_handler$$inline_168$$) {
  if($goog$isArray$$($i$$inline_171_type$$77$$)) {
    for(var $i$$73$$ = 0;$i$$73$$ < $i$$inline_171_type$$77$$.length;$i$$73$$++) {
      $JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$self$$, $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$, $i$$inline_171_type$$77$$[$i$$73$$], $listener$$inline_166_opt_fn$$6$$, $capture$$inline_169_opt_capture$$3$$, $opt_handler$$12_opt_handler$$inline_168$$)
    }
  }else {
    a: {
      $listener$$inline_166_opt_fn$$6$$ = $listener$$inline_166_opt_fn$$6$$ || $JSCompiler_StaticMethods_unlisten$self$$;
      $opt_handler$$12_opt_handler$$inline_168$$ = $opt_handler$$12_opt_handler$$inline_168$$ || $JSCompiler_StaticMethods_unlisten$self$$.$handler_$ || $JSCompiler_StaticMethods_unlisten$self$$;
      $capture$$inline_169_opt_capture$$3$$ = !!$capture$$inline_169_opt_capture$$3$$;
      if($key$$55_listener$$51_listenerArray$$inline_170_src$$20$$ = $goog$events$getListeners_$$($key$$55_listener$$51_listenerArray$$inline_170_src$$20$$, $i$$inline_171_type$$77$$, $capture$$inline_169_opt_capture$$3$$)) {
        for($i$$inline_171_type$$77$$ = 0;$i$$inline_171_type$$77$$ < $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$.length;$i$$inline_171_type$$77$$++) {
          if(!$key$$55_listener$$51_listenerArray$$inline_170_src$$20$$[$i$$inline_171_type$$77$$].$removed$ && $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$[$i$$inline_171_type$$77$$].$listener$ == $listener$$inline_166_opt_fn$$6$$ && $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$[$i$$inline_171_type$$77$$].capture == $capture$$inline_169_opt_capture$$3$$ && $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$[$i$$inline_171_type$$77$$].$handler$ == $opt_handler$$12_opt_handler$$inline_168$$) {
            $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$ = $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$[$i$$inline_171_type$$77$$];
            break a
          }
        }
      }
      $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$ = $JSCompiler_alias_NULL$$
    }
    $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$ && ($key$$55_listener$$51_listenerArray$$inline_170_src$$20$$ = $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$.key, $goog$events$unlistenByKey$$($key$$55_listener$$51_listenerArray$$inline_170_src$$20$$), $goog$array$remove$$($JSCompiler_StaticMethods_unlisten$self$$.$keys_$, $key$$55_listener$$51_listenerArray$$inline_170_src$$20$$))
  }
  return $JSCompiler_StaticMethods_unlisten$self$$
}
$goog$events$EventHandler$$.prototype.$removeAll$ = function $$goog$events$EventHandler$$$$$removeAll$$() {
  $goog$array$forEach$$(this.$keys_$, $goog$events$unlistenByKey$$);
  this.$keys_$.length = 0
};
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.$removeAll$()
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  $JSCompiler_alias_THROW$$(Error("EventHandler.handleEvent not implemented"))
};
// Input 34
function $goog$ui$IdGenerator$$() {
}
$goog$addSingletonGetter$$($goog$ui$IdGenerator$$);
$goog$ui$IdGenerator$$.prototype.$nextId_$ = 0;
$goog$ui$IdGenerator$$.$getInstance$();
// Input 35
function $goog$events$EventTarget$$() {
  $goog$Disposable$$.call(this)
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype;
$JSCompiler_prototypeAlias$$.$customEvent_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$parentEventTarget_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = $JSCompiler_set$$("$parentEventTarget_$");
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$78$$, $handler$$40$$, $opt_capture$$4$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$78$$, $handler$$40$$, $opt_capture$$4$$, $opt_handlerScope$$)
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$79$$, $handler$$41$$, $opt_capture$$5$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$79$$, $handler$$41$$, $opt_capture$$5$$, $opt_handlerScope$$1$$)
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($JSCompiler_inline_result$$54_e$$24_e$$inline_174$$) {
  var $hasCapture$$inline_180_type$$inline_175$$ = $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.type || $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$, $map$$inline_176$$ = $goog$events$listenerTree_$$;
  if($hasCapture$$inline_180_type$$inline_175$$ in $map$$inline_176$$) {
    if($goog$isString$$($JSCompiler_inline_result$$54_e$$24_e$$inline_174$$)) {
      $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$ = new $goog$events$Event$$($JSCompiler_inline_result$$54_e$$24_e$$inline_174$$, this)
    }else {
      if($JSCompiler_inline_result$$54_e$$24_e$$inline_174$$ instanceof $goog$events$Event$$) {
        $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.target = $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.target || this
      }else {
        var $oldEvent$$inline_177_rv$$inline_178$$ = $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$;
        $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$ = new $goog$events$Event$$($hasCapture$$inline_180_type$$inline_175$$, this);
        $goog$object$extend$$($JSCompiler_inline_result$$54_e$$24_e$$inline_174$$, $oldEvent$$inline_177_rv$$inline_178$$)
      }
    }
    var $oldEvent$$inline_177_rv$$inline_178$$ = 1, $ancestors$$inline_179_current$$inline_184$$, $map$$inline_176$$ = $map$$inline_176$$[$hasCapture$$inline_180_type$$inline_175$$], $hasCapture$$inline_180_type$$inline_175$$ = $JSCompiler_alias_TRUE$$ in $map$$inline_176$$, $parent$$inline_182_targetsMap$$inline_181$$;
    if($hasCapture$$inline_180_type$$inline_175$$) {
      $ancestors$$inline_179_current$$inline_184$$ = [];
      for($parent$$inline_182_targetsMap$$inline_181$$ = this;$parent$$inline_182_targetsMap$$inline_181$$;$parent$$inline_182_targetsMap$$inline_181$$ = $parent$$inline_182_targetsMap$$inline_181$$.$parentEventTarget_$) {
        $ancestors$$inline_179_current$$inline_184$$.push($parent$$inline_182_targetsMap$$inline_181$$)
      }
      $parent$$inline_182_targetsMap$$inline_181$$ = $map$$inline_176$$[$JSCompiler_alias_TRUE$$];
      $parent$$inline_182_targetsMap$$inline_181$$.$remaining_$ = $parent$$inline_182_targetsMap$$inline_181$$.$count_$;
      for(var $i$$inline_183$$ = $ancestors$$inline_179_current$$inline_184$$.length - 1;!$JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.$propagationStopped_$ && 0 <= $i$$inline_183$$ && $parent$$inline_182_targetsMap$$inline_181$$.$remaining_$;$i$$inline_183$$--) {
        $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.currentTarget = $ancestors$$inline_179_current$$inline_184$$[$i$$inline_183$$], $oldEvent$$inline_177_rv$$inline_178$$ &= $goog$events$fireListeners_$$($parent$$inline_182_targetsMap$$inline_181$$, $ancestors$$inline_179_current$$inline_184$$[$i$$inline_183$$], $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.type, $JSCompiler_alias_TRUE$$, $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$) && $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.$returnValue_$ != 
        $JSCompiler_alias_FALSE$$
      }
    }
    if($JSCompiler_alias_FALSE$$ in $map$$inline_176$$) {
      if($parent$$inline_182_targetsMap$$inline_181$$ = $map$$inline_176$$[$JSCompiler_alias_FALSE$$], $parent$$inline_182_targetsMap$$inline_181$$.$remaining_$ = $parent$$inline_182_targetsMap$$inline_181$$.$count_$, $hasCapture$$inline_180_type$$inline_175$$) {
        for($i$$inline_183$$ = 0;!$JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.$propagationStopped_$ && $i$$inline_183$$ < $ancestors$$inline_179_current$$inline_184$$.length && $parent$$inline_182_targetsMap$$inline_181$$.$remaining_$;$i$$inline_183$$++) {
          $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.currentTarget = $ancestors$$inline_179_current$$inline_184$$[$i$$inline_183$$], $oldEvent$$inline_177_rv$$inline_178$$ &= $goog$events$fireListeners_$$($parent$$inline_182_targetsMap$$inline_181$$, $ancestors$$inline_179_current$$inline_184$$[$i$$inline_183$$], $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$) && $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.$returnValue_$ != 
          $JSCompiler_alias_FALSE$$
        }
      }else {
        for($ancestors$$inline_179_current$$inline_184$$ = this;!$JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.$propagationStopped_$ && $ancestors$$inline_179_current$$inline_184$$ && $parent$$inline_182_targetsMap$$inline_181$$.$remaining_$;$ancestors$$inline_179_current$$inline_184$$ = $ancestors$$inline_179_current$$inline_184$$.$parentEventTarget_$) {
          $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.currentTarget = $ancestors$$inline_179_current$$inline_184$$, $oldEvent$$inline_177_rv$$inline_178$$ &= $goog$events$fireListeners_$$($parent$$inline_182_targetsMap$$inline_181$$, $ancestors$$inline_179_current$$inline_184$$, $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$) && $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$.$returnValue_$ != $JSCompiler_alias_FALSE$$
        }
      }
    }
    $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$ = Boolean($oldEvent$$inline_177_rv$$inline_178$$)
  }else {
    $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$ = $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_inline_result$$54_e$$24_e$$inline_174$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$removeAll$$(this);
  this.$parentEventTarget_$ = $JSCompiler_alias_NULL$$
};
// Input 36
function $goog$ui$Component$$($opt_domHelper$$2$$) {
  $goog$Disposable$$.call(this);
  this.$dom_$ = $opt_domHelper$$2$$ || $goog$dom$getDomHelper$$();
  this.$rightToLeft_$ = $goog$ui$Component$defaultRightToLeft_$$
}
$goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$);
$goog$ui$Component$$.prototype.$idGenerator_$ = $goog$ui$IdGenerator$$.$getInstance$();
var $goog$ui$Component$defaultRightToLeft_$$ = $JSCompiler_alias_NULL$$;
function $goog$ui$Component$getStateTransitionEvent$$($state$$, $isEntering$$) {
  switch($state$$) {
    case 1:
      return $isEntering$$ ? "disable" : "enable";
    case 2:
      return $isEntering$$ ? "highlight" : "unhighlight";
    case 4:
      return $isEntering$$ ? "activate" : "deactivate";
    case 8:
      return $isEntering$$ ? "select" : "unselect";
    case 16:
      return $isEntering$$ ? "check" : "uncheck";
    case 32:
      return $isEntering$$ ? "focus" : "blur";
    case 64:
      return $isEntering$$ ? "open" : "close"
  }
  $JSCompiler_alias_THROW$$(Error("Invalid component state"))
}
$JSCompiler_prototypeAlias$$ = $goog$ui$Component$$.prototype;
$JSCompiler_prototypeAlias$$.$id_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$inDocument_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$rightToLeft_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$model_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$parent_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$children_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$childIndex_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$wasDecorated_$ = $JSCompiler_alias_FALSE$$;
function $JSCompiler_StaticMethods_getId$$($JSCompiler_StaticMethods_getId$self$$) {
  return $JSCompiler_StaticMethods_getId$self$$.$id_$ || ($JSCompiler_StaticMethods_getId$self$$.$id_$ = ":" + ($JSCompiler_StaticMethods_getId$self$$.$idGenerator_$.$nextId_$++).toString(36))
}
function $JSCompiler_StaticMethods_setId$$($JSCompiler_StaticMethods_setId$self$$, $id$$3$$) {
  $JSCompiler_StaticMethods_setId$self$$.$parent_$ && $JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$ && ($goog$object$remove$$($JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$, $JSCompiler_StaticMethods_setId$self$$.$id_$), $goog$object$add$$($JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$, $id$$3$$, $JSCompiler_StaticMethods_setId$self$$));
  $JSCompiler_StaticMethods_setId$self$$.$id_$ = $id$$3$$
}
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$getElementsByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementsByClass$$($className$$15$$) {
  return this.$element_$ ? this.$dom_$.$getElementsByClass$($className$$15$$, this.$element_$) : []
};
$JSCompiler_prototypeAlias$$.$getElementByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementByClass$$($className$$16$$) {
  return this.$element_$ ? this.$dom_$.$getElementByClass$($className$$16$$, this.$element_$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$googUiComponentHandler_$ || (this.$googUiComponentHandler_$ = new $goog$events$EventHandler$$(this))
};
function $JSCompiler_StaticMethods_setParent$$($JSCompiler_StaticMethods_setParent$self$$, $parent$$21$$) {
  $JSCompiler_StaticMethods_setParent$self$$ == $parent$$21$$ && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
  $parent$$21$$ && ($JSCompiler_StaticMethods_setParent$self$$.$parent_$ && $JSCompiler_StaticMethods_setParent$self$$.$id_$ && $JSCompiler_StaticMethods_setParent$self$$.$parent_$.$childIndex_$ && $JSCompiler_StaticMethods_setParent$self$$.$id_$ && $goog$object$get$$($JSCompiler_StaticMethods_setParent$self$$.$parent_$.$childIndex_$, $JSCompiler_StaticMethods_setParent$self$$.$id_$) && $JSCompiler_StaticMethods_setParent$self$$.$parent_$ != $parent$$21$$) && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
  $JSCompiler_StaticMethods_setParent$self$$.$parent_$ = $parent$$21$$;
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call($JSCompiler_StaticMethods_setParent$self$$, $parent$$21$$)
}
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$");
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function $$JSCompiler_prototypeAlias$$$$setParentEventTarget$$($parent$$22$$) {
  this.$parent_$ && this.$parent_$ != $parent$$22$$ && $JSCompiler_alias_THROW$$(Error("Method not supported"));
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$22$$)
};
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$dom_$.createElement("div")
};
$JSCompiler_prototypeAlias$$.render = function $$JSCompiler_prototypeAlias$$$render$($opt_parentElement$$) {
  $JSCompiler_StaticMethods_render_$$(this, $opt_parentElement$$)
};
function $JSCompiler_StaticMethods_render_$$($JSCompiler_StaticMethods_render_$self$$, $opt_parentElement$$1$$, $opt_beforeNode$$) {
  $JSCompiler_StaticMethods_render_$self$$.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  $JSCompiler_StaticMethods_render_$self$$.$element_$ || $JSCompiler_StaticMethods_render_$self$$.$createDom$();
  $opt_parentElement$$1$$ ? $opt_parentElement$$1$$.insertBefore($JSCompiler_StaticMethods_render_$self$$.$element_$, $opt_beforeNode$$ || $JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_render_$self$$.$dom_$.$document_$.body.appendChild($JSCompiler_StaticMethods_render_$self$$.$element_$);
  (!$JSCompiler_StaticMethods_render_$self$$.$parent_$ || $JSCompiler_StaticMethods_render_$self$$.$parent_$.$inDocument_$) && $JSCompiler_StaticMethods_render_$self$$.$enterDocument$()
}
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($element$$73$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  if($element$$73$$ && this.$canDecorate$($element$$73$$)) {
    this.$wasDecorated_$ = $JSCompiler_alias_TRUE$$;
    if(!this.$dom_$ || this.$dom_$.$document_$ != $goog$dom$getOwnerDocument$$($element$$73$$)) {
      this.$dom_$ = $goog$dom$getDomHelper$$($element$$73$$)
    }
    this.$decorateInternal$($element$$73$$);
    this.$enterDocument$()
  }else {
    $JSCompiler_alias_THROW$$(Error("Invalid element to decorate"))
  }
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  this.$inDocument_$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$8$$) {
    !$child$$8$$.$inDocument_$ && $child$$8$$.$getElement$() && $child$$8$$.$enterDocument$()
  })
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$9$$) {
    $child$$9$$.$inDocument_$ && $child$$9$$.$exitDocument$()
  });
  this.$googUiComponentHandler_$ && this.$googUiComponentHandler_$.$removeAll$();
  this.$inDocument_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$inDocument_$ && this.$exitDocument$();
  this.$googUiComponentHandler_$ && (this.$googUiComponentHandler_$.$dispose$(), delete this.$googUiComponentHandler_$);
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$10$$) {
    $child$$10$$.$dispose$()
  });
  !this.$wasDecorated_$ && this.$element_$ && $goog$dom$removeNode$$(this.$element_$);
  this.$parent_$ = this.$model_$ = this.$element_$ = this.$childIndex_$ = this.$children_$ = $JSCompiler_alias_NULL$$;
  $goog$ui$Component$$.$superClass_$.$disposeInternal$.call(this)
};
function $JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_makeId$self$$, $idFragment$$) {
  return $JSCompiler_StaticMethods_getId$$($JSCompiler_StaticMethods_makeId$self$$) + "." + $idFragment$$
}
$JSCompiler_prototypeAlias$$.$getModel$ = $JSCompiler_get$$("$model_$");
$JSCompiler_prototypeAlias$$.$setModel$ = $JSCompiler_set$$("$model_$");
function $JSCompiler_StaticMethods_addChild$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$, $child$$11$$, $opt_render$$) {
  var $index$$inline_189_sibling$$inline_192$$ = $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$ ? $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$.length : 0;
  $child$$11$$.$inDocument_$ && ($opt_render$$ || !$JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$inDocument_$) && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  (0 > $index$$inline_189_sibling$$inline_192$$ || $index$$inline_189_sibling$$inline_192$$ > ($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$ ? $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$.length : 0)) && $JSCompiler_alias_THROW$$(Error("Child component index out of bounds"));
  if(!$JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$childIndex_$ || !$JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$) {
    $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$childIndex_$ = {}, $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$ = []
  }
  if($child$$11$$.getParent() == $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$) {
    var $key$$inline_1129$$ = $JSCompiler_StaticMethods_getId$$($child$$11$$);
    $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$childIndex_$[$key$$inline_1129$$] = $child$$11$$;
    $goog$array$remove$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$, $child$$11$$)
  }else {
    $goog$object$add$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$childIndex_$, $JSCompiler_StaticMethods_getId$$($child$$11$$), $child$$11$$)
  }
  $JSCompiler_StaticMethods_setParent$$($child$$11$$, $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$);
  $goog$array$splice$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$, $index$$inline_189_sibling$$inline_192$$, 0, $child$$11$$);
  $child$$11$$.$inDocument_$ && $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$inDocument_$ && $child$$11$$.getParent() == $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$ ? ($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$ = $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$getContentElement$(), $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.insertBefore($child$$11$$.$getElement$(), $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.childNodes[$index$$inline_189_sibling$$inline_192$$] || 
  $JSCompiler_alias_NULL$$)) : $opt_render$$ ? ($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$element_$ || $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$createDom$(), $index$$inline_189_sibling$$inline_192$$ = $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$ ? $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$children_$[$index$$inline_189_sibling$$inline_192$$ + 1] || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$, 
  $JSCompiler_StaticMethods_render_$$($child$$11$$, $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$getContentElement$(), $index$$inline_189_sibling$$inline_192$$ ? $index$$inline_189_sibling$$inline_192$$.$element_$ : $JSCompiler_alias_NULL$$)) : $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_191$$.$inDocument_$ && (!$child$$11$$.$inDocument_$ && $child$$11$$.$element_$ && $child$$11$$.$element_$.parentNode && 1 == $child$$11$$.$element_$.parentNode.nodeType) && 
  $child$$11$$.$enterDocument$()
}
$JSCompiler_prototypeAlias$$.$getContentElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$isRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$isRightToLeft$$() {
  this.$rightToLeft_$ == $JSCompiler_alias_NULL$$ && (this.$rightToLeft_$ = $goog$style$isRightToLeft$$(this.$inDocument_$ ? this.$element_$ : this.$dom_$.$document_$.body));
  return this.$rightToLeft_$
};
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($rightToLeft$$1$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  this.$rightToLeft_$ = $rightToLeft$$1$$
};
function $JSCompiler_StaticMethods_forEachChild$$($JSCompiler_StaticMethods_forEachChild$self$$, $f$$27$$) {
  $JSCompiler_StaticMethods_forEachChild$self$$.$children_$ && $goog$array$forEach$$($JSCompiler_StaticMethods_forEachChild$self$$.$children_$, $f$$27$$, $JSCompiler_alias_VOID$$)
}
$JSCompiler_prototypeAlias$$.removeChild = function $$JSCompiler_prototypeAlias$$$removeChild$($child$$15$$, $opt_unrender$$) {
  if($child$$15$$) {
    var $id$$6$$ = $goog$isString$$($child$$15$$) ? $child$$15$$ : $JSCompiler_StaticMethods_getId$$($child$$15$$);
    $child$$15$$ = this.$childIndex_$ && $id$$6$$ ? $goog$object$get$$(this.$childIndex_$, $id$$6$$) || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
    $id$$6$$ && $child$$15$$ && ($goog$object$remove$$(this.$childIndex_$, $id$$6$$), $goog$array$remove$$(this.$children_$, $child$$15$$), $opt_unrender$$ && ($child$$15$$.$exitDocument$(), $child$$15$$.$element_$ && $goog$dom$removeNode$$($child$$15$$.$element_$)), $JSCompiler_StaticMethods_setParent$$($child$$15$$, $JSCompiler_alias_NULL$$))
  }
  $child$$15$$ || $JSCompiler_alias_THROW$$(Error("Child is not in parent component"));
  return $child$$15$$
};
$JSCompiler_prototypeAlias$$.$removeChildren$ = function $$JSCompiler_prototypeAlias$$$$removeChildren$$($opt_unrender$$2$$) {
  for(var $removedChildren$$ = [];this.$children_$ && 0 != this.$children_$.length;) {
    $removedChildren$$.push(this.removeChild(this.$children_$ ? this.$children_$[0] || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$, $opt_unrender$$2$$))
  }
  return $removedChildren$$
};
// Input 37
var $goog$i18n$NumberFormatSymbols$$ = {$DECIMAL_SEP$:".", $GROUP_SEP$:",", $PERCENT$:"%", $ZERO_DIGIT$:"0", $PLUS_SIGN$:"+", $MINUS_SIGN$:"-", $EXP_SYMBOL$:"E", $PERMILL$:"\u2030", $INFINITY$:"\u221e", $NAN$:"NaN", $DECIMAL_PATTERN$:"#,##0.###", $SCIENTIFIC_PATTERN$:"#E0", $PERCENT_PATTERN$:"#,##0%", $CURRENCY_PATTERN$:"\u00a4#,##0.00;(\u00a4#,##0.00)", $DEF_CURRENCY_CODE$:"USD"}, $goog$i18n$NumberFormatSymbols$$ = {$DECIMAL_SEP$:",", $GROUP_SEP$:".", $PERCENT$:"%", $ZERO_DIGIT$:"0", $PLUS_SIGN$:"+", 
$MINUS_SIGN$:"-", $EXP_SYMBOL$:"E", $PERMILL$:"\u2030", $INFINITY$:"\u221e", $NAN$:"NaN", $DECIMAL_PATTERN$:"#,##0.###", $SCIENTIFIC_PATTERN$:"#E0", $PERCENT_PATTERN$:"#,##0%", $CURRENCY_PATTERN$:"\u00a4#,##0.00;(\u00a4#,##0.00)", $DEF_CURRENCY_CODE$:"BRL"};
// Input 38
// Input 39
function $goog$structs$getCount$$($JSCompiler_temp$$61_JSCompiler_temp$$62_col$$) {
  if("function" == typeof $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$.$getCount$) {
    $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$ = $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$.$getCount$()
  }else {
    if($goog$isArrayLike$$($JSCompiler_temp$$61_JSCompiler_temp$$62_col$$) || $goog$isString$$($JSCompiler_temp$$61_JSCompiler_temp$$62_col$$)) {
      $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$ = $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$.length
    }else {
      var $rv$$inline_199$$ = 0, $key$$inline_200$$;
      for($key$$inline_200$$ in $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$) {
        $rv$$inline_199$$++
      }
      $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$ = $rv$$inline_199$$
    }
  }
  return $JSCompiler_temp$$61_JSCompiler_temp$$62_col$$
}
function $goog$structs$getValues$$($col$$1$$) {
  if("function" == typeof $col$$1$$.$getValues$) {
    return $col$$1$$.$getValues$()
  }
  if($goog$isString$$($col$$1$$)) {
    return $col$$1$$.split("")
  }
  if($goog$isArrayLike$$($col$$1$$)) {
    for(var $rv$$16$$ = [], $l$$12$$ = $col$$1$$.length, $i$$84$$ = 0;$i$$84$$ < $l$$12$$;$i$$84$$++) {
      $rv$$16$$.push($col$$1$$[$i$$84$$])
    }
    return $rv$$16$$
  }
  return $goog$object$getValues$$($col$$1$$)
}
function $goog$structs$getKeys$$($col$$2_l$$13$$) {
  if("function" == typeof $col$$2_l$$13$$.$getKeys$) {
    return $col$$2_l$$13$$.$getKeys$()
  }
  if("function" != typeof $col$$2_l$$13$$.$getValues$) {
    if($goog$isArrayLike$$($col$$2_l$$13$$) || $goog$isString$$($col$$2_l$$13$$)) {
      var $rv$$17$$ = [];
      $col$$2_l$$13$$ = $col$$2_l$$13$$.length;
      for(var $i$$85$$ = 0;$i$$85$$ < $col$$2_l$$13$$;$i$$85$$++) {
        $rv$$17$$.push($i$$85$$)
      }
      return $rv$$17$$
    }
    return $goog$object$getKeys$$($col$$2_l$$13$$)
  }
}
function $goog$structs$forEach$$($col$$6$$, $f$$36$$, $opt_obj$$37$$) {
  if("function" == typeof $col$$6$$.forEach) {
    $col$$6$$.forEach($f$$36$$, $opt_obj$$37$$)
  }else {
    if($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
      $goog$array$forEach$$($col$$6$$, $f$$36$$, $opt_obj$$37$$)
    }else {
      for(var $keys$$1$$ = $goog$structs$getKeys$$($col$$6$$), $values$$5$$ = $goog$structs$getValues$$($col$$6$$), $l$$14$$ = $values$$5$$.length, $i$$86$$ = 0;$i$$86$$ < $l$$14$$;$i$$86$$++) {
        $f$$36$$.call($opt_obj$$37$$, $values$$5$$[$i$$86$$], $keys$$1$$ && $keys$$1$$[$i$$86$$], $col$$6$$)
      }
    }
  }
}
function $goog$structs$every$$($col$$10$$, $f$$40$$) {
  if("function" == typeof $col$$10$$.every) {
    return $col$$10$$.every($f$$40$$, $JSCompiler_alias_VOID$$)
  }
  if($goog$isArrayLike$$($col$$10$$) || $goog$isString$$($col$$10$$)) {
    return $goog$array$every$$($col$$10$$, $f$$40$$, $JSCompiler_alias_VOID$$)
  }
  for(var $keys$$5$$ = $goog$structs$getKeys$$($col$$10$$), $values$$9$$ = $goog$structs$getValues$$($col$$10$$), $l$$18$$ = $values$$9$$.length, $i$$90$$ = 0;$i$$90$$ < $l$$18$$;$i$$90$$++) {
    if(!$f$$40$$.call($JSCompiler_alias_VOID$$, $values$$9$$[$i$$90$$], $keys$$5$$ && $keys$$5$$[$i$$90$$], $col$$10$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
;
// Input 40
function $goog$structs$Map$$($opt_map$$, $var_args$$75$$) {
  this.$map_$ = {};
  this.$keys_$ = [];
  var $argLength$$2$$ = arguments.length;
  if(1 < $argLength$$2$$) {
    $argLength$$2$$ % 2 && $JSCompiler_alias_THROW$$(Error("Uneven number of arguments"));
    for(var $i$$91$$ = 0;$i$$91$$ < $argLength$$2$$;$i$$91$$ += 2) {
      this.set(arguments[$i$$91$$], arguments[$i$$91$$ + 1])
    }
  }else {
    $opt_map$$ && this.$addAll$($opt_map$$)
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$count_$ = 0;
$JSCompiler_prototypeAlias$$.$version_$ = 0;
$JSCompiler_prototypeAlias$$.$getCount$ = $JSCompiler_get$$("$count_$");
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $rv$$20$$ = [], $i$$92$$ = 0;$i$$92$$ < this.$keys_$.length;$i$$92$$++) {
    $rv$$20$$.push(this.$map_$[this.$keys_$[$i$$92$$]])
  }
  return $rv$$20$$
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$keys_$.concat()
};
$JSCompiler_prototypeAlias$$.$containsValue$ = function $$JSCompiler_prototypeAlias$$$$containsValue$$($val$$30$$) {
  for(var $i$$93$$ = 0;$i$$93$$ < this.$keys_$.length;$i$$93$$++) {
    var $key$$60$$ = this.$keys_$[$i$$93$$];
    if($goog$structs$Map$hasKey_$$(this.$map_$, $key$$60$$) && this.$map_$[$key$$60$$] == $val$$30$$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($otherMap$$, $opt_equalityFn$$) {
  if(this === $otherMap$$) {
    return $JSCompiler_alias_TRUE$$
  }
  if(this.$count_$ != $otherMap$$.$getCount$()) {
    return $JSCompiler_alias_FALSE$$
  }
  var $equalityFn$$ = $opt_equalityFn$$ || $goog$structs$Map$defaultEquals$$;
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $key$$61$$, $i$$94$$ = 0;$key$$61$$ = this.$keys_$[$i$$94$$];$i$$94$$++) {
    if(!$equalityFn$$(this.get($key$$61$$), $otherMap$$.get($key$$61$$))) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$structs$Map$defaultEquals$$($a$$29$$, $b$$25$$) {
  return $a$$29$$ === $b$$25$$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$ = {};
  this.$version_$ = this.$count_$ = this.$keys_$.length = 0
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$62$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$62$$) ? (delete this.$map_$[$key$$62$$], this.$count_$--, this.$version_$++, this.$keys_$.length > 2 * this.$count_$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$$63$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$63$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$63$$);
      $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      $key$$63$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$$2$$, $key$$63$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$63$$, $seen$$2$$[$key$$63$$] = 1), $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
}
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$64$$, $opt_val$$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$64$$) ? this.$map_$[$key$$64$$] : $opt_val$$1$$
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$65$$, $value$$78$$) {
  $goog$structs$Map$hasKey_$$(this.$map_$, $key$$65$$) || (this.$count_$++, this.$keys_$.push($key$$65$$), this.$version_$++);
  this.$map_$[$key$$65$$] = $value$$78$$
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($map$$7_values$$10$$) {
  var $keys$$6$$;
  $map$$7_values$$10$$ instanceof $goog$structs$Map$$ ? ($keys$$6$$ = $map$$7_values$$10$$.$getKeys$(), $map$$7_values$$10$$ = $map$$7_values$$10$$.$getValues$()) : ($keys$$6$$ = $goog$object$getKeys$$($map$$7_values$$10$$), $map$$7_values$$10$$ = $goog$object$getValues$$($map$$7_values$$10$$));
  for(var $i$$95$$ = 0;$i$$95$$ < $keys$$6$$.length;$i$$95$$++) {
    this.set($keys$$6$$[$i$$95$$], $map$$7_values$$10$$[$i$$95$$])
  }
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$structs$Map$$(this)
};
function $goog$structs$Map$hasKey_$$($obj$$92$$, $key$$69$$) {
  return Object.prototype.hasOwnProperty.call($obj$$92$$, $key$$69$$)
}
;
// Input 41
function $goog$dom$forms$getFormDataString$$($form$$1$$) {
  for(var $sb$$2$$ = [], $fnAppend$$inline_204$$ = $goog$dom$forms$addFormDataToStringBuffer_$$, $els$$inline_205_inputs$$inline_212$$ = $form$$1$$.elements, $el$$inline_206_input$$inline_213_values$$inline_209$$, $i$$inline_207$$ = 0;$el$$inline_206_input$$inline_213_values$$inline_209$$ = $els$$inline_205_inputs$$inline_212$$[$i$$inline_207$$];$i$$inline_207$$++) {
    if(!($el$$inline_206_input$$inline_213_values$$inline_209$$.form != $form$$1$$ || $el$$inline_206_input$$inline_213_values$$inline_209$$.disabled || "fieldset" == $el$$inline_206_input$$inline_213_values$$inline_209$$.tagName.toLowerCase())) {
      var $name$$inline_208$$ = $el$$inline_206_input$$inline_213_values$$inline_209$$.name;
      switch($el$$inline_206_input$$inline_213_values$$inline_209$$.type.toLowerCase()) {
        case "file":
        ;
        case "submit":
        ;
        case "reset":
        ;
        case "button":
          break;
        case "select-multiple":
          $el$$inline_206_input$$inline_213_values$$inline_209$$ = $goog$dom$forms$getValue$$($el$$inline_206_input$$inline_213_values$$inline_209$$);
          if($el$$inline_206_input$$inline_213_values$$inline_209$$ != $JSCompiler_alias_NULL$$) {
            for(var $value$$inline_210$$, $j$$inline_211$$ = 0;$value$$inline_210$$ = $el$$inline_206_input$$inline_213_values$$inline_209$$[$j$$inline_211$$];$j$$inline_211$$++) {
              $fnAppend$$inline_204$$($sb$$2$$, $name$$inline_208$$, $value$$inline_210$$)
            }
          }
          break;
        default:
          $value$$inline_210$$ = $goog$dom$forms$getValue$$($el$$inline_206_input$$inline_213_values$$inline_209$$), $value$$inline_210$$ != $JSCompiler_alias_NULL$$ && $fnAppend$$inline_204$$($sb$$2$$, $name$$inline_208$$, $value$$inline_210$$)
      }
    }
  }
  $els$$inline_205_inputs$$inline_212$$ = $form$$1$$.getElementsByTagName("input");
  for($i$$inline_207$$ = 0;$el$$inline_206_input$$inline_213_values$$inline_209$$ = $els$$inline_205_inputs$$inline_212$$[$i$$inline_207$$];$i$$inline_207$$++) {
    $el$$inline_206_input$$inline_213_values$$inline_209$$.form == $form$$1$$ && "image" == $el$$inline_206_input$$inline_213_values$$inline_209$$.type.toLowerCase() && ($name$$inline_208$$ = $el$$inline_206_input$$inline_213_values$$inline_209$$.name, $fnAppend$$inline_204$$($sb$$2$$, $name$$inline_208$$, $el$$inline_206_input$$inline_213_values$$inline_209$$.value), $fnAppend$$inline_204$$($sb$$2$$, $name$$inline_208$$ + ".x", "0"), $fnAppend$$inline_204$$($sb$$2$$, $name$$inline_208$$ + ".y", 
    "0"))
  }
  return $sb$$2$$.join("&")
}
function $goog$dom$forms$addFormDataToStringBuffer_$$($sb$$3$$, $name$$72$$, $value$$82$$) {
  $sb$$3$$.push(encodeURIComponent($name$$72$$) + "=" + encodeURIComponent($value$$82$$))
}
function $goog$dom$forms$getValue$$($el$$35$$) {
  var $selectedIndex$$inline_216_type$$91_values$$inline_219$$ = $el$$35$$.type;
  if(!$goog$isDef$$($selectedIndex$$inline_216_type$$91_values$$inline_219$$)) {
    return $JSCompiler_alias_NULL$$
  }
  switch($selectedIndex$$inline_216_type$$91_values$$inline_219$$.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return $el$$35$$.checked ? $el$$35$$.value : $JSCompiler_alias_NULL$$;
    case "select-one":
      return $selectedIndex$$inline_216_type$$91_values$$inline_219$$ = $el$$35$$.selectedIndex, 0 <= $selectedIndex$$inline_216_type$$91_values$$inline_219$$ ? $el$$35$$.options[$selectedIndex$$inline_216_type$$91_values$$inline_219$$].value : $JSCompiler_alias_NULL$$;
    case "select-multiple":
      for(var $selectedIndex$$inline_216_type$$91_values$$inline_219$$ = [], $option$$inline_220$$, $i$$inline_221$$ = 0;$option$$inline_220$$ = $el$$35$$.options[$i$$inline_221$$];$i$$inline_221$$++) {
        $option$$inline_220$$.selected && $selectedIndex$$inline_216_type$$91_values$$inline_219$$.push($option$$inline_220$$.value)
      }
      return $selectedIndex$$inline_216_type$$91_values$$inline_219$$.length ? $selectedIndex$$inline_216_type$$91_values$$inline_219$$ : $JSCompiler_alias_NULL$$;
    default:
      return $goog$isDef$$($el$$35$$.value) ? $el$$35$$.value : $JSCompiler_alias_NULL$$
  }
}
function $goog$dom$forms$setValue$$($el$$39$$, $opt_value$$7$$) {
  var $opt_value$$inline_232_option$$inline_228_type$$92$$ = $el$$39$$.type;
  if($goog$isDef$$($opt_value$$inline_232_option$$inline_228_type$$92$$)) {
    switch($opt_value$$inline_232_option$$inline_228_type$$92$$.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        $el$$39$$.checked = $opt_value$$7$$ ? "checked" : $JSCompiler_alias_NULL$$;
        break;
      case "select-one":
        $el$$39$$.selectedIndex = -1;
        if($goog$isString$$($opt_value$$7$$)) {
          for(var $i$$inline_229_option$$inline_233$$ = 0;$opt_value$$inline_232_option$$inline_228_type$$92$$ = $el$$39$$.options[$i$$inline_229_option$$inline_233$$];$i$$inline_229_option$$inline_233$$++) {
            if($opt_value$$inline_232_option$$inline_228_type$$92$$.value == $opt_value$$7$$) {
              $opt_value$$inline_232_option$$inline_228_type$$92$$.selected = $JSCompiler_alias_TRUE$$;
              break
            }
          }
        }
        break;
      case "select-multiple":
        $opt_value$$inline_232_option$$inline_228_type$$92$$ = $opt_value$$7$$;
        $goog$isString$$($opt_value$$inline_232_option$$inline_228_type$$92$$) && ($opt_value$$inline_232_option$$inline_228_type$$92$$ = [$opt_value$$inline_232_option$$inline_228_type$$92$$]);
        for(var $i$$inline_234$$ = 0;$i$$inline_229_option$$inline_233$$ = $el$$39$$.options[$i$$inline_234$$];$i$$inline_234$$++) {
          if($i$$inline_229_option$$inline_233$$.selected = $JSCompiler_alias_FALSE$$, $opt_value$$inline_232_option$$inline_228_type$$92$$) {
            for(var $value$$inline_235$$, $j$$inline_236$$ = 0;$value$$inline_235$$ = $opt_value$$inline_232_option$$inline_228_type$$92$$[$j$$inline_236$$];$j$$inline_236$$++) {
              $i$$inline_229_option$$inline_233$$.value == $value$$inline_235$$ && ($i$$inline_229_option$$inline_233$$.selected = $JSCompiler_alias_TRUE$$)
            }
          }
        }
        break;
      default:
        $el$$39$$.value = $opt_value$$7$$ != $JSCompiler_alias_NULL$$ ? $opt_value$$7$$ : ""
    }
  }
}
;
// Input 42
function $uniform$InputFilters$$() {
  this.$InputFilters_$ = new $goog$structs$Map$$;
  this.$InputFilters_$.set("number", [this.$filterNumber_$, 0]);
  this.$InputFilters_$.set("positive_number", [this.$filterPositiveNumber_$, 0]);
  this.$InputFilters_$.set("integer", [this.$filterInteger_$, 0]);
  this.$InputFilters_$.set("non_space", [this.$filterNonSpace_$, 0])
}
$goog$addSingletonGetter$$($uniform$InputFilters$$);
$JSCompiler_prototypeAlias$$ = $uniform$InputFilters$$.prototype;
$JSCompiler_prototypeAlias$$.$InputFilters_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.filter = function $$JSCompiler_prototypeAlias$$$filter$($e$$28$$) {
  for(var $InputFilterAttribute_elClassesArray$$ = $e$$28$$.target.getAttribute("data-uniform-filters"), $InputFilterAttribute_elClassesArray$$ = $InputFilterAttribute_elClassesArray$$ && "function" == typeof $InputFilterAttribute_elClassesArray$$.split ? $InputFilterAttribute_elClassesArray$$.split(/\s+/) : [], $i$$106$$ = 0;$i$$106$$ < $InputFilterAttribute_elClassesArray$$.length;++$i$$106$$) {
    var $InputFilterRecord_params$$4$$ = this.$InputFilters_$.get($InputFilterAttribute_elClassesArray$$[$i$$106$$], [$goog$nullFunction$$, 0]), $InputFilterFn$$1$$ = $InputFilterRecord_params$$4$$[0], $number_of_parameters$$ = 0;
    $InputFilterRecord_params$$4$$[1] != $JSCompiler_alias_NULL$$ && ($number_of_parameters$$ = $InputFilterRecord_params$$4$$[1]);
    $InputFilterRecord_params$$4$$ = [];
    if($number_of_parameters$$) {
      for(var $j$$9$$ = 1 + $i$$106$$, $k$$ = 0;$j$$9$$ <= $InputFilterAttribute_elClassesArray$$.length && $k$$ < $number_of_parameters$$;++$k$$, ++$j$$9$$, ++$i$$106$$) {
        $InputFilterRecord_params$$4$$.push($InputFilterAttribute_elClassesArray$$[$j$$9$$])
      }
      if($InputFilterRecord_params$$4$$.length < $number_of_parameters$$) {
        continue
      }
    }
    if($goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$28$$)) {
      switch($e$$28$$.keyCode) {
        case $goog$events$KeyCodes$NUM_CENTER$$:
        ;
        case $goog$events$KeyCodes$MAC_ENTER$$:
        ;
        case $goog$events$KeyCodes$ENTER$$:
        ;
        case $goog$events$KeyCodes$$.$NUMPAD_ENTER$:
        ;
        case $goog$events$KeyCodes$DELETE$$:
        ;
        case $goog$events$KeyCodes$BACKSPACE$$:
        ;
        case $goog$events$KeyCodes$TAB$$:
          return;
        default:
          $InputFilterFn$$1$$($e$$28$$, $InputFilterRecord_params$$4$$)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$filterNumber_$ = function $$JSCompiler_prototypeAlias$$$$filterNumber_$$($e$$29$$) {
  var $inputEl$$ = $e$$29$$.target, $inputValue$$ = $goog$dom$forms$getValue$$($inputEl$$);
  if(!$e$$29$$.ctrlKey) {
    if(!$e$$29$$.shiftKey && $e$$29$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$29$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$29$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$29$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$) {
      0 == $inputEl$$.selectionStart && (0 == $inputEl$$.selectionEnd && 0 <= $inputValue$$.indexOf("-")) && $e$$29$$.preventDefault()
    }else {
      switch($e$$29$$.keyCode) {
        case $goog$events$KeyCodes$DASH$$:
        ;
        case $goog$events$KeyCodes$NUM_MINUS$$:
          if(0 == $inputEl$$.selectionStart && 0 > $inputValue$$.indexOf("-")) {
            return
          }
          break;
        case $goog$events$KeyCodes$NUM_PERIOD$$:
        ;
        case $goog$events$KeyCodes$PERIOD$$:
          if("." == $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$ && 0 > $inputValue$$.indexOf(".")) {
            return
          }
          break;
        case $goog$events$KeyCodes$COMMA$$:
        ;
        case 108:
          if("," == $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$ && 0 > $inputValue$$.indexOf(",")) {
            return
          }
          break;
        case $goog$events$KeyCodes$E$$:
          if(0 <= $inputValue$$.indexOf("e") || 0 <= $inputValue$$.indexOf("E")) {
            break
          }
          return
      }
      $e$$29$$.preventDefault()
    }
  }
};
$JSCompiler_prototypeAlias$$.$filterPositiveNumber_$ = function $$JSCompiler_prototypeAlias$$$$filterPositiveNumber_$$($e$$30$$) {
  var $inputValue$$1$$ = $goog$dom$forms$getValue$$($e$$30$$.target);
  if(!$e$$30$$.ctrlKey && !(!$e$$30$$.shiftKey && $e$$30$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$30$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$30$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$30$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$)) {
    switch($e$$30$$.keyCode) {
      case $goog$events$KeyCodes$NUM_PERIOD$$:
      ;
      case $goog$events$KeyCodes$PERIOD$$:
        if("." == $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$ && 0 > $inputValue$$1$$.indexOf(".")) {
          return
        }
        break;
      case $goog$events$KeyCodes$COMMA$$:
      ;
      case 108:
        if("," == $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$ && 0 > $inputValue$$1$$.indexOf(",")) {
          return
        }
        break;
      case $goog$events$KeyCodes$E$$:
        if(0 <= $inputValue$$1$$.indexOf("e") || 0 <= $inputValue$$1$$.indexOf("E")) {
          break
        }
        return
    }
    $e$$30$$.preventDefault()
  }
};
$JSCompiler_prototypeAlias$$.$filterInteger_$ = function $$JSCompiler_prototypeAlias$$$$filterInteger_$$($e$$31$$) {
  var $inputEl$$2$$ = $e$$31$$.target, $inputValue$$2$$ = $goog$dom$forms$getValue$$($inputEl$$2$$);
  $e$$31$$.ctrlKey || (!$e$$31$$.shiftKey && $e$$31$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$31$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$31$$.keyCode == $goog$events$KeyCodes$DASH$$ || $e$$31$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$31$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$ ? 0 == $inputEl$$2$$.selectionStart && (0 == $inputEl$$2$$.selectionEnd && 0 <= $inputValue$$2$$.indexOf("-")) && $e$$31$$.preventDefault() : (console.log("blocked keyCode:" + $e$$31$$.keyCode), 
  $e$$31$$.preventDefault()))
};
$JSCompiler_prototypeAlias$$.$filterNonSpace_$ = function $$JSCompiler_prototypeAlias$$$$filterNonSpace_$$($e$$32$$) {
  $e$$32$$.keyCode == $goog$events$KeyCodes$SPACE$$ && $e$$32$$.preventDefault()
};
// Input 43
function $uniform$util$interpretToken$$($inputValue$$3_token$$4$$) {
  var $result$$10$$ = $inputValue$$3_token$$4$$ + " ";
  $goog$dom$getElement$$($inputValue$$3_token$$4$$) != $JSCompiler_alias_NULL$$ ? ($inputValue$$3_token$$4$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($inputValue$$3_token$$4$$)), $result$$10$$ = $inputValue$$3_token$$4$$ != $JSCompiler_alias_NULL$$ ? "'" + $inputValue$$3_token$$4$$ + "' " : "null ") : "and" == $inputValue$$3_token$$4$$ ? $result$$10$$ = " && " : "or" == $inputValue$$3_token$$4$$ && ($result$$10$$ = " || ");
  return $result$$10$$
}
function $uniform$util$compileMetaTags$$($metaInfo$$, $metaMap$$) {
  var $result$$11$$ = [];
  if($metaInfo$$ == $JSCompiler_alias_NULL$$) {
    return $result$$11$$
  }
  $goog$array$forEach$$($metaInfo$$.split(";"), function($cmdArray_commandLine$$) {
    $cmdArray_commandLine$$ = $goog$string$trim$$($cmdArray_commandLine$$).split(/\s+/);
    var $commandFunction$$ = $metaMap$$.get($cmdArray_commandLine$$[0], $goog$nullFunction$$);
    if($commandFunction$$ !== $goog$nullFunction$$) {
      for(var $parserState$$ = 0, $conditionStatement$$ = "", $parametersStatement$$ = "", $x$$63$$ = 1;$x$$63$$ < $cmdArray_commandLine$$.length;++$x$$63$$) {
        var $token$$5$$ = $cmdArray_commandLine$$[$x$$63$$];
        if(0 === $parserState$$) {
          if("If" === $token$$5$$) {
            $parserState$$ = 1;
            continue
          }else {
            $parserState$$ = 2
          }
        }
        1 === $parserState$$ && "then" === $token$$5$$ ? $parserState$$ = 2 : 1 === $parserState$$ ? $conditionStatement$$ += $uniform$util$interpretToken$$($token$$5$$) : $parametersStatement$$ += $uniform$util$interpretToken$$($token$$5$$)
      }
      $result$$11$$.push([$commandFunction$$, $conditionStatement$$, $parametersStatement$$])
    }
  });
  return $result$$11$$
}
function $uniform$util$executeElementMetaTags$$($el$$43$$, $metaInfo$$1_metaTag$$, $compiledMetaTags_metaMap$$1$$, $extraInfo$$) {
  $metaInfo$$1_metaTag$$ = $el$$43$$.getAttribute($metaInfo$$1_metaTag$$);
  $metaInfo$$1_metaTag$$ != $JSCompiler_alias_NULL$$ && ($compiledMetaTags_metaMap$$1$$ = $uniform$util$compileMetaTags$$($metaInfo$$1_metaTag$$, $compiledMetaTags_metaMap$$1$$), $goog$array$forEach$$($compiledMetaTags_metaMap$$1$$, function($compiledMetaTag$$) {
    $compiledMetaTag$$[0]($el$$43$$, $compiledMetaTag$$[1], $compiledMetaTag$$[2], $extraInfo$$)
  }))
}
function $uniform$util$executeFormMetaTags$$($formElement$$, $metaMap$$2$$) {
  for(var $els$$5$$ = $formElement$$.getElementsByTagName("*"), $el$$44$$, $i$$107$$ = 0;$el$$44$$ = $els$$5$$[$i$$107$$];$i$$107$$++) {
    $uniform$util$executeElementMetaTags$$($el$$44$$, "data-uniform-meta", $metaMap$$2$$, $JSCompiler_alias_VOID$$)
  }
}
;
// Input 44
function $uniform$Meta$$() {
  this.$metaMap_$ = new $goog$structs$Map$$;
  this.$metaMap_$.set("display", this.$display_$);
  this.$metaMap_$.set("enable", this.$enable_$);
  this.$metaMap_$.set("disable", this.$disable_$);
  this.$metaMap_$.set("hide", this.$hide_$);
  this.$metaMap_$.set("assign", this.$assign_$)
}
$goog$addSingletonGetter$$($uniform$Meta$$);
$JSCompiler_prototypeAlias$$ = $uniform$Meta$$.prototype;
$JSCompiler_prototypeAlias$$.$metaMap_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$disable_$ = function $$JSCompiler_prototypeAlias$$$$disable_$$($el$$45$$, $condition$$2$$) {
  eval($condition$$2$$) ? $el$$45$$.disabled = $JSCompiler_alias_TRUE$$ : $el$$45$$.disabled = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$enable_$ = function $$JSCompiler_prototypeAlias$$$$enable_$$($el$$46$$, $condition$$3$$) {
  eval($condition$$3$$) ? $el$$46$$.disabled = $JSCompiler_alias_FALSE$$ : $el$$46$$.disabled = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$display_$ = function $$JSCompiler_prototypeAlias$$$$display_$$($el$$47$$, $condition$$4$$) {
  eval($condition$$4$$) ? $goog$style$showElement$$($el$$47$$, $JSCompiler_alias_TRUE$$) : $goog$style$showElement$$($el$$47$$, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$hide_$ = function $$JSCompiler_prototypeAlias$$$$hide_$$($el$$48$$, $condition$$5$$) {
  eval($condition$$5$$) ? $goog$style$showElement$$($el$$48$$, $JSCompiler_alias_FALSE$$) : $goog$style$showElement$$($el$$48$$, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$assign_$ = function $$JSCompiler_prototypeAlias$$$$assign_$$($el$$49$$, $condition$$6$$, $params$$5$$) {
  eval($condition$$6$$) && $goog$dom$forms$setValue$$($el$$49$$, eval($params$$5$$))
};
// Input 45
function $goog$Timer$$($opt_interval$$, $opt_timerObject$$) {
  $goog$Disposable$$.call(this);
  this.$interval_$ = $opt_interval$$ || 1;
  this.$timerObject_$ = $opt_timerObject$$ || $goog$Timer$defaultTimerObject$$;
  this.$boundTick_$ = $goog$bind$$(this.$tick_$, this);
  this.$last_$ = $goog$now$$()
}
$goog$inherits$$($goog$Timer$$, $goog$events$EventTarget$$);
$goog$Timer$$.prototype.enabled = $JSCompiler_alias_FALSE$$;
var $goog$Timer$defaultTimerObject$$ = $goog$global$$;
$JSCompiler_prototypeAlias$$ = $goog$Timer$$.prototype;
$JSCompiler_prototypeAlias$$.$timer_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$tick_$ = function $$JSCompiler_prototypeAlias$$$$tick_$$() {
  if(this.enabled) {
    var $elapsed$$ = $goog$now$$() - this.$last_$;
    0 < $elapsed$$ && $elapsed$$ < 0.8 * this.$interval_$ ? this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$ - $elapsed$$) : (this.dispatchEvent($goog$Timer$TICK$$), this.enabled && (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$()))
  }
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  this.enabled = $JSCompiler_alias_TRUE$$;
  this.$timer_$ || (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$())
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  this.enabled = $JSCompiler_alias_FALSE$$;
  this.$timer_$ && (this.$timerObject_$.clearTimeout(this.$timer_$), this.$timer_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$Timer$$.$superClass_$.$disposeInternal$.call(this);
  this.stop();
  delete this.$timerObject_$
};
var $goog$Timer$TICK$$ = "tick";
function $goog$Timer$callOnce$$($listener$$60$$, $opt_delay$$, $opt_handler$$14$$) {
  $goog$isFunction$$($listener$$60$$) ? $opt_handler$$14$$ && ($listener$$60$$ = $goog$bind$$($listener$$60$$, $opt_handler$$14$$)) : $listener$$60$$ && "function" == typeof $listener$$60$$.handleEvent ? $listener$$60$$ = $goog$bind$$($listener$$60$$.handleEvent, $listener$$60$$) : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  return 2147483647 < $opt_delay$$ ? -1 : $goog$Timer$defaultTimerObject$$.setTimeout($listener$$60$$, $opt_delay$$ || 0)
}
;
// Input 46
// Input 47
// Input 48
function $goog$a11y$aria$setState$$($element$$79$$, $state$$1$$, $value$$86$$) {
  $element$$79$$.setAttribute("aria-" + $state$$1$$, $value$$86$$)
}
;
// Input 49
var $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ = "undefined" != typeof DOMTokenList, $goog$dom$classlist$get$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$85$$) {
  return $element$$85$$.classList
} : function($className$$19_element$$86$$) {
  $className$$19_element$$86$$ = $className$$19_element$$86$$.className;
  return $goog$isString$$($className$$19_element$$86$$) && $className$$19_element$$86$$.match(/\S+/g) || []
}, $goog$dom$classlist$contains$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$88$$, $className$$21$$) {
  return $element$$88$$.classList.contains($className$$21$$)
} : function($element$$89$$, $className$$22$$) {
  return $goog$array$contains$$($goog$dom$classlist$get$$($element$$89$$), $className$$22$$)
}, $goog$dom$classlist$add$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$90$$, $className$$23$$) {
  $element$$90$$.classList.add($className$$23$$)
} : function($element$$91$$, $className$$24$$) {
  $goog$dom$classlist$contains$$($element$$91$$, $className$$24$$) || ($element$$91$$.className += 0 < $element$$91$$.className.length ? " " + $className$$24$$ : $className$$24$$)
}, $goog$dom$classlist$remove$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$94$$, $className$$29$$) {
  $element$$94$$.classList.remove($className$$29$$)
} : function($element$$95$$, $className$$30$$) {
  $goog$dom$classlist$contains$$($element$$95$$, $className$$30$$) && ($element$$95$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$95$$), function($c$$1$$) {
    return $c$$1$$ != $className$$30$$
  }).join(" "))
};
// Input 50
function $goog$ui$LabelInput$$($opt_label$$1$$, $opt_domHelper$$3$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$3$$);
  this.$label_$ = $opt_label$$1$$ || ""
}
$goog$inherits$$($goog$ui$LabelInput$$, $goog$ui$Component$$);
$goog$ui$LabelInput$$.prototype.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$;
var $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ = "placeholder" in document.createElement("input");
$JSCompiler_prototypeAlias$$ = $goog$ui$LabelInput$$.prototype;
$JSCompiler_prototypeAlias$$.$hasFocus_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$getDomHelper$().$createDom$("input", {type:"text"})
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$102$$) {
  $goog$ui$LabelInput$$.$superClass_$.$decorateInternal$.call(this, $element$$102$$);
  this.$label_$ || (this.$label_$ = $element$$102$$.getAttribute("label") || "");
  var $JSCompiler_inline_result$$86$$;
  a: {
    var $doc$$inline_260$$ = $goog$dom$getOwnerDocument$$($element$$102$$);
    try {
      $JSCompiler_inline_result$$86$$ = $doc$$inline_260$$ && $doc$$inline_260$$.activeElement;
      break a
    }catch($e$$inline_261$$) {
    }
    $JSCompiler_inline_result$$86$$ = $JSCompiler_alias_NULL$$
  }
  $JSCompiler_inline_result$$86$$ == $element$$102$$ && (this.$hasFocus_$ = $JSCompiler_alias_TRUE$$, $goog$dom$classlist$remove$$(this.$getElement$(), this.$LABEL_CLASS_NAME$));
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? this.$getElement$().placeholder = this.$label_$ : $goog$a11y$aria$setState$$(this.$getElement$(), "label", this.$label_$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$LabelInput$$.$superClass_$.$enterDocument$.call(this);
  var $eh$$inline_264$$ = new $goog$events$EventHandler$$(this);
  $JSCompiler_StaticMethods_listen$$($eh$$inline_264$$, this.$getElement$(), "focus", this.$handleFocus_$);
  $JSCompiler_StaticMethods_listen$$($eh$$inline_264$$, this.$getElement$(), "blur", this.$handleBlur_$);
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? this.$eventHandler_$ = $eh$$inline_264$$ : ($goog$userAgent$GECKO$$ && $JSCompiler_StaticMethods_listen$$($eh$$inline_264$$, this.$getElement$(), ["keypress", "keydown", "keyup"], this.$handleEscapeKeys_$), $JSCompiler_StaticMethods_listen$$($eh$$inline_264$$, $goog$dom$getOwnerDocument$$(this.$getElement$()) ? $goog$dom$getWindow_$$($goog$dom$getOwnerDocument$$(this.$getElement$())) : window, "load", this.$handleWindowLoad_$), this.$eventHandler_$ = 
  $eh$$inline_264$$, $JSCompiler_StaticMethods_attachEventsToForm_$$(this));
  $JSCompiler_StaticMethods_check_$$(this);
  this.$getElement$().$labelInput_$ = this
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$LabelInput$$.$superClass_$.$exitDocument$.call(this);
  this.$eventHandler_$ && (this.$eventHandler_$.$dispose$(), this.$eventHandler_$ = $JSCompiler_alias_NULL$$);
  this.$getElement$().$labelInput_$ = $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_attachEventsToForm_$$($JSCompiler_StaticMethods_attachEventsToForm_$self$$) {
  !$JSCompiler_StaticMethods_attachEventsToForm_$self$$.$formAttached_$ && ($JSCompiler_StaticMethods_attachEventsToForm_$self$$.$eventHandler_$ && $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$getElement$().form) && ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_attachEventsToForm_$self$$.$eventHandler_$, $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$getElement$().form, "submit", $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$handleFormSubmit_$), $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$formAttached_$ = 
  $JSCompiler_alias_TRUE$$)
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$LabelInput$$.$superClass_$.$disposeInternal$.call(this);
  this.$eventHandler_$ && (this.$eventHandler_$.$dispose$(), this.$eventHandler_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$LABEL_CLASS_NAME$ = "label-input-label";
$JSCompiler_prototypeAlias$$.$handleFocus_$ = function $$JSCompiler_prototypeAlias$$$$handleFocus_$$() {
  this.$hasFocus_$ = $JSCompiler_alias_TRUE$$;
  $goog$dom$classlist$remove$$(this.$getElement$(), this.$LABEL_CLASS_NAME$);
  if(!$goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ && !$JSCompiler_StaticMethods_hasChanged$$(this) && !this.$inFocusAndSelect_$) {
    var $me$$1$$ = this, $clearValue$$ = function $$clearValue$$$() {
      $me$$1$$.$getElement$() && ($me$$1$$.$getElement$().value = "")
    };
    $goog$userAgent$IE$$ ? $goog$Timer$callOnce$$($clearValue$$, 10) : $clearValue$$()
  }
};
$JSCompiler_prototypeAlias$$.$handleBlur_$ = function $$JSCompiler_prototypeAlias$$$$handleBlur_$$() {
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ || ($JSCompiler_StaticMethods_unlisten$$(this.$eventHandler_$, this.$getElement$(), "click", this.$handleFocus_$), this.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$);
  this.$hasFocus_$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_check_$$(this)
};
$JSCompiler_prototypeAlias$$.$handleEscapeKeys_$ = function $$JSCompiler_prototypeAlias$$$$handleEscapeKeys_$$($e$$35$$) {
  27 == $e$$35$$.keyCode && ("keydown" == $e$$35$$.type ? this.$ffKeyRestoreValue_$ = this.$getElement$().value : "keypress" == $e$$35$$.type ? this.$getElement$().value = this.$ffKeyRestoreValue_$ : "keyup" == $e$$35$$.type && (this.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$), $e$$35$$.preventDefault())
};
$JSCompiler_prototypeAlias$$.$handleFormSubmit_$ = function $$JSCompiler_prototypeAlias$$$$handleFormSubmit_$$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) || (this.$getElement$().value = "", $goog$Timer$callOnce$$(this.$handleAfterSubmit_$, 10, this))
};
$JSCompiler_prototypeAlias$$.$handleAfterSubmit_$ = function $$JSCompiler_prototypeAlias$$$$handleAfterSubmit_$$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) || (this.$getElement$().value = this.$label_$)
};
$JSCompiler_prototypeAlias$$.$handleWindowLoad_$ = function $$JSCompiler_prototypeAlias$$$$handleWindowLoad_$$() {
  $JSCompiler_StaticMethods_check_$$(this)
};
function $JSCompiler_StaticMethods_hasChanged$$($JSCompiler_StaticMethods_hasChanged$self$$) {
  return!!$JSCompiler_StaticMethods_hasChanged$self$$.$getElement$() && "" != $JSCompiler_StaticMethods_hasChanged$self$$.$getElement$().value && $JSCompiler_StaticMethods_hasChanged$self$$.$getElement$().value != $JSCompiler_StaticMethods_hasChanged$self$$.$label_$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$getElement$().value = "";
  this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ && (this.$ffKeyRestoreValue_$ = "")
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) && (this.clear(), $JSCompiler_StaticMethods_check_$$(this))
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($s$$17$$) {
  this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ && (this.$ffKeyRestoreValue_$ = $s$$17$$);
  this.$getElement$().value = $s$$17$$;
  $JSCompiler_StaticMethods_check_$$(this)
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$() {
  return this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ ? this.$ffKeyRestoreValue_$ : $JSCompiler_StaticMethods_hasChanged$$(this) ? this.$getElement$().value : ""
};
function $JSCompiler_StaticMethods_check_$$($JSCompiler_StaticMethods_check_$self$$) {
  var $el$$52_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$();
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? $JSCompiler_StaticMethods_check_$self$$.$getElement$().placeholder != $JSCompiler_StaticMethods_check_$self$$.$label_$ && ($JSCompiler_StaticMethods_check_$self$$.$getElement$().placeholder = $JSCompiler_StaticMethods_check_$self$$.$label_$) : ($JSCompiler_StaticMethods_attachEventsToForm_$$($JSCompiler_StaticMethods_check_$self$$), $goog$a11y$aria$setState$$($el$$52_labelInputElement$$2$$, "label", $JSCompiler_StaticMethods_check_$self$$.$label_$));
  $JSCompiler_StaticMethods_hasChanged$$($JSCompiler_StaticMethods_check_$self$$) ? ($el$$52_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$(), $goog$dom$classlist$remove$$($el$$52_labelInputElement$$2$$, $JSCompiler_StaticMethods_check_$self$$.$LABEL_CLASS_NAME$)) : (!$JSCompiler_StaticMethods_check_$self$$.$inFocusAndSelect_$ && !$JSCompiler_StaticMethods_check_$self$$.$hasFocus_$ && ($el$$52_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$(), 
  $goog$dom$classlist$add$$($el$$52_labelInputElement$$2$$, $JSCompiler_StaticMethods_check_$self$$.$LABEL_CLASS_NAME$)), $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ || $goog$Timer$callOnce$$($JSCompiler_StaticMethods_check_$self$$.$restoreLabel_$, 10, $JSCompiler_StaticMethods_check_$self$$))
}
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$2$$) {
  this.$getElement$().disabled = !$enabled$$2$$;
  var $el$$53$$ = this.$getElement$(), $className$$inline_271$$ = this.$LABEL_CLASS_NAME$ + "-disabled";
  !$enabled$$2$$ ? $goog$dom$classlist$add$$($el$$53$$, $className$$inline_271$$) : $goog$dom$classlist$remove$$($el$$53$$, $className$$inline_271$$)
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!this.$getElement$().disabled
};
$JSCompiler_prototypeAlias$$.$restoreLabel_$ = function $$JSCompiler_prototypeAlias$$$$restoreLabel_$$() {
  this.$getElement$() && (!$JSCompiler_StaticMethods_hasChanged$$(this) && !this.$hasFocus_$) && (this.$getElement$().value = this.$label_$)
};
// Input 51
var $goog$events$KeyCodes$MAC_ENTER$$ = 3, $goog$events$KeyCodes$BACKSPACE$$ = 8, $goog$events$KeyCodes$TAB$$ = 9, $goog$events$KeyCodes$NUM_CENTER$$ = 12, $goog$events$KeyCodes$ENTER$$ = 13, $goog$events$KeyCodes$SPACE$$ = 32, $goog$events$KeyCodes$DELETE$$ = 46, $goog$events$KeyCodes$ZERO$$ = 48, $goog$events$KeyCodes$NINE$$ = 57, $goog$events$KeyCodes$E$$ = 69, $goog$events$KeyCodes$NUM_ZERO$$ = 96, $goog$events$KeyCodes$NUM_NINE$$ = 105, $goog$events$KeyCodes$NUM_MINUS$$ = 109, $goog$events$KeyCodes$NUM_PERIOD$$ = 
110, $goog$events$KeyCodes$DASH$$ = 189, $goog$events$KeyCodes$COMMA$$ = 188, $goog$events$KeyCodes$PERIOD$$ = 190, $goog$events$KeyCodes$$ = {};
function $goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$39$$) {
  if($e$$39$$.altKey && !$e$$39$$.ctrlKey || $e$$39$$.metaKey || 112 <= $e$$39$$.keyCode && 123 >= $e$$39$$.keyCode) {
    return $JSCompiler_alias_FALSE$$
  }
  switch($e$$39$$.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case $goog$events$KeyCodes$NUM_CENTER$$:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return $JSCompiler_alias_FALSE$$;
    case 0:
      return!$goog$userAgent$GECKO$$;
    default:
      return 166 > $e$$39$$.keyCode || 183 < $e$$39$$.keyCode
  }
}
function $goog$events$KeyCodes$firesKeyPressEvent$$($keyCode$$, $opt_heldKeyCode$$, $opt_shiftKey$$, $opt_ctrlKey$$, $opt_altKey$$) {
  if(!$goog$userAgent$IE$$ && (!$goog$userAgent$WEBKIT$$ || !$goog$userAgent$isVersion$$("525"))) {
    return $JSCompiler_alias_TRUE$$
  }
  if($goog$userAgent$detectedMac_$$ && $opt_altKey$$) {
    return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
  }
  if($opt_altKey$$ && !$opt_ctrlKey$$ || !$opt_shiftKey$$ && (17 == $opt_heldKeyCode$$ || 18 == $opt_heldKeyCode$$ || $goog$userAgent$detectedMac_$$ && 91 == $opt_heldKeyCode$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  if($goog$userAgent$WEBKIT$$ && $opt_ctrlKey$$ && $opt_shiftKey$$) {
    switch($keyCode$$) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case $goog$events$KeyCodes$DASH$$:
      ;
      case 187:
      ;
      case $goog$events$KeyCodes$COMMA$$:
      ;
      case $goog$events$KeyCodes$PERIOD$$:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return $JSCompiler_alias_FALSE$$
    }
  }
  if($goog$userAgent$IE$$ && $opt_ctrlKey$$ && $opt_heldKeyCode$$ == $keyCode$$) {
    return $JSCompiler_alias_FALSE$$
  }
  switch($keyCode$$) {
    case $goog$events$KeyCodes$ENTER$$:
      return!($goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$);
    case 27:
      return!$goog$userAgent$WEBKIT$$
  }
  return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
}
function $goog$events$KeyCodes$isCharacterKey$$($keyCode$$1$$) {
  if($keyCode$$1$$ >= $goog$events$KeyCodes$ZERO$$ && $keyCode$$1$$ <= $goog$events$KeyCodes$NINE$$ || $keyCode$$1$$ >= $goog$events$KeyCodes$NUM_ZERO$$ && 106 >= $keyCode$$1$$ || 65 <= $keyCode$$1$$ && 90 >= $keyCode$$1$$ || $goog$userAgent$WEBKIT$$ && 0 == $keyCode$$1$$) {
    return $JSCompiler_alias_TRUE$$
  }
  switch($keyCode$$1$$) {
    case $goog$events$KeyCodes$SPACE$$:
    ;
    case 63:
    ;
    case 107:
    ;
    case $goog$events$KeyCodes$NUM_MINUS$$:
    ;
    case $goog$events$KeyCodes$NUM_PERIOD$$:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case $goog$events$KeyCodes$DASH$$:
    ;
    case 187:
    ;
    case 61:
    ;
    case $goog$events$KeyCodes$COMMA$$:
    ;
    case $goog$events$KeyCodes$PERIOD$$:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return $JSCompiler_alias_TRUE$$;
    default:
      return $JSCompiler_alias_FALSE$$
  }
}
function $goog$events$KeyCodes$normalizeGeckoKeyCode$$($keyCode$$2$$) {
  switch($keyCode$$2$$) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return $keyCode$$2$$
  }
}
;
// Input 52
function $goog$events$InputHandler$$($element$$103_emulateInputEvents$$) {
  $goog$Disposable$$.call(this);
  this.$element_$ = $element$$103_emulateInputEvents$$;
  $element$$103_emulateInputEvents$$ = $goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && !$goog$userAgent$isVersion$$("531") && "TEXTAREA" == $element$$103_emulateInputEvents$$.tagName;
  this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
  $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, this.$element_$, $element$$103_emulateInputEvents$$ ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
}
$goog$inherits$$($goog$events$InputHandler$$, $goog$events$EventTarget$$);
$goog$events$InputHandler$$.prototype.$timer_$ = $JSCompiler_alias_NULL$$;
$goog$events$InputHandler$$.prototype.handleEvent = function $$goog$events$InputHandler$$$$handleEvent$($e$$40$$) {
  if("input" == $e$$40$$.type) {
    $JSCompiler_StaticMethods_cancelTimerIfSet_$$(this), (!$goog$userAgent$OPERA$$ || this.$element_$ == $goog$dom$getOwnerDocument$$(this.$element_$).activeElement) && this.dispatchEvent($JSCompiler_StaticMethods_createInputEvent_$$($e$$40$$))
  }else {
    if("keydown" != $e$$40$$.type || $goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$40$$)) {
      var $valueBeforeKey$$ = "keydown" == $e$$40$$.type ? this.$element_$.value : $JSCompiler_alias_NULL$$;
      $goog$userAgent$IE$$ && 229 == $e$$40$$.keyCode && ($valueBeforeKey$$ = $JSCompiler_alias_NULL$$);
      var $inputEvent$$ = $JSCompiler_StaticMethods_createInputEvent_$$($e$$40$$);
      $JSCompiler_StaticMethods_cancelTimerIfSet_$$(this);
      this.$timer_$ = $goog$Timer$callOnce$$(function() {
        this.$timer_$ = $JSCompiler_alias_NULL$$;
        this.$element_$.value != $valueBeforeKey$$ && this.dispatchEvent($inputEvent$$)
      }, 0, this)
    }
  }
};
function $JSCompiler_StaticMethods_cancelTimerIfSet_$$($JSCompiler_StaticMethods_cancelTimerIfSet_$self$$) {
  $JSCompiler_StaticMethods_cancelTimerIfSet_$self$$.$timer_$ != $JSCompiler_alias_NULL$$ && ($goog$Timer$defaultTimerObject$$.clearTimeout($JSCompiler_StaticMethods_cancelTimerIfSet_$self$$.$timer_$), $JSCompiler_StaticMethods_cancelTimerIfSet_$self$$.$timer_$ = $JSCompiler_alias_NULL$$)
}
function $JSCompiler_StaticMethods_createInputEvent_$$($be$$2_e$$41$$) {
  $be$$2_e$$41$$ = new $goog$events$BrowserEvent$$($be$$2_e$$41$$.$event_$);
  $be$$2_e$$41$$.type = "input";
  return $be$$2_e$$41$$
}
$goog$events$InputHandler$$.prototype.$disposeInternal$ = function $$goog$events$InputHandler$$$$$disposeInternal$$() {
  $goog$events$InputHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.$eventHandler_$.$dispose$();
  $JSCompiler_StaticMethods_cancelTimerIfSet_$$(this);
  delete this.$element_$
};
// Input 53
var $goog$i18n$currency$CurrencyInfo$$ = {AED:[2, "dh", "\u062f.\u0625.", "DH"], AUD:[2, "$", "AU$"], BDT:[2, "\u09f3", "Tk"], BRL:[2, "R$", "R$"], CAD:[2, "$", "C$"], CHF:[2, "CHF", "CHF"], CLP:[0, "$", "CL$"], CNY:[2, "\u00a5", "RMB\u00a5"], COP:[0, "$", "COL$"], CRC:[0, "\u20a1", "CR\u20a1"], CZK:[2, "K\u010d", "K\u010d"], DKK:[18, "kr", "kr"], DOP:[2, "$", "RD$"], EGP:[2, "\u00a3", "LE"], EUR:[18, "\u20ac", "\u20ac"], GBP:[2, "\u00a3", "GB\u00a3"], HKD:[2, "$", "HK$"], ILS:[2, "\u20aa", "IL\u20aa"], 
INR:[2, "\u20b9", "Rs"], ISK:[0, "kr", "kr"], JMD:[2, "$", "JA$"], JPY:[0, "\u00a5", "JP\u00a5"], KRW:[0, "\u20a9", "KR\u20a9"], LKR:[2, "Rs", "SLRs"], MNT:[0, "\u20ae", "MN\u20ae"], MXN:[2, "$", "Mex$"], MYR:[2, "RM", "RM"], NOK:[18, "kr", "NOkr"], PAB:[2, "B/.", "B/."], PEN:[2, "S/.", "S/."], PHP:[2, "\u20b1", "Php"], PKR:[0, "Rs", "PKRs."], RUB:[42, "\u0440\u0443\u0431.", "\u0440\u0443\u0431."], SAR:[2, "Rial", "Rial"], SEK:[2, "kr", "kr"], SGD:[2, "$", "S$"], THB:[2, "\u0e3f", "THB"], TRY:[2, 
"TL", "YTL"], TWD:[2, "NT$", "NT$"], USD:[2, "$", "US$"], UYU:[2, "$", "UY$"], VND:[0, "\u20ab", "VN\u20ab"], YER:[0, "Rial", "Rial"], ZAR:[2, "R", "ZAR"]};
// Input 54
function $goog$i18n$NumberFormat$$($JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$, $opt_currency_strParts$$inline_1140$$, $opt_currencyStyle_precision$$inline_1141$$) {
  this.$intlCurrencyCode_$ = $opt_currency_strParts$$inline_1140$$ || $goog$i18n$NumberFormatSymbols$$.$DEF_CURRENCY_CODE$;
  this.$currencyStyle_$ = $opt_currencyStyle_precision$$inline_1141$$ || $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$;
  this.$maximumIntegerDigits_$ = 40;
  this.$minimumIntegerDigits_$ = 1;
  this.$maximumFractionDigits_$ = 3;
  this.$minExponentDigits_$ = this.$minimumFractionDigits_$ = 0;
  this.$useSignForPositiveExponent_$ = $JSCompiler_alias_FALSE$$;
  this.$positiveSuffix_$ = this.$positivePrefix_$ = "";
  this.$negativePrefix_$ = "-";
  this.$negativeSuffix_$ = "";
  this.$multiplier_$ = 1;
  this.$groupingSize_$ = 3;
  this.$useExponentialNotation_$ = this.$decimalSeparatorAlwaysShown_$ = $JSCompiler_alias_FALSE$$;
  if("number" == typeof $JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$) {
    switch($JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$) {
      case 1:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$DECIMAL_PATTERN$);
        break;
      case 2:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$SCIENTIFIC_PATTERN$);
        break;
      case 3:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$PERCENT_PATTERN$);
        break;
      case 4:
        $JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$ = $goog$i18n$NumberFormatSymbols$$.$CURRENCY_PATTERN$;
        $opt_currency_strParts$$inline_1140$$ = ["0"];
        $opt_currencyStyle_precision$$inline_1141$$ = $goog$i18n$currency$CurrencyInfo$$[this.$intlCurrencyCode_$][0] & 7;
        if(0 < $opt_currencyStyle_precision$$inline_1141$$) {
          $opt_currency_strParts$$inline_1140$$.push(".");
          for(var $i$$inline_1142$$ = 0;$i$$inline_1142$$ < $opt_currencyStyle_precision$$inline_1141$$;$i$$inline_1142$$++) {
            $opt_currency_strParts$$inline_1140$$.push("0")
          }
        }
        $JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$ = $JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$.replace(/0.00/g, $opt_currency_strParts$$inline_1140$$.join(""));
        $JSCompiler_StaticMethods_applyPattern_$$(this, $JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$);
        break;
      default:
        $JSCompiler_alias_THROW$$(Error("Unsupported pattern type."))
    }
  }else {
    $JSCompiler_StaticMethods_applyPattern_$$(this, $JSCompiler_inline_result$$1127_pattern$$2_pattern$$inline_1139$$)
  }
}
var $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$ = 0;
function $JSCompiler_StaticMethods_setMinimumFractionDigits$$($JSCompiler_StaticMethods_setMinimumFractionDigits$self$$) {
  2 > $JSCompiler_StaticMethods_setMinimumFractionDigits$self$$.$maximumFractionDigits_$ && $JSCompiler_alias_THROW$$(Error("Min value must be less than max value"));
  $JSCompiler_StaticMethods_setMinimumFractionDigits$self$$.$minimumFractionDigits_$ = 2
}
function $JSCompiler_StaticMethods_setMaximumFractionDigits$$($JSCompiler_StaticMethods_setMaximumFractionDigits$self$$, $max$$1$$) {
  $JSCompiler_StaticMethods_setMaximumFractionDigits$self$$.$minimumFractionDigits_$ > $max$$1$$ && $JSCompiler_alias_THROW$$(Error("Min value must be less than max value"));
  $JSCompiler_StaticMethods_setMaximumFractionDigits$self$$.$maximumFractionDigits_$ = $max$$1$$
}
function $JSCompiler_StaticMethods_applyPattern_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$) {
  $JSCompiler_StaticMethods_applyPattern_$self$$.$pattern_$ = $pattern$$3$$.replace(/ /g, "\u00a0");
  var $pos$$5$$ = [0];
  $JSCompiler_StaticMethods_applyPattern_$self$$.$positivePrefix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$5$$);
  for(var $trunkLen_trunkStart$$ = $pos$$5$$[0], $decimalPos$$inline_281$$ = -1, $digitLeftCount$$inline_282$$ = 0, $n$$inline_288_zeroDigitCount$$inline_283$$ = 0, $digitRightCount$$inline_284_totalDigits$$inline_289$$ = 0, $groupingCount$$inline_285$$ = -1, $len$$inline_286$$ = $pattern$$3$$.length, $loop$$inline_287$$ = $JSCompiler_alias_TRUE$$;$pos$$5$$[0] < $len$$inline_286$$ && $loop$$inline_287$$;$pos$$5$$[0]++) {
    switch($pattern$$3$$.charAt($pos$$5$$[0])) {
      case "#":
        0 < $n$$inline_288_zeroDigitCount$$inline_283$$ ? $digitRightCount$$inline_284_totalDigits$$inline_289$$++ : $digitLeftCount$$inline_282$$++;
        0 <= $groupingCount$$inline_285$$ && 0 > $decimalPos$$inline_281$$ && $groupingCount$$inline_285$$++;
        break;
      case "0":
        0 < $digitRightCount$$inline_284_totalDigits$$inline_289$$ && $JSCompiler_alias_THROW$$(Error('Unexpected "0" in pattern "' + $pattern$$3$$ + '"'));
        $n$$inline_288_zeroDigitCount$$inline_283$$++;
        0 <= $groupingCount$$inline_285$$ && 0 > $decimalPos$$inline_281$$ && $groupingCount$$inline_285$$++;
        break;
      case ",":
        $groupingCount$$inline_285$$ = 0;
        break;
      case ".":
        0 <= $decimalPos$$inline_281$$ && $JSCompiler_alias_THROW$$(Error('Multiple decimal separators in pattern "' + $pattern$$3$$ + '"'));
        $decimalPos$$inline_281$$ = $digitLeftCount$$inline_282$$ + $n$$inline_288_zeroDigitCount$$inline_283$$ + $digitRightCount$$inline_284_totalDigits$$inline_289$$;
        break;
      case "E":
        $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ && $JSCompiler_alias_THROW$$(Error('Multiple exponential symbols in pattern "' + $pattern$$3$$ + '"'));
        $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ = $JSCompiler_alias_TRUE$$;
        $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$ = 0;
        $pos$$5$$[0] + 1 < $len$$inline_286$$ && "+" == $pattern$$3$$.charAt($pos$$5$$[0] + 1) && ($pos$$5$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$useSignForPositiveExponent_$ = $JSCompiler_alias_TRUE$$);
        for(;$pos$$5$$[0] + 1 < $len$$inline_286$$ && "0" == $pattern$$3$$.charAt($pos$$5$$[0] + 1);) {
          $pos$$5$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$++
        }
        (1 > $digitLeftCount$$inline_282$$ + $n$$inline_288_zeroDigitCount$$inline_283$$ || 1 > $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$) && $JSCompiler_alias_THROW$$(Error('Malformed exponential pattern "' + $pattern$$3$$ + '"'));
        $loop$$inline_287$$ = $JSCompiler_alias_FALSE$$;
        break;
      default:
        $pos$$5$$[0]--, $loop$$inline_287$$ = $JSCompiler_alias_FALSE$$
    }
  }
  0 == $n$$inline_288_zeroDigitCount$$inline_283$$ && (0 < $digitLeftCount$$inline_282$$ && 0 <= $decimalPos$$inline_281$$) && ($n$$inline_288_zeroDigitCount$$inline_283$$ = $decimalPos$$inline_281$$, 0 == $n$$inline_288_zeroDigitCount$$inline_283$$ && $n$$inline_288_zeroDigitCount$$inline_283$$++, $digitRightCount$$inline_284_totalDigits$$inline_289$$ = $digitLeftCount$$inline_282$$ - $n$$inline_288_zeroDigitCount$$inline_283$$, $digitLeftCount$$inline_282$$ = $n$$inline_288_zeroDigitCount$$inline_283$$ - 
  1, $n$$inline_288_zeroDigitCount$$inline_283$$ = 1);
  (0 > $decimalPos$$inline_281$$ && 0 < $digitRightCount$$inline_284_totalDigits$$inline_289$$ || 0 <= $decimalPos$$inline_281$$ && ($decimalPos$$inline_281$$ < $digitLeftCount$$inline_282$$ || $decimalPos$$inline_281$$ > $digitLeftCount$$inline_282$$ + $n$$inline_288_zeroDigitCount$$inline_283$$) || 0 == $groupingCount$$inline_285$$) && $JSCompiler_alias_THROW$$(Error('Malformed pattern "' + $pattern$$3$$ + '"'));
  $digitRightCount$$inline_284_totalDigits$$inline_289$$ = $digitLeftCount$$inline_282$$ + $n$$inline_288_zeroDigitCount$$inline_283$$ + $digitRightCount$$inline_284_totalDigits$$inline_289$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$maximumFractionDigits_$ = 0 <= $decimalPos$$inline_281$$ ? $digitRightCount$$inline_284_totalDigits$$inline_289$$ - $decimalPos$$inline_281$$ : 0;
  0 <= $decimalPos$$inline_281$$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ = $digitLeftCount$$inline_282$$ + $n$$inline_288_zeroDigitCount$$inline_283$$ - $decimalPos$$inline_281$$, 0 > $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ = 0));
  $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ = (0 <= $decimalPos$$inline_281$$ ? $decimalPos$$inline_281$$ : $digitRightCount$$inline_284_totalDigits$$inline_289$$) - $digitLeftCount$$inline_282$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$maximumIntegerDigits_$ = $digitLeftCount$$inline_282$$ + $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$, 0 == $JSCompiler_StaticMethods_applyPattern_$self$$.$maximumFractionDigits_$ && 0 == $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ = 1));
  $JSCompiler_StaticMethods_applyPattern_$self$$.$groupingSize_$ = Math.max(0, $groupingCount$$inline_285$$);
  $JSCompiler_StaticMethods_applyPattern_$self$$.$decimalSeparatorAlwaysShown_$ = 0 == $decimalPos$$inline_281$$ || $decimalPos$$inline_281$$ == $digitRightCount$$inline_284_totalDigits$$inline_289$$;
  $trunkLen_trunkStart$$ = $pos$$5$$[0] - $trunkLen_trunkStart$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$positiveSuffix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$5$$);
  $pos$$5$$[0] < $pattern$$3$$.length && $pattern$$3$$.charAt($pos$$5$$[0]) == $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$ ? ($pos$$5$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$5$$), $pos$$5$$[0] += $trunkLen_trunkStart$$, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativeSuffix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, 
  $pattern$$3$$, $pos$$5$$)) : ($JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$ = $JSCompiler_StaticMethods_applyPattern_$self$$.$positivePrefix_$ + $JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativeSuffix_$ += $JSCompiler_StaticMethods_applyPattern_$self$$.$positiveSuffix_$)
}
$goog$i18n$NumberFormat$$.prototype.parse = function $$goog$i18n$NumberFormat$$$$parse$($text$$9$$, $opt_pos$$) {
  var $pos$$6$$ = $opt_pos$$ || [0], $ret$$2_text$$inline_292$$ = NaN;
  $text$$9$$ = $text$$9$$.replace(/ /g, "\u00a0");
  var $gotPositive$$ = $text$$9$$.indexOf(this.$positivePrefix_$, $pos$$6$$[0]) == $pos$$6$$[0], $gotNegative$$ = $text$$9$$.indexOf(this.$negativePrefix_$, $pos$$6$$[0]) == $pos$$6$$[0];
  $gotPositive$$ && $gotNegative$$ && (this.$positivePrefix_$.length > this.$negativePrefix_$.length ? $gotNegative$$ = $JSCompiler_alias_FALSE$$ : this.$positivePrefix_$.length < this.$negativePrefix_$.length && ($gotPositive$$ = $JSCompiler_alias_FALSE$$));
  $gotPositive$$ ? $pos$$6$$[0] += this.$positivePrefix_$.length : $gotNegative$$ && ($pos$$6$$[0] += this.$negativePrefix_$.length);
  if($text$$9$$.indexOf($goog$i18n$NumberFormatSymbols$$.$INFINITY$, $pos$$6$$[0]) == $pos$$6$$[0]) {
    $pos$$6$$[0] += $goog$i18n$NumberFormatSymbols$$.$INFINITY$.length, $ret$$2_text$$inline_292$$ = Infinity
  }else {
    for(var $ret$$2_text$$inline_292$$ = $text$$9$$, $sawDecimal$$inline_294$$ = $JSCompiler_alias_FALSE$$, $sawExponent$$inline_295$$ = $JSCompiler_alias_FALSE$$, $sawDigit$$inline_296$$ = $JSCompiler_alias_FALSE$$, $scale$$inline_297$$ = 1, $decimal$$inline_298$$ = $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$, $grouping$$inline_299$$ = $goog$i18n$NumberFormatSymbols$$.$GROUP_SEP$, $exponentChar$$inline_300$$ = $goog$i18n$NumberFormatSymbols$$.$EXP_SYMBOL$, $normalizedText$$inline_301$$ = "";$pos$$6$$[0] < 
    $ret$$2_text$$inline_292$$.length;$pos$$6$$[0]++) {
      var $ch$$inline_302$$ = $ret$$2_text$$inline_292$$.charAt($pos$$6$$[0]), $digit$$inline_303$$ = $JSCompiler_StaticMethods_getDigit_$$($ch$$inline_302$$);
      if(0 <= $digit$$inline_303$$ && 9 >= $digit$$inline_303$$) {
        $normalizedText$$inline_301$$ += $digit$$inline_303$$, $sawDigit$$inline_296$$ = $JSCompiler_alias_TRUE$$
      }else {
        if($ch$$inline_302$$ == $decimal$$inline_298$$.charAt(0)) {
          if($sawDecimal$$inline_294$$ || $sawExponent$$inline_295$$) {
            break
          }
          $normalizedText$$inline_301$$ += ".";
          $sawDecimal$$inline_294$$ = $JSCompiler_alias_TRUE$$
        }else {
          if($ch$$inline_302$$ == $grouping$$inline_299$$.charAt(0) && ("\u00a0" != $grouping$$inline_299$$.charAt(0) || $pos$$6$$[0] + 1 < $ret$$2_text$$inline_292$$.length && 0 <= $JSCompiler_StaticMethods_getDigit_$$($ret$$2_text$$inline_292$$.charAt($pos$$6$$[0] + 1)))) {
            if($sawDecimal$$inline_294$$ || $sawExponent$$inline_295$$) {
              break
            }
          }else {
            if($ch$$inline_302$$ == $exponentChar$$inline_300$$.charAt(0)) {
              if($sawExponent$$inline_295$$) {
                break
              }
              $normalizedText$$inline_301$$ += "E";
              $sawExponent$$inline_295$$ = $JSCompiler_alias_TRUE$$
            }else {
              if("+" == $ch$$inline_302$$ || "-" == $ch$$inline_302$$) {
                $normalizedText$$inline_301$$ += $ch$$inline_302$$
              }else {
                if($ch$$inline_302$$ == $goog$i18n$NumberFormatSymbols$$.$PERCENT$.charAt(0)) {
                  if(1 != $scale$$inline_297$$) {
                    break
                  }
                  $scale$$inline_297$$ = 100;
                  if($sawDigit$$inline_296$$) {
                    $pos$$6$$[0]++;
                    break
                  }
                }else {
                  if($ch$$inline_302$$ == $goog$i18n$NumberFormatSymbols$$.$PERMILL$.charAt(0)) {
                    if(1 != $scale$$inline_297$$) {
                      break
                    }
                    $scale$$inline_297$$ = 1E3;
                    if($sawDigit$$inline_296$$) {
                      $pos$$6$$[0]++;
                      break
                    }
                  }else {
                    break
                  }
                }
              }
            }
          }
        }
      }
    }
    $ret$$2_text$$inline_292$$ = parseFloat($normalizedText$$inline_301$$) / $scale$$inline_297$$
  }
  if($gotPositive$$) {
    if($text$$9$$.indexOf(this.$positiveSuffix_$, $pos$$6$$[0]) != $pos$$6$$[0]) {
      return NaN
    }
    $pos$$6$$[0] += this.$positiveSuffix_$.length
  }else {
    if($gotNegative$$) {
      if($text$$9$$.indexOf(this.$negativeSuffix_$, $pos$$6$$[0]) != $pos$$6$$[0]) {
        return NaN
      }
      $pos$$6$$[0] += this.$negativeSuffix_$.length
    }
  }
  return $gotNegative$$ ? -$ret$$2_text$$inline_292$$ : $ret$$2_text$$inline_292$$
};
$goog$i18n$NumberFormat$$.prototype.$format$ = function $$goog$i18n$NumberFormat$$$$$format$$($number_number$$inline_306$$) {
  if(isNaN($number_number$$inline_306$$)) {
    return $goog$i18n$NumberFormatSymbols$$.$NAN$
  }
  var $parts$$3$$ = [], $isNegative$$ = 0 > $number_number$$inline_306$$ || 0 == $number_number$$inline_306$$ && 0 > 1 / $number_number$$inline_306$$;
  $parts$$3$$.push($isNegative$$ ? this.$negativePrefix_$ : this.$positivePrefix_$);
  if(isFinite($number_number$$inline_306$$)) {
    if($number_number$$inline_306$$ = $number_number$$inline_306$$ * ($isNegative$$ ? -1 : 1) * this.$multiplier_$, this.$useExponentialNotation_$) {
      if(0 == $number_number$$inline_306$$) {
        $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_306$$, this.$minimumIntegerDigits_$, $parts$$3$$), $JSCompiler_StaticMethods_addExponentPart_$$(this, 0, $parts$$3$$)
      }else {
        var $exponent$$inline_308$$ = Math.floor(Math.log($number_number$$inline_306$$) / Math.log(10));
        $number_number$$inline_306$$ /= Math.pow(10, $exponent$$inline_308$$);
        var $minIntDigits$$inline_309$$ = this.$minimumIntegerDigits_$;
        if(1 < this.$maximumIntegerDigits_$ && this.$maximumIntegerDigits_$ > this.$minimumIntegerDigits_$) {
          for(;0 != $exponent$$inline_308$$ % this.$maximumIntegerDigits_$;) {
            $number_number$$inline_306$$ *= 10, $exponent$$inline_308$$--
          }
          $minIntDigits$$inline_309$$ = 1
        }else {
          1 > this.$minimumIntegerDigits_$ ? ($exponent$$inline_308$$++, $number_number$$inline_306$$ /= 10) : ($exponent$$inline_308$$ -= this.$minimumIntegerDigits_$ - 1, $number_number$$inline_306$$ *= Math.pow(10, this.$minimumIntegerDigits_$ - 1))
        }
        $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_306$$, $minIntDigits$$inline_309$$, $parts$$3$$);
        $JSCompiler_StaticMethods_addExponentPart_$$(this, $exponent$$inline_308$$, $parts$$3$$)
      }
    }else {
      $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_306$$, this.$minimumIntegerDigits_$, $parts$$3$$)
    }
  }else {
    $parts$$3$$.push($goog$i18n$NumberFormatSymbols$$.$INFINITY$)
  }
  $parts$$3$$.push($isNegative$$ ? this.$negativeSuffix_$ : this.$positiveSuffix_$);
  return $parts$$3$$.join("")
};
function $JSCompiler_StaticMethods_subformatFixed_$$($JSCompiler_StaticMethods_subformatFixed_$self$$, $i$$110_intValue_number$$1$$, $fracPart_minIntDigits$$, $parts$$4$$) {
  var $fracLen_power$$ = Math.pow(10, $JSCompiler_StaticMethods_subformatFixed_$self$$.$maximumFractionDigits_$), $shiftedNumber_translatableInt_zeroCode$$ = Math.round($i$$110_intValue_number$$1$$ * $fracLen_power$$), $fracValue$$;
  isFinite($shiftedNumber_translatableInt_zeroCode$$) ? ($i$$110_intValue_number$$1$$ = Math.floor($shiftedNumber_translatableInt_zeroCode$$ / $fracLen_power$$), $fracValue$$ = Math.floor($shiftedNumber_translatableInt_zeroCode$$ - $i$$110_intValue_number$$1$$ * $fracLen_power$$)) : $fracValue$$ = 0;
  for(var $fractionPresent$$ = 0 < $JSCompiler_StaticMethods_subformatFixed_$self$$.$minimumFractionDigits_$ || 0 < $fracValue$$, $intPart$$ = "", $shiftedNumber_translatableInt_zeroCode$$ = $i$$110_intValue_number$$1$$;1E20 < $shiftedNumber_translatableInt_zeroCode$$;) {
    $intPart$$ = "0" + $intPart$$, $shiftedNumber_translatableInt_zeroCode$$ = Math.round($shiftedNumber_translatableInt_zeroCode$$ / 10)
  }
  var $intPart$$ = $shiftedNumber_translatableInt_zeroCode$$ + $intPart$$, $decimal$$1$$ = $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$, $grouping$$1$$ = $goog$i18n$NumberFormatSymbols$$.$GROUP_SEP$, $shiftedNumber_translatableInt_zeroCode$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$.charCodeAt(0), $digitLen$$ = $intPart$$.length;
  if(0 < $i$$110_intValue_number$$1$$ || 0 < $fracPart_minIntDigits$$) {
    for($i$$110_intValue_number$$1$$ = $digitLen$$;$i$$110_intValue_number$$1$$ < $fracPart_minIntDigits$$;$i$$110_intValue_number$$1$$++) {
      $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$))
    }
    for($i$$110_intValue_number$$1$$ = 0;$i$$110_intValue_number$$1$$ < $digitLen$$;$i$$110_intValue_number$$1$$++) {
      $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$ + 1 * $intPart$$.charAt($i$$110_intValue_number$$1$$))), 1 < $digitLen$$ - $i$$110_intValue_number$$1$$ && (0 < $JSCompiler_StaticMethods_subformatFixed_$self$$.$groupingSize_$ && 1 == ($digitLen$$ - $i$$110_intValue_number$$1$$) % $JSCompiler_StaticMethods_subformatFixed_$self$$.$groupingSize_$) && $parts$$4$$.push($grouping$$1$$)
    }
  }else {
    $fractionPresent$$ || $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$))
  }
  ($JSCompiler_StaticMethods_subformatFixed_$self$$.$decimalSeparatorAlwaysShown_$ || $fractionPresent$$) && $parts$$4$$.push($decimal$$1$$);
  $fracPart_minIntDigits$$ = "" + ($fracValue$$ + $fracLen_power$$);
  for($fracLen_power$$ = $fracPart_minIntDigits$$.length;"0" == $fracPart_minIntDigits$$.charAt($fracLen_power$$ - 1) && $fracLen_power$$ > $JSCompiler_StaticMethods_subformatFixed_$self$$.$minimumFractionDigits_$ + 1;) {
    $fracLen_power$$--
  }
  for($i$$110_intValue_number$$1$$ = 1;$i$$110_intValue_number$$1$$ < $fracLen_power$$;$i$$110_intValue_number$$1$$++) {
    $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$ + 1 * $fracPart_minIntDigits$$.charAt($i$$110_intValue_number$$1$$)))
  }
}
function $JSCompiler_StaticMethods_addExponentPart_$$($JSCompiler_StaticMethods_addExponentPart_$self$$, $exponent_exponentDigits$$, $parts$$5$$) {
  $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$EXP_SYMBOL$);
  0 > $exponent_exponentDigits$$ ? ($exponent_exponentDigits$$ = -$exponent_exponentDigits$$, $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$MINUS_SIGN$)) : $JSCompiler_StaticMethods_addExponentPart_$self$$.$useSignForPositiveExponent_$ && $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$PLUS_SIGN$);
  $exponent_exponentDigits$$ = "" + $exponent_exponentDigits$$;
  for(var $zeroChar$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$, $i$$111$$ = $exponent_exponentDigits$$.length;$i$$111$$ < $JSCompiler_StaticMethods_addExponentPart_$self$$.$minExponentDigits_$;$i$$111$$++) {
    $parts$$5$$.push($zeroChar$$)
  }
  $parts$$5$$.push($exponent_exponentDigits$$)
}
function $JSCompiler_StaticMethods_getDigit_$$($ch$$4_code$$4$$) {
  $ch$$4_code$$4$$ = $ch$$4_code$$4$$.charCodeAt(0);
  if(48 <= $ch$$4_code$$4$$ && 58 > $ch$$4_code$$4$$) {
    return $ch$$4_code$$4$$ - 48
  }
  var $zeroCode$$1$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$.charCodeAt(0);
  return $zeroCode$$1$$ <= $ch$$4_code$$4$$ && $ch$$4_code$$4$$ < $zeroCode$$1$$ + 10 ? $ch$$4_code$$4$$ - $zeroCode$$1$$ : -1
}
var $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$ = ";";
function $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_parseAffix_$self$$, $pattern$$4$$, $pos$$8$$) {
  for(var $affix$$ = "", $inQuote$$ = $JSCompiler_alias_FALSE$$, $len$$2$$ = $pattern$$4$$.length;$pos$$8$$[0] < $len$$2$$;$pos$$8$$[0]++) {
    var $ch$$5_currencyCode$$inline_311$$ = $pattern$$4$$.charAt($pos$$8$$[0]);
    if("'" == $ch$$5_currencyCode$$inline_311$$) {
      $pos$$8$$[0] + 1 < $len$$2$$ && "'" == $pattern$$4$$.charAt($pos$$8$$[0] + 1) ? ($pos$$8$$[0]++, $affix$$ += "'") : $inQuote$$ = !$inQuote$$
    }else {
      if($inQuote$$) {
        $affix$$ += $ch$$5_currencyCode$$inline_311$$
      }else {
        switch($ch$$5_currencyCode$$inline_311$$) {
          case "#":
          ;
          case "0":
          ;
          case ",":
          ;
          case ".":
          ;
          case $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$:
            return $affix$$;
          case "\u00a4":
            if($pos$$8$$[0] + 1 < $len$$2$$ && "\u00a4" == $pattern$$4$$.charAt($pos$$8$$[0] + 1)) {
              $pos$$8$$[0]++, $affix$$ += $JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$
            }else {
              switch($JSCompiler_StaticMethods_parseAffix_$self$$.$currencyStyle_$) {
                case $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$:
                  $affix$$ += $goog$i18n$currency$CurrencyInfo$$[$JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$][1];
                  break;
                case 2:
                  var $ch$$5_currencyCode$$inline_311$$ = $JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$, $info$$inline_312$$ = $goog$i18n$currency$CurrencyInfo$$[$ch$$5_currencyCode$$inline_311$$], $affix$$ = $affix$$ + ($ch$$5_currencyCode$$inline_311$$ == $info$$inline_312$$[1] ? $ch$$5_currencyCode$$inline_311$$ : $ch$$5_currencyCode$$inline_311$$ + " " + $info$$inline_312$$[1]);
                  break;
                case 1:
                  $affix$$ += $goog$i18n$currency$CurrencyInfo$$[$JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$][2]
              }
            }
            break;
          case "%":
            1 != $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ && $JSCompiler_alias_THROW$$(Error("Too many percent/permill"));
            $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ = 100;
            $affix$$ += $goog$i18n$NumberFormatSymbols$$.$PERCENT$;
            break;
          case "\u2030":
            1 != $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ && $JSCompiler_alias_THROW$$(Error("Too many percent/permill"));
            $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ = 1E3;
            $affix$$ += $goog$i18n$NumberFormatSymbols$$.$PERMILL$;
            break;
          default:
            $affix$$ += $ch$$5_currencyCode$$inline_311$$
        }
      }
    }
  }
  return $affix$$
}
;
// Input 55
function $uniform$Validators$$() {
  this.$metaMap_$ = new $goog$structs$Map$$;
  this.$metaMap_$.set("required", this.$validateRequired_$);
  this.$metaMap_$.set("validateMinLength", this.$validateMinLength_$);
  this.$metaMap_$.set("validateEmail", this.$validateEmail_$);
  this.$metaMap_$.set("validateMaxLength", this.$validateMaxLength_$);
  this.$metaMap_$.set("validateMin", this.$validateMin_$);
  this.$metaMap_$.set("validateMax", this.$validateMax_$);
  this.$metaMap_$.set("validateNumber", this.$validateNumber_$);
  this.$metaMap_$.set("validateInteger", this.$validateInteger_$);
  this.$metaMap_$.set("validateAlpha", this.$validateAlpha_$);
  this.$metaMap_$.set("validateAlphaNum", this.$validateAlphaNum_$);
  this.$metaMap_$.set("validatePhrase", this.$validatePhrase_$);
  this.$metaMap_$.set("validateUsername", this.$validateUsername_$)
}
$goog$addSingletonGetter$$($uniform$Validators$$);
$JSCompiler_prototypeAlias$$ = $uniform$Validators$$.prototype;
$JSCompiler_prototypeAlias$$.$metaMap_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$validateRequired_$ = function $$JSCompiler_prototypeAlias$$$$validateRequired_$$($el$$55_elValue$$, $condition$$7$$, $params$$6$$, $caption$$1$$) {
  if(!$condition$$7$$ || eval($condition$$7$$)) {
    $el$$55_elValue$$ = $goog$dom$forms$getValue$$($el$$55_elValue$$), ($el$$55_elValue$$ == $JSCompiler_alias_NULL$$ || $goog$string$isEmpty$$($el$$55_elValue$$)) && $JSCompiler_alias_THROW$$($caption$$1$$ + " is required")
  }
};
$JSCompiler_prototypeAlias$$.$validateMinLength_$ = function $$JSCompiler_prototypeAlias$$$$validateMinLength_$$($el$$56$$, $condition$$8$$, $minLength$$1$$, $caption$$2$$) {
  if(!$condition$$8$$ || eval($condition$$8$$)) {
    $minLength$$1$$ = parseInt($minLength$$1$$, 10), 0 < $minLength$$1$$ && $goog$dom$forms$getValue$$($el$$56$$).length < $minLength$$1$$ && $JSCompiler_alias_THROW$$($caption$$2$$ + (" should be at least " + ($minLength$$1$$ + " characters long")))
  }
};
$JSCompiler_prototypeAlias$$.$validateEmail_$ = function $$JSCompiler_prototypeAlias$$$$validateEmail_$$($el$$57$$, $condition$$9$$, $params$$7$$, $caption$$3$$) {
  (!$condition$$9$$ || eval($condition$$9$$)) && !$goog$dom$forms$getValue$$($el$$57$$).match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) && $JSCompiler_alias_THROW$$($caption$$3$$ + " is not a valid email address")
};
$JSCompiler_prototypeAlias$$.$validateMaxLength_$ = function $$JSCompiler_prototypeAlias$$$$validateMaxLength_$$($el$$58$$, $condition$$10$$, $maxLength$$, $caption$$4$$) {
  if(!$condition$$10$$ || eval($condition$$10$$)) {
    $maxLength$$ = parseInt($maxLength$$, 10), 0 < $maxLength$$ && $goog$dom$forms$getValue$$($el$$58$$).length > $maxLength$$ && $JSCompiler_alias_THROW$$($caption$$4$$ + (" should not be longer than " + ($maxLength$$ + " characters")))
  }
};
$JSCompiler_prototypeAlias$$.$validateMax_$ = function $$JSCompiler_prototypeAlias$$$$validateMax_$$($el$$59$$, $MSG_ERROR_VALIDATE_MAX_condition$$11$$, $field_value_maxValue$$, $caption$$5_pos$$10$$) {
  if(!$MSG_ERROR_VALIDATE_MAX_condition$$11$$ || eval($MSG_ERROR_VALIDATE_MAX_condition$$11$$)) {
    $MSG_ERROR_VALIDATE_MAX_condition$$11$$ = $caption$$5_pos$$10$$ + (" should be less than or equal to " + $field_value_maxValue$$);
    var $valueFormatter$$ = new $goog$i18n$NumberFormat$$(1);
    $field_value_maxValue$$ = $goog$string$trim$$($field_value_maxValue$$);
    $caption$$5_pos$$10$$ = [0];
    var $maximum_value$$ = $valueFormatter$$.parse($field_value_maxValue$$, $caption$$5_pos$$10$$);
    isNaN($maximum_value$$) || $caption$$5_pos$$10$$[0] != $field_value_maxValue$$.length || isNaN($maximum_value$$) ? $goog$dom$forms$getValue$$($el$$59$$) > $field_value_maxValue$$ && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_MAX_condition$$11$$) : ($caption$$5_pos$$10$$ = [0], $field_value_maxValue$$ = $valueFormatter$$.parse($goog$dom$forms$getValue$$($el$$59$$), $caption$$5_pos$$10$$), (isNaN($field_value_maxValue$$) || $caption$$5_pos$$10$$[0] != $goog$dom$forms$getValue$$($el$$59$$).length || 
    isNaN($field_value_maxValue$$)) && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_MAX_condition$$11$$), $field_value_maxValue$$ > $maximum_value$$ && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_MAX_condition$$11$$))
  }
};
$JSCompiler_prototypeAlias$$.$validateMin_$ = function $$JSCompiler_prototypeAlias$$$$validateMin_$$($el$$60$$, $MSG_ERROR_VALIDATE_MIN_condition$$12$$, $field_value$$1_minValue$$, $caption$$6_pos$$11$$) {
  if(!$MSG_ERROR_VALIDATE_MIN_condition$$12$$ || eval($MSG_ERROR_VALIDATE_MIN_condition$$12$$)) {
    $MSG_ERROR_VALIDATE_MIN_condition$$12$$ = $caption$$6_pos$$11$$ + (" should be greater than or equal to " + $field_value$$1_minValue$$);
    var $valueFormatter$$1$$ = new $goog$i18n$NumberFormat$$(1);
    $field_value$$1_minValue$$ = $goog$string$trim$$($field_value$$1_minValue$$);
    $caption$$6_pos$$11$$ = [0];
    var $minimum_value$$ = $valueFormatter$$1$$.parse($field_value$$1_minValue$$, $caption$$6_pos$$11$$);
    isNaN($minimum_value$$) || $caption$$6_pos$$11$$[0] != $field_value$$1_minValue$$.length || isNaN($minimum_value$$) ? $goog$dom$forms$getValue$$($el$$60$$) < $field_value$$1_minValue$$ && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_MIN_condition$$12$$) : ($caption$$6_pos$$11$$ = [0], $field_value$$1_minValue$$ = $valueFormatter$$1$$.parse($goog$dom$forms$getValue$$($el$$60$$), $caption$$6_pos$$11$$), (isNaN($field_value$$1_minValue$$) || $caption$$6_pos$$11$$[0] != $goog$dom$forms$getValue$$($el$$60$$).length || 
    isNaN($field_value$$1_minValue$$)) && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_MIN_condition$$12$$), $field_value$$1_minValue$$ < $minimum_value$$ && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_MIN_condition$$12$$))
  }
};
$JSCompiler_prototypeAlias$$.$validateNumber_$ = function $$JSCompiler_prototypeAlias$$$$validateNumber_$$($el$$61_elValue$$2$$, $MSG_ERROR_VALIDATE_NUMBER_condition$$13$$, $params$$8_pos$$12$$, $caption$$7_value$$87$$) {
  if(!$MSG_ERROR_VALIDATE_NUMBER_condition$$13$$ || eval($MSG_ERROR_VALIDATE_NUMBER_condition$$13$$)) {
    $MSG_ERROR_VALIDATE_NUMBER_condition$$13$$ = $caption$$7_value$$87$$ + " needs to be a number", $el$$61_elValue$$2$$ = $goog$dom$forms$getValue$$($el$$61_elValue$$2$$), $goog$string$isEmpty$$($el$$61_elValue$$2$$) || ($params$$8_pos$$12$$ = [0], $caption$$7_value$$87$$ = (new $goog$i18n$NumberFormat$$(1)).parse($el$$61_elValue$$2$$, $params$$8_pos$$12$$), isNaN($caption$$7_value$$87$$) && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_NUMBER_condition$$13$$), ($params$$8_pos$$12$$[0] != $el$$61_elValue$$2$$.length || 
    isNaN($caption$$7_value$$87$$)) && $JSCompiler_alias_THROW$$($MSG_ERROR_VALIDATE_NUMBER_condition$$13$$))
  }
};
$JSCompiler_prototypeAlias$$.$validateInteger_$ = function $$JSCompiler_prototypeAlias$$$$validateInteger_$$($el$$62_elValue$$3$$, $condition$$14$$, $params$$9$$, $caption$$8$$) {
  if(!$condition$$14$$ || eval($condition$$14$$)) {
    $el$$62_elValue$$3$$ = $goog$dom$forms$getValue$$($el$$62_elValue$$3$$), /[^0-9]/.test($el$$62_elValue$$3$$) && $JSCompiler_alias_THROW$$($caption$$8$$ + " needs to be a whole number")
  }
};
$JSCompiler_prototypeAlias$$.$validateAlpha_$ = function $$JSCompiler_prototypeAlias$$$$validateAlpha_$$($el$$63_elValue$$4$$, $condition$$15$$, $params$$10$$, $caption$$9$$) {
  if(!$condition$$15$$ || eval($condition$$15$$)) {
    $el$$63_elValue$$4$$ = $goog$dom$forms$getValue$$($el$$63_elValue$$4$$), /[^a-zA-Z]/.test($el$$63_elValue$$4$$) && $JSCompiler_alias_THROW$$($caption$$9$$ + " should contain only letters (without special characters or numbers)")
  }
};
$JSCompiler_prototypeAlias$$.$validateAlphaNum_$ = function $$JSCompiler_prototypeAlias$$$$validateAlphaNum_$$($el$$64_elValue$$5$$, $condition$$16$$, $params$$11$$, $caption$$10$$) {
  if(!$condition$$16$$ || eval($condition$$16$$)) {
    $el$$64_elValue$$5$$ = $goog$dom$forms$getValue$$($el$$64_elValue$$5$$), /[^a-zA-Z0-9]/.test($el$$64_elValue$$5$$) && $JSCompiler_alias_THROW$$($caption$$10$$ + " should contain only numbers and letters (without special characters)")
  }
};
$JSCompiler_prototypeAlias$$.$validatePhrase_$ = function $$JSCompiler_prototypeAlias$$$$validatePhrase_$$($el$$65_elValue$$6$$, $condition$$17$$, $params$$12$$, $caption$$11$$) {
  if(!$condition$$17$$ || eval($condition$$17$$)) {
    $el$$65_elValue$$6$$ = $goog$dom$forms$getValue$$($el$$65_elValue$$6$$), !$el$$65_elValue$$6$$.match(/^[\w\d\.\-_\(\)\*'# :,]+$/i) && !$goog$string$isEmpty$$($el$$65_elValue$$6$$) && $JSCompiler_alias_THROW$$($caption$$11$$ + " should contain only alphabetic characters, numbers, spaces, and the following: . , - _ () * # :")
  }
};
$JSCompiler_prototypeAlias$$.$validateUsername_$ = function $$JSCompiler_prototypeAlias$$$$validateUsername_$$($el$$66_elValue$$7$$, $condition$$18$$, $params$$13$$, $caption$$12$$) {
  if(!$condition$$18$$ || eval($condition$$18$$)) {
    $el$$66_elValue$$7$$ = $goog$dom$forms$getValue$$($el$$66_elValue$$7$$), !$el$$66_elValue$$7$$.match(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/) && !$goog$string$isEmpty$$($el$$66_elValue$$7$$) && $JSCompiler_alias_THROW$$($caption$$12$$ + " should contain only alphabetic characters, numbers, and the following characters: . _ -")
  }
};
// Input 56
function $goog$ui$registry$setDecoratorByClassName$$($className$$37$$, $decoratorFn$$) {
  $className$$37$$ || $JSCompiler_alias_THROW$$(Error("Invalid class name " + $className$$37$$));
  $goog$isFunction$$($decoratorFn$$) || $JSCompiler_alias_THROW$$(Error("Invalid decorator function " + $decoratorFn$$))
}
var $goog$ui$registry$defaultRenderers_$$ = {};
// Input 57
function $goog$events$KeyHandler$$($opt_element$$11$$, $opt_capture$$8$$) {
  $goog$Disposable$$.call(this);
  $opt_element$$11$$ && $JSCompiler_StaticMethods_attach$$(this, $opt_element$$11$$, $opt_capture$$8$$)
}
$goog$inherits$$($goog$events$KeyHandler$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyPressKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyDownKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyUpKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$lastKey_$ = -1;
$JSCompiler_prototypeAlias$$.$keyCode_$ = -1;
$JSCompiler_prototypeAlias$$.$altKey_$ = $JSCompiler_alias_FALSE$$;
var $goog$events$KeyHandler$safariKey_$$ = {3:$goog$events$KeyCodes$ENTER$$, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:$goog$events$KeyCodes$DELETE$$, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, $goog$events$KeyHandler$keyIdentifier_$$ = {Up:38, Down:40, Left:37, Right:39, Enter:$goog$events$KeyCodes$ENTER$$, F1:112, F2:113, F3:114, 
F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":$goog$events$KeyCodes$DELETE$$, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, $goog$events$KeyHandler$USES_KEYDOWN_$$ = $goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525"), $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ = $goog$userAgent$detectedMac_$$ && $goog$userAgent$GECKO$$;
$JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$handleKeyDown_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyDown_$$($e$$42$$) {
  if($goog$userAgent$WEBKIT$$ && (17 == this.$lastKey_$ && !$e$$42$$.ctrlKey || 18 == this.$lastKey_$ && !$e$$42$$.altKey || $goog$userAgent$detectedMac_$$ && 91 == this.$lastKey_$ && !$e$$42$$.metaKey)) {
    this.$keyCode_$ = this.$lastKey_$ = -1
  }
  -1 == this.$lastKey_$ && ($e$$42$$.ctrlKey && 17 != $e$$42$$.keyCode ? this.$lastKey_$ = 17 : $e$$42$$.altKey && 18 != $e$$42$$.keyCode ? this.$lastKey_$ = 18 : $e$$42$$.metaKey && 91 != $e$$42$$.keyCode && (this.$lastKey_$ = 91));
  $goog$events$KeyHandler$USES_KEYDOWN_$$ && !$goog$events$KeyCodes$firesKeyPressEvent$$($e$$42$$.keyCode, this.$lastKey_$, $e$$42$$.shiftKey, $e$$42$$.ctrlKey, $e$$42$$.altKey) ? this.handleEvent($e$$42$$) : (this.$keyCode_$ = $goog$userAgent$GECKO$$ ? $goog$events$KeyCodes$normalizeGeckoKeyCode$$($e$$42$$.keyCode) : $e$$42$$.keyCode, $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ && (this.$altKey_$ = $e$$42$$.altKey))
};
$JSCompiler_prototypeAlias$$.$handleKeyup_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyup_$$($e$$43$$) {
  this.$keyCode_$ = this.$lastKey_$ = -1;
  this.$altKey_$ = $e$$43$$.altKey
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($e$$44_repeat$$) {
  var $be$$3_event$$3$$ = $e$$44_repeat$$.$event_$, $keyCode$$3$$, $charCode$$, $altKey$$2$$ = $be$$3_event$$3$$.altKey;
  $goog$userAgent$IE$$ && "keypress" == $e$$44_repeat$$.type ? ($keyCode$$3$$ = this.$keyCode_$, $charCode$$ = $keyCode$$3$$ != $goog$events$KeyCodes$ENTER$$ && 27 != $keyCode$$3$$ ? $be$$3_event$$3$$.keyCode : 0) : $goog$userAgent$WEBKIT$$ && "keypress" == $e$$44_repeat$$.type ? ($keyCode$$3$$ = this.$keyCode_$, $charCode$$ = 0 <= $be$$3_event$$3$$.charCode && 63232 > $be$$3_event$$3$$.charCode && $goog$events$KeyCodes$isCharacterKey$$($keyCode$$3$$) ? $be$$3_event$$3$$.charCode : 0) : $goog$userAgent$OPERA$$ ? 
  ($keyCode$$3$$ = this.$keyCode_$, $charCode$$ = $goog$events$KeyCodes$isCharacterKey$$($keyCode$$3$$) ? $be$$3_event$$3$$.keyCode : 0) : ($keyCode$$3$$ = $be$$3_event$$3$$.keyCode || this.$keyCode_$, $charCode$$ = $be$$3_event$$3$$.charCode || 0, $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ && ($altKey$$2$$ = this.$altKey_$), $goog$userAgent$detectedMac_$$ && (63 == $charCode$$ && 224 == $keyCode$$3$$) && ($keyCode$$3$$ = 191));
  var $key$$73$$ = $keyCode$$3$$, $keyIdentifier$$ = $be$$3_event$$3$$.keyIdentifier;
  $keyCode$$3$$ ? 63232 <= $keyCode$$3$$ && $keyCode$$3$$ in $goog$events$KeyHandler$safariKey_$$ ? $key$$73$$ = $goog$events$KeyHandler$safariKey_$$[$keyCode$$3$$] : 25 == $keyCode$$3$$ && $e$$44_repeat$$.shiftKey && ($key$$73$$ = 9) : $keyIdentifier$$ && $keyIdentifier$$ in $goog$events$KeyHandler$keyIdentifier_$$ && ($key$$73$$ = $goog$events$KeyHandler$keyIdentifier_$$[$keyIdentifier$$]);
  $e$$44_repeat$$ = $key$$73$$ == this.$lastKey_$;
  this.$lastKey_$ = $key$$73$$;
  $be$$3_event$$3$$ = new $goog$events$KeyEvent$$($key$$73$$, $charCode$$, $e$$44_repeat$$, $be$$3_event$$3$$);
  $be$$3_event$$3$$.altKey = $altKey$$2$$;
  this.dispatchEvent($be$$3_event$$3$$)
};
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
function $JSCompiler_StaticMethods_attach$$($JSCompiler_StaticMethods_attach$self$$, $element$$105$$, $opt_capture$$9$$) {
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ && $JSCompiler_StaticMethods_attach$self$$.detach();
  $JSCompiler_StaticMethods_attach$self$$.$element_$ = $element$$105$$;
  $JSCompiler_StaticMethods_attach$self$$.$keyPressKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keypress", $JSCompiler_StaticMethods_attach$self$$, $opt_capture$$9$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyDownKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keydown", $JSCompiler_StaticMethods_attach$self$$.$handleKeyDown_$, $opt_capture$$9$$, $JSCompiler_StaticMethods_attach$self$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keyup", $JSCompiler_StaticMethods_attach$self$$.$handleKeyup_$, $opt_capture$$9$$, $JSCompiler_StaticMethods_attach$self$$)
}
$JSCompiler_prototypeAlias$$.detach = function $$JSCompiler_prototypeAlias$$$detach$() {
  this.$keyPressKey_$ && ($goog$events$unlistenByKey$$(this.$keyPressKey_$), $goog$events$unlistenByKey$$(this.$keyDownKey_$), $goog$events$unlistenByKey$$(this.$keyUpKey_$), this.$keyUpKey_$ = this.$keyDownKey_$ = this.$keyPressKey_$ = $JSCompiler_alias_NULL$$);
  this.$element_$ = $JSCompiler_alias_NULL$$;
  this.$keyCode_$ = this.$lastKey_$ = -1
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$KeyHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.detach()
};
function $goog$events$KeyEvent$$($keyCode$$4$$, $charCode$$1$$, $repeat$$1$$, $browserEvent$$) {
  $browserEvent$$ && this.init($browserEvent$$, $JSCompiler_alias_VOID$$);
  this.type = "key";
  this.keyCode = $keyCode$$4$$;
  this.charCode = $charCode$$1$$;
  this.repeat = $repeat$$1$$
}
$goog$inherits$$($goog$events$KeyEvent$$, $goog$events$BrowserEvent$$);
// Input 58
// Input 59
function $goog$structs$Set$$($opt_values$$1$$) {
  this.$map_$ = new $goog$structs$Map$$;
  $opt_values$$1$$ && this.$addAll$($opt_values$$1$$)
}
function $goog$structs$Set$getKey_$$($val$$32$$) {
  var $type$$93$$ = typeof $val$$32$$;
  return"object" == $type$$93$$ && $val$$32$$ || "function" == $type$$93$$ ? "o" + $goog$getUid$$($val$$32$$) : $type$$93$$.substr(0, 1) + $val$$32$$
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$map_$.$getCount$()
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$$106$$) {
  this.$map_$.set($goog$structs$Set$getKey_$$($element$$106$$), $element$$106$$)
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($col$$11_values$$13$$) {
  $col$$11_values$$13$$ = $goog$structs$getValues$$($col$$11_values$$13$$);
  for(var $l$$19$$ = $col$$11_values$$13$$.length, $i$$113$$ = 0;$i$$113$$ < $l$$19$$;$i$$113$$++) {
    this.add($col$$11_values$$13$$[$i$$113$$])
  }
};
$JSCompiler_prototypeAlias$$.$removeAll$ = function $$JSCompiler_prototypeAlias$$$$removeAll$$($col$$12_values$$14$$) {
  $col$$12_values$$14$$ = $goog$structs$getValues$$($col$$12_values$$14$$);
  for(var $l$$20$$ = $col$$12_values$$14$$.length, $i$$114$$ = 0;$i$$114$$ < $l$$20$$;$i$$114$$++) {
    this.remove($col$$12_values$$14$$[$i$$114$$])
  }
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$$107$$) {
  return this.$map_$.remove($goog$structs$Set$getKey_$$($element$$107$$))
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$.clear()
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$$108_key$$inline_321$$) {
  $element$$108_key$$inline_321$$ = $goog$structs$Set$getKey_$$($element$$108_key$$inline_321$$);
  return $goog$structs$Map$hasKey_$$(this.$map_$.$map_$, $element$$108_key$$inline_321$$)
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  return this.$map_$.$getValues$()
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$structs$Set$$(this)
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($col$$16$$) {
  return this.$getCount$() == $goog$structs$getCount$$($col$$16$$) && $JSCompiler_StaticMethods_isSubsetOf$$(this, $col$$16$$)
};
function $JSCompiler_StaticMethods_isSubsetOf$$($JSCompiler_StaticMethods_isSubsetOf$self$$, $col$$17$$) {
  var $colCount$$ = $goog$structs$getCount$$($col$$17$$);
  if($JSCompiler_StaticMethods_isSubsetOf$self$$.$getCount$() > $colCount$$) {
    return $JSCompiler_alias_FALSE$$
  }
  !($col$$17$$ instanceof $goog$structs$Set$$) && 5 < $colCount$$ && ($col$$17$$ = new $goog$structs$Set$$($col$$17$$));
  return $goog$structs$every$$($JSCompiler_StaticMethods_isSubsetOf$self$$, function($JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$) {
    if("function" == typeof $col$$17$$.contains) {
      $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$ = $col$$17$$.contains($JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$)
    }else {
      if("function" == typeof $col$$17$$.$containsValue$) {
        $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$ = $col$$17$$.$containsValue$($JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$)
      }else {
        if($goog$isArrayLike$$($col$$17$$) || $goog$isString$$($col$$17$$)) {
          $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$ = $goog$array$contains$$($col$$17$$, $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$)
        }else {
          a: {
            for(var $key$$inline_1146$$ in $col$$17$$) {
              if($col$$17$$[$key$$inline_1146$$] == $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$) {
                $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$ = $JSCompiler_alias_TRUE$$;
                break a
              }
            }
            $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$ = $JSCompiler_alias_FALSE$$
          }
        }
      }
    }
    return $JSCompiler_temp$$1124_JSCompiler_temp$$1125_JSCompiler_temp$$1126_value$$89$$
  })
}
;
// Input 60
function $goog$debug$getStacktrace$$($opt_fn$$8$$) {
  return $goog$debug$getStacktraceHelper_$$($opt_fn$$8$$ || arguments.callee.caller, [])
}
function $goog$debug$getStacktraceHelper_$$($fn$$7$$, $visited$$) {
  var $sb$$5$$ = [];
  if($goog$array$contains$$($visited$$, $fn$$7$$)) {
    $sb$$5$$.push("[...circular reference...]")
  }else {
    if($fn$$7$$ && 50 > $visited$$.length) {
      $sb$$5$$.push($goog$debug$getFunctionName$$($fn$$7$$) + "(");
      for(var $args$$12$$ = $fn$$7$$.arguments, $i$$117$$ = 0;$i$$117$$ < $args$$12$$.length;$i$$117$$++) {
        0 < $i$$117$$ && $sb$$5$$.push(", ");
        var $arg$$6_argDesc$$;
        $arg$$6_argDesc$$ = $args$$12$$[$i$$117$$];
        switch(typeof $arg$$6_argDesc$$) {
          case "object":
            $arg$$6_argDesc$$ = $arg$$6_argDesc$$ ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            $arg$$6_argDesc$$ = String($arg$$6_argDesc$$);
            break;
          case "boolean":
            $arg$$6_argDesc$$ = $arg$$6_argDesc$$ ? "true" : "false";
            break;
          case "function":
            $arg$$6_argDesc$$ = ($arg$$6_argDesc$$ = $goog$debug$getFunctionName$$($arg$$6_argDesc$$)) ? $arg$$6_argDesc$$ : "[fn]";
            break;
          default:
            $arg$$6_argDesc$$ = typeof $arg$$6_argDesc$$
        }
        40 < $arg$$6_argDesc$$.length && ($arg$$6_argDesc$$ = $arg$$6_argDesc$$.substr(0, 40) + "...");
        $sb$$5$$.push($arg$$6_argDesc$$)
      }
      $visited$$.push($fn$$7$$);
      $sb$$5$$.push(")\n");
      try {
        $sb$$5$$.push($goog$debug$getStacktraceHelper_$$($fn$$7$$.caller, $visited$$))
      }catch($e$$51$$) {
        $sb$$5$$.push("[exception trying to get caller]\n")
      }
    }else {
      $fn$$7$$ ? $sb$$5$$.push("[...long stack...]") : $sb$$5$$.push("[end]")
    }
  }
  return $sb$$5$$.join("")
}
function $goog$debug$getFunctionName$$($fn$$8_functionSource$$) {
  if($goog$debug$fnNameCache_$$[$fn$$8_functionSource$$]) {
    return $goog$debug$fnNameCache_$$[$fn$$8_functionSource$$]
  }
  $fn$$8_functionSource$$ = String($fn$$8_functionSource$$);
  if(!$goog$debug$fnNameCache_$$[$fn$$8_functionSource$$]) {
    var $matches$$1$$ = /function ([^\(]+)/.exec($fn$$8_functionSource$$);
    $goog$debug$fnNameCache_$$[$fn$$8_functionSource$$] = $matches$$1$$ ? $matches$$1$$[1] : "[Anonymous]"
  }
  return $goog$debug$fnNameCache_$$[$fn$$8_functionSource$$]
}
var $goog$debug$fnNameCache_$$ = {};
// Input 61
function $goog$debug$LogRecord$$($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  this.reset($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$)
}
$goog$debug$LogRecord$$.prototype.$sequenceNumber_$ = 0;
$goog$debug$LogRecord$$.prototype.$exception_$ = $JSCompiler_alias_NULL$$;
$goog$debug$LogRecord$$.prototype.$exceptionText_$ = $JSCompiler_alias_NULL$$;
var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
$goog$debug$LogRecord$$.prototype.reset = function $$goog$debug$LogRecord$$$$reset$($level$$8$$, $msg$$1$$, $loggerName$$1$$, $opt_time$$1$$, $opt_sequenceNumber$$1$$) {
  this.$sequenceNumber_$ = "number" == typeof $opt_sequenceNumber$$1$$ ? $opt_sequenceNumber$$1$$ : $goog$debug$LogRecord$nextSequenceNumber_$$++;
  this.$time_$ = $opt_time$$1$$ || $goog$now$$();
  this.$level_$ = $level$$8$$;
  this.$msg_$ = $msg$$1$$;
  this.$loggerName_$ = $loggerName$$1$$;
  delete this.$exception_$;
  delete this.$exceptionText_$
};
$goog$debug$LogRecord$$.prototype.$setLevel$ = $JSCompiler_set$$("$level_$");
// Input 62
// Input 63
function $goog$debug$Logger$$($name$$76$$) {
  this.$name_$ = $name$$76$$
}
$goog$debug$Logger$$.prototype.$parent_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$level_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$children_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$handlers_$ = $JSCompiler_alias_NULL$$;
function $goog$debug$Logger$Level$$($name$$77$$, $value$$90$$) {
  this.name = $name$$77$$;
  this.value = $value$$90$$
}
$goog$debug$Logger$Level$$.prototype.toString = $JSCompiler_get$$("name");
var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1E3), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700);
$JSCompiler_prototypeAlias$$ = $goog$debug$Logger$$.prototype;
$JSCompiler_prototypeAlias$$.getName = $JSCompiler_get$$("$name_$");
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$");
$JSCompiler_prototypeAlias$$.$getChildren$ = function $$JSCompiler_prototypeAlias$$$$getChildren$$() {
  this.$children_$ || (this.$children_$ = {});
  return this.$children_$
};
$JSCompiler_prototypeAlias$$.$setLevel$ = $JSCompiler_set$$("$level_$");
function $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$ ? $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$ : $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$ ? $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$) : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.log = function $$JSCompiler_prototypeAlias$$$log$($level$$15_logRecord$$inline_324$$, $msg$$5_msg$$inline_1148_target$$inline_325$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1150_opt_exception$$) {
  if($level$$15_logRecord$$inline_324$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
    $level$$15_logRecord$$inline_324$$ = this.$getLogRecord$($level$$15_logRecord$$inline_324$$, $msg$$5_msg$$inline_1148_target$$inline_325$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1150_opt_exception$$);
    $msg$$5_msg$$inline_1148_target$$inline_325$$ = "log:" + $level$$15_logRecord$$inline_324$$.$msg_$;
    $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($msg$$5_msg$$inline_1148_target$$inline_325$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($msg$$5_msg$$inline_1148_target$$inline_325$$));
    $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($msg$$5_msg$$inline_1148_target$$inline_325$$);
    for($msg$$5_msg$$inline_1148_target$$inline_325$$ = this;$msg$$5_msg$$inline_1148_target$$inline_325$$;) {
      $JSCompiler_StaticMethods_callPublish_$self$$inline_1150_opt_exception$$ = $msg$$5_msg$$inline_1148_target$$inline_325$$;
      var $logRecord$$inline_1151$$ = $level$$15_logRecord$$inline_324$$;
      if($JSCompiler_StaticMethods_callPublish_$self$$inline_1150_opt_exception$$.$handlers_$) {
        for(var $i$$inline_1152$$ = 0, $handler$$inline_1153$$ = $JSCompiler_alias_VOID$$;$handler$$inline_1153$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_1150_opt_exception$$.$handlers_$[$i$$inline_1152$$];$i$$inline_1152$$++) {
          $handler$$inline_1153$$($logRecord$$inline_1151$$)
        }
      }
      $msg$$5_msg$$inline_1148_target$$inline_325$$ = $msg$$5_msg$$inline_1148_target$$inline_325$$.getParent()
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLogRecord$ = function $$JSCompiler_prototypeAlias$$$$getLogRecord$$($level$$16$$, $msg$$6$$, $opt_exception$$1$$) {
  var $logRecord$$ = new $goog$debug$LogRecord$$($level$$16$$, String($msg$$6$$), this.$name_$);
  if($opt_exception$$1$$) {
    $logRecord$$.$exception_$ = $opt_exception$$1$$;
    var $JSCompiler_inline_result$$32$$;
    var $opt_fn$$inline_339$$ = arguments.callee.caller;
    try {
      var $e$$inline_340$$;
      var $href$$inline_1156$$ = $goog$getObjectByName$$("window.location.href");
      if($goog$isString$$($opt_exception$$1$$)) {
        $e$$inline_340$$ = {message:$opt_exception$$1$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$inline_1156$$, stack:"Not available"}
      }else {
        var $lineNumber$$inline_1157$$, $fileName$$inline_1158$$, $threwError$$inline_1159$$ = $JSCompiler_alias_FALSE$$;
        try {
          $lineNumber$$inline_1157$$ = $opt_exception$$1$$.lineNumber || $opt_exception$$1$$.$line$ || "Not available"
        }catch($e$$inline_1160$$) {
          $lineNumber$$inline_1157$$ = "Not available", $threwError$$inline_1159$$ = $JSCompiler_alias_TRUE$$
        }
        try {
          $fileName$$inline_1158$$ = $opt_exception$$1$$.fileName || $opt_exception$$1$$.filename || $opt_exception$$1$$.sourceURL || $goog$global$$.$googDebugFname || $href$$inline_1156$$
        }catch($e$$inline_1161$$) {
          $fileName$$inline_1158$$ = "Not available", $threwError$$inline_1159$$ = $JSCompiler_alias_TRUE$$
        }
        $e$$inline_340$$ = $threwError$$inline_1159$$ || !$opt_exception$$1$$.lineNumber || !$opt_exception$$1$$.fileName || !$opt_exception$$1$$.stack ? {message:$opt_exception$$1$$.message, name:$opt_exception$$1$$.name, lineNumber:$lineNumber$$inline_1157$$, fileName:$fileName$$inline_1158$$, stack:$opt_exception$$1$$.stack || "Not available"} : $opt_exception$$1$$
      }
      $JSCompiler_inline_result$$32$$ = "Message: " + $goog$string$htmlEscape$$($e$$inline_340$$.message) + '\nUrl: <a href="view-source:' + $e$$inline_340$$.fileName + '" target="_new">' + $e$$inline_340$$.fileName + "</a>\nLine: " + $e$$inline_340$$.lineNumber + "\n\nBrowser stack:\n" + $goog$string$htmlEscape$$($e$$inline_340$$.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + $goog$string$htmlEscape$$($goog$debug$getStacktrace$$($opt_fn$$inline_339$$) + "-> ")
    }catch($e2$$inline_341$$) {
      $JSCompiler_inline_result$$32$$ = "Exception trying to expose exception! You win, we lose. " + $e2$$inline_341$$
    }
    $logRecord$$.$exceptionText_$ = $JSCompiler_inline_result$$32$$
  }
  return $logRecord$$
};
$JSCompiler_prototypeAlias$$.info = function $$JSCompiler_prototypeAlias$$$info$($msg$$10$$, $opt_exception$$5$$) {
  this.log($goog$debug$Logger$Level$INFO$$, $msg$$10$$, $opt_exception$$5$$)
};
var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = $JSCompiler_alias_NULL$$;
function $goog$debug$LogManager$getLogger$$($name$$81$$) {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$setLevel$($goog$debug$Logger$Level$CONFIG$$));
  var $JSCompiler_temp$$11_logger$$inline_348$$;
  if(!($JSCompiler_temp$$11_logger$$inline_348$$ = $goog$debug$LogManager$loggers_$$[$name$$81$$])) {
    $JSCompiler_temp$$11_logger$$inline_348$$ = new $goog$debug$Logger$$($name$$81$$);
    var $lastDotIndex$$inline_349_parentLogger$$inline_351$$ = $name$$81$$.lastIndexOf("."), $leafName$$inline_350$$ = $name$$81$$.substr($lastDotIndex$$inline_349_parentLogger$$inline_351$$ + 1), $lastDotIndex$$inline_349_parentLogger$$inline_351$$ = $goog$debug$LogManager$getLogger$$($name$$81$$.substr(0, $lastDotIndex$$inline_349_parentLogger$$inline_351$$));
    $lastDotIndex$$inline_349_parentLogger$$inline_351$$.$getChildren$()[$leafName$$inline_350$$] = $JSCompiler_temp$$11_logger$$inline_348$$;
    $JSCompiler_temp$$11_logger$$inline_348$$.$parent_$ = $lastDotIndex$$inline_349_parentLogger$$inline_351$$;
    $goog$debug$LogManager$loggers_$$[$name$$81$$] = $JSCompiler_temp$$11_logger$$inline_348$$
  }
  return $JSCompiler_temp$$11_logger$$inline_348$$
}
;
// Input 64
function $uniform$Uniform$$($opt_model$$, $opt_domHelper$$4$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$4$$);
  var $model$$ = $opt_model$$ || {}, $controlModel$$ = {};
  $controlModel$$.action = $goog$object$get$$($model$$, "action", ".");
  $controlModel$$.accept = $goog$object$get$$($model$$, "accept", $JSCompiler_alias_NULL$$);
  $controlModel$$.acceptCharset = $goog$object$get$$($model$$, "acceptCharset", $JSCompiler_alias_NULL$$);
  $controlModel$$.enctype = $goog$object$get$$($model$$, "enctype", $JSCompiler_alias_NULL$$);
  $controlModel$$.method = $goog$object$get$$($model$$, "method", $JSCompiler_alias_NULL$$);
  $controlModel$$.name = $goog$object$get$$($model$$, "name", $JSCompiler_alias_NULL$$);
  $controlModel$$.target = $goog$object$get$$($model$$, "target", $JSCompiler_alias_NULL$$);
  $controlModel$$.$control_holder_class$ = $goog$object$get$$($model$$, "control_holder_class", $uniform$Uniform$CTRLHOLDER_CLASS$$);
  this.$setModel$($controlModel$$)
}
$goog$inherits$$($uniform$Uniform$$, $goog$ui$Component$$);
$uniform$Uniform$$.prototype.$logger_$ = $goog$debug$LogManager$getLogger$$("uniform.Uniform");
$uniform$Uniform$$.prototype.$getMethod$ = function $$uniform$Uniform$$$$$getMethod$$() {
  return this.$model_$.method
};
$uniform$Uniform$$.prototype.getName = function $$uniform$Uniform$$$$getName$() {
  return this.$model_$.name
};
$uniform$Uniform$$.prototype.setName = function $$uniform$Uniform$$$$setName$($value$$97$$) {
  this.$model_$.name = $value$$97$$;
  this.$getElement$().setAttribute("name", $value$$97$$)
};
var $uniform$Uniform$CTRLHOLDER_CLASS$$ = "ctrlHolder";
$JSCompiler_prototypeAlias$$ = $uniform$Uniform$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("uniForm");
$JSCompiler_prototypeAlias$$.$initialFormValue_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $dom$$3_topEl$$ = this.$getDomHelper$(), $formAttributes$$ = {};
  $formAttributes$$.action = this.$model_$.action;
  this.$model_$.accept && ($formAttributes$$.accept = this.$model_$.accept);
  this.$model_$.acceptCharset && ($formAttributes$$["accept-charset"] = this.$model_$.acceptCharset);
  this.$model_$.enctype && ($formAttributes$$.enctype = this.$model_$.enctype);
  this.$getMethod$() && ($formAttributes$$.method = this.$getMethod$());
  this.getName() && ($formAttributes$$.name = this.getName());
  this.$model_$.target && ($formAttributes$$.target = this.$model_$.target);
  $formAttributes$$["data-uniform-control-holder-class"] = this.$model_$.$control_holder_class$;
  $dom$$3_topEl$$ = $dom$$3_topEl$$.$createDom$("form", $formAttributes$$, this.$content_$);
  $goog$dom$classes$add$$($dom$$3_topEl$$, this.$getCssClass$());
  this.$element_$ = $dom$$3_topEl$$;
  this.$decorateInternal$($dom$$3_topEl$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$109$$) {
  $uniform$Uniform$$.$superClass_$.$decorateInternal$.call(this, $element$$109$$);
  this.$getDomHelper$();
  this.$model_$.action = $element$$109$$.getAttribute("action");
  this.$model_$.accept = $element$$109$$.getAttribute("accept");
  this.$model_$.acceptCharset = $element$$109$$.getAttribute("accept-charset");
  this.$model_$.enctype = $element$$109$$.getAttribute("enctype");
  this.$model_$.method = $element$$109$$.getAttribute("method");
  this.$model_$.name = $element$$109$$.getAttribute("name");
  this.$model_$.target = $element$$109$$.getAttribute("target");
  this.$model_$.$control_holder_class$ = $element$$109$$.getAttribute("data-uniform-control-holder-class") || $uniform$Uniform$CTRLHOLDER_CLASS$$;
  $goog$dom$classes$add$$($element$$109$$, this.$getCssClass$());
  for(var $els$$6$$ = this.$getElement$().elements, $el$$67$$, $i$$123$$ = 0;$el$$67$$ = $els$$6$$[$i$$123$$];$i$$123$$++) {
    if("INPUT" === $el$$67$$.tagName) {
      var $labelInput$$ = new $goog$ui$LabelInput$$;
      $JSCompiler_StaticMethods_addChild$$(this, $labelInput$$);
      $labelInput$$.$decorate$($el$$67$$)
    }
  }
  return $element$$109$$
};
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($content$$6$$) {
  this.$setContentInternal$($content$$6$$)
};
$JSCompiler_prototypeAlias$$.$setContentInternal$ = $JSCompiler_set$$("$content_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $uniform$Uniform$$.$superClass_$.$enterDocument$.call(this);
  this.$initialFormValue_$ = $goog$dom$forms$getFormDataString$$(this.$getElement$());
  var $handler$$46$$ = this.$getHandler$();
  $goog$dom$classes$has$$(this.$getElement$(), "askOnLeave") && $JSCompiler_StaticMethods_listen$$($handler$$46$$, window, "beforeunload", this.$onWindowBeforeUnload_$);
  $JSCompiler_StaticMethods_listen$$($handler$$46$$, this.$getElement$(), "submit", this.$onFormSubmit_$);
  for(var $els$$7$$ = this.$getElement$().elements, $el$$68$$, $i$$124$$ = 0;$el$$68$$ = $els$$7$$[$i$$124$$];$i$$124$$++) {
    if(!($el$$68$$.disabled || $el$$68$$.tagName.toLowerCase() === "INPUT".$FIELDSET$)) {
      if($JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$68$$, "focus", this.$onFormElementFocus_$), $JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$68$$, "blur", this.$onFormElementBlur_$), $JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$68$$, "click", this.$onFormElementClick_$), "SELECT" === $el$$68$$.tagName && $JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$68$$, "change", this.$onFormElementSelect_$), "INPUT" === $el$$68$$.tagName) {
        var $ih$$ = new $goog$events$KeyHandler$$;
        $JSCompiler_StaticMethods_attach$$($ih$$, $el$$68$$);
        $JSCompiler_StaticMethods_listen$$($handler$$46$$, $ih$$, "key", this.$handleKeyEvent_$)
      }
    }
  }
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_391$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_391$$.$metaMap_$)
  }catch($metaError$$) {
    this.$logger_$.info($metaError$$)
  }
};
function $JSCompiler_StaticMethods_getAsJSON$$($JSCompiler_StaticMethods_getAsJSON$self$$) {
  for(var $json_res$$ = {}, $el$$69_form_value_values$$16$$, $i$$125$$ = 0;$el$$69_form_value_values$$16$$ = $JSCompiler_StaticMethods_getAsJSON$self$$.$getElement$().elements[$i$$125$$];$i$$125$$++) {
    if(!($el$$69_form_value_values$$16$$.disabled || "fieldset" == $el$$69_form_value_values$$16$$.tagName.toLowerCase())) {
      var $name$$83$$ = $el$$69_form_value_values$$16$$.name;
      if(!$goog$string$isEmpty$$($name$$83$$)) {
        switch($el$$69_form_value_values$$16$$.type.toLowerCase()) {
          case "file":
          ;
          case "submit":
          ;
          case "reset":
          ;
          case "button":
            break;
          case "select-multiple":
            $el$$69_form_value_values$$16$$ = $goog$dom$forms$getValue$$($el$$69_form_value_values$$16$$);
            if($el$$69_form_value_values$$16$$ != $JSCompiler_alias_NULL$$) {
              $json_res$$[$name$$83$$] = [];
              for(var $value$$99$$, $j$$10$$ = 0;$value$$99$$ = $el$$69_form_value_values$$16$$[$j$$10$$];$j$$10$$++) {
                $json_res$$[$name$$83$$].push($value$$99$$)
              }
            }
            break;
          default:
            $el$$69_form_value_values$$16$$ = $goog$dom$forms$getValue$$($el$$69_form_value_values$$16$$), $el$$69_form_value_values$$16$$ != $JSCompiler_alias_NULL$$ && ($json_res$$[$name$$83$$] = $el$$69_form_value_values$$16$$)
        }
      }
    }
  }
  return $json_res$$
}
function $JSCompiler_StaticMethods_processFieldEvent_$$($JSCompiler_StaticMethods_processFieldEvent_$self$$, $event$$4$$, $fieldElement$$) {
  var $controlHolderEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($fieldElement$$, $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_processFieldEvent_$self$$.$model_$.$control_holder_class$);
  if($controlHolderEl$$ != $JSCompiler_alias_NULL$$) {
    switch($event$$4$$) {
      case 0:
        $goog$dom$classes$add$$($controlHolderEl$$, "focused");
        $goog$dom$classes$remove$$($controlHolderEl$$, "error");
        $goog$dom$classes$remove$$($controlHolderEl$$, "valid");
        break;
      case 1:
        $goog$dom$classes$remove$$($controlHolderEl$$, "focused");
        break;
      case 2:
        $goog$dom$classes$add$$($controlHolderEl$$, "valid");
        $JSCompiler_StaticMethods_processFieldEvent_$self$$.dispatchEvent(new $goog$events$Event$$("field_validated", $fieldElement$$));
        break;
      case 3:
        $goog$dom$classes$add$$($controlHolderEl$$, "error"), $JSCompiler_StaticMethods_processFieldEvent_$self$$.dispatchEvent(new $goog$events$Event$$("field_invalidated", $fieldElement$$))
    }
  }
}
$JSCompiler_prototypeAlias$$.$handleKeyEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEvent_$$($e$$52$$) {
  27 === $e$$52$$.keyCode ? $e$$52$$.preventDefault() : $e$$52$$.keyCode === $goog$events$KeyCodes$ENTER$$ || $e$$52$$.keyCode === $goog$events$KeyCodes$$.$NUMPAD_ENTER$ || $uniform$InputFilters$$.$getInstance$().filter($e$$52$$)
};
$JSCompiler_prototypeAlias$$.$onFormElementFocus_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementFocus_$$($e$$53$$) {
  $JSCompiler_StaticMethods_processFieldEvent_$$(this, 0, $e$$53$$.target)
};
$JSCompiler_prototypeAlias$$.$onFormElementClick_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementClick_$$() {
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_394$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_394$$.$metaMap_$)
  }catch($metaError$$1$$) {
    this.$logger_$.info($metaError$$1$$)
  }
};
$JSCompiler_prototypeAlias$$.$onFormElementSelect_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementSelect_$$() {
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_397$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_397$$.$metaMap_$)
  }catch($metaError$$2$$) {
    this.$logger_$.info($metaError$$2$$)
  }
};
$JSCompiler_prototypeAlias$$.$onFormElementBlur_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementBlur_$$($e$$56$$) {
  $JSCompiler_StaticMethods_processFieldEvent_$$(this, 1, $e$$56$$.target);
  var $caption$$13$$ = $JSCompiler_StaticMethods_getCaptionForElement$$(this, $e$$56$$.target);
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_400$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_400$$.$metaMap_$)
  }catch($metaError$$3$$) {
    this.$logger_$.info($metaError$$3$$)
  }
  try {
    var $JSCompiler_StaticMethods_runValidation$self$$inline_403$$ = $uniform$Validators$$.$getInstance$();
    $uniform$util$executeElementMetaTags$$($e$$56$$.target, "data-uniform-validators", $JSCompiler_StaticMethods_runValidation$self$$inline_403$$.$metaMap_$, $caption$$13$$);
    $JSCompiler_StaticMethods_processFieldEvent_$$(this, 2, $e$$56$$.target)
  }catch($validationError$$) {
    this.$logger_$.info($validationError$$), $JSCompiler_StaticMethods_processFieldEvent_$$(this, 3, $e$$56$$.target)
  }
};
$JSCompiler_prototypeAlias$$.$onWindowBeforeUnload_$ = function $$JSCompiler_prototypeAlias$$$$onWindowBeforeUnload_$$() {
  var $finalFormValue$$ = $goog$dom$forms$getFormDataString$$(this.$getElement$());
  return this.$initialFormValue_$ != $finalFormValue$$ && $goog$dom$classes$has$$(this.$getElement$(), "askOnLeave") ? confirm("Are you sure you want to leave this page without saving this form?") : $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.focus = function $$JSCompiler_prototypeAlias$$$focus$() {
  for(var $el$$inline_407_el$$inline_409_els$$8$$ = this.$getElement$().elements, $el$$70$$, $i$$126$$ = 0;$el$$70$$ = $el$$inline_407_el$$inline_409_els$$8$$[$i$$126$$];$i$$126$$++) {
    if(!($el$$70$$.disabled || $el$$70$$.tagName.toLowerCase() === "INPUT".$FIELDSET$)) {
      if("SELECT" === $el$$70$$.tagName) {
        $el$$inline_407_el$$inline_409_els$$8$$ = $el$$70$$;
        $el$$inline_407_el$$inline_409_els$$8$$.focus();
        $el$$inline_407_el$$inline_409_els$$8$$.select && $el$$inline_407_el$$inline_409_els$$8$$.select();
        break
      }else {
        if("INPUT" === $el$$70$$.tagName) {
          $el$$inline_407_el$$inline_409_els$$8$$ = $el$$70$$;
          $el$$inline_407_el$$inline_409_els$$8$$.focus();
          $el$$inline_407_el$$inline_409_els$$8$$.select && $el$$inline_407_el$$inline_409_els$$8$$.select();
          break
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_showFormError$$($JSCompiler_StaticMethods_showFormError$self$$, $messages$$) {
  var $dom$$5$$ = $JSCompiler_StaticMethods_showFormError$self$$.$getDomHelper$(), $currentErrorMsgEl_newErrorMsgEl$$ = $dom$$5$$.$getElement$("errorMsg");
  $currentErrorMsgEl_newErrorMsgEl$$ && $goog$dom$removeNode$$($currentErrorMsgEl_newErrorMsgEl$$);
  var $errorMessagesList$$ = $dom$$5$$.$createDom$("ol");
  $goog$array$forEach$$($messages$$, function($message$$21$$) {
    $errorMessagesList$$.appendChild($dom$$5$$.$createDom$("li", $JSCompiler_alias_VOID$$, $message$$21$$))
  });
  $currentErrorMsgEl_newErrorMsgEl$$ = $dom$$5$$.$createDom$("div", {id:"errorMsg"}, $dom$$5$$.$createDom$("h3", $JSCompiler_alias_VOID$$, "Sorry, this form needs corrections."), $errorMessagesList$$);
  $dom$$5$$.$insertSiblingBefore$($currentErrorMsgEl_newErrorMsgEl$$, $dom$$5$$.$getFirstElementChild$($JSCompiler_StaticMethods_showFormError$self$$.$getElement$()))
}
function $JSCompiler_StaticMethods_getCaptionForElement$$($JSCompiler_StaticMethods_getCaptionForElement$self$$, $el$$72$$) {
  if($goog$isDefAndNotNull$$($el$$72$$.getAttribute("data-uniform-label"))) {
    return $el$$72$$.getAttribute("data-uniform-label")
  }
  var $controlHolderEl$$1_labelEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($el$$72$$, "label");
  if($controlHolderEl$$1_labelEl$$ == $JSCompiler_alias_NULL$$) {
    var $controlHolderEl$$1_labelEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($el$$72$$, $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getCaptionForElement$self$$.$model_$.$control_holder_class$), $allLabels_caption$$14$$ = $goog$dom$getElementsByTagNameAndClass$$("label", $JSCompiler_alias_VOID$$, $controlHolderEl$$1_labelEl$$), $controlHolderEl$$1_labelEl$$ = $goog$array$find$$($allLabels_caption$$14$$, function($lbEl$$) {
      if($goog$dom$getNextElementSibling$$($lbEl$$) == $el$$72$$) {
        return $JSCompiler_alias_TRUE$$
      }
    });
    $controlHolderEl$$1_labelEl$$ != $JSCompiler_alias_NULL$$ || ($controlHolderEl$$1_labelEl$$ = $allLabels_caption$$14$$[0])
  }
  $allLabels_caption$$14$$ = "";
  $controlHolderEl$$1_labelEl$$ != $JSCompiler_alias_NULL$$ && ($allLabels_caption$$14$$ = $goog$dom$getTextContent$$($controlHolderEl$$1_labelEl$$));
  return $allLabels_caption$$14$$
}
$JSCompiler_prototypeAlias$$.$validate$ = function $$JSCompiler_prototypeAlias$$$$validate$$($opt_control_holder_class$$2$$) {
  for(var $errors$$ = [], $els$$9$$ = this.$getElement$().elements, $controlHolderEl$$2_el$$73$$, $i$$127$$ = 0;$controlHolderEl$$2_el$$73$$ = $els$$9$$[$i$$127$$];$i$$127$$++) {
    if(!($controlHolderEl$$2_el$$73$$.disabled || "fieldset" == $controlHolderEl$$2_el$$73$$.tagName.toLowerCase())) {
      var $caption$$15$$ = $JSCompiler_StaticMethods_getCaptionForElement$$(this, $controlHolderEl$$2_el$$73$$);
      try {
        var $JSCompiler_StaticMethods_runValidation$self$$inline_411$$ = $uniform$Validators$$.$getInstance$();
        $uniform$util$executeElementMetaTags$$($controlHolderEl$$2_el$$73$$, "data-uniform-validators", $JSCompiler_StaticMethods_runValidation$self$$inline_411$$.$metaMap_$, $caption$$15$$)
      }catch($validationError$$1$$) {
        this.$logger_$.info($validationError$$1$$), $controlHolderEl$$2_el$$73$$ = $goog$dom$getAncestorByTagNameAndClass$$($controlHolderEl$$2_el$$73$$, $JSCompiler_alias_NULL$$, $opt_control_holder_class$$2$$ || this.$model_$.$control_holder_class$), $controlHolderEl$$2_el$$73$$ != $JSCompiler_alias_NULL$$ && $goog$dom$classes$add$$($controlHolderEl$$2_el$$73$$, "error"), $errors$$.push($validationError$$1$$)
      }
    }
  }
  return $errors$$
};
$JSCompiler_prototypeAlias$$.$onFormSubmit_$ = function $$JSCompiler_prototypeAlias$$$$onFormSubmit_$$($e$$58$$) {
  var $errors$$1_resSubmit$$ = this.$validate$();
  if(0 < $errors$$1_resSubmit$$.length) {
    return this.dispatchEvent(new $goog$events$Event$$("uniform_invalidated", this)), $JSCompiler_StaticMethods_showFormError$$(this, $errors$$1_resSubmit$$), $goog$dom$classes$add$$(this.$getElement$(), "failedSubmit"), $e$$58$$.preventDefault(), $JSCompiler_alias_FALSE$$
  }
  $goog$dom$classes$remove$$(this.$getElement$(), "failedSubmit");
  $goog$dom$classes$remove$$(this.$getElement$(), "askOnLeave");
  ($errors$$1_resSubmit$$ = this.dispatchEvent(new $goog$events$Event$$("uniform_submit", this))) || $e$$58$$.preventDefault();
  return $errors$$1_resSubmit$$
};
$goog$ui$registry$setDecoratorByClassName$$("uniForm", function() {
  return new $uniform$Uniform$$
});
// Input 65
// Input 66
function $goog$crypt$Hash$$() {
}
;
// Input 67
function $goog$crypt$Sha2$$() {
  this.$chunk$ = [];
  this.total = this.$inChunk$ = 0;
  for(var $array$$inline_417$$ = [], $i$$inline_418$$ = 0;64 > $i$$inline_418$$;$i$$inline_418$$++) {
    $array$$inline_417$$[$i$$inline_418$$] = 0
  }
  this.$pad_$ = $array$$inline_417$$;
  this.$pad_$[0] = 128;
  this.hash = [];
  this.$numHashBlocks$ = 0;
  this.reset()
}
$goog$inherits$$($goog$crypt$Sha2$$, $goog$crypt$Hash$$);
function $JSCompiler_StaticMethods_computeChunk_$$($JSCompiler_StaticMethods_computeChunk_$self$$, $chunk$$) {
  for(var $w$$8$$ = [], $i$$132_index$$64$$ = 0, $a$$30_offset$$17$$ = 0;$a$$30_offset$$17$$ < $chunk$$.length;) {
    $w$$8$$[$i$$132_index$$64$$++] = $chunk$$[$a$$30_offset$$17$$] << 24 | $chunk$$[$a$$30_offset$$17$$ + 1] << 16 | $chunk$$[$a$$30_offset$$17$$ + 2] << 8 | $chunk$$[$a$$30_offset$$17$$ + 3], $a$$30_offset$$17$$ = 4 * $i$$132_index$$64$$
  }
  for($i$$132_index$$64$$ = 16;64 > $i$$132_index$$64$$;$i$$132_index$$64$$++) {
    $w$$8$$[$i$$132_index$$64$$] = $w$$8$$[$i$$132_index$$64$$ - 16] + (($w$$8$$[$i$$132_index$$64$$ - 15] >>> 7 | $w$$8$$[$i$$132_index$$64$$ - 15] << 25) ^ ($w$$8$$[$i$$132_index$$64$$ - 15] >>> 18 | $w$$8$$[$i$$132_index$$64$$ - 15] << 14) ^ $w$$8$$[$i$$132_index$$64$$ - 15] >>> 3) + $w$$8$$[$i$$132_index$$64$$ - 7] + (($w$$8$$[$i$$132_index$$64$$ - 2] >>> 17 | $w$$8$$[$i$$132_index$$64$$ - 2] << 15) ^ ($w$$8$$[$i$$132_index$$64$$ - 2] >>> 19 | $w$$8$$[$i$$132_index$$64$$ - 2] << 13) ^ $w$$8$$[$i$$132_index$$64$$ - 
    2] >>> 10) & 4294967295
  }
  for(var $a$$30_offset$$17$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[0], $b$$26$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[1], $c$$5$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[2], $d$$2$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[3], $e$$59$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[4], $f$$41$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[5], $g$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[6], $h$$6$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[7], 
  $i$$132_index$$64$$ = 0;64 > $i$$132_index$$64$$;$i$$132_index$$64$$++) {
    var $t2$$ = (($a$$30_offset$$17$$ >>> 2 | $a$$30_offset$$17$$ << 30) ^ ($a$$30_offset$$17$$ >>> 13 | $a$$30_offset$$17$$ << 19) ^ ($a$$30_offset$$17$$ >>> 22 | $a$$30_offset$$17$$ << 10)) + ($a$$30_offset$$17$$ & $b$$26$$ ^ $a$$30_offset$$17$$ & $c$$5$$ ^ $b$$26$$ & $c$$5$$) & 4294967295, $t1$$ = $h$$6$$ + (($e$$59$$ >>> 6 | $e$$59$$ << 26) ^ ($e$$59$$ >>> 11 | $e$$59$$ << 21) ^ ($e$$59$$ >>> 25 | $e$$59$$ << 7)) + ($e$$59$$ & $f$$41$$ ^ ~$e$$59$$ & $g$$) + $JSCompiler_StaticMethods_computeChunk_$self$$.$K_$[$i$$132_index$$64$$] + 
    $w$$8$$[$i$$132_index$$64$$] & 4294967295, $h$$6$$ = $g$$, $g$$ = $f$$41$$, $f$$41$$ = $e$$59$$, $e$$59$$ = $d$$2$$ + $t1$$ & 4294967295, $d$$2$$ = $c$$5$$, $c$$5$$ = $b$$26$$, $b$$26$$ = $a$$30_offset$$17$$, $a$$30_offset$$17$$ = $t1$$ + $t2$$ & 4294967295
  }
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[0] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[0] + $a$$30_offset$$17$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[1] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[1] + $b$$26$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[2] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[2] + $c$$5$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[3] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[3] + $d$$2$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[4] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[4] + $e$$59$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[5] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[5] + $f$$41$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[6] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[6] + $g$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[7] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[7] + $h$$6$$ & 4294967295
}
$goog$crypt$Sha2$$.prototype.update = function $$goog$crypt$Sha2$$$$update$($message$$22$$, $opt_length$$10$$) {
  $goog$isDef$$($opt_length$$10$$) || ($opt_length$$10$$ = $message$$22$$.length);
  var $n$$6$$ = 0, $inChunk$$ = this.$inChunk$;
  if($goog$isString$$($message$$22$$)) {
    for(;$n$$6$$ < $opt_length$$10$$;) {
      this.$chunk$[$inChunk$$++] = $message$$22$$.charCodeAt($n$$6$$++), 64 == $inChunk$$ && ($JSCompiler_StaticMethods_computeChunk_$$(this, this.$chunk$), $inChunk$$ = 0)
    }
  }else {
    for(;$n$$6$$ < $opt_length$$10$$;) {
      this.$chunk$[$inChunk$$++] = $message$$22$$[$n$$6$$++], 64 == $inChunk$$ && ($JSCompiler_StaticMethods_computeChunk_$$(this, this.$chunk$), $inChunk$$ = 0)
    }
  }
  this.$inChunk$ = $inChunk$$;
  this.total += $opt_length$$10$$
};
$goog$crypt$Sha2$$.prototype.$K_$ = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 
2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
// Input 68
function $goog$crypt$Sha256$$() {
  $goog$crypt$Sha2$$.call(this)
}
$goog$inherits$$($goog$crypt$Sha256$$, $goog$crypt$Sha2$$);
$goog$crypt$Sha256$$.prototype.reset = function $$goog$crypt$Sha256$$$$reset$() {
  this.$chunk$ = [];
  this.total = this.$inChunk$ = 0;
  this.hash = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  this.$numHashBlocks$ = 8
};
// Input 69
function $goog$math$Long$$($low$$, $high$$) {
  this.$low_$ = $low$$ | 0;
  this.$high_$ = $high$$ | 0
}
var $goog$math$Long$IntCache_$$ = {};
function $goog$math$Long$fromInt$$($value$$100$$) {
  if(-128 <= $value$$100$$ && 128 > $value$$100$$) {
    var $cachedObj_obj$$96$$ = $goog$math$Long$IntCache_$$[$value$$100$$];
    if($cachedObj_obj$$96$$) {
      return $cachedObj_obj$$96$$
    }
  }
  $cachedObj_obj$$96$$ = new $goog$math$Long$$($value$$100$$ | 0, 0 > $value$$100$$ ? -1 : 0);
  -128 <= $value$$100$$ && 128 > $value$$100$$ && ($goog$math$Long$IntCache_$$[$value$$100$$] = $cachedObj_obj$$96$$);
  return $cachedObj_obj$$96$$
}
function $goog$math$Long$fromNumber$$($value$$101$$) {
  return isNaN($value$$101$$) || !isFinite($value$$101$$) ? $goog$math$Long$ZERO$$ : $value$$101$$ <= -$goog$math$Long$TWO_PWR_63_DBL_$$ ? $goog$math$Long$MIN_VALUE$$ : $value$$101$$ + 1 >= $goog$math$Long$TWO_PWR_63_DBL_$$ ? $goog$math$Long$MAX_VALUE$$ : 0 > $value$$101$$ ? $JSCompiler_StaticMethods_negate$$($goog$math$Long$fromNumber$$(-$value$$101$$)) : new $goog$math$Long$$($value$$101$$ % $goog$math$Long$TWO_PWR_32_DBL_$$ | 0, $value$$101$$ / $goog$math$Long$TWO_PWR_32_DBL_$$ | 0)
}
var $goog$math$Long$TWO_PWR_32_DBL_$$ = 4294967296, $goog$math$Long$TWO_PWR_63_DBL_$$ = $goog$math$Long$TWO_PWR_32_DBL_$$ * $goog$math$Long$TWO_PWR_32_DBL_$$ / 2, $goog$math$Long$ZERO$$ = $goog$math$Long$fromInt$$(0), $goog$math$Long$ONE$$ = $goog$math$Long$fromInt$$(1), $goog$math$Long$NEG_ONE$$ = $goog$math$Long$fromInt$$(-1), $goog$math$Long$MAX_VALUE$$ = new $goog$math$Long$$(-1, 2147483647), $goog$math$Long$MIN_VALUE$$ = new $goog$math$Long$$(0, -2147483648), $goog$math$Long$TWO_PWR_24_$$ = 
$goog$math$Long$fromInt$$(16777216);
$JSCompiler_prototypeAlias$$ = $goog$math$Long$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$($opt_radix$$2_radix$$1$$) {
  $opt_radix$$2_radix$$1$$ = $opt_radix$$2_radix$$1$$ || 10;
  (2 > $opt_radix$$2_radix$$1$$ || 36 < $opt_radix$$2_radix$$1$$) && $JSCompiler_alias_THROW$$(Error("radix out of range: " + $opt_radix$$2_radix$$1$$));
  if($JSCompiler_StaticMethods_isZero$$(this)) {
    return"0"
  }
  if(0 > this.$high_$) {
    if(this.$equals$($goog$math$Long$MIN_VALUE$$)) {
      var $radixLong_rem$$ = $goog$math$Long$fromNumber$$($opt_radix$$2_radix$$1$$), $div$$2_radixToPower$$1$$ = $JSCompiler_StaticMethods_div$$(this, $radixLong_rem$$), $radixLong_rem$$ = $JSCompiler_StaticMethods_subtract$$($div$$2_radixToPower$$1$$.multiply($radixLong_rem$$), this);
      return $div$$2_radixToPower$$1$$.toString($opt_radix$$2_radix$$1$$) + $radixLong_rem$$.$low_$.toString($opt_radix$$2_radix$$1$$)
    }
    return"-" + $JSCompiler_StaticMethods_negate$$(this).toString($opt_radix$$2_radix$$1$$)
  }
  for(var $div$$2_radixToPower$$1$$ = $goog$math$Long$fromNumber$$(Math.pow($opt_radix$$2_radix$$1$$, 6)), $radixLong_rem$$ = this, $result$$16$$ = "";;) {
    var $remDiv$$ = $JSCompiler_StaticMethods_div$$($radixLong_rem$$, $div$$2_radixToPower$$1$$), $digits$$ = $JSCompiler_StaticMethods_subtract$$($radixLong_rem$$, $remDiv$$.multiply($div$$2_radixToPower$$1$$)).$low_$.toString($opt_radix$$2_radix$$1$$), $radixLong_rem$$ = $remDiv$$;
    if($JSCompiler_StaticMethods_isZero$$($radixLong_rem$$)) {
      return $digits$$ + $result$$16$$
    }
    for(;6 > $digits$$.length;) {
      $digits$$ = "0" + $digits$$
    }
    $result$$16$$ = "" + $digits$$ + $result$$16$$
  }
};
function $JSCompiler_StaticMethods_getLowBitsUnsigned$$($JSCompiler_StaticMethods_getLowBitsUnsigned$self$$) {
  return 0 <= $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$ ? $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$ : $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$
}
function $JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_isZero$self$$) {
  return 0 == $JSCompiler_StaticMethods_isZero$self$$.$high_$ && 0 == $JSCompiler_StaticMethods_isZero$self$$.$low_$
}
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($other$$6$$) {
  return this.$high_$ == $other$$6$$.$high_$ && this.$low_$ == $other$$6$$.$low_$
};
function $JSCompiler_StaticMethods_compare$$($JSCompiler_StaticMethods_compare$self$$, $other$$12$$) {
  if($JSCompiler_StaticMethods_compare$self$$.$equals$($other$$12$$)) {
    return 0
  }
  var $thisNeg$$ = 0 > $JSCompiler_StaticMethods_compare$self$$.$high_$, $otherNeg$$ = 0 > $other$$12$$.$high_$;
  return $thisNeg$$ && !$otherNeg$$ ? -1 : !$thisNeg$$ && $otherNeg$$ ? 1 : 0 > $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_compare$self$$, $other$$12$$).$high_$ ? -1 : 1
}
function $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$self$$) {
  return $JSCompiler_StaticMethods_negate$self$$.$equals$($goog$math$Long$MIN_VALUE$$) ? $goog$math$Long$MIN_VALUE$$ : $JSCompiler_StaticMethods_negate$self$$.not().add($goog$math$Long$ONE$$)
}
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($c16_other$$13$$) {
  var $a48$$ = this.$high_$ >>> 16, $a32_c48$$ = this.$high_$ & 65535, $a16_c32$$ = this.$low_$ >>> 16, $b48$$ = $c16_other$$13$$.$high_$ >>> 16, $b32$$ = $c16_other$$13$$.$high_$ & 65535, $b16$$ = $c16_other$$13$$.$low_$ >>> 16, $c00$$;
  $c00$$ = 0 + ((this.$low_$ & 65535) + ($c16_other$$13$$.$low_$ & 65535));
  $c16_other$$13$$ = 0 + ($c00$$ >>> 16);
  $c16_other$$13$$ += $a16_c32$$ + $b16$$;
  $a16_c32$$ = 0 + ($c16_other$$13$$ >>> 16);
  $a16_c32$$ += $a32_c48$$ + $b32$$;
  $a32_c48$$ = 0 + ($a16_c32$$ >>> 16);
  $a32_c48$$ = $a32_c48$$ + ($a48$$ + $b48$$) & 65535;
  return new $goog$math$Long$$(($c16_other$$13$$ & 65535) << 16 | $c00$$ & 65535, $a32_c48$$ << 16 | $a16_c32$$ & 65535)
};
function $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_subtract$self$$, $other$$14$$) {
  return $JSCompiler_StaticMethods_subtract$self$$.add($JSCompiler_StaticMethods_negate$$($other$$14$$))
}
$JSCompiler_prototypeAlias$$.multiply = function $$JSCompiler_prototypeAlias$$$multiply$($b00$$1_other$$15$$) {
  if($JSCompiler_StaticMethods_isZero$$(this) || $JSCompiler_StaticMethods_isZero$$($b00$$1_other$$15$$)) {
    return $goog$math$Long$ZERO$$
  }
  if(this.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return 1 == ($b00$$1_other$$15$$.$low_$ & 1) ? $goog$math$Long$MIN_VALUE$$ : $goog$math$Long$ZERO$$
  }
  if($b00$$1_other$$15$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return 1 == (this.$low_$ & 1) ? $goog$math$Long$MIN_VALUE$$ : $goog$math$Long$ZERO$$
  }
  if(0 > this.$high_$) {
    return 0 > $b00$$1_other$$15$$.$high_$ ? $JSCompiler_StaticMethods_negate$$(this).multiply($JSCompiler_StaticMethods_negate$$($b00$$1_other$$15$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$$(this).multiply($b00$$1_other$$15$$))
  }
  if(0 > $b00$$1_other$$15$$.$high_$) {
    return $JSCompiler_StaticMethods_negate$$(this.multiply($JSCompiler_StaticMethods_negate$$($b00$$1_other$$15$$)))
  }
  if(0 > $JSCompiler_StaticMethods_compare$$(this, $goog$math$Long$TWO_PWR_24_$$) && 0 > $JSCompiler_StaticMethods_compare$$($b00$$1_other$$15$$, $goog$math$Long$TWO_PWR_24_$$)) {
    return $goog$math$Long$fromNumber$$((this.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$(this)) * ($b00$$1_other$$15$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($b00$$1_other$$15$$)))
  }
  var $a48$$1$$ = this.$high_$ >>> 16, $a32$$1$$ = this.$high_$ & 65535, $a16$$1$$ = this.$low_$ >>> 16, $a00$$1$$ = this.$low_$ & 65535, $b48$$1$$ = $b00$$1_other$$15$$.$high_$ >>> 16, $b32$$1$$ = $b00$$1_other$$15$$.$high_$ & 65535, $b16$$1$$ = $b00$$1_other$$15$$.$low_$ >>> 16;
  $b00$$1_other$$15$$ = $b00$$1_other$$15$$.$low_$ & 65535;
  var $c48$$1$$, $c32$$1$$, $c16$$1$$, $c00$$1$$;
  $c00$$1$$ = 0 + $a00$$1$$ * $b00$$1_other$$15$$;
  $c16$$1$$ = 0 + ($c00$$1$$ >>> 16);
  $c16$$1$$ += $a16$$1$$ * $b00$$1_other$$15$$;
  $c32$$1$$ = 0 + ($c16$$1$$ >>> 16);
  $c16$$1$$ = ($c16$$1$$ & 65535) + $a00$$1$$ * $b16$$1$$;
  $c32$$1$$ += $c16$$1$$ >>> 16;
  $c16$$1$$ &= 65535;
  $c32$$1$$ += $a32$$1$$ * $b00$$1_other$$15$$;
  $c48$$1$$ = 0 + ($c32$$1$$ >>> 16);
  $c32$$1$$ = ($c32$$1$$ & 65535) + $a16$$1$$ * $b16$$1$$;
  $c48$$1$$ += $c32$$1$$ >>> 16;
  $c32$$1$$ &= 65535;
  $c32$$1$$ += $a00$$1$$ * $b32$$1$$;
  $c48$$1$$ += $c32$$1$$ >>> 16;
  $c32$$1$$ &= 65535;
  $c48$$1$$ = $c48$$1$$ + ($a48$$1$$ * $b00$$1_other$$15$$ + $a32$$1$$ * $b16$$1$$ + $a16$$1$$ * $b32$$1$$ + $a00$$1$$ * $b48$$1$$) & 65535;
  return new $goog$math$Long$$($c16$$1$$ << 16 | $c00$$1$$ & 65535, $c48$$1$$ << 16 | $c32$$1$$)
};
function $JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_div$self$$, $other$$16$$) {
  $JSCompiler_StaticMethods_isZero$$($other$$16$$) && $JSCompiler_alias_THROW$$(Error("division by zero"));
  if($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_div$self$$)) {
    return $goog$math$Long$ZERO$$
  }
  if($JSCompiler_StaticMethods_div$self$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    if($other$$16$$.$equals$($goog$math$Long$ONE$$) || $other$$16$$.$equals$($goog$math$Long$NEG_ONE$$)) {
      return $goog$math$Long$MIN_VALUE$$
    }
    if($other$$16$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
      return $goog$math$Long$ONE$$
    }
    var $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$;
    $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ = 1;
    if(0 == $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$) {
      $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ = $JSCompiler_StaticMethods_div$self$$
    }else {
      var $high$$inline_426_rem$$1$$ = $JSCompiler_StaticMethods_div$self$$.$high_$;
      $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ = 32 > $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ ? new $goog$math$Long$$($JSCompiler_StaticMethods_div$self$$.$low_$ >>> $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ | $high$$inline_426_rem$$1$$ << 32 - $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$, $high$$inline_426_rem$$1$$ >> $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$) : new $goog$math$Long$$($high$$inline_426_rem$$1$$ >> 
      $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ - 32, 0 <= $high$$inline_426_rem$$1$$ ? 0 : -1)
    }
    $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ = $JSCompiler_StaticMethods_div$$($JSCompiler_inline_result$$13_approx_numBits$$inline_425$$, $other$$16$$).shiftLeft(1);
    if($JSCompiler_inline_result$$13_approx_numBits$$inline_425$$.$equals$($goog$math$Long$ZERO$$)) {
      return 0 > $other$$16$$.$high_$ ? $goog$math$Long$ONE$$ : $goog$math$Long$NEG_ONE$$
    }
    $high$$inline_426_rem$$1$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_div$self$$, $other$$16$$.multiply($JSCompiler_inline_result$$13_approx_numBits$$inline_425$$));
    return $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$.add($JSCompiler_StaticMethods_div$$($high$$inline_426_rem$$1$$, $other$$16$$))
  }
  if($other$$16$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return $goog$math$Long$ZERO$$
  }
  if(0 > $JSCompiler_StaticMethods_div$self$$.$high_$) {
    return 0 > $other$$16$$.$high_$ ? $JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$self$$), $JSCompiler_StaticMethods_negate$$($other$$16$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$self$$), $other$$16$$))
  }
  if(0 > $other$$16$$.$high_$) {
    return $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_div$self$$, $JSCompiler_StaticMethods_negate$$($other$$16$$)))
  }
  for(var $res$$7$$ = $goog$math$Long$ZERO$$, $high$$inline_426_rem$$1$$ = $JSCompiler_StaticMethods_div$self$$;0 <= $JSCompiler_StaticMethods_compare$$($high$$inline_426_rem$$1$$, $other$$16$$);) {
    $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ = Math.max(1, Math.floor(($high$$inline_426_rem$$1$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($high$$inline_426_rem$$1$$)) / ($other$$16$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($other$$16$$))));
    for(var $delta$$1_log2$$ = Math.ceil(Math.log($JSCompiler_inline_result$$13_approx_numBits$$inline_425$$) / Math.LN2), $delta$$1_log2$$ = 48 >= $delta$$1_log2$$ ? 1 : Math.pow(2, $delta$$1_log2$$ - 48), $approxRes$$ = $goog$math$Long$fromNumber$$($JSCompiler_inline_result$$13_approx_numBits$$inline_425$$), $approxRem$$ = $approxRes$$.multiply($other$$16$$);0 > $approxRem$$.$high_$ || 0 < $JSCompiler_StaticMethods_compare$$($approxRem$$, $high$$inline_426_rem$$1$$);) {
      $JSCompiler_inline_result$$13_approx_numBits$$inline_425$$ -= $delta$$1_log2$$, $approxRes$$ = $goog$math$Long$fromNumber$$($JSCompiler_inline_result$$13_approx_numBits$$inline_425$$), $approxRem$$ = $approxRes$$.multiply($other$$16$$)
    }
    $JSCompiler_StaticMethods_isZero$$($approxRes$$) && ($approxRes$$ = $goog$math$Long$ONE$$);
    $res$$7$$ = $res$$7$$.add($approxRes$$);
    $high$$inline_426_rem$$1$$ = $JSCompiler_StaticMethods_subtract$$($high$$inline_426_rem$$1$$, $approxRem$$)
  }
  return $res$$7$$
}
$JSCompiler_prototypeAlias$$.not = function $$JSCompiler_prototypeAlias$$$not$() {
  return new $goog$math$Long$$(~this.$low_$, ~this.$high_$)
};
$JSCompiler_prototypeAlias$$.shiftLeft = function $$JSCompiler_prototypeAlias$$$shiftLeft$($numBits$$) {
  $numBits$$ &= 63;
  if(0 == $numBits$$) {
    return this
  }
  var $low$$1$$ = this.$low_$;
  return 32 > $numBits$$ ? new $goog$math$Long$$($low$$1$$ << $numBits$$, this.$high_$ << $numBits$$ | $low$$1$$ >>> 32 - $numBits$$) : new $goog$math$Long$$(0, $low$$1$$ << $numBits$$ - 32)
};
// Input 70
function $bitex$util$getFormAsJSON$$($element$$110$$) {
  for(var $json_res$$1$$ = {}, $el$$74_form_value$$1_values$$17$$, $i$$135$$ = 0;$el$$74_form_value$$1_values$$17$$ = $element$$110$$.elements[$i$$135$$];$i$$135$$++) {
    if(!($el$$74_form_value$$1_values$$17$$.disabled || "fieldset" == $el$$74_form_value$$1_values$$17$$.tagName.toLowerCase())) {
      var $name$$84$$ = $el$$74_form_value$$1_values$$17$$.name;
      if(!$goog$string$isEmpty$$($name$$84$$)) {
        switch($el$$74_form_value$$1_values$$17$$.type.toLowerCase()) {
          case "file":
          ;
          case "submit":
          ;
          case "reset":
          ;
          case "button":
            break;
          case "select-multiple":
            $el$$74_form_value$$1_values$$17$$ = $goog$dom$forms$getValue$$($el$$74_form_value$$1_values$$17$$);
            if($el$$74_form_value$$1_values$$17$$ != $JSCompiler_alias_NULL$$) {
              $json_res$$1$$[$name$$84$$] = [];
              for(var $value$$103$$, $j$$12$$ = 0;$value$$103$$ = $el$$74_form_value$$1_values$$17$$[$j$$12$$];$j$$12$$++) {
                $json_res$$1$$[$name$$84$$].push($value$$103$$)
              }
            }
            break;
          default:
            $el$$74_form_value$$1_values$$17$$ = $goog$dom$forms$getValue$$($el$$74_form_value$$1_values$$17$$), $el$$74_form_value$$1_values$$17$$ != $JSCompiler_alias_NULL$$ && ($json_res$$1$$[$name$$84$$] = $el$$74_form_value$$1_values$$17$$)
        }
      }
    }
  }
  return $json_res$$1$$
}
function $bitex$util$getPseudoName$$($user_id$$) {
  return"Os Oso Cow Pig Dog Cat Rat Fox Ram Bat Owl Oca Ruc Pop Gos Oie Pie Coq Pic Kuh Wal Hai Pfau Toro Hund Paon Gall Lula Loro Drac Gato Rata Llop Vaca Rato Sapo Lobo Urso Puma Orca Peru Rato Galo Lynx Hawk Pony Frog Wolf Goat Lion Seal Bear Bull Deer Puma Orca Pavo Swan Cerf Gallo Pulpo Ostra Pombo Touro Veado Cabra Poney Porco Ganso Corvo Hiena Bison Cobra Tigre Polvo Zebra Goose Raven Sloth Viper Whale Lemur Mouse Skunk Hyena Bison Camel Crock Eagle Snake Otter Tiger Zebra Horse Rhino Hippo Shark Koala Huhn Katze Ziege".split(" ")[$user_id$$ % 
  101] + "_" + parseInt($user_id$$ / 101, 10)
}
function $bitex$util$getCountries$$() {
  return{AF:"Afghanistan", AX:"\u00c5land Islands", AL:"Albania", DZ:"Algeria", AS:"American Samoa", AD:"Andorra", AO:"Angola", AI:"Anguilla", AQ:"Antarctica", AG:"Antigua and Barbuda", AR:"Argentina", AM:"Armenia", AW:"Aruba", AC:"Ascension Island", AU:["Australia", "ACT|NSW|NT|QLD|SA|TAS|VIC|WA", "Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia"], AT:"Austria", AZ:"Azerbaijan", BS:"Bahamas", BH:"Bahrain", BD:"Bangladesh", 
  BB:"Barbados", BY:"Belarus", BE:"Belgium", BZ:"Belize", BJ:"Benin", BM:"Bermuda", BT:"Bhutan", BO:"Bolivia", BQ:"Bonaire, Sint Eustatius, and Saba", BA:"Bosnia and Herzegovina", BW:"Botswana", BV:"Bouvet Island", BR:"Brazil", IO:"British Indian Ocean Territory", VG:"British Virgin Islands", BN:"Brunei", BG:"Bulgaria", BF:"Burkina Faso", BI:"Burundi", KH:"Cambodia", CM:"Cameroon", CA:"Canada", IC:"Canary Islands", CV:"Cape Verde", KY:"Cayman Islands", CF:"Central African Republic", EA:"Ceuta and Melilla", 
  TD:"Chad", CL:["Chile", "RM|XV|I|II|III|IV|V|VI|VII|VIII|IX|XIV|X|XI|XII", "Metropolitana de Santiago|Arica y Parinacota|Tarapac\u00e1|Antofagasta|Atacama|Coquimbo|Valpara\u00edso|Libertador General Bernardo O'Higgins|Maule|Biob\u00edo|La Araucan\u00eda|Los R\u00edos|Los Lagos|Ays\u00e9n del General Carlos Ib\u00e1\u00f1ez del Campo|Magallanes y de la Ant\u00e1rtica Chilena"], CN:"China", CX:"Christmas Island", CP:"Clipperton Island", CC:"Cocos [Keeling] Islands", CO:"Colombia", KM:"Comoros", CG:"Congo - Brazzaville", 
  CD:"Congo - Kinshasa", CK:"Cook Islands", CR:"Costa Rica", CI:"C\u00f4te d\u2019Ivoire", HR:"Croatia", CU:"Cuba", CW:"Cura\u00e7ao", CY:"Cyprus", CZ:"Czech Republic", DK:"Denmark", DG:"Diego Garcia", DJ:"Djibouti", DM:"Dominica", DO:"Dominican Republic", EC:"Ecuador", EG:"Egypt", SV:"El Salvador", GQ:"Equatorial Guinea", ER:"Eritrea", EE:"Estonia", ET:"Ethiopia", EU:"European Union", FK:"Falkland Islands", FO:"Faroe Islands", FJ:"Fiji", FI:"Finland", FR:"France", GF:"French Guiana", PF:"French Polynesia", 
  TF:"French Southern Territories", GA:"Gabon", GM:"Gambia", GE:"Georgia", DE:"Germany", GH:"Ghana", GI:"Gibraltar", GR:"Greece", GL:"Greenland", GD:"Grenada", GP:"Guadeloupe", GU:"Guam", GT:"Guatemala", GG:"Guernsey", GN:"Guinea", GW:"Guinea-Bissau", GY:"Guyana", HT:"Haiti", HM:"Heard Island and McDonald Islands", HN:"Honduras", HK:"Hong Kong SAR China", HU:"Hungary", IS:"Iceland", IN:"India", ID:"Indonesia", IR:"Iran", IQ:"Iraq", IE:"Ireland", IM:"Isle of Man", IL:"Israel", IT:"Italy", JM:"Jamaica", 
  JP:"Japan", JE:"Jersey", JO:"Jordan", KZ:"Kazakhstan", KE:"Kenya", KI:"Kiribati", KW:"Kuwait", KG:"Kyrgyzstan", LA:"Laos", LV:"Latvia", LB:"Lebanon", LS:"Lesotho", LR:"Liberia", LY:"Libya", LI:"Liechtenstein", LT:"Lithuania", LU:"Luxembourg", MO:"Macau SAR China", MK:"Macedonia", MG:"Madagascar", MW:"Malawi", MY:"Malaysia", MV:"Maldives", ML:"Mali", MT:"Malta", MH:"Marshall Islands", MQ:"Martinique", MR:"Mauritania", MU:"Mauritius", YT:"Mayotte", MX:"Mexico", FM:"Micronesia", MD:"Moldova", MC:"Monaco", 
  MN:"Mongolia", ME:"Montenegro", MS:"Montserrat", MA:"Morocco", MZ:"Mozambique", MM:"Myanmar [Burma]", NA:"Namibia", NR:"Nauru", NP:"Nepal", NL:"Netherlands", AN:"Netherlands Antilles", NC:"New Caledonia", NZ:"New Zealand", NI:"Nicaragua", NE:"Niger", NG:"Nigeria", NU:"Niue", NF:"Norfolk Island", KP:"North Korea", MP:"Northern Mariana Islands", NO:"Norway", OM:"Oman", QO:"Outlying Oceania", PK:["Pakistan", "Balochistan|KPK|Punjab|Sindh|Islamabad|FATA|AJ&K|Gilgit\u2013Baltistan", "Balochistan|Khyber Pakhtunkhwa|Punjab|Sindh|Islamabad|FATA|Azad and Jamu Kashmir|Gilgit\u2013Baltistan"], 
  PW:"Palau", PS:"Palestinian Territories", PA:"Panama", PG:"Papua New Guinea", PY:"Paraguay", PE:"Peru", PH:"Philippines", PN:"Pitcairn Islands", PL:"Poland", PT:"Portugal", PR:"Puerto Rico", QA:"Qatar", RE:"R\u00e9union", RO:"Romania", RU:"Russia", RW:"Rwanda", BL:"Saint Barth\u00e9lemy", SH:"Saint Helena", KN:"Saint Kitts and Nevis", LC:"Saint Lucia", MF:"Saint Martin", PM:"Saint Pierre and Miquelon", VC:"Saint Vincent and the Grenadines", WS:"Samoa", SM:"San Marino", ST:"S\u00e3o Tom\u00e9 and Pr\u00edncipe", 
  SA:"Saudi Arabia", SN:"Senegal", RS:"Serbia", CS:"Serbia and Montenegro", SC:"Seychelles", SL:"Sierra Leone", SG:"Singapore", SX:"Sint Maarten", SK:"Slovakia", SI:"Slovenia", SB:"Solomon Islands", SO:"Somalia", ZA:"South Africa", GS:"South Georgia and the South Sandwich Islands", KR:"South Korea", SS:"South Sudan", ES:"Spain", LK:"Sri Lanka", SD:"Sudan", SR:"Suriname", SJ:"Svalbard and Jan Mayen", SZ:"Swaziland", SE:"Sweden", CH:"Switzerland", SY:"Syria", TW:"Taiwan", TJ:"Tajikistan", TZ:"Tanzania", 
  TH:"Thailand", TL:"Timor-Leste", TG:"Togo", TK:"Tokelau", TO:"Tonga", TT:"Trinidad and Tobago", TA:"Tristan da Cunha", TN:"Tunisia", TR:"Turkey", TM:"Turkmenistan", TC:"Turks and Caicos Islands", TV:"Tuvalu", UM:"U.S. Minor Outlying Islands", VI:"U.S. Virgin Islands", UG:"Uganda", UA:"Ukraine", AE:"United Arab Emirates", GB:"United Kingdom", US:["United States", "AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VE|VA|WA|WV|WI|WY", 
  "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming"], UY:"Uruguay", 
  UZ:"Uzbekistan", VU:"Vanuatu", VA:"Vatican City", VE:"Venezuela", VN:"Vietnam", WF:"Wallis and Futuna", EH:"Western Sahara", YE:"Yemen", ZM:"Zambia", ZW:"Zimbabwe"}
}
function $bitex$util$calculatePriceAmountAndFee$$($user_input$$, $verb$$, $order_depth$$, $username$$, $fee$$) {
  var $amount$$ = 0, $price$$1$$ = 0, $vwap$$ = 0, $order$$1$$, $total_volume$$ = 0;
  $fee$$ = $user_input$$ * $fee$$ / 1E4;
  var $work_total$$ = $user_input$$ - $fee$$, $order_idx$$;
  for($order_idx$$ in $order_depth$$) {
    if($order$$1$$ = $order_depth$$[$order_idx$$], $username$$ != $order$$1$$[2]) {
      var $order_volume$$ = $order$$1$$[0] * $order$$1$$[1] / 1E8;
      if(0 == $verb$$) {
        if($order_volume$$ >= $work_total$$) {
          $amount$$ += 1E8 * ($work_total$$ / $order$$1$$[0]);
          $price$$1$$ = $order$$1$$[0];
          $work_total$$ = 0;
          $vwap$$ = ($user_input$$ - $fee$$) / $amount$$;
          break
        }else {
          $order_volume$$ < $work_total$$ && ($amount$$ += $order$$1$$[1], $work_total$$ -= $order_volume$$)
        }
      }else {
        if(1 == $verb$$) {
          if($order$$1$$[1] >= $work_total$$) {
            $price$$1$$ = $order$$1$$[0];
            $total_volume$$ += $order$$1$$[0] * $work_total$$ / 1E8;
            $vwap$$ = $total_volume$$ / ($user_input$$ - $fee$$);
            $amount$$ = $vwap$$ * ($user_input$$ - $fee$$);
            $work_total$$ = 0;
            break
          }else {
            $order$$1$$[1] < $work_total$$ && ($total_volume$$ += $order_volume$$, $work_total$$ -= $order$$1$$[1])
          }
        }
      }
    }
  }
  if(0 === $work_total$$ && 0 < $amount$$) {
    return[$price$$1$$, parseInt($amount$$, 10), parseInt($fee$$, 10), $vwap$$]
  }
}
function $bitex$util$isValidAddress$$($address$$1_bytes$$1$$) {
  $address$$1_bytes$$1$$ = $bitex$util$base58Decode$$($address$$1_bytes$$1$$);
  var $end$$4$$ = $address$$1_bytes$$1$$.length - 4, $checksum_hash$$ = $address$$1_bytes$$1$$.slice(0, $end$$4$$), $checksum_hash$$ = $bitex$util$sha256_digest$$($bitex$util$sha256_digest$$($checksum_hash$$));
  return $checksum_hash$$[0] != $address$$1_bytes$$1$$[$end$$4$$] || $checksum_hash$$[1] != $address$$1_bytes$$1$$[$end$$4$$ + 1] || $checksum_hash$$[2] != $address$$1_bytes$$1$$[$end$$4$$ + 2] || $checksum_hash$$[3] != $address$$1_bytes$$1$$[$end$$4$$ + 3] ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
}
function $bitex$util$sha256_digest$$($data$$32_digest$$inline_429$$) {
  var $sha256$$ = new $goog$crypt$Sha256$$;
  $sha256$$.update($data$$32_digest$$inline_429$$);
  $data$$32_digest$$inline_429$$ = [];
  var $n$$inline_432_totalBits$$inline_430$$ = 8 * $sha256$$.total;
  56 > $sha256$$.$inChunk$ ? $sha256$$.update($sha256$$.$pad_$, 56 - $sha256$$.$inChunk$) : $sha256$$.update($sha256$$.$pad_$, 64 - ($sha256$$.$inChunk$ - 56));
  for(var $i$$inline_431$$ = 63;56 <= $i$$inline_431$$;$i$$inline_431$$--) {
    $sha256$$.$chunk$[$i$$inline_431$$] = $n$$inline_432_totalBits$$inline_430$$ & 255, $n$$inline_432_totalBits$$inline_430$$ /= 256
  }
  $JSCompiler_StaticMethods_computeChunk_$$($sha256$$, $sha256$$.$chunk$);
  for($i$$inline_431$$ = $n$$inline_432_totalBits$$inline_430$$ = 0;$i$$inline_431$$ < $sha256$$.$numHashBlocks$;$i$$inline_431$$++) {
    for(var $j$$inline_433$$ = 24;0 <= $j$$inline_433$$;$j$$inline_433$$ -= 8) {
      $data$$32_digest$$inline_429$$[$n$$inline_432_totalBits$$inline_430$$++] = $sha256$$.hash[$i$$inline_431$$] >> $j$$inline_433$$ & 255
    }
  }
  return $data$$32_digest$$inline_429$$
}
function $bitex$util$base58Decode$$($input$$1_string$$3$$) {
  if(0 === $input$$1_string$$3$$.length) {
    return""
  }
  for(var $ALPHABET_MAP$$ = {}, $i$$136$$ = 0;58 > $i$$136$$;$i$$136$$++) {
    $ALPHABET_MAP$$["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".charAt($i$$136$$)] = $i$$136$$
  }
  $input$$1_string$$3$$ = $input$$1_string$$3$$.split("").map(function($c$$6$$) {
    return $ALPHABET_MAP$$[$c$$6$$]
  });
  for(var $j$$13$$, $bytes$$2$$ = [0], $i$$136$$ = 0;$i$$136$$ < $input$$1_string$$3$$.length;$i$$136$$++) {
    for($j$$13$$ = 0;$j$$13$$ < $bytes$$2$$.length;$j$$13$$++) {
      $bytes$$2$$[$j$$13$$] *= 58
    }
    $bytes$$2$$[$bytes$$2$$.length - 1] += $input$$1_string$$3$$[$i$$136$$];
    var $carry$$ = 0;
    for($j$$13$$ = $bytes$$2$$.length - 1;0 <= $j$$13$$;$j$$13$$--) {
      $bytes$$2$$[$j$$13$$] += $carry$$, $carry$$ = $bytes$$2$$[$j$$13$$] >> 8, $bytes$$2$$[$j$$13$$] &= 255
    }
    for(;$carry$$;) {
      $bytes$$2$$.unshift($carry$$), $carry$$ = $bytes$$2$$[0] >> 8, $bytes$$2$$[0] &= 255
    }
  }
  for($i$$136$$ = 0;$i$$136$$ < $input$$1_string$$3$$.length - 1 && 0 == $input$$1_string$$3$$[$i$$136$$];$i$$136$$++) {
    $bytes$$2$$.unshift(0)
  }
  return $bytes$$2$$
}
;
// Input 71
// Input 72
// Input 73
// Input 74
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$(8);
// Input 75
// Input 76
// Input 77
function $soy$$0$0escapeHtml$$($value$$104$$) {
  return"object" === typeof $value$$104$$ && $value$$104$$ && 0 === $value$$104$$.$contentKind$ ? $value$$104$$.content : String($value$$104$$).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$)
}
var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$($ch$$11$$) {
  return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[$ch$$11$$]
}
var $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;
// Input 78
function $bitex$ui$SimpleOrderEntry$templates$SimpleOrderEntry$$($opt_data$$3$$) {
  var $output$$2$$ = "", $MSG_UNNAMED_85$$ = "Price per " + ($soy$$0$0escapeHtml$$($opt_data$$3$$.$cryptocurrencydescription$) + " :"), $output$$2$$ = $output$$2$$ + ('<form id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '" class="simple-order-entry well" ><div class="row-fluid"><div class="span10"><div class="row-fluid"><div class="pull-left"><span class="simple-order-entry-text" >'), $output$$2$$ = 1 == $opt_data$$3$$.$side$ ? $output$$2$$ + "I want to buy" : $output$$2$$ + "I want to sell", 
  $output$$2$$ = $output$$2$$ + ('</span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + $soy$$0$0escapeHtml$$($opt_data$$3$$.$crypto_currency_symbol$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_qty" name="qty" data-uniform-label="Quantity" class="input-small simple-order-entry-qty" data-uniform-validators="validateNumber; required" type="text" required/></div></div><div class="pull-left"><span class="simple-order-entry-text" > for a total of </span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + 
  $soy$$0$0escapeHtml$$($opt_data$$3$$.$currency_symbol$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_total" name="total" data-uniform-label="Total" class="input-small simple-order-entry-total" data-uniform-validators="validateNumber; required" type="text" required/></div></div></div><div class="row-fluid"><small>Taxa ( ' + $soy$$0$0escapeHtml$$($opt_data$$3$$.$formatted_fee$) + ' ) : <span id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_fee"></span>,' + $MSG_UNNAMED_85$$ + 
  '<strong><span id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_avg_price"></span></strong></strong></small></div></div><div class="span2"><div class="row-fluid">'), $output$$2$$ = 1 == $opt_data$$3$$.$side$ ? $output$$2$$ + ('<button id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_action_simple" class="btn btn-large btn-success order-entry-action span12">COMPRAR</button>') : $output$$2$$ + ('<button id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_action_simple" class="btn btn-large btn-danger order-entry-action span12">VENDER</button>');
  return $output$$2$$ + "</div></div></div></form>"
}
;
// Input 79
function $bitex$ui$SimpleOrderEntry$$($opt_blinkDelay$$, $opt_domHelper$$5$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$5$$);
  this.$order_depth_$ = [];
  this.$uniform_$ = new $uniform$Uniform$$({control_holder_class:"uniform-control-holder"})
}
$goog$inherits$$($bitex$ui$SimpleOrderEntry$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$SimpleOrderEntry$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("simple-order-entry");
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$SimpleOrderEntry$templates$SimpleOrderEntry$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "order_entry"), $symbol$:this.$model_$.$symbol$, $crypto_currency_symbol$:this.$model_$.$crypto_currency_symbol$, $cryptocurrencydescription$:this.$model_$.$crypto_currency_description$, $currency_symbol$:this.$model_$.$currency_symbol$, $currency_description$:this.$model_$.$currency_description$, $side$:this.$model_$.$side$, type:this.$model_$.type, 
  $broker_id$:this.$model_$.$broker_id$, $formatted_fee$:this.$model_$.$formatted_fee$, $client_id$:this.$model_$.$client_id$})
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$SimpleOrderEntry$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$47$$ = this.$getHandler$();
  this.$getDomHelper$();
  this.$uniform_$.$decorate$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry")));
  this.$qty_element_$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_qty"));
  this.$total_element_$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_total"));
  $JSCompiler_StaticMethods_listen$$($handler$$47$$, new $goog$events$InputHandler$$(this.$total_element_$), "input", this.$onChangeTotal_$);
  $JSCompiler_StaticMethods_listen$$($handler$$47$$, new $goog$events$InputHandler$$(this.$qty_element_$), "input", this.$onChangeQty_$);
  $JSCompiler_StaticMethods_listen$$($handler$$47$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_action_simple")), "click", this.$onActionSimple_$)
};
$JSCompiler_prototypeAlias$$.$onActionSimple_$ = function $$JSCompiler_prototypeAlias$$$$onActionSimple_$$($e$$60$$) {
  $e$$60$$.preventDefault();
  0 < this.$uniform_$.$validate$().length ? $e$$60$$.stopPropagation() : this.dispatchEvent("simple_order_entry_submitted")
};
function $JSCompiler_StaticMethods_disableActions_$$($JSCompiler_StaticMethods_disableActions_$self$$, $enabled$$3$$) {
  var $action_button$$ = new $goog$ui$Button$$;
  $action_button$$.$decorate$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableActions_$self$$, "order_entry_action_simple")));
  $action_button$$.$setEnabled$($enabled$$3$$);
  $enabled$$3$$ ? $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableActions_$self$$, "order_entry_avg_price")), "") : $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableActions_$self$$, "order_entry_avg_price")), "  ** No liquidity to complete this transaction **")
}
$JSCompiler_prototypeAlias$$.$onChangeQty_$ = function $$JSCompiler_prototypeAlias$$$$onChangeQty_$$($crypto_currency_formatter_e$$61$$) {
  this.$last_changed_field_$ = "qty";
  $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_TRUE$$);
  if(this.$order_depth_$ != $JSCompiler_alias_NULL$$) {
    if(this.$order_depth_$.length) {
      var $formatted_fee_human_average_price_value_fmt$$ = new $goog$i18n$NumberFormat$$(1);
      $JSCompiler_StaticMethods_setMaximumFractionDigits$$($formatted_fee_human_average_price_value_fmt$$, 8);
      $JSCompiler_StaticMethods_setMinimumFractionDigits$$($formatted_fee_human_average_price_value_fmt$$);
      var $form_values_price_amount_fee$$ = $JSCompiler_StaticMethods_getAsJSON$$(this.$uniform_$), $currency_formatter_pos$$14$$ = [0], $value$$132_vwap$$1$$ = $formatted_fee_human_average_price_value_fmt$$.parse($form_values_price_amount_fee$$.qty, $currency_formatter_pos$$14$$);
      if($currency_formatter_pos$$14$$[0] != $form_values_price_amount_fee$$.qty.length || isNaN($value$$132_vwap$$1$$) || 0 >= $value$$132_vwap$$1$$) {
        $crypto_currency_formatter_e$$61$$.stopPropagation(), $crypto_currency_formatter_e$$61$$.preventDefault()
      }else {
        if($value$$132_vwap$$1$$ *= 1E8, $form_values_price_amount_fee$$ = $bitex$util$calculatePriceAmountAndFee$$($value$$132_vwap$$1$$, 1, this.$order_depth_$, this.$model_$.$username$, this.$model_$.$fee$), $form_values_price_amount_fee$$ != $JSCompiler_alias_NULL$$) {
          this.$model_$.$price$ = $form_values_price_amount_fee$$[0];
          this.$model_$.$amount$ = $value$$132_vwap$$1$$;
          var $order_fee$$ = $form_values_price_amount_fee$$[2], $value$$132_vwap$$1$$ = $form_values_price_amount_fee$$[3], $currency_formatter_pos$$14$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$currency_format$, this.$model_$.$currency_code$);
          $JSCompiler_StaticMethods_setMaximumFractionDigits$$($currency_formatter_pos$$14$$, 8);
          $JSCompiler_StaticMethods_setMinimumFractionDigits$$($currency_formatter_pos$$14$$);
          $crypto_currency_formatter_e$$61$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$crypto_currency_format$, this.$model_$.$crypto_currency_code$);
          $JSCompiler_StaticMethods_setMaximumFractionDigits$$($crypto_currency_formatter_e$$61$$, 8);
          $JSCompiler_StaticMethods_setMinimumFractionDigits$$($crypto_currency_formatter_e$$61$$);
          $goog$dom$forms$setValue$$(this.$total_element_$, $formatted_fee_human_average_price_value_fmt$$.$format$($form_values_price_amount_fee$$[1] / 1E8));
          $formatted_fee_human_average_price_value_fmt$$ = $crypto_currency_formatter_e$$61$$.$format$($order_fee$$ / 1E8);
          $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_fee")), $formatted_fee_human_average_price_value_fmt$$);
          $formatted_fee_human_average_price_value_fmt$$ = $currency_formatter_pos$$14$$.$format$($value$$132_vwap$$1$$);
          "2" == this.$model_$.$side$ && ($formatted_fee_human_average_price_value_fmt$$ = $crypto_currency_formatter_e$$61$$.$format$($value$$132_vwap$$1$$));
          $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_avg_price")), $formatted_fee_human_average_price_value_fmt$$)
        }else {
          $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
        }
      }
    }else {
      $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
    }
  }else {
    $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$onChangeTotal_$ = function $$JSCompiler_prototypeAlias$$$$onChangeTotal_$$($e$$62_price_amount_fee$$1_vwap$$2$$) {
  this.$last_changed_field_$ = "total";
  $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_TRUE$$);
  if(this.$order_depth_$ != $JSCompiler_alias_NULL$$) {
    if(this.$order_depth_$.length) {
      var $formatted_fee$$1_human_average_price$$1_value_fmt$$1$$ = new $goog$i18n$NumberFormat$$(1);
      $JSCompiler_StaticMethods_setMaximumFractionDigits$$($formatted_fee$$1_human_average_price$$1_value_fmt$$1$$, 8);
      $JSCompiler_StaticMethods_setMinimumFractionDigits$$($formatted_fee$$1_human_average_price$$1_value_fmt$$1$$);
      var $form_values$$1_receive_formatter$$ = $JSCompiler_StaticMethods_getAsJSON$$(this.$uniform_$), $order_fee$$1_pos$$15$$ = [0], $spend_formatter_value$$133$$ = $formatted_fee$$1_human_average_price$$1_value_fmt$$1$$.parse($form_values$$1_receive_formatter$$.total, $order_fee$$1_pos$$15$$);
      $order_fee$$1_pos$$15$$[0] != $form_values$$1_receive_formatter$$.total.length || isNaN($spend_formatter_value$$133$$) || 0 >= $spend_formatter_value$$133$$ ? ($e$$62_price_amount_fee$$1_vwap$$2$$.stopPropagation(), $e$$62_price_amount_fee$$1_vwap$$2$$.preventDefault()) : ($e$$62_price_amount_fee$$1_vwap$$2$$ = $bitex$util$calculatePriceAmountAndFee$$(1E8 * $spend_formatter_value$$133$$, 0, this.$order_depth_$, this.$model_$.$username$, this.$model_$.$fee$), $e$$62_price_amount_fee$$1_vwap$$2$$ != 
      $JSCompiler_alias_NULL$$ ? (this.$model_$.$price$ = $e$$62_price_amount_fee$$1_vwap$$2$$[0], this.$model_$.$amount$ = $e$$62_price_amount_fee$$1_vwap$$2$$[1], $order_fee$$1_pos$$15$$ = $e$$62_price_amount_fee$$1_vwap$$2$$[2], $e$$62_price_amount_fee$$1_vwap$$2$$ = $e$$62_price_amount_fee$$1_vwap$$2$$[3], "1" == this.$model_$.$side$ ? ($spend_formatter_value$$133$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$currency_format$, this.$model_$.$currency_code$), $form_values$$1_receive_formatter$$ = 
      new $goog$i18n$NumberFormat$$(this.$model_$.$crypto_currency_format$, this.$model_$.$crypto_currency_code$)) : ($spend_formatter_value$$133$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$crypto_currency_format$, this.$model_$.$crypto_currency_code$), $form_values$$1_receive_formatter$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$currency_format$, this.$model_$.$currency_code$)), $JSCompiler_StaticMethods_setMaximumFractionDigits$$($spend_formatter_value$$133$$, 8), $JSCompiler_StaticMethods_setMinimumFractionDigits$$($form_values$$1_receive_formatter$$), 
      $goog$dom$forms$setValue$$(this.$qty_element_$, $formatted_fee$$1_human_average_price$$1_value_fmt$$1$$.$format$(this.$model_$.$amount$ / 1E8)), $formatted_fee$$1_human_average_price$$1_value_fmt$$1$$ = $spend_formatter_value$$133$$.$format$($order_fee$$1_pos$$15$$ / 1E8), $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_fee")), $formatted_fee$$1_human_average_price$$1_value_fmt$$1$$), $formatted_fee$$1_human_average_price$$1_value_fmt$$1$$ = 
      $spend_formatter_value$$133$$.$format$($e$$62_price_amount_fee$$1_vwap$$2$$), "2" == this.$model_$.$side$ && ($formatted_fee$$1_human_average_price$$1_value_fmt$$1$$ = $form_values$$1_receive_formatter$$.$format$($e$$62_price_amount_fee$$1_vwap$$2$$)), $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_avg_price")), $formatted_fee$$1_human_average_price$$1_value_fmt$$1$$)) : $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$))
    }else {
      $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
    }
  }else {
    $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
  }
};
function $JSCompiler_StaticMethods_setOrderDepth$$($JSCompiler_StaticMethods_setOrderDepth$self$$, $order_depth$$1$$) {
  $JSCompiler_StaticMethods_setOrderDepth$self$$.$order_depth_$ = $order_depth$$1$$;
  "total" == $JSCompiler_StaticMethods_setOrderDepth$self$$.$last_changed_field_$ ? $JSCompiler_StaticMethods_setOrderDepth$self$$.$onChangeTotal_$() : "qty" == $JSCompiler_StaticMethods_setOrderDepth$self$$.$last_changed_field_$ && $JSCompiler_StaticMethods_setOrderDepth$self$$.$onChangeQty_$()
}
$JSCompiler_prototypeAlias$$.$getSymbol$ = function $$JSCompiler_prototypeAlias$$$$getSymbol$$() {
  return this.$model_$.$symbol$
};
$JSCompiler_prototypeAlias$$.$getSide$ = function $$JSCompiler_prototypeAlias$$$$getSide$$() {
  return this.$model_$.$side$
};
$JSCompiler_prototypeAlias$$.$getBrokerID$ = function $$JSCompiler_prototypeAlias$$$$getBrokerID$$() {
  return this.$model_$.$broker_id$
};
$JSCompiler_prototypeAlias$$.$setBrokerID$ = function $$JSCompiler_prototypeAlias$$$$setBrokerID$$($broker_id$$) {
  this.$model_$.$broker_id$ = $broker_id$$;
  $goog$dom$forms$setValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_broker_id")))
};
$JSCompiler_prototypeAlias$$.$getClientID$ = function $$JSCompiler_prototypeAlias$$$$getClientID$$() {
  return this.$model_$.$client_id$
};
$JSCompiler_prototypeAlias$$.$getPrice$ = function $$JSCompiler_prototypeAlias$$$$getPrice$$() {
  return this.$model_$.$price$
};
$JSCompiler_prototypeAlias$$.$getAmount$ = function $$JSCompiler_prototypeAlias$$$$getAmount$$() {
  return this.$model_$.$amount$
};
// Input 80
function $bitex$ui$DataGrid$templates$DataGrid$$($opt_data$$4$$) {
  var $output$$3$$ = "<div " + ($opt_data$$4$$.id ? 'id="' + $soy$$0$0escapeHtml$$($opt_data$$4$$.id) + '"' : "") + '  class="fuelux ' + ($opt_data$$4$$.$base_class$ ? $soy$$0$0escapeHtml$$($opt_data$$4$$.$base_class$) : "") + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + (!$opt_data$$4$$.title && !$opt_data$$4$$.$show_search$ ? 'style="display: none;"' : "") + '><span class="datagrid-header-title"  ' + (!$opt_data$$4$$.title ? 
  'style="display: none;"' : "") + " ><strong>" + $soy$$0$0escapeHtml$$($opt_data$$4$$.title) + '</strong></span><div class="datagrid-header-left" ' + (!$opt_data$$4$$.$show_search$ ? 'style="display: none;"' : "") + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$4$$.$search_placeholder$) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if($opt_data$$4$$.$button_filters$) {
    for(var $output$$3$$ = $output$$3$$ + '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">', $buttonList33_buttonList41$$ = $opt_data$$4$$.$button_filters$, $buttonListLen33_buttonListLen41$$ = $buttonList33_buttonList41$$.length, $buttonIndex33_buttonIndex41$$ = 0;$buttonIndex33_buttonIndex41$$ < $buttonListLen33_buttonListLen41$$;$buttonIndex33_buttonIndex41$$++) {
      var $buttonData33_buttonData41$$ = $buttonList33_buttonList41$$[$buttonIndex33_buttonIndex41$$], $output$$3$$ = $output$$3$$ + (0 == $buttonIndex33_buttonIndex41$$ ? '<span class="dropdown-label" style="width: 111px;">' + $soy$$0$0escapeHtml$$($buttonData33_buttonData41$$.label) + "</span>" : "")
    }
    $output$$3$$ += '<span class="caret"></span></button><ul class="dropdown-menu">';
    $buttonList33_buttonList41$$ = $opt_data$$4$$.$button_filters$;
    $buttonListLen33_buttonListLen41$$ = $buttonList33_buttonList41$$.length;
    for($buttonIndex33_buttonIndex41$$ = 0;$buttonIndex33_buttonIndex41$$ < $buttonListLen33_buttonListLen41$$;$buttonIndex33_buttonIndex41$$++) {
      $buttonData33_buttonData41$$ = $buttonList33_buttonList41$$[$buttonIndex33_buttonIndex41$$], $output$$3$$ += '<li data-value="' + $soy$$0$0escapeHtml$$($buttonData33_buttonData41$$.value) + '"><a href="#">' + $soy$$0$0escapeHtml$$($buttonData33_buttonData41$$.label) + "</a></li>"
    }
    $output$$3$$ += "</ul></div>"
  }
  return $output$$3$$ += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ($opt_data$$4$$.$wrapper_height$ ? $soy$$0$0escapeHtml$$($opt_data$$4$$.$wrapper_height$) : "360") + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-refresh"><i class="icon-repeat"></i></button><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>'
}
;
// Input 81
function $bitex$ui$DataGrid$$($options$$6$$, $opt_domHelper$$6$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$6$$);
  this.$setModel$({title:$options$$6$$.title, $columns$:$options$$6$$.columns, $rowIDFn$:$options$$6$$.rowIDFn || $goog$nullFunction$$, $rowClassFn$:$options$$6$$.rowClassFn || $goog$nullFunction$$, $currentPage$:$options$$6$$.currentPage || 0, $limit$:$options$$6$$.limit || 100, $blinkDelay$:$options$$6$$.blinkDelay || 700, $wrapperHeight$:$options$$6$$.wrapperHeight, $showSearch$:$options$$6$$.showSearch, $searchPlaceholder$:$options$$6$$.searchPlaceholder, $buttonFilters$:$options$$6$$.buttonFilters});
  this.$sort_column_$ = "";
  this.$sort_direction_$ = "up";
  this.$select_filter_$ = this.$filter_$ = $JSCompiler_alias_NULL$$;
  this.$loading_data_$ = $goog$dom$createDom$$("div", ["progress", "progress-striped", "active"], $goog$dom$createDom$$("div", "bar"));
  $goog$style$setWidth$$(this.$loading_data_$, "50%");
  $goog$style$setStyle$$(this.$loading_data_$, "margin", "auto");
  $goog$style$setWidth$$($goog$dom$getFirstElementChild$$(this.$loading_data_$), "100%")
}
$goog$inherits$$($bitex$ui$DataGrid$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$DataGrid$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("datagrid");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $el$$76$$ = $goog$soy$renderAsElement$$($bitex$ui$DataGrid$templates$DataGrid$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "grid"), title:this.$model_$.title, $wrapper_height$:this.$model_$.$wrapperHeight$, $base_class$:this.$getBaseCssClass$(), $show_search$:this.$model_$.$showSearch$, $search_placeholder$:this.$model_$.$searchPlaceholder$, $button_filters$:this.$model_$.$buttonFilters$});
  this.$decorateInternal$($el$$76$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$113_filter_div_selected_filter_option_el$$) {
  this.$element_$ = $element$$113_filter_div_selected_filter_option_el$$;
  var $data_value_search_div_table_header_element$$ = $goog$dom$getFirstElementChild$$($element$$113_filter_div_selected_filter_option_el$$);
  $goog$dom$classes$add$$($data_value_search_div_table_header_element$$, this.$getBaseCssClass$());
  var $thead_element$$ = $goog$dom$getFirstElementChild$$($data_value_search_div_table_header_element$$);
  $goog$dom$getFirstElementChild$$($goog$dom$getFirstElementChild$$($thead_element$$)).setAttribute("colspan", this.$model_$.$columns$.length);
  var $column_header_el$$ = $goog$dom$getNextElementSibling$$($goog$dom$getFirstElementChild$$($thead_element$$));
  $column_header_el$$ != $JSCompiler_alias_NULL$$ && $goog$dom$removeNode$$($column_header_el$$);
  this.$th_sizing_el_$ = $goog$dom$createDom$$("tr");
  this.$tr_columns_el_$ = $goog$dom$createDom$$("tr");
  $goog$array$forEach$$(this.$model_$.$columns$, function($child$$inline_445_column$$) {
    var $th_column_properties$$ = {"data-property":$child$$inline_445_column$$.property};
    $child$$inline_445_column$$.sortable && ($th_column_properties$$["class"] = "sortable");
    var $child$$inline_442$$ = $goog$dom$createDom$$("th", $th_column_properties$$, $child$$inline_445_column$$.label);
    this.$tr_columns_el_$.appendChild($child$$inline_442$$);
    $child$$inline_445_column$$ = $goog$dom$createDom$$("th", $th_column_properties$$, $child$$inline_445_column$$.label);
    this.$th_sizing_el_$.appendChild($child$$inline_445_column$$)
  }, this);
  $thead_element$$.appendChild(this.$tr_columns_el_$);
  this.$table_data_body_el_$ = $goog$dom$getFirstElementChild$$($goog$dom$getFirstElementChild$$($goog$dom$getNextElementSibling$$($data_value_search_div_table_header_element$$)));
  this.$element_start_counter_$ = $goog$dom$getElementByClass$$("grid-start", $element$$113_filter_div_selected_filter_option_el$$);
  this.$element_end_counter_$ = $goog$dom$getElementByClass$$("grid-end", $element$$113_filter_div_selected_filter_option_el$$);
  this.$element_refresh_$ = $goog$dom$getElementByClass$$("grid-refresh", $element$$113_filter_div_selected_filter_option_el$$);
  this.$element_prev_button_$ = $goog$dom$getElementByClass$$("grid-prevpage", $element$$113_filter_div_selected_filter_option_el$$);
  this.$element_next_button_$ = $goog$dom$getElementByClass$$("grid-nextpage", $element$$113_filter_div_selected_filter_option_el$$);
  $data_value_search_div_table_header_element$$ = $goog$dom$getElementByClass$$("datagrid-search", $element$$113_filter_div_selected_filter_option_el$$);
  this.$search_input_$ = $goog$dom$getFirstElementChild$$($data_value_search_div_table_header_element$$);
  this.$search_btn_$ = $goog$dom$getNextElementSibling$$(this.$search_input_$);
  $element$$113_filter_div_selected_filter_option_el$$ = $goog$dom$getElementByClass$$("datagrid-filter", $element$$113_filter_div_selected_filter_option_el$$);
  $element$$113_filter_div_selected_filter_option_el$$ != $JSCompiler_alias_NULL$$ && ($element$$113_filter_div_selected_filter_option_el$$ = $goog$dom$getFirstElementChild$$($goog$dom$getNextElementSibling$$($goog$dom$getFirstElementChild$$($element$$113_filter_div_selected_filter_option_el$$))), $element$$113_filter_div_selected_filter_option_el$$ != $JSCompiler_alias_NULL$$ && ($data_value_search_div_table_header_element$$ = this.$select_filter_$ = $JSCompiler_alias_NULL$$, "LI" === $element$$113_filter_div_selected_filter_option_el$$.tagName && 
  ($data_value_search_div_table_header_element$$ = $element$$113_filter_div_selected_filter_option_el$$.getAttribute("data-value")), $data_value_search_div_table_header_element$$ != $JSCompiler_alias_NULL$$ && "all" !== $data_value_search_div_table_header_element$$ && (this.$select_filter_$ = $data_value_search_div_table_header_element$$)))
};
$JSCompiler_prototypeAlias$$.$handleRefreshPage_$ = function $$JSCompiler_prototypeAlias$$$$handleRefreshPage_$$() {
  $JSCompiler_StaticMethods_render_data_$$(this)
};
$JSCompiler_prototypeAlias$$.$handlePreviousPage_$ = function $$JSCompiler_prototypeAlias$$$$handlePreviousPage_$$() {
  0 >= this.$model_$.$currentPage$ || (this.$model_$.$currentPage$ -= 1, $JSCompiler_StaticMethods_render_data_$$(this))
};
$JSCompiler_prototypeAlias$$.$handleNextPage_$ = function $$JSCompiler_prototypeAlias$$$$handleNextPage_$$() {
  this.$model_$.$currentPage$ += 1;
  $JSCompiler_StaticMethods_render_data_$$(this)
};
$JSCompiler_prototypeAlias$$.$handleColumnClick_$ = function $$JSCompiler_prototypeAlias$$$$handleColumnClick_$$($e$$66_other_sorted_column_elements_sort_indicator_element$$) {
  var $classToRemove$$1_element$$114$$ = $e$$66_other_sorted_column_elements_sort_indicator_element$$.target;
  if($goog$dom$classes$has$$($classToRemove$$1_element$$114$$, "sortable")) {
    this.$sort_column_$ = $classToRemove$$1_element$$114$$.getAttribute("data-property");
    if($goog$dom$classes$has$$($classToRemove$$1_element$$114$$, "sorted")) {
      $e$$66_other_sorted_column_elements_sort_indicator_element$$ = $goog$dom$getElementByClass$$("datagrid-sort", $classToRemove$$1_element$$114$$);
      var $classToAdd$$1$$;
      $goog$dom$classes$has$$($e$$66_other_sorted_column_elements_sort_indicator_element$$, "icon-chevron-up") ? ($classToRemove$$1_element$$114$$ = "icon-chevron-up", $classToAdd$$1$$ = "icon-chevron-down", this.$sort_direction_$ = "ASC") : ($classToRemove$$1_element$$114$$ = "icon-chevron-down", $classToAdd$$1$$ = "icon-chevron-up", this.$sort_direction_$ = "DESC");
      $goog$dom$classes$addRemove$$($e$$66_other_sorted_column_elements_sort_indicator_element$$, $classToRemove$$1_element$$114$$, $classToAdd$$1$$)
    }else {
      $e$$66_other_sorted_column_elements_sort_indicator_element$$ = $goog$dom$getElementsByClass$$("sorted", this.$tr_columns_el_$), $goog$array$forEach$$($e$$66_other_sorted_column_elements_sort_indicator_element$$, function($other_sort_indicator_element_other_sorted_column_element$$) {
        $goog$dom$classes$remove$$($other_sort_indicator_element_other_sorted_column_element$$, "sorted");
        $other_sort_indicator_element_other_sorted_column_element$$ = $goog$dom$getElementByClass$$("datagrid-sort", $other_sort_indicator_element_other_sorted_column_element$$);
        $other_sort_indicator_element_other_sorted_column_element$$ != $JSCompiler_alias_NULL$$ && $goog$dom$removeNode$$($other_sort_indicator_element_other_sorted_column_element$$)
      }, this), $e$$66_other_sorted_column_elements_sort_indicator_element$$ = $goog$dom$createDom$$("i", ["icon-chevron-up", "datagrid-sort"]), $classToRemove$$1_element$$114$$.appendChild($e$$66_other_sorted_column_elements_sort_indicator_element$$), this.$sort_direction_$ = "DESC", $goog$dom$classes$add$$($classToRemove$$1_element$$114$$, "sorted")
    }
    $JSCompiler_StaticMethods_render_data_$$(this)
  }
};
function $JSCompiler_StaticMethods_render_data_$$($JSCompiler_StaticMethods_render_data_$self$$) {
  $goog$dom$setTextContent$$($JSCompiler_StaticMethods_render_data_$self$$.$element_start_counter_$, $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$currentPage$ * $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$ + 1);
  $goog$dom$setTextContent$$($JSCompiler_StaticMethods_render_data_$self$$.$element_end_counter_$, $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$currentPage$ * $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$ + $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$);
  var $options$$7$$ = {Page:$JSCompiler_StaticMethods_render_data_$self$$.$model_$.$currentPage$, Limit:$JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$}, $cols$$ = [];
  $goog$array$forEach$$($JSCompiler_StaticMethods_render_data_$self$$.$model_$.$columns$, function($column$$1_property$$6$$) {
    $column$$1_property$$6$$ = $column$$1_property$$6$$.property;
    $column$$1_property$$6$$ != $JSCompiler_alias_NULL$$ && $cols$$.push($column$$1_property$$6$$)
  }, $JSCompiler_StaticMethods_render_data_$self$$);
  $options$$7$$.Columns = $cols$$;
  if(!$goog$string$isEmpty$$($JSCompiler_StaticMethods_render_data_$self$$.$sort_column_$ == $JSCompiler_alias_NULL$$ ? "" : String($JSCompiler_StaticMethods_render_data_$self$$.$sort_column_$))) {
    $options$$7$$.Sort = $JSCompiler_StaticMethods_render_data_$self$$.$sort_column_$, $options$$7$$.SortOrder = $JSCompiler_StaticMethods_render_data_$self$$.$sort_direction_$
  }
  var $filter$$3$$ = $JSCompiler_StaticMethods_getFilter$$($JSCompiler_StaticMethods_render_data_$self$$);
  $filter$$3$$ != $JSCompiler_alias_NULL$$ && 0 < $filter$$3$$.length && ($options$$7$$.Filter = $filter$$3$$);
  $JSCompiler_StaticMethods_render_data_$self$$.dispatchEvent(new $bitex$ui$DataGridEvent$$("request_data", $options$$7$$));
  $goog$dom$removeChildren$$($JSCompiler_StaticMethods_render_data_$self$$.$table_data_body_el_$);
  $JSCompiler_StaticMethods_render_data_$self$$.$table_data_body_el_$.appendChild($JSCompiler_StaticMethods_render_data_$self$$.$loading_data_$)
}
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$DataGrid$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$48$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$48$$, this.$element_refresh_$, "click", this.$handleRefreshPage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$48$$, this.$element_prev_button_$, "click", this.$handlePreviousPage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$48$$, this.$element_next_button_$, "click", this.$handleNextPage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$48$$, this.$tr_columns_el_$, "click", this.$handleColumnClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$48$$, this.$search_btn_$, "click", this.$handleSearchBtnClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$48$$, this.$getElement$(), "click", this.$handleDataGridClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$48$$, new $goog$events$InputHandler$$(this.$search_input_$), "input", this.$onChangeFilter_$);
  $JSCompiler_StaticMethods_render_data_$$(this)
};
$JSCompiler_prototypeAlias$$.$handleDataGridClick_$ = function $$JSCompiler_prototypeAlias$$$$handleDataGridClick_$$($e$$67_element$$115$$) {
  $e$$67_element$$115$$ = $e$$67_element$$115$$.target;
  var $is_filter_click$$ = $JSCompiler_alias_FALSE$$, $data_value$$1$$ = $JSCompiler_alias_NULL$$;
  "A" === $e$$67_element$$115$$.tagName && ($e$$67_element$$115$$ = $goog$dom$getParentElement$$($e$$67_element$$115$$));
  "LI" === $e$$67_element$$115$$.tagName && ($data_value$$1$$ = $e$$67_element$$115$$.getAttribute("data-value"));
  $data_value$$1$$ != $JSCompiler_alias_NULL$$ && ($goog$dom$getAncestorByTagNameAndClass$$($e$$67_element$$115$$, $JSCompiler_alias_NULL$$, "filter") != $JSCompiler_alias_NULL$$ && ($is_filter_click$$ = $JSCompiler_alias_TRUE$$), $is_filter_click$$ && ("all" === $data_value$$1$$ ? this.$select_filter_$ != $JSCompiler_alias_NULL$$ && (this.$select_filter_$ = $JSCompiler_alias_NULL$$, this.$model_$.$currentPage$ = 0, $JSCompiler_StaticMethods_render_data_$$(this)) : this.$select_filter_$ !== $data_value$$1$$ && 
  (this.$select_filter_$ = $data_value$$1$$, this.$model_$.$currentPage$ = 0, $JSCompiler_StaticMethods_render_data_$$(this))))
};
function $JSCompiler_StaticMethods_getFilter$$($JSCompiler_StaticMethods_getFilter$self$$) {
  var $res$$8$$ = [];
  $JSCompiler_StaticMethods_getFilter$self$$.$filter_$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($JSCompiler_StaticMethods_getFilter$self$$.$filter_$) && $res$$8$$.push($JSCompiler_StaticMethods_getFilter$self$$.$filter_$);
  $JSCompiler_StaticMethods_getFilter$self$$.$select_filter_$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($JSCompiler_StaticMethods_getFilter$self$$.$filter_$) && $res$$8$$.push($JSCompiler_StaticMethods_getFilter$self$$.$select_filter_$);
  return $res$$8$$
}
$JSCompiler_prototypeAlias$$.$onChangeFilter_$ = function $$JSCompiler_prototypeAlias$$$$onChangeFilter_$$() {
  var $filter$$4$$ = $goog$dom$forms$getValue$$(this.$search_input_$);
  $goog$string$isEmpty$$($filter$$4$$) && this.$filter_$ === $JSCompiler_alias_NULL$$ ? $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-remove", "icon-search") : $filter$$4$$ === this.$filter_$ && this.$filter_$ != $JSCompiler_alias_NULL$$ ? $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-search", "icon-remove") : $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-remove", "icon-search")
};
$JSCompiler_prototypeAlias$$.$handleSearchBtnClick_$ = function $$JSCompiler_prototypeAlias$$$$handleSearchBtnClick_$$() {
  var $filter$$5$$ = $goog$dom$forms$getValue$$(this.$search_input_$);
  if(!$goog$string$isEmpty$$($filter$$5$$) || this.$filter_$ !== $JSCompiler_alias_NULL$$) {
    $filter$$5$$ === this.$filter_$ && this.$filter_$ != $JSCompiler_alias_NULL$$ ? (this.$filter_$ = $JSCompiler_alias_NULL$$, $goog$dom$forms$setValue$$(this.$search_input_$, ""), $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-remove", "icon-search")) : (this.$filter_$ = $filter$$5$$, $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-search", "icon-remove")), this.$model_$.$currentPage$ = 0, $JSCompiler_StaticMethods_render_data_$$(this)
  }
};
$JSCompiler_prototypeAlias$$.reload = function $$JSCompiler_prototypeAlias$$$reload$() {
  $JSCompiler_StaticMethods_render_data_$$(this)
};
function $JSCompiler_StaticMethods_setColumnFormatter$$($JSCompiler_StaticMethods_setColumnFormatter$self$$, $column$$3_index$$67$$, $formatter$$4$$, $opt_handler$$15$$) {
  var $result_set_col_index$$1$$ = {};
  $goog$array$forEach$$($JSCompiler_StaticMethods_setColumnFormatter$self$$.$model_$.$columns$, function($this_col$$1$$, $index_row_set$$1$$) {
    $result_set_col_index$$1$$[$this_col$$1$$.property] = $index_row_set$$1$$
  });
  $column$$3_index$$67$$ = $result_set_col_index$$1$$[$column$$3_index$$67$$];
  $column$$3_index$$67$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_setColumnFormatter$self$$.$model_$.$columns$[$column$$3_index$$67$$].formatter = $opt_handler$$15$$ != $JSCompiler_alias_NULL$$ ? $goog$bind$$($formatter$$4$$, $opt_handler$$15$$) : $formatter$$4$$)
}
function $JSCompiler_StaticMethods_insertOrUpdateRecord$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$, $record$$) {
  var $result_set_col_index$$2$$ = {}, $columns$$3$$ = $goog$object$getKeys$$($record$$), $first_row_row_set$$ = $goog$object$getValues$$($record$$);
  $goog$array$forEach$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$columns$, function($this_col$$2$$, $index_row_set$$2$$) {
    var $index$$68$$ = $goog$array$findIndex$$($columns$$3$$, function($col$$18$$) {
      return $col$$18$$ == $this_col$$2$$.property
    });
    $result_set_col_index$$2$$[$index$$68$$] = $index_row_set$$2$$
  });
  var $row_id$$ = $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$rowIDFn$.call($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$, $record$$), $tr$$ = $JSCompiler_alias_NULL$$, $is_new_record$$ = $JSCompiler_alias_FALSE$$;
  $row_id$$ != $JSCompiler_alias_NULL$$ && ($tr$$ = $goog$dom$getElement$$($row_id$$));
  var $rowClassFn$$ = $goog$bind$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$rowClassFn$, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$);
  $tr$$ != $JSCompiler_alias_NULL$$ ? $tr$$.className = $rowClassFn$$($record$$) : ($tr$$ = $goog$dom$createDom$$("tr", $rowClassFn$$($record$$)), $tr$$.id = $row_id$$, $is_new_record$$ = $JSCompiler_alias_TRUE$$);
  var $td_elements$$ = {};
  $goog$array$forEach$$($first_row_row_set$$, function($value$$135$$, $result_set_index$$) {
    var $index$$69$$ = $result_set_col_index$$2$$[$result_set_index$$];
    if($index$$69$$ != $JSCompiler_alias_NULL$$) {
      var $formatter$$5_td$$ = this.$model_$.$columns$[$index$$69$$].formatter || function() {
        return"" + $value$$135$$
      }, $formatter$$5_td$$ = $goog$dom$createDom$$("td", (this.$model_$.$columns$[$index$$69$$].classes || $goog$nullFunction$$)($value$$135$$), $formatter$$5_td$$($value$$135$$, $record$$));
      $td_elements$$[this.$model_$.$columns$[$index$$69$$].property] = $formatter$$5_td$$
    }
  }, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$);
  $is_new_record$$ || $goog$dom$removeChildren$$($tr$$);
  $goog$array$forEach$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$columns$, function($col$$19_td$$1$$) {
    $col$$19_td$$1$$ = $td_elements$$[$col$$19_td$$1$$.property];
    $col$$19_td$$1$$ != $JSCompiler_alias_NULL$$ || ($col$$19_td$$1$$ = $goog$dom$createDom$$("td", $JSCompiler_alias_VOID$$, ""));
    $tr$$.appendChild($col$$19_td$$1$$)
  });
  $is_new_record$$ && ($goog$isNumber$$(0) ? $goog$dom$insertChildAt$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$table_data_body_el_$, $tr$$, 0) : $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$table_data_body_el_$.appendChild($tr$$));
  $first_row_row_set$$ = $goog$dom$getFirstElementChild$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$table_data_body_el_$);
  $first_row_row_set$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustSizes_$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$, $first_row_row_set$$);
  $goog$dom$classes$add$$($tr$$, "warning");
  $goog$Timer$callOnce$$(function() {
    $goog$dom$classes$remove$$($tr$$, "warning")
  }, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$blinkDelay$, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$)
}
function $JSCompiler_StaticMethods_resultSetToElements$$($JSCompiler_StaticMethods_resultSetToElements$self$$, $resultSet$$, $columns$$4$$) {
  var $elements$$1$$ = [], $result_set_col_index$$3$$ = {};
  $goog$array$forEach$$($JSCompiler_StaticMethods_resultSetToElements$self$$.$model_$.$columns$, function($this_col$$3$$, $index_row_set$$3$$) {
    var $index$$70$$ = $goog$array$findIndex$$($columns$$4$$, function($col$$20$$) {
      return $col$$20$$ == $this_col$$3$$.property
    });
    $result_set_col_index$$3$$[$index$$70$$] = $index_row_set$$3$$
  });
  $goog$array$forEach$$($resultSet$$, function($row_set$$1$$) {
    $goog$array$forEach$$($row_set$$1$$, $JSCompiler_emptyFn$$(), this);
    var $rowSetObj$$ = {}, $rowClassFn$$1_row_id$$1_x$$67$$;
    for($rowClassFn$$1_row_id$$1_x$$67$$ in $columns$$4$$) {
      $rowSetObj$$[$columns$$4$$[$rowClassFn$$1_row_id$$1_x$$67$$]] = $row_set$$1$$[$rowClassFn$$1_row_id$$1_x$$67$$]
    }
    $rowClassFn$$1_row_id$$1_x$$67$$ = $goog$bind$$(this.$model_$.$rowClassFn$, this);
    var $tr$$1$$ = $goog$dom$createDom$$("tr", $rowClassFn$$1_row_id$$1_x$$67$$($rowSetObj$$));
    $rowClassFn$$1_row_id$$1_x$$67$$ = this.$model_$.$rowIDFn$.call(this, $rowSetObj$$);
    $rowClassFn$$1_row_id$$1_x$$67$$ != $JSCompiler_alias_NULL$$ && ($tr$$1$$.id = $rowClassFn$$1_row_id$$1_x$$67$$);
    var $td_elements$$1$$ = {};
    $goog$array$forEach$$($row_set$$1$$, function($value$$137$$, $result_set_index$$2$$) {
      var $index$$72$$ = $result_set_col_index$$3$$[$result_set_index$$2$$];
      if($index$$72$$ != $JSCompiler_alias_NULL$$) {
        var $formatter$$6_td$$2$$ = this.$model_$.$columns$[$index$$72$$].formatter || function() {
          return"" + $value$$137$$
        }, $formatter$$6_td$$2$$ = $goog$dom$createDom$$("td", (this.$model_$.$columns$[$index$$72$$].classes || $goog$nullFunction$$)($value$$137$$), $formatter$$6_td$$2$$($value$$137$$, $rowSetObj$$));
        $td_elements$$1$$[this.$model_$.$columns$[$index$$72$$].property] = $formatter$$6_td$$2$$
      }
    }, this);
    $goog$array$forEach$$(this.$model_$.$columns$, function($col$$21_td$$3$$) {
      $col$$21_td$$3$$ = $td_elements$$1$$[$col$$21_td$$3$$.property];
      $col$$21_td$$3$$ != $JSCompiler_alias_NULL$$ || ($col$$21_td$$3$$ = $goog$dom$createDom$$("td", $JSCompiler_alias_VOID$$, ""));
      $tr$$1$$.appendChild($col$$21_td$$3$$)
    });
    $elements$$1$$.push($tr$$1$$)
  }, $JSCompiler_StaticMethods_resultSetToElements$self$$);
  return $elements$$1$$
}
function $JSCompiler_StaticMethods_setResultSet$$($JSCompiler_StaticMethods_setResultSet$self$$, $elements$$2_resultSet$$1$$, $columns$$5_first_row$$1$$) {
  $goog$dom$removeChildren$$($JSCompiler_StaticMethods_setResultSet$self$$.$table_data_body_el_$);
  $elements$$2_resultSet$$1$$ = $JSCompiler_StaticMethods_resultSetToElements$$($JSCompiler_StaticMethods_setResultSet$self$$, $elements$$2_resultSet$$1$$, $columns$$5_first_row$$1$$);
  $columns$$5_first_row$$1$$ = $elements$$2_resultSet$$1$$[0];
  $goog$array$forEach$$($elements$$2_resultSet$$1$$, function($tr$$2$$) {
    this.$table_data_body_el_$.appendChild($tr$$2$$)
  }, $JSCompiler_StaticMethods_setResultSet$self$$);
  $columns$$5_first_row$$1$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustSizes_$$($JSCompiler_StaticMethods_setResultSet$self$$, $columns$$5_first_row$$1$$)
}
function $JSCompiler_StaticMethods_adjustSizes_$$($JSCompiler_StaticMethods_adjustSizes_$self$$, $first_row$$2$$) {
  $goog$dom$insertSiblingBefore$$($JSCompiler_StaticMethods_adjustSizes_$self$$.$th_sizing_el_$, $first_row$$2$$);
  var $el_size$$inline_474_sizing_row$$inline_470$$ = $JSCompiler_StaticMethods_adjustSizes_$self$$.$th_sizing_el_$, $work_col_1$$inline_471$$ = $goog$dom$getFirstElementChild$$($JSCompiler_StaticMethods_adjustSizes_$self$$.$tr_columns_el_$), $work_col_2$$inline_472$$ = $goog$dom$getFirstElementChild$$($first_row$$2$$), $sizing_col$$inline_473$$ = $goog$dom$getFirstElementChild$$($el_size$$inline_474_sizing_row$$inline_470$$);
  for($goog$dom$getChildren$$($el_size$$inline_474_sizing_row$$inline_470$$);$sizing_col$$inline_473$$ != $JSCompiler_alias_NULL$$;) {
    $el_size$$inline_474_sizing_row$$inline_470$$ = $goog$style$getSize$$($sizing_col$$inline_473$$), $goog$style$setWidth$$($work_col_1$$inline_471$$, $el_size$$inline_474_sizing_row$$inline_470$$.width), $goog$style$setWidth$$($work_col_2$$inline_472$$, $el_size$$inline_474_sizing_row$$inline_470$$.width), $work_col_1$$inline_471$$ = $goog$dom$getNextElementSibling$$($work_col_1$$inline_471$$), $work_col_2$$inline_472$$ = $goog$dom$getNextElementSibling$$($work_col_2$$inline_472$$), $sizing_col$$inline_473$$ = 
    $goog$dom$getNextElementSibling$$($sizing_col$$inline_473$$)
  }
  $goog$dom$removeNode$$($JSCompiler_StaticMethods_adjustSizes_$self$$.$th_sizing_el_$)
}
function $bitex$ui$DataGridEvent$$($type$$96$$, $options$$8$$) {
  $goog$events$Event$$.call(this, $type$$96$$);
  this.options = $options$$8$$
}
$goog$inherits$$($bitex$ui$DataGridEvent$$, $goog$events$Event$$);
// Input 82
function $bitex$ui$AccountActivity$$($opt_domHelper$$7$$) {
  $bitex$ui$DataGrid$$.call(this, {rowClassFn:this.$getRowClass$, columns:[{property:"OrderID", label:"ID", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-order-id"
  }}, {property:"Side", label:"Compra/Venda", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$22$$) {
    switch($s$$22$$) {
      case "1":
        return"C";
      case "2":
        return"V"
    }
    return""
  }, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-side"
  }}, {property:"OrderDate", label:"Data/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-order-date"
  }}, {property:"Price", label:"Pre\u00e7o", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-price"
  }}, {property:"CumQty", label:"Qtd", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-cum-qty"
  }}, {property:"AvgPx", label:"Pre\u00e7o m\u00e9dio", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-avg-price"
  }}, {property:"Volume", label:"Total", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-vol"
  }}]}, $opt_domHelper$$7$$)
}
$goog$inherits$$($bitex$ui$AccountActivity$$, $bitex$ui$DataGrid$$);
var $bitex$ui$AccountActivity$CSS_CLASS$$ = "account-activity";
$bitex$ui$AccountActivity$$.prototype.$getCssClass$ = function $$bitex$ui$AccountActivity$$$$$getCssClass$$() {
  return $bitex$ui$AccountActivity$CSS_CLASS$$
};
$bitex$ui$AccountActivity$$.prototype.$getRowClass$ = function $$bitex$ui$AccountActivity$$$$$getRowClass$$($row_set$$2$$) {
  var $class_status$$;
  switch($row_set$$2$$.Side) {
    case "1":
      $class_status$$ = $bitex$ui$AccountActivity$CSS_CLASS$$ + "-buy";
      break;
    case "2":
      $class_status$$ = $bitex$ui$AccountActivity$CSS_CLASS$$ + "-sell"
  }
  return $class_status$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$AccountActivity$CSS_CLASS$$, function() {
  return new $bitex$ui$AccountActivity$$
});
// Input 83
function $goog$async$Delay$$($listener$$61$$, $opt_interval$$1$$, $opt_handler$$16$$) {
  $goog$Disposable$$.call(this);
  this.$listener_$ = $listener$$61$$;
  this.$interval_$ = $opt_interval$$1$$ || 0;
  this.$handler_$ = $opt_handler$$16$$;
  this.$callback_$ = $goog$bind$$(this.$doAction_$, this)
}
$goog$inherits$$($goog$async$Delay$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$async$Delay$$.prototype;
$JSCompiler_prototypeAlias$$.$id_$ = 0;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$async$Delay$$.$superClass_$.$disposeInternal$.call(this);
  this.stop();
  delete this.$listener_$;
  delete this.$handler_$
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$($opt_interval$$2$$) {
  this.stop();
  this.$id_$ = $goog$Timer$callOnce$$(this.$callback_$, $goog$isDef$$($opt_interval$$2$$) ? $opt_interval$$2$$ : this.$interval_$)
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  this.$isActive$() && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$id_$);
  this.$id_$ = 0
};
$JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
  return 0 != this.$id_$
};
$JSCompiler_prototypeAlias$$.$doAction_$ = function $$JSCompiler_prototypeAlias$$$$doAction_$$() {
  this.$id_$ = 0;
  this.$listener_$ && this.$listener_$.call(this.$handler_$)
};
// Input 84
// Input 85
// Input 86
var $goog$fx$anim$activeAnimations_$$ = {}, $goog$fx$anim$animationDelay_$$ = $JSCompiler_alias_NULL$$;
function $goog$fx$anim$unregisterAnimation$$($animation$$1_uid$$2$$) {
  $animation$$1_uid$$2$$ = $goog$getUid$$($animation$$1_uid$$2$$);
  delete $goog$fx$anim$activeAnimations_$$[$animation$$1_uid$$2$$];
  $goog$object$isEmpty$$() && $goog$fx$anim$animationDelay_$$ && $goog$fx$anim$animationDelay_$$.stop()
}
function $goog$fx$anim$requestAnimationFrame_$$() {
  $goog$fx$anim$animationDelay_$$ || ($goog$fx$anim$animationDelay_$$ = new $goog$async$Delay$$(function() {
    $goog$fx$anim$cycleAnimations_$$()
  }, 20));
  var $delay$$3$$ = $goog$fx$anim$animationDelay_$$;
  $delay$$3$$.$isActive$() || $delay$$3$$.start()
}
function $goog$fx$anim$cycleAnimations_$$() {
  var $now$$1$$ = $goog$now$$();
  $goog$object$forEach$$($goog$fx$anim$activeAnimations_$$, function($anim$$) {
    $JSCompiler_StaticMethods_cycle$$($anim$$, $now$$1$$)
  });
  $goog$object$isEmpty$$() || $goog$fx$anim$requestAnimationFrame_$$()
}
;
// Input 87
// Input 88
function $goog$fx$TransitionBase$$() {
  $goog$Disposable$$.call(this);
  this.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$;
  this.$endTime$ = this.startTime = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($goog$fx$TransitionBase$$, $goog$events$EventTarget$$);
var $goog$fx$TransitionBase$State$STOPPED$$ = 0;
$goog$fx$TransitionBase$$.prototype.$onBegin$ = function $$goog$fx$TransitionBase$$$$$onBegin$$() {
  this.$dispatchAnimationEvent$("begin")
};
$goog$fx$TransitionBase$$.prototype.$onEnd$ = function $$goog$fx$TransitionBase$$$$$onEnd$$() {
  this.$dispatchAnimationEvent$("end")
};
$goog$fx$TransitionBase$$.prototype.$dispatchAnimationEvent$ = function $$goog$fx$TransitionBase$$$$$dispatchAnimationEvent$$($type$$97$$) {
  this.dispatchEvent($type$$97$$)
};
// Input 89
function $goog$fx$Animation$$($start$$10$$, $end$$5$$, $duration$$10$$, $opt_acc$$) {
  $goog$fx$TransitionBase$$.call(this);
  (!$goog$isArray$$($start$$10$$) || !$goog$isArray$$($end$$5$$)) && $JSCompiler_alias_THROW$$(Error("Start and end parameters must be arrays"));
  $start$$10$$.length != $end$$5$$.length && $JSCompiler_alias_THROW$$(Error("Start and end points must be the same length"));
  this.$startPoint$ = $start$$10$$;
  this.$endPoint$ = $end$$5$$;
  this.duration = $duration$$10$$;
  this.$accel_$ = $opt_acc$$;
  this.coords = [];
  this.$useRightPositioningForRtl_$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($goog$fx$Animation$$, $goog$fx$TransitionBase$$);
$JSCompiler_prototypeAlias$$ = $goog$fx$Animation$$.prototype;
$JSCompiler_prototypeAlias$$.$fps_$ = 0;
$JSCompiler_prototypeAlias$$.progress = 0;
$JSCompiler_prototypeAlias$$.$lastFrame$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.play = function $$JSCompiler_prototypeAlias$$$play$($now$$2_opt_restart$$) {
  if($now$$2_opt_restart$$ || this.$state_$ == $goog$fx$TransitionBase$State$STOPPED$$) {
    this.progress = 0, this.coords = this.$startPoint$
  }else {
    if(1 == this.$state_$) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  $goog$fx$anim$unregisterAnimation$$(this);
  this.startTime = $now$$2_opt_restart$$ = $goog$now$$();
  -1 == this.$state_$ && (this.startTime -= this.duration * this.progress);
  this.$endTime$ = this.startTime + this.duration;
  this.$lastFrame$ = this.startTime;
  this.progress || this.$onBegin$();
  this.$dispatchAnimationEvent$("play");
  -1 == this.$state_$ && this.$dispatchAnimationEvent$("resume");
  this.$state_$ = 1;
  var $uid$$inline_488$$ = $goog$getUid$$(this);
  $uid$$inline_488$$ in $goog$fx$anim$activeAnimations_$$ || ($goog$fx$anim$activeAnimations_$$[$uid$$inline_488$$] = this);
  $goog$fx$anim$requestAnimationFrame_$$();
  $JSCompiler_StaticMethods_cycle$$(this, $now$$2_opt_restart$$);
  return $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$($opt_gotoEnd$$) {
  $goog$fx$anim$unregisterAnimation$$(this);
  this.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$;
  $opt_gotoEnd$$ && (this.progress = 1);
  $JSCompiler_StaticMethods_updateCoords_$$(this, this.progress);
  this.$dispatchAnimationEvent$("stop");
  this.$onEnd$()
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$state_$ == $goog$fx$TransitionBase$State$STOPPED$$ || this.stop($JSCompiler_alias_FALSE$$);
  this.$dispatchAnimationEvent$("destroy");
  $goog$fx$Animation$$.$superClass_$.$disposeInternal$.call(this)
};
function $JSCompiler_StaticMethods_cycle$$($JSCompiler_StaticMethods_cycle$self$$, $now$$5$$) {
  $JSCompiler_StaticMethods_cycle$self$$.progress = ($now$$5$$ - $JSCompiler_StaticMethods_cycle$self$$.startTime) / ($JSCompiler_StaticMethods_cycle$self$$.$endTime$ - $JSCompiler_StaticMethods_cycle$self$$.startTime);
  1 <= $JSCompiler_StaticMethods_cycle$self$$.progress && ($JSCompiler_StaticMethods_cycle$self$$.progress = 1);
  $JSCompiler_StaticMethods_cycle$self$$.$fps_$ = 1E3 / ($now$$5$$ - $JSCompiler_StaticMethods_cycle$self$$.$lastFrame$);
  $JSCompiler_StaticMethods_cycle$self$$.$lastFrame$ = $now$$5$$;
  $JSCompiler_StaticMethods_updateCoords_$$($JSCompiler_StaticMethods_cycle$self$$, $JSCompiler_StaticMethods_cycle$self$$.progress);
  1 == $JSCompiler_StaticMethods_cycle$self$$.progress ? ($JSCompiler_StaticMethods_cycle$self$$.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$, $goog$fx$anim$unregisterAnimation$$($JSCompiler_StaticMethods_cycle$self$$), $JSCompiler_StaticMethods_cycle$self$$.$dispatchAnimationEvent$("finish"), $JSCompiler_StaticMethods_cycle$self$$.$onEnd$()) : 1 == $JSCompiler_StaticMethods_cycle$self$$.$state_$ && $JSCompiler_StaticMethods_cycle$self$$.$onAnimate$()
}
function $JSCompiler_StaticMethods_updateCoords_$$($JSCompiler_StaticMethods_updateCoords_$self$$, $t$$) {
  $goog$isFunction$$($JSCompiler_StaticMethods_updateCoords_$self$$.$accel_$) && ($t$$ = $JSCompiler_StaticMethods_updateCoords_$self$$.$accel_$($t$$));
  $JSCompiler_StaticMethods_updateCoords_$self$$.coords = Array($JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$.length);
  for(var $i$$146$$ = 0;$i$$146$$ < $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$.length;$i$$146$$++) {
    $JSCompiler_StaticMethods_updateCoords_$self$$.coords[$i$$146$$] = ($JSCompiler_StaticMethods_updateCoords_$self$$.$endPoint$[$i$$146$$] - $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$[$i$$146$$]) * $t$$ + $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$[$i$$146$$]
  }
}
$JSCompiler_prototypeAlias$$.$onAnimate$ = function $$JSCompiler_prototypeAlias$$$$onAnimate$$() {
  this.$dispatchAnimationEvent$("animate")
};
$JSCompiler_prototypeAlias$$.$dispatchAnimationEvent$ = function $$JSCompiler_prototypeAlias$$$$dispatchAnimationEvent$$($type$$98$$) {
  this.dispatchEvent(new $goog$fx$AnimationEvent$$($type$$98$$, this))
};
function $goog$fx$AnimationEvent$$($type$$99$$, $anim$$1$$) {
  $goog$events$Event$$.call(this, $type$$99$$);
  this.coords = $anim$$1$$.coords;
  this.x = $anim$$1$$.coords[0];
  this.y = $anim$$1$$.coords[1];
  this.$z$ = $anim$$1$$.coords[2];
  this.duration = $anim$$1$$.duration;
  this.progress = $anim$$1$$.progress;
  this.$fps$ = $anim$$1$$.$fps_$;
  this.state = $anim$$1$$.$state_$;
  this.$anim$ = $anim$$1$$
}
$goog$inherits$$($goog$fx$AnimationEvent$$, $goog$events$Event$$);
// Input 90
// Input 91
// Input 92
// Input 93
function $goog$fx$dom$PredefinedEffect$$($element$$119$$, $start$$11$$, $end$$6$$, $time$$1$$, $opt_acc$$1$$) {
  $goog$fx$Animation$$.call(this, $start$$11$$, $end$$6$$, $time$$1$$, $opt_acc$$1$$);
  this.element = $element$$119$$
}
$goog$inherits$$($goog$fx$dom$PredefinedEffect$$, $goog$fx$Animation$$);
$JSCompiler_prototypeAlias$$ = $goog$fx$dom$PredefinedEffect$$.prototype;
$JSCompiler_prototypeAlias$$.$updateStyle$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$isRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$isRightToLeft$$() {
  $goog$isDef$$(this.$rightToLeft_$) || (this.$rightToLeft_$ = $goog$style$isRightToLeft$$(this.element));
  return this.$rightToLeft_$
};
$JSCompiler_prototypeAlias$$.$onAnimate$ = function $$JSCompiler_prototypeAlias$$$$onAnimate$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onAnimate$.call(this)
};
$JSCompiler_prototypeAlias$$.$onEnd$ = function $$JSCompiler_prototypeAlias$$$$onEnd$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onEnd$.call(this)
};
$JSCompiler_prototypeAlias$$.$onBegin$ = function $$JSCompiler_prototypeAlias$$$$onBegin$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onBegin$.call(this)
};
function $goog$fx$dom$Fade$$($element$$127$$, $start$$19$$, $end$$14$$, $time$$9$$, $opt_acc$$9$$) {
  $goog$isNumber$$($start$$19$$) && ($start$$19$$ = [$start$$19$$]);
  $goog$isNumber$$($end$$14$$) && ($end$$14$$ = [$end$$14$$]);
  $goog$fx$dom$PredefinedEffect$$.call(this, $element$$127$$, $start$$19$$, $end$$14$$, $time$$9$$, $opt_acc$$9$$);
  (1 != $start$$19$$.length || 1 != $end$$14$$.length) && $JSCompiler_alias_THROW$$(Error("Start and end points must be 1D"))
}
$goog$inherits$$($goog$fx$dom$Fade$$, $goog$fx$dom$PredefinedEffect$$);
$goog$fx$dom$Fade$$.prototype.$updateStyle$ = function $$goog$fx$dom$Fade$$$$$updateStyle$$() {
  $goog$style$setOpacity$$(this.element, this.coords[0])
};
$goog$fx$dom$Fade$$.prototype.show = function $$goog$fx$dom$Fade$$$$show$() {
  this.element.style.display = ""
};
$goog$fx$dom$Fade$$.prototype.hide = function $$goog$fx$dom$Fade$$$$hide$() {
  this.element.style.display = "none"
};
function $goog$fx$dom$FadeOutAndHide$$($element$$130$$, $time$$12$$, $opt_acc$$12$$) {
  $goog$fx$dom$Fade$$.call(this, $element$$130$$, 1, 0, $time$$12$$, $opt_acc$$12$$)
}
$goog$inherits$$($goog$fx$dom$FadeOutAndHide$$, $goog$fx$dom$Fade$$);
$goog$fx$dom$FadeOutAndHide$$.prototype.$onBegin$ = function $$goog$fx$dom$FadeOutAndHide$$$$$onBegin$$() {
  this.show();
  $goog$fx$dom$FadeOutAndHide$$.$superClass_$.$onBegin$.call(this)
};
$goog$fx$dom$FadeOutAndHide$$.prototype.$onEnd$ = function $$goog$fx$dom$FadeOutAndHide$$$$$onEnd$$() {
  this.hide();
  $goog$fx$dom$FadeOutAndHide$$.$superClass_$.$onEnd$.call(this)
};
// Input 94
function $bitex$model$Model$$($element$$135$$, $opt_map$$1$$, $var_args$$84$$) {
  this.$element_$ = $element$$135$$;
  this.$map_$ = new $goog$structs$Map$$($opt_map$$1$$, $var_args$$84$$)
}
$goog$inherits$$($bitex$model$Model$$, $goog$events$EventTarget$$);
$bitex$model$Model$$.prototype.get = function $$bitex$model$Model$$$$get$($key$$76$$, $opt_val$$2$$) {
  return this.$map_$.get($key$$76$$, $opt_val$$2$$)
};
function $JSCompiler_StaticMethods_updateDom$$($JSCompiler_StaticMethods_updateDom$self$$) {
  var $elements$$3$$ = $goog$dom$getElementsByClass$$("bitex-model", $JSCompiler_StaticMethods_updateDom$self$$.$element_$);
  $goog$array$forEach$$($elements$$3$$, function($el$$77$$) {
    var $model_key_value$$139$$ = $el$$77$$.getAttribute("data-model-key");
    if($model_key_value$$139$$ != $JSCompiler_alias_NULL$$) {
      var $current_value$$ = $goog$dom$getTextContent$$($el$$77$$), $model_key_value$$139$$ = this.get($model_key_value$$139$$);
      $current_value$$ !== $model_key_value$$139$$ && $goog$dom$setTextContent$$($el$$77$$, $model_key_value$$139$$)
    }
  }, $JSCompiler_StaticMethods_updateDom$self$$)
}
$bitex$model$Model$$.prototype.set = function $$bitex$model$Model$$$$set$($key$$77$$, $value$$140$$) {
  var $old_value$$ = this.$map_$.get($key$$77$$);
  this.$map_$.set($key$$77$$, $value$$140$$);
  var $elements$$4$$ = $goog$dom$getElementsByClass$$("bitex-model", this.$element_$);
  $goog$array$forEach$$($elements$$4$$, function($el$$78$$) {
    if($el$$78$$.getAttribute("data-model-key") === $key$$77$$ && $goog$dom$getTextContent$$($el$$78$$) !== $value$$140$$) {
      $goog$dom$setTextContent$$($el$$78$$, $value$$140$$);
      var $blink_class$$1$$ = $el$$78$$.getAttribute("data-blink-class");
      if($blink_class$$1$$ != $JSCompiler_alias_NULL$$) {
        var $blink_delay$$ = $el$$78$$.getAttribute("data-blink-delay") || 700, $blink_delay$$ = parseInt($blink_delay$$, 10);
        $goog$dom$classes$add$$($el$$78$$, $blink_class$$1$$);
        $goog$Timer$callOnce$$(function() {
          $goog$dom$classes$remove$$($el$$78$$, $blink_class$$1$$)
        }, $blink_delay$$, this)
      }
    }
  });
  this.dispatchEvent(new $bitex$model$ModelEvent$$("model_set" + $key$$77$$, $key$$77$$, $value$$140$$, $old_value$$));
  this.dispatchEvent(new $bitex$model$ModelEvent$$("model_set", $key$$77$$, $value$$140$$, $old_value$$))
};
function $bitex$model$ModelEvent$$($type$$100$$, $key$$78$$, $data$$33$$, $old_data$$) {
  $goog$events$Event$$.call(this, $type$$100$$);
  this.key = $key$$78$$;
  this.data = $data$$33$$;
  this.$old_data$ = $old_data$$
}
$goog$inherits$$($bitex$model$ModelEvent$$, $goog$events$Event$$);
// Input 95
// Input 96
function $bitex$view$View$$($app$$1$$, $opt_domHelper$$8$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$8$$);
  this.$is_active_$ = $JSCompiler_alias_FALSE$$;
  this.$app_$ = $app$$1$$
}
$goog$inherits$$($bitex$view$View$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$View$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("bitex-view");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  return this.$getDomHelper$().$createDom$("div", this.$getCssClass$())
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$136$$) {
  $bitex$view$View$$.$superClass_$.$decorateInternal$.call(this, $element$$136$$);
  this.$getDomHelper$();
  return $element$$136$$
};
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  this.$is_active_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  this.$is_active_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  return $goog$dom$getElementByClass$$("bitex-view-content", this.$getElement$()) || this.$getElement$()
};
$JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("bitex.view.View");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$View$$.$superClass_$.$enterDocument$.call(this)
};
$goog$ui$registry$setDecoratorByClassName$$("bitex-view", function() {
  return new $bitex$view$View$$
});
// Input 97
function $bitex$templates$DepositReceiptDialogContent$$($opt_data$$8_receipt_urlList22$$) {
  var $output$$6$$ = "";
  $opt_data$$8_receipt_urlList22$$ = $opt_data$$8_receipt_urlList22$$.$depositReceiptList$;
  for(var $receipt_urlListLen22$$ = $opt_data$$8_receipt_urlList22$$.length, $receipt_urlIndex22$$ = 0;$receipt_urlIndex22$$ < $receipt_urlListLen22$$;$receipt_urlIndex22$$++) {
    var $receipt_urlData22$$ = $opt_data$$8_receipt_urlList22$$[$receipt_urlIndex22$$], $output$$6$$ = $output$$6$$ + ('<img width="100%" src="' + $soy$$0$0escapeHtml$$($receipt_urlData22$$) + '"/><a href="' + $soy$$0$0escapeHtml$$($receipt_urlData22$$) + '" target="_blank">Download</a>')
  }
  return $output$$6$$
}
function $bitex$templates$BrokerConfirmDepositContent$$($opt_data$$9_output$$7$$) {
  return $opt_data$$9_output$$7$$ = "" + ('<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">N\u00famero de controle</label><div class="controls"><label class="control-label" style="text-align: left;">' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$controlNumber$) + '</label></div></div><div class="control-group"><label class="control-label">Valor pago</label><div class="controls"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$currencySign$) + 
  '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$id_value$) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.value) + '"></div></div></div><div class="control-group"><label class="control-label">Taxas:</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$percentFeeID$) + '" type="text" class="input-mini" size="16" name="Fee" value="' + 
  $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$percentFee$) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$fixedFeeID$) + '" type="text" class="input-mini" size="16" name="Fee" value="' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$fixedFee$) + '"></div></div><div class="span4"><label id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$totalFeesID$) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">Valor l\u00edquido</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$netValueID$) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + $soy$$0$0escapeHtml$$($opt_data$$9_output$$7$$.$netValueID$) + 
  '_value" type="hidden" value=""></div></div></form>')
}
function $bitex$templates$BrokerView$$($opt_data$$10$$) {
  var $output$$8$$ = "";
  $opt_data$$10$$.$show_title$ && ($output$$8$$ += '<div class="section-title"><h3>Meu corretor</h3></div>');
  $output$$8$$ += '<div class="content">';
  if(-1 != $opt_data$$10$$.$msg_broker$.BrokerID) {
    $output$$8$$ += "<address><strong>" + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.BusinessName) + "</strong><br/>" + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.Address) + "<br/>" + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.City) + ", " + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.State) + " " + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.ZipCode) + " - " + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.Country) + "<br/>";
    $opt_data$$10$$.$msg_broker$.PhoneNumber1 && ($output$$8$$ += '<abbr title="Telefone">Tel:</abbr>' + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.PhoneNumber1) + " " + ($opt_data$$10$$.$msg_broker$.PhoneNumber2 ? ", " + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.PhoneNumber2) : "") + "<br/>");
    $output$$8$$ += ($opt_data$$10$$.$msg_broker$.Skype ? "Skype: " + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.Skype) + "<br/>" : "") + '<a href="mailto:' + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.Email) + '" target="_blank">' + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.Email) + "</a></address>";
    if(0 < $opt_data$$10$$.$msg_broker$.BrokerID) {
      var $output$$8$$ = $output$$8$$ + '<div class="row-fluid"><div class="span3"><h4>Markets</h4>', $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$ = $opt_data$$10$$.$msg_broker$.AllowedMarkets, $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$ = [], $allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$;
      for($allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$ in $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$) {
        $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$.push($allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$)
      }
      $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$ = $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$.length;
      for($allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$ = 0;$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$ < $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$;$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$++) {
        $output$$8$$ += '<div class="row-fluid"><div class="span12">' + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.AllowedMarkets[$crypto_currenciesList202_feeList171_mapKeys$$inline_501$$[$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$]].description) + "</div></div>"
      }
      $output$$8$$ += "</div></div>"
    }
    if(0 <= $opt_data$$10$$.$msg_broker$.BrokerID && 0 < $opt_data$$10$$.$msg_broker$.FeeStructure.length) {
      $output$$8$$ += '<h4>Taxas</h4><table class="table table-bordered"><thead><tr><th>Opera\u00e7\u00e3o</th><th>Taxa</th><th>Termos</th></tr></thead><tbody>';
      $opt_data$$10$$.$msg_broker$.IsBrokerHub || ($output$$8$$ = $opt_data$$10$$.$msg_broker$.FormattedTransactionFeeBuy == $opt_data$$10$$.$msg_broker$.FormattedTransactionFeeSell ? $output$$8$$ + ("<tr><td>Taxa de trade</td><td>" + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.FormattedTransactionFeeBuy) + "</td><td></td></tr>") : $output$$8$$ + ("<tr><td>Taxa de trade - compra</td><td>" + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.FormattedTransactionFeeBuy) + "</td><td></td></tr><tr><td>Taxa de trade - venda</td><td>" + 
      $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.FormattedTransactionFeeSell) + " %</td><td></td></tr>"));
      $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$ = $opt_data$$10$$.$msg_broker$.FeeStructure;
      $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$ = $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$.length;
      for($allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$ = 0;$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$ < $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$;$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$++) {
        var $crypto_currenciesData202_feeData171$$ = $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$[$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$], $output$$8$$ = $output$$8$$ + ("<tr><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData202_feeData171$$.Operation) + "</td><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData202_feeData171$$.Fee) + "</td><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData202_feeData171$$.Terms) + "</td></tr>")
      }
      $output$$8$$ += "</tbody></table>"
    }
    if(!$opt_data$$10$$.$msg_broker$.IsBrokerHub) {
      $output$$8$$ += '<h4>Carteiras</h4><table class="table table-bordered"><thead><tr><th>Moeda</th><th>Tipo</th><th>Endere\u00e7o</th><th>Multi-assinatura</th><th>Ger\u00eanciada por</th></tr></thead><tbody>';
      $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$ = $opt_data$$10$$.$msg_broker$.CryptoCurrencies;
      $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$ = $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$.length;
      for($allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$ = 0;$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$ < $allowed_marketListLen126_crypto_currenciesListLen202_feeListLen171_map$$inline_500$$;$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$++) {
        for(var $crypto_currenciesData202_feeData171$$ = $crypto_currenciesList202_feeList171_mapKeys$$inline_501$$[$allowed_marketIndex126_crypto_currenciesIndex202_feeIndex171_key$$inline_502$$], $walletsList203$$ = $crypto_currenciesData202_feeData171$$.Wallets, $walletsListLen203$$ = $walletsList203$$.length, $walletsIndex203$$ = 0;$walletsIndex203$$ < $walletsListLen203$$;$walletsIndex203$$++) {
          var $walletsData203$$ = $walletsList203$$[$walletsIndex203$$], $output$$8$$ = $output$$8$$ + ("<tr><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData202_feeData171$$.CurrencyDescription) + "</td><td>" + $soy$$0$0escapeHtml$$($walletsData203$$.type) + "</td><td>");
          if("BTC" == $crypto_currenciesData202_feeData171$$.CurrencyCode) {
            switch($walletsData203$$.address[0]) {
              case "m":
              ;
              case "n":
              ;
              case "2":
              ;
              case "9":
              ;
              case "c":
                $output$$8$$ += '<a href="https://test-insight.bitpay.com/address/' + $soy$$0$0escapeHtml$$($walletsData203$$.address) + '/" target="_blank">' + $soy$$0$0escapeHtml$$($walletsData203$$.address) + "</a>";
                break;
              default:
                $output$$8$$ += '<a href="https://blockchain.info/address/' + $soy$$0$0escapeHtml$$($walletsData203$$.address) + '/" target="_blank">' + $soy$$0$0escapeHtml$$($walletsData203$$.address) + "</a>"
            }
          }else {
            $output$$8$$ += $soy$$0$0escapeHtml$$($walletsData203$$.address)
          }
          $output$$8$$ += "</td><td>";
          $output$$8$$ = $walletsData203$$.multisig ? $output$$8$$ + "Sim" : $output$$8$$ + "N\u00e3o";
          $output$$8$$ += "</td><td>" + $soy$$0$0escapeHtml$$($walletsData203$$.managed_by) + "</td></tr>"
        }
      }
      $output$$8$$ += "</tbody></table>"
    }
    $output$$8$$ += '<h4>Termos de servi\u00e7o</h4><iframe style="width:100%;height:400px;" src="' + $soy$$0$0escapeHtml$$($opt_data$$10$$.$msg_broker$.TosUrl) + '"></iframe>'
  }
  return $output$$8$$ + "</div>"
}
function $bitex$templates$CancelDepositDialogContent$$() {
  var $output$$9$$;
  return $output$$9$$ = "" + ('<p>Informe a raz\u00e3o do cancelamento do dep\u00f3sito</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$("id_select_reason") + '" >Raz\u00e3o:</label><div class="controls"><select id="' + $soy$$0$0escapeHtml$$("id_select_reason") + '"><option value=0 selected>Outro</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + $soy$$0$0escapeHtml$$("id_custom_reason_text") + 
  '" rows="2" style=""></textarea></div></div></fieldset></form>')
}
function $bitex$templates$CancelWithdrawDialogContent$$() {
  var $output$$10$$;
  return $output$$10$$ = "" + ('<p>Informe a raz\u00e3o do cancelamento do pedido de saque</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$("id_select_reason") + '" >Raz\u00e3o:</label><div class="controls"><select id="' + $soy$$0$0escapeHtml$$("id_select_reason") + '"><option value=0>Outro</option><option value=-1 selected>Saldo insuficiente</option><option value=-2>Conta n\u00e3o \u00e9 verificada</option><option value=-3>Suspeita de fraude</option><option value=-4>Pedindo o saque para uma conta diferente da sua</option><option value=-5>Carteira inv\u00e1lida</option><option value=-6>Dados banc\u00e1rios inv\u00e1lidos</option><option value=-7>Ultrapassou o limite di\u00e1rio de saque</option><option value=-8>User has deposits that are not yet confirmed</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + 
  $soy$$0$0escapeHtml$$("id_custom_reason_text") + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>')
}
function $bitex$templates$GoogleAuthenticationCodeDialogContent$$() {
  return'<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>C\u00f3digo do Google Authenticator:</label><input name="token" data-uniform-validators="required" data-uniform-label="Google authenticator code" label="ex. 555555" class="input-large" type="text" size="10"></div></fieldset></form>'
}
function $bitex$templates$WithdrawConfirmationDialogContent$$() {
  return'<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>N\u00f3s enviamos um c\u00f3digo de confirma\u00e7\u00e3o para o seu email.</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="C\u00f3digo de confirma\u00e7\u00e3o" class="input-block-level"></div><p><i>Esta \u00e9 uma medida para aumentar a seguran\u00e7a de sua conta</i></p></fieldset></form>'
}
function $bitex$templates$UserFeesDialogContent$$($opt_data$$15_output$$13$$) {
  return $opt_data$$15_output$$13$$ = "" + ('<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.id) + '_buy_fee">Buy fee </label><div class="controls"><input type="text" id="' + $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.id) + '_buy_fee"  style="text-align: right;" value="' + $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.$buy_fee$) + '"/><div class="checkbox"><label><input type="checkbox" id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.id) + '_sell_fee">Sell fee</label><div class="controls"><input type="text" id="' + $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.id) + '_sell_fee"  style="text-align: right;" value="' + $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.$sell_fee$) + '"/><div class="checkbox"><label><input type="checkbox" id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$15_output$$13$$.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>')
}
function $bitex$templates$YourAccountSummary$$($opt_data$$16$$) {
  var $output$$14$$;
  $output$$14$$ = "<h6>Sua conta</h6>";
  for(var $accountList356$$ = $opt_data$$16$$.$accounts$, $accountListLen356$$ = $accountList356$$.length, $accountIndex356$$ = 0;$accountIndex356$$ < $accountListLen356$$;$accountIndex356$$++) {
    var $accountData356$$ = $accountList356$$[$accountIndex356$$];
    $output$$14$$ += '<table class="table table-bordered account-summary-table" ><tbody><tr id="id_account_summary_' + $soy$$0$0escapeHtml$$($accountData356$$.brokerID) + '" class=\'account-summary-broker model-action-set\' data-key="SelectedBrokerID" data-value="' + $soy$$0$0escapeHtml$$($accountData356$$.brokerID) + '"' + (1 >= $opt_data$$16$$.$accounts$.length || 0 == $accountData356$$.currencies.length ? 'style="display:none;"' : "") + '><td colspan="3"><strong>' + $soy$$0$0escapeHtml$$($accountData356$$.brokerName) + 
    "</strong></td></tr>";
    for(var $currency_infoList368$$ = $accountData356$$.currencies, $currency_infoListLen368$$ = $currency_infoList368$$.length, $currency_infoIndex368$$ = 0;$currency_infoIndex368$$ < $currency_infoListLen368$$;$currency_infoIndex368$$++) {
      var $currency_infoData368$$ = $currency_infoList368$$[$currency_infoIndex368$$];
      $output$$14$$ += '<tr><td style="padding: 4px;' + (0 != $currency_infoIndex368$$ ? "border-top: 0;" : "") + '"><strong>' + $soy$$0$0escapeHtml$$($currency_infoData368$$.currency) + '</strong></td><td style="padding: 4px;' + (0 != $currency_infoIndex368$$ ? "border-top: 0;" : "") + '"><span class="bitex-model" data-model-key="formatted_balance_' + $soy$$0$0escapeHtml$$($accountData356$$.brokerID) + ":" + $soy$$0$0escapeHtml$$($accountData356$$.clientID) + "_" + $soy$$0$0escapeHtml$$($currency_infoData368$$.currency) + 
      '" data-blink-class="balance-info-blink">' + $soy$$0$0escapeHtml$$($currency_infoData368$$.formattedBalance) + '</span><abbr title="Unconfirmed deposits from your confirmed addresses"><em><span class="bitex-model" data-model-key="formatted_position_' + $soy$$0$0escapeHtml$$($accountData356$$.brokerID) + ":" + $soy$$0$0escapeHtml$$($accountData356$$.clientID) + "_" + $soy$$0$0escapeHtml$$($currency_infoData368$$.currency) + '" data-blink-class="balance-info-blink"></span></em></abbr></td><td style="padding: 4px;border-left:0;' + 
      (0 != $currency_infoIndex368$$ ? "border-top: 0;" : "") + '">' + ($currency_infoData368$$.showDeposit && $currency_infoData368$$.showWithdraw ? '<div class="btn-group">' : "") + ($currency_infoData368$$.showDeposit ? '<button class="btn btn-mini" data-action="deposit" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData368$$.currency) + '"><i data-action="deposit" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData368$$.currency) + '" class="icon-download-alt"></i></button>' : 
      "") + ($currency_infoData368$$.showWithdraw ? '<button class="btn btn-mini" data-action="withdraw" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData368$$.currency) + '"><i data-action="withdraw" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData368$$.currency) + '" class="icon-upload-alt"></i></button>' : "") + ($currency_infoData368$$.showDeposit && $currency_infoData368$$.showWithdraw ? "</div>" : "") + "</td></tr>"
    }
    $output$$14$$ += "</tbody></table>"
  }
  return $output$$14$$
}
function $bitex$templates$WaitingForDepositResponseDialogContent$$() {
  return'<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">Processando o dep\u00f3sito...</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>'
}
function $bitex$templates$DepositCryptoCurrencyContentDialog$$($opt_data$$19$$) {
  var $output$$17$$ = '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + $soy$$0$0escapeHtml$$($opt_data$$19$$.$deposit_message$.Data.InputAddress) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + $soy$$0$0escapeHtml$$($opt_data$$19$$.$deposit_message$.Data.InputAddress) + '"/></div>';
  $opt_data$$19$$.$hasInstantDepositsEnabled$ && ($output$$17$$ += '<div class="alert alert-block">Your account has instant deposits enabled. In case you intentionally try to do a "double spending" attack, your account will be frozen, even if your double spending attack is not successful.</div>');
  return $output$$17$$ + "</div>"
}
function $bitex$templates$CryptoCurrencyQRContentDialog$$($opt_data$$20$$) {
  return'<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + $soy$$0$0escapeHtml$$($opt_data$$20$$.data.Wallet) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + $soy$$0$0escapeHtml$$($opt_data$$20$$.data.Wallet) + '"/></div></div>'
}
function $bitex$templates$ConfirmTrustedAddressContentDialog$$($opt_data$$21_output$$18$$) {
  return $opt_data$$21_output$$18$$ = "" + ('<div class="row-fluid"><h3 class="text-center"> Do you want to enable instant deposits for this address?</h3><h5 class="text-center">' + $soy$$0$0escapeHtml$$($opt_data$$21_output$$18$$.data.Address) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="Enter a label for this address."></input></div><h4 class="text-center">Only enable it if you have the private key for this address.</h4><div class="alert alert-block"><h4>Always remember what happened at MtGox</h4>Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.</div></div>')
}
function $bitex$templates$ConfirmDepositCryptoCurrencyContentDialog$$($MSG_UNNAMED_1605_opt_data$$22$$) {
  var $output$$19$$ = "";
  $MSG_UNNAMED_1605_opt_data$$22$$ = "Ser\u00e1 criado um endere\u00e7o de " + ($soy$$0$0escapeHtml$$($MSG_UNNAMED_1605_opt_data$$22$$.$currencydescription$) + " \u00fanico e exclusivo que ser\u00e1 v\u00e1lido somente para este dep\u00f3sito.");
  return $output$$19$$ + ('<div class="row-fluid" data-deposit-status="confirm"><h3 class="text-center"> IMPORTANTE! </h3><h4 class="text-center">' + $MSG_UNNAMED_1605_opt_data$$22$$ + '</h4><h3 class="text-center"> Voc\u00ea entendeu? </h3><br/><br/></div>')
}
function $bitex$templates$DepositSlipContentDialog$$($opt_data$$23$$) {
  return'<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + $soy$$0$0escapeHtml$$($opt_data$$23$$.$rest_url$) + "/get_deposit?deposit_id=" + $soy$$0$0escapeHtml$$($opt_data$$23$$.$deposit_id$) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>'
}
function $bitex$templates$FeesFormControls$$($opt_data$$24_output$$20$$) {
  return $opt_data$$24_output$$20$$ = "" + ('<div class="control-group"><label class="control-label">Taxas:</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$percentFeeID$) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$percentFee$) + '"><span class="add-on">%</span></div><span style="font-style: italic;">percentual</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + 
  $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$fixedFeeID$) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$fixedFee$) + '"></div><span style="font-style: italic;">fixo</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$totalFeesID$) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group" style="' + ($opt_data$$24_output$$20$$.$hideNetValueID$ ? "display:none" : "") + '"><label class="control-label">Valor l\u00edquido</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$netValueID$) + '" class="control-label" style="text-align: left;"></label><input id="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$20$$.$netValueID$) + 
  '_value" type="hidden" value=""></div></div>')
}
function $bitex$templates$FeesForm$$($opt_data$$25_output$$21$$) {
  return $opt_data$$25_output$$21$$ = "" + ('<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + $soy$$0$0escapeHtml$$($opt_data$$25_output$$21$$.$currency$) + '"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$25_output$$21$$.$amountID$) + '" type="hidden" name="Amount" value="' + $soy$$0$0escapeHtml$$($opt_data$$25_output$$21$$.$amount$) + '"><div class="control-group"><label class="control-label">Valor solicitado</label><div class="controls"><label class="control-label" style="text-align: left;">' + 
  $soy$$0$0escapeHtml$$($opt_data$$25_output$$21$$.$formattedAmount$) + "</label></div></div>" + $bitex$templates$FeesFormControls$$({$currencySign$:$opt_data$$25_output$$21$$.$currencySign$, $percentFeeID$:$opt_data$$25_output$$21$$.$percentFeeID$, $percentFee$:$opt_data$$25_output$$21$$.$percentFee$, $fixedFeeID$:$opt_data$$25_output$$21$$.$fixedFeeID$, $fixedFee$:$opt_data$$25_output$$21$$.$fixedFee$, $totalFeesID$:$opt_data$$25_output$$21$$.$totalFeesID$, $netValueID$:$opt_data$$25_output$$21$$.$netValueID$, 
  $hideNetValueID$:$JSCompiler_alias_TRUE$$}) + "</form>")
}
function $bitex$templates$DepositWithdrawDialogContent$$($opt_data$$26$$) {
  var $output$$22$$ = '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><input type="hidden" name="Currency" value="' + $soy$$0$0escapeHtml$$($opt_data$$26$$.$currency$) + '">' + ("broker" == $opt_data$$26$$.$side$ ? '<input id="' + $soy$$0$0escapeHtml$$($opt_data$$26$$.$amountID$) + '" type="hidden" name="Amount" value="' + $soy$$0$0escapeHtml$$($opt_data$$26$$.$amount$ / 1E8) + '">' : "") + '<div class="error"></div>';
  if(!$opt_data$$26$$.$force_method$) {
    if(1 < $opt_data$$26$$.$methods$.length) {
      for(var $output$$22$$ = $output$$22$$ + ('<div class="control-group"><label class="control-label">Method</label><div class="controls"><select id="' + $soy$$0$0escapeHtml$$($opt_data$$26$$.$methodID$) + '" name="Method" class="withdraw-method-selector">'), $methodList601_methodList626_methodList680$$ = $opt_data$$26$$.$methods$, $methodListLen601_methodListLen626_methodListLen680$$ = $methodList601_methodList626_methodList680$$.length, $methodIndex601_methodIndex626_methodIndex680$$ = 0;$methodIndex601_methodIndex626_methodIndex680$$ < 
      $methodListLen601_methodListLen626_methodListLen680$$;$methodIndex601_methodIndex626_methodIndex680$$++) {
        var $fieldList898_methodData601_methodData626_methodData680$$ = $methodList601_methodList626_methodList680$$[$methodIndex601_methodIndex626_methodIndex680$$], $output$$22$$ = $output$$22$$ + ("<option " + (0 == $methodIndex601_methodIndex626_methodIndex680$$ ? "selected" : "") + ' value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + '" data-net-value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + 
        "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$netValueID$) + '" data-percent-fee="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$percentFeeID$) + '" data-fixed-fee="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$fixedFeeID$) + '">' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.description) + 
        "</option>")
      }
      $output$$22$$ += "</select></div></div>"
    }else {
      $methodList601_methodList626_methodList680$$ = $opt_data$$26$$.$methods$;
      $methodListLen601_methodListLen626_methodListLen680$$ = $methodList601_methodList626_methodList680$$.length;
      for($methodIndex601_methodIndex626_methodIndex680$$ = 0;$methodIndex601_methodIndex626_methodIndex680$$ < $methodListLen601_methodListLen626_methodListLen680$$;$methodIndex601_methodIndex626_methodIndex680$$++) {
        $fieldList898_methodData601_methodData626_methodData680$$ = $methodList601_methodList626_methodList680$$[$methodIndex601_methodIndex626_methodIndex680$$], $output$$22$$ += '<input  id="' + $soy$$0$0escapeHtml$$($opt_data$$26$$.$methodID$) + '" type="hidden" name="Method"  value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + '" data-net-value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + 
        $soy$$0$0escapeHtml$$($opt_data$$26$$.$netValueID$) + '" data-percent-fee="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$percentFeeID$) + '" data-fixed-fee="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$fixedFeeID$) + '">'
      }
    }
  }
  $output$$22$$ += '<div class="withdraw-methods">';
  0 == $opt_data$$26$$.$methods$.length && (2 >= $opt_data$$26$$.$verificationLevel$ ? ($output$$22$$ += '<div class="alert alert-warning text-left">Due to anti-money laundry international laws and government regulations, deposits/withdrawals in the local currency are only available to verified customers.<br/>We are very sorry for the inconvenience.</div>', 0 == $opt_data$$26$$.$verificationLevel$ && ($output$$22$$ += 'You can verify your account by clicking in <a href="" data-switch-view="verification">Verify your account</a>')) : 
  $output$$22$$ += '<div class="alert alert-danger text-center">We are not accepting deposits at this moment. We sorry for the inconvenience.</div>');
  $methodList601_methodList626_methodList680$$ = $opt_data$$26$$.$methods$;
  $methodListLen601_methodListLen626_methodListLen680$$ = $methodList601_methodList626_methodList680$$.length;
  for($methodIndex601_methodIndex626_methodIndex680$$ = 0;$methodIndex601_methodIndex626_methodIndex680$$ < $methodListLen601_methodListLen626_methodListLen680$$;$methodIndex601_methodIndex626_methodIndex680$$++) {
    if($fieldList898_methodData601_methodData626_methodData680$$ = $methodList601_methodList626_methodList680$$[$methodIndex601_methodIndex626_methodIndex680$$], $opt_data$$26$$.$force_method$) {
      if($fieldList898_methodData601_methodData626_methodData680$$.method == $opt_data$$26$$.$force_method$) {
        if("client" == $opt_data$$26$$.$side$) {
          $output$$22$$ += '<div class="control-group"><label class="control-label">Amount</label><div class="controls"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$26$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$amountID$) + '" data-uniform-validators="required; validateNumber ' + ($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].enabled ? 
          " " + ($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].min ? "; validateMin " + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_min_value) : "") + ($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].max ? "; validateMax " + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_max_value) + 
          " " : "") + " " : "") + '" type="text" class="withdraw-field input-small" size="16" name="Amount"></div>';
          if($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].enabled) {
            $output$$22$$ += "<div><em><small>";
            if($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].min) {
              var $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ = " Maximum: " + ($soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_max) + " per day.  "), $output$$22$$ = $output$$22$$ + ($MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ + "<br>")
            }
            $fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].max && ($MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ = " Minimum: " + ($soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_min) + " per transaction.  "), $output$$22$$ += $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$);
            $output$$22$$ += "</small></em></div>"
          }
          $output$$22$$ += "</div></div>"
        }
        for(var $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ = $fieldList898_methodData601_methodData626_methodData680$$.fields, $fieldIndex898_fieldListLen731$$ = $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$.length, $fieldData898_fieldIndex731$$ = 0;$fieldData898_fieldIndex731$$ < $fieldIndex898_fieldListLen731$$;$fieldData898_fieldIndex731$$++) {
          var $fieldData731$$ = $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$[$fieldData898_fieldIndex731$$], $output$$22$$ = $output$$22$$ + ($fieldData731$$.side == $opt_data$$26$$.$side$ ? '<div class="control-group"><label class="control-label">' + $soy$$0$0escapeHtml$$($fieldData731$$.label) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + $soy$$0$0escapeHtml$$($fieldData731$$.validator) + '" type="' + 
          $soy$$0$0escapeHtml$$($fieldData731$$.type) + '" name="' + $soy$$0$0escapeHtml$$($fieldData731$$.name) + '" label="' + $soy$$0$0escapeHtml$$($fieldData731$$.placeholder) + '" value="' + $soy$$0$0escapeHtml$$($fieldData731$$.value) + '"/></div></div>' : "")
        }
        $output$$22$$ = "client" == $opt_data$$26$$.$side$ ? $output$$22$$ + ('<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.disclaimer) + '</label><input id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$percentFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.percent_fee) + 
        '"><input id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$fixedFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.fixed_fee) + '"></div></div><div class="control-group"><label class="control-label">Taxas:</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + 
        "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$totalFeesID$) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ($opt_data$$26$$.$hideNetAmount$ ? ' style="display:none;" ' : "") + ' ><label class="control-label">Valor l\u00edquido</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$netValueID$) + '" class="control-label" style="text-align: left;"></label><input id="' + 
        $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$netValueID$) + '_value" type="hidden" value=""></div></div>') : $output$$22$$ + ("broker" == $opt_data$$26$$.$side$ ? '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.disclaimer) + "</label></div></div>" + ($opt_data$$26$$.$showFeeDataEntry$ ? 
        $bitex$templates$FeesFormControls$$({$currencySign$:$opt_data$$26$$.$currencySign$, $percentFeeID$:$fieldList898_methodData601_methodData626_methodData680$$.method + "_" + $opt_data$$26$$.$percentFeeID$, $percentFee$:$fieldList898_methodData601_methodData626_methodData680$$.percent_fee, $fixedFeeID$:$fieldList898_methodData601_methodData626_methodData680$$.method + "_" + $opt_data$$26$$.$fixedFeeID$, $fixedFee$:$fieldList898_methodData601_methodData626_methodData680$$.fixed_fee, $totalFeesID$:$fieldList898_methodData601_methodData626_methodData680$$.method + 
        "_" + $opt_data$$26$$.$totalFeesID$, $netValueID$:$fieldList898_methodData601_methodData626_methodData680$$.method + "_" + $opt_data$$26$$.$netValueID$}) : "") : "")
      }
    }else {
      $output$$22$$ += '<div class="withdraw-method" data-withdraw-method="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + '" style="' + (0 != $methodIndex601_methodIndex626_methodIndex680$$ ? "display:none;" : "") + '" >';
      "client" == $opt_data$$26$$.$side$ && ($output$$22$$ += '<div class="control-group"><label class="control-label">Amount</label><div class="controls"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$26$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$amountID$) + '" data-uniform-validators="required; validateNumber ' + ($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].enabled ? 
      " " + ($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].min ? "; validateMin " + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_min_value) : "") + ($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].max ? "; validateMax " + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_max_value) + 
      " " : "") + " " : "") + '" type="text" class="withdraw-field input-small" size="16" name="Amount" ' + (0 != $methodIndex601_methodIndex626_methodIndex680$$ ? "disabled" : "") + "></div>", $fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].enabled && ($output$$22$$ += "<div><em><small>", $fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].min && ($MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ = 
      " Maximum: " + ($soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_max) + " per day.  "), $output$$22$$ += $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ + "<br>"), $fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].max && ($MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ = 
      " Minimum: " + ($soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.limits[$opt_data$$26$$.$verificationLevel$].formatted_min) + " per transaction.  "), $output$$22$$ += $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$), $output$$22$$ += "</small></em></div>"), $output$$22$$ += "</div></div>");
      $output$$22$$ += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.disclaimer) + '</label><input id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$percentFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.percent_fee) + 
      '"><input id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$fixedFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.fixed_fee) + '"></div></div><div class="control-group"><label class="control-label">Taxas:</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + 
      "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$totalFeesID$) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ($opt_data$$26$$.$hideNetAmount$ ? ' style="display:none;" ' : "") + '><label class="control-label">Valor l\u00edquido</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$netValueID$) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + 
      $soy$$0$0escapeHtml$$($fieldList898_methodData601_methodData626_methodData680$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$26$$.$netValueID$) + '_value" type="hidden" value=""></div></div>';
      $fieldList898_methodData601_methodData626_methodData680$$ = $fieldList898_methodData601_methodData626_methodData680$$.fields;
      $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$ = $fieldList898_methodData601_methodData626_methodData680$$.length;
      for($fieldIndex898_fieldListLen731$$ = 0;$fieldIndex898_fieldListLen731$$ < $MSG_UNNAMED_1629_MSG_UNNAMED_1631_MSG_UNNAMED_1639_MSG_UNNAMED_1641_fieldList731_fieldListLen898$$;$fieldIndex898_fieldListLen731$$++) {
        $fieldData898_fieldIndex731$$ = $fieldList898_methodData601_methodData626_methodData680$$[$fieldIndex898_fieldListLen731$$], $output$$22$$ += $fieldData898_fieldIndex731$$.side == $opt_data$$26$$.$side$ ? '<div class="control-group"><label class="control-label">' + $soy$$0$0escapeHtml$$($fieldData898_fieldIndex731$$.label) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + $soy$$0$0escapeHtml$$($fieldData898_fieldIndex731$$.validator) + '" type="' + 
        $soy$$0$0escapeHtml$$($fieldData898_fieldIndex731$$.type) + '" name="' + $soy$$0$0escapeHtml$$($fieldData898_fieldIndex731$$.name) + '" label="' + $soy$$0$0escapeHtml$$($fieldData898_fieldIndex731$$.placeholder) + '" value="' + $soy$$0$0escapeHtml$$($fieldData898_fieldIndex731$$.value) + '"' + (0 != $methodIndex601_methodIndex626_methodIndex680$$ ? "disabled" : "") + " /></div></div>" : ""
      }
      $output$$22$$ += "</div>"
    }
  }
  return $output$$22$$ + '</div><div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></fieldset></form>'
}
function $bitex$templates$YourFeesBalances$$($opt_data$$27$$) {
  var $output$$23$$;
  $output$$23$$ = '<table class="table table-striped table-condensed"><tbody><tr><td><strong>Buy Fee</strong></td><td><span class="bitex-model">';
  $output$$23$$ = $opt_data$$27$$.$buy_fee$ ? $output$$23$$ + $soy$$0$0escapeHtml$$($opt_data$$27$$.$buy_fee$) : $output$$23$$ + "-";
  $output$$23$$ += '</span></td></tr><tr><td><strong>Sell Fee</strong></td><td><span class="bitex-model">';
  $output$$23$$ = $opt_data$$27$$.$sell_fee$ ? $output$$23$$ + $soy$$0$0escapeHtml$$($opt_data$$27$$.$sell_fee$) : $output$$23$$ + "-";
  return $output$$23$$ + "</span></td></tr></tbody></table>"
}
function $bitex$templates$YourAccountBalances$$($currencyList946_opt_data$$28$$) {
  var $output$$24$$ = '<table class="table table-striped" style="width: 350px"><tbody>';
  $currencyList946_opt_data$$28$$ = $currencyList946_opt_data$$28$$.$currencies$;
  for(var $currencyListLen946$$ = $currencyList946_opt_data$$28$$.length, $currencyIndex946$$ = 0;$currencyIndex946$$ < $currencyListLen946$$;$currencyIndex946$$++) {
    var $currencyData946$$ = $currencyList946_opt_data$$28$$[$currencyIndex946$$], $MSG_UNNAMED_1655$$ = $soy$$0$0escapeHtml$$($currencyData946$$.code) + " dispon\u00edveis", $output$$24$$ = $output$$24$$ + ("<tr><td><strong>" + $MSG_UNNAMED_1655$$ + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + $soy$$0$0escapeHtml$$($currencyData946$$.$model_key$) + '" data-blink-class="balance-info-blink">' + ($currencyData946$$.$balance$ ? $soy$$0$0escapeHtml$$($currencyData946$$.$balance$) : 
    "-") + "</span></td></tr>")
  }
  return $output$$24$$ + "</tbody></table>"
}
function $bitex$templates$AccountOverviewHeaderWithDrawEmailData$$($opt_data$$30$$) {
  var $output$$26$$ = "";
  return $output$$26$$ = $opt_data$$30$$.$msg_customer_detail$.NeedWithdrawEmail ? $output$$26$$ + ('<span class="label label-success">Enabled</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$30$$.$msg_customer_detail$.ID) + '">Disable</a>') : $output$$26$$ + ('<span class="label label-important">Disabled</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$30$$.$msg_customer_detail$.ID) + 
  '">Enabled</a>')
}
function $bitex$templates$AccountOverviewHeaderTwoFactors$$($opt_data$$31$$) {
  var $output$$27$$ = "";
  return $output$$27$$ = $opt_data$$31$$.$msg_customer_detail$.TwoFactorEnabled ? $output$$27$$ + ('<span class="label label-success">Enabled</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$31$$.$msg_customer_detail$.ID) + '">Disable</a>') : $output$$27$$ + '<span class="label label-important">Disabled</span>'
}
function $bitex$templates$AccountOverviewHeader$$($opt_data$$32_output$$28$$) {
  var $JSCompiler_temp_const$$16$$ = "", $JSCompiler_temp_const$$15$$ = '<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>ID</strong></td><td>' + $soy$$0$0escapeHtml$$($opt_data$$32_output$$28$$.$msg_customer_detail$.ID) + "</td></tr><tr><td><strong>Username</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32_output$$28$$.$msg_customer_detail$.Username) + "</td></tr><tr><td><strong>Email</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32_output$$28$$.$msg_customer_detail$.Email) + 
  "</td></tr><tr><td><strong>Estado</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32_output$$28$$.$msg_customer_detail$.State) + "</td></tr><tr><td><strong>Pa\u00eds</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32_output$$28$$.$msg_customer_detail$.CountryCode) + "</td></tr><tr><td><strong>\u00daltimo acesso</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32_output$$28$$.$msg_customer_detail$.LastLogin) + '</td></tr><tr><td><strong>\u00c9 verificado</strong></td><td class="account-overview-val account-overview-verified">', 
  $output$$inline_505$$;
  $output$$inline_505$$ = "" + ('<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value=0 ' + (0 == $opt_data$$32_output$$28$$.$msg_customer_detail$.Verified ? "selected" : "") + ">N\u00e3o</option><option value=1 " + (1 == $opt_data$$32_output$$28$$.$msg_customer_detail$.Verified ? "selected" : "") + ">Pending</option><option value=2 " + (2 == $opt_data$$32_output$$28$$.$msg_customer_detail$.Verified ? "selected" : "") + ">Progress</option><option value=3 " + 
  (3 == $opt_data$$32_output$$28$$.$msg_customer_detail$.Verified ? "selected" : "") + ">Yes - Level I </option><option value=4 " + (4 == $opt_data$$32_output$$28$$.$msg_customer_detail$.Verified ? "selected" : "") + ">Yes - Level II </option><option value=5 " + (5 == $opt_data$$32_output$$28$$.$msg_customer_detail$.Verified ? "selected" : "") + ">Yes - Level III </option></select>");
  return $opt_data$$32_output$$28$$ = $JSCompiler_temp_const$$16$$ + ($JSCompiler_temp_const$$15$$ + $output$$inline_505$$ + '</td></tr><tr><td><strong>Habilitou autentica\u00e7\u00e3o em 2 passos</strong></td><td class="account-overview-val account-overview-two-factors" >' + $bitex$templates$AccountOverviewHeaderTwoFactors$$($opt_data$$32_output$$28$$) + "</td></tr><tr><td><strong>Data de registro</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32_output$$28$$.$msg_customer_detail$.Created) + 
  '</td></tr><tr><td><strong>Needs email confirmation on withdraw</strong></td><td class="account-overview-val account-overview-withdraw-email">' + $bitex$templates$AccountOverviewHeaderWithDrawEmailData$$($opt_data$$32_output$$28$$) + "</td></tr></tbody></table>")
}
function $bitex$templates$AccountOverviewUser$$($opt_data$$33$$) {
  var $output$$29$$;
  $output$$29$$ = "" + ('<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>ID</strong></td><td>' + $soy$$0$0escapeHtml$$($opt_data$$33$$.$msg_customer_detail$.ID) + "</td></tr><tr><td><strong>Username</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$33$$.$msg_customer_detail$.Username) + "</td></tr><tr><td><strong>Email</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$33$$.$msg_customer_detail$.Email) + "</td></tr><tr><td><strong>Estado</strong></td><td>" + 
  $soy$$0$0escapeHtml$$($opt_data$$33$$.$msg_customer_detail$.State) + "</td></tr><tr><td><strong>Pa\u00eds</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$33$$.$msg_customer_detail$.CountryCode) + '</td></tr><tr><td><strong>\u00c9 verificado</strong></td><td class="account-overview-val account-overview-verified">');
  switch($opt_data$$33$$.$msg_customer_detail$.Verified) {
    case 0:
      $output$$29$$ += '<span class="label label-important">N\u00e3o</span>';
      break;
    case 1:
      $output$$29$$ += '<span class="label label-important">Pending</span>';
      break;
    case 2:
      $output$$29$$ += '<span class="label label-success">Sim</span>';
      break;
    case 3:
      $output$$29$$ += '<span class="label label-success">Yes - Level II</span>';
      break;
    case 4:
      $output$$29$$ += '<span class="label label-success">Yes - Level III</span>';
      break;
    case 5:
      $output$$29$$ += '<span class="label label-success">Yes - Level IV</span>'
  }
  return $output$$29$$ + "</td></tr></tbody></table>"
}
function $bitex$templates$EnterVerificationDataDialogContent$$($opt_data$$34_output$$30$$) {
  return $opt_data$$34_output$$30$$ = "" + ('<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + $soy$$0$0escapeHtml$$($opt_data$$34_output$$30$$.$clientID$) + '"><div class="control-group"><label class="control-label"> Dados da verifica\u00e7\u00e3o </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>')
}
;
// Input 98
function $bitex$view$SignupView$$($app$$2$$, $opt_domHelper$$9$$) {
  $bitex$view$View$$.call(this, $app$$2$$, $opt_domHelper$$9$$)
}
$goog$inherits$$($bitex$view$SignupView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$SignupView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$SignupView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$49$$ = this.$getHandler$(), $model$$2$$ = this.$app_$.$model_$, $signup_country_el$$ = $goog$dom$getElement$$("id_signup_country"), $signup_state_el$$ = $goog$dom$getElement$$("id_signup_state"), $broker_el$$ = $goog$dom$getElement$$("id_signup_broker");
  $goog$object$forEach$$($bitex$util$getCountries$$(), function($country_info$$, $country_code$$) {
    var $country_el$$79$$ = $country_info$$;
    $goog$isArrayLike$$($country_el$$79$$) && ($country_el$$79$$ = $country_el$$79$$[0]);
    $country_el$$79$$ = $goog$dom$createDom$$("option", {value:$country_code$$}, $country_el$$79$$);
    $signup_country_el$$.appendChild($country_el$$79$$)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $signup_country_el$$, "change", this.$onChangeCountry_$);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $signup_state_el$$, "change", this.$onChangeState_$);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $broker_el$$, "change", this.$onChangeBroker_$);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, this.$app_$.$model_$, "model_setBrokerList", this.$onBrokerList_$);
  var $button_signup$$ = new $goog$ui$Button$$;
  $button_signup$$.$decorate$($goog$dom$getElement$$("id_btn_signup"));
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $goog$dom$getElement$$("user_agreed_tos"), "click", function($e$$70$$) {
    $button_signup$$.$setEnabled$($e$$70$$.target.checked)
  });
  $goog$isDefAndNotNull$$($model$$2$$.get("DefaultCountry")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $model$$2$$.get("DefaultCountry")), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $model$$2$$.get("DefaultCountry")));
  $goog$isDefAndNotNull$$($model$$2$$.get("DefaultState")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_state"), $model$$2$$.get("DefaultState")), $JSCompiler_StaticMethods_onSelectState_$$(this, $model$$2$$.get("DefaultState")));
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $button_signup$$, "action", this.$onSignupButtonClick_$)
};
$JSCompiler_prototypeAlias$$.$getUsername$ = function $$JSCompiler_prototypeAlias$$$$getUsername$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_username"))
};
$JSCompiler_prototypeAlias$$.$getEmail$ = function $$JSCompiler_prototypeAlias$$$$getEmail$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_email"))
};
$JSCompiler_prototypeAlias$$.$getPassword$ = function $$JSCompiler_prototypeAlias$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password"))
};
$JSCompiler_prototypeAlias$$.$getState$ = function $$JSCompiler_prototypeAlias$$$$getState$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state"))
};
$JSCompiler_prototypeAlias$$.$onSignupButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onSignupButtonClick_$$($e$$71_username$$1$$) {
  $e$$71_username$$1$$.stopPropagation();
  $e$$71_username$$1$$.preventDefault();
  $e$$71_username$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_username"));
  var $email$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_email")), $password$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password")), $password2$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password2"));
  $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state"));
  $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country"));
  $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker"));
  $goog$string$isEmpty$$($e$$71_username$$1$$) || /[^a-zA-Z0-9]/.test($e$$71_username$$1$$) ? this.$app_$.$showDialog$("Nome de usu\u00e1rio inv\u00e1lido") : $email$$1$$.match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) ? $goog$string$isEmpty$$($password$$) || 8 > $password$$.length ? this.$app_$.$showDialog$("A senha precisa ter no m\u00ednimo 8 letras") : $password$$ !== $password2$$ ? this.$app_$.$showDialog$("As senhas n\u00e3o conferem") : this.dispatchEvent("signup_click") : 
  this.$app_$.$showDialog$("Email inv\u00e1lido")
};
$JSCompiler_prototypeAlias$$.$onBrokerList_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerList_$$() {
  var $model$$3$$ = this.$app_$.$model_$, $broker_list$$ = $model$$3$$.get("BrokerList");
  if($broker_list$$ != $JSCompiler_alias_NULL$$) {
    $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
    if($goog$isDefAndNotNull$$($model$$3$$.get("DefaultBrokerID"))) {
      var $broker_info_el$$80$$ = $goog$array$find$$($broker_list$$, function($broker_info$$1$$) {
        if($broker_info$$1$$.BrokerID === $model$$3$$.get("DefaultBrokerID")) {
          return $JSCompiler_alias_TRUE$$
        }
      }), $broker_info_el$$80$$ = $goog$dom$createDom$$("option", {value:$broker_info_el$$80$$.BrokerID}, $broker_info_el$$80$$.SignupLabel);
      $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info_el$$80$$)
    }
    $goog$object$forEach$$(this.$app_$.$getBrokersByCountry$(""), function($broker_info$$2_el$$81$$) {
      $model$$3$$.get("DefaultBrokerID") != $broker_info$$2_el$$81$$.BrokerID && ($broker_info$$2_el$$81$$ = $goog$dom$createDom$$("option", {value:$broker_info$$2_el$$81$$.BrokerID}, $broker_info$$2_el$$81$$.SignupLabel), $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info$$2_el$$81$$))
    }, this);
    $goog$isDefAndNotNull$$($model$$3$$.get("DefaultBrokerID")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$3$$.get("DefaultBrokerID")), this.$onChangeBroker_$());
    var $last_country_code$$ = "", $number_of_countries$$ = 0, $brokers_by_country$$ = {};
    $goog$array$forEach$$($broker_list$$, function($broker_info$$3$$) {
      $broker_info$$3$$.IsBrokerHub || ($broker_info$$3$$.CountryCode in $brokers_by_country$$ ? $brokers_by_country$$[$broker_info$$3$$.CountryCode].push($broker_info$$3$$) : ($brokers_by_country$$[$broker_info$$3$$.CountryCode] = [$broker_info$$3$$], 0 < $broker_info$$3$$.CountryCode.length && ($last_country_code$$ = $broker_info$$3$$.CountryCode, ++$number_of_countries$$)))
    }, this);
    $goog$isDefAndNotNull$$($model$$3$$.get("DefaultCountry")) ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $model$$3$$.get("DefaultCountry")), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $model$$3$$.get("DefaultCountry"))) : 1 === $number_of_countries$$ ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $last_country_code$$), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $last_country_code$$)) : this.$onChangeBroker_$()
  }
};
$JSCompiler_prototypeAlias$$.$onChangeCountry_$ = function $$JSCompiler_prototypeAlias$$$$onChangeCountry_$$() {
  var $selected_country$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country"));
  $JSCompiler_StaticMethods_onSelectCountry_$$(this, $selected_country$$)
};
$JSCompiler_prototypeAlias$$.$onChangeState_$ = function $$JSCompiler_prototypeAlias$$$$onChangeState_$$() {
  var $selected_country$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country")), $selected_state$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state"));
  $JSCompiler_StaticMethods_onSelectState_$$(this, $selected_country$$1$$, $selected_state$$)
};
$JSCompiler_prototypeAlias$$.$onChangeBroker_$ = function $$JSCompiler_prototypeAlias$$$$onChangeBroker_$$() {
  var $broker_list$$1_model$$4$$ = this.$app_$.$model_$, $selected_broker$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker")), $broker_list$$1_model$$4$$ = $broker_list$$1_model$$4$$.get("BrokerList");
  if($broker_list$$1_model$$4$$ != $JSCompiler_alias_NULL$$) {
    var $broker$$1$$ = $goog$array$find$$($broker_list$$1_model$$4$$, function($broker$$2$$) {
      if($broker$$2$$.BrokerID == $selected_broker$$) {
        return $JSCompiler_alias_TRUE$$
      }
    });
    if($broker$$1$$ != $JSCompiler_alias_NULL$$) {
      var $fmt$$ = new $goog$i18n$NumberFormat$$(3);
      $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$, 2);
      $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$);
      $broker$$1$$.FormattedTransactionFeeBuy = $fmt$$.$format$($broker$$1$$.TransactionFeeBuy / 1E4);
      $broker$$1$$.FormattedTransactionFeeSell = $fmt$$.$format$($broker$$1$$.TransactionFeeSell / 1E4);
      $goog$soy$renderElement$$($goog$dom$getElement$$("signup_broker_details"), $bitex$templates$BrokerView$$, {$show_title$:$JSCompiler_alias_FALSE$$, $msg_broker$:$broker$$1$$, $broker_list$:$broker_list$$1_model$$4$$})
    }
  }
};
function $JSCompiler_StaticMethods_onSelectCountry_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$2$$) {
  var $model$$5$$ = $JSCompiler_StaticMethods_onSelectCountry_$self$$.$app_$.$model_$, $countries$$1_country_info$$1$$ = $bitex$util$getCountries$$();
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_state"));
  $countries$$1_country_info$$1$$ = $countries$$1_country_info$$1$$[$selected_country$$2$$];
  $goog$style$showElement$$($goog$dom$getElement$$("id_signup_state_group"), $goog$isArrayLike$$($countries$$1_country_info$$1$$));
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
  if($goog$isArrayLike$$($countries$$1_country_info$$1$$)) {
    var $states_name_array$$ = $countries$$1_country_info$$1$$[2].split("|"), $number_of_states_with_brokers$$ = 0, $last_state_with_broker$$ = "";
    $goog$array$forEach$$($countries$$1_country_info$$1$$[1].split("|"), function($state_code$$, $index$$73$$) {
      var $el$$82$$ = $goog$dom$createDom$$("option", {value:$state_code$$}, $states_name_array$$[$index$$73$$]);
      $goog$dom$getElement$$("id_signup_state").appendChild($el$$82$$);
      0 <= $goog$array$findIndex$$(this.$app_$.$getBrokersByCountry$($selected_country$$2$$), function($broker_info$$4$$) {
        if($broker_info$$4$$.IsBrokerHub) {
          return $JSCompiler_alias_FALSE$$
        }
        if($broker_info$$4$$.State === $state_code$$) {
          return $JSCompiler_alias_TRUE$$
        }
      }) && (++$number_of_states_with_brokers$$, $last_state_with_broker$$ = $state_code$$)
    }, $JSCompiler_StaticMethods_onSelectCountry_$self$$);
    if(1 == $number_of_states_with_brokers$$) {
      $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_state"), $last_state_with_broker$$);
      $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$2$$, $last_state_with_broker$$);
      return
    }
    $goog$isDefAndNotNull$$($model$$5$$.get("DefaultState")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_state"), $model$$5$$.get("DefaultState")), $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$2$$, $model$$5$$.get("DefaultState")))
  }
  var $number_of_available_brokers$$ = 0, $number_of_brokers_in_same_country$$ = 0, $last_available_broker$$ = "";
  $goog$object$forEach$$($JSCompiler_StaticMethods_onSelectCountry_$self$$.$app_$.$getBrokersByCountry$($selected_country$$2$$), function($broker_info$$5$$) {
    var $el$$83$$ = $goog$dom$createDom$$("option", {value:$broker_info$$5$$.BrokerID}, $broker_info$$5$$.SignupLabel);
    $goog$dom$getElement$$("id_signup_broker").appendChild($el$$83$$);
    $broker_info$$5$$.IsBrokerHub || (++$number_of_available_brokers$$, $broker_info$$5$$.CountryCode === $selected_country$$2$$ && (++$number_of_brokers_in_same_country$$, $last_available_broker$$ = $broker_info$$5$$.BrokerID))
  }, $JSCompiler_StaticMethods_onSelectCountry_$self$$);
  $goog$isDefAndNotNull$$($model$$5$$.get("DefaultBrokerID")) ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$5$$.get("DefaultBrokerID")) : 1 == $number_of_brokers_in_same_country$$ && $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $last_available_broker$$);
  $JSCompiler_StaticMethods_onSelectCountry_$self$$.$onChangeBroker_$()
}
function $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectState_$self$$, $selected_country$$3$$, $selected_state$$1$$) {
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
  var $model$$6$$ = $JSCompiler_StaticMethods_onSelectState_$self$$.$app_$.$model_$, $number_of_available_brokers$$1$$ = 0, $number_of_brokers_in_same_country_state$$ = 0, $last_available_broker$$1$$ = "";
  $goog$array$forEach$$($JSCompiler_StaticMethods_onSelectState_$self$$.$app_$.$getBrokersByCountry$($selected_country$$3$$, $selected_state$$1$$), function($broker_info$$6_el$$84$$) {
    $broker_info$$6_el$$84$$.IsBrokerHub || (++$number_of_available_brokers$$1$$, $broker_info$$6_el$$84$$.CountryCode === $selected_country$$3$$ && $broker_info$$6_el$$84$$.State === $selected_state$$1$$ && (++$number_of_brokers_in_same_country_state$$, $last_available_broker$$1$$ = $broker_info$$6_el$$84$$.BrokerID));
    $broker_info$$6_el$$84$$ = $goog$dom$createDom$$("option", {value:$broker_info$$6_el$$84$$.BrokerID}, $broker_info$$6_el$$84$$.SignupLabel);
    $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info$$6_el$$84$$)
  }, $JSCompiler_StaticMethods_onSelectState_$self$$);
  $goog$isDefAndNotNull$$($model$$6$$.get("DefaultBrokerID")) ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$6$$.get("DefaultBrokerID")) : 1 == $number_of_brokers_in_same_country_state$$ && $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $last_available_broker$$1$$);
  $JSCompiler_StaticMethods_onSelectState_$self$$.$onChangeBroker_$()
}
;
// Input 99
function $bitex$view$LoginView$$($app$$3$$, $opt_domHelper$$10$$) {
  $bitex$view$View$$.call(this, $app$$3$$, $opt_domHelper$$10$$);
  this.$password_el_$ = this.$username_el_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$LoginView$$, $bitex$view$View$$);
$bitex$view$LoginView$$.prototype.$enterDocument$ = function $$bitex$view$LoginView$$$$$enterDocument$$() {
  $bitex$view$LoginView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$50$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$50$$, $goog$dom$getElement$$("id_landing_signin"), "click", function($e$$76$$) {
    $e$$76$$.stopPropagation();
    $e$$76$$.preventDefault();
    $JSCompiler_StaticMethods_onLoginClick_$$(this, $goog$dom$getElement$$("id_landing_username"), $goog$dom$getElement$$("id_landing_password"))
  });
  $JSCompiler_StaticMethods_listen$$($handler$$50$$, $goog$dom$getElement$$("id_btn_login"), "click", function($e$$77$$) {
    $e$$77$$.stopPropagation();
    $e$$77$$.preventDefault();
    $JSCompiler_StaticMethods_onLoginClick_$$(this, $goog$dom$getElement$$("id_username"), $goog$dom$getElement$$("id_password"))
  })
};
$bitex$view$LoginView$$.prototype.$getUsername$ = function $$bitex$view$LoginView$$$$$getUsername$$() {
  return $goog$dom$forms$getValue$$(this.$username_el_$)
};
$bitex$view$LoginView$$.prototype.$getPassword$ = function $$bitex$view$LoginView$$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$(this.$password_el_$)
};
function $JSCompiler_StaticMethods_onLoginClick_$$($JSCompiler_StaticMethods_onLoginClick_$self$$, $username$$2_username_el$$, $password$$1_password_el$$) {
  $JSCompiler_StaticMethods_onLoginClick_$self$$.$username_el_$ = $username$$2_username_el$$;
  $JSCompiler_StaticMethods_onLoginClick_$self$$.$password_el_$ = $password$$1_password_el$$;
  $username$$2_username_el$$ = $JSCompiler_StaticMethods_onLoginClick_$self$$.$getUsername$();
  $password$$1_password_el$$ = $JSCompiler_StaticMethods_onLoginClick_$self$$.$getPassword$();
  $goog$string$isEmpty$$($username$$2_username_el$$) ? ($JSCompiler_StaticMethods_onLoginClick_$self$$.$app_$.$showDialog$("Nome de usu\u00e1rio inv\u00e1lido"), $JSCompiler_StaticMethods_onLoginClick_$self$$.$username_el_$.focus()) : $goog$string$isEmpty$$($password$$1_password_el$$) || 8 > $password$$1_password_el$$.length ? ($JSCompiler_StaticMethods_onLoginClick_$self$$.$app_$.$showDialog$("A senha precisa ter no m\u00ednimo 8 letras"), $JSCompiler_StaticMethods_onLoginClick_$self$$.$password_el_$.focus()) : 
  $JSCompiler_StaticMethods_onLoginClick_$self$$.dispatchEvent("login_click")
}
$bitex$view$LoginView$$.prototype.clear = function $$bitex$view$LoginView$$$$clear$() {
  this.$username_el_$ != $JSCompiler_alias_NULL$$ && $goog$dom$forms$setValue$$(this.$username_el_$, "");
  this.$password_el_$ != $JSCompiler_alias_NULL$$ && $goog$dom$forms$setValue$$(this.$password_el_$, "")
};
// Input 100
function $bitex$ui$WithdrawList$$($methodDescriptionObj$$, $opt_broker_mode_show_customers$$, $grid_columns$$1_opt_show_customers$$, $opt_domHelper$$11$$) {
  var $broker_mode$$ = $JSCompiler_alias_FALSE$$;
  $opt_broker_mode_show_customers$$ === $JSCompiler_alias_TRUE$$ && ($broker_mode$$ = $opt_broker_mode_show_customers$$);
  $opt_broker_mode_show_customers$$ = $JSCompiler_alias_FALSE$$;
  $grid_columns$$1_opt_show_customers$$ === $JSCompiler_alias_TRUE$$ && ($opt_broker_mode_show_customers$$ = $grid_columns$$1_opt_show_customers$$);
  $grid_columns$$1_opt_show_customers$$ = [{property:"Created", label:"Data/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-created"
  }}, {property:"Status", label:"Situa\u00e7\u00e3o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$28$$, $rowSet$$) {
    var $label_class_text_reason_el$$ = function($s$$29$$) {
      switch($s$$29$$) {
        case "0":
          return["", "N\u00e3o confirmado"];
        case "1":
          return["warning", "Pendente"];
        case "2":
          return["info", "Em andamento..."];
        case "4":
          return["success", "Completo"];
        case "8":
          return["important", "Cancelado"]
      }
      return["", ""]
    }($s$$28$$), $reason_id$$ = $rowSet$$.ReasonID, $reason$$ = $rowSet$$.Reason;
    if($reason_id$$ != $JSCompiler_alias_NULL$$) {
      var $status_el$$ = $goog$dom$createDom$$("span", ["label", "label-" + $label_class_text_reason_el$$[0]]);
      switch($reason_id$$) {
        case 0:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:$reason$$}, $label_class_text_reason_el$$[1]);
          break;
        case -1:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Saldo insuficiente"}, $label_class_text_reason_el$$[1]);
          break;
        case -2:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Conta n\u00e3o \u00e9 verificada"}, $label_class_text_reason_el$$[1]);
          break;
        case -3:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Suspeita de fraude"}, $label_class_text_reason_el$$[1]);
          break;
        case -4:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Pedindo o saque para uma conta diferente da sua"}, $label_class_text_reason_el$$[1]);
          break;
        case -5:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Carteira inv\u00e1lida"}, $label_class_text_reason_el$$[1]);
          break;
        case -6:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Dados banc\u00e1rios inv\u00e1lidos"}, $label_class_text_reason_el$$[1]);
          break;
        case -7:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Ultrapassou o limite di\u00e1rio de saque"}, $label_class_text_reason_el$$[1]);
          break;
        case -8:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"User has deposits that are not yet confirmed"}, $label_class_text_reason_el$$[1]);
          break;
        default:
          return $goog$dom$createDom$$("span", ["label", "label-" + $label_class_text_reason_el$$[0]], $label_class_text_reason_el$$[1])
      }
      $status_el$$.appendChild($label_class_text_reason_el$$);
      return $status_el$$
    }
    return $goog$dom$createDom$$("span", ["label", "label-" + $label_class_text_reason_el$$[0]], $label_class_text_reason_el$$[1])
  }, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-status"
  }}, {property:"Amount", label:"Valor", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-amount"
  }}, {property:"Data", label:"Detalhes", sortable:$JSCompiler_alias_FALSE$$, formatter:function($data$$34$$, $rowSet$$1$$) {
    var $element$$138$$ = $goog$dom$createDom$$("table"), $block_explorer_btn_blockchain_method$$4_original_fee_element$$ = $methodDescriptionObj$$[$rowSet$$1$$.Currency][$rowSet$$1$$.Method];
    $goog$dom$appendChild$$($element$$138$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "M\u00e9todo"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $block_explorer_btn_blockchain_method$$4_original_fee_element$$)));
    $data$$34$$.Link != $JSCompiler_alias_NULL$$ && ($goog$string$isEmpty$$($data$$34$$.Link) || $goog$dom$appendChild$$($element$$138$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "Recibo da corretora"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-primary", target:"_blank", href:$data$$34$$.Link}, 
    "ver", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-eye-open"]))))));
    $goog$object$forEach$$($data$$34$$, function($value$$141$$, $key$$79$$) {
      if("Link" != $key$$79$$ && "Currency" != $key$$79$$ && "Fees" != $key$$79$$ && "TransactionID" != $key$$79$$ && $value$$141$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($value$$141$$)) {
        if("Wallet" == $key$$79$$) {
          var $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-withdraw-list-qr", href:"#", "data-action":"SHOW_QR", "data-row":$goog$json$serialize$$($rowSet$$1$$)}, "QR", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-qrcode"])), $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + 
          "-details-td-key", "Carteira"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $btn_qr_child$$inline_529_child$$inline_532_key_description$$))
        }else {
          $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = $key$$79$$;
          switch($key$$79$$) {
            case "AccountNumber":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "N\u00famero da conta";
              break;
            case "BankName":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "Nome do banco";
              break;
            case "BankNumber":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "N\u00famero do banco";
              break;
            case "CPF_CNPJ":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "CPF or CNPJ";
              break;
            case "AccountBranch":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "Ag\u00eancia";
              break;
            case "AccountName":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "T\u00edtular da conta";
              break;
            case "RoutingNumber":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "Routing number";
              break;
            case "BankSwift":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "Bank Swift";
              break;
            case "Email":
              $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = "Email"
          }
          $btn_qr_child$$inline_529_child$$inline_532_key_description$$ = $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", $btn_qr_child$$inline_529_child$$inline_532_key_description$$), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $value$$141$$))
        }
        $element$$138$$.appendChild($btn_qr_child$$inline_529_child$$inline_532_key_description$$)
      }
    }, this);
    if($data$$34$$.Fees != $JSCompiler_alias_NULL$$) {
      if(0 == ($data$$34$$.Fees ? $data$$34$$.Fees.split("|").length - 1 : 0)) {
        $goog$dom$appendChild$$($element$$138$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "Fees"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $data$$34$$.Fees)))
      }else {
        var $effective_fee_effective_fee_element$$ = $data$$34$$.Fees.split("|")[1], $block_explorer_btn_blockchain_method$$4_original_fee_element$$ = $goog$dom$createDom$$("s", {style:"color: gray; padding-right: 10px;"}, $data$$34$$.Fees.split("|")[0]), $effective_fee_effective_fee_element$$ = $goog$dom$createDom$$("b", $JSCompiler_alias_VOID$$, $effective_fee_effective_fee_element$$);
        $goog$dom$appendChild$$($element$$138$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "Fees"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $block_explorer_btn_blockchain_method$$4_original_fee_element$$, $effective_fee_effective_fee_element$$)))
      }
    }
    if($data$$34$$.TransactionID != $JSCompiler_alias_NULL$$) {
      if("TransactionID" == key && "BTC" == $data$$34$$.Currency) {
        $block_explorer_btn_blockchain_method$$4_original_fee_element$$ = "https://blockchain.info";
        switch($rowSet$$1$$.Data.Wallet[0]) {
          case "m":
          ;
          case "n":
          ;
          case "2":
          ;
          case "9":
          ;
          case "c":
            $block_explorer_btn_blockchain_method$$4_original_fee_element$$ = "https://test-insight.bitpay.com"
        }
        $block_explorer_btn_blockchain_method$$4_original_fee_element$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-btc-blockchain", href:$block_explorer_btn_blockchain_method$$4_original_fee_element$$ + "/tx/" + value, target:"_blank"}, "blockchain", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-share-alt"]));
        $goog$dom$appendChild$$($element$$138$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "ID da transa\u00e7\u00e3o"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $block_explorer_btn_blockchain_method$$4_original_fee_element$$)))
      }else {
        $goog$dom$appendChild$$($element$$138$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "ID da transa\u00e7\u00e3o"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $data$$34$$.TransactionID)))
      }
    }
    return $element$$138$$
  }, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details"
  }}];
  $opt_broker_mode_show_customers$$ && $grid_columns$$1_opt_show_customers$$.push({property:"Username", label:"Username", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-username"
  }});
  $broker_mode$$ && $grid_columns$$1_opt_show_customers$$.push({property:"WithdrawID", label:"A\u00e7\u00f5es", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-actions"
  }, formatter:function($s$$30$$, $row_set_obj$$1$$) {
    var $btn_complete_data_row$$1$$ = $goog$json$serialize$$($row_set_obj$$1$$), $btn_cancel$$ = $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-danger btn-withdraw-cancel", "data-row":$btn_complete_data_row$$1$$}, "Cancelar"), $btn_progress$$ = $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-primary btn-withdraw-progress", "data-row":$btn_complete_data_row$$1$$}, "Em andamento"), $btn_complete_data_row$$1$$ = $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-success btn-withdraw-complete", 
    "data-row":$btn_complete_data_row$$1$$}, "Completar");
    switch($row_set_obj$$1$$.Status) {
      case "0":
        return $btn_cancel$$;
      case "1":
        return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$, $btn_progress$$]);
      case "2":
        return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$, $btn_complete_data_row$$1$$]);
      case "4":
        return"";
      case "8":
        return""
    }
  }});
  this.$selected_withdraw_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {rowIDFn:this.$getRowId$, rowClassFn:this.$getRowClass$, columns:$grid_columns$$1_opt_show_customers$$, title:"Withdrawals", showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"Search ...", wrapperHeight:600, buttonFilters:[{label:"All", value:"all"}, {label:"Pendente", value:"1"}, {label:"Em andamento...", value:"2"}, {label:"Completo", value:"4"}, {label:"Cancelado", value:"8"}]}, $opt_domHelper$$11$$)
}
$goog$inherits$$($bitex$ui$WithdrawList$$, $bitex$ui$DataGrid$$);
var $bitex$ui$WithdrawList$CSS_CLASS$$ = "withdraw-list";
$JSCompiler_prototypeAlias$$ = $bitex$ui$WithdrawList$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = function $$JSCompiler_prototypeAlias$$$$getCssClass$$() {
  return $bitex$ui$WithdrawList$CSS_CLASS$$
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$WithdrawList$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", this.$handleClick_$)
};
$JSCompiler_prototypeAlias$$.$getWithdrawData$ = $JSCompiler_get$$("$selected_withdraw_$");
$JSCompiler_prototypeAlias$$.$handleClick_$ = function $$JSCompiler_prototypeAlias$$$$handleClick_$$($e$$78$$) {
  this.$selected_withdraw_$ = $goog$json$parse$$($e$$78$$.target.getAttribute("data-row"));
  this.$selected_withdraw_$ != $JSCompiler_alias_NULL$$ && ($goog$dom$classes$has$$($e$$78$$.target, "btn-withdraw-complete") ? this.dispatchEvent("withdraw_complete") : $goog$dom$classes$has$$($e$$78$$.target, "btn-withdraw-progress") ? this.dispatchEvent("withdraw_progress") : $goog$dom$classes$has$$($e$$78$$.target, "btn-withdraw-cancel") && this.dispatchEvent("withdraw_cancel"), this.$selected_withdraw_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$getRowId$ = function $$JSCompiler_prototypeAlias$$$$getRowId$$($row_set$$3$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$3$$.WithdrawID)
};
$JSCompiler_prototypeAlias$$.$getRowClass$ = function $$JSCompiler_prototypeAlias$$$$getRowClass$$($row_set$$4$$) {
  var $class_status$$1$$;
  switch($row_set$$4$$.Status) {
    case "0":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-unconfirmed";
      break;
    case "1":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-pending";
      break;
    case "2":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-processing";
      break;
    case "4":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-complete";
      break;
    case "8":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-cancelled"
  }
  return $class_status$$1$$
};
// Input 101
function $goog$fx$Dragger$$($target$$55$$, $opt_handle$$, $opt_limits$$) {
  $goog$Disposable$$.call(this);
  this.target = $target$$55$$;
  this.handle = $opt_handle$$ || $target$$55$$;
  this.$limits$ = $opt_limits$$ || new $goog$math$Rect$$(NaN, NaN, NaN, NaN);
  this.$document_$ = $goog$dom$getOwnerDocument$$($target$$55$$);
  this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
  $goog$events$listen$$(this.handle, ["touchstart", "mousedown"], this.$startDrag$, $JSCompiler_alias_FALSE$$, this)
}
$goog$inherits$$($goog$fx$Dragger$$, $goog$events$EventTarget$$);
var $goog$fx$Dragger$HAS_SET_CAPTURE_$$ = $goog$userAgent$IE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.3");
$JSCompiler_prototypeAlias$$ = $goog$fx$Dragger$$.prototype;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.$startX$ = 0;
$JSCompiler_prototypeAlias$$.$startY$ = 0;
$JSCompiler_prototypeAlias$$.$deltaX$ = 0;
$JSCompiler_prototypeAlias$$.$deltaY$ = 0;
$JSCompiler_prototypeAlias$$.$enabled_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$dragging_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$hysteresisDistanceSquared_$ = 0;
$JSCompiler_prototypeAlias$$.$mouseDownTime_$ = 0;
$JSCompiler_prototypeAlias$$.$ieDragStartCancellingOn_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$useRightPositioningForRtl_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$getHandler$ = $JSCompiler_get$$("$eventHandler_$");
$JSCompiler_prototypeAlias$$.$setEnabled$ = $JSCompiler_set$$("$enabled_$");
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$fx$Dragger$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$unlisten$$(this.handle, ["touchstart", "mousedown"], this.$startDrag$, $JSCompiler_alias_FALSE$$, this);
  this.$eventHandler_$.$removeAll$();
  $goog$fx$Dragger$HAS_SET_CAPTURE_$$ && this.$document_$.releaseCapture();
  this.$eventHandler_$ = this.handle = this.target = $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_isRightToLeft_$$($JSCompiler_StaticMethods_isRightToLeft_$self$$) {
  $goog$isDef$$($JSCompiler_StaticMethods_isRightToLeft_$self$$.$rightToLeft_$) || ($JSCompiler_StaticMethods_isRightToLeft_$self$$.$rightToLeft_$ = $goog$style$isRightToLeft$$($JSCompiler_StaticMethods_isRightToLeft_$self$$.target));
  return $JSCompiler_StaticMethods_isRightToLeft_$self$$.$rightToLeft_$
}
$JSCompiler_prototypeAlias$$.$startDrag$ = function $$JSCompiler_prototypeAlias$$$$startDrag$$($JSCompiler_temp$$80_e$$79_element$$inline_542$$) {
  var $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ = "mousedown" == $JSCompiler_temp$$80_e$$79_element$$inline_542$$.type;
  if(this.$enabled_$ && !this.$dragging_$ && (!$doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ || $JSCompiler_StaticMethods_isMouseActionButton$$($JSCompiler_temp$$80_e$$79_element$$inline_542$$))) {
    $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($JSCompiler_temp$$80_e$$79_element$$inline_542$$);
    if(0 == this.$hysteresisDistanceSquared_$) {
      if(this.dispatchEvent(new $goog$fx$DragEvent$$("start", this, $JSCompiler_temp$$80_e$$79_element$$inline_542$$.clientX, $JSCompiler_temp$$80_e$$79_element$$inline_542$$.clientY, $JSCompiler_temp$$80_e$$79_element$$inline_542$$))) {
        this.$dragging_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_temp$$80_e$$79_element$$inline_542$$.preventDefault()
      }else {
        return
      }
    }else {
      $JSCompiler_temp$$80_e$$79_element$$inline_542$$.preventDefault()
    }
    var $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ = this.$document_$, $bestParent$$inline_544_docEl$$inline_539$$ = $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$.documentElement, $borderWidths$$inline_545_useCapture$$inline_540$$ = !$goog$fx$Dragger$HAS_SET_CAPTURE_$$;
    $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$, ["touchmove", "mousemove"], this.$handleMove_$, $borderWidths$$inline_545_useCapture$$inline_540$$);
    $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$, ["touchend", "mouseup"], this.$endDrag$, $borderWidths$$inline_545_useCapture$$inline_540$$);
    $goog$fx$Dragger$HAS_SET_CAPTURE_$$ ? ($bestParent$$inline_544_docEl$$inline_539$$.setCapture($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $bestParent$$inline_544_docEl$$inline_539$$, "losecapture", this.$endDrag$)) : $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ ? $goog$dom$getWindow_$$($doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$) : window, "blur", this.$endDrag$);
    $goog$userAgent$IE$$ && this.$ieDragStartCancellingOn_$ && $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$, "dragstart", $goog$events$Event$preventDefault$$);
    this.$scrollTarget_$ && $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, this.$scrollTarget_$, "scroll", this.$onScroll_$, $borderWidths$$inline_545_useCapture$$inline_540$$);
    this.clientX = this.$startX$ = $JSCompiler_temp$$80_e$$79_element$$inline_542$$.clientX;
    this.clientY = this.$startY$ = $JSCompiler_temp$$80_e$$79_element$$inline_542$$.clientY;
    this.screenX = $JSCompiler_temp$$80_e$$79_element$$inline_542$$.screenX;
    this.screenY = $JSCompiler_temp$$80_e$$79_element$$inline_542$$.screenY;
    this.$useRightPositioningForRtl_$ ? ($JSCompiler_temp$$80_e$$79_element$$inline_542$$ = this.target, $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ = $JSCompiler_temp$$80_e$$79_element$$inline_542$$.offsetLeft, $bestParent$$inline_544_docEl$$inline_539$$ = $JSCompiler_temp$$80_e$$79_element$$inline_542$$.offsetParent, !$bestParent$$inline_544_docEl$$inline_539$$ && "fixed" == $goog$style$getStyle_$$($JSCompiler_temp$$80_e$$79_element$$inline_542$$, "position") && ($bestParent$$inline_544_docEl$$inline_539$$ = 
    $goog$dom$getOwnerDocument$$($JSCompiler_temp$$80_e$$79_element$$inline_542$$).documentElement), $bestParent$$inline_544_docEl$$inline_539$$ ? ($goog$userAgent$GECKO$$ ? ($borderWidths$$inline_545_useCapture$$inline_540$$ = $goog$style$getBorderBox$$($bestParent$$inline_544_docEl$$inline_539$$), $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ += $borderWidths$$inline_545_useCapture$$inline_540$$.left) : $goog$userAgent$IE$$ && 8 <= $goog$userAgent$DOCUMENT_MODE$$ && ($borderWidths$$inline_545_useCapture$$inline_540$$ = 
    $goog$style$getBorderBox$$($bestParent$$inline_544_docEl$$inline_539$$), $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ -= $borderWidths$$inline_545_useCapture$$inline_540$$.left), $JSCompiler_temp$$80_e$$79_element$$inline_542$$ = $goog$style$isRightToLeft$$($bestParent$$inline_544_docEl$$inline_539$$) ? $bestParent$$inline_544_docEl$$inline_539$$.clientWidth - ($doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$ + $JSCompiler_temp$$80_e$$79_element$$inline_542$$.offsetWidth) : 
    $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$) : $JSCompiler_temp$$80_e$$79_element$$inline_542$$ = $doc$$inline_538_isMouseDown_offsetLeftForReal$$inline_543$$) : $JSCompiler_temp$$80_e$$79_element$$inline_542$$ = this.target.offsetLeft;
    this.$deltaX$ = $JSCompiler_temp$$80_e$$79_element$$inline_542$$;
    this.$deltaY$ = this.target.offsetTop;
    this.$pageScroll$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$(this.$document_$));
    this.$mouseDownTime_$ = $goog$now$$()
  }else {
    this.dispatchEvent("earlycancel")
  }
};
$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$($e$$81$$, $opt_dragCanceled$$) {
  this.$eventHandler_$.$removeAll$();
  $goog$fx$Dragger$HAS_SET_CAPTURE_$$ && this.$document_$.releaseCapture();
  if(this.$dragging_$) {
    $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($e$$81$$);
    this.$dragging_$ = $JSCompiler_alias_FALSE$$;
    var $x$$70$$ = $JSCompiler_StaticMethods_limitX$$(this, this.$deltaX$), $y$$41$$ = $JSCompiler_StaticMethods_limitY$$(this, this.$deltaY$);
    this.dispatchEvent(new $goog$fx$DragEvent$$("end", this, $e$$81$$.clientX, $e$$81$$.clientY, $e$$81$$, $x$$70$$, $y$$41$$, $opt_dragCanceled$$ || "touchcancel" == $e$$81$$.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
  ("touchend" == $e$$81$$.type || "touchcancel" == $e$$81$$.type) && $e$$81$$.preventDefault()
};
function $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($e$$83$$) {
  var $type$$101$$ = $e$$83$$.type;
  "touchstart" == $type$$101$$ || "touchmove" == $type$$101$$ ? $e$$83$$.init($e$$83$$.$event_$.targetTouches[0], $e$$83$$.currentTarget) : ("touchend" == $type$$101$$ || "touchcancel" == $type$$101$$) && $e$$83$$.init($e$$83$$.$event_$.changedTouches[0], $e$$83$$.currentTarget)
}
$JSCompiler_prototypeAlias$$.$handleMove_$ = function $$JSCompiler_prototypeAlias$$$$handleMove_$$($e$$84$$) {
  if(this.$enabled_$) {
    $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($e$$84$$);
    var $dx$$7_x$$71$$ = (this.$useRightPositioningForRtl_$ && $JSCompiler_StaticMethods_isRightToLeft_$$(this) ? -1 : 1) * ($e$$84$$.clientX - this.clientX), $dy$$7_pos$$17_y$$42$$ = $e$$84$$.clientY - this.clientY;
    this.clientX = $e$$84$$.clientX;
    this.clientY = $e$$84$$.clientY;
    this.screenX = $e$$84$$.screenX;
    this.screenY = $e$$84$$.screenY;
    if(!this.$dragging_$) {
      var $diffX$$ = this.$startX$ - this.clientX, $diffY$$ = this.$startY$ - this.clientY;
      if($diffX$$ * $diffX$$ + $diffY$$ * $diffY$$ > this.$hysteresisDistanceSquared_$) {
        if(this.dispatchEvent(new $goog$fx$DragEvent$$("start", this, $e$$84$$.clientX, $e$$84$$.clientY, $e$$84$$))) {
          this.$dragging_$ = $JSCompiler_alias_TRUE$$
        }else {
          this.$disposed_$ || this.$endDrag$($e$$84$$);
          return
        }
      }
    }
    $dy$$7_pos$$17_y$$42$$ = $JSCompiler_StaticMethods_calculatePosition_$$(this, $dx$$7_x$$71$$, $dy$$7_pos$$17_y$$42$$);
    $dx$$7_x$$71$$ = $dy$$7_pos$$17_y$$42$$.x;
    $dy$$7_pos$$17_y$$42$$ = $dy$$7_pos$$17_y$$42$$.y;
    this.$dragging_$ && this.dispatchEvent(new $goog$fx$DragEvent$$("beforedrag", this, $e$$84$$.clientX, $e$$84$$.clientY, $e$$84$$, $dx$$7_x$$71$$, $dy$$7_pos$$17_y$$42$$)) && ($JSCompiler_StaticMethods_doDrag$$(this, $e$$84$$, $dx$$7_x$$71$$, $dy$$7_pos$$17_y$$42$$), $e$$84$$.preventDefault())
  }
};
function $JSCompiler_StaticMethods_calculatePosition_$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$, $dx$$8_x$$72$$, $dy$$8$$) {
  var $pageScroll$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$document_$));
  $dx$$8_x$$72$$ += $pageScroll$$.x - $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$pageScroll$.x;
  $dy$$8$$ += $pageScroll$$.y - $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$pageScroll$.y;
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$pageScroll$ = $pageScroll$$;
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaX$ += $dx$$8_x$$72$$;
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaY$ += $dy$$8$$;
  $dx$$8_x$$72$$ = $JSCompiler_StaticMethods_limitX$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$, $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaX$);
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$ = $JSCompiler_StaticMethods_limitY$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$, $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaY$);
  return new $goog$math$Coordinate$$($dx$$8_x$$72$$, $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$)
}
$JSCompiler_prototypeAlias$$.$onScroll_$ = function $$JSCompiler_prototypeAlias$$$$onScroll_$$($e$$85$$) {
  var $pos$$18$$ = $JSCompiler_StaticMethods_calculatePosition_$$(this, 0, 0);
  $e$$85$$.clientX = this.clientX;
  $e$$85$$.clientY = this.clientY;
  $JSCompiler_StaticMethods_doDrag$$(this, $e$$85$$, $pos$$18$$.x, $pos$$18$$.y)
};
function $JSCompiler_StaticMethods_doDrag$$($JSCompiler_StaticMethods_doDrag$self$$, $e$$86$$, $x$$73$$, $y$$44$$) {
  $JSCompiler_StaticMethods_doDrag$self$$.$useRightPositioningForRtl_$ && $JSCompiler_StaticMethods_isRightToLeft_$$($JSCompiler_StaticMethods_doDrag$self$$) ? $JSCompiler_StaticMethods_doDrag$self$$.target.style.right = $x$$73$$ + "px" : $JSCompiler_StaticMethods_doDrag$self$$.target.style.left = $x$$73$$ + "px";
  $JSCompiler_StaticMethods_doDrag$self$$.target.style.top = $y$$44$$ + "px";
  $JSCompiler_StaticMethods_doDrag$self$$.dispatchEvent(new $goog$fx$DragEvent$$("drag", $JSCompiler_StaticMethods_doDrag$self$$, $e$$86$$.clientX, $e$$86$$.clientY, $e$$86$$, $x$$73$$, $y$$44$$))
}
function $JSCompiler_StaticMethods_limitX$$($JSCompiler_StaticMethods_limitX$self$$, $x$$74$$) {
  var $rect$$6_width$$17$$ = $JSCompiler_StaticMethods_limitX$self$$.$limits$, $left$$10$$ = !isNaN($rect$$6_width$$17$$.left) ? $rect$$6_width$$17$$.left : $JSCompiler_alias_NULL$$, $rect$$6_width$$17$$ = !isNaN($rect$$6_width$$17$$.width) ? $rect$$6_width$$17$$.width : 0;
  return Math.min($left$$10$$ != $JSCompiler_alias_NULL$$ ? $left$$10$$ + $rect$$6_width$$17$$ : Infinity, Math.max($left$$10$$ != $JSCompiler_alias_NULL$$ ? $left$$10$$ : -Infinity, $x$$74$$))
}
function $JSCompiler_StaticMethods_limitY$$($JSCompiler_StaticMethods_limitY$self$$, $y$$45$$) {
  var $height$$16_rect$$7$$ = $JSCompiler_StaticMethods_limitY$self$$.$limits$, $top$$8$$ = !isNaN($height$$16_rect$$7$$.top) ? $height$$16_rect$$7$$.top : $JSCompiler_alias_NULL$$, $height$$16_rect$$7$$ = !isNaN($height$$16_rect$$7$$.height) ? $height$$16_rect$$7$$.height : 0;
  return Math.min($top$$8$$ != $JSCompiler_alias_NULL$$ ? $top$$8$$ + $height$$16_rect$$7$$ : Infinity, Math.max($top$$8$$ != $JSCompiler_alias_NULL$$ ? $top$$8$$ : -Infinity, $y$$45$$))
}
function $goog$fx$DragEvent$$($type$$102$$, $dragobj$$, $clientX$$2$$, $clientY$$2$$, $browserEvent$$1$$, $opt_actX$$, $opt_actY$$, $opt_dragCanceled$$1$$) {
  $goog$events$Event$$.call(this, $type$$102$$);
  this.clientX = $clientX$$2$$;
  this.clientY = $clientY$$2$$;
  this.$browserEvent$ = $browserEvent$$1$$;
  this.left = $goog$isDef$$($opt_actX$$) ? $opt_actX$$ : $dragobj$$.$deltaX$;
  this.top = $goog$isDef$$($opt_actY$$) ? $opt_actY$$ : $dragobj$$.$deltaY$;
  this.$dragger$ = $dragobj$$;
  this.$dragCanceled$ = !!$opt_dragCanceled$$1$$
}
$goog$inherits$$($goog$fx$DragEvent$$, $goog$events$Event$$);
// Input 102
// Input 103
function $goog$events$FocusHandler$$($element$$140_typeOut$$) {
  $goog$Disposable$$.call(this);
  this.$element_$ = $element$$140_typeOut$$;
  $element$$140_typeOut$$ = $goog$userAgent$IE$$ ? "focusout" : "blur";
  this.$listenKeyIn_$ = $goog$events$listen$$(this.$element_$, $goog$userAgent$IE$$ ? "focusin" : "focus", this, !$goog$userAgent$IE$$);
  this.$listenKeyOut_$ = $goog$events$listen$$(this.$element_$, $element$$140_typeOut$$, this, !$goog$userAgent$IE$$)
}
$goog$inherits$$($goog$events$FocusHandler$$, $goog$events$EventTarget$$);
$goog$events$FocusHandler$$.prototype.handleEvent = function $$goog$events$FocusHandler$$$$handleEvent$($e$$92$$) {
  var $event$$5$$ = new $goog$events$BrowserEvent$$($e$$92$$.$event_$);
  $event$$5$$.type = "focusin" == $e$$92$$.type || "focus" == $e$$92$$.type ? "focusin" : "focusout";
  this.dispatchEvent($event$$5$$)
};
$goog$events$FocusHandler$$.prototype.$disposeInternal$ = function $$goog$events$FocusHandler$$$$$disposeInternal$$() {
  $goog$events$FocusHandler$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$unlistenByKey$$(this.$listenKeyIn_$);
  $goog$events$unlistenByKey$$(this.$listenKeyOut_$);
  delete this.$element_$
};
// Input 104
// Input 105
function $goog$ui$ModalPopup$$($opt_useIframeMask$$, $opt_domHelper$$12$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$12$$);
  this.$useIframeMask_$ = !!$opt_useIframeMask$$
}
$goog$inherits$$($goog$ui$ModalPopup$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ModalPopup$$.prototype;
$JSCompiler_prototypeAlias$$.$focusHandler_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$visible_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$bgEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$bgIframeEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$tabCatcherElement_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$backwardTabWrapInProgress_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-modalpopup");
$JSCompiler_prototypeAlias$$.$getBackgroundElement$ = $JSCompiler_get$$("$bgEl_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  $goog$ui$ModalPopup$$.$superClass_$.$createDom$.call(this);
  var $element$$141$$ = this.$getElement$();
  $goog$dom$classes$add$$($element$$141$$, this.$getCssClass$());
  $goog$dom$setFocusableTabIndex$$($element$$141$$, $JSCompiler_alias_TRUE$$);
  $goog$style$showElement$$($element$$141$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_manageBackgroundDom_$$(this);
  $JSCompiler_StaticMethods_createTabCatcher_$$(this)
};
function $JSCompiler_StaticMethods_manageBackgroundDom_$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$) {
  if($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$useIframeMask_$ && !$JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$) {
    var $JSCompiler_inline_result$$51$$;
    $JSCompiler_inline_result$$51$$ = $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getDomHelper$().$createDom$("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;", src:'javascript:""'});
    $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$ = $JSCompiler_inline_result$$51$$;
    $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$.className = $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getCssClass$() + "-bg";
    $goog$style$showElement$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$, $JSCompiler_alias_FALSE$$);
    $goog$style$setOpacity$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$, 0)
  }
  $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgEl_$ || ($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgEl_$ = $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getDomHelper$().$createDom$("div", $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getCssClass$() + "-bg"), $goog$style$showElement$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgEl_$, $JSCompiler_alias_FALSE$$))
}
function $JSCompiler_StaticMethods_createTabCatcher_$$($JSCompiler_StaticMethods_createTabCatcher_$self$$) {
  $JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$ || ($JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$ = $JSCompiler_StaticMethods_createTabCatcher_$self$$.$getDomHelper$().createElement("span"), $goog$style$showElement$$($JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$, $JSCompiler_alias_FALSE$$), $goog$dom$setFocusableTabIndex$$($JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$, $JSCompiler_alias_TRUE$$), 
  $JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$.style.position = "absolute")
}
$JSCompiler_prototypeAlias$$.$resetBackwardTabWrap_$ = function $$JSCompiler_prototypeAlias$$$$resetBackwardTabWrap_$$() {
  this.$backwardTabWrapInProgress_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$142$$) {
  return!!$element$$142$$ && "DIV" == $element$$142$$.tagName
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$143$$) {
  $goog$ui$ModalPopup$$.$superClass_$.$decorateInternal$.call(this, $element$$143$$);
  $goog$dom$classes$add$$(this.$getElement$(), this.$getCssClass$());
  $JSCompiler_StaticMethods_manageBackgroundDom_$$(this);
  $JSCompiler_StaticMethods_createTabCatcher_$$(this);
  $goog$style$showElement$$(this.$getElement$(), $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  this.$bgIframeEl_$ && $goog$dom$insertSiblingBefore$$(this.$bgIframeEl_$, this.$getElement$());
  $goog$dom$insertSiblingBefore$$(this.$bgEl_$, this.$getElement$());
  $goog$ui$ModalPopup$$.$superClass_$.$enterDocument$.call(this);
  var $refNode$$inline_560$$ = this.$getElement$();
  $refNode$$inline_560$$.parentNode && $refNode$$inline_560$$.parentNode.insertBefore(this.$tabCatcherElement_$, $refNode$$inline_560$$.nextSibling);
  this.$focusHandler_$ = new $goog$events$FocusHandler$$($JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()));
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$focusHandler_$, "focusin", this.$onFocus_$)
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  this.$visible_$ && this.$setVisible$($JSCompiler_alias_FALSE$$);
  $goog$dispose$$(this.$focusHandler_$);
  $goog$ui$ModalPopup$$.$superClass_$.$exitDocument$.call(this);
  $goog$dom$removeNode$$(this.$bgIframeEl_$);
  $goog$dom$removeNode$$(this.$bgEl_$);
  $goog$dom$removeNode$$(this.$tabCatcherElement_$)
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$) {
  if($JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$ != this.$visible_$) {
    if(this.$popupShowTransition_$ && this.$popupShowTransition_$.stop(), this.$bgShowTransition_$ && this.$bgShowTransition_$.stop(), this.$popupHideTransition_$ && this.$popupHideTransition_$.stop(), this.$bgHideTransition_$ && this.$bgHideTransition_$.stop(), $JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$) {
      if(this.dispatchEvent("beforeshow")) {
        this.$resizeBackground_$();
        var $viewSize$$inline_1179_win$$inline_1174$$ = (($JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$())) ? $goog$dom$getWindow_$$($JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$) : window) || window;
        if("fixed" == $goog$style$getStyle_$$(this.$getElement$(), "position")) {
          var $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$ = $JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$ = 0
        }else {
          $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$ = $JSCompiler_StaticMethods_getDocumentScroll$$(this.$getDomHelper$()), $JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$ = $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$.x, $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$ = 
          $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$.y
        }
        var $popupSize$$inline_1178$$ = $goog$style$getSize$$(this.$getElement$()), $viewSize$$inline_1179_win$$inline_1174$$ = $goog$dom$getViewportSize_$$($viewSize$$inline_1179_win$$inline_1174$$ || window);
        $JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$ = Math.max($JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$ + $viewSize$$inline_1179_win$$inline_1174$$.width / 2 - $popupSize$$inline_1178$$.width / 2, 0);
        $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$ = Math.max($JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$ + $viewSize$$inline_1179_win$$inline_1174$$.height / 2 - $popupSize$$inline_1178$$.height / 2, 0);
        $goog$style$setPosition$$(this.$getElement$(), $JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$, $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$);
        $goog$style$setPosition$$(this.$tabCatcherElement_$, $JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$, $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$);
        $JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$ = this.$getHandler$();
        $JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$ = this.$getDomHelper$();
        $JSCompiler_StaticMethods_listen$$($JSCompiler_temp_const$$1118_doc$$inline_1173_left$$inline_1180_visible$$1_x$$inline_1175$$, $goog$dom$getWindow_$$($JSCompiler_StaticMethods_getWindow$self$$inline_1183_scroll$$inline_1177_top$$inline_1181_y$$inline_1176$$.$document_$), "resize", this.$resizeBackground_$);
        $JSCompiler_StaticMethods_showPopupElement_$$(this, $JSCompiler_alias_TRUE$$);
        this.focus();
        this.$visible_$ = $JSCompiler_alias_TRUE$$;
        this.$popupShowTransition_$ && this.$bgShowTransition_$ ? ($goog$events$listenOnce$$(this.$popupShowTransition_$, "end", this.$onShow$, $JSCompiler_alias_FALSE$$, this), this.$bgShowTransition_$.play(), this.$popupShowTransition_$.play()) : this.$onShow$()
      }
    }else {
      this.$hide_$()
    }
  }
};
$JSCompiler_prototypeAlias$$.$hide_$ = function $$JSCompiler_prototypeAlias$$$$hide_$$() {
  if(this.dispatchEvent("beforehide")) {
    var $JSCompiler_temp_const$$1121$$ = $JSCompiler_StaticMethods_unlisten$$, $JSCompiler_temp_const$$1120$$ = this.$getHandler$(), $JSCompiler_StaticMethods_getWindow$self$$inline_1185$$ = this.$getDomHelper$();
    $JSCompiler_temp_const$$1121$$($JSCompiler_temp_const$$1120$$, $goog$dom$getWindow_$$($JSCompiler_StaticMethods_getWindow$self$$inline_1185$$.$document_$), "resize", this.$resizeBackground_$);
    this.$visible_$ = $JSCompiler_alias_FALSE$$;
    this.$popupHideTransition_$ && this.$bgHideTransition_$ ? ($goog$events$listenOnce$$(this.$popupHideTransition_$, "end", this.$onHide$, $JSCompiler_alias_FALSE$$, this), this.$bgHideTransition_$.play(), this.$popupHideTransition_$.play()) : this.$onHide$()
  }
};
function $JSCompiler_StaticMethods_showPopupElement_$$($JSCompiler_StaticMethods_showPopupElement_$self$$, $visible$$2$$) {
  $JSCompiler_StaticMethods_showPopupElement_$self$$.$bgIframeEl_$ && $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$bgIframeEl_$, $visible$$2$$);
  $JSCompiler_StaticMethods_showPopupElement_$self$$.$bgEl_$ && $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$bgEl_$, $visible$$2$$);
  $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$getElement$(), $visible$$2$$);
  $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$tabCatcherElement_$, $visible$$2$$)
}
$JSCompiler_prototypeAlias$$.$onShow$ = function $$JSCompiler_prototypeAlias$$$$onShow$$() {
  this.dispatchEvent("show")
};
$JSCompiler_prototypeAlias$$.$onHide$ = function $$JSCompiler_prototypeAlias$$$$onHide$$() {
  $JSCompiler_StaticMethods_showPopupElement_$$(this, $JSCompiler_alias_FALSE$$);
  this.dispatchEvent("hide")
};
$JSCompiler_prototypeAlias$$.focus = function $$JSCompiler_prototypeAlias$$$focus$() {
  this.$focusElement_$()
};
$JSCompiler_prototypeAlias$$.$resizeBackground_$ = function $$JSCompiler_prototypeAlias$$$$resizeBackground_$$() {
  this.$bgIframeEl_$ && $goog$style$showElement$$(this.$bgIframeEl_$, $JSCompiler_alias_FALSE$$);
  this.$bgEl_$ && $goog$style$showElement$$(this.$bgEl_$, $JSCompiler_alias_FALSE$$);
  var $doc$$38_h$$13$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), $viewSize$$ = $goog$dom$getViewportSize_$$(($doc$$38_h$$13$$ ? $goog$dom$getWindow_$$($doc$$38_h$$13$$) : window) || window || window), $w$$10$$ = Math.max($viewSize$$.width, Math.max($doc$$38_h$$13$$.body.scrollWidth, $doc$$38_h$$13$$.documentElement.scrollWidth)), $doc$$38_h$$13$$ = Math.max($viewSize$$.height, Math.max($doc$$38_h$$13$$.body.scrollHeight, $doc$$38_h$$13$$.documentElement.scrollHeight));
  this.$bgIframeEl_$ && ($goog$style$showElement$$(this.$bgIframeEl_$, $JSCompiler_alias_TRUE$$), $goog$style$setSize$$(this.$bgIframeEl_$, $w$$10$$, $doc$$38_h$$13$$));
  this.$bgEl_$ && ($goog$style$showElement$$(this.$bgEl_$, $JSCompiler_alias_TRUE$$), $goog$style$setSize$$(this.$bgEl_$, $w$$10$$, $doc$$38_h$$13$$))
};
$JSCompiler_prototypeAlias$$.$onFocus_$ = function $$JSCompiler_prototypeAlias$$$$onFocus_$$($e$$94$$) {
  this.$backwardTabWrapInProgress_$ ? this.$resetBackwardTabWrap_$() : $e$$94$$.target == this.$tabCatcherElement_$ && $goog$Timer$callOnce$$(this.$focusElement_$, 0, this)
};
$JSCompiler_prototypeAlias$$.$focusElement_$ = function $$JSCompiler_prototypeAlias$$$$focusElement_$$() {
  try {
    $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()).body.focus(), this.$getElement$().focus()
  }catch($e$$95$$) {
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$dispose$$(this.$popupShowTransition_$);
  this.$popupShowTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$dispose$$(this.$popupHideTransition_$);
  this.$popupHideTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$dispose$$(this.$bgShowTransition_$);
  this.$bgShowTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$dispose$$(this.$bgHideTransition_$);
  this.$bgHideTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$ui$ModalPopup$$.$superClass_$.$disposeInternal$.call(this)
};
// Input 106
function $goog$ui$Dialog$$($opt_class$$4$$, $opt_useIframeMask$$1$$, $opt_domHelper$$13$$) {
  $goog$ui$ModalPopup$$.call(this, $opt_useIframeMask$$1$$, $opt_domHelper$$13$$);
  this.$class_$ = $opt_class$$4$$ || "modal-dialog";
  this.$buttons_$ = $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
}
$goog$inherits$$($goog$ui$Dialog$$, $goog$ui$ModalPopup$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Dialog$$.prototype;
$JSCompiler_prototypeAlias$$.$escapeToCancel_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$hasTitleCloseButton_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$modal_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$draggable_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$backgroundElementOpacity_$ = 0.5;
$JSCompiler_prototypeAlias$$.$title_$ = "";
$JSCompiler_prototypeAlias$$.$content_$ = "";
$JSCompiler_prototypeAlias$$.$dragger_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$disposeOnHide_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$titleEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$titleTextEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$titleId_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$titleCloseEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$contentEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$buttonEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$preferredAriaRole_$ = "dialog";
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_get$$("$class_$");
function $JSCompiler_StaticMethods_setTitle$$($JSCompiler_StaticMethods_setTitle$self$$, $title$$9$$) {
  $JSCompiler_StaticMethods_setTitle$self$$.$title_$ = $title$$9$$;
  $JSCompiler_StaticMethods_setTitle$self$$.$titleTextEl_$ && $goog$dom$setTextContent$$($JSCompiler_StaticMethods_setTitle$self$$.$titleTextEl_$, $title$$9$$)
}
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($html$$2$$) {
  this.$content_$ = $html$$2$$;
  this.$contentEl_$ && (this.$contentEl_$.innerHTML = $html$$2$$)
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  this.$getElement$() || this.render();
  return this.$contentEl_$
};
$JSCompiler_prototypeAlias$$.$getBackgroundElement$ = function $$JSCompiler_prototypeAlias$$$$getBackgroundElement$$() {
  this.$getElement$() || this.render();
  return $goog$ui$Dialog$$.$superClass_$.$getBackgroundElement$.call(this)
};
$JSCompiler_prototypeAlias$$.$setBackgroundElementOpacity$ = function $$JSCompiler_prototypeAlias$$$$setBackgroundElementOpacity$$($bgEl_opacity$$1$$) {
  this.$backgroundElementOpacity_$ = $bgEl_opacity$$1$$;
  this.$getElement$() && ($bgEl_opacity$$1$$ = this.$getBackgroundElement$()) && $goog$style$setOpacity$$($bgEl_opacity$$1$$, this.$backgroundElementOpacity_$)
};
function $JSCompiler_StaticMethods_setDraggingEnabled_$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$, $enabled$$5$$) {
  if($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$getElement$()) {
    var $element$$inline_568$$ = $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$titleEl_$, $className$$inline_569$$ = $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$class_$ + "-title-draggable";
    $enabled$$5$$ ? $goog$dom$classes$add$$($element$$inline_568$$, $className$$inline_569$$) : $goog$dom$classes$remove$$($element$$inline_568$$, $className$$inline_569$$)
  }
  $enabled$$5$$ && !$JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ ? ($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ = new $goog$fx$Dragger$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$getElement$(), $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$titleEl_$), $goog$dom$classes$add$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$titleEl_$, $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$class_$ + "-title-draggable"), $goog$events$listen$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$, 
  "start", $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$setDraggerLimits_$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_setDraggingEnabled_$self$$)) : !$enabled$$5$$ && $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ && ($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$.$dispose$(), $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ = $JSCompiler_alias_NULL$$)
}
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  $goog$ui$Dialog$$.$superClass_$.$createDom$.call(this);
  var $JSCompiler_StaticMethods_attachToElement$self$$inline_572_element$$144$$ = this.$getElement$(), $dom$$11$$ = this.$getDomHelper$();
  this.$titleEl_$ = $dom$$11$$.$createDom$("div", {className:this.$class_$ + "-title", id:$JSCompiler_StaticMethods_getId$$(this)}, this.$titleTextEl_$ = $dom$$11$$.$createDom$("span", this.$class_$ + "-title-text", this.$title_$), this.$titleCloseEl_$ = $dom$$11$$.$createDom$("span", this.$class_$ + "-title-close"));
  $goog$dom$append$$($JSCompiler_StaticMethods_attachToElement$self$$inline_572_element$$144$$, this.$titleEl_$, this.$contentEl_$ = $dom$$11$$.$createDom$("div", this.$class_$ + "-content"), this.$buttonEl_$ = $dom$$11$$.$createDom$("div", this.$class_$ + "-buttons"));
  this.$titleId_$ = this.$titleEl_$.id;
  $JSCompiler_StaticMethods_attachToElement$self$$inline_572_element$$144$$.setAttribute("role", this.$preferredAriaRole_$);
  $goog$a11y$aria$setState$$($JSCompiler_StaticMethods_attachToElement$self$$inline_572_element$$144$$, "labelledby", this.$titleId_$ || "");
  this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$);
  $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$);
  this.$buttons_$ && ($JSCompiler_StaticMethods_attachToElement$self$$inline_572_element$$144$$ = this.$buttons_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_572_element$$144$$.$element_$ = this.$buttonEl_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_572_element$$144$$.render());
  $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$);
  this.$setBackgroundElementOpacity$(this.$backgroundElementOpacity_$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$) {
  $goog$ui$Dialog$$.$superClass_$.$decorateInternal$.call(this, $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$);
  $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$ = this.$getElement$();
  var $buttonsClass_contentClass_titleClass$$ = this.$class_$ + "-content";
  (this.$contentEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $buttonsClass_contentClass_titleClass$$, $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$)[0]) ? this.$content_$ = this.$contentEl_$.innerHTML : (this.$contentEl_$ = this.$getDomHelper$().$createDom$("div", $buttonsClass_contentClass_titleClass$$), this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$), $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$.appendChild(this.$contentEl_$));
  var $buttonsClass_contentClass_titleClass$$ = this.$class_$ + "-title", $titleTextClass$$ = this.$class_$ + "-title-text", $titleCloseClass$$ = this.$class_$ + "-title-close";
  (this.$titleEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $buttonsClass_contentClass_titleClass$$, $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$)[0]) ? (this.$titleTextEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $titleTextClass$$, this.$titleEl_$)[0], this.$titleCloseEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $titleCloseClass$$, this.$titleEl_$)[0], this.$titleEl_$.id || 
  (this.$titleEl_$.id = $JSCompiler_StaticMethods_getId$$(this))) : (this.$titleEl_$ = this.$getDomHelper$().$createDom$("div", {className:$buttonsClass_contentClass_titleClass$$, id:$JSCompiler_StaticMethods_getId$$(this)}), $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$.insertBefore(this.$titleEl_$, this.$contentEl_$));
  this.$titleId_$ = this.$titleEl_$.id;
  this.$titleTextEl_$ ? this.$title_$ = $goog$dom$getTextContent$$(this.$titleTextEl_$) : (this.$titleTextEl_$ = this.$getDomHelper$().$createDom$("span", $titleTextClass$$, this.$title_$), this.$titleEl_$.appendChild(this.$titleTextEl_$));
  $goog$a11y$aria$setState$$($JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$, "labelledby", this.$titleId_$ || "");
  this.$titleCloseEl_$ || (this.$titleCloseEl_$ = this.$getDomHelper$().$createDom$("span", $titleCloseClass$$), this.$titleEl_$.appendChild(this.$titleCloseEl_$));
  $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$);
  $buttonsClass_contentClass_titleClass$$ = this.$class_$ + "-buttons";
  (this.$buttonEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $buttonsClass_contentClass_titleClass$$, $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$)[0]) ? (this.$buttons_$ = new $goog$ui$Dialog$ButtonSet$$(this.$getDomHelper$()), this.$buttons_$.$decorate$(this.$buttonEl_$)) : (this.$buttonEl_$ = this.$getDomHelper$().$createDom$("div", $buttonsClass_contentClass_titleClass$$), $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$.appendChild(this.$buttonEl_$), 
  this.$buttons_$ && ($JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$ = this.$buttons_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$.$element_$ = this.$buttonEl_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_575_dialogElement_element$$145$$.render()), $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$));
  this.$setBackgroundElementOpacity$(this.$backgroundElementOpacity_$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Dialog$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "keydown", this.$onKey_$), this.$getElement$(), "keypress", this.$onKey_$);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$buttonEl_$, "click", this.$onButtonClick_$);
  $JSCompiler_StaticMethods_setDraggingEnabled_$$(this, this.$draggable_$);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$titleCloseEl_$, "click", this.$onTitleCloseClick_$);
  var $dom$$inline_580_element$$146$$ = this.$getElement$();
  $dom$$inline_580_element$$146$$.setAttribute("role", this.$preferredAriaRole_$);
  "" !== this.$titleTextEl_$.id && $goog$a11y$aria$setState$$($dom$$inline_580_element$$146$$, "labelledby", this.$titleTextEl_$.id);
  if(!this.$modal_$ && (this.$modal_$ = $JSCompiler_alias_FALSE$$, this.$inDocument_$)) {
    var $dom$$inline_580_element$$146$$ = this.$getDomHelper$(), $bg$$inline_581$$ = this.$getBackgroundElement$();
    $dom$$inline_580_element$$146$$.removeNode(this.$bgIframeEl_$);
    $dom$$inline_580_element$$146$$.removeNode($bg$$inline_581$$)
  }
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  this.$visible_$ && this.$setVisible$($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setDraggingEnabled_$$(this, $JSCompiler_alias_FALSE$$);
  $goog$ui$Dialog$$.$superClass_$.$exitDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($visible$$3$$) {
  $visible$$3$$ != this.$visible_$ && (this.$inDocument_$ || this.render(), $goog$ui$Dialog$$.$superClass_$.$setVisible$.call(this, $visible$$3$$))
};
$JSCompiler_prototypeAlias$$.$onShow$ = function $$JSCompiler_prototypeAlias$$$$onShow$$() {
  $goog$ui$Dialog$$.$superClass_$.$onShow$.call(this);
  this.dispatchEvent($goog$ui$Dialog$EventType$AFTER_SHOW$$)
};
$JSCompiler_prototypeAlias$$.$onHide$ = function $$JSCompiler_prototypeAlias$$$$onHide$$() {
  $goog$ui$Dialog$$.$superClass_$.$onHide$.call(this);
  this.dispatchEvent($goog$ui$Dialog$EventType$AFTER_HIDE$$);
  this.$disposeOnHide_$ && this.$dispose$()
};
$JSCompiler_prototypeAlias$$.focus = function $$JSCompiler_prototypeAlias$$$focus$() {
  $goog$ui$Dialog$$.$superClass_$.focus.call(this);
  if(this.$buttons_$) {
    var $defaultButton$$ = this.$buttons_$.$defaultButton_$;
    if($defaultButton$$) {
      for(var $doc$$40$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), $buttons$$ = this.$buttonEl_$.getElementsByTagName("button"), $i$$150$$ = 0, $button$$1$$;$button$$1$$ = $buttons$$[$i$$150$$];$i$$150$$++) {
        if($button$$1$$.name == $defaultButton$$ && !$button$$1$$.disabled) {
          try {
            if($goog$userAgent$WEBKIT$$ || $goog$userAgent$OPERA$$) {
              var $temp$$1$$ = $doc$$40$$.createElement("input");
              $temp$$1$$.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
              this.$getElement$().appendChild($temp$$1$$);
              $temp$$1$$.focus();
              this.$getElement$().removeChild($temp$$1$$)
            }
            $button$$1$$.focus()
          }catch($e$$96$$) {
          }
          break
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$setDraggerLimits_$ = function $$JSCompiler_prototypeAlias$$$$setDraggerLimits_$$() {
  var $doc$$41_h$$14$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), $limits$$inline_585_viewSize$$2$$ = $goog$dom$getViewportSize_$$(($doc$$41_h$$14$$ ? $goog$dom$getWindow_$$($doc$$41_h$$14$$) : window) || window || window), $w$$11$$ = Math.max($doc$$41_h$$14$$.body.scrollWidth, $limits$$inline_585_viewSize$$2$$.width), $doc$$41_h$$14$$ = Math.max($doc$$41_h$$14$$.body.scrollHeight, $limits$$inline_585_viewSize$$2$$.height), $dialogSize$$ = $goog$style$getSize$$(this.$getElement$());
  "fixed" == $goog$style$getStyle_$$(this.$getElement$(), "position") ? ($limits$$inline_585_viewSize$$2$$ = new $goog$math$Rect$$(0, 0, Math.max(0, $limits$$inline_585_viewSize$$2$$.width - $dialogSize$$.width), Math.max(0, $limits$$inline_585_viewSize$$2$$.height - $dialogSize$$.height)), this.$dragger_$.$limits$ = $limits$$inline_585_viewSize$$2$$ || new $goog$math$Rect$$(NaN, NaN, NaN, NaN)) : this.$dragger_$.$limits$ = new $goog$math$Rect$$(0, 0, $w$$11$$ - $dialogSize$$.width, $doc$$41_h$$14$$ - 
  $dialogSize$$.height) || new $goog$math$Rect$$(NaN, NaN, NaN, NaN)
};
$JSCompiler_prototypeAlias$$.$onTitleCloseClick_$ = function $$JSCompiler_prototypeAlias$$$$onTitleCloseClick_$$() {
  if(this.$hasTitleCloseButton_$) {
    var $bs_caption$$16$$ = this.$buttons_$, $key$$80$$ = $bs_caption$$16$$ && $bs_caption$$16$$.$cancelButton_$;
    $key$$80$$ ? ($bs_caption$$16$$ = $bs_caption$$16$$.get($key$$80$$), this.dispatchEvent(new $goog$ui$Dialog$Event$$($key$$80$$, $bs_caption$$16$$)) && this.$setVisible$($JSCompiler_alias_FALSE$$)) : this.$setVisible$($JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$buttonEl_$ = this.$titleCloseEl_$ = $JSCompiler_alias_NULL$$;
  $goog$ui$Dialog$$.$superClass_$.$disposeInternal$.call(this)
};
function $JSCompiler_StaticMethods_setButtonSet$$($JSCompiler_StaticMethods_setButtonSet$self$$, $buttons$$1$$) {
  $JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$ = $buttons$$1$$;
  if($JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$) {
    if($JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$) {
      var $JSCompiler_StaticMethods_attachToElement$self$$inline_590$$ = $JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$;
      $JSCompiler_StaticMethods_attachToElement$self$$inline_590$$.$element_$ = $JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$;
      $JSCompiler_StaticMethods_attachToElement$self$$inline_590$$.render()
    }else {
      $JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$.innerHTML = ""
    }
    $goog$style$showElement$$($JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$, !!$JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$)
  }
}
$JSCompiler_prototypeAlias$$.$onButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onButtonClick_$$($button$$2_e$$99_el$$inline_595_key$$81$$) {
  a: {
    for($button$$2_e$$99_el$$inline_595_key$$81$$ = $button$$2_e$$99_el$$inline_595_key$$81$$.target;$button$$2_e$$99_el$$inline_595_key$$81$$ != $JSCompiler_alias_NULL$$ && $button$$2_e$$99_el$$inline_595_key$$81$$ != this.$buttonEl_$;) {
      if("BUTTON" == $button$$2_e$$99_el$$inline_595_key$$81$$.tagName) {
        break a
      }
      $button$$2_e$$99_el$$inline_595_key$$81$$ = $button$$2_e$$99_el$$inline_595_key$$81$$.parentNode
    }
    $button$$2_e$$99_el$$inline_595_key$$81$$ = $JSCompiler_alias_NULL$$
  }
  if($button$$2_e$$99_el$$inline_595_key$$81$$ && !$button$$2_e$$99_el$$inline_595_key$$81$$.disabled) {
    $button$$2_e$$99_el$$inline_595_key$$81$$ = $button$$2_e$$99_el$$inline_595_key$$81$$.name;
    var $caption$$17$$ = this.$buttons_$.get($button$$2_e$$99_el$$inline_595_key$$81$$);
    this.dispatchEvent(new $goog$ui$Dialog$Event$$($button$$2_e$$99_el$$inline_595_key$$81$$, $caption$$17$$)) && this.$setVisible$($JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$onKey_$ = function $$JSCompiler_prototypeAlias$$$$onKey_$$($e$$100$$) {
  var $caption$$18_close$$ = $JSCompiler_alias_FALSE$$, $hasHandler$$ = $JSCompiler_alias_FALSE$$, $buttonSet$$ = this.$buttons_$, $isSpecialFormElement_target$$57$$ = $e$$100$$.target;
  if("keydown" == $e$$100$$.type) {
    if(this.$escapeToCancel_$ && 27 == $e$$100$$.keyCode) {
      var $cancel_key$$82$$ = $buttonSet$$ && $buttonSet$$.$cancelButton_$, $isSpecialFormElement_target$$57$$ = "SELECT" == $isSpecialFormElement_target$$57$$.tagName && !$isSpecialFormElement_target$$57$$.disabled;
      $cancel_key$$82$$ && !$isSpecialFormElement_target$$57$$ ? ($hasHandler$$ = $JSCompiler_alias_TRUE$$, $caption$$18_close$$ = $buttonSet$$.get($cancel_key$$82$$), $caption$$18_close$$ = this.dispatchEvent(new $goog$ui$Dialog$Event$$($cancel_key$$82$$, $caption$$18_close$$))) : $isSpecialFormElement_target$$57$$ || ($caption$$18_close$$ = $JSCompiler_alias_TRUE$$)
    }else {
      if($e$$100$$.keyCode == $goog$events$KeyCodes$TAB$$ && $e$$100$$.shiftKey && $isSpecialFormElement_target$$57$$ == this.$getElement$()) {
        this.$backwardTabWrapInProgress_$ = $JSCompiler_alias_TRUE$$;
        try {
          this.$tabCatcherElement_$.focus()
        }catch($e$$inline_598$$) {
        }
        $goog$Timer$callOnce$$(this.$resetBackwardTabWrap_$, 0, this)
      }
    }
  }else {
    if($e$$100$$.keyCode == $goog$events$KeyCodes$ENTER$$) {
      if("BUTTON" == $isSpecialFormElement_target$$57$$.tagName) {
        $cancel_key$$82$$ = $isSpecialFormElement_target$$57$$.name
      }else {
        if($buttonSet$$) {
          var $defaultKey$$ = $buttonSet$$.$defaultButton_$, $JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$;
          if($JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$ = $defaultKey$$) {
            a: {
              $JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$ = $buttonSet$$.$element_$.getElementsByTagName("BUTTON");
              for(var $i$$inline_603$$ = 0, $nextButton$$inline_604$$;$nextButton$$inline_604$$ = $JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$[$i$$inline_603$$];$i$$inline_603$$++) {
                if($nextButton$$inline_604$$.name == $defaultKey$$ || $nextButton$$inline_604$$.id == $defaultKey$$) {
                  $JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$ = $nextButton$$inline_604$$;
                  break a
                }
              }
              $JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$ = $JSCompiler_alias_NULL$$
            }
          }
          $isSpecialFormElement_target$$57$$ = ("TEXTAREA" == $isSpecialFormElement_target$$57$$.tagName || "SELECT" == $isSpecialFormElement_target$$57$$.tagName || "A" == $isSpecialFormElement_target$$57$$.tagName) && !$isSpecialFormElement_target$$57$$.disabled;
          $JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$ && (!$JSCompiler_temp$$49_buttons$$inline_602_defaultButton$$1$$.disabled && !$isSpecialFormElement_target$$57$$) && ($cancel_key$$82$$ = $defaultKey$$)
        }
      }
      $cancel_key$$82$$ && $buttonSet$$ && ($hasHandler$$ = $JSCompiler_alias_TRUE$$, $caption$$18_close$$ = this.dispatchEvent(new $goog$ui$Dialog$Event$$($cancel_key$$82$$, String($buttonSet$$.get($cancel_key$$82$$)))))
    }
  }
  if($caption$$18_close$$ || $hasHandler$$) {
    $e$$100$$.stopPropagation(), $e$$100$$.preventDefault()
  }
  $caption$$18_close$$ && this.$setVisible$($JSCompiler_alias_FALSE$$)
};
function $goog$ui$Dialog$Event$$($key$$83$$, $caption$$19$$) {
  this.type = $goog$ui$Dialog$EventType$SELECT$$;
  this.key = $key$$83$$;
  this.caption = $caption$$19$$
}
$goog$inherits$$($goog$ui$Dialog$Event$$, $goog$events$Event$$);
var $goog$ui$Dialog$EventType$SELECT$$ = "dialogselect", $goog$ui$Dialog$EventType$AFTER_HIDE$$ = "afterhide", $goog$ui$Dialog$EventType$AFTER_SHOW$$ = "aftershow";
function $goog$ui$Dialog$ButtonSet$$($opt_domHelper$$14$$) {
  this.$dom_$ = $opt_domHelper$$14$$ || $goog$dom$getDomHelper$$();
  $goog$structs$Map$$.call(this)
}
$goog$inherits$$($goog$ui$Dialog$ButtonSet$$, $goog$structs$Map$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Dialog$ButtonSet$$.prototype;
$JSCompiler_prototypeAlias$$.$class_$ = "goog-buttonset";
$JSCompiler_prototypeAlias$$.$defaultButton_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$cancelButton_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$84$$, $caption$$20$$, $opt_isDefault$$, $opt_isCancel$$) {
  $goog$structs$Map$$.prototype.set.call(this, $key$$84$$, $caption$$20$$);
  $opt_isDefault$$ && (this.$defaultButton_$ = $key$$84$$);
  $opt_isCancel$$ && (this.$cancelButton_$ = $key$$84$$);
  return this
};
function $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$self$$, $button$$3$$, $opt_isDefault$$1$$, $opt_isCancel$$1$$) {
  return $JSCompiler_StaticMethods_addButton$self$$.set($button$$3$$.key, $button$$3$$.caption, $opt_isDefault$$1$$, $opt_isCancel$$1$$)
}
$JSCompiler_prototypeAlias$$.render = function $$JSCompiler_prototypeAlias$$$render$() {
  if(this.$element_$) {
    this.$element_$.innerHTML = "";
    var $domHelper$$2$$ = $goog$dom$getDomHelper$$(this.$element_$);
    $goog$structs$forEach$$(this, function($caption$$21$$, $key$$85$$) {
      var $button$$4$$ = $domHelper$$2$$.$createDom$("button", {name:$key$$85$$}, $caption$$21$$);
      $key$$85$$ == this.$defaultButton_$ && ($button$$4$$.className = this.$class_$ + "-default");
      this.$element_$.appendChild($button$$4$$)
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($buttons$$2_element$$148$$) {
  if($buttons$$2_element$$148$$ && 1 == $buttons$$2_element$$148$$.nodeType) {
    this.$element_$ = $buttons$$2_element$$148$$;
    $buttons$$2_element$$148$$ = this.$element_$.getElementsByTagName("button");
    for(var $i$$151$$ = 0, $button$$5$$, $key$$86$$, $caption$$22$$;$button$$5$$ = $buttons$$2_element$$148$$[$i$$151$$];$i$$151$$++) {
      if($key$$86$$ = $button$$5$$.name || $button$$5$$.id, $caption$$22$$ = $goog$dom$getTextContent$$($button$$5$$) || $button$$5$$.value, $key$$86$$) {
        var $isDefault$$ = 0 == $i$$151$$;
        this.set($key$$86$$, $caption$$22$$, $isDefault$$, $button$$5$$.name == $goog$ui$Dialog$DefaultButtonKeys$CANCEL$$);
        $isDefault$$ && $goog$dom$classes$add$$($button$$5$$, this.$class_$ + "-default")
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
var $goog$ui$Dialog$DefaultButtonKeys$CANCEL$$ = "cancel", $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$ = {key:"ok", caption:"OK"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$ = {key:$goog$ui$Dialog$DefaultButtonKeys$CANCEL$$, caption:"Cancel"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$ = {key:"yes", caption:"Yes"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$ = {key:"no", caption:"No"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$ = {key:"save", caption:"Save"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$ = 
{key:"continue", caption:"Continue"};
"undefined" != typeof document && ($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, 
$goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, 
$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
// Input 107
function $bootstrap$Dialog$$() {
  $goog$ui$Dialog$$.call(this, "modal")
}
$goog$inherits$$($bootstrap$Dialog$$, $goog$ui$Dialog$$);
$bootstrap$Dialog$$.prototype.$createDom$ = function $$bootstrap$Dialog$$$$$createDom$$() {
  $goog$ui$ModalPopup$$.prototype.$createDom$.call(this);
  var $JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$ = this.$getElement$(), $dom$$12_i$$154$$ = this.$getDomHelper$();
  this.$titleEl_$ = $dom$$12_i$$154$$.$createDom$("div", {className:"modal-header", id:$JSCompiler_StaticMethods_getId$$(this)}, this.$titleCloseEl_$ = $dom$$12_i$$154$$.$createDom$("a", {className:"close", href:"javascript:;"}, "\u00d7"), this.$titleTextEl_$ = $dom$$12_i$$154$$.$createDom$("h3", $JSCompiler_alias_VOID$$, this.$title_$));
  $goog$dom$append$$($JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$, this.$titleEl_$, this.$contentEl_$ = $dom$$12_i$$154$$.$createDom$("div", "modal-body"), this.$buttonEl_$ = $dom$$12_i$$154$$.$createDom$("div", "modal-footer"));
  this.$titleId_$ = this.$titleEl_$.id;
  $JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$.setAttribute("role", "dialog");
  $goog$a11y$aria$setState$$($JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$, "labelledby", this.$titleId_$ || "");
  this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$);
  $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$);
  if(this.$buttons_$) {
    $JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$ = this.$buttons_$;
    $JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$.$element_$ = this.$buttonEl_$;
    $JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$.render();
    $JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$ = this.$buttons_$.$element_$.getElementsByTagName("BUTTON");
    for($dom$$12_i$$154$$ = 0;$dom$$12_i$$154$$ < $JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$.length;$dom$$12_i$$154$$++) {
      $goog$dom$classes$add$$($JSCompiler_StaticMethods_attachToElement$self$$inline_607_buttons$$4_element$$149$$[$dom$$12_i$$154$$], "btn")
    }
  }
  $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$);
  this.$setBackgroundElementOpacity$(this.$backgroundElementOpacity_$)
};
$bootstrap$Dialog$$.prototype.$setBackgroundElementOpacity$ = function $$bootstrap$Dialog$$$$$setBackgroundElementOpacity$$($bgEl$$1_opacity$$2$$) {
  this.$backgroundElementOpacity_$ = $bgEl$$1_opacity$$2$$;
  this.$getElement$() && ($bgEl$$1_opacity$$2$$ = this.$getBackgroundElement$(), $goog$dom$classes$add$$($bgEl$$1_opacity$$2$$, "modal-dialog-bg"), $bgEl$$1_opacity$$2$$ && $goog$style$setOpacity$$($bgEl$$1_opacity$$2$$, this.$backgroundElementOpacity_$))
};
function $bootstrap$Dialog$ButtonSet$$($opt_domHelper$$15$$) {
  $goog$ui$Dialog$ButtonSet$$.call(this, $opt_domHelper$$15$$)
}
$goog$inherits$$($bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$$);
$bootstrap$Dialog$ButtonSet$$.prototype.render = function $$bootstrap$Dialog$ButtonSet$$$$render$() {
  if(this.$element_$) {
    this.$element_$.innerHTML = "";
    var $domHelper$$3$$ = $goog$dom$getDomHelper$$(this.$element_$);
    $goog$structs$forEach$$(this, function($caption$$23$$, $key$$91$$) {
      var $button$$8$$ = $domHelper$$3$$.$createDom$("button", {name:$key$$91$$}, $caption$$23$$);
      $button$$8$$.className = $key$$91$$ == this.$defaultButton_$ ? "btn btn-primary" : "btn";
      this.$element_$.appendChild($button$$8$$)
    }, this)
  }
};
var $bootstrap$Dialog$ButtonSet$DefaultButtons$PRINT$$ = {key:"print", caption:"Print"};
function $bootstrap$Dialog$ButtonSet$createOkCancel$$() {
  return $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
}
function $bootstrap$Dialog$ButtonSet$createYesNoCancel$$() {
  return $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
}
;
// Input 108
function $bootstrap$Dropdown$closeAll$$() {
  var $dropdown_elements$$ = $goog$dom$getElementsByClass$$("dropdown-toggle", document.body);
  $goog$array$forEach$$($dropdown_elements$$, function($dropdown_element$$) {
    $goog$dom$classes$remove$$($goog$dom$getParentElement$$($dropdown_element$$), "open")
  })
}
function $bootstrap$Dropdown$install$$() {
  $goog$events$listen$$(document.body, "click", function($dropdown_element_parent$$1_e$$101$$) {
    var $element$$150$$ = $dropdown_element_parent$$1_e$$101$$.target, $is_dropdown_toogle$$ = $JSCompiler_alias_FALSE$$;
    $goog$dom$classes$has$$($element$$150$$, "dropdown-toggle") ? $is_dropdown_toogle$$ = $JSCompiler_alias_TRUE$$ : ($element$$150$$ = $goog$dom$getAncestorByTagNameAndClass$$($element$$150$$, $JSCompiler_alias_NULL$$, "dropdown-toggle"), $element$$150$$ != $JSCompiler_alias_NULL$$ && ($is_dropdown_toogle$$ = $JSCompiler_alias_TRUE$$));
    $is_dropdown_toogle$$ ? ($dropdown_element_parent$$1_e$$101$$.preventDefault(), $dropdown_element_parent$$1_e$$101$$.stopPropagation(), $dropdown_element_parent$$1_e$$101$$ = $goog$dom$getParentElement$$($element$$150$$), $goog$dom$classes$has$$($dropdown_element_parent$$1_e$$101$$, "open") ? $bootstrap$Dropdown$closeAll$$() : ($bootstrap$Dropdown$closeAll$$(), $goog$dom$classes$add$$($dropdown_element_parent$$1_e$$101$$, "open"))) : $bootstrap$Dropdown$closeAll$$()
  });
  $goog$events$listen$$(document.body, "click", function($e$$102_label_element$$) {
    var $element$$151$$ = $e$$102_label_element$$.target, $data_value$$2$$ = $JSCompiler_alias_NULL$$, $data_caption$$ = $JSCompiler_alias_NULL$$;
    "A" === $element$$151$$.tagName && ($data_caption$$ = $goog$dom$getTextContent$$($element$$151$$), $element$$151$$ = $goog$dom$getParentElement$$($element$$151$$));
    "LI" === $element$$151$$.tagName && ($data_value$$2$$ = $element$$151$$.getAttribute("data-value"), $data_caption$$ = $goog$dom$getTextContent$$($goog$dom$getFirstElementChild$$($element$$151$$)));
    $data_value$$2$$ != $JSCompiler_alias_NULL$$ && ($element$$151$$ = $goog$dom$getParentElement$$($element$$151$$), "UL" === $element$$151$$.tagName && $goog$dom$classes$has$$($element$$151$$, "dropdown-menu") && ($e$$102_label_element$$.preventDefault(), $e$$102_label_element$$.stopPropagation(), console.log("click on:  " + $data_caption$$ + " [" + $data_value$$2$$ + "]"), $e$$102_label_element$$ = $goog$dom$getElementByClass$$("dropdown-label", $goog$dom$getParentElement$$($element$$151$$)), 
    $e$$102_label_element$$ != $JSCompiler_alias_NULL$$ && $goog$dom$setTextContent$$($e$$102_label_element$$, $data_caption$$), $bootstrap$Dropdown$closeAll$$()))
  })
}
;
// Input 109
function $bitex$view$ToolBarView$$($app$$4$$, $opt_domHelper$$16$$) {
  $bitex$view$View$$.call(this, $app$$4$$, $opt_domHelper$$16$$)
}
$goog$inherits$$($bitex$view$ToolBarView$$, $bitex$view$View$$);
$bitex$view$ToolBarView$$.prototype.$enterDocument$ = function $$bitex$view$ToolBarView$$$$$enterDocument$$() {
  $bitex$view$ToolBarView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$52$$ = this.$getHandler$(), $model$$7$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$7$$, "model_setBrokerCurrencies", function() {
    $model$$7$$.get("IsBroker") || $model$$7$$.get("BrokerCurrencies")
  });
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$7$$, "model_setBroker", function() {
    var $support_link_elements$$ = $goog$dom$getElementsByClass$$("bitex-support-link");
    $goog$array$forEach$$($support_link_elements$$, function($el$$87$$) {
      $el$$87$$.href = $model$$7$$.get("Broker").SupportURL
    })
  });
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$7$$, "model_setSecurityList", function() {
    $model$$7$$.get("SecurityList")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$7$$, "model_setAllowedMarkets", function() {
    $model$$7$$.get("AllowedMarkets")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $goog$dom$getElement$$("id_button_connect_ws"), "click", function() {
    this.dispatchEvent("connect_bitex")
  })
};
// Input 110
function $bitex$ui$AdvancedOrderEntry$templates$AdvancedOrderEntry$$($opt_data$$37$$) {
  var $output$$33$$;
  $output$$33$$ = "" + ('<form id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '" class="well span6 advanced-order-entry" data-uniform-control-holder-class="uniform-control-holder"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_symbol" type="hidden" name="symbol" value="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.$symbol$) + '"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_side" type="hidden" name="side" value="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.$side$) + '"><input id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_type" type="hidden" name="type" value="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.type) + '"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_is_broker" type="hidden" value="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.$is_broker$) + '"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_broker_id" type="hidden" name="broker_id" value="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.$broker_id$) + '"><div class="row-fluid uniform-control-holder"><div class="span5"> <span>Quantidade:</span></div><div class="span6"><div class="input-prepend input-block-level"><span id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_amount_sign" class="add-on advanced-order-entry-amount-sign">' + $soy$$0$0escapeHtml$$($opt_data$$37$$.$amount_currency_symbol$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_amount" name="amount" type="text" class="input-block-level" data-uniform-label="Amount" data-uniform-validators="validateNumber; required" value="" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"> <span>Pre\u00e7o por <span class="advanced-order-entry-amount-sign">' + 
  $soy$$0$0escapeHtml$$($opt_data$$37$$.$amount_currency_symbol$) + '</span>:</span></div><div class="span6"><div class="input-prepend input-block-level"><span id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_price_sign" class="add-on advanced-order-entry-price-sign">' + $soy$$0$0escapeHtml$$($opt_data$$37$$.$price_currency_symbol$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_price" name="price" type="text" class="input-block-level" data-uniform-label="Price" data-uniform-validators="validateNumber; required" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"><span>Total:</span></div><div class="span6"><div class="input-prepend input-block-level"><span class="add-on advanced-order-entry-price-sign">' + 
  $soy$$0$0escapeHtml$$($opt_data$$37$$.$price_currency_symbol$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_total" name="total" type="text" class="input-block-level" data-uniform-label="Total" data-uniform-validators="validateNumber; required" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_client_id" name="client_id" type="text" value="' + ($opt_data$$37$$.$client_id$ ? 
  $soy$$0$0escapeHtml$$($opt_data$$37$$.$client_id$) : "") + '" class="input-block-level" label="C\u00f3d. do Cliente" data-uniform-label="C\u00f3d. do Cliente"' + ($opt_data$$37$$.$is_broker$ ? 'data-uniform-validators="required"' : 'style="display:none" disabled') + '/></div><div class="span5"><button id="' + $soy$$0$0escapeHtml$$($opt_data$$37$$.id) + '_action" class="btn ' + (1 == $opt_data$$37$$.$side$ ? "btn-success" : "btn-danger") + ' btn-execution">');
  $output$$33$$ = 1 == $opt_data$$37$$.$side$ ? $output$$33$$ + "COMPRAR" : $output$$33$$ + "VENDER";
  return $output$$33$$ + "</button></div></div></form>"
}
;
// Input 111
function $bitex$ui$AdvancedOrderEntry$$($opt_model$$1$$, $opt_domHelper$$17$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$17$$);
  this.$setModel$($opt_model$$1$$ || {});
  this.$uniform_$ = new $uniform$Uniform$$({control_holder_class:"uniform-control-holder"});
  this.$last_changed_field_$ = "amount";
  this.$factor_price_$ = this.$factor_amount_$ = 1E8
}
$goog$inherits$$($bitex$ui$AdvancedOrderEntry$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$AdvancedOrderEntry$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("advanced-order-entry");
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$AdvancedOrderEntry$templates$AdvancedOrderEntry$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "order_entry"), $symbol$:this.$model_$.$symbol$, $side$:this.$model_$.$side$, type:this.$model_$.type, $is_broker$:this.$model_$.$is_broker$, $broker_id$:this.$model_$.$broker_id$, $amount_currency_symbol$:this.$model_$.$amount_currency_symbol$, $price_currency_symbol$:this.$model_$.$price_currency_symbol$, $client_id$:this.$model_$.$client_id$})
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$AdvancedOrderEntry$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$53$$ = this.$getHandler$();
  this.$getDomHelper$();
  this.$uniform_$.$decorate$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry")));
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_amount"))), "input", this.$onChangeAmount_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_price"))), "input", this.$onChangePrice_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_total"))), "input", this.$onChangeTotal_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_client_id"))), "input", this.$onChangeClientID_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_action")), "click", this.$onAction_$)
};
$JSCompiler_prototypeAlias$$.$onAction_$ = function $$JSCompiler_prototypeAlias$$$$onAction_$$($e$$108$$) {
  $e$$108$$.preventDefault();
  0 < this.$uniform_$.$validate$().length ? $e$$108$$.stopPropagation() : this.dispatchEvent("advanced_order_entry_submitted")
};
function $JSCompiler_StaticMethods_disableAction_$$($JSCompiler_StaticMethods_disableAction_$self$$, $enabled$$8$$) {
  if("true" == $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableAction_$self$$, "order_entry_is_broker")))) {
    var $client_id$$1$$ = $JSCompiler_StaticMethods_disableAction_$self$$.$getClientID$();
    $client_id$$1$$ == $JSCompiler_alias_NULL$$ || $goog$string$isEmpty$$($goog$string$trim$$($client_id$$1$$)) ? $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableAction_$self$$, "order_entry_action")).disabled = $JSCompiler_alias_TRUE$$ : $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableAction_$self$$, "order_entry_action")).disabled = $enabled$$8$$
  }else {
    $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableAction_$self$$, "order_entry_action")).disabled = $enabled$$8$$
  }
}
$JSCompiler_prototypeAlias$$.$onChangeAmount_$ = function $$JSCompiler_prototypeAlias$$$$onChangeAmount_$$() {
  var $total$$2$$ = this.$getPrice$() * this.$getAmount$() / 1E8;
  $JSCompiler_StaticMethods_setTotal$$(this, $total$$2$$);
  this.$last_changed_field_$ = "amount";
  $JSCompiler_StaticMethods_disableAction_$$(this, 0 >= $JSCompiler_StaticMethods_getTotal$$(this))
};
$JSCompiler_prototypeAlias$$.$onChangeTotal_$ = function $$JSCompiler_prototypeAlias$$$$onChangeTotal_$$() {
  var $amount$$1$$ = 1E8 * ($JSCompiler_StaticMethods_getTotal$$(this) / this.$getPrice$());
  $JSCompiler_StaticMethods_setAmount$$(this, $amount$$1$$);
  this.$last_changed_field_$ = "total";
  $JSCompiler_StaticMethods_disableAction_$$(this, 0 >= $JSCompiler_StaticMethods_getTotal$$(this))
};
$JSCompiler_prototypeAlias$$.$onChangePrice_$ = function $$JSCompiler_prototypeAlias$$$$onChangePrice_$$() {
  if("amount" === this.$last_changed_field_$) {
    var $amount$$2_total$$3$$ = this.$getPrice$() * this.$getAmount$() / 1E8;
    $JSCompiler_StaticMethods_setTotal$$(this, $amount$$2_total$$3$$)
  }else {
    0 < this.$getPrice$() && ($amount$$2_total$$3$$ = 1E8 * ($JSCompiler_StaticMethods_getTotal$$(this) / this.$getPrice$()), $JSCompiler_StaticMethods_setAmount$$(this, $amount$$2_total$$3$$))
  }
  $JSCompiler_StaticMethods_disableAction_$$(this, 0 >= $JSCompiler_StaticMethods_getTotal$$(this))
};
$JSCompiler_prototypeAlias$$.$onChangeClientID_$ = function $$JSCompiler_prototypeAlias$$$$onChangeClientID_$$() {
  $JSCompiler_StaticMethods_disableAction_$$(this, 0 >= $JSCompiler_StaticMethods_getTotal$$(this))
};
function $JSCompiler_StaticMethods_setAmountCurrencySign$$($JSCompiler_StaticMethods_setAmountCurrencySign$self$$, $value$$142$$) {
  var $elements$$5$$ = $JSCompiler_StaticMethods_setAmountCurrencySign$self$$.$getDomHelper$().$getElementsByClass$($JSCompiler_StaticMethods_setAmountCurrencySign$self$$.$getBaseCssClass$() + "-amount-sign", $JSCompiler_StaticMethods_setAmountCurrencySign$self$$.$getElement$());
  $goog$array$forEach$$($elements$$5$$, function($el$$89$$) {
    $goog$dom$setTextContent$$($el$$89$$, $value$$142$$)
  })
}
function $JSCompiler_StaticMethods_setPriceCurrencySign$$($JSCompiler_StaticMethods_setPriceCurrencySign$self$$, $value$$143$$) {
  var $elements$$6$$ = $JSCompiler_StaticMethods_setPriceCurrencySign$self$$.$getDomHelper$().$getElementsByClass$($JSCompiler_StaticMethods_setPriceCurrencySign$self$$.$getBaseCssClass$() + "-price-sign", $JSCompiler_StaticMethods_setPriceCurrencySign$self$$.$getElement$());
  $goog$array$forEach$$($elements$$6$$, function($el$$90$$) {
    $goog$dom$setTextContent$$($el$$90$$, $value$$143$$)
  })
}
function $JSCompiler_StaticMethods_setBrokerMode$$($JSCompiler_StaticMethods_setBrokerMode$self$$, $value$$144$$) {
  $goog$dom$forms$setValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_setBrokerMode$self$$, "order_entry_is_broker")), $value$$144$$);
  $goog$style$showElement$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_setBrokerMode$self$$, "order_entry_client_id")), $value$$144$$);
  $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_setBrokerMode$self$$, "order_entry_client_id")).disabled = !$value$$144$$
}
$JSCompiler_prototypeAlias$$.$getSymbol$ = function $$JSCompiler_prototypeAlias$$$$getSymbol$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_symbol")))
};
$JSCompiler_prototypeAlias$$.$setSymbol$ = function $$JSCompiler_prototypeAlias$$$$setSymbol$$($symbol$$2$$) {
  $goog$dom$forms$setValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_symbol")), $symbol$$2$$)
};
$JSCompiler_prototypeAlias$$.$getSide$ = function $$JSCompiler_prototypeAlias$$$$getSide$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_side")))
};
$JSCompiler_prototypeAlias$$.$getBrokerID$ = function $$JSCompiler_prototypeAlias$$$$getBrokerID$$() {
  return $goog$string$toNumber$$($goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_broker_id"))))
};
$JSCompiler_prototypeAlias$$.$setBrokerID$ = function $$JSCompiler_prototypeAlias$$$$setBrokerID$$($broker_id$$1$$) {
  $goog$dom$forms$setValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_broker_id")), $broker_id$$1$$)
};
$JSCompiler_prototypeAlias$$.$getClientID$ = function $$JSCompiler_prototypeAlias$$$$getClientID$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_client_id")))
};
$JSCompiler_prototypeAlias$$.$getPrice$ = function $$JSCompiler_prototypeAlias$$$$getPrice$$() {
  var $value$$145_value_fmt$$2$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($value$$145_value_fmt$$2$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($value$$145_value_fmt$$2$$);
  var $el$$91_inputValue$$4$$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_price")), $el$$91_inputValue$$4$$ = $goog$dom$forms$getValue$$($el$$91_inputValue$$4$$), $pos$$19$$ = [0], $value$$145_value_fmt$$2$$ = $value$$145_value_fmt$$2$$.parse($el$$91_inputValue$$4$$, $pos$$19$$);
  return $pos$$19$$[0] != $el$$91_inputValue$$4$$.length || isNaN($value$$145_value_fmt$$2$$) || 0 >= $value$$145_value_fmt$$2$$ ? 0 : parseInt($value$$145_value_fmt$$2$$ * this.$factor_price_$, 10)
};
$JSCompiler_prototypeAlias$$.$getAmount$ = function $$JSCompiler_prototypeAlias$$$$getAmount$$() {
  var $value$$147_value_fmt$$3$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($value$$147_value_fmt$$3$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($value$$147_value_fmt$$3$$);
  var $el$$93_inputValue$$5$$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_amount")), $el$$93_inputValue$$5$$ = $goog$dom$forms$getValue$$($el$$93_inputValue$$5$$), $pos$$20$$ = [0], $value$$147_value_fmt$$3$$ = $value$$147_value_fmt$$3$$.parse($el$$93_inputValue$$5$$, $pos$$20$$);
  return $pos$$20$$[0] != $el$$93_inputValue$$5$$.length || isNaN($value$$147_value_fmt$$3$$) || 0 >= $value$$147_value_fmt$$3$$ ? 0 : parseInt($value$$147_value_fmt$$3$$ * this.$factor_amount_$, 10)
};
function $JSCompiler_StaticMethods_setAmount$$($JSCompiler_StaticMethods_setAmount$self$$, $value$$148$$) {
  var $fmt$$2$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$2$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$2$$);
  var $el$$94$$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_setAmount$self$$, "order_entry_amount"));
  $goog$dom$forms$setValue$$($el$$94$$, $fmt$$2$$.$format$($value$$148$$ / $JSCompiler_StaticMethods_setAmount$self$$.$factor_amount_$))
}
function $JSCompiler_StaticMethods_getTotal$$($JSCompiler_StaticMethods_getTotal$self$$) {
  var $value$$149_value_fmt$$4$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($value$$149_value_fmt$$4$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($value$$149_value_fmt$$4$$);
  var $el$$95_inputValue$$6$$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getTotal$self$$, "order_entry_total")), $el$$95_inputValue$$6$$ = $goog$dom$forms$getValue$$($el$$95_inputValue$$6$$), $pos$$21$$ = [0], $value$$149_value_fmt$$4$$ = $value$$149_value_fmt$$4$$.parse($el$$95_inputValue$$6$$, $pos$$21$$);
  return $pos$$21$$[0] != $el$$95_inputValue$$6$$.length || isNaN($value$$149_value_fmt$$4$$) || 0 >= $value$$149_value_fmt$$4$$ ? 0 : parseInt($value$$149_value_fmt$$4$$ * $JSCompiler_StaticMethods_getTotal$self$$.$factor_price_$, 10)
}
function $JSCompiler_StaticMethods_setTotal$$($JSCompiler_StaticMethods_setTotal$self$$, $value$$150$$) {
  var $fmt$$3$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$3$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$3$$);
  var $el$$96$$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_setTotal$self$$, "order_entry_total"));
  $goog$dom$forms$setValue$$($el$$96$$, $fmt$$3$$.$format$($value$$150$$ / $JSCompiler_StaticMethods_setTotal$self$$.$factor_price_$))
}
;
// Input 112
function $bitex$view$OfferBookView$$($app$$5$$, $opt_domHelper$$18$$) {
  $bitex$view$View$$.call(this, $app$$5$$, $opt_domHelper$$18$$);
  this.$client_order_id$ = this.$order_id_$ = this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = this.$order_book_offer_$ = this.$order_book_bid_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$OfferBookView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$OfferBookView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$enterView$.call(this);
  var $model$$8$$ = this.$app_$.$model_$, $JSCompiler_temp$$64$$;
  if($JSCompiler_temp$$64$$ = $model$$8$$.get("SelectedBrokerID") != $JSCompiler_alias_NULL$$) {
    $JSCompiler_temp$$64$$ = $model$$8$$.get("SelectedSymbol") != $JSCompiler_alias_NULL$$
  }
  $JSCompiler_temp$$64$$ && (this.$onSelectedSymbol_$(), this.$onSelectedBrokerID_$())
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$exitView$.call(this);
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$$(this)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$153$$) {
  this.$element_$ = $element$$153$$;
  this.$buy_order_entry_$ = new $bitex$ui$AdvancedOrderEntry$$({$side$:1, type:2});
  this.$sell_order_entry_$ = new $bitex$ui$AdvancedOrderEntry$$({$side$:2, type:2});
  this.$getContentElement$ = function $this$$getContentElement$$() {
    return $goog$dom$getElement$$("offer_book_order_entry_content")
  };
  $JSCompiler_StaticMethods_addChild$$(this, this.$buy_order_entry_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$sell_order_entry_$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods_destroyOrderBookComponents_$$($JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$) {
  var $handler$$54$$ = $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$getHandler$();
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$, $bitex$ui$OrderBook$EventType$CANCEL$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onCancelOrder_$), $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$.$dispose$());
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$, $bitex$ui$OrderBook$EventType$CANCEL$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onCancelOrder_$), $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$.$dispose$());
  if($JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$ != $JSCompiler_alias_NULL$$) {
    var $conn$$ = $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$app_$.$conn_$;
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBClear_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBDeleteOrdersThru_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBDeleteOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBUpdateOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBNewOrder_$);
    $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.dispatchEvent("md_unsubscribe");
    $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_symbol_$ = $JSCompiler_alias_NULL$$
  }
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$ = $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$56$$ = this.$getHandler$(), $model$$10$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$56$$, $model$$10$$, "model_setSelectedSymbol", this.$onSelectedSymbol_$);
  $JSCompiler_StaticMethods_listen$$($handler$$56$$, $model$$10$$, "model_setSelectedBrokerID", this.$onSelectedBrokerID_$)
};
$JSCompiler_prototypeAlias$$.$onSelectedBrokerID_$ = function $$JSCompiler_prototypeAlias$$$$onSelectedBrokerID_$$() {
  var $model$$11$$ = this.$app_$.$model_$, $selected_broker_id$$ = $model$$11$$.get("SelectedBrokerID"), $market_selected_symbol$$1$$ = $model$$11$$.get("SelectedSymbol"), $market_selected_symbol$$1$$ = $market_selected_symbol$$1$$ != $JSCompiler_alias_NULL$$ ? $market_selected_symbol$$1$$.$symbol$ : $JSCompiler_alias_NULL$$, $selectedBroker$$ = $model$$11$$.get("UserBrokers")[$selected_broker_id$$];
  this.$buy_order_entry_$.$setBrokerID$($selected_broker_id$$);
  this.$sell_order_entry_$.$setBrokerID$($selected_broker_id$$);
  $market_selected_symbol$$1$$ = $selectedBroker$$.AllowedMarkets[$market_selected_symbol$$1$$];
  $goog$style$showElement$$(this.$sell_order_entry_$.$getElement$(), $market_selected_symbol$$1$$ != $JSCompiler_alias_NULL$$);
  $goog$style$showElement$$(this.$buy_order_entry_$.$getElement$(), $market_selected_symbol$$1$$ != $JSCompiler_alias_NULL$$);
  $model$$11$$.get("IsBroker") ? ($JSCompiler_StaticMethods_setBrokerMode$$(this.$buy_order_entry_$, $selected_broker_id$$ == $model$$11$$.get("Profile").BrokerID), $JSCompiler_StaticMethods_setBrokerMode$$(this.$sell_order_entry_$, $selected_broker_id$$ == $model$$11$$.get("Profile").BrokerID)) : ($JSCompiler_StaticMethods_setBrokerMode$$(this.$buy_order_entry_$, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setBrokerMode$$(this.$sell_order_entry_$, $JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$onSelectedSymbol_$ = function $$JSCompiler_prototypeAlias$$$$onSelectedSymbol_$$() {
  var $handler$$inline_625_model$$12$$ = this.$app_$.$model_$, $conn$$inline_627_selected_symbol$$2$$ = $handler$$inline_625_model$$12$$.get("SelectedSymbol"), $model$$inline_626_selected_broker_id$$1$$ = $handler$$inline_625_model$$12$$.get("SelectedBrokerID"), $selectedBroker$$1$$ = $handler$$inline_625_model$$12$$.get("UserBrokers")[$model$$inline_626_selected_broker_id$$1$$], $symbol$$3$$ = $conn$$inline_627_selected_symbol$$2$$.$symbol$;
  this.$buy_order_entry_$.$setSymbol$($symbol$$3$$);
  $conn$$inline_627_selected_symbol$$2$$.$qty_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setAmountCurrencySign$$(this.$buy_order_entry_$, $conn$$inline_627_selected_symbol$$2$$.$qty_currency$.$sign$);
  $conn$$inline_627_selected_symbol$$2$$.$price_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setPriceCurrencySign$$(this.$buy_order_entry_$, $conn$$inline_627_selected_symbol$$2$$.$price_currency$.$sign$);
  this.$sell_order_entry_$.$setSymbol$($symbol$$3$$);
  $conn$$inline_627_selected_symbol$$2$$.$qty_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setAmountCurrencySign$$(this.$sell_order_entry_$, $conn$$inline_627_selected_symbol$$2$$.$qty_currency$.$sign$);
  $conn$$inline_627_selected_symbol$$2$$.$price_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setPriceCurrencySign$$(this.$sell_order_entry_$, $conn$$inline_627_selected_symbol$$2$$.$price_currency$.$sign$);
  this.$buy_order_entry_$.$setBrokerID$($model$$inline_626_selected_broker_id$$1$$);
  this.$sell_order_entry_$.$setBrokerID$($model$$inline_626_selected_broker_id$$1$$);
  var $market$$1$$;
  $selectedBroker$$1$$ != $JSCompiler_alias_NULL$$ && ($market$$1$$ = $selectedBroker$$1$$.AllowedMarkets[$symbol$$3$$]);
  $goog$style$showElement$$(this.$sell_order_entry_$.$getElement$(), $market$$1$$ != $JSCompiler_alias_NULL$$);
  $goog$style$showElement$$(this.$buy_order_entry_$.$getElement$(), $market$$1$$ != $JSCompiler_alias_NULL$$);
  $handler$$inline_625_model$$12$$.get("IsBroker") ? ($JSCompiler_StaticMethods_setBrokerMode$$(this.$buy_order_entry_$, $model$$inline_626_selected_broker_id$$1$$ == $handler$$inline_625_model$$12$$.get("Profile").BrokerID), $JSCompiler_StaticMethods_setBrokerMode$$(this.$sell_order_entry_$, $model$$inline_626_selected_broker_id$$1$$ == $handler$$inline_625_model$$12$$.get("Profile").BrokerID)) : ($JSCompiler_StaticMethods_setBrokerMode$$(this.$buy_order_entry_$, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setBrokerMode$$(this.$sell_order_entry_$, 
  $JSCompiler_alias_FALSE$$));
  $handler$$inline_625_model$$12$$ = this.$getHandler$();
  $model$$inline_626_selected_broker_id$$1$$ = this.$app_$.$model_$;
  this.$market_data_subscription_symbol_$ !== $conn$$inline_627_selected_symbol$$2$$.$symbol$ && ($JSCompiler_StaticMethods_destroyOrderBookComponents_$$(this), this.$order_book_bid_$ = new $bitex$ui$OrderBook$$($model$$inline_626_selected_broker_id$$1$$.get("Username"), $bitex$ui$OrderBook$Side$BUY$$, $conn$$inline_627_selected_symbol$$2$$.$qty_currency$, $conn$$inline_627_selected_symbol$$2$$.$price_currency$), this.$order_book_offer_$ = new $bitex$ui$OrderBook$$($model$$inline_626_selected_broker_id$$1$$.get("Username"), 
  $bitex$ui$OrderBook$Side$SELL$$, $conn$$inline_627_selected_symbol$$2$$.$qty_currency$, $conn$$inline_627_selected_symbol$$2$$.$price_currency$), this.$order_book_bid_$.render($goog$dom$getElement$$("id_order_book_bid_content")), this.$order_book_offer_$.render($goog$dom$getElement$$("id_order_book_ask_content")), $JSCompiler_StaticMethods_listen$$($handler$$inline_625_model$$12$$, this.$order_book_bid_$, $bitex$ui$OrderBook$EventType$CANCEL$$, this.$onCancelOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$inline_625_model$$12$$, 
  this.$order_book_offer_$, $bitex$ui$OrderBook$EventType$CANCEL$$, this.$onCancelOrder_$), this.$market_data_subscription_id_$ = parseInt(1E7 * Math.random(), 10), this.$market_data_subscription_symbol_$ = $conn$$inline_627_selected_symbol$$2$$.$symbol$, $conn$$inline_627_selected_symbol$$2$$ = this.$app_$.$conn_$, $JSCompiler_StaticMethods_listen$$($handler$$inline_625_model$$12$$, $conn$$inline_627_selected_symbol$$2$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + this.$market_data_subscription_id_$, 
  this.$onOBClear_$), $JSCompiler_StaticMethods_listen$$($handler$$inline_625_model$$12$$, $conn$$inline_627_selected_symbol$$2$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrdersThru_$), $JSCompiler_StaticMethods_listen$$($handler$$inline_625_model$$12$$, $conn$$inline_627_selected_symbol$$2$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$inline_625_model$$12$$, 
  $conn$$inline_627_selected_symbol$$2$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBUpdateOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$inline_625_model$$12$$, $conn$$inline_627_selected_symbol$$2$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBNewOrder_$), this.dispatchEvent("md_subscribe"))
};
$JSCompiler_prototypeAlias$$.$onOBClear_$ = function $$JSCompiler_prototypeAlias$$$$onOBClear_$$() {
  this.$order_book_offer_$ != $JSCompiler_alias_NULL$$ && (this.$order_book_bid_$.clear(), this.$order_book_offer_$.clear())
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrdersThru_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrdersThru_$$($e$$116_index$$74$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $msg$$16_side$$2$$ = $e$$116_index$$74$$.data;
    $e$$116_index$$74$$ = $msg$$16_side$$2$$.MDEntryPositionNo;
    $msg$$16_side$$2$$ = $msg$$16_side$$2$$.MDEntryType;
    "0" == $msg$$16_side$$2$$ ? $JSCompiler_StaticMethods_deleteOrderThru$$(this.$order_book_bid_$, $e$$116_index$$74$$) : "1" == $msg$$16_side$$2$$ && $JSCompiler_StaticMethods_deleteOrderThru$$(this.$order_book_offer_$, $e$$116_index$$74$$)
  }
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrder_$$($e$$117_index$$75$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $msg$$17_side$$3$$ = $e$$117_index$$75$$.data;
    $e$$117_index$$75$$ = $msg$$17_side$$3$$.MDEntryPositionNo - 1;
    $msg$$17_side$$3$$ = $msg$$17_side$$3$$.MDEntryType;
    "0" == $msg$$17_side$$3$$ ? $JSCompiler_StaticMethods_deleteOrder$$(this.$order_book_bid_$, $e$$117_index$$75$$) : "1" == $msg$$17_side$$3$$ && $JSCompiler_StaticMethods_deleteOrder$$(this.$order_book_offer_$, $e$$117_index$$75$$)
  }
};
$JSCompiler_prototypeAlias$$.$onOBUpdateOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBUpdateOrder_$$($e$$118_index$$76$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $msg$$18_side$$4$$ = $e$$118_index$$76$$.data;
    $e$$118_index$$76$$ = $msg$$18_side$$4$$.MDEntryPositionNo - 1;
    var $qty$$ = $msg$$18_side$$4$$.MDEntrySize / 1E8, $msg$$18_side$$4$$ = $msg$$18_side$$4$$.MDEntryType;
    "0" == $msg$$18_side$$4$$ ? $JSCompiler_StaticMethods_updateOrder$$(this.$order_book_bid_$, $e$$118_index$$76$$, $qty$$) : "1" == $msg$$18_side$$4$$ && $JSCompiler_StaticMethods_updateOrder$$(this.$order_book_offer_$, $e$$118_index$$76$$, $qty$$)
  }
};
$JSCompiler_prototypeAlias$$.$onOBNewOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBNewOrder_$$($e$$119_index$$77$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $broker$$3_model$$13$$ = this.$app_$.$model_$, $msg$$19_side$$5$$ = $e$$119_index$$77$$.data;
    $e$$119_index$$77$$ = $msg$$19_side$$5$$.MDEntryPositionNo - 1;
    var $price$$2$$ = $msg$$19_side$$5$$.MDEntryPx / 1E8, $qty$$1$$ = $msg$$19_side$$5$$.MDEntrySize / 1E8, $username$$3$$;
    $username$$3$$ = $msg$$19_side$$5$$.Username != $JSCompiler_alias_NULL$$ ? $msg$$19_side$$5$$.Username : $bitex$util$getPseudoName$$($msg$$19_side$$5$$.UserID);
    $msg$$19_side$$5$$.UserID === $broker$$3_model$$13$$.get("UserID") && ($username$$3$$ = $broker$$3_model$$13$$.get("Username"));
    var $broker$$3_model$$13$$ = $msg$$19_side$$5$$.Broker, $orderId$$2$$ = $msg$$19_side$$5$$.OrderID, $msg$$19_side$$5$$ = $msg$$19_side$$5$$.MDEntryType;
    "0" == $msg$$19_side$$5$$ ? $JSCompiler_StaticMethods_insertOrder$$(this.$order_book_bid_$, $e$$119_index$$77$$, $orderId$$2$$, $price$$2$$, $qty$$1$$, $username$$3$$, $broker$$3_model$$13$$) : "1" == $msg$$19_side$$5$$ && $JSCompiler_StaticMethods_insertOrder$$(this.$order_book_offer_$, $e$$119_index$$77$$, $orderId$$2$$, $price$$2$$, $qty$$1$$, $username$$3$$, $broker$$3_model$$13$$)
  }
};
$JSCompiler_prototypeAlias$$.$getMDInstruments$ = function $$JSCompiler_prototypeAlias$$$$getMDInstruments$$() {
  return[this.$market_data_subscription_symbol_$]
};
$JSCompiler_prototypeAlias$$.$getMDMarketDepth$ = $JSCompiler_returnArg$$(0);
$JSCompiler_prototypeAlias$$.$getMDEntries$ = function $$JSCompiler_prototypeAlias$$$$getMDEntries$$() {
  return["0", "1"]
};
$JSCompiler_prototypeAlias$$.$onCancelOrder_$ = function $$JSCompiler_prototypeAlias$$$$onCancelOrder_$$($e$$120$$) {
  this.$order_id_$ = $e$$120$$.$order_id$;
  this.$client_order_id_$ = $e$$120$$.$client_order_id$;
  this.dispatchEvent("cancel_order")
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$exitDocument$.call(this);
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$$(this)
};
// Input 113
function $bitex$ui$OrderManager$$($grid_columns_simple_opt_mode$$, $opt_blinkDelay$$1_options$$10$$, $opt_domHelper$$19$$) {
  this.$mode_$ = $grid_columns_simple_opt_mode$$ || "advanced";
  this.$blink_delay_$ = $opt_blinkDelay$$1_options$$10$$ || 700;
  $grid_columns_simple_opt_mode$$ = [{property:"OrderID", label:"ID", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$31$$, $rowSet$$2$$) {
    return $rowSet$$2$$.ClOrdID
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-order-id"
  }}, {property:"Side", label:"Description", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$32$$) {
    return $bitex$ui$OrderManager$Status$$[$s$$32$$]
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-description"
  }}, {property:"OrdStatus", label:"Situa\u00e7\u00e3o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$33$$) {
    return $bitex$ui$OrderManager$Status$$[$s$$33$$]
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-status"
  }}, {property:"AvgPx", label:"Pre\u00e7o", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-avg-price"
  }}, {property:"Volume", label:"Total", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-volume"
  }}, {property:"ClOrdID", label:"Actions", sortable:$JSCompiler_alias_FALSE$$, formatter:function($id$$8$$, $row_set_obj$$2$$) {
    var $attributes$$1$$ = {"class":"btn btn-mini btn-danger", "data-action":"cancel", "data-client-order-id":$id$$8$$};
    return $row_set_obj$$2$$ != $JSCompiler_alias_NULL$$ && ($attributes$$1$$["data-order-id"] = $row_set_obj$$2$$.OrderID, 0 == $row_set_obj$$2$$.LeavesQty) ? "" : $goog$dom$createDom$$("a", $attributes$$1$$, "cancel")
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-actions"
  }}];
  $opt_blinkDelay$$1_options$$10$$ = {rowIDFn:this.$getRowID$, rowClassFn:this.$getRowClass$, columns:[{property:"OrderID", label:"ID", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-order-id"
  }}, {property:"OrdStatus", label:"Situa\u00e7\u00e3o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$34$$) {
    return $bitex$ui$OrderManager$Status$$[$s$$34$$]
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-status"
  }}, {property:"Side", label:"C/V", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$35$$) {
    switch($s$$35$$) {
      case "1":
        return"Compra";
      case "2":
        return"Venda"
    }
    return""
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-side"
  }}, {property:"OrderQty", label:"Quantidade", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$36$$) {
    return($s$$36$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-order-qty"
  }}, {property:"Price", label:"Pre\u00e7o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$37$$) {
    return($s$$37$$ / 1E8).toFixed(5)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-price"
  }}, {property:"LeavesQty", label:"Qty. Pendente", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$38$$) {
    return($s$$38$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-leaves_qty"
  }}, {property:"CumQty", label:"Qtc. Executada", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$39$$) {
    return($s$$39$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-cum-qty"
  }}, {property:"AvgPx", label:"Pre\u00e7o M\u00e9dio", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$40$$) {
    return($s$$40$$ / 1E8).toFixed(5)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-avg-price"
  }}, {property:"ClOrdID", label:"Actions", sortable:$JSCompiler_alias_FALSE$$, formatter:function($id$$9$$, $row_set_obj$$3$$) {
    var $attributes$$2$$ = {"class":"btn btn-mini btn-danger", "data-action":"cancel", "data-client-order-id":$id$$9$$};
    return $row_set_obj$$3$$ != $JSCompiler_alias_NULL$$ && ($attributes$$2$$["data-order-id"] = $row_set_obj$$3$$.OrderID, 0 == $row_set_obj$$3$$.LeavesQty) ? "" : $goog$dom$createDom$$("a", $attributes$$2$$, "cancel")
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-actions"
  }}], title:"My orders", showSearch:$JSCompiler_alias_FALSE$$};
  "simple" == this.$mode_$ && ($opt_blinkDelay$$1_options$$10$$.columns = $grid_columns_simple_opt_mode$$);
  $bitex$ui$DataGrid$$.call(this, $opt_blinkDelay$$1_options$$10$$, $opt_domHelper$$19$$)
}
$goog$inherits$$($bitex$ui$OrderManager$$, $bitex$ui$DataGrid$$);
var $bitex$ui$OrderManager$Status$$ = {"-":"Pendente", 0:"Nova", 1:"Excec. Parcial", 2:"Excecutada", 4:"Cancelada"}, $bitex$ui$OrderManager$CSS_CLASS$$ = "order-manager";
$bitex$ui$OrderManager$$.prototype.$getCssClass$ = function $$bitex$ui$OrderManager$$$$$getCssClass$$() {
  return $bitex$ui$OrderManager$CSS_CLASS$$
};
$bitex$ui$OrderManager$$.prototype.$getRowID$ = function $$bitex$ui$OrderManager$$$$$getRowID$$($row_set$$5$$) {
  return $JSCompiler_StaticMethods_getId$$(this) + "_" + $row_set$$5$$.ClOrdID
};
$bitex$ui$OrderManager$$.prototype.$getRowClass$ = function $$bitex$ui$OrderManager$$$$$getRowClass$$($row_set$$6$$) {
  var $class_status$$2$$;
  switch($row_set$$6$$.OrdStatus) {
    case "-":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-pending";
      break;
    case "0":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-new";
      break;
    case "1":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-partial";
      break;
    case "2":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-fill";
      break;
    case "4":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-cancel"
  }
  return $class_status$$2$$
};
$bitex$ui$OrderManager$$.prototype.$enterDocument$ = function $$bitex$ui$OrderManager$$$$$enterDocument$$() {
  $bitex$ui$OrderManager$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", function($client_order_id$$1_e$$121$$) {
    var $order_id$$ = $client_order_id$$1_e$$121$$.target.getAttribute("data-order-id");
    $order_id$$ != $JSCompiler_alias_NULL$$ ? this.dispatchEvent(new $bitex$ui$OrderManagerEvent$$("cancel", $order_id$$)) : ($client_order_id$$1_e$$121$$ = $client_order_id$$1_e$$121$$.target.getAttribute("data-client-order-id"), this.dispatchEvent(new $bitex$ui$OrderManagerEvent$$("cancel", $JSCompiler_alias_VOID$$, $client_order_id$$1_e$$121$$)))
  })
};
function $bitex$ui$OrderManagerEvent$$($type$$105$$, $opt_order_id$$, $opt_client_order_id$$) {
  $goog$events$Event$$.call(this, $type$$105$$);
  this.$order_id$ = $opt_order_id$$;
  this.$client_order_id$ = $opt_client_order_id$$
}
$goog$inherits$$($bitex$ui$OrderManagerEvent$$, $goog$events$Event$$);
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$OrderManager$CSS_CLASS$$, function() {
  return new $bitex$ui$OrderManager$$
});
// Input 114
function $goog$ui$ControlRenderer$$() {
}
var $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$;
$goog$addSingletonGetter$$($goog$ui$ControlRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ControlRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($control$$) {
  var $element$$154$$ = $control$$.$getDomHelper$().$createDom$("div", $JSCompiler_StaticMethods_getClassNames$$(this, $control$$).join(" "), $control$$.$content_$);
  $JSCompiler_StaticMethods_setAriaStates$$(this, $control$$, $element$$154$$);
  return $element$$154$$
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$($element$$155$$) {
  return $element$$155$$
};
$JSCompiler_prototypeAlias$$.$enableClassName$ = function $$JSCompiler_prototypeAlias$$$$enableClassName$$($control$$1_element$$156$$, $className$$38$$, $enable$$9$$) {
  if($control$$1_element$$156$$ = $control$$1_element$$156$$.$getElement$ ? $control$$1_element$$156$$.$getElement$() : $control$$1_element$$156$$) {
    if($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
      var $combinedClasses$$ = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($goog$dom$classes$get$$($control$$1_element$$156$$), $className$$38$$);
      $combinedClasses$$.push($className$$38$$);
      $goog$partial$$($enable$$9$$ ? $goog$dom$classes$add$$ : $goog$dom$classes$remove$$, $control$$1_element$$156$$).apply($JSCompiler_alias_NULL$$, $combinedClasses$$)
    }else {
      $enable$$9$$ ? $goog$dom$classes$add$$($control$$1_element$$156$$, $className$$38$$) : $goog$dom$classes$remove$$($control$$1_element$$156$$, $className$$38$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($control$$3$$, $element$$158$$) {
  $element$$158$$.id && $JSCompiler_StaticMethods_setId$$($control$$3$$, $element$$158$$.id);
  var $contentElem_hasCombinedClassName$$ = this.$getContentElement$($element$$158$$);
  $contentElem_hasCombinedClassName$$ && $contentElem_hasCombinedClassName$$.firstChild ? $control$$3$$.$setContentInternal$($contentElem_hasCombinedClassName$$.firstChild.nextSibling ? $goog$array$toArray$$($contentElem_hasCombinedClassName$$.childNodes) : $contentElem_hasCombinedClassName$$.firstChild) : $control$$3$$.$setContentInternal$($JSCompiler_alias_NULL$$);
  var $state$$3$$ = 0, $rendererClassName$$ = this.$getCssClass$(), $structuralClassName$$ = this.$getCssClass$(), $hasRendererClassName$$ = $JSCompiler_alias_FALSE$$, $hasStructuralClassName$$ = $JSCompiler_alias_FALSE$$, $contentElem_hasCombinedClassName$$ = $JSCompiler_alias_FALSE$$, $classNames$$2$$ = $goog$dom$classes$get$$($element$$158$$);
  $goog$array$forEach$$($classNames$$2$$, function($className$$40_state$$inline_635$$) {
    if(!$hasRendererClassName$$ && $className$$40_state$$inline_635$$ == $rendererClassName$$) {
      $hasRendererClassName$$ = $JSCompiler_alias_TRUE$$, $structuralClassName$$ == $rendererClassName$$ && ($hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$)
    }else {
      if(!$hasStructuralClassName$$ && $className$$40_state$$inline_635$$ == $structuralClassName$$) {
        $hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$
      }else {
        var $JSCompiler_temp_const$$27$$ = $state$$3$$;
        if(!this.$stateByClass_$) {
          this.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$(this);
          var $obj$$inline_1235$$ = this.$classByState_$, $transposed$$inline_1236$$ = {}, $key$$inline_1237$$;
          for($key$$inline_1237$$ in $obj$$inline_1235$$) {
            $transposed$$inline_1236$$[$obj$$inline_1235$$[$key$$inline_1237$$]] = $key$$inline_1237$$
          }
          this.$stateByClass_$ = $transposed$$inline_1236$$
        }
        $className$$40_state$$inline_635$$ = parseInt(this.$stateByClass_$[$className$$40_state$$inline_635$$], 10);
        $state$$3$$ = $JSCompiler_temp_const$$27$$ | (isNaN($className$$40_state$$inline_635$$) ? 0 : $className$$40_state$$inline_635$$)
      }
    }
  }, this);
  $control$$3$$.$state_$ = $state$$3$$;
  $hasRendererClassName$$ || ($classNames$$2$$.push($rendererClassName$$), $structuralClassName$$ == $rendererClassName$$ && ($hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$));
  $hasStructuralClassName$$ || $classNames$$2$$.push($structuralClassName$$);
  var $extraClassNames$$ = $control$$3$$.$extraClassNames_$;
  $extraClassNames$$ && $classNames$$2$$.push.apply($classNames$$2$$, $extraClassNames$$);
  if($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
    var $combinedClasses$$1$$ = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classNames$$2$$);
    0 < $combinedClasses$$1$$.length && ($classNames$$2$$.push.apply($classNames$$2$$, $combinedClasses$$1$$), $contentElem_hasCombinedClassName$$ = $JSCompiler_alias_TRUE$$)
  }
  if(!$hasRendererClassName$$ || !$hasStructuralClassName$$ || $extraClassNames$$ || $contentElem_hasCombinedClassName$$) {
    $element$$158$$.className = $classNames$$2$$.join(" ")
  }
  $JSCompiler_StaticMethods_setAriaStates$$(this, $control$$3$$, $element$$158$$);
  return $element$$158$$
};
$JSCompiler_prototypeAlias$$.$initializeDom$ = function $$JSCompiler_prototypeAlias$$$$initializeDom$$($control$$4$$) {
  $control$$4$$.$isRightToLeft$() && this.$setRightToLeft$($control$$4$$.$getElement$(), $JSCompiler_alias_TRUE$$);
  $control$$4$$.isEnabled() && this.$setFocusable$($control$$4$$, $control$$4$$.$visible_$)
};
function $JSCompiler_StaticMethods_setAriaStates$$($JSCompiler_StaticMethods_setAriaStates$self$$, $control$$5$$, $element$$160$$) {
  $control$$5$$.$visible_$ || $goog$a11y$aria$setState$$($element$$160$$, "hidden", !$control$$5$$.$visible_$);
  $control$$5$$.isEnabled() || $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$160$$, 1, !$control$$5$$.isEnabled());
  $control$$5$$.$supportedStates_$ & 8 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$160$$, 8, !!($control$$5$$.$state_$ & 8));
  $control$$5$$.$supportedStates_$ & 16 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$160$$, 16, !!($control$$5$$.$state_$ & 16));
  $control$$5$$.$supportedStates_$ & 64 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$160$$, 64, $control$$5$$.$isOpen$())
}
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function $$JSCompiler_prototypeAlias$$$$setAllowTextSelection$$($element$$161$$, $allow$$) {
  var $unselectable$$inline_644_value$$inline_647$$ = !$allow$$, $descendants$$inline_646$$ = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ ? $element$$161$$.getElementsByTagName("*") : $JSCompiler_alias_NULL$$;
  if($goog$style$unselectableStyle_$$) {
    if($unselectable$$inline_644_value$$inline_647$$ = $unselectable$$inline_644_value$$inline_647$$ ? "none" : "", $element$$161$$.style[$goog$style$unselectableStyle_$$] = $unselectable$$inline_644_value$$inline_647$$, $descendants$$inline_646$$) {
      for(var $i$$inline_648$$ = 0, $descendant$$inline_649$$;$descendant$$inline_649$$ = $descendants$$inline_646$$[$i$$inline_648$$];$i$$inline_648$$++) {
        $descendant$$inline_649$$.style[$goog$style$unselectableStyle_$$] = $unselectable$$inline_644_value$$inline_647$$
      }
    }
  }else {
    if($goog$userAgent$IE$$ || $goog$userAgent$OPERA$$) {
      if($unselectable$$inline_644_value$$inline_647$$ = $unselectable$$inline_644_value$$inline_647$$ ? "on" : "", $element$$161$$.setAttribute("unselectable", $unselectable$$inline_644_value$$inline_647$$), $descendants$$inline_646$$) {
        for($i$$inline_648$$ = 0;$descendant$$inline_649$$ = $descendants$$inline_646$$[$i$$inline_648$$];$i$$inline_648$$++) {
          $descendant$$inline_649$$.setAttribute("unselectable", $unselectable$$inline_644_value$$inline_647$$)
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($element$$162$$, $rightToLeft$$2$$) {
  this.$enableClassName$($element$$162$$, this.$getCssClass$() + "-rtl", $rightToLeft$$2$$)
};
$JSCompiler_prototypeAlias$$.$isFocusable$ = function $$JSCompiler_prototypeAlias$$$$isFocusable$$($control$$6$$) {
  var $keyTarget$$;
  return $control$$6$$.$supportedStates_$ & 32 && ($keyTarget$$ = $control$$6$$.$getKeyEventTarget$()) ? $goog$dom$isFocusableTabIndex$$($keyTarget$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$setFocusable$ = function $$JSCompiler_prototypeAlias$$$$setFocusable$$($control$$7$$, $focusable$$) {
  var $keyTarget$$1$$;
  if($control$$7$$.$supportedStates_$ & 32 && ($keyTarget$$1$$ = $control$$7$$.$getKeyEventTarget$())) {
    if(!$focusable$$ && $control$$7$$.$state_$ & 32) {
      try {
        $keyTarget$$1$$.blur()
      }catch($e$$122$$) {
      }
      $control$$7$$.$state_$ & 32 && $control$$7$$.$handleBlur$()
    }
    $goog$dom$isFocusableTabIndex$$($keyTarget$$1$$) != $focusable$$ && $goog$dom$setFocusableTabIndex$$($keyTarget$$1$$, $focusable$$)
  }
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($element$$163$$, $visible$$4$$) {
  $goog$style$showElement$$($element$$163$$, $visible$$4$$);
  $element$$163$$ && $goog$a11y$aria$setState$$($element$$163$$, "hidden", !$visible$$4$$)
};
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($control$$8$$, $state$$4$$, $enable$$11$$) {
  var $element$$164$$ = $control$$8$$.$getElement$();
  if($element$$164$$) {
    var $className$$41$$ = $JSCompiler_StaticMethods_getClassForState$$(this, $state$$4$$);
    $className$$41$$ && this.$enableClassName$($control$$8$$, $className$$41$$, $enable$$11$$);
    this.$updateAriaState$($element$$164$$, $state$$4$$, $enable$$11$$)
  }
};
$JSCompiler_prototypeAlias$$.$updateAriaState$ = function $$JSCompiler_prototypeAlias$$$$updateAriaState$$($element$$165$$, $ariaState_state$$5$$, $enable$$12$$) {
  $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ || ($goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  ($ariaState_state$$5$$ = $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$[$ariaState_state$$5$$]) && $goog$a11y$aria$setState$$($element$$165$$, $ariaState_state$$5$$, $enable$$12$$)
};
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($element$$166$$, $content$$14$$) {
  var $contentElem$$1$$ = this.$getContentElement$($element$$166$$);
  if($contentElem$$1$$ && ($goog$dom$removeChildren$$($contentElem$$1$$), $content$$14$$)) {
    if($goog$isString$$($content$$14$$)) {
      $goog$dom$setTextContent$$($contentElem$$1$$, $content$$14$$)
    }else {
      var $childHandler$$1$$ = function $$childHandler$$1$$$($child$$16$$) {
        if($child$$16$$) {
          var $doc$$42$$ = $goog$dom$getOwnerDocument$$($contentElem$$1$$);
          $contentElem$$1$$.appendChild($goog$isString$$($child$$16$$) ? $doc$$42$$.createTextNode($child$$16$$) : $child$$16$$)
        }
      };
      $goog$isArray$$($content$$14$$) ? $goog$array$forEach$$($content$$14$$, $childHandler$$1$$) : $goog$isArrayLike$$($content$$14$$) && !("nodeType" in $content$$14$$) ? $goog$array$forEach$$($goog$array$toArray$$($content$$14$$), $childHandler$$1$$) : $childHandler$$1$$($content$$14$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function $$JSCompiler_prototypeAlias$$$$getKeyEventTarget$$($control$$9$$) {
  return $control$$9$$.$getElement$()
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-control");
function $JSCompiler_StaticMethods_getClassNames$$($JSCompiler_StaticMethods_getClassNames$self$$, $control$$10$$) {
  var $cssClass_extraClassNames$$1_state$$inline_652$$ = $JSCompiler_StaticMethods_getClassNames$self$$.$getCssClass$(), $classNames$$3$$ = [$cssClass_extraClassNames$$1_state$$inline_652$$], $classNames$$inline_653_structuralCssClass$$ = $JSCompiler_StaticMethods_getClassNames$self$$.$getCssClass$();
  $classNames$$inline_653_structuralCssClass$$ != $cssClass_extraClassNames$$1_state$$inline_652$$ && $classNames$$3$$.push($classNames$$inline_653_structuralCssClass$$);
  $cssClass_extraClassNames$$1_state$$inline_652$$ = $control$$10$$.$getState$();
  for($classNames$$inline_653_structuralCssClass$$ = [];$cssClass_extraClassNames$$1_state$$inline_652$$;) {
    var $mask$$inline_654$$ = $cssClass_extraClassNames$$1_state$$inline_652$$ & -$cssClass_extraClassNames$$1_state$$inline_652$$;
    $classNames$$inline_653_structuralCssClass$$.push($JSCompiler_StaticMethods_getClassForState$$($JSCompiler_StaticMethods_getClassNames$self$$, $mask$$inline_654$$));
    $cssClass_extraClassNames$$1_state$$inline_652$$ &= ~$mask$$inline_654$$
  }
  $classNames$$3$$.push.apply($classNames$$3$$, $classNames$$inline_653_structuralCssClass$$);
  ($cssClass_extraClassNames$$1_state$$inline_652$$ = $control$$10$$.$extraClassNames_$) && $classNames$$3$$.push.apply($classNames$$3$$, $cssClass_extraClassNames$$1_state$$inline_652$$);
  $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7") && $classNames$$3$$.push.apply($classNames$$3$$, $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classNames$$3$$));
  return $classNames$$3$$
}
function $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classes$$9$$, $opt_includedClass$$) {
  var $toAdd$$ = [];
  $opt_includedClass$$ && ($classes$$9$$ = $classes$$9$$.concat([$opt_includedClass$$]));
  $goog$array$forEach$$([], function($combo$$) {
    $goog$array$every$$($combo$$, $goog$partial$$($goog$array$contains$$, $classes$$9$$)) && (!$opt_includedClass$$ || $goog$array$contains$$($combo$$, $opt_includedClass$$)) && $toAdd$$.push($combo$$.join("_"))
  });
  return $toAdd$$
}
function $JSCompiler_StaticMethods_getClassForState$$($JSCompiler_StaticMethods_getClassForState$self$$, $state$$7$$) {
  $JSCompiler_StaticMethods_getClassForState$self$$.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$($JSCompiler_StaticMethods_getClassForState$self$$);
  return $JSCompiler_StaticMethods_getClassForState$self$$.$classByState_$[$state$$7$$]
}
function $JSCompiler_StaticMethods_createClassByStateMap_$$($JSCompiler_StaticMethods_createClassByStateMap_$self$$) {
  var $baseClass$$ = $JSCompiler_StaticMethods_createClassByStateMap_$self$$.$getCssClass$();
  $JSCompiler_StaticMethods_createClassByStateMap_$self$$.$classByState_$ = {1:$baseClass$$ + "-disabled", 2:$baseClass$$ + "-hover", 4:$baseClass$$ + "-active", 8:$baseClass$$ + "-selected", 16:$baseClass$$ + "-checked", 32:$baseClass$$ + "-focused", 64:$baseClass$$ + "-open"}
}
;
// Input 115
// Input 116
// Input 117
function $goog$ui$Control$$($content$$15$$, $JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$, $opt_domHelper$$20$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$20$$);
  if(!$JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$) {
    $JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$ = this.constructor;
    for(var $key$$inline_657_rendererCtor$$inline_658$$;$JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$;) {
      $key$$inline_657_rendererCtor$$inline_658$$ = $goog$getUid$$($JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$);
      if($key$$inline_657_rendererCtor$$inline_658$$ = $goog$ui$registry$defaultRenderers_$$[$key$$inline_657_rendererCtor$$inline_658$$]) {
        break
      }
      $JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$ = $JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$.$superClass_$ ? $JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$.$superClass_$.constructor : $JSCompiler_alias_NULL$$
    }
    $JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$ = $key$$inline_657_rendererCtor$$inline_658$$ ? $goog$isFunction$$($key$$inline_657_rendererCtor$$inline_658$$.$getInstance$) ? $key$$inline_657_rendererCtor$$inline_658$$.$getInstance$() : new $key$$inline_657_rendererCtor$$inline_658$$ : $JSCompiler_alias_NULL$$
  }
  this.$renderer_$ = $JSCompiler_temp$$52_componentCtor$$inline_656_opt_renderer$$;
  this.$setContentInternal$($content$$15$$)
}
$goog$inherits$$($goog$ui$Control$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Control$$.prototype;
$JSCompiler_prototypeAlias$$.$content_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$state_$ = 0;
$JSCompiler_prototypeAlias$$.$supportedStates_$ = 39;
$JSCompiler_prototypeAlias$$.$autoStates_$ = 255;
$JSCompiler_prototypeAlias$$.$statesWithTransitionEvents_$ = 0;
$JSCompiler_prototypeAlias$$.$visible_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$extraClassNames_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$handleMouseEvents_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$allowTextSelection_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$preferredAriaRole_$ = $JSCompiler_alias_NULL$$;
function $JSCompiler_StaticMethods_setHandleMouseEvents$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$inDocument_$ && $JSCompiler_alias_FALSE$$ != $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ = $JSCompiler_alias_FALSE$$
}
$JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function $$JSCompiler_prototypeAlias$$$$getKeyEventTarget$$() {
  return this.$renderer_$.$getKeyEventTarget$(this)
};
$JSCompiler_prototypeAlias$$.$enableClassName$ = function $$JSCompiler_prototypeAlias$$$$enableClassName$$($className$$45$$, $enable$$14$$) {
  $enable$$14$$ ? $className$$45$$ && (this.$extraClassNames_$ ? $goog$array$contains$$(this.$extraClassNames_$, $className$$45$$) || this.$extraClassNames_$.push($className$$45$$) : this.$extraClassNames_$ = [$className$$45$$], this.$renderer_$.$enableClassName$(this, $className$$45$$, $JSCompiler_alias_TRUE$$)) : $className$$45$$ && this.$extraClassNames_$ && ($goog$array$remove$$(this.$extraClassNames_$, $className$$45$$), 0 == this.$extraClassNames_$.length && (this.$extraClassNames_$ = $JSCompiler_alias_NULL$$), 
  this.$renderer_$.$enableClassName$(this, $className$$45$$, $JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $element$$168$$ = this.$renderer_$.$createDom$(this);
  this.$element_$ = $element$$168$$;
  var $ariaRole$$inline_682$$ = this.$preferredAriaRole_$ || this.$renderer_$.$getAriaRole$();
  $ariaRole$$inline_682$$ && $element$$168$$.setAttribute("role", $ariaRole$$inline_682$$);
  this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$($element$$168$$, $JSCompiler_alias_FALSE$$);
  this.$visible_$ || this.$renderer_$.$setVisible$($element$$168$$, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  return this.$renderer_$.$getContentElement$(this.$getElement$())
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$169$$) {
  return this.$renderer_$.$canDecorate$($element$$169$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$170$$) {
  this.$element_$ = $element$$170$$ = this.$renderer_$.$decorate$(this, $element$$170$$);
  var $ariaRole$$inline_690$$ = this.$preferredAriaRole_$ || this.$renderer_$.$getAriaRole$();
  $ariaRole$$inline_690$$ && $element$$170$$.setAttribute("role", $ariaRole$$inline_690$$);
  this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$($element$$170$$, $JSCompiler_alias_FALSE$$);
  this.$visible_$ = "none" != $element$$170$$.style.display
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Control$$.$superClass_$.$enterDocument$.call(this);
  this.$renderer_$.$initializeDom$(this);
  if(this.$supportedStates_$ & -2 && (this.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$(this, $JSCompiler_alias_TRUE$$), this.$supportedStates_$ & 32)) {
    var $keyTarget$$2$$ = this.$getKeyEventTarget$();
    if($keyTarget$$2$$) {
      var $keyHandler$$ = this.$keyHandler_$ || (this.$keyHandler_$ = new $goog$events$KeyHandler$$);
      $JSCompiler_StaticMethods_attach$$($keyHandler$$, $keyTarget$$2$$);
      $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $keyHandler$$, "key", this.$handleKeyEvent$), $keyTarget$$2$$, "focus", this.$handleFocus$), $keyTarget$$2$$, "blur", this.$handleBlur$)
    }
  }
};
function $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_enableMouseEventHandling_$self$$, $enable$$15$$) {
  var $handler$$58$$ = $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$getHandler$(), $element$$171$$ = $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$getElement$();
  $enable$$15$$ ? ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($handler$$58$$, $element$$171$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$), $element$$171$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$), $element$$171$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$), $element$$171$$, 
  "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$), $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$ != $goog$nullFunction$$ && $JSCompiler_StaticMethods_listen$$($handler$$58$$, $element$$171$$, "contextmenu", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_listen$$($handler$$58$$, $element$$171$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$)) : 
  ($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($handler$$58$$, $element$$171$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$), $element$$171$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$), $element$$171$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$), $element$$171$$, 
  "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$), $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$ != $goog$nullFunction$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$58$$, $element$$171$$, "contextmenu", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$58$$, $element$$171$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$))
}
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$Control$$.$superClass_$.$exitDocument$.call(this);
  this.$keyHandler_$ && this.$keyHandler_$.detach();
  this.$visible_$ && this.isEnabled() && this.$renderer_$.$setFocusable$(this, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Control$$.$superClass_$.$disposeInternal$.call(this);
  this.$keyHandler_$ && (this.$keyHandler_$.$dispose$(), delete this.$keyHandler_$);
  delete this.$renderer_$;
  this.$extraClassNames_$ = this.$content_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($content$$16$$) {
  this.$renderer_$.$setContent$(this.$getElement$(), $content$$16$$);
  this.$setContentInternal$($content$$16$$)
};
$JSCompiler_prototypeAlias$$.$setContentInternal$ = $JSCompiler_set$$("$content_$");
function $JSCompiler_StaticMethods_getCaption$$($JSCompiler_StaticMethods_getCaption$self_content$$18$$) {
  $JSCompiler_StaticMethods_getCaption$self_content$$18$$ = $JSCompiler_StaticMethods_getCaption$self_content$$18$$.$content_$;
  return!$JSCompiler_StaticMethods_getCaption$self_content$$18$$ ? "" : ($goog$isString$$($JSCompiler_StaticMethods_getCaption$self_content$$18$$) ? $JSCompiler_StaticMethods_getCaption$self_content$$18$$ : $goog$isArray$$($JSCompiler_StaticMethods_getCaption$self_content$$18$$) ? $goog$array$map$$($JSCompiler_StaticMethods_getCaption$self_content$$18$$, $goog$dom$getRawTextContent$$).join("") : $goog$dom$getTextContent$$($JSCompiler_StaticMethods_getCaption$self_content$$18$$)).replace(/[\t\r\n ]+/g, 
  " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($rightToLeft$$3$$) {
  $goog$ui$Control$$.$superClass_$.$setRightToLeft$.call(this, $rightToLeft$$3$$);
  var $element$$172$$ = this.$getElement$();
  $element$$172$$ && this.$renderer_$.$setRightToLeft$($element$$172$$, $rightToLeft$$3$$)
};
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function $$JSCompiler_prototypeAlias$$$$setAllowTextSelection$$($allow$$1$$) {
  this.$allowTextSelection_$ = $allow$$1$$;
  var $element$$173$$ = this.$getElement$();
  $element$$173$$ && this.$renderer_$.$setAllowTextSelection$($element$$173$$, $allow$$1$$)
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($visible$$5$$, $opt_force$$) {
  if($opt_force$$ || this.$visible_$ != $visible$$5$$ && this.dispatchEvent($visible$$5$$ ? "show" : "hide")) {
    var $element$$174$$ = this.$getElement$();
    $element$$174$$ && this.$renderer_$.$setVisible$($element$$174$$, $visible$$5$$);
    this.isEnabled() && this.$renderer_$.$setFocusable$(this, $visible$$5$$);
    this.$visible_$ = $visible$$5$$;
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!(this.$state_$ & 1)
};
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enable$$16$$) {
  var $parent$$inline_693$$ = this.getParent();
  if((!$parent$$inline_693$$ || "function" != typeof $parent$$inline_693$$.isEnabled || $parent$$inline_693$$.isEnabled()) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 1, !$enable$$16$$)) {
    $enable$$16$$ || (this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_FALSE$$)), this.$visible_$ && this.$renderer_$.$setFocusable$(this, $enable$$16$$), this.$setState$(1, !$enable$$16$$)
  }
};
function $JSCompiler_StaticMethods_setHighlighted$$($JSCompiler_StaticMethods_setHighlighted$self$$, $highlight$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$($JSCompiler_StaticMethods_setHighlighted$self$$, 2, $highlight$$) && $JSCompiler_StaticMethods_setHighlighted$self$$.$setState$(2, $highlight$$)
}
$JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
  return!!(this.$state_$ & 4)
};
$JSCompiler_prototypeAlias$$.setActive = function $$JSCompiler_prototypeAlias$$$setActive$($active$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 4, $active$$) && this.$setState$(4, $active$$)
};
$JSCompiler_prototypeAlias$$.$isOpen$ = function $$JSCompiler_prototypeAlias$$$$isOpen$$() {
  return!!(this.$state_$ & 64)
};
$JSCompiler_prototypeAlias$$.$getState$ = $JSCompiler_get$$("$state_$");
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($state$$10$$, $enable$$17$$) {
  this.$supportedStates_$ & $state$$10$$ && $enable$$17$$ != !!(this.$state_$ & $state$$10$$) && (this.$renderer_$.$setState$(this, $state$$10$$, $enable$$17$$), this.$state_$ = $enable$$17$$ ? this.$state_$ | $state$$10$$ : this.$state_$ & ~$state$$10$$)
};
function $JSCompiler_StaticMethods_setSupportedState$$($JSCompiler_StaticMethods_setSupportedState$self$$) {
  $JSCompiler_StaticMethods_setSupportedState$self$$.$inDocument_$ && $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & 32 && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & 32 && $JSCompiler_StaticMethods_setSupportedState$self$$.$setState$(32, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setSupportedState$self$$.$supportedStates_$ &= -33
}
function $JSCompiler_StaticMethods_isAutoState$$($JSCompiler_StaticMethods_isAutoState$self$$, $state$$14$$) {
  return!!($JSCompiler_StaticMethods_isAutoState$self$$.$autoStates_$ & $state$$14$$) && !!($JSCompiler_StaticMethods_isAutoState$self$$.$supportedStates_$ & $state$$14$$)
}
function $JSCompiler_StaticMethods_isTransitionAllowed$$($JSCompiler_StaticMethods_isTransitionAllowed$self$$, $state$$16$$, $enable$$20$$) {
  return!!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$supportedStates_$ & $state$$16$$) && !!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$state_$ & $state$$16$$) != $enable$$20$$ && (!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$statesWithTransitionEvents_$ & $state$$16$$) || $JSCompiler_StaticMethods_isTransitionAllowed$self$$.dispatchEvent($goog$ui$Component$getStateTransitionEvent$$($state$$16$$, $enable$$20$$))) && !$JSCompiler_StaticMethods_isTransitionAllowed$self$$.$disposed_$
}
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$($e$$123$$) {
  (!$e$$123$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $e$$123$$.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && $JSCompiler_StaticMethods_isAutoState$$(this, 2)) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$($e$$124$$) {
  if((!$e$$124$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $e$$124$$.relatedTarget)) && this.dispatchEvent("leave")) {
    $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$handleContextMenu$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$handleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleMouseDown$$($e$$126$$) {
  this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_isMouseActionButton$$($e$$126$$) && ($JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_TRUE$$), this.$renderer_$.$isFocusable$(this) && this.$getKeyEventTarget$().focus()));
  !this.$allowTextSelection_$ && $JSCompiler_StaticMethods_isMouseActionButton$$($e$$126$$) && $e$$126$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($e$$127$$) {
  this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), this.$isActive$() && (this.$performActionInternal$($e$$127$$) && $JSCompiler_StaticMethods_isAutoState$$(this, 4)) && this.setActive($JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$handleDblClick$ = function $$JSCompiler_prototypeAlias$$$$handleDblClick$$($e$$128$$) {
  this.isEnabled() && this.$performActionInternal$($e$$128$$)
};
$JSCompiler_prototypeAlias$$.$performActionInternal$ = function $$JSCompiler_prototypeAlias$$$$performActionInternal$$($e$$129$$) {
  if($JSCompiler_StaticMethods_isAutoState$$(this, 16)) {
    var $actionEvent_check$$inline_696_open$$inline_702$$ = !(this.$state_$ & 16);
    $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 16, $actionEvent_check$$inline_696_open$$inline_702$$) && this.$setState$(16, $actionEvent_check$$inline_696_open$$inline_702$$)
  }
  $JSCompiler_StaticMethods_isAutoState$$(this, 8) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 8, $JSCompiler_alias_TRUE$$) && this.$setState$(8, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_isAutoState$$(this, 64) && ($actionEvent_check$$inline_696_open$$inline_702$$ = !this.$isOpen$(), $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 64, $actionEvent_check$$inline_696_open$$inline_702$$) && this.$setState$(64, $actionEvent_check$$inline_696_open$$inline_702$$));
  $actionEvent_check$$inline_696_open$$inline_702$$ = new $goog$events$Event$$("action", this);
  $e$$129$$ && ($actionEvent_check$$inline_696_open$$inline_702$$.altKey = $e$$129$$.altKey, $actionEvent_check$$inline_696_open$$inline_702$$.ctrlKey = $e$$129$$.ctrlKey, $actionEvent_check$$inline_696_open$$inline_702$$.metaKey = $e$$129$$.metaKey, $actionEvent_check$$inline_696_open$$inline_702$$.shiftKey = $e$$129$$.shiftKey, $actionEvent_check$$inline_696_open$$inline_702$$.$platformModifierKey$ = $e$$129$$.$platformModifierKey$);
  return this.dispatchEvent($actionEvent_check$$inline_696_open$$inline_702$$)
};
$JSCompiler_prototypeAlias$$.$handleFocus$ = function $$JSCompiler_prototypeAlias$$$$handleFocus$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_TRUE$$) && this.$setState$(32, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$handleBlur$ = function $$JSCompiler_prototypeAlias$$$$handleBlur$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_FALSE$$) && this.$setState$(32, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$handleKeyEvent$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEvent$$($e$$132$$) {
  return this.$visible_$ && this.isEnabled() && this.$handleKeyEventInternal$($e$$132$$) ? ($e$$132$$.preventDefault(), $e$$132$$.stopPropagation(), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$handleKeyEventInternal$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEventInternal$$($e$$133$$) {
  return $e$$133$$.keyCode == $goog$events$KeyCodes$ENTER$$ && this.$performActionInternal$($e$$133$$)
};
$goog$isFunction$$($goog$ui$Control$$) || $JSCompiler_alias_THROW$$(Error("Invalid component class " + $goog$ui$Control$$));
$goog$isFunction$$($goog$ui$ControlRenderer$$) || $JSCompiler_alias_THROW$$(Error("Invalid renderer class " + $goog$ui$ControlRenderer$$));
var $key$$inline_712$$ = $goog$getUid$$($goog$ui$Control$$);
$goog$ui$registry$defaultRenderers_$$[$key$$inline_712$$] = $goog$ui$ControlRenderer$$;
$goog$ui$registry$setDecoratorByClassName$$("goog-control", function() {
  return new $goog$ui$Control$$($JSCompiler_alias_NULL$$)
});
// Input 118
// Input 119
function $goog$ui$ButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$ButtonRenderer$$, $goog$ui$ControlRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ButtonRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ButtonRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_returnArg$$("button");
$JSCompiler_prototypeAlias$$.$updateAriaState$ = function $$JSCompiler_prototypeAlias$$$$updateAriaState$$($element$$175$$, $state$$17$$, $enable$$21$$) {
  16 == $state$$17$$ ? $goog$a11y$aria$setState$$($element$$175$$, "pressed", $enable$$21$$) : $goog$ui$ButtonRenderer$$.$superClass_$.$updateAriaState$.call(this, $element$$175$$, $state$$17$$, $enable$$21$$)
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($button$$9$$) {
  var $element$$176$$ = $goog$ui$ButtonRenderer$$.$superClass_$.$createDom$.call(this, $button$$9$$), $tooltip_value$$151$$ = $button$$9$$.$getTooltip$();
  $tooltip_value$$151$$ && this.$setTooltip$($element$$176$$, $tooltip_value$$151$$);
  ($tooltip_value$$151$$ = $button$$9$$.$getValue$()) && this.$setValue$($element$$176$$, $tooltip_value$$151$$);
  $button$$9$$.$supportedStates_$ & 16 && this.$updateAriaState$($element$$176$$, 16, !!($button$$9$$.$state_$ & 16));
  return $element$$176$$
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($button$$10$$, $element$$177$$) {
  $element$$177$$ = $goog$ui$ButtonRenderer$$.$superClass_$.$decorate$.call(this, $button$$10$$, $element$$177$$);
  var $value$$inline_715$$ = this.$getValue$($element$$177$$);
  $button$$10$$.$value_$ = $value$$inline_715$$;
  $button$$10$$.$tooltip_$ = this.$getTooltip$($element$$177$$);
  $button$$10$$.$supportedStates_$ & 16 && this.$updateAriaState$($element$$177$$, 16, !!($button$$10$$.$state_$ & 16));
  return $element$$177$$
};
$JSCompiler_prototypeAlias$$.$getValue$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setValue$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($element$$178$$) {
  return $element$$178$$.title
};
$JSCompiler_prototypeAlias$$.$setTooltip$ = function $$JSCompiler_prototypeAlias$$$$setTooltip$$($element$$179$$, $tooltip$$1$$) {
  $element$$179$$ && ($element$$179$$.title = $tooltip$$1$$ || "")
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-button");
// Input 120
function $goog$ui$NativeButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$NativeButtonRenderer$$, $goog$ui$ButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$NativeButtonRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$NativeButtonRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($button$$12$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($button$$12$$);
  $button$$12$$.$autoStates_$ &= -256;
  $JSCompiler_StaticMethods_setSupportedState$$($button$$12$$);
  return $button$$12$$.$getDomHelper$().$createDom$("button", {"class":$JSCompiler_StaticMethods_getClassNames$$(this, $button$$12$$).join(" "), disabled:!$button$$12$$.isEnabled(), title:$button$$12$$.$getTooltip$() || "", value:$button$$12$$.$getValue$() || ""}, $JSCompiler_StaticMethods_getCaption$$($button$$12$$) || "")
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$180$$) {
  return"BUTTON" == $element$$180$$.tagName || "INPUT" == $element$$180$$.tagName && ("button" == $element$$180$$.type || "submit" == $element$$180$$.type || "reset" == $element$$180$$.type)
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($button$$13$$, $element$$181$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($button$$13$$);
  $button$$13$$.$autoStates_$ &= -256;
  $JSCompiler_StaticMethods_setSupportedState$$($button$$13$$);
  $element$$181$$.disabled && $goog$dom$classes$add$$($element$$181$$, $JSCompiler_StaticMethods_getClassForState$$(this, 1));
  return $goog$ui$NativeButtonRenderer$$.$superClass_$.$decorate$.call(this, $button$$13$$, $element$$181$$)
};
$JSCompiler_prototypeAlias$$.$initializeDom$ = function $$JSCompiler_prototypeAlias$$$$initializeDom$$($button$$14$$) {
  $JSCompiler_StaticMethods_listen$$($button$$14$$.$getHandler$(), $button$$14$$.$getElement$(), "click", $button$$14$$.$performActionInternal$)
};
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$isFocusable$ = function $$JSCompiler_prototypeAlias$$$$isFocusable$$($button$$15$$) {
  return $button$$15$$.isEnabled()
};
$JSCompiler_prototypeAlias$$.$setFocusable$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($button$$16_element$$182$$, $state$$18$$, $enable$$22$$) {
  $goog$ui$NativeButtonRenderer$$.$superClass_$.$setState$.call(this, $button$$16_element$$182$$, $state$$18$$, $enable$$22$$);
  if(($button$$16_element$$182$$ = $button$$16_element$$182$$.$getElement$()) && 1 == $state$$18$$) {
    $button$$16_element$$182$$.disabled = $enable$$22$$
  }
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$($element$$183$$) {
  return $element$$183$$.value
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($element$$184$$, $value$$152$$) {
  $element$$184$$ && ($element$$184$$.value = $value$$152$$)
};
$JSCompiler_prototypeAlias$$.$updateAriaState$ = $goog$nullFunction$$;
// Input 121
function $goog$ui$Button$$($content$$19$$, $opt_renderer$$1$$, $opt_domHelper$$21$$) {
  $goog$ui$Control$$.call(this, $content$$19$$, $opt_renderer$$1$$ || $goog$ui$NativeButtonRenderer$$.$getInstance$(), $opt_domHelper$$21$$)
}
$goog$inherits$$($goog$ui$Button$$, $goog$ui$Control$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Button$$.prototype;
$JSCompiler_prototypeAlias$$.$getValue$ = $JSCompiler_get$$("$value_$");
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($value$$153$$) {
  this.$value_$ = $value$$153$$;
  this.$renderer_$.$setValue$(this.$getElement$(), $value$$153$$)
};
$JSCompiler_prototypeAlias$$.$getTooltip$ = $JSCompiler_get$$("$tooltip_$");
$JSCompiler_prototypeAlias$$.$setTooltip$ = function $$JSCompiler_prototypeAlias$$$$setTooltip$$($tooltip$$2$$) {
  this.$tooltip_$ = $tooltip$$2$$;
  this.$renderer_$.$setTooltip$(this.$getElement$(), $tooltip$$2$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Button$$.$superClass_$.$disposeInternal$.call(this);
  delete this.$value_$;
  delete this.$tooltip_$
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Button$$.$superClass_$.$enterDocument$.call(this);
  if(this.$supportedStates_$ & 32) {
    var $keyTarget$$3$$ = this.$getKeyEventTarget$();
    $keyTarget$$3$$ && $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $keyTarget$$3$$, "keyup", this.$handleKeyEventInternal$)
  }
};
$JSCompiler_prototypeAlias$$.$handleKeyEventInternal$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEventInternal$$($e$$134$$) {
  return $e$$134$$.keyCode == $goog$events$KeyCodes$ENTER$$ && "key" == $e$$134$$.type || $e$$134$$.keyCode == $goog$events$KeyCodes$SPACE$$ && "keyup" == $e$$134$$.type ? this.$performActionInternal$($e$$134$$) : $e$$134$$.keyCode == $goog$events$KeyCodes$SPACE$$
};
$goog$ui$registry$setDecoratorByClassName$$("goog-button", function() {
  return new $goog$ui$Button$$($JSCompiler_alias_NULL$$)
});
// Input 122
function $bitex$ui$withdraw_methods$templates$WithdrawMethods$$($currList62_opt_data$$38$$) {
  var $output$$34$$;
  $output$$34$$ = "" + ('<div class="row-fluid"><div class="span12"><table id="' + $soy$$0$0escapeHtml$$($currList62_opt_data$$38$$.id) + '_table" class="table table-condensed table-hover"><thead><tr><th> Currency</th><th> Name</th><th> Disclaimer </th><th> Taxas</th><th> Actions </th></tr></thead><tbody>');
  for(var $currListLen62_methodList21$$ = $currList62_opt_data$$38$$.$methods$, $currIndex62_methodListLen21$$ = $currListLen62_methodList21$$.length, $currData62_methodIndex21$$ = 0;$currData62_methodIndex21$$ < $currIndex62_methodListLen21$$;$currData62_methodIndex21$$++) {
    var $methodData21$$ = $currListLen62_methodList21$$[$currData62_methodIndex21$$];
    $output$$34$$ += '<tr data-withdraw-currency="' + $soy$$0$0escapeHtml$$($methodData21$$.currency) + '"  data-withdraw-method="' + $soy$$0$0escapeHtml$$($methodData21$$.method) + '"><td>' + $soy$$0$0escapeHtml$$($methodData21$$.currency_description) + "</td><td>" + $soy$$0$0escapeHtml$$($methodData21$$.description) + "</td><td>" + $soy$$0$0escapeHtml$$($methodData21$$.disclaimer) + "</td>" + ($methodData21$$.has_fixed_fee ? "<td>" + $soy$$0$0escapeHtml$$($methodData21$$.formatted_percent_fee) + 
    "% + " + $soy$$0$0escapeHtml$$($methodData21$$.formatted_fixed_fee) + "</td>" : "<td>" + $soy$$0$0escapeHtml$$($methodData21$$.formatted_percent_fee) + "%</td>") + '<td><div class="btn-group"><button class="btn btn-mini btn-success withdraw-methods-action-edit withdraw-method-action">edit</button><button class="btn btn-mini btn-danger withdraw-methods-action-delete withdraw-method-action">delete</button></div></td></tr>'
  }
  $output$$34$$ += '</tbody></table><div class="withdraw-methods-show-when-dirty-state pull-right" ><button  class="btn btn-large btn-success withdraw-methods-action-save">Save</button> <button class="btn btn-large btn-danger withdraw-methods-action-cancel">Cancel</button></div><div class="withdraw-methods-show-when-clean-state btn-group pull-right "><a class="btn btn-primary btn-small dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-white icon-plus"></i> Add withdraw method</a><ul class="dropdown-menu">';
  $currList62_opt_data$$38$$ = $currList62_opt_data$$38$$.$currencies$;
  $currListLen62_methodList21$$ = $currList62_opt_data$$38$$.length;
  for($currIndex62_methodListLen21$$ = 0;$currIndex62_methodListLen21$$ < $currListLen62_methodList21$$;$currIndex62_methodListLen21$$++) {
    $currData62_methodIndex21$$ = $currList62_opt_data$$38$$[$currIndex62_methodListLen21$$], $output$$34$$ += '<li><a href="" data-withdraw-currency="' + $soy$$0$0escapeHtml$$($currData62_methodIndex21$$.code) + '" class="withdraw-methods-action-add withdraw-method-action" >' + $soy$$0$0escapeHtml$$($currData62_methodIndex21$$.description) + "</a></li>"
  }
  return $output$$34$$ + '</ul></div><div class="withdraw-methods-show-when-saving-state span4 pull-right" ><div class="progress progress-success progress-striped active"><div class="bar" style="width: 100%">Saving...</div></div></div><div class="clearfix"></div></div></div>'
}
;
// Input 123
function $bitex$ui$WithdrawMethods$$($currencyFormatterFn$$, $currencyDescriptionFn$$, $opt_domHelper$$22$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$22$$);
  this.$currency_formatter_function_$ = $currencyFormatterFn$$;
  this.$currency_description_function_$ = $currencyDescriptionFn$$
}
$goog$inherits$$($bitex$ui$WithdrawMethods$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$WithdrawMethods$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("withdraw-methods");
function $JSCompiler_StaticMethods_getMethodsArray_$$($JSCompiler_StaticMethods_getMethodsArray_$self$$) {
  var $methods_array$$ = [], $fmt$$4$$ = new $goog$i18n$NumberFormat$$(1);
  $goog$object$forEach$$($JSCompiler_StaticMethods_getMethodsArray_$self$$.$model_$.withdraw_methods, function($withdraw_methods$$, $currency$$) {
    $goog$array$forEach$$($withdraw_methods$$, function($fixed_fee_withdraw_method$$) {
      var $obj$$98$$ = {currency:$currency$$, currency_description:this.$currency_description_function_$($currency$$)};
      $goog$object$extend$$($obj$$98$$, $fixed_fee_withdraw_method$$);
      $obj$$98$$.formatted_percent_fee = $fmt$$4$$.$format$($obj$$98$$.percent_fee);
      $fixed_fee_withdraw_method$$ = $obj$$98$$.fixed_fee;
      $obj$$98$$.has_fixed_fee = !(isNaN($fixed_fee_withdraw_method$$) || 0 >= $fixed_fee_withdraw_method$$);
      $obj$$98$$.formatted_fixed_fee = this.$currency_formatter_function_$($fixed_fee_withdraw_method$$ / 1E8, $currency$$, $JSCompiler_alias_TRUE$$);
      $methods_array$$.push($obj$$98$$)
    }, this)
  }, $JSCompiler_StaticMethods_getMethodsArray_$self$$);
  return $methods_array$$
}
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$withdraw_methods$templates$WithdrawMethods$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $methods$:$JSCompiler_StaticMethods_getMethodsArray_$$(this), $currencies$:this.$model_$.currencies});
  $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_FALSE$$)
};
function $JSCompiler_StaticMethods_setDirty$$($JSCompiler_StaticMethods_setDirty$self$$, $isDirty$$) {
  $JSCompiler_StaticMethods_setDirty$self$$.$model_$.$is_dirty$ = $isDirty$$;
  $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-dirty-state", $JSCompiler_StaticMethods_setDirty$self$$.$getElement$()), function($el$$98$$) {
    $goog$style$showElement$$($el$$98$$, $isDirty$$)
  });
  $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-clean-state", $JSCompiler_StaticMethods_setDirty$self$$.$getElement$()), function($el$$99$$) {
    $goog$style$showElement$$($el$$99$$, !$isDirty$$)
  });
  $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-saving-state", $JSCompiler_StaticMethods_setDirty$self$$.$getElement$()), function($el$$100$$) {
    $goog$style$showElement$$($el$$100$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setDirty$self$$)
}
function $JSCompiler_StaticMethods_setSavingStatus$$($JSCompiler_StaticMethods_setSavingStatus$self$$, $saving$$) {
  $saving$$ ? ($goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-dirty-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$101$$) {
    $goog$style$showElement$$($el$$101$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-clean-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$102$$) {
    $goog$style$showElement$$($el$$102$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-saving-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$103$$) {
    $goog$style$showElement$$($el$$103$$, $JSCompiler_alias_TRUE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$)) : ($goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-dirty-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$104$$) {
    $goog$style$showElement$$($el$$104$$, this.$model_$.$is_dirty$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-clean-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$105$$) {
    $goog$style$showElement$$($el$$105$$, !this.$model_$.$is_dirty$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-saving-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$106$$) {
    $goog$style$showElement$$($el$$106$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$))
}
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$WithdrawMethods$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$59$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$59$$, this.$getElement$(), "click", this.$onTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$59$$, this.$getElement$(), "click", this.$onAddField_$)
};
function $JSCompiler_StaticMethods_updateWindow$$($JSCompiler_StaticMethods_updateWindow$self$$) {
  $JSCompiler_StaticMethods_updateWindow$self$$.$getElement$().innerHTML = $bitex$ui$withdraw_methods$templates$WithdrawMethods$$({id:$JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_updateWindow$self$$, "form"), $methods$:$JSCompiler_StaticMethods_getMethodsArray_$$($JSCompiler_StaticMethods_updateWindow$self$$), $currencies$:$JSCompiler_StaticMethods_updateWindow$self$$.$model_$.currencies})
}
function $JSCompiler_StaticMethods_onActionDelete_$$($JSCompiler_StaticMethods_onActionDelete_$self$$) {
  var $idx$$ = $goog$array$findIndex$$($JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$], function($wm$$) {
    if($wm$$.method == this.$selected_method_$) {
      return $JSCompiler_alias_TRUE$$
    }
  }, $JSCompiler_StaticMethods_onActionDelete_$self$$);
  $goog$array$removeAt$$($JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$], $idx$$);
  0 == $JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$].length && $goog$object$remove$$($JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods, $JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$);
  $JSCompiler_StaticMethods_onActionDelete_$self$$.dispatchEvent("withdraw_structure_change")
}
function $JSCompiler_StaticMethods_onActionEdit_$$($JSCompiler_StaticMethods_onActionEdit_$self$$) {
  var $idx$$1$$ = $goog$array$findIndex$$($JSCompiler_StaticMethods_onActionEdit_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionEdit_$self$$.$selected_currency_$], function($wm$$1$$) {
    if($wm$$1$$.method == this.$selected_method_$) {
      return $JSCompiler_alias_TRUE$$
    }
  }, $JSCompiler_StaticMethods_onActionEdit_$self$$), $withdraw_method_editor$$ = new $bitex$ui$WithdrawMethodEditor$$, $buttonSet$$1_withdraw_method_editor_model$$ = $goog$object$unsafeClone$$($JSCompiler_StaticMethods_onActionEdit_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionEdit_$self$$.$selected_currency_$][$idx$$1$$]);
  $buttonSet$$1_withdraw_method_editor_model$$.currency = $JSCompiler_StaticMethods_onActionEdit_$self$$.$selected_currency_$;
  $withdraw_method_editor$$.$setModel$($buttonSet$$1_withdraw_method_editor_model$$);
  var $buttonSet$$1_withdraw_method_editor_model$$ = $bootstrap$Dialog$ButtonSet$createOkCancel$$(), $dialog_$$ = new $bootstrap$Dialog$$;
  $JSCompiler_StaticMethods_setTitle$$($dialog_$$, "Edit withdraw method");
  $JSCompiler_StaticMethods_addChild$$($dialog_$$, $withdraw_method_editor$$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setButtonSet$$($dialog_$$, $buttonSet$$1_withdraw_method_editor_model$$);
  $dialog_$$.$setVisible$($JSCompiler_alias_TRUE$$);
  $goog$style$setWidth$$($dialog_$$.$getElement$(), 850);
  $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_onActionEdit_$self$$.$getHandler$(), $dialog_$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$135$$) {
    if("ok" == $e$$135$$.key) {
      var $error_list$$2$$ = $withdraw_method_editor$$.$validate$();
      0 < $error_list$$2$$.length ? ($goog$array$forEach$$($error_list$$2$$, function($error_msg$$) {
        this.$last_error_$ = $error_msg$$;
        this.dispatchEvent("withdraw_structure_validation_error")
      }, this), $e$$135$$.stopPropagation(), $e$$135$$.preventDefault()) : (this.$model_$.withdraw_methods[this.$selected_currency_$][$idx$$1$$] = $JSCompiler_StaticMethods_getWithdrawMethodJSON$$($withdraw_method_editor$$), $JSCompiler_StaticMethods_updateWindow$$(this), $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_TRUE$$), this.dispatchEvent("withdraw_structure_change"))
    }
  }, $JSCompiler_StaticMethods_onActionEdit_$self$$)
}
$JSCompiler_prototypeAlias$$.$onTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onTableClick_$$($e$$136$$) {
  var $tr_el$$;
  $goog$dom$classes$has$$($e$$136$$.target, this.$getCssClass$() + "-action-edit") ? ($tr_el$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$136$$.target, "TR"), $e$$136$$.preventDefault(), $e$$136$$.stopPropagation(), this.$selected_method_$ = $tr_el$$.getAttribute("data-withdraw-method"), this.$selected_currency_$ = $tr_el$$.getAttribute("data-withdraw-currency"), $JSCompiler_StaticMethods_onActionEdit_$$(this)) : $goog$dom$classes$has$$($e$$136$$.target, this.$getCssClass$() + "-action-delete") ? 
  ($tr_el$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$136$$.target, "TR"), $e$$136$$.preventDefault(), $e$$136$$.stopPropagation(), this.$selected_method_$ = $tr_el$$.getAttribute("data-withdraw-method"), this.$selected_currency_$ = $tr_el$$.getAttribute("data-withdraw-currency"), $goog$dom$removeNode$$($tr_el$$), $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_onActionDelete_$$(this)) : $goog$dom$classes$has$$($e$$136$$.target, this.$getCssClass$() + 
  "-action-save") ? this.dispatchEvent("withdraw_structure_save") : $goog$dom$classes$has$$($e$$136$$.target, this.$getCssClass$() + "-action-cancel") && this.dispatchEvent("withdraw_structure_cancel")
};
$JSCompiler_prototypeAlias$$.$onAddField_$ = function $$JSCompiler_prototypeAlias$$$$onAddField_$$($buttonSet$$2_e$$137$$) {
  if($goog$dom$classes$has$$($buttonSet$$2_e$$137$$.target, this.$getCssClass$() + "-action-add")) {
    this.$selected_currency_$ = $buttonSet$$2_e$$137$$.target.getAttribute("data-withdraw-currency");
    $buttonSet$$2_e$$137$$.preventDefault();
    var $withdraw_method_editor$$1$$ = new $bitex$ui$WithdrawMethodEditor$$;
    $withdraw_method_editor$$1$$.$setModel$({currency:this.$selected_currency_$, description:"", disclaimer:"", fields:[], fixed_fee:"", method:"", percent_fee:""});
    $buttonSet$$2_e$$137$$ = $bootstrap$Dialog$ButtonSet$createOkCancel$$();
    var $dialog_$$1$$ = new $bootstrap$Dialog$$;
    $JSCompiler_StaticMethods_setTitle$$($dialog_$$1$$, "Add withdraw method");
    $JSCompiler_StaticMethods_addChild$$($dialog_$$1$$, $withdraw_method_editor$$1$$, $JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setButtonSet$$($dialog_$$1$$, $buttonSet$$2_e$$137$$);
    $dialog_$$1$$.$setVisible$($JSCompiler_alias_TRUE$$);
    $goog$style$setWidth$$($dialog_$$1$$.$getElement$(), 850);
    $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $dialog_$$1$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$138$$) {
      if("ok" == $e$$138$$.key) {
        var $error_list$$3$$ = $withdraw_method_editor$$1$$.$validate$();
        0 < $error_list$$3$$.length ? ($goog$array$forEach$$($error_list$$3$$, function($error_msg$$1$$) {
          this.$last_error_$ = $error_msg$$1$$;
          this.dispatchEvent("withdraw_structure_validation_error")
        }, this), $e$$138$$.stopPropagation(), $e$$138$$.preventDefault()) : (this.$model_$.withdraw_methods[this.$selected_currency_$] != $JSCompiler_alias_NULL$$ ? this.$model_$.withdraw_methods[this.$selected_currency_$].push($JSCompiler_StaticMethods_getWithdrawMethodJSON$$($withdraw_method_editor$$1$$)) : this.$model_$.withdraw_methods[this.$selected_currency_$] = [$JSCompiler_StaticMethods_getWithdrawMethodJSON$$($withdraw_method_editor$$1$$)], $JSCompiler_StaticMethods_updateWindow$$(this), 
        $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_TRUE$$), this.dispatchEvent("withdraw_structure_change"))
      }
    }, this)
  }
};
// Input 124
function $bitex$ui$withdraw_method_editor$templates$WithdrawMethodFieldLineEditor$$($opt_data$$39_output$$35$$) {
  return $opt_data$$39_output$$35$$ = "" + ('<tr id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '"><td><select id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_side_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" class="withdraw-method-editor-field-side"><option value="client" ' + ("client" == $opt_data$$39_output$$35$$.data.side ? "selected" : "") + '>Client</option><option value="broker" ' + 
  ("broker" == $opt_data$$39_output$$35$$.data.side ? "selected" : "") + '>Broker</option></select></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_name_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-name"  data-uniform-label="Name" data-uniform-filters="non_space"  data-uniform-validators="required ; validateAlphaNum"  placeholder="" required value="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.data.name) + 
  '"></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_label_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-label"  data-uniform-label="Label"  data-uniform-validators="required" placeholder="" required value="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.data.label) + '"></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_placeholder_" + 
  $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-placeholder" placeholder="" value="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.data.placeholder) + '"></td><td><select id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_type_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" class="withdraw-method-editor-field-type"><option value="text" ' + ("text" == $opt_data$$39_output$$35$$.data.type ? 
  "selected" : "") + '>Text</option></select></td><td><select id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_validator_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" class="withdraw-method-editor-field-validator"><option value="required" ' + ("required" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + ' >Required</option><option value="validateEmail" ' + ("validateEmail" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + ' >Email</option><option value="validateNumber" ' + 
  ("validateNumber" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + ' >Number</option><option value="validateInteger" ' + ("validateInteger" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + ' >Integer</option><option value="validateAlpha" ' + ("validateAlpha" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + ' >Alpha</option><option value="validateUsername" ' + ("validateUsername" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + 
  ' >Username</option><option value="validateAlphaNum" ' + ("validateAlphaNum" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + ' >Alpha Numeric</option><option value="validateAddress" ' + ("validateAddress" == $opt_data$$39_output$$35$$.data.validator ? "selected" : "") + '  >BTC Address</option></select></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_value_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-value" placeholder="" value="' + 
  $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.data.value) + '"></td><td><button id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.id) + "_field_delete_" + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" data-index="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$35$$.$idx$) + '" class="btn btn-mini btn-danger withdraw-method-editor-field-action-delete withdraw-method-editor-field-action">delete</button></td></tr>')
}
function $bitex$ui$withdraw_method_editor$templates$WithdrawMethodEditor$$($opt_data$$40$$) {
  var $output$$36$$;
  $output$$36$$ = "" + ('<div class="row-fluid"><div class="span12"><form id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '" class="form-horizontal span6"  data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label class="control-label">Method name</label><div class="controls"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_name"  type="text" class="input-block-level"  data-uniform-validators="required; validateAlphaNum" data-uniform-filters="non_space" placeholder="" required value="' + 
  $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.method) + '"></div></div><div class="control-group"><label class="control-label">Description</label><div class="controls"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_description"  type="text" class="input-block-level" data-uniform-validators="required" placeholder="" required value="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.description) + '"></div></div><div class="control-group"><label class="control-label">Disclaimer</label><div class="controls"><input id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_placeholder"  type="text" class="input-block-level" placeholder="" value="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.disclaimer) + '"></div></div><div class="control-group"><label class="control-label">Taxas</label><div class="controls"><div class="row-fluid"><div class="span6"><div class="input-append"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_percent_fee" type="text" class="input-block-level" autocomplete="off" maxlength="4" data-uniform-validators="required ; validateNumber; validateMin 0; validateMax 25" label="percentual" required value="' + 
  $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.percent_fee) + '"><span class="add-on">%</span></div></div><div class="span6"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.currency) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_fixed_fee" type="text" class="input-block-level" autocomplete="off" data-uniform-validators="required ; validateNumber; validateMin 0" label="fixo" required value="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.fixed_fee) + 
  '"></div></div></div></div></div><div class="control-group"><table id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_table" class="table table-condensed table-bordered table-hover"><thead><tr><td colspan="7" style="text-align: center">Custom fields</td></tr><tr><th> Side</th><th> Name </th><th> Label </th><th> Placeholder </th><th> Tipo </th><th> Validator </th><th> Value </th><th> Actions </th></tr></thead><tbody>');
  for(var $fieldList185_level214$$ = $opt_data$$40$$.$model$.fields, $fieldListLen185$$ = $fieldList185_level214$$.length, $fieldIndex185$$ = 0;$fieldIndex185$$ < $fieldListLen185$$;$fieldIndex185$$++) {
    $output$$36$$ += $bitex$ui$withdraw_method_editor$templates$WithdrawMethodFieldLineEditor$$({id:$opt_data$$40$$.id, $idx$:$fieldIndex185$$, data:$fieldList185_level214$$[$fieldIndex185$$]})
  }
  $output$$36$$ += '</tbody></table><button id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_add" class="btn btn-primary"><i class="icon-white icon-plus"></i> Add field</button></div><div class="control-group"><table id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + '_limits" class="table table-condensed table-bordered table-hover"><thead><tr><td colspan="4" style="text-align: center">Limits</td></tr><tr><th>Verification Level</th><th>Enabled</th><th>Min</th><th>Max</th></tr></thead><tbody>';
  for($fieldList185_level214$$ = 0;6 > $fieldList185_level214$$;$fieldList185_level214$$++) {
    $output$$36$$ += "<tr>";
    switch($fieldList185_level214$$) {
      case 0:
        $output$$36$$ += "<td>Unverified</td>";
        break;
      case 1:
        $output$$36$$ += "<td>Pending</td>";
        break;
      case 2:
        $output$$36$$ += "<td>Progress</td>";
        break;
      case 3:
        $output$$36$$ += "<td>Verified - Level I</td>";
        break;
      case 4:
        $output$$36$$ += "<td>Verified - Level II</td>";
        break;
      case 5:
        $output$$36$$ += "<td>Verified - Level III</td>"
    }
    $output$$36$$ += '<td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + "_level_" + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + '_enabled" type="checkbox" class="withdraw-method-editor-limit-enabled"' + ($opt_data$$40$$.$model$.limits && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$] && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$].enabled ? "checked" : "") + '/></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + "_level_" + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + 
    '_min" name="min_' + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + '" type="text" autocomplete="off" class="input-small withdraw-method-editor-limit-max" data-uniform-label="Min" data-uniform-validators="validateNumber; validateMin 0" data-uniform-meta="display If ' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + "_level_" + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + "_enabled == 'on'; enable If " + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + "_level_" + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + 
    "_enabled == 'on'\" value=\"" + ($opt_data$$40$$.$model$.limits && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$] && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$].min ? $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.limits[$fieldList185_level214$$].min) : "0") + '"' + ($opt_data$$40$$.$model$.limits && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$] && !$opt_data$$40$$.$model$.limits[$fieldList185_level214$$].enabled ? 'style="display: none;" disabled' : "") + '/></td><td><input id="' + 
    $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + "_level_" + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + '_max" name="max_' + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + '" type="text" autocomplete="off" class="input-small withdraw-method-editor-limit-max" data-uniform-label="Max" data-uniform-validators="validateNumber" data-uniform-meta="display If ' + $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + "_level_" + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + "_enabled == 'on'; enable If " + 
    $soy$$0$0escapeHtml$$($opt_data$$40$$.id) + "_level_" + $soy$$0$0escapeHtml$$($fieldList185_level214$$) + '_enabled == \'on\'"" value="' + ($opt_data$$40$$.$model$.limits && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$] && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$].max ? $soy$$0$0escapeHtml$$($opt_data$$40$$.$model$.limits[$fieldList185_level214$$].max) : "") + '"' + ($opt_data$$40$$.$model$.limits && $opt_data$$40$$.$model$.limits[$fieldList185_level214$$] && !$opt_data$$40$$.$model$.limits[$fieldList185_level214$$].enabled ? 
    'style="display: none;" disabled' : "") + "/></td></tr>"
  }
  return $output$$36$$ + "</tbody></table></div></fieldset></form></div></div>"
}
;
// Input 125
function $bitex$ui$WithdrawMethodEditor$$($opt_domHelper$$23$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$23$$);
  this.$form_$ = new $uniform$Uniform$$
}
$goog$inherits$$($bitex$ui$WithdrawMethodEditor$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$WithdrawMethodEditor$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("withdraw-method-editor");
$JSCompiler_prototypeAlias$$.$setModel$ = function $$JSCompiler_prototypeAlias$$$$setModel$$($obj$$99$$) {
  var $fmt$$5$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$5$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$5$$);
  $obj$$99$$.percent_fee = $fmt$$5$$.$format$($obj$$99$$.percent_fee);
  $obj$$99$$.fixed_fee = $fmt$$5$$.$format$($obj$$99$$.fixed_fee / 1E8);
  $obj$$99$$.limits != $JSCompiler_alias_NULL$$ && $goog$object$forEach$$($obj$$99$$.limits, function($limit$$) {
    $limit$$.min != $JSCompiler_alias_NULL$$ && ($limit$$.min = $fmt$$5$$.$format$($limit$$.min / 1E8));
    $limit$$.max != $JSCompiler_alias_NULL$$ && ($limit$$.max = $fmt$$5$$.$format$($limit$$.max / 1E8))
  }, this);
  $bitex$ui$WithdrawMethodEditor$$.$superClass_$.$setModel$.call(this, $obj$$99$$)
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$getDomHelper$();
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$withdraw_method_editor$templates$WithdrawMethodEditor$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $model$:this.$model_$})
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$WithdrawMethodEditor$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$62$$ = this.$getHandler$();
  this.$form_$.$decorate$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form")));
  $JSCompiler_StaticMethods_listen$$($handler$$62$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")), "click", this.$onTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$62$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_add")), "click", this.$onAddField_$)
};
$JSCompiler_prototypeAlias$$.$validate$ = function $$JSCompiler_prototypeAlias$$$$validate$$() {
  this.$form_$ != $JSCompiler_alias_NULL$$ && this.$form_$.$dispose$();
  this.$form_$ = new $uniform$Uniform$$;
  this.$form_$.$decorate$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form")));
  return this.$form_$.$validate$()
};
function $JSCompiler_StaticMethods_getWithdrawMethodJSON$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$) {
  var $fmt$$6_row_number$$ = new $goog$i18n$NumberFormat$$(1), $result$$23$$ = {};
  $result$$23$$.method = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_name")));
  $result$$23$$.description = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_description")));
  $result$$23$$.disclaimer = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_placeholder")));
  $result$$23$$.percent_fee = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_percent_fee")));
  $result$$23$$.fixed_fee = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_fixed_fee")));
  var $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ = [0], $limit_row_tmp$$1$$ = $result$$23$$.percent_fee;
  $result$$23$$.percent_fee = $fmt$$6_row_number$$.parse($limit_row_tmp$$1$$, $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$);
  if($enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$[0] != $limit_row_tmp$$1$$.length || isNaN($result$$23$$.percent_fee) || 0 >= $result$$23$$.percent_fee) {
    $result$$23$$.percent_fee = 0
  }
  $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ = [0];
  $limit_row_tmp$$1$$ = $result$$23$$.fixed_fee;
  $result$$23$$.fixed_fee = $fmt$$6_row_number$$.parse($limit_row_tmp$$1$$, $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$);
  if($enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$[0] != $limit_row_tmp$$1$$.length || isNaN($result$$23$$.fixed_fee) || 0 >= $result$$23$$.fixed_fee) {
    $result$$23$$.fixed_fee = 0
  }
  $result$$23$$.fixed_fee *= 1E8;
  $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ = $goog$dom$getNextElementSibling$$($goog$dom$getFirstElementChild$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_limits"))));
  $result$$23$$.limits = {};
  for(var $limit_row_tmp$$1$$ = $goog$dom$getFirstElementChild$$($enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$), $verification_level$$1$$ = 0;$limit_row_tmp$$1$$ != $JSCompiler_alias_NULL$$;) {
    var $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_level_" + $verification_level$$1$$ + "_enabled"))), $limit_record$$ = {enabled:$enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ != $JSCompiler_alias_NULL$$};
    if($enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$) {
      var $limit_max_limit_min$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_level_" + $verification_level$$1$$ + "_min")));
      $limit_max_limit_min$$ && ($enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ = [0], $limit_record$$.min = $fmt$$6_row_number$$.parse($limit_max_limit_min$$, $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$), $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$[0] != $limit_max_limit_min$$.length || isNaN($limit_record$$.min) || 0 >= $limit_record$$.min ? delete $limit_record$$.min : $limit_record$$.min *= 1E8);
      if($limit_max_limit_min$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_level_" + $verification_level$$1$$ + "_max")))) {
        $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ = [0], $limit_record$$.max = $fmt$$6_row_number$$.parse($limit_max_limit_min$$, $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$), $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$[0] != $limit_max_limit_min$$.length || isNaN($limit_record$$.max) || 0 >= $limit_record$$.max ? delete $limit_record$$.max : $limit_record$$.max *= 1E8
      }
    }
    $result$$23$$.limits["" + $verification_level$$1$$] = $limit_record$$;
    $verification_level$$1$$++;
    $limit_row_tmp$$1$$ = $goog$dom$getNextElementSibling$$($limit_row_tmp$$1$$)
  }
  $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ = $goog$dom$getNextElementSibling$$($goog$dom$getFirstElementChild$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_table"))));
  $result$$23$$.fields = [];
  $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ = $goog$dom$getFirstElementChild$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$);
  for($fmt$$6_row_number$$ = 0;$JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ != $JSCompiler_alias_NULL$$;) {
    $enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$ = {side:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-side", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), name:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-name", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), label:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-label", 
    $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), placeholder:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-placeholder", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), type:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-type", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), 
    validator:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-validator", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), value:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-value", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$))}, $result$$23$$.fields.push($enabled$$9_field_record_fields_limits_tbody_element_pos$$22$$), $fmt$$6_row_number$$++, 
    $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ = $goog$dom$getNextElementSibling$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)
  }
  return $result$$23$$
}
$JSCompiler_prototypeAlias$$.$onTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onTableClick_$$($e$$139$$) {
  if($goog$dom$classes$has$$($e$$139$$.target, this.$getCssClass$() + "-field-action-delete")) {
    var $tr_el$$1$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$139$$.target, "TR");
    $goog$dom$removeNode$$($tr_el$$1$$);
    $e$$139$$.preventDefault();
    $e$$139$$.stopPropagation()
  }
};
$JSCompiler_prototypeAlias$$.$onAddField_$ = function $$JSCompiler_prototypeAlias$$$$onAddField_$$($e$$140_table_tbody_el$$) {
  $e$$140_table_tbody_el$$.preventDefault();
  $e$$140_table_tbody_el$$.stopPropagation();
  $e$$140_table_tbody_el$$ = $goog$dom$getElementsByTagNameAndClass$$("TBODY", $JSCompiler_alias_VOID$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")))[0];
  var $wrapper$$5$$ = this.$getDomHelper$().createElement("tbody");
  $wrapper$$5$$.innerHTML = $bitex$ui$withdraw_method_editor$templates$WithdrawMethodFieldLineEditor$$({id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $idx$:"", data:{side:"client", name:"", validator:"", label:"", placeholder:"", type:"", value:""}});
  $e$$140_table_tbody_el$$.appendChild($wrapper$$5$$.firstChild)
};
// Input 126
function $bitex$ui$ChangePassword$templates$ChangePassword$$($opt_data$$41_output$$37$$) {
  return $opt_data$$41_output$$37$$ = "" + ('<div class="section-title"><h3 class="bitex-view-title">Change Your password </h3></div><div id="' + $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '"><div class="clearfix"><label for="' + $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '_oldpassword">Current password</label><div class="input"><input autocapitalize="off" autocorrect="off" id="' + $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '_oldpassword" name="username" type="password" ></div></div><div class="clearfix"><label for="' + 
  $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '_password">New password</label><div class="input"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '_password" placeholder="" name="password" type="password"></div></div><div class="clearfix"><label for="' + $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '_repeat_password">Confirm new password</label><div class="input"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '_repeat_password" placeholder="" name="repeat_password" type="password"></div></div><div class="actions"><button id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$41_output$$37$$.id) + '_change" class="btn btn-primary">Change Password</button></div></div>')
}
;
// Input 127
function $bitex$ui$ChangePassword$$($opt_domHelper$$24$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$24$$)
}
$goog$inherits$$($bitex$ui$ChangePassword$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$ChangePassword$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("change-password");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$ChangePassword$templates$ChangePassword$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form")})
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$ChangePassword$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_change")), "click", this.$onChangePassword_$)
};
$JSCompiler_prototypeAlias$$.$onChangePassword_$ = function $$JSCompiler_prototypeAlias$$$$onChangePassword_$$($e$$141$$) {
  $e$$141$$.preventDefault();
  $e$$141$$.stopPropagation();
  this.dispatchEvent("control_change_password")
};
$JSCompiler_prototypeAlias$$.$getCurrentPassword$ = function $$JSCompiler_prototypeAlias$$$$getCurrentPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_oldpassword")))
};
$JSCompiler_prototypeAlias$$.$getPassword$ = function $$JSCompiler_prototypeAlias$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_password")))
};
$JSCompiler_prototypeAlias$$.$getNewPassword$ = function $$JSCompiler_prototypeAlias$$$$getNewPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_repeat_password")))
};
// Input 128
// Input 129
// Input 130
// Input 131
// Input 132
// Input 133
// Input 134
// Input 135
function $bitex$view$ProfileView$$($app$$6$$, $opt_domHelper$$25$$) {
  $bitex$view$View$$.call(this, $app$$6$$, $opt_domHelper$$25$$)
}
$goog$inherits$$($bitex$view$ProfileView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$ProfileView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$ProfileView$$.$superClass_$.$enterView$.call(this);
  var $has_secret_model$$14_secret_withdraw_methods_model$$ = this.$app_$.$model_$, $handler$$64$$ = this.$getHandler$();
  if($has_secret_model$$14_secret_withdraw_methods_model$$.get("IsBroker")) {
    var $customer_divEl_withdraw_methods$$1$$ = new $bitex$ui$WithdrawMethods$$($goog$bind$$(this.$app_$.$formatCurrency$, this.$app_$), $goog$bind$$(this.$app_$.$getCurrencyDescription$, this.$app_$)), $broker_currencies$$1$$ = [];
    $goog$array$forEach$$($has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").BrokerCurrencies, function($currency$$1$$) {
      $broker_currencies$$1$$.push({code:$currency$$1$$, description:this.$app_$.$getCurrencyDescription$($currency$$1$$)})
    }, this);
    $has_secret_model$$14_secret_withdraw_methods_model$$ = $goog$object$unsafeClone$$($has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").WithdrawStructure);
    $customer_divEl_withdraw_methods$$1$$.$setModel$({withdraw_methods:$has_secret_model$$14_secret_withdraw_methods_model$$, currencies:$broker_currencies$$1$$});
    $JSCompiler_StaticMethods_addChild$$(this, $customer_divEl_withdraw_methods$$1$$, $JSCompiler_alias_TRUE$$);
    $customer_divEl_withdraw_methods$$1$$.$enterDocument$()
  }else {
    $customer_divEl_withdraw_methods$$1$$ = {};
    $customer_divEl_withdraw_methods$$1$$.ID = $has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").UserID;
    $customer_divEl_withdraw_methods$$1$$.Username = $has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").Username;
    $customer_divEl_withdraw_methods$$1$$.Email = $has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").Email;
    var $btnDisableEl_state$$19$$ = $has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").State;
    $btnDisableEl_state$$19$$ != $JSCompiler_alias_NULL$$ || ($btnDisableEl_state$$19$$ = $has_secret_model$$14_secret_withdraw_methods_model$$.get("Broker").State);
    $customer_divEl_withdraw_methods$$1$$.State = $btnDisableEl_state$$19$$;
    $customer_divEl_withdraw_methods$$1$$.CountryCode = $has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").Country;
    $customer_divEl_withdraw_methods$$1$$.Verified = $has_secret_model$$14_secret_withdraw_methods_model$$.get("Profile").Verified;
    $goog$soy$renderElement$$($goog$dom$getElement$$("account_overview_user_id"), $bitex$templates$AccountOverviewUser$$, {$msg_customer_detail$:$customer_divEl_withdraw_methods$$1$$})
  }
  $has_secret_model$$14_secret_withdraw_methods_model$$ = this.$app_$.$model_$.get("TwoFactorSecret");
  $has_secret_model$$14_secret_withdraw_methods_model$$ = $has_secret_model$$14_secret_withdraw_methods_model$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($has_secret_model$$14_secret_withdraw_methods_model$$);
  $customer_divEl_withdraw_methods$$1$$ = $goog$dom$getElement$$("id_enable_two_factor_div");
  $btnDisableEl_state$$19$$ = $goog$dom$getElement$$("id_btn_disable_two_factor");
  $goog$style$showElement$$($goog$dom$getElement$$("id_btn_enable_two_factor"), !this.$app_$.$model_$.get("TwoFactorEnabled"));
  $goog$style$showElement$$($btnDisableEl_state$$19$$, this.$app_$.$model_$.get("TwoFactorEnabled"));
  $goog$style$showElement$$($customer_divEl_withdraw_methods$$1$$, $has_secret_model$$14_secret_withdraw_methods_model$$);
  this.$change_password_$ = new $bitex$ui$ChangePassword$$;
  $JSCompiler_StaticMethods_addChild$$(this, this.$change_password_$, $JSCompiler_alias_TRUE$$);
  this.$change_password_$.$enterDocument$();
  $JSCompiler_StaticMethods_listen$$($handler$$64$$, this, "control_change_password", this.$onChangePassword_$)
};
$JSCompiler_prototypeAlias$$.$onChangePassword_$ = function $$JSCompiler_prototypeAlias$$$$onChangePassword_$$($e$$142_password2$$1$$) {
  var $current_password$$ = $e$$142_password2$$1$$.target.$getCurrentPassword$(), $password$$2$$ = $e$$142_password2$$1$$.target.$getPassword$();
  $e$$142_password2$$1$$ = $e$$142_password2$$1$$.target.$getNewPassword$();
  $goog$string$isEmpty$$($current_password$$) ? this.$app_$.$showDialog$("Password must not be empty") : $goog$string$isEmpty$$($password$$2$$) || 8 > $password$$2$$.length ? this.$app_$.$showDialog$("New password must have at least 8 characters") : $password$$2$$ !== $e$$142_password2$$1$$ ? this.$app_$.$showDialog$("Passwords does not match") : this.dispatchEvent("change_password")
};
$JSCompiler_prototypeAlias$$.$getCurrentPassword$ = function $$JSCompiler_prototypeAlias$$$$getCurrentPassword$$() {
  return this.$change_password_$.$getCurrentPassword$()
};
$JSCompiler_prototypeAlias$$.$getPassword$ = function $$JSCompiler_prototypeAlias$$$$getPassword$$() {
  return this.$change_password_$.$getPassword$()
};
$JSCompiler_prototypeAlias$$.$getNewPassword$ = function $$JSCompiler_prototypeAlias$$$$getNewPassword$$() {
  return this.$change_password_$.$getNewPassword$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$ProfileView$$.$superClass_$.$exitView$.call(this);
  this.$removeChildren$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$ProfileView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$65$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this, "withdraw_structure_change", this.$onChangeWithdrawStructure_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this, "withdraw_structure_save", this.$onSaveWithdrawStructure_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this, "withdraw_structure_cancel", this.$onCancelWithdrawStructure_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this, "withdraw_structure_validation_error", this.$onValidationErrorWithdrawStructure_$);
  var $model$$15$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, $model$$15$$, "model_setTwoFactorSecret", this.$onModelSetTwoFactorSecret_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, $model$$15$$, "model_setTwoFactorEnabled", this.$onModelSetTwoFactorEnabled_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, $goog$dom$getElement$$("id_btn_enable_two_factor"), "click", function() {
    this.dispatchEvent("two_factor_enable")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, $goog$dom$getElement$$("id_btn_disable_two_factor"), "click", function() {
    this.dispatchEvent("two_factor_disable")
  }, this)
};
$JSCompiler_prototypeAlias$$.$onModelSetTwoFactorSecret_$ = function $$JSCompiler_prototypeAlias$$$$onModelSetTwoFactorSecret_$$($e$$145_secret$$1$$) {
  var $model$$16_qr_code$$ = this.$app_$.$model_$;
  $e$$145_secret$$1$$ = $e$$145_secret$$1$$.data;
  if($e$$145_secret$$1$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($e$$145_secret$$1$$)) {
    var $issuer$$ = $model$$16_qr_code$$.get("Broker").ShortName, $model$$16_qr_code$$ = "https://chart.googleapis.com/chart?chs=200x200&chld=M%7C0&cht=qr&chl=" + encodeURIComponent("otpauth://totp/" + $model$$16_qr_code$$.get("Profile").Email + "?secret=") + $e$$145_secret$$1$$ + encodeURIComponent("&issuer=" + $issuer$$);
    $goog$dom$getElement$$("id_secret_qr").setAttribute("src", $model$$16_qr_code$$)
  }
};
$JSCompiler_prototypeAlias$$.$onModelSetTwoFactorEnabled_$ = function $$JSCompiler_prototypeAlias$$$$onModelSetTwoFactorEnabled_$$($e$$146_enabled$$10$$) {
  $e$$146_enabled$$10$$ = $e$$146_enabled$$10$$.data;
  var $has_secret$$2_secret$$2$$ = this.$app_$.$model_$.get("TwoFactorSecret"), $has_secret$$2_secret$$2$$ = $has_secret$$2_secret$$2$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($has_secret$$2_secret$$2$$), $divEl$$1$$ = $goog$dom$getElement$$("id_enable_two_factor_div"), $btnDisableEl$$1$$ = $goog$dom$getElement$$("id_btn_disable_two_factor");
  $goog$style$showElement$$($goog$dom$getElement$$("id_btn_enable_two_factor"), !$e$$146_enabled$$10$$);
  $goog$style$showElement$$($btnDisableEl$$1$$, $e$$146_enabled$$10$$);
  $goog$style$showElement$$($divEl$$1$$, $has_secret$$2_secret$$2$$)
};
$JSCompiler_prototypeAlias$$.$onChangeWithdrawStructure_$ = function $$JSCompiler_prototypeAlias$$$$onChangeWithdrawStructure_$$($e$$147$$) {
  $goog$object$unsafeClone$$($e$$147$$.target.$model_$.withdraw_methods)
};
$JSCompiler_prototypeAlias$$.$onSaveWithdrawStructure_$ = function $$JSCompiler_prototypeAlias$$$$onSaveWithdrawStructure_$$($conn$$2_e$$148$$) {
  var $requestId_withdraw_structure$$1$$ = $goog$object$unsafeClone$$($conn$$2_e$$148$$.target.$model_$.withdraw_methods), $withdraw_method_component$$ = $conn$$2_e$$148$$.target;
  $JSCompiler_StaticMethods_setSavingStatus$$($withdraw_method_component$$, $JSCompiler_alias_TRUE$$);
  $conn$$2_e$$148$$ = this.$app_$.$conn_$;
  $requestId_withdraw_structure$$1$$ = $JSCompiler_StaticMethods_updateUserProfile$$($conn$$2_e$$148$$, {WithdrawStructure:$requestId_withdraw_structure$$1$$});
  $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), $conn$$2_e$$148$$, $bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$ + "." + $requestId_withdraw_structure$$1$$, function() {
    $JSCompiler_StaticMethods_setDirty$$($withdraw_method_component$$, $JSCompiler_alias_FALSE$$);
    $JSCompiler_StaticMethods_setSavingStatus$$($withdraw_method_component$$, $JSCompiler_alias_FALSE$$)
  })
};
$JSCompiler_prototypeAlias$$.$onValidationErrorWithdrawStructure_$ = function $$JSCompiler_prototypeAlias$$$$onValidationErrorWithdrawStructure_$$($e$$150$$) {
  this.$app_$.$showNotification$("error", $e$$150$$.target.$last_error_$)
};
$JSCompiler_prototypeAlias$$.$onCancelWithdrawStructure_$ = function $$JSCompiler_prototypeAlias$$$$onCancelWithdrawStructure_$$($e$$151$$) {
  var $model$$17_withdraw_methods_model$$1$$ = this.$app_$.$model_$, $broker_currencies$$2$$ = [];
  $goog$array$forEach$$($model$$17_withdraw_methods_model$$1$$.get("Profile").BrokerCurrencies, function($currency$$2$$) {
    $broker_currencies$$2$$.push({code:$currency$$2$$, description:this.$app_$.$getCurrencyDescription$($currency$$2$$)})
  }, this);
  $model$$17_withdraw_methods_model$$1$$ = $goog$object$unsafeClone$$($model$$17_withdraw_methods_model$$1$$.get("Profile").WithdrawStructure);
  $e$$151$$.target.$setModel$({withdraw_methods:$model$$17_withdraw_methods_model$$1$$, currencies:$broker_currencies$$2$$});
  $JSCompiler_StaticMethods_updateWindow$$($e$$151$$.target);
  $JSCompiler_StaticMethods_setDirty$$($e$$151$$.target, $JSCompiler_alias_FALSE$$)
};
// Input 136
function $bitex$view$SetNewPasswordView$$($app$$7$$, $opt_domHelper$$26$$) {
  $bitex$view$View$$.call(this, $app$$7$$, $opt_domHelper$$26$$)
}
$goog$inherits$$($bitex$view$SetNewPasswordView$$, $bitex$view$View$$);
$bitex$view$SetNewPasswordView$$.prototype.$getToken$ = function $$bitex$view$SetNewPasswordView$$$$$getToken$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_set_new_password_token"))
};
$bitex$view$SetNewPasswordView$$.prototype.$getPassword$ = function $$bitex$view$SetNewPasswordView$$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_set_new_password_password"))
};
$bitex$view$SetNewPasswordView$$.prototype.$enterDocument$ = function $$bitex$view$SetNewPasswordView$$$$$enterDocument$$() {
  $bitex$view$SetNewPasswordView$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$("id_btn_set_new_password"), "click", function($e$$152$$) {
    $e$$152$$.stopPropagation();
    $e$$152$$.preventDefault();
    $goog$string$isEmpty$$(this.$getToken$()) ? this.$app_$.$showDialog$("C\u00f3digo de confirma\u00e7\u00e3o inv\u00e1lido") : $goog$string$isEmpty$$(this.$getPassword$()) || 8 > this.$getPassword$().length ? this.$app_$.$showDialog$("A senha precisa ter no m\u00ednimo 8 letras") : this.$getPassword$() !== $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_set_new_password_password2")) ? this.$app_$.$showDialog$("As senhas n\u00e3o conferem") : this.dispatchEvent("set_new_pwd")
  }, this)
};
// Input 137
function $bitex$view$NullView$$($app$$8$$, $opt_domHelper$$27$$) {
  $bitex$view$View$$.call(this, $app$$8$$, $opt_domHelper$$27$$)
}
$goog$inherits$$($bitex$view$NullView$$, $bitex$view$View$$);
// Input 138
function $goog$json$parse$$($o$$1_s$$42$$) {
  $o$$1_s$$42$$ = String($o$$1_s$$42$$);
  if(/^\s*$/.test($o$$1_s$$42$$) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test($o$$1_s$$42$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + $o$$1_s$$42$$ + ")")
    }catch($ex$$10$$) {
    }
  }
  $JSCompiler_alias_THROW$$(Error("Invalid JSON string: " + $o$$1_s$$42$$))
}
function $goog$json$serialize$$($object$$5$$) {
  return(new $goog$json$Serializer$$($JSCompiler_alias_VOID$$)).serialize($object$$5$$)
}
function $goog$json$Serializer$$($opt_replacer$$2$$) {
  this.$replacer_$ = $opt_replacer$$2$$
}
$goog$json$Serializer$$.prototype.serialize = function $$goog$json$Serializer$$$$serialize$($object$$6$$) {
  var $sb$$6$$ = [];
  $JSCompiler_StaticMethods_serialize_$$(this, $object$$6$$, $sb$$6$$);
  return $sb$$6$$.join("")
};
function $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $object$$7$$, $sb$$7$$) {
  switch(typeof $object$$7$$) {
    case "string":
      $JSCompiler_StaticMethods_serializeString_$$($object$$7$$, $sb$$7$$);
      break;
    case "number":
      $sb$$7$$.push(isFinite($object$$7$$) && !isNaN($object$$7$$) ? $object$$7$$ : "null");
      break;
    case "boolean":
      $sb$$7$$.push($object$$7$$);
      break;
    case "undefined":
      $sb$$7$$.push("null");
      break;
    case "object":
      if($object$$7$$ == $JSCompiler_alias_NULL$$) {
        $sb$$7$$.push("null");
        break
      }
      if($goog$isArray$$($object$$7$$)) {
        $JSCompiler_StaticMethods_serialize_$self$$.serializeArray($object$$7$$, $sb$$7$$);
        break
      }
      $sb$$7$$.push("{");
      var $sep$$inline_745$$ = "", $key$$inline_746$$;
      for($key$$inline_746$$ in $object$$7$$) {
        if(Object.prototype.hasOwnProperty.call($object$$7$$, $key$$inline_746$$)) {
          var $value$$inline_747$$ = $object$$7$$[$key$$inline_746$$];
          "function" != typeof $value$$inline_747$$ && ($sb$$7$$.push($sep$$inline_745$$), $JSCompiler_StaticMethods_serializeString_$$($key$$inline_746$$, $sb$$7$$), $sb$$7$$.push(":"), $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$.call($object$$7$$, $key$$inline_746$$, $value$$inline_747$$) : $value$$inline_747$$, $sb$$7$$), $sep$$inline_745$$ = 
          ",")
        }
      }
      $sb$$7$$.push("}");
      break;
    case "function":
      break;
    default:
      $JSCompiler_alias_THROW$$(Error("Unknown type: " + typeof $object$$7$$))
  }
}
var $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function $JSCompiler_StaticMethods_serializeString_$$($s$$44$$, $sb$$8$$) {
  $sb$$8$$.push('"', $s$$44$$.replace($goog$json$Serializer$charsToReplace_$$, function($c$$8$$) {
    if($c$$8$$ in $goog$json$Serializer$charToJsonCharCache_$$) {
      return $goog$json$Serializer$charToJsonCharCache_$$[$c$$8$$]
    }
    var $cc$$2$$ = $c$$8$$.charCodeAt(0), $rv$$23$$ = "\\u";
    16 > $cc$$2$$ ? $rv$$23$$ += "000" : 256 > $cc$$2$$ ? $rv$$23$$ += "00" : 4096 > $cc$$2$$ && ($rv$$23$$ += "0");
    return $goog$json$Serializer$charToJsonCharCache_$$[$c$$8$$] = $rv$$23$$ + $cc$$2$$.toString(16)
  }), '"')
}
$goog$json$Serializer$$.prototype.serializeArray = function $$goog$json$Serializer$$$$serializeArray$($arr$$68$$, $sb$$10$$) {
  var $l$$24$$ = $arr$$68$$.length;
  $sb$$10$$.push("[");
  for(var $sep_value$$163$$ = "", $i$$158$$ = 0;$i$$158$$ < $l$$24$$;$i$$158$$++) {
    $sb$$10$$.push($sep_value$$163$$), $sep_value$$163$$ = $arr$$68$$[$i$$158$$], $JSCompiler_StaticMethods_serialize_$$(this, this.$replacer_$ ? this.$replacer_$.call($arr$$68$$, String($i$$158$$), $sep_value$$163$$) : $sep_value$$163$$, $sb$$10$$), $sep_value$$163$$ = ","
  }
  $sb$$10$$.push("]")
};
// Input 139
function $bitex$ui$Customers$$($opt_domHelper$$28$$) {
  this.$selected_customer_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {title:"Clientes", rowClassFn:this.$getRowClass$, columns:[{property:"Username", label:"Username", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-username"
  }}, {property:"Email", label:"Email", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-email"
  }}, {property:"Verified", label:"Verificado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$45$$) {
    switch($s$$45$$) {
      case 0:
        return"N\u00e3o";
      case 1:
        return"Pending";
      case 2:
        return"Progress";
      case 3:
        return"Yes - Level I";
      case 4:
        return"Yes - Level II";
      case 5:
        return"Yes - Level III";
      case 6:
        return"Yes - Level IV"
    }
  }, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-verified"
  }}, {property:"TwoFactorEnabled", label:"2 passos", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$46$$) {
    return $s$$46$$ ? "Sim" : "N\u00e3o"
  }, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-two-steps"
  }}, {property:"LastLogin", label:"\u00daltimo acesso", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-last-login"
  }}, {property:"ID", label:"A\u00e7\u00f5es", sortable:$JSCompiler_alias_TRUE$$, formatter:function($id$$10$$, $row_set_obj$$4$$) {
    var $data_row$$2$$ = $goog$json$serialize$$($row_set_obj$$4$$);
    return $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-primary btn-deposit", "data-row":$data_row$$2$$}, "detalhes")
  }, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-last-login"
  }}], showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"Username ou email...", wrapperHeight:600, buttonFilters:[{label:"All", value:"all"}, {label:"N\u00e3o", value:0}, {label:"Pending", value:1}, {label:"Progress", value:2}, {label:"Yes - Level I", value:3}, {label:"Yes - Level II", value:4}, {label:"Yes - Level III", value:5}]}, $opt_domHelper$$28$$)
}
$goog$inherits$$($bitex$ui$Customers$$, $bitex$ui$DataGrid$$);
var $bitex$ui$Customers$CSS_CLASS$$ = "customers";
$bitex$ui$Customers$$.prototype.$getCssClass$ = function $$bitex$ui$Customers$$$$$getCssClass$$() {
  return $bitex$ui$Customers$CSS_CLASS$$
};
$bitex$ui$Customers$$.prototype.$getRowClass$ = function $$bitex$ui$Customers$$$$$getRowClass$$($row_set$$7$$) {
  return 2 == $row_set$$7$$.Verified ? $bitex$ui$Customers$CSS_CLASS$$ + "-verified" : 1 == $row_set$$7$$.Verified ? $bitex$ui$Customers$CSS_CLASS$$ + "-verification-pending" : $bitex$ui$Customers$CSS_CLASS$$ + "-non-verified"
};
$bitex$ui$Customers$$.prototype.$enterDocument$ = function $$bitex$ui$Customers$$$$$enterDocument$$() {
  $bitex$ui$Customers$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", function($e$$153$$) {
    this.$selected_customer_$ = $goog$json$parse$$($e$$153$$.target.getAttribute("data-row"));
    this.$selected_customer_$ != $JSCompiler_alias_NULL$$ && this.dispatchEvent("detail")
  })
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$Customers$CSS_CLASS$$, function() {
  return new $bitex$ui$Customers$$
});
// Input 140
function $bitex$ui$OrderBook$templates$OrderBook$$($columnList6_opt_data$$42$$) {
  var $output$$38$$ = '<div class="text-center"><h4>' + $soy$$0$0escapeHtml$$($columnList6_opt_data$$42$$.title) + '</h4></div><table class="table"><thead><tr>';
  $columnList6_opt_data$$42$$ = $columnList6_opt_data$$42$$.$columns$;
  for(var $columnListLen6$$ = $columnList6_opt_data$$42$$.length, $columnIndex6$$ = 0;$columnIndex6$$ < $columnListLen6$$;$columnIndex6$$++) {
    $output$$38$$ += "<th>" + $soy$$0$0escapeHtml$$($columnList6_opt_data$$42$$[$columnIndex6$$]) + "</th>"
  }
  return $output$$38$$ + "</tr></thead><tbody></tbody></table>"
}
;
// Input 141
function $bitex$ui$OrderBook$$($username$$4$$, $side$$6$$, $qtyCurrencyDef$$, $priceCurrencyDef$$, $opt_blinkDelay$$2$$, $opt_domHelper$$29$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$29$$);
  this.$blink_delay_$ = $opt_blinkDelay$$2$$ || 700;
  this.$qtyCurrencyDef_$ = $qtyCurrencyDef$$;
  this.$priceCurrencyDef_$ = $priceCurrencyDef$$;
  this.$username_$ = $username$$4$$;
  this.$side_$ = $side$$6$$
}
$goog$inherits$$($bitex$ui$OrderBook$$, $goog$ui$Component$$);
var $bitex$ui$OrderBook$Side$BUY$$ = "0", $bitex$ui$OrderBook$Side$SELL$$ = "1", $bitex$ui$OrderBook$EventType$CANCEL$$ = "cancel";
$JSCompiler_prototypeAlias$$ = $bitex$ui$OrderBook$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("order-book");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $el$$107_title$$10$$ = "COMPRA", $columns$$6$$ = ["Comprador", "Quantidade", "Pre\u00e7o"];
  this.$side_$ == $bitex$ui$OrderBook$Side$SELL$$ && ($el$$107_title$$10$$ = "VENDA", $columns$$6$$ = ["Pre\u00e7o", "Quantidade", "Vendedor"]);
  $el$$107_title$$10$$ = $goog$soy$renderAsElement$$($bitex$ui$OrderBook$templates$OrderBook$$, {title:$el$$107_title$$10$$, $columns$:$columns$$6$$});
  this.$decorateInternal$($el$$107_title$$10$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$186$$) {
  this.$element_$ = $element$$186$$;
  var $JSCompiler_StaticMethods_getElementsByTagNameAndClass$self$$inline_752$$ = this.$getDomHelper$();
  this.$bodyEl_$ = $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_StaticMethods_getElementsByTagNameAndClass$self$$inline_752$$.$document_$, "tbody", $JSCompiler_alias_VOID$$, $element$$186$$)[0]
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$OrderBook$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", this.$onClick_$)
};
$JSCompiler_prototypeAlias$$.$onClick_$ = function $$JSCompiler_prototypeAlias$$$$onClick_$$($e$$154$$) {
  var $cxlEl_orderId$$3$$ = $e$$154$$.target;
  if("A" == $cxlEl_orderId$$3$$.tagName || "I" == $cxlEl_orderId$$3$$.tagName) {
    $cxlEl_orderId$$3$$ = $cxlEl_orderId$$3$$.getAttribute("data-order-id"), $cxlEl_orderId$$3$$ != $JSCompiler_alias_NULL$$ && (this.dispatchEvent(new $bitex$ui$OrderBookEvent$$($bitex$ui$OrderBook$EventType$CANCEL$$, $cxlEl_orderId$$3$$)), $e$$154$$.preventDefault(), $e$$154$$.stopPropagation())
  }
};
function $bitex$ui$OrderBookEvent$$($type$$107$$, $orderId$$4$$) {
  $goog$events$Event$$.call(this, $type$$107$$);
  this.$order_id$ = $orderId$$4$$
}
$goog$inherits$$($bitex$ui$OrderBookEvent$$, $goog$events$Event$$);
$bitex$ui$OrderBook$$.prototype.clear = function $$bitex$ui$OrderBook$$$$clear$() {
  this.$getDomHelper$();
  $goog$dom$removeChildren$$(this.$bodyEl_$)
};
function $JSCompiler_StaticMethods_deleteOrderThru$$($JSCompiler_StaticMethods_deleteOrderThru$self$$, $index$$79$$) {
  $JSCompiler_StaticMethods_deleteOrderThru$self$$.$getDomHelper$();
  for(var $child$$17$$;($child$$17$$ = $JSCompiler_StaticMethods_deleteOrderThru$self$$.$bodyEl_$.firstChild) && 0 < $index$$79$$;) {
    $JSCompiler_StaticMethods_deleteOrderThru$self$$.$bodyEl_$.removeChild($child$$17$$), $index$$79$$--
  }
}
function $JSCompiler_StaticMethods_deleteOrder$$($JSCompiler_StaticMethods_deleteOrder$self$$, $index$$80$$) {
  var $dom$$20$$ = $JSCompiler_StaticMethods_deleteOrder$self$$.$getDomHelper$(), $trEl$$ = $dom$$20$$.$getChildren$($JSCompiler_StaticMethods_deleteOrder$self$$.$bodyEl_$)[$index$$80$$];
  $dom$$20$$.removeNode($trEl$$)
}
function $JSCompiler_StaticMethods_updateOrder$$($JSCompiler_StaticMethods_updateOrder$self$$, $index$$81_trEl$$1$$, $qty$$2$$) {
  var $dom$$21$$ = $JSCompiler_StaticMethods_updateOrder$self$$.$getDomHelper$();
  $qty$$2$$ = (new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_updateOrder$self$$.$qtyCurrencyDef_$.$format$, $JSCompiler_StaticMethods_updateOrder$self$$.$qtyCurrencyDef_$.code)).$format$($qty$$2$$);
  $index$$81_trEl$$1$$ = $dom$$21$$.$getChildren$($JSCompiler_StaticMethods_updateOrder$self$$.$bodyEl_$)[$index$$81_trEl$$1$$];
  var $tdQtyEl$$ = $dom$$21$$.$getChildren$($index$$81_trEl$$1$$)[1];
  $dom$$21$$.$setTextContent$($tdQtyEl$$, $qty$$2$$);
  $goog$dom$classes$add$$($tdQtyEl$$, "warning");
  $goog$Timer$callOnce$$(function() {
    $goog$dom$classes$remove$$($tdQtyEl$$, "warning")
  }, $JSCompiler_StaticMethods_updateOrder$self$$.$blink_delay_$, $JSCompiler_StaticMethods_updateOrder$self$$)
}
function $JSCompiler_StaticMethods_insertOrder$$($JSCompiler_StaticMethods_insertOrder$self$$, $index$$82$$, $id$$11$$, $price$$3_priceEl$$, $qty$$3_qtyEl$$, $td_list_userNameEl_username$$5$$, $broker$$4$$) {
  var $dom$$22$$ = $JSCompiler_StaticMethods_insertOrder$self$$.$getDomHelper$(), $formatter$$8$$ = new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_insertOrder$self$$.$qtyCurrencyDef_$.$format$, $JSCompiler_StaticMethods_insertOrder$self$$.$qtyCurrencyDef_$.code);
  $qty$$3_qtyEl$$ = $formatter$$8$$.$format$($qty$$3_qtyEl$$);
  $formatter$$8$$ = new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_insertOrder$self$$.$priceCurrencyDef_$.$format$, $JSCompiler_StaticMethods_insertOrder$self$$.$priceCurrencyDef_$.code);
  $price$$3_priceEl$$ = $formatter$$8$$.$format$($price$$3_priceEl$$);
  $price$$3_priceEl$$ = $dom$$22$$.$createDom$("td", $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-price", $price$$3_priceEl$$);
  $qty$$3_qtyEl$$ = $dom$$22$$.$createDom$("td", $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-qty", $qty$$3_qtyEl$$);
  $td_list_userNameEl_username$$5$$ = $td_list_userNameEl_username$$5$$ === $JSCompiler_StaticMethods_insertOrder$self$$.$username_$ || $broker$$4$$ === $JSCompiler_StaticMethods_insertOrder$self$$.$username_$ ? $dom$$22$$.$createDom$("td", $JSCompiler_alias_VOID$$, $dom$$22$$.$createDom$("a", {"class":"btn-cancel-order text-error", href:"", "data-order-id":$id$$11$$}, $dom$$22$$.$createDom$("i", {"class":"icon-remove", style:"line-height: 2px;", "data-order-id":$id$$11$$}, "  " + $td_list_userNameEl_username$$5$$))) : 
  $dom$$22$$.$createDom$("td", $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-username", $td_list_userNameEl_username$$5$$);
  $JSCompiler_StaticMethods_insertOrder$self$$.$side_$ == $bitex$ui$OrderBook$Side$BUY$$ ? ($goog$dom$classes$add$$($td_list_userNameEl_username$$5$$, $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-left"), $goog$dom$classes$add$$($price$$3_priceEl$$, $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-right"), $td_list_userNameEl_username$$5$$ = [$td_list_userNameEl_username$$5$$, $qty$$3_qtyEl$$, $price$$3_priceEl$$]) : ($goog$dom$classes$add$$($td_list_userNameEl_username$$5$$, 
  $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-right"), $goog$dom$classes$add$$($price$$3_priceEl$$, $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-left"), $td_list_userNameEl_username$$5$$ = [$price$$3_priceEl$$, $qty$$3_qtyEl$$, $td_list_userNameEl_username$$5$$]);
  var $rowEl$$ = $dom$$22$$.$createDom$("tr", {"data-order-id":$id$$11$$, "class":$JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-row"}, $td_list_userNameEl_username$$5$$);
  $dom$$22$$.$insertChildAt$($JSCompiler_StaticMethods_insertOrder$self$$.$bodyEl_$, $rowEl$$, $index$$82$$);
  $goog$dom$classes$add$$($rowEl$$, "warning");
  $goog$Timer$callOnce$$(function() {
    $goog$dom$classes$remove$$($rowEl$$, "warning")
  }, $JSCompiler_StaticMethods_insertOrder$self$$.$blink_delay_$, $JSCompiler_StaticMethods_insertOrder$self$$)
}
;
// Input 142
function $bitex$view$BrokerView$$($app$$9$$, $opt_domHelper$$30$$) {
  $bitex$view$View$$.call(this, $app$$9$$, $opt_domHelper$$30$$)
}
$goog$inherits$$($bitex$view$BrokerView$$, $bitex$view$View$$);
$bitex$view$BrokerView$$.prototype.$enterDocument$ = function $$bitex$view$BrokerView$$$$$enterDocument$$() {
  $bitex$view$BrokerView$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$app_$.$model_$, "model_setBroker", this.$onModelSetBroker_$)
};
$bitex$view$BrokerView$$.prototype.$enterView$ = function $$bitex$view$BrokerView$$$$$enterView$$() {
  $bitex$view$BrokerView$$.$superClass_$.$enterView$.call(this);
  this.$onModelSetBroker_$()
};
$bitex$view$BrokerView$$.prototype.$onModelSetBroker_$ = function $$bitex$view$BrokerView$$$$$onModelSetBroker_$$() {
  var $broker_list$$2_model$$19$$ = this.$app_$.$model_$, $broker$$5$$ = $broker_list$$2_model$$19$$.get("Broker");
  if($broker$$5$$ != $JSCompiler_alias_NULL$$) {
    var $broker_list$$2_model$$19$$ = $broker_list$$2_model$$19$$.get("BrokerList"), $fmt$$7$$ = new $goog$i18n$NumberFormat$$(3);
    $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$7$$, 2);
    $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$7$$);
    $broker$$5$$.FormattedTransactionFeeBuy = $fmt$$7$$.$format$($broker$$5$$.TransactionFeeBuy / 1E4);
    $broker$$5$$.FormattedTransactionFeeSell = $fmt$$7$$.$format$($broker$$5$$.TransactionFeeSell / 1E4);
    $goog$soy$renderElement$$($goog$dom$getElement$$("my_broker"), $bitex$templates$BrokerView$$, {$show_title$:$JSCompiler_alias_TRUE$$, $msg_broker$:$broker$$5$$, $broker_list$:$broker_list$$2_model$$19$$})
  }
};
// Input 143
// Input 144
function $goog$history$Event$$($token$$7$$, $isNavigation$$) {
  $goog$events$Event$$.call(this, "navigate");
  this.$token$ = $token$$7$$;
  this.$isNavigation$ = $isNavigation$$
}
$goog$inherits$$($goog$history$Event$$, $goog$events$Event$$);
// Input 145
function $goog$history$Html5History$$($opt_win$$, $opt_transformer$$) {
  $goog$Disposable$$.call(this);
  this.$window_$ = $opt_win$$ || window;
  this.$transformer_$ = $opt_transformer$$ || $JSCompiler_alias_NULL$$;
  $goog$events$listen$$(this.$window_$, "popstate", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this);
  $goog$events$listen$$(this.$window_$, "hashchange", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this)
}
$goog$inherits$$($goog$history$Html5History$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$history$Html5History$$.prototype;
$JSCompiler_prototypeAlias$$.$enabled_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$useFragment_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$pathPrefix_$ = "/";
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enable$$23$$) {
  $enable$$23$$ != this.$enabled_$ && (this.$enabled_$ = $enable$$23$$) && this.dispatchEvent(new $goog$history$Event$$(this.$getToken$(), $JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$getToken$ = function $$JSCompiler_prototypeAlias$$$$getToken$$() {
  if(this.$useFragment_$) {
    var $loc$$ = this.$window_$.location.href, $index$$83$$ = $loc$$.indexOf("#");
    return 0 > $index$$83$$ ? "" : $loc$$.substring($index$$83$$ + 1)
  }
  return this.$transformer_$ ? this.$transformer_$.$retrieveToken$(this.$pathPrefix_$, this.$window_$.location) : this.$window_$.location.pathname.substr(this.$pathPrefix_$.length)
};
function $JSCompiler_StaticMethods_setToken$$($JSCompiler_StaticMethods_setToken$self$$, $token$$8$$) {
  $token$$8$$ != $JSCompiler_StaticMethods_setToken$self$$.$getToken$() && ($JSCompiler_StaticMethods_setToken$self$$.$window_$.history.pushState($JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_setToken$self$$.$window_$.document.title || "", $JSCompiler_StaticMethods_setToken$self$$.$useFragment_$ ? "#" + $token$$8$$ : $JSCompiler_StaticMethods_setToken$self$$.$transformer_$ ? $JSCompiler_StaticMethods_setToken$self$$.$transformer_$.$createUrl$($token$$8$$, $JSCompiler_StaticMethods_setToken$self$$.$pathPrefix_$, 
  $JSCompiler_StaticMethods_setToken$self$$.$window_$.location) : $JSCompiler_StaticMethods_setToken$self$$.$pathPrefix_$ + $token$$8$$ + $JSCompiler_StaticMethods_setToken$self$$.$window_$.location.search), $JSCompiler_StaticMethods_setToken$self$$.dispatchEvent(new $goog$history$Event$$($token$$8$$, $JSCompiler_alias_FALSE$$)))
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$unlisten$$(this.$window_$, "popstate", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this);
  this.$useFragment_$ && $goog$events$unlisten$$(this.$window_$, "hashchange", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this)
};
$JSCompiler_prototypeAlias$$.$onHistoryEvent_$ = function $$JSCompiler_prototypeAlias$$$$onHistoryEvent_$$() {
  this.$enabled_$ && this.dispatchEvent(new $goog$history$Event$$(this.$getToken$(), $JSCompiler_alias_TRUE$$))
};
// Input 146
function $bitex$app$UrlRouter$$($app$$10$$, $baseUrl$$, $defaultView$$) {
  this.$urls_$ = [];
  this.$app_$ = $app$$10$$;
  this.$history_$ = $JSCompiler_alias_NULL$$;
  this.$base_url_$ = $baseUrl$$;
  this.$default_view_$ = $defaultView$$
}
$goog$inherits$$($bitex$app$UrlRouter$$, $goog$events$EventTarget$$);
function $JSCompiler_StaticMethods_addView$$($JSCompiler_StaticMethods_addView$self$$, $view_name$$, $viewObject$$) {
  $JSCompiler_StaticMethods_addView$self$$.$urls_$.push({$re$:$view_name$$, view:$viewObject$$})
}
function $JSCompiler_StaticMethods_setViewInternal$$($JSCompiler_StaticMethods_setViewInternal$self$$, $view_name$$1$$) {
  var $actual_view_name$$ = $goog$string$remove$$($view_name$$1$$, $JSCompiler_StaticMethods_setViewInternal$self$$.$base_url_$);
  "" === $actual_view_name$$ && ($actual_view_name$$ = $JSCompiler_StaticMethods_setViewInternal$self$$.$default_view_$);
  var $urlMapping$$ = $goog$array$find$$($JSCompiler_StaticMethods_setViewInternal$self$$.$urls_$, function($url_object$$) {
    if(RegExp($url_object$$.$re$, "g").exec($actual_view_name$$) != $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_TRUE$$
    }
  });
  if($urlMapping$$ == $JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setViewInternal$self$$.$current_view_$ === $actual_view_name$$) {
    return $JSCompiler_alias_FALSE$$
  }
  $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$.view.$exitView$();
  var $args$$13$$ = RegExp($urlMapping$$.$re$, "g").exec($actual_view_name$$).splice(2);
  $JSCompiler_StaticMethods_setViewInternal$self$$.$current_view_$ = $actual_view_name$$;
  $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$ = $urlMapping$$;
  $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$.view.$enterView$($args$$13$$);
  return $JSCompiler_alias_TRUE$$
}
$bitex$app$UrlRouter$$.prototype.$setView$ = function $$bitex$app$UrlRouter$$$$$setView$$($view_name$$2$$) {
  var $urlMapping$$1$$ = $goog$array$find$$(this.$urls_$, function($url_object$$1$$) {
    if(RegExp($url_object$$1$$.$re$, "g").exec($view_name$$2$$) != $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_TRUE$$
    }
  });
  if("/" === $view_name$$2$$[0] && $urlMapping$$1$$ == $JSCompiler_alias_NULL$$) {
    this.$setView$($view_name$$2$$.substr(1))
  }else {
    var $actual_view_name$$1_view_url$$1$$ = $goog$string$remove$$($view_name$$2$$, this.$base_url_$), $view_args_view_data$$1$$ = RegExp($urlMapping$$1$$.$re$, "g").exec($actual_view_name$$1_view_url$$1$$), $actual_view_name$$1_view_url$$1$$ = $view_args_view_data$$1$$[0], $view_id$$1$$ = $view_args_view_data$$1$$[1], $view_args_view_data$$1$$ = $view_args_view_data$$1$$.splice(2);
    this.dispatchEvent(new $bitex$app$UrlRouterEvent$$("set_view", $view_id$$1$$, $urlMapping$$1$$.view, $view_args_view_data$$1$$, $actual_view_name$$1_view_url$$1$$)) && $JSCompiler_StaticMethods_setViewInternal$$(this, $view_name$$2$$) && this.$history_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setToken$$(this.$history_$, this.$base_url_$ + $view_name$$2$$)
  }
};
$bitex$app$UrlRouter$$.prototype.init = function $$bitex$app$UrlRouter$$$$init$() {
  var $JSCompiler_StaticMethods_setUseFragment$self$$inline_762$$ = this.$history_$ = new $goog$history$Html5History$$;
  $JSCompiler_StaticMethods_setUseFragment$self$$inline_762$$.$useFragment_$ != $JSCompiler_alias_TRUE$$ && ($goog$events$listen$$($JSCompiler_StaticMethods_setUseFragment$self$$inline_762$$.$window_$, "hashchange", $JSCompiler_StaticMethods_setUseFragment$self$$inline_762$$.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_setUseFragment$self$$inline_762$$), $JSCompiler_StaticMethods_setUseFragment$self$$inline_762$$.$useFragment_$ = $JSCompiler_alias_TRUE$$);
  this.$history_$.addEventListener("navigate", this.$onNavigate_$, $JSCompiler_alias_VOID$$, this);
  this.$history_$.$setEnabled$($JSCompiler_alias_TRUE$$)
};
$bitex$app$UrlRouter$$.prototype.$onNavigate_$ = function $$bitex$app$UrlRouter$$$$$onNavigate_$$($e$$157_urlMapping$$2$$) {
  if($e$$157_urlMapping$$2$$.$isNavigation$) {
    var $view_name$$3$$ = $e$$157_urlMapping$$2$$.$token$;
    $e$$157_urlMapping$$2$$ = $goog$array$find$$(this.$urls_$, function($url_object$$2$$) {
      if(RegExp($url_object$$2$$.$re$, "g").exec($view_name$$3$$) != $JSCompiler_alias_NULL$$) {
        return $JSCompiler_alias_TRUE$$
      }
    });
    var $actual_view_name$$2_view_url$$2$$ = $goog$string$remove$$($view_name$$3$$, this.$base_url_$), $view_args$$1_view_data$$2$$ = RegExp($e$$157_urlMapping$$2$$.$re$, "g").exec($actual_view_name$$2_view_url$$2$$), $actual_view_name$$2_view_url$$2$$ = $view_args$$1_view_data$$2$$[0], $view_id$$2$$ = $view_args$$1_view_data$$2$$[1], $view_args$$1_view_data$$2$$ = $view_args$$1_view_data$$2$$.splice(2);
    this.dispatchEvent(new $bitex$app$UrlRouterEvent$$("set_view", $view_id$$2$$, $e$$157_urlMapping$$2$$.view, $view_args$$1_view_data$$2$$, $actual_view_name$$2_view_url$$2$$)) && $JSCompiler_StaticMethods_setViewInternal$$(this, $view_name$$3$$)
  }
};
function $bitex$app$UrlRouterEvent$$($type$$108$$, $view_id$$3$$, $view$$3$$, $view_args$$2$$, $view_url$$3$$) {
  $goog$events$Event$$.call(this, $type$$108$$);
  this.$view_id$ = $view_id$$3$$;
  this.view = $view$$3$$;
  this.$view_args$ = $view_args$$2$$;
  this.$view_url$ = $view_url$$3$$
}
$goog$inherits$$($bitex$app$UrlRouterEvent$$, $goog$events$Event$$);
// Input 147
function $bitex$view$CustomersView$$($app$$11$$, $opt_domHelper$$31$$) {
  $bitex$view$View$$.call(this, $app$$11$$, $opt_domHelper$$31$$);
  this.$confirmation_token_$ = this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$CustomersView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$CustomersView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$CustomersView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$CustomersView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$CustomersView$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $bitex$view$CustomersView$$.$superClass_$.$disposeInternal$.call(this)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$70$$ = this.$getHandler$();
  this.$customers_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$70$$, this.$customers_table_$, "request_data", this.$onCustomerListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$70$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onCustomerListReponse_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_id_$ = this.$customers_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$71$$ = this.$getHandler$();
  this.$customers_table_$ != $JSCompiler_alias_NULL$$ ? this.$customers_table_$.reload() : (this.$request_id_$ = parseInt(1E7 * Math.random(), 10), this.$customers_table_$ = new $bitex$ui$Customers$$, $JSCompiler_StaticMethods_listen$$($handler$$71$$, this.$customers_table_$, "request_data", this.$onCustomerListTableRequestData_$), $JSCompiler_StaticMethods_listen$$($handler$$71$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onCustomerListReponse_$), 
  $JSCompiler_StaticMethods_listen$$($handler$$71$$, this.$customers_table_$, "detail", this.$onUserDetailsClick_$), $JSCompiler_StaticMethods_addChild$$(this, this.$customers_table_$, $JSCompiler_alias_TRUE$$))
};
$JSCompiler_prototypeAlias$$.$onUserDetailsClick_$ = function $$JSCompiler_prototypeAlias$$$$onUserDetailsClick_$$($data$$35_e$$158$$) {
  $data$$35_e$$158$$ = $data$$35_e$$158$$.target.$selected_customer_$;
  this.$app_$.$model_$.set("SelectedCustomer", $data$$35_e$$158$$);
  this.$app_$.$setView$("account_overview/" + $data$$35_e$$158$$.Username + "/")
};
$JSCompiler_prototypeAlias$$.$onCustomerListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onCustomerListTableRequestData_$$($e$$159$$) {
  var $page$$ = $e$$159$$.options.Page, $limit$$1$$ = $e$$159$$.options.Limit, $filter$$6$$ = $e$$159$$.options.Filter, $status$$2$$ = [0, 1, 2, 3, 4, 5];
  $filter$$6$$ != $JSCompiler_alias_NULL$$ && ($goog$array$forEach$$($filter$$6$$, function($f$$46$$, $idx_filter$$) {
    if(0 <= $goog$array$indexOf$$($status$$2$$, parseInt($f$$46$$, 10))) {
      return $status$$2$$ = [parseInt($f$$46$$)], $goog$array$removeAt$$($filter$$6$$, $idx_filter$$), $JSCompiler_alias_TRUE$$
    }
  }, this), 0 == $filter$$6$$.length && ($filter$$6$$ = $JSCompiler_alias_VOID$$));
  this.$app_$.$conn_$.$requestCustomerList$(this.$request_id_$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $filter$$6$$, $page$$, $limit$$1$$, $status$$2$$)
};
$JSCompiler_prototypeAlias$$.$onCustomerListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onCustomerListReponse_$$($e$$160_msg$$20$$) {
  this.$customers_table_$ != $JSCompiler_alias_NULL$$ && ($e$$160_msg$$20$$ = $e$$160_msg$$20$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$customers_table_$, $e$$160_msg$$20$$.CustomerListGrp, $e$$160_msg$$20$$.Columns))
};
// Input 148
function $bitex$ui$DepositList$$($crypto_currencies_def$$, $opt_broker_mode$$1_show_customers$$1$$, $grid_columns$$3_opt_show_customers$$1$$, $opt_rest_url$$, $opt_domHelper$$32$$) {
  var $broker_mode$$1$$ = $JSCompiler_alias_FALSE$$;
  $opt_broker_mode$$1_show_customers$$1$$ === $JSCompiler_alias_TRUE$$ && ($broker_mode$$1$$ = $opt_broker_mode$$1_show_customers$$1$$);
  $opt_broker_mode$$1_show_customers$$1$$ = $JSCompiler_alias_FALSE$$;
  $grid_columns$$3_opt_show_customers$$1$$ === $JSCompiler_alias_TRUE$$ && ($opt_broker_mode$$1_show_customers$$1$$ = $grid_columns$$3_opt_show_customers$$1$$);
  $grid_columns$$3_opt_show_customers$$1$$ = [{property:"Created", label:"Data/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-created"
  }}, {property:"Status", label:"Situa\u00e7\u00e3o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$47$$, $rowSet$$3$$) {
    var $progress_message$$ = "Em andamento...", $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = $JSCompiler_alias_NULL$$;
    if("CRY" == $rowSet$$3$$.Type && ($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = $goog$array$find$$($crypto_currencies_def$$, function($c$$9$$) {
      if($c$$9$$.CurrencyCode == $rowSet$$3$$.Currency) {
        return $JSCompiler_alias_TRUE$$
      }
    }), $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ != $JSCompiler_alias_NULL$$)) {
      var $confirmation_info_array_number_of_confirmations$$;
      $rowSet$$3$$.PaidValue != $JSCompiler_alias_NULL$$ && 0 < $rowSet$$3$$.PaidValue && ($confirmation_info_array_number_of_confirmations$$ = $goog$array$find$$($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$.Confirmations, function($conf_info$$) {
        if($rowSet$$3$$.PaidValue >= $conf_info$$[0] && $rowSet$$3$$.PaidValue < $conf_info$$[1]) {
          return $JSCompiler_alias_TRUE$$
        }
      }));
      $confirmation_info_array_number_of_confirmations$$ != $JSCompiler_alias_NULL$$ && ($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = $confirmation_info_array_number_of_confirmations$$[2], $confirmation_info_array_number_of_confirmations$$ = 0, $goog$isDef$$($rowSet$$3$$.Data) && $goog$isDef$$($rowSet$$3$$.Data.Confirmations) && ($confirmation_info_array_number_of_confirmations$$ = $rowSet$$3$$.Data.Confirmations), $progress_message$$ = $confirmation_info_array_number_of_confirmations$$ + 
      (" of " + ($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ + " confirmations")))
    }
    $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = function($s$$48$$) {
      switch($s$$48$$) {
        case "0":
          return["", "N\u00e3o confirmado"];
        case "1":
          return["warning", "Pendente"];
        case "2":
          return["info", $progress_message$$];
        case "4":
          return["success", "Completo"];
        case "8":
          return["important", "Cancelado"]
      }
      return["", ""]
    }($s$$47$$);
    return $goog$dom$createDom$$("span", ["label", "label-" + $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$[0]], $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$[1])
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-status"
  }}, {property:"Value", label:"Valor", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-value"
  }}, {property:"ControlNumber", label:"N\u00famero de controle", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$165$$, $rowSet$$4$$) {
    switch($rowSet$$4$$.Type) {
      case "CRY":
        var $top_el$$ = $goog$dom$createDom$$("div");
        $goog$style$setStyle$$($top_el$$, "position", "relative");
        $goog$style$setWidth$$($top_el$$, 120);
        var $blockchain_address_inner_el$$ = $goog$dom$createDom$$("div", $JSCompiler_alias_VOID$$, $goog$dom$createDom$$("span", $JSCompiler_alias_VOID$$, $rowSet$$4$$.Data.InputAddress));
        if("BTC" == $rowSet$$4$$.Currency) {
          $blockchain_address_inner_el$$ = "https://blockchain.info/address/" + $rowSet$$4$$.Data.InputAddress;
          switch($rowSet$$4$$.Data.InputAddress[0]) {
            case "m":
            ;
            case "n":
            ;
            case "2":
            ;
            case "9":
            ;
            case "c":
              $blockchain_address_inner_el$$ = "https://test-insight.bitpay.com/address/" + $rowSet$$4$$.Data.InputAddress
          }
          $blockchain_address_inner_el$$ = $goog$dom$createDom$$("div", $JSCompiler_alias_VOID$$, $goog$dom$createDom$$("a", {href:$blockchain_address_inner_el$$, target:"blank_"}, $rowSet$$4$$.Data.InputAddress))
        }
        $blockchain_address_inner_el$$.style[$goog$userAgent$IE$$ ? "styleFloat" : "cssFloat"] = "left";
        $goog$style$setStyle$$($blockchain_address_inner_el$$, "max-width", "110px");
        $goog$style$setStyle$$($blockchain_address_inner_el$$, "overflow", "hidden");
        $goog$style$setStyle$$($blockchain_address_inner_el$$, "text-overflow", "ellipsis");
        $goog$style$setStyle$$($blockchain_address_inner_el$$, "white-space", "nowrap");
        $top_el$$.appendChild($blockchain_address_inner_el$$);
        return $top_el$$;
      default:
        return"" + $value$$165$$
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-method"
  }}, {property:"Data", label:"Detalhes", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$166$$, $rowSet$$5$$) {
    var $btn_qr$$1_data_row$$3$$ = $goog$json$serialize$$($rowSet$$5$$), $btn_view$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-deposit-view", href:$opt_rest_url$$ + "/get_deposit?deposit_id=" + $rowSet$$5$$.DepositID, target:"_blank"}, "ver", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-eye-open"])), $btn_qr$$1_data_row$$3$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-deposit-view-qr", href:"#", "data-action":"SHOW_QR", "data-row":$btn_qr$$1_data_row$$3$$}, 
    "QR", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-qrcode"]));
    switch($rowSet$$5$$.Type) {
      case "CRY":
        switch($rowSet$$5$$.Status) {
          case "0":
          ;
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_qr$$1_data_row$$3$$]);
          case "2":
          ;
          case "4":
          ;
          case "8":
            return""
        }
        break;
      case "BBS":
      ;
      case "WTP":
      ;
      case "DTP":
        switch($rowSet$$5$$.Status) {
          case "0":
          ;
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_view$$]);
          case "2":
          ;
          case "4":
          ;
          case "8":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_view$$])
        }
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-details"
  }}];
  $opt_broker_mode$$1_show_customers$$1$$ && $grid_columns$$3_opt_show_customers$$1$$.push({property:"Username", label:"Username", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-username"
  }});
  $broker_mode$$1$$ ? $grid_columns$$3_opt_show_customers$$1$$.push({property:"DepositID", label:"A\u00e7\u00f5es", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$167$$, $rowSet$$6$$) {
    var $btn_show_receipt_broker_data_row$$4$$ = $goog$json$serialize$$($rowSet$$6$$), $btn_cancel$$1$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-danger btn-deposit-cancel", href:"#", "data-action":"CANCEL", "data-row":$btn_show_receipt_broker_data_row$$4$$}, "cancelar", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-remove"])), $btn_progress$$1$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-deposit-progress", href:"#", "data-action":"PROGRESS", "data-row":$btn_show_receipt_broker_data_row$$4$$}, 
    "Em andamento", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-refresh"])), $btn_complete$$1$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-complete", href:"#", "data-action":"COMPLETE", "data-row":$btn_show_receipt_broker_data_row$$4$$}, "Completar", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-ok"])), $btn_show_receipt_broker_data_row$$4$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-show-receipt", "data-action":"SHOW_RECEIPT", 
    "data-row":$btn_show_receipt_broker_data_row$$4$$}, $goog$dom$createDom$$("i", ["icon-white", "icon-file"]));
    switch($rowSet$$6$$.Type) {
      case "CRY":
        switch($rowSet$$6$$.Status) {
          case "0":
          ;
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_progress$$1$$]);
          case "2":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_complete$$1$$]);
          case "4":
            return"";
          case "8":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_progress$$1$$])
        }
        break;
      default:
        switch($rowSet$$6$$.Status) {
          case "0":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$1$$, $btn_progress$$1$$]);
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_show_receipt_broker_data_row$$4$$, $btn_cancel$$1$$, $btn_progress$$1$$]);
          case "2":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_show_receipt_broker_data_row$$4$$, $btn_cancel$$1$$, $btn_complete$$1$$]);
          case "4":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$1$$]);
          case "8":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_progress$$1$$])
        }
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-actions"
  }}) : $grid_columns$$3_opt_show_customers$$1$$.push({property:"DepositID", label:"A\u00e7\u00f5es", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$168$$, $rowSet$$7$$) {
    var $btn_show_receipt_data_row$$5$$ = $goog$json$serialize$$($rowSet$$7$$), $btn_upload$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-upload", "data-action":"UPLOAD", "data-row":$btn_show_receipt_data_row$$5$$}, "enviar recibo", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-file"])), $btn_show_receipt_data_row$$5$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-show-receipt", "data-action":"SHOW_RECEIPT", "data-row":$btn_show_receipt_data_row$$5$$}, 
    $goog$dom$createDom$$("i", ["icon-white", "icon-file"]));
    switch($rowSet$$7$$.Type) {
      case "CRY":
        switch($rowSet$$7$$.Status) {
          case "0":
          ;
          case "1":
          ;
          case "2":
          ;
          case "4":
          ;
          case "8":
            return""
        }
        break;
      default:
        switch($rowSet$$7$$.Status) {
          case "0":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_upload$$]);
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_show_receipt_data_row$$5$$]);
          case "2":
          ;
          case "4":
          ;
          case "8":
            return""
        }
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-actions"
  }});
  this.$selected_deposit_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {rowIDFn:this.$getRowId$, rowClassFn:this.$getRowClass$, columns:$grid_columns$$3_opt_show_customers$$1$$, title:"Deposits", showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"Search ...", wrapperHeight:600, buttonFilters:[{label:"All", value:"all"}, {label:"N\u00e3o confirmado", value:"0"}, {label:"Pendente", value:"1"}, {label:"Em andamento...", value:"2"}, {label:"Completo", value:"4"}, {label:"Cancelado", value:"8"}]}, $opt_domHelper$$32$$)
}
$goog$inherits$$($bitex$ui$DepositList$$, $bitex$ui$DataGrid$$);
var $bitex$ui$DepositList$CSS_CLASS$$ = "deposit-list";
$JSCompiler_prototypeAlias$$ = $bitex$ui$DepositList$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = function $$JSCompiler_prototypeAlias$$$$getCssClass$$() {
  return $bitex$ui$DepositList$CSS_CLASS$$
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$DepositList$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", this.$handleClick_$)
};
$JSCompiler_prototypeAlias$$.$getDepositData$ = $JSCompiler_get$$("$selected_deposit_$");
$JSCompiler_prototypeAlias$$.$handleClick_$ = function $$JSCompiler_prototypeAlias$$$$handleClick_$$($e$$161$$) {
  this.$selected_deposit_$ = $goog$json$parse$$($e$$161$$.target.getAttribute("data-row"));
  this.$selected_deposit_$ != $JSCompiler_alias_NULL$$ && ($goog$dom$classes$has$$($e$$161$$.target, "btn-deposit-complete") ? this.dispatchEvent("deposit_complete") : $goog$dom$classes$has$$($e$$161$$.target, "btn-deposit-progress") ? this.dispatchEvent("deposit_progress") : $goog$dom$classes$has$$($e$$161$$.target, "btn-deposit-cancel") && this.dispatchEvent("deposit_cancel"), this.$selected_deposit_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$getRowId$ = function $$JSCompiler_prototypeAlias$$$$getRowId$$($row_set$$8$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$8$$.DepositID)
};
$JSCompiler_prototypeAlias$$.$getRowClass$ = function $$JSCompiler_prototypeAlias$$$$getRowClass$$($row_set$$9$$) {
  var $class_status$$4$$;
  switch($row_set$$9$$.Status) {
    case "0":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-unconfirmed";
      break;
    case "1":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-pending";
      break;
    case "2":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-processing";
      break;
    case "4":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-complete";
      break;
    case "8":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-cancelled"
  }
  return $class_status$$4$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$DepositList$CSS_CLASS$$, function() {
  return new $bitex$ui$DepositList$$
});
// Input 149
function $bitex$view$DepositView$$($app$$12$$, $opt_requests_from_customers$$, $opt_domHelper$$33$$) {
  $bitex$view$View$$.call(this, $app$$12$$, $opt_domHelper$$33$$);
  this.$is_requests_from_customers_$ = $JSCompiler_alias_FALSE$$;
  $opt_requests_from_customers$$ === $JSCompiler_alias_TRUE$$ && (this.$is_requests_from_customers_$ = $opt_requests_from_customers$$);
  this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$DepositView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$DepositView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$DepositView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$DepositView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$getAmount$ = $JSCompiler_get$$("$amount_$");
$JSCompiler_prototypeAlias$$.$getDepositAction$ = $JSCompiler_get$$("$action_$");
$JSCompiler_prototypeAlias$$.$getDepositData$ = $JSCompiler_get$$("$data_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$DepositView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$73$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$73$$, this.$getElement$(), "click", function($e$$162$$) {
    "deposit" === $e$$162$$.target.getAttribute("data-action") && (console.log("deposit request click"), this.$currency_$ = $e$$162$$.target.getAttribute("data-currency"), this.dispatchEvent("request_deposit"))
  }, this)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$74$$ = this.$getHandler$(), $model$$21$$ = this.$app_$.$model_$;
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$74$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$74$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$74$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + 
  "." + $model$$21$$.get("UserID"), this.$onDepositRefresh_$), $JSCompiler_StaticMethods_unlisten$$($handler$$74$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_id_$ = this.$deposit_list_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$75$$ = this.$getHandler$(), $model$$22$$ = this.$app_$.$model_$;
  this.$destroyComponents_$();
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  var $broker$$6_profile$$ = $model$$22$$.get("Broker");
  $model$$22$$.get("IsBroker") && this.$is_requests_from_customers_$ ? ($broker$$6_profile$$ = $model$$22$$.get("Profile"), this.$deposit_list_table_$ = new $bitex$ui$DepositList$$($broker$$6_profile$$.CryptoCurrencies, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, this.$app_$.$rest_url_$)) : this.$deposit_list_table_$ = new $bitex$ui$DepositList$$($broker$$6_profile$$.CryptoCurrencies, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, this.$app_$.$rest_url_$);
  $JSCompiler_StaticMethods_listen$$($handler$$75$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$75$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$75$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $model$$22$$.get("UserID"), this.$onDepositRefresh_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$deposit_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$deposit_list_table_$, "Value", this.$valuePriceFormatter_$, this);
  $JSCompiler_StaticMethods_listen$$($handler$$75$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$)
};
$JSCompiler_prototypeAlias$$.$onDepositListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableClick_$$($e$$163$$) {
  var $element$$188$$ = $e$$163$$.target;
  "I" === $element$$188$$.tagName && ($element$$188$$ = $goog$dom$getParentElement$$($element$$188$$));
  var $data_action$$ = $element$$188$$.getAttribute("data-action");
  if($data_action$$ != $JSCompiler_alias_NULL$$) {
    switch($e$$163$$.preventDefault(), $e$$163$$.stopPropagation(), this.$action_$ = $data_action$$, this.$data_$ = $goog$json$parse$$($element$$188$$.getAttribute("data-row")), $data_action$$) {
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:this.$data_$.Data.InputAddress, Currency:this.$data_$.Currency};
        this.$qr_data_verb_$ = "DEPOSIT";
        this.dispatchEvent("show_qr");
        break;
      case "SHOW_RECEIPT":
        this.$receipt_data_$ = {SubmissionID:this.$data_$.Data.SubmissionID, DepositReceipt:this.$data_$.Data.DepositReceipt};
        this.dispatchEvent("show_receipt");
        break;
      case "UPLOAD":
        this.dispatchEvent("upload_receipt");
        break;
      case "CANCEL":
      ;
      case "PROGRESS":
      ;
      case "COMPLETE":
        this.dispatchEvent("process_deposit")
    }
  }
};
$JSCompiler_prototypeAlias$$.$valuePriceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$valuePriceFormatter_$$($value$$169$$, $rowSet$$8$$) {
  var $formatted_paid_value_paid_value$$ = $rowSet$$8$$.PaidValue, $priceCurrency$$ = $rowSet$$8$$.Currency, $currency_description$$ = this.$app_$.$getCurrencyDescription$($priceCurrency$$), $formatted_value$$ = this.$app_$.$formatCurrency$($value$$169$$ / 1E8, $priceCurrency$$);
  return 0 === $value$$169$$ ? 0 === $formatted_paid_value_paid_value$$ ? "-" : $goog$dom$createDom$$("abbr", {title:$currency_description$$}, this.$app_$.$formatCurrency$($formatted_paid_value_paid_value$$ / 1E8, $priceCurrency$$)) : 0 < $formatted_paid_value_paid_value$$ && $formatted_paid_value_paid_value$$ != $value$$169$$ ? ($formatted_paid_value_paid_value$$ = this.$app_$.$formatCurrency$($formatted_paid_value_paid_value$$ / 1E8, $priceCurrency$$), $goog$dom$createDom$$("abbr", {title:"declarado / pago em " + 
  $currency_description$$}, $formatted_value$$ + " / " + $formatted_paid_value_paid_value$$)) : $goog$dom$createDom$$("abbr", {title:$currency_description$$}, $formatted_value$$)
};
$JSCompiler_prototypeAlias$$.$onDepositListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableRequestData_$$($conn$$4_e$$164$$) {
  var $page$$1$$ = $conn$$4_e$$164$$.options.Page, $limit$$2$$ = $conn$$4_e$$164$$.options.Limit, $filter$$7$$ = $conn$$4_e$$164$$.options.Filter;
  $conn$$4_e$$164$$ = this.$app_$.$conn_$;
  var $model$$23$$ = this.$app_$.$model_$, $clientID$$ = $JSCompiler_alias_VOID$$;
  $model$$23$$.get("IsBroker") && !this.$is_requests_from_customers_$ && ($clientID$$ = $model$$23$$.get("UserID"));
  var $status$$4$$ = ["0", "1", "2", "4", "8"];
  $filter$$7$$ != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($filter$$7$$, function($f$$47$$, $idx_filter$$1$$) {
    if(0 <= $goog$array$indexOf$$($status$$4$$, $f$$47$$)) {
      return $status$$4$$ = [$f$$47$$], $goog$array$removeAt$$($filter$$7$$, $idx_filter$$1$$), $JSCompiler_alias_TRUE$$
    }
  }, this);
  $conn$$4_e$$164$$.$requestDepositList$(this.$request_id_$, $page$$1$$, $limit$$2$$, $status$$4$$, $clientID$$, $filter$$7$$)
};
$JSCompiler_prototypeAlias$$.$onDepositRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onDepositRefresh_$$($e$$165_msg$$21$$) {
  $e$$165_msg$$21$$ = $e$$165_msg$$21$$.data;
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$deposit_list_table_$, $e$$165_msg$$21$$)
};
$JSCompiler_prototypeAlias$$.$onDepositListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListReponse_$$($e$$166_msg$$22$$) {
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$166_msg$$22$$ = $e$$166_msg$$22$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$deposit_list_table_$, $e$$166_msg$$22$$.DepositListGrp, $e$$166_msg$$22$$.Columns))
};
// Input 150
function $bitex$view$TradingView$$($app$$13$$, $opt_domHelper$$34$$) {
  $bitex$view$View$$.call(this, $app$$13$$, $opt_domHelper$$34$$);
  this.$request_order_id_$ = this.$client_order_id$ = this.$order_id_$ = this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$;
  this.$bids_$ = [];
  this.$asks_$ = []
}
$goog$inherits$$($bitex$view$TradingView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$TradingView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$TradingView$$.$superClass_$.$enterView$.call(this);
  var $selected_symbol$$3$$ = this.$app_$.$model_$.get("SelectedSymbol");
  $selected_symbol$$3$$ != $JSCompiler_alias_NULL$$ && this.$recreateComponents_$($selected_symbol$$3$$)
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$TradingView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$76$$ = this.$getHandler$();
  if(this.$market_data_subscription_id_$ != $JSCompiler_alias_NULL$$) {
    var $conn$$5$$ = this.$app_$.$conn_$;
    $JSCompiler_StaticMethods_unlisten$$($handler$$76$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + this.$market_data_subscription_id_$, this.$onOBClear_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$76$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrdersThru_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$76$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$76$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBUpdateOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$76$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBNewOrder_$);
    this.dispatchEvent("md_unsubscribe");
    this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$
  }
  this.$bid_order_entry_$ != $JSCompiler_alias_NULL$$ && this.$bid_order_entry_$.$dispose$();
  this.$ask_order_entry_$ != $JSCompiler_alias_NULL$$ && this.$ask_order_entry_$.$dispose$();
  this.$order_manager_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$76$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$EXECUTION_REPORT$$, this.$onExecutionReport_$), $JSCompiler_StaticMethods_unlisten$$($handler$$76$$, this.$order_manager_table_$, "request_data", this.$onOrderManagerRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$76$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ + "." + this.$request_order_id_$, 
  this.$onOrderListResponse_$));
  $goog$dom$removeChildren$$($goog$dom$getElement$$("trading_order_entry_content"));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_order_id_$ = this.$order_manager_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$($conn$$6_selected_symbol$$4$$) {
  var $handler$$77$$ = this.$getHandler$(), $model$$25$$ = this.$app_$.$model_$;
  this.$market_data_subscription_symbol_$ !== $conn$$6_selected_symbol$$4$$.$symbol$ && (this.$destroyComponents_$(), this.$bid_order_entry_$ = new $bitex$ui$SimpleOrderEntry$$, this.$bid_order_entry_$.$setModel$({$username$:$model$$25$$.get("Username"), $symbol$:$conn$$6_selected_symbol$$4$$.$symbol$, $crypto_currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 3)), $crypto_currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 
  3)), $currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$4$$.$symbol$.substr(3)), $currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$4$$.$symbol$.substr(3)), $side$:"1", type:"2", $client_id$:$model$$25$$.get("UserID"), $broker_id$:$model$$25$$.get("BrokerID"), $currency_code$:$conn$$6_selected_symbol$$4$$.$symbol$.substr(3), $currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$4$$.$symbol$.substr(3)), $crypto_currency_code$:$conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 
  3), $crypto_currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 3)), $fee$:$model$$25$$.get("Broker").TransactionFeeBuy, $formatted_fee$:$model$$25$$.get("Broker").FormattedTransactionFeeBuy}), $JSCompiler_StaticMethods_addChild$$(this, this.$bid_order_entry_$, $JSCompiler_alias_TRUE$$), this.$ask_order_entry_$ = new $bitex$ui$SimpleOrderEntry$$, this.$ask_order_entry_$.$setModel$({$username$:$model$$25$$.get("Username"), $symbol$:$conn$$6_selected_symbol$$4$$.$symbol$, 
  $crypto_currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 3)), $crypto_currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 3)), $currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$4$$.$symbol$.substr(3)), $currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$4$$.$symbol$.substr(3)), $side$:"2", type:"2", $client_id$:$model$$25$$.get("UserID"), 
  $broker_id$:$model$$25$$.get("BrokerID"), $currency_code$:$conn$$6_selected_symbol$$4$$.$symbol$.substr(3), $currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$4$$.$symbol$.substr(3)), $crypto_currency_code$:$conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 3), $crypto_currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$4$$.$symbol$.substr(0, 3)), $fee$:$model$$25$$.get("Broker").TransactionFeeBuy, $formatted_fee$:$model$$25$$.get("Broker").FormattedTransactionFeeSell}), 
  $JSCompiler_StaticMethods_addChild$$(this, this.$ask_order_entry_$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, this.$bid_order_entry_$, "simple_order_entry_submitted", this.$onSimpleOrderAction_$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, this.$ask_order_entry_$, "simple_order_entry_submitted", this.$onSimpleOrderAction_$), this.$request_order_id_$ = parseInt(1E7 * Math.random(), 10), this.$order_manager_table_$ = new $bitex$ui$OrderManager$$("simple"), 
  $JSCompiler_StaticMethods_listen$$($handler$$77$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$EXECUTION_REPORT$$, this.$onExecutionReport_$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, this.$order_manager_table_$, "request_data", this.$onOrderManagerRequestData_$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ + "." + this.$request_order_id_$, this.$onOrderListResponse_$), $JSCompiler_StaticMethods_addChild$$(this, 
  this.$order_manager_table_$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "Side", this.$orderFormatter_$, this), $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "OrdStatus", this.$simpleStatusFormatter_$, this), $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "AvgPx", this.$avgPriceFormatter_$, this), $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "Volume", 
  this.$priceFormatter_$, this), $JSCompiler_StaticMethods_listen$$($handler$$77$$, this.$order_manager_table_$.$getElement$(), "click", this.$onCancelOrder_$), this.$market_data_subscription_id_$ = parseInt(1E7 * Math.random(), 10), this.$market_data_subscription_symbol_$ = $conn$$6_selected_symbol$$4$$.$symbol$, $conn$$6_selected_symbol$$4$$ = this.$app_$.$conn_$, $JSCompiler_StaticMethods_listen$$($handler$$77$$, $conn$$6_selected_symbol$$4$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + 
  this.$market_data_subscription_id_$, this.$onOBClear_$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, $conn$$6_selected_symbol$$4$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrdersThru_$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, $conn$$6_selected_symbol$$4$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, 
  $conn$$6_selected_symbol$$4$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBUpdateOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$77$$, $conn$$6_selected_symbol$$4$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBNewOrder_$), this.dispatchEvent("md_subscribe"))
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$TradingView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$78$$ = this.$getHandler$(), $model$$26$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$78$$, $model$$26$$, "model_setSelectedSymbol", function() {
    if(this.$is_active_$) {
      var $selected_symbol$$5$$ = $model$$26$$.get("SelectedSymbol");
      $model$$26$$.get("SelectedBrokerID");
      this.$recreateComponents_$($selected_symbol$$5$$)
    }
  }, this)
};
$JSCompiler_prototypeAlias$$.$orderFormatter_$ = function $$JSCompiler_prototypeAlias$$$$orderFormatter_$$($value$$170$$, $rowSet$$9$$) {
  var $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ = this.$app_$.$getQtyCurrencyFromSymbol$($rowSet$$9$$.Symbol), $orderQty$$ = this.$app_$.$formatCurrency$($rowSet$$9$$.OrderQty / 1E8, $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$, $JSCompiler_alias_TRUE$$), $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ = this.$app_$.$formatCurrency$($rowSet$$9$$.CumQty / 1E8, $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$, $JSCompiler_alias_TRUE$$), $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ = 
  "Bought " + ($MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ + (" of " + $orderQty$$)), $MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD$$ = "Sold " + ($MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ + (" of " + $orderQty$$)), $MSG_ORDER_MANAGER_DESC_BOUGHT$$ = "Bought " + $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$, $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ = "Sold " + $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$;
  switch($rowSet$$9$$.OrdStatus) {
    case "-":
    ;
    case "0":
      return"1" == $rowSet$$9$$.Side ? "Buying " + $orderQty$$ : "Selling " + $orderQty$$;
    case "1":
      return"1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ : $MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD$$;
    case "2":
      return"1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_BOUGHT$$ : $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$;
    case "4":
      return 0 == $rowSet$$9$$.CumQty ? "1" == $rowSet$$9$$.Side ? "Cancelled order to buy " + $orderQty$$ : "Cancelled order to sell " + $orderQty$$ : 0 < $rowSet$$9$$.CumQty && $rowSet$$9$$.CumQty < $orderQty$$ ? "1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ : $MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD$$ : "1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_BOUGHT$$ : $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$
  }
};
$JSCompiler_prototypeAlias$$.$simpleStatusFormatter_$ = function $$JSCompiler_prototypeAlias$$$$simpleStatusFormatter_$$($value$$171$$, $rowSet$$10$$) {
  switch($value$$171$$) {
    case "-":
      return"Sending...";
    case "0":
      return"1" == $rowSet$$10$$.Side ? "Waiting sellers" : "Waiting buyers";
    case "1":
      return"1" == $rowSet$$10$$.Side ? "Partially bought" : "Partially sold";
    case "2":
      return"Done";
    case "4":
      return 0 == $rowSet$$10$$.CumQty ? "Cancelled" : "Done"
  }
};
$JSCompiler_prototypeAlias$$.$avgPriceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$avgPriceFormatter_$$($value$$172$$, $rowSet$$11$$) {
  var $priceCurrency$$2$$ = this.$app_$.$getPriceCurrencyFromSymbol$($rowSet$$11$$.Symbol);
  return 0 != $value$$172$$ ? this.$app_$.$formatCurrency$($value$$172$$ / 1E8, $priceCurrency$$2$$, $JSCompiler_alias_TRUE$$) : this.$app_$.$formatCurrency$($rowSet$$11$$.Price / 1E8, $priceCurrency$$2$$, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$priceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$priceFormatter_$$($value$$173$$, $rowSet$$12$$) {
  return this.$app_$.$formatCurrency$($value$$173$$ / 1E8, this.$app_$.$getPriceCurrencyFromSymbol$($rowSet$$12$$.Symbol), $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$getMDInstruments$ = function $$JSCompiler_prototypeAlias$$$$getMDInstruments$$() {
  return[this.$market_data_subscription_symbol_$]
};
$JSCompiler_prototypeAlias$$.$getMDMarketDepth$ = $JSCompiler_returnArg$$(0);
$JSCompiler_prototypeAlias$$.$getMDEntries$ = function $$JSCompiler_prototypeAlias$$$$getMDEntries$$() {
  return["0", "1"]
};
$JSCompiler_prototypeAlias$$.$onSimpleOrderAction_$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onCancelOrder_$ = function $$JSCompiler_prototypeAlias$$$$onCancelOrder_$$($e$$169$$) {
  "cancel" == $e$$169$$.target.getAttribute("data-action") && ($e$$169$$.stopPropagation(), $e$$169$$.preventDefault(), this.$order_id_$ = $e$$169$$.target.getAttribute("data-order-id"), this.$client_order_id_$ = $e$$169$$.target.getAttribute("data-client-order-id"), this.dispatchEvent("cancel_order"))
};
$JSCompiler_prototypeAlias$$.$onExecutionReport_$ = function $$JSCompiler_prototypeAlias$$$$onExecutionReport_$$($e$$170$$) {
  this.$order_manager_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$order_manager_table_$, $e$$170$$.data)
};
$JSCompiler_prototypeAlias$$.$onOrderManagerRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onOrderManagerRequestData_$$($e$$171$$) {
  this.$app_$.$conn_$.$requestOrderList$(this.$request_order_id_$, $e$$171$$.options.Page, $e$$171$$.options.Limit, ["0", "1", "2", "4"])
};
$JSCompiler_prototypeAlias$$.$onOrderListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onOrderListResponse_$$($e$$172_msg$$23$$) {
  this.$order_manager_table_$ != $JSCompiler_alias_NULL$$ && ($e$$172_msg$$23$$ = $e$$172_msg$$23$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$order_manager_table_$, $e$$172_msg$$23$$.OrdListGrp, $e$$172_msg$$23$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onOBClear_$ = function $$JSCompiler_prototypeAlias$$$$onOBClear_$$() {
  this.$bids_$ = [];
  this.$asks_$ = [];
  $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$);
  $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$)
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrdersThru_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrdersThru_$$($e$$174_index$$84$$) {
  var $msg$$24_side$$8$$ = $e$$174_index$$84$$.data;
  $e$$174_index$$84$$ = $msg$$24_side$$8$$.MDEntryPositionNo;
  $msg$$24_side$$8$$ = $msg$$24_side$$8$$.MDEntryType;
  "0" == $msg$$24_side$$8$$ ? (this.$bids_$.splice(0, $e$$174_index$$84$$), $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$24_side$$8$$ && (this.$asks_$.splice(0, $e$$174_index$$84$$), $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrder_$$($e$$175_index$$85$$) {
  var $msg$$25_side$$9$$ = $e$$175_index$$85$$.data;
  $e$$175_index$$85$$ = $msg$$25_side$$9$$.MDEntryPositionNo - 1;
  $msg$$25_side$$9$$ = $msg$$25_side$$9$$.MDEntryType;
  "0" == $msg$$25_side$$9$$ ? (this.$bids_$.splice($e$$175_index$$85$$, 1), $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$25_side$$9$$ && (this.$asks_$.splice($e$$175_index$$85$$, 1), $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
$JSCompiler_prototypeAlias$$.$onOBUpdateOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBUpdateOrder_$$($e$$176_index$$86$$) {
  var $msg$$26_side$$10$$ = $e$$176_index$$86$$.data;
  $e$$176_index$$86$$ = $msg$$26_side$$10$$.MDEntryPositionNo - 1;
  var $qty$$4$$ = $msg$$26_side$$10$$.MDEntrySize, $msg$$26_side$$10$$ = $msg$$26_side$$10$$.MDEntryType;
  "0" == $msg$$26_side$$10$$ ? (this.$bids_$[$e$$176_index$$86$$] = [this.$bids_$[$e$$176_index$$86$$][0], $qty$$4$$, this.$bids_$[$e$$176_index$$86$$][2]], $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$26_side$$10$$ && (this.$asks_$[$e$$176_index$$86$$] = [this.$asks_$[$e$$176_index$$86$$][0], $qty$$4$$, this.$asks_$[$e$$176_index$$86$$][2]], $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
$JSCompiler_prototypeAlias$$.$onOBNewOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBNewOrder_$$($e$$177_index$$87$$) {
  var $msg$$27_side$$11$$ = $e$$177_index$$87$$.data;
  $e$$177_index$$87$$ = $msg$$27_side$$11$$.MDEntryPositionNo - 1;
  var $price$$4$$ = $msg$$27_side$$11$$.MDEntryPx, $qty$$5$$ = $msg$$27_side$$11$$.MDEntrySize, $username$$6$$ = $msg$$27_side$$11$$.Username, $msg$$27_side$$11$$ = $msg$$27_side$$11$$.MDEntryType;
  "0" == $msg$$27_side$$11$$ ? ($goog$array$splice$$(this.$bids_$, $e$$177_index$$87$$, 0, [$price$$4$$, $qty$$5$$, $username$$6$$]), $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$27_side$$11$$ && ($goog$array$splice$$(this.$asks_$, $e$$177_index$$87$$, 0, [$price$$4$$, $qty$$5$$, $username$$6$$]), $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
// Input 151
function $goog$net$WebSocket$$($opt_autoReconnect$$, $opt_getNextReconnect$$) {
  $goog$Disposable$$.call(this);
  this.$autoReconnect_$ = $goog$isDef$$($opt_autoReconnect$$) ? $opt_autoReconnect$$ : $JSCompiler_alias_TRUE$$;
  this.$getNextReconnect_$ = $opt_getNextReconnect$$ || $goog$net$WebSocket$EXPONENTIAL_BACKOFF_$$;
  this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)
}
$goog$inherits$$($goog$net$WebSocket$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$net$WebSocket$$.prototype;
$JSCompiler_prototypeAlias$$.$webSocket_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$url_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$protocol_$ = $JSCompiler_alias_VOID$$;
$JSCompiler_prototypeAlias$$.$closeExpected_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$reconnectAttempt_$ = 0;
$JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("goog.net.WebSocket");
var $goog$net$WebSocket$EventType$CLOSED$$ = "closed_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$ERROR$$ = "error_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$MESSAGE$$ = "message_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$OPENED$$ = "opened_" + $goog$events$uniqueIdCounter_$$++;
function $goog$net$WebSocket$EXPONENTIAL_BACKOFF_$$($attempt$$) {
  return Math.min(1E3 * Math.pow(2, $attempt$$), 6E4)
}
$JSCompiler_prototypeAlias$$ = $goog$net$WebSocket$$.prototype;
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($url$$30$$, $opt_protocol$$1$$) {
  this.$reconnectTimer_$ != $JSCompiler_alias_NULL$$ && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$reconnectTimer_$);
  this.$reconnectTimer_$ = $JSCompiler_alias_NULL$$;
  this.$url_$ = $url$$30$$;
  (this.$protocol_$ = $opt_protocol$$1$$) ? (this.$logger_$.info("Opening the WebSocket on " + this.$url_$ + " with protocol " + this.$protocol_$), this.$webSocket_$ = new WebSocket(this.$url_$, this.$protocol_$)) : (this.$logger_$.info("Opening the WebSocket on " + this.$url_$), this.$webSocket_$ = new WebSocket(this.$url_$));
  this.$webSocket_$.onopen = $goog$bind$$(this.$onOpen_$, this);
  this.$webSocket_$.onclose = $goog$bind$$(this.$onClose_$, this);
  this.$webSocket_$.onmessage = $goog$bind$$(this.$onMessage_$, this);
  this.$webSocket_$.onerror = $goog$bind$$(this.$onError_$, this)
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$reconnectTimer_$ != $JSCompiler_alias_NULL$$ && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$reconnectTimer_$);
  this.$reconnectTimer_$ = $JSCompiler_alias_NULL$$;
  this.$webSocket_$ && (this.$logger_$.info("Closing the WebSocket."), this.$closeExpected_$ = $JSCompiler_alias_TRUE$$, this.$webSocket_$.close(), this.$webSocket_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($message$$24$$) {
  this.$webSocket_$.send($message$$24$$)
};
$JSCompiler_prototypeAlias$$.$isOpen$ = function $$JSCompiler_prototypeAlias$$$$isOpen$$() {
  return!!this.$webSocket_$ && 1 == this.$webSocket_$.readyState
};
$JSCompiler_prototypeAlias$$.$onOpen_$ = function $$JSCompiler_prototypeAlias$$$$onOpen_$$() {
  this.$logger_$.info("WebSocket opened on " + this.$url_$);
  this.dispatchEvent($goog$net$WebSocket$EventType$OPENED$$);
  this.$reconnectAttempt_$ = 0;
  this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)
};
$JSCompiler_prototypeAlias$$.$onClose_$ = function $$JSCompiler_prototypeAlias$$$$onClose_$$($event$$6$$) {
  this.$logger_$.info("The WebSocket on " + this.$url_$ + " closed.");
  this.dispatchEvent($goog$net$WebSocket$EventType$CLOSED$$);
  this.$webSocket_$ = $JSCompiler_alias_NULL$$;
  this.$closeExpected_$ ? (this.$logger_$.info("The WebSocket closed normally."), this.$url_$ = $JSCompiler_alias_NULL$$, this.$protocol_$ = $JSCompiler_alias_VOID$$) : (this.$logger_$.log($goog$debug$Logger$Level$SEVERE$$, "The WebSocket disconnected unexpectedly: " + $event$$6$$.data, $JSCompiler_alias_VOID$$), this.$autoReconnect_$ && (this.$logger_$.info("Seconds until next reconnect attempt: " + Math.floor(this.$nextReconnect_$ / 1E3)), this.$reconnectTimer_$ = $goog$Timer$callOnce$$($goog$bind$$(this.open, 
  this, this.$url_$, this.$protocol_$), this.$nextReconnect_$, this), this.$reconnectAttempt_$++, this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)));
  this.$closeExpected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onMessage_$ = function $$JSCompiler_prototypeAlias$$$$onMessage_$$($event$$7$$) {
  this.dispatchEvent(new $goog$net$WebSocket$MessageEvent$$($event$$7$$.data))
};
$JSCompiler_prototypeAlias$$.$onError_$ = function $$JSCompiler_prototypeAlias$$$$onError_$$($data$$36_event$$8$$) {
  $data$$36_event$$8$$ = $data$$36_event$$8$$.data;
  this.$logger_$.log($goog$debug$Logger$Level$SEVERE$$, "An error occurred: " + $data$$36_event$$8$$, $JSCompiler_alias_VOID$$);
  this.dispatchEvent(new $goog$net$WebSocket$ErrorEvent$$($data$$36_event$$8$$))
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$net$WebSocket$$.$superClass_$.$disposeInternal$.call(this);
  this.close()
};
function $goog$net$WebSocket$MessageEvent$$($message$$26$$) {
  $goog$events$Event$$.call(this, $goog$net$WebSocket$EventType$MESSAGE$$);
  this.message = $message$$26$$
}
$goog$inherits$$($goog$net$WebSocket$MessageEvent$$, $goog$events$Event$$);
function $goog$net$WebSocket$ErrorEvent$$($data$$37$$) {
  $goog$events$Event$$.call(this, $goog$net$WebSocket$EventType$ERROR$$);
  this.data = $data$$37$$
}
$goog$inherits$$($goog$net$WebSocket$ErrorEvent$$, $goog$events$Event$$);
// Input 152
function $bitex$api$BitEx$$() {
  $goog$Disposable$$.call(this);
  this.$all_markets_$ = this.$currency_info_$ = $JSCompiler_alias_NULL$$;
  this.$ws_$ = new $goog$net$WebSocket$$($JSCompiler_alias_TRUE$$)
}
$goog$inherits$$($bitex$api$BitEx$$, $goog$events$EventTarget$$);
$bitex$api$BitEx$$.prototype.$ws_$ = $JSCompiler_alias_NULL$$;
$bitex$api$BitEx$$.prototype.$url_$ = $JSCompiler_alias_NULL$$;
$bitex$api$BitEx$$.prototype.$connected_$ = $JSCompiler_alias_FALSE$$;
$bitex$api$BitEx$$.prototype.$logged_$ = $JSCompiler_alias_FALSE$$;
var $bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$ = "update_profile_response", $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ = "deposit_refresh", $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ = "deposit_list", $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ = "order_list_response", $bitex$api$BitEx$EventType$EXECUTION_REPORT$$ = "execution_report", $bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$ = "customer_list", $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ = "ob_clear", $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ = 
"ob_delete_orders_thru", $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ = "ob_delete_order", $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ = "ob_new_order", $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ = "ob_update_order";
$JSCompiler_prototypeAlias$$ = $bitex$api$BitEx$$.prototype;
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($url$$31$$, $opt_protocol$$2$$) {
  this.$url_$ = $url$$31$$;
  var $handler$$79$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$79$$, this.$ws_$, $goog$net$WebSocket$EventType$CLOSED$$, this.$onClose_$);
  $JSCompiler_StaticMethods_listen$$($handler$$79$$, this.$ws_$, $goog$net$WebSocket$EventType$MESSAGE$$, this.$onMessage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$79$$, this.$ws_$, $goog$net$WebSocket$EventType$ERROR$$, this.$onError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$79$$, this.$ws_$, $goog$net$WebSocket$EventType$OPENED$$, this.$onOpen_$);
  this.$ws_$.open($url$$31$$, $opt_protocol$$2$$)
};
$JSCompiler_prototypeAlias$$.$isConnected$ = $JSCompiler_get$$("$connected_$");
$JSCompiler_prototypeAlias$$.$isLogged$ = $JSCompiler_get$$("$logged_$");
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$handler_$ || (this.$handler_$ = new $goog$events$EventHandler$$(this))
};
$JSCompiler_prototypeAlias$$.$getCurrencyDescription$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyDescription$$($currency_code$$) {
  return this.$currency_info_$[$currency_code$$].description
};
$JSCompiler_prototypeAlias$$.$getCurrencyHumanFormat$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyHumanFormat$$($currency_code$$1$$) {
  return this.$currency_info_$[$currency_code$$1$$].$human_format$
};
$JSCompiler_prototypeAlias$$.$getCurrencySign$ = function $$JSCompiler_prototypeAlias$$$$getCurrencySign$$($currency_code$$3$$) {
  return this.$currency_info_$[$currency_code$$3$$].$sign$
};
$JSCompiler_prototypeAlias$$.$isCryptoCurrency$ = function $$JSCompiler_prototypeAlias$$$$isCryptoCurrency$$($currency_code$$4$$) {
  return this.$currency_info_$[$currency_code$$4$$].$is_crypto$
};
$JSCompiler_prototypeAlias$$.$formatCurrency$ = function $$JSCompiler_prototypeAlias$$$$formatCurrency$$($amount$$3$$, $currency_code$$5_currency_def$$5$$, $opt_human$$) {
  if(this.$currency_info_$ == $JSCompiler_alias_NULL$$) {
    return $amount$$3$$
  }
  $currency_code$$5_currency_def$$5$$ = this.$currency_info_$[$currency_code$$5_currency_def$$5$$];
  return($opt_human$$ != $JSCompiler_alias_NULL$$ && $opt_human$$ === $JSCompiler_alias_TRUE$$ ? new $goog$i18n$NumberFormat$$($currency_code$$5_currency_def$$5$$.$human_format$, $currency_code$$5_currency_def$$5$$.code) : new $goog$i18n$NumberFormat$$($currency_code$$5_currency_def$$5$$.$format$, $currency_code$$5_currency_def$$5$$.code)).$format$($amount$$3$$)
};
$JSCompiler_prototypeAlias$$.$getPriceCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getPriceCurrencyFromSymbol$$($symbol$$4$$) {
  return $symbol$$4$$.substr(3)
};
$JSCompiler_prototypeAlias$$.$getQtyCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getQtyCurrencyFromSymbol$$($symbol$$5$$) {
  return $symbol$$5$$.substr(0, 3)
};
$JSCompiler_prototypeAlias$$.$onSecurityList_$ = function $$JSCompiler_prototypeAlias$$$$onSecurityList_$$($msg$$28$$) {
  this.$currency_info_$ = {};
  this.$all_markets_$ = {};
  $goog$array$forEach$$($msg$$28$$.Currencies, function($currency$$3$$) {
    this.$currency_info_$[$currency$$3$$.Code] = {code:$currency$$3$$.Code, $format$:$currency$$3$$.FormatJS, $human_format$:$currency$$3$$.HumanFormatJS, description:$currency$$3$$.Description, $sign$:$currency$$3$$.Sign, $pip$:$currency$$3$$.Pip, $is_crypto$:$currency$$3$$.IsCrypto}
  }, this);
  var $symbols$$ = [];
  $goog$array$forEach$$($msg$$28$$.Instruments, function($instrument$$) {
    var $symbol$$6$$ = $instrument$$.Symbol;
    this.$all_markets_$[$symbol$$6$$] = {$symbol$:$symbol$$6$$, description:$instrument$$.Description};
    $symbols$$.push($symbol$$6$$)
  }, this)
};
$JSCompiler_prototypeAlias$$.$onOpen_$ = function $$JSCompiler_prototypeAlias$$$$onOpen_$$() {
  this.dispatchEvent("opened");
  this.$connected_$ = $JSCompiler_alias_TRUE$$;
  this.$logged_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onClose_$ = function $$JSCompiler_prototypeAlias$$$$onClose_$$() {
  this.dispatchEvent("closed");
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onError_$ = function $$JSCompiler_prototypeAlias$$$$onError_$$() {
  this.dispatchEvent("error");
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onMessage_$ = function $$JSCompiler_prototypeAlias$$$$onMessage_$$($e$$180_entry$$) {
  var $msg$$29$$ = JSON.parse($e$$180_entry$$.message);
  this.dispatchEvent(new $bitex$api$BitExEvent$$("raw_message", $e$$180_entry$$.message));
  switch($msg$$29$$.MsgType) {
    case "ERROR":
      $msg$$29$$.ReqID != $JSCompiler_alias_NULL$$ && this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message." + $msg$$29$$.ReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", $msg$$29$$));
      break;
    case "0":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("heartbeat", $msg$$29$$));
      break;
    case "B":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("news", $msg$$29$$));
      break;
    case "BF":
      if(3 == $msg$$29$$.UserReqTyp) {
        this.dispatchEvent(new $bitex$api$BitExEvent$$("change_password_error." + $msg$$29$$.UserReqID, $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("change_password_error", $msg$$29$$));
        break
      }
      1 == $msg$$29$$.UserStatus ? (this.$logged_$ = $JSCompiler_alias_TRUE$$, this.dispatchEvent(new $bitex$api$BitExEvent$$("login_ok." + $msg$$29$$.UserReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("login_ok", $msg$$29$$))) : (this.$logged_$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent(new $bitex$api$BitExEvent$$("login_error." + $msg$$29$$.UserReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("login_error", $msg$$29$$)));
      break;
    case "y":
      this.$onSecurityList_$($msg$$29$$);
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_list." + $msg$$29$$.SecurityReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_list", $msg$$29$$));
      break;
    case "f":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_status." + $msg$$29$$.SecurityStatusReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_status", $msg$$29$$));
      break;
    case "U13":
      1 == $msg$$29$$.UserStatus ? (this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_ok." + $msg$$29$$.ResetPasswordReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_ok", $msg$$29$$))) : (this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_error." + $msg$$29$$.ResetPasswordReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_error", $msg$$29$$)));
      break;
    case "U19":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_response." + $msg$$29$$.DepositReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_response", $msg$$29$$));
      break;
    case "U23":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $msg$$29$$.UserID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $msg$$29$$.BrokerID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $msg$$29$$.DepositReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$, $msg$$29$$));
      break;
    case "U25":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_confirmation_response." + $msg$$29$$.WithdrawReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_confirmation_response", $msg$$29$$));
      break;
    case "U7":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_response." + $msg$$29$$.WithdrawReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_response", $msg$$29$$));
      break;
    case "U9":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh." + $msg$$29$$.UserID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh." + $msg$$29$$.BrokerID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh", $msg$$29$$));
      break;
    case "U3":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("balance_response." + $msg$$29$$.BalanceReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("balance_response", $msg$$29$$));
      break;
    case "U5":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ + "." + $msg$$29$$.OrdersReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$, $msg$$29$$));
      break;
    case "U17":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("two_factor_secret." + $msg$$29$$.EnableTwoFactorReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("two_factor_secret", $msg$$29$$));
      break;
    case "U21":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_methods_response." + $msg$$29$$.DepositMethodReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_methods_response", $msg$$29$$));
      break;
    case "U27":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_list_response." + $msg$$29$$.WithdrawListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_list_response", $msg$$29$$));
      break;
    case "U29":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("broker_list." + $msg$$29$$.BrokerListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("broker_list", $msg$$29$$));
      break;
    case "U31":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + $msg$$29$$.DepositListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$, $msg$$29$$));
      break;
    case "U33":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_history_response." + $msg$$29$$.TradeHistoryReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_history_response", $msg$$29$$));
      break;
    case "U35":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("ledger_list." + $msg$$29$$.LedgerListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("ledger_list", $msg$$29$$));
      break;
    case "U37":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("traders_rank." + $msg$$29$$.TradersRankReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("traders_rank", $msg$$29$$));
      break;
    case "U39":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$ + "." + $msg$$29$$.UpdateReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$, $msg$$29$$));
      break;
    case "U40":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("profile_refresh", $msg$$29$$));
      break;
    case "U43":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("position_response." + $msg$$29$$.PositionReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("position_response", $msg$$29$$));
      break;
    case "U45":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_response." + $msg$$29$$.SuggestTrustedAddressReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_response", $msg$$29$$));
      break;
    case "U46":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_pub." + $msg$$29$$.SuggestTrustedAddressReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_pub", $msg$$29$$));
      break;
    case "B1":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_deposit." + $msg$$29$$.ProcessDepositReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_deposit", $msg$$29$$));
      break;
    case "B3":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$ + "." + $msg$$29$$.CustomerListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$, $msg$$29$$));
      break;
    case "B5":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("customer_detail." + $msg$$29$$.CustomerReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("customer_detail", $msg$$29$$));
      break;
    case "B7":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_withdraw." + $msg$$29$$.ProcessWithdrawReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_withdraw", $msg$$29$$));
      break;
    case "B9":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_response." + $msg$$29$$.VerifyCustomerReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_response", $msg$$29$$));
      break;
    case "B11":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_update", $msg$$29$$));
      break;
    case "W":
      if(1 != $msg$$29$$.MarketDepth) {
        this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$, $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + $msg$$29$$.MDReqID, $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_clear", $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_clear." + $msg$$29$$.MDReqID, $msg$$29$$));
        for(var $x$$77$$ in $msg$$29$$.MDFullGrp) {
          switch($e$$180_entry$$ = $msg$$29$$.MDFullGrp[$x$$77$$], $e$$180_entry$$.MDReqID = $msg$$29$$.MDReqID, $e$$180_entry$$.MDEntryType) {
            case "0":
            ;
            case "1":
              $e$$180_entry$$.Symbol = $msg$$29$$.Symbol;
              this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$, $e$$180_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$180_entry$$));
              break;
            case "2":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade", $e$$180_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade." + $msg$$29$$.MDReqID, $e$$180_entry$$));
              break;
            case "4":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$180_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$29$$.MDReqID, $e$$180_entry$$))
          }
        }
      }
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_full_refresh", $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_full_refresh." + $msg$$29$$.MDReqID, $msg$$29$$));
      break;
    case "X":
      if("3" == $msg$$29$$.MDBkTyp) {
        for($x$$77$$ in $msg$$29$$.MDIncGrp) {
          switch($e$$180_entry$$ = $msg$$29$$.MDIncGrp[$x$$77$$], $e$$180_entry$$.MDReqID = $msg$$29$$.MDReqID, $e$$180_entry$$.MDEntryType) {
            case "0":
            ;
            case "1":
              switch($e$$180_entry$$.MDUpdateAction) {
                case "0":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$, $e$$180_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$180_entry$$));
                  break;
                case "1":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$, $e$$180_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$180_entry$$));
                  break;
                case "2":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$, $e$$180_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$180_entry$$));
                  break;
                case "3":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$, $e$$180_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + $msg$$29$$.MDReqID, $e$$180_entry$$));
                  break;
                case "4":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$180_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$29$$.MDReqID, $e$$180_entry$$))
              }
              break;
            case "2":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade", $e$$180_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade." + $msg$$29$$.MDReqID, $e$$180_entry$$));
              break;
            case "4":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$180_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$29$$.MDReqID, $e$$180_entry$$))
          }
        }
      }
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_incremental_refresh", $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_incremental_refresh." + $msg$$29$$.MDReqID, $msg$$29$$));
      break;
    case "Y":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_request_reject", $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_request_reject." + $msg$$29$$.MDReqID, $msg$$29$$));
      break;
    case "8":
      $msg$$29$$.Volume != $JSCompiler_alias_NULL$$ || ($msg$$29$$.Volume = $msg$$29$$.AvgPx != $JSCompiler_alias_NULL$$ && 0 < $msg$$29$$.AvgPx ? $msg$$29$$.CumQty * $msg$$29$$.AvgPx / 1E8 : 0), $msg$$29$$.ClOrdID != $JSCompiler_alias_NULL$$ && this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$EXECUTION_REPORT$$ + "." + $msg$$29$$.ClOrdID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$EXECUTION_REPORT$$, $msg$$29$$))
  }
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$;
  this.$ws_$.close();
  this.$ws_$.$dispose$();
  this.$ws_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.login = function $$JSCompiler_prototypeAlias$$$login$($brokerID_msg$$30$$, $username$$7$$, $password$$3$$, $opt_second_factor$$, $opt_request_id$$) {
  $brokerID_msg$$30$$ = {MsgType:"BE", UserReqID:$opt_request_id$$ || parseInt(1E6 * Math.random(), 10), BrokerID:$brokerID_msg$$30$$, Username:$username$$7$$, Password:$password$$3$$, UserReqTyp:"1"};
  $opt_second_factor$$ != $JSCompiler_alias_NULL$$ && ($brokerID_msg$$30$$.SecondFactor = $opt_second_factor$$);
  this.sendMessage($brokerID_msg$$30$$)
};
$JSCompiler_prototypeAlias$$.$enableTwoFactor$ = function $$JSCompiler_prototypeAlias$$$$enableTwoFactor$$($enable$$24_msg$$31$$, $opt_secret$$, $opt_code$$, $opt_clientID$$, $opt_request_id$$1$$) {
  $enable$$24_msg$$31$$ = {MsgType:"U16", EnableTwoFactorReqID:$opt_request_id$$1$$ || parseInt(1E6 * Math.random(), 10), Enable:$enable$$24_msg$$31$$};
  $opt_secret$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_secret$$) && ($enable$$24_msg$$31$$.Secret = $opt_secret$$);
  $opt_code$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_code$$) && ($enable$$24_msg$$31$$.Code = $opt_code$$);
  $opt_clientID$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$) && ($enable$$24_msg$$31$$.ClientID = $opt_clientID$$);
  this.sendMessage($enable$$24_msg$$31$$)
};
$JSCompiler_prototypeAlias$$.$forgotPassword$ = function $$JSCompiler_prototypeAlias$$$$forgotPassword$$($brokerID$$1$$, $email$$2$$, $opt_request_id$$2$$) {
  this.sendMessage({MsgType:"U10", BrokerID:$brokerID$$1$$, ForgotPasswordReqID:$opt_request_id$$2$$ || parseInt(1E6 * Math.random(), 10), Email:$email$$2$$})
};
$JSCompiler_prototypeAlias$$.$requestBalances$ = function $$JSCompiler_prototypeAlias$$$$requestBalances$$($opt_clientID$$1$$, $opt_request_id$$3$$) {
  var $msg$$33$$ = {MsgType:"U2", BalanceReqID:$opt_request_id$$3$$ || parseInt(1E6 * Math.random(), 10)};
  $opt_clientID$$1$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$1$$) && ($msg$$33$$.ClientID = $opt_clientID$$1$$);
  this.sendMessage($msg$$33$$)
};
$JSCompiler_prototypeAlias$$.$requestWithdraw$ = function $$JSCompiler_prototypeAlias$$$$requestWithdraw$$($opt_request_id$$5_reqId$$5$$, $amount$$4_msg$$35$$, $method$$5$$, $currency$$4$$, $data$$38$$, $opt_client_order_id$$1$$) {
  $opt_request_id$$5_reqId$$5$$ = $opt_request_id$$5_reqId$$5$$ || parseInt(1E6 * Math.random(), 10);
  $amount$$4_msg$$35$$ = {MsgType:"U6", WithdrawReqID:$opt_request_id$$5_reqId$$5$$, Currency:$currency$$4$$, Amount:$amount$$4_msg$$35$$, Method:$method$$5$$, Data:$goog$json$serialize$$($data$$38$$)};
  $opt_client_order_id$$1$$ != $JSCompiler_alias_NULL$$ && ($amount$$4_msg$$35$$.ClOrdID = "" + $opt_client_order_id$$1$$);
  this.sendMessage($amount$$4_msg$$35$$);
  return $opt_request_id$$5_reqId$$5$$
};
$JSCompiler_prototypeAlias$$.$confirmWithdraw$ = function $$JSCompiler_prototypeAlias$$$$confirmWithdraw$$($confirmation_token$$) {
  this.sendMessage({MsgType:"U24", WithdrawReqID:parseInt(1E6 * Math.random(), 10), ConfirmationToken:$confirmation_token$$})
};
$JSCompiler_prototypeAlias$$.$requestWithdrawList$ = function $$JSCompiler_prototypeAlias$$$$requestWithdrawList$$($opt_requestId_requestId$$1$$, $msg$$37_opt_page$$, $opt_limit$$1$$, $opt_status$$, $opt_clientID$$3$$, $opt_filter$$) {
  $opt_requestId_requestId$$1$$ = $opt_requestId_requestId$$1$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$37_opt_page$$ = {MsgType:"U26", WithdrawListReqID:$opt_requestId_requestId$$1$$, Page:$msg$$37_opt_page$$ || 0, PageSize:$opt_limit$$1$$ || 100, StatusList:$opt_status$$ || ["1", "2"]};
  $opt_clientID$$3$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$3$$) && ($msg$$37_opt_page$$.ClientID = $opt_clientID$$3$$);
  $opt_filter$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$.length && ($msg$$37_opt_page$$.Filter = $opt_filter$$);
  this.sendMessage($msg$$37_opt_page$$);
  return $opt_requestId_requestId$$1$$
};
function $JSCompiler_StaticMethods_updateUserProfile$$($JSCompiler_StaticMethods_updateUserProfile$self$$, $fields_msg$$38$$, $opt_userId$$) {
  var $requestId$$2$$ = parseInt(1E7 * Math.random(), 10);
  $fields_msg$$38$$ = {MsgType:"U38", UpdateReqID:$requestId$$2$$, Fields:$fields_msg$$38$$};
  $opt_userId$$ != $JSCompiler_alias_NULL$$ && ($fields_msg$$38$$.UserID = $opt_userId$$);
  $JSCompiler_StaticMethods_updateUserProfile$self$$.sendMessage($fields_msg$$38$$);
  return $requestId$$2$$
}
$JSCompiler_prototypeAlias$$.$requestDepositList$ = function $$JSCompiler_prototypeAlias$$$$requestDepositList$$($opt_requestId$$2_requestId$$3$$, $msg$$39_opt_page$$1$$, $opt_limit$$2$$, $opt_status$$1$$, $opt_clientID$$4$$, $opt_filter$$1$$) {
  $opt_requestId$$2_requestId$$3$$ = $opt_requestId$$2_requestId$$3$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$39_opt_page$$1$$ = {MsgType:"U30", DepositListReqID:$opt_requestId$$2_requestId$$3$$, Page:$msg$$39_opt_page$$1$$ || 0, PageSize:$opt_limit$$2$$ || 100, StatusList:$opt_status$$1$$ || ["1", "2"]};
  $opt_clientID$$4$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$4$$) && ($msg$$39_opt_page$$1$$.ClientID = $opt_clientID$$4$$);
  $opt_filter$$1$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$1$$.length && ($msg$$39_opt_page$$1$$.Filter = $opt_filter$$1$$);
  this.sendMessage($msg$$39_opt_page$$1$$);
  return $opt_requestId$$2_requestId$$3$$
};
$JSCompiler_prototypeAlias$$.$requestLedgerList$ = function $$JSCompiler_prototypeAlias$$$$requestLedgerList$$($opt_requestId$$6_requestId$$7$$, $msg$$43_opt_page$$4$$, $opt_limit$$5$$, $opt_brokerID$$, $opt_clientID$$7$$, $opt_currency$$1$$, $opt_filter$$4$$) {
  $opt_requestId$$6_requestId$$7$$ = $opt_requestId$$6_requestId$$7$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$43_opt_page$$4$$ = {MsgType:"U34", LedgerListReqID:$opt_requestId$$6_requestId$$7$$, OperationList:["C", "D"], Page:$msg$$43_opt_page$$4$$ || 0, PageSize:$opt_limit$$5$$ || 100};
  $opt_brokerID$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_brokerID$$) && ($msg$$43_opt_page$$4$$.BrokerID = $opt_brokerID$$);
  $opt_clientID$$7$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$7$$) && ($msg$$43_opt_page$$4$$.ClientID = $opt_clientID$$7$$);
  $opt_currency$$1$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_currency$$1$$) && ($msg$$43_opt_page$$4$$.Currency = $opt_currency$$1$$);
  $opt_filter$$4$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$4$$.length && ($msg$$43_opt_page$$4$$.Filter = $opt_filter$$4$$);
  this.sendMessage($msg$$43_opt_page$$4$$);
  return $opt_requestId$$6_requestId$$7$$
};
$JSCompiler_prototypeAlias$$.$requestBrokerList$ = function $$JSCompiler_prototypeAlias$$$$requestBrokerList$$($opt_requestId$$7_requestId$$8$$, $opt_country$$1$$, $msg$$44_opt_page$$5$$, $opt_limit$$6$$, $opt_status$$2$$) {
  $opt_requestId$$7_requestId$$8$$ = $opt_requestId$$7_requestId$$8$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$44_opt_page$$5$$ = {MsgType:"U28", BrokerListReqID:$opt_requestId$$7_requestId$$8$$, Page:$msg$$44_opt_page$$5$$ || 0, PageSize:$opt_limit$$6$$ || 100, StatusList:$opt_status$$2$$ || ["1"]};
  $opt_country$$1$$ != $JSCompiler_alias_NULL$$ && ($msg$$44_opt_page$$5$$.Country = $opt_country$$1$$);
  this.sendMessage($msg$$44_opt_page$$5$$);
  return $opt_requestId$$7_requestId$$8$$
};
$JSCompiler_prototypeAlias$$.$requestCustomerList$ = function $$JSCompiler_prototypeAlias$$$$requestCustomerList$$($opt_requestId$$8_requestId$$9$$, $opt_filter_country$$, $opt_filter_state$$, $opt_filter_username_or_email$$, $msg$$45_opt_page$$6$$, $opt_limit$$7$$, $opt_status$$3$$, $opt_sort_column$$, $opt_sort_direction$$) {
  $opt_requestId$$8_requestId$$9$$ = $opt_requestId$$8_requestId$$9$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$45_opt_page$$6$$ = {MsgType:"B2", CustomerListReqID:$opt_requestId$$8_requestId$$9$$, Page:$msg$$45_opt_page$$6$$ || 0, PageSize:$opt_limit$$7$$ || 100, StatusList:$opt_status$$3$$ || [0, 1, 2, 3, 4, 5]};
  $opt_filter_country$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.Country = $opt_filter_country$$);
  $opt_filter_state$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.State = $opt_filter_state$$);
  $opt_filter_username_or_email$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.ClientID = $opt_filter_username_or_email$$);
  $opt_sort_column$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.Sort = $opt_sort_column$$);
  $opt_sort_direction$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.SortOrder = $opt_sort_direction$$);
  this.sendMessage($msg$$45_opt_page$$6$$);
  return $opt_requestId$$8_requestId$$9$$
};
$JSCompiler_prototypeAlias$$.$requestCustomerDetails$ = function $$JSCompiler_prototypeAlias$$$$requestCustomerDetails$$($opt_requestId$$9$$, $clientId$$) {
  var $requestId$$10$$ = $opt_requestId$$9$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"B4", CustomerReqID:$requestId$$10$$, ClientID:$clientId$$});
  return $requestId$$10$$
};
$JSCompiler_prototypeAlias$$.$verifyCustomer$ = function $$JSCompiler_prototypeAlias$$$$verifyCustomer$$($opt_requestId$$10_requestId$$11$$, $clientId$$1_msg$$47$$, $verify$$, $opt_verificationData$$) {
  $opt_requestId$$10_requestId$$11$$ = $opt_requestId$$10_requestId$$11$$ || parseInt(1E7 * Math.random(), 10);
  $clientId$$1_msg$$47$$ = {MsgType:"B8", VerifyCustomerReqID:$opt_requestId$$10_requestId$$11$$, ClientID:$clientId$$1_msg$$47$$, Verify:$verify$$};
  $opt_verificationData$$ != $JSCompiler_alias_NULL$$ && ($clientId$$1_msg$$47$$.VerificationData = $opt_verificationData$$);
  this.sendMessage($clientId$$1_msg$$47$$);
  return $opt_requestId$$10_requestId$$11$$
};
$JSCompiler_prototypeAlias$$.$processWithdraw$ = function $$JSCompiler_prototypeAlias$$$$processWithdraw$$($opt_requestId$$11_requestId$$12$$, $action$$1_msg$$48$$, $withdrawId$$, $opt_reasonId$$, $opt_reason$$, $opt_data$$43$$, $opt_percent_fee$$, $opt_fixed_fee$$) {
  $opt_requestId$$11_requestId$$12$$ = $opt_requestId$$11_requestId$$12$$ || parseInt(1E7 * Math.random(), 10);
  $action$$1_msg$$48$$ = {MsgType:"B6", ProcessWithdrawReqID:$opt_requestId$$11_requestId$$12$$, WithdrawID:$withdrawId$$, Action:$action$$1_msg$$48$$};
  $opt_reasonId$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$48$$.ReasonID = $opt_reasonId$$);
  $opt_reason$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$48$$.Reason = $opt_reason$$);
  $opt_data$$43$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$48$$.Data = $opt_data$$43$$);
  $opt_percent_fee$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$48$$.PercentFee = $opt_percent_fee$$);
  $opt_fixed_fee$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$48$$.FixedFee = $opt_fixed_fee$$);
  this.sendMessage($action$$1_msg$$48$$);
  return $opt_requestId$$11_requestId$$12$$
};
$JSCompiler_prototypeAlias$$.$processDeposit$ = function $$JSCompiler_prototypeAlias$$$$processDeposit$$($opt_requestId$$12_requestId$$13$$, $action$$2_msg$$49$$, $opt_secret$$1$$, $opt_depositId$$, $opt_reasonId$$1$$, $opt_reason$$1$$, $opt_amount$$, $opt_percent_fee$$1$$, $opt_fixed_fee$$1$$) {
  $opt_requestId$$12_requestId$$13$$ = $opt_requestId$$12_requestId$$13$$ || parseInt(1E7 * Math.random(), 10);
  $action$$2_msg$$49$$ = {MsgType:"B0", ProcessDepositReqID:$opt_requestId$$12_requestId$$13$$, Action:$action$$2_msg$$49$$};
  $opt_secret$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$2_msg$$49$$.Secret = $opt_secret$$1$$);
  $opt_depositId$$ != $JSCompiler_alias_NULL$$ && ($action$$2_msg$$49$$.DepositID = $opt_depositId$$);
  $opt_reasonId$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$2_msg$$49$$.ReasonID = $opt_reasonId$$1$$);
  $opt_reason$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$2_msg$$49$$.Reason = $opt_reason$$1$$);
  $opt_amount$$ != $JSCompiler_alias_NULL$$ && ($action$$2_msg$$49$$.Amount = $opt_amount$$);
  $opt_percent_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$2_msg$$49$$.PercentFee = $opt_percent_fee$$1$$);
  $opt_fixed_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$2_msg$$49$$.FixedFee = $opt_fixed_fee$$1$$);
  this.sendMessage($action$$2_msg$$49$$);
  return $opt_requestId$$12_requestId$$13$$
};
$JSCompiler_prototypeAlias$$.$resetPassword$ = function $$JSCompiler_prototypeAlias$$$$resetPassword$$($token$$12$$, $new_password$$, $opt_requestId$$13$$) {
  this.sendMessage({MsgType:"U12", ResetPasswordReqID:$opt_requestId$$13$$ || parseInt(1E7 * Math.random(), 10), Token:$token$$12$$, NewPassword:$new_password$$})
};
$JSCompiler_prototypeAlias$$.$changePassword$ = function $$JSCompiler_prototypeAlias$$$$changePassword$$($brokerID$$2_msg$$51$$, $username$$8$$, $password$$4$$, $new_password$$1$$, $opt_second_factor$$1$$, $opt_requestId$$14$$) {
  $brokerID$$2_msg$$51$$ = {MsgType:"BE", UserReqID:$opt_requestId$$14$$ || parseInt(1E7 * Math.random(), 10), UserReqTyp:"3", BrokerID:$brokerID$$2_msg$$51$$, Username:$username$$8$$, Password:$password$$4$$, NewPassword:$new_password$$1$$};
  $opt_second_factor$$1$$ != $JSCompiler_alias_NULL$$ && ($brokerID$$2_msg$$51$$.SecondFactor = $opt_second_factor$$1$$);
  this.sendMessage($brokerID$$2_msg$$51$$)
};
$JSCompiler_prototypeAlias$$.$subscribeMarketData$ = function $$JSCompiler_prototypeAlias$$$$subscribeMarketData$$($market_depth$$, $symbols$$1$$, $entries$$, $opt_requestId$$15_requestId$$16$$) {
  $opt_requestId$$15_requestId$$16$$ = $opt_requestId$$15_requestId$$16$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"V", MDReqID:$opt_requestId$$15_requestId$$16$$, SubscriptionRequestType:"1", MarketDepth:$market_depth$$, MDUpdateType:"1", MDEntryTypes:$entries$$, Instruments:$symbols$$1$$});
  return $opt_requestId$$15_requestId$$16$$
};
$JSCompiler_prototypeAlias$$.$unSubscribeMarketData$ = function $$JSCompiler_prototypeAlias$$$$unSubscribeMarketData$$($market_data_id$$) {
  this.sendMessage({MsgType:"V", MDReqID:$market_data_id$$, MarketDepth:0, SubscriptionRequestType:"2"})
};
$JSCompiler_prototypeAlias$$.$requestSecurityList$ = function $$JSCompiler_prototypeAlias$$$$requestSecurityList$$($opt_requestId$$17$$) {
  this.sendMessage({MsgType:"x", SecurityReqID:$opt_requestId$$17$$ || parseInt(1E7 * Math.random(), 10), SecurityListRequestType:0, SecurityRequestResult:0})
};
$JSCompiler_prototypeAlias$$.$signUp$ = function $$JSCompiler_prototypeAlias$$$$signUp$$($username$$9$$, $password$$5$$, $email$$3$$, $state$$20$$, $country_code$$2$$, $broker$$8$$, $opt_requestId$$18$$) {
  this.sendMessage({MsgType:"U0", UserReqID:$opt_requestId$$18$$ || parseInt(1E7 * Math.random(), 10), Username:$username$$9$$, Password:$password$$5$$, Email:$email$$3$$, State:$state$$20$$, CountryCode:$country_code$$2$$, BrokerID:$broker$$8$$})
};
$JSCompiler_prototypeAlias$$.$requestOrderList$ = function $$JSCompiler_prototypeAlias$$$$requestOrderList$$($opt_requestId$$19_requestId$$20$$, $opt_page$$7$$, $opt_limit$$8$$, $opt_status$$4$$) {
  $opt_requestId$$19_requestId$$20$$ = $opt_requestId$$19_requestId$$20$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"U4", OrdersReqID:$opt_requestId$$19_requestId$$20$$, Page:$opt_page$$7$$ || 0, PageSize:$opt_limit$$8$$ || 100, StatusList:$opt_status$$4$$ || ["0", "1"]});
  return $opt_requestId$$19_requestId$$20$$
};
$JSCompiler_prototypeAlias$$.$requestDeposit$ = function $$JSCompiler_prototypeAlias$$$$requestDeposit$$($msg$$59_opt_requestId$$20$$, $opt_depositOptionId$$, $opt_value$$11$$, $opt_depositID$$, $opt_currency$$2$$, $opt_client_order_id$$2$$, $opt_instructions$$) {
  $msg$$59_opt_requestId$$20$$ = {MsgType:"U18", DepositReqID:$msg$$59_opt_requestId$$20$$ || parseInt(1E7 * Math.random(), 10)};
  $opt_depositOptionId$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.DepositMethodID = $opt_depositOptionId$$);
  $opt_value$$11$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.Value = parseInt($opt_value$$11$$, 10));
  $opt_depositID$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.DepositID = $opt_depositID$$);
  $opt_currency$$2$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.Currency = $opt_currency$$2$$);
  $opt_client_order_id$$2$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.ClOrdID = "" + $opt_client_order_id$$2$$);
  $opt_instructions$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.Instructions = $opt_instructions$$);
  this.sendMessage($msg$$59_opt_requestId$$20$$)
};
$JSCompiler_prototypeAlias$$.$requestDepositMethods$ = function $$JSCompiler_prototypeAlias$$$$requestDepositMethods$$($opt_requestId$$21$$) {
  this.sendMessage({MsgType:"U20", DepositMethodReqID:$opt_requestId$$21$$ || parseInt(1E7 * Math.random(), 10)})
};
function $JSCompiler_StaticMethods_sendOrder_$$($JSCompiler_StaticMethods_sendOrder_$self$$, $msg$$61_symbol$$7$$, $qty$$6$$, $price$$5$$, $side$$12$$, $broker_id$$2$$, $opt_client_id$$, $clientOrderId_opt_clientOrderId$$) {
  $clientOrderId_opt_clientOrderId$$ = $clientOrderId_opt_clientOrderId$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$61_symbol$$7$$ = {MsgType:"D", ClOrdID:"" + $clientOrderId_opt_clientOrderId$$, Symbol:$msg$$61_symbol$$7$$, Side:$side$$12$$, OrdType:"2", Price:$price$$5$$, OrderQty:$qty$$6$$, BrokerID:$broker_id$$2$$};
  $opt_client_id$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_client_id$$) && ($msg$$61_symbol$$7$$.ClientID = $opt_client_id$$);
  $JSCompiler_StaticMethods_sendOrder_$self$$.sendMessage($msg$$61_symbol$$7$$);
  return $clientOrderId_opt_clientOrderId$$
}
$JSCompiler_prototypeAlias$$.$cancelOrder$ = function $$JSCompiler_prototypeAlias$$$$cancelOrder$$($opt_clientOrderId$$1$$, $opt_OrderId$$) {
  var $msg$$62$$ = {MsgType:"F"};
  $opt_OrderId$$ ? $msg$$62$$.OrderID = $opt_OrderId$$ : $opt_clientOrderId$$1$$ && ($msg$$62$$.OrigClOrdID = $opt_clientOrderId$$1$$);
  this.sendMessage($msg$$62$$)
};
$JSCompiler_prototypeAlias$$.$sendRawMessage$ = function $$JSCompiler_prototypeAlias$$$$sendRawMessage$$($msg$$63$$) {
  if(this.$ws_$.$isOpen$()) {
    try {
      this.$ws_$.send($msg$$63$$), this.dispatchEvent(new $bitex$api$BitExEvent$$("sent_raw_message", $msg$$63$$))
    }catch($s$$49$$) {
      this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", {MsgType:"ERROR", Description:"Erro grave", Detail:$s$$49$$.toLocaleString()}))
    }
  }else {
    this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", {MsgType:"ERROR", Description:"Erro", Detail:"Perda de conex\u00e3o com o servidor"}))
  }
};
$JSCompiler_prototypeAlias$$.sendMessage = function $$JSCompiler_prototypeAlias$$$sendMessage$($msg$$64$$) {
  this.$sendRawMessage$(JSON.stringify($msg$$64$$))
};
$JSCompiler_prototypeAlias$$.$sendBuyLimitedOrder$ = function $$JSCompiler_prototypeAlias$$$$sendBuyLimitedOrder$$($symbol$$8$$, $qty$$7$$, $price$$6$$, $broker_id$$3$$, $opt_client_id$$1$$, $opt_clientOrderId$$2$$) {
  return $JSCompiler_StaticMethods_sendOrder_$$(this, $symbol$$8$$, $qty$$7$$, $price$$6$$, "1", $broker_id$$3$$, $opt_client_id$$1$$, $opt_clientOrderId$$2$$)
};
$JSCompiler_prototypeAlias$$.$sendSellLimitedOrder$ = function $$JSCompiler_prototypeAlias$$$$sendSellLimitedOrder$$($symbol$$9$$, $qty$$8$$, $price$$7$$, $broker_id$$4$$, $opt_client_id$$2$$, $opt_clientOrderId$$3$$) {
  return $JSCompiler_StaticMethods_sendOrder_$$(this, $symbol$$9$$, $qty$$8$$, $price$$7$$, "2", $broker_id$$4$$, $opt_client_id$$2$$, $opt_clientOrderId$$3$$)
};
$JSCompiler_prototypeAlias$$.$testRequest$ = function $$JSCompiler_prototypeAlias$$$$testRequest$$($opt_requestId$$22$$) {
  var $d$$7$$ = new Date;
  this.sendMessage({MsgType:"1", TestReqID:$opt_requestId$$22$$ || $d$$7$$.getTime(), SendTime:$d$$7$$.getTime()})
};
function $bitex$api$BitExEvent$$($type$$109$$, $opt_data$$44$$) {
  $goog$events$Event$$.call(this, $type$$109$$);
  this.data = $opt_data$$44$$
}
$goog$inherits$$($bitex$api$BitExEvent$$, $goog$events$Event$$);
$goog$exportPath_$$("BitEx", $bitex$api$BitEx$$);
BitEx.prototype.open = $bitex$api$BitEx$$.prototype.open;
BitEx.prototype.close = $bitex$api$BitEx$$.prototype.close;
BitEx.prototype.login = $bitex$api$BitEx$$.prototype.login;
BitEx.prototype.isLogged = $bitex$api$BitEx$$.prototype.$isLogged$;
BitEx.prototype.isConnected = $bitex$api$BitEx$$.prototype.$isConnected$;
BitEx.prototype.changePassword = $bitex$api$BitEx$$.prototype.$changePassword$;
BitEx.prototype.enableTwoFactor = $bitex$api$BitEx$$.prototype.$enableTwoFactor$;
BitEx.prototype.resetPassword = $bitex$api$BitEx$$.prototype.$resetPassword$;
BitEx.prototype.subscribeMarketData = $bitex$api$BitEx$$.prototype.$subscribeMarketData$;
BitEx.prototype.unSubscribeMarketData = $bitex$api$BitEx$$.prototype.$unSubscribeMarketData$;
BitEx.prototype.signUp = $bitex$api$BitEx$$.prototype.$signUp$;
BitEx.prototype.forgotPassword = $bitex$api$BitEx$$.prototype.$forgotPassword$;
BitEx.prototype.requestBalances = $bitex$api$BitEx$$.prototype.$requestBalances$;
BitEx.prototype.requestSecurityList = $bitex$api$BitEx$$.prototype.$requestSecurityList$;
BitEx.prototype.requestDepositMethods = $bitex$api$BitEx$$.prototype.$requestDepositMethods$;
BitEx.prototype.requestLedgerList = $bitex$api$BitEx$$.prototype.$requestLedgerList$;
BitEx.prototype.requestDeposit = $bitex$api$BitEx$$.prototype.$requestDeposit$;
BitEx.prototype.processDeposit = $bitex$api$BitEx$$.prototype.$processDeposit$;
BitEx.prototype.requestDepositList = $bitex$api$BitEx$$.prototype.$requestDepositList$;
BitEx.prototype.requestWithdraw = $bitex$api$BitEx$$.prototype.$requestWithdraw$;
BitEx.prototype.processWithdraw = $bitex$api$BitEx$$.prototype.$processWithdraw$;
BitEx.prototype.requestWithdrawList = $bitex$api$BitEx$$.prototype.$requestWithdrawList$;
BitEx.prototype.confirmWithdraw = $bitex$api$BitEx$$.prototype.$confirmWithdraw$;
BitEx.prototype.requestCustomerList = $bitex$api$BitEx$$.prototype.$requestCustomerList$;
BitEx.prototype.requestCustomerDetails = $bitex$api$BitEx$$.prototype.$requestCustomerDetails$;
BitEx.prototype.verifyCustomer = $bitex$api$BitEx$$.prototype.$verifyCustomer$;
BitEx.prototype.requestBrokerList = $bitex$api$BitEx$$.prototype.$requestBrokerList$;
BitEx.prototype.requestOrderList = $bitex$api$BitEx$$.prototype.$requestOrderList$;
BitEx.prototype.cancelOrder = $bitex$api$BitEx$$.prototype.$cancelOrder$;
BitEx.prototype.sendRawMessage = $bitex$api$BitEx$$.prototype.$sendRawMessage$;
BitEx.prototype.sendBuyLimitedOrder = $bitex$api$BitEx$$.prototype.$sendBuyLimitedOrder$;
BitEx.prototype.sendSellLimitedOrder = $bitex$api$BitEx$$.prototype.$sendSellLimitedOrder$;
BitEx.prototype.testRequest = $bitex$api$BitEx$$.prototype.$testRequest$;
BitEx.prototype.addEventListener = $bitex$api$BitEx$$.prototype.addEventListener;
BitEx.prototype.removeEventListener = $bitex$api$BitEx$$.prototype.removeEventListener;
// Input 153
function $bitex$ui$RankingViewTable$$($opt_domHelper$$35$$) {
  this.$selected_trade_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {rowIDFn:this.$getRowId$, columns:[{property:"Rank", label:"#", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-rank"
  }}, {property:"Trader", label:"Trader", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-trader"
  }}, {property:"Broker", label:"Broker", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-broker"
  }}, {property:"Amount", label:"BTC Amount", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$175$$) {
    return app.$formatCurrency$($value$$175$$ / 1E8, "BTC", $JSCompiler_alias_TRUE$$)
  }, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-amount"
  }}], show_search:$JSCompiler_alias_FALSE$$}, $opt_domHelper$$35$$)
}
$goog$inherits$$($bitex$ui$RankingViewTable$$, $bitex$ui$DataGrid$$);
var $bitex$ui$RankingViewTable$CSS_CLASS$$ = "ranking";
$bitex$ui$RankingViewTable$$.prototype.$getRowId$ = function $$bitex$ui$RankingViewTable$$$$$getRowId$$($row_set$$10$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$10$$.rank)
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$RankingViewTable$CSS_CLASS$$, function() {
  return new $bitex$ui$RankingViewTable$$
});
// Input 154
function $bitex$view$RankingView$$($app$$14$$, $opt_domHelper$$36$$) {
  $bitex$view$View$$.call(this, $app$$14$$, $opt_domHelper$$36$$)
}
$goog$inherits$$($bitex$view$RankingView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$RankingView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$RankingView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$RankingView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$RankingView$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $bitex$view$RankingView$$.$superClass_$.$exitDocument$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$80$$ = this.$getHandler$();
  this.$ranking_table_$ = new $bitex$ui$RankingViewTable$$;
  $JSCompiler_StaticMethods_listen$$($handler$$80$$, this.$ranking_table_$, "request_data", this.$onRankingTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$80$$, this.$app_$.$conn_$, "traders_rank", this.$onTradeRankResponse_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$ranking_table_$, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$81$$ = this.$getHandler$();
  this.$ranking_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$81$$, this.$ranking_table_$, "request_data", this.$onRankingTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$81$$, this.$app_$.$conn_$, "traders_rank", this.$onTradeRankResponse_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$onRankingTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onRankingTableRequestData_$$($e$$181_msg$$inline_947$$) {
  var $JSCompiler_StaticMethods_requestTradersRank$self$$inline_940$$ = this.$app_$.$conn_$, $opt_filter$$inline_943$$ = $e$$181_msg$$inline_947$$.options.Filter;
  $e$$181_msg$$inline_947$$ = {MsgType:"U36", TradersRankReqID:parseInt(1E7 * Math.random(), 10), Page:$e$$181_msg$$inline_947$$.options.Page || 0, PageSize:$e$$181_msg$$inline_947$$.options.Limit || 100};
  $opt_filter$$inline_943$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$inline_943$$.length && ($e$$181_msg$$inline_947$$.Filter = $opt_filter$$inline_943$$);
  $JSCompiler_StaticMethods_requestTradersRank$self$$inline_940$$.sendMessage($e$$181_msg$$inline_947$$)
};
$JSCompiler_prototypeAlias$$.$onTradeRankResponse_$ = function $$JSCompiler_prototypeAlias$$$$onTradeRankResponse_$$($e$$182_msg$$66$$) {
  this.$ranking_table_$ != $JSCompiler_alias_NULL$$ && ($e$$182_msg$$66$$ = $e$$182_msg$$66$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$ranking_table_$, $e$$182_msg$$66$$.TradersRankGrp, $e$$182_msg$$66$$.Columns))
};
// Input 155
function $bitex$view$ForgotPasswordView$$($app$$15$$, $opt_domHelper$$37$$) {
  $bitex$view$View$$.call(this, $app$$15$$, $opt_domHelper$$37$$)
}
$goog$inherits$$($bitex$view$ForgotPasswordView$$, $bitex$view$View$$);
$bitex$view$ForgotPasswordView$$.prototype.$enterDocument$ = function $$bitex$view$ForgotPasswordView$$$$$enterDocument$$() {
  $bitex$view$ForgotPasswordView$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$("id_btn_forgot_password"), "click", function($e$$183$$) {
    $e$$183$$.stopPropagation();
    $e$$183$$.preventDefault();
    $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_forgot_password_email")).match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) ? this.dispatchEvent("recover_pwd") : ($goog$dom$getElement$$("id_forgot_password_email").focus(), this.$app_$.$showDialog$("Email inv\u00e1lido"))
  }, this)
};
$bitex$view$ForgotPasswordView$$.prototype.$getEmail$ = function $$bitex$view$ForgotPasswordView$$$$$getEmail$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_forgot_password_email"))
};
// Input 156
// Input 157
// Input 158
function $bitex$view$WithdrawView$$($app$$16$$, $opt_requests_from_customers$$1$$, $opt_domHelper$$38$$) {
  $bitex$view$View$$.call(this, $app$$16$$, $opt_domHelper$$38$$);
  this.$is_requests_from_customers_$ = $JSCompiler_alias_FALSE$$;
  $opt_requests_from_customers$$1$$ === $JSCompiler_alias_TRUE$$ && (this.$is_requests_from_customers_$ = $opt_requests_from_customers$$1$$);
  this.$qr_data_verb_$ = this.$qr_data_$ = this.$withdraw_action_$ = this.$confirmation_token_$ = this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$WithdrawView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$WithdrawView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$WithdrawView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$WithdrawView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$WithdrawView$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$getAmount$ = $JSCompiler_get$$("$amount_$");
$JSCompiler_prototypeAlias$$.$getMethod$ = $JSCompiler_get$$("$method_$");
$JSCompiler_prototypeAlias$$.$getWithdrawData$ = $JSCompiler_get$$("$data_$");
$JSCompiler_prototypeAlias$$.$onWithdrawListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableClick_$$($data$$40_e$$184$$) {
  var $element$$191$$ = $data$$40_e$$184$$.target;
  "I" === $element$$191$$.tagName && ($element$$191$$ = $goog$dom$getParentElement$$($element$$191$$));
  var $data_action$$1$$ = $element$$191$$.getAttribute("data-action");
  if($data_action$$1$$ != $JSCompiler_alias_NULL$$) {
    switch($data$$40_e$$184$$.preventDefault(), $data$$40_e$$184$$.stopPropagation(), $data$$40_e$$184$$ = $goog$json$parse$$($element$$191$$.getAttribute("data-row")), $data_action$$1$$) {
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:$data$$40_e$$184$$.Data.Wallet, Currency:$data$$40_e$$184$$.Currency}, this.$qr_data_verb_$ = "WITHDRAW", this.dispatchEvent("show_qr")
    }
  }
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$83$$ = this.$getHandler$(), $model$$27$$ = this.$app_$.$model_$;
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$83$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$83$$, this.$app_$.$conn_$, "withdraw_list_response", this.$onWithdrawListReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$83$$, this.$app_$.$conn_$, "withdraw_refresh." + $model$$27$$.get("UserID"), this.$onWithdrawRefresh_$), $JSCompiler_StaticMethods_unlisten$$($handler$$83$$, 
  this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$), $JSCompiler_StaticMethods_unlisten$$($handler$$83$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$), $JSCompiler_StaticMethods_unlisten$$($handler$$83$$, this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$), $JSCompiler_StaticMethods_unlisten$$($handler$$83$$, this.$withdraw_list_table_$, "withdraw_complete", this.$onUserSetWithdrawComplete_$), 
  this.$removeChildren$($JSCompiler_alias_TRUE$$));
  this.$request_id_$ = this.$withdraw_list_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$84$$ = this.$getHandler$(), $model$$28$$ = this.$app_$.$model_$;
  this.$destroyComponents_$();
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  var $currency_method_description_obj$$ = {}, $broker$$9$$ = $model$$28$$.get("Broker");
  $model$$28$$.get("IsBroker") && this.$is_requests_from_customers_$ && ($broker$$9$$ = $model$$28$$.get("Profile"), $broker$$9$$ = $goog$array$find$$($model$$28$$.get("BrokerList"), function($broker_obj$$) {
    if($broker_obj$$.BrokerID == $model$$28$$.get("UserID")) {
      return $JSCompiler_alias_TRUE$$
    }
  }));
  $goog$object$forEach$$($broker$$9$$.WithdrawStructure, function($method_list$$, $currency$$6$$) {
    $currency_method_description_obj$$[$currency$$6$$] = {};
    $goog$array$forEach$$($method_list$$, function($method$$6$$) {
      $currency_method_description_obj$$[$currency$$6$$][$method$$6$$.method] = $method$$6$$.description
    })
  });
  $model$$28$$.get("IsBroker") && this.$is_requests_from_customers_$ ? this.$withdraw_list_table_$ = new $bitex$ui$WithdrawList$$($currency_method_description_obj$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$) : this.$withdraw_list_table_$ = new $bitex$ui$WithdrawList$$($currency_method_description_obj$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$84$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$84$$, this.$app_$.$conn_$, "withdraw_list_response." + this.$request_id_$, this.$onWithdrawListReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$84$$, this.$app_$.$conn_$, "withdraw_refresh." + $model$$28$$.get("UserID"), this.$onWithdrawRefresh_$);
  $JSCompiler_StaticMethods_listen$$($handler$$84$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$84$$, this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$);
  $JSCompiler_StaticMethods_listen$$($handler$$84$$, this.$withdraw_list_table_$, "withdraw_complete", this.$onUserSetWithdrawComplete_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$withdraw_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$withdraw_list_table_$, "Amount", this.$priceFormatter_$, this);
  $JSCompiler_StaticMethods_listen$$($handler$$84$$, this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$)
};
$JSCompiler_prototypeAlias$$.$priceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$priceFormatter_$$($value$$188$$, $rowSet$$14$$) {
  var $priceCurrency$$5$$ = $rowSet$$14$$.Currency;
  return 0 === $value$$188$$ ? "-" : $goog$dom$createDom$$("abbr", {title:this.$app_$.$getCurrencyDescription$($priceCurrency$$5$$)}, this.$app_$.$formatCurrency$($value$$188$$ / 1E8, $priceCurrency$$5$$))
};
$JSCompiler_prototypeAlias$$.$onWithdrawListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableRequestData_$$($conn$$9_e$$185$$) {
  var $page$$12$$ = $conn$$9_e$$185$$.options.Page, $limit$$13$$ = $conn$$9_e$$185$$.options.Limit, $filter$$9$$ = $conn$$9_e$$185$$.options.Filter;
  $conn$$9_e$$185$$ = this.$app_$.$conn_$;
  var $model$$29$$ = this.$app_$.$model_$, $clientID$$1$$ = $JSCompiler_alias_VOID$$;
  $model$$29$$.get("IsBroker") && !this.$is_requests_from_customers_$ && ($clientID$$1$$ = $model$$29$$.get("UserID"));
  var $status$$10$$ = ["1", "2", "4", "8"];
  $filter$$9$$ != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($filter$$9$$, function($f$$48$$, $idx_filter$$2$$) {
    if(0 <= $goog$array$indexOf$$($status$$10$$, $f$$48$$)) {
      return $status$$10$$ = [$f$$48$$], $goog$array$removeAt$$($filter$$9$$, $idx_filter$$2$$), $JSCompiler_alias_TRUE$$
    }
  }, this);
  $conn$$9_e$$185$$.$requestWithdrawList$(this.$request_id_$, $page$$12$$, $limit$$13$$, $status$$10$$, $clientID$$1$$, $filter$$9$$)
};
$JSCompiler_prototypeAlias$$.$onUserCancelWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onUserCancelWithdraw_$$() {
  this.$withdraw_action_$ = "CANCEL";
  this.$data_$ = this.$withdraw_list_table_$.$getWithdrawData$();
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawInProgress_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawInProgress_$$() {
  this.$withdraw_action_$ = "PROGRESS";
  this.$data_$ = this.$withdraw_list_table_$.$getWithdrawData$();
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawComplete_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawComplete_$$() {
  this.$withdraw_action_$ = "COMPLETE";
  this.$data_$ = this.$withdraw_list_table_$.$getWithdrawData$();
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onWithdrawRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawRefresh_$$($e$$189_msg$$67$$) {
  $e$$189_msg$$67$$ = $e$$189_msg$$67$$.data;
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$withdraw_list_table_$, $e$$189_msg$$67$$)
};
$JSCompiler_prototypeAlias$$.$onWithdrawListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListReponse_$$($e$$190_msg$$68$$) {
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$190_msg$$68$$ = $e$$190_msg$$68$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$withdraw_list_table_$, $e$$190_msg$$68$$.WithdrawListGrp, $e$$190_msg$$68$$.Columns))
};
// Input 159
function $bitex$ui$LedgerActivity$$($button_filters$$, $pseudoNameFunction$$, $opt_broker_mode$$2$$, $opt_domHelper$$39$$) {
  $bitex$ui$DataGrid$$.call(this, {title:"Ledger", showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"Search ...", buttonFilters:$button_filters$$, rowClassFn:this.$getRowClass$, columns:[{property:"Created", label:"Data/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-date-time"
  }}, {property:"Currency", label:"Moeda", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-currency"
  }}, {property:"Description", label:"Descri\u00e7\u00e3o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$50$$) {
    switch($s$$50$$) {
      case "B":
        return"Bonus";
      case "D":
        return"Dep\u00f3sito";
      case "DF":
        return"Taxa de dep\u00f3sito";
      case "W":
        return"Saque";
      case "WF":
        return"Taxa de saque";
      case "T":
        return"Trade";
      case "TF":
        return"Comiss\u00e3o sobre neg\u00f3cio"
    }
  }, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-description"
  }}, {property:"PayeeID", label:"Outra parte", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$51$$, $rowSet$$16$$) {
    if($rowSet$$16$$.PayeeName != $JSCompiler_alias_NULL$$) {
      return $rowSet$$16$$.PayeeName
    }
    switch($rowSet$$16$$.Description) {
      case "B":
      ;
      case "DF":
      ;
      case "D":
      ;
      case "W":
      ;
      case "WF":
      ;
      case "TF":
        return"";
      default:
        return $pseudoNameFunction$$($s$$51$$)
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-payee"
  }}, {property:"Amount", label:"Valor", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-amount"
  }}, {property:"Balance", label:"Saldo", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-balance"
  }}]}, $opt_domHelper$$39$$)
}
$goog$inherits$$($bitex$ui$LedgerActivity$$, $bitex$ui$DataGrid$$);
var $bitex$ui$LedgerActivity$CSS_CLASS$$ = "ledger-activity";
$bitex$ui$LedgerActivity$$.prototype.$getCssClass$ = function $$bitex$ui$LedgerActivity$$$$$getCssClass$$() {
  return $bitex$ui$LedgerActivity$CSS_CLASS$$
};
$bitex$ui$LedgerActivity$$.prototype.$getRowClass$ = function $$bitex$ui$LedgerActivity$$$$$getRowClass$$($row_set$$11$$) {
  var $class_status$$5$$;
  switch($row_set$$11$$.Operation) {
    case "D":
      $class_status$$5$$ = $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-debit";
      break;
    case "C":
      $class_status$$5$$ = $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-credit"
  }
  return $class_status$$5$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$LedgerActivity$CSS_CLASS$$, function() {
  return new $bitex$ui$LedgerActivity$$
});
// Input 160
function $bitex$view$LedgerView$$($app$$17$$, $opt_domHelper$$40$$) {
  $bitex$view$View$$.call(this, $app$$17$$, $opt_domHelper$$40$$);
  this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$LedgerView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$LedgerView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$LedgerView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$LedgerView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$85$$ = this.$getHandler$();
  this.$ledger_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$ledger_table_$, "request_data", this.$onLedgerTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$, this.$onLedgerListResponse_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_id_$ = this.$ledger_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$86$$ = this.$getHandler$(), $model$$30$$ = this.$app_$.$model_$;
  this.$destroyComponents_$();
  var $button_filters$$1$$ = [{label:"Todas", value:"all"}];
  $model$$30$$.get("IsBroker") ? ($button_filters$$1$$ = [], $goog$array$forEach$$($model$$30$$.get("Profile").BrokerCurrencies, function($currency_code$$6$$) {
    $button_filters$$1$$.push({label:"My customers:" + this.$app_$.$getCurrencyDescription$($currency_code$$6$$), value:$goog$json$serialize$$({currency:$currency_code$$6$$, broker_id:$model$$30$$.get("UserID")})})
  }, this), $goog$isDefAndNotNull$$($model$$30$$.get("Profile").Accounts) && $goog$object$forEach$$($model$$30$$.get("Profile").Accounts, function($account_data$$, $account_name$$) {
    $goog$array$forEach$$($model$$30$$.get("Profile").BrokerCurrencies, function($currency_code$$7$$) {
      $button_filters$$1$$.push({label:$account_name$$ + ":" + this.$app_$.$getCurrencyDescription$($currency_code$$7$$), value:$goog$json$serialize$$({currency:$currency_code$$7$$, account_id:$account_data$$[0]})})
    }, this)
  }, this), $goog$array$forEach$$($model$$30$$.get("Broker").BrokerCurrencies, function($currency_code$$8$$) {
    $button_filters$$1$$.push({label:$model$$30$$.get("Broker").ShortName + ":" + this.$app_$.$getCurrencyDescription$($currency_code$$8$$), value:$goog$json$serialize$$({currency:$currency_code$$8$$, broker_id:$model$$30$$.get("Broker").BrokerID})})
  }, this)) : $goog$array$forEach$$($model$$30$$.get("BrokerCurrencies"), function($currency_code$$9$$) {
    $button_filters$$1$$.push({label:this.$app_$.$getCurrencyDescription$($currency_code$$9$$), value:$goog$json$serialize$$({currency:$currency_code$$9$$, broker_id:$model$$30$$.get("Broker").BrokerID})})
  }, this);
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  this.$ledger_table_$ = new $bitex$ui$LedgerActivity$$($button_filters$$1$$, $bitex$util$getPseudoName$$, $model$$30$$.get("IsBroker"));
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$ledger_table_$, "request_data", this.$onLedgerTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$app_$.$conn_$, "ledger_list." + this.$request_id_$, this.$onLedgerListResponse_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$ledger_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$ledger_table_$, "Amount", this.$amountFormatter_$, this);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$ledger_table_$, "Balance", this.$balanceFormatter_$, this)
};
$JSCompiler_prototypeAlias$$.$amountFormatter_$ = function $$JSCompiler_prototypeAlias$$$$amountFormatter_$$($value$$189$$, $rowSet$$17$$) {
  "D" == $rowSet$$17$$.Operation && ($value$$189$$ *= -1);
  return this.$app_$.$formatCurrency$($value$$189$$ / 1E8, $rowSet$$17$$.Currency)
};
$JSCompiler_prototypeAlias$$.$balanceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$balanceFormatter_$$($value$$190$$, $rowSet$$18$$) {
  return this.$app_$.$formatCurrency$($value$$190$$ / 1E8, $rowSet$$18$$.Currency)
};
$JSCompiler_prototypeAlias$$.$onLedgerTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onLedgerTableRequestData_$$($e$$191_filters_param$$) {
  var $page$$13$$ = $e$$191_filters_param$$.options.Page, $limit$$14$$ = $e$$191_filters_param$$.options.Limit;
  $e$$191_filters_param$$ = $e$$191_filters_param$$.options.Filter;
  var $currency$$7$$, $filters$$ = [], $userID$$ = this.$app_$.$model_$.get("UserID"), $brokerID$$3$$ = this.$app_$.$model_$.get("Broker").BrokerID;
  this.$app_$.$model_$.get("IsBroker") && ($brokerID$$3$$ = $userID$$);
  $goog$isArrayLike$$($e$$191_filters_param$$) && $goog$array$forEach$$($e$$191_filters_param$$, function($filter$$10$$) {
    try {
      var $filter_obj$$ = $goog$json$parse$$($filter$$10$$);
      $filter_obj$$.currency != $JSCompiler_alias_NULL$$ && ($currency$$7$$ = $filter_obj$$.currency);
      $filter_obj$$.broker_id != $JSCompiler_alias_NULL$$ && ($brokerID$$3$$ = $filter_obj$$.broker_id);
      $filter_obj$$.account_id != $JSCompiler_alias_NULL$$ && ($userID$$ = $filter_obj$$.account_id)
    }catch($ex$$11$$) {
      $filters$$.push($filter$$10$$)
    }
  }, this);
  this.$app_$.$conn_$.$requestLedgerList$(this.$request_id_$, $page$$13$$, $limit$$14$$, $brokerID$$3$$, $userID$$, $currency$$7$$, $filters$$)
};
$JSCompiler_prototypeAlias$$.$onLedgerListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onLedgerListResponse_$$($e$$192_msg$$69$$) {
  this.$ledger_table_$ != $JSCompiler_alias_NULL$$ && ($e$$192_msg$$69$$ = $e$$192_msg$$69$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$ledger_table_$, $e$$192_msg$$69$$.LedgerListGrp, $e$$192_msg$$69$$.Columns))
};
// Input 161
function $bitex$view$AccountOverview$$($app$$18$$, $opt_domHelper$$41$$) {
  $bitex$view$View$$.call(this, $app$$18$$, $opt_domHelper$$41$$);
  this.$verification_data_$ = this.$qr_data_verb_$ = this.$qr_data_$ = this.$deposit_data_$ = this.$deposit_action_$ = this.$withdraw_action_$ = this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$AccountOverview$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$AccountOverview$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$($state$$21_username$$10$$) {
  $bitex$view$AccountOverview$$.$superClass_$.$enterView$.call(this);
  var $selectedCustomer$$ = this.$app_$.$model_$.get("SelectedCustomer");
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$app_$.$model_$, "model_setSelectedCustomer", this.$onUpdateSelectedCustomer_$);
  $selectedCustomer$$ != $JSCompiler_alias_NULL$$ && $selectedCustomer$$.Username == $state$$21_username$$10$$ && ($state$$21_username$$10$$ = $selectedCustomer$$.State, $state$$21_username$$10$$ == $JSCompiler_alias_NULL$$ && ($state$$21_username$$10$$ = this.$app_$.$model_$.get("Profile").State, $state$$21_username$$10$$ != $JSCompiler_alias_NULL$$ || ($state$$21_username$$10$$ = this.$app_$.$model_$.get("Broker").State)), $selectedCustomer$$.State = $state$$21_username$$10$$, this.$recreateComponents_$($selectedCustomer$$))
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$AccountOverview$$.$superClass_$.$exitView$.call(this);
  $JSCompiler_StaticMethods_unlisten$$(this.$getHandler$(), this.$app_$.$model_$, "model_setSelectedCustomer", this.$onUpdateSelectedCustomer_$);
  var $selectedCustomer$$1$$ = this.$app_$.$model_$.get("SelectedCustomer");
  this.$destroyComponents_$($selectedCustomer$$1$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$AccountOverview$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$($account_overview_header_el$$1_customer$$1$$) {
  var $handler$$89$$ = this.$getHandler$();
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListResponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, "process_deposit." + this.$request_id_$, this.$onDepositProcessResponse_$), 
  $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $account_overview_header_el$$1_customer$$1$$.ID, this.$onDepositRefresh_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$));
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, "withdraw_list_response." + this.$request_id_$, this.$onWithdrawListReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, 
  this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$withdraw_list_table_$, "withdraw_complete", this.$onUserSetWithdrawComplete_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, "process_withdraw." + this.$request_id_$, this.$onWithdrawProcessResponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, "withdraw_refresh." + $account_overview_header_el$$1_customer$$1$$.ID, 
  this.$onWithdrawRefresh_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, "balance_response", this.$onBalanceResponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$deposit_list_table_$ = this.$withdraw_list_table_$ = $JSCompiler_alias_NULL$$;
  $account_overview_header_el$$1_customer$$1$$ = $goog$dom$getElement$$("account_overview_header_id");
  $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, $account_overview_header_el$$1_customer$$1$$, "click", this.$onAccountOverviewHeaderClick_$);
  $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, this.$app_$.$conn_$, "verify_customer_response." + this.$request_id_$, this.$onVerifyCustomerResponse_$);
  $JSCompiler_StaticMethods_unlisten$$($handler$$89$$, $goog$dom$getElement$$("id_btn_user_fees"), "click", this.$onBtnUserFeesClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$89$$, this.$getElement$(), "change", this.$onElementChange_$);
  $goog$dom$removeChildren$$($account_overview_header_el$$1_customer$$1$$);
  this.$request_id_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  return $goog$dom$getElementByClass$$("bitex-account-overview-view-content", this.$getElement$()) || this.$getElement$()
};
function $JSCompiler_StaticMethods_formatVerificationData_$$($JSCompiler_StaticMethods_formatVerificationData_$self$$, $raw_verification_data$$) {
  var $formatted_data$$ = $raw_verification_data$$;
  try {
    var $verification_data$$ = $goog$json$parse$$($raw_verification_data$$), $formatted_data$$ = '<table class="table table-striped table-condensed">';
    $goog$array$forEach$$($verification_data$$, function($verification_obj$$) {
      $goog$object$forEach$$($verification_obj$$, function($data$$41$$, $key$$110$$) {
        $formatted_data$$ += "<tr><td>";
        "data" != $key$$110$$ && ($formatted_data$$ += $key$$110$$);
        $formatted_data$$ += "</td> <td>";
        "data" == $key$$110$$ ? $formatted_data$$ += $data$$41$$ : "uploaded_files" == $key$$110$$ ? $goog$isArray$$($data$$41$$) && $goog$array$forEach$$($data$$41$$, function($data_line$$) {
          $formatted_data$$ = $data_line$$.match(/\.(jpg|jpeg|png|gif)$/) != $JSCompiler_alias_NULL$$ ? $formatted_data$$ + (' <a href="#" data-action="file-view" data-filename="' + $data_line$$ + '" class="btn btn-mini btn-info" ><i data-action="file-view" data-filename="' + $data_line$$ + '"  class="icon-white icon-eye-open"></i></a> ') : $formatted_data$$ + (' <a href="' + $data_line$$ + '" class="btn btn-mini btn-info" "target":"blank" ><i class="icon-white icon-file"></i></a> ')
        }, this) : $goog$isArray$$($data$$41$$) ? $goog$array$forEach$$($data$$41$$, function($data_line$$1$$) {
          $formatted_data$$ += $data_line$$1$$ + "<br/>"
        }, this) : $goog$isObject$$($data$$41$$) ? $goog$object$forEach$$($data$$41$$, function($data_line_data$$, $data_line_key$$) {
          $formatted_data$$ += $data_line_key$$ + ":" + $data_line_data$$ + "<br/>"
        }, this) : $formatted_data$$ += $data$$41$$;
        $formatted_data$$ += "</td></tr>"
      }, this)
    }, $JSCompiler_StaticMethods_formatVerificationData_$self$$);
    $formatted_data$$ += "</table>"
  }catch($e$$193$$) {
  }
  return $formatted_data$$
}
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$($customer$$2$$) {
  var $handler$$90$$ = this.$getHandler$(), $model$$31$$ = this.$app_$.$model_$;
  this.$destroyComponents_$($customer$$2$$);
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  var $account_overview_header_el$$2$$ = $goog$dom$getElement$$("account_overview_header_id"), $account_overview_verify_el_profile$$1$$ = $goog$dom$getElement$$("account_overview_verify_data_id");
  $account_overview_verify_el_profile$$1$$ != $JSCompiler_alias_NULL$$ && ($account_overview_verify_el_profile$$1$$.innerHTML = $JSCompiler_StaticMethods_formatVerificationData_$$(this, $customer$$2$$.VerificationData));
  $goog$soy$renderElement$$($account_overview_header_el$$2$$, $bitex$templates$AccountOverviewHeader$$, {$msg_customer_detail$:$customer$$2$$});
  $account_overview_verify_el_profile$$1$$ = $model$$31$$.get("Profile");
  $model$$31$$.get("Broker");
  this.$deposit_list_table_$ = new $bitex$ui$DepositList$$($account_overview_verify_el_profile$$1$$.CryptoCurrencies, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, this.$app_$.$rest_url_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, "process_deposit." + this.$request_id_$, this.$onDepositProcessResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $customer$$2$$.ID, this.$onDepositRefresh_$);
  var $currency_method_description_obj$$1$$ = {};
  $goog$object$forEach$$($account_overview_verify_el_profile$$1$$.WithdrawStructure, function($method_list$$1$$, $currency$$8$$) {
    $currency_method_description_obj$$1$$[$currency$$8$$] = {};
    $goog$array$forEach$$($method_list$$1$$, function($method$$7$$) {
      $currency_method_description_obj$$1$$[$currency$$8$$][$method$$7$$.method] = $method$$7$$.description
    })
  });
  this.$withdraw_list_table_$ = new $bitex$ui$WithdrawList$$($currency_method_description_obj$$1$$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, "withdraw_list_response." + this.$request_id_$, this.$onWithdrawListReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$withdraw_list_table_$, "withdraw_complete", this.$onUserSetWithdrawComplete_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, "process_withdraw." + this.$request_id_$, this.$onWithdrawProcessResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, "withdraw_refresh." + $customer$$2$$.ID, this.$onWithdrawRefresh_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, "balance_response", this.$onBalanceResponse_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$deposit_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$deposit_list_table_$, "Value", this.$valuePriceFormatter_$, this);
  $JSCompiler_StaticMethods_addChild$$(this, this.$withdraw_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$withdraw_list_table_$, "Amount", this.$priceFormatter_$, this);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, $account_overview_header_el$$2$$, "click", this.$onAccountOverviewHeaderClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, $goog$dom$getElement$$("id_btn_user_fees"), "click", this.$onBtnUserFeesClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$app_$.$conn_$, "verify_customer_response." + this.$request_id_$, this.$onVerifyCustomerResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$getElement$(), "change", this.$onElementChange_$);
  $JSCompiler_StaticMethods_listen$$($handler$$90$$, this.$getElement$(), "click", this.$onViewClick_$);
  this.$app_$.$conn_$.$requestBalances$($customer$$2$$.ID);
  $JSCompiler_StaticMethods_recreateUserFeeComponents_$$($customer$$2$$)
};
function $JSCompiler_StaticMethods_recreateUserFeeComponents_$$($customer$$3_sell_fee$$) {
  var $buy_fee$$ = $customer$$3_sell_fee$$.TransactionFeeBuy;
  $customer$$3_sell_fee$$ = $customer$$3_sell_fee$$.TransactionFeeSell;
  var $fmt$$8$$ = new $goog$i18n$NumberFormat$$(3);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$8$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$8$$);
  $buy_fee$$ != $JSCompiler_alias_NULL$$ && ($buy_fee$$ = $fmt$$8$$.$format$($buy_fee$$ / 1E4));
  $customer$$3_sell_fee$$ != $JSCompiler_alias_NULL$$ && ($customer$$3_sell_fee$$ = $fmt$$8$$.$format$($customer$$3_sell_fee$$ / 1E4));
  $goog$soy$renderElement$$($goog$dom$getElement$$("account_overview_fees_balances_id"), $bitex$templates$YourFeesBalances$$, {$buy_fee$:$buy_fee$$, $sell_fee$:$customer$$3_sell_fee$$})
}
$JSCompiler_prototypeAlias$$.$getWithdrawData$ = function $$JSCompiler_prototypeAlias$$$$getWithdrawData$$() {
  return this.$withdraw_list_table_$.$getWithdrawData$()
};
$JSCompiler_prototypeAlias$$.$getClientID$ = $JSCompiler_get$$("$client_id_$");
$JSCompiler_prototypeAlias$$.$getDepositData$ = $JSCompiler_get$$("$deposit_data_$");
$JSCompiler_prototypeAlias$$.$getDepositAction$ = $JSCompiler_get$$("$deposit_action_$");
$JSCompiler_prototypeAlias$$.$onDepositListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableRequestData_$$($e$$194_filter$$11$$) {
  var $page$$14$$ = $e$$194_filter$$11$$.options.Page, $limit$$15$$ = $e$$194_filter$$11$$.options.Limit;
  $e$$194_filter$$11$$ = $e$$194_filter$$11$$.options.Filter;
  var $selectedCustomer$$2$$ = this.$app_$.$model_$.get("SelectedCustomer");
  this.$app_$.$conn_$.$requestDepositList$(this.$request_id_$, $page$$14$$, $limit$$15$$, ["0", "1", "2", "4", "8"], $selectedCustomer$$2$$.ID, $e$$194_filter$$11$$)
};
$JSCompiler_prototypeAlias$$.$onDepositRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onDepositRefresh_$$($e$$195_msg$$70$$) {
  $e$$195_msg$$70$$ = $e$$195_msg$$70$$.data;
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$deposit_list_table_$, $e$$195_msg$$70$$)
};
$JSCompiler_prototypeAlias$$.$onDepositListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListResponse_$$($e$$196_msg$$71$$) {
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$196_msg$$71$$ = $e$$196_msg$$71$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$deposit_list_table_$, $e$$196_msg$$71$$.DepositListGrp, $e$$196_msg$$71$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onVerifyCustomerResponse_$ = function $$JSCompiler_prototypeAlias$$$$onVerifyCustomerResponse_$$($e$$197_msg$$72$$) {
  $e$$197_msg$$72$$ = $e$$197_msg$$72$$.data;
  var $account_overview_verify_el$$1$$ = $goog$dom$getElement$$("account_overview_verify_data_id");
  $account_overview_verify_el$$1$$ != $JSCompiler_alias_NULL$$ && ($account_overview_verify_el$$1$$.innerHTML = $JSCompiler_StaticMethods_formatVerificationData_$$(this, $e$$197_msg$$72$$.VerificationData))
};
$JSCompiler_prototypeAlias$$.$onViewClick_$ = function $$JSCompiler_prototypeAlias$$$$onViewClick_$$($e$$198$$) {
  var $el$$109$$ = $e$$198$$.target;
  if($el$$109$$.getAttribute("data-action") != $JSCompiler_alias_NULL$$) {
    switch($el$$109$$.getAttribute("data-action")) {
      case "file-view":
        $e$$198$$.preventDefault(), $e$$198$$.stopPropagation(), this.$file_name_$ = $el$$109$$.getAttribute("data-filename"), this.dispatchEvent("file_view")
    }
  }
};
$JSCompiler_prototypeAlias$$.$onElementChange_$ = function $$JSCompiler_prototypeAlias$$$$onElementChange_$$($changed_attribute_e$$199$$) {
  var $el$$110_new_value$$1$$ = $changed_attribute_e$$199$$.target;
  if($el$$110_new_value$$1$$.getAttribute("data-profile-change") != $JSCompiler_alias_NULL$$) {
    switch($changed_attribute_e$$199$$ = $el$$110_new_value$$1$$.getAttribute("data-profile-change"), this.$client_id_$ = this.$app_$.$model_$.get("SelectedCustomer").ID, this.$update_profile_data_$ = {}, $el$$110_new_value$$1$$ = $goog$dom$forms$getValue$$($el$$110_new_value$$1$$), $changed_attribute_e$$199$$) {
      case "Verified":
        $el$$110_new_value$$1$$ = $goog$string$toNumber$$($el$$110_new_value$$1$$), this.$verification_data_$ = $JSCompiler_alias_NULL$$, this.$verification_level_$ = $el$$110_new_value$$1$$, this.dispatchEvent("set_verified")
    }
  }
};
$JSCompiler_prototypeAlias$$.$onBtnUserFeesClick_$ = function $$JSCompiler_prototypeAlias$$$$onBtnUserFeesClick_$$() {
  var $dlg_content_selectedCustomer$$4_userFeesDialog$$ = this.$app_$.$model_$.get("SelectedCustomer"), $fmt$$9$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$9$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$9$$);
  var $buy_fee$$1$$ = $dlg_content_selectedCustomer$$4_userFeesDialog$$.TransactionFeeBuy, $sell_fee$$1$$ = $dlg_content_selectedCustomer$$4_userFeesDialog$$.TransactionFeeSell;
  $buy_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($buy_fee$$1$$ = $fmt$$9$$.$format$($buy_fee$$1$$ / 100));
  $sell_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($sell_fee$$1$$ = $fmt$$9$$.$format$($sell_fee$$1$$ / 100));
  $dlg_content_selectedCustomer$$4_userFeesDialog$$ = $bitex$templates$UserFeesDialogContent$$({id:"id_user_fees", $buy_fee$:$buy_fee$$1$$, $sell_fee$:$sell_fee$$1$$});
  $dlg_content_selectedCustomer$$4_userFeesDialog$$ = this.$app_$.$showDialog$($dlg_content_selectedCustomer$$4_userFeesDialog$$, "Set custom user fees", $bootstrap$Dialog$ButtonSet$createOkCancel$$());
  $buy_fee$$1$$ != $JSCompiler_alias_NULL$$ ? ($goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_FALSE$$, $goog$dom$getElement$$("id_user_fees_broker_buy_fee").checked = $JSCompiler_alias_FALSE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), $buy_fee$$1$$)) : ($goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_TRUE$$, $goog$dom$getElement$$("id_user_fees_broker_buy_fee").checked = $JSCompiler_alias_TRUE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), 
  "None"));
  $sell_fee$$1$$ != $JSCompiler_alias_NULL$$ ? ($goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_FALSE$$, $goog$dom$getElement$$("id_user_fees_broker_sell_fee").checked = $JSCompiler_alias_FALSE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), $sell_fee$$1$$)) : ($goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_TRUE$$, $goog$dom$getElement$$("id_user_fees_broker_sell_fee").checked = $JSCompiler_alias_TRUE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), 
  "None"));
  var $handler$$91$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, $goog$dom$getElement$$("id_user_fees_broker_buy_fee"), "click", function($e$$201$$) {
    $e$$201$$.target.checked ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), "None"), $goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_TRUE$$) : ($buy_fee$$1$$ != $JSCompiler_alias_NULL$$ ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), $buy_fee$$1$$) : $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), "0"), $goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_FALSE$$)
  });
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, $goog$dom$getElement$$("id_user_fees_broker_sell_fee"), "click", function($e$$202$$) {
    $e$$202$$.target.checked ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), "None"), $goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_TRUE$$) : ($sell_fee$$1$$ != $JSCompiler_alias_NULL$$ ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), $sell_fee$$1$$) : $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), "0"), $goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_FALSE$$)
  });
  $JSCompiler_StaticMethods_listenOnce$$($handler$$91$$, $dlg_content_selectedCustomer$$4_userFeesDialog$$, $goog$ui$Dialog$EventType$SELECT$$, function($buy_fee_value_e$$203$$) {
    if("ok" == $buy_fee_value_e$$203$$.key) {
      var $fee_buy_text_sell_fee_value$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_user_fees_buy_fee")), $fee_sell_text_selectedCustomer$$5$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_user_fees_sell_fee")), $pos$$24$$ = [0];
      $buy_fee_value_e$$203$$ = $fmt$$9$$.parse($fee_buy_text_sell_fee_value$$, $pos$$24$$);
      $buy_fee_value_e$$203$$ = $pos$$24$$[0] != $fee_buy_text_sell_fee_value$$.length || isNaN($buy_fee_value_e$$203$$) || 0 >= $buy_fee_value_e$$203$$ ? $JSCompiler_alias_NULL$$ : 100 * $buy_fee_value_e$$203$$;
      $pos$$24$$ = [0];
      $fee_buy_text_sell_fee_value$$ = $fmt$$9$$.parse($fee_sell_text_selectedCustomer$$5$$, $pos$$24$$);
      $fee_buy_text_sell_fee_value$$ = $pos$$24$$[0] != $fee_sell_text_selectedCustomer$$5$$.length || isNaN($fee_buy_text_sell_fee_value$$) || 0 >= $fee_buy_text_sell_fee_value$$ ? $JSCompiler_alias_NULL$$ : 100 * $fee_buy_text_sell_fee_value$$;
      $fee_sell_text_selectedCustomer$$5$$ = this.$app_$.$model_$.get("SelectedCustomer");
      this.$client_id_$ = $goog$string$toNumber$$($fee_sell_text_selectedCustomer$$5$$.ID);
      this.$update_profile_data_$ = {TransactionFeeBuy:$buy_fee_value_e$$203$$, TransactionFeeSell:$fee_buy_text_sell_fee_value$$};
      this.dispatchEvent("update_profile")
    }
  }, this)
};
$JSCompiler_prototypeAlias$$.$onUpdateSelectedCustomer_$ = function $$JSCompiler_prototypeAlias$$$$onUpdateSelectedCustomer_$$($e$$204_new_data$$) {
  var $previous_data$$ = $e$$204_new_data$$.$old_data$;
  $e$$204_new_data$$ = $e$$204_new_data$$.data;
  if($previous_data$$ != $JSCompiler_alias_NULL$$ && $previous_data$$.ID === $e$$204_new_data$$.ID) {
    ($previous_data$$.TransactionFeeBuy !== $e$$204_new_data$$.TransactionFeeBuy || $previous_data$$.TransactionFeeSell !== $e$$204_new_data$$.TransactionFeeSell) && $JSCompiler_StaticMethods_recreateUserFeeComponents_$$($e$$204_new_data$$);
    var $new_data_el$$, $new_data_parent_el$$;
    $previous_data$$.TwoFactorEnabled !== $e$$204_new_data$$.TwoFactorEnabled && ($new_data_el$$ = $goog$soy$renderAsElement$$($bitex$templates$AccountOverviewHeaderTwoFactors$$, {$msg_customer_detail$:{TwoFactorEnabled:$e$$204_new_data$$.TwoFactorEnabled}}, $JSCompiler_alias_VOID$$, new $goog$dom$DomHelper$$($JSCompiler_alias_VOID$$)), $new_data_parent_el$$ = $goog$dom$getElementByClass$$("account-overview-two-factors", $goog$dom$getElement$$("account_overview_header_id")), $goog$dom$removeChildren$$($new_data_parent_el$$), 
    $new_data_parent_el$$.appendChild($new_data_el$$));
    $previous_data$$.NeedWithdrawEmail !== $e$$204_new_data$$.NeedWithdrawEmail && ($new_data_el$$ = $goog$soy$renderAsElement$$($bitex$templates$AccountOverviewHeaderWithDrawEmailData$$, {$msg_customer_detail$:{NeedWithdrawEmail:$e$$204_new_data$$.NeedWithdrawEmail}}, $JSCompiler_alias_VOID$$, new $goog$dom$DomHelper$$($JSCompiler_alias_VOID$$)), $new_data_parent_el$$ = $goog$dom$getElementByClass$$("account-overview-withdraw-email", $goog$dom$getElement$$("account_overview_header_id")), $goog$dom$removeChildren$$($new_data_parent_el$$), 
    $new_data_parent_el$$.appendChild($new_data_el$$))
  }
};
$JSCompiler_prototypeAlias$$.$onAccountOverviewHeaderClick_$ = function $$JSCompiler_prototypeAlias$$$$onAccountOverviewHeaderClick_$$($e$$205_handler$$92$$) {
  var $data_action$$2_dlg_content$$1_element$$194$$ = $e$$205_handler$$92$$.target;
  "I" === $data_action$$2_dlg_content$$1_element$$194$$.tagName && ($data_action$$2_dlg_content$$1_element$$194$$ = $goog$dom$getParentElement$$($data_action$$2_dlg_content$$1_element$$194$$));
  $data_action$$2_dlg_content$$1_element$$194$$ = $data_action$$2_dlg_content$$1_element$$194$$.getAttribute("data-action");
  if($data_action$$2_dlg_content$$1_element$$194$$ != $JSCompiler_alias_NULL$$) {
    $e$$205_handler$$92$$.preventDefault();
    $e$$205_handler$$92$$.stopPropagation();
    $e$$205_handler$$92$$ = this.$getHandler$();
    var $selectedCustomer$$6$$ = this.$app_$.$model_$.get("SelectedCustomer");
    switch($data_action$$2_dlg_content$$1_element$$194$$) {
      case "SET_TWO_FACTOR":
        this.$client_id_$ = $goog$string$toNumber$$($selectedCustomer$$6$$.ID);
        this.$update_profile_data_$ = {TwoFactorEnabled:$JSCompiler_alias_FALSE$$};
        this.dispatchEvent("update_profile");
        break;
      case "SET_WITHDRAW_EMAIL":
        this.$client_id_$ = $selectedCustomer$$6$$.ID;
        this.$client_id_$ = $goog$string$toNumber$$($selectedCustomer$$6$$.ID);
        this.$update_profile_data_$ = {WithdrawEmailValidation:!$selectedCustomer$$6$$.NeedWithdrawEmail};
        this.dispatchEvent("update_profile");
        break;
      case "SET_VERIFIED":
        var $data_action$$2_dlg_content$$1_element$$194$$ = $bitex$templates$EnterVerificationDataDialogContent$$({$clientID$:$selectedCustomer$$6$$.ID}), $dlg$$ = this.$app_$.$showDialog$($data_action$$2_dlg_content$$1_element$$194$$, "Link para onde est\u00e3o os documentos de verifica\u00e7\u00e3o desta conta", $bootstrap$Dialog$ButtonSet$createOkCancel$$());
        $JSCompiler_StaticMethods_listen$$($e$$205_handler$$92$$, $dlg$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$206_verification_data$$1$$) {
          "ok" == $e$$206_verification_data$$1$$.key && ($e$$206_verification_data$$1$$.preventDefault(), $e$$206_verification_data$$1$$.stopPropagation(), $e$$206_verification_data$$1$$ = $bitex$util$getFormAsJSON$$($goog$dom$getFirstElementChild$$($dlg$$.$getContentElement$())), $e$$206_verification_data$$1$$.VerificationData != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($e$$206_verification_data$$1$$.VerificationData) && (this.$client_id_$ = $goog$string$toNumber$$($e$$206_verification_data$$1$$.ClientID), 
          this.$verification_data_$ = $e$$206_verification_data$$1$$.VerificationData, this.$verification_level_$ = 3, this.dispatchEvent("set_verified"), $dlg$$.$dispose$()))
        }, this)
    }
  }
};
$JSCompiler_prototypeAlias$$.$onWithdrawListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableClick_$$($data$$42_e$$207$$) {
  var $element$$195$$ = $data$$42_e$$207$$.target;
  "I" === $element$$195$$.tagName && ($element$$195$$ = $goog$dom$getParentElement$$($element$$195$$));
  var $data_action$$3$$ = $element$$195$$.getAttribute("data-action");
  if($data_action$$3$$ != $JSCompiler_alias_NULL$$) {
    switch($data$$42_e$$207$$.preventDefault(), $data$$42_e$$207$$.stopPropagation(), $data$$42_e$$207$$ = $goog$json$parse$$($element$$195$$.getAttribute("data-row")), $data_action$$3$$) {
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:$data$$42_e$$207$$.Data.Wallet, Currency:$data$$42_e$$207$$.Currency}, this.$qr_data_verb_$ = "WITHDRAW", this.dispatchEvent("show_qr")
    }
  }
};
$JSCompiler_prototypeAlias$$.$onDepositListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableClick_$$($e$$208$$) {
  var $element$$196$$ = $e$$208$$.target;
  "I" === $element$$196$$.tagName && ($element$$196$$ = $goog$dom$getParentElement$$($element$$196$$));
  var $data_action$$4$$ = $element$$196$$.getAttribute("data-action");
  if($data_action$$4$$ != $JSCompiler_alias_NULL$$) {
    switch($e$$208$$.preventDefault(), $e$$208$$.stopPropagation(), this.$deposit_action_$ = $data_action$$4$$, this.$deposit_data_$ = $goog$json$parse$$($element$$196$$.getAttribute("data-row")), $data_action$$4$$) {
      case "SHOW_RECEIPT":
        this.$receipt_data_$ = {SubmissionID:this.$data_$.Data.SubmissionID, DepositReceipt:this.$data_$.Data.DepositReceipt};
        this.dispatchEvent("show_receipt");
        break;
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:this.$deposit_data_$.Data.InputAddress, Currency:this.$deposit_data_$.Currency};
        this.$qr_data_verb_$ = "DEPOSIT";
        this.dispatchEvent("show_qr");
        break;
      case "UPLOAD":
        this.dispatchEvent("upload_receipt");
        break;
      case "CANCEL":
      ;
      case "PROGRESS":
      ;
      case "COMPLETE":
        this.dispatchEvent("process_deposit")
    }
  }
};
$JSCompiler_prototypeAlias$$.$onUserCancelWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onUserCancelWithdraw_$$() {
  this.$withdraw_action_$ = "CANCEL";
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawInProgress_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawInProgress_$$() {
  this.$withdraw_action_$ = "PROGRESS";
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawComplete_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawComplete_$$() {
  this.$withdraw_action_$ = "COMPLETE";
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onWithdrawListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableRequestData_$$($e$$212_filter$$12$$) {
  var $page$$15$$ = $e$$212_filter$$12$$.options.Page, $limit$$16$$ = $e$$212_filter$$12$$.options.Limit;
  $e$$212_filter$$12$$ = $e$$212_filter$$12$$.options.Filter;
  var $selectedCustomer$$7$$ = this.$app_$.$model_$.get("SelectedCustomer");
  this.$app_$.$conn_$.$requestWithdrawList$(this.$request_id_$, $page$$15$$, $limit$$16$$, ["1", "2", "4", "8"], $selectedCustomer$$7$$.ID, $e$$212_filter$$12$$)
};
$JSCompiler_prototypeAlias$$.$priceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$priceFormatter_$$($value$$191$$, $rowSet$$19$$) {
  var $priceCurrency$$6$$ = $rowSet$$19$$.Currency;
  return 0 === $value$$191$$ ? "-" : $goog$dom$createDom$$("abbr", {title:this.$app_$.$getCurrencyDescription$($priceCurrency$$6$$)}, this.$app_$.$formatCurrency$($value$$191$$ / 1E8, $priceCurrency$$6$$))
};
$JSCompiler_prototypeAlias$$.$valuePriceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$valuePriceFormatter_$$($value$$192$$, $rowSet$$20$$) {
  var $formatted_paid_value$$1_paid_value$$1$$ = $rowSet$$20$$.PaidValue, $priceCurrency$$7$$ = $rowSet$$20$$.Currency, $currency_description$$3$$ = this.$app_$.$getCurrencyDescription$($priceCurrency$$7$$), $formatted_value$$1$$ = this.$app_$.$formatCurrency$($value$$192$$ / 1E8, $priceCurrency$$7$$);
  return 0 === $value$$192$$ ? 0 === $formatted_paid_value$$1_paid_value$$1$$ ? "-" : $goog$dom$createDom$$("abbr", {title:$currency_description$$3$$}, this.$app_$.$formatCurrency$($formatted_paid_value$$1_paid_value$$1$$ / 1E8, $priceCurrency$$7$$)) : 0 < $formatted_paid_value$$1_paid_value$$1$$ && $formatted_paid_value$$1_paid_value$$1$$ != $value$$192$$ ? ($formatted_paid_value$$1_paid_value$$1$$ = this.$app_$.$formatCurrency$($formatted_paid_value$$1_paid_value$$1$$ / 1E8, $priceCurrency$$7$$), 
  $goog$dom$createDom$$("abbr", {title:"declarado / pago em " + $currency_description$$3$$}, $formatted_value$$1$$ + " / " + $formatted_paid_value$$1_paid_value$$1$$)) : $goog$dom$createDom$$("abbr", {title:$currency_description$$3$$}, $formatted_value$$1$$)
};
$JSCompiler_prototypeAlias$$.$onWithdrawListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListReponse_$$($e$$213_msg$$73$$) {
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$213_msg$$73$$ = $e$$213_msg$$73$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$withdraw_list_table_$, $e$$213_msg$$73$$.WithdrawListGrp, $e$$213_msg$$73$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onWithdrawProcessResponse_$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onDepositProcessResponse_$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onBalanceResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBalanceResponse_$$($e$$216_user_balances$$) {
  var $msg$$76$$ = $e$$216_user_balances$$.data, $model$$32$$ = this.$app_$.$model_$;
  delete $msg$$76$$.MsgType;
  delete $msg$$76$$.BalanceReqID;
  $e$$216_user_balances$$ = $msg$$76$$[$model$$32$$.get("UserID")];
  var $currencies$$ = [];
  $goog$object$forEach$$($e$$216_user_balances$$, function($balance$$, $currency$$9$$) {
    $balance$$ /= 1E8;
    var $formatted_balance$$ = this.$app_$.$formatCurrency$($balance$$, $currency$$9$$);
    $currencies$$.push({code:$currency$$9$$, $model_key$:$currency$$9$$ + "." + $msg$$76$$.ClientID, $balance$:$formatted_balance$$});
    var $balance_key$$ = "balance_" + $currency$$9$$ + "." + $msg$$76$$.ClientID;
    $model$$32$$.set($balance_key$$, $balance$$);
    $model$$32$$.set("formatted_" + $balance_key$$, $formatted_balance$$)
  }, this);
  $goog$dom$removeChildren$$($goog$dom$getElement$$("account_overview_balances_id"));
  $goog$soy$renderElement$$($goog$dom$getElement$$("account_overview_balances_id"), $bitex$templates$YourAccountBalances$$, {$currencies$:$currencies$$})
};
$JSCompiler_prototypeAlias$$.$onWithdrawRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawRefresh_$$($e$$217$$) {
  $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$withdraw_list_table_$, $e$$217$$.data)
};
// Input 162
function $bitex$view$VerificationView$$($app$$19$$, $opt_domHelper$$42$$) {
  $bitex$view$View$$.call(this, $app$$19$$, $opt_domHelper$$42$$);
  this.$loaded_jot_form_$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($bitex$view$VerificationView$$, $bitex$view$View$$);
$bitex$view$VerificationView$$.prototype.$enterView$ = function $$bitex$view$VerificationView$$$$$enterView$$() {
  $bitex$view$VerificationView$$.$superClass_$.$enterView$.call(this);
  if(!this.$loaded_jot_form_$) {
    var $form_src_model$$33$$ = this.$app_$.$model_$, $broker$$11_verificationIFrameForm_verification_form_url$$ = $form_src_model$$33$$.get("Broker");
    $broker$$11_verificationIFrameForm_verification_form_url$$ != $JSCompiler_alias_NULL$$ && ($broker$$11_verificationIFrameForm_verification_form_url$$ = $broker$$11_verificationIFrameForm_verification_form_url$$.VerificationForm, $broker$$11_verificationIFrameForm_verification_form_url$$ = $broker$$11_verificationIFrameForm_verification_form_url$$.replace("{{UserID}}", $form_src_model$$33$$.get("UserID")), $broker$$11_verificationIFrameForm_verification_form_url$$ = $broker$$11_verificationIFrameForm_verification_form_url$$.replace("{{Username}}", 
    $form_src_model$$33$$.get("Username")), $broker$$11_verificationIFrameForm_verification_form_url$$ = $broker$$11_verificationIFrameForm_verification_form_url$$.replace("{{BrokerID}}", $form_src_model$$33$$.get("Broker").BrokerID), $broker$$11_verificationIFrameForm_verification_form_url$$ = $broker$$11_verificationIFrameForm_verification_form_url$$.replace("{{BrokerUsername}}", $form_src_model$$33$$.get("Broker").ShortName), $broker$$11_verificationIFrameForm_verification_form_url$$ = $broker$$11_verificationIFrameForm_verification_form_url$$.replace("{{Email}}", 
    $form_src_model$$33$$.get("Email")), $form_src_model$$33$$.get("Profile").State != $JSCompiler_alias_NULL$$ && ($broker$$11_verificationIFrameForm_verification_form_url$$ = $broker$$11_verificationIFrameForm_verification_form_url$$.replace("{{State}}", $form_src_model$$33$$.get("Profile").State)), $form_src_model$$33$$ = $broker$$11_verificationIFrameForm_verification_form_url$$, $broker$$11_verificationIFrameForm_verification_form_url$$ = $goog$dom$getElement$$("JotFormIFrame"), $broker$$11_verificationIFrameForm_verification_form_url$$.src !== 
    $form_src_model$$33$$ && ($broker$$11_verificationIFrameForm_verification_form_url$$.src = $form_src_model$$33$$, this.$loaded_jot_form_$ = $JSCompiler_alias_TRUE$$))
  }
};
$bitex$view$VerificationView$$.prototype.$enterDocument$ = function $$bitex$view$VerificationView$$$$$enterDocument$$() {
  $bitex$view$VerificationView$$.$superClass_$.$enterDocument$.call(this)
};
// Input 163
function $bitex$view$SideBarView$$($app$$20$$, $opt_domHelper$$43$$) {
  $bitex$view$View$$.call(this, $app$$20$$, $opt_domHelper$$43$$)
}
$goog$inherits$$($bitex$view$SideBarView$$, $bitex$view$View$$);
$bitex$view$SideBarView$$.prototype.$onSelectedBroker_$ = function $$bitex$view$SideBarView$$$$$onSelectedBroker_$$() {
  var $element$$197_selectedBrokerID$$ = this.$app_$.$model_$.get("SelectedBrokerID");
  if($element$$197_selectedBrokerID$$ != $JSCompiler_alias_NULL$$) {
    var $element$$197_selectedBrokerID$$ = $goog$dom$getElement$$("id_account_summary_" + $element$$197_selectedBrokerID$$), $broker_elements$$ = $goog$dom$getElementsByClass$$("account-summary-broker");
    $broker_elements$$ != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($broker_elements$$, function($broker_element$$) {
      $goog$dom$classes$remove$$($broker_element$$, "account-summary-broker-selected")
    }, this);
    $element$$197_selectedBrokerID$$ != $JSCompiler_alias_NULL$$ && $goog$dom$classes$add$$($element$$197_selectedBrokerID$$, "account-summary-broker-selected")
  }
};
$bitex$view$SideBarView$$.prototype.$enterDocument$ = function $$bitex$view$SideBarView$$$$$enterDocument$$() {
  $bitex$view$SideBarView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$93$$ = this.$getHandler$(), $model$$35$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$93$$, $model$$35$$, "model_setSelectedBrokerID", this.$onSelectedBroker_$);
  $JSCompiler_StaticMethods_listen$$($handler$$93$$, $model$$35$$, "model_setBrokerCurrencies", function() {
    $goog$dom$removeChildren$$($goog$dom$getElement$$("id_account_summary_content"));
    var $accounts$$ = [];
    $accounts$$.push({brokerID:$model$$35$$.get("Broker").BrokerID, brokerName:$model$$35$$.get("Broker").ShortName, clientID:$model$$35$$.get("UserID"), currencies:[]});
    $goog$array$forEach$$($model$$35$$.get("Broker").BrokerCurrencies, function($currency$$10$$) {
      $accounts$$[0].currencies.push({currency:$currency$$10$$, balance:0, formattedBalance:this.$app_$.$formatCurrency$(0, $currency$$10$$, $JSCompiler_alias_TRUE$$), showDeposit:$JSCompiler_alias_TRUE$$, showWithdraw:$JSCompiler_alias_TRUE$$})
    }, this);
    $model$$35$$.get("IsBroker") && ($accounts$$.push({brokerID:$model$$35$$.get("Profile").BrokerID, brokerName:"My customers", clientID:$model$$35$$.get("UserID"), currencies:[]}), $goog$array$forEach$$($model$$35$$.get("Profile").BrokerCurrencies, function($currency$$11$$) {
      $accounts$$[1].currencies.push({currency:$currency$$11$$, balance:0, formattedBalance:this.$app_$.$formatCurrency$(0, $currency$$11$$, $JSCompiler_alias_TRUE$$), showDeposit:$JSCompiler_alias_FALSE$$, showWithdraw:$JSCompiler_alias_FALSE$$})
    }, this), $goog$isDefAndNotNull$$($model$$35$$.get("Profile").Accounts) && $goog$object$forEach$$($model$$35$$.get("Profile").Accounts, function($account_data$$1$$, $account_name$$1$$) {
      $accounts$$.push({brokerID:$model$$35$$.get("Profile").BrokerID, brokerName:$account_name$$1$$, clientID:$account_data$$1$$[0], currencies:[]});
      $goog$array$forEach$$($model$$35$$.get("Profile").BrokerCurrencies, function($currency$$12$$) {
        $accounts$$[$accounts$$.length - 1].currencies.push({currency:$currency$$12$$, balance:0, formattedBalance:this.$app_$.$formatCurrency$(0, $currency$$12$$, $JSCompiler_alias_TRUE$$), showDeposit:$JSCompiler_alias_FALSE$$, showWithdraw:$JSCompiler_alias_FALSE$$})
      }, this)
    }, this));
    $goog$soy$renderElement$$($goog$dom$getElement$$("id_account_summary_content"), $bitex$templates$YourAccountSummary$$, {$accounts$:$accounts$$});
    this.$onSelectedBroker_$()
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$93$$, $model$$35$$, "model_setSecurityList", function() {
    var $msg$$78$$ = $model$$35$$.get("SecurityList");
    $goog$dom$removeChildren$$($goog$dom$getElement$$("id_instrument_1"));
    $goog$array$forEach$$($msg$$78$$.Instruments, function($el$$111_instrument$$1$$) {
      $el$$111_instrument$$1$$ = $goog$dom$createDom$$("option", {value:$el$$111_instrument$$1$$.Symbol}, $el$$111_instrument$$1$$.Description);
      $goog$dom$getElement$$("id_instrument_1").appendChild($el$$111_instrument$$1$$)
    }, this)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$93$$, $model$$35$$, "model_setAllowedMarkets", function() {
    var $allowed_markets$$1_allowed_markets_array$$ = $model$$35$$.get("AllowedMarkets"), $allowed_markets$$1_allowed_markets_array$$ = $goog$object$getKeys$$($allowed_markets$$1_allowed_markets_array$$);
    0 < $allowed_markets$$1_allowed_markets_array$$.length && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_instrument_1"), $allowed_markets$$1_allowed_markets_array$$[0]), this.dispatchEvent("changed_market"))
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$93$$, $goog$dom$getElement$$("id_instrument_1"), "change", function() {
    this.dispatchEvent("changed_market")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$93$$, this.$getElement$(), "click", function($e$$223$$) {
    "withdraw" === $e$$223$$.target.getAttribute("data-action") ? (this.$currency_$ = $e$$223$$.target.getAttribute("data-currency"), this.dispatchEvent("request_withdraw")) : "deposit" === $e$$223$$.target.getAttribute("data-action") && (this.$currency_$ = $e$$223$$.target.getAttribute("data-currency"), this.dispatchEvent("request_deposit"))
  }, this)
};
$bitex$view$SideBarView$$.prototype.$getSymbol$ = function $$bitex$view$SideBarView$$$$$getSymbol$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_instrument_1"))
};
// Input 164
function $bitex$ui$market_view_table$templates$MarketViewTable$$($instList30_opt_data$$45$$) {
  var $output$$39$$;
  $output$$39$$ = "" + ('<div class="row-fluid"><div class="span12"><table id="' + $soy$$0$0escapeHtml$$($instList30_opt_data$$45$$.id) + '_table" class="table table-bordered table-condensed"><thead><tr><th> Pair</th><th> Last </th><th> Bid </th><th> Ask </th><th> Volume (BTC) </th><th> Volume </th><th> High </th><th> Low </th></tr></thead><tbody>');
  $instList30_opt_data$$45$$ = $instList30_opt_data$$45$$.$instruments$;
  for(var $instListLen30$$ = $instList30_opt_data$$45$$.length, $instIndex30$$ = 0;$instIndex30$$ < $instListLen30$$;$instIndex30$$++) {
    var $instData30$$ = $instList30_opt_data$$45$$[$instIndex30$$];
    $output$$39$$ += '<tr data-symbol="' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '" ><td>' + $soy$$0$0escapeHtml$$($instData30$$.Description) + ' </td><td><span class="bitex-model" data-model-key="formatted_last_price_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_bid_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_ask_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + 
    '"></span></td><td><span class="bitex-model" data-model-key="formatted_volume_sell_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_volume_buy_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_max_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_min_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + 
    '"></span></td></tr>'
  }
  return $output$$39$$ + "</tbody></table></div></div>"
}
;
// Input 165
function $bitex$ui$MarketViewTable$$($opt_domHelper$$44$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$44$$)
}
$goog$inherits$$($bitex$ui$MarketViewTable$$, $goog$ui$Component$$);
$bitex$ui$MarketViewTable$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("market-view-table");
$bitex$ui$MarketViewTable$$.prototype.$createDom$ = function $$bitex$ui$MarketViewTable$$$$$createDom$$() {
  this.$getDomHelper$();
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$market_view_table$templates$MarketViewTable$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $instruments$:this.$model_$.$instruments$})
};
$bitex$ui$MarketViewTable$$.prototype.$enterDocument$ = function $$bitex$ui$MarketViewTable$$$$$enterDocument$$() {
  $bitex$ui$MarketViewTable$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")), "click", this.$onTableClick_$)
};
function $JSCompiler_StaticMethods_selectFirst$$($JSCompiler_StaticMethods_selectFirst$self$$) {
  var $first_tr_element_tbody$$ = $goog$dom$getElementsByTagNameAndClass$$("TBODY", $JSCompiler_alias_VOID$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_selectFirst$self$$, "form_table")))[0], $first_tr_element_tbody$$ = $goog$dom$getFirstElementChild$$($first_tr_element_tbody$$);
  if($first_tr_element_tbody$$ != $JSCompiler_alias_NULL$$) {
    var $selected_tr_elements$$ = $goog$dom$getElementsByClass$$($JSCompiler_StaticMethods_selectFirst$self$$.$getCssClass$() + "-selected", $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_selectFirst$self$$, "form_table")));
    $goog$array$forEach$$($selected_tr_elements$$, function($selected_tr_el$$) {
      $goog$dom$classes$remove$$($selected_tr_el$$, this.$getCssClass$() + "-selected")
    }, $JSCompiler_StaticMethods_selectFirst$self$$);
    $goog$dom$classes$add$$($first_tr_element_tbody$$, $JSCompiler_StaticMethods_selectFirst$self$$.$getCssClass$() + "-selected");
    $JSCompiler_StaticMethods_selectFirst$self$$.dispatchEvent("select_symbol")
  }
}
$bitex$ui$MarketViewTable$$.prototype.$onTableClick_$ = function $$bitex$ui$MarketViewTable$$$$$onTableClick_$$($e$$225$$) {
  var $tr_el$$2$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$225$$.target, "TR");
  if($tr_el$$2$$ != $JSCompiler_alias_NULL$$ && !$goog$dom$classes$has$$($tr_el$$2$$, this.$getCssClass$() + "-selected")) {
    var $selected_tr_elements$$1$$ = $goog$dom$getElementsByClass$$(this.$getCssClass$() + "-selected", $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")));
    $goog$array$forEach$$($selected_tr_elements$$1$$, function($selected_tr_el$$1$$) {
      $goog$dom$classes$remove$$($selected_tr_el$$1$$, this.$getCssClass$() + "-selected")
    }, this);
    $goog$dom$classes$add$$($tr_el$$2$$, this.$getCssClass$() + "-selected");
    this.dispatchEvent("select_symbol");
    $e$$225$$.preventDefault();
    $e$$225$$.stopPropagation()
  }
};
// Input 166
function $bitex$ui$SimpleChart$templates$SimpleChart$$($opt_data$$46$$) {
  return'<iframe id="HighChartIFrame" allowtransparency="true" src="' + ($opt_data$$46$$.$symbol$ ? "./chart.html?s=" + $soy$$0$0escapeHtml$$($opt_data$$46$$.$symbol$) : "") + '" data-symbol="' + ($opt_data$$46$$.$symbol$ ? "./chart.html?s=" + $soy$$0$0escapeHtml$$($opt_data$$46$$.$symbol$) : "") + '" style="width: 100%; height: ' + ($opt_data$$46$$.height ? $soy$$0$0escapeHtml$$($opt_data$$46$$.height) : "400") + 'px" frameborder="0" scrolling="no"></iframe>'
}
;
// Input 167
function $bitex$ui$SimpleChart$$($opt_domHelper$$45$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$45$$)
}
$goog$inherits$$($bitex$ui$SimpleChart$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$SimpleChart$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("simple-chart");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$SimpleChart$templates$SimpleChart$$, {$symbol$:this.$model_$.$symbol$, height:this.$model_$.height})
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$198$$) {
  this.$element_$ = $element$$198$$;
  this.$setModel$({$symbol$:this.$getElement$().getAttribute("data-symbol")})
};
$JSCompiler_prototypeAlias$$.$getSymbol$ = function $$JSCompiler_prototypeAlias$$$$getSymbol$$() {
  return this.$model_$.$symbol$
};
$JSCompiler_prototypeAlias$$.$setSymbol$ = function $$JSCompiler_prototypeAlias$$$$setSymbol$$($symbol$$11$$) {
  this.$model_$.$symbol$ = $symbol$$11$$;
  this.$getElement$().src = "./chart.html?s=" + $symbol$$11$$;
  this.$getElement$().setAttribute("data-symbol", $symbol$$11$$)
};
// Input 168
function $bitex$ui$TradeHistory$$($pseudoNameFunction$$1$$, $opt_blinkDelay$$3$$, $opt_domHelper$$46$$) {
  this.$selected_trade_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {title:"Last trades", rowIDFn:this.$getRowId$, rowClassFn:this.$getRowClass$, columns:[{property:"Market", label:"Mercado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$52$$) {
    size_currency = $s$$52$$.substring(0, 3);
    price_currency = $s$$52$$.substring(3);
    return size_currency + " / " + price_currency
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-market"
  }}, {property:"Side", label:"Compra/Venda", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$53$$) {
    switch($s$$53$$) {
      case "1":
        return"Buy";
      case "2":
        return"Sell"
    }
    return""
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-side"
  }}, {property:"Price", label:"Pre\u00e7o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$193$$) {
    return($value$$193$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-price"
  }}, {property:"Size", label:"Quantidade", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$194$$) {
    return($value$$194$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-size"
  }}, {property:"Buyer", label:"Comprador", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$54$$, $rowSet$$21$$) {
    return $rowSet$$21$$.BuyerUsername != $JSCompiler_alias_NULL$$ ? $rowSet$$21$$.BuyerUsername : $pseudoNameFunction$$1$$($s$$54$$)
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-buyer"
  }}, {property:"Seller", label:"Vendedor", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$55$$, $rowSet$$22$$) {
    return $rowSet$$22$$.SellerUsername != $JSCompiler_alias_NULL$$ ? $rowSet$$22$$.SellerUsername : $pseudoNameFunction$$1$$($s$$55$$)
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-seller"
  }}, {property:"Created", label:"Data/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-created"
  }}], show_search:$JSCompiler_alias_FALSE$$}, $opt_domHelper$$46$$)
}
$goog$inherits$$($bitex$ui$TradeHistory$$, $bitex$ui$DataGrid$$);
var $bitex$ui$TradeHistory$CSS_CLASS$$ = "trade-history";
$bitex$ui$TradeHistory$$.prototype.$getRowId$ = function $$bitex$ui$TradeHistory$$$$$getRowId$$($row_set$$12$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$12$$.TradeID)
};
$bitex$ui$TradeHistory$$.prototype.$getRowClass$ = function $$bitex$ui$TradeHistory$$$$$getRowClass$$($row_set$$13$$) {
  var $class_status$$6$$;
  switch($row_set$$13$$.Status) {
    case "0":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-unconfirmed";
      break;
    case "1":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-pending";
      break;
    case "2":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-processing";
      break;
    case "4":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-complete";
      break;
    case "8":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-cancelled"
  }
  return $class_status$$6$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$TradeHistory$CSS_CLASS$$, function() {
  return new $bitex$ui$TradeHistory$$
});
// Input 169
function $bitex$view$MarketView$$($app$$21$$, $opt_domHelper$$47$$) {
  $bitex$view$View$$.call(this, $app$$21$$, $opt_domHelper$$47$$);
  this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$MarketView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$MarketView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$MarketView$$.$superClass_$.$enterView$.call(this);
  var $handler$$95$$ = this.$getHandler$(), $model$$36$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$95$$, $model$$36$$, "model_setSecurityList", this.$recreateComponents_$);
  $model$$36$$.get("SecurityList") != $JSCompiler_alias_NULL$$ && this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$MarketView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$MarketView$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$96$$ = this.$getHandler$(), $model$$37$$ = this.$app_$.$model_$, $conn$$14$$ = this.$app_$.$conn_$;
  this.$destroyComponents_$();
  this.$market_data_subscription_id_$ = parseInt(1E7 * Math.random(), 10);
  this.$market_data_subscription_symbol_$ = [];
  $goog$array$forEach$$($model$$37$$.get("SecurityList").Instruments, function($instrument_info$$) {
    this.$market_data_subscription_symbol_$.push($instrument_info$$.Symbol)
  }, this);
  this.$market_view_table_$ = new $bitex$ui$MarketViewTable$$;
  this.$market_view_table_$.$setModel$({id:"market_view", $instruments$:$model$$37$$.get("SecurityList").Instruments});
  $JSCompiler_StaticMethods_addChild$$(this, this.$market_view_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_updateDom$$(this.$app_$.$model_$);
  this.$simple_chart_$ = new $bitex$ui$SimpleChart$$;
  this.$simple_chart_$.$setModel$({$symbol$:$model$$37$$.get("SecurityList").Instruments[0].Symbol});
  $JSCompiler_StaticMethods_addChild$$(this, this.$simple_chart_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$market_view_table_$, "select_symbol", this.$onSelectedSymbol_$);
  this.$last_trades_table_$ = new $bitex$ui$TradeHistory$$($bitex$util$getPseudoName$$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$last_trades_table_$, "request_data", this.$onTradeHistoryTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, "trade_history_response." + this.$market_data_subscription_id_$, this.$onTradeHistoryReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, $conn$$14$$, "md_status." + this.$market_data_subscription_id_$, this.$onBitexTradingSessionStatus_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, $conn$$14$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onBitexOrderBookNewOrder_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, $conn$$14$$, "trade." + this.$market_data_subscription_id_$, this.$onBitexTrade_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, $conn$$14$$, "security_status." + this.$market_data_subscription_id_$, this.$onBitexSecurityStatus_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$last_trades_table_$, $JSCompiler_alias_TRUE$$);
  this.dispatchEvent("md_subscribe");
  this.dispatchEvent("sec_subscribe");
  $JSCompiler_StaticMethods_selectFirst$$(this.$market_view_table_$)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$97$$ = this.$getHandler$();
  this.$market_view_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$97$$, this.$market_view_table_$, "select_symbol", this.$onSelectedSymbol_$);
  this.$last_trades_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$97$$, this.$last_trades_table_$, "request_data", this.$onTradeHistoryTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$97$$, this.$app_$.$conn_$, "trade_history_response." + this.$market_data_subscription_id_$, this.$onTradeHistoryReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$97$$, this.$last_trades_table_$.$getElement$(), "click", this.$onTradeHistoryTableClick_$));
  if(this.$market_data_subscription_id_$ != $JSCompiler_alias_NULL$$) {
    var $conn$$15$$ = this.$app_$.$conn_$;
    $JSCompiler_StaticMethods_unlisten$$($handler$$97$$, $conn$$15$$, "md_status." + this.$market_data_subscription_id_$, this.$onBitexTradingSessionStatus_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$97$$, $conn$$15$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onBitexOrderBookNewOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$97$$, $conn$$15$$, "trade." + this.$market_data_subscription_id_$, this.$onBitexTrade_$);
    this.dispatchEvent("md_unsubscribe");
    this.dispatchEvent("sec_unsubscribe")
  }
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = this.$simple_chart_$ = this.$last_trades_table_$ = this.$market_view_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$onSelectedSymbol_$ = function $$JSCompiler_prototypeAlias$$$$onSelectedSymbol_$$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$) {
  $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$ = $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$.target;
  $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$ = $goog$dom$getElementByClass$$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$.$getCssClass$() + "-selected", $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$, "form_table")));
  $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$ = $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$.getAttribute("data-symbol") : $JSCompiler_alias_VOID$$;
  this.$simple_chart_$.$setSymbol$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_983_e$$226_selected_tr_el$$inline_984_symbol$$12$$)
};
$JSCompiler_prototypeAlias$$.$onTradeHistoryTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onTradeHistoryTableRequestData_$$($e$$227_msg$$inline_993$$) {
  var $JSCompiler_StaticMethods_requestTradeHistory$self$$inline_986$$ = this.$app_$.$conn_$, $opt_filter$$inline_990$$ = $e$$227_msg$$inline_993$$.options.Filter;
  $e$$227_msg$$inline_993$$ = {MsgType:"U32", TradeHistoryReqID:this.$market_data_subscription_id_$ || parseInt(1E7 * Math.random(), 10), Page:$e$$227_msg$$inline_993$$.options.Page || 0, PageSize:$e$$227_msg$$inline_993$$.options.Limit || 100};
  $opt_filter$$inline_990$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$inline_990$$.length && ($e$$227_msg$$inline_993$$.Filter = $opt_filter$$inline_990$$);
  $JSCompiler_StaticMethods_requestTradeHistory$self$$inline_986$$.sendMessage($e$$227_msg$$inline_993$$)
};
$JSCompiler_prototypeAlias$$.$onBitexSecurityStatus_$ = function $$JSCompiler_prototypeAlias$$$$onBitexSecurityStatus_$$($e$$228_msg$$79$$) {
  if(this.$market_view_table_$ != $JSCompiler_alias_NULL$$) {
    $e$$228_msg$$79$$ = $e$$228_msg$$79$$.data;
    var $model$$38$$ = this.$app_$.$model_$, $currency$$13$$ = $e$$228_msg$$79$$.Symbol.substr(3), $crypto_currency$$ = $e$$228_msg$$79$$.Symbol.substr(0, 3);
    $model$$38$$.set("formatted_volume_buy_" + $e$$228_msg$$79$$.Symbol, this.$app_$.$formatCurrency$($e$$228_msg$$79$$.BuyVolume / 1E8, $currency$$13$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$38$$.set("formatted_volume_sell_" + $e$$228_msg$$79$$.Symbol, this.$app_$.$formatCurrency$($e$$228_msg$$79$$.SellVolume / 1E8, $crypto_currency$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$38$$.set("formatted_min_" + $e$$228_msg$$79$$.Symbol, this.$app_$.$formatCurrency$($e$$228_msg$$79$$.LowPx / 1E8, $currency$$13$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$38$$.set("formatted_max_" + $e$$228_msg$$79$$.Symbol, this.$app_$.$formatCurrency$($e$$228_msg$$79$$.HighPx / 1E8, $currency$$13$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$38$$.set("formatted_last_price_" + $e$$228_msg$$79$$.Symbol, this.$app_$.$formatCurrency$($e$$228_msg$$79$$.LastPx / 1E8, $currency$$13$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$38$$.set("formatted_bid_" + $e$$228_msg$$79$$.Symbol, this.$app_$.$formatCurrency$($e$$228_msg$$79$$.BestBid / 1E8, $currency$$13$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$38$$.set("formatted_ask_" + $e$$228_msg$$79$$.Symbol, this.$app_$.$formatCurrency$($e$$228_msg$$79$$.BestAsk / 1E8, $currency$$13$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$)
  }
};
$JSCompiler_prototypeAlias$$.$onBitexTrade_$ = function $$JSCompiler_prototypeAlias$$$$onBitexTrade_$$($e$$229_msg$$80$$) {
  if(this.$last_trades_table_$ != $JSCompiler_alias_NULL$$) {
    $e$$229_msg$$80$$ = $e$$229_msg$$80$$.data;
    var $record$$1$$ = [];
    $record$$1$$.TradeID = $e$$229_msg$$80$$.TradeID;
    $record$$1$$.Market = $e$$229_msg$$80$$.Symbol;
    $record$$1$$.Size = $e$$229_msg$$80$$.MDEntrySize;
    $record$$1$$.Price = $e$$229_msg$$80$$.MDEntryPx;
    $record$$1$$.Side = $e$$229_msg$$80$$.Side;
    $record$$1$$.Buyer = $bitex$util$getPseudoName$$($e$$229_msg$$80$$.MDEntryBuyerID);
    $record$$1$$.Seller = $bitex$util$getPseudoName$$($e$$229_msg$$80$$.MDEntrySellerID);
    $record$$1$$.Created = $e$$229_msg$$80$$.MDEntryDate + " " + $e$$229_msg$$80$$.MDEntryTime;
    $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$last_trades_table_$, $record$$1$$)
  }
};
$JSCompiler_prototypeAlias$$.$onTradeHistoryReponse_$ = function $$JSCompiler_prototypeAlias$$$$onTradeHistoryReponse_$$($e$$230_msg$$81$$) {
  this.$last_trades_table_$ != $JSCompiler_alias_NULL$$ && ($e$$230_msg$$81$$ = $e$$230_msg$$81$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$last_trades_table_$, $e$$230_msg$$81$$.TradeHistoryGrp, $e$$230_msg$$81$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onBitexOrderBookNewOrder_$ = function $$JSCompiler_prototypeAlias$$$$onBitexOrderBookNewOrder_$$($e$$231_index$$89$$) {
  var $currency$$14_msg$$82$$ = $e$$231_index$$89$$.data;
  $e$$231_index$$89$$ = $currency$$14_msg$$82$$.MDEntryPositionNo - 1;
  var $price$$9$$ = $currency$$14_msg$$82$$.MDEntryPx / 1E8, $side$$15$$ = $currency$$14_msg$$82$$.MDEntryType, $currency$$14_msg$$82$$ = $currency$$14_msg$$82$$.Symbol.substr(3, 3);
  "0" == $side$$15$$ ? 0 === $e$$231_index$$89$$ && this.$app_$.$model_$.set("formatted_best_bid_" + $currency$$14_msg$$82$$.toLowerCase(), this.$app_$.$formatCurrency$($price$$9$$, $currency$$14_msg$$82$$)) : "1" == $side$$15$$ && 0 === $e$$231_index$$89$$ && this.$app_$.$model_$.set("formatted_best_offer_" + $currency$$14_msg$$82$$.toLowerCase(), this.$app_$.$formatCurrency$($price$$9$$, $currency$$14_msg$$82$$))
};
$JSCompiler_prototypeAlias$$.$onBitexTradingSessionStatus_$ = function $$JSCompiler_prototypeAlias$$$$onBitexTradingSessionStatus_$$($e$$232$$) {
  try {
    var $msg$$83$$ = $e$$232$$.data;
    delete $msg$$83$$.MDEntryType;
    delete $msg$$83$$.MDReqID;
    var $app$$22$$ = this.$app_$;
    $goog$object$forEach$$($msg$$83$$, function($volume$$, $currency$$15$$) {
      $volume$$ /= 1E8;
      var $volume_key$$ = "volume_" + $currency$$15$$.toLowerCase();
      $app$$22$$.$model_$.set($volume_key$$, $volume$$);
      $app$$22$$.$model_$.set("formatted_" + $volume_key$$, $app$$22$$.$formatCurrency$($volume$$, $currency$$15$$))
    })
  }catch($str$$107$$) {
  }
};
$JSCompiler_prototypeAlias$$.$onTradeHistoryTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onTradeHistoryTableClick_$$($e$$233$$) {
  var $element$$199$$ = $e$$233$$.target;
  "I" === $element$$199$$.tagName && ($element$$199$$ = $goog$dom$getParentElement$$($element$$199$$));
  var $data_action$$5$$ = $element$$199$$.getAttribute("data-action");
  $data_action$$5$$ != $JSCompiler_alias_NULL$$ && ($e$$233$$.preventDefault(), $e$$233$$.stopPropagation(), this.$action_$ = $data_action$$5$$, this.$data_$ = $goog$json$parse$$($element$$199$$.getAttribute("data-row")))
};
$JSCompiler_prototypeAlias$$.$getMDInstruments$ = $JSCompiler_get$$("$market_data_subscription_symbol_$");
$JSCompiler_prototypeAlias$$.$getMDMarketDepth$ = $JSCompiler_returnArg$$(1);
$JSCompiler_prototypeAlias$$.$getMDEntries$ = function $$JSCompiler_prototypeAlias$$$$getMDEntries$$() {
  return["2"]
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $bitex$view$MarketView$$.$superClass_$.$exitDocument$.call(this);
  this.$destroyComponents_$()
};
// Input 170
// Input 171
// Input 172
function $bootstrap$Alert$$($opt_type$$11$$, $opt_content$$, $opt_close$$, $opt_domHelper$$48$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$48$$);
  this.$type_$ = $opt_type$$11$$;
  this.$content_$ = $opt_content$$;
  this.$has_close_$ = $JSCompiler_alias_TRUE$$;
  $opt_close$$ != $JSCompiler_alias_NULL$$ && $opt_close$$ === $JSCompiler_alias_FALSE$$ && (this.$has_close_$ = $JSCompiler_alias_FALSE$$)
}
$goog$inherits$$($bootstrap$Alert$$, $goog$ui$Component$$);
$bootstrap$Alert$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("alert");
$bootstrap$Alert$$.prototype.$createDom$ = function $$bootstrap$Alert$$$$$createDom$$() {
  var $dom$$24_element$$200$$ = this.$getDomHelper$();
  return this.$element_$ = $dom$$24_element$$200$$ = this.$has_close_$ ? $dom$$24_element$$200$$.$createDom$("div", [this.$getCssClass$(), this.$getCssClass$() + "-" + this.$type_$], $dom$$24_element$$200$$.$createDom$("button", ["close", "pull-right"], "\u00d7"), this.$content_$) : $dom$$24_element$$200$$.$createDom$("div", [this.$getCssClass$(), this.$getCssClass$() + "-" + this.$type_$], this.$content_$)
};
$bootstrap$Alert$$.prototype.$logger_$ = $goog$debug$LogManager$getLogger$$("bootstrap.Alert");
$bootstrap$Alert$$.prototype.$enterDocument$ = function $$bootstrap$Alert$$$$$enterDocument$$() {
  $bootstrap$Alert$$.$superClass_$.$enterDocument$.call(this);
  var $closeBtn_dom$$25$$ = this.$getDomHelper$(), $handler$$98$$ = this.$getHandler$(), $closeBtn_dom$$25$$ = $closeBtn_dom$$25$$.$getElementByClass$("close", this.$getElement$());
  $closeBtn_dom$$25$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_listenOnce$$($handler$$98$$, $closeBtn_dom$$25$$, "click", function() {
    this.$dispose$()
  })
};
// Input 173
function $bootstrap$Accordion$closeAll$$() {
  var $accordion_body_elements_accordion_toggle_elements$$ = $goog$dom$getElementsByClass$$("accordion-toggle", document.body);
  $goog$array$forEach$$($accordion_body_elements_accordion_toggle_elements$$, function($element$$201$$) {
    $goog$dom$classes$add$$($element$$201$$, "collapsed")
  });
  $accordion_body_elements_accordion_toggle_elements$$ = $goog$dom$getElementsByClass$$("accordion-body", document.body);
  $goog$array$forEach$$($accordion_body_elements_accordion_toggle_elements$$, function($element$$202$$) {
    $goog$dom$classes$remove$$($element$$202$$, "in");
    $element$$202$$.style.height = $goog$style$getPixelStyleValue_$$(0, $JSCompiler_alias_TRUE$$)
  })
}
function $bootstrap$Accordion$install$$() {
  $goog$events$listen$$(document.body, "click", function($accordion_body_element_accordion_group_element_e$$235$$) {
    var $accordion_element$$ = $accordion_body_element_accordion_group_element_e$$235$$.target, $is_accordion_toggle$$ = $JSCompiler_alias_FALSE$$;
    $goog$dom$classes$has$$($accordion_element$$, "accordion-toggle") ? $is_accordion_toggle$$ = $JSCompiler_alias_TRUE$$ : ($accordion_element$$ = $goog$dom$getAncestorByTagNameAndClass$$($accordion_element$$, $JSCompiler_alias_NULL$$, "accordion-toggle"), $accordion_element$$ != $JSCompiler_alias_NULL$$ && ($is_accordion_toggle$$ = $JSCompiler_alias_TRUE$$));
    $is_accordion_toggle$$ && ($accordion_body_element_accordion_group_element_e$$235$$.preventDefault(), $accordion_body_element_accordion_group_element_e$$235$$.stopPropagation(), $accordion_body_element_accordion_group_element_e$$235$$ = $goog$dom$getAncestorByTagNameAndClass$$($accordion_element$$, $JSCompiler_alias_NULL$$, "accordion-group"), $accordion_body_element_accordion_group_element_e$$235$$ = $goog$dom$getElementByClass$$("accordion-body", $accordion_body_element_accordion_group_element_e$$235$$), 
    $goog$dom$classes$has$$($accordion_element$$, "collapsed") ? ($bootstrap$Accordion$closeAll$$(), $goog$dom$classes$add$$($accordion_body_element_accordion_group_element_e$$235$$, "in"), $accordion_body_element_accordion_group_element_e$$235$$.style.height = $goog$style$getPixelStyleValue_$$("auto", $JSCompiler_alias_TRUE$$), $goog$dom$classes$remove$$($accordion_element$$, "collapsed")) : ($goog$dom$classes$remove$$($accordion_body_element_accordion_group_element_e$$235$$, "in"), $accordion_body_element_accordion_group_element_e$$235$$.style.height = 
    $goog$style$getPixelStyleValue_$$(0, $JSCompiler_alias_TRUE$$), $goog$dom$classes$add$$($accordion_element$$, "collapsed")))
  })
}
;
// Input 174
function $bitex$app$BlinkTrade$$($broker_id$$6$$, $opt_default_country$$, $opt_default_state$$, $opt_test_request_timer_in_ms$$, $opt_maximum_allowed_delay_in_ms$$) {
  $goog$Disposable$$.call(this);
  $bootstrap$Dropdown$install$$();
  $bootstrap$Accordion$install$$();
  this.$dialog_$ = $JSCompiler_alias_NULL$$;
  this.$error_message_alert_timeout_$ = 5E3;
  try {
    this.$router_$ = new $bitex$app$UrlRouter$$(this, "", "start"), this.$model_$ = new $bitex$model$Model$$(document.body), this.$conn_$ = new $bitex$api$BitEx$$, this.$views_$ = new $goog$ui$Component$$, this.$pricemax_$ = this.$pricemin_$ = 0
  }catch($error$$6$$) {
    this.$showDialog$($error$$6$$)
  }
  $opt_default_country$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DefaultCountry", $opt_default_country$$);
  this.$model_$.set("DefaultBrokerID", $broker_id$$6$$);
  this.$model_$.set("SelectedBrokerID", $broker_id$$6$$);
  $opt_default_state$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DefaultState", $opt_default_state$$);
  this.$maximum_allowed_delay_in_ms_$ = $opt_maximum_allowed_delay_in_ms$$ || 1E4;
  this.$test_request_delay_$ = $opt_test_request_timer_in_ms$$ || 3E4;
  this.$currency_info_$ = {};
  this.$all_markets_$ = {};
  this.$test_request_timer_$ = new $goog$Timer$$(this.$test_request_delay_$);
  this.$test_request_timer_$.start()
}
$goog$inherits$$($bitex$app$BlinkTrade$$, $goog$events$EventTarget$$);
$goog$addSingletonGetter$$($bitex$app$BlinkTrade$$);
$JSCompiler_prototypeAlias$$ = $bitex$app$BlinkTrade$$.prototype;
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$handler_$ || (this.$handler_$ = new $goog$events$EventHandler$$(this))
};
function $bitex$app$BlinkTrade$validateBitcoinAddress_$$($el$$112_elValue$$8$$, $MSG_BITEX_ERROR_VALIDATE_REQUIRED_condition$$19$$, $minLength$$2$$, $MSG_BITEX_ERROR_VALIDATE_BTC_ADDRESS_caption$$26$$) {
  if(!$MSG_BITEX_ERROR_VALIDATE_REQUIRED_condition$$19$$ || eval($MSG_BITEX_ERROR_VALIDATE_REQUIRED_condition$$19$$)) {
    $MSG_BITEX_ERROR_VALIDATE_REQUIRED_condition$$19$$ = $MSG_BITEX_ERROR_VALIDATE_BTC_ADDRESS_caption$$26$$ + " is required", $MSG_BITEX_ERROR_VALIDATE_BTC_ADDRESS_caption$$26$$ += " is not a valid address", $el$$112_elValue$$8$$ = $goog$dom$forms$getValue$$($el$$112_elValue$$8$$), ($el$$112_elValue$$8$$ == $JSCompiler_alias_NULL$$ || $goog$string$isEmpty$$($el$$112_elValue$$8$$)) && $JSCompiler_alias_THROW$$($MSG_BITEX_ERROR_VALIDATE_REQUIRED_condition$$19$$), $bitex$util$isValidAddress$$($el$$112_elValue$$8$$) || 
    $JSCompiler_alias_THROW$$($MSG_BITEX_ERROR_VALIDATE_BTC_ADDRESS_caption$$26$$)
  }
}
$JSCompiler_prototypeAlias$$.$run$ = function $$JSCompiler_prototypeAlias$$$$run$$($host_api_loginView$$) {
  this.$rest_url_$ = "https://" + $host_api_loginView$$;
  this.$wss_url_$ = "wss://" + $host_api_loginView$$ + "/trade/";
  $uniform$Validators$$.$getInstance$().$metaMap_$.set("validateAddress", $bitex$app$BlinkTrade$validateBitcoinAddress_$$);
  var $handler$$99_startView$$ = new $bitex$view$NullView$$(this), $faqView$$ = new $bitex$view$NullView$$(this), $initial_view_setNewPasswordView$$ = new $bitex$view$SetNewPasswordView$$(this);
  $host_api_loginView$$ = new $bitex$view$LoginView$$(this);
  var $signUpView$$ = new $bitex$view$SignupView$$(this), $forgotPasswordView$$ = new $bitex$view$ForgotPasswordView$$(this), $depositView$$ = new $bitex$view$DepositView$$(this, $JSCompiler_alias_FALSE$$), $depositRequestsView$$ = new $bitex$view$DepositView$$(this, $JSCompiler_alias_TRUE$$), $verificationView$$ = new $bitex$view$VerificationView$$(this), $offerBookView$$ = new $bitex$view$OfferBookView$$(this), $withdrawView$$ = new $bitex$view$WithdrawView$$(this, $JSCompiler_alias_FALSE$$), $withdrawRequestsView$$ = 
  new $bitex$view$WithdrawView$$(this, $JSCompiler_alias_TRUE$$), $customersView$$ = new $bitex$view$CustomersView$$(this), $accountOverviewView$$ = new $bitex$view$AccountOverview$$(this), $brokerView$$ = new $bitex$view$BrokerView$$(this), $marketView$$ = new $bitex$view$MarketView$$(this), $rankingView$$ = new $bitex$view$RankingView$$(this), $tradingView$$ = new $bitex$view$TradingView$$(this), $toolBarView$$ = new $bitex$view$ToolBarView$$(this), $sideBarView$$ = new $bitex$view$SideBarView$$(this), 
  $ledgerView$$ = new $bitex$view$LedgerView$$(this), $profileView$$ = new $bitex$view$ProfileView$$(this), $brokerApplicationView$$ = new $bitex$view$NullView$$(this);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $toolBarView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $sideBarView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $handler$$99_startView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $faqView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $initial_view_setNewPasswordView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $host_api_loginView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $signUpView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $forgotPasswordView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $tradingView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $offerBookView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $depositView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $depositRequestsView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $withdrawView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $withdrawRequestsView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $customersView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $accountOverviewView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $verificationView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $brokerView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $marketView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $rankingView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $ledgerView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $profileView$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $brokerApplicationView$$);
  $handler$$99_startView$$.$decorate$($goog$dom$getElement$$("start"));
  $faqView$$.$decorate$($goog$dom$getElement$$("faq"));
  $sideBarView$$.$decorate$($goog$dom$getElement$$("id_sidebar"));
  $toolBarView$$.$decorate$($goog$dom$getElement$$("id_toolbar"));
  $host_api_loginView$$.$decorate$($goog$dom$getElement$$("signin"));
  $signUpView$$.$decorate$($goog$dom$getElement$$("signup"));
  this.$views_$.$decorate$(document.body);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(account_overview)/(\\w+)/$", $accountOverviewView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(start)", $handler$$99_startView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(faq)", $faqView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(admin)", $handler$$99_startView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(set_new_password)", $initial_view_setNewPasswordView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(signin)", $host_api_loginView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(signup)", $signUpView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(forgot_password)", $forgotPasswordView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(trading)", $tradingView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(offerbook)", $offerBookView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(deposit_requests)", $depositRequestsView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(deposit)", $depositView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(withdraw_requests)", $withdrawRequestsView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(withdraw)", $withdrawView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(customers)", $customersView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(verification)", $verificationView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(my_broker)", $brokerView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(market)", $marketView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(ranking)", $rankingView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(ledger)", $ledgerView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(profile)", $profileView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(broker_application)", $brokerApplicationView$$);
  $handler$$99_startView$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$router_$, "set_view", this.$onBeforeSetView_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "opened", this.$onConnectionOpen_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "closed", this.$onConnectionClose_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "error", this.$onConnectionError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "error_message", this.$onConnectionErrorMessage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "broker_list", this.$onBrokerListResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "security_list", this.$onSecurityList_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "login_ok", this.$onUserLoginOk_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "login_error", this.$onUserLoginError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$test_request_timer_$, $goog$Timer$TICK$$, this.$onTestRequestTimer_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "heartbeat", this.$onHearbeat_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "change_password", this.$onUserChangePassword_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "change_password_error", this.$onChangePasswordResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "two_factor_secret", this.$onBitexTwoFactorSecretResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "balance_response", this.$onBitexBalanceResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "position_response", this.$onBitexPositionResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "pwd_changed_ok", this.$onBitexPasswordChangedOk_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "pwd_changed_error", this.$onBitexPasswordChangedError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "deposit_methods_response", this.$onBitexDepositMethodsResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "withdraw_refresh", this.$onBitexWithdrawIncrementalUpdate_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, $bitex$api$BitEx$EventType$EXECUTION_REPORT$$, this.$onBitexExecutionReport_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "raw_message", $goog$bind$$(this.$onBitexRawMessageLogger_$, this, "rx"));
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "sent_raw_message", $goog$bind$$(this.$onBitexRawMessageLogger_$, this, "tx"));
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "verify_customer_update", this.$onBitexVerifyCustomerUpdate_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "withdraw_response", this.$onBitexWithdrawResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "withdraw_confirmation_response", this.$onBitexWithdrawConfirmationResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "suggest_trusted_address_pub", this.$onSuggestTrustedAddress_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, $bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$, this.$onUpdateProfileResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, document.body, "click", this.$onBodyClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, document.body, "change", this.$onBodyChange_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $signUpView$$, "signup_click", this.$onUserSignupButton_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $host_api_loginView$$, "login_click", this.$onUserLoginButtonClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $profileView$$, "two_factor_enable", this.$onUserEnableTwoFactor_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $profileView$$, "two_factor_disable", this.$onUserDisableTwoFactor_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $forgotPasswordView$$, "recover_pwd", this.$onUserForgotPassword_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $initial_view_setNewPasswordView$$, "set_new_pwd", this.$onUserSetNewPassword_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $sideBarView$$, "changed_market", this.$onUserChangeMarket_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "change_broker", this.$onUserChangeBroker_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "advanced_order_entry_submitted", this.$onUserOrderEntry_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "cancel_order", this.$onUserCancelOrder_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "simple_order_entry_submitted", this.$onUserOrderEntry_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "md_subscribe", this.$onUserMarketDataSubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "md_unsubscribe", this.$onUserMarketDataUnsubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "sec_subscribe", this.$onUserSecurityStatusSubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "sec_unsubscribe", this.$onUserSecurityStatusUnsubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "request_withdraw", this.$onUserWithdrawRequest_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "confirm_withdraw", this.$onUserConfirmWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "process_withdraw", this.$onBrokerProcessWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "request_deposit", this.$onUserDepositRequest_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "process_deposit", this.$onProcessDeposit_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "connect_bitex", this.$onUserConnectBitEx_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "show_qr", this.$onUserShowQr_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "show_receipt", this.$onShowReceipt_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "upload_receipt", this.$onUserUploadReceipt_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "set_verified", this.$onBrokerSetUserAsVerified_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "update_profile", this.$onUpdateProfile_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "file_view", this.$onUserFileView_$);
  $initial_view_setNewPasswordView$$ = "start";
  $goog$string$isEmpty$$(location.hash) || ($initial_view_setNewPasswordView$$ = location.hash.substr(1));
  this.$router_$.$setView$($initial_view_setNewPasswordView$$);
  this.$router_$.init();
  this.$loginView_$ = $host_api_loginView$$;
  this.$profileView_$ = $profileView$$;
  this.$model_$.set("JSVersion", "0.3");
  this.$connectBitEx$()
};
$JSCompiler_prototypeAlias$$.$onBitexRawMessageLogger_$ = function $$JSCompiler_prototypeAlias$$$$onBitexRawMessageLogger_$$($action$$3$$, $e$$236$$) {
  var $raw_msg$$ = $e$$236$$.data;
  try {
    console.log($action$$3$$ + ":" + $raw_msg$$)
  }catch($e$$237$$) {
  }
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawConfirmationResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawConfirmationResponse_$$($e$$238$$) {
  $e$$238$$.data.ConfirmationToken == $JSCompiler_alias_NULL$$ && (this.$showNotification$("error", "Invalid confirmation token!"), this.$onBitexWithdrawResponse_$())
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawResponse_$$() {
  if(this.$model_$.get("Profile").NeedWithdrawEmail) {
    var $withdrawConfirmationDialog$$ = this.$showDialog$($bitex$templates$WithdrawConfirmationDialogContent$$(), "Confirmar", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $form_element$$ = $goog$dom$getFirstElementChild$$($withdrawConfirmationDialog$$.$getContentElement$()), $withdraw_confirmation_uniform$$ = new $uniform$Uniform$$;
    $withdraw_confirmation_uniform$$.$decorate$($form_element$$);
    $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $withdrawConfirmationDialog$$, $goog$ui$Dialog$EventType$SELECT$$, function($confirmation_code_e$$240$$) {
      if("ok" == $confirmation_code_e$$240$$.key) {
        var $error_list$$4$$ = $withdraw_confirmation_uniform$$.$validate$();
        0 < $error_list$$4$$.length ? ($goog$array$forEach$$($error_list$$4$$, function($error_msg$$3$$) {
          this.$showNotification$("error", $error_msg$$3$$)
        }, this), $confirmation_code_e$$240$$.stopPropagation(), $confirmation_code_e$$240$$.preventDefault()) : ($confirmation_code_e$$240$$ = $JSCompiler_StaticMethods_getAsJSON$$($withdraw_confirmation_uniform$$).confirmation_code, this.$conn_$.$confirmWithdraw$($confirmation_code_e$$240$$))
      }
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$connectBitEx$ = function $$JSCompiler_prototypeAlias$$$$connectBitEx$$() {
  try {
    this.$conn_$.open(this.$wss_url_$)
  }catch($e$$241$$) {
    var $JSCompiler_object_inline_error_code_1114_output$$inline_1013$$ = "WebSocket: " + $e$$241$$, $JSCompiler_object_inline_error_code_1114_output$$inline_1013$$ = "" + ('<p class="lead">' + $soy$$0$0escapeHtml$$("Erro ao se conectar ao servidor. Voc\u00ea precisa de um Browser com suporte a WebSockets.") + '</p><dl class="dl-horizontal"><dt>C\u00f3d. do Erro</dt><dd>' + $soy$$0$0escapeHtml$$($JSCompiler_object_inline_error_code_1114_output$$inline_1013$$) + "</dd></dl>");
    this.$showDialog$($JSCompiler_object_inline_error_code_1114_output$$inline_1013$$, $JSCompiler_alias_VOID$$, $bootstrap$Dialog$ButtonSet$createYesNoCancel$$())
  }
};
$JSCompiler_prototypeAlias$$.$getBitexConnection$ = $JSCompiler_get$$("$conn_$");
$JSCompiler_prototypeAlias$$.$setView$ = function $$JSCompiler_prototypeAlias$$$$setView$$($view_id$$4$$) {
  this.$router_$.$setView$($view_id$$4$$)
};
$JSCompiler_prototypeAlias$$.$onUserMarketDataSubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserMarketDataSubscribe_$$($e$$242$$) {
  this.$conn_$.$subscribeMarketData$($e$$242$$.target.$getMDMarketDepth$(), $e$$242$$.target.$getMDInstruments$(), $e$$242$$.target.$getMDEntries$(), $e$$242$$.target.$market_data_subscription_id_$)
};
$JSCompiler_prototypeAlias$$.$onUserMarketDataUnsubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserMarketDataUnsubscribe_$$($e$$243$$) {
  this.$conn_$.$unSubscribeMarketData$($e$$243$$.target.$market_data_subscription_id_$)
};
$JSCompiler_prototypeAlias$$.$onUserSecurityStatusSubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserSecurityStatusSubscribe_$$($e$$244$$) {
  this.$conn_$.sendMessage({MsgType:"e", SecurityStatusReqID:$e$$244$$.target.$market_data_subscription_id_$ || parseInt(1E7 * Math.random(), 10), SubscriptionRequestType:"1", Instruments:$e$$244$$.target.$market_data_subscription_symbol_$})
};
$JSCompiler_prototypeAlias$$.$onUserSecurityStatusUnsubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserSecurityStatusUnsubscribe_$$($e$$245$$) {
  this.$conn_$.sendMessage({MsgType:"e", SecurityStatusReqID:$e$$245$$.target.$market_data_subscription_id_$, SubscriptionRequestType:"2"})
};
$JSCompiler_prototypeAlias$$.$getPriceCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getPriceCurrencyFromSymbol$$($symbol$$14$$) {
  return $symbol$$14$$.substr(3)
};
$JSCompiler_prototypeAlias$$.$getQtyCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getQtyCurrencyFromSymbol$$($symbol$$15$$) {
  return $symbol$$15$$.substr(0, 3)
};
$JSCompiler_prototypeAlias$$.$onUserChangeBroker_$ = function $$JSCompiler_prototypeAlias$$$$onUserChangeBroker_$$($brokerID$$4_e$$246$$) {
  $brokerID$$4_e$$246$$ = $brokerID$$4_e$$246$$.target.$getBrokerID$();
  this.$model_$.set("SelectedBrokerID", $brokerID$$4_e$$246$$)
};
$JSCompiler_prototypeAlias$$.$onUserChangePassword_$ = function $$JSCompiler_prototypeAlias$$$$onUserChangePassword_$$($e$$247_new_password$$2$$) {
  var $password$$6$$ = $e$$247_new_password$$2$$.target.$getCurrentPassword$();
  $e$$247_new_password$$2$$ = $e$$247_new_password$$2$$.target.$getNewPassword$();
  this.$conn_$.$changePassword$(this.$model_$.get("SelectedBrokerID"), this.$model_$.get("Username"), $password$$6$$, $e$$247_new_password$$2$$)
};
$JSCompiler_prototypeAlias$$.$onChangePasswordResponse_$ = function $$JSCompiler_prototypeAlias$$$$onChangePasswordResponse_$$($e$$248_msg$$85$$) {
  $e$$248_msg$$85$$ = $e$$248_msg$$85$$.data;
  if($e$$248_msg$$85$$.NeedSecondFactor) {
    var $dlg_$$ = this.$showDialog$($bitex$templates$GoogleAuthenticationCodeDialogContent$$(), "2 steps authentication", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $gauth_uniform$$ = new $uniform$Uniform$$;
    $gauth_uniform$$.$decorate$($goog$dom$getFirstElementChild$$($dlg_$$.$getContentElement$()));
    $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $dlg_$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$249_second_factor$$) {
      if("ok" == $e$$249_second_factor$$.key) {
        var $error_list$$5_password$$7$$ = $gauth_uniform$$.$validate$();
        if(0 < $error_list$$5_password$$7$$.length) {
          $goog$array$forEach$$($error_list$$5_password$$7$$, function($error_msg$$4$$) {
            this.$showNotification$("error", $error_msg$$4$$)
          }, this), $e$$249_second_factor$$.stopPropagation(), $e$$249_second_factor$$.preventDefault()
        }else {
          $e$$249_second_factor$$ = $JSCompiler_StaticMethods_getAsJSON$$($gauth_uniform$$).token;
          var $error_list$$5_password$$7$$ = this.$profileView_$.$getCurrentPassword$(), $new_password$$3$$ = this.$profileView_$.$getNewPassword$();
          this.$conn_$.$changePassword$(this.$model_$.get("SelectedBrokerID"), this.$model_$.get("Username"), $error_list$$5_password$$7$$, $new_password$$3$$, $e$$249_second_factor$$);
          $dlg_$$.$dispose$()
        }
      }
    })
  }else {
    "MSG_SUCCESS_PASSWORD_CHANGE" == $e$$248_msg$$85$$.UserStatusText ? this.$showDialog$("Password changed!", "Sucesso") : this.$showDialog$($e$$248_msg$$85$$.UserStatusText)
  }
};
$JSCompiler_prototypeAlias$$.$onUserChangeMarket_$ = function $$JSCompiler_prototypeAlias$$$$onUserChangeMarket_$$($e$$250_symbol$$16$$) {
  $e$$250_symbol$$16$$ = $e$$250_symbol$$16$$.target.$getSymbol$();
  this.$model_$.set("SelectedSymbol", {$symbol$:$e$$250_symbol$$16$$, $qty_currency$:this.$currency_info_$[this.$getQtyCurrencyFromSymbol$($e$$250_symbol$$16$$)], $price_currency$:this.$currency_info_$[this.$getPriceCurrencyFromSymbol$($e$$250_symbol$$16$$)]})
};
$JSCompiler_prototypeAlias$$.$onBitexDepositMethodsResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexDepositMethodsResponse_$$($e$$251$$) {
  var $deposit_methods$$ = [];
  $goog$array$forEach$$($e$$251$$.data.DepositMethodGrp, function($deposit_method$$) {
    $deposit_methods$$.push({id:$deposit_method$$.DepositMethodID, description:$deposit_method$$.Description, $disclaimer$:$deposit_method$$.Disclaimer, type:$deposit_method$$.Type, $currency$:$deposit_method$$.Currency, $percent_fee$:$deposit_method$$.PercentFee, $fixed_fee$:$deposit_method$$.FixedFee, $deposit_limits$:$deposit_method$$.DepositLimits})
  });
  this.$model_$.set("DepositMethods", $deposit_methods$$)
};
$JSCompiler_prototypeAlias$$.$onBitexPasswordChangedOk_$ = function $$JSCompiler_prototypeAlias$$$$onBitexPasswordChangedOk_$$($e$$252_msg$$87$$) {
  $e$$252_msg$$87$$ = $e$$252_msg$$87$$.data;
  "MSG_SUCCESS_PASSWORD_CHANGE" == $e$$252_msg$$87$$.UserStatusText ? this.$showDialog$("Password changed!", "Sucesso") : this.$showDialog$($e$$252_msg$$87$$.UserStatusText, "Sucesso");
  this.$router_$.$setView$("signin")
};
$JSCompiler_prototypeAlias$$.$onBitexPasswordChangedError_$ = function $$JSCompiler_prototypeAlias$$$$onBitexPasswordChangedError_$$($e$$253$$) {
  "MSG_CHANGE_PASSWORD_INVALID_SECURITY_CODE" == $e$$253$$.data.UserStatusText ? this.$showDialog$("Invalid security code.", "Erro") : this.$showDialog$("Houve um erro durante a altera\u00e7\u00e3o da sua senha", "Erro")
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawIncrementalUpdate_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawIncrementalUpdate_$$($e$$254_msg$$89$$) {
  $e$$254_msg$$89$$ = $e$$254_msg$$89$$.data;
  var $MSG_WITHDRAW_NOTIFICATION_USER_UNCONFIRMED_TITLE$$ = "Criado solicita\u00e7\u00e3o de saque [" + ($e$$254_msg$$89$$.WithdrawID + "]"), $MSG_WITHDRAW_NOTIFICATION_USER_CONFIRMED_TITLE$$ = "Pedido de saque [" + ($e$$254_msg$$89$$.WithdrawID + "] confirmado"), $MSG_WITHDRAW_NOTIFICATION_USER_PROGRESS_TITLE$$ = "Pedido de saque [" + ($e$$254_msg$$89$$.WithdrawID + "] em andamento"), $MSG_WITHDRAW_NOTIFICATION_USER_COMPLETE_TITLE$$ = "Pedido de saque [" + ($e$$254_msg$$89$$.WithdrawID + "] completo"), 
  $MSG_WITHDRAW_NOTIFICATION_USER_CANCEL_TITLE$$ = "Pedido de saque [" + ($e$$254_msg$$89$$.WithdrawID + "] cancelado"), $formatted_value$$2$$ = this.$formatCurrency$($e$$254_msg$$89$$.Amount / 1E8, $e$$254_msg$$89$$.Currency), $notification_type_title$$;
  switch($e$$254_msg$$89$$.Status) {
    case "0":
      $notification_type_title$$ = ["warning", $MSG_WITHDRAW_NOTIFICATION_USER_UNCONFIRMED_TITLE$$];
      break;
    case "1":
      $notification_type_title$$ = ["info", $MSG_WITHDRAW_NOTIFICATION_USER_CONFIRMED_TITLE$$];
      break;
    case "2":
      $notification_type_title$$ = ["info", $MSG_WITHDRAW_NOTIFICATION_USER_PROGRESS_TITLE$$];
      break;
    case "4":
      $notification_type_title$$ = ["success", $MSG_WITHDRAW_NOTIFICATION_USER_COMPLETE_TITLE$$];
      break;
    case "8":
      $notification_type_title$$ = ["danger", $MSG_WITHDRAW_NOTIFICATION_USER_CANCEL_TITLE$$]
  }
  $notification_type_title$$ != $JSCompiler_alias_NULL$$ && this.$showNotification$($notification_type_title$$[0], $notification_type_title$$[1], $formatted_value$$2$$)
};
$JSCompiler_prototypeAlias$$.$onBitexVerifyCustomerUpdate_$ = function $$JSCompiler_prototypeAlias$$$$onBitexVerifyCustomerUpdate_$$($e$$255_profile$$2$$) {
  var $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$ = $e$$255_profile$$2$$.data;
  $e$$255_profile$$2$$ = this.$model_$.get("Profile");
  var $old_verified$$ = $e$$255_profile$$2$$.Verified;
  $e$$255_profile$$2$$.Verified = $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$.Verified;
  $e$$255_profile$$2$$.VerificationData = $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$.VerificationData;
  this.$model_$.set("Profile", $e$$255_profile$$2$$);
  this.$model_$.set("IsVerified", 1 < $e$$255_profile$$2$$.Verified);
  $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$ = "You account has been verified. level - " + ($e$$255_profile$$2$$.Verified - 2);
  0 == $old_verified$$ && 1 == $e$$255_profile$$2$$.Verified ? (this.$router_$.$setView$("offerbook"), this.$showNotification$("success", "Verification:", "Sent to the broker.")) : 2 == $e$$255_profile$$2$$.Verified ? this.$showNotification$("success", "Verification:", "In progress.") : 3 <= $e$$255_profile$$2$$.Verified && this.$showNotification$("success", "Verification:", $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$)
};
$JSCompiler_prototypeAlias$$.$onBitexExecutionReport_$ = function $$JSCompiler_prototypeAlias$$$$onBitexExecutionReport_$$($e$$256_msg$$91$$) {
  $e$$256_msg$$91$$ = $e$$256_msg$$91$$.data;
  var $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$ = "Ordem " + $e$$256_msg$$91$$.OrderID;
  switch($e$$256_msg$$91$$.ExecType) {
    case "1":
      this.$showNotification$("success", $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$, "Parcialmente executada");
      break;
    case "2":
      this.$showNotification$("success", $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$, "Executada");
      break;
    case "4":
      this.$showNotification$("success", $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$, "Cancelada")
  }
};
$JSCompiler_prototypeAlias$$.$onBitexTwoFactorSecretResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexTwoFactorSecretResponse_$$($e$$257_msg$$92$$) {
  $e$$257_msg$$92$$ = $e$$257_msg$$92$$.data;
  this.$model_$.set("TwoFactorSecret", $e$$257_msg$$92$$.TwoFactorSecret);
  this.$model_$.set("TwoFactorEnabled", $e$$257_msg$$92$$.TwoFactorEnabled)
};
$JSCompiler_prototypeAlias$$.$onBitexPositionResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexPositionResponse_$$($e$$258_msg$$93$$) {
  $e$$258_msg$$93$$ = $e$$258_msg$$93$$.data;
  delete $e$$258_msg$$93$$.MsgType;
  delete $e$$258_msg$$93$$.PositionReqID;
  var $clientID$$2$$ = $e$$258_msg$$93$$.ClientID;
  $goog$object$forEach$$($e$$258_msg$$93$$, function($positions$$, $broker$$13$$) {
    $goog$object$forEach$$($positions$$, function($position$$3$$, $currency$$17$$) {
      $position$$3$$ /= 1E8;
      var $position_key$$ = "position_" + $broker$$13$$ + ":" + $clientID$$2$$ + "_" + $currency$$17$$;
      this.$model_$.set($position_key$$, $position$$3$$);
      $position$$3$$ ? this.$model_$.set("formatted_" + $position_key$$, this.$formatCurrency$($position$$3$$, $currency$$17$$, $JSCompiler_alias_TRUE$$)) : this.$model_$.set("formatted_" + $position_key$$, "")
    }, this)
  }, this)
};
$JSCompiler_prototypeAlias$$.$onBitexBalanceResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexBalanceResponse_$$($e$$259_msg$$94$$) {
  $e$$259_msg$$94$$ = $e$$259_msg$$94$$.data;
  delete $e$$259_msg$$94$$.MsgType;
  delete $e$$259_msg$$94$$.BalanceReqID;
  var $clientID$$3$$ = $e$$259_msg$$94$$.ClientID, $value_fmt$$5$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($value_fmt$$5$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($value_fmt$$5$$);
  $goog$object$forEach$$($e$$259_msg$$94$$, function($balances$$, $broker$$14$$) {
    $goog$object$forEach$$($balances$$, function($balance$$1$$, $currency$$18$$) {
      $balance$$1$$ /= 1E8;
      var $balance_key$$1$$ = "balance_" + $broker$$14$$ + ":" + $clientID$$3$$ + "_" + $currency$$18$$;
      this.$model_$.set($balance_key$$1$$, $balance$$1$$);
      this.$model_$.set("formatted_" + $balance_key$$1$$, this.$formatCurrency$($balance$$1$$, $currency$$18$$, $JSCompiler_alias_TRUE$$));
      this.$model_$.set("formatted_" + $balance_key$$1$$ + "_value", $value_fmt$$5$$.$format$($balance$$1$$))
    }, this)
  }, this)
};
$JSCompiler_prototypeAlias$$.$onUserWithdrawRequest_$ = function $$JSCompiler_prototypeAlias$$$$onUserWithdrawRequest_$$($e$$260_withdraw_methods$$2$$) {
  var $currency$$19$$ = $e$$260_withdraw_methods$$2$$.target.$currency_$;
  this.$setView$("withdraw");
  $e$$260_withdraw_methods$$2$$ = $goog$object$unsafeClone$$(this.$model_$.get("Broker").WithdrawStructure[$currency$$19$$]);
  var $user_verification_level$$ = this.$model_$.get("Profile").Verified, $balance_key$$2_dialogContent_dlg$$2_method_element_id$$ = "balance_" + this.$model_$.get("Broker").BrokerID + ":" + this.$model_$.get("UserID") + "_" + $currency$$19$$, $user_balance$$ = parseInt(1E8 * this.$model_$.get($balance_key$$2_dialogContent_dlg$$2_method_element_id$$, 0), 10), $user_verified_withdraw_methods$$ = [];
  $goog$array$forEach$$($e$$260_withdraw_methods$$2$$, function($withdrawal_method$$) {
    var $withdrawal_limit$$, $withdrawal_limit_index$$;
    for($withdrawal_limit_index$$ = $user_verification_level$$;0 <= $withdrawal_limit_index$$ && !($withdrawal_limit$$ = $withdrawal_method$$.limits[$withdrawal_limit_index$$], $withdrawal_limit$$ != $JSCompiler_alias_NULL$$);$withdrawal_limit_index$$--) {
    }
    var $has_limits_enabled$$ = $JSCompiler_alias_FALSE$$;
    $withdrawal_limit$$ != $JSCompiler_alias_NULL$$ && $withdrawal_limit$$.enabled != $JSCompiler_alias_NULL$$ && ($has_limits_enabled$$ = $withdrawal_limit$$.enabled);
    if($withdrawal_limit$$.max == $JSCompiler_alias_NULL$$ || $withdrawal_limit$$.max > $user_balance$$) {
      var $formatted_balance_key$$ = "formatted_balance_" + this.$model_$.get("Broker").BrokerID + ":" + this.$model_$.get("UserID") + "_" + $currency$$19$$, $formatted_balance_value_key$$ = $formatted_balance_key$$ + "_value";
      $withdrawal_limit$$.max = $user_balance$$;
      $withdrawal_limit$$.formatted_max = this.$model_$.get($formatted_balance_key$$);
      $withdrawal_limit$$.formatted_max_value = this.$model_$.get($formatted_balance_value_key$$)
    }
    $withdrawal_method$$.limits[$withdrawal_limit_index$$] = $withdrawal_limit$$;
    $has_limits_enabled$$ && $user_verified_withdraw_methods$$.push($withdrawal_method$$)
  }, this);
  var $balance_key$$2_dialogContent_dlg$$2_method_element_id$$ = $goog$string$getRandomString$$(), $withdraw_amount_element_id$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$ = $goog$string$getRandomString$$(), $total_fees_element_id$$ = $goog$string$getRandomString$$(), $net_value_element_id$$ = $goog$string$getRandomString$$(), $fmt$$10_withdrawal_form_el$$ = new $goog$i18n$NumberFormat$$(1), $balance_key$$2_dialogContent_dlg$$2_method_element_id$$ = 
  $bitex$templates$DepositWithdrawDialogContent$$({$fmt$:$fmt$$10_withdrawal_form_el$$, $side$:"client", $currency$:$currency$$19$$, $verificationLevel$:this.$model_$.get("Profile").Verified, $currencySign$:this.$getCurrencySign$($currency$$19$$), $methods$:$user_verified_withdraw_methods$$, $methodID$:$balance_key$$2_dialogContent_dlg$$2_method_element_id$$, $showFeeDataEntry$:$JSCompiler_alias_FALSE$$, $amountID$:$withdraw_amount_element_id$$, $fixedFeeID$:$fixed_fee_element_id$$, $percentFeeID$:$percent_fee_element_id$$, 
  $totalFeesID$:$total_fees_element_id$$, $netValueID$:$net_value_element_id$$, $hideNetAmount$:$JSCompiler_alias_FALSE$$}), $balance_key$$2_dialogContent_dlg$$2_method_element_id$$ = this.$showDialog$($balance_key$$2_dialogContent_dlg$$2_method_element_id$$, "Saque em " + this.$getCurrencyDescription$($currency$$19$$), $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $handler$$102$$ = this.$getHandler$(), $fmt$$10_withdrawal_form_el$$ = $goog$dom$getFirstElementChild$$($balance_key$$2_dialogContent_dlg$$2_method_element_id$$.$getContentElement$()), 
  $withdrawal_uniform$$ = new $uniform$Uniform$$;
  $withdrawal_uniform$$.$decorate$($fmt$$10_withdrawal_form_el$$);
  $goog$array$forEach$$($e$$260_withdraw_methods$$2$$, function($withdraw_method$$1$$) {
    var $method_id$$ = $withdraw_method$$1$$.method;
    $JSCompiler_StaticMethods_listen$$($handler$$102$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($method_id$$ + "_" + $withdraw_amount_element_id$$)), "input", function() {
      this.$doCalculateFees_$($method_id$$ + "_" + $withdraw_amount_element_id$$, $method_id$$ + "_" + $fixed_fee_element_id$$, $method_id$$ + "_" + $percent_fee_element_id$$, $currency$$19$$, $method_id$$ + "_" + $total_fees_element_id$$, $method_id$$ + "_" + $net_value_element_id$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$)
    }, this)
  }, this);
  var $value_fmt$$6$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($value_fmt$$6$$, 8);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($value_fmt$$6$$);
  $JSCompiler_StaticMethods_listen$$($handler$$102$$, $balance_key$$2_dialogContent_dlg$$2_method_element_id$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$262$$) {
    if("ok" == $e$$262$$.key) {
      var $error_list$$6_withdraw_data$$ = $withdrawal_uniform$$.$validate$();
      if(0 < $error_list$$6_withdraw_data$$.length) {
        $goog$array$forEach$$($error_list$$6_withdraw_data$$, function($error_msg$$5$$) {
          this.$showNotification$("error", $error_msg$$5$$)
        }, this), $e$$262$$.stopPropagation(), $e$$262$$.preventDefault()
      }else {
        var $error_list$$6_withdraw_data$$ = $JSCompiler_StaticMethods_getAsJSON$$($withdrawal_uniform$$), $net_amount_value_pos$$25$$ = [0], $amount$$5_method$$8$$ = $value_fmt$$6$$.parse($error_list$$6_withdraw_data$$.Amount, $net_amount_value_pos$$25$$);
        if($net_amount_value_pos$$25$$[0] != $error_list$$6_withdraw_data$$.Amount.length || isNaN($amount$$5_method$$8$$) || 0 >= $amount$$5_method$$8$$) {
          this.$showNotification$("error", "Invalid withdrawal amount"), $e$$262$$.stopPropagation(), $e$$262$$.preventDefault()
        }else {
          $net_amount_value_pos$$25$$ = parseInt($goog$dom$forms$getValue$$($goog$dom$getElement$$($error_list$$6_withdraw_data$$.Method + "_" + $net_value_element_id$$ + "_value")), 10);
          $error_list$$6_withdraw_data$$.Fees = $goog$dom$getTextContent$$($goog$dom$getElement$$($error_list$$6_withdraw_data$$.Method + "_" + $total_fees_element_id$$));
          delete $error_list$$6_withdraw_data$$.Amount;
          $amount$$5_method$$8$$ = $error_list$$6_withdraw_data$$.Method;
          delete $error_list$$6_withdraw_data$$.Method;
          var $currency$$20$$ = $error_list$$6_withdraw_data$$.Currency;
          delete $error_list$$6_withdraw_data$$.Currency;
          this.$conn_$.$requestWithdraw$($e$$262$$.target.$request_id_$, $net_amount_value_pos$$25$$, $amount$$5_method$$8$$, $currency$$20$$, $error_list$$6_withdraw_data$$)
        }
      }
    }
  }, this)
};
$JSCompiler_prototypeAlias$$.$onUserConfirmWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onUserConfirmWithdraw_$$($e$$263$$) {
  this.$conn_$.$confirmWithdraw$($e$$263$$.target.$confirmation_token_$)
};
$JSCompiler_prototypeAlias$$.$onUpdateProfile_$ = function $$JSCompiler_prototypeAlias$$$$onUpdateProfile_$$($e$$264$$) {
  var $client_id$$3$$ = $e$$264$$.target.$getClientID$();
  $JSCompiler_StaticMethods_updateUserProfile$$(this.$conn_$, $e$$264$$.target.$update_profile_data_$, $client_id$$3$$)
};
$JSCompiler_prototypeAlias$$.$onUserFileView_$ = function $$JSCompiler_prototypeAlias$$$$onUserFileView_$$($e$$265_file_view_dialog_content$$) {
  $e$$265_file_view_dialog_content$$ = '<img src="' + $soy$$0$0escapeHtml$$($e$$265_file_view_dialog_content$$.target.$file_name_$) + '" style="width:500px"/>';
  this.$showDialog$($e$$265_file_view_dialog_content$$, "View", $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$))
};
$JSCompiler_prototypeAlias$$.$onBrokerSetUserAsVerified_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerSetUserAsVerified_$$($e$$266$$) {
  var $request_id$$ = $e$$266$$.target.$request_id_$, $client_id$$4$$ = $e$$266$$.target.$getClientID$();
  this.$conn_$.$verifyCustomer$($request_id$$, $client_id$$4$$, $e$$266$$.target.$verification_level_$, $e$$266$$.target.$verification_data_$)
};
$JSCompiler_prototypeAlias$$.$onBrokerProcessWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerProcessWithdraw_$$($e$$267_handler$$103$$) {
  var $valueFormatter$$3$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($valueFormatter$$3$$);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($valueFormatter$$3$$, 8);
  var $withdraw_data$$1$$ = $e$$267_handler$$103$$.target.$getWithdrawData$(), $request_id$$1$$ = $e$$267_handler$$103$$.target.$request_id_$, $action$$4$$ = $e$$267_handler$$103$$.target.$withdraw_action_$;
  $e$$267_handler$$103$$ = this.$getHandler$();
  var $feeDialogContent_formatted_amount_model$$39$$ = this.$model_$, $method_element_id$$1$$ = $goog$string$getRandomString$$(), $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$1$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$1$$ = $goog$string$getRandomString$$(), $total_fees_element_id$$1$$ = $goog$string$getRandomString$$(), $net_value_element_id$$1$$ = $goog$string$getRandomString$$();
  if("CANCEL" === $action$$4$$) {
    var $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = $bitex$templates$CancelWithdrawDialogContent$$(), $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = this.$showDialog$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, "Cancelar saque", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $select_reason_el$$ = $goog$dom$getElement$$("id_select_reason"), 
    $reason_el$$1$$ = $goog$dom$getElement$$("id_custom_reason_text");
    $JSCompiler_StaticMethods_listen$$($e$$267_handler$$103$$, $select_reason_el$$, "change", function() {
      var $reason_id$$1$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$));
      $goog$style$showElement$$($reason_el$$1$$, 0 === $reason_id$$1$$)
    });
    $JSCompiler_StaticMethods_listen$$($e$$267_handler$$103$$, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$269$$) {
      if("ok" == $e$$269$$.key) {
        var $reason_id$$2$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$)), $reason$$1$$;
        if(0 === $reason_id$$2$$ && ($reason$$1$$ = $goog$string$trim$$($goog$dom$forms$getValue$$($reason_el$$1$$)), $goog$string$isEmpty$$($reason$$1$$))) {
          $e$$269$$.stopPropagation();
          $e$$269$$.preventDefault();
          $goog$dom$getElement$$("id_custom_reason_text").focus();
          return
        }
        this.$conn_$.$processWithdraw$($request_id$$1$$, $action$$4$$, $withdraw_data$$1$$.WithdrawID, $reason_id$$2$$, $reason$$1$$)
      }
    }, this)
  }else {
    if("PROGRESS" === $action$$4$$) {
      var $feeDialogContent_formatted_amount_model$$39$$ = this.$formatCurrency$($withdraw_data$$1$$.Amount / 1E8, $withdraw_data$$1$$.Currency), $feeDialogContent_formatted_amount_model$$39$$ = $bitex$templates$FeesForm$$({$amount$:$withdraw_data$$1$$.Amount, $formattedAmount$:$feeDialogContent_formatted_amount_model$$39$$, $currency$:$withdraw_data$$1$$.Currency, $currencySign$:this.$getCurrencySign$($withdraw_data$$1$$.Currency), $amountID$:$cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, 
      $fixedFeeID$:$fixed_fee_element_id$$1$$, $percentFeeID$:$percent_fee_element_id$$1$$, $totalFeesID$:$total_fees_element_id$$1$$, $netValueID$:$net_value_element_id$$1$$, $fixedFee$:$valueFormatter$$3$$.$format$($withdraw_data$$1$$.FixedFee / 1E8), $percentFee$:$valueFormatter$$3$$.$format$($withdraw_data$$1$$.PercentFee)}), $feeDlg$$ = this.$showDialog$($feeDialogContent_formatted_amount_model$$39$$, "Marcar saque de " + (this.$getCurrencyDescription$($withdraw_data$$1$$.Currency) + " em andamento"), 
      $bootstrap$Dialog$ButtonSet$createOkCancel$$());
      this.$doCalculateFees_$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, $net_value_element_id$$1$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$);
      $JSCompiler_StaticMethods_listen$$($e$$267_handler$$103$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$)), "input", $goog$bind$$(this.$doCalculateFees_$, this, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, $net_value_element_id$$1$$, 
      $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$));
      $JSCompiler_StaticMethods_listen$$($e$$267_handler$$103$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($percent_fee_element_id$$1$$)), "input", $goog$bind$$(this.$doCalculateFees_$, this, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, $net_value_element_id$$1$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, 
      $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$));
      $JSCompiler_StaticMethods_listen$$($e$$267_handler$$103$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($fixed_fee_element_id$$1$$)), "input", $goog$bind$$(this.$doCalculateFees_$, this, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, $net_value_element_id$$1$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, 
      $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$));
      $JSCompiler_StaticMethods_listen$$($e$$267_handler$$103$$, $feeDlg$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$270$$) {
        if("ok" == $e$$270$$.key) {
          var $form_data$$ = $bitex$util$getFormAsJSON$$($goog$dom$getFirstElementChild$$($feeDlg$$.$getContentElement$())), $fixed_fee_value_percent_fee$$2$$ = $form_data$$.PercentFee, $original_fees_pos$$26$$ = [0], $percent_fee_value$$ = $valueFormatter$$3$$.parse($fixed_fee_value_percent_fee$$2$$, $original_fees_pos$$26$$);
          isNaN($percent_fee_value$$) && ($percent_fee_value$$ = 0);
          if($original_fees_pos$$26$$[0] != $fixed_fee_value_percent_fee$$2$$.length || isNaN($percent_fee_value$$) || 0 > $percent_fee_value$$) {
            $e$$270$$.stopPropagation(), $e$$270$$.preventDefault()
          }else {
            var $effective_fees_fixed_fee$$2$$ = $form_data$$.FixedFee, $original_fees_pos$$26$$ = [0], $fixed_fee_value_percent_fee$$2$$ = $valueFormatter$$3$$.parse($effective_fees_fixed_fee$$2$$, $original_fees_pos$$26$$);
            isNaN($fixed_fee_value_percent_fee$$2$$) && ($fixed_fee_value_percent_fee$$2$$ = 0);
            $original_fees_pos$$26$$[0] != $effective_fees_fixed_fee$$2$$.length || isNaN($fixed_fee_value_percent_fee$$2$$) || 0 > $fixed_fee_value_percent_fee$$2$$ ? ($e$$270$$.stopPropagation(), $e$$270$$.preventDefault()) : ($fixed_fee_value_percent_fee$$2$$ *= 1E8, $original_fees_pos$$26$$ = 100 * ($withdraw_data$$1$$.Amount / (100 - $withdraw_data$$1$$.PercentFee)) + $withdraw_data$$1$$.FixedFee - $withdraw_data$$1$$.Amount, $effective_fees_fixed_fee$$2$$ = 100 * ($withdraw_data$$1$$.Amount / 
            (100 - $percent_fee_value$$)) + $fixed_fee_value_percent_fee$$2$$ - $withdraw_data$$1$$.Amount, $original_fees_pos$$26$$ < $effective_fees_fixed_fee$$2$$ ? ($e$$270$$.stopPropagation(), $e$$270$$.preventDefault()) : ($original_fees_pos$$26$$ > $effective_fees_fixed_fee$$2$$ && ($form_data$$.Fees = this.$formatCurrency$($original_fees_pos$$26$$ / 1E8, $withdraw_data$$1$$.Currency, $JSCompiler_alias_TRUE$$) + "|" + this.$formatCurrency$($effective_fees_fixed_fee$$2$$ / 1E8, $withdraw_data$$1$$.Currency, 
            $JSCompiler_alias_TRUE$$)), delete $form_data$$.Amount, delete $form_data$$.FixedFee, delete $form_data$$.PercentFee, this.$conn_$.$processWithdraw$($request_id$$1$$, $action$$4$$, $withdraw_data$$1$$.WithdrawID, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $form_data$$, $percent_fee_value$$, $fixed_fee_value_percent_fee$$2$$)))
          }
        }
      }, this)
    }else {
      if("COMPLETE" === $action$$4$$) {
        var $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = $bitex$templates$DepositWithdrawDialogContent$$({$side$:"broker", $currency$:$withdraw_data$$1$$.Currency, $currencySign$:this.$getCurrencySign$($withdraw_data$$1$$.Currency), $force_method$:$withdraw_data$$1$$.Method, $amount$:$withdraw_data$$1$$.Amount, $methods$:$feeDialogContent_formatted_amount_model$$39$$.get("Profile").WithdrawStructure[$withdraw_data$$1$$.Currency], $methodID$:$method_element_id$$1$$, 
        $showFeeDataEntry$:$JSCompiler_alias_FALSE$$, $amountID$:$cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixedFeeID$:$fixed_fee_element_id$$1$$, $percentFeeID$:$percent_fee_element_id$$1$$, $totalFeesID$:$total_fees_element_id$$1$$, $netValueID$:$net_value_element_id$$1$$, $hideNetAmount$:$JSCompiler_alias_FALSE$$}), $dlg$$3$$ = this.$showDialog$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, 
        "Confirmar saque em " + this.$getCurrencyDescription$($withdraw_data$$1$$.Currency), $bootstrap$Dialog$ButtonSet$createOkCancel$$());
        $JSCompiler_StaticMethods_listen$$($e$$267_handler$$103$$, $dlg$$3$$, $goog$ui$Dialog$EventType$SELECT$$, function($broker_withdraw_data_e$$271$$) {
          "ok" == $broker_withdraw_data_e$$271$$.key && ($broker_withdraw_data_e$$271$$ = $bitex$util$getFormAsJSON$$($goog$dom$getFirstElementChild$$($dlg$$3$$.$getContentElement$())), delete $broker_withdraw_data_e$$271$$.Amount, this.$conn_$.$processWithdraw$($request_id$$1$$, $action$$4$$, $withdraw_data$$1$$.WithdrawID, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $broker_withdraw_data_e$$271$$))
        }, this)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$onUserOrderEntry_$ = function $$JSCompiler_prototypeAlias$$$$onUserOrderEntry_$$($e$$272_opt_client_id$$inline_1029$$) {
  var $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1024$$ = "COMPRAR";
  "2" == $e$$272_opt_client_id$$inline_1029$$.target.$getSide$() && ($MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1024$$ = "VENDER");
  $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1024$$ += " " + ($e$$272_opt_client_id$$inline_1029$$.target.$getAmount$() + (" " + ($e$$272_opt_client_id$$inline_1029$$.target.$getSymbol$() + (" em " + $e$$272_opt_client_id$$inline_1029$$.target.$getPrice$()))));
  this.$showNotification$("info", "Enviando ordem...", $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1024$$);
  var $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1024$$ = $e$$272_opt_client_id$$inline_1029$$.target.$getSymbol$(), $qty$$inline_1025$$ = $e$$272_opt_client_id$$inline_1029$$.target.$getAmount$(), $price$$inline_1026$$ = $e$$272_opt_client_id$$inline_1029$$.target.$getPrice$(), $side$$inline_1027$$ = $e$$272_opt_client_id$$inline_1029$$.target.$getSide$(), $broker_id$$inline_1028$$ = $e$$272_opt_client_id$$inline_1029$$.target.$getBrokerID$();
  $e$$272_opt_client_id$$inline_1029$$ = $e$$272_opt_client_id$$inline_1029$$.target.$getClientID$();
  $JSCompiler_StaticMethods_sendOrder_$$(this.$conn_$, $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1024$$, $qty$$inline_1025$$, $price$$inline_1026$$, $side$$inline_1027$$, $broker_id$$inline_1028$$, $e$$272_opt_client_id$$inline_1029$$, $JSCompiler_alias_VOID$$)
};
$JSCompiler_prototypeAlias$$.$onUserCancelOrder_$ = function $$JSCompiler_prototypeAlias$$$$onUserCancelOrder_$$($e$$273$$) {
  $e$$273$$.target.$client_order_id_$ != $JSCompiler_alias_NULL$$ ? this.$showNotification$("info", "Cancelando ordem...", ":" + $e$$273$$.target.$client_order_id_$) : this.$showNotification$("info", "Cancelando ordem...", ":" + $e$$273$$.target.$order_id_$);
  this.$conn_$.$cancelOrder$($e$$273$$.target.$client_order_id_$, $e$$273$$.target.$order_id_$)
};
$JSCompiler_prototypeAlias$$.$onShowReceipt_$ = function $$JSCompiler_prototypeAlias$$$$onShowReceipt_$$($e$$274_receiptData$$) {
  $e$$274_receiptData$$ = $e$$274_receiptData$$.target.$receipt_data_$;
  var $MSG_SHOW_DEPOSIT_RECEIPT_DIALOG_TITLE$$ = "Submission " + $e$$274_receiptData$$.SubmissionID;
  this.$showDialog$($bitex$templates$DepositReceiptDialogContent$$({$depositReceiptList$:$e$$274_receiptData$$.DepositReceipt}), $MSG_SHOW_DEPOSIT_RECEIPT_DIALOG_TITLE$$, $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$))
};
$JSCompiler_prototypeAlias$$.$onUpdateProfileResponse_$ = function $$JSCompiler_prototypeAlias$$$$onUpdateProfileResponse_$$($e$$275$$) {
  this.$model_$.set("SelectedCustomer", $e$$275$$.data.Profile)
};
$JSCompiler_prototypeAlias$$.$onSuggestTrustedAddress_$ = function $$JSCompiler_prototypeAlias$$$$onSuggestTrustedAddress_$$($MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$276$$) {
  var $msg$$96$$ = $MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$276$$.data;
  if(this.$model_$.get("IsVerified")) {
    $MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$276$$ = "Enable " + (this.$getCurrencyDescription$($msg$$96$$.Currency) + " instant deposit?");
    var $dlg$$5$$ = this.$showDialog$($bitex$templates$ConfirmTrustedAddressContentDialog$$({data:$msg$$96$$}), $MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$276$$, $bootstrap$Dialog$ButtonSet$createYesNoCancel$$());
    $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $dlg$$5$$, $goog$ui$Dialog$EventType$SELECT$$, function($address_label_el_e$$277$$) {
      if("yes" == $address_label_el_e$$277$$.key) {
        $address_label_el_e$$277$$.preventDefault();
        $address_label_el_e$$277$$.stopPropagation();
        $address_label_el_e$$277$$ = $goog$dom$getElementByClass$$("confirm-trusted-address-label", $dlg$$5$$.$getContentElement$());
        var $label$$7$$;
        $address_label_el_e$$277$$ != $JSCompiler_alias_NULL$$ && ($label$$7$$ = $goog$dom$forms$getValue$$($address_label_el_e$$277$$));
        this.$conn_$.sendMessage({MsgType:"U44", ConfirmTrustedAddressReqID:parseInt(1E7 * Math.random(), 10), Address:$msg$$96$$.Address, Currency:$msg$$96$$.Currency, Label:$label$$7$$})
      }
      $dlg$$5$$.$dispose$()
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$onUserShowQr_$ = function $$JSCompiler_prototypeAlias$$$$onUserShowQr_$$($e$$278_handler$$105$$) {
  var $qrData$$ = $e$$278_handler$$105$$.target.$qr_data_$, $MSG_SHOW_QR_CURRENCY_DEPOSIT_DIALOG_TITLE$$ = "Depositar " + this.$getCurrencyDescription$($qrData$$.Currency), $dialog_title$$ = "Sacar " + this.$getCurrencyDescription$($qrData$$.Currency);
  "DEPOSIT" === $e$$278_handler$$105$$.target.$qr_data_verb_$ && ($dialog_title$$ = $MSG_SHOW_QR_CURRENCY_DEPOSIT_DIALOG_TITLE$$);
  var $dlg$$6$$ = this.$showDialog$($bitex$templates$CryptoCurrencyQRContentDialog$$({data:$qrData$$}), $dialog_title$$, $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$));
  $e$$278_handler$$105$$ = this.$getHandler$();
  var $input_address$$ = $qrData$$.Wallet;
  $JSCompiler_StaticMethods_listenOnce$$($e$$278_handler$$105$$, this.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$, function($e$$279_refresh_msg$$) {
    $e$$279_refresh_msg$$ = $e$$279_refresh_msg$$.data;
    $e$$279_refresh_msg$$.Data.InputAddress === $input_address$$ && $e$$279_refresh_msg$$.Data.Confirmations != $JSCompiler_alias_NULL$$ && "0" == $e$$279_refresh_msg$$.Data.Confirmations && $dlg$$6$$.$dispose$()
  })
};
$JSCompiler_prototypeAlias$$.$onUserUploadReceipt_$ = function $$JSCompiler_prototypeAlias$$$$onUserUploadReceipt_$$($deposit_data_e$$280$$) {
  var $model$$42$$ = this.$model_$;
  $deposit_data_e$$280$$ = $deposit_data_e$$280$$.target.$getDepositData$();
  var $broker$$15_upload_form_url$$ = $model$$42$$.get("Broker");
  $broker$$15_upload_form_url$$ != $JSCompiler_alias_NULL$$ && ($broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.UploadForm, $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{UserID}}", $model$$42$$.get("UserID")), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{Username}}", $model$$42$$.get("Username")), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{BrokerID}}", $model$$42$$.get("Broker").BrokerID), $broker$$15_upload_form_url$$ = 
  $broker$$15_upload_form_url$$.replace("{{BrokerUsername}}", $model$$42$$.get("Broker").ShortName), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{Email}}", $model$$42$$.get("Email")), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{DepositMethod}}", $deposit_data_e$$280$$.DepositMethodName), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{ControlNumber}}", $deposit_data_e$$280$$.ControlNumber), $broker$$15_upload_form_url$$ = 
  $broker$$15_upload_form_url$$.replace("{{DepositID}}", $deposit_data_e$$280$$.DepositID), window.open($broker$$15_upload_form_url$$, "blank", "scrollbars=yes,toolbar=no,width=700,height=500"))
};
$JSCompiler_prototypeAlias$$.$doCalculateFees_$ = function $$JSCompiler_prototypeAlias$$$$doCalculateFees_$$($amount$$6_amount_element_id$$, $fixed_fee_element_id$$2_fixed_fee_value$$1$$, $percent_fee_element_id$$2_percent_fee_value$$1$$, $currency$$21_formatted_net_amount$$, $opt_fee_value_element_id$$, $opt_net_amount_element_id$$, $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$, $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$, $fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$, 
$opt_is_amount_in_satoshis_pos$$27$$, $is_percent_fee_formatted_opt_is_amount_formatted$$, $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$) {
  var $add_fees_formatted_total_fee$$ = $JSCompiler_alias_TRUE$$;
  $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ === $JSCompiler_alias_FALSE$$ && ($add_fees_formatted_total_fee$$ = $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$);
  $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = $JSCompiler_alias_TRUE$$;
  $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$ === $JSCompiler_alias_FALSE$$ && ($is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$);
  $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$ = $JSCompiler_alias_TRUE$$;
  $fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$ === $JSCompiler_alias_FALSE$$ && ($is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$ = $fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$);
  $fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$ = $JSCompiler_alias_FALSE$$;
  $opt_is_amount_in_satoshis_pos$$27$$ === $JSCompiler_alias_TRUE$$ && ($fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$ = $opt_is_amount_in_satoshis_pos$$27$$);
  var $is_amount_formatted$$ = $JSCompiler_alias_TRUE$$;
  $is_percent_fee_formatted_opt_is_amount_formatted$$ === $JSCompiler_alias_FALSE$$ && ($is_amount_formatted$$ = $is_percent_fee_formatted_opt_is_amount_formatted$$);
  $is_percent_fee_formatted_opt_is_amount_formatted$$ = $JSCompiler_alias_TRUE$$;
  $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$ === $JSCompiler_alias_FALSE$$ && ($is_percent_fee_formatted_opt_is_amount_formatted$$ = $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$);
  $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$ = new $goog$i18n$NumberFormat$$(1);
  $opt_is_amount_in_satoshis_pos$$27$$ = [0];
  var $raw_amount$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($amount$$6_amount_element_id$$));
  $amount$$6_amount_element_id$$ = 0;
  if($is_amount_formatted$$) {
    $opt_is_amount_in_satoshis_pos$$27$$ = [0];
    $amount$$6_amount_element_id$$ = $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$.parse($raw_amount$$, $opt_is_amount_in_satoshis_pos$$27$$);
    if($opt_is_amount_in_satoshis_pos$$27$$[0] != $raw_amount$$.length || isNaN($amount$$6_amount_element_id$$) || 0 >= $amount$$6_amount_element_id$$) {
      return
    }
    isNaN($amount$$6_amount_element_id$$) && ($amount$$6_amount_element_id$$ = 0)
  }else {
    $amount$$6_amount_element_id$$ = $goog$string$toNumber$$($raw_amount$$)
  }
  $fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$ || ($amount$$6_amount_element_id$$ *= 1E8);
  $fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($percent_fee_element_id$$2_percent_fee_value$$1$$));
  $percent_fee_element_id$$2_percent_fee_value$$1$$ = 0;
  $is_percent_fee_formatted_opt_is_amount_formatted$$ ? ($opt_is_amount_in_satoshis_pos$$27$$ = [0], $percent_fee_element_id$$2_percent_fee_value$$1$$ = $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$.parse($fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$, $opt_is_amount_in_satoshis_pos$$27$$), isNaN($percent_fee_element_id$$2_percent_fee_value$$1$$) && ($percent_fee_element_id$$2_percent_fee_value$$1$$ = 0)) : $percent_fee_element_id$$2_percent_fee_value$$1$$ = 
  $goog$string$toNumber$$($fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$);
  $fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($fixed_fee_element_id$$2_fixed_fee_value$$1$$));
  $fixed_fee_element_id$$2_fixed_fee_value$$1$$ = 0;
  $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$ ? ($opt_is_amount_in_satoshis_pos$$27$$ = [0], $fixed_fee_element_id$$2_fixed_fee_value$$1$$ = $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$.parse($fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$, $opt_is_amount_in_satoshis_pos$$27$$), isNaN($fixed_fee_element_id$$2_fixed_fee_value$$1$$) && ($fixed_fee_element_id$$2_fixed_fee_value$$1$$ = 0)) : $fixed_fee_element_id$$2_fixed_fee_value$$1$$ = 
  $goog$string$toNumber$$($fixed_fee$$3_is_amount_in_satoshis_opt_is_fixed_fee_formatted_percent_fee$$3$$);
  $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ || ($fixed_fee_element_id$$2_fixed_fee_value$$1$$ *= 1E8);
  $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$ = $fixed_fee_element_id$$2_fixed_fee_value$$1$$;
  $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$ = ($amount$$6_amount_element_id$$ - $fixed_fee_element_id$$2_fixed_fee_value$$1$$) * ($percent_fee_element_id$$2_percent_fee_value$$1$$ / 100) + $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$;
  $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = $amount$$6_amount_element_id$$ - $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$;
  $add_fees_formatted_total_fee$$ && ($is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = 100 * ($amount$$6_amount_element_id$$ / (100 - $percent_fee_element_id$$2_percent_fee_value$$1$$)) + $is_fixed_fee_formatted_opt_is_fixed_fee_in_satoshis_total_fixed_fee_value$$, $opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$ = $amount$$6_amount_element_id$$ - $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$);
  $opt_fee_value_element_id$$ != $JSCompiler_alias_NULL$$ && ($add_fees_formatted_total_fee$$ = this.$formatCurrency$($opt_is_percent_fee_formatted_total_fees_valueFormatter$$4$$ / 1E8, $currency$$21_formatted_net_amount$$, $JSCompiler_alias_TRUE$$), $goog$dom$setTextContent$$($goog$dom$getElement$$($opt_fee_value_element_id$$), $add_fees_formatted_total_fee$$));
  $opt_net_amount_element_id$$ != $JSCompiler_alias_NULL$$ && ($currency$$21_formatted_net_amount$$ = this.$formatCurrency$($is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ / 1E8, $currency$$21_formatted_net_amount$$, $JSCompiler_alias_TRUE$$), $goog$dom$setTextContent$$($goog$dom$getElement$$($opt_net_amount_element_id$$), $currency$$21_formatted_net_amount$$), $goog$dom$forms$setValue$$($goog$dom$getElement$$($opt_net_amount_element_id$$ + "_value"), $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$));
  return[$amount$$6_amount_element_id$$, $percent_fee_element_id$$2_percent_fee_value$$1$$, $fixed_fee_element_id$$2_fixed_fee_value$$1$$, $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$]
};
$JSCompiler_prototypeAlias$$.$onProcessDeposit_$ = function $$JSCompiler_prototypeAlias$$$$onProcessDeposit_$$($e$$281_handler$$106$$) {
  var $deposit_data$$1$$ = $e$$281_handler$$106$$.target.$getDepositData$(), $request_id$$2$$ = $e$$281_handler$$106$$.target.$request_id_$, $action$$5$$ = $e$$281_handler$$106$$.target.$getDepositAction$();
  $e$$281_handler$$106$$ = this.$getHandler$();
  if("CANCEL" === $action$$5$$) {
    var $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$ = $bitex$templates$CancelDepositDialogContent$$(), $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$ = this.$showDialog$($cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, "Cancelar dep\u00f3sito", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $select_reason_el$$1$$ = $goog$dom$getElement$$("id_select_reason"), $reason_el$$2$$ = $goog$dom$getElement$$("id_custom_reason_text");
    $JSCompiler_StaticMethods_listen$$($e$$281_handler$$106$$, $select_reason_el$$1$$, "change", function() {
      var $reason_id$$3$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$1$$));
      $goog$style$showElement$$($reason_el$$2$$, 0 === $reason_id$$3$$)
    });
    $JSCompiler_StaticMethods_listen$$($e$$281_handler$$106$$, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$283$$) {
      if("ok" == $e$$283$$.key) {
        var $reason_id$$4$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$1$$)), $reason$$2$$;
        if(0 === $reason_id$$4$$ && ($reason$$2$$ = $goog$string$trim$$($goog$dom$forms$getValue$$($reason_el$$2$$)), $goog$string$isEmpty$$($reason$$2$$))) {
          $e$$283$$.stopPropagation();
          $e$$283$$.preventDefault();
          $goog$dom$getElement$$("id_custom_reason_text").focus();
          return
        }
        this.$conn_$.$processDeposit$($request_id$$2$$, $action$$5$$, $JSCompiler_alias_VOID$$, $deposit_data$$1$$.DepositID, $reason_id$$4$$, $reason$$2$$)
      }
    }, this)
  }else {
    if("PROGRESS" === $action$$5$$) {
      this.$conn_$.$processDeposit$($request_id$$2$$, $action$$5$$, $JSCompiler_alias_VOID$$, $deposit_data$$1$$.DepositID)
    }else {
      if("COMPLETE" === $action$$5$$) {
        var $valueFormatter$$5$$ = new $goog$i18n$NumberFormat$$(1);
        $JSCompiler_StaticMethods_setMaximumFractionDigits$$($valueFormatter$$5$$, 8);
        $JSCompiler_StaticMethods_setMinimumFractionDigits$$($valueFormatter$$5$$);
        var $paid_value_element_id$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$3$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$3$$ = $goog$string$getRandomString$$(), $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$ = $goog$string$getRandomString$$(), $net_value_element_id$$2$$ = $goog$string$getRandomString$$(), $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = $deposit_data$$1$$.ControlNumber;
        "CRY" == $deposit_data$$1$$.Type && ($confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = $deposit_data$$1$$.Data.InputAddress);
        $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = $bitex$templates$BrokerConfirmDepositContent$$({$id_value$:$paid_value_element_id$$, $fixedFeeID$:$fixed_fee_element_id$$3$$, $percentFeeID$:$percent_fee_element_id$$3$$, $totalFeesID$:$cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $netValueID$:$net_value_element_id$$2$$, $controlNumber$:$confirmDepositDlg_confirm_deposit_dialog_content_control_number$$, $currencySign$:this.$getCurrencySign$($deposit_data$$1$$.Currency), 
        value:$valueFormatter$$5$$.$format$($deposit_data$$1$$.Value / 1E8), $percentFee$:$valueFormatter$$5$$.$format$($deposit_data$$1$$.PercentFee), $fixedFee$:$valueFormatter$$5$$.$format$($deposit_data$$1$$.FixedFee / 1E8)});
        $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = this.$showDialog$($confirmDepositDlg_confirm_deposit_dialog_content_control_number$$, "Confirmar dep\u00f3sito", $bootstrap$Dialog$ButtonSet$createOkCancel$$());
        this.$doCalculateFees_$($paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$);
        $JSCompiler_StaticMethods_listen$$($e$$281_handler$$106$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($paid_value_element_id$$)), "input", $goog$bind$$(this.$doCalculateFees_$, this, $paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, 
        $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
        $JSCompiler_StaticMethods_listen$$($e$$281_handler$$106$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($percent_fee_element_id$$3$$)), "input", $goog$bind$$(this.$doCalculateFees_$, this, $paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, 
        $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
        $JSCompiler_StaticMethods_listen$$($e$$281_handler$$106$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($fixed_fee_element_id$$3$$)), "input", $goog$bind$$(this.$doCalculateFees_$, this, $paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, 
        $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
        $JSCompiler_StaticMethods_listen$$($e$$281_handler$$106$$, $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$284$$) {
          if("ok" == $e$$284$$.key) {
            var $pos$$28$$ = [0], $percent_fee_value$$2_raw_paid_value$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($paid_value_element_id$$)), $paid_value$$2$$ = $valueFormatter$$5$$.parse($percent_fee_value$$2_raw_paid_value$$, $pos$$28$$);
            if($pos$$28$$[0] != $percent_fee_value$$2_raw_paid_value$$.length || isNaN($paid_value$$2$$) || 0 >= $paid_value$$2$$) {
              $e$$284$$.stopPropagation(), $e$$284$$.preventDefault(), $goog$dom$getElement$$($paid_value_element_id$$).focus()
            }else {
              var $paid_value$$2$$ = 1E8 * $paid_value$$2$$, $fixed_fee$$4_percent_fee$$4$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($percent_fee_element_id$$3$$)), $pos$$28$$ = [0], $percent_fee_value$$2_raw_paid_value$$ = $valueFormatter$$5$$.parse($fixed_fee$$4_percent_fee$$4$$, $pos$$28$$);
              isNaN($percent_fee_value$$2_raw_paid_value$$) && ($percent_fee_value$$2_raw_paid_value$$ = 0);
              if($pos$$28$$[0] != $fixed_fee$$4_percent_fee$$4$$.length || isNaN($percent_fee_value$$2_raw_paid_value$$) || 0 > $percent_fee_value$$2_raw_paid_value$$) {
                $e$$284$$.stopPropagation(), $e$$284$$.preventDefault(), $goog$dom$getElement$$($percent_fee_element_id$$3$$).focus()
              }else {
                var $fixed_fee$$4_percent_fee$$4$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($fixed_fee_element_id$$3$$)), $pos$$28$$ = [0], $fixed_fee_value$$2$$ = $valueFormatter$$5$$.parse($fixed_fee$$4_percent_fee$$4$$, $pos$$28$$);
                isNaN($fixed_fee_value$$2$$) && ($fixed_fee_value$$2$$ = 0);
                $pos$$28$$[0] != $fixed_fee$$4_percent_fee$$4$$.length || isNaN($fixed_fee_value$$2$$) || 0 > $fixed_fee_value$$2$$ ? ($e$$284$$.stopPropagation(), $e$$284$$.preventDefault(), $goog$dom$getElement$$($fixed_fee_element_id$$3$$).focus()) : this.$conn_$.$processDeposit$($request_id$$2$$, $action$$5$$, $JSCompiler_alias_VOID$$, $deposit_data$$1$$.DepositID, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $paid_value$$2$$, $percent_fee_value$$2_raw_paid_value$$, 1E8 * $fixed_fee_value$$2$$)
              }
            }
          }
        }, this)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$onUserDepositRequest_$ = function $$JSCompiler_prototypeAlias$$$$onUserDepositRequest_$$($MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$285$$) {
  var $currency$$22$$ = $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$285$$.target.$currency_$, $handler$$107$$ = this.$getHandler$(), $user_verification_level$$1$$ = this.$model_$.get("Profile").Verified;
  this.$setView$("deposit");
  $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$285$$ = "Depositar " + this.$getCurrencyDescription$($currency$$22$$);
  if(this.$isCryptoCurrency$($currency$$22$$)) {
    var $confirmDialogContent_dialogContent$$2_method_element_id$$2$$ = $bitex$templates$ConfirmDepositCryptoCurrencyContentDialog$$({$currencydescription$:this.$getCurrencyDescription$($currency$$22$$)}), $dlgConfirm$$ = this.$showDialog$($confirmDialogContent_dialogContent$$2_method_element_id$$2$$, $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$285$$, $bootstrap$Dialog$ButtonSet$createYesNoCancel$$());
    $JSCompiler_StaticMethods_listen$$($handler$$107$$, $dlgConfirm$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$286_request_id$$3$$) {
      "yes" == $e$$286_request_id$$3$$.key && ($e$$286_request_id$$3$$.preventDefault(), $e$$286_request_id$$3$$.stopPropagation(), $e$$286_request_id$$3$$ = parseInt(1E7 * Math.random(), 10), this.$conn_$.$requestDeposit$($e$$286_request_id$$3$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $currency$$22$$), $goog$soy$renderElement$$($goog$dom$getFirstElementChild$$($dlgConfirm$$.$getContentElement$()), $bitex$templates$WaitingForDepositResponseDialogContent$$), 
      $JSCompiler_StaticMethods_setButtonSet$$($dlgConfirm$$, $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)), $JSCompiler_StaticMethods_listenOnce$$($handler$$107$$, this.$conn_$, "error_message." + $e$$286_request_id$$3$$, function() {
        $dlgConfirm$$.$dispose$()
      }), $JSCompiler_StaticMethods_listenOnce$$($handler$$107$$, this.$conn_$, "deposit_response." + $e$$286_request_id$$3$$, function($e$$288_msg$$97$$) {
        $e$$288_msg$$97$$ = $e$$288_msg$$97$$.data;
        var $enabled_instant_deposits$$ = 3 <= $user_verification_level$$1$$, $input_address$$1$$ = $e$$288_msg$$97$$.Data.InputAddress;
        $goog$soy$renderElement$$($goog$dom$getFirstElementChild$$($dlgConfirm$$.$getContentElement$()), $bitex$templates$DepositCryptoCurrencyContentDialog$$, {$deposit_message$:$e$$288_msg$$97$$, $hasInstantDepositsEnabled$:$enabled_instant_deposits$$});
        $JSCompiler_StaticMethods_listen$$($handler$$107$$, this.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$, function($e$$289_refresh_msg$$1$$) {
          $e$$289_refresh_msg$$1$$ = $e$$289_refresh_msg$$1$$.data;
          $e$$289_refresh_msg$$1$$.Data.InputAddress === $input_address$$1$$ && $e$$289_refresh_msg$$1$$.Data.Confirmations != $JSCompiler_alias_NULL$$ && "0" == $e$$289_refresh_msg$$1$$.Data.Confirmations && $dlgConfirm$$.$dispose$()
        })
      }, this))
    })
  }else {
    var $value_fmt$$7$$ = new $goog$i18n$NumberFormat$$(1);
    $JSCompiler_StaticMethods_setMaximumFractionDigits$$($value_fmt$$7$$, 8);
    $JSCompiler_StaticMethods_setMinimumFractionDigits$$($value_fmt$$7$$);
    var $deposit_methods$$1$$ = [];
    $goog$array$forEach$$(this.$model_$.get("DepositMethods"), function($deposit_method$$1$$) {
      if($deposit_method$$1$$.$currency$ == $currency$$22$$) {
        for(var $deposit_method_limit_limits$$1$$, $deposit_limit_x$$78$$ = $user_verification_level$$1$$;0 <= $deposit_limit_x$$78$$ && !($deposit_method_limit_limits$$1$$ = $deposit_method$$1$$.$deposit_limits$[$deposit_limit_x$$78$$], $deposit_method_limit_limits$$1$$ != $JSCompiler_alias_NULL$$);$deposit_limit_x$$78$$--) {
        }
        var $deposit_limit_x$$78$$ = {enabled:$JSCompiler_alias_FALSE$$}, $has_limits_enabled_on_deposit_method$$ = $JSCompiler_alias_FALSE$$;
        $deposit_method_limit_limits$$1$$ != $JSCompiler_alias_NULL$$ && $deposit_method_limit_limits$$1$$.enabled != $JSCompiler_alias_NULL$$ && ($has_limits_enabled_on_deposit_method$$ = $deposit_method_limit_limits$$1$$.enabled);
        $has_limits_enabled_on_deposit_method$$ && ($deposit_limit_x$$78$$.enabled = $JSCompiler_alias_TRUE$$, $deposit_limit_x$$78$$.min = $deposit_method_limit_limits$$1$$.min, $deposit_limit_x$$78$$.max = $deposit_method_limit_limits$$1$$.max, $deposit_limit_x$$78$$.formatted_min = this.$formatCurrency$($deposit_limit_x$$78$$.min / 1E8, $currency$$22$$, $JSCompiler_alias_TRUE$$), $deposit_limit_x$$78$$.formatted_max = this.$formatCurrency$($deposit_limit_x$$78$$.max / 1E8, $currency$$22$$, $JSCompiler_alias_TRUE$$), 
        $deposit_limit_x$$78$$.formatted_min_value = $value_fmt$$7$$.$format$($deposit_limit_x$$78$$.min / 1E8), $deposit_limit_x$$78$$.formatted_max_value = $value_fmt$$7$$.$format$($deposit_limit_x$$78$$.max / 1E8));
        $deposit_method_limit_limits$$1$$ = {};
        $deposit_method_limit_limits$$1$$["" + $user_verification_level$$1$$] = $deposit_limit_x$$78$$;
        $deposit_limit_x$$78$$ != $JSCompiler_alias_NULL$$ && $deposit_limit_x$$78$$.enabled && $deposit_methods$$1$$.push({method:$deposit_method$$1$$.id, description:$deposit_method$$1$$.description, disclaimer:$deposit_method$$1$$.$disclaimer$, percent_fee:$deposit_method$$1$$.$percent_fee$, fixed_fee:$deposit_method$$1$$.$fixed_fee$, limits:$deposit_method_limit_limits$$1$$, fields:[]})
      }
    }, this);
    var $confirmDialogContent_dialogContent$$2_method_element_id$$2$$ = $goog$string$getRandomString$$(), $amount_element_id$$1$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$4$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$4$$ = $goog$string$getRandomString$$(), $total_fees_element_id$$3$$ = $goog$string$getRandomString$$(), $net_value_element_id$$3$$ = $goog$string$getRandomString$$(), $confirmDialogContent_dialogContent$$2_method_element_id$$2$$ = $bitex$templates$DepositWithdrawDialogContent$$({$side$:"client", 
    $currency$:$currency$$22$$, $verificationLevel$:$user_verification_level$$1$$, $currencySign$:this.$getCurrencySign$($currency$$22$$), $methods$:$deposit_methods$$1$$, $methodID$:$confirmDialogContent_dialogContent$$2_method_element_id$$2$$, $amountID$:$amount_element_id$$1$$, $showFeeDataEntry$:$JSCompiler_alias_FALSE$$, $fixedFeeID$:$fixed_fee_element_id$$4$$, $percentFeeID$:$percent_fee_element_id$$4$$, $totalFeesID$:$total_fees_element_id$$3$$, $netValueID$:$net_value_element_id$$3$$, $hideNetAmount$:$JSCompiler_alias_FALSE$$}), 
    $dlg$$7$$ = this.$showDialog$($confirmDialogContent_dialogContent$$2_method_element_id$$2$$, $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$285$$, $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $deposit_form_uniform$$ = new $uniform$Uniform$$;
    $deposit_form_uniform$$.$decorate$($goog$dom$getFirstElementChild$$($dlg$$7$$.$getContentElement$()));
    $goog$array$forEach$$($deposit_methods$$1$$, function($deposit_method$$2$$) {
      var $method_id$$1$$ = $deposit_method$$2$$.method;
      $JSCompiler_StaticMethods_listen$$($handler$$107$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($method_id$$1$$ + "_" + $amount_element_id$$1$$)), "input", function() {
        this.$doCalculateFees_$($method_id$$1$$ + "_" + $amount_element_id$$1$$, $method_id$$1$$ + "_" + $fixed_fee_element_id$$4$$, $method_id$$1$$ + "_" + $percent_fee_element_id$$4$$, $currency$$22$$, $method_id$$1$$ + "_" + $total_fees_element_id$$3$$, $method_id$$1$$ + "_" + $net_value_element_id$$3$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$)
      }, this)
    }, this);
    $JSCompiler_StaticMethods_listen$$($handler$$107$$, $dlg$$7$$, $goog$ui$Dialog$EventType$SELECT$$, function($deposit_data$$2_e$$291$$) {
      if("ok" == $deposit_data$$2_e$$291$$.key) {
        if($deposit_data$$2_e$$291$$.preventDefault(), $deposit_data$$2_e$$291$$.stopPropagation(), "prepare" != $goog$dom$getFirstElementChild$$($dlg$$7$$.$getContentElement$()).getAttribute("data-deposit-status")) {
          $dlg$$7$$.$dispose$()
        }else {
          var $amount$$7_error_list$$7$$ = $deposit_form_uniform$$.$validate$();
          if(0 < $amount$$7_error_list$$7$$.length) {
            $goog$array$forEach$$($amount$$7_error_list$$7$$, function($error_msg$$6$$) {
              this.$showNotification$("error", $error_msg$$6$$)
            }, this), $deposit_data$$2_e$$291$$.stopPropagation(), $deposit_data$$2_e$$291$$.preventDefault()
          }else {
            $deposit_data$$2_e$$291$$ = $JSCompiler_StaticMethods_getAsJSON$$($deposit_form_uniform$$);
            var $pos$$29_request_id$$4$$ = [0], $amount$$7_error_list$$7$$ = $value_fmt$$7$$.parse($deposit_data$$2_e$$291$$.Amount, $pos$$29_request_id$$4$$);
            if($pos$$29_request_id$$4$$[0] != $deposit_data$$2_e$$291$$.Amount.length || isNaN($amount$$7_error_list$$7$$) || 0 >= $amount$$7_error_list$$7$$) {
              $amount$$7_error_list$$7$$ = 0
            }
            $pos$$29_request_id$$4$$ = parseInt(1E7 * Math.random(), 10);
            this.$conn_$.$requestDeposit$($pos$$29_request_id$$4$$, $goog$string$toNumber$$($deposit_data$$2_e$$291$$.Method), 1E8 * $amount$$7_error_list$$7$$);
            $goog$soy$renderElement$$($dlg$$7$$.$getContentElement$(), $bitex$templates$WaitingForDepositResponseDialogContent$$);
            $JSCompiler_StaticMethods_listenOnce$$($handler$$107$$, this.$conn_$, "deposit_response." + $pos$$29_request_id$$4$$, function($e$$292$$) {
              var $msg$$98$$ = $e$$292$$.data;
              $goog$soy$renderElement$$($dlg$$7$$.$getContentElement$(), $bitex$templates$DepositSlipContentDialog$$, {$deposit_id$:$msg$$98$$.DepositID, $rest_url$:this.$rest_url_$});
              $JSCompiler_StaticMethods_setButtonSet$$($dlg$$7$$, $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $bootstrap$Dialog$ButtonSet$DefaultButtons$PRINT$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
              $JSCompiler_StaticMethods_listen$$($handler$$107$$, $dlg$$7$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$293$$) {
                "print" == $e$$293$$.key && window.open(this.$rest_url_$ + "/get_deposit?deposit_id=" + $msg$$98$$.DepositID)
              })
            })
          }
        }
      }
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$onUserForgotPassword_$ = function $$JSCompiler_prototypeAlias$$$$onUserForgotPassword_$$($e$$294$$) {
  this.$conn_$.$forgotPassword$(this.$model_$.get("SelectedBrokerID"), $e$$294$$.target.$getEmail$());
  this.$router_$.$setView$("set_new_password")
};
$JSCompiler_prototypeAlias$$.$onUserSetNewPassword_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetNewPassword_$$($e$$295$$) {
  this.$conn_$.$resetPassword$($e$$295$$.target.$getToken$(), $e$$295$$.target.$getPassword$())
};
$JSCompiler_prototypeAlias$$.$onUserEnableTwoFactor_$ = function $$JSCompiler_prototypeAlias$$$$onUserEnableTwoFactor_$$() {
  var $code$$5$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_second_step_verification")), $has_code$$ = !$goog$string$isEmpty$$($code$$5$$), $secret$$3$$ = "";
  $has_code$$ && ($secret$$3$$ = this.$model_$.get("TwoFactorSecret"));
  var $req_id$$ = parseInt(1E6 * Math.random(), 10);
  this.$conn_$.$enableTwoFactor$($JSCompiler_alias_TRUE$$, $secret$$3$$, $code$$5$$, $JSCompiler_alias_VOID$$, $req_id$$);
  $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), this.$conn_$, "two_factor_secret." + $req_id$$, function($e$$297_msg$$99$$) {
    $e$$297_msg$$99$$ = $e$$297_msg$$99$$.data;
    $has_code$$ && !$e$$297_msg$$99$$.TwoFactorEnabled && this.$showDialog$("Wrong authentication code. Please, make sure that you are using Google Authenticator and your cellphone time is exact synched with google servers.")
  }, this)
};
$JSCompiler_prototypeAlias$$.$onUserDisableTwoFactor_$ = function $$JSCompiler_prototypeAlias$$$$onUserDisableTwoFactor_$$() {
  this.$conn_$.$enableTwoFactor$($JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$onBodyClick_$ = function $$JSCompiler_prototypeAlias$$$$onBodyClick_$$($e$$299_model_set_element$$) {
  var $model$$44_view_name$$4$$ = $e$$299_model_set_element$$.target.getAttribute("data-switch-view");
  $model$$44_view_name$$4$$ != $JSCompiler_alias_NULL$$ && ($e$$299_model_set_element$$.preventDefault(), $e$$299_model_set_element$$.stopPropagation(), this.$router_$.$setView$($model$$44_view_name$$4$$));
  $model$$44_view_name$$4$$ = this.$model_$;
  $e$$299_model_set_element$$ = $goog$dom$classes$has$$($e$$299_model_set_element$$.target, "model-action-set") ? $e$$299_model_set_element$$.target : $goog$dom$getAncestorByTagNameAndClass$$($e$$299_model_set_element$$.target, $JSCompiler_alias_NULL$$, "model-action-set");
  $e$$299_model_set_element$$ != $JSCompiler_alias_NULL$$ && $e$$299_model_set_element$$.getAttribute("data-key") != $JSCompiler_alias_NULL$$ && $model$$44_view_name$$4$$.set($e$$299_model_set_element$$.getAttribute("data-key"), $e$$299_model_set_element$$.getAttribute("data-value"))
};
$JSCompiler_prototypeAlias$$.$onBodyChange_$ = function $$JSCompiler_prototypeAlias$$$$onBodyChange_$$($e$$300_elements$$7$$) {
  if($goog$dom$classes$has$$($e$$300_elements$$7$$.target, "withdraw-method-selector")) {
    var $selected_method$$ = $goog$dom$forms$getValue$$($e$$300_elements$$7$$.target);
    $e$$300_elements$$7$$ = $goog$dom$getElementsByClass$$("withdraw-method");
    $goog$array$forEach$$($e$$300_elements$$7$$, function($element$$204_field_elements$$) {
      var $method$$9$$ = $element$$204_field_elements$$.getAttribute("data-withdraw-method");
      $goog$style$showElement$$($element$$204_field_elements$$, $method$$9$$ == $selected_method$$);
      $element$$204_field_elements$$ = $goog$dom$getElementsByClass$$("withdraw-field", $element$$204_field_elements$$);
      $goog$array$forEach$$($element$$204_field_elements$$, function($element$$205$$) {
        $element$$205$$.disabled = $method$$9$$ != $selected_method$$
      })
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$onUserLoginButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginButtonClick_$$($e$$301$$) {
  var $username$$11$$ = $e$$301$$.target.$getUsername$(), $password$$8$$ = $e$$301$$.target.$getPassword$();
  this.$model_$.set("Password", $e$$301$$.target.$getPassword$());
  this.$conn_$.login(this.$model_$.get("SelectedBrokerID"), $username$$11$$, $password$$8$$)
};
$JSCompiler_prototypeAlias$$.$onUserLoginOk_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginOk_$$($e$$302_msg$$100$$) {
  $e$$302_msg$$100$$ = $e$$302_msg$$100$$.data;
  $goog$dom$classes$add$$(document.body, "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-not-logged");
  this.$model_$.set("UserID", $e$$302_msg$$100$$.UserID);
  this.$model_$.set("PseudoName", $bitex$util$getPseudoName$$($e$$302_msg$$100$$.UserID));
  this.$model_$.set("Username", $e$$302_msg$$100$$.Username);
  this.$model_$.set("Email", $e$$302_msg$$100$$.Email);
  this.$model_$.set("TwoFactorEnabled", $e$$302_msg$$100$$.TwoFactorEnabled);
  this.$model_$.set("IsBroker", $e$$302_msg$$100$$.IsBroker);
  this.$model_$.set("IsVerified", 1 < $e$$302_msg$$100$$.Profile.Verified);
  var $broker_currencies$$3_tags$$1_verification_data$$3$$ = new $goog$structs$Set$$, $allowed_markets$$2$$ = {}, $user_brokers$$ = {}, $broker_info$$7_profile$$3$$;
  $e$$302_msg$$100$$.Broker != $JSCompiler_alias_NULL$$ && ($broker_info$$7_profile$$3$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $e$$302_msg$$100$$.Broker), $goog$object$extend$$($allowed_markets$$2$$, $broker_info$$7_profile$$3$$.AllowedMarkets), $broker_currencies$$3_tags$$1_verification_data$$3$$.$addAll$($broker_info$$7_profile$$3$$.BrokerCurrencies), this.$model_$.set("Broker", $broker_info$$7_profile$$3$$), $user_brokers$$[$broker_info$$7_profile$$3$$.BrokerID] = $broker_info$$7_profile$$3$$, 
  $e$$302_msg$$100$$.IsBroker || this.$model_$.set("UserBrokers", $user_brokers$$));
  $broker_info$$7_profile$$3$$ = $e$$302_msg$$100$$.Profile;
  $e$$302_msg$$100$$.IsBroker ? ($goog$dom$classes$add$$(document.body, "bitex-broker"), $broker_info$$7_profile$$3$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $broker_info$$7_profile$$3$$), $user_brokers$$[$broker_info$$7_profile$$3$$.BrokerID] = $broker_info$$7_profile$$3$$, this.$model_$.set("UserBrokers", $user_brokers$$), $goog$object$extend$$($allowed_markets$$2$$, $broker_info$$7_profile$$3$$.AllowedMarkets), $broker_currencies$$3_tags$$1_verification_data$$3$$.$addAll$($broker_info$$7_profile$$3$$.BrokerCurrencies)) : 
  ($goog$dom$classes$add$$(document.body, "bitex-non-broker"), 2 <= $broker_info$$7_profile$$3$$.Verified && $goog$style$showElement$$($goog$dom$getElement$$("verification_menu_id"), $JSCompiler_alias_FALSE$$));
  this.$model_$.set("Profile", $broker_info$$7_profile$$3$$);
  $e$$302_msg$$100$$.IsBroker ? this.$model_$.set("SelectedBrokerID", this.$model_$.get("Profile").BrokerID) : $e$$302_msg$$100$$.Broker != $JSCompiler_alias_NULL$$ && this.$model_$.set("SelectedBrokerID", this.$model_$.get("Broker").BrokerID);
  this.$model_$.set("AllowedMarkets", $allowed_markets$$2$$);
  this.$model_$.set("BrokerCurrencies", $broker_currencies$$3_tags$$1_verification_data$$3$$.$getValues$());
  $broker_currencies$$3_tags$$1_verification_data$$3$$ = $broker_info$$7_profile$$3$$.VerificationData;
  if(1 <= $broker_info$$7_profile$$3$$.Verified) {
    try {
      $broker_currencies$$3_tags$$1_verification_data$$3$$ != $JSCompiler_alias_NULL$$ && ($broker_currencies$$3_tags$$1_verification_data$$3$$ = $goog$json$parse$$($broker_currencies$$3_tags$$1_verification_data$$3$$))
    }catch($e$$303$$) {
    }
  }
  this.$model_$.set("VerificationData", $broker_currencies$$3_tags$$1_verification_data$$3$$);
  var $verification_name$$ = $JSCompiler_alias_NULL$$;
  $goog$isArray$$($broker_currencies$$3_tags$$1_verification_data$$3$$) && $goog$array$forEach$$($broker_currencies$$3_tags$$1_verification_data$$3$$, function($data$$43$$) {
    $goog$isObject$$($data$$43$$) && "name" in $data$$43$$ && ($verification_name$$ = $data$$43$$.name)
  });
  this.$model_$.set("VerificationName", $verification_name$$);
  this.$model_$.set("DisplayName", $broker_info$$7_profile$$3$$.Username);
  $verification_name$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DisplayName", $verification_name$$.first + " " + $verification_name$$.last);
  if($zopim != $JSCompiler_alias_NULL$$ && $zopim.livechat != $JSCompiler_alias_NULL$$) {
    $broker_currencies$$3_tags$$1_verification_data$$3$$ = "VerificationLevel:";
    switch($broker_info$$7_profile$$3$$.Verified) {
      case 0:
        $broker_currencies$$3_tags$$1_verification_data$$3$$ += "no";
        break;
      case 1:
        $broker_currencies$$3_tags$$1_verification_data$$3$$ += "pending";
        break;
      case 2:
        $broker_currencies$$3_tags$$1_verification_data$$3$$ += "processing";
        break;
      default:
        $broker_currencies$$3_tags$$1_verification_data$$3$$ += $broker_info$$7_profile$$3$$.Verified - 2
    }
    $broker_currencies$$3_tags$$1_verification_data$$3$$ += ", TwoFactorEnabled:" + $broker_info$$7_profile$$3$$.TwoFactorEnabled;
    $broker_currencies$$3_tags$$1_verification_data$$3$$ += ", UserID:" + $broker_info$$7_profile$$3$$.ID;
    $broker_currencies$$3_tags$$1_verification_data$$3$$ += ", NeedWithdrawEmail:" + $broker_info$$7_profile$$3$$.NeedWithdrawEmail;
    $broker_currencies$$3_tags$$1_verification_data$$3$$ += ", TransactionFeeBuy:" + $broker_info$$7_profile$$3$$.TransactionFeeBuy;
    $broker_currencies$$3_tags$$1_verification_data$$3$$ += ", TransactionFeeSell:" + $broker_info$$7_profile$$3$$.TransactionFeeSell;
    this.$model_$.get("DisplayName") != this.$model_$.get("Username") && ($broker_currencies$$3_tags$$1_verification_data$$3$$ += ", Username:" + this.$model_$.get("Username"));
    $zopim.livechat.setName(this.$model_$.get("DisplayName"));
    $zopim.livechat.setEmail($broker_info$$7_profile$$3$$.Email);
    $zopim.livechat.addTags($broker_currencies$$3_tags$$1_verification_data$$3$$)
  }
  this.$conn_$.$requestBalances$();
  $e$$302_msg$$100$$.IsBroker && $goog$isDefAndNotNull$$(this.$model_$.get("Profile").Accounts) && $goog$object$forEach$$(this.$model_$.get("Profile").Accounts, function($account_data$$2$$) {
    this.$conn_$.$requestBalances$($account_data$$2$$[0])
  }, this);
  this.$conn_$.$requestDepositMethods$();
  this.$model_$.get("IsVerified") ? this.$router_$.$setView$("offerbook") : 0 == this.$model_$.get("Profile").Verified ? this.$router_$.$setView$("verification") : this.$router_$.$setView$("offerbook")
};
$JSCompiler_prototypeAlias$$.$onUserLoginError_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginError_$$($e$$304_msg$$101$$) {
  $goog$dom$classes$add$$(document.body, "bitex-not-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  $e$$304_msg$$101$$ = $e$$304_msg$$101$$.data;
  this.$model_$.set("UserID", "");
  this.$model_$.set("Username", "");
  if($e$$304_msg$$101$$.NeedSecondFactor) {
    var $dlg_$$1$$ = this.$showDialog$($bitex$templates$GoogleAuthenticationCodeDialogContent$$(), "Autentica\u00e7\u00e3o em 2 passos", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $gauth_uniform$$1$$ = new $uniform$Uniform$$;
    $gauth_uniform$$1$$.$decorate$($goog$dom$getFirstElementChild$$($dlg_$$1$$.$getContentElement$()));
    $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $dlg_$$1$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$305_second_factor$$1$$) {
      if("ok" == $e$$305_second_factor$$1$$.key) {
        var $error_list$$8$$ = $gauth_uniform$$1$$.$validate$();
        0 < $error_list$$8$$.length ? ($goog$array$forEach$$($error_list$$8$$, function($error_msg$$7$$) {
          this.$showNotification$("error", $error_msg$$7$$)
        }, this), $e$$305_second_factor$$1$$.stopPropagation(), $e$$305_second_factor$$1$$.preventDefault()) : ($e$$305_second_factor$$1$$ = $JSCompiler_StaticMethods_getAsJSON$$($gauth_uniform$$1$$).token, this.$conn_$.login(this.$model_$.get("SelectedBrokerID"), this.$loginView_$.$getUsername$(), this.$loginView_$.$getPassword$(), $e$$305_second_factor$$1$$), $dlg_$$1$$.$dispose$())
      }
    })
  }else {
    var $user_status_text$$ = $e$$304_msg$$101$$.UserStatusText;
    switch($e$$304_msg$$101$$.UserStatusText) {
      case "MSG_LOGIN_ERROR_INVALID_PASSWORD":
        $user_status_text$$ = "Invalid password";
        break;
      case "MSG_LOGIN_ERROR_INVALID_USERNAME_OR_PASSWORD":
        $user_status_text$$ = "Invalid username or password";
        break;
      case "MSG_LOGIN_ERROR_INVALID_SECOND_STEP":
        $user_status_text$$ = "Invalid second step authentication code";
        break;
      case "MSG_LOGIN_ERROR_INVALID_BROKER":
        $user_status_text$$ = "Invalid Broker";
        break;
      case "MSG_LOGIN_ERROR_USERNAME_ALREADY_TAKEN":
        $user_status_text$$ = "Username or email already taken"
    }
    this.$showDialog$($user_status_text$$)
  }
};
$JSCompiler_prototypeAlias$$.$onUserSignupButton_$ = function $$JSCompiler_prototypeAlias$$$$onUserSignupButton_$$($e$$306$$) {
  this.$model_$.set("Password", $e$$306$$.target.$getPassword$());
  this.$conn_$.$signUp$($e$$306$$.target.$getUsername$(), $e$$306$$.target.$getPassword$(), $e$$306$$.target.$getEmail$(), $e$$306$$.target.$getState$(), $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country")), $goog$string$toNumber$$($goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker"))))
};
$JSCompiler_prototypeAlias$$.$getModel$ = $JSCompiler_get$$("$model_$");
$JSCompiler_prototypeAlias$$.$onBeforeSetView_$ = function $$JSCompiler_prototypeAlias$$$$onBeforeSetView_$$($classes$$11_e$$307_view$$4$$) {
  var $view_id$$5$$ = $classes$$11_e$$307_view$$4$$.$view_id$;
  $classes$$11_e$$307_view$$4$$ = $classes$$11_e$$307_view$$4$$.view;
  "admin" == $view_id$$5$$ && this.$model_$.set("SelectedBrokerID", 8999999);
  $classes$$11_e$$307_view$$4$$.$inDocument_$ || $classes$$11_e$$307_view$$4$$.$decorate$($goog$dom$getElement$$($view_id$$5$$));
  if(!this.$conn_$.$logged_$) {
    switch($view_id$$5$$) {
      case "start":
      ;
      case "admin":
      ;
      case "signin":
      ;
      case "signup":
      ;
      case "faq":
      ;
      case "forgot_password":
      ;
      case "set_new_password":
      ;
      case "broker_application":
        break;
      case "market":
      ;
      case "ranking":
        this.$conn_$.$connected_$ || this.$router_$.$setView$("start");
        break;
      default:
        return this.$router_$.$setView$("start"), $JSCompiler_alias_FALSE$$
    }
  }
  $classes$$11_e$$307_view$$4$$ = $goog$dom$classes$get$$(document.body);
  var $classes_to_remove$$ = [];
  $goog$array$forEach$$($classes$$11_e$$307_view$$4$$, function($cls$$2$$) {
    0 == $cls$$2$$.lastIndexOf("active-view-", 0) && $classes_to_remove$$.push($cls$$2$$)
  });
  $goog$array$forEach$$($classes_to_remove$$, function($cls$$3$$) {
    $goog$dom$classes$remove$$(document.body, $cls$$3$$)
  });
  document.body.scrollTop = 0;
  $goog$dom$classes$add$$(document.body, "active-view-" + $view_id$$5$$);
  document.body.setAttribute("data-active-view", $view_id$$5$$);
  $goog$array$forEach$$($goog$dom$getElementsByClass$$("bitex-view"), function($view_el$$) {
    var $element_view_name$$ = $view_el$$.getAttribute("data-view-name");
    $element_view_name$$ == $JSCompiler_alias_NULL$$ && ($element_view_name$$ = $view_el$$.id);
    $element_view_name$$ === $view_id$$5$$ ? ($goog$dom$classes$add$$($view_el$$, "bitex-view-active"), $goog$dom$classes$has$$($view_el$$, "bitex-view-always-show") || ($goog$dom$classes$has$$($view_el$$, "bitex-view-" + $view_id$$5$$) ? $goog$style$showElement$$($view_el$$, $JSCompiler_alias_FALSE$$) : $goog$style$showElement$$($view_el$$, $JSCompiler_alias_TRUE$$))) : ($goog$dom$classes$remove$$($view_el$$, "bitex-view-active"), $goog$dom$classes$has$$($view_el$$, "bitex-view-always-show") || 
    ($goog$dom$classes$has$$($view_el$$, "bitex-view-" + $view_id$$5$$) ? $goog$style$showElement$$($view_el$$, $JSCompiler_alias_TRUE$$) : $goog$style$showElement$$($view_el$$, $JSCompiler_alias_FALSE$$)))
  }, this)
};
$JSCompiler_prototypeAlias$$.$getBrokersByCountry$ = function $$JSCompiler_prototypeAlias$$$$getBrokersByCountry$$($country$$1$$, $opt_state$$2$$) {
  var $response$$ = [], $query$$4$$ = $country$$1$$;
  $opt_state$$2$$ != $JSCompiler_alias_NULL$$ && ($query$$4$$ += "_" + $opt_state$$2$$);
  var $brokers$$ = this.$model_$.get("BrokerList");
  $brokers$$ != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($brokers$$, function($broker$$16$$) {
    var $broker_accept_array_is_accepted$$ = $broker$$16$$.AcceptCustomersFrom[0], $broker_reject_array_is_rejected$$ = $broker$$16$$.AcceptCustomersFrom[1], $is_explicit_accepted$$ = 0 <= $goog$array$findIndex$$($broker_accept_array_is_accepted$$, function($accept_data$$) {
      return $accept_data$$ === $query$$4$$ || $accept_data$$ === $country$$1$$
    }), $broker_accept_array_is_accepted$$ = $is_explicit_accepted$$ || "*" === $broker_accept_array_is_accepted$$[0], $broker_reject_array_is_rejected$$ = 0 <= $goog$array$findIndex$$($broker_reject_array_is_rejected$$, function($accept_data$$1$$) {
      return $accept_data$$1$$ === $query$$4$$ || $accept_data$$1$$ === $country$$1$$
    }) || "*" === $broker_reject_array_is_rejected$$[0];
    $is_explicit_accepted$$ ? $response$$.push($broker$$16$$) : $broker_accept_array_is_accepted$$ && !$broker_reject_array_is_rejected$$ && $response$$.push($broker$$16$$)
  });
  return $response$$
};
$JSCompiler_prototypeAlias$$.$formatCurrency$ = function $$JSCompiler_prototypeAlias$$$$formatCurrency$$($amount$$8$$, $currency_code$$10_currency_def$$6$$, $opt_human$$1$$) {
  $currency_code$$10_currency_def$$6$$ = this.$currency_info_$[$currency_code$$10_currency_def$$6$$];
  return($opt_human$$1$$ != $JSCompiler_alias_NULL$$ && $opt_human$$1$$ === $JSCompiler_alias_TRUE$$ ? new $goog$i18n$NumberFormat$$($currency_code$$10_currency_def$$6$$.$human_format$, $currency_code$$10_currency_def$$6$$.code) : new $goog$i18n$NumberFormat$$($currency_code$$10_currency_def$$6$$.$format$, $currency_code$$10_currency_def$$6$$.code)).$format$($amount$$8$$)
};
$JSCompiler_prototypeAlias$$.$isCryptoCurrency$ = function $$JSCompiler_prototypeAlias$$$$isCryptoCurrency$$($currency_code$$11$$) {
  return this.$currency_info_$[$currency_code$$11$$].$is_crypto$
};
$JSCompiler_prototypeAlias$$.$getCurrencySign$ = function $$JSCompiler_prototypeAlias$$$$getCurrencySign$$($currency_code$$12$$) {
  return this.$currency_info_$[$currency_code$$12$$].$sign$
};
$JSCompiler_prototypeAlias$$.$getCurrencyHumanFormat$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyHumanFormat$$($currency_code$$14$$) {
  return this.$currency_info_$[$currency_code$$14$$].$human_format$
};
$JSCompiler_prototypeAlias$$.$getCurrencyDescription$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyDescription$$($currency_code$$15$$) {
  return this.$currency_info_$[$currency_code$$15$$].description
};
$JSCompiler_prototypeAlias$$.$onSecurityList_$ = function $$JSCompiler_prototypeAlias$$$$onSecurityList_$$($e$$308_msg$$102$$) {
  $e$$308_msg$$102$$ = $e$$308_msg$$102$$.data;
  $goog$array$forEach$$($e$$308_msg$$102$$.Currencies, function($currency$$23$$) {
    this.$currency_info_$[$currency$$23$$.Code] = {code:$currency$$23$$.Code, $format$:$currency$$23$$.FormatJS, $human_format$:$currency$$23$$.HumanFormatJS, description:$currency$$23$$.Description, $sign$:$currency$$23$$.Sign, $pip$:$currency$$23$$.Pip, $is_crypto$:$currency$$23$$.IsCrypto}
  }, this);
  var $symbols$$3$$ = [];
  $goog$array$forEach$$($e$$308_msg$$102$$.Instruments, function($instrument$$2$$) {
    var $symbol$$17$$ = $instrument$$2$$.Symbol;
    this.$all_markets_$[$symbol$$17$$] = {symbol:$symbol$$17$$, description:$instrument$$2$$.Description};
    $symbols$$3$$.push($symbol$$17$$);
    var $currency_key$$ = $instrument$$2$$.Symbol, $volume_buy_key$$ = "volume_buy_" + $currency_key$$, $min_key$$ = "min_" + $currency_key$$, $max_key$$ = "max_" + $currency_key$$, $avg_key$$ = "avg_" + $currency_key$$, $bid_key$$1$$ = "best_bid_" + $currency_key$$, $offer_key$$1$$ = "best_offer_" + $currency_key$$, $last_price$$ = "last_price_" + $currency_key$$;
    this.$model_$.set("formatted_volume_sell_" + $currency_key$$, this.$formatCurrency$(0, $symbol$$17$$.substr(0, 3), $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $volume_buy_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $min_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $max_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $avg_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $bid_key$$1$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $offer_key$$1$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $last_price$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$)
  }, this);
  this.$model_$.set("SecurityList", $e$$308_msg$$102$$)
};
function $JSCompiler_StaticMethods_adjustBrokerData_$$($JSCompiler_StaticMethods_adjustBrokerData_$self$$, $broker_info$$8$$) {
  var $percent_fmt$$ = new $goog$i18n$NumberFormat$$(3);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($percent_fmt$$, 2);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($percent_fmt$$);
  var $value_fmt$$8$$ = new $goog$i18n$NumberFormat$$(1);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($value_fmt$$8$$);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($value_fmt$$8$$, 8);
  $broker_info$$8$$.Currencies = $broker_info$$8$$.Currencies.split(",");
  1 === $broker_info$$8$$.Currencies.length && $goog$string$isEmpty$$($broker_info$$8$$.Currencies[0]) && ($broker_info$$8$$.Currencies = []);
  $goog$object$forEach$$($broker_info$$8$$.WithdrawStructure, function($currency_withdraw_structures$$, $currency_code$$16$$) {
    $goog$array$forEach$$($currency_withdraw_structures$$, function($currency_withdraw_structure$$) {
      $currency_withdraw_structure$$.formatted_fixed_fee = this.$formatCurrency$($currency_withdraw_structure$$.fixed_fee / 1E8, $currency_code$$16$$, $JSCompiler_alias_TRUE$$);
      $currency_withdraw_structure$$.formatted_percent_fee = $percent_fmt$$.$format$($currency_withdraw_structure$$.percent_fee);
      $goog$object$forEach$$($currency_withdraw_structure$$.limits, function($limits$$2$$) {
        $limits$$2$$.max != $JSCompiler_alias_NULL$$ && ($limits$$2$$.formatted_max = this.$formatCurrency$($limits$$2$$.max / 1E8, $currency_code$$16$$, $JSCompiler_alias_TRUE$$), $limits$$2$$.formatted_max_value = $value_fmt$$8$$.$format$($limits$$2$$.max / 1E8));
        $limits$$2$$.min != $JSCompiler_alias_NULL$$ && ($limits$$2$$.formatted_min = this.$formatCurrency$($limits$$2$$.min / 1E8, $currency_code$$16$$, $JSCompiler_alias_TRUE$$), $limits$$2$$.formatted_min_value = $value_fmt$$8$$.$format$($limits$$2$$.min / 1E8))
      }, this)
    }, this)
  }, $JSCompiler_StaticMethods_adjustBrokerData_$self$$);
  var $allowed_markets$$3$$ = {}, $broker_currencies$$4$$ = $goog$array$toArray$$($broker_info$$8$$.Currencies);
  $goog$array$forEach$$($broker_info$$8$$.CryptoCurrencies, function($crypto_currency$$1$$) {
    $broker_currencies$$4$$.push($crypto_currency$$1$$.CurrencyCode);
    $goog$object$findKey$$(this.$all_markets_$, function($market_info$$, $symbol$$18$$) {
      if(0 <= $symbol$$18$$.indexOf($crypto_currency$$1$$.CurrencyCode)) {
        return $JSCompiler_alias_TRUE$$
      }
    }) != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($broker_info$$8$$.Currencies, function($currency$$24$$) {
      var $market_currency$$ = $goog$object$findKey$$(this.$all_markets_$, function($market_info$$1$$, $symbol$$19$$) {
        if(0 <= $symbol$$19$$.indexOf($currency$$24$$)) {
          return $JSCompiler_alias_TRUE$$
        }
      });
      $market_currency$$ != $JSCompiler_alias_NULL$$ && ($allowed_markets$$3$$[$market_currency$$] = this.$all_markets_$[$market_currency$$])
    }, this)
  }, $JSCompiler_StaticMethods_adjustBrokerData_$self$$);
  $broker_info$$8$$.BrokerCurrencies = $broker_currencies$$4$$;
  $broker_info$$8$$.AllowedMarkets = $allowed_markets$$3$$;
  $broker_info$$8$$.FormattedTransactionFeeBuy = $percent_fmt$$.$format$($broker_info$$8$$.TransactionFeeBuy / 1E4);
  $broker_info$$8$$.FormattedTransactionFeeSell = $percent_fmt$$.$format$($broker_info$$8$$.TransactionFeeSell / 1E4);
  return $broker_info$$8$$
}
$JSCompiler_prototypeAlias$$.$onBrokerListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerListResponse_$$($e$$309$$) {
  var $msg$$103$$ = $e$$309$$.data, $broker_list$$3$$ = [];
  $goog$array$forEach$$($msg$$103$$.BrokerListGrp, function($broker_array$$) {
    var $broker_info$$9$$ = {};
    $goog$array$forEach$$($msg$$103$$.Columns, function($column$$4$$, $index$$90$$) {
      $broker_info$$9$$[$column$$4$$] = $broker_array$$[$index$$90$$]
    }, this);
    switch($broker_info$$9$$.SignupLabel) {
      case "{MSG_BROKER_APPLY}":
        $broker_info$$9$$.SignupLabel = "Apply to be a broker";
        break;
      case "{MSG_NOTIFY_NEW_BROKER}":
        $broker_info$$9$$.SignupLabel = "Notify me when a new broker arrive in my region"
    }
    $broker_info$$9$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $broker_info$$9$$);
    $broker_list$$3$$.push($broker_info$$9$$)
  }, this);
  this.$model_$.set("BrokerList", $broker_list$$3$$)
};
$JSCompiler_prototypeAlias$$.$onUserConnectBitEx_$ = function $$JSCompiler_prototypeAlias$$$$onUserConnectBitEx_$$() {
  this.$connectBitEx$()
};
$JSCompiler_prototypeAlias$$.$onConnectionOpen_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionOpen_$$() {
  $goog$dom$classes$remove$$(document.body, "ws-not-connected");
  $goog$dom$classes$add$$(document.body, "ws-connected");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  this.$model_$.get("SecurityList") != $JSCompiler_alias_NULL$$ || this.$conn_$.$requestSecurityList$();
  this.$model_$.get("BrokerList") != $JSCompiler_alias_NULL$$ || this.$conn_$.$requestBrokerList$();
  var $username$$12$$ = this.$model_$.get("Username"), $password$$9$$ = this.$model_$.get("Password");
  $username$$12$$ != $JSCompiler_alias_NULL$$ && $password$$9$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($username$$12$$) && !$goog$string$isEmpty$$($password$$9$$) && 8 <= $password$$9$$.length && this.$conn_$.login(this.$model_$.get("SelectedBrokerID"), $username$$12$$, $password$$9$$);
  this.$conn_$.$testRequest$()
};
$JSCompiler_prototypeAlias$$.$onTestRequestTimer_$ = function $$JSCompiler_prototypeAlias$$$$onTestRequestTimer_$$() {
  this.$conn_$ != $JSCompiler_alias_NULL$$ && this.$conn_$.$connected_$ && this.$conn_$.$testRequest$();
  this.$test_request_deadline_timer_$ = new $goog$Timer$$(this.$maximum_allowed_delay_in_ms_$);
  this.$test_request_deadline_timer_$.start();
  $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), this.$test_request_deadline_timer_$, $goog$Timer$TICK$$, function() {
    location.reload()
  })
};
$JSCompiler_prototypeAlias$$.$onHearbeat_$ = function $$JSCompiler_prototypeAlias$$$$onHearbeat_$$($e$$314_msg$$104$$) {
  $e$$314_msg$$104$$ = $e$$314_msg$$104$$.data;
  this.$test_request_deadline_timer_$ != $JSCompiler_alias_NULL$$ && (this.$test_request_deadline_timer_$.stop(), this.$test_request_deadline_timer_$ = $JSCompiler_alias_NULL$$);
  $e$$314_msg$$104$$.SendTime != $JSCompiler_alias_NULL$$ && this.$model_$.set("latency", new Date(Date.now()) - new Date($e$$314_msg$$104$$.SendTime))
};
$JSCompiler_prototypeAlias$$.$onConnectionClose_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionClose_$$() {
  $goog$dom$classes$add$$(document.body, "ws-not-connected", "bitex-not-logged");
  $goog$dom$classes$remove$$(document.body, "ws-connected", "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  this.$router_$.$setView$("start")
};
$JSCompiler_prototypeAlias$$.$onConnectionError_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionError_$$() {
  $goog$dom$classes$add$$(document.body, "ws-not-connected", "bitex-not-logged");
  $goog$dom$classes$remove$$(document.body, "ws-connected", "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  this.$showNotification$("error", "Erro", "Problema com a conex\u00e3o com o servidor.");
  this.$router_$.$setView$("start")
};
$JSCompiler_prototypeAlias$$.$onConnectionErrorMessage_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionErrorMessage_$$($e$$317_msg$$105$$) {
  $e$$317_msg$$105$$ = $e$$317_msg$$105$$.data;
  this.$showNotification$("error", "Mensagem do servidor:", $e$$317_msg$$105$$.Description + " - " + $e$$317_msg$$105$$.Detail, this.$error_message_alert_timeout_$)
};
$JSCompiler_prototypeAlias$$.$showDialog$ = function $$JSCompiler_prototypeAlias$$$$showDialog$$($content$$20$$, $opt_title$$3_title$$11$$, $buttonSet$$3_opt_button_set$$) {
  $opt_title$$3_title$$11$$ = $opt_title$$3_title$$11$$ || "Erro";
  $buttonSet$$3_opt_button_set$$ = $buttonSet$$3_opt_button_set$$ || $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$);
  this.$dialog_$ != $JSCompiler_alias_NULL$$ && (this.$dialog_$.$dispose$(), this.$dialog_$ = $JSCompiler_alias_NULL$$);
  this.$dialog_$ = new $bootstrap$Dialog$$;
  $JSCompiler_StaticMethods_setTitle$$(this.$dialog_$, $opt_title$$3_title$$11$$);
  this.$dialog_$.$setContent$($content$$20$$);
  $JSCompiler_StaticMethods_setButtonSet$$(this.$dialog_$, $buttonSet$$3_opt_button_set$$);
  this.$dialog_$.$setVisible$($JSCompiler_alias_TRUE$$);
  return this.$dialog_$
};
$JSCompiler_prototypeAlias$$.$showNotification$ = function $$JSCompiler_prototypeAlias$$$$showNotification$$($type$$111$$, $alert_content_title$$12$$, $content$$21$$, $opt_display_time$$) {
  var $display_time$$ = 3E3;
  "error" == $type$$111$$ && ($display_time$$ *= 3);
  $goog$isNumber$$($opt_display_time$$) && ($display_time$$ = $opt_display_time$$);
  $alert_content_title$$12$$ = $goog$dom$createDom$$("span", $JSCompiler_alias_VOID$$, [$goog$dom$createDom$$("strong", $JSCompiler_alias_VOID$$, $alert_content_title$$12$$), " ", $content$$21$$]);
  var $notification$$ = new $bootstrap$Alert$$($type$$111$$, $alert_content_title$$12$$, $JSCompiler_alias_TRUE$$);
  $notification$$.render($goog$dom$getElement$$("id_notifications"));
  if(0 < $display_time$$) {
    var $handler$$110$$ = this.$getHandler$();
    $goog$Timer$callOnce$$(function() {
      var $anim$$3$$ = new $goog$fx$dom$FadeOutAndHide$$($notification$$.$getElement$(), 200);
      $JSCompiler_StaticMethods_listenOnce$$($handler$$110$$, $anim$$3$$, "end", function() {
        $notification$$.$dispose$();
        $anim$$3$$.$dispose$()
      });
      $anim$$3$$.play()
    }, $display_time$$, this)
  }
};
$goog$exportPath_$$("BlinkTradeApp", $bitex$app$BlinkTrade$$);
BlinkTradeApp.prototype.showNotification = $bitex$app$BlinkTrade$$.prototype.$showNotification$;
BlinkTradeApp.prototype.showDialog = $bitex$app$BlinkTrade$$.prototype.$showDialog$;
BlinkTradeApp.prototype.getHandler = $bitex$app$BlinkTrade$$.prototype.$getHandler$;
BlinkTradeApp.prototype.getCurrencyDescription = $bitex$app$BlinkTrade$$.prototype.$getCurrencyDescription$;
BlinkTradeApp.prototype.getCurrencySign = $bitex$app$BlinkTrade$$.prototype.$getCurrencySign$;
BlinkTradeApp.prototype.isCryptoCurrency = $bitex$app$BlinkTrade$$.prototype.$isCryptoCurrency$;
BlinkTradeApp.prototype.formatCurrency = $bitex$app$BlinkTrade$$.prototype.$formatCurrency$;
BlinkTradeApp.prototype.getBrokersByCountry = $bitex$app$BlinkTrade$$.prototype.$getBrokersByCountry$;
BlinkTradeApp.prototype.getModel = $bitex$app$BlinkTrade$$.prototype.$getModel$;
BlinkTradeApp.prototype.getQtyCurrencyFromSymbol = $bitex$app$BlinkTrade$$.prototype.$getQtyCurrencyFromSymbol$;
BlinkTradeApp.prototype.getPriceCurrencyFromSymbol = $bitex$app$BlinkTrade$$.prototype.$getPriceCurrencyFromSymbol$;
BlinkTradeApp.prototype.setView = $bitex$app$BlinkTrade$$.prototype.$setView$;
BlinkTradeApp.prototype.getBitexConnection = $bitex$app$BlinkTrade$$.prototype.$getBitexConnection$;
BlinkTradeApp.prototype.connectBitEx = $bitex$app$BlinkTrade$$.prototype.$connectBitEx$;
BlinkTradeApp.prototype.run = $bitex$app$BlinkTrade$$.prototype.$run$;

