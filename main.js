(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(630),t.b),p=new URL(t(570),t.b),l=i()(o()),m=s()(d),f=s()(p);l.push([e.id,':root {\n  --clr-primary-400: hsl(210, 11%, 15%);\n\n  --clr-neutral-100: hsl(210, 17%, 98%);\n  --clr-neutral-400: hsl(210, 17%, 93%);\n\n  --clr-accent-400: hsl(210, 10%, 23%);\n  --clr-accent-700: hsl(38, 100%, 50%);\n\n  --ff-primary: "Space Grotesk", -apple-system, BlinkMacSystemFont, avenir next,\n    avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,\n    arial, sans-serif;\n\n  --ff-body: var(--ff-primary);\n  --ff-heading: var(--ff-primary);\n\n  --fw-light: 300;\n  --fw-regular: 400;\n  --fw-bold: 700;\n\n  --fs-200: 0.5rem;\n  --fs-300: 0.75rem;\n  --fs-350: 0.875rem;\n  --fs-400: 1rem;\n  --fs-500: 1.25rem;\n  --fs-600: 1.5rem;\n  --fs-650: 1.6rem;\n  --fs-700: 1.75rem;\n  --fs-800: 2rem;\n  --fs-900: 2.25rem;\n  --fs-1000: 2.5rem;\n  --fs-1100: 2.75rem;\n  --fs-1200: 3rem;\n  --fs-1600: 4rem;\n}\n\n@font-face {\n  font-family: "Space Grotesk";\n  src: url('+m+') format("truetype");\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: var(--ff-primary);\n}\n\n/* Set core body defaults */\nbody {\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n  background-color: var(--clr-neutral-400);\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture,\nsvg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\n\nh1 {\n  font-size: var(--fs-1200);\n  font-weight: var(--fw-bold);\n  color: var(--clr-accent-700);\n  max-width: 75%;\n  line-height: 3.6rem;\n}\n\nh3 {\n  font-size: var(--fs-700);\n  font-weight: var(--fw-bold);\n}\n\np {\n  font-size: var(--fs-500);\n  color: var(--clr-primary-400);\n  max-width: 75%;\n}\n\n#header-title {\n  font-weight: var(--fw-regular);\n  font-size: var(--fs-500);\n  color: var(--clr-primary-400);\n  -webkit-text-stroke: 0.0112em var(--clr-accent-700);\n}\n\n#content {\n  display: grid;\n}\n\n#home-container {\n  max-width: 60%;\n  display: grid;\n  grid-template:\n    "img1 txt1"\n    "txt2 img2"\n    "img3 txt3"\n    "txt4 img4";\n  justify-self: center;\n  align-items: center;\n  background-color: var(--clr-neutral-100);\n}\n\n.header-utility {\n  display: flex;\n  align-items: center;\n  padding-left: 24%;\n  width: 100%;\n  background-color: var(--clr-neutral-100);\n}\n\n.header-utility > a {\n  text-decoration: none;\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n  font-size: var(--fs-400);\n  font-weight: var(--fw-bold);\n  background-color: var(--clr-accent-700);\n  padding: 0.69em;\n}\n\n.navigation-list {\n  list-style: none;\n}\n\n.navigation-list > a {\n  text-decoration: none;\n  color: var(--clr-neutral-100);\n}\n\n.navigation-list > a:hover {\n  border-bottom: 0.2em solid var(--clr-neutral-100);\n  padding-bottom: 0.62em;\n}\n\n.footer {\n  background-color: var(--clr-primary-400);\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 24%;\n}\n\n.footer-fixed {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.footer > p {\n  color: var(--clr-neutral-400);\n  font-size: var(--fs-400);\n}\n\n.footer > p > a {\n  color: var(--clr-accent-700);\n  text-decoration: none;\n  background: linear-gradient(\n      to right,\n      var(--clr-primary-400),\n      var(--clr-accent-400)\n    ),\n    linear-gradient(\n      to right,\n      var(--clr-primary-400),\n      var(--clr-accent-400),\n      var(--clr-accent-700)\n    );\n  background-size: 100% 3px, 0 3px;\n  background-position: 100% 100%, 0 100%;\n  background-repeat: no-repeat;\n  transition: background-size 400ms;\n}\n\n.footer > p > a:hover {\n  background-size: 0 3px, 100% 3px;\n}\n\n/* Grid areas */\n.img1 {\n  grid-area: img1;\n}\n\n.img2 {\n  grid-area: img2;\n}\n\n.img3 {\n  grid-area: img3;\n}\n\n.img4 {\n  grid-area: img4;\n}\n\n.txt1 {\n  grid-area: txt1;\n}\n\n.txt2 {\n  grid-area: txt2;\n}\n\n.txt3 {\n  grid-area: txt3;\n}\n\n.txt4 {\n  grid-area: txt4;\n}\n\n.text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n\n.txt2 > p:nth-child(2) {\n  font-style: italic;\n}\n\n.txt2 > p:nth-child(3) {\n  font-size: var(--fs-400);\n  font-weight: var(--fw-light);\n}\n\n#food-menu-container {\n  width: 60%;\n  display: grid;\n  justify-self: center;\n  gap: 2em;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n.food-menu-header {\n  justify-self: start;\n  border-bottom: 1px solid var(--clr-accent-400);\n}\n\n.food-menu-page-content {\n  display: grid;\n  gap: 1em;\n  grid-template: "menu-category menu-content menu-content menu-content";\n  grid-template-columns: 1.1fr 3fr;\n}\n\n.food-category {\n  display: flex;\n  align-items: center;\n  border-top: 1px solid var(--clr-accent-400);\n  grid-area: menu-category;\n  padding: 2em;\n  min-height: 8em;\n  gap: 2em;\n}\n\n.food-category:hover,\n.food-content-items:hover {\n  color: var(--clr-accent-700);\n}\n\n.food-menu-content {\n  grid-area: menu-content;\n}\n\n.food-menu-content-image {\n  background-image: url('+f+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 270px;\n}\n\n.food-menu-content-text {\n  display: flex;\n  min-height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.food-menu-content-text > h1 {\n  color: var(--clr-neutral-100);\n  font-size: var(--fs-1600);\n  font-weight: var(--fw-bold);\n  letter-spacing: 0.04em;\n  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,\n    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),\n    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),\n    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),\n    0 20px 20px rgba(0, 0, 0, 0.15);\n}\n\n.item-wrapper,\n.item-wrapper:visited {\n  text-decoration: none;\n  color: var(--clr-primary-400);\n}\n\n.food-menu-content-items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(273px, 1fr));\n  gap: 8em 2em;\n  padding: 3em;\n}\n\n.food-content-items {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1em;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var m=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(f);else{var u=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},630:(e,n,t)=>{e.exports=t.p+"1036357b9651eff7d3dd.ttf"},570:(e,n,t)=>{e.exports=t.p+"dc295ca535654ed47853.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{t.d(r,{K:()=>re,o:()=>te});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),p=t(216),l=t.n(p),m=t(589),f=t.n(m),u=t(426),g={};function h(e,n,t=1){let r;return"p"===n?r=document.createElement("p"):"h"===n&&(r=document.createElement(`h${t}`)),r.textContent=e,{newTag:r}}function w(e,n,...t){const r=document.createElement("div");void 0!==e&&r.setAttribute("class",e),t.forEach((e=>{r.appendChild(e)})),n.appendChild(r)}function v(e,n,t){const r=document.createElement("a");return r.setAttribute("class",e),r.setAttribute("href",n),r.setAttribute("title",t),{newAnchor:r}}g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),n()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const b=t.p+"920a82265940142c60c1.png",y=t.p+"f8c79f616f7ad81e59fb.png",x=t.p+"83e6d9e623d393f9db45.png",C=t.p+"ed765c1e8fc940b6944c.png",z=t.p+"7c36224b331f25466f85.png",T=t.p+"4ee8d31551c6e239a3d6.png",k=t.p+"4eb4b29866a129454f9b.png",A=t.p+"25df08ab703e14e28e40.png",I=t.p+"6d58b57039baf7c2c31b.png",S=t.p+"e5200887238ed56881d6.png",E=t.p+"d687d127e2bcac1a9256.png",j=t.p+"4a2db9e5294f3780aea9.png",P=t.p+"3882037df47ac7ac209a.png",M=t.p+"c3d2c4984a349acc6665.png",q=t.p+"babad8a1dc1b606bf661.png",L=t.p+"915e681f3121c402a826.png",F=t.p+"9ae440d9f32dc8acd5ba.png",N=t.p+"ae14e7b7089ceca831e2.png",B=t.p+"9704eb7c311b3756e26e.png",R=t.p+"5568b560352a4d4d7f86.png",O=t.p+"3dbc7e943c75f2495010.png",W=document.querySelector("#content"),$=document.createElement("div");function U(){document.querySelector(".footer").classList.add("footer-fixed");const e=document.createElement("div");e.setAttribute("class","food-menu-page-content");const n=document.createElement("div");n.setAttribute("class","food-menu-categories");const t=document.createElement("div");t.setAttribute("class","food-menu-content");const r=document.createElement("div");r.setAttribute("class","food-menu-content-image");const o=new Image(100,100);o.src=b;const a=new Image(100,100);a.src=y;const i=new Image(100,100);i.src=x;const c="Coffee & Beverages";w("food-menu-header",$,h("Order Menu","h",3).newTag),$.appendChild(e),e.appendChild(n);const s=v("item-wrapper item1","javascript:;","Pizzas");w("food-category",n.appendChild(s.newAnchor),o,h("Pizzas","h",3).newTag);const d=v("item-wrapper item2","javascript:;","Desserts");w("food-category",n.appendChild(d.newAnchor),a,h("Desserts","h",3).newTag);const p=v("item-wrapper item3","javascript:;",`${c}`);w("food-category",n.appendChild(p.newAnchor),i,h(c,"h",3).newTag),e.appendChild(t),t.appendChild(r),w("food-menu-content-text",r,h("WE BELIEVE IN QUALITY","h",1).newTag),W.appendChild($);const l=document.querySelector(".item-wrapper.item1"),m=document.querySelector(".item-wrapper.item2"),f=document.querySelector(".item-wrapper.item3");Z(l),Z(m),Z(f)}function D(e){e.addEventListener("click",(()=>{te(),re(e.id)}))}function Z(e){e.addEventListener("click",(()=>{var n;"item-wrapper item1"===(n=e.className)?function(e=!0){!0===e&&U(),document.querySelector(".food-menu-header").firstChild.textContent="Pizzas";const n=document.querySelector(".food-menu-content");n.removeChild(n.firstChild);const t=document.createElement("div");t.setAttribute("class","food-menu-content-items");const r=new Image(273,200);r.src=b;const o=new Image(273,200);o.src=C;const a=new Image(273,200);a.src=z;const i=new Image(273,200);i.src=T;const c=new Image(273,200);c.src=k;const s="Pizza Prosciutto e Funghi";n.appendChild(t);const d=v("item-wrapper pizzas-item1","#","Pizza Margherita");w("food-content-items",t.appendChild(d.newAnchor),r,h("Pizza Margherita","h",3).newTag);const p=v("item-wrapper pizzas-item2","#","Pizza Pepperoni");w("food-content-items",t.appendChild(p.newAnchor),o,h("Pizza Pepperoni","h",3).newTag);const l=v("item-wrapper pizzas-item3","#","Pizza Capricciosa");w("food-content-items",t.appendChild(l.newAnchor),a,h("Pizza Capricciosa","h",3).newTag);const m=v("item-wrapper pizzas-item4","#",`${s}`);w("food-content-items",t.appendChild(m.newAnchor),i,h(s,"h",3).newTag);const f=v("item-wrapper pizzas-item5","#","Pizza Calzone");w("food-content-items",t.appendChild(f.newAnchor),c,h("Pizza Calzone","h",3).newTag)}(!1):"item-wrapper item2"===n?function(e=!0){!0===e&&U(),document.querySelector(".food-menu-header").firstChild.textContent="Deserts";const n=document.querySelector(".food-menu-content");n.removeChild(n.firstChild);const t=document.createElement("div");t.setAttribute("class","food-menu-content-items");const r=new Image(273,200);r.src=A;const o=new Image(273,200);o.src=I;const a=new Image(273,200);a.src=S;const i=new Image(273,200);i.src=E;const c="Vegan Macadamia Ice Cream";n.appendChild(t);const s=v("item-wrapper desserts-item1","#",`${c}`);w("food-content-items",t.appendChild(s.newAnchor),r,h(c,"h",3).newTag);const d=v("item-wrapper desserts-item2","#","Banana Split");w("food-content-items",t.appendChild(d.newAnchor),o,h("Banana Split","h",3).newTag);const p=v("item-wrapper desserts-item3","#","Cheesecake");w("food-content-items",t.appendChild(p.newAnchor),a,h("Cheesecake","h",3).newTag);const l=v("item-wrapper desserts-item4","#","Tiramisu");w("food-content-items",t.appendChild(l.newAnchor),i,h("Tiramisu","h",3).newTag)}(!1):"item-wrapper item3"===n&&function(e=!0){!0===e&&U(),document.querySelector(".food-menu-header").firstChild.textContent="Coffee & Beverages";const n=document.querySelector(".food-menu-content");n.removeChild(n.firstChild);const t=document.createElement("div");t.setAttribute("class","food-menu-content-items");const r=new Image(273,200);r.src=j;const o=new Image(273,200);o.src=P;const a=new Image(273,200);a.src=M;const i=new Image(273,200);i.src=q;const c=new Image(273,200);c.src=L;const s=new Image(273,200);s.src=F;const d=new Image(273,200);d.src=N;const p=new Image(273,200);p.src=B;const l=new Image(273,200);l.src=R;const m=new Image(273,200);m.src=O,n.appendChild(t);const f=v("item-wrapper drinks-item1","#","Cappuccino");w("food-content-items",t.appendChild(f.newAnchor),r,h("Cappuccino","h",3).newTag);const u=v("item-wrapper drinks-item2","#","Espresso");w("food-content-items",t.appendChild(u.newAnchor),o,h("Espresso","h",3).newTag);const g=v("item-wrapper drinks-item3","#","Frappe");w("food-content-items",t.appendChild(g.newAnchor),a,h("Frappe","h",3).newTag);const b=v("item-wrapper drinks-item4","#","Latte Macchiato");w("food-content-items",t.appendChild(b.newAnchor),i,h("Latte Macchiato","h",3).newTag);const y=v("item-wrapper drinks-item5","#","Still Water");w("food-content-items",t.appendChild(y.newAnchor),c,h("Still Water","h",3).newTag);const x=v("item-wrapper drinks-item6","#","Mineral Water");w("food-content-items",t.appendChild(x.newAnchor),s,h("Mineral Water","h",3).newTag);const C=v("item-wrapper drinks-item7","#","Pepsi");w("food-content-items",t.appendChild(C.newAnchor),d,h("Pepsi","h",3).newTag);const z=v("item-wrapper drinks-item8","#","Pepsi Twist");w("food-content-items",t.appendChild(z.newAnchor),p,h("Pepsi Twist","h",3).newTag);const T=v("item-wrapper drinks-item9","#","Fanta Orange");w("food-content-items",t.appendChild(T.newAnchor),l,h("Fanta Orange","h",3).newTag);const k=v("item-wrapper drinks-item10","#","Lipton Lemon");w("food-content-items",t.appendChild(k.newAnchor),m,h("Lipton Lemon","h",3).newTag)}(!1)}))}$.setAttribute("id","food-menu-container");const V=t.p+"32c3d14c5a7e1028448b.jpg",_=t.p+"9d3c8f691f142013939f.jpg",G=t.p+"2be25b30d6fc89ba410f.jpg",J=t.p+"620315a951b6076a98ef.jpg",Y=document.querySelector("#content"),H=document.createElement("div");function K(){document.querySelector(".footer").classList.remove("footer-fixed");const e=new Image(800,500);e.src=V;const n=new Image(800,500);n.src=_;const t=new Image(800,500);t.src=G;const r=new Image(800,500);r.src=J,w("image-container img1",H,e),w("text-container txt1",H,h("It's time for you to try the greatest and finest pizza... that is also properly cooked.","h",1).newTag,h("You know it, Edward's has elite fresh, juicy toppings and ingredients that make our delicious tasting pizza.","p").newTag),w("image-container img2",H,n),w("text-container txt2",H,h("People Don't Just Say Ice Cream, they say \"Edward's Ice Cream\"","h",1).newTag,h("Edward's Vegan Ice Cream are the new standard by which all other vegan ice creams are judged against. Many have tried and failed, but there's nothing like the verified, original Edward's Vegan Ice Cream. Now with a new, limited time only, flavour, the \" Vegan Coconut Macadamia \"","p").newTag,h("Available at participating Edward's® for a limited time only.","p").newTag),w("image-container img3",H,t),w("text-container txt3",H,h("We're bringing the joy to your taste buds","h",1).newTag,h("Do you like a properly cooked pizza with elite ingredients? That was rhetorical… of course you do! Edward's is NOW OPEN!","p").newTag,h("Find us in Cluj-Napoca, Berlin, Napoli, London, Bucharest, Kyiv, Budapest, Zagreb, Sofia and Warsaw.","p").newTag),w("image-container img4",H,r),w("text-container txt4",H,h("Real Food. Real Careers.","h",1).newTag,h("Come and work for Edward's!","p").newTag,h("For 23 years we've been serving up our delicious pizzas and have remained devoted to treating our employees in that same spirit that we cook the food: with care and love. You know what you want, and we'll embrace that when you work here. Flexibility. Fun. The feeling that you can just be you.","p").newTag,h("No zero-contracts. No nonsense. Jobs and careers done right.","p").newTag),Y.appendChild(H)}H.setAttribute("id","home-container");const Q=document.querySelector("#content"),X=document.querySelector("#navigation-home"),ee=document.querySelector("#navigation-food-menu"),ne=document.querySelector("#navigation-jobs");function te(){for(;H.firstChild;)H.removeChild(H.firstChild);for(;$.firstChild;)$.removeChild($.firstChild);for(;Q.firstChild;)Q.removeChild(Q.firstChild)}function re(e){e===X.id?K():e===ee.id?U():e===ne.id&&(alert("Find jobs page not ready yet, redirecting to homepage..."),K())}D(X),D(ee),D(ne),K()})()})();