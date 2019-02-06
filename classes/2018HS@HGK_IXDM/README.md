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

* [Visual Studio Code](https://code.visualstudio.com/) Mac && Windows!
  * add extensions: live-server
* [MAMP](https://www.mamp.info/de/downloads/) (the free version)

__Windows users:__

* [XAMPP](https://www.apachefriends.org/download.html) 
* [Babun](http://babun.github.io/) Terminal for windows



__Tutorials__

* [Introduction to p5.js](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) by Daniel Shiffman



__01.10:__

In this first lesson I will introduce p5.js and how to use it to draw on HTML5 canvas

__GETTING HELP__ ⛑

To get any help while learning programming the best resource is the internet.

You can usually find help by typing the programming language you need help for and than adding the problem you are trying to solve (_type the following in google_)

> javascript how to get the text content of a div

__[Answer](https://stackoverflow.com/questions/8647216/get-content-of-a-div-using-javascript)__

Really helpful are the MDN [[mozilla foundation](https://developer.mozilla.org/en-US/)] references for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [css](https://developer.mozilla.org/en-US/docs/Web/CSS)

__DEBUGGING__ 🐞

> _1) On average, a developer creates 70 bugs per 1000 lines of code_
>
> _2) 15 bugs per 1,000 lines of code find their way to the customers_
>
> _3) Fixing a bug takes 30 times longer than writing a line of code_
>
> _4) 75% of a developer’s time is spent on debugging (1500 hours a year!)_

WELCOME TO PROGRAMMING!

Luckily there is a nice console on every browser that helps us debug our code.

To open the console:

* in Chrome: `cmd + alt + j` for windows `ctrl + shift + j`
* in Firefox: `cmd + alt + k` for windows `ctrl + shift + k`
* in Safari: safari is an ass 🍑. 
  1. open safari
  2. go to preferences `cmd + ,`
  3. go to advanced
  4. at the bottom of the menu check 
     * [x] "Show Develop menu in menu bar"
  5. now you can type `cmd + c` to show the console
* in Edge press `F12` or right-click and select "Inspect Element"

`console.log(message || object || anything else)` will be your best friend.

ERROR EXAMPLES

```pseudocode
sketch.js:8 Uncaught ReferenceError: color is not defined at sketch.js:8
// this means that there is an error in line 8 of the file sketch.js

Uncaught Error: [object Arguments]is not a valid color representation.
    at d.Color._parseInputs (p5.min.js:7)
    at new d.Color (p5.min.js:6)
    at e.d.color (p5.min.js:6)
    at d.Renderer2D.background (p5.min.js:8)
    at e.d.background (p5.min.js:7)
    at setup (sketch.js:15) // <== here is our error in line 15 of sketch.js
    at e.<anonymous> (p5.min.js:7)
    at e.<anonymous> (p5.min.js:7)
    at new e (p5.min.js:7)
    at e (p5.min.js:7)
```

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
    position: fixed; /* or relative or whatever you decide */
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
    cnv.parent('p5Sketch');// here we tell p5 in wich div should the sketch be placed
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

__[What is the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)__

In this lesson we will look at interaction between DOM elements and javascript, [here](https://developer.mozilla.org/en-US/docs/Web/Events) a complete list of the many event listener you can attach to DOM elements

```javascript
let element = document.getElementById('id-name')
element.addEventListener('onclick', doSomething);

function doSomething(){
    // something happens
}

// get id ov hoovered element in webpage
// thanks to stackoverflow
let lastID = null;

let handleMouseover = function (e) {
    var target = e.target || e.srcElement;
    lastID = target.id;
};

if (document.addEventListener) {
    document.addEventListener('mouseover', handleMouseover, false);
}
else {
    document.attachEvent('onmouseover', handleMouseover);
}

```

Objects?

```javascript
let myObj = {
    x_pos: 100,
    y_pos: 300,
    DOM_element: document.getElementById('id-name')
}
// let's turn it into a readable JSON file
let json = JSON.stringify(myObj);
```

 Arrays?

```javascript
let myArray = [];
myArray = [1, 45, 66, 3, 67, 30];
myArray.push(45);
// myArray: [1, 45, 66, 3, 67, 30, 45]
// you can fill it with strings or objects and more...
```

__EXERCISE:__

Build two button in `HTML`

```html
<button id="trigger">
    TRIGGER
</button>
<button id="release">
    RELEASE
</button>
<!-- you can additionally style the buttons in the css file -->
```

Then attach event listener to the buttons

```javascript
const trigger = document.getElementById('trigger');
trigger.attachEventListener('mouseover', triggerFunction);
triggerFunction(){
    // execute some stuff
    // maybe collecting mouse data
}

const release = document.getElementById('release');
release.attachEventListener('mouseover', releaseFunction);
releaseFunction(){
    // visualize the collected data    
}
```




__BONUS:__

[execute functions at a specific interval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

```javascript
setInterval(functionToExecute, 1000); // the second attribute defines the interval in milliseconds => 1000 = 1 second || 60 * 1000 = 1 minute etc. 

function functionToExecute(){
    // some actions to be executed
    // for example sending data to the server
}
```



### 15.10 Hello Device Data!

__input:__

* [Mobile Websites Can Tap Into Your Phone's Sensors Without Asking](https://www.wired.com/story/mobile-websites-can-tap-into-your-phones-sensors-without-asking/?mbid=social_fb)

* [The Dark Side of 'Replay Sessions' That Record Your Every Move Online](https://www.wired.com/story/the-dark-side-of-replay-sessions-that-record-your-every-move-online/)

* [Keystroke Dynamics](https://en.wikipedia.org/wiki/Keystroke_dynamics) (wiki), here a [paper](http://www.ise.bgu.ac.il/faculty/liorr/idth.pdf) 📝 about the topic

  >there are two types of biometrics physiological and behavioral:
  >
  >__physiological:__ physical measurement of human body like fingerprints, face geometry etc.
  >__behavioral__: relate to specific human behaviors while performing a task, signature writing, voice keystroke and mouse dynamics etc.
  >
  >__keystroke dynamics__
  >Keystroke dynamics can be captured via several different features extracted from the typing rhythm of the user including: latency between consecutive keystrokes, flight time, dwell time, based on the key down/press/up events, overall typing speed, frequency of errors (use of backspace) and control keys (use of left/right shift).
  >
  >__mouse dynamics__
  >The study defines four different mouse actions as follows: mouse movement, drag and drop, point and click and silence. Several different features were defined, such as the interpolation between the movement speed and the traveled distance, which estimates the average speed a user will travel for a certain distance. In addition, several histograms were used to capture different working statistics of the user such as the average travelling speed in eight direction zones or the relative occurrence of each one action. 

__User data__

```javascript
const info = {

  timeOpened: new Date(),
  timezone: (new Date()).getTimezoneOffset() / 60,

  pageon() { return window.location.pathname },
  referrer() { return document.referrer },
  previousSites() { return history.length },

  browserName() { return navigator.appName },
  browserEngine() { return navigator.product },
  browserVersion1a() { return navigator.appVersion },
  browserVersion1b() { return navigator.userAgent },
  browserLanguage() { return navigator.language },
  browserOnline() { return navigator.onLine },
  browserPlatform() { return navigator.platform },
  javaEnabled() { return navigator.javaEnabled() },
  dataCookiesEnabled() { return navigator.cookieEnabled },
  dataCookies1() { return document.cookie },
  dataCookies2() { return decodeURIComponent(document.cookie.split(";")) },
  dataStorage() { return localStorage },

  sizeScreenW() { return screen.width },
  sizeScreenH() { return screen.height },
  sizeDocW() { return document.width },
  sizeDocH() { return document.height },
  sizeInW() { return innerWidth },
  sizeInH() { return innerHeight },
  sizeAvailW() { return screen.availWidth },
  sizeAvailH() { return screen.availHeight },
  scrColorDepth() { return screen.colorDepth },
  scrPixelDepth() { return screen.pixelDepth },


  latitude() { return position.coords.latitude },
  longitude() { return position.coords.longitude },
  accuracy() { return position.coords.accuracy },
  altitude() { return position.coords.altitude },
  altitudeAccuracy() { return position.coords.altitudeAccuracy },
  heading() { return position.coords.heading },
  speed() { return position.coords.speed },
  timestamp() { return position.timestamp },


};

console.log(
  info.timeOpened,
  info.timezone,
  info.pageon(),
  info.referrer(),
  info.previousSites(),
  info.browserName(),
  info.browserEngine(),
  info.browserVersion1a(),
  info.browserVersion1b(),
  info.browserLanguage(),
  info.browserOnline(),
  info.browserPlatform(),
  info.dataCookies2(),
  info.dataStorage()
)
```

__Gyroscope data__

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

[...and geo location?](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)

[...and the battery?](https://developer.mozilla.org/en-US/search?q=battery) [here](https://github.com/pstadler/battery.js) a library for this...

### 22.10 / 29.10 Hello NodeJS and data collection!

__Dependencies:__

* [node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/) `$ npm install express --save`
* [Socket.io](https://socket.io/) `$ npm install socket.io --save` [Server side] and [client side](https://github.com/socketio/socket.io-client) [download the whole package, the library sits in the __dist__ folder 📁] or with [CDN](https://cdnjs.com/libraries/socket.io) `https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js` 

__Inputs:__

* [clickclickclick.click](https://clickclickclick.click/#757954110d9b5b0b650722a9a0469640)
* [puckey.studio](https://puckey.studio/)
  * [do not touch](http://donottouch.org/)
  * [pointer pointer](https://pointerpointer.com/)
* [Full Stack web application](https://www.youtube.com/watch?v=JnEH9tYLxLk) client 💻  ↔️ 💻 server ➡️ ☁️ database
* [WebSockets and p5.js](https://www.youtube.com/watch?v=bjULmG8fqc8)

__Initialize a node.js project__

_(the following commands need to be done in the terminal)_ 🖥 ⌨️

```bash
$ cd path/to/folder
$ npm init
	# fill out all the requested data if you don't know the answer let it empty
	entry point: (index.js) index.js # very important!!!
# installing node packages
$ npm install package-name --save
```



### Final Exhibition 17.12.2018

__Data–Tinder:__ matching based on your device data 👨‍👩‍👧‍👦: [_cleo, finn_, _alex_]

__Data-Drawing:__ make a path to follow with the phone 👨‍👩‍👧‍👦: [_flo, martino, vaidehi, michelle_]

__Face-Detection:__ CV 👨‍👩‍👧‍👦: [_refael, tim, yana, sarah, timo_]

__dependencies:__

[Mongo DB](https://www.mongodb.com/) or [Firebase](https://shiffman.net/a2z/firebase/) [a tutorial...]

[Vector math](https://p5js.org/reference/#/p5.Vector/dist), you can use vector math to compute the distance between the data of different users. Than calculate the user with shorter distance.

[Open CV for Node.js](https://github.com/justadudewhohacks/opencv4nodejs) [you need [CMAKE](https://cmake.org/download/)], [Faced](https://github.com/gordalina/faced#readme) [...seems to have a build error] or [face-api.js](https://github.com/justadudewhohacks/face-api.js)

## UTILS

### Node.js

```javascript
const exec = require('child_process').exec;

exec("Bash command", function(err, stdout, stderr) {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
});
// the bash command could be a python script for example
```



### BASH COMMANDS

```bash
$you traceroute thewebsiteyouwanttotrace.com
# this tracks down all the nodes you will pass through while reaching the website
```



## Readings

* E-flux Journal #07 - Boris Groys - Self-Design and Aesthetic Responsibility [DE](http://whtsnxt.net/060), [EN](http://www.e-flux.com/journal/07/61386/self-design-and-aesthetic-responsibility/)
* [On Weaponised Design](https://ourdataourselves.tacticaltech.org/posts/30-on-weaponised-design/)
