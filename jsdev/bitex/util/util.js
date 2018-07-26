goog.provide('bitex.util');
goog.provide('bitex.util.PriceAmountCalculatorVerb');

goog.require('goog.math.Long');
goog.require('goog.crypt');
goog.require('goog.crypt.Sha256');
goog.require('goog.crypt.hash32');

goog.require('goog.userAgent');
goog.require('goog.userAgent.jscript');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');

bitex.util.generateGUID = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
};

/**
 * @param {Function} callback
 */
bitex.util.getSTUNIpAddress = function(callback) {
  // Compatibility for firefox and chrome
  var RTCPeerConnection = window['RTCPeerConnection']
      || window['mozRTCPeerConnection']
      || window['webkitRTCPeerConnection'];

  if ( ! goog.isDefAndNotNull(RTCPeerConnection) ) {
    callback(undefined);
    return;
  }

  //minimal requirements for data connection
  var mediaConstraints = {
    'optional': [{'RtpDataChannels': true}]
  };

  // Firefox already has a default stun server in about:config
  //    media.peerconnection.default_iceservers =
  //    [{"url": "stun:stun.services.mozilla.com"}]
  var servers;

  // Add same stun server for chrome
  if (goog.userAgent.WEBKIT) {
    servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}]};
  }

  //construct a new RTCPeerConnection
  var pc = new RTCPeerConnection(servers, mediaConstraints);

  var ip_dups = {};
  var handleCandidate = function(candidate) {
    var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
    var ip_addr = ip_regex.exec(candidate);
    if (goog.isDefAndNotNull(ip_addr)) {
      ip_addr = ip_addr[1];

      if(ip_dups[ip_addr] === undefined) {
        callback(ip_addr);
      }
      ip_dups[ip_addr] = true;
    }

  };

    // Listen for candidate events
  pc.onicecandidate = function(ice) {
    // Skip non-candidate events
    if (ice.candidate) {
      handleCandidate(ice.candidate.candidate);
    }
  };

  // Create a bogus data channel
  pc.createDataChannel('');


  //create an offer sdp
  pc.createOffer(function(result){
    //trigger the stun server request
    pc.setLocalDescription(result, function(){}, function(){});

  },function(){});

};

/**
 * returns the browser fingerprint
 * @returns {number}
 */
bitex.util.getBrowserFingerPrint = function() {
  var keys = [];
  keys.push(goog.userAgent.getUserAgentString());
  keys.push(goog.global.screen.colorDepth);
  keys.push(goog.global.navigator.language);
  if (goog.isArray(goog.global.navigator["languages"])) {
    keys.push(goog.global.navigator["languages"].join('x'));
  } else {
    keys.push(typeof undefined);
  }
  var resolution = (goog.global.screen.height > goog.global.screen.width)
                ? [goog.global.screen.height, goog.global.screen.width]
                : [goog.global.screen.width, goog.global.screen.height];
  keys.push(resolution.join('x'));
  keys.push(new Date().getTimezoneOffset());
  keys.push(new goog.storage.mechanism.HTML5SessionStorage().isAvailable());
  keys.push(new goog.storage.mechanism.HTML5LocalStorage().isAvailable());
  keys.push(!!goog.global.indexedDB);
  if(document.body){
    keys.push(typeof(goog.global.document.body.addBehavior));
  } else {
    keys.push(typeof undefined);
  }
  keys.push(typeof(goog.global.window.openDatabase));
  keys.push(goog.global.navigator["cpuClass"]);
  keys.push(goog.global.navigator.platform);
  keys.push(goog.global.navigator["doNotTrack"]);

  var plugin_key_list = [];
  goog.array.forEach(goog.global.navigator.plugins, function(p) {
    var mime_types = [];
    goog.array.forEach(p, function(mt) {
       mime_types.push([mt.type, mt.suffixes].join('~') );
    });
    plugin_key_list.push([p.name, p.description, mime_types.join(',')].join('::'));
  });
  keys.push(plugin_key_list.join(';'));

  var canvas_el = goog.dom.createElement(goog.dom.TagName.CANVAS);
  if (  !!(canvas_el.getContext && canvas_el.getContext('2d')) ) {
    var ctx = canvas_el.getContext('2d');
    var txt = 'http://valve.github.io';
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    keys.push(canvas_el.toDataURL());
  }
  var sha256 = new goog.crypt.Sha256();
  sha256.update( keys.join('###'));

  var finger_print = goog.crypt.hash32.encodeByteArray(sha256.digest());
  if (finger_print < 0) {
    finger_print *= -1;
  }
  return finger_print;
};

