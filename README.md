pixelWatcher
================

A library that makes it easy to monitor changes in RGB values within some region of an HTML5 canvas or video object.  Is especially handy for aiding in motion detection and dynamic labeling so that dom elements overlaying a video background aren't camouflaged.

PixelWatcher emits two event types named "pixelstats" and "motion."  pixelStats fires at your chosen framerate with data in e.details of the form {r: int, g: int, b: int, avg: int} where r, g, and b are the average color values over a monitored region and avg is the total avg.  Motion events fire when a significant change in the pixel averages is detected from one frame to the next.

<img src="example_data/pixelWatcher.gif"></img>

install
======
<code>
bower install pixelWatcher
</code>


PixelWatcher Options
================

videoObject: An html5 video or canvas element

frameRate: Sampling rate, defaults to 4 fps

width: Width of the area you'd like to sample for color changes

height: Height of the area you'd like to sample for color changes

offsetX: x-offset of the area you'd like to sample for color changes

offsetY: y-offset of the area you'd like to sample for color changes

motionThreshold: determines the sensitivity of motion detection.  Higher values are less sensitive (default: 1)
