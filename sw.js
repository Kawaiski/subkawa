if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-b156841f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"e640ce1f786802b10a33a109017bc3c0"},{url:"index.js",revision:"d21c4ab7852dce81ea8a1c413c96ef54"},{url:"manifest.json",revision:"69129ef947da6a4c08218d4a28b31d90"},{url:"Pin.png",revision:"172901532107190966bf05d8fc8051a5"},{url:"Pingu.png",revision:"e40554636f41348ea69c1d58201a0482"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map