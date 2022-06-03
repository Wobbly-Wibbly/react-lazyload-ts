"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.off = exports.on = void 0;
function on(el, eventName, callback, opts) {
    opts = opts || false;
    if (el.addEventListener) {
        el.addEventListener(eventName, callback, opts);
    }
    else if (el.attachEvent) {
        el.attachEvent(`on${eventName}`, (e) => {
            callback.call(el, e || window.event);
        });
    }
}
exports.on = on;
function off(el, eventName, callback, opts) {
    opts = opts || false;
    if (el.removeEventListener) {
        el.removeEventListener(eventName, callback, opts);
    }
    else if (el.detachEvent) {
        el.detachEvent(`on${eventName}`, callback);
    }
}
exports.off = off;
