(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(630),t.b),l=new URL(t(570),t.b),p=i()(o()),u=s()(d),f=s()(l);p.push([n.id,':root {\n  --clr-primary-400: hsl(210, 11%, 15%);\n\n  --clr-neutral-100: hsl(210, 17%, 98%);\n  --clr-neutral-400: hsl(210, 17%, 93%);\n\n  --clr-accent-400: hsl(210, 10%, 23%);\n  --clr-accent-700: hsl(38, 100%, 50%);\n\n  --ff-primary: "Space Grotesk", -apple-system, BlinkMacSystemFont, avenir next,\n    avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,\n    arial, sans-serif;\n\n  --ff-body: var(--ff-primary);\n  --ff-heading: var(--ff-primary);\n\n  --fw-light: 300;\n  --fw-regular: 400;\n  --fw-bold: 700;\n\n  --fs-200: 0.5rem;\n  --fs-300: 0.75rem;\n  --fs-350: 0.875rem;\n  --fs-400: 1rem;\n  --fs-500: 1.25rem;\n  --fs-600: 1.5rem;\n  --fs-700: 1.75rem;\n  --fs-800: 2rem;\n  --fs-900: 2.25rem;\n  --fs-1000: 2.5rem;\n  --fs-1100: 2.75rem;\n  --fs-1200: 3rem;\n  --fs-1600: 4rem;\n}\n\n@font-face {\n  font-family: "Space Grotesk";\n  src: url('+u+') format("truetype");\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: var(--ff-primary);\n}\n\n/* Set core body defaults */\nbody {\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n  background-color: var(--clr-neutral-400);\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture,\nsvg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\n\nh1 {\n  font-size: var(--fs-1200);\n  font-weight: var(--fw-bold);\n  color: var(--clr-accent-700);\n  max-width: 75%;\n  line-height: 3.6rem;\n}\n\nh3 {\n  font-size: var(--fs-700);\n  font-weight: var(--fw-bold);\n}\n\np {\n  font-size: var(--fs-500);\n  color: var(--clr-primary-400);\n  max-width: 75%;\n}\n\n#header-title {\n  font-weight: var(--fw-regular);\n  font-size: var(--fs-500);\n  color: var(--clr-primary-400);\n  -webkit-text-stroke: 0.0112em var(--clr-accent-700);\n}\n\n#content {\n  display: grid;\n}\n\n#home-container {\n  max-width: 60%;\n  display: grid;\n  grid-template:\n    "img1 txt1"\n    "txt2 img2"\n    "img3 txt3"\n    "txt4 img4";\n  justify-self: center;\n  align-items: center;\n  background-color: var(--clr-neutral-100);\n}\n\n.header-utility {\n  display: flex;\n  align-items: center;\n  padding-left: 24%;\n  width: 100%;\n  background-color: var(--clr-neutral-100);\n}\n\n.header-utility > a {\n  text-decoration: none;\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n  font-size: var(--fs-400);\n  font-weight: var(--fw-bold);\n  background-color: var(--clr-accent-700);\n  padding: 0.69em;\n}\n\n.navigation-list {\n  list-style: none;\n}\n\n.navigation-list > a {\n  text-decoration: none;\n  color: var(--clr-neutral-100);\n}\n\n.navigation-list > a:hover {\n  border-bottom: 0.2em solid var(--clr-neutral-100);\n  padding-bottom: 0.62em;\n}\n\n.footer {\n  background-color: var(--clr-primary-400);\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 24%;\n}\n\n.footer-fixed {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.footer > p {\n  color: var(--clr-neutral-400);\n  font-size: var(--fs-400);\n}\n\n.footer > p > a {\n  color: var(--clr-accent-700);\n  text-decoration: none;\n  background: linear-gradient(\n      to right,\n      var(--clr-primary-400),\n      var(--clr-accent-400)\n    ),\n    linear-gradient(\n      to right,\n      var(--clr-primary-400),\n      var(--clr-accent-400),\n      var(--clr-accent-700)\n    );\n  background-size: 100% 3px, 0 3px;\n  background-position: 100% 100%, 0 100%;\n  background-repeat: no-repeat;\n  transition: background-size 400ms;\n}\n\n.footer > p > a:hover {\n  background-size: 0 3px, 100% 3px;\n}\n\n/* Grid areas */\n.img1 {\n  grid-area: img1;\n}\n\n.img2 {\n  grid-area: img2;\n}\n\n.img3 {\n  grid-area: img3;\n}\n\n.img4 {\n  grid-area: img4;\n}\n\n.txt1 {\n  grid-area: txt1;\n}\n\n.txt2 {\n  grid-area: txt2;\n}\n\n.txt3 {\n  grid-area: txt3;\n}\n\n.txt4 {\n  grid-area: txt4;\n}\n\n.text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n\n.txt2 > p:nth-child(2) {\n  font-style: italic;\n}\n\n.txt2 > p:nth-child(3) {\n  font-size: var(--fs-400);\n  font-weight: var(--fw-light);\n}\n\n#food-menu-container {\n  width: 60%;\n  display: grid;\n  justify-self: center;\n  gap: 2em;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n.food-menu-header {\n  justify-self: start;\n  border-bottom: 1px solid var(--clr-accent-400);\n}\n\n.food-menu-page-content {\n  display: grid;\n  gap: 1em;\n  grid-template: "menu-category menu-content menu-content menu-content";\n  grid-template-columns: 1.1fr 3fr;\n}\n\n.food-category {\n  display: flex;\n  align-items: center;\n  border-top: 1px solid var(--clr-accent-400);\n  grid-area: menu-category;\n  padding: 2em;\n  min-height: 8em;\n  gap: 2em;\n}\n\n.food-category:hover {\n  color: var(--clr-accent-700);\n}\n\n.food-menu-content {\n  grid-area: menu-content;\n}\n\n.food-menu-content-image {\n  background-image: url('+f+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 270px;\n}\n\n.food-menu-content-text {\n  display: flex;\n  min-height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.food-menu-content-text > h1 {\n  color: var(--clr-neutral-100);\n  font-size: var(--fs-1600);\n  font-weight: var(--fw-bold);\n  letter-spacing: 0.04em;\n  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,\n    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),\n    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),\n    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),\n    0 20px 20px rgba(0, 0, 0, 0.15);\n}\n\n.item-wrapper,\n.item-wrapper:visited {\n  text-decoration: none;\n  color: var(--clr-primary-400);\n}\n",""]);const m=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},630:(n,e,t)=>{n.exports=t.p+"1036357b9651eff7d3dd.ttf"},570:(n,e,t)=>{n.exports=t.p+"dc295ca535654ed47853.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{t.d(r,{K:()=>P,o:()=>q});var n=t(379),e=t.n(n),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),f=t.n(u),m=t(426),g={};function h(n){n.addEventListener("click",(()=>{q(),P(n.id)}))}g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const v=t.p+"32c3d14c5a7e1028448b.jpg",y=t.p+"9d3c8f691f142013939f.jpg",b=t.p+"2be25b30d6fc89ba410f.jpg",w=t.p+"620315a951b6076a98ef.jpg";function x(n,e,t=1){let r;return"p"===e?r=document.createElement("p"):"h"===e&&(r=document.createElement(`h${t}`)),r.textContent=n,{newTag:r}}function C(n,e,...t){const r=document.createElement("div");void 0!==n&&r.setAttribute("class",n),t.forEach((n=>{r.appendChild(n)})),e.appendChild(r)}function k(n,e,t){const r=document.createElement("a");return r.setAttribute("class",n),r.setAttribute("href",e),r.setAttribute("title",t),{newAnchor:r}}const T=document.querySelector("#content"),E=document.createElement("div");function z(){document.querySelector(".footer").classList.remove("footer-fixed");const n=new Image(800,500);n.src=v;const e=new Image(800,500);e.src=y;const t=new Image(800,500);t.src=b;const r=new Image(800,500);r.src=w,C("image-container img1",E,n),C("text-container txt1",E,x("It's time for you to try the greatest and finest pizza... that is also properly cooked.","h",1).newTag,x("You know it, Edward's has elite fresh, juicy toppings and ingredients that make our delicious tasting pizza.","p").newTag),C("image-container img2",E,e),C("text-container txt2",E,x("People Don't Just Say Ice Cream, they say \"Edward's Ice Cream\"","h",1).newTag,x("Edward's Vegan Ice Cream are the new standard by which all other vegan ice creams are judged against. Many have tried and failed, but there's nothing like the verified, original Edward's Vegan Ice Cream. Now with a new, limited time only, flavour, the \" Vegan Coconut Macadamia \"","p").newTag,x("Available at participating Edward's® for a limited time only.","p").newTag),C("image-container img3",E,t),C("text-container txt3",E,x("We're bringing the joy to your taste buds","h",1).newTag,x("Do you like a properly cooked pizza with elite ingredients? That was rhetorical… of course you do! Edward's is NOW OPEN!","p").newTag,x("Find us in Cluj-Napoca, Berlin, Napoli, London, Bucharest, Kyiv, Budapest, Zagreb, Sofia and Warsaw.","p").newTag),C("image-container img4",E,r),C("text-container txt4",E,x("Real Food. Real Careers.","h",1).newTag,x("Come and work for Edward's!","p").newTag,x("For 23 years we've been serving up our delicious pizzas and have remained devoted to treating our employees in that same spirit that we cook the food: with care and love. You know what you want, and we'll embrace that when you work here. Flexibility. Fun. The feeling that you can just be you.","p").newTag,x("No zero-contracts. No nonsense. Jobs and careers done right.","p").newTag),T.appendChild(E)}E.setAttribute("id","home-container");const S=t.p+"920a82265940142c60c1.png",j=t.p+"f8c79f616f7ad81e59fb.png",A=t.p+"83e6d9e623d393f9db45.png",I=document.querySelector("#content"),M=document.createElement("div");M.setAttribute("id","food-menu-container");const N=document.querySelector("#content"),L=document.querySelector("#navigation-home"),F=document.querySelector("#navigation-food-menu"),R=document.querySelector("#navigation-jobs");function q(){for(;E.firstChild;)E.removeChild(E.firstChild);for(;M.firstChild;)M.removeChild(M.firstChild);for(;N.firstChild;)N.removeChild(N.firstChild)}function P(n){n===L.id?z():n===F.id?function(){document.querySelector(".footer").classList.add("footer-fixed");const n=document.createElement("div");n.setAttribute("class","food-menu-page-content");const e=document.createElement("div");e.setAttribute("class","food-menu-categories");const t=document.createElement("div");t.setAttribute("class","food-menu-content");const r=document.createElement("div");r.setAttribute("class","food-menu-content-image");const o=new Image(100,100);o.src=S;const a=new Image(100,100);a.src=j;const i=new Image(100,100);i.src=A;const c="Coffee & Beverages";C("food-menu-header",M,x("Order Menu","h",3).newTag),M.appendChild(n),n.appendChild(e);const s=k("item-wrapper item1","#","Pizzas");C("food-category",e.appendChild(s.newAnchor),o,x("Pizzas","h",3).newTag);const d=k("item-wrapper item2","#","Deserts");C("food-category",e.appendChild(d.newAnchor),a,x("Deserts","h",3).newTag);const l=k("item-wrapper item3","#",`${c}`);C("food-category",e.appendChild(l.newAnchor),i,x(c,"h",3).newTag),n.appendChild(t),t.appendChild(r),C("food-menu-content-text",r,x("WE BELIEVE IN QUALITY","h",1).newTag),I.appendChild(M)}():n===R.id&&(alert("Find jobs page not ready yet, redirecting to homepage..."),z())}h(L),h(F),h(R),z()})()})();