/**
 * Created by Huw on 07/04/2017.
 */
var s = document.createElement("script");
s.src = chrome.extension.getURL("skipper.js");
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);