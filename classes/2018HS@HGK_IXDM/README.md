# Aesthetic Responsibility, Self-Design and Coding



> _Indeed, design—including self-design—is primarily a mechanism for inducing suspicion. The contemporary world of total design is often described as a world of total seduction from which the __unpleasantness of reality has disappeared.__ But I would argue, rather, that the world of total design is a world of total suspicion, a world of latent danger lurking behind designed surfaces. The main goal of self-design then becomes one of neutralizing the suspicion of a possible spectator, of creating the sincerity effect that provokes trust in the spectator’s soul. In today’s world, the production of sincerity and trust has become everyone’s occupation—and yet it was, and still is, the main occupation of art throughout the whole history of modernity: the modern artist has always positioned himself or herself as the only honest person in a world of hypocrisy and corruption._ 
>
> [Boris Groys - Self-Design and Aesthetic Responsibility](https://www.e-flux.com/journal/07/61386/self-design-and-aesthetic-responsibility/)



## Learning Outputs

* Critical thinking toward _self-design_ using creative coding as a tool
* Making the invisible daily generated data visible through creative coding

## Schedule

### 24.09 Hello C[omputer]V[ision]!

In this first class we will look at computer vision software and how it is used for facial recognition. How can we fool such algorithms in a way that they can't recognize faces anymore? We will look at the examples of [Adam Harvey ](https://ahprojects.com/) and his [CV Dazzle](https://cvdazzle.com/) and we will test the limits of such algorithm by trying different makeup techniques. _On the other hand we will also try to fool the algorithm by drawing faces by hand (to be decided yet)_.

__Inputs/Links__

* [Why Stanford Researchers Tried to Create a ‘Gaydar’ Machine](https://www.nytimes.com/2017/10/09/science/stanford-sexual-orientation-study.html)
* [Machine Bias](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)
* [How I'm fighting bias in algorithms](https://www.ted.com/talks/joy_buolamwini_how_i_m_fighting_bias_in_algorithms/up-next) by Joy Boulamwini
* [Manifesto on Algorithmic Humanitarism](https://www.opendemocracy.net/dan-mcquillan/manifesto-on-algorithmic-humanitarianism) by Dan Macquillan

__Dependencies__

* [openframeworks](https://openframeworks.cc/download/)
  - First download [xcode](https://developer.apple.com/download/)
  - Then in terminal type `xcode-select --install`
* [FaceOsc](https://github.com/kylemcdonald/ofxFaceTracker/releases)
  * connecting it to [processing](https://processing.org/): [FaceOsc-Templates](https://github.com/CreativeInquiry/FaceOSC-Templates) 
  * or to [p5.js](https://p5js.org/): [p5js-osc](https://github.com/genekogan/p5js-osc) [test it first]

### 01.10 / 08.10 Hello p5.js!

This second part of the course will be concentrated in developing the basic skills of coding using [p5.js](https://p5js.org/). This JavaScript library builds on [Processing](https://processing.org/) a coding framework for generative design.

JavaScript is the most used scripting language for the web. By learning this tool you will be able to design simple interactive websites.

__Dependencies a.k.a. what you need to download__ 

__Mac Users:__

* [Visual Studio Code](https://code.visualstudio.com/)
  * add extensions: live-server
* [MAMP](https://www.mamp.info/de/downloads/) (the free version)

__Windows users:__

* [XAMPP](https://www.apachefriends.org/download.html) 
* [Babun](http://babun.github.io/) Terminal for windows



__Tutorials__

* [Introduction to p5.js](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) by Daniel Shiffman



__01.10:__

In this first lesson I will introduce p5.js and how to use it to draw on HTML5 canvas

__THE FOLDER 📂 STRUCTURE:__
```
my-website
|--/index.html
|--/style.css
|--/js
   |--/sketch.js
   |--/libraries
      |--/p5.js
      |--/other-libraries-you-may-need.js
```

__index.html:__

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>my-website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- load the styling -->
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <!-- load the js files -->
    <script src="js/libraries/p5.js"></script>
    <script src="js/sketch.js"></script>
</head>
<body>
    <div id="p5Sketch">
    <!-- we leave it empty -->
    </div>
</body>
</html>
```

__style.css:__

```css
#p5Sketch{
    position: fixed;
    width: /* you define it! */;
    height: /* you define it! */;
    /* i usually do full screen */
}
```

__sketch.js:__

```javascript
let cnv;
function setup(){
    // setting up the sketch before to start drawing
    cnv = createCanvas(400, 400); // or (innerWidth, innerHeight) [full screen]
    cnv.parent('p5Sketch');
}

function draw(){
    // here the drawing happens
    // drawing a rectangle
    rect(x, y, width, height);
    // drawing circle
    ellipse(x, y, width, height);
    // drawing a free form defining the single vertices
    beginShape();
    vertex(x, y); // you can add as many vertices as you like
    endShape(x, y);
    
    // loops!
    for(start, end, increment){
        // repeat something
    }
    
    // if statement
    if(statement == true){
        // do something
    }else{
        // do something else
    }
}

/* VERY IMPORTANT FEATURE TO RESIZE THE CANVAS*/

function windowResized(){
    resizeCanvas(innerWidth, innerHeight);
}
```



__08.10:__

In this lesson we will look at interaction between DOM elements and javascript

```javascript
let element = document.getElementById('id-name')
element.addEventListener('onclick', doSomething);

function doSomething(){
    // something happens
}

```



 

### 15.10 Hello Device Motion!

```javascript
/* CODE BY [TED DAVIS] */

/* PREFS */
 let easing = 0.5; // set between 0 - 1

 /* VARS */
 let rx, ry, rz, sx, sy, sz;
 rx = ry = rz = sx = sy = sz = 0;

 /* ONDEVICEMOTION */
 // https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
 window.ondevicemotion = event => {
     /* RAW VALUES */
     rx = event.accelerationIncludingGravity.x;
     ry = event.accelerationIncludingGravity.y;
     rz = event.accelerationIncludingGravity.z;

     /* SMOOTHED VALUES */
     sx = smoothVal(rx, sx);
     sy = smoothVal(ry, sy);
     sz = smoothVal(rz, sz);
 };

 /* VALUE MAPPING */
 function mapVal(value, istart, istop, ostart, ostop) {
     return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
 }

 /* VALUE SMOOTHING */
 function smoothVal(inputVal, outputVal) {
     let tarVal = inputVal;
     let calcVal = tarVal - outputVal;
     outputVal += calcVal * easing;
     return outputVal;
 }
```



 [What about light sensors?](https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent/Using_light_sensors#Browser_compatibility)

[...and vibration?](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)

[...and geo location?](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)

### 22.10 / 29.10 Hello NodeJS and data collection!

__Inputs:__

* [clickclickclick.click](https://clickclickclick.click/#757954110d9b5b0b650722a9a0469640)
* [Full Stack web application](https://www.youtube.com/watch?v=JnEH9tYLxLk) client 💻  ↔️ 💻 server ➡️ ☁️ database

### Final Exhibition 17.12.2018



## UTILS

### BASH COMMANDS

```bash
$you traceroute thewebsiteyouwanttotrace.com
# this tracks down all the nodes you will pass through while reaching the website
```



## Readings

* E-flux Journal #07 - Boris Groys - Self-Design and Aesthetic Responsibility [DE](http://whtsnxt.net/060), [EN](http://www.e-flux.com/journal/07/61386/self-design-and-aesthetic-responsibility/)
* [On Weaponised Design](https://ourdataourselves.tacticaltech.org/posts/30-on-weaponised-design/)