/**
 * @param {string} soundFile
 */
bitex.util.playSound = function(soundFile) {
	var isHTML5 = true;
	try {
		if (typeof document.createElement("audio").play=="undefined") {
      isHTML5 = false;
    }
	}
	catch (ex){
		isHTML5 = false;
	}	

	var bodyElem = document.getElementsByTagName("body")[0];	
	if (!bodyElem) {
    bodyElem = document.getElementsByTagName("html")[0];
  }
	
	var soundElem = document.getElementById("jBeep");		
	if (soundElem) {
    bodyElem.removeChild(soundElem);
  }

	if (isHTML5) {
		soundElem = document.createElement("audio");
		soundElem.setAttribute("id", "jBeep");
		soundElem.setAttribute("src", soundFile);
		soundElem.play();
	} else if(navigator.userAgent.toLowerCase().indexOf("msie")>-1){		
		soundElem = document.createElement("bgsound");
		soundElem.setAttribute("id", "jBeep");
		soundElem.setAttribute("loop", 1);
		soundElem.setAttribute("src", soundFile);
		bodyElem.appendChild(soundElem);
	} else {
		soundElem = document.createElement("object");
		soundElem.setAttribute("id", "jBeep");
		soundElem.setAttribute("type", "audio/wav");
		soundElem.setAttribute("style", "display:none;");
		soundElem.setAttribute("data", soundFile);
		
		var paramElem = document.createElement("param");
		paramElem.setAttribute("name", "autostart");
		paramElem.setAttribute("value", "false");
		
		soundElem.appendChild(paramElem);
		bodyElem.appendChild(soundElem);
		try {
			soundElem.Play();
		}
		catch (ex) {
			soundElem.object.Play();
		}	
	}
};

/**
 * @param {string} ymd_string
 * @param {string} opt_time_string
 * @return {Date}
 */
bitex.util.convertServerUTCDateTimeStrToTimestamp = function(ymd_string, opt_time_string) {
  var timestamp = new Date();
  var create_date_parts = ymd_string.split('-');
  timestamp.setUTCFullYear(create_date_parts[0]);
  timestamp.setUTCMonth( parseInt(create_date_parts[1], 10) - 1);
  timestamp.setUTCDate(create_date_parts[2]);

  if (opt_time_string) {
    var create_time_parts = opt_time_string.split(':');
    timestamp.setUTCHours(create_time_parts[0]);
    timestamp.setUTCMinutes(create_time_parts[1]);
    timestamp.setUTCSeconds(create_time_parts[2]);
  }

  return timestamp;
};

bitex.util.isTestNetAddress = function(address) {
  switch(address[0]) {
    case 'm':
    case 'n':
    case '2':
    case '9':
    case 'c':
      return true;
    default:
      return false;
  }
};

bitex.util.decimalPlaces = function(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
      0,
      // Number of digits right of decimal point.
      (match[1] ? match[1].length : 0)
        // Adjust for scientific notation.
          - (match[2] ? +match[2] : 0));
};

/**
 * @param {Element} element
 * @return {Object}
 */
bitex.util.getFormAsJSON = function(element){
  var json_res = {};
  for (var el, i = 0; el = element.elements[i]; i++) {
    if (el.disabled || el.tagName.toLowerCase() == 'fieldset') {
      continue;
    }

    var name = el.name;
    if (goog.string.isEmpty(name)) {
      continue;
    }

    var type = el.type.toLowerCase();
    switch (type) {
      case 'file':
      case 'submit':
      case 'reset':
      case 'button':
        // don't submit these
        break;

      case 'select-multiple':
        var values = goog.dom.forms.getValue(el);
        if (values != null) {
          json_res[name] = [];
          for (var value, j = 0; value = values[j]; j++) {
            json_res[name].push(value);
          }
        }
        break;
      default:
        var form_value = goog.dom.forms.getValue(el);
        if (form_value != null) {
          json_res[name] = form_value;
        }
    }
  }
  return json_res;
};

