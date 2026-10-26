/**
 * Force loadScene if preload hangs (same fix as thirteen-orbit).
 */
(function () {
  "use strict";
  var forced = false;

  function force() {
    if (forced || !window.pc || !pc.app || !window.SCENE_PATH) return;
    var app = pc.app;
    if (app.root && app.root.children.length > 0) {
      forced = true;
      return;
    }
    forced = true;
    console.warn("[edolus] forcing loadScene");
    [297340642, 297340938].forEach(function (id) {
      var a = app.assets.get(id);
      if (a && a.type === "audio") a.type = "binary";
    });
    app.scenes.loadScene(window.SCENE_PATH, function (err) {
      if (err) {
        console.error(err);
        forced = false;
        return;
      }
      try {
        app.start();
      } catch (e) {}
    });
  }

  function watch() {
    pc.app.once("start", function () {
      forced = true;
    });
    var n = 0;
    var t = setInterval(function () {
      n++;
      if (!pc.app) return;
      if (pc.app.root.children.length > 0) {
        clearInterval(t);
        return;
      }
      if (n >= 8) {
        force();
        clearInterval(t);
      }
    }, 250);
  }

  if (window.pc && pc.app) watch();
  else {
    var w = setInterval(function () {
      if (window.pc && pc.app) {
        clearInterval(w);
        watch();
      }
    }, 50);
    setTimeout(function () {
      clearInterval(w);
    }, 20000);
  }
})();
