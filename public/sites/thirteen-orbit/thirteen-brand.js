/**
 * Rebrand splash DOM copy to 13 Utopia. Does NOT hide/replace the PlayCanvas
 * splash bands or canvas — those show the real assets (Earth, models, etc.).
 */
(function () {
  "use strict";

  var LOGO =
    '<div class="tu-splash-mark"><span>13</span><span>UTOPIA</span></div>';
  var TITLE = "CREATE. BUILD. GROW.";
  var SUB =
    "Creative, technology, and growth — fully integrated.\nOne sovereign pipeline from brand to product to acquisition.";
  var CTA = "ENTER EXPERIENCE";

  function hideEdolusLogoOnly() {
    var logo = document.getElementById("pc-overlay-logo");
    if (!logo) return;
    logo.style.opacity = "0";
    logo.style.visibility = "hidden";
  }

  function rebrandSplash() {
    document.title = "13 Utopia — Orbital Experience";

    var splashLogo = document.getElementById("custom-splash-logo");
    if (splashLogo && !splashLogo.dataset.tu) {
      splashLogo.dataset.tu = "1";
      splashLogo.innerHTML = LOGO;
    }

    var title = document.getElementById("custom-title");
    if (title && /INTELLIGENCE|PLANETARY|EDOLUS/i.test(title.textContent || "")) {
      title.textContent = TITLE;
    }

    var subtitle = document.getElementById("custom-subtitle");
    if (
      subtitle &&
      /Orchestrating|artificial intelligence|EDOLUS/i.test(subtitle.textContent || "")
    ) {
      subtitle.textContent = SUB;
    }

    var cta = document.getElementById("cta-label");
    if (cta && /INITIATE/i.test(cta.textContent || "")) {
      cta.textContent = CTA;
    }

    var hp = document.querySelector("#custom-headphones .hp-text");
    if (hp) hp.textContent = "Best with headphones";
  }

  if (window.TextScramble && !window.TextScramble.__tuHooked) {
    window.TextScramble.__tuHooked = true;
    var orig = window.TextScramble.prototype.setText;
    window.TextScramble.prototype.setText = function (t) {
      if (t === "INITIATE SYSTEM") t = CTA;
      return orig.call(this, t);
    };
  }

  var pulse = setInterval(function () {
    rebrandSplash();
    hideEdolusLogoOnly();
  }, 150);

  window.addEventListener("experienceStart", function () {
    clearInterval(pulse);
    hideEdolusLogoOnly();
  });

  new MutationObserver(function () {
    rebrandSplash();
    hideEdolusLogoOnly();
  }).observe(document.body, { childList: true, subtree: true });
})();