/**
 * @param {number} user_id
 * @param {string=} opt_broker_name
 * @returns {string}
 */
bitex.util.getPseudoName = function(user_id, opt_broker_name) {
  var list_of_101_animal_names = [
    'Os',    'Oso',    'Cow',    'Gnu',    'Ema',    'Cat',    'Rat',    'Fox',    'Ram',    'Bat',
    'Owl',   'Oca',    'Ruc',    'Pop',    'Gos',    'Oie',    'Pie',    'Coq',    'Pic',    'Kuh',
    'Wal',   'Hai',    'Pfau',   'Toro',   'Hund',   'Paon',   'Gall',   'Pato',   'Loro',   'Drac',
    'Gato',  'Rata',   'Llop',   'Vaca',   'Rato',   'Sapo',   'Lobo',   'Urso',   'Puma',   'Orca',
    'Peru',  'Rato',   'Galo',   'Lynx',   'Hawk',   'Pony',   'Frog',   'Wolf',   'Goat',   'Lion',
    'Seal',  'Bear',   'Bull',   'Deer',   'Puma',   'Orca',   'Pavo',   'Swan',   'Cerf',   'Gallo',
    'Pulpo', 'Ostra',  'Pombo',  'Gaiota', 'Coelho', 'Cabra',  'Poney',  'Foca',   'Ganso',  'Corvo',
    'Hiena', 'Bison',  'Cobra',  'Tigre',  'Polvo',  'Zebra',  'Goose',  'Raven',  'Sloth',  'Viper',
    'Whale', 'Lemur',  'Mouse',  'Skunk',  'Hyena',  'Bison',  'Camel',  'Crock',  'Eagle',  'Snake',
    'Otter', 'Tiger',  'Zebra',  'Horse',  'Rhino',  'Hippo',  'Shark',  'Koala',  'Huhn',   'Katze',
    'Ziege'];

  if (goog.isDefAndNotNull(opt_broker_name)) {
    return list_of_101_animal_names[user_id % 101 ] + '_' + parseInt(user_id/101,10);
  } else {
    return list_of_101_animal_names[user_id % 101 ] + '_' + parseInt(user_id/101,10);
  }
};

