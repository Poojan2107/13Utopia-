/**
 * Edolus preload can hang before loadScene — force the real scene so GLBs/video show.
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
    console.warn("[13U] forcing loadScene", window.SCENE_PATH);
    [297340642, 297340938].forEach(function (id) {
      var a = app.assets.get(id);
      if (a && a.type === "audio") a.type = "binary";
    });
    app.scenes.loadScene(window.SCENE_PATH, function (err) {
      if (err) {
        console.error("[13U] loadScene failed, falling back to edolus scene", err);
        forced = false;
        app.scenes.loadScene("/sites/edolus/2509662.json", function (err2) {
          if (err2) {
            console.error(err2);
            return;
          }
          try {
            app.start();
          } catch (e) {}
        });
        return;
      }
      try {
        app.start();
      } catch (e) {}
      console.info("[13U] scene live kids=", app.root.children.length);
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
