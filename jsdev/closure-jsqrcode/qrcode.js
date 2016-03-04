goog.provide('jsqrcode.QRCode');
goog.provide('jsqrcode.QRCode.sizeOfDataLengthInfo');

goog.require('jsqrcode.Detector');

/**
 * @constructor
 */
jsqrcode.QRCode = function(){

};

/**
 * @type {Array.<Array.<number>>}
 */
jsqrcode.QRCode.sizeOfDataLengthInfo = [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]];

/**
 * @type {ImageData}
 */
jsqrcode.QRCode.prototype.imagedata = null;

/**
 * @type {number}
 */
jsqrcode.QRCode.prototype.width = 0;

/**
 * @type {number}
 */
jsqrcode.QRCode.prototype.height = 0;

/**
 * @type {boolean}
 */
jsqrcode.QRCode.prototype.debug = false;

/**
 * @type {number}
 */
jsqrcode.QRCode.prototype.maxImgSize = 1024 * 1024;



/**
 * @param {Element} source
 * @param {function} callback
 */
jsqrcode.QRCode.prototype.decode = function (source, callback) {
  var context;
	if (source instanceof HTMLImageElement) {
		var canvas = document.createElement('canvas');
		canvas.width = source.width;
		canvas.height = source.height;
		context = canvas.getContext('2d');
		context.drawImage(source, 0, 0);
		source = canvas;
	}

	if (source instanceof HTMLCanvasElement) {
		context = source.getContext('2d');
		this.width = source.width;
		this.height = source.height;
		this.imagedata = context.getImageData(0, 0, this.width, this.height);
		this.result = this.process(context);

		if (callback)
			callback(this.result);
	} else {
		var image = new Image();

		image.onload = goog.bind(function(){
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');
			var height = image.height;
			var width = image.width;

			if (image.width * image.height > this.maxImgSize) {
				var ir = image.width / image.height;
				height = Math.sqrt(this.maxImgSize / ir);
				width = ir * height;
			}

			canvas.width = width;
			canvas.height = height;

			context.drawImage(image, 0, 0, canvas.width, canvas.height);
			this.width = canvas.width;
			this.height = canvas.height;

			try {
				this.imagedata = context.getImageData(0, 0, canvas.width, canvas.height);
			} catch (e) {
				this.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";

				if (callback)
					callback(this.result);

				return;
			}

			try {
				this.result = this.process(context);
			} catch (e) {
				this.result = "error decoding QR Code: " + e;
			}

			if (callback != null)
				callback(this.result);
		}, this);

		image.src = source;
	}
};



jsqrcode.QRCode.prototype.process = function (ctx) {
	//var start = new Date().getTime();
	var image = this.grayScaleToBitmap(this.grayscale());
	//var image = this.binarize(128);

	if (this.debug) {
		for (var y = 0; y < this.height; y++) {
			for (var x = 0; x < this.width; x++) {
				var point = (x * 4) + (y * this.width * 4);
				this.imagedata.data[point] = image[x + y * this.width] ? 0 : 0;
				this.imagedata.data[point + 1] = image[x + y * this.width] ? 0 : 0;
				this.imagedata.data[point + 2] = image[x + y * this.width] ? 255 : 0;
			}
		}
		ctx.putImageData(this.imagedata, 0, 0);
	}

	//var finderPatternInfo = new FinderPatternFinder().findFinderPattern(image);

	var detector = new jsqrcode.Detector(image, this);
	var qRCodeMatrix = detector.detect();

	/*for (var y = 0; y < qRCodeMatrix.bits.getHeight(); y++)
	{
			for (var x = 0; x < qRCodeMatrix.bits.getWidth(); x++)
			{
					var point = (x * 4*2) + (y*2 * this.width * 4);
					this.imagedata.data[point] = qRCodeMatrix.bits.get_Renamed(x,y)?0:0;
					this.imagedata.data[point+1] = qRCodeMatrix.bits.get_Renamed(x,y)?0:0;
					this.imagedata.data[point+2] = qRCodeMatrix.bits.get_Renamed(x,y)?255:0;
			}
	}*/

	if (this.debug)
		ctx.putImageData(this.imagedata, 0, 0);

	var reader = jsqrcode.Decoder.decode(qRCodeMatrix.bits);
	var data = reader.DataByte();
	var str = "";

	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < data[i].length; j++) {
			str += String.fromCharCode(data[i][j]);
		}
	}

	//var end = new Date().getTime();
	//var time = end - start;
	//console.log(time);

	return jsqrcode.utils.decode_utf8(str);
	//alert("Time:" + time + " Code: "+str);
};

jsqrcode.QRCode.prototype.getPixel = function (x, y) {
	if (this.width < x)
		throw "point error";
	if (this.height < y)
		throw "point error";

	var point = (x * 4) + (y * this.width * 4);
	return (this.imagedata.data[point] * 33 + this.imagedata.data[point + 1] * 34 + this.imagedata.data[point + 2] * 33) / 100;
};