bitex.util.getCountries = function() {
  return {
    "AF": "Afghanistan",
    "AX": "Åland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AC": "Ascension Island",
    "AU": ["Australia", "ACT|NSW|NT|QLD|SA|TAS|VIC|WA", "Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia"],
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire, Sint Eustatius, and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": ["Brazil", "AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO", "Acre|Alagoas|Amapá|Amazonas|Bahia|Ceará|Distrito Federal|Espirito Santo|Goiás|Maranhão|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Pará|Paraíba|Paraná|Pernambuco|Piauí|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondônia|Roraima|Santa Catarina|São Paulo|Sergipe|Tocantins"],
    "IO": "British Indian Ocean Territory",
    "VG": "British Virgin Islands",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "IC": "Canary Islands",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "EA": "Ceuta and Melilla",
    "TD": "Chad",
    "CL": ["Chile", "RM|XV|I|II|III|IV|V|VI|VII|VIII|IX|XIV|X|XI|XII", "Metropolitana de Santiago|Arica y Parinacota|Tarapacá|Antofagasta|Atacama|Coquimbo|Valparaíso|Libertador General Bernardo O'Higgins|Maule|Biobío|La Araucanía|Los Ríos|Los Lagos|Aysén del General Carlos Ibáñez del Campo|Magallanes y de la Antártica Chilena"],
    "CN": "China",
    "CX": "Christmas Island",
    "CP": "Clipperton Island",
    "CC": "Cocos [Keeling] Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo - Brazzaville",
    "CD": "Congo - Kinshasa",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Côte d’Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DG": "Diego Garcia",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "EU": "European Union",
    "FK": "Falkland Islands",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HK": "Hong Kong SAR China",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macau SAR China",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar [Burma]",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "KP": "North Korea",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "QO": "Outlying Oceania",
    "PK": ["Pakistan", "Balochistan|KPK|Punjab|Sindh|Islamabad|FATA|AJ&K|Gilgit–Baltistan", "Balochistan|Khyber Pakhtunkhwa|Punjab|Sindh|Islamabad|FATA|Azad and Jamu Kashmir|Gilgit–Baltistan"],
    "PW": "Palau",
    "PS": "Palestinian Territories",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn Islands",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Réunion",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "Rwanda",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "São Tomé and Príncipe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "CS": "Serbia and Montenegro",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "KR": "South Korea",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TA": "Tristan da Cunha",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UM": "U.S. Minor Outlying Islands",
    "VI": "U.S. Virgin Islands",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": ["United States", "AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VE|VA|WA|WV|WI|WY", "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming" ],
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VA": "Vatican City",
    "VE": "Venezuela",
    "VN": ["Vietnam", "An Giang|Bà Rịa - Vũng Tàu|Bạc Liêu|Bắc Kạn|Bắc Giang|Bắc Ninh|Bến Tre|Bình Dương|Bình Định|Bình Phước|Bình Thuận|Cà Mau|Cao Bằng|Cần Thơ|Đà Nẵng|Đắk Lắk|Đắk Nông|Điện Biên|Đồng Nai|Đồng Tháp|Gia Lai|Hà Giang|Hà Nam|Hà Nội|Hà Tây|Hà Tĩnh|Hải Dương|Hải Phòng|Hòa Bình|Hồ Chí Minh|Hậu Giang|Hưng Yên|Khánh Hòa|Kiên Giang|Kon Tum|Lai Châu|Lào Cai|Lạng Sơn|Lâm Đồng|Long An|Nam Định|Nghệ An|Ninh Bình|Ninh Thuận|Phú Thọ|Phú Yên|Quảng Bình|Quảng Nam|Quảng Ngãi|Quảng Ninh|Quảng Trị|Sóc Trăng|Sơn La|Tây Ninh|Thái Bình|Thái Nguyên|Thanh Hóa|Thừa Thiên - Huế|Tiền Giang|Trà Vinh|Tuyên Quang|Vĩnh Long|Vĩnh Phúc|Yên Bái", "An Giang|Bà Rịa - Vũng Tàu|Bạc Liêu|Bắc Kạn|Bắc Giang|Bắc Ninh|Bến Tre|Bình Dương|Bình Định|Bình Phước|Bình Thuận|Cà Mau|Cao Bằng|Cần Thơ|Đà Nẵng|Đắk Lắk|Đắk Nông|Điện Biên|Đồng Nai|Đồng Tháp|Gia Lai|Hà Giang|Hà Nam|Hà Nội|Hà Tây|Hà Tĩnh|Hải Dương|Hải Phòng|Hòa Bình|Hồ Chí Minh|Hậu Giang|Hưng Yên|Khánh Hòa|Kiên Giang|Kon Tum|Lai Châu|Lào Cai|Lạng Sơn|Lâm Đồng|Long An|Nam Định|Nghệ An|Ninh Bình|Ninh Thuận|Phú Thọ|Phú Yên|Quảng Bình|Quảng Nam|Quảng Ngãi|Quảng Ninh|Quảng Trị|Sóc Trăng|Sơn La|Tây Ninh|Thái Bình|Thái Nguyên|Thanh Hóa|Thừa Thiên - Huế|Tiền Giang|Trà Vinh|Tuyên Quang|Vĩnh Long|Vĩnh Phúc|Yên Bái"],
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
  };
};

/**
 * @param {Array.<Object.<*>>} verification_data
 * @return {string}
 */
