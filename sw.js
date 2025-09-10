/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9637eeee'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/1egkTOON.js",
    "revision": null
  }, {
    "url": "assets/1vibd-6n.js",
    "revision": null
  }, {
    "url": "assets/2FXKDZK1.js",
    "revision": null
  }, {
    "url": "assets/2KkcAtXU.js",
    "revision": null
  }, {
    "url": "assets/7PLXKNTc.js",
    "revision": null
  }, {
    "url": "assets/8dvoekUZ.js",
    "revision": null
  }, {
    "url": "assets/a_ZzCJ4C.js",
    "revision": null
  }, {
    "url": "assets/app-C1_ZzvLw.js",
    "revision": null
  }, {
    "url": "assets/B1uQQjKv.js",
    "revision": null
  }, {
    "url": "assets/B3zRuuNz.js",
    "revision": null
  }, {
    "url": "assets/B5KWFs3u.js",
    "revision": null
  }, {
    "url": "assets/B6q-0wKG.js",
    "revision": null
  }, {
    "url": "assets/B96V2lXS.js",
    "revision": null
  }, {
    "url": "assets/B9H6tN3o.js",
    "revision": null
  }, {
    "url": "assets/Ba9SoPmY.js",
    "revision": null
  }, {
    "url": "assets/BB4CkLsQ.js",
    "revision": null
  }, {
    "url": "assets/BCjs7rkt.js",
    "revision": null
  }, {
    "url": "assets/BE3Y05dy.js",
    "revision": null
  }, {
    "url": "assets/Bgh3bzPI.css",
    "revision": null
  }, {
    "url": "assets/BhCKoogL.js",
    "revision": null
  }, {
    "url": "assets/BiPLStuV.js",
    "revision": null
  }, {
    "url": "assets/BK-erF7d.js",
    "revision": null
  }, {
    "url": "assets/Bmgq4H7t.js",
    "revision": null
  }, {
    "url": "assets/BmtFjkCY.js",
    "revision": null
  }, {
    "url": "assets/BnTvqoih.js",
    "revision": null
  }, {
    "url": "assets/BP6lKote.css",
    "revision": null
  }, {
    "url": "assets/BQsT0d9p.js",
    "revision": null
  }, {
    "url": "assets/BXEnikUv.js",
    "revision": null
  }, {
    "url": "assets/By65-G2J.js",
    "revision": null
  }, {
    "url": "assets/C_s1CQg6.js",
    "revision": null
  }, {
    "url": "assets/C0mrKOBZ.js",
    "revision": null
  }, {
    "url": "assets/C8ukEo7o.js",
    "revision": null
  }, {
    "url": "assets/Cbrl_lE7.js",
    "revision": null
  }, {
    "url": "assets/CBYJ2E_i.js",
    "revision": null
  }, {
    "url": "assets/CFymTKvV.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CKfazeXf.css",
    "revision": null
  }, {
    "url": "assets/CKStvPHB.js",
    "revision": null
  }, {
    "url": "assets/ClzGAjw7.js",
    "revision": null
  }, {
    "url": "assets/CMN69aLB.js",
    "revision": null
  }, {
    "url": "assets/CMR4RbWk.js",
    "revision": null
  }, {
    "url": "assets/cover-mh0L3JCC.jpg",
    "revision": null
  }, {
    "url": "assets/CqHvsrrH.css",
    "revision": null
  }, {
    "url": "assets/CuCdzXxX.js",
    "revision": null
  }, {
    "url": "assets/Cw9vwTPX.js",
    "revision": null
  }, {
    "url": "assets/CwhTUN6e.css",
    "revision": null
  }, {
    "url": "assets/CXrLpI-5.js",
    "revision": null
  }, {
    "url": "assets/CyLepg8N.js",
    "revision": null
  }, {
    "url": "assets/D2jKVaMZ.js",
    "revision": null
  }, {
    "url": "assets/d8_Y_oli.js",
    "revision": null
  }, {
    "url": "assets/D8GR52lp.js",
    "revision": null
  }, {
    "url": "assets/DaX1t55f.js",
    "revision": null
  }, {
    "url": "assets/Db0w78gS.js",
    "revision": null
  }, {
    "url": "assets/DBP1Z03v.js",
    "revision": null
  }, {
    "url": "assets/DcTdRm5V.js",
    "revision": null
  }, {
    "url": "assets/DeZn86NW.css",
    "revision": null
  }, {
    "url": "assets/DFDOflcE.js",
    "revision": null
  }, {
    "url": "assets/DFyQW21Q.js",
    "revision": null
  }, {
    "url": "assets/DgFp_uao.js",
    "revision": null
  }, {
    "url": "assets/DGj4AATS.js",
    "revision": null
  }, {
    "url": "assets/Di7uL4OE.js",
    "revision": null
  }, {
    "url": "assets/DKqS1uNp.css",
    "revision": null
  }, {
    "url": "assets/DMzBY6vk.js",
    "revision": null
  }, {
    "url": "assets/DNGWK_tq.js",
    "revision": null
  }, {
    "url": "assets/donate-iTAF6ci1.jpg",
    "revision": null
  }, {
    "url": "assets/DoTkooFr.js",
    "revision": null
  }, {
    "url": "assets/DQP6gcI8.css",
    "revision": null
  }, {
    "url": "assets/DsqNx6ry.js",
    "revision": null
  }, {
    "url": "assets/DsUkPh1-.js",
    "revision": null
  }, {
    "url": "assets/DT0DSxQG.js",
    "revision": null
  }, {
    "url": "assets/DuozUAw_.js",
    "revision": null
  }, {
    "url": "assets/DuVZYRcn.js",
    "revision": null
  }, {
    "url": "assets/Dw6zsSbj.js",
    "revision": null
  }, {
    "url": "assets/DwzQhuBz.js",
    "revision": null
  }, {
    "url": "assets/Dy6cTXtR.js",
    "revision": null
  }, {
    "url": "assets/f9KW7z7x.js",
    "revision": null
  }, {
    "url": "assets/mjnEY4tp.js",
    "revision": null
  }, {
    "url": "assets/NFaY8oKA.js",
    "revision": null
  }, {
    "url": "assets/nKm1lYEg.js",
    "revision": null
  }, {
    "url": "assets/NOyyaG8_.js",
    "revision": null
  }, {
    "url": "assets/RO6Avrwt.js",
    "revision": null
  }, {
    "url": "assets/ruCi05c2.js",
    "revision": null
  }, {
    "url": "assets/S6ubh9Y7.js",
    "revision": null
  }, {
    "url": "assets/ScpyoXjL.js",
    "revision": null
  }, {
    "url": "assets/taichi-Cpe_iz6n.png",
    "revision": null
  }, {
    "url": "assets/wx-BEFoXXau.jpg",
    "revision": null
  }, {
    "url": "assets/X2kM3qw6.js",
    "revision": null
  }, {
    "url": "assets/XHzXonxh.js",
    "revision": null
  }, {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "8ad2065cb860ba19b6791132da2cdf50"
  }, {
    "url": "icons/logo.svg",
    "revision": "cfd651d4741bdd642bb631c37be99b7b"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "fcfa50157969bbb251b4bc5f82c2f286"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "4cb5fb54ac22131b7bcdb8237fbc7048"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "2b6e2b2bb1c3ad706702e3d0fda3d02f"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "4655d157f43206c5a69752c1f53d30e6"
  }, {
    "url": "animations/1726653612002.lottie",
    "revision": "eb2d8b40b144b78f764a42527130d766"
  }, {
    "url": "animations/1726656220209.lottie",
    "revision": "0d5a1fa0be9db98c4ed3361773cdfa75"
  }, {
    "url": "animations/dotlottie-player.wasm",
    "revision": "cdd2778e636008c04170c1a7d59d2ac4"
  }, {
    "url": "404.html",
    "revision": "84dd46b644cfde68157cc30fc88b27b7"
  }, {
    "url": "answer.html",
    "revision": "3f3368d4c0265baad76e2deb9781ef29"
  }, {
    "url": "bagua.html",
    "revision": "a1ddb4b210f86688e5c8ed7ed6e791a6"
  }, {
    "url": "bazi.html",
    "revision": "59293cb2b186f620a9df63dea0bc8308"
  }, {
    "url": "gua.html",
    "revision": "0b82377d9f8e71b235d826583f48dbe7"
  }, {
    "url": "index.html",
    "revision": "1a75e62c73696145280456957701270c"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "4cb5fb54ac22131b7bcdb8237fbc7048"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "2b6e2b2bb1c3ad706702e3d0fda3d02f"
  }, {
    "url": "manifest.webmanifest",
    "revision": "41334d2c427e4723d77c6487ad8d2fe5"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
