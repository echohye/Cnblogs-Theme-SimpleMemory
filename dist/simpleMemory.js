!function(){var e,s,t,a,l,r,o={434:function(e,s,t){"use strict";function a(e){let s={init:()=>{e.__event.scroll={},e.__event.scroll.handle=[],e.__event.scroll.temScroll=0,e.__event.scroll.docScroll=$(document).scrollTop(),e.__event.scroll.homeScroll=$("#home").offset().top-40,$(window).scroll((()=>{e.__event.scroll.docScroll=$(document).scrollTop(),e.__event.scroll.homeScroll=$("#home").offset().top-40,s.handle.scroll(),e.__event.scroll.temScroll=e.__event.scroll.docScroll})),e.__event.resize={},e.__event.resize.handle=[],$(window).resize((()=>{s.handle.resize()}))},handle:{scroll:()=>{for(let s=0;s<e.__event.scroll.handle.length;s++)e.__event.scroll.handle[s]()},resize:()=>{for(let s=0;s<e.__event.resize.handle.length;s++)e.__event.resize.handle[s]();e.__tools.setDomHomePosition()}}};return s}t.d(s,{Z:function(){return a}})},2865:function(e,s,t){var a={"./article":[8277,3138,7361,269],"./article.js":[8277,3138,7361,269],"./books":[7024,3138,7361,4463],"./books.js":[7024,3138,7361,4463],"./common/comArticle":[8103,3138,7361],"./common/comArticle.js":[8103,3138,7361],"./home":[565,9628],"./home.js":[565,9628],"./links":[1099,3138,7361,9583],"./links.js":[1099,3138,7361,9583]};function l(e){if(!t.o(a,e))return Promise.resolve().then((function(){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=a[e],l=s[0];return Promise.all(s.slice(1).map(t.e)).then((function(){return t(l)}))}l.keys=function(){return Object.keys(a)},l.id=2865,e.exports=l}},c={};function n(e){var s=c[e];if(void 0!==s)return s.exports;var t=c[e]={exports:{}};return o[e].call(t.exports,t,t.exports,n),t.exports}n.m=o,n.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(s,{a:s}),s},s=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var l=Object.create(null);n.r(l);var r={};e=e||[null,s({}),s([]),s(s)];for(var o=2&a&&t;"object"==typeof o&&!~e.indexOf(o);o=s(o))Object.getOwnPropertyNames(o).forEach((function(e){r[e]=function(){return t[e]}}));return r.default=function(){return t},n.d(l,r),l},n.d=function(e,s){for(var t in s)n.o(s,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(s,t){return n.f[t](e,s),s}),[]))},n.u=function(e){return"script/"+({131:"hljs/atelier-savanna-light-css",269:"page-article",336:"hljs/atelier-plateau-dark-css",393:"hljs/darcula-css",604:"hljs/srcery-css",620:"hljs/docco-css",655:"hljs/isbl-editor-light-css",657:"hljs/qtcreator_dark-css",759:"hljs/atelier-estuary-dark-css",1089:"hljs/googlecode-css",1151:"hljs/atelier-cave-light-css",1417:"hljs/atelier-sulphurpool-light-css",1437:"hljs/foundation-css",1480:"dayNight",1504:"hljs/qtcreator_light-css",1589:"hljs/atelier-estuary-light-css",1761:"bannerImages",1936:"hljs/atelier-plateau-light-css",2056:"hljs/stackoverflow-light-css",2080:"hljs/routeros-css",2089:"circleMagic",2122:"hljs/monokai-sublime-css",2144:"hljs/atelier-dune-light-css",2171:"hljs/atom-one-dark-reasonable-css",2251:"hljs/gruvbox-dark-css",2299:"hljs/atelier-savanna-dark-css",2447:"hljs/hybrid-css",2456:"hljs/atelier-seaside-light-css",2519:"hljs/gruvbox-light-css",2565:"hljs/lioshi-css",2600:"hljs/nnfx-css",2785:"hljs/codepen-embed-css",3062:"hljs/gradient-dark-css",3113:"hljs/brown-paper-css",3191:"article-code",3199:"hljs/zenburn-css",3258:"comAfter",3290:"hljs/nord-css",3304:"comBefore",3352:"hljs/atelier-cave-dark-css",3353:"fonticon",3374:"hljs/atom-one-light-css",3429:"hljs/atelier-forest-dark-css",3449:"mouse",3539:"hljs/nnfx-dark-css",3670:"hljs/ascetic-css",3731:"hljs/tomorrow-css",3749:"hljs/color-brewer-css",3774:"hljs/an-old-hope-css",3851:"hljs/tomorrow-night-css",3854:"hljs/atelier-sulphurpool-dark-css",3950:"hljs/gradient-light-css",4033:"hljs/atelier-seaside-dark-css",4104:"hljs/lightfair-css",4149:"hljs/far-css",4168:"hljs/tomorrow-night-blue-css",4321:"hljs/kimbie-light-css",4463:"page-books",4495:"hljs/atelier-forest-light-css",4751:"hljs/xt256-css",4761:"hljs/idea-css",4802:"hljs/mono-blue-css",4824:"hljs/atelier-lakeside-light-css",5064:"hljs/atelier-dune-dark-css",5114:"hljs/magula-css",5191:"hljs/grayscale-css",5206:"hljs/sunburst-css",5360:"hljs/paraiso-dark-css",5518:"hljs/atelier-lakeside-dark-css",5561:"nhBannerAnimation",5706:"hljs/hopscotch-css",5980:"hljs/tomorrow-night-eighties-css",6312:"hljs/ocean-css",6387:"hljs/atelier-heath-light-css",6493:"hljs/isbl-editor-dark-css",6520:"hljs/obsidian-css",6586:"code-hljs",6655:"hljs/a11y-dark-css",6764:"hljs/xcode-css",6865:"hljs/vs-css",7335:"hljs/dracula-css",7361:"page-common-comArticle",7531:"hljs/agate-css",7591:"hljs/tomorrow-night-bright-css",7661:"hljs/github-gist-css",7732:"google-fonts",7898:"hljs/solarized-light-css",8004:"hljs/ir-black-css",8046:"hljs/solarized-dark-css",8132:"particles",8203:"hljs/default-css",8208:"hljs/arta-css",8209:"hljs/monokai-css",8265:"ribbonsEffect",8694:"hljs/school-book-css",8794:"hljs/purebasic-css",8813:"hljs/pojoaque-css",8826:"hljs/atelier-heath-dark-css",8905:"hljs/androidstudio-css",8981:"hljs/kimbie-dark-css",9053:"hljs/stackoverflow-dark-css",9089:"hljs/github-css",9105:"hljs/vs2015-css",9188:"hljs/a11y-light-css",9368:"hljs/night-owl-css",9446:"hljs/arduino-light-css",9550:"hljs/dark-css",9583:"page-links",9624:"hljs/shades-of-purple-css",9628:"page-home",9678:"hljs/railscasts-css",9714:"hljs/gml-css",9769:"hljs/atom-one-dark-css",9914:"hljs/paraiso-light-css",9996:"hljs/rainbow-css"}[e]||e)+"."+{131:"2ba4ffa1",269:"9d062812",336:"7c612a21",393:"9500140b",604:"459b1e8c",620:"bb1eb9c4",655:"d96e2124",657:"2a0e7ecb",759:"ea23d861",1089:"054a59f4",1151:"6a55c0c3",1417:"7af59641",1437:"f6a42350",1480:"ee09f51e",1504:"27216f35",1589:"29b1f6f9",1606:"a5e4c617",1761:"60fc69a1",1936:"6ed5b0e8",2056:"0dcb6cc5",2080:"7de96514",2089:"6527f7fb",2122:"1adbbfa9",2144:"780f12a9",2152:"47b73a13",2171:"9d0e66fc",2251:"6ac3937c",2299:"ac453d61",2447:"f5d5d2ea",2456:"6085c4da",2519:"98e563d8",2565:"5c3fbf13",2600:"3d4e2a09",2785:"049972fc",3062:"cb1ce806",3113:"8babdab1",3138:"ede4a0f5",3191:"037dc25c",3199:"f69500d5",3258:"5ba01bb8",3290:"47f2ba47",3304:"fc4e5b25",3352:"5ce28c46",3353:"e220a3b9",3374:"7f478b83",3429:"b54d020e",3449:"7ab944a4",3539:"d5e9839a",3670:"30d4ec5a",3731:"9acc9644",3749:"6acdcd12",3774:"bdd47ff3",3851:"095a2af3",3854:"67f8f65c",3950:"57843570",4033:"18ea1953",4104:"63baf4a1",4149:"ea105e44",4168:"79e1f7f9",4321:"689d8057",4463:"9bcfe5a1",4495:"9819956b",4751:"0dc95d16",4761:"d8884a09",4802:"ae7706d6",4824:"399ed628",5064:"53c09ebd",5114:"410f659e",5191:"18e05435",5206:"1295b8fd",5360:"20775d6c",5518:"c588764b",5561:"12eb18f0",5706:"b6ea0e95",5980:"9dce318f",6312:"6a7c0080",6387:"a189a58d",6493:"39a6ba39",6520:"8c7cd70c",6586:"2d5f86d7",6655:"8b7bbf20",6764:"f729ba62",6865:"0fdc4231",7335:"176af2d4",7361:"890dc4a0",7531:"9c0a5619",7591:"75a21cc0",7661:"19303d4e",7732:"a24b2371",7869:"905bb080",7898:"f63c91a4",8004:"c3b34a0c",8046:"11d13884",8132:"640008e8",8203:"098f9a08",8208:"16f05035",8209:"49b7bfad",8265:"c586e785",8694:"03d17790",8794:"61cc2824",8813:"e163a407",8826:"e387d627",8905:"02068506",8981:"9e7cd258",9053:"5dc1f035",9089:"b481b171",9105:"2a9b1107",9188:"436ed249",9368:"a9bd1d4a",9446:"a1d59994",9509:"c4bdac7f",9550:"ca5d6418",9583:"5def2bf5",9624:"049d1010",9628:"2ef09970",9678:"48fb961a",9714:"741ecdf7",9769:"a94c1182",9914:"eb56c3d3",9996:"13504345"}[e]+".js"},n.miniCssF=function(e){return"style/"+{131:"hljs/atelier-savanna-light-css",269:"page-article",336:"hljs/atelier-plateau-dark-css",393:"hljs/darcula-css",604:"hljs/srcery-css",620:"hljs/docco-css",655:"hljs/isbl-editor-light-css",657:"hljs/qtcreator_dark-css",759:"hljs/atelier-estuary-dark-css",1089:"hljs/googlecode-css",1151:"hljs/atelier-cave-light-css",1417:"hljs/atelier-sulphurpool-light-css",1437:"hljs/foundation-css",1480:"dayNight",1504:"hljs/qtcreator_light-css",1589:"hljs/atelier-estuary-light-css",1936:"hljs/atelier-plateau-light-css",2056:"hljs/stackoverflow-light-css",2080:"hljs/routeros-css",2122:"hljs/monokai-sublime-css",2144:"hljs/atelier-dune-light-css",2171:"hljs/atom-one-dark-reasonable-css",2251:"hljs/gruvbox-dark-css",2299:"hljs/atelier-savanna-dark-css",2447:"hljs/hybrid-css",2456:"hljs/atelier-seaside-light-css",2519:"hljs/gruvbox-light-css",2565:"hljs/lioshi-css",2600:"hljs/nnfx-css",2785:"hljs/codepen-embed-css",3062:"hljs/gradient-dark-css",3113:"hljs/brown-paper-css",3199:"hljs/zenburn-css",3290:"hljs/nord-css",3304:"comBefore",3352:"hljs/atelier-cave-dark-css",3353:"fonticon",3374:"hljs/atom-one-light-css",3429:"hljs/atelier-forest-dark-css",3449:"mouse",3539:"hljs/nnfx-dark-css",3670:"hljs/ascetic-css",3731:"hljs/tomorrow-css",3749:"hljs/color-brewer-css",3774:"hljs/an-old-hope-css",3851:"hljs/tomorrow-night-css",3854:"hljs/atelier-sulphurpool-dark-css",3950:"hljs/gradient-light-css",4033:"hljs/atelier-seaside-dark-css",4104:"hljs/lightfair-css",4149:"hljs/far-css",4168:"hljs/tomorrow-night-blue-css",4321:"hljs/kimbie-light-css",4463:"page-books",4495:"hljs/atelier-forest-light-css",4751:"hljs/xt256-css",4761:"hljs/idea-css",4802:"hljs/mono-blue-css",4824:"hljs/atelier-lakeside-light-css",5064:"hljs/atelier-dune-dark-css",5114:"hljs/magula-css",5191:"hljs/grayscale-css",5206:"hljs/sunburst-css",5360:"hljs/paraiso-dark-css",5518:"hljs/atelier-lakeside-dark-css",5561:"nhBannerAnimation",5706:"hljs/hopscotch-css",5980:"hljs/tomorrow-night-eighties-css",6312:"hljs/ocean-css",6387:"hljs/atelier-heath-light-css",6493:"hljs/isbl-editor-dark-css",6520:"hljs/obsidian-css",6655:"hljs/a11y-dark-css",6764:"hljs/xcode-css",6865:"hljs/vs-css",7335:"hljs/dracula-css",7361:"page-common-comArticle",7531:"hljs/agate-css",7591:"hljs/tomorrow-night-bright-css",7661:"hljs/github-gist-css",7732:"google-fonts",7898:"hljs/solarized-light-css",8004:"hljs/ir-black-css",8046:"hljs/solarized-dark-css",8132:"particles",8203:"hljs/default-css",8208:"hljs/arta-css",8209:"hljs/monokai-css",8694:"hljs/school-book-css",8794:"hljs/purebasic-css",8813:"hljs/pojoaque-css",8826:"hljs/atelier-heath-dark-css",8905:"hljs/androidstudio-css",8981:"hljs/kimbie-dark-css",9053:"hljs/stackoverflow-dark-css",9089:"hljs/github-css",9105:"hljs/vs2015-css",9188:"hljs/a11y-light-css",9368:"hljs/night-owl-css",9446:"hljs/arduino-light-css",9550:"hljs/dark-css",9583:"page-links",9624:"hljs/shades-of-purple-css",9678:"hljs/railscasts-css",9714:"hljs/gml-css",9769:"hljs/atom-one-dark-css",9914:"hljs/paraiso-light-css",9996:"hljs/rainbow-css"}[e]+"."+{131:"2ba4ffa1",269:"9d062812",336:"7c612a21",393:"9500140b",604:"459b1e8c",620:"bb1eb9c4",655:"d96e2124",657:"2a0e7ecb",759:"ea23d861",1089:"054a59f4",1151:"6a55c0c3",1417:"7af59641",1437:"f6a42350",1480:"ee09f51e",1504:"27216f35",1589:"29b1f6f9",1936:"6ed5b0e8",2056:"0dcb6cc5",2080:"7de96514",2122:"1adbbfa9",2144:"780f12a9",2171:"9d0e66fc",2251:"6ac3937c",2299:"ac453d61",2447:"f5d5d2ea",2456:"6085c4da",2519:"98e563d8",2565:"5c3fbf13",2600:"3d4e2a09",2785:"049972fc",3062:"cb1ce806",3113:"8babdab1",3199:"f69500d5",3290:"47f2ba47",3304:"fc4e5b25",3352:"5ce28c46",3353:"e220a3b9",3374:"7f478b83",3429:"b54d020e",3449:"7ab944a4",3539:"d5e9839a",3670:"30d4ec5a",3731:"9acc9644",3749:"6acdcd12",3774:"bdd47ff3",3851:"095a2af3",3854:"67f8f65c",3950:"57843570",4033:"18ea1953",4104:"63baf4a1",4149:"ea105e44",4168:"79e1f7f9",4321:"689d8057",4463:"9bcfe5a1",4495:"9819956b",4751:"0dc95d16",4761:"d8884a09",4802:"ae7706d6",4824:"399ed628",5064:"53c09ebd",5114:"410f659e",5191:"18e05435",5206:"1295b8fd",5360:"20775d6c",5518:"c588764b",5561:"12eb18f0",5706:"b6ea0e95",5980:"9dce318f",6312:"6a7c0080",6387:"a189a58d",6493:"39a6ba39",6520:"8c7cd70c",6655:"8b7bbf20",6764:"f729ba62",6865:"0fdc4231",7335:"176af2d4",7361:"890dc4a0",7531:"9c0a5619",7591:"75a21cc0",7661:"19303d4e",7732:"a24b2371",7898:"f63c91a4",8004:"c3b34a0c",8046:"11d13884",8132:"640008e8",8203:"098f9a08",8208:"16f05035",8209:"49b7bfad",8694:"03d17790",8794:"61cc2824",8813:"e163a407",8826:"e387d627",8905:"02068506",8981:"9e7cd258",9053:"5dc1f035",9089:"b481b171",9105:"2a9b1107",9188:"436ed249",9368:"a9bd1d4a",9446:"a1d59994",9550:"ca5d6418",9583:"5def2bf5",9624:"049d1010",9678:"48fb961a",9714:"741ecdf7",9769:"a94c1182",9914:"eb56c3d3",9996:"13504345"}[e]+".css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t={},a="Cnblogs-Theme-SimpleMemory:",n.l=function(e,s,l,r){if(t[e])t[e].push(s);else{var o,c;if(void 0!==l)for(var i=document.getElementsByTagName("script"),h=0;h<i.length;h++){var d=i[h];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+l){o=d;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",a+l),o.src=e),t[e]=[s];var f=function(s,a){o.onerror=o.onload=null,clearTimeout(u);var l=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),l&&l.forEach((function(e){return e(a)})),s)return s(a)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var s=n.g.document;if(!e&&s&&(s.currentScript&&(e=s.currentScript.src),!e)){var t=s.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),l=function(e){return new Promise((function(s,t){var a=n.miniCssF(e),l=n.p+a;if(function(e,s){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var l=(o=t[a]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===e||l===s))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){var o;if((l=(o=r[a]).getAttribute("data-href"))===e||l===s)return o}}(a,l))return s();!function(e,s,t,a){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onerror=l.onload=function(r){if(l.onerror=l.onload=null,"load"===r.type)t();else{var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||s,n=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");n.code="CSS_CHUNK_LOAD_FAILED",n.type=o,n.request=c,l.parentNode.removeChild(l),a(n)}},l.href=s,document.head.appendChild(l)}(e,l,s,t)}))},r={179:0},n.f.miniCss=function(e,s){r[e]?s.push(r[e]):0!==r[e]&&{131:1,269:1,336:1,393:1,604:1,620:1,655:1,657:1,759:1,1089:1,1151:1,1417:1,1437:1,1480:1,1504:1,1589:1,1936:1,2056:1,2080:1,2122:1,2144:1,2171:1,2251:1,2299:1,2447:1,2456:1,2519:1,2565:1,2600:1,2785:1,3062:1,3113:1,3199:1,3290:1,3304:1,3352:1,3353:1,3374:1,3429:1,3449:1,3539:1,3670:1,3731:1,3749:1,3774:1,3851:1,3854:1,3950:1,4033:1,4104:1,4149:1,4168:1,4321:1,4463:1,4495:1,4751:1,4761:1,4802:1,4824:1,5064:1,5114:1,5191:1,5206:1,5360:1,5518:1,5561:1,5706:1,5980:1,6312:1,6387:1,6493:1,6520:1,6655:1,6764:1,6865:1,7335:1,7361:1,7531:1,7591:1,7661:1,7732:1,7898:1,8004:1,8046:1,8132:1,8203:1,8208:1,8209:1,8694:1,8794:1,8813:1,8826:1,8905:1,8981:1,9053:1,9089:1,9105:1,9188:1,9368:1,9446:1,9550:1,9583:1,9624:1,9678:1,9714:1,9769:1,9914:1,9996:1}[e]&&s.push(r[e]=l(e).then((function(){r[e]=0}),(function(s){throw delete r[e],s})))},function(){var e={179:0};n.f.j=function(s,t){var a=n.o(e,s)?e[s]:void 0;if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,l){a=e[s]=[t,l]}));t.push(a[2]=l);var r=n.p+n.u(s),o=new Error;n.l(r,(function(t){if(n.o(e,s)&&(0!==(a=e[s])&&(e[s]=void 0),a)){var l=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;o.message="Loading chunk "+s+" failed.\n("+l+": "+r+")",o.name="ChunkLoadError",o.type=l,o.request=r,a[1](o)}}),"chunk-"+s,s)}};var s=function(s,t){var a,l,r=t[0],o=t[1],c=t[2],i=0;if(r.some((function(s){return 0!==e[s]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)c(n)}for(s&&s(t);i<r.length;i++)l=r[i],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0},t=self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}(),function(){"use strict";var e=JSON.parse('{"info":{"name":"","startDate":"2021-01-01","avatar":"","blogIcon":""},"sidebar":{"navList":[],"customList":{},"infoBackground":"","titleMsg":"欢迎访问本博客~","submenu":{"pointsRank":false,"latestPosts":false,"myTags":false,"postsClassify":false,"articleClassify":false,"readRank":false,"recommendRank":false,"latestComment":false,"postsArchive":false,"articleArchive":false,"customList":false}},"banner":{"home":{"background":[],"title":[],"titleSource":"jinrishici"},"article":{"background":[]}},"loading":{"rebound":{"tension":16,"friction":5},"spinner":{"id":"spinner","radius":90,"sides":3,"depth":4,"colors":{"background":"#f0f0f0","stroke":"#272633","base":null,"child":"#272633"},"alwaysForward":true,"restAt":0.5,"renderBase":false}},"fontIconExtend":"","progressBar":{"id":"top-progress-bar","color":"#77b6ff","height":"2px","duration":0.2},"title":{"onblur":"(oﾟvﾟ)ノ Hi","onblurTime":500,"focus":"(*´∇｀*) 欢迎回来！","focusTime":1000},"footer":{"text":{"left":"","right":"","iconFont":{"icon":"icon-xl","color":"red","fontSize":"16px"}},"style":2,"aplayer":{"enable":false,"cdn":{"aplayer":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.js","aplayercss":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.css","meting":"https://cdn.staticfile.org/meting/2.0.1/Meting.min.js"},"options":{"id":"3778678","api":"","server":"netease","type":"playlist","auto":"netease","fixed":"true","mini":"true","autoplay":"false","theme":"#2980b9","loop":"all","order":"random","preload":"auto","volume":"0.7","mutex":"true","lrcType":"0","listFolded":"true","listMaxHeight":"340px","storageName":"cnblogsTheme"}}},"links":{"footer":[],"page":[]},"cnzz":"","rtMenu":{"qrCode":"","reward":{"alipay":"","wechatpay":""},"downScrollDom":""},"switchDayNight":{"enable":true,"nightMode":false,"auto":{"enable":false,"dayHour":5,"nightHour":19}},"animate":{"bannerImages":{"enable":false,"options":{"itemNum":5,"current":0,"sort":1,"time":30000}},"homeBanner":{"enable":false,"options":{"radius":15,"density":0.2,"color":"rgba(255,255,255, .2)","clearOffset":0.3}},"articleTitle":{"enable":true},"articleBanner":{"enable":false},"background":{"enable":false,"options":{"colorSaturation":"60%","colorBrightness":"50%","colorAlpha":0.5,"colorCycleSpeed":5,"verticalPosition":"random","horizontalSpeed":200,"ribbonCount":3,"strokeSize":0,"parallaxAmount":-0.2,"animateSections":true}},"backgroundMouse":{"enable":false},"mouse":{"enable":false,"options":{"size":8,"sizeF":36}},"avatar":{"enable":false}},"code":{"type":"","options":{"hljs":{"theme":"atom-one-dark-reasonable","languages":[]},"maxHeight":"","fontSize":14,"line":false,"macStyle":true}},"articleSuffix":{"imgUrl":"","aboutHtml":"","copyrightHtml":"","supportHtml":""},"articleDirectory":{"position":"right","minBodyWeight":900,"autoWidthScroll":false},"consoleList":[],"bookList":[],"hooks":{}}');var s=n(434);$(document).ready((function(){let t={};t.__config=function(){const s=void 0===window.cnblogsConfig?{}:window.cnblogsConfig;return $.extend(!0,e,s)}(),t.__status=function(){let e={};e.url=window.location.href;let s=e.url.split("/");if(e.user=s[3],e.articleId="",e.homeUrl=[s[0],s[1],s[2],s[3]].join("/"),$("#topics").length){$("#bookListFlg").length?e.pageType="books":$("#linkListFlg").length?e.pageType="links":e.pageType="article";let t=s[s.length-1].split(".");e.articleId=t[0]}else e.pageType="home";return e}(),t.__tools={tempReplacement:(e,s,t)=>{let a=new RegExp("##"+s+"##","g");return e.replace(a,t)},batchTempReplacement:(e,s)=>{let t=e;return $.each(s,(function(e){let a=s[e],l=new RegExp("##"+a[0]+"##","g");t=t.replace(l,a[1])})),t},dynamicLoadingCss:e=>{if(!e||0===e.length)throw new Error('argument "path" is required !');let s=document.getElementsByTagName("head")[0],t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",s.appendChild(t)},dynamicLoadingJs:e=>new Promise(((s,t)=>{$.ajax({type:"GET",dataType:"script",cache:!0,url:e,success:function(e){s(e)},error:function(e){t(e)}})})),htmlFiltrationScript:e=>{let s=new RegExp("<script.*<\/script>","ig");return e.replace(s,"")},clearIntervalTimeId:e=>{null!=e&&window.clearInterval(e)},actScroll:(e,s)=>{$("html,body").stop().animate({scrollTop:e},s)},getScrollPercent:()=>($(window).scrollTop()/($(document).height()-$(window).height())*100).toFixed(0),randomNum:function(e,s){switch(arguments.length){case 1:return parseInt(Math.random()*e+1);case 2:return parseInt(Math.random()*(s-e+1)+e);default:return 0}},setDomHomePosition:()=>{$("#home").css("margin-top",$(".main-header").outerHeight()+"px")},getNowFormatDate:()=>{let e=new Date,s=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return t>=1&&t<=9&&(t="0"+t),a>=0&&a<=9&&(a="0"+a),s+"-"+t+"-"+a},getRunDate:e=>{e=e.toString().split("-");let s=new Date;s.setUTCFullYear(e[0],e[1]-1,e[2]),s.setUTCHours(0,0,0,0);let t=s,a=(new Date).getTime()-t.getTime(),l=a/1e3,r=(Math.floor(l),a/864e5),o=Math.floor(r),c=-24*(o-r),n=Math.floor(c),i=-60*(n-c),h=Math.floor(-60*(n-c));return{daysold:o,hrsold:n,minsold:h,seconds:Math.floor(-60*(h-i)).toString()}},setCookie:(e,s,t)=>{let a=new Date;a.setTime(a.getTime()+1e3*t),document.cookie=e+"="+escape(s)+"; expires="+a.toGMTString()+"; path=/"},getCookie:e=>{let s,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return s=document.cookie.match(t),s?unescape(s[2]):null},randomString:e=>{e=e||32;let s="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",t="";for(let a=0;a<e;a++)t+=s.charAt(Math.floor(48*Math.random()));return t},minToTime:e=>{let s=parseInt(e),t=parseInt(60*(e-s));return t=1===(""+t).length?"0"+t:t,`${s}:${t}`}},t.__timeIds={},t.__event={},""===t.__config.info.name&&(t.__config.info.name=t.__status.user),n(2865)(`./${t.__status.pageType}`).then((e=>{const a=e.default;Promise.all([n.e(9509),n.e(3304)]).then(n.bind(n,7157)).then((e=>{(0,e.default)(t),a(t),n.e(3258).then(n.bind(n,9450)).then((e=>{(0,e.default)(t),t.__tools.setDomHomePosition(),(0,s.Z)(t).handle.scroll(),(0,s.Z)(t).handle.resize()}))}))}))}))}()}();