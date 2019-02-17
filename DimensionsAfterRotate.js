function GetDimensionsAfterRotate(w, h, rot) {
	function Dimension(width, height) {
		this.w = width || 0;
		this.h = height || 0;
	};

	rot = rot / 180 * Math.PI;
	var alfa = Math.atan(h / w);
	var p = Math.sqrt(w * w + h * h);

	var w1 = Math.abs(Math.cos(alfa - rot));
	var w2 = Math.abs(Math.cos(alfa + rot));
	var w = (w1 > w2) ? w1 : w2;

	var h1 = Math.abs(Math.sin(alfa - rot));
	var h2 = Math.abs(Math.sin(alfa + rot));
	var h = (h1 > h2) ? h1 : h2;

	return new Dimension(w * p, h * p);
}