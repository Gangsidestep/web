// JavaScript Document/** * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved. * Available via the MIT or new BSD license.* see: http://github.com/jrburke/almond for details */

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */

/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */

/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */

/**
 * @license
 * Lo-Dash 1.3.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern -o ./dist/lodash.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.4.4 <http://underscorejs.org/>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * Available under MIT license <http://lodash.com/license>
 */

/*!
 * typeahead.js 0.9.3
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

/*!
jQuery wookmark plugin
@name jquery.wookmark.js
@author Christoph Ono (chri@sto.ph or @gbks)
@author Sebastian Helzle (sebastian@helzle.net or @sebobo)
@version 1.4.6
@date 01/13/2014
@category jQuery plugin
@copyright (c) 2009-2013 Christoph Ono (www.wookmark.com)
@license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/*
	* Konami-JS ~ 
	* :: Now with support for touch events and multiple instances for 
	* :: those situations that call for multiple easter eggs!
	* Code: http://konami-js.googlecode.com/
	* Examples: http://www.snaptortoise.com/konami-js
	* Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
	* Version: 1.4.1 (3/1//2013)
	* Licensed under the GNU General Public License v3
	* http://www.gnu.org/copyleft/gpl.html
	* Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
*/

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

/*! http://mths.be/placeholder v2.0.7 by @mathias */

/*
 * Gritter for jQuery
 * http://www.boedesign.com/
 *
 * Copyright (c) 2012 Jordan Boesch
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: February 24, 2012
 * Version: 1.7.4
 */

(function()
{var e,t,n;(function(r)
{function d(e,t){return h.call(e,t)}
function v(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};
if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"))
;
for(f=0;f<e.length;f+=1){h=e[f];
if(h===".")e.splice(f,1),f-=1;
else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))
break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2))
;
if((p||v)&&d){n=e.split("/")
;
for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/")
;
if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];
if(i){i=i[r];
if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function m(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function g(e){return function(t){return v(t,e)}}function y(e){return function(t){a[e]=t}}function b(e){if(d(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!d(a,e)&&!d(c,e))throw new Error("No "+e)
;return a[e]}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice;o=function(e,t){var n,r=w(e),i=r[0];return e=r[1],i&&(i=v(i,t),n=b(i)),i?n&&n.normalize?e=n.normalize(e,g(t)):e=v(e,t):(e=v(e,t),r=w(e),i=r[0],e=r[1],i&&(n=b(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return m(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:E(e)}}},i=function(e,t,n,i){var s,l,h,p,v,g=[],w;i=i||e;
if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(v=0;v<t.length;v+=1){p=o(t[v],i),l=p.f;
if(l==="require")g[v]=u.require(e)
;else if(l==="exports")g[v]=u.exports(e),w=!0;else if(l==="module")s=g[v]=u.module(e)
;else if(d(a,l)||d(f,l)||d(c,l))g[v]=b(l)
;else{if(!p.p)throw new Error(e+" missing "+l)
;p.p.load(p.n,m(i,!0),y(l),{}),g[v]=a[l]}}h=n.apply(a[e],g)
;
if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!w)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){return typeof e=="string"?u[e]?u[e](t):b(o(e,t).f):(e.splice||(l=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s)},s.config=function(e){return l=e,l.deps&&s(l.deps,l.callback),s},n=function(e,t,n){t.splice||(n=t,t=[]),!d(a,e)&&!d(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),n("vendor/almond",function(){}),function(e,t){typeof exports=="object"?module.exports=t():typeof n=="function"&&n.amd?n("vendor/spin",t):e.Spinner=t()}(this,function(){function r(e,t){var n=document.createElement(e||"div"),r;for(r in t)n[r]=t[r];return n}function i(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t])
;return e}function o(e,r,i,o){var u=["opacity",r,~~(e*100),i,o].join("-"),a=.01+i/o*100,f=Math.max(1-(1-e)/r*(100-a),e),l=n.substring(0,n.indexOf("Animation")).toLowerCase(),c=l&&"-"+l+"-"||"";return t[u]||(s.insertRule("@"+c+"keyframes "+u+"{"+"0%{opacity:"+f+"}"+a+"%{opacity:"+e+"}"+(a+.01)+"%{opacity:1}"+(a+r)%100+"%{opacity:"+e+"}"+"100%{opacity:"+f+"}"+"}",s.cssRules.length),t[u]=1),u}function u(t,n){var r=t.style,i,s;
if(r[n]!==undefined)return n;n=n.charAt(0).toUpperCase()+n.slice(1)
;for(s=0;s<e.length;s++){i=e[s]+n;
if(r[i]!==undefined)return i}}function a(e,t){for(var n in t)e.style[u(e,n)||n]=t[n];return e}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]===undefined&&(e[r]=n[r])}return e}function l(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function h(e){if(typeof this=="undefined")return new h(e)
;this.opts=f(e||{},h.defaults,c)}function p(){function e(e,t){return r("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}s.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(t,n){function o(){return a(e("group",{coordsize:s+" "+s,coordorigin:-r+" "+ -r}),{width:s,height:s})}function c(t,s,u){i(f,i(a(o(),{rotation:360/n.lines*t+"deg",left:~~s}),i(a(e("roundrect",{arcsize:n.corners}),{width:r,height:n.width,left:n.radius,top:-n.width>>1,filter:u}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var r=n.length+n.width,s=2*r,u=-(n.width+n.length)*2+"px",f=a(o(),{position:"absolute",top:u,left:u}),l;
if(n.shadow)for(l=1;l<=n.lines;l++)c(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
;for(l=1;l<=n.lines;l++)c(l)
;return i(t,f)},h.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}}var e=["webkit","Moz","ms","O"],t={},n,s=function(){var e=r("style",{type:"text/css"})
;return i(document.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),c={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};h.defaults={},f(h.prototype,{spin:function(e){this.stop()
;var t=this,i=t.opts,s=t.el=a(r(0,{className:i.className}),{position:i.position,width:0,zIndex:i.zIndex}),o=i.radius+i.length+i.width,u,f;e&&(e.insertBefore(s,e.firstChild||null),f=l(e),u=l(s),a(s,{left:(i.left=="auto"?f.x-u.x+(e.offsetWidth>>1):parseInt(i.left,10)+o)+"px",top:(i.top=="auto"?f.y-u.y+(e.offsetHeight>>1):parseInt(i.top,10)+o)+"px"})),s.setAttribute("role","progressbar"),t.lines(s,t.opts)
;
if(!n){var c=0,h=(i.lines-1)*(1-i.direction)/2,p,d=i.fps,v=d/i.speed,m=(1-i.opacity)/(v*i.trail/100),g=v/i.lines;(function y(){c++;for(var e=0;e<i.lines;e++)p=Math.max(1-(c+(i.lines-e)*g)%v*m,i.opacity),t.opacity(s,e*i.direction+h,p,i)
;t.timeout=t.el&&setTimeout(y,~~(1e3/d))})()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=undefined),this},lines:function(e,t){function l(e,n){return a(r(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*s+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.corners*t.width>>1)+"px"})}var s=0,u=(t.lines-1)*(1-t.direction)/2,f;for(;s<t.lines;s++)f=a(r(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:n&&o(t.opacity,t.trail,u+s*t.direction,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&i(f,a(l("#000","0 0 4px #000"),{top:"2px"})),i(e,i(f,l(t.color,"0 0 1px rgba(0,0,0,.1)")))
;return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}})
;var d=a(r("group"),{behavior:"url(#default#VML)"})
;return!u(d,"transform")&&d.adj?p():n=u(d,"animation"),h}),function(e,t){function B(e){var t=e.length,n=E.type(e)
;return E.isWindow(e)?!1:e.nodeType===1&&t?!0:n==="array"||n!=="function"&&(t===0||typeof t=="number"&&t>0&&t-1 in e)}function F(e){var t=j[e]={};return E.each(e.match(x)||[],function(e,n){t[n]=!0}),t}function R(e,n,r,i){if(!E.acceptData(e))return;var s,o,u=E.expando,a=e.nodeType,f=a?E.cache:e,l=a?e[u]:e[u]&&u;
if((!l||!f[l]||!i&&!f[l].data)&&r===t&&typeof n=="string")return;l||(a?l=e[u]=h.pop()||E.guid++:l=u),f[l]||(f[l]=a?{}:{toJSON:E.noop})
;
if(typeof n=="object"||typeof n=="function")i?f[l]=E.extend(f[l],n):f[l].data=E.extend(f[l].data,n)
;return o=f[l],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[E.camelCase(n)]=r),typeof n=="string"?(s=o[n],s==null&&(s=o[E.camelCase(n)])):s=o,s}function U(e,t,n){if(!E.acceptData(e))return;var r,i,s=e.nodeType,o=s?E.cache:e,u=s?e[E.expando]:E.expando;
if(!o[u])return;
if(t){r=n?o[u]:o[u].data;
if(r){E.isArray(t)?t=t.concat(E.map(t,E.camelCase)):t in r?t=[t]:(t=E.camelCase(t),t in r?t=[t]:t=t.split(" ")),i=t.length;while(i--)delete r[t[i]];
if(n?!W(r):!E.isEmptyObject(r))return}}if(!n){delete o[u].data;
if(!W(o[u]))return}s?E.cleanData([e],!0):E.support.deleteExpando||o!=o.window?delete o[u]:o[u]=null}function z(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(q,"-$1").toLowerCase()
;r=e.getAttribute(i)
;
if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:I.test(r)?E.parseJSON(r):r}catch(s){}E.data(e,n,r)}else r=t}return r}function W(e){var t;for(t in e){if(t==="data"&&E.isEmptyObject(e[t]))continue;
if(t!=="toJSON")return!1}return!0}function st(){return!0}function ot(){return!1}function ut(){try{return u.activeElement}catch(e){}}function ht(e,t){do e=e[t];while(e&&e.nodeType!==1)
;return e}function pt(e,t,n){if(E.isFunction(t))return E.grep(e,function(e,r){return!!t.call(e,r,e)!==n})
;
if(t.nodeType)return E.grep(e,function(e){return e===t!==n})
;
if(typeof t=="string"){if(at.test(t))return E.filter(t,e,n)
;t=E.filter(t,e)}return E.grep(e,function(e){return E.inArray(e,t)>=0!==n})}function dt(e){var t=vt.split("|"),n=e.createDocumentFragment()
;
if(n.createElement)while(t.length)n.createElement(t.pop())
;return n}function _t(e,t){return E.nodeName(e,"table")&&E.nodeName(t.nodeType===1?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Dt(e){return e.type=(E.find.attr(e,"type")!==null)+"/"+e.type,e}function Pt(e){var t=kt.exec(e.type)
;return t?e.type=t[1]:e.removeAttribute("type"),e}function Ht(e,t){var n,r=0;for(;(n=e[r])!=null;r++)E._data(n,"globalEval",!t||E._data(t[r],"globalEval"))}function Bt(e,t){if(t.nodeType!==1||!E.hasData(e))return;var n,r,i,s=E._data(e),o=E._data(t,s),u=s.events;
if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)E.event.add(t,n,u[n][r])}o.data&&(o.data=E.extend({},o.data))}function jt(e,t){var n,r,i;
if(t.nodeType!==1)return;n=t.nodeName.toLowerCase()
;
if(!E.support.noCloneEvent&&t[E.expando]){i=E._data(t)
;for(r in i.events)E.removeEvent(t,r,i.handle)
;t.removeAttribute(E.expando)}if(n==="script"&&t.text!==e.text)Dt(t).text=e.text,Pt(t)
;else if(n==="object")t.parentNode&&(t.outerHTML=e.outerHTML),E.support.html5Clone&&e.innerHTML&&!E.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)
;else if(n==="input"&&Tt.test(e.type))t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)
;else if(n==="option")t.defaultSelected=t.selected=e.defaultSelected;else if(n==="input"||n==="textarea")t.defaultValue=e.defaultValue}function Ft(e,n){var r,i,o=0,u=typeof e.getElementsByTagName!==s?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==s?e.querySelectorAll(n||"*"):t;
if(!u)for(u=[],r=e.childNodes||e;(i=r[o])!=null;o++)!n||E.nodeName(i,n)?u.push(i):E.merge(u,Ft(i,n))
;return n===t||n&&E.nodeName(e,n)?E.merge([e],u):u}function It(e){Tt.test(e.type)&&(e.defaultChecked=e.checked)}function nn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=tn.length;while(i--){t=tn[i]+n;
if(t in e)return t}return r}function rn(e,t){return e=t||e,E.css(e,"display")==="none"||!E.contains(e.ownerDocument,e)}function sn(e,t){var n,r,i,s=[],o=0,u=e.length;for(;o<u;o++){r=e[o];
if(!r.style)continue;s[o]=E._data(r,"olddisplay"),n=r.style.display,t?(!s[o]&&n==="none"&&(r.style.display=""),r.style.display===""&&rn(r)&&(s[o]=E._data(r,"olddisplay",fn(r.nodeName)))):s[o]||(i=rn(r),(n&&n!=="none"||!i)&&E._data(r,"olddisplay",i?n:E.css(r,"display")))}for(o=0;o<u;o++){r=e[o];
if(!r.style)continue;
if(!t||r.style.display==="none"||r.style.display==="")r.style.display=t?s[o]||"":"none"}return e}function on(e,t,n){var r=Jt.exec(t)
;return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function un(e,t,n,r,i){var s=n===(r?"border":"content")?4:t==="width"?1:0,o=0;for(;s<4;s+=2)n==="margin"&&(o+=E.css(e,n+en[s],!0,i)),r?(n==="content"&&(o-=E.css(e,"padding"+en[s],!0,i)),n!=="margin"&&(o-=E.css(e,"border"+en[s]+"Width",!0,i))):(o+=E.css(e,"padding"+en[s],!0,i),n!=="padding"&&(o+=E.css(e,"border"+en[s]+"Width",!0,i)))
;return o}function an(e,t,n){var r=!0,i=t==="width"?e.offsetWidth:e.offsetHeight,s=Rt(e),o=E.support.boxSizing&&E.css(e,"boxSizing",!1,s)==="border-box";
if(i<=0||i==null){i=Ut(e,t,s)
;
if(i<0||i==null)i=e.style[t];
if(Kt.test(i))return i;r=o&&(E.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+un(e,t,n||(o?"border":"content"),r,s)+"px"}function fn(e){var t=u,n=Gt[e];
if(!n){n=ln(e,t)
;
if(n==="none"||!n)qt=(qt||E("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(qt[0].contentWindow||qt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),qt.detach()
;Gt[e]=n}return n}function ln(e,t){var n=E(t.createElement(e)).appendTo(t.body),r=E.css(n[0],"display")
;return n.remove(),r}function mn(e,t,n,r){var i;
if(E.isArray(t))E.each(t,function(t,i){n||hn.test(e)?r(e,i):mn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)})
;else if(!n&&E.type(t)==="object")for(i in t)mn(e+"["+i+"]",t[i],n,r)
;else r(e,t)}function Dn(e){return function(t,n){typeof t!="string"&&(n=t,t="*")
;var r,i=0,s=t.toLowerCase().match(x)||[];
if(E.isFunction(n))while(r=s[i++])r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Pn(e,t,n,r){function o(u){var a;return i[u]=!0,E.each(e[u]||[],function(e,u){var f=u(t,n,r)
;
if(typeof f=="string"&&!s&&!i[f])return t.dataTypes.unshift(f),o(f),!1;
if(s)return!(a=f)}),a}var i={},s=e===On;return o(t.dataTypes[0])||!i["*"]&&o("*")}function Hn(e,n){var r,i,s=E.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((s[i]?e:r||(r={}))[i]=n[i])
;return r&&E.extend(!0,e,r),e}function Bn(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes;while(f[0]==="*")f.shift(),s===t&&(s=e.mimeType||n.getResponseHeader("Content-Type"))
;
if(s)for(u in a)if(a[u]&&a[u].test(s)){f.unshift(u)
;break}if(f[0]in r)o=f[0];else{for(u in r){if(!f[0]||e.converters[u+" "+f[0]]){o=u;break}i||(i=u)}o=o||i}if(o)return o!==f[0]&&f.unshift(o),r[o]}function jn(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice()
;
if(l[1])for(o in e.converters)f[o.toLowerCase()]=e.converters[o];s=l.shift()
;while(s){e.responseFields[s]&&(n[e.responseFields[s]]=t),!a&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a=s,s=l.shift()
;
if(s)if(s==="*")s=a;else if(a!=="*"&&a!==s){o=f[a+" "+s]||f["* "+s];
if(!o)for(i in f){u=i.split(" ")
;
if(u[1]===s){o=f[a+" "+u[0]]||f["* "+u[0]];
if(o){o===!0?o=f[i]:f[i]!==!0&&(s=u[0],l.unshift(u[1]))
;break}}}if(o!==!0)if(o&&e["throws"])t=o(t)
;else try{t=o(t)}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+a+" to "+s}}}}return{state:"success",data:t}}function Wn(){try{return new e.XMLHttpRequest}catch(t){}}function Xn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function Zn(){return setTimeout(function(){Vn=t}),Vn=E.now()}function er(e,t,n){var r,i=(Yn[t]||[]).concat(Yn["*"]),s=0,o=i.length;for(;s<o;s++)if(r=i[s].call(n,t,e))return r}function tr(e,t,n){var r,i,s=0,o=Gn.length,u=E.Deferred().always(function(){delete a.elem}),a=function(){if(i)return!1;var t=Vn||Zn(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;for(;o<a;o++)f.tweens[o].run(s)
;return u.notifyWith(e,[f,s,n]),s<1&&a?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Vn||Zn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=E.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing)
;return f.tweens.push(r),r},stop:function(t){var n=0,r=t?f.tweens.length:0;
if(i)return this;i=!0;for(;n<r;n++)f.tweens[n].run(1)
;return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;nr(l,f.opts.specialEasing)
;for(;s<o;s++){r=Gn[s].call(f,e,l,f.opts)
;
if(r)return r}return E.map(l,er,f),E.isFunction(f.opts.start)&&f.opts.start.call(e,f),E.fx.timer(E.extend(a,{elem:e,anim:f,queue:f.opts.queue})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function nr(e,t){var n,r,i,s,o;for(n in e){r=E.camelCase(n),i=t[r],s=e[n],E.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=E.cssHooks[r];
if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function rr(e,t,n){var r,i,s,o,u,a,f=this,l={},c=e.style,h=e.nodeType&&rn(e),p=E._data(e,"fxshow")
;n.queue||(u=E._queueHooks(e,"fx"),u.unqueued==null&&(u.unqueued=0,a=u.empty.fire,u.empty.fire=function(){u.unqueued||a()}),u.unqueued++,f.always(function(){f.always(function(){u.unqueued--,E.queue(e,"fx").length||u.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[c.overflow,c.overflowX,c.overflowY],E.css(e,"display")==="inline"&&E.css(e,"float")==="none"&&(!E.support.inlineBlockNeedsLayout||fn(e.nodeName)==="inline"?c.display="inline-block":c.zoom=1)),n.overflow&&(c.overflow="hidden",E.support.shrinkWrapBlocks||f.always(function(){c.overflow=n.overflow[0],c.overflowX=n.overflow[1],c.overflowY=n.overflow[2]}))
;for(r in t){i=t[r];
if(Jn.exec(i)){delete t[r],s=s||i==="toggle";
if(i===(h?"hide":"show"))continue;l[r]=p&&p[r]||E.style(e,r)}}if(!E.isEmptyObject(l)){p?"hidden"in p&&(h=p.hidden):p=E._data(e,"fxshow",{}),s&&(p.hidden=!h),h?E(e).show():f.done(function(){E(e).hide()}),f.done(function(){var t;E._removeData(e,"fxshow")
;for(t in l)E.style(e,t,l[t])})
;for(r in l)o=er(h?p[r]:0,r,f),r in p||(p[r]=o.start,h&&(o.end=o.start,o.start=r==="width"||r==="height"?1:0))}}function ir(e,t,n,r,i){return new ir.prototype.init(e,t,n,r,i)}function sr(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=en[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function or(e){return E.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var r,i,s=typeof t,o=e.location,u=e.document,a=u.documentElement,f=e.jQuery,l=e.$,c={},h=[],p="1.10.2",d=h.concat,v=h.push,m=h.slice,g=h.indexOf,y=c.toString,b=c.hasOwnProperty,w=p.trim,E=function(e,t){return new E.fn.init(e,t,i)},S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,x=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,L=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,O=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,M=/^-ms-/,_=/-([\da-z])/gi,D=function(e,t){return t.toUpperCase()},P=function(e){if(u.addEventListener||e.type==="load"||u.readyState==="complete")H(),E.ready()},H=function(){u.addEventListener?(u.removeEventListener("DOMContentLoaded",P,!1),e.removeEventListener("load",P,!1)):(u.detachEvent("onreadystatechange",P),e.detachEvent("onload",P))};E.fn=E.prototype={jquery:p,constructor:E,init:function(e,n,r){var i,s;
if(!e)return this;
if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?i=[null,e,null]:i=N.exec(e)
;
if(i&&(i[1]||!n)){if(i[1]){n=n instanceof E?n[0]:n,E.merge(this,E.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:u,!0))
;
if(C.test(i[1])&&E.isPlainObject(n))for(i in n)E.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
;return this}s=u.getElementById(i[2])
;
if(s&&s.parentNode){if(s.id!==i[2])return r.find(e)
;this.length=1,this[0]=s}return this.context=u,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return e.nodeType?(this.context=this[0]=e,this.length=1,this):E.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),E.makeArray(e,this))},selector:"",length:0,toArray:function(){return m.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e)
;return t.prevObject=this,t.context=this.context,t},each:function(e,t){return E.each(this,e,t)},ready:function(e){return E.ready.promise().done(e),this},slice:function(){return this.pushStack(m.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
;return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(E.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:v,sort:[].sort,splice:[].splice},E.fn.init.prototype=E.fn,E.extend=E.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!E.isFunction(u)&&(u={}),f===a&&(u=this,--a)
;for(;a<f;a++)if((s=arguments[a])!=null)for(i in s){e=u[i],r=s[i];
if(u===r)continue;l&&r&&(E.isPlainObject(r)||(n=E.isArray(r)))?(n?(n=!1,o=e&&E.isArray(e)?e:[]):o=e&&E.isPlainObject(e)?e:{},u[i]=E.extend(l,o,r)):r!==t&&(u[i]=r)}return u},E.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===E&&(e.$=l),t&&e.jQuery===E&&(e.jQuery=f),E},isReady:!1,readyWait:1,holdReady:function(e){e?E.readyWait++:E.ready(!0)},ready:function(e){if(e===!0?--E.readyWait:E.isReady)return;
if(!u.body)return setTimeout(E.ready)
;E.isReady=!0;
if(e!==!0&&--E.readyWait>0)return;r.resolveWith(u,[E]),E.fn.trigger&&E(u).trigger("ready").off("ready")},isFunction:function(e){return E.type(e)==="function"},isArray:Array.isArray||function(e){return E.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):typeof e=="object"||typeof e=="function"?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;
if(!e||E.type(e)!=="object"||e.nodeType||E.isWindow(e))return!1;try{if(e.constructor&&!b.call(e,"constructor")&&!b.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(E.support.ownLast)for(n in e)return b.call(e,n)
;for(n in e)
;return n===t||b.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||typeof e!="string")return null;typeof t=="boolean"&&(n=t,t=!1),t=t||u;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=E.buildFragment([e],t,i),i&&E(i).remove(),E.merge([],r.childNodes))},parseJSON:function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t)
;
if(t===null)return t;
if(typeof t=="string"){t=E.trim(t)
;
if(t&&k.test(t.replace(A,"@").replace(O,"]").replace(L,"")))return(new Function("return "+t))()}E.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;
if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&E.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&E.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(M,"ms-").replace(_,D)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,s=e.length,o=B(e)
;
if(n)if(o)for(;i<s;i++){r=t.apply(e[i],n)
;
if(r===!1)break}else for(i in e){r=t.apply(e[i],n)
;
if(r===!1)break}else if(o)for(;i<s;i++){r=t.call(e[i],i,e[i])
;
if(r===!1)break}else for(i in e){r=t.call(e[i],i,e[i])
;
if(r===!1)break}return e},trim:w&&!w.call("ï»¿Â ")?function(e){return e==null?"":w.call(e)}:function(e){return e==null?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return e!=null&&(B(Object(e))?E.merge(n,typeof e=="string"?[e]:e):v.call(n,e)),n},inArray:function(e,t,n){var r;
if(t){if(g)return g.call(t,e,n)
;r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;
if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s])
;return i},map:function(e,t,n){var r,i=0,s=e.length,o=B(e),u=[];
if(o)for(;i<s;i++)r=t(e[i],i,n),r!=null&&(u[u.length]=r)
;else for(i in e)r=t(e[i],i,n),r!=null&&(u[u.length]=r)
;return d.apply([],u)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(s=e[n],n=e,e=s),E.isFunction(e)?(r=m.call(arguments,2),i=function(){return e.apply(n||this,r.concat(m.call(arguments)))},i.guid=e.guid=e.guid||E.guid++,i):t},access:function(e,n,r,i,s,o,u){var a=0,f=e.length,l=r==null;
if(E.type(r)==="object"){s=!0;for(a in r)E.access(e,n,a,r[a],!0,o,u)}else if(i!==t){s=!0,E.isFunction(i)||(u=!0),l&&(u?(n.call(e,i),n=null):(l=n,n=function(e,t,n){return l.call(E(e),n)}))
;
if(n)for(;a<f;a++)n(e[a],r,u?i:i.call(e[a],a,n(e[a],r)))}return s?e:l?n.call(e):f?n(e[0],r):o},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,s,o={};for(s in t)o[s]=e.style[s],e.style[s]=t[s];i=n.apply(e,r||[])
;for(s in t)e.style[s]=o[s];return i}}),E.ready.promise=function(t){if(!r){r=E.Deferred()
;
if(u.readyState==="complete")setTimeout(E.ready)
;else if(u.addEventListener)u.addEventListener("DOMContentLoaded",P,!1),e.addEventListener("load",P,!1)
;else{u.attachEvent("onreadystatechange",P),e.attachEvent("onload",P)
;var n=!1;try{n=e.frameElement==null&&u.documentElement}catch(i){}n&&n.doScroll&&function s(){if(!E.isReady){try{n.doScroll("left")}catch(e){return setTimeout(s,50)}H(),E.ready()}}()}}return r.promise(t)},E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()}),i=E(u),function(e,t){function ot(e,t,n,i){var s,o,u,a,f,l,p,m,g,E;(t?t.ownerDocument||t:w)!==h&&c(t),t=t||h,n=n||[];
if(!e||typeof e!="string")return n;
if((a=t.nodeType)!==1&&a!==9)return[];
if(d&&!i){if(s=Z.exec(e))if(u=s[1]){if(a===9){o=t.getElementById(u)
;
if(!o||!o.parentNode)return n;
if(o.id===u)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(u))&&y(t,o)&&o.id===u)return n.push(o),n}else{if(s[2])return H.apply(n,t.getElementsByTagName(e)),n;
if((u=s[3])&&r.getElementsByClassName&&t.getElementsByClassName)return H.apply(n,t.getElementsByClassName(u)),n}if(r.qsa&&(!v||!v.test(e))){m=p=b,g=t,E=a===9&&e;
if(a===1&&t.nodeName.toLowerCase()!=="object"){l=mt(e),(p=t.getAttribute("id"))?m=p.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",f=l.length;while(f--)l[f]=m+gt(l[f])
;g=$.test(e)&&t.parentNode||t,E=l.join(",")}if(E)try{return H.apply(n,g.querySelectorAll(E)),n}catch(S){}finally{p||t.removeAttribute("id")}}}return Nt(e.replace(W,"$1"),t,n,i)}function ut(){function t(n,r){return e.push(n+=" ")>s.cacheLength&&delete t[e.shift()],t[n]=r}var e=[];return t}function at(e){return e[b]=!0,e}function ft(e){var t=h.createElement("div")
;try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)s.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||O)-(~e.sourceIndex||O)
;
if(r)return r;
if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ht(e){return function(t){var n=t.nodeName.toLowerCase()
;return n==="input"&&t.type===e}}function pt(e){return function(t){var n=t.nodeName.toLowerCase()
;return(n==="input"||n==="button")&&t.type===e}}function dt(e){return at(function(t){return t=+t,at(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function vt(){}function mt(e,t){var n,r,i,o,u,a,f,l=N[e+" "];
if(l)return t?0:l.slice(0)
;u=e,a=[],f=s.preFilter;while(u){if(!n||(r=X.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(i=[])
;n=!1;
if(r=V.exec(u))n=r.shift(),i.push({value:n,type:r[0].replace(W," ")}),u=u.slice(n.length)
;for(o in s.filter)(r=G[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(n=r.shift(),i.push({value:n,type:o,matches:r}),u=u.slice(n.length))
;
if(!n)break}return t?u.length:u?ot.error(e):N(e,a).slice(0)}function gt(e){var t=0,n=e.length,r="";for(;t<n;t++)r+=e[t].value;return r}function yt(e,t,n){var r=t.dir,s=n&&r==="parentNode",o=x++;return t.first?function(t,n,i){while(t=t[r])if(t.nodeType===1||s)return e(t,n,i)}:function(t,n,u){var a,f,l,c=S+" "+o;
if(u){while(t=t[r])if(t.nodeType===1||s)if(e(t,n,u))return!0}else while(t=t[r])if(t.nodeType===1||s){l=t[b]||(t[b]={})
;
if((f=l[r])&&f[0]===c){if((a=f[1])===!0||a===i)return a===!0}else{f=l[r]=[c],f[1]=e(t,n,u)||i;
if(f[1]===!0)return!0}}}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function wt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u)
;return o}function Et(e,t,n,r,i,s){return r&&!r[b]&&(r=Et(r)),i&&!i[b]&&(i=Et(i,s)),at(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||Tt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?wt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a)
;
if(r){f=wt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c)
;i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?j.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=wt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):H.apply(o,g)})}function St(e){var t,n,r,i=e.length,o=s.relative[e[0].type],u=o||s.relative[" "],a=o?1:0,l=yt(function(e){return e===t},u,!0),c=yt(function(e){return j.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==f)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];for(;a<i;a++)if(n=s.relative[e[a].type])h=[yt(bt(h),n)];else{n=s.filter[e[a].type].apply(null,e[a].matches);
if(n[b]){r=++a;for(;r<i;r++)if(s.relative[e[r].type])break;return Et(a>1&&bt(h),a>1&&gt(e.slice(0,a-1).concat({value:e[a-2].type===" "?"*":""})).replace(W,"$1"),n,a<r&&St(e.slice(a,r)),r<i&&St(e=e.slice(r)),r<i&&gt(e))}h.push(n)}return bt(h)}function xt(e,t){var n=0,r=t.length>0,o=e.length>0,u=function(u,a,l,c,p){var d,v,m,g=[],y=0,b="0",w=u&&[],E=p!=null,x=f,T=u||o&&s.find.TAG("*",p&&a.parentNode||a),N=S+=x==null?1:Math.random()||.1;E&&(f=a!==h&&a,i=n)
;for(;(d=T[b])!=null;b++){if(o&&d){v=0;while(m=e[v++])if(m(d,a,l)){c.push(d)
;break}E&&(S=N,i=++n)}r&&((d=!m&&d)&&y--,u&&w.push(d))}y+=b;
if(r&&b!==y){v=0;while(m=t[v++])m(w,g,a,l)
;
if(u){if(y>0)while(b--)!w[b]&&!g[b]&&(g[b]=D.call(c))
;g=wt(g)}H.apply(c,g),E&&!u&&g.length>0&&y+t.length>1&&ot.uniqueSort(c)}return E&&(S=N,f=x),w};return r?at(u):u}function Tt(e,t,n){var r=0,i=t.length;for(;r<i;r++)ot(e,t[r],n)
;return n}function Nt(e,t,n,i){var o,u,f,l,c,h=mt(e)
;
if(!i&&h.length===1){u=h[0]=h[0].slice(0)
;
if(u.length>2&&(f=u[0]).type==="ID"&&r.getById&&t.nodeType===9&&d&&s.relative[u[1].type]){t=(s.find.ID(f.matches[0].replace(rt,it),t)||[])[0];
if(!t)return n;e=e.slice(u.shift().value.length)}o=G.needsContext.test(e)?0:u.length;while(o--){f=u[o];
if(s.relative[l=f.type])break;
if(c=s.find[l])if(i=c(f.matches[0].replace(rt,it),$.test(u[0].type)&&t.parentNode||t)){u.splice(o,1),e=i.length&&gt(u)
;
if(!e)return H.apply(n,i),n;break}}}return a(e,h)(i,t,!d,n,$.test(e)),n}var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b="sizzle"+ -(new Date),w=e.document,S=0,x=0,T=ut(),N=ut(),C=ut(),k=!1,L=function(e,t){return e===t?(k=!0,0):0},A=typeof t,O=1<<31,M={}.hasOwnProperty,_=[],D=_.pop,P=_.push,H=_.push,B=_.slice,j=_.indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",q="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",R=q.replace("w","w#"),U="\\["+I+"*("+q+")"+I+"*(?:([*^$|!~]?=)"+I+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+R+")|)|)"+I+"*\\]",z=":("+q+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+U.replace(3,8)+")*)|.*)\\)|)",W=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),X=new RegExp("^"+I+"*,"+I+"*"),V=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),$=new RegExp(I+"*[+~]"),J=new RegExp("="+I+"*([^\\]'\"]*)"+I+"*\\]","g"),K=new RegExp(z),Q=new RegExp("^"+R+"$"),G={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q.replace("w","w*")+")"),ATTR:new RegExp("^"+U),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+F+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)};try{H.apply(_=B.call(w.childNodes),w.childNodes),_[w.childNodes.length].nodeType}catch(st){H={apply:_.length?function(e,t){P.apply(e,B.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++])
;e.length=n-1}}}u=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},r=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:w,n=t.defaultView;
if(t===h||t.nodeType!==9||!t.documentElement)return h;h=t,p=t.documentElement,d=!u(t),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){c()}),r.attributes=ft(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ft(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ft(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",e.getElementsByClassName("i").length===2}),r.getById=ft(function(e){return p.appendChild(e).id=b,!t.getElementsByName||!t.getElementsByName(b).length}),r.getById?(s.find.ID=function(e,t){if(typeof t.getElementById!==A&&d){var n=t.getElementById(e)
;return n&&n.parentNode?[n]:[]}},s.filter.ID=function(e){var t=e.replace(rt,it)
;return function(e){return e.getAttribute("id")===t}}):(delete s.find.ID,s.filter.ID=function(e){var t=e.replace(rt,it)
;return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id")
;return n&&n.value===t}}),s.find.TAG=r.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==A)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e)
;
if(e==="*"){while(n=s[i++])n.nodeType===1&&r.push(n)
;return r}return s},s.find.CLASS=r.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==A&&d)return t.getElementsByClassName(e)},m=[],v=[];
if(r.qsa=Y.test(t.querySelectorAll))ft(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||v.push("\\["+I+"*(?:value|"+F+")"),e.querySelectorAll(":checked").length||v.push(":checked")}),ft(function(e){var n=t.createElement("input")
;n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&v.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})
;return(r.matchesSelector=Y.test(g=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ft(function(e){r.disconnectedMatch=g.call(e,"div"),g.call(e,"[s!='']:x"),m.push("!=",z)}),v=v.length&&new RegExp(v.join("|")),m=m.length&&new RegExp(m.join("|")),y=Y.test(p.contains)||p.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!r&&r.nodeType===1&&!!(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16)}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},L=p.compareDocumentPosition?function(e,n){if(e===n)return k=!0,0;var i=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n)
;
if(i)return i&1||!r.sortDetached&&n.compareDocumentPosition(e)===i?e===t||y(w,e)?-1:n===t||y(w,n)?1:l?j.call(l,e)-j.call(l,n):0:i&4?-1:1;return e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,s=e.parentNode,o=n.parentNode,u=[e],a=[n];
if(e===n)return k=!0,0;
if(!s||!o)return e===t?-1:n===t?1:s?-1:o?1:l?j.call(l,e)-j.call(l,n):0;
if(s===o)return ct(e,n)
;r=e;while(r=r.parentNode)u.unshift(r)
;r=n;while(r=r.parentNode)a.unshift(r)
;while(u[i]===a[i])i++;return i?ct(u[i],a[i]):u[i]===w?-1:a[i]===w?1:0},t},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){(e.ownerDocument||e)!==h&&c(e),t=t.replace(J,"='$1']")
;
if(r.matchesSelector&&d&&(!m||!m.test(t))&&(!v||!v.test(t)))try{var n=g.call(e,t)
;
if(n||r.disconnectedMatch||e.document&&e.document.nodeType!==11)return n}catch(i){}return ot(t,h,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==h&&c(e),y(e,t)},ot.attr=function(e,n){(e.ownerDocument||e)!==h&&c(e)
;var i=s.attrHandle[n.toLowerCase()],o=i&&M.call(s.attrHandle,n.toLowerCase())?i(e,n,!d):t;return o===t?r.attributes||!d?e.getAttribute(n):(o=e.getAttributeNode(n))&&o.specified?o.value:null:o},ot.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,n=[],i=0,s=0;k=!r.detectDuplicates,l=!r.sortStable&&e.slice(0),e.sort(L)
;
if(k){while(t=e[s++])t===e[s]&&(i=n.push(s))
;while(i--)e.splice(n[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(!i)for(;t=e[r];r++)n+=o(t)
;else if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(i===3||i===4)return e.nodeValue;return n},s=ot.selectors={cacheLength:50,createPseudo:at,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1].slice(0,3)==="nth"?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd")),e[5]=+(e[7]+e[8]||e[3]==="odd")):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return G.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&K.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase()
;return e==="*"?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&T(e,function(e){return t.test(typeof e.className=="string"&&e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e)
;return i==null?t==="!=":t?(i+="",t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;
if(m){if(s){while(v){c=t;while(c=c[v])if(u?c.nodeName.toLowerCase()===g:c.nodeType===1)return!1;d=v=e==="only"&&!d&&"nextSibling"}return!0}d=[o?m.firstChild:m.lastChild];
if(o&&y){l=m[b]||(m[b]={}),f=l[e]||[],p=f[0]===S&&f[1],h=f[0]===S&&f[2],c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if(c.nodeType===1&&++h&&c===t){l[e]=[S,p,h];break}}else if(y&&(f=(t[b]||(t[b]={}))[e])&&f[0]===S)h=f[1];else while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){y&&((c[b]||(c[b]={}))[e]=[S,h])
;
if(c===t)break}return h-=i,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var n,r=s.pseudos[e]||s.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e)
;return r[b]?r(t):r.length>1?(n=[e,e,"",t],s.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=j.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(W,"$1"))
;return r[b]?at(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return Q.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||n.indexOf(e+"-")===0;while((t=t.parentNode)&&t.nodeType===1)
;return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase()
;return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4)return!1;return!0},parent:function(e){return!s.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
;return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:dt(function(){return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[n<0?n+t:n]}),even:dt(function(e,t){var n=0;for(;n<t;n+=2)e.push(n)
;return e}),odd:dt(function(e,t){var n=1;for(;n<t;n+=2)e.push(n)
;return e}),lt:dt(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;)e.push(r)
;return e}),gt:dt(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;)e.push(r)
;return e})}},s.pseudos.nth=s.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})s.pseudos[n]=ht(n)
;for(n in{submit:!0,reset:!0})s.pseudos[n]=pt(n)
;vt.prototype=s.filters=s.pseudos,s.setFilters=new vt,a=ot.compile=function(e,t){var n,r=[],i=[],s=C[e+" "];
if(!s){t||(t=mt(e)),n=t.length;while(n--)s=St(t[n]),s[b]?r.push(s):i.push(s)
;s=C(e,xt(i,r))}return s},r.sortStable=b.split("").sort(L).join("")===b,r.detectDuplicates=k,c(),r.sortDetached=ft(function(e){return e.compareDocumentPosition(h.createElement("div"))&1}),ft(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild.getAttribute("href")==="#"})||lt("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}),(!r.attributes||!ft(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),e.firstChild.getAttribute("value")===""}))&&lt("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input")return e.defaultValue}),ft(function(e){return e.getAttribute("disabled")==null})||lt(F,function(e,t,n){var r;
if(!n)return(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),E.find=ot,E.expr=ot.selectors,E.expr[":"]=E.expr.pseudos,E.unique=ot.uniqueSort,E.text=ot.getText,E.isXMLDoc=ot.isXML,E.contains=ot.contains}(e)
;var j={};E.Callbacks=function(e){e=typeof e=="string"?j[e]||F(e):E.extend({},e)
;var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){r=e.memory&&t,i=!0,o=u||0,u=0,s=a.length,n=!0;for(;a&&o<s;o++)if(a[o].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,a&&(f?f.length&&l(f.shift()):r?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function i(t){E.each(t,function(t,n){var r=E.type(n)
;r==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&r!=="string"&&i(n)})})(arguments),n?s=a.length:r&&(u=t,l(r))}return this},remove:function(){return a&&E.each(arguments,function(e,t){var r;while((r=E.inArray(t,a,r))>-1)a.splice(r,1),n&&(r<=s&&s--,r<=o&&o--)}),this},has:function(e){return e?E.inArray(e,a)>-1:!!a&&!!a.length},empty:function(){return a=[],s=0,this},disable:function(){return a=f=r=t,this},disabled:function(){return!a},lock:function(){return f=t,r||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return a&&(!i||f)&&(t=t||[],t=[e,t.slice?t.slice():t],n?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},E.extend({Deferred:function(e){var t=[["resolve","done",E.Callbacks("once memory"),"resolved"],["reject","fail",E.Callbacks("once memory"),"rejected"],["notify","progress",E.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return E.Deferred(function(n){E.each(t,function(t,s){var o=s[0],u=E.isFunction(e[t])&&e[t];i[s[1]](function(){var e=u&&u.apply(this,arguments)
;e&&E.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===r?n.promise():this,u?[e]:arguments)})}),e=null}).promise()},promise:function(e){return e!=null?E.extend(e,r):r}},i={};return r.pipe=r.then,E.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=function(){return i[s[0]+"With"](this===i?r:this,arguments),this},i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=m.call(arguments),r=n.length,i=r!==1||e&&E.isFunction(e.promise)?r:0,s=i===1?e:E.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?m.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;
if(r>1){u=new Array(r),a=new Array(r),f=new Array(r)
;for(;t<r;t++)n[t]&&E.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),E.support=function(t){var n,r,i,o,a,f,l,c,h,p=u.createElement("div")
;p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*")||[],r=p.getElementsByTagName("a")[0];
if(!r||!r.style||!n.length)return t;o=u.createElement("select"),f=o.appendChild(u.createElement("option")),i=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute=p.className!=="t",t.leadingWhitespace=p.firstChild.nodeType===3,t.tbody=!p.getElementsByTagName("tbody").length,t.htmlSerialize=!!p.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized=r.getAttribute("href")==="/a",t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!i.value,t.optSelected=f.selected,t.enctype=!!u.createElement("form").enctype,t.html5Clone=u.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,i.checked=!0,t.noCloneChecked=i.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!f.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}i=u.createElement("input"),i.setAttribute("value",""),t.input=i.getAttribute("value")==="",i.value="t",i.setAttribute("type","radio"),t.radioValue=i.value==="t",i.setAttribute("checked","t"),i.setAttribute("name","t"),a=u.createDocumentFragment(),a.appendChild(i),t.appendChecked=i.checked,t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){t.noCloneEvent=!1}),p.cloneNode(!0).click())
;for(h in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+h,"t"),t[h+"Bubbles"]=l in e||p.attributes[l].expando===!1;p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle=p.style.backgroundClip==="content-box";for(h in E(t))break;return t.ownLast=h!=="0",E(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=u.getElementsByTagName("body")[0];
if(!a)return;n=u.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=p.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",c=i[0].offsetHeight===0,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=c&&i[0].offsetHeight===0,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",E.swap(a,a.style.zoom!=null?{zoom:1}:{},function(){t.boxSizing=p.offsetWidth===4}),e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(p,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(p,null)||{width:"4px"}).width==="4px",r=p.appendChild(u.createElement("div")),r.style.cssText=p.style.cssText=o,r.style.marginRight=r.style.width="0",p.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof p.style.zoom!==s&&(p.innerHTML="",p.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",t.shrinkWrapBlocks=p.offsetWidth!==3,t.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(n),n=p=i=r=null}),n=o=a=f=r=i=null,t}({})
;var I=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,q=/([A-Z])/g;E.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?E.cache[e[E.expando]]:e[E.expando],!!e&&!W(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return U(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return U(e,t,!0)},acceptData:function(e){if(e.nodeType&&e.nodeType!==1&&e.nodeType!==9)return!1;var t=e.nodeName&&E.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),E.fn.extend({data:function(e,n){var r,i,s=null,o=0,u=this[0];
if(e===t){if(this.length){s=E.data(u)
;
if(u.nodeType===1&&!E._data(u,"parsedAttrs")){r=u.attributes;for(;o<r.length;o++)i=r[o].name,i.indexOf("data-")===0&&(i=E.camelCase(i.slice(5)),z(u,i,s[i]))
;E._data(u,"parsedAttrs",!0)}}return s}return typeof e=="object"?this.each(function(){E.data(this,e)}):arguments.length>1?this.each(function(){E.data(this,e,n)}):u?z(u,e,E.data(u,e)):null},removeData:function(e){return this.each(function(){E.removeData(this,e)})}}),E.extend({queue:function(e,t,n){var r;
if(e)return t=(t||"fx")+"queue",r=E._data(e,t),n&&(!r||E.isArray(n)?r=E._data(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),s=E._queueHooks(e,t),o=function(){E.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return E._data(e,n)||E._data(e,n,{empty:E.Callbacks("once memory").add(function(){E._removeData(e,t+"queue"),E._removeData(e,n)})})}}),E.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?E.queue(this[0],e):n===t?this:this.each(function(){var t=E.queue(this,e,n)
;E._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&E.dequeue(this,e)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},delay:function(e,t){return e=E.fx?E.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e)
;n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=E.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=E._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a))
;return a(),s.promise(n)}})
;var X,V,$=/[\t\r\n\f]/g,J=/\r/g,K=/^(?:input|select|textarea|button|object)$/i,Q=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Y=E.support.getSetAttribute,Z=E.support.input;E.fn.extend({attr:function(e,t){return E.access(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})},prop:function(e,t){return E.access(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return e=E.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=typeof e=="string"&&e;
if(E.isFunction(e))return this.each(function(t){E(this).addClass(e.call(this,t,this.className))})
;
if(a){t=(e||"").match(x)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace($," "):" ")
;
if(r){s=0;while(i=t[s++])r.indexOf(" "+i+" ")<0&&(r+=i+" ")
;n.className=E.trim(r)}}}return this},removeClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=arguments.length===0||typeof e=="string"&&e;
if(E.isFunction(e))return this.each(function(t){E(this).removeClass(e.call(this,t,this.className))})
;
if(a){t=(e||"").match(x)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace($," "):"")
;
if(r){s=0;while(i=t[s++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ")
;n.className=e?E.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e;return typeof t=="boolean"&&n==="string"?t?this.addClass(e):this.removeClass(e):E.isFunction(e)?this.each(function(n){E(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var t,r=0,i=E(this),o=e.match(x)||[];while(t=o[r++])i.hasClass(t)?i.removeClass(t):i.addClass(t)}else if(n===s||n==="boolean")this.className&&E._data(this,"__className__",this.className),this.className=this.className||e===!1?"":E._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace($," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];
if(!arguments.length){if(s)return r=E.valHooks[s.type]||E.valHooks[s.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(s,"value"))!==t?n:(n=s.value,typeof n=="string"?n.replace(J,""):n==null?"":n)
;return}return i=E.isFunction(e),this.each(function(n){var s;
if(this.nodeType!==1)return;i?s=e.call(this,n,E(this).val()):s=e,s==null?s="":typeof s=="number"?s+="":E.isArray(s)&&(s=E.map(s,function(e){return e==null?"":e+""})),r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()];
if(!r||!("set"in r)||r.set(this,s,"value")===t)this.value=s})}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value")
;return t!=null?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];
if((n.selected||a===i)&&(E.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!E.nodeName(n.parentNode,"optgroup"))){t=E(n).val()
;
if(s)return t;o.push(t)}}return o},set:function(e,t){var n,r,i=e.options,s=E.makeArray(t),o=i.length;while(o--){r=i[o];
if(r.selected=E.inArray(E(r).val(),s)>=0)n=!0}return n||(e.selectedIndex=-1),s}}},attr:function(e,n,r){var i,o,u=e.nodeType;
if(!e||u===3||u===8||u===2)return;
if(typeof e.getAttribute===s)return E.prop(e,n,r)
;
if(u!==1||!E.isXMLDoc(e))n=n.toLowerCase(),i=E.attrHooks[n]||(E.expr.match.bool.test(n)?V:X)
;
if(r===t)return i&&"get"in i&&(o=i.get(e,n))!==null?o:(o=E.find.attr(e,n),o==null?t:o)
;
if(r!==null)return i&&"set"in i&&(o=i.set(e,r,n))!==t?o:(e.setAttribute(n,r+""),r)
;E.removeAttr(e,n)},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(x)
;
if(s&&e.nodeType===1)while(n=s[i++])r=E.propFix[n]||n,E.expr.match.bool.test(n)?Z&&Y||!G.test(n)?e[r]=!1:e[E.camelCase("default-"+n)]=e[r]=!1:E.attr(e,n,""),e.removeAttribute(Y?n:r)},attrHooks:{type:{set:function(e,t){if(!E.support.radioValue&&t==="radio"&&E.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,s,o,u=e.nodeType;
if(!e||u===3||u===8||u===2)return;return o=u!==1||!E.isXMLDoc(e),o&&(n=E.propFix[n]||n,s=E.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex")
;return t?parseInt(t,10):K.test(e.nodeName)||Q.test(e.nodeName)&&e.href?0:-1}}}}),V={set:function(e,t,n){return t===!1?E.removeAttr(e,n):Z&&Y||!G.test(n)?e.setAttribute(!Y&&E.propFix[n]||n,n):e[E.camelCase("default-"+n)]=e[n]=!0,n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,n){var r=E.expr.attrHandle[n]||E.find.attr;E.expr.attrHandle[n]=Z&&Y||!G.test(n)?function(e,n,i){var s=E.expr.attrHandle[n],o=i?t:(E.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return E.expr.attrHandle[n]=s,o}:function(e,n,r){return r?t:e[E.camelCase("default-"+n)]?n.toLowerCase():null}})
;
if(!Z||!Y)E.attrHooks.value={set:function(e,t,n){if(!E.nodeName(e,"input"))return X&&X.set(e,t,n)
;e.defaultValue=t}};Y||(X={set:function(e,n,r){var i=e.getAttributeNode(r)
;return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="",r==="value"||n===e.getAttribute(r)?n:t}},E.expr.attrHandle.id=E.expr.attrHandle.name=E.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.value!==""?i.value:null},E.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n)
;return r&&r.specified?r.value:t},set:X.set},E.attrHooks.contenteditable={set:function(e,t,n){X.set(e,t===""?!1:t,n)}},E.each(["width","height"],function(e,t){E.attrHooks[t]={set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}}})),E.support.hrefNormalized||E.each(["href","src"],function(e,t){E.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),E.support.style||(E.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),E.support.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.support.enctype||(E.propFix.enctype="encoding"),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(E.isArray(t))return e.checked=E.inArray(E(e).val(),t)>=0}},E.support.checkOn||(E.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})})
;var et=/^(?:input|select|textarea)$/i,tt=/^key/,nt=/^(?:mouse|contextmenu)|click/,rt=/^(?:focusinfocus|focusoutblur)$/,it=/^([^.]*)(?:\.(.+)|)$/;E.event={global:{},add:function(e,n,r,i,o){var u,a,f,l,c,h,p,d,v,m,g,y=E._data(e)
;
if(!y)return;r.handler&&(l=r,r=l.handler,o=l.selector),r.guid||(r.guid=E.guid++),(a=y.events)||(a=y.events={}),(h=y.handle)||(h=y.handle=function(e){return typeof E===s||!!e&&E.event.triggered===e.type?t:E.event.dispatch.apply(h.elem,arguments)},h.elem=e),n=(n||"").match(x)||[""],f=n.length;while(f--){u=it.exec(n[f])||[],v=g=u[1],m=(u[2]||"").split(".").sort()
;
if(!v)continue;c=E.event.special[v]||{},v=(o?c.delegateType:c.bindType)||v,c=E.event.special[v]||{},p=E.extend({type:v,origType:g,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&E.expr.match.needsContext.test(o),namespace:m.join(".")},l)
;
if(!(d=a[v])){d=a[v]=[],d.delegateCount=0;
if(!c.setup||c.setup.call(e,i,m,h)===!1)e.addEventListener?e.addEventListener(v,h,!1):e.attachEvent&&e.attachEvent("on"+v,h)}c.add&&(c.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),E.event.global[v]=!0}e=null},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=E.hasData(e)&&E._data(e)
;
if(!m||!(l=m.events))return;t=(t||"").match(x)||[""],f=t.length;while(f--){u=it.exec(t[f])||[],p=v=u[1],d=(u[2]||"").split(".").sort()
;
if(!p){for(p in l)E.event.remove(e,p+t[f],n,r,!0)
;continue}c=E.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,h=l[p]||[],u=u[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=s=h.length;while(s--)o=h[s],(i||v===o.origType)&&(!n||n.guid===o.guid)&&(!u||u.test(o.namespace))&&(!r||r===o.selector||r==="**"&&o.selector)&&(h.splice(s,1),o.selector&&h.delegateCount--,c.remove&&c.remove.call(e,o))
;a&&!h.length&&((!c.teardown||c.teardown.call(e,d,m.handle)===!1)&&E.removeEvent(e,p,m.handle),delete l[p])}E.isEmptyObject(l)&&(delete m.handle,E._removeData(e,"events"))},trigger:function(n,r,i,s){var o,a,f,l,c,h,p,d=[i||u],v=b.call(n,"type")?n.type:n,m=b.call(n,"namespace")?n.namespace.split("."):[];f=h=i=i||u;
if(i.nodeType===3||i.nodeType===8)return;
if(rt.test(v+E.event.triggered))return;v.indexOf(".")>=0&&(m=v.split("."),v=m.shift(),m.sort()),a=v.indexOf(":")<0&&"on"+v,n=n[E.expando]?n:new E.Event(v,typeof n=="object"&&n),n.isTrigger=s?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=r==null?[n]:E.makeArray(r,[n]),c=E.event.special[v]||{};
if(!s&&c.trigger&&c.trigger.apply(i,r)===!1)return;
if(!s&&!c.noBubble&&!E.isWindow(i)){l=c.delegateType||v,rt.test(l+v)||(f=f.parentNode)
;for(;f;f=f.parentNode)d.push(f),h=f;h===(i.ownerDocument||u)&&d.push(h.defaultView||h.parentWindow||e)}p=0;while((f=d[p++])&&!n.isPropagationStopped())n.type=p>1?l:c.bindType||v,o=(E._data(f,"events")||{})[n.type]&&E._data(f,"handle"),o&&o.apply(f,r),o=a&&f[a],o&&E.acceptData(f)&&o.apply&&o.apply(f,r)===!1&&n.preventDefault()
;n.type=v;
if(!s&&!n.isDefaultPrevented()&&(!c._default||c._default.apply(d.pop(),r)===!1)&&E.acceptData(i)&&a&&i[v]&&!E.isWindow(i)){h=i[a],h&&(i[a]=null),E.event.triggered=v;try{i[v]()}catch(g){}E.event.triggered=t,h&&(i[a]=h)}return n.result},dispatch:function(e){e=E.event.fix(e)
;var n,r,i,s,o,u=[],a=m.call(arguments),f=(E._data(this,"events")||{})[e.type]||[],l=E.event.special[e.type]||{};a[0]=e,e.delegateTarget=this;
if(l.preDispatch&&l.preDispatch.call(this,e)===!1)return;u=E.event.handlers.call(this,e,f),n=0;while((s=u[n++])&&!e.isPropagationStopped()){e.currentTarget=s.elem,o=0;while((i=s.handlers[o++])&&!e.isImmediatePropagationStopped())if(!e.namespace_re||e.namespace_re.test(i.namespace))e.handleObj=i,e.data=i.data,r=((E.event.special[i.origType]||{}).handle||i.handler).apply(s.elem,a),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation())}return l.postDispatch&&l.postDispatch.call(this,e),e.result},handlers:function(e,n){var r,i,s,o,u=[],a=n.delegateCount,f=e.target;
if(a&&f.nodeType&&(!e.button||e.type!=="click"))for(;f!=this;f=f.parentNode||this)if(f.nodeType===1&&(f.disabled!==!0||e.type!=="click")){s=[];for(o=0;o<a;o++)i=n[o],r=i.selector+" ",s[r]===t&&(s[r]=i.needsContext?E(r,this).index(f)>=0:E.find(r,this,null,[f]).length),s[r]&&s.push(i)
;s.length&&u.push({elem:f,handlers:s})}return a<n.length&&u.push({elem:this,handlers:n.slice(a)}),u},fix:function(e){if(e[E.expando])return e;var t,n,r,i=e.type,s=e,o=this.fixHooks[i];o||(this.fixHooks[i]=o=nt.test(i)?this.mouseHooks:tt.test(i)?this.keyHooks:{}),r=o.props?this.props.concat(o.props):this.props,e=new E.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=s.srcElement||u),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,s):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,s,o=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(i=e.target.ownerDocument||u,s=i.documentElement,r=i.body,e.pageX=n.clientX+(s&&s.scrollLeft||r&&r.scrollLeft||0)-(s&&s.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||r&&r.scrollTop||0)-(s&&s.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&o!==t&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ut()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===ut()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(E.nodeName(this,"input")&&this.type==="checkbox"&&this.click)return this.click(),!1},_default:function(e){return E.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=E.extend(new E.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
;r?E.event.trigger(i,null,t):E.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},E.removeEvent=u.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===s&&(e[r]=null),e.detachEvent(r,n))},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t)
;e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?st:ot):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||E.now(),this[E.expando]=!0},E.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=st;
if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=st;
if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=st,this.stopPropagation()}},E.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;
if(!i||i!==r&&!E.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),E.support.submitBubbles||(E.event.special.submit={setup:function(){if(E.nodeName(this,"form"))return!1;E.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=E.nodeName(n,"input")||E.nodeName(n,"button")?n.form:t;r&&!E._data(r,"submitBubbles")&&(E.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),E._data(r,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&E.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(E.nodeName(this,"form"))return!1;E.event.remove(this,"._submit")}}),E.support.changeBubbles||(E.event.special.change={setup:function(){if(et.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")E.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),E.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),E.event.simulate("change",this,e,!0)})
;return!1}E.event.add(this,"beforeactivate._change",function(e){var t=e.target;et.test(t.nodeName)&&!E._data(t,"changeBubbles")&&(E.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&E.event.simulate("change",this.parentNode,e,!0)}),E._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;
if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return E.event.remove(this,"._change"),!et.test(this.nodeName)}}),E.support.focusinBubbles||E.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){E.event.simulate(t,e.target,E.event.fix(e),!0)};E.event.special[t]={setup:function(){n++===0&&u.addEventListener(e,r,!0)},teardown:function(){--n===0&&u.removeEventListener(e,r,!0)}}}),E.fn.extend({on:function(e,n,r,i,s){var o,u;
if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t)
;for(o in e)this.on(o,n,r,e[o],s)
;return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t))
;
if(i===!1)i=ot;else if(!i)return this;return s===1&&(u=i,i=function(e){return E().off(e),u.apply(this,arguments)},i.guid=u.guid||(u.guid=E.guid++)),this.each(function(){E.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;
if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,E(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
if(typeof e=="object"){for(s in e)this.off(s,n,e[s])
;return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=ot),this.each(function(){E.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];
if(n)return E.event.trigger(e,t,n,!0)}})
;var at=/^.[^:#\[\.,]*$/,ft=/^(?:parents|prev(?:Until|All))/,lt=E.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};E.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if(typeof e!="string")return this.pushStack(E(e).filter(function(){for(t=0;t<i;t++)if(E.contains(r[t],this))return!0}))
;for(t=0;t<i;t++)E.find(e,r[t],n)
;return n=this.pushStack(i>1?E.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=E(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(E.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(pt(this,e||[],!0))},filter:function(e){return this.pushStack(pt(this,e||[],!1))},is:function(e){return!!pt(this,typeof e=="string"&&lt.test(e)?E(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,s=[],o=lt.test(e)||typeof e!="string"?E(e,t||this.context):0;for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:n.nodeType===1&&E.find.matchesSelector(n,e))){n=s.push(n)
;break}return this.pushStack(s.length>1?E.unique(s):s)},index:function(e){return e?typeof e=="string"?E.inArray(this[0],E(e)):E.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?E(e,t):E.makeArray(e&&e.nodeType?[e]:e),r=E.merge(this.get(),n)
;return this.pushStack(E.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return E.dir(e,"parentNode")},parentsUntil:function(e,t,n){return E.dir(e,"parentNode",n)},next:function(e){return ht(e,"nextSibling")},prev:function(e){return ht(e,"previousSibling")},nextAll:function(e){return E.dir(e,"nextSibling")},prevAll:function(e){return E.dir(e,"previousSibling")},nextUntil:function(e,t,n){return E.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return E.dir(e,"previousSibling",n)},siblings:function(e){return E.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return E.sibling(e.firstChild)},contents:function(e){return E.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:E.merge([],e.childNodes)}},function(e,t){E.fn[e]=function(n,r){var i=E.map(this,t,n)
;return e.slice(-5)!=="Until"&&(r=n),r&&typeof r=="string"&&(i=E.filter(r,i)),this.length>1&&(ct[e]||(i=E.unique(i)),ft.test(e)&&(i=i.reverse())),this.pushStack(i)}}),E.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),t.length===1&&r.nodeType===1?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return e.nodeType===1}))},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!E(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e)
;return n}})
;var vt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",mt=/ jQuery\d+="(?:null|\d+)"/g,gt=new RegExp("<(?:"+vt+")[\\s/>]","i"),yt=/^\s+/,bt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,wt=/<([\w:]+)/,Et=/<tbody/i,St=/<|&#?\w+;/,xt=/<(?:script|style|link)/i,Tt=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,Ct=/^$|\/(?:java|ecma)script/i,kt=/^true\/(.*)/,Lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:E.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ot=dt(u),Mt=Ot.appendChild(u.createElement("div"))
;At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,E.fn.extend({text:function(e){return E.access(this,function(e){return e===t?E.text(this):this.empty().append((this[0]&&this[0].ownerDocument||u).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=_t(this,e)
;t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=_t(this,e)
;t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?E.filter(e,this):this,i=0;for(;(n=r[i])!=null;i++)!t&&n.nodeType===1&&E.cleanData(Ft(n)),n.parentNode&&(t&&E.contains(n.ownerDocument,n)&&Ht(Ft(n,"script")),n.parentNode.removeChild(n))
;return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&E.cleanData(Ft(e,!1))
;while(e.firstChild)e.removeChild(e.firstChild)
;e.options&&E.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return E.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t)return n.nodeType===1?n.innerHTML.replace(mt,""):t;
if(typeof e=="string"&&!xt.test(e)&&(E.support.htmlSerialize||!gt.test(e))&&(E.support.leadingWhitespace||!yt.test(e))&&!At[(wt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(bt,"<$1></$2>")
;try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(E.cleanData(Ft(n,!1)),n.innerHTML=e)
;n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=E.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),E(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e)
;var r,i,s,o,u,a,f=0,l=this.length,c=this,h=l-1,p=e[0],v=E.isFunction(p)
;
if(v||!(l<=1||typeof p!="string"||E.support.checkClone||!Nt.test(p)))return this.each(function(r){var i=c.eq(r)
;v&&(e[0]=p.call(this,r,i.html())),i.domManip(e,t,n)})
;
if(l){a=E.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=a.firstChild,a.childNodes.length===1&&(a=r)
;
if(r){o=E.map(Ft(a,"script"),Dt),s=o.length;for(;f<l;f++)i=a,f!==h&&(i=E.clone(i,!0,!0),s&&E.merge(o,Ft(i,"script"))),t.call(this[f],i,f)
;
if(s){u=o[o.length-1].ownerDocument,E.map(o,Pt)
;for(f=0;f<s;f++)i=o[f],Ct.test(i.type||"")&&!E._data(i,"globalEval")&&E.contains(u,i)&&(i.src?E._evalUrl(i.src):E.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Lt,"")))}a=r=null}}return this}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){E.fn[e]=function(e){var n,r=0,i=[],s=E(e),o=s.length-1;for(;r<=o;r++)n=r===o?this:this.clone(!0),E(s[r])[t](n),v.apply(i,n.get())
;return this.pushStack(i)}}),E.extend({clone:function(e,t,n){var r,i,s,o,u,a=E.contains(e.ownerDocument,e)
;E.support.html5Clone||E.isXMLDoc(e)||!gt.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(Mt.innerHTML=e.outerHTML,Mt.removeChild(s=Mt.firstChild))
;
if((!E.support.noCloneEvent||!E.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!E.isXMLDoc(e)){r=Ft(s),u=Ft(e)
;for(o=0;(i=u[o])!=null;++o)r[o]&&jt(i,r[o])}if(t)if(n){u=u||Ft(e),r=r||Ft(s)
;for(o=0;(i=u[o])!=null;o++)Bt(i,r[o])}else Bt(e,s)
;return r=Ft(s,"script"),r.length>0&&Ht(r,!a&&Ft(e,"script")),r=u=i=null,s},buildFragment:function(e,t,n,r){var i,s,o,u,a,f,l,c=e.length,h=dt(t),p=[],d=0;for(;d<c;d++){s=e[d];
if(s||s===0)if(E.type(s)==="object")E.merge(p,s.nodeType?[s]:s)
;else if(!St.test(s))p.push(t.createTextNode(s))
;else{u=u||h.appendChild(t.createElement("div")),a=(wt.exec(s)||["",""])[1].toLowerCase(),l=At[a]||At._default,u.innerHTML=l[1]+s.replace(bt,"<$1></$2>")+l[2],i=l[0];while(i--)u=u.lastChild;!E.support.leadingWhitespace&&yt.test(s)&&p.push(t.createTextNode(yt.exec(s)[0]))
;
if(!E.support.tbody){s=a==="table"&&!Et.test(s)?u.firstChild:l[1]==="<table>"&&!Et.test(s)?u:0,i=s&&s.childNodes.length;while(i--)E.nodeName(f=s.childNodes[i],"tbody")&&!f.childNodes.length&&s.removeChild(f)}E.merge(p,u.childNodes),u.textContent="";while(u.firstChild)u.removeChild(u.firstChild)
;u=h.lastChild}}u&&h.removeChild(u),E.support.appendChecked||E.grep(Ft(p,"input"),It),d=0;while(s=p[d++]){if(r&&E.inArray(s,r)!==-1)continue;o=E.contains(s.ownerDocument,s),u=Ft(h.appendChild(s),"script"),o&&Ht(u)
;
if(n){i=0;while(s=u[i++])Ct.test(s.type||"")&&n.push(s)}}return u=null,h},cleanData:function(e,t){var n,r,i,o,u=0,a=E.expando,f=E.cache,l=E.support.deleteExpando,c=E.event.special;for(;(n=e[u])!=null;u++)if(t||E.acceptData(n)){i=n[a],o=i&&f[i];
if(o){if(o.events)for(r in o.events)c[r]?E.event.remove(n,r):E.removeEvent(n,r,o.handle)
;f[i]&&(delete f[i],l?delete n[a]:typeof n.removeAttribute!==s?n.removeAttribute(a):n[a]=null,h.push(i))}}},_evalUrl:function(e){return E.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),E.fn.extend({wrapAll:function(e){if(E.isFunction(e))return this.each(function(t){E(this).wrapAll(e.call(this,t))})
;
if(this[0]){var t=E(e,this[0].ownerDocument).eq(0).clone(!0)
;this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return E.isFunction(e)?this.each(function(t){E(this).wrapInner(e.call(this,t))}):this.each(function(){var t=E(this),n=t.contents()
;n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=E.isFunction(e)
;return this.each(function(n){E(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){E.nodeName(this,"body")||E(this).replaceWith(this.childNodes)}).end()}})
;var qt,Rt,Ut,zt=/alpha\([^)]*\)/i,Wt=/opacity\s*=\s*([^)]*)/,Xt=/^(top|right|bottom|left)$/,Vt=/^(none|table(?!-c[ea]).+)/,$t=/^margin/,Jt=new RegExp("^("+S+")(.*)$","i"),Kt=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Qt=new RegExp("^([+-])=("+S+")","i"),Gt={BODY:"block"},Yt={position:"absolute",visibility:"hidden",display:"block"},Zt={letterSpacing:0,fontWeight:400},en=["Top","Right","Bottom","Left"],tn=["Webkit","O","Moz","ms"];E.fn.extend({css:function(e,n){return E.access(this,function(e,n,r){var i,s,o={},u=0;
if(E.isArray(n)){s=Rt(e),i=n.length;for(;u<i;u++)o[n[u]]=E.css(e,n[u],!1,s)
;return o}return r!==t?E.style(e,n,r):E.css(e,n)},e,n,arguments.length>1)},show:function(){return sn(this,!0)},hide:function(){return sn(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){rn(this)?E(this).show():E(this).hide()})}}),E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ut(e,"opacity")
;return n===""?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":E.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=E.camelCase(n),f=e.style;n=E.cssProps[a]||(E.cssProps[a]=nn(f,a)),u=E.cssHooks[n]||E.cssHooks[a];
if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=Qt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(E.css(e,n)),o="number")
;
if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!E.cssNumber[a]&&(r+="px"),!E.support.clearCloneStyle&&r===""&&n.indexOf("background")===0&&(f[n]="inherit")
;
if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=E.camelCase(n)
;return n=E.cssProps[a]||(E.cssProps[a]=nn(e.style,a)),u=E.cssHooks[n]||E.cssHooks[a],u&&"get"in u&&(o=u.get(e,!0,r)),o===t&&(o=Ut(e,n,i)),o==="normal"&&n in Zt&&(o=Zt[n]),r===""||r?(s=parseFloat(o),r===!0||E.isNumeric(s)?s||0:o):o}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Ut=function(e,n,r){var i,s,o,u=r||Rt(e),a=u?u.getPropertyValue(n)||u[n]:t,f=e.style;return u&&(a===""&&!E.contains(e.ownerDocument,e)&&(a=E.style(e,n)),Kt.test(a)&&$t.test(n)&&(i=f.width,s=f.minWidth,o=f.maxWidth,f.minWidth=f.maxWidth=f.width=a,a=u.width,f.width=i,f.minWidth=s,f.maxWidth=o)),a}):u.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Ut=function(e,n,r){var i,s,o,u=r||Rt(e),a=u?u[n]:t,f=e.style;return a==null&&f&&f[n]&&(a=f[n]),Kt.test(a)&&!Xt.test(n)&&(i=f.left,s=e.runtimeStyle,o=s&&s.left,o&&(s.left=e.currentStyle.left),f.left=n==="fontSize"?"1em":a,a=f.pixelLeft+"px",f.left=i,o&&(s.left=o)),a===""?"auto":a}),E.each(["height","width"],function(e,t){E.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&Vt.test(E.css(e,"display"))?E.swap(e,Yt,function(){return an(e,t,r)}):an(e,t,r)},set:function(e,n,r){var i=r&&Rt(e)
;return on(e,n,r?un(e,t,r,E.support.boxSizing&&E.css(e,"boxSizing",!1,i)==="border-box",i):0)}}}),E.support.opacity||(E.cssHooks.opacity={get:function(e,t){return Wt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=E.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;
if((t>=1||t==="")&&E.trim(s.replace(zt,""))===""&&n.removeAttribute){n.removeAttribute("filter")
;
if(t===""||r&&!r.filter)return}n.filter=zt.test(s)?s.replace(zt,i):s+" "+i}}),E(function(){E.support.reliableMarginRight||(E.cssHooks.marginRight={get:function(e,t){if(t)return E.swap(e,{display:"inline-block"},Ut,[e,"marginRight"])}}),!E.support.pixelPosition&&E.fn.position&&E.each(["top","left"],function(e,t){E.cssHooks[t]={get:function(e,n){if(n)return n=Ut(e,t),Kt.test(n)?E(e).position()[t]+"px":n}}})}),E.expr&&E.expr.filters&&(E.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!E.support.reliableHiddenOffsets&&(e.style&&e.style.display||E.css(e,"display"))==="none"},E.expr.filters.visible=function(e){return!E.expr.filters.hidden(e)}),E.each({margin:"",padding:"",border:"Width"},function(e,t){E.cssHooks[e+t]={expand:function(n){var r=0,i={},s=typeof n=="string"?n.split(" "):[n];for(;r<4;r++)i[e+en[r]+t]=s[r]||s[r-2]||s[0];return i}},$t.test(e)||(E.cssHooks[e+t].set=on)})
;var cn=/%20/g,hn=/\[\]$/,pn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,vn=/^(?:input|select|textarea|keygen)/i;E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements")
;return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&vn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Tt.test(e))}).map(function(e,t){var n=E(this).val()
;return n==null?null:E.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(pn,"\r\n")}}):{name:t.name,value:n.replace(pn,"\r\n")}}).get()}}),E.param=function(e,n){var r,i=[],s=function(e,t){t=E.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=E.ajaxSettings&&E.ajaxSettings.traditional)
;
if(E.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){s(this.name,this.value)})
;else for(r in e)mn(r,e[r],n,s)
;return i.join("&").replace(cn,"+")},E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}})
;var gn,yn,bn=E.now(),wn=/\?/,En=/#.*$/,Sn=/([?&])_=[^&]*/,xn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Tn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,Cn=/^\/\//,kn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Ln=E.fn.load,An={},On={},Mn="*/".concat("*")
;try{yn=o.href}catch(_n){yn=u.createElement("a"),yn.href="",yn=yn.href}gn=kn.exec(yn.toLowerCase())||[],E.fn.load=function(e,n,r){if(typeof e!="string"&&Ln)return Ln.apply(this,arguments)
;var i,s,o,u=this,a=e.indexOf(" ")
;return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),E.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(o="POST"),u.length>0&&E.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){s=arguments,u.html(i?E("<div>").append(E.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){u.each(r,s||[e.responseText,t,e])}),this},E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Tn.test(gn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Mn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":E.parseJSON,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Hn(Hn(e,E.ajaxSettings),t):Hn(E.ajaxSettings,e)},ajaxPrefilter:Dn(An),ajaxTransport:Dn(On),ajax:function(e,n){function N(e,n,r,i){var l,g,y,w,x,T=n;
if(b===2)return;b=2,u&&clearTimeout(u),f=t,o=i||"",S.readyState=e>0?4:0,l=e>=200&&e<300||e===304,r&&(w=Bn(c,S,r)),w=jn(c,w,S,l)
;
if(l)c.ifModified&&(x=S.getResponseHeader("Last-Modified"),x&&(E.lastModified[s]=x),x=S.getResponseHeader("etag"),x&&(E.etag[s]=x)),e===204||c.type==="HEAD"?T="nocontent":e===304?T="notmodified":(T=w.state,g=w.data,y=w.error,l=!y)
;else{y=T;
if(e||!T)T="error",e<0&&(e=0)}S.status=e,S.statusText=(n||T)+"",l?d.resolveWith(h,[g,T,S]):d.rejectWith(h,[S,T,y]),S.statusCode(m),m=t,a&&p.trigger(l?"ajaxSuccess":"ajaxError",[S,c,l?g:y]),v.fireWith(h,[S,T]),a&&(p.trigger("ajaxComplete",[S,c]),--E.active||E.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=E.ajaxSetup({},n),h=c.context||c,p=c.context&&(h.nodeType||h.jquery)?E(h):E.event,d=E.Deferred(),v=E.Callbacks("once memory"),m=c.statusCode||{},g={},y={},b=0,w="canceled",S={readyState:0,getResponseHeader:function(e){var t;
if(b===2){if(!l){l={};while(t=xn.exec(o))l[t[1].toLowerCase()]=t[2]}t=l[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return b===2?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
;return b||(e=y[n]=y[n]||e,g[e]=t),this},overrideMimeType:function(e){return b||(c.mimeType=e),this},statusCode:function(e){var t;
if(e)if(b<2)for(t in e)m[t]=[m[t],e[t]];else S.always(e[S.status])
;return this},abort:function(e){var t=e||w;return f&&f.abort(t),N(0,t),this}};d.promise(S).complete=v.add,S.success=S.done,S.error=S.fail,c.url=((e||c.url||yn)+"").replace(En,"").replace(Cn,gn[1]+"//"),c.type=n.method||n.type||c.method||c.type,c.dataTypes=E.trim(c.dataType||"*").toLowerCase().match(x)||[""],c.crossDomain==null&&(r=kn.exec(c.url.toLowerCase()),c.crossDomain=!(!r||r[1]===gn[1]&&r[2]===gn[2]&&(r[3]||(r[1]==="http:"?"80":"443"))===(gn[3]||(gn[1]==="http:"?"80":"443")))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=E.param(c.data,c.traditional)),Pn(An,c,n,S)
;
if(b===2)return S;a=c.global,a&&E.active++===0&&E.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Nn.test(c.type),s=c.url,c.hasContent||(c.data&&(s=c.url+=(wn.test(s)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Sn.test(s)?s.replace(Sn,"$1_="+bn++):s+(wn.test(s)?"&":"?")+"_="+bn++)),c.ifModified&&(E.lastModified[s]&&S.setRequestHeader("If-Modified-Since",E.lastModified[s]),E.etag[s]&&S.setRequestHeader("If-None-Match",E.etag[s])),(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&S.setRequestHeader("Content-Type",c.contentType),S.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Mn+"; q=0.01":""):c.accepts["*"])
;for(i in c.headers)S.setRequestHeader(i,c.headers[i])
;
if(!c.beforeSend||c.beforeSend.call(h,S,c)!==!1&&b!==2){w="abort";for(i in{success:1,error:1,complete:1})S[i](c[i])
;f=Pn(On,c,n,S)
;
if(!f)N(-1,"No Transport")
;else{S.readyState=1,a&&p.trigger("ajaxSend",[S,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){S.abort("timeout")},c.timeout))
;try{b=1,f.send(g,N)}catch(T){if(!(b<2))throw T;N(-1,T)}}return S}return S.abort()},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,n){return E.get(e,t,n,"script")}}),E.each(["get","post"],function(e,n){E[n]=function(e,r,i,s){return E.isFunction(r)&&(s=s||i,i=r,r=t),E.ajax({url:e,type:n,dataType:s,data:r,success:i})}}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),E.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=u.head||E("head")[0]||u.documentElement;return{send:function(t,i){n=u.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){if(t||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}})
;var Fn=[],In=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||E.expando+"_"+bn++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.jsonp!==!1&&(In.test(n.url)?"url":typeof n.data=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&In.test(n.data)&&"data")
;
if(a||n.dataTypes[0]==="jsonp")return s=n.jsonpCallback=E.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,a?n[a]=n[a].replace(In,"$1"+s):n.jsonp!==!1&&(n.url+=(wn.test(n.url)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||E.error(s+" was not called"),u[0]},n.dataTypes[0]="json",o=e[s],e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(s)),u&&E.isFunction(o)&&o(u[0]),u=o=t}),"script"})
;var qn,Rn,Un=0,zn=e.ActiveXObject&&function(){var e;for(e in qn)qn[e](t,!0)};E.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Wn()||Xn()}:Wn,Rn=E.ajaxSettings.xhr(),E.support.cors=!!Rn&&"withCredentials"in Rn,Rn=E.support.ajax=!!Rn,Rn&&E.ajaxTransport(function(n){if(!n.crossDomain||E.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr()
;n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async)
;
if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest")
;try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=E.noop,zn&&delete qn[o])
;
if(i)a.readyState!==4&&a.abort()
;else{c={},u=a.status,f=a.getAllResponseHeaders(),typeof a.responseText=="string"&&(c.text=a.responseText)
;try{l=a.statusText}catch(h){l=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(p){i||s(-1,p)}c&&s(u,l,c,f)},n.async?a.readyState===4?setTimeout(r):(o=++Un,zn&&(qn||(qn={},E(e).unload(zn)),qn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}})
;var Vn,$n,Jn=/^(?:toggle|show|hide)$/,Kn=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),Qn=/queueHooks$/,Gn=[rr],Yn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Kn.exec(t),s=i&&i[3]||(E.cssNumber[e]?"":"px"),o=(E.cssNumber[e]||s!=="px"&&+r)&&Kn.exec(E.css(n.elem,e)),u=1,a=20;
if(o&&o[3]!==s){s=s||o[3],i=i||[],o=+r||1;do u=u||".5",o/=u,E.style(n.elem,e,o+s)
;while(u!==(u=n.cur()/r)&&u!==1&&--a)}return i&&(o=n.start=+o||+r||0,n.unit=s,n.end=i[1]?o+(i[1]+1)*i[2]:+i[2]),n}]};E.Animation=E.extend(tr,{tweener:function(e,t){E.isFunction(e)?(t=e,e=["*"]):e=e.split(" ")
;var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Yn[n]=Yn[n]||[],Yn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}}),E.Tween=ir,ir.prototype={constructor:ir,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(E.cssNumber[n]?"":"px")},cur:function(){var e=ir.propHooks[this.prop];return e&&e.get?e.get(this):ir.propHooks._default.get(this)},run:function(e){var t,n=ir.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ir.propHooks._default.set(this),this}},ir.prototype.init.prototype=ir.prototype,ir.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=E.css(e.elem,e.prop,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):e.elem.style&&(e.elem.style[E.cssProps[e.prop]]!=null||E.cssHooks[e.prop])?E.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},ir.propHooks.scrollTop=ir.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.each(["toggle","show","hide"],function(e,t){var n=E.fn[t];E.fn[t]=function(e,r,i){return e==null||typeof e=="boolean"?n.apply(this,arguments):this.animate(sr(t,!0),e,r,i)}}),E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(rn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=E.isEmptyObject(e),s=E.speed(t,n,r),o=function(){var t=tr(this,E.extend({},e),s)
;(i||E._data(this,"finish"))&&t.stop(!0)};return o.finish=o,i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=E.timers,o=E._data(this)
;
if(n)o[n]&&o[n].stop&&i(o[n])
;else for(n in o)o[n]&&o[n].stop&&Qn.test(n)&&i(o[n])
;for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1))
;(t||!r)&&E.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=E._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=E.timers,o=r?r.length:0;n.finish=!0,E.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0)
;for(t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1))
;for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
;delete n.finish})}}),E.each({slideDown:sr("show"),slideUp:sr("hide"),slideToggle:sr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){E.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),E.speed=function(e,t,n){var r=e&&typeof e=="object"?E.extend({},e):{complete:n||!n&&t||E.isFunction(e)&&e,duration:e,easing:n&&t||t&&!E.isFunction(t)&&t};r.duration=E.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in E.fx.speeds?E.fx.speeds[r.duration]:E.fx.speeds._default;
if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){E.isFunction(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},E.timers=[],E.fx=ir.prototype.init,E.fx.tick=function(){var e,n=E.timers,r=0;Vn=E.now()
;for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1)
;n.length||E.fx.stop(),Vn=t},E.fx.timer=function(e){e()&&E.timers.push(e)&&E.fx.start()},E.fx.interval=13,E.fx.start=function(){$n||($n=setInterval(E.fx.tick,E.fx.interval))},E.fx.stop=function(){clearInterval($n),$n=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fx.step={},E.expr&&E.expr.filters&&(E.expr.filters.animated=function(e){return E.grep(E.timers,function(t){return e===t.elem}).length}),E.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){E.offset.setOffset(this,e,t)})
;var n,r,i={top:0,left:0},o=this[0],u=o&&o.ownerDocument;
if(!u)return;return n=u.documentElement,E.contains(n,o)?(typeof o.getBoundingClientRect!==s&&(i=o.getBoundingClientRect()),r=or(u),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},E.offset={setOffset:function(e,t,n){var r=E.css(e,"position")
;r==="static"&&(e.style.position="relative")
;var i=E(e),s=i.offset(),o=E.css(e,"top"),u=E.css(e,"left"),a=(r==="absolute"||r==="fixed")&&E.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),E.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},E.fn.extend({position:function(){if(!this[0])return;var e,t,n={top:0,left:0},r=this[0];return E.css(r,"position")==="fixed"?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),E.nodeName(e[0],"html")||(n=e.offset()),n.top+=E.css(e[0],"borderTopWidth",!0),n.left+=E.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-E.css(r,"marginTop",!0),left:t.left-n.left-E.css(r,"marginLeft",!0)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||a;while(e&&!E.nodeName(e,"html")&&E.css(e,"position")==="static")e=e.offsetParent;return e||a})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n)
;E.fn[e]=function(i){return E.access(this,function(e,i,s){var o=or(e)
;
if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?E(o).scrollLeft():s,r?s:E(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),E.each({Height:"height",Width:"width"},function(e,n){E.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){E.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border")
;return E.access(this,function(n,r,i){var s;return E.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?E.css(n,r,u):E.style(n,r,i,u)},n,o?i:t,o,null)}})}),E.fn.size=function(){return this.length},E.fn.andSelf=E.fn.addBack,typeof module=="object"&&module&&typeof module.exports=="object"?module.exports=E:(e.jQuery=e.$=E,typeof n=="function"&&n.amd&&n("jquery",[],function(){return E}))}(window),n("vendor/jquery",function(e){return function(){var t,n;return t||e.$}}(this)),window.matchMedia=window.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),s=e.createElement("div")
;return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(s),function(e){return s.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=42===s.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(document),function(e){function t(){E(!0)}var n={};
if(e.respond=n,n.update=function(){},n.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var r,i,s,o=e.document,u=o.documentElement,a=[],f=[],l=[],c={},h=30,p=o.getElementsByTagName("head")[0]||u,d=o.getElementsByTagName("base")[0],v=p.getElementsByTagName("link"),m=[],g=function(){for(var t=0;v.length>t;t++){var n=v[t],r=n.href,i=n.media,s=n.rel&&"stylesheet"===n.rel.toLowerCase()
;r&&s&&!c[r]&&(n.styleSheet&&n.styleSheet.rawCssText?(b(n.styleSheet.rawCssText,r,i),c[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!d||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&m.push({href:r,media:i}))}y()},y=function(){if(m.length){var t=m.shift()
;S(t.href,function(n){b(n,t.href,t.media),c[t.href]=!0,e.setTimeout(function(){y()},0)})}},b=function(e,t,n){var r=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),i=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"))
;var s=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},o=!i&&n;t.length&&(t+="/"),o&&(i=1)
;for(var u=0;i>u;u++){var l,c,h,p;o?(l=n,f.push(s(e))):(l=r[u].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&s(RegExp.$2))),h=l.split(","),p=h.length;for(var d=0;p>d;d++)c=h[d],a.push({media:c.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:c.indexOf("(")>-1,minw:c.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},w=function(){var e,t=o.createElement("div"),n=o.body,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=o.createElement("body"),n.style.background="none"),n.appendChild(t),u.insertBefore(n,u.firstChild),e=t.offsetWidth,r?u.removeChild(n):n.removeChild(t),e=s=parseFloat(e)},E=function(t){var n="clientWidth",c=u[n],d="CSS1Compat"===o.compatMode&&c||o.body[n]||c,m={},g=v[v.length-1],y=(new Date).getTime()
;
if(t&&r&&h>y-r)return e.clearTimeout(i),i=e.setTimeout(E,h),void 0;r=y;for(var b in a)if(a.hasOwnProperty(b)){var S=a[b],x=S.minw,T=S.maxw,N=null===x,C=null===T,k="em";x&&(x=parseFloat(x)*(x.indexOf(k)>-1?s||w():1)),T&&(T=parseFloat(T)*(T.indexOf(k)>-1?s||w():1)),S.hasquery&&(N&&C||!(N||d>=x)||!(C||T>=d))||(m[S.media]||(m[S.media]=[]),m[S.media].push(f[S.rules]))}for(var L in l)l.hasOwnProperty(L)&&l[L]&&l[L].parentNode===p&&p.removeChild(l[L])
;for(var A in m)if(m.hasOwnProperty(A)){var O=o.createElement("style"),M=m[A].join("\n")
;O.type="text/css",O.media=A,p.insertBefore(O,g.nextSibling),O.styleSheet?O.styleSheet.cssText=M:O.appendChild(o.createTextNode(M)),l.push(O)}},S=function(e,t){var n=x()
;n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},x=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}()
;g(),n.update=g,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),n("vendor/respond.min",function(){}),"bind"in Function.prototype||(Function.prototype.bind=function(e){var t=this;
if(arguments.length<=1)return function(){return t.apply(e,arguments)};var n=Array.prototype.slice.call(arguments,1)
;return function(){return t.apply(e,arguments.length===0?n:n.concat(Array.prototype.slice.call(arguments)))}}),"trim"in String.prototype||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),"indexOf"in Array.prototype||(Array.prototype.indexOf=function(e,t){t===undefined&&(t=0),t<0&&(t+=this.length),t<0&&(t=0);
for(var n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1}),"lastIndexOf"in Array.prototype||(Array.prototype.lastIndexOf=function(e,t){t===undefined&&(t=this.length-1),t<0&&(t+=this.length),t>this.length-1&&(t=this.length-1);

for(t++;t==>0;)

if(t in this&&this[t]===e)return t;return-1}),"forEach"in Array.prototype||(Array.prototype.forEach=function(e,t)
{for(var n=0,r=this.length;n<r;n++)n in this&&e.call(t,this[n],n,this)}),"map"in Array.prototype||(Array.prototype.map=function(e,t){var n=new Array(this.length);

for(var r=0,i=this.length;r<i;r++)r in this&&(n[r]=e.call(t,this[r],r,this))
;return n}),"filter"in Array.prototype||(Array.prototype.filter=function(e,t){var n=[],r;for(var i=0,s=this.length;i<s;i++)i in this&&e.call(t,r=this[i],i,this)&&n.push(r)
;return n}),"every"in Array.prototype||(Array.prototype.every=function(e,t){for(var n=0,r=this.length;n<r;n++)if(n in this&&!e.call(t,this[n],n,this))return!1;return!0}),"some"in Array.prototype||(Array.prototype.some=function(e,t){for(var n=0,r=this.length;n<r;n++)if(n in this&&e.call(t,this[n],n,this))return!0;return!1}),n("vendor/array",function(){}),n("lib/apponboarding",[],function(){var e=function(e){this.app=e,$(document).on("onboarding:get",$.proxy(this.get,this)),$(document).on("onboarding:seen",$.proxy(this.seen,this))};return e.prototype.getName=function(){return"AppOnboarding"},e.prototype.get=function(e,t){if(!BLClientData.user_id)return;var n="/_/onboarding/"+t,r=$.getJSON(n,function(e){var n=e.show_onboarding;e.show_onboarding&&$(document).trigger("onboarding:show:"+t)})},e.prototype.seen=function(e,t){if(!BLClientData.user_id)return;var n="/_/onboarding/"+t+"/seen",r=$.getJSON(n)},e}),n("lib/err",[],function(){var e=function(e){this.message=e,this.element=$("<div />").addClass("error").text(e)};return e.prototype.getName=function(){return"Error"},e.prototype.after=function(e){$(e).after(this.element)},e.prototype.prepend=function(e){$(e).prepend(this.element)},e.prototype.remove=function(){this.element.detach()},e}),function(e){function R(e,t,n){var r=(n||0)-1,i=e.length;while(++r<i)if(e[r]===t)return r;return-1}function U(e,t){var n=typeof t;e=e.cache;
if(n=="boolean"||t==null)return e[t];n!="number"&&n!="string"&&(n="object")
;var r=n=="number"?t:u+t;return e=e[n]||(e[n]={}),n=="object"?e[r]&&R(e[r],t)>-1?0:-1:e[r]?0:-1}function z(e){var t=this.cache,n=typeof e;
if(n=="boolean"||e==null)t[e]=!0;else{n!="number"&&n!="string"&&(n="object")
;var r=n=="number"?e:u+e,i=t[n]||(t[n]={})
;n=="object"?(i[r]||(i[r]=[])).push(e)==this.array.length&&(t[n]=!1):i[r]=!0}}function W(e){return e.charCodeAt(0)}function X(e,t){var n=e.index,r=t.index;e=e.criteria,t=t.criteria;
if(e!==t){if(e>t||typeof e=="undefined")return 1;
if(e<t||typeof t=="undefined")return-1}return n<r?-1:1}function V(e){var t=-1,n=e.length,r=K()
;r["false"]=r["null"]=r["true"]=r["undefined"]=!1;var i=K()
;i.array=e,i.cache=r,i.push=z;while(++t<n)i.push(e[t])
;return r.object===!1?(Y(i),null):i}function $(e){return"\\"+j[e]}function J(){return r.pop()||[]}function K(){return i.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,leading:!1,maxWait:0,"null":!1,number:null,object:null,push:null,string:null,trailing:!1,"true":!1,"undefined":!1,value:null}}function Q(){}function G(e){e.length=0,r.length<f&&r.push(e)}function Y(e){var t=e.cache;t&&Y(t),e.array=e.cache=e.criteria=e.object=e.number=e.string=e.value=null,i.length<f&&i.push(e)}function Z(e,t,n){t||(t=0),typeof n=="undefined"&&(n=e?e.length:0)
;var r=-1,i=n-t||0,s=Array(i<0?0:i)
;while(++r<i)s[r]=e[t+r];return s}function et(n){function Pt(e){return e&&typeof e=="object"&&!Xt(e)&&dt.call(e,"__wrapped__")?e:new Ht(e)}function Ht(e){this.__wrapped__=e}function jt(e,t,n,r){function a(){var r=arguments,f=s?this:t;i||(e=t[o]),n.length&&(r=r.length?(r=Ot.call(r),u?r.concat(n):n.concat(r)):n)
;
if(this instanceof a){f=Ft(e.prototype)
;var l=e.apply(f,r)
;return dn(l)?l:f}return e.apply(f,r)}var i=pn(e),s=!n,o=t;
if(s){var u=r;n=t}else if(!i){if(!r)throw new nt;t=e}return a}function Ft(e){return dn(e)?Et(e):{}}function It(e){return Jt[e]}function qt(e,t,n){var r=(r=Pt.indexOf)===tr?R:r;return r}function Rt(e){return function(n,r,i,s){return typeof r!="boolean"&&r!=null&&(s=i,i=!s||s[r]!==n?r:t,r=!1),i!=null&&(i=Pt.createCallback(i,s)),e(n,r,i,s)}}function Ut(e){var n,r;return!!e&&bt.call(e)==_&&(n=e.constructor,!pn(n)||n instanceof n)?(tn(e,function(e,t){r=t}),r===t||dt.call(e,r)):!1}function zt(e){return Kt[e]}function Wt(e){return bt.call(e)==N}function Gt(e,n,r,i,s,o){var u=e;typeof n!="boolean"&&n!=null&&(i=r,r=n,n=!1)
;
if(typeof r=="function"){r=typeof i=="undefined"?r:Pt.createCallback(r,i,1),u=r(u)
;
if(typeof u!="undefined")return u;u=e}var a=dn(u)
;
if(a){var f=bt.call(u)
;
if(!H[f])return u;var l=Xt(u)}if(!a||!n)return a?l?Z(u):Qt({},u):u;var c=Dt[f];switch(f){case k:case L:return new c(+u)
;case M:case P:return new c(u)
;case D:return c(u.source,v.exec(u))}var h=!s;s||(s=J()),o||(o=J())
;var p=s.length;while(p--)if(s[p]==e)return o[p];return u=l?c(u.length):{},l&&(dt.call(e,"index")&&(u.index=e.index),dt.call(e,"input")&&(u.input=e.input)),s.push(e),o.push(u),(l?Pn:nn)(e,function(e,i){u[i]=Gt(e,n,r,t,s,o)}),h&&(G(s),G(o)),u}function Yt(e,t,n){return Gt(e,!0,t,n)}function en(e,t,n){var r;return t=Pt.createCallback(t,n),nn(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function rn(e){var t=[];return tn(e,function(e,n){pn(e)&&t.push(n)}),t.sort()}function sn(e,t){return e?dt.call(e,t):!1}function on(e){var t=-1,n=$t(e),r=n.length,i={};while(++t<r){var s=n[t];i[e[s]]=s}return i}function un(e){return e===!0||e===!1||bt.call(e)==k}function an(e){return e?typeof e=="object"&&bt.call(e)==L:!1}function fn(e){return e?e.nodeType===1:!1}function ln(e){var t=!0;
if(!e)return t;var n=bt.call(e),r=e.length;return n==C||n==P||n==N||n==_&&typeof r=="number"&&pn(e.splice)?!r:(nn(e,function(){return t=!1}),t)}function cn(e,t,n,r,i,s){var u=n===o;
if(typeof n=="function"&&!u){n=Pt.createCallback(n,r,2)
;var a=n(e,t)
;
if(typeof a!="undefined")return!!a}if(e===t)return e!==0||1/e==1/t;var f=typeof e,l=typeof t;
if(e===e&&(!e||f!="function"&&f!="object")&&(!t||l!="function"&&l!="object"))return!1;
if(e==null||t==null)return e===t;var c=bt.call(e),h=bt.call(t)
;c==N&&(c=_),h==N&&(h=_)
;
if(c!=h)return!1;switch(c){case k:case L:return+e==+t;case M:return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case D:case P:return e==Q(t)}var p=c==C;
if(!p){if(dt.call(e,"__wrapped__ ")||dt.call(t,"__wrapped__"))return cn(e.__wrapped__||e,t.__wrapped__||t,n,r,i,s)
;
if(c!=_)return!1;var d=e.constructor,v=t.constructor;
if(d!=v&&!(pn(d)&&d instanceof d&&pn(v)&&v instanceof v))return!1}var m=!i;i||(i=J()),s||(s=J())
;var g=i.length;while(g--)if(i[g]==e)return s[g]==t;var y=0;a=!0,i.push(e),s.push(t)
;
if(p){g=e.length,y=t.length,a=y==e.length;
if(!a&&!u)return a;while(y--){var b=g,w=t[y];
if(u){while(b--)if(a=cn(e[b],w,n,r,i,s))break}else if(!(a=cn(e[y],w,n,r,i,s)))break}return a}return tn(t,function(t,o,u){if(dt.call(u,o))return y++,a=dt.call(e,o)&&cn(e[o],t,n,r,i,s)}),a&&!u&&tn(e,function(e,t,n){if(dt.call(n,t))return a=--y>-1}),m&&(G(i),G(s)),a}function hn(e){return xt(e)&&!Tt(parseFloat(e))}function pn(e){return typeof e=="function"}function dn(e){return!!e&&!!B[typeof e]}function vn(e){return gn(e)&&e!=+e}function mn(e){return e===null}function gn(e){return typeof e=="number"||bt.call(e)==M}function bn(e){return e?typeof e=="object"&&bt.call(e)==D:!1}function wn(e){return typeof e=="string"||bt.call(e)==P}function En(e){return typeof e=="undefined"}function Sn(e,t,n){var r=arguments,i=0,s=2;
if(!dn(e))return e;
if(n===o)var u=r[3],a=r[4],f=r[5];else{var l=!0;a=J(),f=J(),typeof n!="number"&&(s=r.length),s>3&&typeof r[s-2]=="function"?u=Pt.createCallback(r[--s-1],r[s--],2):s>2&&typeof r[s-1]=="function"&&(u=r[--s])}while(++i<s)(Xt(r[i])?Pn:nn)(r[i],function(t,n){var r,i,s=t,l=e[n];
if(t&&((i=Xt(t))||yn(t))){var c=a.length;while(c--)if(r=a[c]==t){l=f[c];break}if(!r){var h;
if(u){s=u(l,t)
;
if(h=typeof s!="undefined")l=s}h||(l=i?Xt(l)?l:[]:yn(l)?l:{}),a.push(t),f.push(l),h||(l=Sn(l,t,o,u,a,f))}}else u&&(s=u(l,t),typeof s=="undefined"&&(s=t)),typeof s!="undefined"&&(l=s)
;e[n]=l})
;return l&&(G(a),G(f)),e}function xn(e,t,n){var r=qt(),i=typeof t=="function",s={};
if(i)t=Pt.createCallback(t,n)
;else var o=lt.apply(rt,Ot.call(arguments,1))
;return tn(e,function(e,n,u){if(i?!t(e,n,u):r(o,n)<0)s[n]=e}),s}function Tn(e){var t=-1,n=$t(e),i=n.length,s=r(i)
;while(++t<i){var o=n[t];s[t]=[o,e[o]]}return s}function Nn(e,t,n){var r={};
if(typeof t!="function"){var i=-1,s=lt.apply(rt,Ot.call(arguments,1)),o=dn(e)?s.length:0;while(++i<o){var u=s[i];u in e&&(r[u]=e[u])}}else t=Pt.createCallback(t,n),tn(e,function(e,n,i){t(e,n,i)&&(r[n]=e)})
;return r}function Cn(e,t,n,r){var i=Xt(e)
;t=Pt.createCallback(t,r,4)
;
if(n==null)if(i)n=[];else{var s=e&&e.constructor,o=s&&s.prototype;n=Ft(o)}return(i?Pn:nn)(e,function(e,r,i){return t(n,e,r,i)}),n}function kn(e){var t=-1,n=$t(e),i=n.length,s=r(i)
;while(++t<i)s[t]=e[n[t]];return s}function Ln(e){var t=-1,n=lt.apply(rt,Ot.call(arguments,1)),i=n.length,s=r(i)
;while(++t<i)s[t]=e[n[t]];return s}function An(e,t,n){var r=-1,i=qt(),s=e?e.length:0,o=!1;return n=(n<0?Ct(0,s+n):n)||0,s&&typeof s=="number"?o=(wn(e)?e.indexOf(t,n):i(e,t,n))>-1:nn(e,function(e){if(++r>=n)return!(o=e===t)}),o}function On(e,t,n){var r={};return t=Pt.createCallback(t,n),Pn(e,function(e,n,i){n=Q(t(e,n,i)),dt.call(r,n)?r[n]++:r[n]=1}),r}function Mn(e,t,n){var r=!0;t=Pt.createCallback(t,n)
;var i=-1,s=e?e.length:0;
if(typeof s=="number"){while(++i<s)if(!(r=!!t(e[i],i,e)))break}else nn(e,function(e,n,i){return r=!!t(e,n,i)})
;return r}function _n(e,t,n){var r=[];t=Pt.createCallback(t,n)
;var i=-1,s=e?e.length:0;
if(typeof s=="number")while(++i<s){var o=e[i];t(o,i,e)&&r.push(o)}else nn(e,function(e,n,i){t(e,n,i)&&r.push(e)})
;return r}function Dn(e,t,n){t=Pt.createCallback(t,n)
;var r=-1,i=e?e.length:0;
if(typeof i!="number"){var o;return nn(e,function(e,n,r){if(t(e,n,r))return o=e,!1}),o}while(++r<i){var s=e[r];
if(t(s,r,e))return s}}function Pn(e,t,n){var r=-1,i=e?e.length:0;t=t&&typeof n=="undefined"?t:Pt.createCallback(t,n)
;
if(typeof i=="number"){while(++r<i)if(t(e[r],r,e)===!1)break}else nn(e,t)
;return e}function Hn(e,t,n){var r={};return t=Pt.createCallback(t,n),Pn(e,function(e,n,i){n=Q(t(e,n,i)),(dt.call(r,n)?r[n]:r[n]=[]).push(e)}),r}function Bn(e,t){var n=Ot.call(arguments,2),i=-1,s=typeof t=="function",o=e?e.length:0,u=r(typeof o=="number"?o:0)
;return Pn(e,function(e){u[++i]=(s?t:e[t]).apply(e,n)}),u}function jn(e,t,n){var i=-1,s=e?e.length:0;t=Pt.createCallback(t,n)
;
if(typeof s=="number"){var o=r(s)
;while(++i<s)o[i]=t(e[i],i,e)}else o=[],nn(e,function(e,n,r){o[++i]=t(e,n,r)})
;return o}function Fn(e,t,n){var r=-Infinity,i=r;
if(!t&&Xt(e)){var s=-1,o=e.length;while(++s<o){var u=e[s];u>i&&(i=u)}}else t=!t&&wn(e)?W:Pt.createCallback(t,n),Pn(e,function(e,n,s){var o=t(e,n,s)
;o>r&&(r=o,i=e)})
;return i}function In(e,t,n){var r=Infinity,i=r;
if(!t&&Xt(e)){var s=-1,o=e.length;while(++s<o){var u=e[s];u<i&&(i=u)}}else t=!t&&wn(e)?W:Pt.createCallback(t,n),Pn(e,function(e,n,s){var o=t(e,n,s)
;o<r&&(r=o,i=e)})
;return i}function qn(e,t){var n=-1,i=e?e.length:0;
if(typeof i=="number"){var s=r(i)
;while(++n<i)s[n]=e[n][t]}return s||jn(e,t)}function Rn(e,t,n,r){if(!e)return n;var i=arguments.length<3;t=Pt.createCallback(t,r,4)
;var s=-1,o=e.length;
if(typeof o=="number"){i&&(n=e[++s])
;while(++s<o)n=t(n,e[s],s,e)}else nn(e,function(e,r,s){n=i?(i=!1,e):t(n,e,r,s)})
;return n}function Un(e,t,n,r){var i=e,s=e?e.length:0,o=arguments.length<3;
if(typeof s!="number"){var u=$t(e)
;s=u.length}return t=Pt.createCallback(t,r,4),Pn(e,function(e,r,a){r=u?u[--s]:--s,n=o?(o=!1,i[r]):t(n,i[r],r,a)}),n}function zn(e,t,n){return t=Pt.createCallback(t,n),_n(e,function(e,n,r){return!t(e,n,r)})}function Wn(e){var t=-1,n=e?e.length:0,i=r(typeof n=="number"?n:0)
;return Pn(e,function(e){var n=ct(At()*(++t+1))
;i[t]=i[n],i[n]=e}),i}function Xn(e){var t=e?e.length:0;return typeof t=="number"?t:$t(e).length}function Vn(e,t,n){var r;t=Pt.createCallback(t,n)
;var i=-1,s=e?e.length:0;
if(typeof s=="number"){while(++i<s)if(r=t(e[i],i,e))break}else nn(e,function(e,n,i){return!(r=t(e,n,i))})
;return!!r}function $n(e,t,n){var i=-1,s=e?e.length:0,o=r(typeof s=="number"?s:0)
;t=Pt.createCallback(t,n),Pn(e,function(e,n,r){var s=o[++i]=K()
;s.criteria=t(e,n,r),s.index=i,s.value=e}),s=o.length,o.sort(X)
;while(s--){var u=o[s];o[s]=u.value,Y(u)}return o}function Jn(e){return e&&typeof e.length=="number"?Z(e):kn(e)}function Qn(e){var t=-1,n=e?e.length:0,r=[];while(++t<n){var i=e[t];i&&r.push(i)}return r}function Gn(e){var t=-1,n=qt(),r=e?e.length:0,i=lt.apply(rt,Ot.call(arguments,1)),s=[],o=r>=a&&n===R;
if(o){var u=V(i)
;u?(n=U,i=u):o=!1}while(++t<r){var f=e[t];n(i,f)<0&&s.push(f)}return o&&Y(i),s}function Yn(e,t,n){var r=-1,i=e?e.length:0;t=Pt.createCallback(t,n)
;while(++r<i)if(t(e[r],r,e))return r;return-1}function Zn(e,t,n){if(e){var r=0,i=e.length;
if(typeof t!="number"&&t!=null){var s=-1;t=Pt.createCallback(t,n)
;while(++s<i&&t(e[s],s,e))r++}else{r=t;
if(r==null||n)return e[0]}return Z(e,0,kt(Ct(0,r),i))}}function tr(e,t,n){if(typeof n=="number"){var r=e?e.length:0;n=n<0?Ct(0,r+n):n||0}else if(n){var i=ar(e,t)
;return e[i]===t?i:-1}return e?R(e,t,n):-1}function nr(e,t,n){if(!e)return[];var r=0,i=e.length;
if(typeof t!="number"&&t!=null){var s=i;t=Pt.createCallback(t,n)
;while(s--&&t(e[s],s,e))r++}else r=t==null||n?1:t||r;return Z(e,0,kt(Ct(0,i-r),i))}function rr(e){var t=arguments,n=t.length,r=-1,i=J(),s=-1,o=qt(),u=e?e.length:0,f=[],l=J()
;while(++r<n){var c=t[r];i[r]=o===R&&(c?c.length:0)>=a&&V(r?t[r]:l)}e:while(++s<u){var h=i[0];c=e[s];
if((h?U(h,c):o(l,c))<0){r=n,(h||l).push(c)
;while(--r){h=i[r];
if((h?U(h,c):o(t[r],c))<0)continue e}f.push(c)}}while(n--)h=i[n],h&&Y(h)
;return G(i),G(l),f}function ir(e,t,n){if(e){var r=0,i=e.length;
if(typeof t!="number"&&t!=null){var s=i;t=Pt.createCallback(t,n)
;while(s--&&t(e[s],s,e))r++}else{r=t;
if(r==null||n)return e[i-1]}return Z(e,Ct(0,i-r))}}function sr(e,t,n){var r=e?e.length:0;typeof n=="number"&&(r=(n<0?Ct(0,r+n):kt(n,r-1))+1)
;while(r--)if(e[r]===t)return r;return-1}function or(e,t,n){e=+e||0,n=+n||1,t==null&&(t=e,e=0)
;var i=-1,s=Ct(0,at((t-e)/n)),o=r(s)
;while(++i<s)o[i]=e,e+=n;return o}function ur(e,t,n){if(typeof t!="number"&&t!=null){var r=0,i=-1,s=e?e.length:0;t=Pt.createCallback(t,n)
;while(++i<s&&t(e[i],i,e))r++}else r=t==null||n?1:Ct(0,t)
;return Z(e,r)}function ar(e,t,n,r){var i=0,s=e?e.length:i;n=n?Pt.createCallback(n,r,1):Mr,t=n(t)
;while(i<s){var o=i+s>>>1;n(e[o])<t?i=o+1:s=o}return i}function fr(e){return Xt(e)||(arguments[0]=e?Ot.call(e):rt),lr(lt.apply(rt,arguments))}function cr(e){var t=-1,n=e?Fn(qn(e,"length")):0,i=r(n<0?0:n)
;while(++t<n)i[t]=qn(e,t)
;return i}function hr(e){return Gn(e,Ot.call(arguments,1))}function pr(e){return e?cr(arguments):[]}function dr(e,t){var n=-1,r=e?e.length:0,i={};while(++n<r){var s=e[n];t?i[s]=t[n]:i[s[0]]=s[1]}return i}function vr(e,t){return e<1?t():function(){if(--e<1)return t.apply(this,arguments)}}function mr(e,t){return Bt.fastBind||wt&&arguments.length>2?wt.call.apply(wt,arguments):jt(e,t,Ot.call(arguments,2))}function gr(e){var t=arguments.length>1?lt.apply(rt,Ot.call(arguments,1)):rn(e),n=-1,r=t.length;while(++n<r){var i=t[n];e[i]=mr(e[i],e)}return e}function yr(e,t){return jt(e,t,Ot.call(arguments,2),o)}function br(){var e=arguments;return function(){var t=arguments,n=e.length;while(n--)t=[e[n].apply(this,t)];return t[0]}}function wr(e,t,n){if(e==null)return Mr;var r=typeof e;
if(r!="function"){if(r!="object")return function(t){return t[e]};var i=$t(e)
;return function(t){var n=i.length,r=!1;while(n--)if(!(r=cn(t[i[n]],e[i[n]],o)))break;return r}}return typeof t=="undefined"||g&&!g.test(ht.call(e))?e:n===1?function(n){return e.call(t,n)}:n===2?function(n,r){return e.call(t,n,r)}:n===4?function(n,r,i,s){return e.call(t,n,r,i,s)}:function(n,r,i){return e.call(t,n,r,i)}}function Er(e,t,n){function p(){ft(l),ft(c),o=0,l=c=null}function d(){var t=h&&(!m||o>1)
;p(),t&&(a!==!1&&(u=new f),i=e.apply(s,r))}function v(){p()
;
if(h||a!==t)u=new f,i=e.apply(s,r)}var r,i,s,o=0,u=0,a=!1,l=null,c=null,h=!0;t=Ct(0,t||0)
;
if(n===!0){var m=!0;h=!1}else dn(n)&&(m=n.leading,a="maxWait"in n&&Ct(t,n.maxWait||0),h="trailing"in n?n.trailing:h)
;return function(){r=arguments,s=this,o++,ft(c)
;
if(a===!1)m&&o<2&&(i=e.apply(s,r))
;else{var n=new f;!l&&!m&&(u=n)
;var h=a-(n-u)
;h<=0?(ft(l),l=null,u=n,i=e.apply(s,r)):l||(l=yt(v,h))}return t!==a&&(c=yt(d,t)),i}}function Sr(e){var n=Ot.call(arguments,1)
;return yt(function(){e.apply(t,n)},1)}function xr(e,n){var r=Ot.call(arguments,2)
;return yt(function(){e.apply(t,r)},n)}function Tr(e,t){function n(){var r=n.cache,i=u+(t?t.apply(this,arguments):arguments[0])
;return dt.call(r,i)?r[i]:r[i]=e.apply(this,arguments)}return n.cache={},n}function Nr(e){var t,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}}function Cr(e){return jt(e,Ot.call(arguments,1))}function kr(e){return jt(e,Ot.call(arguments,1),null,o)}function Lr(e,t,n){var r=!0,i=!0;n===!1?r=!1:dn(n)&&(r="leading"in n?n.leading:r,i="trailing"in n?n.trailing:i),n=K(),n.leading=r,n.maxWait=t,n.trailing=i;var s=Er(e,t,n)
;return Y(n),s}function Ar(e,t){return function(){var n=[e];return vt.apply(n,arguments),t.apply(this,n)}}function Or(e){return e==null?"":Q(e).replace(E,It)}function Mr(e){return e}function _r(e){Pn(rn(e),function(t){var n=Pt[t]=e[t];Pt.prototype[t]=function(){var e=this.__wrapped__,t=[e];vt.apply(t,arguments)
;var r=n.apply(Pt,t)
;return e&&typeof e=="object"&&e===r?this:new Ht(r)}})}function Dr(){return n._=ot,this}function Hr(e,t){e==null&&t==null&&(t=1),e=+e||0,t==null?(t=e,e=0):t=+t||0;var n=At()
;return e%1||t%1?e+kt(n*(t-e+parseFloat("1e-"+((n+"").length-1))),t):e+ct(n*(t-e+1))}function Br(e,n){var r=e?e[n]:t;return pn(r)?e[n]():r}function jr(e,n,r){var i=Pt.templateSettings;e||(e=""),r=Zt({},r,i)
;var s=Zt({},r.imports,i.imports),o=$t(s),u=kn(s),a,f=0,p=r.interpolate||w,v="__p += '",g=z((r.escape||w).source+"|"+p.source+"|"+(p===m?d:w).source+"|"+(r.evaluate||w).source+"|$","g")
;e.replace(g,function(t,n,r,i,s,o){return r||(r=i),v+=e.slice(f,o).replace(S,$),n&&(v+="' +\n__e("+n+") +\n'"),s&&(a=!0,v+="';\n"+s+";\n__p += '"),r&&(v+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),f=o+t.length,t}),v+="';\n";var y=r.variable,b=y;b||(y="obj",v="with ("+y+") {\n"+v+"\n}\n"),v=(a?v.replace(l,""):v).replace(c,"$1").replace(h,"$1;"),v="function("+y+") {\n"+(b?"":y+" || ("+y+" = {})
;\n")+"var __t, __p = '', __e = _.escape"+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+v+"return __p\n}";var E="\n/*\n//@ sourceURL="+(r.sourceURL||"/lodash/template/source["+T++ +"]")+"\n*/";try{var x=A(o,"return "+v+E).apply(t,u)}catch(N){throw N.source=v,N}return n?x(n):(x.source=v,x)}function Fr(e,t,n){e=(e=+e)>-1?e:0;var i=-1,s=r(e)
;t=Pt.createCallback(t,n,1)
;while(++i<e)s[i]=t(i)
;return s}function Ir(e){return e==null?"":Q(e).replace(p,zt)}function qr(e){var t=++s;return Q(e==null?"":e)+t}function Rr(e,t){return t(e),e}function Ur(){return Q(this.__wrapped__)}function zr(){return this.__wrapped__}n=n?tt.defaults(e.Object(),n,tt.pick(e,x)):e;var r=n.Array,i=n.Boolean,f=n.Date,A=n.Function,j=n.Math,F=n.Number,q=n.Object,z=n.RegExp,Q=n.String,nt=n.TypeError,rt=[],it=q.prototype,st=Q.prototype,ot=n._,ut=z("^"+Q(it.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),at=j.ceil,ft=n.clearTimeout,lt=rt.concat,ct=j.floor,ht=A.prototype.toString,pt=ut.test(pt=q.getPrototypeOf)&&pt,dt=it.hasOwnProperty,vt=rt.push,mt=it.propertyIsEnumerable,gt=n.setImmediate,yt=n.setTimeout,bt=it.toString,wt=ut.test(wt=bt.bind)&&wt,Et=ut.test(Et=q.create)&&Et,St=ut.test(St=r.isArray)&&St,xt=n.isFinite,Tt=n.isNaN,Nt=ut.test(Nt=q.keys)&&Nt,Ct=j.max,kt=j.min,Lt=n.parseInt,At=j.random,Ot=rt.slice,Mt=ut.test(n.attachEvent),_t=wt&&!/\n|true/.test(wt+Mt),Dt={};Dt[C]=r,Dt[k]=i,Dt[L]=f,Dt[O]=A,Dt[_]=q,Dt[M]=F,Dt[D]=z,Dt[P]=Q,Ht.prototype=Pt.prototype;var Bt=Pt.support={};Bt.fastBind=wt&&!_t,Pt.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:m,variable:"",imports:{_:Pt}};var Xt=St,Vt=function(e){var t,n=e,r=[];
if(!n)return r;
if(!B[typeof e])return r;for(t in n)dt.call(n,t)&&r.push(t)
;return r},$t=Nt?function(e){return dn(e)?Nt(e):[]}:Vt,Jt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Kt=on(Jt),Qt=function(e,t,n){var r,i=e,s=i;
if(!i)return s;var o=arguments,u=0,a=typeof n=="number"?2:o.length;
if(a>3&&typeof o[a-2]=="function")var f=Pt.createCallback(o[--a-1],o[a--],2)
;else a>2&&typeof o[a-1]=="function"&&(f=o[--a])
;while(++u<a){i=o[u];
if(i&&B[typeof i]){var l=-1,c=B[typeof i]&&$t(i),h=c?c.length:0;while(++l<h)r=c[l],s[r]=f?f(s[r],i[r]):i[r]}}return s},Zt=function(e,t,n){var r,i=e,s=i;
if(!i)return s;var o=arguments,u=0,a=typeof n=="number"?2:o.length;while(++u<a){i=o[u];
if(i&&B[typeof i]){var f=-1,l=B[typeof i]&&$t(i),c=l?l.length:0;while(++f<c)r=l[f],typeof s[r]=="undefined"&&(s[r]=i[r])}}return s},tn=function(e,t,n){var r,i=e,s=i;
if(!i)return s;
if(!B[typeof i])return s;t=t&&typeof n=="undefined"?t:Pt.createCallback(t,n)
;for(r in i)if(t(i[r],r,e)===!1)return s;return s},nn=function(e,t,n){var r,i=e,s=i;
if(!i)return s;
if(!B[typeof i])return s;t=t&&typeof n=="undefined"?t:Pt.createCallback(t,n)
;var o=-1,u=B[typeof i]&&$t(i),a=u?u.length:0;while(++o<a){r=u[o];
if(t(i[r],r,e)===!1)return s}return s},yn=function(e){if(!e||bt.call(e)!=_)return!1;var t=e.valueOf,n=typeof t=="function"&&(n=pt(t))&&pt(n)
;return n?e==n||pt(e)==n:Ut(e)},Kn=_n,er=Rt(function Wr(e,t,n){var r=-1,i=e?e.length:0,s=[];while(++r<i){var o=e[r];n&&(o=n(o,r,e)),Xt(o)?vt.apply(s,t?o:Wr(o)):s.push(o)}return s}),lr=Rt(function(e,t,n){var r=-1,i=qt(),s=e?e.length:0,o=[],u=!t&&s>=a&&i===R,f=n||u?J():o;
if(u){var l=V(f)
;l?(i=U,f=l):(u=!1,f=n?f:(G(f),o))}while(++r<s){var c=e[r],h=n?n(c,r,e):c;
if(t?!r||f[f.length-1]!==h:i(f,h)<0)(n||u)&&f.push(h),o.push(c)}return u?(G(f.array),Y(f)):n&&G(f),o})
;_t&&I&&typeof gt=="function"&&(Sr=mr(gt,n))
;var Pr=Lt(y+"08")==8?Lt:function(e,t){return Lt(wn(e)?e.replace(b,""):e,t||0)};return Pt.after=vr,Pt.assign=Qt,Pt.at=Ln,Pt.bind=mr,Pt.bindAll=gr,Pt.bindKey=yr,Pt.compact=Qn,Pt.compose=br,Pt.countBy=On,Pt.createCallback=wr,Pt.debounce=Er,Pt.defaults=Zt,Pt.defer=Sr,Pt.delay=xr,Pt.difference=Gn,Pt.filter=_n,Pt.flatten=er,Pt.forEach=Pn,Pt.forIn=tn,Pt.forOwn=nn,Pt.functions=rn,Pt.groupBy=Hn,Pt.initial=nr,Pt.intersection=rr,Pt.invert=on,Pt.invoke=Bn,Pt.keys=$t,Pt.map=jn,Pt.max=Fn,Pt.memoize=Tr,Pt.merge=Sn,Pt.min=In,Pt.omit=xn,Pt.once=Nr,Pt.pairs=Tn,Pt.partial=Cr,Pt.partialRight=kr,Pt.pick=Nn,Pt.pluck=qn,Pt.range=or,Pt.reject=zn,Pt.rest=ur,Pt.shuffle=Wn,Pt.sortBy=$n,Pt.tap=Rr,Pt.throttle=Lr,Pt.times=Fr,Pt.toArray=Jn,Pt.transform=Cn,Pt.union=fr,Pt.uniq=lr,Pt.unzip=cr,Pt.values=kn,Pt.where=Kn,Pt.without=hr,Pt.wrap=Ar,Pt.zip=pr,Pt.zipObject=dr,Pt.collect=jn,Pt.drop=ur,Pt.each=Pn,Pt.extend=Qt,Pt.methods=rn,Pt.object=dr,Pt.select=_n,Pt.tail=ur,Pt.unique=lr,_r(Pt),Pt.chain=Pt,Pt.prototype.chain=function(){return this},Pt.clone=Gt,Pt.cloneDeep=Yt,Pt.contains=An,Pt.escape=Or,Pt.every=Mn,Pt.find=Dn,Pt.findIndex=Yn,Pt.findKey=en,Pt.has=sn,Pt.identity=Mr,Pt.indexOf=tr,Pt.isArguments=Wt,Pt.isArray=Xt,Pt.isBoolean=un,Pt.isDate=an,Pt.isElement=fn,Pt.isEmpty=ln,Pt.isEqual=cn,Pt.isFinite=hn,Pt.isFunction=pn,Pt.isNaN=vn,Pt.isNull=mn,Pt.isNumber=gn,Pt.isObject=dn,Pt.isPlainObject=yn,Pt.isRegExp=bn,Pt.isString=wn,Pt.isUndefined=En,Pt.lastIndexOf=sr,Pt.mixin=_r,Pt.noConflict=Dr,Pt.parseInt=Pr,Pt.random=Hr,Pt.reduce=Rn,Pt.reduceRight=Un,Pt.result=Br,Pt.runInContext=et,Pt.size=Xn,Pt.some=Vn,Pt.sortedIndex=ar,Pt.template=jr,Pt.unescape=Ir,Pt.uniqueId=qr,Pt.all=Mn,Pt.any=Vn,Pt.detect=Dn,Pt.findWhere=Dn,Pt.foldl=Rn,Pt.foldr=Un,Pt.include=An,Pt.inject=Rn,nn(Pt,function(e,t){Pt.prototype[t]||(Pt.prototype[t]=function(){var t=[this.__wrapped__];return vt.apply(t,arguments),e.apply(Pt,t)})}),Pt.first=Zn,Pt.last=ir,Pt.take=Zn,Pt.head=Zn,nn(Pt,function(e,t){Pt.prototype[t]||(Pt.prototype[t]=function(t,n){var r=e(this.__wrapped__,t,n)
;return t==null||n&&typeof t!="function"?r:new Ht(r)})}),Pt.VERSION="1.3.1",Pt.prototype.toString=Ur,Pt.prototype.value=zr,Pt.prototype.valueOf=zr,Pn(["join","pop","shift"],function(e){var t=rt[e];Pt.prototype[e]=function(){return t.apply(this.__wrapped__,arguments)}}),Pn(["push","reverse","sort","unshift"],function(e){var t=rt[e];Pt.prototype[e]=function(){return t.apply(this.__wrapped__,arguments),this}}),Pn(["concat","slice","splice"],function(e){var t=rt[e];Pt.prototype[e]=function(){return new Ht(t.apply(this.__wrapped__,arguments))}}),Pt}var t,r=[],i=[],s=0,o={},u=+(new Date)+"",a=75,f=40,l=/\b__p \+= '';/g,c=/\b(__p \+=) '' \+/g,h=/(__e\(.*?\)|\b__t\)) \+\n'';/g,p=/&(?:amp|lt|gt|quot|#39)
;/g,d=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,v=/\w*$/,m=/<%=([\s\S]+?)%>/g,g=(g=/\bthis\b/)&&g.test(et)&&g,y=" 	\fÂ ï»¿\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€"â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",b=RegExp("^["+y+"]*0+(?=.$)"),w=/($^)/,E=/[&<>"']/g,S=/['\n\r\t\u2028\u2029\\]/g,x=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"],T=0,N="[object Arguments]",C="[object Array]",k="[object Boolean]",L="[object Date]",A="[object Error]",O="[object Function]",M="[object Number]",_="[object Object]",D="[object RegExp]",P="[object String]",H={};H[O]=!1,H[N]=H[C]=H[k]=H[L]=H[M]=H[_]=H[D]=H[P]=!0;var B={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,"undefined":!1},j={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},F=B[typeof exports]&&exports,I=B[typeof module]&&module&&module.exports==F&&module,q=B[typeof global]&&global;q&&(q.global===q||q.window===q)&&(e=q)
;var tt=et()
;typeof n=="function"&&typeof n.amd=="object"&&n.amd?(e._=tt,n("vendor/lodash",[],function(){return tt})):F&&!F.nodeType?I?(I.exports=tt)._=tt:F._=tt:e._=tt}(this),n("lib/spin",["vendor/spin","vendor/lodash"],function(e,t){var n={lines:9,length:2,width:2,radius:4,corners:1,rotate:0,direction:1,color:"#000",speed:1,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:"auto"};return function(r,i){i=i||{};var s=t.extend(n,i),o=$("<div />").addClass("spinner")
;r.append(o)
;var u=(new e(s)).spin(o[0])
;return o.data("spinner",u),o}}),n("lib/feed",["lib/err","lib/spin"],function(e,t){var n=function(e){this.app=e,this.isLoading=!1,$("body").hasClass("feedPage")&&$(document).ready($.proxy(this._init,this)),$(document).on("willScrollToBottom",$.proxy(this.scroll,this)),$(document).on("sidebar:newActive",$.proxy(this.changeFeed,this)),$(document).on("toolbar:newFeed",$.proxy(this.changeFeed,this)),$(document).on("click",".show-more",$.proxy(this.showMore,this)),$(document).on("click",".blog-actions .read",$.proxy(this.markClusterBlogRead,this)),$(document).on("click",".blog a.unread",$.proxy(this.enableMarkBlogRead,this)),$(document).on("blog:noUnreadPosts",$.proxy(this.disableMarkBlogRead,this)),$(document).on("onboarding:show:getapp",$.proxy(this.showGetApp,this)),$(document).on("onboarding:show:findblogs",$.proxy(this.showFindBlogs,this)),this.requeue=this.app.requeue,this.feed_template="feed/feed",this.post_template="feed/post"};return n.prototype.getName=function(){return"Feed"},n.prototype._init=function(e){$(document).trigger("onboarding:get",["getapp"]),$(document).trigger("onboarding:get",["findblogs"])},n.prototype.scroll=function(e){var n=this;
if(this.isLoading)return;var r=this.app.getModule("Ads")
;$(".posts").each(function(){function c(e){return function(t){l.remove(),f.remove(),$("body").removeClass("scrolling")
;switch(s){case"list":var i=t[n.feed_template].feed.posts;for(var a=0;a<i.length;a++)u=n.app.render(n.post_template,{count:a,post:i[a],url:window.location.pathname,imagesize:o,baseUrl:BLClientData.base_url,contextType:t[n.feed_template].feed.context.type,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar}),$(e).append(u),(a===0||a===10)&&n.insertAd("content_1",e)
;r.findSlots(!1,!0)
;break;case"cluster":var c=t[n.feed_template].feed.blogs;for(var h=0;h<c.length;h++)c[h].num_unread>0&&(u=n.app.render("posts/blog",{count:h,blog:c[h],url:window.location.pathname,imagesize:o,baseUrl:BLClientData.base_url,contextType:t[n.feed_template].feed.context.type,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar}),$(e).append(u))}f.appendTo(".posts")
;var p=t[n.feed_template].feed.meta.next_url;$(e).attr("data-next-page",p),p||n.endOfFeed(e)}}var e=parseInt($(this).attr("data-next-page"),10)
;
if(!e)return;$(this).attr("data-next-page",0)
;var i=window.location.pathname;i=="/"&&(i="/feed")
;var s=n.preferredFormat(i),o=n.preferredImageSize(i),u,a=i+"/"+e,f=$(".loader")
;$("body").addClass("scrolling")
;var l=t(f,{top:0,left:0})
;$(".end-of-feed").remove(),n.requeue.request(a,"serial",c(this),n.handleScrollError(this))})},n.prototype.handleScrollError=function(t){return function(n,r,i){var s=new e(n.msg),o=$("<li />").appendTo(t)
;s.prepend(o),$(document).trigger("feed:loadError",s)}},n.prototype.endOfFeed=function(e){var t=this.app.render("feed/end_of_feed")
;return $(e).append(t),!0},n.prototype.changeFeed=function(e,t){this.app.pushState(null,"mydropintheoceans",t),this.loadFeed(e,t)},n.prototype.loadFeed=function(e,n){function p(e,t){return function(n){var p=n[r.feed_template].feed.context.type;$(document).trigger("feed:changed",[{type:p}]),r.isLoading=!1,$(".end-of-feed").remove(),h.remove(),c.remove(),i.append(a)
;switch(o){case"list":var d=n[r.feed_template].feed.posts;
if(d.length===0)f=!0;else{for(var v=0;v<d.length;v++)s=r.app.render(r.post_template,{count:v,post:d[v],url:t,imagesize:u,baseUrl:BLClientData.base_url,contextType:p,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar}),$(e).append(s),v===1&&r.insertAd("content_1",e)
;d.length<21&&$(e).append(r.app.render("feed/end_of_feed"))}break;case"cluster":var m=n[r.feed_template].feed.blogs;
if(m.length===0)f=!0;else for(var g=0;g<m.length;g++)m[g].num_unread>0&&(s=r.app.render("posts/blog",{count:g,blog:m[g],url:t,imagesize:u,baseUrl:BLClientData.base_url,contextType:p,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar}),$(e).append(s))}var y=n[r.feed_template];
if(f){var b=r.app.render("feed/no_posts_alert",{feed:{context:{type:y.feed.context.type,id:y.feed.context.id}},sidebar:y.sidebar,baseUrl:BLClientData.base_url})
;$(i).append(b)}$(i).append(c),$(e).attr("data-context",p||!1),$(e).attr("data-context-id",y.feed.context.id||!1),$(e).attr("data-next-page",y.feed.meta.next_url),r.setImageSize(u)
;var w=r.currentContext()
;w.ff_unread_count=y.feed.meta.ff_unread_count,w.groups=y.groups,$("body,html").scrollTop(0),$(document).trigger("feed:contextChanged",w),l.findSlots(!1,!0)}}$(document).trigger("feed:willChangeFeed")
;var r=this,i=$(".feed ol.posts"),s,o=this.preferredFormat(n),u=this.preferredImageSize(n),a=r.app.render(["feed/unfollow_alert"]),f=!1,l=this.app.getModule("Ads")
;this.isLoading=!0;var c=$(".loader")
;c.find(".spinner").remove(),i.empty(),i.append(c)
;var h=t(c,{top:100,left:0})
;$(document).trigger("analytics:virtualpage",n),r.requeue.request(n,"pageLoadQueue",p(i,n),this.handleFeedError(i,n))},n.prototype.handleFeedError=function(t,n){return function(n){var r=new e(JSON.parse(n.responseText).msg)
;t.empty()
;var i=$("<li />").appendTo(t)
;r.prepend(i),$(document).trigger("feed:loadError",r)}},n.prototype.currentContext=function(){var e=$(".feed ol"),t={type:$(e).attr("data-context"),id:$(e).attr("data-context-id"),format:$(e).attr("data-format"),imagesize:$(e).attr("data-img-size"),sortorder:$(e).attr("data-sort-order")};return t},n.prototype.markGroupAsRead=function(e,t){function u(){if($(this).hasClass("read"))return;s.push({post_id:$(this).attr("data-post-id"),blog_id:$(this).attr("data-blog-id")}),$(this).addClass("read")}var n="/_/group/read/"+e,r=this.app.getModule("SidebarModel"),i=r.blogsForGroup(e),s=[],o=$(".posts")
;for(var a=0;a<i.length;a++){var f=i[a].blog_id;o.find('article[data-blog-id="'+f+'"]').each(u)}$(document).trigger("group:read",{group_id:e}),this.requeue.request(n,"parallel",function(e,n){return function(e){t(null,e)}}(e,s),function(e,n){return function(e){n.forEach(function(e){$(document).trigger("post:unread",e)}),t(e)}}(e,s))},n.prototype.markBlogAsRead=function(e,t){var n="/_/blog/read/"+e,r=this.app.getModule("SidebarModel"),i=r.blogs[e],s=[],o=$(".posts")
;o.find('article[data-blog-id="'+e+'"]').each(function(){if($(this).hasClass("read"))return;s.push({post_id:$(this).attr("data-post-id"),blog_id:$(this).attr("data-blog-id")}),$(this).addClass("read")}),$(document).trigger("blog:read",{blog_id:e}),this.requeue.request(n,"parallel",function(e,n){return function(e){t(null,e)}}(e,s),function(e,n){return function(e){n.forEach(function(e){$(document).trigger("post:unread",e)}),t(e)}}(e,s))},n.prototype.markAllAsRead=function(e){var t="/_/post/markallread",n=this.app.getModule("SidebarModel"),r=[],i=$(".posts")
;i.find("article").each(function(){if($(this).hasClass("read"))return;r.push({post_id:$(this).attr("data-post-id"),blog_id:$(this).attr("data-blog-id")}),$(this).addClass("read")}),$(document).trigger("feed:read"),this.requeue.request(t,"parallel",function(t){return function(t){e(null,t)}}(r),function(t){return function(n){t.forEach(function(e){$(document).trigger("post:unread",e)}),e(n)}}(r))},n.prototype.preferredFormat=function(e){return e.match("blog|friends|liked")?"list":$(".feed ol.posts").attr("data-format")||"list"},n.prototype.preferredImageSize=function(e){return e.match("friends")?"small":$(".feed ol.posts").attr("data-img-size")},n.prototype.setImageSize=function(e){var t=$(".feed")
;e==="small"?$(t).removeClass("big"):$(t).addClass("big")},n.prototype.showMore=function(e){e.preventDefault()
;var t=this,n=e.currentTarget,r=$(n).attr("href"),i=$(n).parents(".blog"),s=$(i).find("ol")
;this.requeue.request(r,"parallel",function(e,n){return function(r){var s=r[t.feed_template].feed.posts;for(var o=0;o<s.length;o++){var u=t.app.render(t.post_template,{count:o,post:s[o],url:n,imagesize:$(".posts").attr("data-img-size")||"small",baseUrl:BLClientData.base_url,contextType:r[t.feed_template].feed.context.type,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar})
;$(e).append(u)}t.updateShowMorePosts(i,r[t.feed_template].feed)}}(s,r))},n.prototype.updateShowMorePosts=function(e,t){var n=$(e).find(".show-more")
;
if(t.meta.has_next){var r=parseInt($(n).find(".show-more-num").text(),10)
;$(n).find(".show-more-num").text(r-t.posts.length)
;var i="/feed/blog/"+t.context.id+"/"+t.meta.next_url+"/true";$(n).attr("href",i)}else $(n).addClass("hide")},n.prototype.markClusterBlogRead=function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).closest(".blog")
;$(t).attr("disabled",!0),$(n).find(".show-more").addClass("hide")
;var r=$(n).attr("data-blog-id")
;this.markBlogAsRead(r,function(e,t){e})},n.prototype.enableMarkBlogRead=function(e){var t=e.currentTarget,n=$(t).closest(".blog")
;$(n).find(".blog-actions .read").removeAttr("disabled")},n.prototype.disableMarkBlogRead=function(e,t){var n;t?n=$(".posts").find('.blog[data-blog-id="'+t.blog_id+'"]'):n=$(e.currentTarget).closest(".blog"),$(n).find(".blog-actions .read").attr("disabled",!0)},n.prototype.refresh=function(e){var t=this;this.requeue.request("/_/post/batch","pageLoadQueue",{method:"post",dataType:"json",data:JSON.stringify(e),contentType:"application/json; charset=utf-8"},function(e,n,r){var i=e.posts,s=t.currentContext(),o=s.sortorder==="oldest"?"after":"prepend",u=s.sortorder==="oldest"?$(".posts").find(".post-container:last"):$(".posts")
;for(var a=0;a<i.length;a++)rendered=t.app.render("posts/post_main",{count:a,post:i[a],url:document.URL,imagesize:s.imagesize,baseUrl:BLClientData.base_url,contextType:s.type,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar}),u[o](rendered)})},n.prototype.insertAd=function(t,n){var r=$("<li />").addClass("ad"),i=$("<div />").attr({"data-placement":t,"class":"ad-placement"})
;r.append(i),$(n).append(r)},n.prototype.showGetApp=function(e){var t=this.app.render("partials/get_app_modal",{})
;$(t).appendTo("body"),$(document).trigger("modal:show","#getAppModal"),$(document).on("click touchend",".modal-backdrop",function(e){e.stopPropagation()})},n.prototype.showFindBlogs=function(e){var t=this.app.render("partials/find_blogs_popover",{})
;$(t).appendTo(".header .find"),$(document).trigger("popover:show","#findBlogsPopover")},n}),n("lib/active",[],function(){var e=function(){this.isActive=!0,this.detectActiveWindow()};return e.prototype.setIsActive=function(e){this.isActive=e,$(document).trigger("windowVisibilityChange",e)},e.prototype.getName=function(){return"Active"},e.prototype.detectActiveWindow=function(){function i(e){var n="visible",i="hidden",s={focus:n,focusin:n,pageshow:n,blur:i,focusout:i,pagehide:i},o=e||window.event;o.type in s?r.setIsActive(s[o.type]==="visible"):r.setIsActive(!document[t])}var t="hidden",n=window;t in document?document.addEventListener("visibilitychange",i):(t="mozHidden")in document?document.addEventListener("mozvisibilitychange",i):(t="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",i):(t="msHidden")in document?document.addEventListener("msvisibilitychange",i):"onfocusin"in document?document.onfocusin=document.onfocusout=i:n.onpageshow=n.onpagehide=n.onfocus=n.onblur=i;var r=this},e}),n("lib/i18n",["require"],function(e){var t=function(e){this.hasLanguage=!_.isEmpty(window.BLLang),this.lang=this.hasLanguage?window.BLLang:{},this.langReplace=/__([^\s]+)__/g;var t=/[<>&]/g,n={"<":"&lt;",">":"&gt;","&":"&amp;"};this.naiveEncode=function(r){return typeof r!="string"&&(r+=""),r.replace(t,function(t){return n[t]})},e.addViewData("t",$.proxy(this.t,this))};return t.prototype.t=function(e,t){t.context?e=[e,t.context].join("_"):t.count&&t.count>1&&(e=[e,"plural"].join("_"))
;
if(!this.hasLanguage)return e;var n=this.lang[e]||(t?t.defaultValue:null)
;
if(!n)return e;
if(!t)return n;typeof n!="string"&&(n+="")
;var r=this;return n.replace(this.langReplace,function(n,i){var s=i.substr(-4)=="HTML";s&&(i=i.substr(0,i.length-4))
;var o=t[i]||i;return s||(o=r.naiveEncode(o)),o})},t.prototype.getName=function(){return"i18n"},t}),n("lib/sidebar",[],function(){var e=function(e){this.blogs={},this.groups={},this.num_unread=0,this.num_read_blogs=0,$(document).ready($.proxy(this._loadData,this)),$(document).on("post:read",$.proxy(this.postRead,this)),$(document).on("post:unread",$.proxy(this.postUnread,this)),$(document).on("blog:read",$.proxy(this.blogRead,this)),$(document).on("group:read",$.proxy(this.groupRead,this)),$(document).on("feed:read",$.proxy(this.feedRead,this)),$(document).on("blog:groupChanged",$.proxy(this.moveBlog,this)),$(document).on("blog:newGroup",$.proxy(this.addGroup,this)),$(document).on("blog:unfollow",$.proxy(this.removeBlog,this)),$(document).on("blog:follow",$.proxy(this.addBlog,this))};return e.prototype.getName=function(){return"SidebarModel"},e.prototype._loadData=function(){var e=this,t=window._BLSidebarData||[];try{delete window._BLSidebarData}catch(n){window._BLSidebarData=undefined}var r=0;$.map(t,function(t){switch(t.type){case"group":var n=t.blogs.read.concat(t.blogs.unread)
;$.map(n,function(n){n.group_id=t.group_id,e.blogs[n.blog_id]=n,r=parseInt(n.num_unread,10),e.num_unread+=r,r===0&&e.num_read_blogs++}),e.groups[t.group_id]=t;break;case"blog":e.blogs[t.blog_id]=t,r=parseInt(t.num_unread,10),e.num_unread+=r,r===0&&e.num_read_blogs++}})},e.prototype.blogsForGroup=function(e){var t=this.groups[e].blogs;return t.read.concat(t.unread)},e.prototype.postRead=function(e,t){var n=this.blogs[t.blog_id];
if(!n)return;n.num_unread--,this.num_unread--,$(document).trigger("sidebar:blogModified",[n]),this.groups[n.group_id]&&(this.groups[n.group_id].num_unread--,$(document).trigger("sidebar:groupModified",[this.groups[n.group_id]])),n.num_unread===0&&($(document).trigger("blog:noUnreadPosts",[n]),this.num_read_blogs===0&&$(document).trigger("sidebar:blogRead"),this.num_read_blogs++)},e.prototype.postUnread=function(e,t){var n=this.blogs[t.blog_id];
if(!n)return;n.num_unread===0&&(this.num_read_blogs--,this.num_read_blogs===0&&$(document).trigger("sidebar:blogUnread")),n.num_unread++,this.num_unread++,$(document).trigger("sidebar:blogModified",[n]),this.groups[n.group_id]&&(this.groups[n.group_id].num_unread++,$(document).trigger("sidebar:groupModified",[this.groups[n.group_id]]))},e.prototype.blogRead=function(e,t){t=this.blogs[t.blog_id];var n=this.blogs[t.blog_id].num_unread;this.blogs[t.blog_id].num_unread=0,this.num_unread-=n,$(document).trigger("sidebar:blogModified",this.blogs[t.blog_id]),this.groups[t.group_id]&&(this.groups[t.group_id].num_unread-=n,$(document).trigger("sidebar:groupModified",this.groups[t.group_id])),this.num_read_blogs===0&&$(document).trigger("sidebar:blogRead"),this.num_read_blogs++},e.prototype.groupRead=function(e,t){var n=this.groups[t.group_id].blogs.unread;for(var r in n){var i=n[r],s=i.num_unread;this.num_unread-=s,i.num_unread=0,$(document).trigger("sidebar:blogModified",i)}this.groups[t.group_id].num_unread=0,$(document).trigger("sidebar:groupModified",this.groups[t.group_id]),this.num_read_blogs===0&&$(document).trigger("sidebar:blogRead"),this.num_read_blogs+=n.length},e.prototype.feedRead=function(e){for(var t in this.groups)this.groups[t].num_unread=0;for(var n in this.blogs)this.blogs[n].num_unread=0;this.num_unread=0,$(document).trigger("sidebar:feedRead"),this.num_read_blogs===0&&$(document).trigger("sidebar:blogRead"),this.num_read_blogs+=this.blogs.length},e.prototype.moveBlog=function(e,t){var n=this.blogs[t.blog_id];
if(n.group_id){var r=this.groups[n.group_id];r.num_unread-=parseInt(n.num_unread,10),$(document).trigger("sidebar:groupModified",r)}if(t.group_id){this.groups[t.group_id]||this.addGroup(e,{group_id:t.group_id,group_name:t.group_name})
;var i=this.groups[t.group_id];i.num_unread+=parseInt(n.num_unread,10),$(document).trigger("sidebar:groupModified",i)}n.group_id=t.group_id},e.prototype.addGroup=function(e,t){this.groups[t.group_id]={type:"group",group_id:t.group_id,group_name:t.group_name,num_unread:0,blog:{read:[],unread:[]}},$(document).trigger("sidebar:groupAdded",t),$(document).trigger("sidebar:groupModified",t)},e.prototype.removeBlog=function(e,t){this.num_unread-=this.blogs[t.blog_id].num_unread,$(document).trigger("sidebar:blogRemoved",t)},e.prototype.addBlog=function(e,t){this.blogs[t.blog_id]={type:"blog",blog_id:t.blog_id,blog_name:t.blog_name,num_unread:t.num_unread},this.num_unread+=parseInt(t.num_unread,10),$(document).trigger("sidebar:blogAdded",t)},e}),n("lib/sidebar_view",["lib/spin"],function(e){var t=function(e){this.app=e,this.sidebar=$(".sidebar"),this.title=document.title,this.currentDragTarget=null,this.dragData={},this.noticed={},$("body").hasClass("feedPage")&&$(document).ready($.proxy(this._init,this))
;
if(this.sidebar.length&&this.app.hasStorage){var t=window.localStorage.getItem("sidebarShow")
;parseInt(t,10)===1&&this.showSidebar()}$(document).on("sidebar:blogModified",$.proxy(this.updateBlog,this)),$(document).on("sidebar:groupModified",$.proxy(this.updateGroup,this)),$(document).on("sidebar:feedRead",$.proxy(this.updateAllRead,this)),$(document).on("sidebar:blogRemoved",$.proxy(this.removeBlog,this)),$(document).on("blog:groupChanged",$.proxy(this.moveBlog,this)),$(document).on("sidebar:groupAdded",$.proxy(this.addGroup,this)),$(document).on("sidebar:blogAdded",$.proxy(this.addBlog,this)),$(document).on("click",".sidebar .group-icon",$.proxy(this.toggleGroup,this)),$(document).on("keydown",$.proxy(this.keyDown,this)),$(document).on("keyup",$.proxy(this.keyUp,this)),$(document).on("click",".sidebar.active .num-unread",$.proxy(this.markRead,this)),$(document).on("feed:contextChanged",$.proxy(this.updateFFBadge,this)),$(document).on("toolbar:newFeed",$.proxy(this.changeActive,this)),$(document).on("nav:loadFeed",$.proxy(this.changeFeed,this)),$(document).on("popstate:loadFeed",$.proxy(this.changeFeed,this)),$(document).on("realtime:newPost",$.proxy(this.newPost,this)),$("body").hasClass("feedPage")&&($(document).on("click",".toggle-sidebar",$.proxy(this.toggleSidebar,this)),$(document).on("click",".sidebar .close",$.proxy(this.hideSidebar,this)),$(document).on("breakpoint:small",$.proxy(this.resizeSmall,this)),$(document).on("breakpoint:medium",$.proxy(this.resizeMedium,this)),$(document).on("feed:contextChanged",$.proxy(this.triggerHideSidebar,this)),$(document).on("click",".hide-sidebar-onboarding",$.proxy(this.hideSidebarOnboarding,this)),$(document).on("mousemoved",$.proxy(this.hintSidebar,this)),$(document).on("click",".sidebar-hint",$.proxy(this.toggleSidebar,this))),$(document).on("click",".sidebar .show-read",$.proxy(this.showRead,this)),$(document).on("click",".sidebar .hide-read",$.proxy(this.hideRead,this)),$(document).on("sidebar:blogRead",$.proxy(this.showShowRead,this)),$(document).on("sidebar:blogUnread",$.proxy(this.hideShowRead,this)),this.app.hasHistory&&($(document).on("click",".sidebar .top a",$.proxy(this.changeFeed,this)),$(document).on("click",".sidebar .group",$.proxy(this.changeFeed,this)),$(document).on("click",".sidebar .blog",$.proxy(this.changeFeed,this)))};return t.prototype.getName=function(){return"SidebarView"},t.prototype._init=function(){var e=this.app.getModule("SidebarModel"),t=this.app.render("sidebar/show_read",{num_read:e.num_read_blogs})
;$(".sidebar").addClass("unread-only"),$(".sidebar").find(".footer").prepend(t),this.updateTitle()},t.prototype.updateTitle=function(){var e=this.app.getModule("SidebarModel"),t=this.title+" ("+e.num_unread+")",n=this.app.getModule("Title")
;n&&n.setDefault(t)},t.prototype.updateBlog=function(e,t){var n=$(".sidebar").find('[data-blog-id="'+t.blog_id+'"]')
;t.num_unread===0?n.removeClass("unread").addClass("read"):n.hasClass("read")&&n.removeClass("read").addClass("unread"),n.find(".num-unread").text(t.num_unread||""),this.updateTitle()},t.prototype.updateGroup=function(e,t){var n=$(".sidebar").find('[data-group-id="'+t.group_id+'"]')
;n.find(".group .num-unread").text(t.num_unread||""),this.updateTitle()},t.prototype.updateAllRead=function(e){$(".sidebar").find(".num-unread").text(""),this.updateTitle()},t.prototype.removeBlog=function(e,t){var n=$(".sidebar").find('[data-blog-id="'+t.blog_id+'"]')
;n.remove(),this.updateTitle()},t.prototype.moveBlog=function(e,t){this._closeAll()
;var n=$(".sidebar").find('[data-blog-id="'+t.blog_id+'"]'),r;t.group_id?(r=$(".sidebar").find('[data-group-id="'+t.group_id+'"]').find("ul"),this._openGroup({group_id:t.group_id})):r=$(".sidebar").find(".groups"),$(n).remove(),$(r).append(n)},t.prototype.addGroup=function(e,t){var n=BLViews["sidebar/group"]({group:t,context:{id:0}})
;$(".sidebar").find(".groups").prepend(n)},t.prototype.addBlog=function(e,t){var n=BLViews["sidebar/blog"]({blog:t,context:{id:0}}),r=['<li data-blog-id="',t.blog_id,'" data-type="blog">',n,"</li>"].join("")
;$(".sidebar").find(".groups").append(r),this.updateTitle()},t.prototype.changeFeed=function(e,t){e.preventDefault()
;
if(!t){var n=$(e.target)
;n.prop("tagName")!=="A"&&(n=n.closest("a")),t=n.attr("href")}this.changeActive(e,t),$(document).trigger("sidebar:newActive",[t]),$(".sidebar").hasClass("hideable")&&this.hideSidebar()},t.prototype.showSpinner=function(t,n){var r=$(".sidebar")
;r.find(".spinner").remove(),r.find(".num-unread, .friends-unread").removeClass("hidden")
;var i=r.find('a[href="'+n+'"]').closest("li"),s=e(i,{top:3,left:16})
;i.find("> a .num-unread, .friends-unread").addClass("hidden"),$(document).one("feed:contextChanged feed:loadError",function(){s.remove(),i.find(".num-unread, .friends-unread").removeClass("hidden")})},t.prototype.changeActive=function(e,t){var n=$(".sidebar")
;n.find(".selected").removeClass("selected"),n.find('a[href="'+t+'"]').addClass("selected")},t.prototype.toggleGroup=function(e){var t=e,n;e.preventDefault?(e.preventDefault(),e.stopPropagation(),n=$(e.target),t=n.closest("li")):n=t.find(".group-icon"),n.toggleClass("arrow-right-icon").toggleClass("arrow-down-icon"),t.toggleClass("open")},t.prototype._openGroup=function(e){var t=$(".sidebar").find('[data-group-id="'+e.group_id+'"]')
;$(t).addClass("open"),$(t).find(".arrow-right-icon").removeClass("arrow-right-icon").addClass("arrow-down-icon")},t.prototype._closeAll=function(){$(".sidebar").find(".open").removeClass("open"),$(".sidebar").find(".arrow-down-icon").removeClass("arrow-down-icon").addClass("arrow-right-icon")},t.prototype.updateFFBadge=function(e,t){var n=t.ff_unread_count,r=parseInt($(".sidebar").find(".friends-unread").text(),10)
;
if(n!==r){$(".sidebar").find(".friends-unread").remove()
;
if(n>0){var i='<span class="friends-unread">'+n+"</span>";$(".sidebar").find(".following").append(i)}}},t.prototype.showRead=function(e){e.preventDefault(),$(".sidebar").removeClass("unread-only")},t.prototype.hideRead=function(e){e.preventDefault(),$(".sidebar").addClass("unread-only")},t.prototype.showShowRead=function(e){$(".sidebar").find(".show-read, .hide-read").removeClass("hide")},t.prototype.hideShowRead=function(e){$(".sidebar").find(".show-read, .hide-read").addClass("hide")},t.prototype.toggleSidebar=function(e){e.preventDefault(),$("body").hasClass("show-sidebar")?this.hideSidebar():this.showSidebar()},t.prototype.showSidebar=function(e){$("body").addClass("show-sidebar"),this.sidebar.removeClass("sidebar-hint"),this.app.hasStorage&&window.localStorage.setItem("sidebarShow",1)},t.prototype.hideSidebar=function(e){e&&e.preventDefault(),$("body").removeClass("show-sidebar"),this._closeAll(),this.app.hasStorage&&window.localStorage.setItem("sidebarShow",0)},t.prototype.resizeSmall=function(e){$(".sidebar").addClass("hideable"),this.hideSidebar(),$("body").hasClass("show-sidebar-onboarding")&&this.hideSidebarOnboarding()},t.prototype.resizeMedium=function(e){$(".sidebar").removeClass("hideable")},t.prototype.triggerHideSidebar=function(e){$(".sidebar").hasClass("hideable")&&($(document).trigger("sidebar:hideSidebar"),this.hideSidebar())},t.prototype.hideSidebarOnboarding=function(e){e&&e.preventDefault(),$("body").removeClass("show-sidebar-onboarding"),this.hideSidebar()},t.prototype.keyDown=function(e){e.keyCode===18&&this.toggleActive()},t.prototype.keyUp=function(e){e.keyCode===18&&this.toggleActive()},t.prototype.toggleActive=function(){$("sidebar").toggleClass("active")},t.prototype.markRead=function(e){var t=$(e.target).closest("li"),n=$(t).attr("data-type"),r=$(t).attr("data-"+n+"-id"),i=this.app.getModule("Feed")
;switch(n){case"group":i.markGroupAsRead(r,function(e,t){})}},t.prototype.newPost=function(e,t){var n=[t.blog_id,t.post_id].join(":")
;
if(this.noticed[n])return;t.noAction=!0,$(document).trigger("post:unread",[t])
;var r=this.app.getModule("Title")
;
if(r){r.clearAlternates()
;var i=this.app.getModule("i18n")
;r.addAlternate(i.t("title_new_posts",{defaultValue:"New posts!"}))}},t.prototype.hintSidebar=function(e,t){var n=t.pageX;n<30&&!$("body").hasClass("show-sidebar")?this.sidebar.addClass("sidebar-hint"):this.sidebar.removeClass("sidebar-hint")},t.prototype.dragBlog=function(e){this.currentDragTarget=$(e.target)
;var t=$(e.target).closest("[data-group-id]"),n=t.attr("data-group-id")
;this.dragData={group_id:n}},t.prototype.dragOver=function(e){var t=$(e.target)
;
if(t.find(this.currentDragTarget).length)return;t.addClass("drop-target")},t.prototype.dragLeave=function(e){var t=$(e.target)
;
if(t.attr("data-type")!=="group")return;t.attr("data-group-id")===this.dragData.group_id&&this.toggleGroup(t),t.removeClass("drop-target")},t.prototype.dragEnd=function(e){this.sidebar.find(".drop-target").removeClass("drop-target")},t.prototype.drop=function(e){},t}),function(e){var t={isMsie:function(){var e=/(msie) ([\w.]+)/i.exec(navigator.userAgent)
;return e?parseInt(e[2],10):!1},isBlankString:function(e){return!e||/^\s*$/.test(e)},escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(e){return typeof e=="string"},isNumber:function(e){return typeof e=="number"},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isPlainObject,isUndefined:function(e){return typeof e=="undefined"},bind:e.proxy,each:function(t,n){function r(e,t){return n(t,e)}e.each(t,r)},map:e.map,filter:e.grep,every:function(t,n){var r=!0;return t?(e.each(t,function(e,i){if(!(r=n.call(null,i,e,t)))return!1}),!!r):r},some:function(t,n){var r=!1;return t?(e.each(t,function(e,i){if(r=n.call(null,i,e,t))return!1}),!!r):r},mixin:e.extend,getUniqueId:function(){var e=0;return function(){return e++}}(),templatify:function(n){function r(){return String(n)}return e.isFunction(n)?n:r},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var r,i;return function(){var s=this,o=arguments,u,a;return u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r,clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},throttle:function(e,t){var n,r,i,s,o,u;return o=0,u=function(){o=new Date,i=null,s=e.apply(n,r)},function(){var a=new Date,f=t-(a-o)
;return n=this,r=arguments,f<=0?(clearTimeout(i),i=null,o=a,s=e.apply(n,r)):i||(i=setTimeout(u,f)),s}},noop:function(){}},n="0.9.3",r=function(e,n){function r(e){this.maxSize=e||100,this.size=0,this.hash={},this.list=new i}function i(){this.head=this.tail=null}function s(e,t){this.key=e,this.val=t,this.prev=this.next=null}return t.mixin(r.prototype,{set:function(t,n){var r=this.list.tail,i;this.size>=this.maxSize&&(this.list.remove(r),delete this.hash[r.key]),(i=this.hash[t])?(i.val=n,this.list.moveToFront(i)):(i=new s(t,n),this.list.add(i),this.hash[t]=i,this.size++)},get:function(t){var n=this.hash[t];
if(n)return this.list.moveToFront(n),n.val}}),t.mixin(i.prototype,{add:function(t){this.head&&(t.next=this.head,this.head.prev=t),this.head=t,this.tail=this.tail||t},remove:function(t){t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev},moveToFront:function(e){this.remove(e),this.add(e)}}),r}(this),i=function(){function i(e){this.prefix=["__",e,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+this.prefix)}function s(){return(new Date).getTime()}function o(e){return JSON.stringify(t.isUndefined(e)?null:e)}function u(e){return JSON.parse(e)}var e,n;try{e=window.localStorage,e.setItem("~~~","!"),e.removeItem("~~~")}catch(r){e=null}return e&&window.JSON?n={_prefix:function(e){return this.prefix+e},_ttlKey:function(e){return this._prefix(e)+this.ttlKey},get:function(t){return this.isExpired(t)&&this.remove(t),u(e.getItem(this._prefix(t)))},set:function(n,r,i){return t.isNumber(i)?e.setItem(this._ttlKey(n),o(s()+i)):e.removeItem(this._ttlKey(n)),e.setItem(this._prefix(n),o(r))},remove:function(t){return e.removeItem(this._ttlKey(t)),e.removeItem(this._prefix(t)),this},clear:function(){var t,n,r=[],i=e.length;for(t=0;t<i;t++)(n=e.key(t)).match(this.keyMatcher)&&r.push(n.replace(this.keyMatcher,""))
;for(t=r.length;t--;)this.remove(r[t])
;return this},isExpired:function(n){var r=u(e.getItem(this._ttlKey(n)))
;return t.isNumber(r)&&s()>r?!0:!1}}:n={get:t.noop,set:t.noop,remove:t.noop,clear:t.noop,isExpired:t.noop},t.mixin(i.prototype,n),i}(),s=function(){function u(t){t=t||{},this._send=t.send?a(t.send):e.ajax,this._get=t.rateLimiter?t.rateLimiter(this._get):this._get}function a(n){return function(i,s){function u(e){t.defer(function(){o.resolve(e)})}function a(e){t.defer(function(){o.reject(e)})}var o=e.Deferred()
;return n(i,s,u,a),o}}var n=0,i={},s=6,o=new r(10)
;return u.setMaxPendingRequests=function(t){s=t},u.resetCache=function(){o=new r(10)},t.mixin(u.prototype,{_get:function(e,t,r){function f(t){r&&r(t),o.set(e,t)}function l(){n--,delete i[e],u.onDeckRequestArgs&&(u._get.apply(u,u.onDeckRequestArgs),u.onDeckRequestArgs=null)}var u=this,a;(a=i[e])?a.done(f):n<s?(n++,i[e]=this._send(e,t).done(f).always(l)):this.onDeckRequestArgs=[].slice.call(arguments,0)},get:function(e,n,r){var i=this,s;return t.isFunction(n)&&(r=n,n={}),(s=o.get(e))?t.defer(function(){r&&r(s)}):this._get(e,n,r),!!s}}),u}(),o=function(){function n(e){e=e||{},this.tokenize=e.tokenizer||r,this.datums=[],this.trie=s()}function r(t){return e.trim(t).toLowerCase().split(/\s+/)}function i(e){return e=t.filter(e,function(e){return!!e}),e=t.map(e,function(e){return e.toLowerCase()}),e}function s(){return{ids:[],children:{}}}function o(e){var t={},n=[];for(var r=0;r<e.length;r++)t[e[r]]||(t[e[r]]=!0,n.push(e[r]))
;return n}function u(e,t){function s(e,t){return e-t}var n=0,r=0,i=[];e=e.sort(s),t=t.sort(s)
;while(n<e.length&&r<t.length)e[n]<t[r]?n++:e[n]>t[r]?r++:(i.push(e[n]),n++,r++)
;return i}return t.mixin(n.prototype,{bootstrap:function(t){this.datums=t.datums,this.trie=t.trie},add:function(e){var n=this;e=t.isArray(e)?e:[e],t.each(e,function(e){var r,o;r=n.datums.push(e)-1,o=i(e.tokens||n.tokenize(e.value)),delete e.tokens,t.each(o,function(e){var t,i,o,u;t=n.trie,i=e.split("")
;while(o=i.shift())t=t.children[o]||(t.children[o]=s()),t.ids.push(r)})})},remove:function(){e.error("not implemented")},get:function(n){var r=this,i,s;return i=this.tokenize(n),t.each(i,function(e){var t,n,i,o;
if(s&&s.length===0)return!1;t=r.trie,n=e.split("")
;while(t&&(i=n.shift()))t=t.children[i];
if(!t||n.length!==0)return!1;o=t.ids.slice(0),s=s?u(s,o):o}),s?t.map(o(s),function(e){return r.datums[e]}):[]},serialize:function(){return{datums:this.datums,trie:this.trie}}}),n}(),u=window.Dataset=function(){function u(n){(!n||!n.local&&!n.prefetch&&!n.remote)&&e.error("one of local, prefetch, or remote is required"),this.name=n.name||t.getUniqueId(),this.limit=n.limit||5,this.valueKey=n.valueKey||"value",this.dupChecker=f(n.dupChecker),this.sorter=a(n.sorter),this.local=l(n),this.prefetch=c(n),this.remote=h(n),this.index=new o({tokenizer:n.tokenizer}),this.storage=n.name?new i(n.name):null}function a(e){function t(){return 0}return e||t}function f(e){function n(){return!1}function r(e,t){return e.value===t.value}return t.isFunction(e)||(e=e===!1?n:r),e}function l(e){return e.local||null}function c(e){var r,i;i={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}};
if(r=e.prefetch||null)r=t.isString(r)?{url:r}:r,r=t.mixin(i,r),r.thumbprint=n+r.thumbprint,r.ajax.method=r.ajax.method||"get",r.ajax.dataType=r.ajax.dataType||"json";return r}function h(e){function i(e){return function(n){return t.debounce(n,e)}}function s(e){return function(n){return t.throttle(n,e)}}var n,r;r={url:null,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}};
if(n=e.remote||null)n=t.isString(n)?{url:n}:n,n=t.mixin(r,n),n.rateLimiter=/^throttle$/i.test(n.rateLimitBy)?s(n.rateLimitWait):i(n.rateLimitWait),n.ajax.method=n.ajax.method||"get",n.ajax.dataType=n.ajax.dataType||"json",delete n.rateLimitBy,delete n.rateLimitWait;return n}var r;return r={data:"data",protocol:"protocol",thumbprint:"thumbprint"},t.mixin(u.prototype,{_loadPrefetch:function(n){function o(e){var t,i;t=n.filter?n.filter(e):e,r.add(t),r._saveToStorage(r.index.serialize(),n.thumbprint,n.ttl)}var r=this,i,s;return(i=this._readFromStorage(n.thumbprint))?(this.index.bootstrap(i),s=e.Deferred().resolve()):s=e.ajax(n.url,n.ajax).done(o),s},_getFromRemote:function(t,n){function o(e){var t=r.remote.filter?r.remote.filter(e):e;n(r._normalize(t))}var r=this,i,s;return t=t||"",s=encodeURIComponent(t),i=this.remote.replace?this.remote.replace(this.remote.url,t):this.remote.url.replace(this.remote.wildcard,s),this.transport.get(i,this.remote.ajax,o)},_normalize:function(n){function i(e){var n,i;return n=t.isString(e)?e:e[r.valueKey],i={value:n,tokens:e.tokens},t.isString(e)?(i.raw={})[r.valueKey]=e:i.raw=e,i}var r=this;return t.map(n,i)},_saveToStorage:function(t,n,i){this.storage&&(this.storage.set(r.data,t,i),this.storage.set(r.protocol,location.protocol,i),this.storage.set(r.thumbprint,n,i))},_readFromStorage:function(t){var n={};return this.storage&&(n.data=this.storage.get(r.data),n.protocol=this.storage.get(r.protocol),n.thumbprint=this.storage.get(r.thumbprint)),isExpired=n.thumbprint!==t||n.protocol!==location.protocol,n.data&&!isExpired?n.data:null},initialize:function(){function i(){n.add(n.local)}var n=this,r;return r=this.prefetch?this._loadPrefetch(this.prefetch):e.Deferred().resolve(),this.local&&r.done(i),this.transport=this.remote?new s(this.remote):null,this.initialize=function(){return n},this},add:function(n){var r;n=t.isArray(n)?n:[n],r=this._normalize(n),this.index.add(r)},get:function(n,r){function u(e){var n=s.slice(0)
;e=t.map(e,a),t.each(e,function(e){var r;return r=t.some(n,function(t){return i.dupChecker(e,t)}),!r&&n.push(e),n.length<i.limit}),r&&r(n.sort(i.sorter))}function a(e){return e.raw}var i=this,s,o=!1;s=t.map(this.index.get(n),a).sort(this.sorter).slice(0,this.limit),s.length<this.limit&&this.transport&&(o=this._getFromRemote(n,u)),!o&&r&&r(s)}}),u}(),a={wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',section:'<div class="tt-section-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion">%BODY%</div>'},f={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};t.isMsie()&&t.mixin(f.query,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),t.isMsie()&&t.isMsie()<=7&&t.mixin(f.query,{marginTop:"-1px"})
;var l=function(){function r(t){(!t||!t.el)&&e.error("EventBus initialized without el"),this.$el=e(t.el)}var n="typeahead:";return t.mixin(r.prototype,{trigger:function(e){var t=[].slice.call(arguments,1)
;this.$el.trigger(n+e,t)}}),r}(),c=function(){function n(t,n,r,i){var s;
if(!r)return this;n=n.split(e),r=i?f(r,i):r,this._callbacks=this._callbacks||{};while(s=n.shift())this._callbacks[s]=this._callbacks[s]||{sync:[],async:[]},this._callbacks[s][t].push(r)
;return this}function r(e,t,r){return n.call(this,"async",e,t,r)}function i(e,t,r){return n.call(this,"sync",e,t,r)}function s(t){var n;
if(!this._callbacks)return this;t=t.split(e)
;while(n=t.shift())delete this._callbacks[n];return this}function o(n){var r=this,i,s,o,a,f;
if(!this._callbacks)return this;n=n.split(e),o=[].slice.call(arguments,1)
;while((i=n.shift())&&(s=this._callbacks[i]))a=u(s.sync,this,[i].concat(o)),f=u(s.async,this,[i].concat(o)),a()&&t(f)
;return this}function u(e,t,n){function r(){var r;for(var i=0;!r&&i<e.length;i+=1)r=e[i].apply(t,n)===!1;return!r}return r}function a(){var e,t;return window.setImmediate?e=function(t){setImmediate(function(){t()})}:e=function(t){setTimeout(function(){t()},0)},e}function f(e,t){return e.bind?e.bind(t):function(){e.apply(t,[].slice.call(arguments,0))}}var e=/\s+/,t=a()
;return{onSync:i,onAsync:r,off:s,trigger:o}}(),h=function(e){function r(e,n,r){var i=[],s;for(var o=0;o<e.length;o++)i.push(t.escapeRegExChars(e[o]))
;return s=r?"\\b("+i.join("|")+")\\b":"("+i.join("|")+")",n?new RegExp(s):new RegExp(s,"i")}var n={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(s){function u(t){var n,r;
if(n=o.exec(t.data))wrapperNode=e.createElement(s.tagName),s.className&&(wrapperNode.className=s.className),r=t.splitText(n.index),r.splitText(n[0].length),wrapperNode.appendChild(r.cloneNode(!0)),t.parentNode.replaceChild(wrapperNode,r)
;return!!n}function a(e,t){var n,r=3;for(var i=0;i<e.childNodes.length;i++)n=e.childNodes[i],n.nodeType===r?i+=t(n)?1:0:a(n,t)}var o;s=t.mixin({},n,s)
;
if(!s.node||!s.pattern)throw new Error("both node and pattern must be set")
;s.pattern=t.isArray(s.pattern)?s.pattern:[s.pattern],o=r(s.pattern,s.caseSensitive,s.wordsOnly),a(s.node,u)}}(window.document),p=function(){function r(r){var s=this,o,u,a,f;r=r||{},r.input||e.error("input is missing"),o=t.bind(this._onBlur,this),u=t.bind(this._onFocus,this),a=t.bind(this._onKeydown,this),f=t.bind(this._onInput,this),this.$hint=e(r.hint),this.$input=e(r.input).on("blur.tt",o).on("focus.tt",u).on("keydown.tt",a),this.$hint.length===0&&(this.setHintValue=this.getHintValue=this.clearHint=t.noop),t.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(e){if(n[e.which||e.keyCode])return;t.defer(t.bind(s._onInput,s,e))}):this.$input.on("input.tt",f),this.query=this.$input.val(),this.$overflowHelper=i(this.$input)}function i(t){return e("<span></span>").css({position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:t.css("font-family"),fontSize:t.css("font-size"),fontStyle:t.css("font-style"),fontVariant:t.css("font-variant"),fontWeight:t.css("font-weight"),wordSpacing:t.css("word-spacing"),letterSpacing:t.css("letter-spacing"),textIndent:t.css("text-indent"),textRendering:t.css("text-rendering"),textTransform:t.css("text-transform")}).insertAfter(t)}function s(e,t){return r.normalizeQuery(e)===r.normalizeQuery(t)}function o(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}var n;return n={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},r.normalizeQuery=function(e){return(e||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},t.mixin(r.prototype,c,{_onBlur:function(t){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(t){this.trigger("focused")},_onKeydown:function(t){var r=n[t.which||t.keyCode];this._managePreventDefault(r,t),r&&this._shouldTrigger(r,t)&&this.trigger(r+"Keyed",t)},_onInput:function(t){this._checkInputValue()},_managePreventDefault:function(t,n){var r,i,s;switch(t){case"tab":i=this.getHintValue(),s=this.getInputValue(),r=i&&i!==s&&!o(n)
;break;case"up":case"down":r=!o(n)
;break;default:r=!1}r&&n.preventDefault()},_shouldTrigger:function(t,n){var r;switch(t){case"tab":r=!o(n)
;break;default:r=!0}return r},_checkInputValue:function(){var t,n,r;t=this.getInputValue(),n=s(t,this.query),r=n?this.query.length!==t.length:!1,n?r&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query=t)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(t){this.query=t},getInputValue:function(){return this.$input.val()},setInputValue:function(t,n){this.$input.val(t),!n&&this._checkInputValue()},getHintValue:function(){return this.$hint.val()},setHintValue:function(t){this.$hint.val(t)},resetInputValue:function(){this.$input.val(this.query)},clearHint:function(){this.$hint.val("")},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>this.$input.width()},isCursorAtEnd:function(){var e,n,r;return e=this.$input.val().length,n=this.$input[0].selectionStart,t.isNumber(n)?n===e:document.selection?(r=document.selection.createRange(),r.moveStart("character",-e),e===r.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),r}(),d=function(){function s(n){n=n||{},n.templates=n.templates||{},n.source||e.error("missing source"),this.query=null,this.highlight=!!n.highlight,this.name=n.name||t.getUniqueId(),this.source=o(n.source),this.valueKey=l(n.source)||n.valueKey||"value",this.templates=p(n.templates,this.valueKey),this.$el=e(a.section.replace("%CLASS%",this.name))}function o(e){return window.Dataset&&e instanceof window.Dataset&&(e.initialize(),e=t.bind(e.get,e)),e}function l(e){return u&&e instanceof u?e.valueKey:null}function p(e,n){function r(e){return"<p>"+e[n]+"</p>"}return n=n||"value",{empty:e.empty&&t.templatify(e.empty),header:e.header&&t.templatify(e.header),footer:e.footer&&t.templatify(e.footer),suggestion:e.suggestion||r}}var n="ttSection",r="ttValue",i="ttDatum";return s.extractSectionName=function(r){return e(r).data(n)},s.extractValue=function(n){return e(n).data(r)},s.extractDatum=function(n){return e(n).data(i)},t.mixin(s.prototype,c,{_render:function(o,u){function p(){return l.templates.empty({query:o})}function d(){function c(t){var s,o,u;return o=l.templates.suggestion(t),u=a.suggestion.replace("%BODY%",o),s=e(u).data(n,l.name).data(r,t[l.valueKey]).data(i,t),s.children().each(function(){e(this).css(f.suggestionChild)}),s}var s;return s=e(a.suggestions).css(f.suggestions).append(t.map(u,c)),l.highlight&&h({node:s[0],pattern:o}),s}function v(){return l.templates.header({query:o,isEmpty:!c})}function m(){return l.templates.footer({query:o,isEmpty:!c})}var l=this,c;this.$el.empty(),c=u&&u.length,!c&&this.templates.empty?this.$el.html(p()).append(l.templates.header?v():null).prepend(l.templates.footer?m():null):c&&this.$el.html(d()).append(l.templates.header?v():null).prepend(l.templates.footer?m():null),this.trigger("rendered")},getRoot:function(){return this.$el},update:function(t){function r(e){t===n.query&&n._render(t,e)}var n=this;this.query=t,this.source(t,r)},clear:function(){this._render(this.query||"")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=null}}),s}(),v=function(){function n(n){var i=this,s,o,u,a,f;n=n||{},n.menu||e.error("menu and/or sections are required"),this.isOpen=!1,this.isEmpty=!0,this.isMouseOverDropdown=!1,this.sections=t.map(n.sections,r),s=t.bind(this._onMouseEnter,this),o=t.bind(this._onMouseLeave,this),u=t.bind(this._onSuggestionClick,this),a=t.bind(this._onSuggestionMouseEnter,this),f=t.bind(this._onSuggestionMouseLeave,this),this.$menu=e(n.menu).on("mouseenter.tt",s).on("mouseleave.tt",o).on("click.tt",".tt-suggestion, .tt-header",u).on("mouseenter.tt",".tt-suggestion",a).on("mouseleave.tt",".tt-suggestion",f),t.each(this.sections,function(e){i.$menu.append(e.getRoot()),e.onSync("rendered",i._onRendered,i)})}function r(e){return new d(e)}return t.mixin(n.prototype,c,{_onMouseEnter:function(t){this.isMouseOverDropdown=!0},_onMouseLeave:function(t){this.isMouseOverDropdown=!1},_onSuggestionClick:function(n){this.trigger("suggestionClicked",e(n.currentTarget))},_onSuggestionMouseEnter:function(n){this._setCursor(e(n.currentTarget))},_onSuggestionMouseLeave:function(t){this._removeCursor()},_onRendered:function(){function n(e){return e.isEmpty()}this.isEmpty=t.every(this.sections,n),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("sectionRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function(){return this.$menu.find(".tt-suggestion")},_getCursor:function(){return this.$menu.find(".tt-suggestions .tt-cursor").first()},_setCursor:function(t){t.first().addClass("tt-cursor"),this.trigger("cursorMoved")},_removeCursor:function(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function(t){var n,r,i,s;
if(!this.isOpen)return;r=this._getCursor(),n=this._getSuggestions(),this._removeCursor(),i=n.index(r)+t,i=(i+1)%(n.length+1)-1;
if(i===-1){this.trigger("cursorRemoved")
;return}i<-1&&(i=n.length-1),this._setCursor(s=n.eq(i)),this._ensureVisible(s)},_ensureVisible:function(t){var n,r,i,s;n=t.position().top,r=n+t.outerHeight(!0),i=this.$menu.scrollTop(),s=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),n<0?this.$menu.scrollTop(i+n):s<r&&this.$menu.scrollTop(i+(r-s))},close:function(){this.isOpen&&(this.isOpen=this.isMouseOverDropdown=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(t){this.$menu.css(t==="ltr"?f.ltr:f.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(t){var n=null;return t.length&&(n={raw:d.extractDatum(t),value:d.extractValue(t),sectionName:d.extractSectionName(t)}),n},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForHeader:function(){return e(".tt-input").val()},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function(n){function r(e){e.update(n)}t.each(this.sections,r)},empty:function(){function n(e){e.clear()}t.each(this.sections,n)},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function n(e){e.destroy()}this.$menu.off(".tt"),this.$menu=null,t.each(this.sections,n)}}),n}(),m=function(){function r(t){var n,r,s,o;t=t||{},t.input||e.error("missing input"),this.autoselect=t.autoselect,this.minLength=t.minLength||0,this.$node=i(t.input,t.withHint),n=this.$node.find(".tt-dropdown-menu"),r=this.$node.find(".tt-input"),s=this.$node.find(".tt-hint"),this.eventBus=new l({el:r}),this.dropdown=(new v({menu:n,sections:t.sections})).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("sectionRendered",this._onSectionRendered,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this),this.input=(new p({input:r,hint:s})).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this)}function i(t,r){var i,o,u,l;i=e(t),o=e(a.wrapper).css(f.wrapper),u=e(a.dropdown).css(f.dropdown),l=i.clone().css(f.hint).css(s(i)),l.removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled",!0).attr({autocomplete:"off",spellcheck:"false"}),i.data(n,{dir:i.attr("dir"),autocomplete:i.attr("autocomplete"),spellcheck:i.attr("spellcheck"),style:i.attr("style")}),i.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(r?f.input:f.inputWithNoHint)
;try{!i.attr("dir")&&i.attr("dir","auto")}catch(c){}return i.wrap(o).parent().prepend(r?l:null).append(u)}function s(e){return{backgroundAttachment:e.css("background-attachment"),backgroundClip:e.css("background-clip"),backgroundColor:e.css("background-color"),backgroundImage:e.css("background-image"),backgroundOrigin:e.css("background-origin"),backgroundPosition:e.css("background-position"),backgroundRepeat:e.css("background-repeat"),backgroundSize:e.css("background-size")}}function o(e){var r=e.find(".tt-input")
;t.each(r.data(n),function(e,n){t.isUndefined(e)?r.removeAttr(n):r.attr(n,e)}),r.detach().removeData(n).removeClass("tt-input").insertAfter(e),e.remove()}var n="ttAttrs";return t.mixin(r.prototype,{_onSuggestionClicked:function(t,n){var r;
if(r=this.dropdown.getDatumForSuggestion(n))this._select(r),this.input.focus()},_onCursorMoved:function(){var t=this.dropdown.getDatumForCursor()
;this.input.clearHint(),this.eventBus.trigger("cursorchanged",t.raw,t.sectionName)},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()},_onSectionRendered:function(){this._updateHint()},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function(){this.dropdown.open()},_onBlurred:function(){!this.dropdown.isMouseOverDropdown&&this.dropdown.close()},_onEnterKeyed:function(t,n){var r,i;r=this.dropdown.getDatumForCursor(),i=this.dropdown.getDatumForTopSuggestion()
;var s=this.dropdown.getDatumForHeader()
;r?(this._select(r),n.preventDefault()):this.autoselect&&i?(this._select(i),n.preventDefault()):(this._select(s),n.preventDefault())},_onTabKeyed:function(t,n){var r;(r=this.dropdown.getDatumForCursor())?(this._select(r),n.preventDefault()):this._autocomplete()},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){this.dropdown.open(),this.dropdown.moveCursorUp()},_onDownKeyed:function(){this.dropdown.open(),this.dropdown.moveCursorDown()},_onLeftKeyed:function(){this.dir==="rtl"&&this._autocomplete()},_onRightKeyed:function(){this.dir==="ltr"&&this._autocomplete()},_onQueryChanged:function(t,n){this.input.clearHint(),this.dropdown.empty(),n.length>=this.minLength&&this.dropdown.update(n),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var t;this.dir!==(t=this.input.getLanguageDirection())&&(this.dir=t,this.$node.css("direction",t),this.dropdown.setLanguageDirection(t))},_updateHint:function(){var n,r,i,s,o,u;n=this.dropdown.getDatumForTopSuggestion(),n&&this.dropdown.isVisible()&&!this.input.hasOverflow()&&(r=this.input.getInputValue(),i=p.normalizeQuery(r),s=t.escapeRegExChars(i),o=new RegExp("^(?:"+s+")(.*$)","i"),u=o.exec(n.value),this.input.setHintValue(r+(u?u[1]:"")))},_autocomplete:function(){var t,n,r;t=this.input.getHintValue(),n=this.input.getQuery(),t&&n!==t&&this.input.isCursorAtEnd()&&(r=this.dropdown.getDatumForTopSuggestion(),r&&this.input.setInputValue(r.value),this.eventBus.trigger("autocompleted",r.raw,r.sectionName))},_select:function(n){this.input.clearHint()
;
if(!n)return;this.input.setQuery(n.value),n.value&&this.input.setInputValue(n.value,!0),this._setLanguageDirection(),t.defer(t.bind(this.dropdown.close,this.dropdown)),this.eventBus.trigger("selected",n.raw,n.sectionName)},open:function(){this.dropdown.open()},close:function(){this.dropdown.close()},getQuery:function(){return this.input.getQuery()},setQuery:function(t){this.input.setInputValue(t)},destroy:function(){this.input.destroy(),this.dropdown.destroy(),o(this.$node),this.$node=null}}),r}()
;(function(){var n,r;n="ttTypeahead",r={initialize:function(i){function s(){var r=e(this),s;s=new m({input:r,withHint:t.isUndefined(i.hint)?!0:!!i.hint,minLength:i.minLength||0,autoselect:!!i.autoselect,sections:t.isArray(i.sections)?i.sections:[i.sections]}),r.data(n,s)}return i=i||{},this.each(s)},open:function(){function r(){var t=e(this),r;(r=t.data(n))&&r.open()}return this.each(r)},close:function(){function r(){var t=e(this),r;(r=t.data(n))&&r.close()}return this.each(r)},val:function(r){function i(){var t=e(this),i;(i=t.data(n))&&i.setQuery(r)}function s(){var t=e(this),r,i;
if(r=t.data(n))i=r.getQuery()
;return i}return r?this.each(i):this.map(s).get()},destroy:function(){function r(){var t=e(this),r;
if(r=t.data(n))r.destroy(),t.removeData(n)}return this.each(r)}},jQuery.fn.typeahead=function(e){return r[e]?r[e].apply(this,[].slice.call(arguments,1)):r.initialize.apply(this,arguments)}})()}(window.jQuery),n("vendor/typeahead",function(){}),n("lib/search",["lib/spin","vendor/typeahead"],function(e){var t=function(e){this.app=e,this.dataSet=null,this.dropdown=null,this.search=$("#query"),this.u_patterns=["http://","http://www.","www."],this.search.length&&$(document).ready($.proxy(this.init,this)),$("body").hasClass("search-page")&&$(document).on("willScrollToBottom",$.proxy(this.scrollHandler,this)),$("#query").on("input",function(){$("#query").val()||$(this).typeahead("close")}),$(document).on("typeahead:cursorchanged","#query",$.proxy(this.cursorChange,this)),$(document).on("keydown","#query",$.proxy(this.highlightHeader,this)),$(document).on("typeahead:opened","#query",$.proxy(this.onOpen,this)),$(document).on("mouseenter",".tt-header",$.proxy(this.headerHover,this)),$(document).on("mouseleave",".tt-dropdown-menu",$.proxy(this.onMouseOut,this)),$(document).on("breakpoint:small",$.proxy(this.resizeSmall,this)),$(document).on("breakpoint:medium",$.proxy(this.resizeMedium,this)),$(document).on("typeahead:selected","#query",$.proxy(this.selectionRedirect,this)),$(document).on("focus","#query",$.proxy(this.expand,this)),$(document).on("blur","#query",$.proxy(this.contract,this)),$(".search-icon, input.search-icon-mobile").on("click",$.proxy(this.clickSubmit,this)),$("#addBlog").on("submit",$.proxy(this.addBlog,this))
;var t=BLClientData.ab_groups_obj.search_categories_new;t&&($(document).on("focus","#query",$.proxy(this.showCategories,this)),$(document).on("click touchend",".search, .search-icon-mobile",$.proxy(this.preventHideCategories,this)),$(document).on("click touchend","html, body",$.proxy(this.hideCategories,this)),$(document).on("keydown","#query",$.proxy(this.hideCategories,this)),$(document).on("click touchend",".category-dropdown .category",$.proxy(this.clickCategory,this)))};return t.prototype.getName=function(){return"Search"},t.prototype.cursorChange=function(){$(".tt-header").removeClass("tt-cursor")},t.prototype.highlightHeader=function(e){if(e.keyCode===38||e.keyCode===40)$(".tt-suggestion").hasClass("tt-cursor")||$(".tt-header").hasClass("tt-cursor")||$(".tt-header").addClass("tt-cursor")},t.prototype.onOpen=function(){$(".tt-header").addClass("tt-cursor")},t.prototype.headerHover=function(){$(".tt-suggestion").length>0&&!$(".tt-header").hasClass("tt-cursor")&&$(".tt-header").addClass("tt-cursor")},t.prototype.onMouseOut=function(){$(".tt-header").addClass("tt-cursor")},t.prototype.selectionRedirect=function(e,t){return t?window.location.href=BLClientData.base_url+"/blog/"+t.id:window.location.href=BLClientData.base_url+"/search/"+encodeURIComponent($("#query").val()),!1},t.prototype.clickSubmit=function(){$("#query").val()&&(window.location.href=BLClientData.base_url+"/search/"+encodeURIComponent($("#query").val()))},t.prototype.expand=function(e){$("#query").parents("fieldset").addClass("focused"),$("#query").val()||$("#query").typeahead("close")},t.prototype.contract=function(e){$("#query").parents("fieldset").removeClass("focused")},t.prototype.init=function(){this.dataSet=this.createDataSet(),this.createTypeahead()},t.prototype.createDataSet=function(){return new Dataset({name:"search",remote:{url:"/_/autocomplete/?q=%QUERY&type=blogs",filter:function(e){return e.results}},limit:8})},t.prototype.createTypeahead=function(){var e=this,t=$("#query").attr("data-typeahead-label")
;$("#query").typeahead({minLength:2,hint:!1,sections:{name:"autocomplete",source:e.dataSet,templates:{footer:function(){var e=$("<div class='tt-header tt-cursor'>"+t+" <strong>"+_.escape($("#query").val())+"</strong></div>")
;return e},suggestion:function(t){var n=$("<a class='label' href='/blog/"+t.id+"'>"+t.value+"</a>"),r=$('<img class="snap" src="'+t.snap+'">'),i=t.url.lastIndexOf("/")===t.url.length-1?t.url.substring(0,t.url.length-1):t.url;for(var s=0;s<e.u_patterns.length;s++)i=i.replace(e.u_patterns[s],"")
;var o=$('<a class="url" href="/blog/'+t.id+'"">'+i+"</a>"),u=$("<div class='item-info'>").append(n).append(o)
;return $("<li id='"+t.id+"'>").append(r).append(u).html()},empty:function(){return}}}})},t.prototype.resizeSmall=function(){this.dropdown||(this.dropdown=$(".tt-dropdown-menu").remove())},t.prototype.resizeMedium=function(){this.dropdown&&($(".twitter-typeahead").append(this.dropdown),this.dropdown=null)},t.prototype.scrollHandler=function(t){function c(e){return function(t){$(".loader, .spinner").remove()
;var r=t["search/search"].list,i=t["search/search"].context;for(var s=0;s<r.length;s++)u=n.app.render("posts/curator_blog",{blog:r[s],context:i}),e.append(u)
;e.attr("data-has-next",i.has_next),e.attr("data-next-page",i.next_page)
;
if(!i.has_next){var o=n.app.render("search/help")
;$(e).append(o)}}}var n=this,r=$(".curator-list"),i=parseInt(r.attr("data-next-page"),10),s=parseInt(r.attr("data-has-next"),10),o=r.attr("data-query"),u;
if(!s||!i)return;r.attr("data-has-next",0)
;var a=["","search",o,i].join("/"),f=$('<li class="loader scroll"></li>')
;r.append(f)
;var l=e(f,{top:40,left:0})
;n.app.requeue.request(a,"serial",c(r),n.handleScrollError(r))},t.prototype.handleScrollError=function(e){return function(t,n,r){var i=new Err(t.msg),s=$("<li />").appendTo(e)
;i.prepend(s),$(document).trigger("search:loadError",i)}},t.prototype.addBlog=function(e){e.preventDefault()
;var t=$("#addBlog .blog").val()
;t&&($(".add-blog").addClass("disabled"),window.location.href="/search/"+encodeURIComponent(t))},t.prototype.showCategories=function(e){!$(".search").find(".tt-header")[0]&&!$("#query").val()&&$(".search").addClass("show-category-dropdown"),$(document).trigger("searchCategories:show")},t.prototype.hideCategories=function(e){$(".search").removeClass("show-category-dropdown")},t.prototype.preventHideCategories=function(e){e.stopPropagation()},t.prototype.clickCategory=function(e){e.stopPropagation()
;var t=$(e.currentTarget),n=t.attr("data-cat"),r={category_id:n};$(document).trigger("searchCategories:click",[r,function(){window.location=t.attr("href")}])},t}),function(e){"function"==typeof n&&n.amd?n("vendor/wookmark.min",["jquery"],e):e(jQuery)}(function(e){function t(e){o(function(){var t,n;for(t=0;e.length>t;t++)n=e[t],n.obj.css(n.css)})}function n(t){return e.trim(t).toLowerCase()}var r,i,s;s=function(e,t){return function(){return e.apply(t,arguments)}},i={align:"center",autoResize:!1,comparator:null,container:e("body"),direction:void 0,ignoreInactiveItems:!0,itemWidth:0,fillEmptySpace:!1,flexibleWidth:0,offset:2,outerOffset:0,onLayoutChanged:void 0,possibleFilters:[],resizeDelay:50,verticalOffset:void 0};var o=window.requestAnimationFrame||function(e){e()};r=function(){function r(t,n){this.handler=t,this.columns=this.containerWidth=this.resizeTimer=null,this.activeItemCount=0,this.itemHeightsDirty=!0,this.placeholders=[],e.extend(!0,this,i,n),this.verticalOffset=this.verticalOffset||this.offset,this.update=s(this.update,this),this.onResize=s(this.onResize,this),this.onRefresh=s(this.onRefresh,this),this.getItemWidth=s(this.getItemWidth,this),this.layout=s(this.layout,this),this.layoutFull=s(this.layoutFull,this),this.layoutColumns=s(this.layoutColumns,this),this.filter=s(this.filter,this),this.clear=s(this.clear,this),this.getActiveItems=s(this.getActiveItems,this),this.refreshPlaceholders=s(this.refreshPlaceholders,this),this.sortElements=s(this.sortElements,this),this.updateFilterClasses=s(this.updateFilterClasses,this),this.updateFilterClasses(),this.autoResize&&e(window).bind("resize.wookmark",this.onResize),this.container.bind("refreshWookmark",this.onRefresh)}return r.prototype.updateFilterClasses=function(){for(var e,t,r,i,s=0,o=0,u=0,a={},f=this.possibleFilters;this.handler.length>s;s++)if(t=this.handler.eq(s),e=t.data("filterClass"),"object"==typeof e&&e.length>0)for(o=0;e.length>o;o++)r=n(e[o]),a[r]||(a[r]=[]),a[r].push(t[0])
;for(;f.length>u;u++)i=n(f[u]),i in a||(a[i]=[])
;this.filterClasses=a},r.prototype.update=function(t){this.itemHeightsDirty=!0,e.extend(!0,this,t)},r.prototype.onResize=function(){clearTimeout(this.resizeTimer),this.itemHeightsDirty=0!==this.flexibleWidth,this.resizeTimer=setTimeout(this.layout,this.resizeDelay)},r.prototype.onRefresh=function(){this.itemHeightsDirty=!0,this.layout()},r.prototype.filter=function(t,r){var i,s,o,u,a,f=[],l=e()
;
if(t=t||[],r=r||"or",t.length){for(s=0;t.length>s;s++)a=n(t[s]),a in this.filterClasses&&f.push(this.filterClasses[a])
;
if(i=f.length,"or"==r||1==i)for(s=0;i>s;s++)l=l.add(f[s])
;else if("and"==r){var c,h,p,d=f[0],v=!0;for(s=1;i>s;s++)f[s].length<d.length&&(d=f[s])
;for(d=d||[],s=0;d.length>s;s++){for(h=d[s],v=!0,o=0;f.length>o&&v;o++)if(p=f[o],d!=p){for(u=0,c=!1;p.length>u&&!c;u++)c=p[u]==h;v&=c}v&&l.push(d[s])}}this.handler.not(l).addClass("inactive")}else l=this.handler;l.removeClass("inactive"),this.columns=null,this.layout()},r.prototype.refreshPlaceholders=function(t,n){for(var r,i,s,o,u,a,f=this.placeholders.length,l=this.columns.length,c=this.container.innerHeight()
;l>f;f++)r=e('<div class="wookmark-placeholder"/>').appendTo(this.container),this.placeholders.push(r)
;for(a=this.offset+2*parseInt(this.placeholders[0].css("borderLeftWidth"),10),f=0;this.placeholders.length>f;f++)if(r=this.placeholders[f],s=this.columns[f],f>=l||!s[s.length-1])r.css("display","none")
;else{if(i=s[s.length-1],!i)continue;u=i.data("wookmark-top")+i.data("wookmark-height")+this.verticalOffset,o=c-u-a,r.css({position:"absolute",display:o>0?"block":"none",left:f*t+n,top:u,width:t-a,height:o})}},r.prototype.getActiveItems=function(){return this.ignoreInactiveItems?this.handler.not(".inactive"):this.handler},r.prototype.getItemWidth=function(){var e=this.itemWidth,t=this.container.width()-2*this.outerOffset,n=this.handler.eq(0),r=this.flexibleWidth;
if(void 0===this.itemWidth||0===this.itemWidth&&!this.flexibleWidth?e=n.outerWidth():"string"==typeof this.itemWidth&&this.itemWidth.indexOf("%")>=0&&(e=parseFloat(this.itemWidth)/100*t),r){"string"==typeof r&&r.indexOf("%")>=0&&(r=parseFloat(r)/100*t)
;var i=t+this.offset,s=~~(.5+i/(r+this.offset)),o=~~(i/(e+this.offset)),u=Math.max(s,o),a=Math.min(r,~~((t-(u-1)*this.offset)/u))
;e=Math.max(e,a),this.handler.css("width",e)}return e},r.prototype.layout=function(e){if(this.container.is(":visible")){var t,n=this.getItemWidth()+this.offset,r=this.container.width(),i=r-2*this.outerOffset,s=~~((i+this.offset)/n),o=0,u=0,a=0,f=this.getActiveItems(),l=f.length;
if(this.itemHeightsDirty||!this.container.data("itemHeightsInitialized")){for(;l>a;a++)t=f.eq(a),t.data("wookmark-height",t.outerHeight())
;this.itemHeightsDirty=!1,this.container.data("itemHeightsInitialized",!0)}s=Math.max(1,Math.min(s,l)),o=this.outerOffset,"center"==this.align&&(o+=~~(.5+(i-(s*n-this.offset))>>1)),this.direction=this.direction||("right"==this.align?"right":"left"),u=e||null===this.columns||this.columns.length!=s||this.activeItemCount!=l?this.layoutFull(n,s,o):this.layoutColumns(n,o),this.activeItemCount=l,this.container.css("height",u),this.fillEmptySpace&&this.refreshPlaceholders(n,o),void 0!==this.onLayoutChanged&&"function"==typeof this.onLayoutChanged&&this.onLayoutChanged()}},r.prototype.sortElements=function(e){return"function"==typeof this.comparator?e.sort(this.comparator):e},r.prototype.layoutFull=function(n,r,i){var s,o,u=0,a=0,f=e.makeArray(this.getActiveItems()),l=f.length,c=null,h=null,p=[],d=[],v="left"==this.align?!0:!1;for(this.columns=[],f=this.sortElements(f)
;r>p.length;)p.push(this.outerOffset),this.columns.push([])
;for(;l>u;u++){for(s=e(f[u]),c=p[0],h=0,a=0;r>a;a++)c>p[a]&&(c=p[a],h=a)
;s.data("wookmark-top",c),o=i,(h>0||!v)&&(o+=h*n),(d[u]={obj:s,css:{position:"absolute",top:c}}).css[this.direction]=o,p[h]+=s.data("wookmark-height")+this.verticalOffset,this.columns[h].push(s)}return t(d),Math.max.apply(Math,p)},r.prototype.layoutColumns=function(e,n){for(var r,i,s,o,u=[],a=[],f=0,l=0,c=0;this.columns.length>f;f++){for(u.push(this.outerOffset),i=this.columns[f],o=f*e+n,r=u[f],l=0;i.length>l;l++,c++)s=i[l].data("wookmark-top",r),(a[c]={obj:s,css:{top:r}}).css[this.direction]=o,r+=s.data("wookmark-height")+this.verticalOffset;u[f]=r}return t(a),Math.max.apply(Math,u)},r.prototype.clear=function(){clearTimeout(this.resizeTimer),e(window).unbind("resize.wookmark",this.onResize),this.container.unbind("refreshWookmark",this.onRefresh),this.handler.wookmarkInstance=null},r}(),e.fn.wookmark=function(e){return this.wookmarkInstance?this.wookmarkInstance.update(e||{}):this.wookmarkInstance=new r(this,e||{}),this.wookmarkInstance.layout(!0),this.show()}}),function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function r(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,s=this,o=s.EventEmitter;i.getListeners=function(e){var t,n,r=this._getEvents()
;
if("object"==typeof e){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[])
;return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener)
;return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e)
;return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var r,i=this.getListenersAsObject(e),s="object"==typeof n;for(r in i)i.hasOwnProperty(r)&&-1===t(i[r],n)&&i[r].push(s?n:{listener:n,once:!1})
;return this},i.on=r("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=r("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t])
;return this},i.removeListener=function(e,n){var r,i,s=this.getListenersAsObject(e)
;for(i in s)s.hasOwnProperty(i)&&(r=t(s[i],n),-1!==r&&s[i].splice(r,1))
;return this},i.off=r("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;
if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r])
;else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i))
;return this},i.removeEvent=function(e){var t,n=typeof e,r=this._getEvents()
;
if("string"===n)delete r[e];else if("object"===n)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},i.removeAllListeners=r("removeEvent"),i.emitEvent=function(e,t){var n,r,i,s,o=this.getListenersAsObject(e)
;for(i in o)if(o.hasOwnProperty(i))for(r=o[i].length;r--;)n=o[i][r],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener)
;return this},i.trigger=r("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1)
;return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return s.EventEmitter=o,e},"function"==typeof n&&n.amd?n("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}.call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var r=document.documentElement,i=function(){};r.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:r.attachEvent&&(i=function(e,n,r){e[n+r]=r.handleEvent?function(){var n=t(e)
;r.handleEvent.call(r,n)}:function(){var n=t(e)
;r.call(e,n)},e.attachEvent("on"+n,e[n+r])})
;var s=function(){};r.removeEventListener?s=function(e,t,n){e.removeEventListener(t,n,!1)}:r.detachEvent&&(s=function(e,t,n){e.detachEvent("on"+t,e[t+n])
;try{delete e[t+n]}catch(r){e[t+n]=void 0}})
;var o={bind:i,unbind:s};"function"==typeof n&&n.amd?n("eventie/eventie",o):e.eventie=o}(this),function(e,r){"function"==typeof n&&n.amd?n("vendor/imagesloaded",["eventEmitter/EventEmitter","eventie/eventie"],function(t,n){return r(e,t,n)}):"object"==typeof exports?module.exports=r(e,t("eventEmitter"),t("eventie")):e.imagesLoaded=r(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function r(e,t){for(var n in t)e[n]=t[n];return e}function i(e){return"[object Array]"===h.call(e)}function s(e){var t=[];
if(i(e))t=e;else if("number"==typeof e.length)for(var n=0,r=e.length;r>n;n++)t.push(e[n])
;else t.push(e)
;return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t)
;"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=r({},this.options),"function"==typeof t?n=t:r(this.options,t),n&&this.on("always",n),this.getImages(),f&&(this.jqDeferred=new f.Deferred)
;var i=this;setTimeout(function(){i.check()})}function u(e){this.img=e}function a(e){this.src=e,p[e]=this}var f=e.jQuery,l=e.console,c=l!==void 0,h=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n)
;for(var r=n.querySelectorAll("img"),i=0,s=r.length;s>i;i++){var o=r[i];this.addImage(o)}}},o.prototype.addImage=function(e){var t=new u(e)
;this.images.push(t)},o.prototype.check=function(){function e(e,i){return t.options.debug&&c&&l.log("confirm",e,i),t.progress(e),n++,n===r&&t.complete(),!0}var t=this,n=0,r=this.images.length;
if(this.hasAnyBroken=!1,!r)return this.complete(),void 0;for(var i=0;r>i;i++){var s=this.images[i];s.on("confirm",e),s.check()}},o.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},f&&(f.fn.imagesLoaded=function(e,t){var n=new o(this,e,t)
;return n.jqDeferred.promise(f(this))}),u.prototype=new t,u.prototype.check=function(){var e=p[this.img.src]||new a(this.img.src)
;
if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;
if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var p={};return a.prototype=new t,a.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},a.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},a.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},a.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},a.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},o}),n("lib/posts",["vendor/wookmark.min","lib/spin","vendor/imagesloaded","lib/err"],function(e,t,n,r){var i=function(e){this.app=e,this.requeue=this.app.requeue,$(document).ready($.proxy(this._init,this)),$(document).on("click",".post a.read",$.proxy(this.triggerMarkAsRead,this)),$(document).on("click",".post a.unread",$.proxy(this.triggerMarkAsUnread,this)),$(document).on("click","a.like",$.proxy(this.like,this)),$(document).on("click","a.unlike",$.proxy(this.unlike,this)),$(document).on("post:read",$.proxy(this.markAsRead,this)),$(document).on("post:unread",$.proxy(this.markAsUnread,this)),$(document).on("blog:read",$.proxy(this.blogRead,this)),$(document).on("group:read",$.proxy(this.groupRead,this)),$(document).on("click",'a[data-func="emailPost"]',$.proxy(this.emailPost,this)),$(document).on("click",'a[data-func="facebookPost"]',$.proxy(this.facebookPost,this)),$(document).on("click",'a[data-func="tweet"]',$.proxy(this.tweet,this)),$(document).on("click",'a[data-func="pin"]',$.proxy(this.pin,this)),$(document).on("post:like",$.proxy(this.postLiked,this)),$(document).on("post:unlike",$.proxy(this.postUnliked,this)),$(document).on("mousedown",".post .post-link.readable",$.proxy(this.readAndMarkPost,this)),$(document).on("mousedown",".post .post-link",$.proxy(this.readPost,this)),$(document).on("mousedown",".post .media-link",$.proxy(this.readPost,this)),this.actionClasses={like:"liked",read:"read"},$(document).on("tiled-posts:loaded",$.proxy(this.tiledPostsLoaded,this)),$("body").hasClass("saves-page")&&$(document).on("willScrollToBottom",$.proxy(this.savesScrollHandler,this))};return i.prototype.getName=function(){return"Posts"},i.prototype._init=function(){this.tiledPostsLoading(),this.tiledPostsLoaded()},i.prototype.triggerMarkAsRead=function(e){e.preventDefault()
;var t=$(e.currentTarget).closest("article"),n=$(t).attr("data-post-id")
;$(document).trigger("post:hide",[{post_id:n}]),$(document).trigger("post:read",{post_id:n,blog_id:$(t).attr("data-blog-id")})},i.prototype.triggerMarkAsUnread=function(e){e.preventDefault()
;var t=$(e.currentTarget).closest("article"),n=$(t).attr("data-post-id")
;$(document).trigger("post:unhide",[{post_id:n}]),$(document).trigger("post:unread",{post_id:n,blog_id:$(t).attr("data-blog-id")})},i.prototype.readAndMarkPost=function(e){var t=$(e.currentTarget).closest("article")
;
if(!t.hasClass("read")){var n=$(t).attr("data-post-id"),r=$(t).attr("data-blog-id")
;$(document).trigger("post:read",{post_id:n,blog_id:r})}},i.prototype.readPost=function(e){var t=$(e.currentTarget).closest("article"),n=$(t).attr("data-post-id"),r=$(t).attr("data-blog-id"),i=$(t).attr("data-url")
;$(document).trigger("post:visits_link",{post_id:n,blog_id:r,post_url:i})},i.prototype.markAsRead=function(e,t){e.preventDefault(),t.noAction!==!0&&this._toggleAction(t,"read",!0,e)},i.prototype.markAsUnread=function(e,t){e.preventDefault(),t.noAction!==!0&&this._toggleAction(t,"read",!1,e)},i.prototype.like=function(e){e.preventDefault()
;var t=$(e.currentTarget).closest("article"),n={post_id:$(t).attr("data-post-id"),post_name:$(t).attr("data-post-name"),post_media:$(t).attr("data-post-media"),blog_id:$(t).attr("data-blog-id"),blog_name:$(t).attr("data-blog-name"),url:$(t).attr("data-url")};this._toggleAction(n,"like",!0,e),$(document).trigger("post:like",[n])},i.prototype.unlike=function(e){e.preventDefault()
;var t=$(e.currentTarget).closest("article"),n={post_id:$(t).attr("data-post-id"),blog_id:$(t).attr("data-blog-id"),blog_name:$(t).attr("data-blog-name")};this._toggleAction(n,"like",!1,e),$(document).trigger("post:unlike",[n])},i.prototype._toggleAction=function(e,t,n,r){if(!BLClientData.user_id){this.showFollowBlogModal({id:e.blog_id,name:e.blog_name}),r.stopPropagation()
;return}var i=$('.post article[data-post-id="'+e.post_id+'"]'),s=this.actionClasses[t]||"";i.toggleClass(s)
;var o=(n?"":"un")+t,u=[e.blog_id,e.post_id].join("/"),a="/_/post/"+o+"/"+u,f=this,l=$.getJSON(a).success(function(e,t,n,r,i){return function(){var e=(t?"":"un")+n,i="post:success:"+f.actionClasses[e];$(document).trigger(i,[r])}}(i,n,t,e,s)).fail(function(e,t,r,i,s){return function(){e.toggleClass(s)
;var t=(n?"un":"")+r,o="post:"+t;$(document).trigger(o,[i])}}(i,n,t,e,s))},i.prototype.postLiked=function(e,t){var n=this,r=$('article[data-post-id="'+t.post_id+'"]'),i=$('.share-dialog[data-post-id="'+t.post_id+'"]')
;$(i).addClass("sd-show"),r.closest(".post").addClass("sd-show")
;var s=r.find(".num-likes"),o=parseInt(s.text(),10)
;isNaN(o)&&(r.addClass("has-likes"),o=0),o++,s.text(o),t.likes=o,t.blog={id:t.blog_id},r.find(".likes").html(n.app.render("feed/likes",{post:t}))},i.prototype.postUnliked=function(e,t){var n=this,r=$('article[data-post-id="'+t.post_id+'"]'),i=r.find(".num-likes"),s=parseInt(i.text(),10)
;s<=1?(s="",r.removeClass("has-likes")):s--,i.text(s),t.likes=s||0,t.blog={id:t.blog_id},r.find(".likes").html(n.app.render("feed/likes",{post:t}))},i.prototype.blogRead=function(e,t){$('article[data-blog-id="'+t.blog_id+'"]').addClass("read")},i.prototype.groupRead=function(e,t){var n=this.app.getModule("SidebarModel"),r=n.groups[t.group_id].blogs.read;for(var i in r){var s=r[i];$('article[data-blog-id="'+s.blog_id+'"]').addClass("read")}},i.prototype.emailPost=function(e){var t=$(e.currentTarget).closest(".post-container").find("article"),n=t.attr("data-post-id"),r=t.attr("data-blog-id"),i=t.attr("data-url"),s={post_id:n,blog_id:r,post_url:i,share_type:"email"};$(document).trigger("post:shared",s)},i.prototype.facebookPost=function(e){e.preventDefault()
;var t=$(e.currentTarget),n=t.closest(".post-container").find("article"),r=n.attr("data-post-id"),i=n.attr("data-blog-id"),s=n.attr("data-url"),o=t.attr("href"),u={post_id:r,blog_id:i,post_url:s,share_type:"facebook"};$(document).trigger("post:shared",u)
;var a=["https://www.facebook.com/sharer.php"];a.push("?app_id="+BLClientData.fb_app_id),a.push("&sdk=joey"),a.push("&u="+encodeURIComponent(o)),a.push("&display=popup"),this._generatePopup(a.join(""))},i.prototype.tweet=function(e){e.preventDefault()
;var t=$(e.currentTarget),n=t.closest(".post-container").find("article"),r=t.attr("href"),i=n.attr("data-post-id"),s=n.attr("data-blog-id"),o=n.attr("data-url"),u={post_id:i,blog_id:s,post_url:o,share_type:"twitter"};$(document).trigger("post:shared",u),this._generatePopup(r)},i.prototype._generatePopup=function(e){var t=550,n=300,r=screen.width/2-t/2,i=screen.height/2-n/2,s="height="+n+",width="+t+",left="+r+",top="+i;s+=",toolbar=0,location=0,menubar=0,scrollbars=0,status=0,resizable=no",window.open(e,"",s)},i.prototype.pin=function(e){e.preventDefault()
;var t=$(e.currentTarget),n=t.closest(".post-container").find("article"),r=t.attr("href"),i=t.attr("data-name"),s=t.attr("data-pic"),o=n.attr("data-post-id"),u=n.attr("data-blog-id"),a=n.attr("data-url"),f=["http://pinterest.com/pin/create/button?url="+r];i!==""&&i!==null&&f.push("&description="+i),s!==""&&s!==null&&f.push("&media="+s),f=f.join(""),window.open(f,"","height=320,width=665,toolbar=0,location=0,menubar=0,scrollbars=0,status=0")
;var l={post_id:o,blog_id:u,post_url:a,share_type:"pinterest"};$(document).trigger("post:shared",l)},i.prototype.showFollowBlogModal=function(e){$("#followBlogModal").remove()
;var t=this.app.render("partials/follow_blog_modal",{blog:e,baseUrl:BLClientData.base_url})
;$(t).appendTo("body"),$(document).trigger("modal:show","#followBlogModal")},i.prototype.tiledPostsLoading=function(e){var n=$('<li class="loader"></li>')
;$(".tiled-posts").prepend(n)
;var r=t(n,{top:100,left:0})},i.prototype.tiledPostsLoaded=function(e){function i(){r.wookmarkInstance&&r.wookmarkInstance.clear(),r=$(".post",n),r.wookmark({align:"left",autoResize:!0,container:$(".tiled-posts"),offset:25})}function s(){i(),n.find(".loader, .spinner").remove(),n.find(".post").addClass("loaded")}function o(){n.find(".post").addClass("loaded-img"),i(),$(document).trigger("tiled-posts:imagesLoaded")}var t=this,n=$(".tiled-posts"),r=$(".post",n)
;s(),n.imagesLoaded().always(function(e){o()})},i.prototype.savesScrollHandler=function(e){function h(e){return function(t){c.remove(),l.remove()
;var r=t["posts/saves"].list,i=t["posts/saves"].context;for(var s=0;s<r.length;s++)a=n.app.render("posts/curator_user",{user:r[s],context:i,current_user:{userid:BLClientData.user_id}}),e.append(a)
;e.attr("data-has-next",i.has_next),e.attr("data-next-page",i.next_page)}}var n=this,r=$(".curator-list"),i=parseInt(r.attr("data-next-page"),10)||1,s=parseInt(r.attr("data-has-next"),10),o=r.attr("data-post-id"),u=r.attr("data-blog-id"),a;
if(!s||!i)return;r.attr("data-has-next",0)
;var f=["","blog","post",u,o,"saves",i].join("/"),l=$('<li class="loader scroll"></li>')
;r.append(l)
;var c=t(l,{top:40,left:0})
;n.app.requeue.request(f,"serial",h(r),n.handleSavesScrollError(r))},i.prototype.handleSavesScrollError=function(e){return function(t,n,i){var s=new r(t.msg),o=$("<li />").appendTo(e)
;s.prepend(o),$(document).trigger("postSaves:loadError",s)}},i}),n("lib/blogs",[],function(){var e=function(e){this.app=e,this.requeue=this.app.requeue,$(document).on("click",".blog .follow",$.proxy(this.follow,this)),$(document).on("click",".blog .unfollow",$.proxy(this.unfollow,this)),$(document).on("click",".flag-list li",$.proxy(this.flag,this)),$(document).on("click",".confirm-flag",$.proxy(this.confirmFlag,this)),$(document).on("blog:showFollowBlogModal",$.proxy(this.showFollowBlogModal,this))
;
if(typeof BLFlags!="undefined"&&typeof BLBlog!="undefined"){var t=this.app.render("partials/flag_blog_popover",{blog_flags:BLFlags,blog:BLBlog})
;$(".blog-flags").replaceWith(t)}};return e.prototype.getName=function(){return"Blogs"},e.prototype.follow=function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).closest(".blog"),r=n.attr("data-blog-id"),i=n.attr("data-blog-name")
;
if(!BLClientData.user_id){this.showFollowBlogModal(e,{id:r,name:i}),e.stopPropagation()
;return}n.addClass("following")
;var s=this,o="/_/blog/follow/"+r;o=function(t){if($("body").data("page-type")){var n=$("body").data("page-type")
;n==="find_blogs"&&($(".find-blogs-container .recommended.selected").length>0?n="find_blogs_recs":n="find_blogs_categories"),t+="/"+n}return t}(o)
;var u=$.getJSON(o).success(function(){$(document).trigger("blog:followed",{blog_name:i,blog_id:r})}).fail(function(){n.removeClass("following")})
;e.stopPropagation()},e.prototype.unfollow=function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).closest(".blog"),r=n.attr("data-blog-id")
;n.removeClass("following")
;var i=this,s="/_/blog/unfollow/"+r,o=$.getJSON(s).fail(function(){n.addClass("following")})
;e.stopPropagation()},e.prototype.showFollowBlogModal=function(e,t){$("#followBlogModal").remove()
;var n=this.app.render("partials/follow_blog_modal",{blog:t,baseUrl:BLClientData.base_url})
;$(n).appendTo("body"),$(document).trigger("modal:show","#followBlogModal")},e.prototype.flag=function(e){e.preventDefault()
;var t=$(e.currentTarget),n={blog_id:t.attr("data-blog-id"),blog_name:t.attr("data-blog-name"),flag_id:t.attr("data-flag-id"),post_id:t.attr("data-post-id"),admin_hide:t.attr("data-admin-hide")};this.showFlagBlogModal(n),e.stopPropagation()},e.prototype.showFlagBlogModal=function(e){$("#flagBlogModal").remove(),$(".flag-popover").removeClass("po-open")
;var t=this.app.render("partials/flag_blog_modal",{flag:e,blog_flags:BLClientData.blog_flags})
;$(t).appendTo("body"),$(document).trigger("modal:show","#flagBlogModal")},e.prototype.confirmFlag=function(e){var t=$(e.currentTarget),n=$("#flagBlogModal"),r=t.attr("data-blog-id"),i=t.attr("data-flag-id"),s=t.attr("data-post-id"),o=t.attr("data-admin-hide")
;
if(i!=="5"){e.preventDefault(),t.addClass("disabled")
;var u;o?u="/_/post/hide/"+r+"/"+s:s?u="/_/post/flag/"+r+"/"+s+"/"+i:u="/_/blog/flag/"+r+"/"+i;var a=$.getJSON(u).done(function(){n.addClass("success"),setTimeout(function(){$(document).trigger("modal:hide")},1e3)}).fail(function(){n.addClass("fail"),t.removeClass("disabled")})}},e}),n("lib/users",[],function(){var e=function(e){this.app=e,$(document).on("click",".user .follow",$.proxy(this.follow,this)),$(document).on("click",".user .unfollow",$.proxy(this.unfollow,this))};return e.prototype.getName=function(){return"Users"},e.prototype.follow=function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).closest(".user"),r=n.attr("data-user-id"),i=n.attr("data-user-name"),s=n.attr("data-avatar"),o=n.attr("data-user-profile")
;
if(!BLClientData.user_id){this.showFollowUserModal({user_id:r,first_name:i}),e.stopPropagation()
;return}n.addClass("following")
;var u=this,a="/_/user/follow/"+r,f=$.getJSON(a).success(function(){$(document).trigger("user:followed",{user_name:i,avatar:s,profile:o})}).fail(function(){n.removeClass("following")})},e.prototype.unfollow=function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).closest(".user"),r=n.attr("data-user-id")
;n.removeClass("following")
;var i=this,s="/_/user/unfollow/"+r,o=$.getJSON(s).fail(function(){n.addClass("following")})},e.prototype.showFollowUserModal=function(e){$("#followUserModal").remove()
;var t=this.app.render("partials/follow_user_modal",{user:e,baseUrl:BLClientData.base_url})
;$(t).appendTo("body"),$(document).trigger("modal:show","#followUserModal")},e}),n("lib/toolbar",["lib/spin"],function(e){var t=function(e){this.app=e,this.toolbar=$(".feed-toolbar"),$(document).ready($.proxy(this._init,this)),this.threshold=10,$(document).on("feed:contextChanged",$.proxy(this.updateToolbar,this)),$(document).on("blog:groupChanged",$.proxy(this.updateGroup,this)),$(document).on("blog:newGroup",$.proxy(this.updateGroupList,this)),$(document).on("blog:newGroup",$.proxy(this.changeGroup,this)),$(document).on("post:allRead",$.proxy(this.disableMarkRead,this)),$(document).on("post:unread",$.proxy(this.enableMarkRead,this)),$(document).on("confirm:markRead",$.proxy(this.markRead,this)),$(".feed-toolbar").on("click",".read",$.proxy(this.triggerMarkRead,this)),$(".feed-toolbar").on("click","form",$.proxy(this.preventHide,this)),$(".feed-toolbar").on("click",'a[data-trigger="change-group"]',$.proxy(this.changeGroup,this)),$(document).on("click",'a[data-trigger="toolbar-dropdown"]',$.proxy(this.toggle,this)),$(document).on("click touchend","html",$.proxy(this.hideAll,this)),$(document).on("touchend",'a[data-trigger="toolbar-dropdown"]',$.proxy(this.preventHide,this)),$(document).on("click","a.big",$.proxy(this.bigImages,this)),$(document).on("click","a.small",$.proxy(this.smallImages,this)),$(document).on("click",".feed-toolbar .unfollow-blog",$.proxy(this.unfollow,this)),$(document).on("click",".undo-unfollow",$.proxy(this.follow,this)),$(document).on("submit",".create-group",$.proxy(this.createGroup,this)),$(document).on("click",".by-date-newest",$.proxy(this.sortByDateNewest,this)),$(document).on("click",".by-date-oldest",$.proxy(this.sortByDateOldest,this)),$(document).on("click",".newest",$.proxy(this.sortByNewest,this)),$(document).on("click",".oldest",$.proxy(this.sortByOldest,this)),$(document).on("click",".by-blog",$.proxy(this.sortByBlog,this)),$(document).on("breakpoint:medium",$.proxy(this.resizeMedium,this)),$(document).on("breakpoint:small",$.proxy(this.resizeSmall,this)),this.toolbar_template="feed/toolbar"};return t.prototype.getName=function(){return"Toolbar"},t.prototype._init=function(){var e=this.app.getModule("SidebarModel"),t=this.app.getModule("Feed").currentContext(),n=0;switch(t.type){case"all":n=e.num_unread;break;case"blog":n=e.blogs[t.id].num_unread,e.blogs[t.id].group_id||this.updateGroup()
;break;case"group":n=e.groups[t.id].num_unread}n===0?this.disableMarkRead():this.enableMarkRead()},t.prototype.triggerMarkRead=function(e){e.preventDefault()
;var t=this.app.getModule("SidebarModel"),n=this.app.getModule("Feed").currentContext(),r=0,i=!1;switch(n.type){case"all":r=t.num_unread;break;case"blog":r=t.blogs[n.id].num_unread;break;case"group":r=t.groups[n.id].num_unread}r>=this.threshold?$(document).trigger("toolbar:triggerMarkRead",[n,r]):$(document).trigger("confirm:markRead")},t.prototype.markRead=function(e){var t=this.app.getModule("Feed"),n=t.currentContext()
;switch(n.type){case"all":t.markAllAsRead(function(e,t){})
;break;case"blog":t.markBlogAsRead(n.id,function(e,t){})
;break;case"group":t.markGroupAsRead(n.id,function(e,t){})}this.disableMarkRead()},t.prototype.updateToolbar=function(e,t){var n=t.groups||!1,r=this.app.render(this.toolbar_template,{feed:{context:t},groups:n})
;$(".feed-toolbar").replaceWith(r),$(".feed-toolbar").on("click",".read",$.proxy(this.triggerMarkRead,this)),$(".feed-toolbar").on("click","form",$.proxy(this.preventHide,this)),$(".feed-toolbar").on("click",'a[data-trigger="change-group"]',$.proxy(this.changeGroup,this)),$("input, textarea").placeholder(),this._init(),this.updateSidebarButton()},t.prototype.toggle=function(e){var t=e.currentTarget;$(t).hasClass("clicked")?$(t).removeClass("clicked"):($(".clicked").removeClass("clicked"),$(t).addClass("clicked")),e.preventDefault(),e.stopPropagation()
;var n=$(t).attr("href")
;$(n).hasClass("dd-open")?$(n).removeClass("dd-open"):($(".feed-toolbar .dropdown-menu").removeClass("dd-open"),$(n).addClass("dd-open"))},t.prototype.hideAll=function(e){$(".clicked").removeClass("clicked"),$(".feed-toolbar .dropdown-menu.dd-open").removeClass("dd-open")},t.prototype.preventHide=function(e){e.stopPropagation()},t.prototype.disableMarkRead=function(e){$(".feed-toolbar .read").addClass("disabled")},t.prototype.enableMarkRead=function(e){$(".feed-toolbar .read.disabled").removeClass("disabled")},t.prototype.bigImages=function(e){e.preventDefault()
;var t=this,n="/feed/setsize/big",r=$.getJSON(n,function(){$(".posts").attr("data-img-size","big"),t._changeFeed()})},t.prototype.smallImages=function(e){e.preventDefault()
;var t=this,n="/feed/setsize/small",r=$.getJSON(n,function(){$(".posts").attr("data-img-size","small"),t._changeFeed()})},t.prototype._changeFeed=function(e,t){var n=e||window.location.pathname;$(document).trigger("toolbar:newFeed",[n])},t.prototype._showSpinner=function(t){var n=t||$(".feed-toolbar").find(".settings")
;n.find(".icon").addClass("hidden")
;var r=e(n,{left:-9,top:0})
;$(document).one("feed:contextChanged",function(){r.remove(),n.find(".icon").removeClass("hidden")})},t.prototype.unfollow=function(e){e.preventDefault()
;var t=$(".feed-toolbar").find(".unfollow-blog"),n=this.app.getModule("SidebarModel"),r=$(".posts").attr("data-context-id"),i=n.blogs[r].blog_name,s="/_/blog/unfollow/"+r;t.addClass("disabled")
;var o=$.getJSON(s).done(function(e){return function(){e._changeFeed("/feed",t),$(document).trigger("blog:unfollow",[{blog_id:r,blog_name:i}])}}(this))},t.prototype.follow=function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).attr("data-blog-id"),r=$(t).attr("data-blog-name"),i="/_/blog/follow/"+n,s=$.getJSON(i,function(e){$(document).trigger("blog:follow",[{blog_id:n,blog_name:r,num_unread:e.num_new_posts}])})},t.prototype.changeGroup=function(e,t){e.preventDefault()
;var n=e.currentTarget,r=$(".posts").attr("data-context-id"),i=t?t.group_id:$(n).attr("data-group-id"),s=t?t.group_name:$(n).html(),o={blog_id:r,group_id:i==1?null:i,group_name:s};path="/_/blog/changegroup/"+r+"/"+i;var u=$.getJSON(path,function(){$(document).trigger("blog:groupChanged",[o])})},t.prototype.updateGroup=function(e,t){if(t){var n=t.group_name;$(".feed-toolbar .blog-group").removeClass("no-group"),$(".feed-toolbar").find(".change-group").text(n)}else $(".feed-toolbar .blog-group").addClass("no-group")
;this.hideAll()},t.prototype.createGroup=function(e){e.preventDefault(),this.hideAll()
;var t=$(".posts").attr("data-context-id"),n=$("#new-group").val()
;path="/_/blog/newgroup/"+t+"/"+n;var r=$.getJSON(path,function(e){$(document).trigger("blog:newGroup",[{group_id:e.group_id,group_name:n}])})},t.prototype.updateGroupList=function(e,t){$("#new-group").val("")
;var n=this.app.render("feed/toolbar_group",{group:t})
;$(".feed-toolbar").find(".groups").prepend(n)},t.prototype.sortByDateNewest=function(e){e.preventDefault()
;var t=this;
if($(".posts").attr("data-format")!=="list"){$(".posts").attr("data-format","list")
;var n="/feed/sortby/date",r=$.getJSON(n,function(){t.sortByNewest(e)})}else t.sortByNewest(e)},t.prototype.sortByDateOldest=function(e){e.preventDefault()
;var t=this;
if($(".posts").attr("data-format")!=="list"){$(".posts").attr({"data-format":"list","data-sort-order":"oldest"})
;var n="/feed/sortby/date",r=$.getJSON(n,function(){t.sortByOldest(e)})}else t.sortByOldest(e)},t.prototype.sortByNewest=function(e){e.preventDefault()
;var t=this;$(".posts").attr("data-sort-order","newest")
;var n="/feed/setsortorder/newest",r=$.getJSON(n,function(){t._changeFeed()})},t.prototype.sortByOldest=function(e){e.preventDefault()
;var t=this;$(".posts").attr("data-sort-order","oldest")
;var n="/feed/setsortorder/oldest",r=$.getJSON(n,function(){t._changeFeed()})},t.prototype.sortByBlog=function(e){e.preventDefault()
;var t=this;$(".posts").attr("data-format","cluster")
;var n="/feed/sortby/blog",r=$.getJSON(n,function(){t._changeFeed()})},t.prototype.resizeMedium=function(e){$(".feed-toolbar").removeClass("s-show")},t.prototype.resizeSmall=function(e){this.updateSidebarButton()},t.prototype.updateSidebarButton=function(e){var t=this.app.getModule("SidebarModel"),n=$(".feed ol").attr("data-context"),r=$(".feed ol").attr("data-context-id"),i,s=this.app.render("feed/toolbar_context",{sidebar:t,context:n,context_id:r})
;$(".feed-toolbar").find(".sidebar-context").replaceWith(s)},t}),n("lib/to_top",[],function(){var e=function(){$(document).on("didScroll",$.proxy(this.toggleShow,this)),$(document).on("click","#toTop",$.proxy(this.animateScroll,this))};return e.prototype.getName=function(){return"ToTop"},e.prototype.animateScroll=function(e){return e.preventDefault(),$("body,html").animate({scrollTop:0},500),!1},e.prototype.toggleShow=function(e){var t=$(".to-top")
;$("html").scrollTop()<50&&$("body").scrollTop()<50?t.addClass("hidden"):t.hasClass("hidden")&&t.removeClass("hidden")},e}),n("lib/main_nav",[],function(){var e=function(e){this.app=e,this.isMobileSafari=!!(navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/Safari/)&&navigator.vendor.match(/Apple Computer/)),$(document).on("breakpoint:small",$.proxy(this.resizeSmall,this)),$(document).on("breakpoint:medium breakpoint:large",$.proxy(this.resizeMedium,this)),$(document).on("click",".search-icon-mobile",$.proxy(this.showSearch,this)),$(document).on("click",'a[data-trigger="cancel-search"]',$.proxy(this.hideSearch,this)),$(document).on("mouseenter",".drop-down.hoverable",$.proxy(this.hoverShow,this)),$(document).on("mouseleave",".drop-down.hoverable",$.proxy(this.hoverHide,this)),$(document).on("click touchend",'a[data-trigger="dropdown"].clickable',$.proxy(this.clickShow,this)),$(document).on("click touchend","html",$.proxy(this.hideAll,this)),$(document).on("touchend",".dropdown-menu",$.proxy(this.preventHide,this)),$(document).on("click",'a[data-trigger="modal"]',$.proxy(this.showModal,this)),$(document).on("click",".country-modal .country",$.proxy(this.changeCountry,this)),$(document).on("click",".dropdown-menu [data-subgroup]",$.proxy(this.dropdownOptionClicked,this)),$("body").hasClass("onboarding")||$(document).on("didScroll",$.proxy(this.scrollHandler,this)),this.isMobileSafari&&($(document).on("focus","#query, #search",$.proxy(this.MSfocusHandler,this)),$(document).on("blur","#query, #search",$.proxy(this.MSblurHandler,this)),$(document).on("touchmove",$.proxy(this.touchmoveHandler,this))),$("body").hasClass("feedPage")&&this.app.hasHistory&&$(document).on("click",".header .home",$.proxy(this.loadFeed,this))};return e.prototype.resizeSmall=function(e){$(".drop-down").removeClass("hoverable"),$('a[data-trigger="dropdown"]').not(".unclickable").addClass("clickable"),$("#main-nav").addClass("dropdown-menu")},e.prototype.resizeMedium=function(e){$('a[data-trigger="dropdown"]').removeClass("clickable"),$(".drop-down").addClass("hoverable"),$("#main-nav").removeClass("dropdown-menu")},e.prototype.getName=function(){return"MainNav"},e.prototype.showSearch=function(e){e.preventDefault(),$(".search").addClass("search-show"),$("#query")[0].focus()},e.prototype.hideSearch=function(e){e.preventDefault(),$(".search").removeClass("search-show")},e.prototype.hoverShow=function(e){var t=e.currentTarget;$(t).data("dd-timeout")&&clearTimeout($(t).data("dd-timeout")),$("nav .dropdown-menu.dd-open").removeClass("dd-open"),$(t).find(".dropdown-menu").addClass("dd-open"),$(document).trigger("mainNav:opened")},e.prototype.hoverHide=function(e){var t=e.currentTarget;$(t).data("dd-timeout",setTimeout(function(e){return function(){$(e).find(".dropdown-menu").removeClass("dd-open")}}(t),500))},e.prototype.clickShow=function(e){e.preventDefault(),e.stopPropagation()
;var t=e.currentTarget,n=$(t).attr("href")
;$(n).hasClass("dd-open")?($(n).removeClass("dd-open"),$(t).removeClass("active")):($(document).trigger("mainNav:opened"),$("nav .dropdown-menu").removeClass("dd-open"),$(n).addClass("dd-open"),$('a[data-trigger="dropdown"].clickable').removeClass("active"),$(t).addClass("active"))},e.prototype.hideAll=function(e){$("nav .dropdown-menu.dd-open").removeClass("dd-open"),$('a[data-trigger="dropdown"].clickable').removeClass("active")},e.prototype.preventHide=function(e){e.stopPropagation()},e.prototype.scrollHandler=function(e){var t=$(".header")
;
if(t.length>0){var n=$('[data-placement="panorama"]'),r=n.outerHeight(),i=window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body).scrollTop,s="header-detached";i>=r?$("body").addClass(s):$("body").removeClass(s)}},e.prototype.loadFeed=function(e){e.preventDefault(),$(document).trigger("nav:loadFeed",["/feed"])},e.prototype.showModal=function(e){e.stopPropagation(),e.preventDefault(),this.hideAll()},e.prototype.MSfocusHandler=function(e){$(window).scrollTop(0),$("body").addClass("fixfixed")},e.prototype.MSblurHandler=function(e){$("body").removeClass("fixfixed")},e.prototype.MSTouchmoveHandler=function(e){$(".search").hasClass("search-show")&&($("#query")[0].blur(),$(".search").removeClass("search-show"))},e.prototype.changeCountry=function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).attr("data-country-code"),r="/_/country/"+n,i=$.getJSON(r,function(){window.location.reload(!0)})},e.prototype.dropdownOptionClicked=function(e){e.preventDefault()
;var t=$(e.currentTarget),n=t.attr("href"),r={subgroup:t.data("subgroup")};$(document).trigger("mainNav:optionClicked",[r,function(){window.location=n}])},e}),n("lib/popover",[],function(){var e=function(){$(document).on("click touchend",'[data-trigger="popover"]',$.proxy(this.toggle,this)),$(document).on("click",".popover a, .popover li",$.proxy(this.hideAll,this)),$(document).on("click touchend","html, body",$.proxy(this.hideAll,this)),$(document).on("touchend",".popover",$.proxy(this.preventClose,this)),$(document).on("click touchend",".popover-backdrop",$.proxy(this.preventClose,this)),$(document).on("click touchend",".onboarding-popover",$.proxy(this.preventClose,this)),$(document).on("popover:show",$.proxy(this.show,this)),$(document).on("popover:hide",$.proxy(this.hide,this))};return e.prototype.getName=function(){return"Popover"},e.prototype.toggle=function(e){e.preventDefault(),e.stopPropagation()
;var t=e.currentTarget,n=$(t).siblings(".popover"),r=$(t).attr("data-po-position"),i=$(n).height()+45,s=$(t).offset().top-$(window).scrollTop()<i?"bottom":"top",o=r?r:s;$(n).hasClass("po-open")?$(n).removeClass("po-open top bottom"):(this.hideAll(),$(n).addClass("po-open "+o))},e.prototype.show=function(e,t){$(t).addClass("po-open")},e.prototype.hide=function(e,t){$(t).removeClass("po-open")},e.prototype.hideAll=function(e){$(".popover.po-open").not(".onboarding-popover").removeClass("po-open top bottom")},e.prototype.preventClose=function(e){e.stopPropagation()},e}),n("lib/facebook",[],function(){var e=function(e){this.app=e,this.connected=!1,this.uid=null,this.accessToken=null,window.fbAsyncInit=function(){FB.init({appId:BLClientData.fb_app_id,status:!0,xfbml:!0}),BLClientData.fetch_token&&FB.getLoginStatus(function(e){if(e.authResponse&&e.authResponse.accessToken){var t=e.authResponse.accessToken;$.getJSON("/_/facebook/newLongToken/"+t)}})},function(e,t,n){var r,i=e.getElementsByTagName(t)[0];
if(e.getElementById(n))return;r=e.createElement(t),r.id=n,r.src="//connect.facebook.net/en_US/all.js",i.parentNode.insertBefore(r,i)}(document,"script","facebook-jssdk"),$(document).on("click",".fb-sign-up",$.proxy(this.signup,this))};return e.prototype.getName=function(){return"Facebook"},e.prototype.signup=function(e){e.preventDefault()
;var t=this,n=e.currentTarget,r=$(n)
;r.addClass("disabled"),r.children("span").text(BLLang.connecting)
;var i={source:$("body").data("page-type"),modal:$(n).closest(".modal").length>0,method:"facebook"};$(document).trigger("click:signup_button",[i,function(){t.connect(function(e){t.finishLogin()})}])},e.prototype.connect=function(e){if(this.connected){this.checkLogin(e)
;return}this.login(e)},e.prototype.login=function(e){var t=this;FB.getLoginStatus(function(n){n.status==="connected"?(t.uid=n.authResponse.userID,t.accessToken=n.authResponse.accessToken,t.checkLogin(e)):t.webLogin(e)})},e.prototype.webLogin=function(e){var t=this;FB.login(function(n){if(n.authResponse)t.checkLogin(e)
;else{var r=$(".fb-sign-up.disabled")
;r.removeClass("disabled"),$(r).children("span").text(BLLang.follow_blog_modal_sign_up_with_facebook),alert("You canceled your connection to Facebook! Try again or use your email instead.")}},{scope:"email, publish_stream"})},e.prototype.checkLogin=function(e){var t=this;FB.getLoginStatus(function(n){if(n.status==="connected"){var r=n.authResponse.userID,i=n.authResponse.accessToken;t.pushLogin(r,i),e()}})},e.prototype.pushLogin=function(e,t){this.uid=e,this.accessToken=t,this.connected=!0;var n="/_/login/fbconnect/"+t,r=$.getJSON(n)},e.prototype.finishLogin=function(){var e=$(".fb-sign-up.disabled"),t=e.attr("data-blog-id"),n="/_/login/fblogin/"+this.accessToken+(t?"/"+t:""),r=$.getJSON(n,function(e){e.url?window.location=e.url:window.location="/signup"}).fail(function(){e.removeClass("disabled"),$(e).children("span").text(BLLang.follow_blog_modal_sign_up_with_facebook),alert("Sorry, we couldn't connect to facebook right now. Please try again later")})},e}),n("lib/modal",[],function(){var e=function(e){this.app=e,$(document).on("click",'a[data-trigger="modal"]',$.proxy(this.show,this)),$(document).on("click","html",$.proxy(this.hide,this)),$(document).on("click",".modal .close",$.proxy(this.close,this)),$(document).on("click touchend",".modal",$.proxy(this.preventHide,this)),$(document).on("click",'.modal [data-trigger="hide"]',$.proxy(this.hide,this)),$(document).on("click",'.modal [data-trigger="confirm"]',$.proxy(this.confirm,this)),$(document).on("toolbar:triggerMarkRead",$.proxy(this.loadMarkReadModal,this)),$(document).on("click",'a[data-trigger="like-modal"]',$.proxy(this.showLikeModal,this)),$(document).on("modal:didScrollToBottom:likeModal",$.proxy(this.loadMoreLikeModal,this)),$(document).on("click",".feed-toolbar .read",$.proxy(this.preventHide,this)),$(document).on("notifications:recentFollowers",$.proxy(this.showRecentFollowers,this)),$(document).on("modal:loaded",$.proxy(this.overrideScroll,this)),$(document).on("modal:show",$.proxy(this.show,this)),$(document).on("modal:hide",$.proxy(this.hide,this)),$(document).on("modal:showContentWarningModal",$.proxy(this.showContentWarningModal,this)),$(document).on("submit","#getApp",$.proxy(this.getAppSendText,this)),$(document).on("click",".get-app-modal .dismiss",$.proxy(this.getAppDismiss,this))};return e.prototype.getName=function(){return"Modal"},e.prototype.show=function(e,t){e.preventDefault()
;var n=t||$(e.currentTarget).attr("href")
;$(n).addClass("m-show"),$(".modal-backdrop").addClass("mb-show"),$(n).find(".modal-body").on("scroll",$.proxy(this.scroll,this)),$(document).trigger("modal:loaded")},e.prototype.hide=function(e){$(".follower-modal").remove(),$(".modal").removeClass("m-show"),$(".modal-backdrop").removeClass("mb-show")},e.prototype.close=function(e){e.preventDefault(),$(".modal").removeClass("m-show"),$(".modal-backdrop").removeClass("mb-show")},e.prototype.preventHide=function(e){e.stopPropagation()},e.prototype.scroll=function(e){var t=e.currentTarget,n=$(t).parent().attr("id"),r=$(t).get(0).scrollHeight,i=$(t).scrollTop()+$(t).height()
;i>=r-300&&$(document).trigger("modal:didScrollToBottom:"+n)},e.prototype.loadMarkReadModal=function(e,t,n){e.preventDefault()
;var r=this.app.getModule("SidebarModel"),i=$("#markAllReadModal")
;switch(t.type){case"all":t="All";break;case"blog":t=r.blogs[t.id].blog_name;break;case"group":t=r.groups[t.id].group_name}i.find(".modal-body .context").text(t),i.find(".modal-body .num-unread").text(n),this.show(e,"#markAllReadModal")},e.prototype.confirm=function(e){var t=$(e.currentTarget).attr("data-confirm")
;$(document).trigger("confirm:"+t),this.hide()},e.prototype.showLikeModal=function(e){e.preventDefault(),e.stopPropagation()
;var t=e.currentTarget,n=$(t).attr("data-post-id"),r=$(t).attr("data-blog-id"),i={post_id:n,blog_id:r},s=this;this._loadLikeModal(i,function(t){var n=$("#likeModal")
;$(n).attr("data-next-page",t),s.show(e,n)})},e.prototype._loadLikeModal=function(e,t){$("#likeModal").remove()
;var n=this,r=e.post_id,i=e.blog_id,s="/_/likes/post/"+i+"/"+r;$.getJSON(s,function(e){var s=n.app.render("posts/like_modal",{post:{post_id:r,blog_id:i},users:e.users,anon_likes:e.anon_likes,baseUrl:BLClientData.base_url,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar})
;$(s).appendTo("body"),t(e.next_url)})},e.prototype.loadMoreLikeModal=function(e){var t=this,n=$("#likeModal"),r=$(n).attr("data-next-page")
;$(n).attr("data-next-page",!1)
;
if(r==="false")return;var i="/_"+r;$.getJSON(i,function(e){if(e.users.length>0){var r=t.app.render("posts/like_modal_users",{users:e.users,baseUrl:BLClientData.base_url,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar})
;$(r).appendTo("#likeModal .users"),$(n).attr("data-next-page",e.next_url)}})},e.prototype.showRecentFollowers=function(e,t){$(".follower-modal").remove()
;var n=t.events,r=t.type,i="";r==="follow:yourblog"&&(i=t.item.name)
;var s=this.app.render("partials/follower_modal",{followBlog:i,baseUrl:BLClientData.base_url,users:n,avatar:BLClientData.avatar,default_avatar:BLClientData.default_avatar})
;$(s).addClass("m-show").appendTo("body"),$(".modal-backdrop").addClass("mb-show"),$(document).trigger("modal:loaded")},e.prototype.overrideScroll=function(e){$(".modal-body").bind("mousewheel DOMMouseScroll",function(e){var t=null;e.type=="mousewheel"?t=e.originalEvent.wheelDelta*-1:e.type=="DOMMouseScroll"&&(t=e.originalEvent.detail*4),t&&(e.preventDefault(),$(this).scrollTop(t+$(this).scrollTop()))})},e.prototype.showContentWarningModal=function(e){var t=this.app.render("partials/content_warning_modal",{})
;$(t).appendTo("body"),this.show(e,"#contentWarningModal")},e.prototype.getAppSendText=function(e){e.preventDefault()
;var t=$(".phone-number").val()
;
if(!t)return;$(".send-text").attr("disabled",!0)
;var n=this,r="/onboarding/sendtext/"+t;$.getJSON(r).then(function(e){$(".get-app-modal").addClass("text-sent"),setTimeout(function(){n.hide()},1e3),$(document).trigger("getApp:textSent"),$(document).trigger("onboarding:seen","getapp")},function(e){$(".get-app-modal").addClass("failed"),$(".send-text").removeAttr("disabled")})},e.prototype.getAppDismiss=function(e){e.preventDefault(),$(document).trigger("getApp:dismissed"),$(document).trigger("onboarding:seen","getapp")},e}),function(e){typeof n=="function"?n("lib/ads",e):typeof module=="object"?module.exports=e():window.Ads=e()}(function(){var e=function(){if(!BLAdTags)return;this.selector=".ad-placement",this.tags=BLAdTags.tags,this.network=BLAdTags.network,this.property=BLAdTags.property,this.delegate=!1,this.counter=0,this.slots={},this.ids=[],this.notDisplayed=[],this.toRefresh=[],this.elements={},this.unusedSlots={},this.mobile=$(window).width()<615,this.maxHeight=450,this.loadGoogleCode(),this.init()};return e.prototype.getName=function(){return"Ads"},e.prototype.callDelegate=function(){if(!this.delegate)return;var t=Array.prototype.slice.call(arguments),n=t.shift()
;
if(typeof this.delegate[n]=="function")return this.delegate[n].apply(this.delegate,t)},e.prototype.loadGoogleCode=function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];var t=document.createElement("script")
;t.async=!0,t.type="text/javascript";var n="https:"==document.location.protocol;t.src=(n?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)},e.prototype.init=function(){this.findSlots(),googletag.cmd.push(function(){googletag.enableServices()}),this.displaySlots()},e.prototype.findSlots=function(t,n){this.garbageCollect()
;var r=$(this.selector)
;t&&(r=r.filter(t)),r=r.filter(":empty")
;var i=this;r.each(function(e,t){i.defineSlot($(t))}),n&&this.displaySlots()},e.prototype.defineSlot=function(t){var n=this,r=t.attr("data-placement"),i=this.tags[r];
if(!i)return t.attr("data-ad-err","Invalid placement"),!1;var s=i.tag_name;
if(this.mobile){var o=i.mobile_tag_name;
if(!o)return;typeof o=="string"&&(s=o)}if(!s)return;var u=null,a="",f=!1;
if(this.unusedSlots[s]&&this.unusedSlots[s].length)u=this.unusedSlots[s].pop(),a=u.attr("id"),f=!0,this.toRefresh.push(a),this.ids.push(a)
;else{u=$("<div />"),a=["ad",s,this.counter++].join("_"),u.attr({id:a,"data-tagname":s})
;var l="/"+[n.network,s].join("/"),c=i.sizes||[0,0];googletag.cmd.push(function(){var e=googletag.defineSlot(l,c,a)
;e.addService(googletag.pubads()),e.setCollapseEmptyDiv(!0,!0),n.notDisplayed.push(a),n.slots[a]=e,n.ids.push(a),e.oldRenderEnded=e.oldRenderEnded||e.renderEnded,e.renderEnded=function(t){$(document).trigger("adRendered",[u,t]),u.css("display",t.isEmpty?"none":"block")
;
if(!t.isEmpty){var r=$(u).find("iframe").not("[id*=hidden]"),i=$(u)
;i.add(r),n.isAutosized(r)?(u.parent(".ad-placement").css("display","block"),i.css({width:"auto",height:"auto",margin:"auto"})):(i.css({display:"block",width:0,height:0,margin:"0 auto"}),n.detectSize(u,e,40,function(e){u.parent(".ad-placement").css("display","block"),i.css({width:e[0],height:Math.min(e[1],n.maxHeight)})}))}e.oldRenderEnded.apply(e,arguments)}}),this.elements[a]=u}t.append(u)},e.prototype.displaySlots=function(){var t=this;googletag.cmd.push(function(){var e=t.notDisplayed.splice(0),n=t.toRefresh.splice(0)
;t.toRefresh=[],t.notDisplayed=[],e=e.concat(n)
;for(var r=0;r<e.length;r++)googletag.display(e[r])
;n.length&&googletag.pubads().refresh()})},e.prototype.garbageCollect=function(){for(var t=this.ids.length-1;t>=0;t--){var n=this.ids[t];
if($("html").find("#"+n)[0]===undefined){var r=this.elements[n];this.slots[n].clearTargeting(),this.ids.splice(t,1)
;var i=r.attr("data-tagname")
;this.unusedSlots[i]||(this.unusedSlots[i]=[]),this.unusedSlots[i].push(r)}}},e.prototype.detectSize=function(t,n,r,i){function s(e,t){t=t||[];var n=$(e).find("iframe")
;return n.length?n.each(function(e,n){s(n,t)}):e.tagName==="IFRAME"&&t.push(e),t}function o(e){return $(e).contents().find("*").toArray()}function u(e,t){return e.concat(t)}function a(e){var t=$(e).innerWidth(),n=$(e).innerHeight()
;return[t,n]}function f(e,t){var n=t[0]>=e[0]&&t[1]>=e[1];return n?t:e}function p(){var e=s(t).map(o).reduce(u,[]).map(a).reduce(f,[0,0])
;e[0]>=r&&e[1]>=r&&i(e),e[0]&&e[1]&&c[0]===e[0]&&c[1]===e[1]?(h++,h>2&&clearInterval(l)):h=0,c=e}var l,c=[],h=0;l=setInterval(p,500),setTimeout(function(){clearInterval(l)},10001)},e.prototype.isAutosized=function(e){var t=$(e).contents().find("body"),n=t.find(".autosized")
;return n.length>0},e})
;var r=function(e){var t={addEvent:function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event,r)},e.attachEvent("on"+t,e[t+n]))},input:"",pattern:"38384040373937396665",load:function(e){this.addEvent(document,"keydown",function(n,r){r&&(t=r),t.input+=n?n.keyCode:event.keyCode,t.input.length>t.pattern.length&&(t.input=t.input.substr(t.input.length-t.pattern.length))
;
if(t.input==t.pattern){t.code(e),t.input="";return}},this)},code:function(e){window.location=e}};return typeof e=="string"&&t.load(e),typeof e=="function"&&(t.code=e,t.load()),t};n("vendor/konami",function(){}),n("lib/konami",["vendor/konami"],function(){var e=function(){new r(this.catscatscats)};return e.prototype.getName=function(){return"konami"},e.prototype.catscatscats=function(){var e=$.getJSON("http://api.giphy.com/v1/gifs/recent?api_key=Fo19wONkXCINO&tag=cat&limit=6")
;e.done(function(e){var t=[];$(e.data).each(function(e,n){typeof n=="object"&&t.push(n.images.original.url)}),t.length>0&&$(".media-container img").each(function(e,n){n.src=t[e%t.length]})})},e}),n("lib/tooltip",[],function(){var e=function(){$(document).on("mouseenter",'a[data-tooltip="tooltip"]',$.proxy(this.show,this)),$(document).on("mouseleave",'a[data-tooltip="tooltip"]',$.proxy(this.hide,this)),$(document).on("breakpoint:medium",$.proxy(this.resizeMedium,this)),$(document).on("breakpoint:large",$.proxy(this.resizeLarge,this))};return e.prototype.getName=function(){return"Tooltip"},e.prototype.show=function(e){$(".tooltip").remove()
;var t=e.currentTarget,n=$(t).attr("data-title"),r=BLViews["partials/tooltip"]({body:n})
;$(r).insertAfter(t)
;var i=$(t).siblings(".tooltip"),s=$(i).outerWidth(),o=$(t).position().left+$(t).outerWidth()/2-s/2;$(i).css("left",""+o+"px"),$(i).addClass("tt-show")},e.prototype.hide=function(e){var t=$(e.currentTarget).siblings(".tooltip")
;setTimeout(function(){$(t).removeClass("tt-show"),$(t).remove()},500)},e.prototype.resizeMedium=function(e){$('a[data-tooltip="tooltip"]').attr("data-tooltip","none")},e.prototype.resizeLarge=function(e){$('a[data-tooltip="none"]').attr("data-tooltip","tooltip")},e}),n("lib/notifications",["lib/spin"],function(e){var t=function(e){this.app=e,this.notifications=null,$(document).ready($.proxy(this._init,this)),$(document).on("click touchend",".bell-icon-container",$.proxy(this.triggerLoadNew,this)),$(document).on("click",'[data-trigger="follower-modal"]',$.proxy(this.followModal,this)),$("#notification-list").bind("mousewheel DOMMouseScroll",function(e){var t=null;e.type=="mousewheel"?t=e.originalEvent.wheelDelta*-1:e.type=="DOMMouseScroll"&&(t=e.originalEvent.detail*4),t&&(e.preventDefault(),$(this).scrollTop(t+$(this).scrollTop()))})};return t.prototype.getName=function(){return"Notifications"},t.prototype._init=function(){if(BLClientData.user_id)var e="/_/notification/fetchcount",t=$.getJSON(e,function(e){var t=e.unread_count;t>0&&$(".notifications .notification-count").text(t).addClass("has-new")})},t.prototype.triggerLoadNew=function(e){e.preventDefault()
;var t=$(".notifications").find(".popover")
;$(t).hasClass("po-open")||this.loadNew()},t.prototype.loadNew=function(t){var n=this,r=$("#notification-list")
;r.empty()
;var i=e(r,{left:"auto",top:"auto"}),s="/_/notification/loadnew";$.getJSON(s,function(e){i.remove(),r.empty()
;var t=["like:yourpost","follow:you","follow:yourblog","friend_join:fb","intro:welcome","intro:instructions","milestone:blog_followers"];for(var s in e.clusters){var o=e.clusters[s].type;t.indexOf(o)<0&&e.clusters.splice(s,1)}if(e.clusters.length===0)$("#no-notifications").show(),r.hide()
;else{r.show(),$("#no-notifications").hide()
;for(var s in e.clusters){var u=n.app.render("partials/notification",{cluster:e.clusters[s],base_url:BLClientData.base_url,order:s,default_avatar:BLClientData.default_avatar,avatar:BLClientData.avatar})
;r.append(u)}n.notifications=e.clusters}$(".notifications .notification-count").removeClass("has-new")})},t.prototype.followModal=function(e){e.preventDefault(),e.stopPropagation()
;var t=$(e.target).closest(".notification").data("order")
;$(document).trigger("notifications:recentFollowers",this.notifications[t])},t}),n("lib/alert",[],function(){var e=function(){$(document).ready($.proxy(this.showNews,this)),$(document).on("click",".alert .close",$.proxy(this.hideNews,this)),$(document).on("blog:unfollow",$.proxy(this.showUnfollow,this)),$(document).on("click",".undo-unfollow",$.proxy(this.hideUnfollow,this))};return e.prototype.getName=function(){return"Alert"},e.prototype.showNews=function(e){$(".news").addClass("a-show")},e.prototype.hideNews=function(e){e.preventDefault()
;var t=this,n="/_/news/seen",r=$.getJSON(n,function(){t._slideUp()})},e.prototype._slideUp=function(){$(".news").removeClass("a-show"),setTimeout(function(){$(".news").addClass("a-hide")},500)},e.prototype.showUnfollow=function(e,t){$(document).one("feed:contextChanged",function(){var e=$(".unfollow-alert")
;e.find(".unfollow-blog-name").text(t.blog_name),e.find(".undo-unfollow").attr({"data-blog-id":t.blog_id,"data-blog-name":t.blog_name}),e.removeClass("a-hide").addClass("a-show")})},e.prototype.hideUnfollow=function(e){$(".unfollow-alert").addClass("a-hide").removeClass("a-show")},e}),n("lib/onboarding",["lib/spin"],function(e){var t=function(){this.size="small",this.offsetTop={small:300,medium:139,large:139},$(document).on("click touchend",".onboarding",$.proxy(this.preventClose,this)),$(document).on("click touchend",".onboarding .popover",$.proxy(this.closePopover,this)),$(document).on("breakpoint:small breakpoint:medium breakpoint:large",$.proxy(this.resize,this)),$(document).on("onboarding:loading",$.proxy(this.showSpinner,this)),$("body").hasClass("onboarding")&&$(document).on("didScroll",$.proxy(this.scrollHandler,this))};return t.prototype.getName=function(){return"Onboarding"},t.prototype._init=function(e){BLClientData.ios||$(document).trigger("modal:show",".get-app-modal")},t.prototype.preventClose=function(e){e.stopPropagation()},t.prototype.closePopover=function(e){$(".popover").removeClass("po-open")},t.prototype.scrollHandler=function(e){var t=window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body).scrollTop,n="onb-header-detached";t>=this.offsetTop[this.size]?$("body").addClass(n):$("body").removeClass(n)},t.prototype.resize=function(e,t){this.size=t},t.prototype.showSpinner=function(t){var n=$(".loader"),r=e(n,{top:0,left:0})},t}),n("lib/analytics",[],function(){var e=function(e){$(document).on("analytics:virtualpage",$.proxy(this.trackVirtualPage,this)),$(document).on("urlchange",$.proxy(this.popstate,this))};return e.prototype.getName=function(){return"Analytics"},e.prototype.trackVirtualPage=function(e,t){if(typeof _gaq!="undefined"&&typeof _gatags!="undefined")for(var n in _gatags)_gaq.push([_gatags[n]+"._trackPageview",t])},e.prototype.popstate=function(e){$(document).trigger("analytics:virtualpage",location.pathname)},e}),n("lib/history",[],function(){var e=function(e){this.popped="state"in window.history&&window.history.state!==null,$(window).on("popstate",$.proxy(this.popstate,this))};return e.prototype.getName=function(){return"History"},e.prototype.popstate=function(e){var t=location.href,n=!this.popped&&location.href==t;this.popped=!0;
if(n)return;$(document).trigger("analytics:virtualpage",location.pathname)
;var r=location.pathname;r==="/"||r.substring(0,5)==="/feed"?$(document).trigger("popstate:loadFeed",r):r.substring(0,6)==="/blogs"&&$(document).trigger("popstate:loadBlogs",r)},e}),n("lib/logout",[],function(){var e="/logout",t="USER_LOGOUT",n=function(e){window.localStorage&&($("a.logout").bind("click",$.proxy(this.doLogout,this)),window.localStorage.removeItem(t),window.addEventListener?window.addEventListener("storage",this.storageEvent,!1):window.attachEvent("onstorage",this.storageEvent))};return n.prototype.getName=function(){return"logout"},n.prototype.doLogout=function(){window.localStorage.setItem(t,(new Date).getTime())},n.prototype.storageEvent=function(n){n||(n=window.event),n.key&&n.key===t&&(window.location=e)},n}),n("lib/profile",["lib/spin","lib/err"],function(e,t){var n=function(e){this.app=e,this.isLoading=!1,this.requeue=this.app.requeue,$("body").hasClass("profile")&&($(document).ready($.proxy(this._init,this)),$(document).on("willScrollToBottom",$.proxy(this.scrollHandler,this))),$("body").attr("data-page-type")==="blog_profile"&&$(document).trigger("onboarding:seen","blogprofile"),$(document).on("onboarding:show:followblog",$.proxy(this.showFollowBlog,this)),$(document).on("click",".profile-header.blog .follow",$.proxy(this.hideFollowBlog,this)),$(document).on("click",".follow-blog-popover .close",$.proxy(this.hideFollowBlog,this)),$(document).on("onboarding:show:feed",$.proxy(this.showVisitFeed,this)),$("body").hasClass("post-page")&&$(document).ready($.proxy(this._initPostPage,this)),this.app.hasHistory&&$(document).on("click",".profile-navigation a",$.proxy(this.changeList,this)),$(".profile-header.blog").on("click",".follow",$.proxy(this.showFollowMore,this)),$(".profile-header.blog").on("click",".unfollow",$.proxy(this.hideFollowMore,this)),$(document).on("profile:loadError",$.proxy(this.hideSpinner,this)),this.listClasses={posts:"tiled-posts",likes:"tiled-posts",similar:"curator-list",followers:"curator-list",following:"curator-list"}};return n.prototype.getName=function(){return"Profile"},n.prototype._init=function(){var e=$(".tab-content ol"),t=$(document).height()===$(window).height()
;t&&e.hasClass("curator-list")&&this.scrollHandler()
;
if($("body").hasClass("adult-content")){$(document).trigger("modal:showContentWarningModal")
;return}var n=e.attr("data-profile-type")
;
if(n==="blog"&&BLClientData.first_visit){var r=e.attr("data-context-id"),i=e.attr("data-profile-name"),s={id:r,name:i};$(document).trigger("blog:showFollowBlogModal",s)}n==="blog"&&$(document).trigger("onboarding:get","followblog")},n.prototype._initPostPage=function(){if($("body").hasClass("adult-content")){$(document).trigger("modal:showContentWarningModal")
;return}},n.prototype.changeList=function(e,t){e.preventDefault()
;var n=e.currentTarget,r=t||$(n).attr("href"),i=$(n).attr("data-context-type")
;this.app.pushState(null,"mydropintheoceans",r),this.changeActive(r),this.loadList(i)},n.prototype.changeActive=function(e){var t=$(".profile-navigation")
;t.find(".selected").removeClass("selected"),t.find('a[href="'+e+'"]').addClass("selected")},n.prototype.loadList=function(t){function p(e,t){return function(t){var r=t[a].list,i=t[a].context,s=n.listClasses[i.type];e.addClass(s),n.isLoading=!1,s!=="tiled-posts"&&$(".loader, .spinner").remove()
;
if(i.type==="followers"&&u){var f=$(".profile-navigation .followers .num").text()
;l=n.app.render("profiles/adult_content_followers",{followers:f}),$(".loader, .spinner").remove(),e.append(l)}else if(r.length===0)i.profile_name=o,l=n.app.render("profiles/no_items",{context:i}),$(".loader, .spinner").remove(),e.append(l)
;else{for(var c=0;c<r.length;c++){switch(r[c].type){case"post":l=n.app.render("posts/tiled_post",{post:r[c],context:i,hideContentText:BLClientData.ab_groups_obj.hide_post_content})
;break;case"blog":l=n.app.render("posts/curator_blog",{blog:r[c],context:i})
;break;case"user":l=n.app.render("posts/curator_user",{user:r[c],context:i,current_user:{userid:BLClientData.user_id}})}e.append(l)}$(document).trigger("tiled-posts:loaded")}e.attr("data-context-type",i.type),e.attr("data-has-next",i.has_next),e.attr("data-next-page",i.next_page)
;var h=$(document).height()===$(window).height()
;h&&e.hasClass("curator-list")&&n.scrollHandler()}}var n=this,r=$(".tab-content ol"),i=r.attr("data-context-id"),s=r.attr("data-profile-type"),o=r.attr("data-profile-name"),u=$("body").hasClass("adult-content"),a="profiles/"+s,f=["",s,i,t].join("/"),l,c=$('<li class="loader"></li>')
;$(".loader, .spinner").remove(),this.isLoading=!0,r.empty().removeClass("tiled-posts curator-list"),r.css("height","auto"),r.append(c)
;var h=e($(".loader"),{top:100,left:0})
;this.requeue.request(f,"pageLoadQueue",p(r,f),this.handleLoadError(r,f))},n.prototype.handleLoadError=function(e,n){return function(n){var r=new t(JSON.parse(n.responseText).msg)
;e.empty()
;var i=$("<li />").appendTo(e)
;r.prepend(i),$(document).trigger("profile:loadError",r)}},n.prototype.scrollHandler=function(t){var n=this;
if(this.isLoading)return;$(".tab-content > ol").each(function(){function h(e){return function(i){$(e).hasClass("tiled-posts")||$(".loader, .spinner").remove()
;var f=i[a].list,l=i[a].context;for(var c=0;c<f.length;c++){switch(f[c].type){case"post":t=n.app.render("posts/tiled_post",{post:f[c],context:l,hideContentText:BLClientData.ab_groups_obj.hide_post_content})
;break;case"blog":t=n.app.render("posts/curator_blog",{blog:f[c],constext:l})
;break;case"user":t=n.app.render("posts/curator_user",{user:f[c],context:l,current_user:{userid:BLClientData.user_id}})}$(e).append(t)}$(e).hasClass("tiled-posts")?($(document).trigger("tiled-posts:loaded"),$(document).one("tiled-posts:imagesLoaded",function(){$(e).attr("data-has-next",l.has_next),$(e).attr("data-next-page",l.next_page)})):($(e).attr("data-has-next",l.has_next),$(e).attr("data-next-page",l.next_page))
;var h={profile_type:u,profile_id:s,tab_type:o,page:r};$(document).trigger("pagination:profiles",[h])}}var t,r=parseInt($(this).attr("data-next-page"),10),i=parseInt($(this).attr("data-has-next"),10),s=$(this).attr("data-context-id"),o=$(this).attr("data-context-type"),u=$(this).attr("data-profile-type"),a="profiles/"+u;
if(!i||!r)return;$(this).attr("data-has-next",0)
;var f=["",u,s,o,r].join("/"),l=$('<li class="loader scroll"></li>')
;$(this).append(l)
;var c=e(l,{top:40,left:0})
;n.app.requeue.request(f,"serial",h(this),n.handleScrollError(this))})},n.prototype.handleScrollError=function(e){return function(n,r,i){var s=new t(n.msg),o=$("<li />").appendTo(e)
;s.prepend(o),$(document).trigger("profile:loadError",s)}},n.prototype.showFollowMore=function(e){e.preventDefault()
;
if(!BLClientData.user_id||$("body").hasClass("adult-content"))return;$(".follow-more").addClass("show"),setTimeout(function(){$(".follow-more").addClass("visible")},200)},n.prototype.hideFollowMore=function(e){e.preventDefault(),$(".follow-more").removeClass("visible"),setTimeout(function(){$(".follow-more").removeClass("show")},300)},n.prototype.hideSpinner=function(e){$(".tab-content ol").find(".loader").remove()},n.prototype.showFollowBlog=function(e){var t=this.app.render("partials/follow_blog_popover",{})
;$(t).appendTo(".profile-header .follow-button-container"),$(document).trigger("popover:show","#followBlogPopover")},n.prototype.hideFollowBlog=function(e){$(document).trigger("popover:hide","#followBlogPopover"),$(document).trigger("onboarding:seen","followblog"),$(document).trigger("onboarding:get","feed")},n.prototype.showVisitFeed=function(e){var t=this.app.render("partials/visit_feed_popover",{})
;$(t).appendTo(".header .my-feed"),$(document).trigger("popover:show","#visitFeedPopover"),$(document).trigger("onboarding:seen","feed")},n}),!function(e){"object"==typeof exports?module.exports=e():"function"==typeof n&&n.amd?n("vendor/engine.io",e):"undefined"!=typeof window?window.eio=e():"undefined"!=typeof global?global.eio=e():"undefined"!=typeof self&&(self.eio=e())}(function(){var e,n,r;return function i(e,n,r){function s(u,a){if(!n[u]){if(!e[u]){var f=typeof t=="function"&&t;
if(!a&&f)return f(u,!0)
;
if(o)return o(u,!0)
;throw new Error("Cannot find module '"+u+"'")}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(t){var n=e[u][1][t];return s(n?n:t)},l,l.exports,i,e,n,r)}return n[u].exports}var o=typeof t=="function"&&t;for(var u=0;u<r.length;u++)s(r[u])
;return s}({1:[function(e,t,n){t.exports=e("./lib/")},{"./lib/":3}],2:[function(e,t,n){var r=e("emitter")
;t.exports=r,r.prototype.addEventListener=r.prototype.on,r.prototype.removeEventListener=r.prototype.off,r.prototype.removeListener=r.prototype.off},{emitter:15}],3:[function(e,t,n){t.exports=e("./socket"),t.exports.parser=e("engine.io-parser")},{"./socket":4,"engine.io-parser":16}],4:[function(e,t,n){function l(){}function c(e,t){if(!(this instanceof c))return new c(e,t)
;t=t||{},e&&"object"==typeof e&&(t=e,e=null),e&&(e=r.parseUri(e),t.host=e.host,t.secure=e.protocol=="https"||e.protocol=="wss",t.port=e.port,e.query&&(t.query=e.query)),this.secure=null!=t.secure?t.secure:f.location&&"https:"==location.protocol;
if(t.host){var n=t.host.split(":")
;t.hostname=n.shift(),n.length&&(t.port=n.pop())}this.agent=t.agent||!1,this.hostname=t.hostname||(f.location?location.hostname:"localhost"),this.port=t.port||(f.location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=r.qsParse(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.flashPath=t.flashPath||"",this.transports=t.transports||["polling","websocket","flashsocket"],this.readyState="",this.writeBuffer=[],this.callbackBuffer=[],this.policyPort=t.policyPort||843,this.open()}function h(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
;return t}var r=e("./util"),i=e("./transports"),s=e("./emitter"),o=e("debug")("engine.io-client:socket"),u=e("indexof"),a=e("engine.io-parser")
;t.exports=c;var f=e("global")
;s(c.prototype),c.protocol=a.protocol,c.Socket=c,c.Transport=e("./transport"),c.Emitter=e("./emitter"),c.transports=e("./transports"),c.util=e("./util"),c.parser=e("engine.io-parser"),c.prototype.createTransport=function(e){o('creating transport "%s"',e)
;var t=h(this.query)
;t.EIO=a.protocol,t.transport=e,this.id&&(t.sid=this.id)
;var n=new i[e]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:t,forceJSONP:this.forceJSONP,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,flashPath:this.flashPath,policyPort:this.policyPort})
;return n},c.prototype.open=function(){var e=this.transports[0];this.readyState="opening";var e=this.createTransport(e)
;e.open(),this.setTransport(e)},c.prototype.setTransport=function(e){o("setting transport %s",e.name)
;var t=this;this.transport&&(o("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=e,e.on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},c.prototype.probe=function(e){function i(i){if(n)return;n=!0;var s=new Error("probe error: "+i)
;s.transport=t.name,t.close(),t=null,o('probe transport "%s" failed because of error: %s',e,i),r.emit("upgradeError",s)}o('probing transport "%s"',e)
;var t=this.createTransport(e,{probe:1}),n=!1,r=this;t.once("open",function(){if(n)return;o('probe transport "%s" opened',e),t.send([{type:"ping",data:"probe"}]),t.once("packet",function(s){if(n)return;
if("pong"==s.type&&"probe"==s.data)o('probe transport "%s" pong',e),r.upgrading=!0,r.emit("upgrading",t),o('pausing current transport "%s"',r.transport.name),r.transport.pause(function(){if(n)return;
if("closed"==r.readyState||"closing"==r.readyState)return;o("changing transport and sending upgrade packet"),t.removeListener("error",i),r.emit("upgrade",t),r.setTransport(t),t.send([{type:"upgrade"}]),t=null,r.upgrading=!1,r.flush()})
;else{o('probe transport "%s" failed',e)
;var u=new Error("probe error")
;u.transport=t.name,r.emit("upgradeError",u)}})}),t.once("error",i),t.open(),this.once("close",function(){t&&(o("socket closed prematurely - aborting probe"),n=!0,t.close(),t=null)}),this.once("upgrading",function(e){t&&e.name!=t.name&&(o('"%s" works - aborting "%s"',e.name,t.name),t.close(),t=null)})},c.prototype.onOpen=function(){o("socket open"),this.readyState="open",this.emit("open"),this.onopen&&this.onopen.call(this),this.flush()
;
if("open"==this.readyState&&this.upgrade&&this.transport.pause){o("starting upgrade probes")
;for(var e=0,t=this.upgrades.length;e<t;e++)this.probe(this.upgrades[e])}},c.prototype.onPacket=function(e){if("opening"==this.readyState||"open"==this.readyState){o('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),this.emit("heartbeat")
;switch(e.type){case"open":this.onHandshake(r.parseJSON(e.data))
;break;case"pong":this.setPing()
;break;case"error":var t=new Error("server error")
;t.code=e.data,this.emit("error",t)
;break;case"message":this.emit("data",e.data),this.emit("message",e.data)
;var n={data:e.data};n.toString=function(){return e.data},this.onmessage&&this.onmessage.call(this,n)}}else o('packet received with socket readyState "%s"',this.readyState)},c.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat)},c.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer)
;var t=this;t.pingTimeoutTimer=setTimeout(function(){if("closed"==t.readyState)return;t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},c.prototype.setPing=function(){var e=this;clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){o("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},c.prototype.ping=function(){this.sendPacket("ping")},c.prototype.onDrain=function(){for(var e=0;e<this.prevBufferLen;e++)this.callbackBuffer[e]&&this.callbackBuffer[e]()
;this.writeBuffer.splice(0,this.prevBufferLen),this.callbackBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length==0?this.emit("drain"):this.flush()},c.prototype.flush=function(){"closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(o("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},c.prototype.write=c.prototype.send=function(e,t){return this.sendPacket("message",e,t),this},c.prototype.sendPacket=function(e,t,n){var r={type:e,data:t};this.emit("packetCreate",r),this.writeBuffer.push(r),this.callbackBuffer.push(n),this.flush()},c.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState)this.onClose("forced close"),o("socket closing - telling transport to close"),this.transport.close()
;return this},c.prototype.onError=function(e){o("socket error %j",e),this.emit("error",e),this.onerror&&this.onerror.call(this,e),this.onClose("transport error",e)},c.prototype.onClose=function(e,t){if("opening"==this.readyState||"open"==this.readyState){o('socket close with reason: "%s"',e)
;var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),setTimeout(function(){n.writeBuffer=[],n.callbackBuffer=[],n.prevBufferLen=0},0),this.transport.removeAllListeners()
;var r=this.readyState;this.readyState="closed",this.id=null,r=="open"&&(this.emit("close",e,t),this.onclose&&this.onclose.call(this))}},c.prototype.filterUpgrades=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)~u(this.transports,e[n])&&t.push(e[n])
;return t}},{"./emitter":2,"./transport":5,"./transports":7,"./util":12,debug:14,"engine.io-parser":16,global:19,indexof:21}],5:[function(e,t,n){function o(e){this.path=e.path,this.hostname=e.hostname,this.port=e.port,this.secure=e.secure,this.query=e.query,this.timestampParam=e.timestampParam,this.timestampRequests=e.timestampRequests,this.readyState="",this.agent=e.agent||!1}var r=e("./util"),i=e("engine.io-parser"),s=e("./emitter")
;t.exports=o,s(o.prototype),o.prototype.onError=function(e,t){var n=new Error(e)
;return n.type="TransportError",n.description=t,this.emit("error",n),this},o.prototype.open=function(){if("closed"==this.readyState||""==this.readyState)this.readyState="opening",this.doOpen()
;return this},o.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState)this.doClose(),this.onClose()
;return this},o.prototype.send=function(e){if("open"!=this.readyState)throw new Error("Transport not open")
;this.write(e)},o.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},o.prototype.onData=function(e){this.onPacket(i.decodePacket(e))},o.prototype.onPacket=function(e){this.emit("packet",e)},o.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},{"./emitter":2,"./util":12,"engine.io-parser":16}],6:[function(e,t,n){function a(e){r.call(this,e),this.flashPath=e.flashPath,this.policyPort=e.policyPort}function l(e,t){if(f[e])return t()
;var n=document.createElement("script"),r=!1;s('loading "%s"',e),n.onload=n.onreadystatechange=function(){if(r||f[e])return;var i=n.readyState;
if(!i||"loaded"==i||"complete"==i)s('loaded "%s"',e),n.onload=n.onreadystatechange=null,r=!0,f[e]=!0,t()},n.async=1,n.src=e;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild)}function c(e,t){function n(r){if(!e[r])return t()
;l(e[r],function(){n(++r)})}n(0)}var r=e("./websocket"),i=e("../util"),s=e("debug")("engine.io-client:flashsocket")
;t.exports=a;var o=e("global"),u=o[["Active"].concat("Object").join("X")];i.inherits(a,r),a.prototype.name="flashsocket",a.prototype.doOpen=function(){function e(e){return function(){var t=Array.prototype.join.call(arguments," ")
;s("[websocketjs %s] %s",e,t)}}if(!this.check())return;o.WEB_SOCKET_LOGGER={log:e("debug"),error:e("error")},o.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR=!0,o.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0,o.WEB_SOCKET_SWF_LOCATION||(o.WEB_SOCKET_SWF_LOCATION=this.flashPath+"WebSocketMainInsecure.swf")
;var t=[this.flashPath+"web_socket.js"];o.swfobject||t.unshift(this.flashPath+"swfobject.js")
;var n=this;c(t,function(){n.ready(function(){WebSocket.__addTask(function(){n.socket=new WebSocket(n.uri()),n.addEventListeners()})})})},a.prototype.doClose=function(){if(!this.socket)return;var e=this;WebSocket.__addTask(function(){r.prototype.doClose.call(e)})},a.prototype.write=function(){var e=this,t=arguments;WebSocket.__addTask(function(){r.prototype.write.apply(e,t)})},a.prototype.ready=function(e){function t(){if(!a.loaded){if(843!=n.policyPort){var t="xmlsocket://"+n.hostname+":"+n.policyPort;WebSocket.loadFlashPolicyFile(t)}WebSocket.__initialize(),a.loaded=!0}e.call(n)}if(!(typeof WebSocket!="undefined"&&"__initialize"in WebSocket)||!o.swfobject)return;
if(o.swfobject.getFlashPlayerVersion().major<10)return;var n=this;
if(document.body)return t()
;i.load(t)},a.prototype.check=function(){if("undefined"==typeof window)return!1;
if(typeof WebSocket=="undefined"||"__initialize"in WebSocket){if(u){var e=null;try{e=new u("ShockwaveFlash.ShockwaveFlash")}catch(t){}if(e)return!0}else for(var n=0,r=navigator.plugins.length;n<r;n++)for(var i=0,s=navigator.plugins[n].length;i<s;i++)if(navigator.plugins[n][i].description=="Shockwave Flash")return!0;return!1}return!1};var f={}},{"../util":12,"./websocket":11,debug:14,global:19}],7:[function(e,t,n){function f(e){var t,n=!1;
if(a.location){var o="https:"==location.protocol,u=location.port;u||(u=o?443:80),n=e.hostname!=location.hostname||u!=e.port}return e.xdomain=n,t=new r(e),t&&!e.forceJSONP?new i(e):new s(e)}var r=e("xmlhttprequest"),i=e("./polling-xhr"),s=e("./polling-jsonp"),o=e("./websocket"),u=e("./flashsocket")
;n.polling=f,n.websocket=o,n.flashsocket=u;var a=e("global")},{"./flashsocket":6,"./polling-jsonp":8,"./polling-xhr":9,"./websocket":11,global:19,xmlhttprequest:13}],8:[function(e,t,n){function f(){}function l(e){r.call(this,e),u||(s.___eio||(s.___eio=[]),u=s.___eio),this.index=u.length;var t=this;u.push(function(e){t.onData(e)}),this.query.j=this.index}var r=e("./polling"),i=e("../util")
;t.exports=l;var s=e("global"),o=/\n/g,u,a=0;i.inherits(l,r),l.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null),r.prototype.doClose.call(this)},l.prototype.doPoll=function(){var e=this,t=document.createElement("script")
;this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),t.async=!0,t.src=this.uri(),t.onerror=function(t){e.onError("jsonp poll error",t)};var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),this.script=t,i.ua.gecko&&setTimeout(function(){var e=document.createElement("iframe")
;document.body.appendChild(e),document.body.removeChild(e)},100)},l.prototype.doWrite=function(e,t){function a(){f(),t()}function f(){if(n.iframe)try{n.form.removeChild(n.iframe)}catch(e){n.onError("jsonp polling iframe removal error",e)}try{var t='<iframe src="javascript:0" name="'+n.iframeId+'">';u=document.createElement(t)}catch(e){u=document.createElement("iframe"),u.name=n.iframeId,u.src="javascript:0"}u.id=n.iframeId,n.form.appendChild(u),n.iframe=u}var n=this;
if(!this.form){var r=document.createElement("form"),i=document.createElement("textarea"),s=this.iframeId="eio_iframe_"+this.index,u;r.className="socketio",r.style.position="absolute",r.style.top="-1000px",r.style.left="-1000px",r.target=s,r.method="POST",r.setAttribute("accept-charset","utf-8"),i.name="d",r.appendChild(i),document.body.appendChild(r),this.form=r,this.area=i}this.form.action=this.uri(),f(),this.area.value=e.replace(o,"\\n")
;try{this.form.submit()}catch(l){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){n.iframe.readyState=="complete"&&a()}:this.iframe.onload=a}},{"../util":12,"./polling":10,global:19}],9:[function(e,t,n){function l(){}function c(e){i.call(this,e)
;
if(a.location){var t="https:"==location.protocol,n=location.port;n||(n=t?443:80),this.xd=e.hostname!=a.location.hostname||n!=e.port}}function h(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.async=!1!==e.async,this.data=undefined!=e.data?e.data:null,this.agent=e.agent,this.create()}var r=e("xmlhttprequest"),i=e("./polling"),s=e("../util"),o=e("../emitter"),u=e("debug")("engine.io-client:polling-xhr")
;t.exports=c,t.exports.Request=h;var a=e("global"),f=a[["Active"].concat("Object").join("X")];s.inherits(c,i),c.prototype.request=function(e){return e=e||{},e.uri=this.uri(),e.xd=this.xd,e.agent=this.agent||!1,new h(e)},c.prototype.doWrite=function(e,t){var n=this.request({method:"POST",data:e}),r=this;n.on("success",t),n.on("error",function(e){r.onError("xhr post error",e)}),this.sendXhr=n},c.prototype.doPoll=function(){u("xhr poll")
;var e=this.request(),t=this;e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},o(h.prototype),h.prototype.create=function(){var e=this.xhr=new r({agent:this.agent,xdomain:this.xd}),t=this;try{u("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async)
;
if("POST"==this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(n){}"withCredentials"in e&&(e.withCredentials=!0),e.onreadystatechange=function(){var n;try{if(4!=e.readyState)return;200==e.status||1223==e.status?n=e.responseText:setTimeout(function(){t.onError(e.status)},0)}catch(r){t.onError(r)}null!=n&&t.onData(n)},u("xhr data %s",this.data),e.send(this.data)}catch(n){setTimeout(function(){t.onError(n)},0)
;return}f&&(this.index=h.requestsCount++,h.requests[this.index]=this)},h.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},h.prototype.onData=function(e){this.emit("data",e),this.onSuccess()},h.prototype.onError=function(e){this.emit("error",e),this.cleanup()},h.prototype.cleanup=function(){if("undefined"==typeof this.xhr)return;this.xhr.onreadystatechange=l;try{this.xhr.abort()}catch(e){}f&&delete h.requests[this.index],this.xhr=null},h.prototype.abort=function(){this.cleanup()},f&&(h.requestsCount=0,h.requests={},a.attachEvent("onunload",function(){for(var e in h.requests)h.requests.hasOwnProperty(e)&&h.requests[e].abort()}))},{"../emitter":2,"../util":12,"./polling":10,debug:14,global:19,xmlhttprequest:13}],10:[function(e,t,n){function a(e){r.call(this,e)}var r=e("../transport"),i=e("../util"),s=e("engine.io-parser"),o=e("debug")("engine.io-client:polling")
;t.exports=a;var u=e("global")
;i.inherits(a,r),a.prototype.name="polling",a.prototype.doOpen=function(){this.poll()},a.prototype.pause=function(e){function r(){o("paused"),n.readyState="paused",e()}var t=0,n=this;this.readyState="pausing";
if(this.polling||!this.writable){var i=0;this.polling&&(o("we are currently polling - waiting to pause"),i++,this.once("pollComplete",function(){o("pre-pause polling complete"),--i||r()})),this.writable||(o("we are currently writing - waiting to pause"),i++,this.once("drain",function(){o("pre-pause writing complete"),--i||r()}))}else r()},a.prototype.poll=function(){o("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},a.prototype.onData=function(e){var t=this;o("polling got data %s",e),s.decodePayload(e,function(e,n,r){"opening"==t.readyState&&t.onOpen()
;
if("close"==e.type)return t.onClose(),!1;t.onPacket(e)}),"closed"!=this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"==this.readyState?this.poll():o('ignoring poll - transport state "%s"',this.readyState))},a.prototype.doClose=function(){function t(){o("writing close packet"),e.write([{type:"close"}])}var e=this;"open"==this.readyState?(o("transport open - closing"),t()):(o("transport not open - deferring close"),this.once("open",t))},a.prototype.write=function(e){var t=this;this.writable=!1,this.doWrite(s.encodePayload(e),function(){t.writable=!0,t.emit("drain")})},a.prototype.uri=function(){var e=this.query||{},t=this.secure?"https":"http",n="";return("ActiveXObject"in u||i.ua.chromeframe||i.ua.android||i.ua.ios6||this.timestampRequests)&&!1!==this.timestampRequests&&(e[this.timestampParam]=+(new Date)),e=i.qs(e),this.port&&("https"==t&&this.port!=443||"http"==t&&this.port!=80)&&(n=":"+this.port),e.length&&(e="?"+e),t+"://"+this.hostname+n+this.path+e}},{"../transport":5,"../util":12,debug:14,"engine.io-parser":16,global:19}],11:[function(e,t,n){function f(e){r.call(this,e)}var r=e("../transport"),i=e("ws"),s=e("engine.io-parser"),o=e("../util"),u=e("debug")("engine.io-client:websocket")
;t.exports=f;var a=e("global")
;o.inherits(f,r),f.prototype.name="websocket",f.prototype.doOpen=function(){if(!this.check())return;var e=this,t=this.uri(),n=void 0,r={agent:this.agent};this.socket=new i(t,n,r),this.addEventListeners()},f.prototype.addEventListeners=function(){var e=this;this.socket.onopen=function(){e.onOpen()},this.socket.onclose=function(){e.onClose()},this.socket.onmessage=function(t){e.onData(t.data)},this.socket.onerror=function(t){e.onError("websocket error",t)}},"undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)&&(f.prototype.onData=function(e){var t=this;setTimeout(function(){r.prototype.onData.call(t,e)},0)}),f.prototype.write=function(e){function i(){t.writable=!0,t.emit("drain")}var t=this;this.writable=!1;for(var n=0,r=e.length;n<r;n++)this.socket.send(s.encodePacket(e[n]))
;setTimeout(i,0)},f.prototype.onClose=function(){r.prototype.onClose.call(this)},f.prototype.doClose=function(){typeof this.socket!="undefined"&&this.socket.close()},f.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",n="";return this.port&&("wss"==t&&this.port!=443||"ws"==t&&this.port!=80)&&(n=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=+(new Date)),e=o.qs(e),e.length&&(e="?"+e),t+"://"+this.hostname+n+this.path+e},f.prototype.check=function(){return!!i&&!("__initialize"in i&&this.name===f.prototype.name)}},{"../transport":5,"../util":12,debug:14,"engine.io-parser":16,global:19,ws:22}],12:[function(e,t,n){var r=e("global"),i=!1;n.inherits=function(t,n){function r(){}r.prototype=n.prototype,t.prototype=new r},n.keys=Object.keys||function(e){var t=[],n=Object.prototype.hasOwnProperty;for(var r in e)n.call(e,r)&&t.push(r)
;return t},n.on=function(e,t,n,r){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener&&e.addEventListener(t,n,r)},n.load=function(e){if(r.document&&document.readyState==="complete"||i)return e()
;n.on(r,"load",e,!1)},"undefined"!=typeof window&&n.load(function(){i=!0})
;var s=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,u=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,a=/(?:^|:|,)(?:\s*\[)+/g,f=/^\s+/,l=/\s+$/;n.parseJSON=function(e){if("string"!=typeof e||!e)return null;e=e.replace(f,"").replace(l,"")
;
if(r.JSON&&JSON.parse)return JSON.parse(e)
;
if(s.test(e.replace(o,"@").replace(u,"]").replace(a,"")))return(new Function("return "+e))()},n.ua={},n.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent),n.ua.gecko="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent),n.ua.android="undefined"!=typeof navigator&&/android/i.test(navigator.userAgent),n.ua.ios="undefined"!=typeof navigator&&/^(iPad|iPhone|iPod)$/.test(navigator.platform),n.ua.ios6=n.ua.ios&&/OS 6_/.test(navigator.userAgent),n.ua.chromeframe=Boolean(r.externalHost)
;var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,h=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];n.parseUri=function(e){var t=c.exec(e||""),n={},r=14;while(r--)n[h[r]]=t[r]||"";return n},n.qs=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]))
;return t},n.qsParse=function(e){var t={},n=e.split("&")
;for(var r=0,i=n.length;r<i;r++){var s=n[r].split("=")
;t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}},{global:19}],13:[function(e,t,n){var r=e("has-cors")
;t.exports=function(e){var t=e.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!t||r))return new XMLHttpRequest}catch(n){}if(!t)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(n){}}},{"has-cors":20}],14:[function(e,t,n){function r(e){return r.enabled(e)?function(t){t=i(t)
;var n=new Date,s=n-(r[e]||n)
;r[e]=n,t=e+" "+t+" +"+r.humanize(s),window.console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}:function(){}}function i(e){return e instanceof Error?e.stack||e.message:e}t.exports=r,r.names=[],r.skips=[],r.enable=function(e){try{localStorage.debug=e}catch(t){}var n=(e||"").split(/[\s,]+/),i=n.length;for(var s=0;s<i;s++)e=n[s].replace("*",".*?"),e[0]==="-"?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$"))},r.disable=function(){r.enable("")},r.humanize=function(e){var t=1e3,n=6e4,r=60*n;return e>=r?(e/r).toFixed(1)+"h":e>=n?(e/n).toFixed(1)+"m":e>=t?(e/t|0)+"s":e+"ms"},r.enabled=function(e){for(var t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(var t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1};try{window.localStorage&&r.enable(localStorage.debug)}catch(s){}},{}],15:[function(e,t,n){function i(e){if(e)return s(e)}function s(e){for(var t in i.prototype)e[t]=i.prototype[t];return e}var r=e("indexof")
;t.exports=i,i.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},i.prototype.once=function(e,t){function r(){n.off(e,r),t.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},t._off=r,this.on(e,r),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=function(e,t){this._callbacks=this._callbacks||{};
if(0==arguments.length)return this._callbacks={},this;var n=this._callbacks[e];
if(!n)return this;
if(1==arguments.length)return delete this._callbacks[e],this;var i=r(n,t._off||t)
;return~i&&n.splice(i,1),this},i.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks[e];
if(n){n=n.slice(0)
;for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},i.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},i.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{indexof:21}],16:[function(e,t,n){t.exports=e("./lib/")},{"./lib/":17}],17:[function(e,t,n){var r=e("./keys")
;n.protocol=2;var i=n.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},s=r(i),o={type:"error",data:"parser error"};n.encodePacket=function(e){var t=i[e.type];return undefined!==e.data&&(t+=String(e.data)),""+t},n.decodePacket=function(e){var t=e.charAt(0)
;return Number(t)!=t||!s[t]?o:e.length>1?{type:s[t],data:e.substring(1)}:{type:s[t]}},n.encodePayload=function(e){if(!e.length)return"0:";var t="",r;for(var i=0,s=e.length;i<s;i++)r=n.encodePacket(e[i]),t+=r.length+":"+r;return t},n.decodePayload=function(e,t){var r;
if(e=="")return t(o,0,1)
;var i="",s,u;for(var a=0,f=e.length;a<f;a++){var l=e.charAt(a)
;
if(":"!=l)i+=l;else{if(""==i||i!=(s=Number(i)))return t(o,0,1)
;u=e.substr(a+1,s)
;
if(i!=u.length)return t(o,0,1)
;
if(u.length){r=n.decodePacket(u)
;
if(o.type==r.type&&o.data==r.data)return t(o,0,1)
;var c=t(r,a+s,f)
;
if(!1===c)return}a+=s,i=""}}if(i!="")return t(o,0,1)}},{"./keys":18}],18:[function(e,t,n){t.exports=Object.keys||function(t){var n=[],r=Object.prototype.hasOwnProperty;for(var i in t)r.call(t,i)&&n.push(i)
;return n}},{}],19:[function(e,t,n){t.exports=function(){return this}()},{}],20:[function(e,t,n){var r=e("global")
;t.exports="XMLHttpRequest"in r&&"withCredentials"in new r.XMLHttpRequest},{global:19}],21:[function(e,t,n){var r=[].indexOf;t.exports=function(e,t){if(r)return e.indexOf(t)
;for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},{}],22:[function(e,t,n){function s(e,t,n){var r;return t?r=new i(e,t):r=new i(e),r}var r=function(){return this}(),i=r.WebSocket||r.MozWebSocket;t.exports=i?s:null,i&&(s.prototype=i.prototype)},{}]},{},[1])(1)}),n("lib/realtime",["vendor/engine.io"],function(e){var t=function(e){this.app=e,this.socket=null,this.backoff=new n(5,$.proxy(this.handshake,this))};t.prototype.getName=function(){return"Realtime"},t.prototype.handshake=function(){$.getJSON("/feed/realtime/handshake",$.proxy(this.initSocket,this))},t.prototype.initSocket=function(t,n){if(!t.token||n!=="success"){this.backoff.retry()
;return}var r=this;this.socket=new e.Socket(t.websocket),this.socket.on("open",function(){r.socket.send(JSON.stringify(t)),r.socket.on("message",$.proxy(r.handleMessage,r)),r.backoff.reset()}),this.socket.on("error",function(e){r.socket=null,r.backoff.retry()}),this.socket.on("close",function(){r.socket=null,r.backoff.retry()})},t.prototype.handleMessage=function(e){try{e=JSON.parse(e)}catch(t){return}e.type==="user.post.new"&&$(document).trigger("realtime:newPost",e)};var n=function(t,n){this.retries=t,this.tries=0,this.fn=n,this.retrying=!1,this.base=Math.random()*30+1};return n.prototype.retry=function(){if(this.retrying||this.tries++>this.retries)return;this.retrying=!0;var t=0;switch(this.tries){case 1:t=this.base;break;case 2:t=this.base*(Math.random()*3+1)
;break;default:t=this.base*(Math.random()*7+1)}var n=this;setTimeout(function(){n.retrying=!1,n.fn()},t*1e3)},n.prototype.reset=function(){this.retrying=!1,this.tries=0,this.base=Math.random()*30+1},t}),n("lib/title",[],function(){var e=function(e){this.app=e,this.defaultTitle="",this.alternate=[],this.interval=3e3,this.windowIsActive=!0,this.isRunning=!1,this.currentAlternate=-1;var t=this;$(document).on("windowVisibilityChange",function(e,n){t.windowIsActive=n,n&&(t.alternate=[],t.isRunning=!1)})};return e.prototype.getName=function(){return"Title"},e.prototype.setDefault=function(e){this.defaultTitle=e,this.windowIsActive&&(window.document.title=this.defaultTitle)},e.prototype.addAlternate=function(e){if(this.windowIsActive)return;this.alternate.push(e),this.isRunning||(this.isRunning=!0,this.rotate())},e.prototype.clearAlternates=function(){this.alternate=[]},e.prototype.rotate=function(){if(this.isRunning){var e=this;setTimeout(function(){e.currentAlternate++;var t;e.currentAlternate===-1?t=e.defaultTitle:t=e.alternate[e.currentAlternate],t||(e.currentAlternate=-2,t=e.defaultTitle),document.title=t,e.rotate()},this.interval)}else document.title=this.defaultTitle},e}),n("lib/new_posts",[],function(){var e=function(e){this.app=e,this.posts=[],this.button=null,this.i18n=e.getModule("i18n"),$(document).on("realtime:newPost",$.proxy(this.newPost,this)),$(document).on("feed:contextChanged",$.proxy(this.hideButton,this))};return e.prototype.getName=function(){return"NewPostsButton"},e.prototype.newPost=function(e,t){var n=this.app.getModule("Feed").currentContext(),r={all:!0,blog:!0,group:!0};
if(n.format!=="list")return;
if(n.type==="blog"&&t.blog_id.toString()!==n.id)return;
if(n.type==="group"){var i=this.app.getModule("SidebarModel"),s=i.blogs[t.blog_id];
if(s&&n.id!==s.group_id.toString())return}else if(!r[n.type])return;this.posts.push(t)
;
if(n.sortorder==="newest")this.button||this.createButton(),this.updateText()
;else if(n.sortorder==="oldest"){var o=$(".posts").find(".end-of-feed")
;
if(o.length===1){var u=this.app.getModule("Feed")
;u.refresh(this.getBatch())}}},e.prototype.getBatch=function(){return this.posts.splice(0,20)},e.prototype.updateText=function(){if(!this.button)return;var e=this.posts.length,t="";e===1?t=this.i18n.t("new_posts_btn",{defaultValue:"__newCount__ new post",newCount:e}):t=this.i18n.t("new_posts_btn_plural",{defaultValue:"__newCount__ new posts",newCount:e}),this.button.text(t)},e.prototype.createButton=function(){var e=this,t=this.app.getModule("Feed")
;this.button=$("<a>").attr("href","#").addClass("hidden").addClass("new-posts-button").appendTo("body").click(function(n){return n.preventDefault(),t.refresh(e.getBatch()),$("body, html").animate({scrollTop:0},500),e.posts.length===0?e.hideButton():e.updateText(),!1})
;var n=this.button;setTimeout(function(){n.removeClass("hidden")},1)},e.prototype.hideButton=function(){if(!this.button)return;this.button.addClass("hidden")
;var e=this;setTimeout(function(){e.newCount=0,e.button.remove(),e.button=null},500)},e}),n("lib/popular",["lib/spin","lib/err"],function(e,t){var n=function(e){this.app=e,this.requeue=this.app.requeue,$("body").hasClass("popular-page")&&$(document).on("willScrollToBottom",$.proxy(this.scrollHandler,this))};return n.prototype.getName=function(){return"Popular"},n.prototype.scrollHandler=function(t){function h(e){return function(t){var r=t["popular/popular"].list,i=t["popular/popular"].context;for(var s=0;s<r.length;s++)a=n.app.render("posts/tiled_post",{post:r[s],blog_flags:BLClientData.blog_flags,context:i,hideContentText:BLClientData.ab_groups_obj.hide_post_content,current_user:{level:BLClientData.user_level}}),e.append(a)
;$(document).trigger("tiled-posts:loaded"),$(document).one("tiled-posts:imagesLoaded",function(){e.attr("data-has-next",i.has_next),e.attr("data-next-page",i.next_page)})}}var n=this,r=$(".tiled-posts"),i=parseInt(r.attr("data-next-page"),10),s=parseInt(r.attr("data-has-next"),10),o=r.attr("data-context-id"),u=r.attr("data-country"),a;
if(!s||!i)return;r.attr("data-has-next",0)
;var f=["","popular",i,o,u].join("/"),l=$('<li class="loader scroll"></li>')
;r.append(l)
;var c=e(l,{top:40,left:0})
;n.app.requeue.request(f,"serial",h(r),n.handleScrollError(r))},n.prototype.handleScrollError=function(e){return function(n,r,i){var s=new t(n.msg),o=$("<li />").appendTo(e)
;s.prepend(o),$(document).trigger("popular:loadError",s)}},n}),n("lib/viewer",[],function(){var e=function(e){var t=this;this.viewer=$(".bl-viewer-container"),this.resize(),this.signupModal=null,$(window).on("resize",$.proxy(this.resize,this)),$(document).ready(function(){t.signupModal||(t.signupModal=setTimeout(function(){t.showSignupModal()},7e3))})};return e.prototype.getName=function(){return"viewer"},e.prototype.resize=function(e){if(this.viewer.length>0){var t=$(".viewer .bl-banners").height()
;this.viewer.css("top",t)}},e.prototype.showSignupModal=function(e){var t=$("body")
;
if(t.data("page-type")==="viewer"&&t.data("signup-modal")===!0){var n=$(".bl-banners"),r={id:n.data("blog-id"),name:n.data("blog-name"),source:$("body").data("page-type")};$(document).trigger("blog:showFollowBlogModal",r)}},e}),function(e){typeof n=="function"?n("lib/tonne_client",e):window.TonneModule=e()}(function(){var e=function(n){n=n||{},this.storage=new t,this.country=n.country.length===2?n.country:"us",this.geo=this._determineGeo(this.country),this.platform=n.platform,this.identifier=n.identifier,this.signedIn=n.signedIn,this.memberSince=n.memberSince,this.staticFields=n.staticFields||{},this.abGroups=n.abGroups||[],this.maxAge=72e5,this.prefix="tonne_",this.timeout=null,this.endpoint="http://tonne.api.mydropintheoceans.com/metrics/datapoints",this.maxIntervals=[500,500,500,500,500,1e3,2e3,2e3,5e3],this.curInterval=0,this.removeOutdated(),this.sendBatch()};e.prototype.getName=function(){return"TonneClient"},e.prototype.track=function(t,n){if(!this.identifier)return;var r=this.createDatapoint(t)
;this.storage.setItem(this.prefix+r.timestamp,JSON.stringify(r))
;
if(n&&typeof n=="function")this.sendBatch(n)
;else if(!this.timeout){var i=Math.random()*this.maxIntervals[this.curInterval],s=this;this.timeout=setTimeout(function(){clearTimeout(s.timeout),s.sendBatch()},i)}},e.prototype.createDatapoint=function(t){var n=t||{},r=(new Date).getTime()
;n.timestamp=r,n.uri=document.URL,n.country=this.country,n.geo=this.geo,n.referrer=document.referrer,n.identifier=this.identifier,n.platform=this.platform,n.ab_variation=this.abGroups,n.signed_in=this.signedIn,this.signedIn&&(n.member_since=this.memberSince)
;for(var i in this.staticFields)n[i]=this.staticFields[i];return n},e.prototype.removeOutdated=function(){var t=this.storage.length,n=(new Date).getTime(),r=this.prefix.length;for(var i=0;i<t;i++){var s=this.storage.key(i)
;
if(s.indexOf(this.prefix)===0){var o=parseInt(s.substring(r),10)
;n>o+this.maxAge&&this.storage.removeItem(s)}}},e.prototype.sendBatch=function(t){var n={},r=[],i=this.storage.length,s=this.prefix.length,o=[];for(var u=0;u<i;u++){var a=this.storage.key(u)
;
if(a.indexOf(this.prefix)===0){var f=this.storage.getItem(a)
;JSON.parse(f).identifier?(n[a]=f,r.push(JSON.parse(f))):o.push(a)}}if(o.length>0)for(var u=0;u<o.length;u++)this.storage.removeItem(o[u])
;
if(r.length>0){for(var a in n)this.storage.removeItem(a)
;var l=this,c={localtime:(new Date).getTime(),events:r};$.ajax({url:this.endpoint,type:"POST",data:JSON.stringify(c),timeout:1500}).fail(function(){for(var e in n)l.storage.setItem(e,n[e])}).always(function(){l.curInterval=Math.min(l.maxIntervals.length-1,l.curInterval+1),t&&typeof t=="function"&&t()})}this.timeout=null},e.prototype._determineGeo=function(t){t=t.toUpperCase()
;
if(t==="US")return"USA";var n=/(AL|AD|AM|AT|BY|BE|BA|BG|CH|CY|CZ|DE|DK|EE|ES|FO|FI|FR|GB|GE|GI|GR|HU|HR|IE|IS|IT|LT|LU|LV|MC|MK|MT|NO|NL|PO|PT|RO|RU|SE|SI|SK|SM|TR|UA|VA)/;return n.exec(t)?"Europe":"ROW"};var t=function(){this.data={},this.keys=[],this.length=0};return t.prototype.key=function(t){return this.keys[t]||null},t.prototype.getItem=function(t){return this.data[t]||null},t.prototype.setItem=function(t,n){if(!t)return;this.data[t]||(this.keys.push(t),this.length++)
;
if(typeof this.data[t]=="undefined"||this.data[t]!==n){var r=$.Event("storage",{key:t,oldValue:this.data[t]||null,newValue:n,url:document.URL})
;$(document).trigger(r)}this.data[t]=n},t.prototype.removeItem=function(t){if(!this.data[t])return;var n=!1;for(var r in this.keys)if(this.keys[r]===t){n=r;break}var i=this.data[t],s=$.Event("storage",{key:t,oldValue:i,newValue:null,url:document.URL})
;$(document).trigger(s),n!==!1&&this.keys.splice(n,1),delete this.data[t],this.length--},t.prototype.clear=function(){if(this.length){var t=$.Event("storage",{key:null,oldValue:null,newValue:null,url:document.URL})
;$(document).trigger(t)}this.data={},this.keys=[],this.length=0},e}),n("lib/metrics",["lib/tonne_client"],function(e){var t=function(){var n=this;this.tonne=new e({country:BLClientData.detected_country||BLClientData.country,identifier:BLClientData.metric_token,platform:"web",signedIn:BLClientData.user_id!==0,memberSince:BLClientData.member_since,abGroups:BLClientData.ab_groups}),this.sendToTonne=function(e,t,r){t=t||{},t.event=e,n.tonne.track(t,r)},$(document).on("page:loaded",function(e,t,r){n.sendToTonne("page_load",t,r)}),$(document).on("post:hide",function(e,t,r){n.sendToTonne("post_hide",t,r)}),$(document).on("post:unhide",function(e,t,r){n.sendToTonne("post_show",t,r)}),$(document).on("findBlogs:listLoaded",function(e,t,r){n.sendToTonne("find_blogs_list_loaded",t,r)}),$(document).on("post:visits_link",function(e,t,r){n.sendToTonne("post_read",t,r)}),$(document).on("post:shared",function(e,t,r){n.sendToTonne("post_shared",t,r)}),$(document).on("getApp:textSent",function(e,t,r){n.sendToTonne("onboarding_text_sent")}),$(document).on("getApp:dismissed",function(e,t,r){n.sendToTonne("onboarding_num_not_entered")}),$(document).on("click:signup_button",function(e,t,r){n.sendToTonne("clicked_signup_button",t,r)}),$(document).on("click:download_app",function(e,t,r){n.sendToTonne("clicked_download_app",t,r)}),$(document).on("mainNav:opened",function(e,t,r){n.sendToTonne("nav_drop_down_open")}),$(document).on("mainNav:optionClicked",function(e,t,r){n.sendToTonne("drop_down_menu_click",t,r)}),$(document).on("click",".email-sign-up",function(e){e.preventDefault()
;var t=e.currentTarget,n=$(t).attr("href"),r={source:$("body").data("page-type"),modal:$(t).closest(".modal").length>0,method:"email"};$(document).trigger("click:signup_button",[r,function(){window.location=n}])}),$(document).on("click",".download-app",function(e){e.preventDefault()
;var t=$(e.currentTarget),n=t.attr("href"),r={source:$("body").data("page-type"),app_type:t.data("app-type")};$(document).trigger("click:download_app",[r,function(){window.location=n}])}),$(document).on("searchCategories:show",function(e,t,r){n.sendToTonne("search_categories_show")}),$(document).on("searchCategories:click",function(e,t,r){n.sendToTonne("search_categories_click",t,r)}),$(document).on("pagination:profiles",function(e,t,r){n.sendToTonne("pagination_profiles",t,r)}),$(document).on("blog:showFollowBlogModal",function(e,t,r){n.sendToTonne("show_blog_signup_modal",t,r)})};return t.prototype.getName=function(){return"Metrics"},t}),n("lib/gritter",[],function(){var e=function(e){this.app=e,$(document).on("blog:followed",$.proxy(this.blogFollowed,this)),$(document).on("user:followed",$.proxy(this.userFollowed,this)),$(document).on("post:success:liked",$.proxy(this.postLiked,this))};return e.prototype.getName=function(){return"Gritter"},e.prototype.blogFollowed=function(e,t){var n=$.gritter.add({title:'<a href="/blog/'+t.blog_id+'">'+t.blog_name+"</a>",text:this.app.render("gritter/blog_followed"),image:BLClientData.avatar,sticky:!1,time:5e3})},e.prototype.userFollowed=function(e,t){var n=$.gritter.add({title:'<a href="'+t.profile+'">'+t.user_name+"</a>",text:this.app.render("gritter/user_followed"),image:t.avatar||BLClientData.avatar,sticky:!1,time:5e3})},e.prototype.postLiked=function(e,t){var n=$.gritter.add({title:t.post_name,text:this.app.render("gritter/post_liked",{username:BLClientData.username}),image:t.post_media||BLClientData.avatar,sticky:!1,time:5e3})},e}),n("lib/abtests",[],function(){var e=function(e){this.app=e,$(document).ready($.proxy(this.applyClasses,this))};return e.prototype.getName=function(){return"ABTests"},e.prototype.applyClasses=function(){BLClientData.ab_groups_obj.old_feed_styling||$("body").addClass("new-styling")},e}),n("app",["lib/apponboarding","lib/feed","lib/active","lib/i18n","lib/sidebar","lib/sidebar_view","lib/search","lib/posts","lib/blogs","lib/users","lib/toolbar","lib/to_top","lib/main_nav","lib/popover","lib/facebook","lib/modal","lib/ads","lib/konami","lib/tooltip","lib/notifications","lib/alert","lib/onboarding","lib/analytics","lib/history","lib/logout","lib/profile","lib/realtime","lib/title","lib/new_posts","lib/popular","lib/viewer","lib/metrics","lib/gritter","lib/abtests"],function(){function r(e,t,n){t=t||250;var r,i;return function(){var s=n||this,o=(new Date).getTime(),u=arguments;r&&o<r+t?(clearTimeout(i),i=setTimeout(function(){r=o,e.apply(s,u)},t)):(r=o,e.apply(s,u))}}var e=arguments,n=function(){var n=t("lib/requeue")
;this.requeue=new n,this.requeue.createQueue("pageLoadQueue","single",{retries:2}),this.requeue.createQueue("serial","serial",{retries:2}),this.requeue.createQueue("parallel","parallel",{concurrent:4,retries:2}),this.hasHistory=!!window.history&&!!window.history.pushState,this.hasStorage=function(){try{var e=window.localStorage;return e.setItem("testingKey",1),e.removeItem("testingKey"),!0}catch(t){return!1}}(),this.modules={},this.viewData={},this.loadModules(e),e=null,$(document).ready($.proxy(this._ready,this)),this.scrollTimer=!1,$(window).on("scroll",r($.proxy(this.scroll),1e3/60)),$(window).on("resize",r($.proxy(this.resize,this),1e3/60)),$(window).on("mousemove",r($.proxy(this.mouseMove,this),62.5)),$.ajaxSetup({cache:!1,dataType:"json"}),$(document).bind("ajaxComplete",function(e,t){t.status&&t.status===403&&location.reload(!1)})};return n.prototype.loadModules=function(e){for(var t=0;t<e.length;t++){var n=new e[t](this)
;this.modules[n.getName()]=n}},n.prototype.getModule=function(e){return this.modules[e]},n.prototype.addViewData=function(e,t){this.viewData[e]=t},n.prototype.render=function(e,t){t=t||{};var n=_.extend(t,this.viewData)
;return BLViews[e](_.extend(t,this.viewData))},n.prototype._ready=function(){this.resize(),$("input, textarea").placeholder(),$(document).trigger("page:loaded")},n.prototype.scroll=function(e){$(document).trigger("didScroll",[e]),$("body").addClass("disable-hover"),clearTimeout(this.scrollTimer),this.scrollTimer=setTimeout(function(){$("body").removeClass("disable-hover")},300)
;var t=$(window).height()+$(window).scrollTop(),n=$(document).height()
;t>=n-500&&$(document).trigger("willScrollToBottom"),t>=n-50&&$(document).trigger("didScrollToBottom")},n.prototype.resize=function(e){var t=this,n=$(window).width(),r=n!==t.windowWidth;r&&(n<615?$(document).trigger("breakpoint:small","small"):n<840?$(document).trigger("breakpoint:medium","medium"):$(document).trigger("breakpoint:large","large"),t.windowWidth=$(window).width())},n.prototype.pushState=function(e,t,n){this.hasHistory&&(window.history.pushState(null,t,n),$(document).trigger("urlchange"))},n.prototype.mouseMove=function(e){$(document).trigger("mousemoved",e)},n}),n("lib/find_blogs",["lib/apponboarding","lib/err","lib/ads","lib/i18n","lib/search","lib/to_top","lib/main_nav","lib/blogs","lib/modal","lib/popover","lib/notifications","lib/analytics","lib/history","lib/facebook","lib/logout","lib/metrics","lib/gritter","lib/abtests"],function(e){function i(e,t,n){t=t||250;var r,i;return function(){var s=n||this,o=(new Date).getTime(),u=arguments;r&&o<r+t?(clearTimeout(i),i=setTimeout(function(){r=o,e.apply(s,u)},t)):(r=o,e.apply(s,u))}}var n=arguments,r=function(){var e=t("lib/requeue")
;this.requeue=new e,this.requeue.createQueue("pageLoadQueue","single",{retries:2}),this.requeue.createQueue("serial","serial",{retries:2}),this.requeue.createQueue("parallel","parallel",{concurrent:4,retries:2}),this.hasHistory=!!window.history&&!!window.history.pushState,this.modules={},this.viewData={},this.loadModules(n),n=null,$(document).ready($.proxy(this._ready,this,[location.pathname])),this.scrollTimer=!1,$(window).on("scroll",i($.proxy(this.scroll),1e3/60)),$(window).on("resize",i($.proxy(this.resize,this),1e3/60)),$.ajaxSetup({cache:!1,dataType:"json"}),$(document).bind("ajaxComplete",function(e,t){t.status&&t.status===403&&location.reload(!1)}),this.isLoading=!1,this.spin=t("lib/spin"),$(document).on("willScrollToBottom",$.proxy(this.scrollHandler,this)),$(document).on("click",".find-blogs .back",$.proxy(this.showSidebar,this)),$(document).on("popstate:loadBlogs",$.proxy(this.changeList,this)),this.hasHistory&&$(document).on("click",".find-blogs .sidebar a",$.proxy(this.changeList,this)),$(document).on("onboarding:show:blogprofile",$.proxy(this.showBlogProfile,this))};return r.prototype.getName=function(){return"FindBlogs"},r.prototype.loadModules=function(e){for(var t=0;t<e.length;t++){var n=new e[t](this)
;this.modules[n.getName()]=n}},r.prototype.getModule=function(e){return this.modules[e]},r.prototype.addViewData=function(e,t){this.viewData[e]=t},r.prototype.render=function(e,t){t=t||{};var n=_.extend(t,this.viewData)
;return BLViews[e](_.extend(t,this.viewData))},r.prototype._ready=function(e){this.resize(),$("input, textarea").placeholder(),this.hasHistory?this.pushState(null,"mydropintheoceans",e):this.hideSidebar(),$(document).trigger("page:load"),$(document).trigger("onboarding:seen","findblogs"),$(document).trigger("onboarding:get","blogprofile")
;
if($(".find-blogs .recommended").length>0)$(document).trigger("findBlogs:listLoaded",[{list_type:"recommended"}])
;else{var t={list_type:"category",id:0};$(document).trigger("findBlogs:listLoaded",[t])}},r.prototype.scroll=function(e){$(document).trigger("didScroll",[e]),$("body").addClass("disable-hover"),clearTimeout(this.scrollTimer),this.scrollTimer=setTimeout(function(){$("body").removeClass("disable-hover")},300)
;var t=$(window).height()+$(window).scrollTop(),n=$(document).height()
;t>=n-500&&$(document).trigger("willScrollToBottom"),t>=n-50&&$(document).trigger("didScrollToBottom")},r.prototype.resize=function(e){var t=this;clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(function(){var e=$(window).width()!=t.windowWidth;e&&($(window).width()<615?$(document).trigger("breakpoint:small","small"):$(document).trigger("breakpoint:medium","medium"),t.windowWidth=$(window).width())},250)},r.prototype.scrollHandler=function(e){var t=this;
if(this.isLoading)return;var n=this.getModule("Ads")
;$(".blog-list").each(function(){function c(r){return function(i){l.remove(),f.remove()
;var s=i["find_blogs/find_blogs"].blogs,o=i["find_blogs/find_blogs"].context;for(var u=0;u<s.length;u++)e=t.render("find_blogs/blog",{blog:s[u],baseUrl:BLClientData.base_url}),$(r).append(e),(u+2)%7===0&&t.insertAd("content_2",r)
;$(r).attr("data-has-next",o.has_next),$(r).attr("data-next-page",o.next_page),n.findSlots(!1,!0)}}var e,r=parseInt($(this).attr("data-next-page"),10),i=parseInt($(this).attr("data-has-next"),10),s=$(this).attr("data-context-id"),o=$(this).attr("data-context-type"),u=$(this).attr("data-country")
;
if(!i)return;$(this).attr("data-has-next",0)
;var a;switch(o){case"recommended":a="/blogs/recommendations/"+r;break;case"category":a="/blogs/"+r+"/"+s+"/"+u}var f=$('<li class="loader"></li>')
;$(this).append(f)
;var l=t.spin(f,{top:0,left:0})
;t.requeue.request(a,"serial",c(this),t.handleScrollError(this))})},r.prototype.handleScrollError=function(t){return function(n,r,i){var s=new e(n.msg),o=$("<li />").appendTo(t)
;s.prepend(o)}},r.prototype.changeList=function(e,t){e.preventDefault()
;var n=e.currentTarget,r=t||$(n).attr("href")
;r==="/blogs"?this.showSidebar():(this.pushState(null,"mydropintheoceans",r),this.changeActive(r),this.loadList(r))},r.prototype.changeActive=function(e){var t=$(".find-blogs .sidebar")
;t.find(".selected").removeClass("selected"),t.find('a[href="'+e+'"]').addClass("selected")},r.prototype.loadList=function(e){function o(e,n){return function(n){t.isLoading=!1,s.remove(),r.remove()
;var o=n["find_blogs/find_blogs"].blogs,u=n["find_blogs/find_blogs"].context;
if(o.length===0)i=t.render("find_blogs/no_blogs",{context:u}),$(e).append(i)
;else{i=t.render("find_blogs/navigation",{context:u}),$(e).prepend(i)
;for(var a=0;a<o.length;a++)i=t.render("find_blogs/blog",{blog:o[a],baseUrl:BLClientData.base_url}),$(e).append(i)}$(e).attr("data-context-id",u.id),$(e).attr("data-context-type",u.type),$(e).attr("data-has-next",u.has_next),$(e).attr("data-next-page",u.next_page)
;var f=t.render("find_blogs/title",{context:u})
;$(".content > h1").replaceWith(f)
;var l={event:"find_blogs_list_loaded",list_type:u.type};u.id&&(l.id=u.id),$(document).trigger("findBlogs:listLoaded",[l])}}var t=this,n=$(".find-blogs .blog-list"),r=$('<li class="loader"></li>'),i;this.isLoading=!0,$(".find-blogs-container").addClass("show-list"),$(".find-blogs-container .nav").remove(),n.empty(),n.append(r)
;var s=this.spin(r,{top:100,left:0})
;this.requeue.request(e,"pageLoadQueue",o(n,e),this.handleLoadError(n,e))},r.prototype.handleLoadError=function(t,n){return function(n){var r=new e(JSON.parse(n.responseText).msg)
;t.empty()
;var i=$("<li />").appendTo(t)
;r.prepend(i)}},r.prototype.showSidebar=function(e){$(".find-blogs-container").removeClass("show-list")},r.prototype.hideSidebar=function(e){$(".find-blogs-container").addClass("show-list")},r.prototype.pushState=function(e,t,n){$(document).trigger("analytics:virtualpage",n),this.hasHistory&&(window.history.pushState(null,t,n),$(window).trigger("urlchange"))},r.prototype.insertAd=function(t,n){var r=$("<li />").addClass("ad"),i=$("<div />").attr({"data-placement":t,"class":"ad-placement"})
;r.append(i),$(n).append(r)},r.prototype.showBlogProfile=function(e){var t=this.render("partials/visit_blog_profile_popover",{}),n=$(".blog-list .blog").first()
;$(t).appendTo(".blog-list .blog .title").first(),$(document).trigger("popover:show","#visitBlogProfilePopover")},r}),n("lib/requeue",[],function(){function i(e,t,n,r){typeof t=="function"&&(r=n,n=t,t=null),typeof this.queue=="undefined"&&(this.queue=[])
;var i={path:e,options:t,done:n,fail:r,tries:0,id:this.id()};this.queue.push(i),this.resume(),$("document").trigger("requestPushed",i)}function s(e,t,n,r){return $.ajax(e,t).done(n).fail(r)}function o(){this.pause()
;var e=this;$(this.running).each(function(e,t){t.req&&typeof t.req.abort=="function"&&(t.req.abort(),$("document").trigger("requestAborted",t))}),this.queue=[],this.running=[],$("document").trigger("allRequestsAborted")}function u(e){var t=this;return function(n,r,i){$("document").trigger("requestDone",[n,r,i,e]),e.done(n,r,i),h(e,t.running),t.process()}}function a(e){var t=this;return this.retries==="undefined"&&(this.retries=0),function(n,r,i){h(e,t.current),e.tries<t.retries?(delete e.req,t.queue.unshift(e),$("document").trigger("requestRetrying",[n,r,i,e])):(e.fail(n,r,i),$("document").trigger("requestFailed",[n,r,i,e]))}}function f(){this.paused=!0,$("document").trigger("queuePaused",this)}function l(){this.paused=!1,$("document").trigger("queueResumed",this),this.process()}function c(){return typeof this._id=="undefined"&&(this._id=-1),this._id++,this._id>1e4&&(this._id=0),this._id}function h(e,t){var n=e.id;for(var r in t)if(n==t[r].id){t.splice(r,1)
;break}}var e=function(){this.queueTypes={},this.queues={},this.registerQueueType("parallel",t),this.registerQueueType("serial",n),this.registerQueueType("single",r)};e.prototype.registerQueueType=function(e,t){return this.queueTypes[e]=t,this},e.prototype.createQueue=function(e,t,n){return this.queues[e]=new this.queueTypes[t](this,n),this},e.prototype.request=function(e,t,n,r,i){return this.queues[t].push(e,n,r,i),this};var t=function(e,t){this.manager=e,this.concurrent=t&&t.concurrent?t.concurrent:3,this.retries=t&&t.retries?t.retries:2};t.prototype.process=function(){if(this.paused||!this.queue.length)return;typeof this.running=="undefined"&&(this.running=[])
;while(this.running.length<this.concurrent){if(!this.queue.length)break;var e=this.queue.shift()
;e.req=s(e.path,e.options,this._done(e),this._fail(e)),e.tries++,this.running.push(e),$("document").trigger("requestInitiated",e)}},t.prototype.push=i,t.prototype.id=c,t.prototype.pause=f,t.prototype.resume=l,t.prototype._done=u,t.prototype._fail=a,t.prototype.abortAll=o;var n=function(e,t){this.manager=e,this.retries=t&&t.retries?t.retries:2};n.prototype.process=function(){typeof this.running=="undefined"&&(this.running=[])
;
if(this.paused||!this.queue.length||this.running.length)return;var e=this.queue.shift()
;e.req=s(e.path,e.options,this._done(e),this._fail(e)),e.tries++,this.running.push(e),$("document").trigger("requestInitiated",e)},n.prototype.push=i,n.prototype.id=c,n.prototype.pause=f,n.prototype.resume=l,n.prototype._done=u,n.prototype._fail=a,n.prototype.abortAll=o;var r=function(e,t){this.manager=e,this.retries=t&&t.retries?t.retries:2};return r.prototype.process=function(){if(this.paused||!this.queue.length)return;typeof this.running=="undefined"&&(this.running=[])
;var e=this.queue.shift()
;this.abortAll(),e.req=s(e.path,e.options,this._done(e),this._fail(e)),e.tries++,this.running.push(e),$("document").trigger("requestInitiated",e)},r.prototype.push=i,r.prototype.id=c,r.prototype.pause=f,r.prototype.resume=l,r.prototype._done=u,r.prototype._fail=a,r.prototype.abortAll=o,e}),function(e,t,n){function f(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function l(e,r){var i=this,s=n(i)
;
if(i.value==s.attr("placeholder")&&s.hasClass("placeholder"))if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"))
;
if(e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder"),i==t.activeElement&&i.select()}function c(){var e,t=this,r=n(t),i=r,s=this.id;
if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(o){e=n("<input>").attr(n.extend(f(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",l),r.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",s).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}var r="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),s=n.fn,o=n.valHooks,u,a;r&&i?(a=s.placeholder=function(){return this},a.input=a.textarea=!0):(a=s.placeholder=function(){var e=this;return e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":c}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=r,a.textarea=i,u={get:function(e){var t=n(e)
;return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=n(e)
;return i.data("placeholder-enabled")?(r==""?(e.value=r,e!=t.activeElement&&c.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},r||(o.input=u),i||(o.textarea=u),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(l)
;setTimeout(function(){e.each(c)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),n("vendor/placeholder.min",function(){}),function(e){e.gritter={},e.gritter.options={position:"",class_name:"",fade_in_speed:"medium",fade_out_speed:300,time:6e3},e.gritter.add=function(e){try{return t.add(e||{})}catch(n){var r="Gritter Error: "+n;typeof console!="undefined"&&console.error?console.error(r,e):alert(r)}},e.gritter.remove=function(e,n){t.removeSpecific(e,n||{})},e.gritter.removeAll=function(e){t.stop(e||{})};var t={position:"",fade_in_speed:"",fade_out_speed:"",time:"",_custom_timer:0,_item_count:0,_is_setup:0,_tpl_close:'<a class="gritter-close" href="#" tabindex="1">&times;</a>',_tpl_title:'<span class="gritter-title">[[title]]</span>',_tpl_item:'<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none" role="alert"><div class="gritter-top"></div><div class="gritter-item">[[close]][[image]]<div class="[[class_name]]">[[title]]<p>[[text]]</p></div><div style="clear:both"></div></div><div class="gritter-bottom"></div></div>',_tpl_wrap:'<div id="gritter-notice-wrapper"></div>',add:function(n){typeof n=="string"&&(n={text:n})
;
if(n.text===null)throw'You must supply "text" parameter.';this._is_setup||this._runSetup()
;var r=n.title,i=n.text,s=n.image||"",o=n.sticky||!1,u=n.class_name||e.gritter.options.class_name,a=e.gritter.options.position,f=n.time||"";this._verifyWrapper(),this._item_count++;var l=this._item_count,c=this._tpl_item;e(["before_open","after_open","before_close","after_close"]).each(function(r,i){t["_"+i+"_"+l]=e.isFunction(n[i])?n[i]:function(){}}),this._custom_timer=0,f&&(this._custom_timer=f)
;var h=s!=""?'<div style="background-image:url('+s+')" class="gritter-image" />':"",p=s!=""?"gritter-with-image":"gritter-without-image";r?r=this._str_replace("[[title]]",r,this._tpl_title):r="",c=this._str_replace(["[[title]]","[[text]]","[[close]]","[[image]]","[[number]]","[[class_name]]","[[item_class]]"],[r,i,this._tpl_close,h,this._item_count,p,u],c)
;
if(this["_before_open_"+l]()===!1)return!1;e("#gritter-notice-wrapper").addClass(a).append(c)
;var d=e("#gritter-item-"+this._item_count)
;return d.fadeIn(this.fade_in_speed,function(){t["_after_open_"+l](e(this))}),o||this._setFadeTimer(d,l),e(d).bind("mouseenter mouseleave",function(n){n.type=="mouseenter"?o||t._restoreItemIfFading(e(this),l):o||t._setFadeTimer(e(this),l),t._hoverState(e(this),n.type)}),e(d).find(".gritter-close").click(function(){return t.removeSpecific(l,{},null,!0),!1}),l},_countRemoveWrapper:function(t,n,r){n.remove(),this["_after_close_"+t](n,r),e(".gritter-item-wrapper").length==0&&e("#gritter-notice-wrapper").remove()},_fade:function(e,n,r,i){var r=r||{},s=typeof r.fade!="undefined"?r.fade:!0,o=r.speed||this.fade_out_speed,u=i;this["_before_close_"+n](e,u),i&&e.unbind("mouseenter mouseleave"),s?e.animate({opacity:0},o,function(){e.animate({height:0},300,function(){t._countRemoveWrapper(n,e,u)})}):this._countRemoveWrapper(n,e)},_hoverState:function(e,t){t=="mouseenter"?(e.addClass("hover"),e.find(".gritter-close").show()):(e.removeClass("hover"),e.find(".gritter-close").hide())},removeSpecific:function(t,n,r,i){if(!r)var r=e("#gritter-item-"+t)
;this._fade(r,t,n||{},i)},_restoreItemIfFading:function(e,t){clearTimeout(this["_int_id_"+t]),e.stop().css({opacity:"",height:""})},_runSetup:function(){for(opt in e.gritter.options)this[opt]=e.gritter.options[opt];this._is_setup=1},_setFadeTimer:function(e,n){var r=this._custom_timer?this._custom_timer:this.time;this["_int_id_"+n]=setTimeout(function(){t._fade(e,n)},r)},stop:function(t){var n=e.isFunction(t.before_close)?t.before_close:function(){},r=e.isFunction(t.after_close)?t.after_close:function(){},i=e("#gritter-notice-wrapper")
;n(i),i.fadeOut(function(){e(this).remove(),r()})},_str_replace:function(e,t,n,r){var i=0,s=0,o="",u="",a=0,f=0,l=[].concat(e),c=[].concat(t),h=n,p=c instanceof Array,d=h instanceof Array;h=[].concat(h),r&&(this.window[r]=0)
;for(i=0,a=h.length;i<a;i++){if(h[i]==="")continue;for(s=0,f=l.length;s<f;s++)o=h[i]+"",u=p?c[s]!==undefined?c[s]:"":c[0],h[i]=o.split(l[s]).join(u),r&&h[i]!==o&&(this.window[r]+=(o.length-h[i].length)/l[s].length)}return d?h:h[0]},_verifyWrapper:function(){e("#gritter-notice-wrapper").length==0&&e("body").append(this._tpl_wrap)}}}(jQuery),n("vendor/gritter",function(){}),e.config({shim:{"vendor/jquery":{exports:"$"},"/assets/views":{exports:"BLViews"},"vendor/konami":{exports:"konami"},"vendor/lodash":{exports:"_"},"vendor/engine.io":{exports:"eio"},"vendor/typeahead":{deps:["vendor/jquery"],exports:"typeahead"},"vendor/placeholder.min":{deps:["vendor/jquery"],exports:"placeholder"},"vendor/wookmark.min":{deps:["vendor/jquery"],exports:"wookmark"},"vendor/gritter":{deps:["vendor/jquery"],exports:"gritter"},app:{deps:["vendor/lodash","/assets/views","vendor/typeahead"]},"lib/find_blogs":{deps:["vendor/lodash","/assets/views","vendor/typeahead"]}}}),t(["app","lib/find_blogs","lib/requeue","vendor/placeholder.min","lib/spin","vendor/gritter"],function(e,t){function n(e){/chrome/.test(navigator.userAgent.toLowerCase())&&$(e).each(function(){var e=$(this)
;
if(e.css("background-image")){var t=e.css("background-image")
;setTimeout(function(){e.css("background-image",t)},1)}})}$("body").hasClass("find-blogs")?new t:new e,n(".logo"),n("[class*=icon]")}),n("main",function(){}),t(["main"])})()
;(function(e){if("function"==typeof bootstrap)bootstrap("jade",e)
;else if("object"==typeof exports)module.exports=e()
;else if("function"==typeof define&&define.amd)define(e)
;else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeJade=e}else"undefined"!=typeof window?window.jade=e():global.jade=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;
if(!u&&a)return a(o,!0)
;
if(i)return i(o,!0)
;throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o])
;return s})({1:[function(require,module,exports){

/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr)
;
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key)
;
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls)
;
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 * @api private
 */

function joinClasses(val) {
  return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('')
;
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"')
;
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'")
;
      } else if ('class' == key) {
        if (escaped && escaped[key]){
          if (val = exports.escape(joinClasses(val))) {
            buf.push(key + '="' + val + '"')
;
          }
        } else {
          if (val = joinClasses(val)) {
            buf.push(key + '="' + val + '"')
;
          }
        }
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"')
;
      } else {
        buf.push(key + '="' + val + '"')
;
      }
    }
  }

  return buf.join(' ')
;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str =  str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context)
;

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n')
;

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":2}],2:[function(require,module,exports){
// nothing to see here... no file methods for the browser

},{}]},{},[1])(1)
})
;
;
BLViews = {
"feed/no_posts_alert":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),feed = locals_.feed,sidebar = locals_.sidebar,t = locals_.t,baseUrl = locals_.baseUrl;buf.push("<li class=\"no-posts\">")
;
switch (feed.context.type){
case 'all':
if ( sidebar.data && sidebar.data.list.length > 0)
{
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_recent_posts_alert', { defaultValue: 'There are no posts from the past week.' })) ? "" : jade.interp)) + "</div>")
;
}
else
{
buf.push("<div class=\"alert no-posts-alert\">")
;
var followBlogsLink = '<a href="' + baseUrl + '/blogs">'
var followBlogsLinkEnd = '</a>'
buf.push((null == (jade.interp = t('not_following_any_blogs_alert', { defaultValue: 'You are not following any blogs yet. Go to #{followBlogsLink} blogs #{followBlogsLinkEnd} and add some!', escapeInterpolation: true, followBlogsLink: followBlogsLink, followBlogsLinkEnd: followBlogsLinkEnd })) ? "" : jade.interp) + "</div>")
;
}
  break;
case 'liked':
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_liked_posts_alert', { defaultValue: 'You have no liked posts.' })) ? "" : jade.interp)) + "</div>")
;
  break;
case 'following':
buf.push("<div class=\"alert no-friends-alert\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "/friends") }, {"href":true})) + "><img src=\"/assets/gfx/friends-promo.png\"/></a></div>")
;
  break;
case 'group':
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_recent_posts_alert', { defaultValue: 'There are no posts from the past week.' })) ? "" : jade.interp)) + "</div>")
;
  break;
case 'blog':
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_recent_posts_alert', { defaultValue: 'There are no posts from the past week.' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<a" + (jade.attrs({ 'href':("" + (baseUrl) + "/blog/" + (feed.context.id) + "") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('visit_blog', { defaultValue: 'Visit blog' })) ? "" : jade.interp)) + "</a>.</div>")
;
  break;
}
buf.push("</li>")
;;return buf.join("")
;
}
,
"feed/toolbar":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),feed = locals_.feed,t = locals_.t,groups = locals_.groups;var context = (feed.context)
;
var image_settings_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<li class=\"image-settings\"><ul><li><a" + (jade.attrs({ 'href':("#"), "class": [('small'),([ context.imagesize === "small" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_small_images', { defaultValue: 'Small images' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ 'href':("#"), "class": [('big'),([ context.imagesize === "big" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_big_images', { defaultValue: 'Big images' })) ? "" : jade.interp)) + "</a></li></ul></li>")
;
};
var settings_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<a href=\"#settings\" data-trigger=\"toolbar-dropdown\" class=\"settings button\"><div class=\"settings-icon icon\"></div><div class=\"arrow-down-icon icon\"></div></a><ul id=\"settings\" class=\"dropdown-menu\">")
;
if ( context.type == 'all' || context.type == 'group')
{
buf.push("<li><ul><li><a" + (jade.attrs({ 'href':("#"), "class": [('by-blog'),([ context.format === "cluster" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_blog', { defaultValue: 'Sort by blog' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ 'href':("#"), "class": [('by-date-newest'),([ context.format === "list" && context.sortorder === "newest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_newest', { defaultValue: 'Sort by newest first' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ 'href':("#"), "class": [('by-date-oldest'),([ context.format === "list" && context.sortorder === "oldest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_oldest', { defaultValue: 'Sort by oldest first'})) ? "" : jade.interp)) + "</a></li></ul></li>")
;
image_settings_mixin()
;
}
else
{
buf.push("<li><ul><li><a" + (jade.attrs({ 'href':("#"), "class": [('newest'),([ context.sortorder === "newest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_newest_blog', { defaultValue: 'Newest first' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ 'href':("#"), "class": [('oldest'),([ context.sortorder === "oldest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_oldest_blog', { defaultValue: 'Oldest first'})) ? "" : jade.interp)) + "</a></li></ul></li>")
;
image_settings_mixin()
;
}
buf.push("</ul>")
;
};
var classes = [];
if (context.type === 'following' || context.type === 'liked') {
classes.push('desktop-hidden')
}
buf.push("<ul" + (jade.attrs({ "class": [('feed-toolbar'),(classes)] }, {"class":true})) + "><li><a href=\"#\" class=\"toggle-sidebar button\"><span class=\"sidebar-context\">" + (jade.escape(null == (jade.interp = t('toolbar_all_unread', { defaultValue: 'All unread' })) ? "" : jade.interp)) + "</span><div class=\"arrow-down-icon\"></div></a></li>")
;
switch (context.type){
case 'all':
buf.push("<li><a href=\"/_/post/markallread\" class=\"read button\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_all_as_read', { defaultValue: 'Mark all as read' })) ? "" : jade.interp)) + "</a></li>")
;
  break;
case 'blog':
buf.push("<li><a" + (jade.attrs({ 'href':("/_/blog/read/" + (context.id) + ""), "class": [('read'),("button")] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_mark_blog_as_read', { defaultValue: 'Mark blog as read' })) ? "" : jade.interp)) + "</a></li><li><a href=\"#change-group\" data-trigger=\"toolbar-dropdown\" class=\"blog-group button\"><span class=\"add-to-group\">" + (jade.escape(null == (jade.interp = t('toolbar_add_to_group', { defaultValue: 'Add to a group' })) ? "" : jade.interp)) + "</span><span class=\"change-group\">" + (jade.escape(null == (jade.interp = t('toolbar_change_group', { defaultValue: 'Change group'})) ? "" : jade.interp)) + "</span><div class=\"arrow-down-icon icon\"></div></a><ul id=\"change-group\" class=\"dropdown-menu\">")
;
if ( locals.groups)
{
buf.push("<li><ul class=\"groups\">")
;
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var group = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ 'href':("#"), 'data-group-id':("" + (group.group_id) + ""), 'data-trigger':("change-group") }, {"href":true,"data-group-id":true,"data-trigger":true})) + ">" + (null == (jade.interp = [ group.group_id == 1 ? t('toolbar_unsorted_blogs', { defaultValue: 'Unsorted blogs' }) : group.group_name ]) ? "" : jade.interp) + "</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var group = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ 'href':("#"), 'data-group-id':("" + (group.group_id) + ""), 'data-trigger':("change-group") }, {"href":true,"data-group-id":true,"data-trigger":true})) + ">" + (null == (jade.interp = [ group.group_id == 1 ? t('toolbar_unsorted_blogs', { defaultValue: 'Unsorted blogs' }) : group.group_name ]) ? "" : jade.interp) + "</a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></li>")
;
}
buf.push("<li><form action=\"post\" class=\"create-group\"><fieldset><label for=\"new-group\">" + (jade.escape(null == (jade.interp = t('toolbar_create_new_group_label', { defaultValue: 'Create new group' })) ? "" : jade.interp)) + "</label><input" + (jade.attrs({ 'id':('new-group'), 'type':("text"), 'name':("group-name"), 'placeholder':(t('toolbar_create_new_group_placeholder', { defaultValue: 'Create new group' })) }, {"type":true,"name":true,"placeholder":true})) + "/><input" + (jade.attrs({ 'type':("submit"), 'value':(t('toolbar_create_new_group_button', { defaultValue: 'Create' })), "class": [("button")] }, {"type":true,"class":true,"value":true})) + "/></fieldset></form></li></ul></li><li><a href=\"#\" class=\"unfollow-blog button\">" + (jade.escape(null == (jade.interp = t('toolbar_unfollow', { defaultValue: 'Unfollow' })) ? "" : jade.interp)) + "</a></li>")
;
  break;
case 'group':
buf.push("<li><a" + (jade.attrs({ 'href':("/_/group/read/" + (context.id) + ""), "class": [('read'),("button")] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_mark_group_as_read', { defaultValue: 'Mark group as read' })) ? "" : jade.interp)) + "</a></li>")
;
  break;
}
buf.push("<li>")
;
settings_mixin()
;
buf.push("</li><div id=\"markAllReadModal\" class=\"modal\"><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_label_mark', { defaultValue: 'Mark' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<span class=\"context\"></span>" + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_label_as_read', { defaultValue: 'as read' })) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><span class=\"num-unread\"></span>" + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_body', { defaultValue: 'posts will be marked as read'})) ? "" : jade.interp)) + "</div><div class=\"modal-footer\"><a data-trigger=\"hide\" class=\"button\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_cancel', { defaultValue: 'Cancel' })) ? "" : jade.interp)) + "</a><a data-trigger=\"confirm\" data-confirm=\"markRead\" class=\"button primary\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_confirm', { defaultValue: 'Mark as Read' })) ? "" : jade.interp)) + "</a></div></div></ul>")
;;return buf.join("")
;
}
,
"sidebar/blog":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),blog = locals_.blog,context = locals_.context;buf.push("<a" + (jade.attrs({ 'href':("/feed/blog/" + (blog.blog_id) + ""), 'draggable':("true"), "class": [('blog'),([ context.id == blog.blog_id ? "selected" : "" ])] }, {"class":true,"href":true,"draggable":true})) + "><span class=\"name\">" + (null == (jade.interp = blog.blog_name) ? "" : jade.interp) + "</span>")
;
if ( blog.num_unread > 0)
{
buf.push("<span class=\"num-unread\">" + (jade.escape(null == (jade.interp = blog.num_unread) ? "" : jade.interp)) + "</span>")
;
}
else
{
buf.push("<span class=\"num-unread\"></span>")
;
}
buf.push("</a>")
;;return buf.join("")
;
}
,
"viewer/viewer":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),pageTitle = locals_.pageTitle,canonical = locals_.canonical,hide_smart_banner = locals_.hide_smart_banner,meta_tags = locals_.meta_tags,cssFilePath = locals_.cssFilePath,extraScripts = locals_.extraScripts,ads = locals_.ads,langData = locals_.langData,no = locals_.no,se = locals_.se,us = locals_.us,current_user = locals_.current_user,showSignupModal = locals_.showSignupModal,t = locals_.t,clientData = locals_.clientData,jsLastModified = locals_.jsLastModified,blog = locals_.blog,hideDescription = locals_.hideDescription,baseUrl = locals_.baseUrl,frameLink = locals_.frameLink,post = locals_.post;buf.push("<!DOCTYPE html><html" + (jade.attrs({ terse: true, 'lang':(locals.currentLanguage || 'en'), "class": [('viewer')] }, {"lang":true})) + "><head><title>" + (jade.escape(null == (jade.interp = pageTitle || 'mydropintheoceans') ? "" : jade.interp)) + "</title>")
;
if ( (canonical))
{
buf.push("<link" + (jade.attrs({ terse: true, 'rel':("canonical"), 'href':("" + (canonical) + "") }, {"rel":true,"href":true})) + ">")
;
}
buf.push("<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">")
;
if ( (!hide_smart_banner))
{
buf.push("<meta name=\"apple-itunes-app\" content=\"app-id=421818340\">")
;
}
if ( (meta_tags))
{
// iterate meta_tags
;(function(){
  var $$obj = meta_tags;
  if ('number' == typeof $$obj.length) {

    for (var type = 0, $$l = $$obj.length; type < $$l; type++) {
      var val = $$obj[type];

switch (type){
case 'meta':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'facebook':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var property = 0, $$l = $$obj.length; property < $$l; property++) {
      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var property in $$obj) {
      $$l++;      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'twitter':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
}
    }

  } else {
    var $$l = 0;
    for (var type in $$obj) {
      $$l++;      var val = $$obj[type];

switch (type){
case 'meta':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'facebook':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var property = 0, $$l = $$obj.length; property < $$l; property++) {
      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var property in $$obj) {
      $$l++;      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'twitter':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
}
    }

  }
}).call(this)
;

}
buf.push("<link rel=\"shortcut icon\" href=\"/assets/gfx/favicon.ico\"><link" + (jade.attrs({ terse: true, 'href':(cssFilePath), 'rel':("stylesheet") }, {"href":true,"rel":true})) + "><script>document.documentElement.className += \" js\";\n</script>")
;
if ( locals.extraScripts)
{
buf.push("" + (((jade.interp = extraScripts.join('\n')) == null ? '' : jade.interp)) + "")
;
}
buf.push("<script>var BLAdTags = " + (((jade.interp = JSON.stringify(ads)) == null ? '' : jade.interp)) + ";\nvar BLLang = " + (((jade.interp = langData || {}) == null ? '' : jade.interp)) + ";\n</script><!--[if lt IE 9]><script src=\"/assets/js/vendor/respond.min.js\"></script><script>document.documentElement.className += \" ie lt9\";\ndocument.createElement('header')
;\ndocument.createElement('nav')
;\ndocument.createElement('section')
;\ndocument.createElement('article')
;\ndocument.createElement('footer')
;\ndocument.createElement('time')
;\n</script><![endif]-->")
;
var GENERIC_VISIT = 'UA-3062524-1'
var COUNTRY_NO    = 'UA-3062524-8'
var COUNTRY_SE    = 'UA-3062524-9'
var COUNTRY_US    = 'UA-3062524-10'
var MOBILE_ALL    = 'UA-3062524-14'
var MOBILE_WEB    = 'UA-3062524-18'
var DEFAULT       = 'UA-3062524-12'
var countryTag    = ''
switch (locals.country){
case no:
var countryTag = COUNTRY_NO
  break;
case se:
var countryTag = COUNTRY_SE
  break;
case us:
var countryTag = COUNTRY_US
  break;
default:
var countryTag = COUNTRY_US
  break;
}
var signedin = (current_user.userid) ? 'yes' : 'no'
buf.push("<!-- Google Analytics--><script>var _gaq = _gaq || [];\nvar _gatags = [];\nvar url = document.location.pathname;\n_gatags.push('bl')
;\n_gaq.push(['bl._setAccount', '" + (jade.escape((jade.interp = GENERIC_VISIT) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl._setCustomVar',3,'category','0',3])
;\n_gaq.push(['bl._trackPageview', url])
;\n_gatags.push('bl_local')
;\n_gaq.push(['bl_local._setAccount', '" + (jade.escape((jade.interp = countryTag) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl_local._trackPageview',url])
;\n_gaq.push(['bl_local._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl_local._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl_local._setCustomVar',3,'category','0',3])
;\n_gatags.push('bl_page_1')
;\nvar tags = [];\nswitch ('" + (jade.escape((jade.interp = locals.deviceFamily) == null ? '' : jade.interp)) + "') {\n  case 'mobile':\n    tags.push('" + (jade.escape((jade.interp = MOBILE_ALL) == null ? '' : jade.interp)) + "')
;\n    tags.push('" + (jade.escape((jade.interp = MOBILE_WEB) == null ? '' : jade.interp)) + "')
;\n    break;\n  default:\n    tags.push('" + (jade.escape((jade.interp = DEFAULT) == null ? '' : jade.interp)) + "')
;\n}\nfor (var tag in tags) {\n  _gaq.push(['bl_page_1._setAccount', tags[tag]])
;\n  _gaq.push(['bl_page_1._trackPageview', url])
;\n  _gaq.push(['bl_page_1._setCustomVar',1,'adview','yes',3])
;\n  _gaq.push(['bl_page_1._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n  _gaq.push(['bl_page_1._setCustomVar',3,'category','0',3])
;\n}\n(function() {\n  var ga    = document.createElement('script')
;\n  ga.type   = 'text/javascript';\n  ga.async  = true;\n  ga.src    = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n  var s     = document.getElementsByTagName('script')[0];\n  s.parentNode.insertBefore(ga, s)
;\n})()
;\n</script><!-- QuantCast--><script>var _qevents = _qevents || [];\n\n(function() {\n  var elem = document.createElement('script')
;\n  elem.src = (document.location.protocol == \"https:\" ? \"https://secure\" : \"http://edge\") + \".quantserve.com/quant.js\";\n  elem.async = true;\n  elem.type = \"text/javascript\";\n  var scpt = document.getElementsByTagName('script')[0];\n  scpt.parentNode.insertBefore(elem, scpt)
;\n})()
;\n\n_qevents.push({ qacct:\"p-6EEmuZFR-4XGE\" })
;\n</script><noscript><div style=\"display:none\"><img src=\"//pixel.quantserve.com/pixel/p-6EEmuZFR-4XGE.gif\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"></div></noscript><!-- ComScore--><script>var _comscore = _comscore || [];\n_comscore.push({ c1: \"2\", c2: \"6035233\" })
;\n(function() {\n  var s   = document.createElement(\"script\"), el = document.getElementsByTagName(\"script\")[0];\n  s.async = true;\n  s.src   = (document.location.protocol == \"https:\" ? \"https://sb\" : \"http://b\") + \".scorecardresearch.com/beacon.js\";\n  el.parentNode.insertBefore(s, el)
;\n})()
;</script><noscript><img src=\"https://b.scorecardresearch.com/p?c1=2&amp;c2=6035233&amp;cv=2.0&amp;cj=1\"></noscript><!-- DFP tracking ad--><div data-placement=\"tracking\" class=\"ad_placement\"></div></head><body" + (jade.attrs({ terse: true, 'data-page-type':('viewer'), 'data-signup-modal':("" + (showSignupModal) + "") }, {"data-page-type":true,"data-signup-modal":true})) + "><div id=\"fb-root\"></div><noscript><div class=\"alert-news\">" + (jade.escape(null == (jade.interp = t('no_js_no_play', { defaultValue : 'It looks like your browser doesn\'t support javascript. This page will work a lot better for you if you activate javascript or download a new browser like'})) ? "" : jade.interp)) + " <a href=\"https://www.google.com/chrome/\" target=\"_blank\">Google Chrome</a>.</div></noscript><script>var BLClientData = " + (((jade.interp = JSON.stringify(clientData)) == null ? '' : jade.interp)) + ";</script><script" + (jade.attrs({ terse: true, 'src':("/assets/js/all-" + (jsLastModified) + ".js") }, {"src":true})) + "></script><div class=\"modal-backdrop\"></div><div" + (jade.attrs({ terse: true, 'data-blog-id':("" + (blog.id) + ""), 'data-blog-name':("" + (blog.name) + ""), "class": [('bl-banners')] }, {"data-blog-id":true,"data-blog-name":true})) + "><div class=\"signup-banner-container\"><div class=\"signup-banner\"><div class=\"small-only\"><h1>" + (null == (jade.interp = t('signup_banner_dont_miss', { defaultValue: 'Stay updated', name: blog.name, context: 'small' })) ? "" : jade.interp) + "</h1></div><div class=\"medium-and-up\"><h1>" + (null == (jade.interp = t('signup_banner_dont_miss', { defaultValue: 'Stay updated', name: blog.name })) ? "" : jade.interp) + "</h1></div>")
;
if ( (!hideDescription))
{
buf.push("<h2>" + (jade.escape(null == (jade.interp = t('signup_banner_description', { defaultValue: 'mydropintheoceans helps you follow the blogs you read by letting you know when they update.' })) ? "" : jade.interp)) + "</h2>")
;
}
buf.push("<div class=\"sign-up-buttons\"><a" + (jade.attrs({ terse: true, 'href':("#"), 'data-blog-id':(blog.blog_id), "class": [('fb-sign-up')] }, {"href":true,"data-blog-id":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_sign_up_with_facebook', { defaultValue: 'Sign up with Facebook'})) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/signup/" + (blog.blog_id) + ""), "class": [('email-sign-up')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('follow_blog_modal_sign_up_with_email', { defaultValue: 'Sign up with email'})) ? "" : jade.interp)) + "</a></div></div></div><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/"), "class": [('bl-logo')] }, {"href":true})) + "></a><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/login"), "class": [('log-in')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_login', { defaultValue: 'Login' })) ? "" : jade.interp)) + "</a><a" + (jade.attrs({ terse: true, 'href':("" + (frameLink) + ""), "class": [('close-frame')] }, {"href":true})) + ">&times;</a><div class=\"share-banner\"><div class=\"share-label\">")
;
if ( (post))
{
buf.push(null == (jade.interp = t('viewer_share_label', { context: 'post', defaultValue: 'Share this post', title: post.title })) ? "" : jade.interp)
;
}
else
{
buf.push(null == (jade.interp = t('viewer_share_label', { context: 'blog', defaultValue: 'Share this blog', title: blog.name })) ? "" : jade.interp)
;
}
buf.push("</div>")
;
if ( (post))
{
buf.push("<div class=\"share-list\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon-background\"><div class=\"pinterest-icon\"></div></div></a><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon-background\"><div class=\"facebook-icon\"></div></div></a><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon-background\"><div class=\"twitter-icon\"></div></div></a><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=" + (encodeURIComponent(post.title)) + " from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon-background\"><div class=\"email-icon\"></div></div></a></div>")
;
}
else
{
buf.push("<div class=\"share-list\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl + '/blog/' + blog.id) + ""), 'data-func':("facebookPost"), 'data-desc':(blog.description ? "" + (blog.description) + "" : null), 'data-name':("" + (blog.name) + ""), 'data-caption':("" + (baseUrl + '/blog/' + blog.id) + ""), 'data-pic':(blog.snap ? "" + (blog.snap) + "" : null), 'data-blog-id':("" + (blog.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-blog-id":true})) + "><div class=\"facebook-icon-background\"><div class=\"facebook-icon\"></div></div></a><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(baseUrl + '/blog/' + blog.id)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(blog.name)) + ""), 'data-func':("tweet"), 'data-blog-id':("" + (blog.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-blog-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon-background\"><div class=\"twitter-icon\"></div></div></a><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(blog.name)) + " on mydropintheoceans %0A" + (encodeURIComponent(baseUrl + '/blog/' + blog.id)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=" + (encodeURIComponent(blog.name)) + " from mydropintheoceans"), 'data-func':("emailPost"), 'data-blog-id':("" + (blog.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-blog-id":true,"target":true})) + "><div class=\"email-icon-background\"><div class=\"email-icon\"></div></div></a></div>")
;
}
buf.push("</div></div><div class=\"bl-viewer-container\"><iframe" + (jade.attrs({ terse: true, 'frameborder':("0"), 'src':("" + (frameLink) + ""), "class": [('bl-viewer')] }, {"frameborder":true,"src":true})) + "></iframe></div></body></html>")
;;return buf.join("")
;
}
,
"profiles/adult_content_followers":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),followers = locals_.followers,t = locals_.t;buf.push("<li class=\"no-posts-alert\">" + (jade.escape(null == (jade.interp = followers) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)))
;
if ( followers === "1")
{
buf.push(jade.escape(null == (jade.interp = t('blog_followers_one', { defaultValue: 'follower' })) ? "" : jade.interp))
;
}
else
{
buf.push(jade.escape(null == (jade.interp = t('blog_followers', { defaultValue: 'followers' })) ? "" : jade.interp))
;
}
buf.push("</li>")
;;return buf.join("")
;
}
,
"feed/post":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),post = locals_.post,count = locals_.count,default_avatar = locals_.default_avatar,avatar = locals_.avatar,baseUrl = locals_.baseUrl,t = locals_.t,contextType = locals_.contextType,imagesize = locals_.imagesize,url = locals_.url,likeSpan = locals_.likeSpan,likeSpanEnd = locals_.likeSpanEnd;
if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "/><div" + (jade.attrs({ 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "/></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
};return buf.join("")
;
}
,
"gritter/blog_followed":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;var feedLink = '<a href="/feed">';
var feedLinkEnd = '</a>';
buf.push(null == (jade.interp = t('gritter_blog_followed', { defaultValue: 'was added to __feedLinkHTML__ your Feed. __feedLinkEndHTML__', escapeInterpolation: true, feedLink: feedLink, feedLinkEnd: feedLinkEnd })) ? "" : jade.interp)
;;return buf.join("")
;
}
,
"feed/likes":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),post = locals_.post,t = locals_.t,likeSpan = locals_.likeSpan,likeSpanEnd = locals_.likeSpanEnd;buf.push("<a" + (jade.attrs({ 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;;return buf.join("")
;
}
,
"partials/follow_user_modal":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t,user = locals_.user,baseUrl = locals_.baseUrl;buf.push("<div id=\"followUserModal\" class=\"modal follow-modal\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-body\"><h4>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_title', { defaultValue: 'Sign up to follow'})) ? "" : jade.interp)) + "<span class=\"user-name\">" + (null == (jade.interp = user.first_name) ? "" : jade.interp) + "</span></h4><p>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_blurb', { defaultValue: 'mydropintheoceans helps you follow the blogs you read by letting you know when they update.'})) ? "" : jade.interp)) + "</p><a" + (jade.attrs({ 'href':("#"), 'data-user-id':(user.id), "class": [('fb-sign-up')] }, {"href":true,"data-user-id":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_sign_up_with_facebook', { defaultValue: 'Sign up with Facebook'})) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ 'href':("" + (baseUrl) + "/signup"), "class": [('email-sign-up')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('follow_blog_modal_sign_up_with_email', { defaultValue: 'Sign up with email'})) ? "" : jade.interp)) + "</a><p>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_have_an_account', { defaultValue: 'Already have an account?' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<a" + (jade.attrs({ 'href':("" + (baseUrl) + "/login?redirect=/user/" + (user.user_id) + ""), "class": [('login')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('follow_blog_modal_login', { defaultValue: 'Login' })) ? "" : jade.interp)) + "</a></p></div></div>")
;;return buf.join("")
;
}
,
"partials/notification":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),cluster = locals_.cluster,order = locals_.order,default_avatar = locals_.default_avatar,avatar = locals_.avatar,base_url = locals_.base_url,t = locals_.t,turnOffAvatar = locals_.turnOffAvatar;var type = cluster.type
var first = cluster.events[0]
var numPeople = cluster.events.length
var otherPeople = numPeople-1
var item = cluster.item
var displayAvatar = true;
var displayItem = true;
switch (type) {
case 'milestone:blog_followers':
displayAvatar = false;
displayItem = true;
break;
}
var pad_class = ((numPeople == 1 && displayAvatar == true) ? 'notification show-avatar' : 'notification')
var pad_class = ((type == 'like:yourpost' || type == 'follow:yourblog' || type == 'milestone:blog_followers') ? pad_class + ' show-item' : pad_class)
buf.push("<li" + (jade.attrs({ 'data-order':(order), "class": [(pad_class)] }, {"class":true,"data-order":true})) + ">")
;
if ( (numPeople == 1) && (displayAvatar))
{
var path = (first.avatar == default_avatar ? avatar : first.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (base_url) + "" + (first.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + ""), "class": [('avatar')] }, {"src":true})) + "/></a>")
;
}
var userLink = '<a href="' + base_url + first.profile_link + '">' + first.first_name + '</a>'
if ( type == 'like:yourpost')
{
buf.push("<a" + (jade.attrs({ 'href':("" + (base_url) + "" + (item.link) + ""), 'style':("background-image:url(" + (item.CDN_thumb) + ")"), "class": [('item-frame')] }, {"href":true,"style":true})) + "></a>")
;
var modalLink = '<a href="#" data-trigger="like-modal" data-blog-id="' + item.blog_id + '" data-post-id="' + item.post_id + '" data-likes="' + numPeople + '">'
var modalLinkEnd = '</a>'
var postLink = '<a href="' + base_url + item.link + '">' + item.title + '</a>'
if ( otherPeople == 0)
{
buf.push(null == (jade.interp = t('notif_like_your_post', { context: 'zero', defaultValue: 'Someone has recently liked one of your posts', escapeInterpolation: true, userLink: userLink, modalLink: modalLink, modalLinkEnd: modalLinkEnd, postLink: postLink })) ? "" : jade.interp)
;
}
else
{
buf.push(null == (jade.interp = t('notif_like_your_post', { count: otherPeople, defaultValue: 'Your post has gained recent likes', escapeInterpolation: true, userLink: userLink, modalLink: modalLink, modalLinkEnd: modalLinkEnd, postLink: postLink })) ? "" : jade.interp)
;
}
}
else if ( type == 'follow:you')
{
var modalLink = '<a href="#" data-trigger="follower-modal">'
var modalLinkEnd = '</a>'
if ( otherPeople == 0)
{
buf.push(null == (jade.interp = t('notif_follow_you', { context: 'zero', defaultValue: 'You have a new follower', escapeInterpolation: true, userLink: userLink, modalLink: modalLink, modalLinkEnd: modalLinkEnd })) ? "" : jade.interp)
;
}
else
{
buf.push(null == (jade.interp = t('notif_follow_you', { count: otherPeople, defaultValue: 'You have new followers', escapeInterpolation: true, userLink: userLink, modalLink: modalLink, modalLinkEnd: modalLinkEnd })) ? "" : jade.interp)
;
}
}
else if ( type == 'follow:yourblog')
{
buf.push("<a" + (jade.attrs({ 'href':("" + (base_url) + "/blog/" + (item.blog_id) + ""), 'style':("background-image:url(" + (item.snap) + ")"), "class": [('item-frame')] }, {"href":true,"style":true})) + "></a>")
;
var modalLink = '<a href="#" data-trigger="follower-modal">'
var modalLinkEnd = '</a>'
var blogLink = '<a href="' + base_url + '/blog/' + item.blog_id + '">' + item.name + '</a>'
if ( otherPeople == 0)
{
buf.push(null == (jade.interp = t('notif_follow_your_blog', { context: 'zero', defaultValue: 'Your blog has a new follower', escapeInterpolation: true, userLink: userLink, modalLink: modalLink, modalLinkEnd: modalLinkEnd, blogLink: blogLink })) ? "" : jade.interp)
;
}
else
{
buf.push(null == (jade.interp = t('notif_follow_your_blog', { count: otherPeople, defaultValue: 'Your blog has new followers', escapeInterpolation: true, userLink: userLink, modalLink: modalLink, modalLinkEnd: modalLinkEnd, blogLink: blogLink })) ? "" : jade.interp)
;
}
}
else if ( type == 'friend_join:fb')
{
buf.push(null == (jade.interp = t('notif_friend_from_fb', { defaultValue: 'A friend from Facebook has recently joined mydropintheoceans', escapeInterpolation: true, userLink: userLink })) ? "" : jade.interp)
;
}
else if ( type == 'intro:welcome')
{
buf.push(null == (jade.interp = t('notif_intro_welcome', { defaultValue: 'Welcome to mydropintheoceans!', escapeInterpolation: true, userLink: userLink })) ? "" : jade.interp)
;
}
else if ( type == 'intro:instructions')
{
var blogsLink = '<a href="/blogs">'
var blogsLinkEnd = '</a>'
var peopleLink = '<a href="/friends">';
var peopleLinkEnd = '</a>'
buf.push(null == (jade.interp = t('notif_intro_instructions', { defaultValue: 'Here\'s how to start: follow some blogs and then some people. Have fun!', escapeInterpolation: true, userLink: userLink, blogsLink: blogsLink, blogsLinkEnd: blogsLinkEnd, peopleLink: peopleLink, peopleLinkEnd: peopleLinkEnd })) ? "" : jade.interp)
;
}
else if ( type == 'milestone:blog_followers')
{
buf.push("<a" + (jade.attrs({ 'href':("" + (base_url) + "/blog/" + (item.blog_id) + ""), 'style':("background-image:url(" + (item.snap) + ")"), "class": [('item-frame')] }, {"href":true,"style":true})) + "></a>")
;
var blogLink = '<a href="' + base_url + '/blog/' + item.blog_id + '">' + item.name + '</a>'
turnOffAvatar = true
buf.push(null == (jade.interp = t('notif_milestone_blog_followers', { defaultValue: 'Your blog hit a follower milestone!', escapeInterpolation: true, blogLink: blogLink, followers: first.blog_followers})) ? "" : jade.interp)
;
}
buf.push("<div class=\"timestamp\">" + (jade.escape((jade.interp = cluster.date) == null ? '' : jade.interp)) + "</div></li>")
;;return buf.join("")
;
}
,
"posts/curator_blog":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),blog = locals_.blog,t = locals_.t;var followers_mixin = function(num){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var followers = (num)
;
if ( (num >= 10000))
{
var followers = (Math.round(followers/1000) + 'k')
;
}
buf.push(jade.escape(null == (jade.interp = followers) ? "" : jade.interp))
;
};
buf.push("<li" + (jade.attrs({ 'data-blog-id':(blog.blog_id), 'data-blog-name':(blog.name), "class": [('curator-item'),('blog'),([ blog.following === "following" ? "following" : ""])] }, {"class":true,"data-blog-id":true,"data-blog-name":true})) + "><a" + (jade.attrs({ 'href':("/_/blog/follow/" + (blog.blog_id) + ""), "class": [('follow')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('blog_follow_button', { defaultValue: 'Follow' })) ? "" : jade.interp)) + "</a><a" + (jade.attrs({ 'href':("/_/blog/unfollow/" + (blog.blog_id) + ""), "class": [('unfollow')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('blog_unfollow_button', { defaultValue: 'Following' })) ? "" : jade.interp)) + "</a><a" + (jade.attrs({ 'href':("/blog/" + (blog.blog_id) + ""), "class": [('title')] }, {"href":true})) + "><h3>" + (null == (jade.interp = blog.name) ? "" : jade.interp) + "</h3></a><div class=\"followers\">")
;
if ( blog.followers)
{
if ( blog.followers == 1)
{
buf.push(jade.escape(null == (jade.interp = t('blog_followers_one', { defaultValue: '1 follower' })) ? "" : jade.interp))
;
}
else
{
followers_mixin(blog.followers)
;
buf.push((jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + (jade.escape(null == (jade.interp = t('blog_followers', { defaultValue: 'followers' })) ? "" : jade.interp)))
;
}
}
buf.push("</div>")
;
if ( blog.posts)
{
buf.push("<ol class=\"posts\">")
;
for (var i = 0; i < 3; i++)
{
var post = blog.posts[i] || {};
buf.push("<li class=\"post\"><a" + (jade.attrs({ 'href':("/blog/" + (blog.blog_id) + ""), "class": [('post-link')] }, {"href":true})) + "><div class=\"post-title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</div>")
;
if ( post.media)
{
buf.push("<div" + (jade.attrs({ 'title':(post.title), 'style':("background-image:url(" + post.CDN_thumb + ")"), "class": [('post-cover')] }, {"title":true,"style":true})) + "></div>")
;
}
buf.push("</a></li>")
;
}
buf.push("</ol>")
;
}
buf.push("</li>")
;;return buf.join("")
;
}
,
"partials/flag_blog_popover":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t,blog_flags = locals_.blog_flags,blog = locals_.blog;buf.push("<div class=\"flag-container\"><div class=\"flag-container-relative\"><a href=\"#\" data-trigger=\"popover\" data-po-position=\"bottom\" class=\"flag-blog\"><div class=\"flag-icon\"></div></a><div class=\"popover flag-popover\"><div class=\"arrow\"></div><div class=\"popover-content\"><header>" + (jade.escape(null == (jade.interp = t('flag_blog_popover_header', { defaultValue: 'Report Blog' })) ? "" : jade.interp)) + "</header><ul class=\"flag-list\">")
;
// iterate blog_flags
;(function(){
  var $$obj = blog_flags;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var flag = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-blog-id':(blog.blog_id), 'data-blog-name':(blog.name), 'data-flag-id':(flag.id) }, {"data-blog-id":true,"data-blog-name":true,"data-flag-id":true})) + ">" + (jade.escape(null == (jade.interp = t('flag_blog_flag_' + flag.id, { defaultValue: flag.name })) ? "" : jade.interp)) + "</li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var flag = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-blog-id':(blog.blog_id), 'data-blog-name':(blog.name), 'data-flag-id':(flag.id) }, {"data-blog-id":true,"data-blog-name":true,"data-flag-id":true})) + ">" + (jade.escape(null == (jade.interp = t('flag_blog_flag_' + flag.id, { defaultValue: flag.name })) ? "" : jade.interp)) + "</li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></div></div></div></div>")
;;return buf.join("")
;
}
,
"posts/like_modal_users":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),users = locals_.users,baseUrl = locals_.baseUrl,default_avatar = locals_.default_avatar,avatar = locals_.avatar;// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

buf.push("<li class=\"user\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path) }, {"src":true})) + "/><div class=\"user-name\">" + (jade.escape(null == (jade.interp = user.first_name) ? "" : jade.interp)))
;
if ( user.last_name)
{
buf.push(jade.escape(null == (jade.interp = ' ' + user.last_name) ? "" : jade.interp))
;
}
buf.push("</div></a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

buf.push("<li class=\"user\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path) }, {"src":true})) + "/><div class=\"user-name\">" + (jade.escape(null == (jade.interp = user.first_name) ? "" : jade.interp)))
;
if ( user.last_name)
{
buf.push(jade.escape(null == (jade.interp = ' ' + user.last_name) ? "" : jade.interp))
;
}
buf.push("</div></a></li>")
;
    }

  }
}).call(this)
;
;return buf.join("")
;
}
,
"posts/post_main":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),post = locals_.post,count = locals_.count,default_avatar = locals_.default_avatar,avatar = locals_.avatar,baseUrl = locals_.baseUrl,t = locals_.t,contextType = locals_.contextType,url = locals_.url;
if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : '', post.likes ? 'has-likes' : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div" + (jade.attrs({ "class": [('post'),([post.media ? 'has-media' : '', post.friends ? 'friends-post' : ''])] }, {"class":true})) + "><article" + (jade.attrs({ 'data-blog-id':("" + (post.blog.id) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_new_post) + ""), "class": [(c)] }, {"data-blog-id":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + "><a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div" + (jade.attrs({ 'style':("background-image:url(" + (post.media_new_post) + ")"), "class": [('media')] }, {"style":true})) + "></div>")
;
}
buf.push("</a><div class=\"post-content\">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ 'href':("/blog/" + (post.blog.id) + ""), 'rel':("author"), "class": [('author')] }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a><a" + (jade.attrs({ 'href':("" + (post.link) + "") }, {"href":true})) + "><time" + (jade.attrs({ 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a><a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\"><li><a" + (jade.attrs({ 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), 'data-tooltip':("tooltip"), 'data-title':(t('like', { defaultValue: 'Like' })), "class": [('like')] }, {"href":true,"data-tooltip":true,"data-title":true})) + "><div class=\"tiled-post-heart-icon\"></div></a><a" + (jade.attrs({ 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), 'data-tooltip':("tooltip"), 'data-title':(t('unlike', { defaultValue: 'Unlike' })), "class": [('unlike')] }, {"href":true,"data-tooltip":true,"data-title":true})) + "><div class=\"tiled-post-heart-icon\"></div></a><a" + (jade.attrs({ 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), "class": [('total-likes')] }, {"href":true})) + ">")
;
if ( post.likes)
{
buf.push(jade.escape(null == (jade.interp = post.likes) ? "" : jade.interp))
;
}
buf.push("</a></li>")
;
if ( (readable))
{
buf.push("<li><a" + (jade.attrs({ 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), 'data-tooltip':("tooltip"), 'data-title':(t('mark_as_read', { defaultValue: 'Mark as read' })), "class": [('read')] }, {"href":true,"data-tooltip":true,"data-title":true})) + "><div class=\"mark-as-read-icon\"></div></a><a" + (jade.attrs({ 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), 'data-tooltip':("tooltip"), 'data-title':(t('mark_as_unread', { defaultValue: 'Mark as unread' })), "class": [('unread')] }, {"href":true,"data-tooltip":true,"data-title":true})) + "><div class=\"mark-as-read-icon\"></div></a></li>")
;
}
buf.push("<li><a" + (jade.attrs({ 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-tooltip':("tooltip"), 'data-title':(t('share', { defaultValue: 'Share' })), 'data-trigger':("modal"), "class": [('share')] }, {"href":true,"data-tooltip":true,"data-title":true,"data-trigger":true})) + "><div class=\"tiled-post-share-icon\"></div></a></li></ul></div></article></div><ul" + (jade.attrs({ 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
};return buf.join("")
;
}
,
"gritter/post_liked":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),username = locals_.username,t = locals_.t;var likesLink = '<a href="/' + username + '/likes">';
var likesLinkEnd = '</a>';
buf.push(null == (jade.interp = t('gritter_post_liked', { defaultValue: 'was saved to __likesLinkHTML__ your Likes.__likesLinkEndHTML__', escapeInterpolation: true, likesLink: likesLink, likesLinkEnd: likesLinkEnd })) ? "" : jade.interp)
;;return buf.join("")
;
}
,
"feed/end_of_feed":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;var followLink    = '<a href="/blogs" >'
var followLinkEnd = '</a>'
buf.push("<li class=\"end-of-feed\">" + (null == (jade.interp = t('end_of_feed', { defaultValue: 'All posts loaded.', escapeInterpolation: true, followLink: followLink, followLinkEnd: followLinkEnd })) ? "" : jade.interp) + "</li>")
;;return buf.join("")
;
}
,
"partials/visit_feed_popover":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<div id=\"visitFeedPopover\" class=\"popover onboarding-popover visit-feed-popover bottom\"><div class=\"arrow\"></div><div class=\"popover-content\"><p>" + (jade.escape(null == (jade.interp = t('visit_feed_popover', { defaultValue: 'Awesome! Whenever a blog updates, its posts will show up here!' })) ? "" : jade.interp)) + "</p></div></div>")
;;return buf.join("")
;
}
,
"partials/analytics":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),no = locals_.no,se = locals_.se,us = locals_.us,current_user = locals_.current_user;var GENERIC_VISIT = 'UA-3062524-1'
var COUNTRY_NO    = 'UA-3062524-8'
var COUNTRY_SE    = 'UA-3062524-9'
var COUNTRY_US    = 'UA-3062524-10'
var MOBILE_ALL    = 'UA-3062524-14'
var MOBILE_WEB    = 'UA-3062524-18'
var DEFAULT       = 'UA-3062524-12'
var countryTag    = ''
switch (locals.country){
case no:
var countryTag = COUNTRY_NO
  break;
case se:
var countryTag = COUNTRY_SE
  break;
case us:
var countryTag = COUNTRY_US
  break;
default:
var countryTag = COUNTRY_US
  break;
}
var signedin = (current_user.userid) ? 'yes' : 'no'
buf.push("<!-- Google Analytics--><script>var _gaq = _gaq || [];\nvar _gatags = [];\nvar url = document.location.pathname;\n_gatags.push('bl')
;\n_gaq.push(['bl._setAccount', '" + (jade.escape((jade.interp = GENERIC_VISIT) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl._setCustomVar',3,'category','0',3])
;\n_gaq.push(['bl._trackPageview', url])
;\n_gatags.push('bl_local')
;\n_gaq.push(['bl_local._setAccount', '" + (jade.escape((jade.interp = countryTag) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl_local._trackPageview',url])
;\n_gaq.push(['bl_local._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl_local._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl_local._setCustomVar',3,'category','0',3])
;\n_gatags.push('bl_page_1')
;\nvar tags = [];\nswitch ('" + (jade.escape((jade.interp = locals.deviceFamily) == null ? '' : jade.interp)) + "') {\n  case 'mobile':\n    tags.push('" + (jade.escape((jade.interp = MOBILE_ALL) == null ? '' : jade.interp)) + "')
;\n    tags.push('" + (jade.escape((jade.interp = MOBILE_WEB) == null ? '' : jade.interp)) + "')
;\n    break;\n  default:\n    tags.push('" + (jade.escape((jade.interp = DEFAULT) == null ? '' : jade.interp)) + "')
;\n}\nfor (var tag in tags) {\n  _gaq.push(['bl_page_1._setAccount', tags[tag]])
;\n  _gaq.push(['bl_page_1._trackPageview', url])
;\n  _gaq.push(['bl_page_1._setCustomVar',1,'adview','yes',3])
;\n  _gaq.push(['bl_page_1._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n  _gaq.push(['bl_page_1._setCustomVar',3,'category','0',3])
;\n}\n(function() {\n  var ga    = document.createElement('script')
;\n  ga.type   = 'text/javascript';\n  ga.async  = true;\n  ga.src    = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n  var s     = document.getElementsByTagName('script')[0];\n  s.parentNode.insertBefore(ga, s)
;\n})()
;\n</script><!-- QuantCast--><script>var _qevents = _qevents || [];\n\n(function() {\n  var elem = document.createElement('script')
;\n  elem.src = (document.location.protocol == \"https:\" ? \"https://secure\" : \"http://edge\") + \".quantserve.com/quant.js\";\n  elem.async = true;\n  elem.type = \"text/javascript\";\n  var scpt = document.getElementsByTagName('script')[0];\n  scpt.parentNode.insertBefore(elem, scpt)
;\n})()
;\n\n_qevents.push({ qacct:\"p-6EEmuZFR-4XGE\" })
;\n</script><noscript><div style=\"display:none\"><img src=\"//pixel.quantserve.com/pixel/p-6EEmuZFR-4XGE.gif\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"/></div></noscript><!-- ComScore--><script>var _comscore = _comscore || [];\n_comscore.push({ c1: \"2\", c2: \"6035233\" })
;\n(function() {\n  var s   = document.createElement(\"script\"), el = document.getElementsByTagName(\"script\")[0];\n  s.async = true;\n  s.src   = (document.location.protocol == \"https:\" ? \"https://sb\" : \"http://b\") + \".scorecardresearch.com/beacon.js\";\n  el.parentNode.insertBefore(s, el)
;\n})()
;</script><noscript><img src=\"https://b.scorecardresearch.com/p?c1=2&amp;c2=6035233&amp;cv=2.0&amp;cj=1\"/></noscript><!-- DFP tracking ad--><div data-placement=\"tracking\" class=\"ad_placement\"></div>")
;;return buf.join("")
;
}
,
"partials/content_warning_modal":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<div id=\"contentWarningModal\" class=\"modal content-warning-modal\"><div class=\"modal-body\"><div class=\"title\">" + (jade.escape(null == (jade.interp = t("content_warning_modal_title", { defaultValue: "Content Warning" })) ? "" : jade.interp)) + "</div>")
;
var tosLink = '<a href="/tos">';
var tosLinkEnd = '</a>';
var defaultValue = [
'The blog that you are about to view may contain content only suitable',
'for adults. In general, mydropintheoceans does not review nor do we endorse the',
'content of this or any blog. For more information about our content policies',
'please visit the __tosLinkHTML__ Terms of Service __tosLinkEndHTML__.'].join(' ')
;
buf.push("<p>" + (null == (jade.interp = t("content_warning_modal_text", { defaultValue: defaultValue, escapeInterpolation: true, tosLink: tosLink, tosLinkEnd: tosLinkEnd })) ? "" : jade.interp) + "</p><div class=\"buttons\"><a data-trigger=\"hide\" class=\"yes\">" + (jade.escape(null == (jade.interp = t("content_warning_modal_yes", { defaultValue: "I understand and wish to continue" })) ? "" : jade.interp)) + "</a><a href=\"/\" class=\"no\">" + (jade.escape(null == (jade.interp = t("content_warning_modal_no", { defaultValue: "I do not wish to continue" })) ? "" : jade.interp)) + "</a></div></div></div>")
;;return buf.join("")
;
}
,
"partials/follow_blog_modal":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t,blog = locals_.blog,baseUrl = locals_.baseUrl;buf.push("<div id=\"followBlogModal\" class=\"modal follow-modal\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-body\"><h4>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_title', { defaultValue: 'Sign up to follow'})) ? "" : jade.interp)) + "<span class=\"blog-name\">" + (null == (jade.interp = blog.name) ? "" : jade.interp) + "</span></h4><p>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_blurb', { defaultValue: 'mydropintheoceans helps you follow the blogs you read by letting you know when they update.'})) ? "" : jade.interp)) + "</p><a" + (jade.attrs({ 'href':("#"), 'data-blog-id':(blog.id), "class": [('fb-sign-up')] }, {"href":true,"data-blog-id":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_sign_up_with_facebook', { defaultValue: 'Sign up with Facebook'})) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ 'href':("" + (baseUrl) + "/signup/" + (blog.id) + ""), "class": [('email-sign-up')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('follow_blog_modal_sign_up_with_email', { defaultValue: 'Sign up with email'})) ? "" : jade.interp)) + "</a><p>" + (jade.escape(null == (jade.interp = t('follow_blog_modal_have_an_account', { defaultValue: 'Already have an account?' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<a" + (jade.attrs({ 'href':("" + (baseUrl) + "/login?redirect=/blog/" + (blog.id) + ""), "class": [('login')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('follow_blog_modal_login', { defaultValue: 'Login' })) ? "" : jade.interp)) + "</a></p></div></div>")
;;return buf.join("")
;
}
,
"feed/toolbar_context":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),context = locals_.context,t = locals_.t,sidebar = locals_.sidebar,context_id = locals_.context_id;buf.push("<span class=\"sidebar-context\">")
;
switch (context){
case 'all':
buf.push(jade.escape(null == (jade.interp = t('toolbar_all_unread', { defaultValue: 'All unread' })) ? "" : jade.interp))
;
  break;
case 'following':
buf.push(jade.escape(null == (jade.interp = t('toolbar_friends', { defaultValue: 'Friends' })) ? "" : jade.interp))
;
  break;
case 'liked':
buf.push(jade.escape(null == (jade.interp = t('toolbar_liked', { defaultValue: 'Liked posts' })) ? "" : jade.interp))
;
  break;
case 'group':
buf.push(jade.escape(null == (jade.interp = sidebar.groups[context_id].group_name) ? "" : jade.interp))
;
  break;
case 'blog':
buf.push(jade.escape(null == (jade.interp = sidebar.blogs[context_id].blog_name) ? "" : jade.interp))
;
  break;
}
buf.push("</span>")
;;return buf.join("")
;
}
,
"partials/visit_blog_profile_popover":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<div id=\"visitBlogProfilePopover\" class=\"popover onboarding-popover visit-blog-profile-popover bottom\"><div class=\"arrow\"></div><div class=\"popover-content\"><p>" + (jade.escape(null == (jade.interp = t('visit_blog_profile_popover', { defaultValue: 'Click here to learn more about this blog.' })) ? "" : jade.interp)) + "</p></div></div>")
;;return buf.join("")
;
}
,
"find_blogs/no_blogs":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),context = locals_.context,t = locals_.t;buf.push("<li class=\"no-blogs\">")
;
switch (context.type){
case 'recommended':
buf.push("<div class=\"no-posts-alert\">" + (jade.escape(null == (jade.interp = t('find_blogs_no_blogs_recommended', { defaultValue: 'You have no recommended blogs.'})) ? "" : jade.interp)) + "</div>")
;
  break;
case 'category':
buf.push("<div class=\"no-posts-alert\">" + (jade.escape(null == (jade.interp = t('find_blogs_no_blogs_category', { defaultValue: 'There are no blogs in this category.'})) ? "" : jade.interp)) + "</div>")
;
  break;
}
buf.push("</li>")
;;return buf.join("")
;
}
,
"feed/feed":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),pageTitle = locals_.pageTitle,canonical = locals_.canonical,hide_smart_banner = locals_.hide_smart_banner,meta_tags = locals_.meta_tags,cssFilePath = locals_.cssFilePath,extraScripts = locals_.extraScripts,ads = locals_.ads,langData = locals_.langData,no = locals_.no,se = locals_.se,us = locals_.us,current_user = locals_.current_user,t = locals_.t,categories = locals_.categories,countries = locals_.countries,onboardingCategories = locals_.onboardingCategories,feed = locals_.feed,imagesize = locals_.imagesize,groups = locals_.groups,format = locals_.format,sidebar = locals_.sidebar,default_avatar = locals_.default_avatar,avatar = locals_.avatar,url = locals_.url,likeSpan = locals_.likeSpan,likeSpanEnd = locals_.likeSpanEnd,clientData = locals_.clientData,jsLastModified = locals_.jsLastModified;buf.push("<!DOCTYPE html><html" + (jade.attrs({ terse: true, 'lang':(locals.currentLanguage || 'en') }, {"lang":true})) + "><head><title>" + (jade.escape(null == (jade.interp = pageTitle || 'mydropintheoceans') ? "" : jade.interp)) + "</title>")
;
if ( (canonical))
{
buf.push("<link" + (jade.attrs({ terse: true, 'rel':("canonical"), 'href':("" + (canonical) + "") }, {"rel":true,"href":true})) + ">")
;
}
buf.push("<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">")
;
if ( (!hide_smart_banner))
{
buf.push("<meta name=\"apple-itunes-app\" content=\"app-id=421818340\">")
;
}
if ( (meta_tags))
{
// iterate meta_tags
;(function(){
  var $$obj = meta_tags;
  if ('number' == typeof $$obj.length) {

    for (var type = 0, $$l = $$obj.length; type < $$l; type++) {
      var val = $$obj[type];

switch (type){
case 'meta':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'facebook':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var property = 0, $$l = $$obj.length; property < $$l; property++) {
      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var property in $$obj) {
      $$l++;      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'twitter':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
}
    }

  } else {
    var $$l = 0;
    for (var type in $$obj) {
      $$l++;      var val = $$obj[type];

switch (type){
case 'meta':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'facebook':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var property = 0, $$l = $$obj.length; property < $$l; property++) {
      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var property in $$obj) {
      $$l++;      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'twitter':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
}
    }

  }
}).call(this)
;

}
buf.push("<link rel=\"shortcut icon\" href=\"/images/favicon.ico\"><link" + (jade.attrs({ terse: true, 'href':(cssFilePath), 'rel':("stylesheet") }, {"href":true,"rel":true})) + "><script>document.documentElement.className += \" js\";\n</script>")
;
if ( locals.extraScripts)
{
buf.push("" + (((jade.interp = extraScripts.join('\n')) == null ? '' : jade.interp)) + "")
;
}
buf.push("<script>var BLAdTags = " + (((jade.interp = JSON.stringify(ads)) == null ? '' : jade.interp)) + ";\nvar BLLang = " + (((jade.interp = langData || {}) == null ? '' : jade.interp)) + ";\n</script><!--[if lt IE 9]><script src=\"/assets/js/vendor/respond.min.js\"></script><script>document.documentElement.className += \" ie lt9\";\ndocument.createElement('header')
;\ndocument.createElement('nav')
;\ndocument.createElement('section')
;\ndocument.createElement('article')
;\ndocument.createElement('footer')
;\ndocument.createElement('time')
;\n</script><![endif]-->")
;
var GENERIC_VISIT = 'UA-3062524-1'
var COUNTRY_NO    = 'UA-3062524-8'
var COUNTRY_SE    = 'UA-3062524-9'
var COUNTRY_US    = 'UA-3062524-10'
var MOBILE_ALL    = 'UA-3062524-14'
var MOBILE_WEB    = 'UA-3062524-18'
var DEFAULT       = 'UA-3062524-12'
var countryTag    = ''
switch (locals.country){
case no:
var countryTag = COUNTRY_NO
  break;
case se:
var countryTag = COUNTRY_SE
  break;
case us:
var countryTag = COUNTRY_US
  break;
default:
var countryTag = COUNTRY_US
  break;
}
var signedin = (current_user.userid) ? 'yes' : 'no'
buf.push("<!-- Google Analytics--><script>var _gaq = _gaq || [];\nvar _gatags = [];\nvar url = document.location.pathname;\n_gatags.push('bl')
;\n_gaq.push(['bl._setAccount', '" + (jade.escape((jade.interp = GENERIC_VISIT) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl._setCustomVar',3,'category','0',3])
;\n_gaq.push(['bl._trackPageview', url])
;\n_gatags.push('bl_local')
;\n_gaq.push(['bl_local._setAccount', '" + (jade.escape((jade.interp = countryTag) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl_local._trackPageview',url])
;\n_gaq.push(['bl_local._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl_local._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl_local._setCustomVar',3,'category','0',3])
;\n_gatags.push('bl_page_1')
;\nvar tags = [];\nswitch ('" + (jade.escape((jade.interp = locals.deviceFamily) == null ? '' : jade.interp)) + "') {\n  case 'mobile':\n    tags.push('" + (jade.escape((jade.interp = MOBILE_ALL) == null ? '' : jade.interp)) + "')
;\n    tags.push('" + (jade.escape((jade.interp = MOBILE_WEB) == null ? '' : jade.interp)) + "')
;\n    break;\n  default:\n    tags.push('" + (jade.escape((jade.interp = DEFAULT) == null ? '' : jade.interp)) + "')
;\n}\nfor (var tag in tags) {\n  _gaq.push(['bl_page_1._setAccount', tags[tag]])
;\n  _gaq.push(['bl_page_1._trackPageview', url])
;\n  _gaq.push(['bl_page_1._setCustomVar',1,'adview','yes',3])
;\n  _gaq.push(['bl_page_1._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n  _gaq.push(['bl_page_1._setCustomVar',3,'category','0',3])
;\n}\n(function() {\n  var ga    = document.createElement('script')
;\n  ga.type   = 'text/javascript';\n  ga.async  = true;\n  ga.src    = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n  var s     = document.getElementsByTagName('script')[0];\n  s.parentNode.insertBefore(ga, s)
;\n})()
;\n</script><!-- QuantCast--><script>var _qevents = _qevents || [];\n\n(function() {\n  var elem = document.createElement('script')
;\n  elem.src = (document.location.protocol == \"https:\" ? \"https://secure\" : \"http://edge\") + \".quantserve.com/quant.js\";\n  elem.async = true;\n  elem.type = \"text/javascript\";\n  var scpt = document.getElementsByTagName('script')[0];\n  scpt.parentNode.insertBefore(elem, scpt)
;\n})()
;\n\n_qevents.push({ qacct:\"p-6EEmuZFR-4XGE\" })
;\n</script><noscript><div style=\"display:none\"><img src=\"//pixel.quantserve.com/pixel/p-6EEmuZFR-4XGE.gif\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"></div></noscript><!-- ComScore--><script>var _comscore = _comscore || [];\n_comscore.push({ c1: \"2\", c2: \"6035233\" })
;\n(function() {\n  var s   = document.createElement(\"script\"), el = document.getElementsByTagName(\"script\")[0];\n  s.async = true;\n  s.src   = (document.location.protocol == \"https:\" ? \"https://sb\" : \"http://b\") + \".scorecardresearch.com/beacon.js\";\n  el.parentNode.insertBefore(s, el)
;\n})()
;</script><noscript><img src=\"https://b.scorecardresearch.com/p?c1=2&amp;c2=6035233&amp;cv=2.0&amp;cj=1\"></noscript><!-- DFP tracking ad--><div data-placement=\"tracking\" class=\"ad_placement\"></div></head><body data-page-type=\"feed\" class=\"feedPage old-feed\"><div id=\"fb-root\"></div><div data-placement=\"panorama\" class=\"ad-placement\"></div><noscript><div class=\"alert-news\">" + (jade.escape(null == (jade.interp = t('no_js_no_play', { defaultValue : 'It looks like your browser doesn\'t support javascript. This page will work a lot better for you if you activate javascript or download a new browser like'})) ? "" : jade.interp)) + " <a href=\"https://www.google.com/chrome/\" target=\"_blank\">Google Chrome</a>.</div></noscript>")
;
var lang = (locals.currentLanguage)
;
var baseUrl = (baseUrl || '')
;
var dropdown_mixin = function(ctx){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<li><ul><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/" + (ctx) + "/1/0/" + (current_user.country) + ""), 'data-cat':("0") }, {"href":true,"data-cat":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_category_all', { defaultValue: 'All Categories'})) ? "" : jade.interp)) + "</a></li></ul></li><li><ul>")
;
// iterate categories
;(function(){
  var $$obj = categories;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/" + (ctx) + "/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + "") }, {"href":true,"data-cat":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/" + (ctx) + "/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + "") }, {"href":true,"data-cat":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></li><li class=\"dropdown-footer\"><a href=\"#countryModal\" data-trigger=\"modal\">" + (jade.escape(null == (jade.interp = t('nav_country_picker_label', { defaultValue: 'Country' })) ? "" : jade.interp)) + ":<span id=\"current_country\">" + (jade.escape(null == (jade.interp = t('country_' + countries[current_user.country].country_code, { defaultValue: countries[current_user.country].name })) ? "" : jade.interp)) + "</span></a></li>")
;
};
var login_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/login") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_login', { defaultValue: 'Log in' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/join") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_sign_up', { defaultValue: 'Sign up' })) ? "" : jade.interp)) + "</a></li>")
;
};
buf.push("<div class=\"header\"><nav><div class=\"logo nav-item\"><a href=\"/\" class=\"home\">mydropintheoceans&apos;</a></div><a href=\"#main-nav\" data-trigger=\"dropdown\" class=\"hamburger\">Jump to main navigation</a><ul id=\"main-nav\" class=\"main-navigation\">")
;
if ( current_user.userid)
{
buf.push("<li class=\"my-feed\"><a href=\"/feed\" class=\"home\">" + (jade.escape(null == (jade.interp = t('nav_home', { defaultValue: 'My feed'})) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"drop-down\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/popular"), 'data-trigger':("dropdown"), "class": [('popular'),("unclickable")] }, {"class":true,"href":true,"data-trigger":true})) + "><div class=\"small-and-large\">" + (jade.escape(null == (jade.interp = t('nav_popular', { defaultValue: 'Popular posts' })) ? "" : jade.interp)) + "</div><div class=\"medium-only\">" + (jade.escape(null == (jade.interp = t('nav_popular_medium', { defaultValue: 'Popular' })) ? "" : jade.interp)) + "</div></a><ul id=\"popular\" class=\"dropdown-menu\">")
;
dropdown_mixin('popular')
;
buf.push("</ul></li><li class=\"find last-child\"><a" + (jade.attrs({ terse: true, 'href':(current_user.userid ? "" + (baseUrl) + "/blogs/recommendations" : "" + (baseUrl) + "/blogs/toplist"), 'data-trigger':("dropdown"), "class": [('blogs'),("unclickable")] }, {"class":true,"href":true,"data-trigger":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_find_blogs', { defaultValue: 'Find blogs' })) ? "" : jade.interp)) + "</a></li>")
;
if ( !current_user.userid)
{
buf.push("<li class=\"drop-down\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/what-is-mydropintheoceans"), 'data-trigger':("dropdown"), "class": [('about'),("unclickable")] }, {"class":true,"href":true,"data-trigger":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about', { defaultValue: 'About' })) ? "" : jade.interp)) + "</a><ul id=\"about\" class=\"dropdown-menu\"><li><ul><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/what-is-mydropintheoceans") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_what_is_mydropintheoceans', { defaultValue: 'What is mydropintheoceans?' })) ? "" : jade.interp)) + "</a></li><li><a href=\"http://help.mydropintheoceans.com\">" + (jade.escape(null == (jade.interp = t('nav_user_help', { defaultValue: 'Help' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/widgets") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_buttons', { defaultValue: 'mydropintheoceans button' })) ? "" : jade.interp)) + "</a></li></ul></li><li><ul><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/about") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_about', { defaultValue: 'About' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/jobs") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_jobs', { defaultValue: 'Jobs' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/cookies") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_cookies', { defaultValue: 'Cookies' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/advertising") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_advertising', { defaultValue: 'Advertising' })) ? "" : jade.interp)) + "</a></li></ul></li></ul></li>")
;
}
buf.push("</ul><a href=\"#search\" class=\"search-icon-mobile\"></a><div class=\"nav-item search\"><fieldset><label for=\"query\">" + (jade.escape(null == (jade.interp = t('nav_search_label', { defaultValue: 'Search' })) ? "" : jade.interp)) + "</label><input" + (jade.attrs({ terse: true, 'id':('query'), 'type':("text"), 'name':("q"), 'placeholder':(t('nav_search_placeholder', { defaultValue: 'Search blogs'})), 'data-typeahead-label':(t('nav_search_typeahead_label', { defaultValue: "Search for"})), 'value':("") }, {"type":true,"name":true,"placeholder":true,"data-typeahead-label":true,"value":true})) + "><div class=\"small-only\"><input type=\"submit\" value=\"\" class=\"search-icon-mobile active\"></div><div class=\"medium-and-up\"><input type=\"submit\" value=\"\" class=\"search-icon\"></div></fieldset><div class=\"small-only\"><a href=\"#\" data-trigger=\"cancel-search\" class=\"button\">" + (jade.escape(null == (jade.interp = t('nav_search_cancel', { defaultValue: 'Cancel' })) ? "" : jade.interp)) + "</a></div><ul class=\"category-dropdown\">")
;
// iterate onboardingCategories
;(function(){
  var $$obj = onboardingCategories;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("/blogs/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + ""), "class": [('category')] }, {"href":true,"data-cat":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + category.image + ")"), "class": [('category-cover')] }, {"style":true})) + "></div><div class=\"category-name\">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</div></a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("/blogs/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + ""), "class": [('category')] }, {"href":true,"data-cat":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + category.image + ")"), "class": [('category-cover')] }, {"style":true})) + "></div><div class=\"category-name\">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</div></a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></div>")
;
if ( current_user.userid)
{
buf.push("<ul class=\"account-info nav-item\"><li class=\"user drop-down\"><div class=\"small-only\"><a href=\"#user-actions\" data-trigger=\"dropdown\"><div class=\"user-icon-mobile\"></div></a><ul id=\"user-actions\" class=\"dropdown-menu\"><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("profile"), 'href':("" + (baseUrl) + "/" + (current_user.username) + "") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_profile_mobile', { defaultValue: 'Profile' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("edit_blogs_followed"), 'href':("" + (baseUrl) + "/subscriptions") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_edit_blogs', { defaultValue: 'Edit blogs you follow' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("settings"), 'href':("" + (baseUrl) + "/settings") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_settings', { defaultValue: 'Settings' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("logout"), 'href':("" + (baseUrl) + "/logout"), "class": [('logout')] }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_sign_out', { defaultValue: 'Sign out' })) ? "" : jade.interp)) + "</a></li></ul></div><div class=\"medium-and-up\">")
;
var profile_url = (current_user.username === '' ? 'get_profile' : current_user.username)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (profile_url) + ""), 'data-trigger':("dropdown") }, {"href":true,"data-trigger":true})) + "><div class=\"avatar\"><img" + (jade.attrs({ terse: true, 'src':(current_user.avatar) }, {"src":true})) + "><div class=\"large-only\"><div class=\"arrow-down-icon icon\"></div></div></div></a><ul class=\"dropdown-menu\"><li><ul><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("profile"), 'href':("" + (baseUrl) + "/" + (profile_url) + "") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_profile', { defaultValue: 'Profile' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("blog_analytics"), 'href':("" + (baseUrl) + "/myblog") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_my_blogs', { defaultValue: 'Your blogs' })) ? "" : jade.interp)) + "</a></li></ul></li><li><ul><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("mydropintheoceans_button"), 'href':("" + (baseUrl) + "/widgets") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_buttons', { defaultValue: 'mydropintheoceans button' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("find_friends"), 'href':("" + (baseUrl) + "/friends") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_invite_friends', { defaultValue: 'Find friends' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("edit_blogs_followed"), 'href':("" + (baseUrl) + "/subscriptions") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_edit_blogs', { defaultValue: 'Edit blogs you follow' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("settings"), 'href':("" + (baseUrl) + "/settings") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_settings', { defaultValue: 'Settings' })) ? "" : jade.interp)) + "</a></li><li><a data-subgroup=\"help\" href=\"http://help.mydropintheoceans.com\">" + (jade.escape(null == (jade.interp = t('nav_user_help', { defaultValue: 'Help' })) ? "" : jade.interp)) + "</a></li></ul></li><li><ul><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("logout"), 'href':("" + (baseUrl) + "/logout"), "class": [('logout')] }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_sign_out', { defaultValue: 'Sign out' })) ? "" : jade.interp)) + "</a></li></ul></li></ul></div></li></ul><ul class=\"notifications nav-item\"><div class=\"medium-and-up\"><li data-trigger=\"popover\" data-po-position=\"bottom\"><div class=\"bell-icon-container\"><div class=\"bell-icon\"></div><div class=\"notification-count\"></div></div></li><div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-content\"><header>" + (jade.escape(null == (jade.interp = t('notifications_title', { defaultValue: 'Notifications' })) ? "" : jade.interp)) + "</header><ul id=\"notification-list\"></ul><div id=\"no-notifications\">" + (jade.escape(null == (jade.interp = t('no_new_notifications', { defaultValue: 'All caught up!'})) ? "" : jade.interp)) + "</div><footer></footer></div></div></div></ul>")
;
}
else
{
buf.push("<ul class=\"account-info nav-item small-only\"><li class=\"user drop-down\"><a href=\"#user-actions\" data-trigger=\"dropdown\"><div class=\"user-icon-mobile\"></div></a><ul id=\"user-actions\" class=\"dropdown-menu\">")
;
login_mixin()
;
buf.push("</ul></li></ul><ul class=\"main-navigation signed-out medium-and-up\">")
;
login_mixin()
;
buf.push("</ul>")
;
}
buf.push("</nav></div><div id=\"countryModal\" class=\"modal country-modal\"><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('country_modal_label', { defaultValue: 'Select country' })) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul class=\"countries\">")
;
// iterate countries
;(function(){
  var $$obj = countries;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var country = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/blogs/1/0/" + (country.country_code) + ""), 'data-country-code':("" + (country.country_code) + ""), "class": [('country')] }, {"href":true,"data-country-code":true})) + ">" + (jade.escape(null == (jade.interp = t('country_' + country.country_code, { defaultValue: country.name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var country = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/blogs/1/0/" + (country.country_code) + ""), 'data-country-code':("" + (country.country_code) + ""), "class": [('country')] }, {"href":true,"data-country-code":true})) + ">" + (jade.escape(null == (jade.interp = t('country_' + country.country_code, { defaultValue: country.name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></div></div><div class=\"to-top hidden\"><a id=\"toTop\" href=\"#\"><div class=\"to-top-icon icon\"></div></a></div><div data-placement=\"mobile_takeover_feed\" class=\"ad-placement\"></div>")
;
var c = (feed.context.type !== 'following' && imagesize === 'big' ? 'big' : '')
;
buf.push("<section" + (jade.attrs({ terse: true, "class": [('feed'),('content'),(c)] }, {"class":true})) + ">")
;
var context = (feed.context)
;
var image_settings_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<li class=\"image-settings\"><ul><li><a" + (jade.attrs({ terse: true, 'href':("#"), "class": [('small'),([ context.imagesize === "small" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_small_images', { defaultValue: 'Small images' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("#"), "class": [('big'),([ context.imagesize === "big" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_big_images', { defaultValue: 'Big images' })) ? "" : jade.interp)) + "</a></li></ul></li>")
;
};
var settings_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<a href=\"#settings\" data-trigger=\"toolbar-dropdown\" class=\"settings button\"><div class=\"settings-icon icon\"></div><div class=\"arrow-down-icon icon\"></div></a><ul id=\"settings\" class=\"dropdown-menu\">")
;
if ( context.type == 'all' || context.type == 'group')
{
buf.push("<li><ul><li><a" + (jade.attrs({ terse: true, 'href':("#"), "class": [('by-blog'),([ context.format === "cluster" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_blog', { defaultValue: 'Sort by blog' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("#"), "class": [('by-date-newest'),([ context.format === "list" && context.sortorder === "newest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_newest', { defaultValue: 'Sort by newest first' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("#"), "class": [('by-date-oldest'),([ context.format === "list" && context.sortorder === "oldest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_oldest', { defaultValue: 'Sort by oldest first'})) ? "" : jade.interp)) + "</a></li></ul></li>")
;
image_settings_mixin()
;
}
else
{
buf.push("<li><ul><li><a" + (jade.attrs({ terse: true, 'href':("#"), "class": [('newest'),([ context.sortorder === "newest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_newest_blog', { defaultValue: 'Newest first' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("#"), "class": [('oldest'),([ context.sortorder === "oldest" ? "selected" : "" ])] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_sort_by_date_oldest_blog', { defaultValue: 'Oldest first'})) ? "" : jade.interp)) + "</a></li></ul></li>")
;
image_settings_mixin()
;
}
buf.push("</ul>")
;
};
var classes = [];
if (context.type === 'following' || context.type === 'liked') {
classes.push('desktop-hidden')
}
buf.push("<ul" + (jade.attrs({ terse: true, "class": [('feed-toolbar'),(classes)] }, {"class":true})) + "><li><a href=\"#\" class=\"toggle-sidebar button\"><span class=\"sidebar-context\">" + (jade.escape(null == (jade.interp = t('toolbar_all_unread', { defaultValue: 'All unread' })) ? "" : jade.interp)) + "</span><div class=\"arrow-down-icon\"></div></a></li>")
;
switch (context.type){
case 'all':
buf.push("<li><a href=\"/_/post/markallread\" class=\"read button\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_all_as_read', { defaultValue: 'Mark all as read' })) ? "" : jade.interp)) + "</a></li>")
;
  break;
case 'blog':
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("/_/blog/read/" + (context.id) + ""), "class": [('read'),("button")] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_mark_blog_as_read', { defaultValue: 'Mark blog as read' })) ? "" : jade.interp)) + "</a></li><li><a href=\"#change-group\" data-trigger=\"toolbar-dropdown\" class=\"blog-group button\"><span class=\"add-to-group\">" + (jade.escape(null == (jade.interp = t('toolbar_add_to_group', { defaultValue: 'Add to a group' })) ? "" : jade.interp)) + "</span><span class=\"change-group\">" + (jade.escape(null == (jade.interp = t('toolbar_change_group', { defaultValue: 'Change group'})) ? "" : jade.interp)) + "</span><div class=\"arrow-down-icon icon\"></div></a><ul id=\"change-group\" class=\"dropdown-menu\">")
;
if ( locals.groups)
{
buf.push("<li><ul class=\"groups\">")
;
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var group = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("#"), 'data-group-id':("" + (group.group_id) + ""), 'data-trigger':("change-group") }, {"href":true,"data-group-id":true,"data-trigger":true})) + ">" + (null == (jade.interp = [ group.group_id == 1 ? t('toolbar_unsorted_blogs', { defaultValue: 'Unsorted blogs' }) : group.group_name ]) ? "" : jade.interp) + "</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var group = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("#"), 'data-group-id':("" + (group.group_id) + ""), 'data-trigger':("change-group") }, {"href":true,"data-group-id":true,"data-trigger":true})) + ">" + (null == (jade.interp = [ group.group_id == 1 ? t('toolbar_unsorted_blogs', { defaultValue: 'Unsorted blogs' }) : group.group_name ]) ? "" : jade.interp) + "</a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></li>")
;
}
buf.push("<li><form action=\"post\" class=\"create-group\"><fieldset><label for=\"new-group\">" + (jade.escape(null == (jade.interp = t('toolbar_create_new_group_label', { defaultValue: 'Create new group' })) ? "" : jade.interp)) + "</label><input" + (jade.attrs({ terse: true, 'id':('new-group'), 'type':("text"), 'name':("group-name"), 'placeholder':(t('toolbar_create_new_group_placeholder', { defaultValue: 'Create new group' })) }, {"type":true,"name":true,"placeholder":true})) + "><input" + (jade.attrs({ terse: true, 'type':("submit"), 'value':(t('toolbar_create_new_group_button', { defaultValue: 'Create' })), "class": [("button")] }, {"type":true,"class":true,"value":true})) + "></fieldset></form></li></ul></li><li><a href=\"#\" class=\"unfollow-blog button\">" + (jade.escape(null == (jade.interp = t('toolbar_unfollow', { defaultValue: 'Unfollow' })) ? "" : jade.interp)) + "</a></li>")
;
  break;
case 'group':
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("/_/group/read/" + (context.id) + ""), "class": [('read'),("button")] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('toolbar_mark_group_as_read', { defaultValue: 'Mark group as read' })) ? "" : jade.interp)) + "</a></li>")
;
  break;
}
buf.push("<li>")
;
settings_mixin()
;
buf.push("</li><div id=\"markAllReadModal\" class=\"modal\"><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_label_mark', { defaultValue: 'Mark' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<span class=\"context\"></span>" + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_label_as_read', { defaultValue: 'as read' })) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><span class=\"num-unread\"></span>" + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_body', { defaultValue: 'posts will be marked as read'})) ? "" : jade.interp)) + "</div><div class=\"modal-footer\"><a data-trigger=\"hide\" class=\"button\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_cancel', { defaultValue: 'Cancel' })) ? "" : jade.interp)) + "</a><a data-trigger=\"confirm\" data-confirm=\"markRead\" class=\"button primary\">" + (jade.escape(null == (jade.interp = t('toolbar_mark_read_modal_confirm', { defaultValue: 'Mark as Read' })) ? "" : jade.interp)) + "</a></div></div></ul><ol" + (jade.attrs({ terse: true, 'data-next-page':(feed.meta.next_url), 'data-img-size':(imagesize), 'data-context':(feed.context.type), 'data-context-id':(feed.context.id), 'data-format':(format), 'data-sort-order':(feed.context.sortorder), "class": [('posts')] }, {"data-next-page":true,"data-img-size":true,"data-context":true,"data-context-id":true,"data-format":true,"data-sort-order":true})) + "><li class=\"alert unfollow-alert a-hide\">" + (jade.escape(null == (jade.interp = t('toolbar_unfollow_alert', { defaultValue: 'You are no longer following'})) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<span class=\"unfollow-blog-name\"></span>" + (jade.escape(null == (jade.interp = ". ") ? "" : jade.interp)) + "<a href=\"#\" class=\"undo-unfollow\">" + (jade.escape(null == (jade.interp = t('toolbar_unfollow_alert_undo', { defaultValue: 'Undo?'})) ? "" : jade.interp)) + "</a></li>")
;
if ( feed.meta.news)
{
var news = (feed.meta.news)
;
buf.push("<li class=\"alert news\">" + (null == (jade.interp = news.text) ? "" : jade.interp) + "</li>")
;
}
if ( (feed.posts && feed.posts.length === 0) || (feed.blogs && feed.blogs.length === 0))
{
buf.push("<li class=\"no-posts\">")
;
switch (feed.context.type){
case 'all':
if ( sidebar.data && sidebar.data.list.length > 0)
{
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_recent_posts_alert', { defaultValue: 'There are no posts from the past week.' })) ? "" : jade.interp)) + "</div>")
;
}
else
{
buf.push("<div class=\"alert no-posts-alert\">")
;
var followBlogsLink = '<a href="' + baseUrl + '/blogs">'
var followBlogsLinkEnd = '</a>'
buf.push((null == (jade.interp = t('not_following_any_blogs_alert', { defaultValue: 'You are not following any blogs yet. Go to #{followBlogsLink} blogs #{followBlogsLinkEnd} and add some!', escapeInterpolation: true, followBlogsLink: followBlogsLink, followBlogsLinkEnd: followBlogsLinkEnd })) ? "" : jade.interp) + "</div>")
;
}
  break;
case 'liked':
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_liked_posts_alert', { defaultValue: 'You have no liked posts.' })) ? "" : jade.interp)) + "</div>")
;
  break;
case 'following':
buf.push("<div class=\"alert no-friends-alert\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/friends") }, {"href":true})) + "><img src=\"/assets/gfx/friends-promo.png\"></a></div>")
;
  break;
case 'group':
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_recent_posts_alert', { defaultValue: 'There are no posts from the past week.' })) ? "" : jade.interp)) + "</div>")
;
  break;
case 'blog':
buf.push("<div class=\"alert no-posts-alert\">" + (jade.escape(null == (jade.interp = t('no_recent_posts_alert', { defaultValue: 'There are no posts from the past week.' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/blog/" + (feed.context.id) + "") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('visit_blog', { defaultValue: 'Visit blog' })) ? "" : jade.interp)) + "</a>.</div>")
;
  break;
}
buf.push("</li>")
;
}
var contextType = (feed.context.type)
;
switch (feed.context.format){
case 'list':
// iterate feed.posts
;(function(){
  var $$obj = feed.posts;
  if ('number' == typeof $$obj.length) {

    for (var count = 0, $$l = $$obj.length; count < $$l; count++) {
      var post = $$obj[count];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ terse: true, 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ terse: true, 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ terse: true, 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ terse: true, 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ terse: true, 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ terse: true, 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ terse: true, 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ terse: true, 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ terse: true, 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
if ( count == 2)
{
buf.push("<li class=\"ad\"><div data-placement=\"content_1\" data-mobile=\"mobile_content_1\" id=\"ad_zone_content_1_1\" class=\"ad-placement\"></div></li>")
;
}
    }

  } else {
    var $$l = 0;
    for (var count in $$obj) {
      $$l++;      var post = $$obj[count];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ terse: true, 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ terse: true, 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ terse: true, 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ terse: true, 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ terse: true, 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ terse: true, 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ terse: true, 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ terse: true, 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ terse: true, 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
if ( count == 2)
{
buf.push("<li class=\"ad\"><div data-placement=\"content_1\" data-mobile=\"mobile_content_1\" id=\"ad_zone_content_1_1\" class=\"ad-placement\"></div></li>")
;
}
    }

  }
}).call(this)
;

  break;
case 'cluster':
// iterate feed.blogs
;(function(){
  var $$obj = feed.blogs;
  if ('number' == typeof $$obj.length) {

    for (var count = 0, $$l = $$obj.length; count < $$l; count++) {
      var blog = $$obj[count];

if ( blog.num_unread > 0)
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-blog-id':("" + (blog.blog_id) + ""), "class": [('blog')] }, {"data-blog-id":true})) + "><ol>")
;
// iterate blog.posts
;(function(){
  var $$obj = blog.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ terse: true, 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ terse: true, 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ terse: true, 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ terse: true, 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ terse: true, 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ terse: true, 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ terse: true, 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ terse: true, 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ terse: true, 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = $$obj[$index];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ terse: true, 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ terse: true, 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ terse: true, 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ terse: true, 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ terse: true, 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ terse: true, 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ terse: true, 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ terse: true, 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ terse: true, 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
    }

  }
}).call(this)
;

buf.push("</ol><div class=\"blog-actions\">")
;
if ( blog.num_unread > 1)
{
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (blog.next_url) + ""), "class": [('show-more')] }, {"href":true})) + ">")
;
var showMoreNum = '<span class="show-more-num">' + (blog.num_unread - 1) + '</span>'
buf.push((null == (jade.interp = t('post_blog_show_more_posts', { defaultValue: 'Show more posts (#{showMoreNum})', escapeInterpolation: true, showMoreNum: showMoreNum })) ? "" : jade.interp) + "</a>")
;
}
buf.push("<a href=\"#\" class=\"read\">" + (jade.escape(null == (jade.interp = t('post_blog_mark_blog_as_read', { defaultValue: 'Mark blog as read' })) ? "" : jade.interp)) + "</a></div></li>")
;
}
if ( count == 2)
{
buf.push("<li class=\"ad\"><div data-placement=\"content_1\" data-mobile=\"mobile_content_1\" id=\"ad_zone_content_1_1\" class=\"ad-placement\"></div></li>")
;
}
    }

  } else {
    var $$l = 0;
    for (var count in $$obj) {
      $$l++;      var blog = $$obj[count];

if ( blog.num_unread > 0)
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-blog-id':("" + (blog.blog_id) + ""), "class": [('blog')] }, {"data-blog-id":true})) + "><ol>")
;
// iterate blog.posts
;(function(){
  var $$obj = blog.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ terse: true, 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ terse: true, 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ terse: true, 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ terse: true, 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ terse: true, 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ terse: true, 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ terse: true, 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ terse: true, 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ terse: true, 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = $$obj[$index];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ terse: true, 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ terse: true, 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ terse: true, 'src':("" + (path) + "") }, {"src":true})) + "></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ terse: true, 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ terse: true, 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ terse: true, 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ terse: true, 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ terse: true, 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ terse: true, 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ terse: true, 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ terse: true, 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ terse: true, 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ terse: true, 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ terse: true, 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ terse: true, 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ terse: true, 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
    }

  }
}).call(this)
;

buf.push("</ol><div class=\"blog-actions\">")
;
if ( blog.num_unread > 1)
{
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (blog.next_url) + ""), "class": [('show-more')] }, {"href":true})) + ">")
;
var showMoreNum = '<span class="show-more-num">' + (blog.num_unread - 1) + '</span>'
buf.push((null == (jade.interp = t('post_blog_show_more_posts', { defaultValue: 'Show more posts (#{showMoreNum})', escapeInterpolation: true, showMoreNum: showMoreNum })) ? "" : jade.interp) + "</a>")
;
}
buf.push("<a href=\"#\" class=\"read\">" + (jade.escape(null == (jade.interp = t('post_blog_mark_blog_as_read', { defaultValue: 'Mark blog as read' })) ? "" : jade.interp)) + "</a></div></li>")
;
}
if ( count == 2)
{
buf.push("<li class=\"ad\"><div data-placement=\"content_1\" data-mobile=\"mobile_content_1\" id=\"ad_zone_content_1_1\" class=\"ad-placement\"></div></li>")
;
}
    }

  }
}).call(this)
;

  break;
}
buf.push("<li class=\"loader\"></li>")
;
if ( feed.context.format === 'list' && feed.posts.length > 0 && feed.posts.length < 20)
{
var followLink    = '<a href="/blogs" >'
var followLinkEnd = '</a>'
buf.push("<li class=\"end-of-feed\">" + (null == (jade.interp = t('end_of_feed', { defaultValue: 'All posts loaded.', escapeInterpolation: true, followLink: followLink, followLinkEnd: followLinkEnd })) ? "" : jade.interp) + "</li>")
;
}
buf.push("</ol>" + (null == (jade.interp = sidebar) ? "" : jade.interp) + "</section><div class=\"modal-backdrop\"></div><script>var BLClientData = " + (((jade.interp = JSON.stringify(clientData)) == null ? '' : jade.interp)) + ";\n</script><script" + (jade.attrs({ terse: true, 'src':("/assets/js/all-" + (jsLastModified) + ".js") }, {"src":true})) + "></script></body></html>")
;;return buf.join("")
;
}
,
"posts/like_modal_anon_likes":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),anon_likes = locals_.anon_likes,t = locals_.t;buf.push("<div class=\"anon-likes\">+<span class=\"num-anon-likes\">" + (jade.escape(null == (jade.interp = anon_likes) ? "" : jade.interp)) + "</span>")
;
if ( anon_likes == 1)
{
buf.push(jade.escape(null == (jade.interp = t('anon_likes', { defaultValue: 'anonymous user likes this' })) ? "" : jade.interp))
;
}
else
{
buf.push(jade.escape(null == (jade.interp = t('anon_likes_plural', { defaultValue: 'anonymous users like this' })) ? "" : jade.interp))
;
}
buf.push("</div>")
;;return buf.join("")
;
}
,
"sidebar/group":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),group = locals_.group,context = locals_.context;buf.push("<li" + (jade.attrs({ 'data-group-id':("" + (group.group_id) + ""), 'data-type':("group") }, {"data-group-id":true,"data-type":true})) + "><a href=\"#\" class=\"arrow-right-icon group-icon\"></a><a" + (jade.attrs({ 'href':("/feed/group/" + (group.group_id) + ""), "class": [('group'),([ context.id == group.group_id ? "selected" : "" ])] }, {"class":true,"href":true})) + "><span class=\"name\">" + (null == (jade.interp = group.group_name) ? "" : jade.interp) + "</span>")
;
if ( group.num_unread && group.num_unread > 0)
{
buf.push("<span class=\"num-unread\">" + (jade.escape(null == (jade.interp = group.num_unread) ? "" : jade.interp)) + "</span>")
;
}
else
{
buf.push("<span class=\"num-unread\"></span>")
;
}
buf.push("</a><ul class=\"blogs\">")
;
if ( group.blogs)
{
// iterate group.blogs.unread
;(function(){
  var $$obj = group.blogs.unread;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var blog = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-blog-id':("" + (blog.blog_id) + ""), 'data-type':("blog"), "class": [('unread')] }, {"data-blog-id":true,"data-type":true})) + "><a" + (jade.attrs({ 'href':("/feed/blog/" + (blog.blog_id) + ""), 'draggable':("true"), "class": [('blog'),([ context.id == blog.blog_id ? "selected" : "" ])] }, {"class":true,"href":true,"draggable":true})) + "><span class=\"name\">" + (null == (jade.interp = blog.blog_name) ? "" : jade.interp) + "</span>")
;
if ( blog.num_unread > 0)
{
buf.push("<span class=\"num-unread\">" + (jade.escape(null == (jade.interp = blog.num_unread) ? "" : jade.interp)) + "</span>")
;
}
else
{
buf.push("<span class=\"num-unread\"></span>")
;
}
buf.push("</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var blog = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-blog-id':("" + (blog.blog_id) + ""), 'data-type':("blog"), "class": [('unread')] }, {"data-blog-id":true,"data-type":true})) + "><a" + (jade.attrs({ 'href':("/feed/blog/" + (blog.blog_id) + ""), 'draggable':("true"), "class": [('blog'),([ context.id == blog.blog_id ? "selected" : "" ])] }, {"class":true,"href":true,"draggable":true})) + "><span class=\"name\">" + (null == (jade.interp = blog.blog_name) ? "" : jade.interp) + "</span>")
;
if ( blog.num_unread > 0)
{
buf.push("<span class=\"num-unread\">" + (jade.escape(null == (jade.interp = blog.num_unread) ? "" : jade.interp)) + "</span>")
;
}
else
{
buf.push("<span class=\"num-unread\"></span>")
;
}
buf.push("</a></li>")
;
    }

  }
}).call(this)
;

// iterate group.blogs.read
;(function(){
  var $$obj = group.blogs.read;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var blog = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-blog-id':("" + (blog.blog_id) + ""), 'data-type':("blog"), "class": [('read')] }, {"data-blog-id":true,"data-type":true})) + "><a" + (jade.attrs({ 'href':("/feed/blog/" + (blog.blog_id) + ""), 'draggable':("true"), "class": [('blog'),([ context.id == blog.blog_id ? "selected" : "" ])] }, {"class":true,"href":true,"draggable":true})) + "><span class=\"name\">" + (null == (jade.interp = blog.blog_name) ? "" : jade.interp) + "</span>")
;
if ( blog.num_unread > 0)
{
buf.push("<span class=\"num-unread\">" + (jade.escape(null == (jade.interp = blog.num_unread) ? "" : jade.interp)) + "</span>")
;
}
else
{
buf.push("<span class=\"num-unread\"></span>")
;
}
buf.push("</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var blog = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-blog-id':("" + (blog.blog_id) + ""), 'data-type':("blog"), "class": [('read')] }, {"data-blog-id":true,"data-type":true})) + "><a" + (jade.attrs({ 'href':("/feed/blog/" + (blog.blog_id) + ""), 'draggable':("true"), "class": [('blog'),([ context.id == blog.blog_id ? "selected" : "" ])] }, {"class":true,"href":true,"draggable":true})) + "><span class=\"name\">" + (null == (jade.interp = blog.blog_name) ? "" : jade.interp) + "</span>")
;
if ( blog.num_unread > 0)
{
buf.push("<span class=\"num-unread\">" + (jade.escape(null == (jade.interp = blog.num_unread) ? "" : jade.interp)) + "</span>")
;
}
else
{
buf.push("<span class=\"num-unread\"></span>")
;
}
buf.push("</a></li>")
;
    }

  }
}).call(this)
;

}
buf.push("</ul></li>")
;;return buf.join("")
;
}
,
"find_blogs/title":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),context = locals_.context,t = locals_.t;
if ( context.type === 'recommended')
{
buf.push("<h1>" + (jade.escape(null == (jade.interp = t('find_blogs_title_recommended', { defaultValue: 'Find blogs you love' })) ? "" : jade.interp)) + "</h1>")
;
}
else
{
buf.push("<h1>" + (jade.escape(null == (jade.interp = t('find_blogs_title_category', { defaultValue: 'Find blogs in'})) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<span class=\"category-name\">" + (jade.escape(null == (jade.interp = t('nav_category_' + context.id, { defaultValue: 'All Categories' })) ? "" : jade.interp)) + "</span></h1>")
;
};return buf.join("")
;
}
,
"standalone/get_mobile":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t,pageTitle = locals_.pageTitle,canonical = locals_.canonical,hide_smart_banner = locals_.hide_smart_banner,meta_tags = locals_.meta_tags,cssFilePath = locals_.cssFilePath,extraScripts = locals_.extraScripts,ads = locals_.ads,langData = locals_.langData,no = locals_.no,se = locals_.se,us = locals_.us,current_user = locals_.current_user,categories = locals_.categories,countries = locals_.countries,onboardingCategories = locals_.onboardingCategories,clientData = locals_.clientData,jsLastModified = locals_.jsLastModified;buf.push("<!DOCTYPE html><html" + (jade.attrs({ terse: true, 'lang':(locals.currentLanguage || 'en') }, {"lang":true})) + "><noscript><div class=\"alert-news\">" + (jade.escape(null == (jade.interp = t('no_js_no_play', { defaultValue : 'It looks like your browser doesn\'t support javascript. This page will work a lot better for you if you activate javascript or download a new browser like'})) ? "" : jade.interp)) + " <a href=\"https://www.google.com/chrome/\" target=\"_blank\">Google Chrome</a>.</div></noscript><head><title>" + (jade.escape(null == (jade.interp = pageTitle || 'mydropintheoceans') ? "" : jade.interp)) + "</title>")
;
if ( (canonical))
{
buf.push("<link" + (jade.attrs({ terse: true, 'rel':("canonical"), 'href':("" + (canonical) + "") }, {"rel":true,"href":true})) + ">")
;
}
buf.push("<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">")
;
if ( (!hide_smart_banner))
{
buf.push("<meta name=\"apple-itunes-app\" content=\"app-id=421818340\">")
;
}
if ( (meta_tags))
{
// iterate meta_tags
;(function(){
  var $$obj = meta_tags;
  if ('number' == typeof $$obj.length) {

    for (var type = 0, $$l = $$obj.length; type < $$l; type++) {
      var val = $$obj[type];

switch (type){
case 'meta':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'facebook':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var property = 0, $$l = $$obj.length; property < $$l; property++) {
      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var property in $$obj) {
      $$l++;      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'twitter':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
}
    }

  } else {
    var $$l = 0;
    for (var type in $$obj) {
      $$l++;      var val = $$obj[type];

switch (type){
case 'meta':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'facebook':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var property = 0, $$l = $$obj.length; property < $$l; property++) {
      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var property in $$obj) {
      $$l++;      var content = $$obj[property];

buf.push("<meta" + (jade.attrs({ terse: true, 'property':(property), 'content':(content) }, {"property":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
case 'twitter':
// iterate val
;(function(){
  var $$obj = val;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var content = $$obj[name];

buf.push("<meta" + (jade.attrs({ terse: true, 'name':(name), 'content':(content) }, {"name":true,"content":true})) + ">")
;
    }

  }
}).call(this)
;

  break;
}
    }

  }
}).call(this)
;

}
buf.push("<link rel=\"shortcut icon\" href=\"/assets/gfx/favicon.ico\"><link" + (jade.attrs({ terse: true, 'href':(cssFilePath), 'rel':("stylesheet") }, {"href":true,"rel":true})) + "><script>document.documentElement.className += \" js\";\n</script>")
;
if ( locals.extraScripts)
{
buf.push("" + (((jade.interp = extraScripts.join('\n')) == null ? '' : jade.interp)) + "")
;
}
buf.push("<script>var BLAdTags = " + (((jade.interp = JSON.stringify(ads)) == null ? '' : jade.interp)) + ";\nvar BLLang = " + (((jade.interp = langData || {}) == null ? '' : jade.interp)) + ";\n</script><!--[if lt IE 9]><script src=\"/assets/js/vendor/respond.min.js\"></script><script>document.documentElement.className += \" ie lt9\";\ndocument.createElement('header')
;\ndocument.createElement('nav')
;\ndocument.createElement('section')
;\ndocument.createElement('article')
;\ndocument.createElement('footer')
;\ndocument.createElement('time')
;\n</script><![endif]-->")
;
var GENERIC_VISIT = 'UA-3062524-1'
var COUNTRY_NO    = 'UA-3062524-8'
var COUNTRY_SE    = 'UA-3062524-9'
var COUNTRY_US    = 'UA-3062524-10'
var MOBILE_ALL    = 'UA-3062524-14'
var MOBILE_WEB    = 'UA-3062524-18'
var DEFAULT       = 'UA-3062524-12'
var countryTag    = ''
switch (locals.country){
case no:
var countryTag = COUNTRY_NO
  break;
case se:
var countryTag = COUNTRY_SE
  break;
case us:
var countryTag = COUNTRY_US
  break;
default:
var countryTag = COUNTRY_US
  break;
}
var signedin = (current_user.userid) ? 'yes' : 'no'
buf.push("<!-- Google Analytics--><script>var _gaq = _gaq || [];\nvar _gatags = [];\nvar url = document.location.pathname;\n_gatags.push('bl')
;\n_gaq.push(['bl._setAccount', '" + (jade.escape((jade.interp = GENERIC_VISIT) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl._setCustomVar',3,'category','0',3])
;\n_gaq.push(['bl._trackPageview', url])
;\n_gatags.push('bl_local')
;\n_gaq.push(['bl_local._setAccount', '" + (jade.escape((jade.interp = countryTag) == null ? '' : jade.interp)) + "'])
;\n_gaq.push(['bl_local._trackPageview',url])
;\n_gaq.push(['bl_local._setCustomVar',1,'adview','yes',3])
;\n_gaq.push(['bl_local._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n_gaq.push(['bl_local._setCustomVar',3,'category','0',3])
;\n_gatags.push('bl_page_1')
;\nvar tags = [];\nswitch ('" + (jade.escape((jade.interp = locals.deviceFamily) == null ? '' : jade.interp)) + "') {\n  case 'mobile':\n    tags.push('" + (jade.escape((jade.interp = MOBILE_ALL) == null ? '' : jade.interp)) + "')
;\n    tags.push('" + (jade.escape((jade.interp = MOBILE_WEB) == null ? '' : jade.interp)) + "')
;\n    break;\n  default:\n    tags.push('" + (jade.escape((jade.interp = DEFAULT) == null ? '' : jade.interp)) + "')
;\n}\nfor (var tag in tags) {\n  _gaq.push(['bl_page_1._setAccount', tags[tag]])
;\n  _gaq.push(['bl_page_1._trackPageview', url])
;\n  _gaq.push(['bl_page_1._setCustomVar',1,'adview','yes',3])
;\n  _gaq.push(['bl_page_1._setCustomVar',2,'signedin','" + (jade.escape((jade.interp = signedin) == null ? '' : jade.interp)) + "',2])
;\n  _gaq.push(['bl_page_1._setCustomVar',3,'category','0',3])
;\n}\n(function() {\n  var ga    = document.createElement('script')
;\n  ga.type   = 'text/javascript';\n  ga.async  = true;\n  ga.src    = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n  var s     = document.getElementsByTagName('script')[0];\n  s.parentNode.insertBefore(ga, s)
;\n})()
;\n</script><!-- QuantCast--><script>var _qevents = _qevents || [];\n\n(function() {\n  var elem = document.createElement('script')
;\n  elem.src = (document.location.protocol == \"https:\" ? \"https://secure\" : \"http://edge\") + \".quantserve.com/quant.js\";\n  elem.async = true;\n  elem.type = \"text/javascript\";\n  var scpt = document.getElementsByTagName('script')[0];\n  scpt.parentNode.insertBefore(elem, scpt)
;\n})()
;\n\n_qevents.push({ qacct:\"p-6EEmuZFR-4XGE\" })
;\n</script><noscript><div style=\"display:none\"><img src=\"//pixel.quantserve.com/pixel/p-6EEmuZFR-4XGE.gif\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"></div></noscript><!-- ComScore--><script>var _comscore = _comscore || [];\n_comscore.push({ c1: \"2\", c2: \"6035233\" })
;\n(function() {\n  var s   = document.createElement(\"script\"), el = document.getElementsByTagName(\"script\")[0];\n  s.async = true;\n  s.src   = (document.location.protocol == \"https:\" ? \"https://sb\" : \"http://b\") + \".scorecardresearch.com/beacon.js\";\n  el.parentNode.insertBefore(s, el)
;\n})()
;</script><noscript><img src=\"https://b.scorecardresearch.com/p?c1=2&amp;c2=6035233&amp;cv=2.0&amp;cj=1\"></noscript><!-- DFP tracking ad--><div data-placement=\"tracking\" class=\"ad_placement\"></div></head><body data-page-type=\"get_mobile\"><div id=\"fb-root\"></div><div data-placement=\"panorama\" class=\"ad-placement\"></div>")
;
var lang = (locals.currentLanguage)
;
var baseUrl = (baseUrl || '')
;
var dropdown_mixin = function(ctx){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<li><ul><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/" + (ctx) + "/1/0/" + (current_user.country) + ""), 'data-cat':("0") }, {"href":true,"data-cat":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_category_all', { defaultValue: 'All Categories'})) ? "" : jade.interp)) + "</a></li></ul></li><li><ul>")
;
// iterate categories
;(function(){
  var $$obj = categories;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/" + (ctx) + "/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + "") }, {"href":true,"data-cat":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/" + (ctx) + "/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + "") }, {"href":true,"data-cat":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></li><li class=\"dropdown-footer\"><a href=\"#countryModal\" data-trigger=\"modal\">" + (jade.escape(null == (jade.interp = t('nav_country_picker_label', { defaultValue: 'Country' })) ? "" : jade.interp)) + ":<span id=\"current_country\">" + (jade.escape(null == (jade.interp = t('country_' + countries[current_user.country].country_code, { defaultValue: countries[current_user.country].name })) ? "" : jade.interp)) + "</span></a></li>")
;
};
var login_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/login") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_login', { defaultValue: 'Log in' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/join") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_sign_up', { defaultValue: 'Sign up' })) ? "" : jade.interp)) + "</a></li>")
;
};
buf.push("<div class=\"header\"><nav><div class=\"logo nav-item\"><a href=\"/\" class=\"home\">mydropintheoceans&apos;</a></div><a href=\"#main-nav\" data-trigger=\"dropdown\" class=\"hamburger\">Jump to main navigation</a><ul id=\"main-nav\" class=\"main-navigation\">")
;
if ( current_user.userid)
{
buf.push("<li class=\"my-feed\"><a href=\"/feed\" class=\"home\">" + (jade.escape(null == (jade.interp = t('nav_home', { defaultValue: 'My feed'})) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"drop-down\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/popular"), 'data-trigger':("dropdown"), "class": [('popular'),("unclickable")] }, {"class":true,"href":true,"data-trigger":true})) + "><div class=\"small-and-large\">" + (jade.escape(null == (jade.interp = t('nav_popular', { defaultValue: 'Popular posts' })) ? "" : jade.interp)) + "</div><div class=\"medium-only\">" + (jade.escape(null == (jade.interp = t('nav_popular_medium', { defaultValue: 'Popular' })) ? "" : jade.interp)) + "</div></a><ul id=\"popular\" class=\"dropdown-menu\">")
;
dropdown_mixin('popular')
;
buf.push("</ul></li><li class=\"find last-child\"><a" + (jade.attrs({ terse: true, 'href':(current_user.userid ? "" + (baseUrl) + "/blogs/recommendations" : "" + (baseUrl) + "/blogs/toplist"), 'data-trigger':("dropdown"), "class": [('blogs'),("unclickable")] }, {"class":true,"href":true,"data-trigger":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_find_blogs', { defaultValue: 'Find blogs' })) ? "" : jade.interp)) + "</a></li>")
;
if ( !current_user.userid)
{
buf.push("<li class=\"drop-down\"><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/what-is-mydropintheoceans"), 'data-trigger':("dropdown"), "class": [('about'),("unclickable")] }, {"class":true,"href":true,"data-trigger":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about', { defaultValue: 'About' })) ? "" : jade.interp)) + "</a><ul id=\"about\" class=\"dropdown-menu\"><li><ul><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/what-is-mydropintheoceans") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_what_is_mydropintheoceans', { defaultValue: 'What is mydropintheoceans?' })) ? "" : jade.interp)) + "</a></li><li><a href=\"http://help.mydropintheoceans.com\">" + (jade.escape(null == (jade.interp = t('nav_user_help', { defaultValue: 'Help' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/widgets") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_buttons', { defaultValue: 'mydropintheoceans button' })) ? "" : jade.interp)) + "</a></li></ul></li><li><ul><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/about") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_about', { defaultValue: 'About' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/jobs") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_jobs', { defaultValue: 'Jobs' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/cookies") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_cookies', { defaultValue: 'Cookies' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/advertising") }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_about_advertising', { defaultValue: 'Advertising' })) ? "" : jade.interp)) + "</a></li></ul></li></ul></li>")
;
}
buf.push("</ul><a href=\"#search\" class=\"search-icon-mobile\"></a><div class=\"nav-item search\"><fieldset><label for=\"query\">" + (jade.escape(null == (jade.interp = t('nav_search_label', { defaultValue: 'Search' })) ? "" : jade.interp)) + "</label><input" + (jade.attrs({ terse: true, 'id':('query'), 'type':("text"), 'name':("q"), 'placeholder':(t('nav_search_placeholder', { defaultValue: 'Search blogs'})), 'data-typeahead-label':(t('nav_search_typeahead_label', { defaultValue: "Search for"})), 'value':("") }, {"type":true,"name":true,"placeholder":true,"data-typeahead-label":true,"value":true})) + "><div class=\"small-only\"><input type=\"submit\" value=\"\" class=\"search-icon-mobile active\"></div><div class=\"medium-and-up\"><input type=\"submit\" value=\"\" class=\"search-icon\"></div></fieldset><div class=\"small-only\"><a href=\"#\" data-trigger=\"cancel-search\" class=\"button\">" + (jade.escape(null == (jade.interp = t('nav_search_cancel', { defaultValue: 'Cancel' })) ? "" : jade.interp)) + "</a></div><ul class=\"category-dropdown\">")
;
// iterate onboardingCategories
;(function(){
  var $$obj = onboardingCategories;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("/blogs/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + ""), "class": [('category')] }, {"href":true,"data-cat":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + category.image + ")"), "class": [('category-cover')] }, {"style":true})) + "></div><div class=\"category-name\">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</div></a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var category = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("/blogs/1/" + (category.cat_id) + "/" + (current_user.country) + ""), 'data-cat':("" + (category.cat_id) + ""), "class": [('category')] }, {"href":true,"data-cat":true})) + "><div" + (jade.attrs({ terse: true, 'style':("background-image:url(" + category.image + ")"), "class": [('category-cover')] }, {"style":true})) + "></div><div class=\"category-name\">" + (jade.escape(null == (jade.interp = t('nav_category_' + category.cat_id, { defaultValue: category.cat_name })) ? "" : jade.interp)) + "</div></a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></div>")
;
if ( current_user.userid)
{
buf.push("<ul class=\"account-info nav-item\"><li class=\"user drop-down\"><div class=\"small-only\"><a href=\"#user-actions\" data-trigger=\"dropdown\"><div class=\"user-icon-mobile\"></div></a><ul id=\"user-actions\" class=\"dropdown-menu\"><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("profile"), 'href':("" + (baseUrl) + "/" + (current_user.username) + "") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_profile_mobile', { defaultValue: 'Profile' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("edit_blogs_followed"), 'href':("" + (baseUrl) + "/subscriptions") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_edit_blogs', { defaultValue: 'Edit blogs you follow' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("settings"), 'href':("" + (baseUrl) + "/settings") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_settings', { defaultValue: 'Settings' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("logout"), 'href':("" + (baseUrl) + "/logout"), "class": [('logout')] }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_sign_out', { defaultValue: 'Sign out' })) ? "" : jade.interp)) + "</a></li></ul></div><div class=\"medium-and-up\">")
;
var profile_url = (current_user.username === '' ? 'get_profile' : current_user.username)
;
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (profile_url) + ""), 'data-trigger':("dropdown") }, {"href":true,"data-trigger":true})) + "><div class=\"avatar\"><img" + (jade.attrs({ terse: true, 'src':(current_user.avatar) }, {"src":true})) + "><div class=\"large-only\"><div class=\"arrow-down-icon icon\"></div></div></div></a><ul class=\"dropdown-menu\"><li><ul><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("profile"), 'href':("" + (baseUrl) + "/" + (profile_url) + "") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_profile', { defaultValue: 'Profile' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("blog_analytics"), 'href':("" + (baseUrl) + "/myblog") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_my_blogs', { defaultValue: 'Your blogs' })) ? "" : jade.interp)) + "</a></li></ul></li><li><ul><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("mydropintheoceans_button"), 'href':("" + (baseUrl) + "/widgets") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_buttons', { defaultValue: 'mydropintheoceans button' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("find_friends"), 'href':("" + (baseUrl) + "/friends") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_invite_friends', { defaultValue: 'Find friends' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("edit_blogs_followed"), 'href':("" + (baseUrl) + "/subscriptions") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_edit_blogs', { defaultValue: 'Edit blogs you follow' })) ? "" : jade.interp)) + "</a></li><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("settings"), 'href':("" + (baseUrl) + "/settings") }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_settings', { defaultValue: 'Settings' })) ? "" : jade.interp)) + "</a></li><li><a data-subgroup=\"help\" href=\"http://help.mydropintheoceans.com\">" + (jade.escape(null == (jade.interp = t('nav_user_help', { defaultValue: 'Help' })) ? "" : jade.interp)) + "</a></li></ul></li><li><ul><li><a" + (jade.attrs({ terse: true, 'data-subgroup':("logout"), 'href':("" + (baseUrl) + "/logout"), "class": [('logout')] }, {"data-subgroup":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = t('nav_user_sign_out', { defaultValue: 'Sign out' })) ? "" : jade.interp)) + "</a></li></ul></li></ul></div></li></ul><ul class=\"notifications nav-item\"><div class=\"medium-and-up\"><li data-trigger=\"popover\" data-po-position=\"bottom\"><div class=\"bell-icon-container\"><div class=\"bell-icon\"></div><div class=\"notification-count\"></div></div></li><div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-content\"><header>" + (jade.escape(null == (jade.interp = t('notifications_title', { defaultValue: 'Notifications' })) ? "" : jade.interp)) + "</header><ul id=\"notification-list\"></ul><div id=\"no-notifications\">" + (jade.escape(null == (jade.interp = t('no_new_notifications', { defaultValue: 'All caught up!'})) ? "" : jade.interp)) + "</div><footer></footer></div></div></div></ul>")
;
}
else
{
buf.push("<ul class=\"account-info nav-item small-only\"><li class=\"user drop-down\"><a href=\"#user-actions\" data-trigger=\"dropdown\"><div class=\"user-icon-mobile\"></div></a><ul id=\"user-actions\" class=\"dropdown-menu\">")
;
login_mixin()
;
buf.push("</ul></li></ul><ul class=\"main-navigation signed-out medium-and-up\">")
;
login_mixin()
;
buf.push("</ul>")
;
}
buf.push("</nav></div><div id=\"countryModal\" class=\"modal country-modal\"><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('country_modal_label', { defaultValue: 'Select country' })) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul class=\"countries\">")
;
// iterate countries
;(function(){
  var $$obj = countries;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var country = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/blogs/1/0/" + (country.country_code) + ""), 'data-country-code':("" + (country.country_code) + ""), "class": [('country')] }, {"href":true,"data-country-code":true})) + ">" + (jade.escape(null == (jade.interp = t('country_' + country.country_code, { defaultValue: country.name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var country = $$obj[$index];

buf.push("<li><a" + (jade.attrs({ terse: true, 'href':("" + (baseUrl) + "/" + (lang) + "/blogs/1/0/" + (country.country_code) + ""), 'data-country-code':("" + (country.country_code) + ""), "class": [('country')] }, {"href":true,"data-country-code":true})) + ">" + (jade.escape(null == (jade.interp = t('country_' + country.country_code, { defaultValue: country.name })) ? "" : jade.interp)) + "</a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></div></div><div class=\"to-top hidden\"><a id=\"toTop\" href=\"#\"><div class=\"to-top-icon icon\"></div></a></div><section class=\"get-mobile\"><div class=\"container\"><div class=\"content\"><h1>" + (jade.escape(null == (jade.interp = t('get_mobile_get_app', { defaultValue: 'Get the app' })) ? "" : jade.interp)) + "</h1><h2>" + (jade.escape(null == (jade.interp = t('get_mobile_available', { defaultValue: 'Available for iPhone, Android and iPad.' })) ? "" : jade.interp)) + "</h2><div><a href=\"https://itunes.apple.com/app/mydropintheoceans/id421818340\" data-app-type=\"iphone\" class=\"app-store-icon download-app\"></a><a href=\"https://play.google.com/store/apps/details?id=se.yo.android.mydropintheoceans\" data-app-type=\"android\" class=\"download-app\"><img src=\"/assets/gfx/googleplay.png\" alt=\"Google Play Store\" class=\"play-store-icon\"></a></div></div><div class=\"image\"></div><div class=\"cf\"></div></div></section><footer class=\"footer\"><a href=\"https://www.facebook.com/mydropintheoceans\" alt=\"Facebook\">Facebook</a><span>&#8901;</span><a href=\"https://twitter.com/mydropintheoceans\" alt=\"Twitter\">Twitter</a><span>&#8901;</span><a href=\"http://blog.mydropintheoceans.com/\" alt=\"mydropintheoceans Blog\">Blog</a><span>&#8901;</span><a href=\"http://help.mydropintheoceans.com/\" alt=\"mydropintheoceans Help\">Help</a></footer><script>var BLClientData = " + (((jade.interp = JSON.stringify(clientData)) == null ? '' : jade.interp)) + ";\n</script><script" + (jade.attrs({ terse: true, 'src':("/assets/js/all-" + (jsLastModified) + ".js") }, {"src":true})) + "></script></body></html>")
;;return buf.join("")
;
}
,
"feed/toolbar_group":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),group = locals_.group,t = locals_.t;buf.push("<li><a" + (jade.attrs({ 'href':("#"), 'data-group-id':("" + (group.group_id) + ""), 'data-trigger':("change-group") }, {"href":true,"data-group-id":true,"data-trigger":true})) + ">" + (null == (jade.interp = [ group.group_id == 1 ? t('toolbar_unsorted_blogs', { defaultValue: 'Unsorted blogs' }) : group.group_name ]) ? "" : jade.interp) + "</a></li>")
;;return buf.join("")
;
}
,
"partials/follow_blog_popover":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<div id=\"followBlogPopover\" class=\"popover onboarding-popover follow-blog-popover bottom\"><div class=\"arrow\"></div><div class=\"popover-content\"><a href=\"#\" class=\"close\">&times;</a><p>" + (jade.escape(null == (jade.interp = t('follow_blog_popover', { defaultValue: 'Like this blog? Try following it!' })) ? "" : jade.interp)) + "</p></div></div>")
;;return buf.join("")
;
}
,
"posts/like_modal":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),post = locals_.post,t = locals_.t,users = locals_.users,baseUrl = locals_.baseUrl,default_avatar = locals_.default_avatar,avatar = locals_.avatar,anon_likes = locals_.anon_likes;buf.push("<div" + (jade.attrs({ 'id':("likeModal"), 'data-post-id':(post.post_id), 'data-blog-id':(post.blog_id), 'data-next-page':(1), "class": [('modal'),('like-modal')] }, {"id":true,"data-post-id":true,"data-blog-id":true,"data-next-page":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('people_who_like_this', { defaultValue: 'People who like this'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\">")
;
if ( users.length > 0)
{
buf.push("<ul class=\"users\">")
;
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

buf.push("<li class=\"user\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path) }, {"src":true})) + "/><div class=\"user-name\">" + (jade.escape(null == (jade.interp = user.first_name) ? "" : jade.interp)))
;
if ( user.last_name)
{
buf.push(jade.escape(null == (jade.interp = ' ' + user.last_name) ? "" : jade.interp))
;
}
buf.push("</div></a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

buf.push("<li class=\"user\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path) }, {"src":true})) + "/><div class=\"user-name\">" + (jade.escape(null == (jade.interp = user.first_name) ? "" : jade.interp)))
;
if ( user.last_name)
{
buf.push(jade.escape(null == (jade.interp = ' ' + user.last_name) ? "" : jade.interp))
;
}
buf.push("</div></a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul>")
;
}
if ( anon_likes)
{
buf.push("<div class=\"anon-likes\">+<span class=\"num-anon-likes\">" + (jade.escape(null == (jade.interp = anon_likes) ? "" : jade.interp)) + "</span>")
;
if ( anon_likes == 1)
{
buf.push(jade.escape(null == (jade.interp = t('anon_likes', { defaultValue: 'anonymous user likes this' })) ? "" : jade.interp))
;
}
else
{
buf.push(jade.escape(null == (jade.interp = t('anon_likes_plural', { defaultValue: 'anonymous users like this' })) ? "" : jade.interp))
;
}
buf.push("</div>")
;
}
buf.push("</div></div>")
;;return buf.join("")
;
}
,
"find_blogs/navigation":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t,context = locals_.context;buf.push("<div class=\"nav\"><a class=\"back\">" + (jade.escape(null == (jade.interp = t('back_button', { defaultValue: 'Back' })) ? "" : jade.interp)) + "</a>")
;
if ( context.type === 'category')
{
buf.push("<div class=\"title\">" + (jade.escape(null == (jade.interp = t('nav_category_' + context.id, { defaultValue: '' })) ? "" : jade.interp)) + "</div>")
;
}
else
{
buf.push("<div class=\"title\">" + (jade.escape(null == (jade.interp = t('find_blogs_sidebar_' + context.type, { defaultValue: '' })) ? "" : jade.interp)) + "</div>")
;
}
buf.push("</div>")
;;return buf.join("")
;
}
,
"gritter/user_followed":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;var feedLink = '<a href="/feed/friends">';
var feedLinkEnd = '</a>';
buf.push(null == (jade.interp = t('gritter_user_followed', { defaultValue: 'was added to __feedLinkHTML__ your Friends feed. __feedLinkEndHTML__', escapeInterpolation: true, feedLink: feedLink, feedLinkEnd: feedLinkEnd })) ? "" : jade.interp)
;;return buf.join("")
;
}
,
"sidebar/show_read":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),num_read = locals_.num_read,t = locals_.t;buf.push("<li" + (jade.attrs({ "class": [('show-read'),(num_read > 0 ? '' : 'hide')] }, {"class":true})) + "><a href=\"#\">" + (jade.escape(null == (jade.interp = t('show_read_blogs', { defaultValue: 'Show read blogs' })) ? "" : jade.interp)) + "</a></li><li class=\"hide-read\"><a href=\"#\">" + (jade.escape(null == (jade.interp = t('hide_read_blogs', { defaultValue: 'Hide read blogs' })) ? "" : jade.interp)) + "</a></li>")
;;return buf.join("")
;
}
,
"search/help":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<div class=\"help curator-item\"><div class=\"title\">" + (jade.escape(null == (jade.interp = t('search_page_help_title', { defaultValue: 'Can\'t find the blog?' })) ? "" : jade.interp)) + "</div><p>" + (jade.escape(null == (jade.interp = t('search_page_help_try_again', { defaultValue: 'Try searching for the blog\'s address (e.g. '})) ? "" : jade.interp)) + "<span class=\"example-url\">" + (jade.escape(null == (jade.interp = t('search_page_example_url', { defaultValue: 'www.fashiontoast.com' })) ? "" : jade.interp)) + "</span>" + (jade.escape(null == (jade.interp = ")") ? "" : jade.interp)) + "</p><p>" + (jade.escape(null == (jade.interp = t('search_page_help_cant_find', { defaultValue: 'Still can\'t find it?'})) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<a href=\"#addBlogModal\" data-trigger=\"modal\">" + (jade.escape(null == (jade.interp = t('search_page_help_add_blog', { defaultValue: 'Add the blog to mydropintheoceans!' })) ? "" : jade.interp)) + "</a></p></div>")
;;return buf.join("")
;
}
,
"feed/unfollow_alert":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<li class=\"alert unfollow-alert a-hide\">" + (jade.escape(null == (jade.interp = t('toolbar_unfollow_alert', { defaultValue: 'You are no longer following'})) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<span class=\"unfollow-blog-name\"></span>" + (jade.escape(null == (jade.interp = ". ") ? "" : jade.interp)) + "<a href=\"#\" class=\"undo-unfollow\">" + (jade.escape(null == (jade.interp = t('toolbar_unfollow_alert_undo', { defaultValue: 'Undo?'})) ? "" : jade.interp)) + "</a></li>")
;;return buf.join("")
;
}
,
"partials/follower_modal":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),followBlog = locals_.followBlog,t = locals_.t,users = locals_.users,baseUrl = locals_.baseUrl,default_avatar = locals_.default_avatar,avatar = locals_.avatar;buf.push("<div class=\"modal follower-modal\"><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">")
;
if ( followBlog !== '')
{
buf.push(jade.escape(null == (jade.interp = t('follower_modal_label_follow_blog', { defaultValue: 'Recent followers of #{followBlog}', followBlog: followBlog })) ? "" : jade.interp))
;
}
else
{
buf.push(jade.escape(null == (jade.interp = t('follower_modal_label', { defaultValue: 'Your recent followers' })) ? "" : jade.interp))
;
}
buf.push("</div></div><div class=\"modal-body\"><ul class=\"users\">")
;
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

buf.push("<li class=\"user\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path) }, {"src":true})) + "/><div class=\"user-name\">" + (jade.escape(null == (jade.interp = user.first_name) ? "" : jade.interp)))
;
if ( user.last_name)
{
buf.push(jade.escape(null == (jade.interp = ' ' + user.last_name) ? "" : jade.interp))
;
}
buf.push("</div></a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

buf.push("<li class=\"user\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path) }, {"src":true})) + "/><div class=\"user-name\">" + (jade.escape(null == (jade.interp = user.first_name) ? "" : jade.interp)))
;
if ( user.last_name)
{
buf.push(jade.escape(null == (jade.interp = ' ' + user.last_name) ? "" : jade.interp))
;
}
buf.push("</div></a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ul></div></div>")
;;return buf.join("")
;
}
,
"partials/get_app_modal":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<div id=\"getAppModal\" class=\"modal get-app-modal\"><div class=\"modal-body\"><div class=\"not-sent\"><img src=\"/assets/gfx/get-app@2x.png\"/><h4>" + (jade.escape(null == (jade.interp = t("onboarding_get_app_modal_title", { defaultValue: "Enter your phone number to get the mydropintheoceans app." })) ? "" : jade.interp)) + "</h4><form id=\"getApp\"><fieldset><label>" + (jade.escape(null == (jade.interp = t("onboarding_modal_label", { defaultValue: "Get app" })) ? "" : jade.interp)) + "</label><input" + (jade.attrs({ 'type':("text"), 'value':(""), 'autofocus':("autofocus"), 'placeholder':(t("onboarding_send_text_placeholder", { defaultValue: "+16464801873"})), "class": [('phone-number')] }, {"type":true,"value":true,"autofocus":true,"placeholder":true})) + "/></fieldset><input" + (jade.attrs({ 'type':("submit"), 'value':(t("onboarding_send_button", { defaultValue: "Send" })), "class": [('send-text')] }, {"type":true,"value":true})) + "/></form><p class=\"disclaimer\">" + (jade.escape(null == (jade.interp = t("onboarding_modal_disclaimer", { defaultValue: "We will not store your phone number." })) ? "" : jade.interp)) + "</p><p class=\"send-text-error\">" + (jade.escape(null == (jade.interp = t("onboarding_modal_send_text_error", { defaultValue: "Please enter a valid number with country code!" })) ? "" : jade.interp)) + "</p><a href=\"#\" data-trigger=\"hide\" class=\"dismiss\">" + (jade.escape(null == (jade.interp = t("onboarding_modal_dismiss", { defaultValue: "Maybe later" })) ? "" : jade.interp)) + "</a></div><div class=\"sent\"><p>" + (jade.escape(null == (jade.interp = t("onboarding_modal_text_sent_alert", { defaultValue: "Text sent!" })) ? "" : jade.interp)) + "</p></div></div></div>")
;;return buf.join("")
;
}
,
"profiles/no_items":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),context = locals_.context,t = locals_.t;buf.push("<li class=\"no-posts-alert\">")
;
var name = context.profile_name;
switch (context.type){
case 'likes':
buf.push(null == (jade.interp = t('profile_no_items_likes', { defaultValue: '__name__ has no liked posts', name: name })) ? "" : jade.interp)
;
  break;
case 'followers':
buf.push(null == (jade.interp = t('profile_no_items_followers', { defaultValue: '__name__ has no followers', name: name })) ? "" : jade.interp)
;
  break;
case 'following':
buf.push(null == (jade.interp = t('profile_no_items_following', { defaultValue: '__name__ is not following anyone', name: name })) ? "" : jade.interp)
;
  break;
case 'posts':
buf.push(null == (jade.interp = t('profile_no_items_posts', { defaultValue: '__name__ has no recent posts', name: name })) ? "" : jade.interp)
;
  break;
case 'similar':
buf.push(null == (jade.interp = t('profile_no_items_similar_blogs', { defaultValue: '__name__ has no similar blogs', name: name })) ? "" : jade.interp)
;
  break;
}
buf.push("</li>")
;;return buf.join("")
;
}
,
"partials/flag_blog_modal":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t,flag = locals_.flag,blog_flags = locals_.blog_flags;var alert_mixin = function(){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push("<p class=\"success\">" + (jade.escape(null == (jade.interp = t('flag_blog_modal_success', { defaultValue: 'Thank you!' })) ? "" : jade.interp)) + "</p><p class=\"error\">" + (jade.escape(null == (jade.interp = t('flag_blog_modal_error', { defaultValue: 'The request failed. Please try again!' })) ? "" : jade.interp)) + "</p>")
;
};
buf.push("<div id=\"flagBlogModal\" class=\"modal flag-blog-modal\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-body\">")
;
if ( flag.admin_hide)
{
buf.push("<h4>" + (jade.escape(null == (jade.interp = t('flag_blog_admin_hide_title', { defaultValue: 'Hide from Popular' })) ? "" : jade.interp)) + "</h4><p>" + (jade.escape(null == (jade.interp = t('flag_blog_admin_hide_text', { defaultValue: 'Are you sure you want to hide this post?'})) ? "" : jade.interp)) + "</p>")
;
alert_mixin()
;
buf.push("<a data-trigger=\"hide\" class=\"cancel\">" + (jade.escape(null == (jade.interp = t('flag_blog_modal_cancel', { defaultValue: 'Cancel' })) ? "" : jade.interp)) + "</a><a" + (jade.attrs({ 'data-blog-id':(flag.blog_id), 'data-post-id':(flag.post_id), 'data-admin-hide':("hide"), "class": [('confirm-flag')] }, {"data-blog-id":true,"data-post-id":true,"data-admin-hide":true})) + ">" + (jade.escape(null == (jade.interp = t('flag_blog_admin_hide_confirm', { defaultValue: 'Hide' })) ? "" : jade.interp)) + "</a>")
;
}
else
{
var other = (flag.flag_id === "5")
;
buf.push("<h4>" + (jade.escape(null == (jade.interp = t('flag_blog_modal_report', { defaultValue: 'Report' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<span class=\"blog-name\">" + (null == (jade.interp = flag.blog_name) ? "" : jade.interp) + "</span></h4>")
;
if ( other)
{
var feedbackLink = '<a href="http://help.mydropintheoceans.com" target="_blank">';
var feedbackLinkEnd = '</a>';
buf.push("<p class=\"other\">" + (null == (jade.interp = t('flag_blog_modal_text', { defaultValue: 'Thank you for making mydropintheoceans better by flagging inappropriate content. To help us understand this violation, please reach out to us at __feedbackLinkHTML__ our feedback center __feedbackLinkEndHTML__. Thanks!', escapeInterpolation: true, feedbackLink: feedbackLink, feedbackLinkEnd: feedbackLinkEnd})) ? "" : jade.interp) + "</p>")
;
}
else
{
buf.push("<p>" + (jade.escape(null == (jade.interp = t('flag_blog_modal_are_you_sure', { defaultValue: 'Are you sure you want to report this blog for' })) ? "" : jade.interp)) + (jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + "<span class=\"flag-name\">" + (jade.escape(null == (jade.interp = t('flag_blog_modal_flag_' + flag.flag_id, { defaultValue: blog_flags[flag.flag_id].name })) ? "" : jade.interp)) + "</span>?</p>")
;
}
alert_mixin()
;
buf.push("<a data-trigger=\"hide\" class=\"cancel\">" + (jade.escape(null == (jade.interp = t('flag_blog_modal_cancel', { defaultValue: 'Cancel' })) ? "" : jade.interp)) + "</a><a" + (jade.attrs({ 'href':("http://help.mydropintheoceans.com"), 'data-blog-id':(flag.blog_id), 'data-flag-id':(flag.flag_id), 'data-post-id':(flag.post_id), "class": [('confirm-flag')] }, {"href":true,"data-blog-id":true,"data-flag-id":true,"data-post-id":true})) + ">" + (jade.escape(null == (jade.interp = t('flag_blog_modal_confirm', { defaultValue: 'Report' })) ? "" : jade.interp)) + "</a>")
;
}
buf.push("</div></div>")
;;return buf.join("")
;
}
,
"find_blogs/blog":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),blog = locals_.blog,t = locals_.t;var followers_mixin = function(num){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var followers = (num)
;
if ( (num >= 10000))
{
var followers = (Math.round(followers/1000) + 'k')
;
}
buf.push(jade.escape(null == (jade.interp = followers) ? "" : jade.interp))
;
};
buf.push("<li" + (jade.attrs({ 'data-blog-id':(blog.blog_id), 'data-blog-name':(blog.name), "class": [('blog'),([ blog.following === "following" ? "following" : ""])] }, {"class":true,"data-blog-id":true,"data-blog-name":true})) + "><a" + (jade.attrs({ 'href':("/blog/" + (blog.blog_id) + ""), "class": [('follow')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('blog_follow_button', { defaultValue: 'Follow' })) ? "" : jade.interp)) + "</a><a class=\"unfollow\">" + (jade.escape(null == (jade.interp = t('blog_unfollow_button', { defaultValue: 'Following' })) ? "" : jade.interp)) + "</a><h3><a" + (jade.attrs({ 'href':("/blog/" + (blog.blog_id) + ""), "class": [('title')] }, {"href":true})) + ">" + (null == (jade.interp = blog.name) ? "" : jade.interp) + "</a></h3><div class=\"followers\">")
;
if ( blog.followers)
{
if ( blog.followers == 1)
{
buf.push(jade.escape(null == (jade.interp = t('blog_followers_one', { defaultValue: '1 follower' })) ? "" : jade.interp))
;
}
else
{
followers_mixin(blog.followers)
;
buf.push((jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + (jade.escape(null == (jade.interp = t('blog_followers', { defaultValue: 'followers' })) ? "" : jade.interp)))
;
}
}
buf.push("</div><ol class=\"posts\">")
;
// iterate blog.posts
;(function(){
  var $$obj = blog.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

buf.push("<li class=\"post\"><a" + (jade.attrs({ 'href':("/blog/" + (blog.blog_id) + ""), "class": [('post-link')] }, {"href":true})) + "><div class=\"post-title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</div>")
;
if ( post.media)
{
buf.push("<div" + (jade.attrs({ 'title':(post.title), 'style':("background-image:url(" + post.CDN_thumb + ")"), "class": [('post-cover')] }, {"title":true,"style":true})) + "></div>")
;
}
buf.push("</a></li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = $$obj[$index];

buf.push("<li class=\"post\"><a" + (jade.attrs({ 'href':("/blog/" + (blog.blog_id) + ""), "class": [('post-link')] }, {"href":true})) + "><div class=\"post-title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</div>")
;
if ( post.media)
{
buf.push("<div" + (jade.attrs({ 'title':(post.title), 'style':("background-image:url(" + post.CDN_thumb + ")"), "class": [('post-cover')] }, {"title":true,"style":true})) + "></div>")
;
}
buf.push("</a></li>")
;
    }

  }
}).call(this)
;

buf.push("</ol></li>")
;;return buf.join("")
;
}
,
"posts/blog":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),blog = locals_.blog,count = locals_.count,default_avatar = locals_.default_avatar,avatar = locals_.avatar,baseUrl = locals_.baseUrl,t = locals_.t,contextType = locals_.contextType,imagesize = locals_.imagesize,url = locals_.url,likeSpan = locals_.likeSpan,likeSpanEnd = locals_.likeSpanEnd;buf.push("<li" + (jade.attrs({ 'data-blog-id':("" + (blog.blog_id) + ""), "class": [('blog')] }, {"data-blog-id":true})) + "><ol>")
;
// iterate blog.posts
;(function(){
  var $$obj = blog.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "/><div" + (jade.attrs({ 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "/></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = $$obj[$index];

if ( (post.event_type === 'follow_user' || post.event_type === 'follow_blog'))
{
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post'),('follow-post')] }, {"data-index":true})) + "><article>")
;
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div></article></li>")
;
}
else
{
var c = ([post.liked ? 'liked' : '', post.read  ? 'read'  : ''])
;
var readable = (contextType !== 'following' && contextType !== 'liked')
;
buf.push("<li" + (jade.attrs({ 'data-index':(count), "class": [('post-container')] }, {"data-index":true})) + "><div class=\"post\"><article" + (jade.attrs({ 'data-blog-id':("" + (post.blog.id) + ""), 'data-blog-name':("" + (post.blog.name) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_small) + ""), "class": [(c)] }, {"data-blog-id":true,"data-blog-name":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"class":true})) + ">")
;
if ( post.friends)
{
var avatar_mixin = function(user){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + "") }, {"href":true})) + "><img" + (jade.attrs({ 'src':("" + (path) + "") }, {"src":true})) + "/></a>")
;
};
buf.push("<div class=\"friends-meta\">")
;
if ( post.event_type === 'like_post')
{
var friends = (post.friends.length)
;
var friend = (post.friends[0])
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
var blogLink = '<a href="' + baseUrl + '/blog/' + post.blog.id + '">' + post.blog.name + '</a>'
switch (friends){
case 1:
avatar_mixin(friend)
;
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like', { defaultValue: "__userLinkHTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
case 2:
buf.push("<span class=\"friends\">")
;
var friend2 = (post.friends[1])
;
var userLink2 = '<a href="' + baseUrl + friend2.profile_link + '">' + friend2.first_name + (friend2.last_name ? ' ' + friend2.last_name : '') + '</a>'
buf.push((null == (jade.interp = t('post_like_two', { context: 'two', defaultValue: "__userLink1HTML__ and __userLink2HTML__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink1: userLink, userLink2: userLink2, blogLink: blogLink })) ? "" : jade.interp) + "</span>")
;
  break;
default:
var friend = (post.friends[0])
;
var othersLink = '<a href="#" class="others" data-trigger="like-modal" data-post-id="' + post.id + '" data-blog-id="' + post.blog.id + '" data-likes="' + post.likes + '">' + (friends - 1)
var othersLinkEnd = '</a>'
buf.push("<span class=\"friends\">" + (null == (jade.interp = t('post_like_others', { defaultValue: "__userLinkHTML__ and __othersLink__ others __othersLinkEnd__ liked a post by __blogLinkHTML__", escapeInterpolation: true, userLink: userLink, blogLink: blogLink, othersLink: othersLink, othersLinkEnd: othersLinkEnd })) ? "" : jade.interp) + "</span>")
;
  break;
}
}
else
{
var friend = (post.friend)
;
var userLink = '<a href="' + baseUrl + friend.profile_link + '">' + friend.first_name + (friend.last_name ? ' ' + friend.last_name : '') + '</a>'
buf.push("<span class=\"friends\">")
;
var followed = (post.friend.followed)
;
var numFollowed = (followed.length)
;
switch (post.event_type){
case 'follow_user':
var followedLink = '<a href="' + baseUrl + followed[0].profile_link + '">' + followed[0].first_name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + followed[1].profile_link + '">' + followed[1].first_name + '</a>'
}
  break;
case 'follow_blog':
var followedLink = '<a href="' + baseUrl + '/blog/' + followed[0].blog_id + '">' + followed[0].name + '</a>'
if ( numFollowed == 2)
{
var followedLink2 = '<a href="' + baseUrl + '/blog/' + followed[1].blog_id + '">' + followed[1].name + '</a>'
}
  break;
}
switch (numFollowed){
case 1:
buf.push(null == (jade.interp = t('post_follow', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__', escapeInterpolation: true, userLink: userLink, followedLink: followedLink })) ? "" : jade.interp)
;
  break;
case 2:
buf.push(null == (jade.interp = t('post_follow_two', { context: 'two', defaultValue: "__userLinkHTML__ started following __followedLink1HTML__ and __followedLink2HTML__" , escapeInterpolation: true, userLink: userLink, followedLink1: followedLink, followedLink2: followedLink2 })) ? "" : jade.interp)
;
  break;
default:
var others = (numFollowed - 1)
;
switch (post.event_type){
case 'follow_user':
buf.push(null == (jade.interp = t('post_follow_otherUsers', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other people', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
case 'follow_blog':
buf.push(null == (jade.interp = t('post_follow_otherBlogs', { defaultValue: '__userLinkHTML__ has started following __followedLinkHTML__ and __others__ other blogs', escapeInterpolation: true, userLink: userLink, followedLink: followedLink, others: others })) ? "" : jade.interp)
;
  break;
}
  break;
}
buf.push("</span>")
;
}
buf.push("</div>")
;
}
buf.push("<a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<div class=\"media-container\">")
;
if ( post.friends || imagesize === 'small')
{
var imageURL = (post.media_small)
;
}
else
{
var imageURL = (post.media_big)
;
}
buf.push("<img" + (jade.attrs({ 'src':("" + (imageURL) + ""), "class": [('media'),("medium-and-up")] }, {"class":true,"src":true})) + "/><div" + (jade.attrs({ 'style':("background-image:url(" + (imageURL) + ")"), "class": [('media'),('thumb'),("small-only")] }, {"class":true,"style":true})) + "></div></div>")
;
}
buf.push("<h2 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h2></a><div class=\"subtitle\"><address class=\"author\"><a" + (jade.attrs({ 'href':("" + (baseUrl) + "/blog/" + (post.blog.id) + ""), 'rel':("author") }, {"href":true,"rel":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a></address>&nbsp;&middot;&nbsp;<div class=\"date\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + "") }, {"href":true})) + "><time" + (jade.attrs({ 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a></div></div><a" + (jade.attrs({ 'href':("" + (post.out_link) + ""), 'target':("_blank"), "class": [('post-link'),(readable ? 'readable' : '')] }, {"class":true,"href":true,"target":true})) + "><p class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</p></a><ul class=\"meta horizontal-list\">")
;
if ( (readable))
{
buf.push("<li class=\"action markRead\"><a" + (jade.attrs({ 'href':("/_/post/read/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('read')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_read', {defaultValue: 'Mark as read' })) ? "" : jade.interp)) + "</a></li><li class=\"action markUnread\"><a" + (jade.attrs({ 'href':("/_/post/unread/" + (post.blog.id) + "/" + (post.id) + "?destination=" + (encodeURIComponent(url)) + ""), "class": [('unread')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('mark_as_unread', {defaultValue: 'Mark as unread' })) ? "" : jade.interp)) + "</a></li>")
;
}
buf.push("<li class=\"action like-action\"><a" + (jade.attrs({ 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('like', { defaultValue: 'Like' })) ? "" : jade.interp)) + "</span></a><a" + (jade.attrs({ 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"heart-icon icon\"></div><span>" + (jade.escape(null == (jade.interp = t('unlike', { defaultValue: 'Unlike' })) ? "" : jade.interp)) + "</span></a></li><li class=\"action share-action\"><a" + (jade.attrs({ 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal") }, {"href":true,"data-trigger":true})) + "><div class=\"share-icon icon\"></div><span class=\"share\">" + (jade.escape(null == (jade.interp = t('share', { defaultValue: 'Share' })) ? "" : jade.interp)) + "</span></a></li><li class=\"who-likes\"><a" + (jade.attrs({ 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), 'data-post-id':("" + (post.id) + ""), 'data-blog-id':("" + (post.blog.id) + ""), "class": [('likes')] }, {"href":true,"data-post-id":true,"data-blog-id":true})) + ">")
;
if ( (post.likes))
{
var numLikesSpan    = '<span class="num-likes">'
var numLikesSpanEnd = '</span>'
buf.push(null == (jade.interp = t('likes_on_post', { defaultValue: '', escapeInterpolation: true, count: post.likes, numLikesSpan: numLikesSpan, numLikesSpanEnd: numLikesSpanEnd, likeSpan: likeSpan, likeSpanEnd: likeSpanEnd })) ? "" : jade.interp)
;
}
buf.push("</a>")
;
if ( post.liked_by)
{
var liked_by = post.liked_by.length < 4 ? post.liked_by.length : 3
for (var i = 0; i < liked_by; i++)
{
var user = (post.liked_by[i])
;
buf.push("<a" + (jade.attrs({ 'href':("" + (baseUrl) + "" + (user.profile_link) + ""), 'data-trigger':("tooltip"), 'data-title':("" + (user.first_name) + "") }, {"href":true,"data-trigger":true,"data-title":true})) + ">")
;
var path = (user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<img" + (jade.attrs({ 'src':(path), 'alt':(user.username) }, {"src":true,"alt":true})) + "/></a>")
;
}
}
buf.push("</li></ul></article></div><ul" + (jade.attrs({ 'data-post-id':("" + (post.id) + ""), "class": [('share-dialog')] }, {"data-post-id":true})) + "><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), "class": [('facebook')] }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true})) + "><div class=\"facebook-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_facebook', { defaultValue: 'Post to facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (post.title) + ""), 'data-func':("tweet"), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank"), "class": [('twitter')] }, {"href":true,"data-func":true,"data-title":true,"target":true})) + "><div class=\"twitter-button-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('share_dialog_twitter', { defaultValue: 'Tweet this' })) ? "" : jade.interp)) + "</span></a></li></ul><div" + (jade.attrs({ 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;
}
    }

  }
}).call(this)
;

buf.push("</ol><div class=\"blog-actions\">")
;
if ( blog.num_unread > 1)
{
buf.push("<a" + (jade.attrs({ 'href':("" + (blog.next_url) + ""), "class": [('show-more')] }, {"href":true})) + ">")
;
var showMoreNum = '<span class="show-more-num">' + (blog.num_unread - 1) + '</span>'
buf.push((null == (jade.interp = t('post_blog_show_more_posts', { defaultValue: 'Show more posts (#{showMoreNum})', escapeInterpolation: true, showMoreNum: showMoreNum })) ? "" : jade.interp) + "</a>")
;
}
buf.push("<a href=\"#\" class=\"read\">" + (jade.escape(null == (jade.interp = t('post_blog_mark_blog_as_read', { defaultValue: 'Mark blog as read' })) ? "" : jade.interp)) + "</a></div></li>")
;;return buf.join("")
;
}
,
"posts/tiled_post":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),post = locals_.post,hideContentText = locals_.hideContentText,context = locals_.context,t = locals_.t,blog_flags = locals_.blog_flags,current_user = locals_.current_user;buf.push("<li class=\"post\"><article" + (jade.attrs({ 'data-blog-id':("" + (post.blog.id) + ""), 'data-post-id':("" + (post.id) + ""), 'data-url':("" + (post.link) + ""), 'data-post-name':("" + (post.title) + ""), 'data-post-media':("" + (post.media_new_post) + ""), 'data-blog-name':("" + (post.blog.name) + ""), "class": [([post.liked ? 'liked' : '', post.likes ? 'has-likes' : ''])] }, {"class":true,"data-blog-id":true,"data-post-id":true,"data-url":true,"data-post-name":true,"data-post-media":true,"data-blog-name":true})) + "><a" + (jade.attrs({ 'href':(post.out_link), 'target':("_blank"), "class": [('media-link')] }, {"href":true,"target":true})) + ">")
;
if ( post.media)
{
buf.push("<img" + (jade.attrs({ 'src':(post.media_new_post), "class": [('media')] }, {"src":true})) + "/>")
;
}
buf.push("</a><div class=\"post-content\"><a" + (jade.attrs({ 'href':(post.out_link), 'target':("_blank"), "class": [('post-link')] }, {"href":true,"target":true})) + "><h3 class=\"title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</h3></a><div class=\"subtext\"><a" + (jade.attrs({ 'href':("/blog/" + (post.blog.id) + ""), "class": [('author')] }, {"href":true})) + ">" + (null == (jade.interp = post.blog.name) ? "" : jade.interp) + "</a>&nbsp;&middot;&nbsp;<a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), "class": [('timestamp')] }, {"href":true})) + "><time" + (jade.attrs({ 'datetime':(post.publish_timestamp) }, {"datetime":true})) + ">" + (jade.escape(null == (jade.interp = post.publish_date) ? "" : jade.interp)) + "</time></a>")
;
if ( !hideContentText)
{
buf.push("<a" + (jade.attrs({ 'href':(post.out_link), 'target':("_blank"), "class": [('post-link')] }, {"href":true,"target":true})) + "><div class=\"body\">" + (null == (jade.interp = post.summary) ? "" : jade.interp) + "</div></a>")
;
}
buf.push("</div><ul class=\"meta\"><li><a" + (jade.attrs({ 'href':("/_/post/like/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('like')] }, {"href":true})) + "><div class=\"tiled-post-heart-icon\"></div></a><a" + (jade.attrs({ 'href':("/_/post/unlike/" + (post.blog.id) + "/" + (post.id) + ""), "class": [('unlike')] }, {"href":true})) + "><div class=\"tiled-post-heart-icon\"></div></a><a" + (jade.attrs({ 'href':("/blog/post/" + (post.blog.id) + "/" + (post.id) + "/saves"), "class": [('total-likes')] }, {"href":true})) + ">")
;
if ( post.likes)
{
buf.push(jade.escape(null == (jade.interp = post.likes) ? "" : jade.interp))
;
}
buf.push("</a></li><li><a" + (jade.attrs({ 'href':("#shareModal-" + (post.blog.id) + "-" + (post.id) + ""), 'data-trigger':("modal"), "class": [('share')] }, {"href":true,"data-trigger":true})) + "><div class=\"tiled-post-share-icon\"></div></a></li></ul>")
;
if ( context.type === 'popular')
{
buf.push("<!--googleoff: all--><!--noindex--><div class=\"flag-container\"><div class=\"flag-container-relative\"><a href=\"#\" data-trigger=\"popover\" data-po-position=\"bottom\" class=\"flag-blog\"><div class=\"flag-icon\"></div></a><div class=\"popover flag-popover\"><div class=\"arrow\"></div><div class=\"popover-content\"><header>" + (jade.escape(null == (jade.interp = t('flag_post_popover_header', { defaultValue: 'Report Post' })) ? "" : jade.interp)) + "</header><ul class=\"flag-list\">")
;
// iterate blog_flags
;(function(){
  var $$obj = blog_flags;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var flag = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-post-id':(post.id), 'data-blog-id':(post.blog.id), 'data-blog-name':(post.blog.name), 'data-flag-id':(flag.id) }, {"data-post-id":true,"data-blog-id":true,"data-blog-name":true,"data-flag-id":true})) + ">" + (jade.escape(null == (jade.interp = t('flag_blog_flag_' + flag.id, { defaultValue: flag.name })) ? "" : jade.interp)) + "</li>")
;
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var flag = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'data-post-id':(post.id), 'data-blog-id':(post.blog.id), 'data-blog-name':(post.blog.name), 'data-flag-id':(flag.id) }, {"data-post-id":true,"data-blog-id":true,"data-blog-name":true,"data-flag-id":true})) + ">" + (jade.escape(null == (jade.interp = t('flag_blog_flag_' + flag.id, { defaultValue: flag.name })) ? "" : jade.interp)) + "</li>")
;
    }

  }
}).call(this)
;

if ( current_user.level === '10')
{
buf.push("<li" + (jade.attrs({ 'data-post-id':(post.id), 'data-blog-id':(post.blog.id), 'data-admin-hide':("hide"), "class": [('admin-hide')] }, {"data-post-id":true,"data-blog-id":true,"data-admin-hide":true})) + ">" + (jade.escape(null == (jade.interp = t('flag_blog_admin_flag', { defaultValue: 'Hide from popular (ADMIN)' })) ? "" : jade.interp)) + "</li>")
;
}
buf.push("</ul></div></div></div></div><!--/noindex--><!--googleon: all-->")
;
}
buf.push("</div></article><div" + (jade.attrs({ 'id':("shareModal-" + (post.blog.id) + "-" + (post.id) + ""), "class": [('modal'),('share-modal')] }, {"id":true})) + "><div class=\"modal-header\"><a href=\"#\" class=\"close\">&times;</a><div class=\"modal-label\">" + (jade.escape(null == (jade.interp = t('share_modal_label', { defaultValue: 'Share post'})) ? "" : jade.interp)) + "</div></div><div class=\"modal-body\"><ul><li><a" + (jade.attrs({ 'href':("mailto:?body=" + (encodeURIComponent(post.title)) + " from the blog " + (encodeURIComponent(post.blog.name)) + " %0A" + (encodeURIComponent(post.post_link)) + " %0A%0ASign up for mydropintheoceans:%0Ahttp://www.mydropintheoceans.com/join&subject=Link from mydropintheoceans"), 'data-func':("emailPost"), 'data-post-id':("" + (post.id) + ""), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"target":true})) + "><div class=\"email-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('email', { defaultValue: 'Email' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("facebookPost"), 'data-desc':(post.summary ? "" + (post.summary) + "" : null), 'data-name':("" + (post.title) + ""), 'data-caption':("" + (post.source) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-desc":true,"data-name":true,"data-caption":true,"data-pic":true,"data-post-id":true})) + "><div class=\"facebook-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('facebook', { defaultValue: 'Facebook' })) ? "" : jade.interp)) + "</span></a></li><li><a" + (jade.attrs({ 'href':("https://twitter.com/share?url=" + (encodeURIComponent(post.post_link)) + "&via=mydropintheoceans&text=" + (encodeURIComponent(post.title)) + ""), 'data-func':("tweet"), 'data-post-id':("" + (post.id) + ""), 'data-title':(t('twitter_popup_title', { defaultValue: 'Tweet this!' })), 'target':("_blank") }, {"href":true,"data-func":true,"data-post-id":true,"data-title":true,"target":true})) + "><div class=\"twitter-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('twitter', { defaultValue: 'Twitter' })) ? "" : jade.interp)) + "</span></a></li><li class=\"last-child\"><a" + (jade.attrs({ 'href':("" + (post.post_link) + ""), 'data-func':("pin"), 'data-name':("" + (post.title) + ""), 'data-pic':(post.media ? "" + (post.media) + "" : null), 'data-post-id':("" + (post.id) + "") }, {"href":true,"data-func":true,"data-name":true,"data-pic":true,"data-post-id":true})) + "><div class=\"pinterest-icon\"></div><span>" + (jade.escape(null == (jade.interp = t('pinterest', { defaultValue: 'Pinterest' })) ? "" : jade.interp)) + "</span></a></li></ul></div></div></li>")
;;return buf.join("")
;
}
,
"posts/curator_user":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),user = locals_.user,default_avatar = locals_.default_avatar,avatar = locals_.avatar,current_user = locals_.current_user,t = locals_.t;var followers_mixin = function(num){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var followers = (num)
;
if ( (num >= 10000))
{
var followers = (Math.round(followers/1000) + 'k')
;
}
buf.push(jade.escape(null == (jade.interp = followers) ? "" : jade.interp))
;
};
var avatar_path = (!user.avatar || user.avatar === default_avatar ? avatar : user.avatar)
;
buf.push("<li" + (jade.attrs({ 'data-user-id':(user.user_id), 'data-user-name':(user.first_name), 'data-avatar':(avatar_path), 'data-user-profile':(user.profile_link), "class": [('curator-item'),('user'),([ user.following === "following" ? "following" : ""])] }, {"class":true,"data-user-id":true,"data-user-name":true,"data-avatar":true,"data-user-profile":true})) + ">")
;
if ( (user.user_id != current_user.userid))
{
buf.push("<a" + (jade.attrs({ 'href':("/_/user/follow/" + (user.user_id) + ""), "class": [('follow')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('blog_follow_button', { defaultValue: 'Follow' })) ? "" : jade.interp)) + "</a><a" + (jade.attrs({ 'href':("/_/user/unfollow/" + (user.user_id) + ""), "class": [('unfollow')] }, {"href":true})) + ">" + (jade.escape(null == (jade.interp = t('blog_unfollow_button', { defaultValue: 'Following' })) ? "" : jade.interp)) + "</a>")
;
}
buf.push("<a" + (jade.attrs({ 'href':(user.profile_link), "class": [('item-link')] }, {"href":true})) + "><img" + (jade.attrs({ 'src':(avatar_path), "class": [('avatar')] }, {"src":true})) + "/><h3 class=\"title\">" + (null == (jade.interp = user.first_name) ? "" : jade.interp) + "</h3></a><div class=\"followers\">")
;
if ( user.followers)
{
if ( user.followers == 1)
{
buf.push(jade.escape(null == (jade.interp = t('blog_followers_one', { defaultValue: '1 follower' })) ? "" : jade.interp))
;
}
else
{
followers_mixin(user.followers)
;
buf.push((jade.escape(null == (jade.interp = " ") ? "" : jade.interp)) + (jade.escape(null == (jade.interp = t('blog_followers', { defaultValue: 'followers' })) ? "" : jade.interp)))
;
}
}
buf.push("</div><ol class=\"posts\">")
;
for (var i = 0; i < 3; i++)
{
var post = user.posts[i] || {};
buf.push("<li class=\"post\"><a" + (jade.attrs({ 'href':(user.profile_link), "class": [('post-link')] }, {"href":true})) + "><div class=\"post-title\">" + (null == (jade.interp = post.title) ? "" : jade.interp) + "</div>")
;
if ( post.media)
{
buf.push("<div" + (jade.attrs({ 'title':(post.title), 'style':("background-image:url(" + post.CDN_thumb + ")"), "class": [('post-cover')] }, {"title":true,"style":true})) + "></div>")
;
}
buf.push("</a></li>")
;
}
buf.push("</ol></li>")
;;return buf.join("")
;
}
,
"partials/find_blogs_popover":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),t = locals_.t;buf.push("<div id=\"findBlogsPopover\" class=\"popover onboarding-popover find-blogs-popover bottom\"><div class=\"arrow\"></div><div class=\"popover-content\"><p>" + (jade.escape(null == (jade.interp = t('find_blogs_popover', { defaultValue: 'Welcome! Click here to find more blogs to follow.' })) ? "" : jade.interp)) + "</p></div></div>")
;;return buf.join("")
;
}
,
"partials/tooltip":function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),body = locals_.body;buf.push("<div class=\"tooltip top\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\">" + (jade.escape(null == (jade.interp = body) ? "" : jade.interp)) + "</div></div>")
;;return buf.join("")
;
}
}