/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,r,o={532:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},547:t=>{t.exports=function(t){return t[1]}},196:(t,e,n)=>{n.d(e,{F:()=>u,w:()=>s});var r=n(440),o=n(608);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(){i=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new I(r||[]);return o(i,"_invoke",{value:T(t,n,c)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function x(){}var k={};f(k,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(N([])));L&&L!==n&&r.call(L,u)&&(k=L);var S=x.prototype=b.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,c,u){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function T(e,n,r){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=h(e,n,r);if("normal"===l.type){if(o=r.done?m:v,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=h(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return w.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(j.prototype),f(j.prototype,l,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new j(p(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(S),f(S,s,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function c(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function u(t,e,n,r,o){return l.apply(this,arguments)}function l(){var t;return t=i().mark((function t(e,n,o,a,c){var u,l,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u="",Object.keys(o).length>0&&(u=(0,r.yL)(o)),l="".concat(e).concat(n).concat(u),console.log("".concat(a," request at ").concat(l)),t.next=7,fetch(l,{method:a,headers:c});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("HTTP error ".concat(s.status));case 10:return t.next=12,s.json();case 12:return t.abrupt("return",t.sent);case 15:throw t.prev=15,t.t0=t.catch(0),console.error("Error fetching data:",t.t0),t.t0;case 19:case"end":return t.stop()}}),t,null,[[0,15]])})),l=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){c(a,r,o,i,u,"next",t)}function u(t){c(a,r,o,i,u,"throw",t)}i(void 0)}))},l.apply(this,arguments)}function s(t){if(t.value)return t.value;var e=(0,o.Gq)(t.prompt,t.placeholder);return t.value=e,e}},508:(t,e,n)=>{function r(t,e,n){document.querySelectorAll(".".concat(t)).forEach((function(t){t.addEventListener("click",(function(){var r=t.id,o="".concat(e).concat(r).concat(n);open(o)}))}))}n.d(e,{n:()=>r})},815:(t,e,n)=>{function r(t){var e=new Date(1*t),n=(e.getUTCMonth()+1).toString().padStart(2,"0"),r=e.getUTCDate().toString().padStart(2,"0");return e.getUTCFullYear()+"-"+n+"-"+r}function o(t,e,n){for(var r=0;r<e.length;r++)if(e[r]==t)return n;return t}n.d(e,{M:()=>r,u:()=>o})},608:(t,e,n)=>{n.d(e,{Gq:()=>l,Nc:()=>i,bs:()=>c,oU:()=>s});var r=n(815);function o(t,e){var n=document.createElement(t);return c(n,"id",e),n}function a(t,e){return e.appendChild(t),t}function i(t){return document.getElementById(t)}function c(t,e,n){return t.setAttribute(e,n),t}function u(t,e){return t.innerHTML=e,t}function l(t,e){var n=prompt(t,e);if(""!=n)return n;l(t,e)}function s(t,e,n){for(var i=0;i<e.length;i++){console.log(e[i]);for(var l=0;l<e[i].tasks.length;l++){var s,f,p=e[i].tasks[l],h=p.id,d=p.name,v=p.status.status,y=(0,r.M)(p.due_date),m=null!==(s=null===(f=p.priority)||void 0===f?void 0:f.id)&&void 0!==s?s:0,g=(0,r.u)(y,["1970-01-01"],""),b=o("li",h),w=o("div","".concat(h,"-Status")),x=o("div","".concat(h,"-Titel")),k=o("div","".concat(h,"-Date"));u(w,v),u(x,d),u(k,g),c(w,"class","div-Status"),c(x,"class","div-Title"),c(x,"title",p.list.name),c(k,"class","div-Date"),c(b,"class",n===g?"task prio".concat(m," dueToday"):n>g&&""!==g?"task prio".concat(m," overdue"):"task prio".concat(m)),a(w,b),a(x,b),a(k,b),a(b,t)}}}},84:(t,e,n)=>{function r(){return document.querySelectorAll("li.task")}function o(t,e){console.log(t);for(var n=0;n<t.length;n++)t[n].className.includes(e)?"manualHide"!==e&&t[n].classList.includes("manualHide")?document.getElementById(t[n].id).style.display="none":document.getElementById(t[n].id).style.display="flex":document.getElementById(t[n].id).style.display="none"}n.d(e,{C:()=>r,Y:()=>o})},856:(t,e,n)=>{n.a(t,(async(t,e)=>{try{n(697);var r=n(587),o=n(166),a=n(815),i=n(196),c=n(84),u=n(440),l=n(608),s=n(508),f=[],p=performance.now(),h=(0,i.w)(r.E.clickup);o.v.click.header.Authorization=h;var d=await(0,i.F)(o.v.click.url.api,o.v.click.end.user,o.v.arr.empty,o.v.api.get,o.v.click.header),v=(0,u.Ug)(d,o.v.click.arr.user),y=v.id,m=(v.username,v.color),g=v.profilePicture,b=(0,a.M)(new Date),w=(0,l.Nc)("profile");(0,l.bs)(w,"src",g),document.querySelector(":root").style.setProperty("--accent",m);var x=await(0,i.F)(o.v.click.url.api,o.v.click.end.team,o.v.arr.empty,o.v.api.get,o.v.click.header),k=(0,u.Ug)(x,o.v.click.arr.team),E=(0,u.Xj)(k,o.v.click.key.id);await(0,u.wY)(E,f,o.v.click.url.api,o.v.click.end.team+"/",o.v.click.end.task,{"assignees[]":y,subtasks:!0},o.v.api.get,o.v.click.header);var L=(0,l.Nc)("canvas");(0,l.oU)(L,f,b),(0,s.n)("div-Title",o.v.click.url.task,"");var S=(0,c.C)();document.querySelectorAll("input").forEach((function(t){t.addEventListener("click",(function(t){(0,c.Y)(S,t.target.value)}))})),document.querySelectorAll(".div-Status").forEach((function(t){t.addEventListener("click",(function(t){t.target.parentElement.classList.contains("manualHide")?(t.target.parentElement.classList.remove("manualHide"),t.target.parentElement.style.display="none"):(t.target.parentElement.classList.add("manualHide"),t.target.parentElement.style.display="none")}))}));var _=performance.now();console.log("This took ".concat(p-_," milleseconds")),e()}catch(t){e(t)}}),1)},587:(t,e,n)=>{n.d(e,{E:()=>r});var r={clickup:{value:"ENTER_CLICKUP_API_KEY",prompt:n(166).v.prompt.keyClickup,placeholder:""}}},440:(t,e,n)=>{n.d(e,{Ug:()=>p,Xj:()=>f,wY:()=>h,yL:()=>s});var r=n(196);function o(){o=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new I(r||[]);return i(a,"_invoke",{value:T(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function x(){}var k={};f(k,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(N([])));L&&L!==n&&r.call(L,u)&&(k=L);var S=x.prototype=b.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,c,u){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function T(e,n,r){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=h(e,n,r);if("normal"===l.type){if(o=r.done?m:v,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=h(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return w.prototype=x,i(S,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(j.prototype),f(j.prototype,l,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new j(p(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(S),f(S,s,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function u(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){for(var e="",n=0,r=Object.entries(t);n<r.length;n++){var o=(p=r[n],h=2,function(t){if(Array.isArray(t))return t}(p)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,l=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(p,h)||u(p,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];if(Array.isArray(i)){var l,s=c(i);try{for(s.s();!(l=s.n()).done;){var f=l.value;e+="".concat(e?"&":"?").concat(a,"=").concat(encodeURIComponent(f))}}catch(t){s.e(t)}finally{s.f()}}else e+="".concat(e?"&":"?").concat(a,"=").concat(encodeURIComponent(i))}var p,h;return e}function f(t,e){for(var n=[],r=0;r<t.length;r++){var o=p(t[r],e);n.push(o)}return n}function p(t,e){for(var n=t,r=0;r<e.length;r++)n=n[e[r]];return n}function h(t,e,n,r,o,a,i,c){return d.apply(this,arguments)}function d(){var t;return t=o().mark((function t(e,n,a,i,c,u,l,s){var f,p,h;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f=0;case 1:if(!(f<e.length)){t.next=10;break}return p=e[f],t.next=5,(0,r.F)(a,i+p+c,u,l,s);case 5:h=t.sent,n.push(h);case 7:f++,t.next=1;break;case 10:case"end":return t.stop()}}),t)})),d=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))},d.apply(this,arguments)}},166:(t,e,n)=>{n.d(e,{v:()=>r}),n(587);var r={arr:{empty:[]},api:{get:"GET",acceptAll:"*/*",agent:"Glatt-Task DEV"},click:{url:{api:"https://api.clickup.com/api/v2",task:"https://app.clickup.com/t/"},end:{user:"/user",team:"/team",space:"/space",folder:"/folder",task:"/task"},header:{Accept:{$ref:"#/api/acceptAll"},"User-Agent":{$ref:"#/api/agent"}},arr:{user:["user"],team:["teams"],space:["spaces"],task:["tasks"]},param:{space:{archived:"false"}},key:{id:["id"]}},prompt:{keyClickup:"Please enter your Clickup API Key below"},loop:{class:"tasks"}}},16:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(547),o=n.n(r),a=n(532),i=n.n(a)()(o());i.push([t.id,"/* VARIABLES */\n\n/* DEFINITION */\nbody {\n\t--border: 3px;\n\t--dark: #000000;\n\t--hidden: #dddddd;\n\t--light: #ffffff;\n\t--canvasLight: #eeeeee;\n\t--prioUltra: #dc2626;\n\t--prioHigh: #ea580c;\n\t--prioMedium: #fbbf24;\n\t--prioLow: #65a30d;\n\t--padding: 5px;\n\t--menu: 100px;\n\t--effect: 380ms;\n\tbox-sizing: border-box;\n\tfont-family: sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nul {\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n/* CLASSES */\n\n.canvas {\n\tbackground-color: var(--canvasLight);\n\tcolor: var(--dark);\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: calc(100vh - var(--menu));\n\twidth: calc(100% - var(--menu));\n}\n\n.circle {\n\tdisplay: inline-block;\n\tposition: relative;\n\tbackground: var(--accent);\n\tbox-sizing: border-box;\n\tclip-path: circle(50%);\n}\n\n.circle img {\n\ttransform: scale(0.9);\n\tclip-path: circle(50%);\n}\n\n.col {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.creator {\n\theight: 100%;\n}\n\n.div-Date,\n.div-Status {\n\tmin-width: 100px;\n\twidth: 15%;\n}\n\n.div-Date {\n\ttext-align: end;\n}\n\n.div-Status {\n\ttext-align: start;\n}\n\n.div-Title {\n\toverflow: hidden;\n\ttext-align: center;\n\twidth: auto;\n}\n\n.dueToday,\n.overdue {\n\tborder-right: var(--border) solid;\n}\n\n.dueToday {\n\tborder-right-color: var(--prioHigh);\n}\n\n.filter {\n\talign-items: center;\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 100%;\n\tjustify-content: flex-end;\n\ttext-align: center;\n}\n\n.filter div {\n\tjustify-content: flex-end;\n\tmargin: var(--padding);\n}\n\n.manualHide {\n\tbackground-color: var(--hidden) !important;\n}\n\n.menu {\n\tbackground-color: var(--dark);\n\tcolor: var(--light);\n\tposition: sticky;\n}\n\n.overdue {\n\tborder-right-color: var(--prioUltra);\n}\n\n.profile {\n\talign-content: center;\n\tbackground-color: var(--dark);\n\tdisplay: flex;\n\tjustify-content: center;\n\theight: var(--menu);\n\twidth: calc(var(--menu) - calc(var(--padding * 2)));\n}\n\n.profile img {\n\twidth: var(--menu);\n\tz-index: 1;\n}\n\n.profile:hover {\n\tbackground-color: var(--accent);\n\tmargin: 0px;\n\ttransition: var(--effect);\n}\n\n.prio0,\n.prio1,\n.prio2,\n.prio3,\n.prio4 {\n\tborder-left: var(--border) solid;\n}\n\n.prio0 {\n\tborder-left-color: var(--light);\n}\n\n.prio1 {\n\tborder-left-color: var(--prioUltra);\n}\n\n.prio2 {\n\tborder-left-color: var(--prioHigh);\n}\n\n.prio3 {\n\tborder-left-color: var(--prioMedium);\n}\n\n.prio4 {\n\tborder-left-color: var(--prioLow);\n}\n\n.row {\n\tdisplay: flex;\n}\n\n.scroll {\n\theight: 100%;\n\toverflow-y: scroll;\n\tscrollbar-width: none;\n\twidth: 100%;\n}\n\n.scroll::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n.side {\n\theight: calc(100vh - var(--menu));\n\twidth: var(--menu);\n}\n\n.task {\n\talign-items: center;\n\tbackground-color: var(--light);\n\tdisplay: flex;\n\tflex-direction: row;\n\tfont-size: 2vh;\n\theight: 3vh;\n\tjustify-content: space-between;\n\tline-height: 3vh;\n\tmargin: var(--padding);\n\toverflow: hidden;\n\tpadding: calc(var(--padding) * 2);\n\ttransition: calc(var(--effect) / 2);\n\twidth: auto;\n}\n\n.task:hover {\n\tborder-bottom: var(--border) solid var(--accent);\n}\n\n.taskPicture {\n\theight: 3vh;\n}\n\n.top {\n\theight: var(--menu);\n\twidth: calc(100% - var(--menu));\n}\n\n.z10  {\n\tz-index: 10;\n}\n\n/* MEDIA QUERIES */\n/** MOBILE **/\n@media (max-width: 600px) {\n\t.canvas {\n\t\twidth: 100%;\n\t}\n\t.filter,\n\t.side,\n\t.taskPicture {\n\t\tdisplay: none;\n\t}\n}\n",""]);const c=i},697:(t,e,n)=>{var r=n(478),o=n.n(r),a=n(135),i=n.n(a),c=n(301),u=n.n(c),l=n(222),s=n.n(l),f=n(626),p=n.n(f),h=n(279),d=n.n(h),v=n(16),y={};y.styleTagTransform=d(),y.setAttributes=s(),y.insert=u().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),o()(v.A,y),v.A&&v.A.locals&&v.A.locals},478:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],l=r.base?u[0]+r.base:u[0],s=a[l]||0,f="".concat(l," ").concat(s);a[l]=s+1;var p=n(f),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var d=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:d,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=r(t,o),l=0;l<a.length;l++){var s=n(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=u}}},301:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},626:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},222:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},135:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},279:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},a={};function i(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,exports:{}};return o[t](n,n.exports,i),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var u,l,s,f=new Set,p=o.exports,h=new Promise(((t,e)=>{s=e,l=t}));h[e]=p,h[t]=t=>(c&&t(c),f.forEach(t),h.catch((t=>{}))),o.exports=h,a((o=>{var a;u=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{i[e]=t,r(a)}),(t=>{i[n]=t,r(a)}));var i={};return i[t]=t=>t(a),i}}var c={};return c[t]=t=>{},c[e]=o,c})))(o);var i=()=>u.map((t=>{if(t[n])throw t[n];return t[e]})),l=new Promise((e=>{(a=()=>e(i)).r=0;var n=t=>t!==c&&!f.has(t)&&(f.add(t),t&&!t.d&&(a.r++,t.push(a)));u.map((e=>e[t](n)))}));return a.r?l:i()}),(t=>(t?s(h[n]=t):l(p),r(c)))),c&&c.d<0&&(c.d=0)},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0,i(856)})();