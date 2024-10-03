// ==UserScript==
// @name         TASK(Public)
// @namespace    http://tampermonkey.net/
// @version      2024-09-30
// @description  try to take over the world!
// @author       KOM
// @match        https://portal.fleetair.eu/maintenance/work-order-task/update/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fleetair.eu
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);
    return "script successful";
  }
  loadScript("https://fleetairi.github.io/portal/task/taskpublic.js");
})();