bitex.util.verificationData2HTML = function(verification_data){
  var formatted_data;
  try {
    formatted_data = '<table class="table table-striped table-condensed">';
    goog.array.forEach(verification_data, function(verification_obj) {
      goog.object.forEach(verification_obj, function(data, key) {
        formatted_data += '<tr><td>';
        if (key != 'data') {
          formatted_data += key;
        }
        formatted_data += '</td> <td>';
        if (key == 'data') {
          formatted_data +=  data;
        } else if (key == 'uploaded_files') {
          if (goog.isArray(data)) {
            goog.array.forEach(data, function(data_line) {
              if ( goog.isDefAndNotNull(data_line.match(/\.(JPG|JPEG|PNG|GIF|jpg|jpeg|png|gif)$/))) {
                formatted_data += ' <a href="#" data-action="file-view" data-filename="' + data_line + '" class="btn btn-mini btn-info" >' +
                    '<i data-action="file-view" data-filename="' + data_line + '"  class="icon-white icon-eye-open"></i></a> ';
              } else {
                formatted_data += ' <a href="' + data_line + '" class="btn btn-mini btn-info" "target":"blank" >' +
                    '<i class="icon-white icon-file"></i></a> ';
              }
            });
          }
        } else if (goog.isArray(data)) {
          goog.array.forEach(data, function(data_line) {
            formatted_data += data_line + '<br/>';
          }, this);
        } else if (goog.isObject(data)) {
          goog.object.forEach(data, function(data_line_data, data_line_key) {
            formatted_data += data_line_key + ':'  + data_line_data + '<br/>';
          });
        } else {
          formatted_data +=  data;
        }
        formatted_data += '</td></tr>';
      });
    });
    formatted_data += '</table>';
  } catch(e){}
  return formatted_data;
};

/**
 * @enum {number}
 */
bitex.util.PriceAmountCalculatorVerb = {
  SPEND: 0,
  GET: 1
};

/**
 * @param {number} qty
 * @param {number} price
 * @param {.Array<.Array<Object>>} order_depth
 * @param {string} username
 * @param {number} taker_fee
 * @param {number} maker_fee
 * @param {number} side
 */ 
bitex.util.calculateTotalFee = function( qty, price, order_depth, username, taker_fee, maker_fee, side) {
  /**
   * @enum {number}
   */
  var OrderDepthIndex = {
    PRICE: 0,
    SIZE: 1,
    USERNAME: 2
  };

  var total = parseInt(qty * price / 1e8, 10);
  var work_total = total;
  var total_sell_maker_fee = total * maker_fee / 10000;
  var total_sell_taker_fee = total * taker_fee / 10000;
  var total_buy_maker_fee = qty * maker_fee / 10000;
  var total_buy_taker_fee = qty * taker_fee / 10000;

  // TODO: This is a simplification, because the order
  //  might be partially executed, which means that part
  //  of the order will pay the taker fee and other part
  //  the maker fee. For now, we will just return this simplified version.

  if (side == 1 && price < order_depth[0][OrderDepthIndex.PRICE]) {
    return total_buy_maker_fee;
  } else if (side == 2 && price > order_depth[0][OrderDepthIndex.PRICE]) {
    return total_sell_maker_fee;
  } else if (side == 1) {
    return total_buy_taker_fee;
  } else {
    return total_sell_taker_fee;
  }
};

/**
 * @param {number} user_input
 * @param {bitex.util.PriceAmountCalculatorVerb} verb
 * @param {.Array<.Array<Object>>} order_depth
 * @param {string} username
 * @param {number} fee
 * @param {number} side
 * @return {Array.<number>=}
 */