jsqrcode.QRCode.prototype.binarize = function (th) {
	var ret = new Array(this.width * this.height);

	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			var gray = this.getPixel(x, y);
			ret[x + y * this.width] = gray <= th ? true : false;
		}
	}
	return ret;
};

jsqrcode.QRCode.prototype.getMiddleBrightnessPerArea = function (image) {
	var numSqrtArea = 4;
	//obtain middle brightness((min + max) / 2) per area
	var areaWidth = Math.floor(this.width / numSqrtArea);
	var areaHeight = Math.floor(this.height / numSqrtArea);
	var minmax = new Array(numSqrtArea);
	for (var i = 0; i < numSqrtArea; i++) {
		minmax[i] = new Array(numSqrtArea);
		for (var i2 = 0; i2 < numSqrtArea; i2++) {
			minmax[i][i2] = new Array(0, 0);
		}
	}
	for (var ay = 0; ay < numSqrtArea; ay++) {
		for (var ax = 0; ax < numSqrtArea; ax++) {
			minmax[ax][ay][0] = 0xFF;
			for (var dy = 0; dy < areaHeight; dy++) {
				for (var dx = 0; dx < areaWidth; dx++) {
					var target = image[areaWidth * ax + dx + (areaHeight * ay + dy) * this.width];
					if (target < minmax[ax][ay][0])
						minmax[ax][ay][0] = target;
					if (target > minmax[ax][ay][1])
						minmax[ax][ay][1] = target;
				}
			}
			//minmax[ax][ay][0] = (minmax[ax][ay][0] + minmax[ax][ay][1]) / 2;
		}
	}
	var middle = new Array(numSqrtArea);
	for (var i3 = 0; i3 < numSqrtArea; i3++) {
		middle[i3] = new Array(numSqrtArea);
	}
	for (var ay = 0; ay < numSqrtArea; ay++) {
		for (var ax = 0; ax < numSqrtArea; ax++) {
			middle[ax][ay] = Math.floor((minmax[ax][ay][0] + minmax[ax][ay][1]) / 2);
			//Console.out.print(middle[ax][ay] + ",");
		}
		//Console.out.println("");
	}
	//Console.out.println("");

	return middle;
};

jsqrcode.QRCode.prototype.grayScaleToBitmap = function (grayScale) {
	var middle = this.getMiddleBrightnessPerArea(grayScale);
	var sqrtNumArea = middle.length;
	var areaWidth = Math.floor(this.width / sqrtNumArea);
	var areaHeight = Math.floor(this.height / sqrtNumArea);
	var bitmap = new Array(this.height * this.width);

	for (var ay = 0; ay < sqrtNumArea; ay++) {
		for (var ax = 0; ax < sqrtNumArea; ax++) {
			for (var dy = 0; dy < areaHeight; dy++) {
				for (var dx = 0; dx < areaWidth; dx++) {
					bitmap[areaWidth * ax + dx + (areaHeight * ay + dy) * this.width] = (grayScale[areaWidth * ax + dx + (areaHeight * ay + dy) * this.width] < middle[ax][ay]) ? true : false;
				}
			}
		}
	}
	return bitmap;
};

jsqrcode.QRCode.prototype.grayscale = function () {
	var ret = new Array(this.width * this.height);
	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			var gray = this.getPixel(x, y);
			ret[x + y * this.width] = gray;
		}
	}
	return ret;
};




jsqrcode.QRCode.prototype.orderBestPatterns = function (patterns) {
	function distance(pattern1, pattern2) {
		var xDiff = pattern1.getX() - pattern2.getX();
		var yDiff = pattern1.getY() - pattern2.getY();
		return Math.sqrt((xDiff * xDiff + yDiff * yDiff));
	}

	/// <summary> Returns the z component of the cross product between vectors BC and BA.</summary>
	function crossProductZ(pointA, pointB, pointC) {
		var bX = pointB.x;
		var bY = pointB.y;
		return ((pointC.x - bX) * (pointA.y - bY)) - ((pointC.y - bY) * (pointA.x - bX));
	}

	// Find distances between pattern centers
	var zeroOneDistance = distance(patterns[0], patterns[1]);
	var oneTwoDistance = distance(patterns[1], patterns[2]);
	var zeroTwoDistance = distance(patterns[0], patterns[2]);

	var pointA, pointB, pointC;
	// Assume one closest to other two is B; A and C will just be guesses at first
	if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
		pointB = patterns[0];
		pointA = patterns[1];
		pointC = patterns[2];
	} else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
		pointB = patterns[1];
		pointA = patterns[0];
		pointC = patterns[2];
	} else {
		pointB = patterns[2];
		pointA = patterns[0];
		pointC = patterns[1];
	}

	// Use cross product to figure out whether A and C are correct or flipped.
	// This asks whether BC x BA has a positive z component, which is the arrangement
	// we want for A, B, C. If it's negative, then we've got it flipped around and
	// should swap A and C.
	if (crossProductZ(pointA, pointB, pointC) < 0.0) {
		var temp = pointA;
		pointA = pointC;
		pointC = temp;
	}

	patterns[0] = pointA;
	patterns[1] = pointB;
	patterns[2] = pointC;
};

