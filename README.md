# DimensionsAfterRotate

## Why?

I wanted calculate dimensions (width and height) of HTML element (div, image, ect), but before display it (without using getBoundingClientRect() method).

## How to use?

HTML:
```
<script type="text/javascript" src="https://github.com/krzysztof-urbanowicz/DimensionsAfterRotate/blob/master/DimensionsAfterRotate.js"></script>
```

JavaScript:
```
var width_before = 300;
var height_before = 400;
var angle = 90;

var dim = GetDimensionsAfterRotate(width_before, height_before, angle);
var width_after = dim.w;
var height_after = dim.h
```

## Does it really work?

As You can see below:

![Rotating Rectangle](/../../blob/master/images/DimensionsAfterRotate.gif)