# UNMAKE ALL

> UnMake => Wiedergutmachen, gleichzeitig: Auseinandernehmen, Dekonstruieren. Im Kurs werden wir anhand kleiner Programmier-Experimente (webextensions, javascript, bash-commands) das «Internet» auseinandernehmen, um einige der tausendfach durchgeführten Datensammlungsprozesse, an denen wir tagtäglich unbemerkt teilnehmen sichtbar und verstehbar zu machen. Dieser allgegenwärtiger Datenextraktivismus, das Extrahieren von Daten aus unserem Umgang mit digitalen Tools (zb. Soziale Netzwerke, google apps oder das Smartphone ganz allg.) werden wir praktisch-gestalterisch nach-bauen und uns so mit den oft unreflektierten Macht- und Überwachungsmechanismen der “digitalen” Welt beschäftigen. Das «All» in «UnMake All» meint dabei den Zustand der fortgeschrittenen Digitalisierung auf allen Ebenen unseres Lebens, der Gesellschaft, der Kultur und der Politik. Fast alles ist digitalisierbar und damit gestaltbar, vergleichbar, verwertbar. Nach dem Auseinandernehmen werden wir versuchen einige Gegenentwürfe zu gestalten, um das Auseinandergenommene selbstbestimmter wieder zusammenfügen zu können.

## WEEK 1 - 18.feb.2019

### facebook detectives 🕵️‍♂️ 🕵️‍♀️

* Download your raw data [here](https://www.facebook.com/help/delete_account/) download google data [here](https://support.google.com/accounts/answer/3024190?hl=en)
* [Firefox developer edition](https://www.mozilla.org/en-US/firefox/developer/)
* `getEventListeners(document)` only on google chrome! look inside `input`
* cosole network analysis ```a.prototype.onMouseStateStoreChange``` && `storeData`

## WEEK 2 - 25.feb.2019

### internet infrastructure: google, amazon

who owns what? Using traceroute and IP geolocation to understand how data flows on the internet. We will use diferent tools to visualize this flows: 

* [Open street map](https://www.openstreetmap.org/#map=8/46.825/8.224)
* [google earth](https://www.google.com/earth/) && [desktop](https://www.google.com/earth/versions/)

## WEEK 3 && 4 - 4.mar.2019 && 18.mar.2019

### let's bake a cookie 🍪

## WEEK 5 && 6

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