bitex.util.calculatePriceAmountAndFee = function(user_input, verb, order_depth, username, fee, side) {
  var amount = 0;
  var price = 0;
  var vwap = 0;

  var order;
  var total_volume = 0;

  /**
   * @enum {number}
   */
  var OrderDepthIndex = {
    PRICE: 0,
    SIZE: 1,
    USERNAME: 2
  };

  var total = user_input;
  var work_total = total;

  for ( var order_idx in order_depth) {
    order = order_depth[order_idx];
    if (username  == order[OrderDepthIndex.USERNAME] ) {
      continue;
    }

    var order_volume = order[OrderDepthIndex.PRICE] * order[OrderDepthIndex.SIZE] / 1e8;

    if (verb == bitex.util.PriceAmountCalculatorVerb.SPEND) {
      if (order_volume >= work_total) {
        amount += (work_total / order[OrderDepthIndex.PRICE] ) * 1e8;
        price = order[OrderDepthIndex.PRICE];
        work_total = 0;
        vwap =  total / amount;
        break;
      } else if (order_volume < work_total) {
        amount += order[OrderDepthIndex.SIZE];
        work_total -= order_volume;
      }
    } else if (verb == bitex.util.PriceAmountCalculatorVerb.GET) {
      if (order[OrderDepthIndex.SIZE] >= work_total) {
        price = order[OrderDepthIndex.PRICE];
        total_volume += (order[OrderDepthIndex.PRICE] * work_total /1e8 );
        vwap = total_volume / total;
        amount = vwap * total;
        work_total = 0;
        break;
      } else if (order[OrderDepthIndex.SIZE] < work_total) {
        total_volume += order_volume;
        work_total -= order[OrderDepthIndex.SIZE];
      }
    }
  }

  if(side == 1) {
    if (verb == bitex.util.PriceAmountCalculatorVerb.SPEND) {
      fee = amount * fee / 10000;
    } else {
      fee = total  * fee / 10000;
    }
  } else {
    if (verb == bitex.util.PriceAmountCalculatorVerb.SPEND) {
      fee = (amount * vwap) * fee / 10000;
    } else {
      fee = (((total/1e8) * vwap) * fee / 10000) * 1e8;
    }
  }

  if (work_total === 0 && amount > 0) {
    return [ price, parseInt(amount,10),  parseInt(fee, 10),  vwap ];
  }
  return undefined;
};

/**
 * @enum {number}
 */
bitex.util.isValidAddress = function(address) {
  var bytes = bitex.util.base58Decode(address);

  var end = bytes.length - 4;
  var hash = bytes.slice(0, end);

  var checksum = bitex.util.sha256_digest(bitex.util.sha256_digest(hash));
  if (checksum[0] != bytes[end] ||
      checksum[1] != bytes[end+1] ||
      checksum[2] != bytes[end+2] ||
      checksum[3] != bytes[end+3])
          return false;

  return true;
};

bitex.util.sha256_digest = function(data) {
  var sha256 = new goog.crypt.Sha256();
  sha256.update(data);

  return sha256.digest();
};

bitex.util.base58Decode = function(string) {

  if (string.length === 0) return "";

  var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  var ALPHABET_MAP = {};
  for(var i = 0; i < ALPHABET.length; i++) {
    ALPHABET_MAP[ALPHABET.charAt(i)] = i;
  }
  var BASE = 58;

  var input = string.split('').map(function(c){
    return ALPHABET_MAP[c];
  });

  var  j, bytes = [0];
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < bytes.length; j++) bytes[j] *= BASE;
    bytes[bytes.length - 1] += input[i];

    var carry = 0;
    for (j = bytes.length - 1; j >= 0; j--){
      bytes[j] += carry;
      carry = bytes[j] >> 8;
      bytes[j] &= 0xff;
    }

    while (carry) {
      bytes.unshift(carry);
      carry = bytes[0] >> 8;
      bytes[0] &= 0xff;
    }
  }

  // deal with leading zeros
  for (i = 0; i < input.length - 1 && input[i] == 0; i++) bytes.unshift(0);

  return bytes;
};



/**
 * @param {*} value
 * @param {Object} rowSet
 * @param {*} formatter
 */
