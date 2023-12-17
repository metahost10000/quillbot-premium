// ==UserScript==
// @name         QuillBot VIP Unlocker
// @namespace    techtactics
// @version      0.1
// @description  Unlock QuillBot VIP features for free
// @author       TechTactics
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://greasyfork.org/scripts/455943-ajaxhooker/code/ajaxHooker.js?version=1124435
// @run-at       document-start
// @grant        none
// @license      MIT
// ==/UserScript==

/* global ajaxHooker */

(function() {
  'use strict';

  ajaxHooker.hook(request => {
    if (request.url.endsWith('get-account-details')) {
      request.response = res => {
        const json = JSON.parse(res.responseText);
        const data = "data" in json ? json.data : json;
        data.profile.accepted_premium_modes_tnc = true;
        data.profile.premium = true;
        res.responseText = JSON.stringify("data" in json ? (json.data = data, json) : data);
      };
    }
  });
})();
