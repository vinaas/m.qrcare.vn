if(!self.define){let e,s={};const f=(f,i)=>(f=new URL(f+".js",i).href,s[f]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=s,document.head.appendChild(e)}else e=f,importScripts(f),s()})).then((()=>{let e=s[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>f(e,n),a={module:{uri:n},exports:r,require:o};s[n]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Framework7Icons-Regular.59a82bd9.woff",revision:"f95fa3fa73a2d4866c038124179ff649"},{url:"assets/Framework7Icons-Regular.f19b8090.woff2",revision:"cc68fd79e4340e4dabc7834c6f7f61fa"},{url:"assets/index.dd178556.css",revision:"70926dc418b4a6e7d5926dd6fdaf53ec"},{url:"assets/index.ffc1a806.js",revision:"34a392f570d4a5f0e934bffc7b1c31ca"},{url:"assets/material-icons.75ea7773.woff",revision:"2fe4e4645bd07e2af2f93df3460d0e0b"},{url:"assets/material-icons.ff253fe1.woff2",revision:"38699e69c673ccadce553bcef499b571"},{url:"assets/vendor.37afc512.js",revision:"0d1e12891b7d6b91c894be785f8b38d3"},{url:"icons/128x128.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"icons/144x144.png",revision:"47efa07843a29aff095e50015e084e85"},{url:"icons/152x152.png",revision:"ab189ff1c3604cbecd2ccc180b6f7c25"},{url:"icons/192x192.png",revision:"9ad7d46019f56396237834ced5038973"},{url:"icons/256x256.png",revision:"28969ffd71e59d0bb2ca642ac8bb0134"},{url:"icons/512x512.png",revision:"aa0c2f038e42624eb7ee396b272ee852"},{url:"icons/apple-touch-icon.png",revision:"4e94b1d1edaea36f052ec015c03ff26b"},{url:"icons/favicon.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"index.html",revision:"d5ef1f668f49ae2e51693cb7555c2632"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