bitex.util.simpleOrderSideFormatter = function(value, rowSet, formatter) {
  var orderQty = formatter.format(rowSet['OrderQty']/1e8);
  var cumQty =  formatter.format(rowSet['CumQty']/1e8);

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_BUYING = goog.getMsg('Buying {$buyqty}', {buyqty: orderQty } );


  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_SELLING = goog.getMsg('Selling {$sellqty}', {sellqty: orderQty } );

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT = goog.getMsg('Bought {$cumboughtqty} of {$boughtqty}', {cumboughtqty:cumQty, boughtqty: orderQty } );

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD = goog.getMsg('Sold {$cumsoldqty} of {$soldqty}', { cumsoldqty:cumQty, soldqty: orderQty } );

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_BOUGHT = goog.getMsg('Bought {$boughtcumqty}', { boughtcumqty:cumQty } );

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_SOLD = goog.getMsg('Sold {$souldcumqty}', { souldcumqty:cumQty } );

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_BUYING_CANCELLED = goog.getMsg('Cancelled order to buy {$cancelledbuyorderqty}', { cancelledbuyorderqty:orderQty } );

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_DESC_SELLING_CANCELLED = goog.getMsg('Cancelled order to sell {$cancelledsellorderqty}', { cancelledsellorderqty:orderQty } );


  switch (rowSet['OrdStatus']) {
    case '-': // Pending ...
    case '0': // New
      if (rowSet['Side'] == '1') { // buying
        return MSG_ORDER_MANAGER_DESC_BUYING;
      } else {
        return MSG_ORDER_MANAGER_DESC_SELLING;
      }
    case '1': // Partial fill
      if (rowSet['Side'] == '1') { // buying
        return MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT;
      } else { // selling
        return MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD;
      }
    case '2': // filled
      if (rowSet['Side'] == '1') { // buying
        return MSG_ORDER_MANAGER_DESC_BOUGHT;
      } else { // selling
        return MSG_ORDER_MANAGER_DESC_SOLD;
      }
    case '4': // Cancelled
      if (rowSet['CumQty'] == 0 ) {
        if (rowSet['Side'] == '1') { // buying
          return MSG_ORDER_MANAGER_DESC_BUYING_CANCELLED;
        } else {
          return MSG_ORDER_MANAGER_DESC_SELLING_CANCELLED;
        }
      } else if (rowSet['CumQty'] > 0 && rowSet['CumQty'] < orderQty ) {
        if (rowSet['Side'] == '1') { // buying
          return MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT;
        } else { // selling
          return MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD;
        }
      } else {
        if (rowSet['Side'] == '1') { // buying
          return MSG_ORDER_MANAGER_DESC_BOUGHT;
        } else { // selling
          return MSG_ORDER_MANAGER_DESC_SOLD;
        }
      }
    case '8': // Rejected
      return rowSet['OrdRejReason'];
  }

};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.util.simpleOrderStatusFormatter = function(value, rowSet) {
  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_SENDING = goog.getMsg('Sending...');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_BUYERS = goog.getMsg('Waiting buyers');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_SELLERS = goog.getMsg('Waiting sellers');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_BOUGHT = goog.getMsg('Partially bought');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_SOLD = goog.getMsg('Partially sold');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_COMPLETE = goog.getMsg('Done');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_CANCELLED = goog.getMsg('Cancelled');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ORDER_MANAGER_SIMPLE_STATUS_REJECTED = goog.getMsg('Rejected');

  switch (value) {
    case '-': // Pending ...
      return MSG_ORDER_MANAGER_SIMPLE_STATUS_SENDING;
    case '0': // New
      if (rowSet['Side'] == '1') { // buying
        return MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_SELLERS;
      } else { // selling
        return MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_BUYERS;
      }
    case '1': // Partial fill
      if (rowSet['Side'] == '1') { // buying
        return MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_BOUGHT;
      } else { // selling
        return MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_SOLD;
      }
    case '2': // filled
      return MSG_ORDER_MANAGER_SIMPLE_STATUS_COMPLETE;
    case '4': // Cancelled
      if (rowSet['CumQty'] == 0 ) {
        return MSG_ORDER_MANAGER_SIMPLE_STATUS_CANCELLED;
      } else {
        return MSG_ORDER_MANAGER_SIMPLE_STATUS_COMPLETE;
      }
    case '8': // Rejected
      return MSG_ORDER_MANAGER_SIMPLE_STATUS_REJECTED;
  }
};

