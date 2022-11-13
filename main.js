(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),c=t.n(s),l=new URL(t(630),t.b),d=i()(a()),u=c()(l);d.push([n.id,':root {\n  --clr-primary-400: hsl(210, 11%, 15%);\n\n  --clr-neutral-100: hsl(210, 17%, 98%);\n  --clr-neutral-400: hsl(210, 17%, 93%);\n\n  --clr-accent-400: hsl(210, 10%, 23%);\n  --clr-accent-700: hsl(38, 100%, 50%);\n\n  --ff-primary: "Space Grotesk", -apple-system, BlinkMacSystemFont, avenir next,\n    avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,\n    arial, sans-serif;\n\n  --ff-body: var(--ff-primary);\n  --ff-heading: var(--ff-primary);\n\n  --fw-light: 300;\n  --fw-regular: 400;\n  --fw-bold: 700;\n\n  --fs-200: 0.5rem;\n  --fs-300: 0.75rem;\n  --fs-350: 0.875rem;\n  --fs-400: 1rem;\n  --fs-500: 1.25rem;\n  --fs-600: 1.5rem;\n  --fs-700: 1.75rem;\n  --fs-800: 2rem;\n  --fs-900: 2.25rem;\n  --fs-1000: 2.5rem;\n  --fs-1100: 2.75rem;\n  --fs-1200: 3rem;\n}\n\n@font-face {\n  font-family: "Space Grotesk";\n  src: url('+u+') format("truetype");\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: var(--ff-primary);\n}\n\n/* Set core body defaults */\nbody {\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n  background-color: var(--clr-neutral-400);\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture,\nsvg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\n\nh1 {\n  font-size: var(--fs-1200);\n  font-weight: var(--fw-bold);\n  color: var(--clr-accent-700);\n  max-width: 75%;\n  line-height: 3.6rem;\n}\n\np {\n  font-size: var(--fs-500);\n  color: var(--clr-primary-400);\n  max-width: 75%;\n}\n\n#header-title {\n  font-weight: var(--fw-regular);\n  font-size: var(--fs-500);\n  color: var(--clr-primary-400);\n  -webkit-text-stroke: 0.0112em var(--clr-accent-700);\n}\n\n#content {\n  display: grid;\n}\n\n#home-container {\n  max-width: 60%;\n  display: grid;\n  grid-template:\n    "img1 txt1"\n    "txt2 img2"\n    "img3 txt3"\n    "txt4 img4";\n  justify-self: center;\n  align-items: center;\n  background-color: var(--clr-neutral-100);\n}\n\n.header-utility {\n  display: flex;\n  align-items: center;\n  padding-left: 24%;\n  width: 100%;\n  background-color: var(--clr-neutral-100);\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n  font-size: var(--fs-400);\n  font-weight: var(--fw-bold);\n  background-color: var(--clr-accent-700);\n  padding: 0.69em;\n}\n\n.navigation-list {\n  list-style: none;\n}\n\n.navigation-list > a {\n  text-decoration: none;\n  color: var(--clr-neutral-100);\n}\n\n.navigation-list > a:hover {\n  border-bottom: 0.2em solid var(--clr-neutral-100);\n  padding-bottom: 0.62em;\n}\n\n.footer {\n  background-color: var(--clr-primary-400);\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 24%;\n}\n\n.footer > p {\n  color: var(--clr-neutral-400);\n  font-size: var(--fs-400);\n}\n\n.footer > p > a {\n  color: var(--clr-accent-700);\n  text-decoration: none;\n  background: linear-gradient(\n      to right,\n      var(--clr-primary-400),\n      var(--clr-accent-400)\n    ),\n    linear-gradient(\n      to right,\n      var(--clr-primary-400),\n      var(--clr-accent-400),\n      var(--clr-accent-700)\n    );\n  background-size: 100% 3px, 0 3px;\n  background-position: 100% 100%, 0 100%;\n  background-repeat: no-repeat;\n  transition: background-size 400ms;\n}\n\n.footer > p > a:hover {\n  background-size: 0 3px, 100% 3px;\n}\n\n/* Grid areas */\n.img1 {\n  grid-area: img1;\n}\n\n.img2 {\n  grid-area: img2;\n}\n\n.img3 {\n  grid-area: img3;\n}\n\n.img4 {\n  grid-area: img4;\n}\n\n.txt1 {\n  grid-area: txt1;\n}\n\n.txt2 {\n  grid-area: txt2;\n}\n\n.txt3 {\n  grid-area: txt3;\n}\n\n.txt4 {\n  grid-area: txt4;\n}\n\n.text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n\n.txt2 > p:nth-child(2) {\n  font-style: italic;\n}\n\n.txt2 > p:nth-child(3) {\n  font-size: var(--fs-400);\n  font-weight: var(--fw-light);\n}\n',""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},630:(n,e,t)=>{n.exports=t.p+"1036357b9651eff7d3dd.ttf"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"32c3d14c5a7e1028448b.jpg",h=t.p+"9d3c8f691f142013939f.jpg",v=t.p+"2be25b30d6fc89ba410f.jpg",y=t.p+"620315a951b6076a98ef.jpg";function w(n,e,t=1){let r;return"p"===e?r=document.createElement("p"):"h"===e&&(r=document.createElement(`h${t}`)),r.textContent=n,{newTag:r}}function b(n,e,...t){const r=document.createElement("div");void 0!==n&&r.setAttribute("class",n),t.forEach((n=>{r.appendChild(n)})),e.appendChild(r)}const x=document.querySelector("#content"),k=document.createElement("div");k.setAttribute("id","home-container"),function(){const n=new Image(800,500);n.src=g;const e=new Image(800,500);e.src=h;const t=new Image(800,500);t.src=v;const r=new Image(800,500);r.src=y,b("image-container img1",k,n),b("text-container txt1",k,w("It's time for you to try the greatest and finest pizza... that is also properly cooked.","h",1).newTag,w("You know it, Edward's has elite fresh, juicy toppings and ingredients that make our delicious tasting pizza.","p").newTag),b("image-container img2",k,e),b("text-container txt2",k,w("People Don't Just Say Ice Cream, they say \"Edward's Ice Cream\"","h",1).newTag,w("Edward's Vegan Ice Cream are the new standard by which all other vegan ice creams are judged against. Many have tried and failed, but there's nothing like the verified, original Edward's Vegan Ice Cream. Now with a new, limited time only, flavour, the \" Vegan Coconut Macadamia \"","p").newTag,w("Available at participating Edward's® for a limited time only.","p").newTag),b("image-container img3",k,t),b("text-container txt3",k,w("We're bringing the joy to your taste buds","h",1).newTag,w("Do you like a properly cooked pizza with elite ingredients? That was rhetorical… of course you do! Edward's is NOW OPEN!","p").newTag,w("Find us in Cluj-Napoca, Berlin, Napoli, London, Bucharest, Kyiv, Budapest, Zagreb, Sofia and Warsaw.","p").newTag),b("image-container img4",k,r),b("text-container txt4",k,w("Real Food. Real Careers.","h",1).newTag,w("Come and work for Edward's!","p").newTag,w("For 23 years we've been serving up our delicious pizzas and have remained devoted to treating our employees in that same spirit that we cook the food: with care and love. You know what you want, and we'll embrace that when you work here. Flexibility. Fun. The feeling that you can just be you.","p").newTag,w("No zero-contracts. No nonsense. Jobs and careers done right.","p").newTag),x.appendChild(k)}()})()})();