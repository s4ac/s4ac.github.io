# UNMAKE ALL

> UnMake => Wiedergutmachen, gleichzeitig: Auseinandernehmen, Dekonstruieren. Im Kurs werden wir anhand kleiner Programmier-Experimente (webextensions, javascript, bash-commands) das «Internet» auseinandernehmen, um einige der tausendfach durchgeführten Datensammlungsprozesse, an denen wir tagtäglich unbemerkt teilnehmen sichtbar und verstehbar zu machen. Dieser allgegenwärtiger Datenextraktivismus, das Extrahieren von Daten aus unserem Umgang mit digitalen Tools (zb. Soziale Netzwerke, google apps oder das Smartphone ganz allg.) werden wir praktisch-gestalterisch nach-bauen und uns so mit den oft unreflektierten Macht- und Überwachungsmechanismen der “digitalen” Welt beschäftigen. Das «All» in «UnMake All» meint dabei den Zustand der fortgeschrittenen Digitalisierung auf allen Ebenen unseres Lebens, der Gesellschaft, der Kultur und der Politik. Fast alles ist digitalisierbar und damit gestaltbar, vergleichbar, verwertbar. Nach dem Auseinandernehmen werden wir versuchen einige Gegenentwürfe zu gestalten, um das Auseinandergenommene selbstbestimmter wieder zusammenfügen zu können.

## WEEK 1 - 18.feb.2019

### facebook detectives 🕵️‍♂️ 🕵️‍♀️

* Download your raw data [here](https://www.facebook.com/help/delete_account/) download google data [here](https://support.google.com/accounts/answer/3024190?hl=en)
* [Firefox developer edition](https://www.mozilla.org/en-US/firefox/developer/)
* `getEventListeners(document)` only on google chrome! look inside `input`
* cosole network analysis ```a.prototype.onMouseStateStoreChange``` && `storeData`
* Our teampad 📝 [https://teampad.fhnw.ch/p/unmakeall](https://teampad.fhnw.ch/p/unmakeall)

## WEEK 2 - 25.feb.2019

### internet infrastructure: google, amazon

who owns what? Using traceroute and IP geolocation to understand how data flows on the internet. We will use diferent tools to visualize this flows 

 ```bash
  traceroute facebook.com
  traceroute amazon.com
  traceroute google.com
  traceroute alibaba.com #try .cn
  # experiment with geographic domains like .co.jp | .ch | .cn
  # http://www.chinawhisper.com/top-10-most-popular-websites-in-china/
 ```

* [online tool](https://s4ac.github.io/classes/2019FS@HGK_IXDM/tracerouting/) (to use combine with traceroute see 👀 below ⤵️)

* [Submarine cable map](https://www.submarinecablemap.com/) && [Internet Exchange Map](https://www.internetexchangemap.com/)

* [Open street map](https://www.openstreetmap.org/#map=8/46.825/8.224)

* [google earth](https://www.google.com/earth/) && [desktop](https://www.google.com/earth/versions/)

## WEEK 3 - 4.mar.2019

### Let's bake a cookie 1 🍪

[Follow the Cookie Trail – Computerphile 1](https://www.youtube.com/watch?v=LHSSY8QNvew) and [2](https://www.youtube.com/watch?v=_d0G6FZ_kR4)

```
##### website folder structure #####
my-amazing-website
├── js
│   ├── libraries
│   │   ├── p5.dom.min.js
│   │   ├── p5.min.js
│   │   ├── p5.pre-min.js
│   │   └── p5.sound.min.js
│   ├── sketch.js
|   └── script.js
├── index.html
└── style.css
```



* intro to html

 ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>🍪SWEEEET COOKIE!🍪</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" type="text/css" media="screen" href="style.css">
  </head>
      <body>
      </body>
  </html>
 ```

* …and css

 ```css
  body{
      padding: 0px;
      margin: 0px;
  }
  .cookie-box {
      position: fixed;
      width: 100%;
      height: auto;
  }
  
  .editable{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      width: 33%;
      height: 33vh;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bolder;
      background-color: #00f;
      color: #0f0;
      hyphens: auto;
      word-break: break-all;
      overflow-y: scroll;
  }
 ```

* deep into javascript cookies 🍪🍪🍪🍪🍪🍪🍪🍪

 ```javascript
  function set_cookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      const write_to_cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      document.cookie = write_to_cookie;
  }
  
  function get_cookie(cname) {
      const name = cname + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
  
  function check_cookie() {
      let user = get_cookie("cookies");
      if (user != "") {
          draw_cookies(); // <= we still need to write this function
      } else {
          user = prompt("how many cookies have you eaten in your life?", "10000 or more?");
          if (user != "" && user != null) {
              set_cookie("cookies", user, 365);
              draw_cookies();
          }
      }
      set_text(); // <= same here
  }
 ```

  * never forget your [parent](https://developer.mozilla.org/en-US/docs/Web/API/Window/parent)

##  WEEK 4 – 18.mar.2019

### Lets's bake a cookie 2 🍪

* `<iframe>` let's make a like button

* [Web-extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons) `about:debugging` and actually [debugging](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Debugging) || change notification style to `alerts`

  ```
  web-extension folder structure
  my-amazing-web-extension
  ├── icons
  │   └── cookie-48.png
  ├── background.js
  └── manifest.json
  ```

* what is in the manifest.json

 ```json
  {
    "description": "looking for cookies being updated",
    "manifest_version": 2,
    "name": "rotten-cookies",
    "version": "1.0",
  
    "permissions": [
      "notifications",
      "tabs",
      "cookies",
      "<all_urls>"
    ],
  
    "background": {
      "scripts": ["background.js"]
    },
  
    "content_scripts": [
      {
        "matches": ["<all_urls>"],
        "js": ["content.js"]
      }
    ]
  }
 ```

  …should we stop here or could we also analyze the network with an extension and inject different information? [web-request](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

## WEEK 5 && 6 && 7

### Let's bake a manifesto: micro publication

Entanglement of own practices and social media platforms

Data viz / code snippets thoughts and reflections

## UTILS

### visualization tools

* __maps__ 🗺
  * [polymaps](http://polymaps.org/)
  * [kartograph](http://kartograph.org/)
  * [OpenLayers](https://openlayers.org/)
* __graphs__
  * [JavaScript InfoVis Toolkit](http://philogb.github.io/jit/)
  * [gephi](https://gephi.org/)
  * [visjs](http://visjs.org/network_examples.html)
  * [D3](https://d3js.org/)
* __API__ 
  * [ipapi.co](https://ipapi.co/api/?java#introduction)



### bash commands

[traceroute](https://ss64.com/bash/traceroute.html): print the route packets take to network host

```bash
traceroute facebook.com
```

[lsof](https://ss64.com/bash/lsof.html): this shows all the active connections on your computer

```bash
lsof -i -P
```

Packet sniffing {[installation](http://macappstore.org/ngrep/)}

```bash
sudo ngrep -d any facebook
```
