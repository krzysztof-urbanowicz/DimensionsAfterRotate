# DimensionsAfterRotate

## Why?

I wanted calculate dimensions (width and height) of HTML element (div, image, ect), but before display it (without using getBoundingClientRect() method).

## How to use?

```
var width_before = 300;
var height_before = 400;
var angle = 90;

var dim = GetDimensionsAfterRotate(width_before, height_before, angle);
var width_after = dim.w;
var height_after = dim.h
```

## It really works?

![Rotating Rectangle](https://github.com/krzysztof-urbanowicz/DimensionsAfterRotate/blob/master/images/DimensionsAfterRotate.gif)