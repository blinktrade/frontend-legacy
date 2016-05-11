goog.provide('jsqrcode.utils');



jsqrcode.utils.URShift = function (number, bits) {
	if (number >= 0)
		return number >> bits;
	else
		return (number >> bits) + (2 << ~bits);
};



jsqrcode.utils.decode_url = function(s) {
	var escaped = "";

	try {
		escaped = escape(s);
	} catch (e) {
		console.log(e);
		escaped = s;
	}

	var ret = "";

	try {
		ret = decodeURIComponent(escaped);
	} catch (e) {
		console.log(e);
		ret = escaped;
	}

	return ret;
};

jsqrcode.utils.decode_utf8 = function(s) {
	if (/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(s))
		return jsqrcode.utils.decode_url(s);
	else
		return s;
};
