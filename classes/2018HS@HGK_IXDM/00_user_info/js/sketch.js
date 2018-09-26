let cnv;
function setup() {
  // put setup code here
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
}

function draw() {
  background(51);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

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