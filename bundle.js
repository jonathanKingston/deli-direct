!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"e",(function(){return s})),t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return f}));var o=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((o=o.apply(e,n||[])).next())}))},r=function(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},i=[{location:[52.95448349999999,-1.1549223],key:"nottingham",name:"Nottingham"},{location:[53.070605,-.806564],key:"newark",name:"Newark on Tent"},{location:[52.9188043,-1.4748227],key:"derby",name:"Derby"},{location:[52.898561,-1.269387],key:"ilkeston",name:"Ilkeston"},{location:[51.538783,-.102392],key:"islington",name:"Islington"},{location:[53.309292,-1.122656],key:"worksop",name:"Worksop"},{location:[53.215212,-1.676305],key:"bakewell",name:"Bakewell"}],a=i[0];function l(e){return e*Math.PI/180}function c(e,n){var t=l(e[0]),o=l(n[0]),r=l(n[0]-e[0]),i=l(n[1]-e[1]),a=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t)*Math.cos(o)*Math.sin(i/2)*Math.sin(i/2);return 6371e3*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))}function u(e){return i.sort((function(n,t){var o=c(e,n.location||[0,0]),r=c(e,t.location||[0,0]);return o<r?-1:o>r?1:0})),i[0]}function s(e){return o(this,void 0,void 0,(function(){var n;return r(this,(function(t){switch(t.label){case 0:return[4,fetch("https://api.postcodes.io/postcodes/"+e)];case 1:return[4,t.sent().json()];case 2:return"result"in(n=t.sent())?[2,[n.result.latitude,n.result.longitude]]:[2,null]}}))}))}function d(){return o(this,void 0,void 0,(function(){var e,n;return r(this,(function(t){switch(t.label){case 0:if(e="https://api.ipdata.co/?api-key=255e8bee85633e201aa99cdbae675bb2736795e2efbf9fef679d227d","aproxLocationKey"in localStorage)return[3,5];t.label=1;case 1:return t.trys.push([1,4,,5]),[4,fetch(e)];case 2:return[4,t.sent().json()];case 3:return"latitude"in(n=t.sent())&&"longitude"in n&&(localStorage.aproxLocationKey=JSON.stringify([n.latitude,n.longitude])),[3,5];case 4:return t.sent(),localStorage.aproxLocationKey=null,[3,5];case 5:return[2]}}))}))}function f(){var e=a.location;return"aproxLocationKey"in localStorage&&((e=JSON.parse(localStorage.aproxLocationKey))||(e=a.location)),c(a.location,e)>25e3&&(e=a.location),e}},function(e,n,t){"use strict";t.r(n),t.d(n,"details",(function(){return c})),t.d(n,"render",(function(){return u})),t.d(n,"init",(function(){return d}));var o=t(3),r=t(0),i=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((o=o.apply(e,n||[])).next())}))},a=function(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},l=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};function c(e){return{description:"Listing local independent businesses in "+e.region.name+" available or collection or delivery.",title:"Listing "+e.region.name+" food & drink independents"}}function u(e){return'\n    <div id="list"></div>\n  '}function s(e){return i(this,void 0,void 0,(function(){var n,t,i,c,u,s,d,f,p,h,b,y,m,v,w,g;return a(this,(function(a){switch(a.label){case 0:return n=document.getElementById("deliversFilter"),t=document.getElementById("collectFilter"),i=document.getElementById("plantBasedFilter"),(c=document.getElementById("list")).innerHTML="",u=Object(r.c)(),[4,fetch("/"+e.region.key+".json")];case 1:return[4,a.sent().json()];case 2:(s=a.sent()).sort((function(e,n){var t=Object(r.a)(u,e.location||[0,0]),o=Object(r.a)(u,n.location||[0,0]);return t<o?-1:t>o?1:0}));try{for(d=l(s),f=d.next();!f.done;f=d.next()){if(p=f.value,h=p.delivers||p.postage,b=p.collect,y=p.types&&(p.types.includes("vegan")||p.types.includes("plant-based")),n.checked||t.checked||i.checked){if(n.checked&&!h)continue;if(t.checked&&!b)continue;if(i.checked&&!y)continue}m=Object(o.b)(p,!0),(v=document.createElement("div")).className="card",v.innerHTML=m,c.appendChild(v)}}catch(e){w={error:e}}finally{try{f&&!f.done&&(g=d.return)&&g.call(d)}finally{if(w)throw w.error}}return[2]}}))}))}function d(e){Object(o.c)(),Object(r.d)();var n=Object(o.a)();n.removeAttribute("hidden"),n.addEventListener("change",(function(){s(e)})),s(e)}},function(e,n,t){"use strict";t.r(n),t.d(n,"details",(function(){return c})),t.d(n,"render",(function(){return u})),t.d(n,"init",(function(){return d}));var o=t(3),r=t(0),i=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((o=o.apply(e,n||[])).next())}))},a=function(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},l=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};function c(e){return{title:"Map listings for "+e.region.name}}function u(e){return'\n  <div id="map"></div>\n  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""><\/script>\n  '}function s(e){"complete"===document.readyState&&function(e){i(this,void 0,void 0,(function(){var n,t,i,c,u,s,d,f,p,h,b;return a(this,(function(a){switch(a.label){case 0:return n=window.L.icon({iconUrl:"/icons/marker.svg",iconSize:[24,24],iconAnchor:[16,24],popupAnchor:[-4,-23]}),t=window.L.layerGroup(),[4,fetch("/"+e.region.key+".json")];case 1:return[4,a.sent().json()];case 2:i=a.sent();try{for(c=l(i),u=c.next();!u.done;u=c.next())(s=u.value).location&&(d=Object(o.b)(s,!1),window.L.marker([s.location[0],s.location[1]],{icon:n}).bindPopup(d).addTo(t))}catch(e){h={error:e}}finally{try{u&&!u.done&&(b=c.return)&&b.call(c)}finally{if(h)throw h.error}}return'Map data &copy;\n  <a rel="nofollow" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,\n  <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,\n  Imagery © <a rel="nofollow" href="https://www.mapbox.com/">Mapbox</a>\n  ',"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",f=window.L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{id:"mapbox/light-v9",tileSize:512,zoomOffset:-1,attribution:'Map data &copy;\n  <a rel="nofollow" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,\n  <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,\n  Imagery © <a rel="nofollow" href="https://www.mapbox.com/">Mapbox</a>\n  '}),p=e.region.location||Object(r.c)(),window.L.map("map",{center:p,zoom:14,layers:[f,t]}),[2]}}))}))}(e)}function d(e){return i(this,void 0,void 0,(function(){return a(this,(function(n){return Object(o.c)(),Object(r.d)(),s(e),document.addEventListener("readystatechange",(function(n){s(e)})),[2]}))}))}},function(e,n,t){"use strict";function o(e,n,t){return'<a href="'+n+'" class="'+t+'" rel="noopener noreferrer nofollow" target="_blank">'+e+"</a>"}function r(){document.getElementById("filter").removeAttribute("hidden")}function i(){return document.getElementById("listFilter")}function a(e,n){var t="",r="",i="";e.instagram&&(i=o("Instagram",e.instagram,"instagram"));var a="";e.facebook&&(a=o("Facebook",e.facebook,"facebook"));var l="";e.twitter&&(l=o("Twitter",e.twitter,"twitter"));var c="";e.phone&&(c=o(e.phone,"tel:"+e.phone,"phone")),e.blurb&&(r='<p class="blurb">'+e.blurb+"</p>"),e.website&&(t=o("Visit Website",e.website,"website"));var u="";n&&e.location&&(u=o("Open Map","https://www.google.com/maps/search/?api=1&query="+e.location[0]+","+e.location[1],"map"));return'<div class="cardcontents">\n    <h2>'+e.title+"</h2>\n    <dl>\n      <div><dt>Delivery:</dt><dd>"+(e.delivers||e.postage?"Yes":"No")+"</dd></div>\n      <div><dt>Collect:</dt><dd>"+(e.collect?"Yes":"No")+"</dd></div>\n    </dl>\n    "+r+"\n    "+t+"\n    "+c+"\n    "+u+'\n    <div class="icons">\n      '+a+" "+l+" "+i+"\n    </div>\n  </div>"}t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a}))},function(e,n,t){"use strict";t.r(n),t.d(n,"details",(function(){return a})),t.d(n,"render",(function(){return l})),t.d(n,"init",(function(){return c}));var o=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var o,r,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return a},r=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(o(arguments[n]));return e},i=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},a={description:"Deli Direct finds local companies offering supplies to those in need",title:"About us"};function l(e){return'\n  <div class="sidebyside">\n    <section>\n      <h1>\n        A place to connect people with their independent shops\n      </h1>\n      \n      <p>\n        Deli Direct is a site that connects food and drink lovers with local businesses. Launching first in Nottingham UK, we aim to track the availability of small providers impacted by the outbreak.\n      \n      <p>\n        We are focused on listing high quality deli, food, and drink suppliers in Nottingham. Find local craft beer, delicatessen, farm shops and bakeries that are available to deliver or take away.\n      \n      <p>\n        <b>If you are interested in adding your business to the site, please fill in the form on this page. We are accepting submissions of all business types and in all regions. Titles with an (*) are required fields.</b>\n      \n      <p>\n        If you have any additional questions, comments, or need to update a business listing, you can contact us at <a href="mailto:admin@deli.direct">admin@deli.direct</a>.\n      \n      <p>\n        Stay safe.\n    </section>\n    <aside>\n      <form id="collectForm">\n        <h2>Add your business to Deli Direct</h2>\n        <div>\n          <label for="businessName">Business name*</label>\n          <input name="title" id="businessName" required>\n        </div>\n        <div>\n          <label for="contactName">Contact name*</label>\n          <input name="contact" id="contactName" required>\n        </div>\n        <div>\n          <label for="contactName">Business description</label>\n          <textarea name="blurb" id="blurb">\n          </textarea>\n        </div>\n        <div>\n          <label for="address">Business Address*</label>\n          <textarea name="address" id="address" required>\n          </textarea>\n        </div>\n        <div>\n          <label for="phoneNumber">Business phone number</label>\n          <input type="tel" name="phone" id="phoneNumber">\n        </div>\n        <div>\n          <label for="website">Business website</label>\n          <input name="website" id="website">\n        </div>\n        <div>\n          <label for="instagram">Instagram</label>\n          <input type="url" name="instagram" id="instagram">\n        </div>\n        <div>\n          <label for="facebook">Facebook</label>\n          <input type="url" name="facebook" id="facebook">\n        </div>\n        <div>\n          <label for="twitter">Twitter</label>\n          <input type="url" name="twitter" id="twitter">\n        </div>\n        <div>\n          <label for="businessType">Business type</label>\n          <select name="type" id="businessType">\n            <option>Select a type</option>\n            <option>Brewery</option>\n            <option>Deli</option>\n            <option>Wholesalers</option>\n            <option>Bakery</option>\n            <option>Cafe</option>\n            <option>Pub</option>\n            <option>Other</option>\n          </select>\n        </div>\n        <div>\n          <label for="deliveroo">Deliveroo</label>\n          <input type="url" name="deliveroo" id="deliveroo">\n        </div>\n        <div>\n          <label for="justeat">Just-Eat</label>\n          <input type="url" name="justeat" id="justeat">\n        </div>\n        <div>\n          <button>\n            Submit\n          </button>\n        </div>\n      </form>\n      <div id="formSuccess" hidden>\n        <h3>Thank you!</h3>\n\n        <p>Thank you for submitting your business information to Deli Direct.\n        <p>If you are submitting a new region (outside of Nottingham)—hold tight! Once we have gathered enough businesses for a new region, we will add it to our listings section on the site.\n\n        <p>As we are a small team, we also appreciate your patience as we review each new submission. We will reach out if there are any issues.\n\n        <p>If you think you have made a mistake or need to make any changes, please contact us.\n      </div>\n    </aside>\n  </div>\n  '}function c(){var e=document.getElementById("collectForm"),n=document.getElementById("formSuccess");e.addEventListener("submit",(function(t){var o,a;t.preventDefault();var l="https://script.google.com/macros/s/AKfycbwihGbK7N_jR_VPfDOpp0nrQsxFCHdYn83yvGe0KXgd64QjSOB0/exec?",c=r(e.querySelectorAll("input,textarea"));try{for(var u=i(c),s=u.next();!s.done;s=u.next()){var d=s.value;l+="&"+d.name+"="+encodeURIComponent(d.value)}}catch(e){o={error:e}}finally{try{s&&!s.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}var f=new Request(l);fetch(f,{method:"GET",credentials:"omit",mode:"no-cors"}),e.setAttribute("hidden",""),n.removeAttribute("hidden")}))}},function(e,n,t){"use strict";t.r(n),t.d(n,"details",(function(){return c})),t.d(n,"render",(function(){return u})),t.d(n,"init",(function(){return d}));var o=t(0),r=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((o=o.apply(e,n||[])).next())}))},i=function(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},a=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var o,r,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return a},l=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(a(arguments[n]));return e},c={canonical:"/",description:"Deli Direct finds local companies offering supplies to those in need",title:"Find Nottingham food & drink independents"};function u(e){return'\n    <div class="center home sidebyside">\n      <section class="intro">\n        <h1>Discover &amp; Support Local Independents</h1>\n        <p>Deli Direct connects you to local Nottingham food and drink shops. With over 100 listings, find out how to connect with and support local businesses.</p>\n        <form id="lookup-form">\n          <label for="postcode">Enter your postcode</label><input name="postcode" id="postcode" autofill="postal-code" />\n          <button>Find local places</button>\n        </form>\n      </section>\n      <aside>\n        <img src="/images/home-image.svg" alt="">\n      </aside>\n    </div>\n  '}function s(e){return r(this,void 0,void 0,(function(){var n,t,r,a;return i(this,(function(i){switch(i.label){case 0:return e.preventDefault(),n=document.getElementById("postcode"),t=n.value,[4,Object(o.e)(t)];case 1:return r=i.sent(),a=Object(o.b)(r),window.location.href="/"+a.key,[2]}}))}))}function d(){document.getElementById("lookup-form").addEventListener("submit",s);var e,n,t,o=document.getElementById("postcode"),a=(e=function(e){console.log("event",e),function(e){r(this,void 0,void 0,(function(){var n;return i(this,(function(t){switch(t.label){case 0:return[4,fetch("https://api.postcodes.io/postcodes/"+e+"/autocomplete")];case 1:return[4,t.sent().json()];case 2:return n=t.sent(),console.log("c",n),[2]}}))}))}(o.value)},n=800,function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(t),t=setTimeout((function(){t=0,e.apply(void 0,l(o))}),n)});o.addEventListener("keydown",a)}},function(e,n,t){"use strict";t.r(n);var o={"/about":t(4),"":t(5),"/nottingham":t(1),"/nottingham/map":t(2),"/newark":t(1),"/newark/map":t(2),"/derby":t(1),"/derby/map":t(2),"/ilkeston":t(1),"/ilkeston/map":t(2),"/islington":t(1),"/islington/map":t(2),"/worksop":t(1),"/worksop/map":t(2),"/bakewell":t(1),"/bakewell/map":t(2),"/other":t(1),"/other/map":t(2)},r=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((o=o.apply(e,n||[])).next())}))},i=function(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},a=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var o,r,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return a},l=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(a(arguments[n]));return e},c=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};"fetch"in window||document.getElementById("unsupported").removeAttribute("hidden"),window.onload=function(){if(function(){var e,n,t=l(document.querySelectorAll("link"));try{for(var o=c(t),r=o.next();!r.done;r=o.next()){var i=r.value;"preload"==i.rel&&"style"==i.as&&(i.rel="stylesheet")}}catch(n){e={error:n}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}}(),"serviceWorker"in navigator)try{navigator.serviceWorker.register("/sw.js")}catch(e){console.error(e)}},function(){r(this,void 0,void 0,(function(){var e,n,t,r;return i(this,(function(i){switch(i.label){case 0:return e=JSON.parse(document.getElementById("pageProps").textContent),(n=document.location.pathname.replace(/\/$/,""))in o?[4,o[n]]:[3,2];case 1:"init"in(t=i.sent())&&t.init(e),i.label=2;case 2:return(r=document.getElementById("regionSelect")).addEventListener("change",(function(e){window.location.href="/"+r.value})),[2]}}))}))}(),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date),gtag("config","UA-161955128-1")}]);