!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";function o(){var e=location.hash;"#add-to-wallet-modal"===e&&r("#add-to-wallet-modal").show()}function a(){var e=document.getElementById("addToCalendarDropdown");e.parentElement.removeChild(e),document.getElementById("print_page").style.display="none"}var l=n(321),r=n(322),s=document.getElementsByClassName("cal_option");document.addEventListener("touchstart",function(){document.getElementById("calendarOptions").className=""},null);for(var i=0;i<s.length;i++)s[i].addEventListener("focus",function(){document.getElementById("calendarOptions").className="show-menu"},null),s[i].addEventListener("blur",function(){document.getElementById("calendarOptions").className=""},null);location.hash&&o(),window.addEventListener("hashchange",o,null),Array.prototype.forEach.call(document.querySelectorAll(".add-to-wallet-modal-link"),function(e){e.removeAttribute("href"),e.setAttribute("href","#add-to-wallet-modal"),e.removeAttribute("target")}),l().setTimeoutEvent(a),document.getElementById("print_page").addEventListener("click",function(){window.print()},null)},307:function(e,t){"use strict";var n=e.exports={};n.addClass=function(e,t){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.classList?e.classList.add(t):e.className+=" "+t})},n.removeClass=function(e,t){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")})},n.toggleClass=function(e,t){var n=document.querySelectorAll(e),o=!0,a=!1,l=void 0;try{for(var r,s=n[Symbol.iterator]();!(o=(r=s.next()).done);o=!0){var i=r.value;if(i.classList)i.classList.toggle(t);else{var c=i.className.split(" "),u=c.indexOf(t);u>=0?c.splice(u,1):c.push(t),i.className=c.join(" ")}}}catch(d){a=!0,l=d}finally{try{!o&&s["return"]&&s["return"]()}finally{if(a)throw l}}},n.toggleHideOn=function(e){n.removeClass(e,"show"),n.addClass(e,"hide")},n.toggleShowOn=function(e){n.removeClass(e,"hide"),n.addClass(e,"show")},n.hideElementsBySelectors=function(e){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.style.display="none"})},n.clearHTML=function(e){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.innerHTML=""})},n.highlightCalendarDate=function(e){n.removeClass(".date-bookable.is-active","is-active"),n.addClass(".date-bookable.date-"+e,"is-active")},n.unhighlightCalendarDates=function(){n.removeClass(".date-bookable.is-active","is-active")},n.highlightTimesCell=function(e){n.removeClass(".appointment-list-item.is-active","is-active"),n.addClass(".appointment-list-item.datetime-"+e,"is-active")},n.renderSystemError=function(e){var t=document.querySelector(e);t.innerHTML="An error has occurred in the system. Please try again in a few minutes"},n.focusMonthNav=function(e){var t=document.querySelector(".Calendar.month-"+e+" a.Calendar-nav--next")||document.querySelector(".Calendar.month-"+e+" a.Calendar-nav--prev");t?t.focus():n.focusFirstActiveMonthDate(e)},n.focusFirstActiveMonthDate=function(e){var t=document.querySelectorAll("[class^='calendar-date date-bookable date-"+e+"'] a");t.length>0&&t[0].focus()}},321:function(e,t){"use strict";var n=1799e3,o=1679e3;e.exports=function(){return{setTimeoutEvent:function(e){return setTimeout(e,n)},setNotificationBeforeExpiry:function(e){setTimeout(e,o)}}}},322:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(323),r=n(307),s=27,i=function(){function e(t){o(this,e),this.popupDOMid=t}return a(e,[{key:"show",value:function(){window.location.hash=this.popupDOMid,r.addClass(this.popupDOMid,"modal-bg--display"),r.addClass("body","scroll-disabled"),this.setEventListeners(),document.querySelector("div"+this.popupDOMid+" .log-out").focus()}},{key:"setEventListeners",value:function(){var e=this;window.addEventListener("keydown",function(t){t.which==s||t.keyCode==s?e.closeModal():l.trapFocus(document.querySelector(".modal-bg"),t)},null),document.querySelector(this.popupDOMid+" .close").addEventListener("click",function(){e.closeModal()})}},{key:"closeModal",value:function(){r.removeClass(this.popupDOMid,"modal-bg--display"),r.removeClass("body","scroll-disabled"),location.hash="#close-modal"}}]),e}();e.exports=function(e){return new i(e)}},323:function(e,t){"use strict";var n=e.exports={},o=9;n.trapFocus=function(e,t){var n=[document.getElementById("log-out"),document.getElementById("extend-session"),document.getElementById("close-modal")];if(t.which==o||t.keyCode==o){var a=(e.querySelectorAll("*"),n.length),l=document.activeElement,r=n.indexOf(l);t.shiftKey?0==r&&(n[a-1].focus(),t.preventDefault()):r==a-1&&(n[0].focus(),t.preventDefault())}}}});
//# sourceMappingURL=confirmation.js.map