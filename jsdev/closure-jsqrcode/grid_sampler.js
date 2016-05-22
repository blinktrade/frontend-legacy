goog.provide('jsqrcode.grid_sampler');
goog.require('jsqrcode.PerspectiveTransform');
goog.require('jsqrcode.PerspectiveTransform.utils');
goog.require('jsqrcode.BitMatrix');

/**
 * @param image
 * @param points
 */
jsqrcode.grid_sampler.checkAndNudgePoints = function (image, points) {
	var width = qrcode.width;
	var height = qrcode.height;
	// Check and nudge points from start until we see some that are OK:
	var nudged = true;
	var x, y, offset;
	for (offset = 0; offset < points.length && nudged; offset += 2) {
		x = Math.floor(points[offset]);
		y = Math.floor(points[offset + 1]);
		if (x < -1 || x > width || y < -1 || y > height) {
			throw "Error.checkAndNudgePoints ";
		}
		nudged = false;
		if (x == -1) {
			points[offset] = 0.0;
			nudged = true;
		}
		else if (x == width) {
			points[offset] = width - 1;
			nudged = true;
		}
		if (y == -1) {
			points[offset + 1] = 0.0;
			nudged = true;
		}
		else if (y == height) {
			points[offset + 1] = height - 1;
			nudged = true;
		}
	}
	// Check and nudge points from end:
	nudged = true;
	for (offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
		x = Math.floor(points[offset]);
		y = Math.floor(points[offset + 1]);
		if (x < -1 || x > width || y < -1 || y > height) {
			throw "Error.checkAndNudgePoints ";
		}
		nudged = false;
		if (x == -1) {
			points[offset] = 0.0;
			nudged = true;
		}
		else if (x == width) {
			points[offset] = width - 1;
			nudged = true;
		}
		if (y == -1) {
			points[offset + 1] = 0.0;
			nudged = true;
		}
		else if (y == height) {
			points[offset + 1] = height - 1;
			nudged = true;
		}
	}
};

jsqrcode.grid_sampler.sampleGrid3 = function (image, dimension, transform, qrcode) {
	var bits = new jsqrcode.BitMatrix(dimension);
	var points = new Array(dimension << 1);

	for (var y = 0; y < dimension; y++) {
		var max = points.length;
		var iValue = y + 0.5;
		var x;
		for (x = 0; x < max; x += 2) {
			points[x] = (x >> 1) + 0.5;
			points[x + 1] = iValue;
		}
		transform.transformPoints1(points);
		// Quick check to see if points transformed to something inside the image;
		// sufficient to check the endpoints
		jsqrcode.grid_sampler.checkAndNudgePoints(image, points);
		try {
			for (x = 0; x < max; x += 2) {
				var xpoint = (Math.floor(points[x]) * 4) + (Math.floor(points[x + 1]) * qrcode.width * 4);
				var bit = image[Math.floor(points[x]) + qrcode.width * Math.floor(points[x + 1])];
				qrcode.imagedata.data[xpoint] = bit ? 255 : 0;
				qrcode.imagedata.data[xpoint + 1] = bit ? 255 : 0;
				qrcode.imagedata.data[xpoint + 2] = 0;
				qrcode.imagedata.data[xpoint + 3] = 255;
				//bits[x >> 1][ y]=bit;
				if (bit)
					bits.set_Renamed(x >> 1, y);
			}
		} catch (aioobe) {
			// This feels wrong, but, sometimes if the finder patterns are misidentified, the resulting
			// transform gets "twisted" such that it maps a straight line of points to a set of points
			// whose endpoints are in bounds, but others are not. There is probably some mathematical
			// way to detect this about the transformation that I don't know yet.
			// This results in an ugly runtime exception despite our clever checks above -- can't have
			// that. We could check each point's coordinates but that feels duplicative. We settle for
			// catching and wrapping ArrayIndexOutOfBoundsException.
			throw "Error.checkAndNudgePoints";
		}
	}

	return bits;
};

