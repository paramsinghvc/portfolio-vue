"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","5999007b2ad94d4c0211c346847e6095"],["static/carousel/assets/owl.carousel.css","83ef097be10f83e9f999a55c34a04beb"],["static/carousel/assets/owl.carousel.min.css","de0dfbabe627afa1b718d848b6b58e97"],["static/carousel/assets/owl.theme.default.css","26dd7ebd96f611bff70d97bd1eb24ca1"],["static/carousel/assets/owl.theme.default.min.css","275048a23c69c24c6bd3316d9a45882e"],["static/carousel/assets/owl.theme.green.css","8d78112daf1543f9f929c60a5735ce2b"],["static/carousel/assets/owl.theme.green.min.css","95a767285dbb8f91ec5d6482155bd0e3"],["static/carousel/assets/timeline.css","cec5a7867ba38a25568696902475d82d"],["static/carousel/owl.carousel.js","0aa8dbbc9beca33dd418f7b2a3c966b1"],["static/carousel/owl.carousel.min.js","b7b9c97cd68ec336d01a79d5be48c58d"],["static/css/app.0414741948b17beb7abad972542f5ae8.css","0414741948b17beb7abad972542f5ae8"],["static/ihover.css","1fc9cc78b9d1241064bf38f967a660f5"],["static/js/app.f6a9dbcd506ec03efac8.js","ee0d71958824efa5b6d3292f094ab957"],["static/js/manifest.00463b39c74c9e490af3.js","9c92a29cbbcab301871e3d72a4be4b90"],["static/js/vendor.d42a0234bccdf70cb998.js","ce6171d2d186ba0bc144877374309011"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,!1);return[s.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});