/**
 * If we fall back to the Edolus scene JSON, patch entity script text in-place.
 */
(function () {
  "use strict";

  var N = "\\n";
  var MAP = {};
  MAP["ORBITAL" + N + "INTELLIGENCE"] = "CREATE." + N + "BUILD." + N + "GROW.";
  MAP[
    "Autonomous orbital systems continuously coordinate, synchronize," +
      N +
      "and relay intelligence across the planet in real time."
  ] =
    "Creative, technology, and growth — fully integrated." +
    N +
    "One sovereign pipeline from brand to product to acquisition.";
  MAP["Urban Systems"] = "Brand Architecture";
  MAP[
    "The city's central AI node powering real-time services, intelligent coordination, and autonomous operations."
  ] =
    "Visual identity, photorealistic 3D CGI, cinematic motion, and design systems — bespoke artifacts, never templates.";
  MAP["// Compute_Core"] = "// BUILD_Core";
  MAP[
    "Massive computational infrastructure transforming raw processing power into scalable intelligence"
  ] =
    "Full-stack engineering across web, mobile, and cloud — from architecture through deployment.";
  MAP["NVX-72"] = "13U-01";
  MAP["NVX-72 Compute Array"] = "CREATE · Brand Systems";
  MAP["EDL-72"] = "13U-02";
  MAP["EDL-72 Compute Core"] = "BUILD · Product Stack";
  MAP["AI CHIP"] = "CRAFT CORE";
  MAP["Autonomous Inference Core"] = "Brand & Spatial Systems";
  MAP.Reasoning = "CREATE";
  MAP["Adaptive decision architecture"] = "Brand identity from first principles";
  MAP["Predictive evaluation"] = "Brand strategy";
  MAP["Dynamic route selection"] = "3D art direction";
  MAP["Context-aware inference"] = "Motion systems";
  MAP["KNOWLEDGE TOPOLOGY"] = "DESIGN SYSTEMS";
  MAP["Distributed semantic mapping"] = "Visual systems that scale";
  MAP["Semantic clustering"] = "Design tokens";
  MAP["Relational memory graphs"] = "Component libraries";
  MAP["Contextual world modeling"] = "Spatial language";
  MAP["MULTI-AGENT ORCHESTRATION"] = "BUILD";
  MAP["Coordinated autonomous systems"] = "Engineering as one pipeline";
  MAP["Fleet synchronization"] = "Web & mobile apps";
  MAP["Distributed decision systems"] = "Cloud infrastructure";
  MAP["Autonomous coordination"] = "AI & automation";
  MAP.EMERGENCE = "GROW";
  MAP["Self-organizing intelligence behavior"] = "Compounding commercial moat";
  MAP["Adaptive system evolution"] = "SEO architecture";
  MAP["Behavioral pattern formation"] = "Paid acquisition";
  MAP["Recursive optimization"] = "Lifecycle engines";
  MAP["PRIMARY" + N + "NODE"] = "GROW" + N + "ENGINE";
  MAP.INTELLIGENCE = "13 UTOPIA";
  MAP.LAYER = "STUDIO";
  MAP["DRAG TO ROTATE"] = "DRAG TO EXPLORE";

  function patchValue(v) {
    if (typeof v !== "string") return v;
    if (Object.prototype.hasOwnProperty.call(MAP, v)) return MAP[v];
    return v
      .replace(/EDOLUS/gi, "13 UTOPIA")
      .replace(/\bNVX-?\d*/g, "13U")
      .replace(/\bEDL-?\d*/g, "13U");
  }

  function patchScriptInstance(instance) {
    if (!instance || !instance.attributes) return;
    var attrs = instance.attributes;
    Object.keys(attrs).forEach(function (key) {
      var cur = instance[key];
      if (typeof cur === "string") {
        var next = patchValue(cur);
        if (next !== cur) {
          try {
            instance[key] = next;
          } catch (e) {}
        }
      }
    });
    // Also common attribute bag
    if (instance.attr) {
      Object.keys(instance.attr).forEach(function (key) {
        var cur = instance.attr[key];
        if (typeof cur === "string") {
          var next = patchValue(cur);
          if (next !== cur) instance.attr[key] = next;
        }
      });
    }
  }

  window.__tuRebrandScene = function (app) {
    if (!app || !app.root) return;
    var count = 0;
    app.root.forEach(function (entity) {
      if (!entity.script) return;
      var scripts = entity.script._scripts || entity.script.scripts || [];
      if (Array.isArray(scripts)) {
        scripts.forEach(function (s) {
          patchScriptInstance(s);
          count++;
        });
      }
      // PlayCanvas ScriptComponent: iterate _scriptsIndex / _list
      if (entity.script._scriptsIndex) {
        Object.keys(entity.script._scriptsIndex).forEach(function (name) {
          patchScriptInstance(entity.script._scriptsIndex[name]);
          count++;
        });
      }
    });
    console.info("[13U rebrand-runtime] patched scripts ~", count);
  };
})();
