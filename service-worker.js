"use strict";var precacheConfig=[["//mugpic/index.html","11703270722dbd8211f6f251e361a5be"],["//mugpic/static/css/main.296746cf.css","0749e9300f9b86746d55983b324bcc1f"],["//mugpic/static/js/main.fb9db340.js","69f47e2b44a661b5bda10117880acb32"],["//mugpic/static/media/1.9a4fb281.jpg","9a4fb2812c05167d3ead7266a2d1de41"],["//mugpic/static/media/10.d6454382.jpg","d64543827f2aa17f80e3c129d344a210"],["//mugpic/static/media/11.3987e000.jpg","3987e0000081fe67c93ebb5b338ba9b2"],["//mugpic/static/media/12.f3d5e9e3.jpg","f3d5e9e3843deaa634f0f4763240cd7d"],["//mugpic/static/media/2.17eb3d3e.jpg","17eb3d3e35cbab233e77c922deec5b25"],["//mugpic/static/media/3.42117007.jpg","42117007c39b433eb90c57f3979b11fa"],["//mugpic/static/media/4.bc238c12.jpg","bc238c124b8c46c62b24bdadb1b2ed6a"],["//mugpic/static/media/5.d20083ac.jpg","d20083ac78d053f11e4dfd549f84e604"],["//mugpic/static/media/6.2527ad56.jpg","2527ad563c2907b9d5635a916b90ae05"],["//mugpic/static/media/7.afa699c2.jpg","afa699c218dba1845147bbbac0bec323"],["//mugpic/static/media/8.f51435e9.jpg","f51435e95f403f33956d6399aebb986b"],["//mugpic/static/media/9.60048f5b.jpg","60048f5b976f28f06afd8fd4c5c73494"],["//mugpic/static/media/work.764dcea0.jpg","764dcea07ab45d66839f00b859f5281f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="//mugpic/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});