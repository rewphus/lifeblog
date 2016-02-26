/*!
 * Materialize v0.94.2 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e)for(var t=(new Date).getTime(),r=0,n=v.State.calls.length;n>r;r++)if(v.State.calls[r]){var o=v.State.calls[r],s=o[0],l=o[2],u=o[3],f=!!u;u||(u=v.State.calls[r][3]=t-16);for(var d=Math.min((t-u)/l.duration,1),m=0,y=s.length;y>m;m++){var h=s[m],b=h.element;if(i(b)){var S=!1;if(l.display!==a&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var w=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(w,function(e,t){x.setPropertyValue(b,"display",t)})}x.setPropertyValue(b,"display",l.display)}l.visibility!==a&&"hidden"!==l.visibility&&x.setPropertyValue(b,"visibility",l.visibility);for(var V in h)if("element"!==V){var C=h[V],T,k=g.isString(C.easing)?v.Easings[C.easing]:C.easing;if(1===d)T=C.endValue;else if(T=C.startValue+(C.endValue-C.startValue)*k(d),!f&&T===C.currentValue)continue;if(C.currentValue=T,x.Hooks.registered[V]){var A=x.Hooks.getRoot(V),F=i(b).rootPropertyValueCache[A];F&&(C.rootPropertyValue=F)}var E=x.setPropertyValue(b,V,C.currentValue+(0===parseFloat(T)?"":C.unitType),C.rootPropertyValue,C.scrollData);x.Hooks.registered[V]&&(i(b).rootPropertyValueCache[A]=x.Normalizations.registered[A]?x.Normalizations.registered[A]("extract",null,E[1]):E[1]),"transform"===E[0]&&(S=!0)}l.mobileHA&&i(b).transformCache.translate3d===a&&(i(b).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(b)}}l.display!==a&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility!==a&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],d,Math.max(0,u+l.duration-t),u),1===d&&p(r)}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),o.loop!==!0||t||($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),(f||v.State.isFirefox)&&"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}return/^[\d-]/.test(l)||(l=i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):s(e,x.Names.prefixCheck(r)[0])),x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return f?k.promise||null:d}function s(){function e(e){function f(e,t){var r=a,n=a,i=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?i=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),g.isFunction(r)&&(r=r.call(o,V,w)),g.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function m(){var e={myParent:o.parentNode||r.body,position:x.getPropertyValue(o,"position"),fontSize:x.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(h,h)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===A){var S=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0,T,F,E;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,T=s.container["scroll"+S],E=T+$(o).position()[S.toLowerCase()]+C):s.container=null:(T=v.State.scrollAnchor[v.State["scrollProperty"+S]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],E=$(o).offset()[S.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:T,currentValue:T,endValue:E,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:F}},element:o},v.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void $.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,P.easing||delete s.easing,P.duration||delete s.duration,s=$.extend({},i(o).opts,s);var j=$.extend(!0,{},i(o).tweensContainer);for(var H in j)if("element"!==H){var N=j[H].startValue;j[H].startValue=j[H].currentValue=j[H].endValue,j[H].endValue=N,g.isEmptyObject(P)||(j[H].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(j[H]),o)}l=j}else if("start"===A){var j;i(o).tweensContainer&&i(o).isAnimating===!0&&(j=i(o).tweensContainer),$.each(b,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=f(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var p=[l[c]];o&&p.push(o),u!==a&&p.push(u[c]),b[e+s[c]]=p}delete b[e]}}});for(var O in b){var z=f(b[O]),q=z[0],M=z[1],I=z[2];O=x.Names.camelCase(O);var B=x.Hooks.getRoot(O),W=!1;if(i(o).isSVG||x.Names.prefixCheck(B)[1]!==!1||x.Normalizations.registered[B]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(O)&&!I&&0!==q&&(I=0),s._cacheValues&&j&&j[O]?(I===a&&(I=j[O].endValue+j[O].unitType),W=i(o).rootPropertyValueCache[B]):x.Hooks.registered[O]?I===a?(W=x.getPropertyValue(o,B),I=x.getPropertyValue(o,O,W)):W=x.Hooks.templates[B][1]:I===a&&(I=x.getPropertyValue(o,O));var G,D,X,Y=!1;if(G=d(O,I),I=G[0],X=G[1],G=d(O,q),q=G[0].replace(/^([+-\/*])=/,function(e,t){return Y=t,""}),D=G[1],I=parseFloat(I)||0,q=parseFloat(q)||0,"%"===D&&(/^(fontSize|lineHeight)$/.test(O)?(q/=100,D="em"):/^scale/.test(O)?(q/=100,D=""):/(Red|Green|Blue)$/i.test(O)&&(q=q/100*255,D="")),/[\/*]/.test(Y))D=X;else if(X!==D&&0!==I)if(0===q)D=X;else{p=p||m();var Q=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch(X){case"%":I*="x"===Q?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:I*=p[X+"ToPx"]}switch(D){case"%":I*=1/("x"===Q?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:I*=1/p[D+"ToPx"]}}switch(Y){case"+":q=I+q;break;case"-":q=I-q;break;case"*":q=I*q;break;case"/":q=I/q}l[O]={rootPropertyValue:W,startValue:I,currentValue:I,endValue:q,unitType:D,easing:M},v.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(l[O]),o)}else v.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}l.element=o}l.element&&(x.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(v.State.calls.length>1e4&&(v.State.calls=n(v.State.calls)),v.State.calls.push([R,h,s,null,k.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):V++)}var o=this,s=$.extend({},v.defaults,P),l={},p;switch(i(o)===a&&v.init(o),parseFloat(s.delay)&&s.queue!==!1&&$.queue(o,s.queue,function(e){v.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=y;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}v.mock!==!1&&(v.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(v.mock)||1,s.delay*=parseFloat(v.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(h),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(o)[0]||$.dequeue(o)}var l=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),f,d,m,h,b,P;if(g.isWrapped(this)?(f=!1,m=0,h=this,d=this):(f=!0,m=1,h=l?arguments[0].elements:arguments[0]),h=o(h)){l?(b=arguments[0].properties,P=arguments[0].options):(b=arguments[m],P=arguments[m+1]);var w=h.length,V=0;if("stop"!==b&&!$.isPlainObject(P)){var C=m+1;P={};for(var T=C;T<arguments.length;T++)g.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?g.isString(arguments[T])||g.isArray(arguments[T])?P.easing=arguments[T]:g.isFunction(arguments[T])&&(P.complete=arguments[T]):P.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};f&&v.Promise&&(k.promise=new v.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(b){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":$.each(h,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=g.isString(P)?P:"";return P!==a&&t[2].queue!==o?!0:void $.each(h,function(t,r){r===n&&(P!==a&&($.each($.queue(r,o),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(r,o,[])),i(r)&&""===o&&$.each(i(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e))})})}),$.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(h),e();default:if(!$.isPlainObject(b)||g.isEmptyObject(b)){if(g.isString(b)&&v.Redirects[b]){var E=$.extend({},P),j=E.duration,H=E.delay||0;return E.backwards===!0&&(h=$.extend(!0,[],h).reverse()),$.each(h,function(e,t){parseFloat(E.stagger)?E.delay=H+parseFloat(E.stagger)*e:g.isFunction(E.stagger)&&(E.delay=H+E.stagger.call(t,e,w)),E.drag&&(E.duration=parseFloat(j)||(/^(callout|transition)/.test(b)?1e3:y),E.duration=Math.max(E.duration*(E.backwards?1-e/w:(e+1)/w),.75*E.duration,200)),v.Redirects[b].call(t,t,E||{},e,w,h,k.promise?k:a)
}),e()}var N="Velocity: First argument ("+b+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];$.each(h,function(e,t){g.isNode(t)&&s.call(t)});var E=$.extend({},v.defaults,P),O;if(E.loop=parseInt(E.loop),O=2*E.loop-1,E.loop)for(var z=0;O>z;z++){var q={delay:E.delay,progress:E.progress};z===O-1&&(q.display=E.display,q.visibility=E.visibility,q.complete=E.complete),S(h,"reverse",q)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));

// Velocity has conflicts when loaded with jQuery, this will check for it
var Vel;
if ($) {
  Vel = $.Velocity;
}
else {
  Vel = Velocity;
}

;(function ($) {
  $.fn.collapsible = function(options) {
    var defaults = {
        accordion: true
    };

    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('.collapsible-header');

      // Accordion Open
      function accordionOpen(object) {
        object.parent().toggleClass('active');
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false});
        }
        $panel_headers.not(object).parent().removeClass('active');
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false});
      }

      // Collapsible Open
      function collapsibleOpen(object) {
        object.parent().toggleClass('active');
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false});
        }
      }

      if (defaults.accordion) {

        $panel_headers.each(function () {
          $(this).click(function () {
            accordionOpen($(this));
          });
        });

        // Open first active
        accordionOpen($panel_headers.filter('.active').first());
      }
      else {
        $panel_headers.each(function () {

          // Open any bodies that have the active class
          if ($(this).hasClass('active')) {
            collapsibleOpen($(this));
          }

          $(this).click(function () {
            collapsibleOpen($(this));
          });
        });
      }

    });
  };
}( jQuery ));;(function ($) {

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Constrains width of dropdown to the activator
      hover: true
    }

    options = $.extend(defaults, options);
    this.each(function(){
    var origin = $(this);

    // Dropdown menu
    var activates = $("#"+ origin.attr('data-activates'));

    // Move Dropdown menu to body. This allows for absolute positioning to work
    if ( !(activates.parent().is($('body'))) ) {
      activates.detach();
      $('body').append(activates);
    }


    /*
      Helper function to position and resize dropdown.
      Used in hover and click handler.
    */
    function placeDropdown() {
      var dropdownRealHeight = activates.height();
      if (options.constrain_width === true) {
        activates.css('width', origin.outerWidth());
      }
      if (elementOrParentIsFixed(origin[0])) {
        activates.css({
          display: 'block',
          position: 'fixed',
          height: 0,
          top: origin.position().top,
          left:origin.position().left
        });
      }
      else {
        activates.css({
          display: 'block',
          top: origin.offset().top,
          left: origin.offset().left,
          height: 0
        });
      }
      activates.velocity({opacity: 1}, {duration: options.inDuration, queue: false, easing: 'easeOutQuad'})
      .velocity(
      {
        height: dropdownRealHeight
      },
      {duration: options.inDuration,
        queue: false,
        easing: 'easeOutCubic',
        complete: function(){
          activates.css('overflow-y', 'auto')
        }
      });
    }
    function elementOrParentIsFixed(element) {
        var $element = $(element);
        var $checkElements = $element.add($element.parents());
        var isFixed = false;
        $checkElements.each(function(){
            if ($(this).css("position") === "fixed") {
                isFixed = true;
                return false;
            }
        });
        return isFixed;
    }




    // Hover
    if (options.hover) {
      // Hover handler to show dropdown
      origin.on('mouseover', function(e){ // Mouse over
        placeDropdown();
      });

      // Document click handler
      activates.on('mouseleave', function(e){ // Mouse out
        activates.velocity(
          {
            opacity: 0
          },
          {
            duration: options.outDuration,
            easing: 'easeOutQuad',
            complete: function(){
              activates.css({
                display: 'none',
                'overflow-y': ''
              });
            }
          });
      });

    // Click
    } else {
      var open = false;

      // Click handler to show dropdown
      origin.click( function(e){ // Click
        e.preventDefault(); // Prevents button click from moving window
        e.stopPropagation();
        placeDropdown();
        $(document).bind('click.'+ activates.attr('id'), function (e) {
          if (!activates.is(e.target) && (!origin.is(e.target))) {
            activates.velocity({
              opacity: 0
            },
            {
              duration: options.outDuration,
              easing: 'easeOutQuad',
              complete: function(){
                activates.css({
                  display: 'none',
                  'overflow-y': ''
                });
              }
            });
            $(document).unbind('click.' + activates.attr('id'));
          }
        });
      });

    } // End else

    // Window Resize Reposition
    $(document).on('resize', function(){

    });
   });
  }; // End dropdown plugin
}( jQuery ));;(function($) {
  $.fn.extend({
    openModal: function(options) {
      var modal = this;
      var overlay = $('<div id="lean-overlay" class="my-lean-overlay"></div>');
      $("body").append(overlay);

      var defaults = {
        opacity: 0.5,
        in_duration: 300,
        out_duration: 200,
        ready: undefined,
        complete: undefined,
        dismissible: true
      }

      // Override defaults
      options = $.extend(defaults, options);

      if (options.dismissible) {
        $("#lean-overlay").click(function() {
          $(modal).closeModal(options);
        });
        // Return on ESC
        $(document).keyup(function(e) {
          if (e.keyCode === 27) {   // ESC key
            $(modal).closeModal(options);
            $(this).off();
          }
        });
      }

      $(modal).find(".modal-close").click(function(e) {
        e.preventDefault();
        $(modal).closeModal(options);
      });

      $("#lean-overlay").css({ display : "block", opacity : 0 });

      $(modal).css({
        display : "block",
        top: "4%",
        opacity: 0
      });

      $("#lean-overlay").velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});

      // Define Bottom Sheet animation
      if ($(this).hasClass('bottom-sheet')) {
      	$("body").css({"overflow":"hidden"});
        $(this).velocity({bottom: "0", opacity: 1}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }
      else {
	      $(modal).velocity({top: "10%", opacity: 1}, {
	        duration: options.in_duration,
	        queue: false,
	        ease: "easeOutCubic",
	        // Handle modal ready callback
	        complete: function() {
	          if (typeof(options.ready) === "function") {
	            options.ready();
	          }
	        }
	      });			
      }
    }
  });

  $.fn.extend({
    closeModal: function(options) {
      var defaults = {
        out_duration: 200,
        complete: undefined
      }
      var options = $.extend(defaults, options);
	  
	  // Define Bottom Sheet animation
      if ($(this).hasClass('bottom-sheet')) {
      	$("body").css({"overflow":"auto"});
        $(this).velocity({bottom: "-100%", opacity: 0}, {
          duration: options.out_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            $("#lean-overlay").css({display:"none"});

            // Call complete callback
            if (typeof(options.complete) === "function") {
              options.complete();
            }
            $("#lean-overlay").remove();
          }
        });
      }
      else {
	      $("#lean-overlay").velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});
	      $(this).fadeOut(options.out_duration, function() {
	        $(this).css({ top: 0});
	        $("#lean-overlay").css({display:"none"});
	
	        // Call complete callback
	        if (typeof(options.complete) === "function") {
	          options.complete();
	        }
	      });
      }
    }
  })

  $.fn.extend({
    leanModal: function(options) {
      return this.each(function() {
        // Close Handlers
        $(this).click(function(e) {
          var modal_id = $(this).attr("href");
          $(modal_id).openModal(options);
          e.preventDefault();
        }); // done set on click
      }); // done return
    }
  });
})(jQuery);
;(function ($) {

  $.fn.materialbox = function () {

    return this.each(function() {

      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;

      origin.wrap(placeholder);
      origin.on('click', function(){

        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();

        // If already modal, return to original
        if (doneAnimating === false) {
          return false;
        }
        else if (overlayActive && doneAnimating===true) {
          returnToOriginal();
          return false;
        }

        // Set states
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;

        // Set positioning for placeholder

        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        })

        // Set css on origin
        origin.css({position: 'absolute', 'z-index': 1000})
        .data('width', originalWidth)
        .data('height', originalHeight);

        // Add overlay
        var overlay = $('<div id="materialbox-overlay"></div>')
          .css({
            opacity: 0
          })
          .click(function(){
            if (doneAnimating === true)
            returnToOriginal();
          });
          // Animate Overlay
          $('body').append(overlay);
          overlay.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'}
            );


        // Add and animate caption if it exists
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({ "display": "inline" });
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'})
        }



        // Resize Image
        var ratio = 0;
        var widthPercent = originalWidth / windowWidth;
        var heightPercent = originalHeight / windowHeight;
        var newWidth = 0;
        var newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = windowWidth * 0.9;
          newHeight = windowWidth * 0.9 * ratio;
        }
        else {
          ratio = originalWidth / originalHeight;
          newWidth = (windowHeight * 0.9) * ratio;
          newHeight = windowHeight * 0.9;
        }

        // Animate image + set z-index
        if(origin.hasClass('responsive-img')) {
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,
            complete: function(){
              origin.css({left: 0, top: 0})
              .velocity(
                {
                  height: newHeight,
                  width: newWidth,
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },
                {
                  duration: inDuration,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function(){doneAnimating = true;}
                }
              );
            } // End Complete
          }); // End Velocity
        }
        else {
          origin.css('left', 0)
          .css('top', 0)
          .velocity(
            {
              height: newHeight,
              width: newWidth,
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },
            {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad',
              complete: function(){doneAnimating = true;}
            }
            ); // End Velocity
        }

    }); // End origin on click


      // Return on scroll
      $(window).scroll(function() {
        if (overlayActive ) {
          returnToOriginal();
        }
      });

      // Return on ESC
      $(document).keyup(function(e) {

        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key
          if (overlayActive) {
            returnToOriginal();
          }
        }
      });


      // This function returns the modaled image to the original spot
      function returnToOriginal() {

          doneAnimating = false;

          var placeholder = origin.parent('.material-placeholder');
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var originalWidth = origin.data('width');
          var originalHeight = origin.data('height');


          $('#materialbox-overlay').fadeOut(outDuration, function(){
            // Remove Overlay
            overlayActive = false;
            $(this).remove();
          });

          // Resize Image
          origin.velocity(
            {
              width: originalWidth,
              height: originalHeight,
              left: 0,
              top: 0
            },
            {
              duration: outDuration,
              queue: false, easing: 'easeOutQuad'
            }
          );

          // Remove Caption + reset css settings on image
          $('.materialbox-caption').velocity({opacity: 0}, {
            duration: outDuration + 200, // Delay prevents animation overlapping
            queue: false, easing: 'easeOutQuad',
            complete: function(){
              placeholder.css({
                height: '',
                width: '',
                position: '',
                top: '',
                left: ''
              });

              origin.css({
                height: '',
                position: '',
                top: '',
                left: '',
                width: '',
                'max-width': '',
                position: '',
                'z-index': ''
              });

              // Remove class
              origin.removeClass('active');
              doneAnimating = true;
              $(this).remove();
            }
          });

        }
        });
};
}( jQuery ));;(function ($) {

    $.fn.parallax = function () {
      var window_width = $(window).width();
      // Parallax Scripts
      return this.each(function(i) {
        var $this = $(this);
        $this.addClass('parallax');

        function updateParallax(initial) {
          if (window_width > 992) {
            var container_height = $this.height();
            var img_height = $this.children("img").height();
            var parallax_dist = img_height - container_height;
            var bottom = $this.offset().top + container_height;
            var top = $this.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = window.innerHeight;
            var windowBottom = scrollTop + windowHeight;
            var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
            var parallax = -1 * parallax_dist * percentScrolled;      

            if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) { 
              $this.children("img").first().css('bottom', parallax + "px");
            }
            if (initial) {
              $this.children("img").first().show();
            }

          }
          else {
            $this.children("img").show();
          }
        }
        updateParallax(true);
        
        $(window).scroll(function() {
          window_width = $(window).width();
          updateParallax(false);
        });

      });

    };
}( jQuery ));;(function ($) {

  $.fn.tabs = function () {

    return this.each(function() {

    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    var $this = $(this),
        window_width = $(window).width();

    $this.width('100%');
    // Set Tab Width for each tab
    var $num_tabs = $(this).children('li').length;
    $this.children('li').each(function() {
      $(this).width((100/$num_tabs)+'%');
    });
    var $active, $content, $links = $this.find('li.tab a'),
        $tabs_width = $this.width(),
        $tab_width = $this.find('li').first().outerWidth(),
        $index = 0;

    // If the location.hash matches one of the links, use that as the active tab.
    // console.log($(".tabs .tab a[href='#tab3']"));
    var link = location.hash.split('/');
    $active = $($links.filter('[href="'+link[0]+'"]'));
	
	//$this.find(".indicator")
	if($(window).width() > 599){
		$this.find("#navigation-header").css({"display":"block"});
		$this.find("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}

    // If no match is found, use the first link or any with class 'active' as the initial active tab.
    if ($active.length === 0) {
        $active = $(this).find('li.tab a.active').first();
    }
    if ($active.length === 0) {
      $active = $(this).find('li.tab a').first();
    }

    $active.addClass('active');
    $index = $links.index($active);
    if ($index < 0) {
      $index = 0;
    }

    $content = $($active[0].hash);

    // append indicator then set indicator width to tab width
    $this.append('<div class="indicator"></div>');
    var $indicator = $this.find('.indicator');
    if ($this.is(":visible")) {
      $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
      $indicator.css({"left": $index * $tab_width});
    }
    $(window).resize(function () {
      $tabs_width = $this.width();
      $tab_width = $this.find('li').first().outerWidth();
      if ($index < 0) {
        $index = 0;
      }
      if ($tab_width !== 0 && $tabs_width !== 0) {
        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
        $indicator.css({"left": $index * $tab_width});
      }
    });

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });
    
    
	var data = location.hash.split('/');
	if($this.hasClass("mainNav")){
		if(location.hash == "#discover"){
			ShowDiscoverHome();
			$this.find(".indicator").css({"display":"block"});
		}else if(location.hash == "#notifications"){
			ShowNotificationsHome();
			$this.find(".indicator").css({"display":"none"});
		}else if(location.hash == "#admin"){
			ShowAdminHome();
			$this.find(".indicator").css({"display":"none"});
		}else if(location.hash == "#activity"){
			ShowActivityHome();
			$this.find(".indicator").css({"display":"block"});
		}else if(data[0] == "#game" && data[1] > 0){
			ShowGame(data[1], '', true);
			$this.find(".indicator").css({"display":"none"});
		}else if(data[0] == "#profile" && data[1] > 0){
			ShowUserProfile(data[1], false);
			$this.find(".indicator").css({"display":"none"});
		}else if(data[0] == "#landing"){
			ShowLanding();
			$this.find(".indicator").css({"display":"none"});
		}else{
			if($("#loginButton").length > 0){
				ShowLanding();
				$this.find(".indicator").css({"display":"none"});
			}else{
				ShowActivityHome();
				$this.find(".indicator").css({"display":"block"});
			}
		}
		
		var updateNavTitle = "";
		if(location.hash == "#activity"){
			updateNavTitle = "Activity";
		}else if(location.hash == "#profile"){
			updateNavTitle = "Profile";
		}else if(location.hash == "#discover"){
			updateNavTitle = "Discover";
		}else if(location.hash == "#notifications"){
			updateNavTitle = "Notifications";
		}
		if(updateNavTitle != "")
			$(".mobileTab").html(updateNavTitle);
	}
    


    // Bind the click event handler
    $this.on('click', 'a', function(e){
      GLOBAL_HASH_REDIRECT = "NO";
      $tabs_width = $this.width();
      $tab_width = $this.find('li').first().outerWidth();

      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();
      //$this.find(".indicator")
      $oldcontent = $content;

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);
      if($(this).prop("hash") != "#profile" && $(this).prop("hash") != "#games" && $(this).prop("hash") != "#game-myxp-tab" && $(this).prop("hash") != "#game-user-tab" && $(this).prop("hash") != "#game-critic-tab")
      	location.hash = $(this).prop("hash");
      $links = $this.find('li.tab a');

      // Make the tab active.
      $active.addClass('active');
      var $prev_index = $index;
      $index = $links.index($(this));
      if ($index < 0) {
        $index = 0;
      }
		
	  //$this.find(".indicator")
      //$content.show();
	  var windowWidth = $(window).width();
	  if($this.hasClass("mainNav")){
	  	$("#game").css({"display":"none"});
	  	$("#landing").css({"display":"none"});
	  	$("#user").css({"display":"none"});
	  	$("#admin").css({"display":"none"});
	  }
      // Update indicator
      if (($index - $prev_index) >= 0) {
      	//$this.find(".indicator") - Move Right
      	$content.css({"display":"inline-block", "left": -windowWidth});
		$oldcontent.velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
		$content.velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
        $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
        $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 80});

      }
      else {
      	//$this.find(".indicator") - Move Left
      	$content.css({"display":"inline-block", "left":windowWidth});
		$oldcontent.velocity({ "left": -windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
		$content.velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
        $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});
        $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 80});
      }
      
      if($this.hasClass("mainNav")){
      	//window.scrollTo(0, 0);
  		$(".dynamicModal").each(function(){
			$(this).remove();
		});	
      }else if($this.hasClass("gameNav")){
      	window.scrollTo(0, 6);
   		var gameid = $("#gameContentContainer").attr("data-id");
 		var title = $("#gameContentContainer").attr("data-title");
 		GLOBAL_HASH_REDIRECT = "NO";
 		location.hash = "game/"+gameid+"/"+title;
      }
      
      	var updateNavTitle = "";
		if($active.attr("href") == "#activity"){
			updateNavTitle = "Activity";
			$this.find(".indicator").css({"display":"block"});
		}else if($active.attr("href") == "#profile"){
			updateNavTitle = "Profile";
			$this.find(".indicator").css({"display":"block"});
		}else if($active.attr("href") == "#discover"){
			updateNavTitle = "Discover";
			$this.find(".indicator").css({"display":"block"});
		}else if($active.attr("href") == "#notifications"){
			updateNavTitle = "Notifications";
			$this.find(".indicator").css({"display":"none"});
		}
		if(updateNavTitle != "")
			$(".mobileTab").html(updateNavTitle);
		
      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

  };
}( jQuery ));
;(function ($) {
    $.fn.tooltip = function (options) {
        var timeout = null,
        counter = null,
        started = false,
        counterInterval = null,
        margin = 5;

      // Defaults
      var defaults = {
        delay: 350
      };
      options = $.extend(defaults, options);

      //Remove previously created html
      $('.material-tooltip').remove();

      return this.each(function(){
        var origin = $(this);

      // Create Text span
      var tooltip_text = $('<span></span>').text(origin.attr('data-tooltip'));

      // Create tooltip
      var newTooltip = $('<div></div>');
      newTooltip.addClass('material-tooltip').append(tooltip_text);
      newTooltip.appendTo($('body'));

      var backdrop = $('<div></div>').addClass('backdrop');
      backdrop.appendTo(newTooltip);
      backdrop.css({ top: 0, left:0 });


     //Destroy previously binded events
    $(this).off('mouseenter mouseleave');
      // Mouse In
    $(this).on({
      mouseenter: function(e) {
        var tooltip_delay = origin.data("delay");
        tooltip_delay = (tooltip_delay === undefined || tooltip_delay === '') ? options.delay : tooltip_delay;
        counter = 0;
        counterInterval = setInterval(function(){
          counter += 10;
          if (counter >= tooltip_delay && started === false) {
            started = true;
            newTooltip.css({ display: 'block', left: '0px', top: '0px' });

            // Set Tooltip text
            newTooltip.children('span').text(origin.attr('data-tooltip'));

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();
            var tooltipPosition =  origin.attr('data-position');
            var tooltipHeight = newTooltip.outerHeight();
            var tooltipWidth = newTooltip.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var scale_factor = 8;

            if (tooltipPosition === "top") {
            // Top Position
            newTooltip.css({
              top: origin.offset().top - tooltipHeight - margin,
              left: origin.offset().left + originWidth/2 - tooltipWidth/2
            });
            tooltipVerticalMovement = '-10px';
            backdrop.css({
              borderRadius: '14px 14px 0 0',
              transformOrigin: '50% 90%',
              marginTop: tooltipHeight,
              marginLeft: (tooltipWidth/2) - (backdrop.width()/2)

            });
            }
            // Left Position
            else if (tooltipPosition === "left") {
              newTooltip.css({
                top: origin.offset().top + originHeight/2 - tooltipHeight/2,
                left: origin.offset().left - tooltipWidth - margin
              });
              tooltipHorizontalMovement = '-10px';
              backdrop.css({
                width: '14px',
                height: '14px',
                borderRadius: '14px 0 0 14px',
                transformOrigin: '95% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: tooltipWidth
              });
            }
            // Right Position
            else if (tooltipPosition === "right") {
              newTooltip.css({
                top: origin.offset().top + originHeight/2 - tooltipHeight/2,
                left: origin.offset().left + originWidth + margin
              });
              tooltipHorizontalMovement = '+10px';
              backdrop.css({
                width: '14px',
                height: '14px',
                borderRadius: '0 14px 14px 0',
                transformOrigin: '5% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: '0px'
              });
            }
            else {
              // Bottom Position
              newTooltip.css({
                top: origin.offset().top + origin.outerHeight() + margin,
                left: origin.offset().left + originWidth/2 - tooltipWidth/2
              });
              tooltipVerticalMovement = '+10px';
              backdrop.css({
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)
              });
            }

            // Calculate Scale to fill
            scale_factor = tooltipWidth / 8;
            if (scale_factor < 8) {
              scale_factor = 8;
            }
            if (tooltipPosition === "right" || tooltipPosition === "left") {
              scale_factor = tooltipWidth / 10;
              if (scale_factor < 6)
                scale_factor = 6;
            }

            newTooltip.velocity({ opacity: 1, marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false });
            backdrop.css({ display: 'block' })
            .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
            .velocity({scale: scale_factor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});

          }
        }, 10); // End Interval

      // Mouse Out
      },
      mouseleave: function(){
        // Reset State
        clearInterval(counterInterval);
        counter = 0;

        // Animate back
        newTooltip.velocity({
          opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false, delay: 275 }
        );
        backdrop.velocity({opacity: 0, scale: 1}, {
          duration:225,
          delay: 275, queue: false,
          complete: function(){
            backdrop.css('display', 'none');
            newTooltip.css('display', 'none');
            started = false;}
        });
      }
      });
    });
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));
(function ($) {
  $(document).ready(function() {

    // jQuery reverse
    jQuery.fn.reverse = [].reverse;

    $('.fixed-action-btn').each(function (i) {
      var $this = $(this);
      $this.find('ul a.btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: "40px"},
        { duration: 0 });


      var timer;
      $this.hover(
        function() {
          var time = 0;
          $this.find('ul a.btn-floating').reverse().each(function () {
            $(this).velocity(
              { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"},
              { duration: 100, delay: time });
            time += 40;
          });
        }, function() {
          var time = 0;
          $this.find('ul a.btn-floating').velocity("stop", true);
          $this.find('ul a.btn-floating').velocity(
            { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: "40px"},
            { duration: 100 });
        }
      );
    });

  });
}( jQuery ));;


/*!
 * Waves v0.5.3
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {

        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {

        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 700,

        show: function(e) {

            // Disable right click
            if (e.button === 2) {
              return false;
            }

            var el = this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 22)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
            rippleStyle['-moz-transition-duration']    = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
            rippleStyle['-o-transition-duration']      = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
            rippleStyle['transition-duration']         = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';

            ripple.setAttribute('style', convertStyle(rippleStyle));

        },

        hide: function() {

            var el = this;

            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;

            var childrenLength = el.children.length;

            for (var a = 0; a < childrenLength; a++) {
                if (el.children[a].className.indexOf('waves-ripple') !== -1) {
                    ripple = el.children[a];
                    continue;
                }
            }

            if (!ripple) {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 500 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {

                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {

                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }


                }, Effect.duration);

            }, delay);

        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {

            for (var a = 0; a < elements.length; a++) {

                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {

                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        return false;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);

                }

            }
        }
    };

    Waves.displayEffect = function(options) {

        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        Array.prototype.forEach.call($$('.waves-effect'), function(i) {

        if ('ontouchstart' in window) {
          i.addEventListener('mouseup', Effect.hide, false);                      i.addEventListener('touchstart', Effect.show, false);
          i.addEventListener('mouseleave', Effect.hide, false);                   i.addEventListener('touchend',   Effect.hide, false);
          i.addEventListener('touchcancel',   Effect.hide, false);
        }

        i.addEventListener('mousedown', Effect.show, false);
        i.addEventListener('mouseup', Effect.hide, false);
        i.addEventListener('mouseleave', Effect.hide, false);


        });

    };

    window.Waves = Waves;

    $(document).ready(function() {
      Waves.displayEffect();
    });

})(window);;function toast(message, displayLength, className, completeCallback) {
    className = className || "";

    var container = document.getElementById('toast-container');

    // Create toast container if it does not exist
    if (container === null) {
        // create notification container
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    // Select and append toast
    var newToast = createToast(message);

    // only append toast if message is not undefined
    if(message){
        container.appendChild(newToast);
    }

    newToast.style.top = '35px';
    newToast.style.opacity = 0;

    // Animate toast in
    Vel(newToast, { "top" : "0px", opacity: 1 }, {duration: 300,
      easing: 'easeOutCubic',
      queue: false});

    // Allows timer to be pause while being panned
    var timeLeft = displayLength;
    var counterInterval = setInterval (function(){


      if (newToast.parentNode === null)
        window.clearInterval(counterInterval);

      // If toast is not being dragged, decrease its time remaining
      if (!newToast.classList.contains('panning')) {
        timeLeft -= 20;
      }

      if (timeLeft <= 0) {
        // Animate toast out
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,
            easing: 'easeOutExpo',
            queue: false,
            complete: function(){
              // Call the optional callback
              if(typeof(completeCallback) === "function")
                completeCallback();
              // Remove toast after it times out
              this[0].parentNode.removeChild(this[0]);
            }
          });
        window.clearInterval(counterInterval);
      }
    }, 20);



    function createToast(html) {

        // Create toast
        var toast = document.createElement('div');
        toast.classList.add('toast');
        if (className) {
            var classes = className.split(' ');

            for (var i = 0, count = classes.length; i < count; i++) {
                toast.classList.add(classes[i]);
            }
        }
        toast.innerHTML = html;

        // Bind hammer
        var hammerHandler = new Hammer(toast, {prevent_default: false});
        hammerHandler.on('pan', function(e) {
          var deltaX = e.deltaX;
          var activationDistance = 80;

          // Change toast state
          if (!toast.classList.contains('panning')){
            toast.classList.add('panning');
          }

          var opacityPercent = 1-Math.abs(deltaX / activationDistance);
          if (opacityPercent < 0)
            opacityPercent = 0;

          Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});

        });

        hammerHandler.on('panend', function(e) {
          var deltaX = e.deltaX;
          var activationDistance = 80;

          // If toast dragged past activation point
          if (Math.abs(deltaX) > activationDistance) {
            Vel(toast, {marginTop: '-40px'}, { duration: 375,
                easing: 'easeOutExpo',
                queue: false,
                complete: function(){
                  if(typeof(completeCallback) === "function") {
                    completeCallback();
                  }
                  toast.parentNode.removeChild(toast);
                }
            });

          } else {
            toast.classList.remove('panning');
            // Put toast back into original position
            Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
              easing: 'easeOutExpo',
              queue: false
            });

          }
        });

        return toast;
    }
};;(function ($) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }

    function keydown(e) {
      for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
          preventDefault(e);
          return;
        }
      }
    }

    function wheel(e) {
      preventDefault(e);
    }

    function disable_scroll() {
      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = wheel;
      document.onkeydown = keydown;
    }

    function enable_scroll() {
      if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    }

    $.fn.sideNav = function (options) {
      var defaults = {
        activationWidth: 70,
        edge: 'left'
      }
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menu_id = $("#"+ $this.attr('data-activates'));
        var menuWidth = 240;

        // Add alignment
        if (options.edge != 'left') {
          menu_id.addClass('right-aligned');
        }

        // Add Touch Area
        $('body').append($('<div class="drag-target"></div>'));
        if (options.edge === 'left') {
          $('.drag-target').css({'left': 0})
        }
        else {
          $('.drag-target').css({'right': 0})
        }

        // Window resize to reset on large screens fixed
        if (menu_id.hasClass('fixed')) {
          $(window).resize( function() {
            if ($(window).width() > 1200) {
              if (menu_id.attr('style')) {
                menu_id.removeAttr('style');
              }
            }
          });
        }

        function removeMenu() {
          panning = false;
          menuOut = false;
          $('#sidenav-overlay').animate({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $('.drag-target').css({width: '', right: '', left: '0'});
            menu_id.velocity({left: -1 * (menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutCubic'});
          }
          else {
            // Reset phantom div
            $('.drag-target').css({width: '', right: '0', left: ''});
            menu_id.velocity({right: -1 * (menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutCubic'});
          }

          // enable_scroll();
        }

        // Touch Event
        var panning = false;
        var menuOut = false;

        $('.drag-target').hammer({
          prevent_default: false
        }).bind('tap', function(e) {
          // capture overlay click on drag target
          if (menuOut && !panning) {
            $('#sidenav-overlay').trigger('click');
          }
        }).bind('pan', function(e) {

          if (e.gesture.pointerType === "touch") {

            var direction = e.gesture.direction;
            var x = e.gesture.center.x;
            var y = e.gesture.center.y;
            var velocityX = e.gesture.velocityX;

            if (!$('#sidenav-overlay').length) {
              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0).click(function(){ removeMenu(); });
              $('body').append(overlay);
            }

            // Keep within boundaries
            if (options.edge === 'left') {
              if (x > menuWidth) { x = menuWidth; }
              else if (x < 0) { x = 0; }
            }
            else {
              if (x < $(window).width() - menuWidth) { x = $(window).width() - menuWidth; }
            }

            if (options.edge === 'left') {
              // Left Direction
              if (x < (menuWidth / 2)) { menuOut = false; }
              // Right Direction
              else if (x >= (menuWidth / 2)) { menuOut = true; }
            }
            else {
              // Left Direction
              if (x < ($(window).width() - menuWidth / 2)) { menuOut = true; }
              // Right Direction
              else if (x >= ($(window).width() - menuWidth / 2)) { menuOut = false; }
            }


            if (options.edge === 'left') {
              menu_id.css('left', (x - menuWidth));
            }
            else {
              menu_id.css('right', -1 *(x - menuWidth / 2));
            }

            // Percentage overlay
            if (options.edge === 'left') {
              var overlayPerc = x / menuWidth;
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
            else {
              var overlayPerc = Math.abs((x - $(window).width()) / menuWidth);
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
          }
        }).bind('panend', function(e) {
          if (e.gesture.pointerType === "touch") {
            var velocityX = e.gesture.velocityX;
            panning = false;

            if (options.edge === 'left') {
              if (menuOut || velocityX < -0.5) {
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                $('.drag-target').css({width: '50%', right: 0, left: ''});
              }
              else if (!menuOut || velocityX > 0.3) {
                menu_id.velocity({left: -240}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 50, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                $('.drag-target').css({width: '10%', right: '', left: 0});
              }
            }
            else {
              if (menuOut || velocityX > 0.5) {
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                $('.drag-target').css({width: '50%', right: '', left: 0});
              }
              else if (!menuOut || velocityX < -0.3) {
                menu_id.velocity({right: -240}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 50, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                $('.drag-target').css({width: '10%', right: 0, left: ''});
              }
            }


          }
        });

          $this.click(function() {
            if (menu_id.hasClass('active')) {
              menuOut = false;
              panning = false;
              removeMenu();
            }
            else {
              // disable_scroll();

              if (options.edge === 'left') {
                $('.drag-target').css({width: '50%', right: 0, left: ''});
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }
              else {
                $('.drag-target').css({width: '50%', right: '', left: 0});
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }

              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0)
              .click(function(){
                menuOut = false;
                panning = false;
                removeMenu();
                overlay.animate({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  } });

              });
              $('body').append(overlay);
              overlay.animate({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  menuOut = true;
                  panning = false;
                }
              });
            }

            return false;
          });
});

};
}( jQuery ));;/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var unique_id = 1;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			if (element.height() > 0) {
				var elTop = element.offset().top,
					elLeft = element.offset().left,
					elRight = elLeft + element.width(),
					elBottom = elTop + element.height();

				var isIntersect = !(elLeft > right ||
					elRight < left ||
					elTop > bottom ||
					elBottom < top);

				if (isIntersect) {
					hits.push(element);
				}
			}
		});

		return hits;
	}


	/**
	 * Called when the user scrolls the window
	 */
	function onScroll() {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
//        + 60 accounts for fixed nav
		var intersections = findElements(top+offset.top + 200, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {

			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}

	/**
	 * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @type {function}
	 * @return {number}
	 */
	var getTime = (Date.now || function () {
		return new Date().getTime();
	});

	/**
	 * Returns a function, that, when invoked, will only be triggered at most once
	 * during a given window of time. Normally, the throttled function will run
	 * as much as it can, without ever going more than once per `wait` duration;
	 * but if you'd like to disable the execution on the leading edge, pass
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @param {function} func
	 * @param {number} wait
	 * @param {Object=} options
	 * @returns {Function}
	 */
	function throttle(func, wait, options) {
		var context, args, result;
		var timeout = null;
		var previous = 0;
		options || (options = {});
		var later = function () {
			previous = options.leading === false ? 0 : getTime();
			timeout = null;
			result = func.apply(context, args);
			context = args = null;
		};
		return function () {
			var now = getTime();
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0) {
				clearTimeout(timeout);
				timeout = null;
				previous = now;
				result = func.apply(context, args);
				context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
        throttle : number -> scrollspy throttling. Default: 100 ms
        offsetTop : number -> offset from top. Default: 0
        offsetRight : number -> offset from right. Default: 0
        offsetBottom : number -> offset from bottom. Default: 0
        offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
		var visible = [];
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
			$(element).data("scrollSpy:id", i);
			// Smooth scroll to section
		  $('a[href=#' + $(element).attr('id') + ']').click(function(e) {
		    e.preventDefault();
		    var offset = $(this.hash).offset().top + 1;

//            offset-60 to handle floating fixed tab bar
				if ($('.tabs-wrapper').length) {
			    $('html, body').animate({ scrollTop: offset-60 }, {duration: 400, easing: 'easeOutCubic'});
				}
				else {
		    	$('html, body').animate({ scrollTop: offset }, {duration: 400, easing: 'easeOutCubic'});
				}
		  });
		});
		options = options || {
			throttle: 100
		};

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = throttle(onScroll, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);


		selector.on('scrollSpy:enter', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			var $this = $(this);

			if (visible[0]) {
				$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
					visible.unshift($(this));
				}
				else {
					visible.push($(this));
				}
			}
			else {
				visible.push($(this));
			}


			$('a[href=#' + visible[0].attr('id') + ']').addClass('active');
		});
		selector.on('scrollSpy:exit', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			if (visible[0]) {
				$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
				var $this = $(this);
				visible = $.grep(visible, function(value) {
	        return value.attr('id') != $this.attr('id');
	      });
	      if (visible[0]) { // Check if empty
					$('a[href=#' + visible[0].attr('id') + ']').addClass('active');
	      }
			}
		});

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);;(function ($) {
  $(document).ready(function() {

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], textarea';

    $(input_selector).each(function(){
      if($(this).val().length !== 0) {
       $(this).siblings('label, i').addClass('active');
      }
    })

    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, i').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      console.log($(this).is(':valid'));
      if ($(this).val().length === 0) {
        $(this).siblings('label, i').removeClass('active');

        if ($(this).hasClass('validate')) {
          $(this).removeClass('valid');
          $(this).removeClass('invalid');
        }
      }
      else {
        if ($(this).hasClass('validate')) {
          if ($(this).is(':valid')) {
            $(this).removeClass('invalid');
            $(this).addClass('valid');
          }
          else {
            $(this).removeClass('valid');
            $(this).addClass('invalid');
          }
        }
      }
    });


    // Textarea Auto Resize
    if ($('.hiddendiv').length === 0) {
      var hiddenDiv = $('<div class="hiddendiv common"></div>'),
        content = null;
        $('body').append(hiddenDiv);
    }
    var hiddendiv = $('.hiddendiv');
    var text_area_selector = '.materialize-textarea';
      $('body').on('keyup keydown',text_area_selector , function () {
        // console.log($(this).val());
        content = $(this).val();
        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br>');
        // console.log(hiddenDiv.html());
        $(this).css('height', hiddenDiv.height());
      });


    // Range Input
    var range_type = 'input[type=range]';
    var range_mousedown = false;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var range_wrapper = '.range-field';

      $(document).on("mousedown", range_wrapper, function(e) {
        var thumb = $(this).children('.thumb');
        if (thumb.length <= 0) {
          thumb = $('<span class="thumb"><span class="value"></span></span>');
          $(this).append(thumb);
        }

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }
      var left = e.pageX - $(this).offset().left;
      var width = $(this).outerWidth();

      if (left < 0) {
        left = 0;
      }
      else if (left > width) {
        left = width;
      }
      thumb.addClass('active').css('left', left);
      thumb.find('.value').html($(this).children('input[type=range]').val());

    });
    $(document).on("mouseup", range_wrapper, function() {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on("mousemove", range_wrapper, function(e) {

      var thumb = $(this).children('.thumb');
      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
        }
        var left = e.pageX - $(this).offset().left;
        var width = $(this).outerWidth();

        if (left < 0) {
          left = 0;
        }
        else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
        thumb.find('.value').html($(this).children('input[type=range]').val());
      }

    });
    $(document).on("mouseout", range_wrapper, function() {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px"}, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });




    //  Select Functionality

// Select Plugin
    $.fn.material_select = function (callback) {
      $(this).each(function(){
        $select = $(this);

        if ( $select.hasClass('browser-default') || $select.hasClass('initialized')) {
          return; // Continue to next (return false breaks out of entire loop)
        }

        var uniqueID = guid();
        var wrapper = $('<div class="select-wrapper"></div>');
        var options = $('<ul id="select-options-' + uniqueID+'" class="dropdown-content select-dropdown"></ul>');
        var selectOptions = $select.children('option');
        if ($select.find('option:selected') !== undefined) {
          var label = $select.find('option:selected');
        }
        else {
          var label = options.first();
        }


        // Create Dropdown structure
        selectOptions.each(function () {
          // Add disabled attr if disabled
          options.append($('<li class="' + (($(this).is(':disabled')) ? 'disabled' : '') + '"><span>' + $(this).html() + '</span></li>'));
        });


        options.find('li').each(function (i) {
          var $curr_select = $select;
          $(this).click(function () {
            // Check if option element is disabled
            if (!$(this).hasClass('disabled')) {
              $curr_select.find('option').eq(i).prop('selected', true);
              // Trigger onchange() event
              $curr_select.trigger('change');
              $curr_select.siblings('input.select-dropdown').val($(this).text());
              if (typeof callback !== 'undefined') callback();
            }
          });

        });

        // Wrap Elements
        $select.wrap(wrapper);
        // Add Select Display Element
        var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '')
                         + ' data-activates="select-options-' + uniqueID +'" value="'+ label.html() +'"/><i class="mdi-navigation-arrow-drop-down">');
        $select.before($newSelect);
        $('body').append(options);
        // Check if section element is disabled
        if (!$select.is(':disabled')) {
          $newSelect.dropdown({"hover": false});
        }
        $select.addClass('initialized');

        $newSelect.on('focus', function(){
          $(this).trigger('open');
          label = $(this).val();
          selectedOption = options.find('li').filter(function() {
            return $(this).text().toLowerCase() === label.toLowerCase();
          })[0];
          activateOption(options, selectedOption);
        });

        $newSelect.on('blur', function(){
          $(this).trigger('close');
        });

        // Make option as selected and scroll to selected position
        activateOption = function(collection, newOption) {
          collection.find('li.active').removeClass('active');
          $(newOption).addClass('active');
          collection.scrollTop(newOption);
        }

        // Allow user to search by typing
        // this array is cleared after 1 second
        filterQuery = []

        onKeyDown = function(event){
          // TAB - switch to another input
          if(event.which == 9){
            $newSelect.trigger('close');
            return
          }

          // ARROW DOWN WHEN SELECT IS CLOSED - open select options
          if(event.which == 40 && !options.is(":visible")){
            $newSelect.trigger('open');
            return
          }

          // ENTER WHEN SELECT IS CLOSED - submit form
          if(event.which == 13 && !options.is(":visible")){
            return
          }

          event.preventDefault();

          // CASE WHEN USER TYPE LETTERS
          letter = String.fromCharCode(event.which).toLowerCase();

          if (letter){
            filterQuery.push(letter);

            string = filterQuery.join("");

            newOption = options.find('li').filter(function() {
              return $(this).text().toLowerCase().indexOf(string) === 0;
            })[0];

            if(newOption){
              activateOption(options, newOption);
            }
          }

          // ENTER - select option and close when select options are opened
          if(event.which == 13){
            activeOption = options.find('li.active:not(.disabled)')[0];
            if(activeOption){
              $(activeOption).trigger('click');
              $newSelect.trigger('close');
            }
          }

          // ARROW DOWN - move to next not disabled option
          if(event.which == 40){
            newOption = options.find('li.active').next('li:not(.disabled)')[0];
            if(newOption){
              activateOption(options, newOption);
            }
          }

          // ESC - close options
          if(event.which == 27){
            $newSelect.trigger('close');
          }

          // ARROW UP - move to previous not disabled option
          if(event.which == 38){
            newOption = options.find('li.active').prev('li:not(.disabled)')[0];
            if(newOption){
              activateOption(options, newOption);
            }
          }

          // Automaticaly clean filter query so user can search again by starting letters
          setTimeout(function(){filterQuery = []}, 1000)
        }

        $newSelect.on('keydown', onKeyDown);
      });
    }

    // Unique ID
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
      };
    })();

  });

}( jQuery ));
;(function ($) {

  $.fn.slider = function (options) {
    var defaults = {
      indicators: true,
      height: 400,
      transition: 500,
      interval: 6000
    }
    options = $.extend(defaults, options);

    return this.each(function() {

      // For each slider, we want to keep track of
      // which slide is active and its associated content
      var $this = $(this);
      var $slider = $this.find('ul.slides').first();
      var $slides = $slider.find('li');
      var $active_index = $slider.find('.active').index();
      var $active;
      if ($active_index != -1) { $active = $slides.eq($active_index); }

      // Transitions the caption depending on alignment
      function captionTransition(caption, duration) {
        if (caption.hasClass("center-align")) {
          caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
        }
        else if (caption.hasClass("right-align")) {
          caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
        }
        else if (caption.hasClass("left-align")) {
          caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
        }
      }

      // This function will transition the slide to any index of the next slide
      function moveToSlide(index) {
        if (index >= $slides.length) index = 0;
        else if (index < 0) index = $slides.length -1;

        $active_index = $slider.find('.active').index();

        // Only do if index changes
        if ($active_index != index) {
          $active = $slides.eq($active_index);
          $caption = $active.find('.caption');

          $active.removeClass('active');
          $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
                            complete: function() {
                              $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                            } });
          captionTransition($caption, options.transition);


          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).removeClass('active');
          }

          $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
          $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
          $slides.eq(index).addClass('active');


          // Update indicators
          if (options.indicators) {
            $indicators.eq(index).addClass('active');
          }
        }
      }

      // Set height of slider
      $this.height(options.height + 40);
      $slider.height(options.height);

      // Set initial positions of captions
      $slides.find('.caption').each(function () {
        captionTransition($(this), 0);
      });

      // dynamically add indicators
      if (options.indicators) {
        var $indicators = $('<ul class="indicators"></ul>');
        $slides.each(function( index ) {
          var $indicator = $('<li class="indicator-item"></li>');

          // Handle clicks on indicators
          $indicator.click(function () {
            var $parent = $slider.parent();
            var curr_index = $parent.find($(this)).index();
            moveToSlide(curr_index);

            // reset interval
            clearInterval($interval);
            $interval = setInterval(
              function(){
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);

              }, options.transition + options.interval
            );
          });
          $indicators.append($indicator);
        });
        $this.append($indicators);
        $indicators = $this.find('ul.indicators').find('li.indicator-item');
      }

      if ($active) {
        $active.show();
      }
      else {
        $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

        $active_index = 0;
        $active = $slides.eq($active_index);

        // Update indicators
        if (options.indicators) {
          $indicators.eq($active_index).addClass('active');
        }
      }

      // Adjust height to current slide
      $active.find('img').load(function() {
        // Handler for .load() called.
        $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
      });

      // auto scroll
      $interval = setInterval(
        function(){
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);

        }, options.transition + options.interval
      );


      // HammerJS, Swipe navigation

      // Touch Event
      var panning = false;
      var swipeLeft = false;
      var swipeRight = false;

      $this.hammer({
          prevent_default: false
      }).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {

          // reset interval
          clearInterval($interval);

          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $curr_slide = $slider.find('.active');
          $curr_slide.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
            swipeRight = true;
          }
          // Swipe Right
          else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
            swipeLeft = true;
          }

          // Make Slide Behind active slide visible
          var next_slide;
          if (swipeLeft) {
            next_slide = $curr_slide.next();
            if (next_slide.length === 0) {
              next_slide = $slides.first();
            }
            next_slide.velocity({ opacity: 1
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }
          if (swipeRight) {
            next_slide = $curr_slide.prev();
            if (next_slide.length === 0) {
              next_slide = $slides.last();
            }
            next_slide.velocity({ opacity: 1
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }


        }

      }).bind('panend', function(e) {
        if (e.gesture.pointerType === "touch") {

          $curr_slide = $slider.find('.active');
          panning = false;
          curr_index = $slider.find('.active').index();

          if (!swipeRight && !swipeLeft) {
            // Return to original spot
            $curr_slide.velocity({ translateX: 0
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }
          else if (swipeLeft) {
            moveToSlide(curr_index + 1);
            $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                  complete: function() {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                  } });
          }
          else if (swipeRight) {
            moveToSlide(curr_index - 1);
            $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                  complete: function() {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                  } });
          }
          swipeLeft = false;
          swipeRight = false;

          // Restart interval
          clearInterval($interval);
          $interval = setInterval(
            function(){
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
              else $active_index += 1;

              moveToSlide($active_index);

            }, options.transition + options.interval
          );
        }
      });


    });

  };
}( jQuery ));;(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('.card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          $(this).find('.card-reveal').velocity({translateY: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});        
        }
        else if ($(e.target).is($('.card .card-title')) || 
                 $(e.target).is($('.card .card-title i')) ||
                 $(e.target).is($('.card .card-image')) ) {
          $(this).find('.card-reveal').velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeOutQuad'});        
        }
      }


    });  

  });
}( jQuery ));;(function ($) {
  $(document).ready(function() {

    // Unique ID
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
      };
    })();

    $.fn.pushpin = function (options) {

      var defaults = {
        top: 0,
        bottom: Infinity,
        offset: 0
      }
      options = $.extend(defaults, options);

      $index = 0;
      return this.each(function() {
        var $uniqueId = guid(),
            $this = $(this),
            $original_offset = $(this).offset().top;
        // console.log(options.top, options.bottom, $(this).offset().top);

        function removePinClasses(object) {
          object.removeClass('pin-top');
          object.removeClass('pinned');
          object.removeClass('pin-bottom');
        }

        function updateElements(objects, scrolled) {
          // console.log("OBJECTS", objects);
          objects.each(function () {
            // Add position fixed (because its between top and bottom)
            if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
              removePinClasses($(this));
              $(this).css('top', options.offset);
              $(this).addClass('pinned');
              // console.log("Pinned!", $(this));
            }

            // Add pin-top (when scrolled position is above top)
            if (scrolled < options.top && !$(this).hasClass('pin-top')) {
              removePinClasses($(this));
              $(this).css('top', 0);
              $(this).addClass('pin-top');
              // console.log("Pin Top!", $(this));
            }

            // Add pin-bottom (when scrolled position is below bottom)
            if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
              removePinClasses($(this));
              $(this).addClass('pin-bottom');
              $(this).css('top', options.bottom - $original_offset);
              // console.log("Pin Bottom!", $(this));
            }
          });
        }


        
        updateElements($this, $(window).scrollTop());
        $(window).on('scroll.' + $uniqueId, function () {
          var $scrolled = $(window).scrollTop() + options.offset;
          // console.log($(window).scrollTop(), $scrolled);
          updateElements($this, $scrolled);
        });

      }); 



    };

  
  

  });
}( jQuery ));;

(function ($) {
  // Image transition function
  $.fn.fadeInImage =  function(selector){
    var element = $(selector);
    element.css({opacity: 0});
    $(element).velocity({opacity: 1}, {
        duration: 650,
        queue: false,
        easing: 'easeOutSine'
      });
    $(element).velocity({opacity: 1}, {
          duration: 1300,
          queue: false,
          easing: 'swing',
          step: function(now, fx) {
              fx.start = 100;
              var grayscale_setting = now/100;
              var brightness_setting = 150 - (100 - now)/1.75;

              if (brightness_setting < 100) {
                brightness_setting = 100;
              }
              if (now >= 0) {
                $(this).css({
                    "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",
                    "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"
                });
              }
          }
      });
  };
  
  //Custom Slide Up
    $.fn.slideUp = function(selector) {
  	
  	var time = 0;

   var element = $(selector);
    $(element).velocity({opacity: 0, translateY: "+100px"});
    $(element).velocity({opacity: 1, translateY: "0"},
    { duration: 800, delay: time, easing: [60, 10] });
      
   };
  
   $.fn.slideLeft = function(selector) {
  	var time = 0;
  	
	
   var element = $(selector);
    $(element).velocity({opacity: 0, translateX: "+100px"});
    $(element).velocity({opacity: 1, translateX: "40"},
    { duration: 800, delay: time, easing: [60, 10] });
      
   };
   
   $.fn.slideRight = function(selector) {
  	var time = 0;

	
   var element = $(selector);
    $(element).velocity({opacity: 0, translateX: "-100px"});
    $(element).velocity({opacity: 1, translateX: "-40"},
    { duration: 800, delay: time, easing: [60, 10] });
      
   };

  // Horizontal staggered list
  $.fn.showStaggeredList = function(selector) {
    var time = 0;
    $(selector).find('li').velocity(
        { translateX: "-100px"},
        { duration: 0 });

    $(selector).find('li').each(function() {
      $(this).velocity(
        { opacity: "1", translateX: "0"},
        { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });
  };
  



  $(document).ready(function() {
    // Hardcoded .staggered-list scrollFire
    // var staggeredListOptions = [];
    // $('ul.staggered-list').each(function (i) {

    //   var label = 'scrollFire-' + i;
    //   $(this).addClass(label);
    //   staggeredListOptions.push(
    //     {selector: 'ul.staggered-list.' + label,
    //      offset: 200,
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
    // });
    // scrollFire(staggeredListOptions);

    // HammerJS, Swipe navigation

    // Touch Event
    var swipeLeft = false;
    var swipeRight = false;


    // Dismissible Collections
    $('.dismissable').each(function() {
      $(this).hammer({
        prevent_default: false
      }).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $this.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
            swipeLeft = true;
          }

          // Swipe Right
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).bind('panend', function(e) {
        // Reset if collection is moved back into original position
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
          swipeRight = false;
          swipeLeft = false;
        }

        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) { fullWidth = $this.innerWidth(); }
            else { fullWidth = -1 * $this.innerWidth(); }

            $this.velocity({ translateX: fullWidth,
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:
              function() {
                $this.css('border', 'none');
                $this.velocity({ height: 0, padding: 0,
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:
                    function() { $this.remove(); }
                  });
              }
            });
          }
          else {
            $this.velocity({ translateX: 0,
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });

    });


    // time = 0
    // // Vertical Staggered list
    // $('ul.staggered-list.vertical li').velocity(
    //     { translateY: "100px"},
    //     { duration: 0 });

    // $('ul.staggered-list.vertical li').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", translateY: "0"},
    //     { duration: 800, delay: time, easing: [60, 25] });
    //   time += 120;
    // });

    // // Fade in and Scale
    // $('.fade-in.scale').velocity(
    //     { scaleX: .4, scaleY: .4, translateX: -600},
    //     { duration: 0});
    // $('.fade-in').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
    //     { duration: 800, easing: [60, 10] });
    // });
  });
}( jQuery ));
;

(function($) {

  // Input: Array of JSON objects {selector, offset, callback}

  $.fn.scrollFire = function(options) {

    var didScroll = false;

    window.addEventListener("scroll", function() {
      didScroll = true;
    });

    // Rate limit to 100ms
    setInterval(function() {
      if(didScroll) {
          didScroll = false;

          var windowScroll = window.pageYOffset + window.innerHeight;

          for (var i = 0 ; i < options.length; i++) {
            // Get options from each line
            var value = options[i];
            var selector = value.selector,
                offset = value.offset,
                callback = value.callback;

            var currentElement = document.querySelector(selector);
            if ( currentElement !== null) {
              var elementOffset = currentElement.getBoundingClientRect().top + document.body.scrollTop;

              if (windowScroll > (elementOffset + offset)) {
                if (value.done !== true) {
                  var callbackFunc = new Function(callback);
                  callbackFunc();
                  value.done = true;
                }
              }
            }
          }
      }
    }, 100);
  };

})(jQuery);;
/*!
 * pickadate.js v3.5.0, 2014/04/13
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('jquery') )

    // Browser globals.
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If thereâ€™s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If itâ€™s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root with a holder and then prepare it.
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()


                // If thereâ€™s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once weâ€™re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the â€œstartâ€ and â€œrenderâ€ events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) P.$root.html( createWrappedComponent() )
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued â€œrenderâ€ events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If itâ€™s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued â€œstopâ€ events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If itâ€™s already open, do nothing.
                if ( STATE.open ) return P

                // Add the â€œactiveâ€ class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the â€œopenedâ€ state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the â€œopenedâ€ class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root elementâ€™s jQuery object.
                    // * Workaround for iOS8 to bring the pickerâ€™s root into view.
                    P.$root[0].focus()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Donâ€™t worry about clicks or focusins on the root because those donâ€™t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesnâ€™t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasnâ€™t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$root.children()[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or â€œenterâ€ keypress on the element.
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On â€œenterâ€, if the highlighted item isnâ€™t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight ).close()
                            }
                        }


                        // If the target is within the root and â€œenterâ€ is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued â€œopenâ€ events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    // ....ah yes! It wouldâ€™ve been incomplete without a crazy workaround for IE :|
                    // The focus is triggered *after* the close has completed - causing it
                    // to open again. So unbind and rebind the event at the next tick.
                    P.$root.off( 'focus.toOpen' )[0].focus()
                    setTimeout( function() {
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )
                    }, 0 )
                }

                // Remove the â€œactiveâ€ class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the â€œopenedâ€ state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the â€œopenedâ€ and â€œfocusedâ€ class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If itâ€™s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued â€œcloseâ€ events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isnâ€™t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and thereâ€™s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isnâ€™t muted, trigger queued â€œsetâ€ events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure thereâ€™s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isnâ€™t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the â€œinputâ€ class name.
            addClass(CLASSES.input).

            // Remove the tabindex.
            attr('tabindex', -1).

            // If thereâ€™s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


        // Only bind keydown events if the element isnâ€™t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // On focus/click, focus onto the root to open it up.
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {
                    event.preventDefault()
                    P.$root[0].focus()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

        P.$root.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                // When something within the root is focused, stop from bubbling
                // to the doc and remove the â€œfocusedâ€ state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isnâ€™t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, donâ€™t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the root so that users can click away
                            // from elements focused within the picker.
                            P.$root[0].focus()
                        }
                    }
                }
            }).

            // Add/remove the â€œtargetâ€ class on focus and blur.
            on({
                focus: function() {
                    $ELEMENT.addClass( CLASSES.target )
                },
                blur: function() {
                    $ELEMENT.removeClass( CLASSES.target )
                }
            }).

            // Open the picker and adjust the root â€œfocusedâ€ state
            on( 'focus.toOpen', handleFocusToOpenEvent ).

            // If thereâ€™s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If itâ€™s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$root[0].focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                }

                // If a â€œclearâ€ button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear().close( true )
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$root

        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original inputâ€™s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })


        // Insert the hidden input as specified in the settings.
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )
        else $ELEMENT.after( P._hidden )
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on â€œescapeâ€.
        if ( keycode == 27 ) {
            P.close()
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Separated for IE
    function handleFocusToOpenEvent( event ) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // If itâ€™s a focus event, add the â€œfocusedâ€ class to the root.
        if ( event.type == 'focus' ) {
            P.$root.addClass( CLASSES.focused )
        }

        // And then finally open the picker.
        P.open()
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browserâ€™s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesnâ€™t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));


;/*!
 * Date picker for pickadate.js v3.5.0
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When thereâ€™s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, { format: formatString })
    }

    // If thereâ€™s no value, default to highlighting â€œtodayâ€.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If thereâ€™s no value, use the type as the value.
    value = value === undefined ? type : value


    // If itâ€™s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If itâ€™s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If itâ€™s an array, convert it into a date and make sure
    // that itâ€™s a valid date â€“ otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If itâ€™s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If itâ€™s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal â€œtrueâ€, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If weâ€™re navigating months but the view is in a different
        // month, navigate to the viewâ€™s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month weâ€™re going to doesnâ€™t have enough days,
        // keep decreasing the date until we reach the monthâ€™s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If itâ€™s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If itâ€™s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if weâ€™ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If thereâ€™s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // â€¢ Navigating months.
    // â€¢ Not inverted and date enabled.
    // â€¢ Inverted and all dates disabled.
    // â€¢ ..and anything else.
    if ( !options || !options.nav ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there arenâ€™t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If weâ€™ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If weâ€™ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If weâ€™ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If itâ€™s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If itâ€™s an object, match a date within the â€œfromâ€ and â€œtoâ€ range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm itâ€™s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar â€œenabledâ€ flag and respectively flip the
    // disabled state. Then also check if itâ€™s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If itâ€™s already parsed, weâ€™re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        var word = string.match( /\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When weâ€™re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When weâ€™re working with date representations, compare the â€œpickâ€ value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When weâ€™re working with range objects, compare the â€œfromâ€ and â€œtoâ€.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When weâ€™re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When weâ€™re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the â€œenabledâ€ state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as â€œdisabledâ€.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If weâ€™re flipping, thatâ€™s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as â€œenabledâ€.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If weâ€™re flipping, thatâ€™s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the â€œinvertedâ€ state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that weâ€™re dealing with an exact range of dates,
            // make sure there are no â€œinvertedâ€ dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn

        // Materialize modified
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        //Materialize modified
        createMonthLabel = function(override) {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

             // Materialize modified
            if (override == "short_months") {
              monthsCollection = settings.monthsShort;
            }

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths ) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth,
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // Materialize modified
            if (override == "short_months")
                return _.node( 'div', monthsCollection[ viewsetObject.month ] )

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        // Materialize modified
        createYearLabel = function(override) {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }


                return _.node( 'select',
                    _.group({
                        min: lowestYear,
                        max: highestYear,
                        i: 1,
                        node: 'option',
                        item: function( loopedYear ) {
                            return [

                                // The looped year and no classes.
                                loopedYear, 0,

                                // Set the value and selected index.
                                'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                            ]
                        }
                    }),
                    settings.klass.selectYear,
                    ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelYearSelect + '"'
                )
            }

            // Materialize modified
            if (override == "raw")
                return _.node( 'div', focusedYear )

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


        // Materialize modified
        createDayLabel = function() {
                if (selectedObject != null)
                    return _.node( 'div', selectedObject.date)
                else return _.node( 'div', nowObject.date)
            }
        createWeekdayLabel = function() {
            var display_day;

            if (selectedObject != null)
                display_day = selectedObject.day;
            else
                display_day = nowObject.day;
            var weekday = settings.weekdaysFull[ display_day ]
            return weekday
        }


    // Create and return the entire calendar.
return _.node(
        // Date presentation View
        'div',
            _.node(
                'div',
                createWeekdayLabel(),
                "picker__weekday-display"
            )+
            _.node(
                // Div for short Month
                'div',
                createMonthLabel("short_months"),
                settings.klass.month_display
            )+
            _.node(
                // Div for Day
                'div',
                createDayLabel() ,
                settings.klass.day_display
            )+
            _.node(
                // Div for Year
                'div',
                createYearLabel("raw") ,
                settings.klass.year_display
            ),
        settings.klass.date_display
    )+
    // Calendar container
    _.node('div',
        _.node('div',
        ( settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    )
    , settings.klass.calendar_container) // end calendar

     +

    // * For Firefox forms to submit, make sure to set the buttonsâ€™ `type` attributes as â€œbuttonâ€.
    _.node(
        'div',
        _.node( 'button', settings.today, "btn-flat picker__today",
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, "btn-flat picker__clear",
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, "btn-flat picker__close",
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Materialize modified
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',


            // Materialize Added klasses
            date_display: prefix + 'date-display',
            day_display: prefix + 'day-display',
            month_display: prefix + 'month-display',
            year_display: prefix + 'year-display',
            calendar_container: prefix + 'calendar-container',
            // end



            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));


/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! VelocityJS.org (1.2.1). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),o.loop!==!0||t||($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:1},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});
function ShowActivityHome(){
	ShowActivityContent("All");
}

function ShowActivityContent(filter){
  	ShowLoader($("#activityInnerContainer"), 'big', "<br><br><br>");
  	var windowWidth = $(window).width();
    $("#activity").css({"display":"inline-block", "left": -windowWidth});
    $("#discover, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").css({"display":"none"});
    $("#discover, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#activity").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayActivity", filter: filter },
     type: 'post',
     success: function(output) {
     			$("#activityInnerContainer").html(output);
				AttachActivityEvents();
				AttachSecondaryEvents();
      			Waves.displayEffect();
      			GAPage('Activity - '+filter, '/activity');
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function RefreshActivity(filter){
  	ShowLoader($(".activity-top-level"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "RefreshMainActivity", filter: filter },
     type: 'post',
     success: function(output) {
     			$(".activity-top-level").html(output);
				AttachActivityEvents();
      			Waves.displayEffect();
      			GAPage('Activity - '+filter, '/activity');
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachActivityEvents(){
	 $(".user-discover-card").on("click", function(e){
	  	e.stopPropagation();
	 	ShowUserPreviewCard($(this).find(".user-preview-card"), $("#activity"));
	 });
 	 $(".feed-avatar, .user-avatar").on("click", function(e){
	  	e.stopPropagation();
	 	ShowUserPreviewCard($(this).parent().find(".user-preview-card"), $("#activity"));
	 });
	 $(".feed-bookmark-card, .feed-activity-game-link, .feed-release-card").on("click", function(e){
	 	e.stopPropagation(); 
	 	ShowGame($(this).attr("data-gbid"), $("#activity"));
	 })
	 $(".feed-card-image").on("click", function(e){
	 	e.stopPropagation(); 
	 	ShowGame($(this).parent().attr("data-gbid"), $("#activity"));
	 })
	 AttachAgreesFromActivity();
	 $(window).unbind("scroll");
	 $(window).scroll(function(){
	 	if(isScrolledIntoView($("#feed-endless-loader"))){
	 		if($("#feed-endless-loader").html() == "")
      			EndlessLoader();
	 	}
     });
}

function AttachSecondaryEvents(){
 	$(".activity-category-selector").on('click', function(e){
		e.stopPropagation();
		var selected = $(this).attr("class");
		$(".activity-category-selected").removeClass("activity-category-selected");
		$(".activity-category-selector").each(function(){
			var category = $(this).attr("id");
			if(category == selected)
				$(this).addClass("activity-category-selected");
		});
		var icon = $(this).attr("data-icon");
		var iconloc = $(".activity-header-icon .activity-header-icon-picker");
		iconloc.removeClass();
		iconloc.addClass(icon);
		iconloc.addClass("activity-header-icon-picker");
		$(this).addClass("activity-category-selected");
		if($(this).attr("id") == "activity-someoneelse"){
			ShowUserActivity($(this).attr("data-id"));
		}else{
			RefreshActivity($(this).attr("data-filter"));
		}
	});
}

function EndlessLoader(){
	ShowLoader($("#feed-endless-loader"), 'big', "<br><br><br>");
	$("#feed-endless-loader").append("<br><br><br>");
	var page = $("#feed-endless-loader").attr("data-page");
	var date = $("#feed-endless-loader").attr("data-date");
	var filter = $("#feed-endless-loader").attr("data-filter");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayActivityEndless", page: page, date: date, filter: filter },
     type: 'post',
     success: function(output) {
		$("#feed-endless-loader").before(output);
		$("#feed-endless-loader").html("");
		$("#feed-endless-loader").attr("data-page", parseInt(page) + 45);
		var lastdate = $("#feed-endless-loader").parent().find(".feed-date-divider:last").attr("data-date");
		$("#feed-endless-loader").attr("data-date", lastdate);
		AttachActivityEvents();
		GAPage('ActivityEndlessLoader - '+filter, '/activity');
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachAgreesFromActivity(){
	$(".agreeBtn").unbind();
	$(".disagreeBtn").unbind();
	AttachAgreeFromActivity();
	AttachDisagreeFromActivity();
}

function AttachAgreeFromActivity(){
	$(".agreeBtn").on('click', function(){
		var expid = $(this).attr("data-expid");
		var gameid = $(this).attr("data-gameid");
		var agreedwith = $(this).attr("data-agreedwith");
		var username = $(this).attr("data-username");
		SaveAgree(gameid, agreedwith, expid, username);
		var btncount = $(this).parent().parent().find(".agreeBtnCount");
		var total = parseInt(btncount.html(), 10);
		btncount.css({"display":"inline-block"});
		total = total || 0;
		total = total + 1;
		btncount.html(total);
		$(this).removeClass("agreeBtn");
		$(this).addClass("disagreeBtn");
		$(this).html("- 1up");
		AttachAgreesFromActivity();
	});
}

function AttachDisagreeFromActivity(){
	$(".disagreeBtn").on('click', function(){
		var expid = $(this).attr("data-expid");
		var gameid = $(this).attr("data-gameid");
		var agreedwith = $(this).attr("data-agreedwith");
		var username = $(this).attr("data-username");
		RemoveAgree(gameid, agreedwith, expid, username);
		var btncount = $(this).parent().parent().find(".agreeBtnCount");
		var total = parseInt(btncount.html(), 10);
		total = total || 0;
		total = total - 1;
		btncount.html(total);
		if(total == 0)
			btncount.css({"display":"none"});
		$(this).removeClass("disagreeBtn");
		$(this).addClass("agreeBtn");
		$(this).html("+ 1up");
		AttachAgreesFromActivity();
	});
}
function ShowAdminHome(){
	ShowAdminMainContent();
	//ShowAdminSecondaryContent();
}

function ShowAdminMainContent(){
	var windowWidth = $(window).width();
    $("#admin").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #discover, #analytics, #game, #notifications, #user, #profile").css({"display":"none"});
	$("#activity, #discover, #analytics, #game, #notifications, #user, #profile").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#admin").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	window.scrollTo(0, 0);
  	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayAdmin" },
     type: 'post',
     success: function(output) {
     			$("#adminInnerContainer").html(output);
				AttachAdminEvents();
      			Waves.displayEffect();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function ShowAdminSecondaryContent(){
  	ShowLoader($("#sideContainer"), 'big', "<br><br><br>");
  	ClearSideContent();
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayAdminSecondaryContent" },
     type: 'post',
     success: function(output) {
     			$("#sideContainer").html(output);
				//AttachEvents
     			SideContentPush($("#sideContainer").html());
     			SideContentEventPush(AttachDiscoverSecondaryEvents);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachAdminEvents(){
	$(".admin-run-feed-collector, .admin-manage-pending-reviews").unbind();
	$(".admin-run-feed-collector").on('click', function(){
		ShowPopUp("<iframe src='http://lifebar.io/utilities/controller_rssFeeds.php' style='width:100%;min-height:600px;height:100%;'/>");	
	});
	$(".admin-run-game-updater").on('click', function(){
		ShowPopUp("<iframe src='http://lifebar.io/utilities/controller_gameUpdater.php' style='width:100%;min-height:600px;height:100%;'/>");	
	});
	$(".admin-run-calc-user-weave").on('click', function(){
		ShowPopUp("<iframe src='http://lifebar.io/utilities/controller_weave.php' style='width:100%;min-height:600px;height:100%;'/>");	
	});
	$(".admin-manage-pending-reviews").on('click', function(){
		GLOBAL_HASH_REDIRECT = "NO";
		DisplayPendingReviews();
	});
	$(".admin-ign-scrape").on('click', function(){
		ShowPopUp("<iframe src='http://lifebar.io/php/controller_reviewTranslator.php?run=Y' style='width:100%;min-height:600px;height:100%;'/>");	
	});
	$(".admin-ign-map").on('click', function(){
		GLOBAL_HASH_REDIRECT = "NO";
		DisplayUnmappedManager();
	});
	$(".admin-ign-map-reviewed").on('click', function(){
		GLOBAL_HASH_REDIRECT = "NO";
		DisplayUnmappedManagerReviewed();
	});
	$(".admin-badge-new").on('click', function(){
		GLOBAL_HASH_REDIRECT = "NO";
		DisplayBadgeNew();
	});
	$(".admin-badge-search").on('click', function(){
		GLOBAL_HASH_REDIRECT = "NO";
		DisplayBadgeManagement();
	});
	$(".admin-export-email").on("click", function(){
		GLOBAL_HASH_REDIRECT = "NO";
		DisplayEmailExport();
	});
	$(".admin-db-threads").on("click", function(){
		GLOBAL_HASH_REDIRECT = "NO";
		DisplayDBThreads();
	});
}

function DisplayDBThreads(){
	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayDBThreads" },
     type: 'post',
     success: function(output) {
 		ShowPopUp(output);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayEmailExport(){
	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayEmailExport" },
     type: 'post',
     success: function(output) {
 		ShowPopUp(output);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayBadgeManagement(){
	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayBadgeManagement" },
     type: 'post',
     success: function(output) {
 		$("#adminInnerContainer").html(output);
		AttachBadgeManagmentEvents();
  		Waves.displayEffect();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayBadgeNew(){
	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayNewBadgeForm" },
     type: 'post',
     success: function(output) {
 		$("#adminInnerContainer").html(output);
		AttachBadgeManagmentEvents();
  		Waves.displayEffect();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

var CONST_LAST_SEARCH = "";
function AttachBadgeManagmentEvents(){
	$("#badge_games, #badge_games_search, #badge_game_list_container").hide();
	
	$('.admin-review-search-btn').on('click', function(e){ 
		e.stopPropagation(); 
		SearchForGameBadge($(this).parent().parent().find(".admin-review-search").val(), $(this).parent().parent());
	});
	$(".admin-review-search").on('keypress keyup', function (e) {
		if (e.keyCode === 13) { 
			SearchForGameBadge($(this).parent().parent().find(".admin-review-search").val(), $(this).parent().parent());
		}
	});
	$('html').click(function(){
		if($(".admin-review-search-results").is(":visible"))
			$(".admin-review-search-results").hide(250);
	});
	$(".remove-game-from-badge").click(function(){
		$(this).parent().remove();
	});
	$(".badge-file-upload").click(function(){
		var html = "<div><span>Upload a custom badge image. Use the same name in the full http path in the previous form. </span><br><iframe src='http://lifebar.io/utilities/FileImageUploaderBadge.php' style='width:100%;border:none;'></iframe>";
		ShowPopUp(html);	
	});
	$("#badge_type").on('change', function() { 
		if($(this).val() == "Played" || $(this).val() == "Watched" || $(this).val() == "XP"){
			$("#badge_games, #badge_games_search, #badge_game_list_container").show();
		}else{
			$("#badge_games, #badge_games_search, #badge_game_list_container").hide();
		}
	});
	
	$("#badge_level").on('change', function() { 
		$(".c100").removeClass("one");
		$(".c100").removeClass("two");
		$(".c100").removeClass("three");
		$(".c100").removeClass("four");
		$(".c100").removeClass("five");
		if($(this).val() == "1"){
			$(".c100").addClass("one");
		}else if($(this).val() == "2"){
			$(".c100").addClass("two");
		}else if($(this).val() == "3"){
			$(".c100").addClass("three");
		}else if($(this).val() == "4"){
			$(".c100").addClass("four");
		}else if($(this).val() == "5"){
			$(".c100").addClass("five");
		}
	});
	
	$("#badge_custom_image").on('keyup', function(){
		var element = $(".badge-small .small span");
		if($("#badge_level").val() == "1"){
			element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
		}else if($("#badge_level").val() == "2"){
			element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
		}else if($("#badge_level").val() == "3"){
			element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
		}else if($("#badge_level").val() == "4"){
			element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
		}else if($("#badge_level").val() == "5"){
			element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
		}
		
	});
	
	$("#badge_name").on('keyup', function(){
		$(".badge-small-name").html($("#badge_name").val());	
	});
	
	$(".badge-small, .badge-large").on('click', function(){
		var badgeid = $(this).attr("data-id");
		TestBadge(badgeid);
	});

	$(".admin-new-badge-save").click(function(){
		var errors = "";
		var name = $("#badge_name").val();
		var desc = $("#badge_desc").val();
		var type = $("#badge_type").val();
		var diff = $("#badge_level").val();
		var threshold = $("#badge_threshold").val();
		var customimage = $("#badge_custom_image").val();
		var badgeimage = "";
		if(customimage != "http://lifebar.io/Images/Badges/PASTENAMEHERE.jpg" && customimage != ""){
			badgeimage = customimage;
		}
		var script = $("#badge_script").val();
		var category = $("#badge_category").val();
		var subcategory = $("#badge_sub_category").val();
		
		if(script == ""){
			errors = errors + "Validation script cannot be empty <br>";
		}
		if(threshold == "" || threshold < 1){
			errors = errors + "Threshold cannot be empty and must be greater than 0 <br>";
		}
		if(name == ""){
			errors = errors + "Badge name cannot be empty <br>";
		}
		if(desc == ""){
			errors = errors + "Badge description cannot be empty <br>";
		}
		if(badgeimage == ""){
			errors = errors + "Badge image cannot be empty <br>";
		}
		
		if(errors == "")
			SaveBadge(name, desc, type, diff, threshold, badgeimage, script, category, subcategory);
		else
			ToastError(errors);
	});
	
	$('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
	
	$(".first-badge").trigger("click");
	/*$(".badge-category-header").on('click', function(){
			var category = $(this).html();
			ShowLoader($(this).next(), 'small', "<br>");
			DisplayBadgeForCategory(category, $(this).next());
	});*/
}

function DisplayBadgeForCategory(category, element){
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayBadgesForCategory", category: category },
     type: 'post',
     success: function(output) {
		element.html(output);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function SaveBadge(name, desc, type, diff, threshold, image, validation, category, subcategory){
	//ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "SaveBadge", name: name, desc: desc, type: type, diff: diff, threshold: threshold, image: image, validation: validation, category: category, subcategory: subcategory },
     type: 'post',
     success: function(output) {
 		if($.trim(output) == "Passed"){
 			Toast("Badge Created");
 			DisplayBadgeNew();
 		}else{
 			ToastError($.trim(output));
 		}
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function TestBadge(badgeid){
	//ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "TestSpecificBadge", badgeid: badgeid },
     type: 'post',
     success: function(output) {
		Toast("Refresh to see results of badge test")
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayUnmappedManager(){
	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayUnmappedManager" },
     type: 'post',
     success: function(output) {
 		$("#adminInnerContainer").html(output);
		AttachUnmappedManagerEvents();
  		Waves.displayEffect();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayUnmappedManagerReviewed(){
	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayManualMappingInReview" },
     type: 'post',
     success: function(output) {
 		$("#adminInnerContainer").html(output);
		AttachUnmappedManagerEvents();
  		Waves.displayEffect();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayPendingReviews(){
	ShowLoader($("#adminInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayPendingReviews" },
     type: 'post',
     success: function(output) {
 		$("#adminInnerContainer").html(output);
		AttachPendingReviewsEvents();
  		Waves.displayEffect();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachUnmappedManagerEvents(){
	$('.admin-review-search-btn').on('click', function(e){ 
		e.stopPropagation(); 
		SearchForGame($(this).parent().parent().find(".admin-review-search").val(), $(this).parent().parent());
	});
	$(".admin-review-search").on('keypress keyup', function (e) {
		if (e.keyCode === 13) { 
			SearchForGame($(this).parent().parent().find(".admin-review-search").val(), $(this).parent().parent());
		}
	});
	$('html').click(function(){
		if($(".admin-review-search-results").is(":visible"))
			$(".admin-review-search-results").hide(250);
	});
	$(".admin-ign-dismiss-map").on('click', function(){
		var id = $(this).attr("data-id");
		var element = $(this);
		$.ajax({ url: '../php/webService.php',
	     data: {action: "DismissMapping", id: id },
	     type: 'post',
	     success: function(output) {
			element.parent().parent().parent().parent().hide(500);
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	});
	$(".admin-ign-save-map").on("click", function(e){
		var id = $(this).attr("data-id");
		var element = $(this);
		var gameid = element.parent().parent().parent().find(".admin-review-search-selected").attr("data-gbid");
		if(gameid > 0 || $(this).parent().parent().find("#map_"+id).val() == "" ){
			$.ajax({ url: '../php/webService.php',
		     data: {action: "MapReviewToGame", id: id, quote: $(this).parent().parent().find("#map_"+id).val(), gameid: gameid, link: $(this).attr("data-link"), criticid: $(this).attr("data-criticid"), tier: $(this).attr("data-tier") },
		     type: 'post',
		     success: function(output) {
				element.parent().parent().parent().parent().hide(500);
		     },
		        error: function(x, t, m) {
			        if(t==="timeout") {
			            ToastError("Server Timeout");
			        } else {
			            ToastError(t);
			        }
		    	},
		    	timeout:45000
			});
		}else{
			if(gameid <= 0)
				Toast("Please map a game using the search field");
			else
				Toast("Please enter a quote for this game");
		}
	});
	$(".admin-ign-later-map").on("click", function(e){
		var id = $(this).attr("data-id");
		var element = $(this);
		$.ajax({ url: '../php/webService.php',
	     data: {action: "SaveMappingForLater", id: id },
	     type: 'post',
	     success: function(output) {
			element.parent().parent().parent().parent().hide(250);
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	});
}

function AttachPendingReviewsEvents(){
	$("select").material_select();
	var h =  $("#adminInnerContainer").height();
	$("#admin-review-iframe").css({'height': h });
	$('.admin-review-search-btn').on('click', function(e){ 
		e.stopPropagation(); 
		SearchForGame($(this).parent().parent().find(".admin-review-search").val(), $(this).parent().parent());
	});
	$(".admin-review-search").on('keypress keyup', function (e) {
		if (e.keyCode === 13) { 
			SearchForGame($(this).parent().parent().find(".admin-review-search").val(), $(this).parent().parent());
		}
	});
	$('html').click(function(){
		if($(".admin-review-search-results").is(":visible"))
			$(".admin-review-search-results").hide(250);
	});
	$(".admin-review-import").on('click', function(){
		if($(this).html() == "LOAD RSS"){
			$(".current-review").parent().parent().find(".admin-import-action").css({"display":"none"});
			$(".current-review").html("LOAD RSS");
			$(".current-review").parent().find(".admin-review-dismiss").html("DISMISS");
			$(".current-review").removeClass("current-review");
			var link = $(this).attr("data-link");
			$('#admin-review-iframe').attr('src',link);
			$(this).addClass("current-review");
			$(this).html("SAVE REVIEW");
			$(this).parent().find(".admin-review-dismiss").html("CANCEL");
			$(this).parent().parent().find(".admin-import-action").css({"display":"inline-block"});
			if($(window).width() < 600){
				$(".admin-card").hide();
				$(this).parent().parent().show();
				$(".admin-review-iframe-container").show();
				$(".admin-review-iframe-container").find(".admin-card").show();
			}
		}else if($(this).html() == "SAVE REVIEW"){
			SaveReview($(this).parent().parent());
		}
	});
	$(".admin-review-dismiss").on('click', function(){
		if($(this).html() == "CANCEL"){
			$(".current-review").parent().parent().find(".admin-import-action").css({"display":"none"});
			$(".current-review").html("LOAD RSS");
			$(".current-review").parent().find(".admin-review-dismiss").html("DISMISS");
			$(".current-review").removeClass("current-review");
			$('#admin-review-iframe').attr('src',"");
			if($(window).width() < 600){
				$(".admin-card").show();
				$(".admin-review-iframe-container").hide();
			}
		}else if($(this).html() == "DISMISS"){
			DismissPendingReview($(this).attr("data-id"), $(this).parent().parent().parent());
		}
	});
}

function SearchForGame(search, element){
	element.find(".admin-review-search-results").show(250);
	ShowLoader(element.find(".admin-review-search-results"), 'small', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "AdminGameSearch", search: search },
     type: 'post',
     success: function(output) {
		element.find(".admin-review-search-results").html(output);
 		$(".admin-review-search-results li").on('click', function(){
 			var gbid = $(this).attr("data-gbid");	
 			$(this).addClass("admin-review-search-selected");
 			element.find(".admin-review-search").val($(this).html());
 		});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function SearchForGameBadge(search, element){
	if(CONST_LAST_SEARCH == search){
		element.find(".admin-review-search-results").show(250);
	}else{
		element.find(".admin-review-search-results").show(250);
		ShowLoader(element.find(".admin-review-search-results"), 'small', "<br><br><br>");
		CONST_LAST_SEARCH = search;
		$.ajax({ url: '../php/webService.php',
	     data: {action: "AdminBadgeGameSearch", search: search },
	     type: 'post',
	     success: function(output) {
			element.find(".admin-review-search-results").html(output);
	 		$(".admin-review-search-results li").on('click', function(){
	 			var gameid = $(this).attr("data-gameid");	
	 			var image = $(this).attr("data-image");
	 			element.find("#badge_game_list").append("<li class='game-badge-list-item-selection' data-gameid='"+gameid+"' data-image='"+image+"'>"+$(this).html()+" <div class='game-badge-list-item remove-game-from-badge'>REMOVE</div> <div class='game-badge-list-item use-game-image-for-badge'>USE IMAGE</div></li>");
	 			
 				var games = "";
				$(".game-badge-list-item-selection").each(function(){
					games = games + "'" + $(this).attr("data-gameid") +"',";
				});	
				games = games.slice(0,-1);
				var newvalue = $(".game-badge-build-query").html(games);
	 			
	 			$(".remove-game-from-badge").click(function(){
						$(this).parent().remove();
		 				var games = "";
						$(".game-badge-list-item-selection").each(function(){
							games = games + "'" + $(this).attr("data-gameid") +"',";
						});	
						games = games.slice(0,-1);
						var newvalue = $(".game-badge-build-query").html(games);
				});
	 			$(".use-game-image-for-badge").click(function(){
	 				$(".game-badge-list-item-selection-usingimage").removeClass("game-badge-list-item-selection-usingimage");
					$("#badge_custom_image").val($(this).parent().attr("data-image"));
					$(this).parent().addClass("game-badge-list-item-selection-usingimage");
					var element = $(".badge-small .small span");
					if($("#badge_level").val() == "1"){
						element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
					}else if($("#badge_level").val() == "2"){
						element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
					}else if($("#badge_level").val() == "3"){
						element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
					}else if($("#badge_level").val() == "4"){
						element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
					}else if($("#badge_level").val() == "5"){
						element.css({"background":"url("+$("#badge_custom_image").val()+") 50% 25%","-webkit-background-size":"cover","background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"});
					}
				});
	 		});
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	}
}

function SaveReview(element){
	var tier = element.find("#admin-review-tier").val();
	var link = element.find(".admin-review-import").attr("data-link");
	var quote = element.find("#admin-review-quote").val();
	var journalist = element.find("#admin-review-user").val();
	var first = element.find("#admin-review-first").val();
	var last = element.find("#admin-review-last").val();
	var gameid = element.find(".admin-review-search-selected").attr("data-gbid");
	var id = element.find(".admin-review-dismiss").attr("data-id");
	if(tier != "NO" && link != "" && quote != "" && (journalist != "NO" || (first != "" && last != "")) && journalist != "" && gameid != "" && gameid != undefined && id != ""){
		$.ajax({ url: '../php/webService.php',
	     data: {action: "SavePendingReview", tier: tier, link: link, quote: quote, journalist: journalist, first: first, last: last, gameid: gameid, id: id },
	     type: 'post',
	     success: function(output) {
			Toast("Saved Pending Review");
			element.parent().remove();
			if($(window).width() < 600){
				$(".admin-card").show();
				$(".admin-review-iframe-container").hide();
			}
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	}else{
		Toast("Missing criteria for saving review");
		//alert(tier+"||"+link+"||"+quote+"||"+journalist+"||"+gameid+"||"+id);
	}
}

function DismissPendingReview(id, element){
	$.ajax({ url: '../php/webService.php',
     data: {action: "DismissPendingReview", id: id },
     type: 'post',
     success: function(output) {
		Toast("Dismissed Pending Review");
		element.remove();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function HideAdminContainer(){
	var windowWidth = $(window).width();
    $("#admin").css({"display":"none"});
	$("#admin").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
}
function ShowAnalyticsHome(){
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}
	ShowAnalyticsMainContent();
	ShowAnalyticsSecondaryContent();
}

function ShowAnalyticsMainContent(){
  	ShowLoader($("#analyticsInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayAnalytics" },
     type: 'post',
     success: function(output) {
     			$("#analyticsInnerContainer").html(output);
				//Attach Events
      			Waves.displayEffect();
      			DisplayTierChart();
      			DisplayPlatformsDoughnutGraph();
      			DisplayLifeTimeChart();
  	 			$(".analytics-overall-leaders").on("click", function(e){
 			 		e.stopPropagation();
 					ShowUserPreviewCard($(this).find(".user-preview-card"));
	 			});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function ShowAnalyticsSecondaryContent(){
  	ShowSideLoader();
  	ClearSideContent();
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayAnalyticsSecondaryContent" },
     type: 'post',
     success: function(output) {
     			$("#sideContainer").html(output);
				//AttachEvents
				AttachAnalyticsNavigation();
     			SideContentPush($("#sideContainer").html());
     			SideContentEventPush(AttachAnalyticsNavigation);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachAnalyticsNavigation(){
	$("#analytics-personal").on('click', function(e){
		$(".analytics-category-selected").removeClass("analytics-category-selected");
		$(this).addClass("analytics-category-selected");
		ShowUserAnalytics();
	});
	$("#analytics-global").on('click', function(e){
		$(".analytics-category-selected").removeClass("analytics-category-selected");
		$(this).addClass("analytics-category-selected");
		ShowPolygonalAnalytics();
	});
}

function ShowUserAnalytics(){
  	ShowLoader($("#analyticsInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayUserAnalytics" },
     type: 'post',
     success: function(output) {
     			$("#analyticsInnerContainer").html(output);
				//Attach Events
      			Waves.displayEffect();
      			DisplayTierChart();
      			DisplayPlatformsDoughnutGraph();
      			DisplayLifeTimeChart();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function ShowPolygonalAnalytics(){
  	ShowLoader($("#analyticsInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayPolygonalAnalytics" },
     type: 'post',
     success: function(output) {
     			$("#analyticsInnerContainer").html(output);
				//Attach Events
      			Waves.displayEffect();
      			DisplayTierChart();
      			DisplayPlatformsDoughnutGraph();
      			DisplayLifeTimeChart();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayTierChart(){
	if($(".GraphCriticUsers").length > 0){
		$(".GraphCriticUsers").each(function(){
			var experiencedUsersGraph = $(this).get(0).getContext("2d");
			var data = {
		    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
		    datasets: [
		        {
		            label: "Lifetime XP",
		            fillColor: "rgba(255, 0, 97,0.1)",
		            strokeColor: "rgb(255, 0, 97)",
		            pointColor: "rgb(255, 0, 97)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: [$(this).attr("data-t1"), $(this).attr("data-t2"), $(this).attr("data-t3"), $(this).attr("data-t4"), $(this).attr("data-t5")]
		        }
		    ]
		};
		$(this).attr('width', $(this).parent().width()-10);
        $(this).attr('height', 250);
		var temp = new Chart(experiencedUsersGraph).Line(data, { datasetStrokeWidth : 4, showScale: true, bezierCurve : true, pointDot : false, scaleShowGridLines : false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>", animation: true });
      	
		});
	}
}

function DisplayLifeTimeChart(){
	if($(".GraphLifeTime").length > 0){
		$(".GraphLifeTime").each(function(){
			var lifetimeGraph = $(this).get(0).getContext("2d");
			var dataBirth = $(this).attr("data-birth");
      		var birthArray = dataBirth.split(",");
  			var dataPlayed = $(this).attr("data-played");
      		var playedArray = dataPlayed.split(",");
  			var dataWatched = $(this).attr("data-watched");
      		var watchedArray = dataWatched.split(",");
      		var allLabels = [];
      		var allPlayed = [];
      		var allWatched = [];
	      	$.each( birthArray, function( key, value ) {
	      		allLabels.push(value);
	      	});
  	      	$.each( playedArray, function( key, value ) {
	      		allPlayed.push(value);
	      	});
  	      	$.each( watchedArray, function( key, value ) {
	      		allWatched.push(value);
	      	});
			
			var data = {
		    labels: allLabels,
		    datasets: [
		        {
		            label: "Played XP",
		            fillColor: "rgba(156, 39, 176, 0.1)",
		            strokeColor: "rgb(156, 39, 176)",
		            pointColor: "rgb(156, 39, 176)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: allPlayed
		        },
		        {
		            label: "Watched XP",
		            fillColor: "rgba(3, 169, 244, 0.1)",
		            strokeColor: "rgb(3, 169, 244)",
		            pointColor: "rgb(3, 169, 244)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: allWatched
		        }
		    ]
		};
		$(this).attr('width', $(this).parent().width()-10);
        $(this).attr('height', 250);
		var temp = new Chart(lifetimeGraph).Line(data, { datasetStrokeWidth : 4, showScale: true, bezierCurve : true, pointDot : false, scaleShowGridLines : false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>", animation: true });
      	
		});
	}
}

function DisplayPlatformsDoughnutGraph(){
	if($("#allPlatforms").length > 0){
      	var allPlatforms = $("#allPlatforms").get(0).getContext("2d");
      	var dataPlatforms = $("#allPlatforms").attr("data-platforms");
      	var platformArray = dataPlatforms.split(",");
      	var allLabels = [];
      	var allTotals = [];
      	var count = 0;
      	var otherTotal = 0;
      	$.each( platformArray, function( key, value ) {
      		var parts = value.split(":");
		    count++;
		    if(count >= 5){
		    	otherTotal++;
		    }else{
			    allLabels.push(parts[0]);
			    allTotals.push(parseInt(parts[1]));
		    }
		});
		    
	     var allPlatformData = [
		    {
		        value: allTotals[0],
		        color: "rgba(100,152,157,1)",
		        highlight: "rgba(100,152,157,0.9)",
		        label: allLabels[0]
		    },
		    {
		        value: allTotals[1],
				color: "rgba(153,199,186,1)",
		        highlight: "rgba(153,199,186,0.9)",
		        label: allLabels[1]
		    },
		    {
		        value: allTotals[2],
				color: "rgba(208,231,200,1)",
		        highlight: "rgba(208,231,200,0.9)",
		        label: allLabels[2]
		    },
		    {
		        value: allTotals[3],
				color: "rgba(250,251,213,1)",
		        highlight: "rgba(250,251,213,0.9)",
		        label: allLabels[3]
		    },
		    {
		        value: otherTotal,
		        color:"rgba(95,93,102,1)",
		        highlight: "rgba(95,93,102,0.9)",
		        label: "Other"
		    }
		];
		$("#allPlatforms").attr('height', 300);
		var allPlatformsBarChart = new Chart(allPlatforms).Doughnut(allPlatformData, { showTooltips: true });
	}
}
function InitializeDiscover(){
	$(window).resize(function() {
		ResizeDiscoverEvents();
	});
	AttachSearchEvents();
}

function AttachSearchEvents(){
	$(".SearchBtn").on('click', function(e){
		var parent = $(this).parent();
		e.stopPropagation(); 
		if(parent.find(".searchInput").is(":visible") && $(this).val() !== "")
			Search(parent.find(".searchInput input").val());
		else
			OpenSearch();
	});
	$(".searchInput input").on('keypress keyup', function (e) {
		if (e.keyCode === 13) { 
			e.stopPropagation(); 
			if($(this).val() !== "")
				Search($(this).val());
		} 
		
	});
}

function Search(searchstring){
	//hide keyboard on mobile
	$(".searchInput input").blur();
	GLOBAL_TAB_REDIRECT = "Search";
  	var windowWidth = $(window).width();
    $("#discover").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").css({"display":"none"});
    $("#activity, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#discover").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	ManuallyNavigateToTab("#discover");
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}
	ShowLoader($("#discoverInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
         data: {action: "Search", search: searchstring },
         type: 'post',
         success: function(output) {
            $("#discoverInnerContainer").html(output);
            GLOBAL_TAB_REDIRECT = "";
 			$(".backButton").on('click', function(){
 				$("#discoverInnerContainer .backContainer").delay(200).velocity({"opacity":"0"});
 			  	ManuallyNavigateToTab("#discover");
 				ShowDiscoverHome();
 				$(".searchInput input").val("");
 			});
 			$("#sideContainer").html("");
 			SideContentPush($("#sideContainer").html());
  			$(".user-discover-card").on("click", function(e){
 		   		e.stopPropagation();
 				ShowUserPreviewCard($(this).find(".user-preview-card"));
 			});
  			Waves.displayEffect();
 			FilterResults();
 			$(".game-discover-card .card-image").on("click", function(e){ e.stopPropagation(); ShowGame($(this).parent().attr("data-gbid"), $("#discover")); });
 			$(".card-game-tier-container").on("click", function(e){ GameCardActions($(this)); });
 			$(".SeeAllBtn").on('click',function(){
 				var context = $(this).attr("data-context");
 				$("."+context).show(250);
 				$(this).delay(200).velocity({"opacity":"0"}, function(){ $(this).remove(); });
 			});
 			//Clear search input
 			$(".searchInput input").val('');
 			GAPage('Search', '/search');
     	},
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
	
	if($(window).width() < 600 || ($(window).width() < 992 && $(".searchContainerAnonymous").length > 0 ) )
		CloseSearch();
}

function FilterCategories(){
		$(".categoryResults").show();
		if($(window).width() >= 993){
			$(".discoverCategory").each( function(){ 
				var total = 1;
				$(this).find(".categoryResults").each( function(){
					if(total > 6){
						$(this).hide();
					}
					total++;
				});
			});
		}else if($(window).width() >=600){
			$(".discoverCategory").each( function(){ 
				var total = 1;
				$(this).find(".categoryResults").each( function(){
					if(total > 4 && $(this).hasClass("user-discover-card")){
						$(this).hide();
					}else if(total > 4 && $(this).hasClass("game-discover-card")){
						$(this).hide();
					}
					total++;
				});
			});
		}else{
			$(".discoverCategory").each( function(){ 
				var total = 1;
				$(this).find(".categoryResults").each( function(){
					if(total > 2){
						$(this).hide();
					}
					total++;
				});
			});
		}
}

function FilterResults(){
	$(".GameSeeAllBtn").css({"display":"none"});
	$(".UserSeeAllBtn").css({"display":"none"});
	if($(".gameResults").length > 0 && $(".userResults").length > 0){
		var total = 1;
		if($(window).width() >= 993){
			$(".gameResults").each( function(){
				if(total > 6){
					$(this).hide();
					$(".GameSeeAllBtn").show();
				}
				total++;
			});
			total = 1;
			$(".userResults").each( function(){
				if(total > 6){
					$(this).hide();
					$(".UserSeeAllBtn").show();
				}
				total++;
			});
		}else if($(window).width() >=600){
			$(".gameResults").each( function(){
				if(total > 4){
					$(this).hide();
					$(".GameSeeAllBtn").show();
				}
				total++;
			});
			total = 1;
			$(".userResults").each( function(){
				if(total > 4){
					$(this).hide();
					$(".UserSeeAllBtn").show();
				}
				total++;
			});
		}else{
			$(".gameResults").each( function(){
				if(total > 2){
					$(this).hide();
					$(".GameSeeAllBtn").show();
				}
				total++;
			});
			total = 1;
			$(".userResults").each( function(){
				if(total > 2){
					$(this).hide();
					$(".UserSeeAllBtn").show();
				}
				total++;
			});
		}
	}
}

function OpenSearch(){
	if($(window).width() >= 993){
		$(".searchContainerAnonymous, .searchContainer").css({"width":"100%", "background-color" : "rgba(255,255,255,0.2)"});
		$(".userAccountNavButton, .userNotificiations, .userBug, .userAvatar").hide();
		$(".searchInput").css({"left":"3.5em"});
		$(".SearchBtn").css({"float":"left"});
	}else if($(window).width() >= 600){
		$(".searchContainerAnonymous, .searchContainer, .searchContainerMobile").css({"width":"100%", "background-color" : "rgba(255,255,255,0.2)"});
		$(".userAccountNavButton, .userNotificiations, .userBug, .userAvatar").hide();
		$(".searchInput").css({"left":"3.5em"});
		$(".SearchBtn").css({"float":"left"});
	}else{
		$(".searchContainerAnonymous, .searchContainer, .searchContainerMobile").css({"width":"100%", "background-color" : "rgba(255,255,255,0.2)"});
		$(".mobileTab, .mobileNav").hide();
		$(".searchInput").css({"left":"3em"});
	}
	$(".closeMobileSearch").show();
	$(".closeMobileSearch").on('click', function(e){
		e.stopPropagation();
		CloseSearch();
	});
	$(".searchInput").css({"display":"inline-block"});
	$(".searchInput").on('click', function(e){
		e.stopPropagation();
	});
	$(".searchInput input").focus();
	$(".loginContainer").hide();
	$('html').on('click', function(){
		CloseSearch();	
	});
}

function CloseSearch(){
	if($(window).width() >= 993){
		$(".searchContainerAnonymous, .searchContainer").css({"width":"150px", "background-color" : ""});
		setTimeout(function(){
			$(".userAccountNavButton, .userNotificiations, .userBug, .userAvatar").show(100);
		}, 100);
		$(".searchInput").css({"left":"1em"});
		$(".SearchBtn").css({"float":"inherit"});
	}else if($(window).width() >= 600){
		$(".searchContainerAnonymous, .searchContainer").css({"width":"100px", "background-color" : ""});
		setTimeout(function(){
			$(".userAccountNavButton, .userBug, .userAvatar").show(100);
		}, 100);
		$(".searchInput").css({"left":"1em"});
		$(".SearchBtn").css({"float":"inherit"});
	}else{
		$(".searchContainerAnonymous, .searchContainer, .searchContainerMobile").css({"width":"auto", "background-color" : ""});
		$(".mobileTab, .mobileNav").show();
		$(".searchInput").css({"left":"1em"});
		$(".searchInput input").val("");
	}
	$(".closeMobileSearch").hide();
	$(".searchInput").css({"display":""});
	$(".loginContainer").show();
	$(".logoContainer").parent().show();
	$(".mainNav").parent().show();
	$(".userContainer").parent().show();
}

function ShowDiscoverHome(){
	if(location.hash != "#discover")
		location.hash = "#discover";
  	ShowLoader($("#discoverInnerContainer"), 'big', "<br><br><br>");
  	var windowWidth = $(window).width();
    $("#discover").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").css({"display":"none"});
    $("#activity, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#discover").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayDiscoverHome" },
     type: 'post',
     success: function(output) {
     			$("#discoverInnerContainer").html(output);
     			FilterCategories();
 				AttachDiscoverHomeEvents();
 				AttachDiscoverSecondaryEvents();
      			Waves.displayEffect();
      			GAPage('Discover', '/discover');
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function ShowExtraSideContent(){
	//with advanced search button
	//var h_one = 250 + $(".latest-xp-count-1").height();
	var h_one = 145 + $(".latest-xp-count-1").height();
	var h_two = $(".latest-xp-count-2").height();
	var h_three = $(".latest-xp-count-3").height();
	var h_four = $(".latest-xp-count-4").height();
	
	if($("#sideContainer").height() > h_one)
		$(".latest-xp-count-1").show();
	if($("#sideContainer").height() > (h_one + h_two))
		$(".latest-xp-count-2").show();
	if($("#sideContainer").height() > (h_one + h_two + h_three))
		$(".latest-xp-count-3").show();
	if($("#sideContainer").height() > (h_one + h_two + h_three + h_four))
		$(".latest-xp-count-4").show();
}

function AttachDiscoverSecondaryEvents(){
  	Waves.displayEffect();
  	$(".ShowAdvancedSearch, .latest-xp-game-name, .detailsBtn").unbind();
  	$(".ShowAdvancedSearch").on('click', function(){ ShowAdvancedSearch(); });
  	$(".latest-xp-game-name").on("click", function(){
  		ShowGame($(this).attr("data-gbid"), $("#discover"));	
  	});
  	$(".detailsBtn").on('click', function(e){ 
  		var uniqueid = $(this).attr("data-uid"); 
  		var html = $('#'+uniqueid).html();
  		ShowPopUp(html);
  	});
   	$(".latest-xp-name-container").on('click', function(e){
   		e.stopPropagation();
 		ShowUserPreviewCard($(this).find(".user-preview-card"));		
 	});
  	ShowExtraSideContent();
  	AttachAgrees();
}

function ShowAdvancedSearch(){
	ShowSideContentFocus();
  	ShowLoader($("#sideContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayAdvancedSearch" },
     type: 'post',
     success: function(output) {
 			$("#sideContainer").html(output);
  			AttachAdvancedSearch();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachDiscoverHomeEvents(){
	//Game
	$(".game-discover-card .card-image, .card-action a").on("click", function(e){ e.stopPropagation(); ShowGame($(this).parent().attr("data-gbid"), $("#discover")); });
 	$(".suggested-game-link").on("click", function(e){ e.stopPropagation(); ShowGame($(this).parent().attr("data-gbid"), $("#discover")); });
	$(".card-game-tier-container").on("click", function(e){ GameCardActions($(this)); });
	//User
 	$(".user-discover-card").on("click", function(e){
 	 	e.stopPropagation();
 		ShowUserPreviewCard($(this).find(".user-preview-card"));
 	});
	//Category
	$(".ViewBtn, .discoverCategoryHeader .categoryIcon").on("click", function(){
		GLOBAL_TAB_REDIRECT = "CategoryNav";
		ManuallyNavigateToTab("#discover");
		ShowLoader($("#discoverInnerContainer"), 'big', "<br><br><br>");
		window.scrollTo(0, 0);
		var category = $(this).parent().attr("data-category");
		var customName = $(this).parent().attr("data-name");
		var catid = $(this).parent().attr("data-catid");
		$.ajax({ url: '../php/webService.php',
	         data: {action: "DisplayDiscoverCategory", category: category, catid: catid },
	         type: 'post',
	         success: function(output) {
	            $("#discoverInnerContainer").html(output);
	            GLOBAL_TAB_REDIRECT = "";
	            if(category == "Custom Category")
	            	$(".backButtonLabel").html(customName);
	            else
					$(".backButtonLabel").html(category);
	 			$(".backButton").on('click', function(){
	 				$("#discoverInnerContainer .backContainer").delay(200).velocity({"opacity":"0"});
	 				window.scrollTo(0, 0);
	 			  	ManuallyNavigateToTab("#discover");
	 				ShowDiscoverHome();
	 			});
	 			$(".user-discover-card").on("click", function(e){
 			 		e.stopPropagation();
 					ShowUserPreviewCard($(this).find(".user-preview-card"));
	 			});
	 			$(".game-discover-card .card-image").on("click", function(e){ e.stopPropagation(); ShowGame($(this).parent().attr("data-gbid"), $("#discover")); });
	 			$(".card-game-tier-container").on("click", function(e){ GameCardActions($(this)); });
	 			$(".CategoryGameImageHighlight, .CategoryGameTitle").on("click", function(){
	 				ShowGame($(this).attr("data-gbid"), $("#discover"));
	 			});
	 			DisplayGraphs();
	 			AttachDiscoverSecondaryEvents();
	  			Waves.displayEffect();
	  			GAPage('Discover - '+customName, '/discover/'+customName);
	     	},
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
		
		if($(window).width() < 600 || ($(window).width() < 992 && $(".searchContainerAnonymous").length > 0 ) )
			CloseSearch();
	});
}

function DisplayGraphs(){
	if($(".GraphExperiencedUsers").length > 0){
		$(".GraphExperiencedUsers").each(function(){
			var experiencedUsersGraph = $(this).get(0).getContext("2d");
			var data = {
		    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
		    datasets: [
		        {
		            label: "Lifetime Experiences",
		            fillColor: "rgba(71, 71, 71,1)",
		            strokeColor: "rgb(255, 0, 97)",
		            pointColor: "rgb(255, 0, 97)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: [$(this).attr("data-t1"), $(this).attr("data-t2"), $(this).attr("data-t3"), $(this).attr("data-t4"), $(this).attr("data-t5")]
		        }
		    ]
		};
		$(this).attr('width', $(this).parent().width()-10);
        $(this).attr('height', $(this).parent().height()-5);
		var temp = new Chart(experiencedUsersGraph).Line(data, { datasetStrokeWidth : 2, pointDot : false, scaleShowGridLines : false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>", animation: false });
      	
		});
	}
}

function AttachAdvancedSearch(){
	$("#AdvancedSearchBtn").on('click', function(e){
		AdvancedSearch($("#advanced-search-text").val(),
			$("#advanced-search-platform").val(),
			$("#advanced-search-year").val(),
			$("#advanced-search-publisher").val(),
			$("#advanced-search-developer").val(),
			$("#advanced-search-genre").val(),
			$("#advanced-search-franchise").val()
		);
	});
	$("#advanced-search-text, #advanced-search-platform, #advanced-search-year, #advanced-search-publisher, #advanced-search-developer, #advanced-search-genre, #advanced-search-franchise").on('keypress keyup', function (e) {
		if (e.keyCode === 13) { 
			e.stopPropagation(); 	
			AdvancedSearch($("#advanced-search-text").val(),
				$("#advanced-search-platform").val(),
				$("#advanced-search-year").val(),
				$("#advanced-search-publisher").val(),
				$("#advanced-search-developer").val(),
				$("#advanced-search-genre").val(),
				$("#advanced-search-franchise").val()
			);
		} 
		
	});
 	$(".backButton").on('click', function(){
 		$("#discoverInnerContainer .backContainerSideContent").delay(200).velocity({"opacity":"0"});
        $(".backContainerSideContent").find(".backButtonLabel").html("Advanced Search");
 		HideSideContentFocus();
 	});
   	Waves.displayEffect();
	AdvancedSearchFilterEvents();
}

function AdvancedSearch(searchstring, platform, year, publisher, developer, genre, franchise){
	//hide keyboard on mobile
	$(".searchInput input").blur();
	GLOBAL_TAB_REDIRECT = "Search";
  	var windowWidth = $(window).width();
    $("#discover").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").css({"display":"none"});
    $("#activity, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#discover").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	ManuallyNavigateToTab("#discover");
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}
	ShowLoader($("#discoverInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
         data: {action: "AdvancedSearch", search: searchstring, platform: platform, year: year, publisher: publisher, developer: developer, genre: genre, franchise: franchise },
         type: 'post',
         success: function(output) {
            $("#discoverInnerContainer").html(output);
            GLOBAL_TAB_REDIRECT = "";
			$(".backButtonLabel").html("Search Results");
 			$(".backButton").on('click', function(){
 				$("#discoverInnerContainer .backContainer").delay(200).velocity({"opacity":"0"});
 			  	ManuallyNavigateToTab("#discover");
 				ShowDiscoverHome();
 				$(".searchInput input").val("");
 			});
  			Waves.displayEffect();
  			$(".game-discover-card .card-image").on("click", function(e){ e.stopPropagation(); ShowGame($(this).parent().attr("data-gbid"), $("#discover")); });
  			$(".card-game-tier-container").on("click", function(e){ GameCardActions($(this)); });
     	},
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
	
	if($(window).width() < 600 || ($(window).width() < 992 && $(".searchContainerAnonymous").length > 0 ) )
		CloseSearch();
}

function CustomCategory(categoryid){
	//hide keyboard on mobile
	$(".searchInput input").blur();
	GLOBAL_TAB_REDIRECT = "Search";
 	HideSideContentFocus(true);
	ShowLoader($("#discoverInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
         data: {action: "CustomCategory", categoryid: categoryid },
         type: 'post',
         success: function(output) {
            $("#discoverInnerContainer").html(output);
            GLOBAL_TAB_REDIRECT = "";
			$(".backButtonLabel").html("Search Results");
 			$(".backButton").on('click', function(){
 				$("#discoverInnerContainer .backContainer").delay(200).velocity({"opacity":"0"});
 			  	ManuallyNavigateToTab("#discover");
 				ShowDiscoverHome();
 				$(".searchInput input").val("");
 			});
  			Waves.displayEffect();
  			$(".game-discover-card .card-image").on("click", function(e){ e.stopPropagation(); ShowGame($(this).parent().attr("data-gbid"), $("#discover")); });
  			$(".card-game-tier-container").on("click", function(e){ GameCardActions($(this)); });
     	},
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
	
	if($(window).width() < 600 || ($(window).width() < 992 && $(".searchContainerAnonymous").length > 0 ) )
		CloseSearch();
}

function AdvancedSearchFilterEvents(){
	$("#advanced-search-genre").on('keyup',function(){
		typeaheadMatches($(this).val(), typeahead_genres, "Genre");	
	});
	$("#advanced-search-developer").on('keyup',function(){
		typeaheadMatches($(this).val(), typeahead_developers, "Developer");	
	});
	$("#advanced-search-publisher").on('keyup',function(){
		typeaheadMatches($(this).val(), typeahead_publishers, "Publisher");	
	});
	$("#advanced-search-franchise").on('keyup',function(){
		typeaheadMatches($(this).val(), typeahead_franchises, "Franchise");	
	});
	$("#advanced-search-platform").on('keyup',function(){
		typeaheadMatches($(this).val(), typeahead_platforms, "Platform");	
	});
}

function typeaheadMatches(typed, data, filter) {
	if(typed.length > 1){
		var matches = "";
		for(var i = 0; i < data.length; i++){
			if(data[i].toLowerCase().indexOf(typed.toLowerCase()) >= 0){
				//matches.push(data[i]);
				matches = matches + "<li class='collection-item'>"+data[i]+"</li>";
			}
		}
		if(matches !== ""){
			$("#typeaheadResults"+filter+" .collection .collection-item").unbind();
			$("#typeaheadResults"+filter).html("<ul class='collection' style='margin:0'>"+matches+"</ul>");
			$("#typeaheadResults"+filter).show(250);
			$("#typeaheadResults"+filter+" .collection .collection-item").on('click',function(){
				$("#typeaheadResults"+filter).html("");
				$("#typeaheadResults"+filter).hide(250);
				$("#typeaheadResults"+filter).parent().find("input").val($(this).html());
			});
		}else{
			$("#typeaheadResults"+filter).html("");
			$("#typeaheadResults"+filter).hide(250);
		}
	}else{
		$("#typeaheadResults"+filter).html("");
		$("#typeaheadResults"+filter).hide(250);
	}
};

function ResizeDiscoverEvents(){
	FilterCategories();
}
 
function ShowGame(id, currentTab, isID, browserNav){
	LoadGame(id, currentTab, isID, browserNav);
}

function LoadGame(gbid, currentTab, isID, browserNav){
	var windowWidth = $(window).width();
	GLOBAL_TAB_REDIRECT = "Game";
	ManuallyNavigateToTab("#games");
	$(".active").removeClass("active");
    $("#game").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #discover, #profile, #profiledetails, #settings, #admin, #notifications, #user, #landing").css({"display":"none"});
	$("#activity, #discover, #profile, #profiledetails, #settings, #admin, #notifications, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}
	$("#game").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	window.scrollTo(0, 0);
	if(!isID){
		ShowLoader($("#gameInnerContainer"), 'big', "<br><br><br>");
		$.ajax({ url: '../php/webService.php',
	     data: {action: "DisplayGame", gbid: gbid },
	     type: 'post',
	     success: function(output) {
	 		$("#gameInnerContainer").html(output);
	 		var gameid = $("#gameContentContainer").attr("data-id");
	 		var title = $("#gameContentContainer").attr("data-title");
	 		GLOBAL_HASH_REDIRECT = "NO";
	 		location.hash = "game/"+gameid+"/"+title;
	 		AttachGameEvents(currentTab);
	 		AttachScrollEvents();
 	 		if(browserNav)
 	 			GLOBAL_HASH_REDIRECT = "";
	 		GLOBAL_TAB_REDIRECT = "";
	 		GAPage('Game', '/game/'+title);
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	}else{
		ShowLoader($("#gameInnerContainer"), 'big', "<br><br><br>");
		$.ajax({ url: '../php/webService.php',
		 data: {action: "DisplayGameViaID", gameid: gbid },
		 type: 'post',
		 success: function(output) {
		 	$("#gameInnerContainer").html(output);
 		 	var gameid = $("#gameContentContainer").attr("data-id");
	 		var title = $("#gameContentContainer").attr("data-title");
	 		GLOBAL_HASH_REDIRECT = "NO";
	 		location.hash = "game/"+gameid+"/"+title;
		 	AttachGameEvents(currentTab);
		 	AttachScrollEvents();
  	 		if(browserNav)
 	 			GLOBAL_HASH_REDIRECT = "";
		 	GLOBAL_TAB_REDIRECT = "";
		 	GAPage('Game', '/game/'+title);
		 },
		    error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
			},
			timeout:45000
		});
		
	}
}

function LoadGameDirect(gbid, currentTab, type){
	var windowWidth = $(window).width();
    $("#game").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #discover, #analytics, #admin, #notifications, #user, #landing").css({"display":"none"});
	$("#activity, #discover, #analytics, #admin, #notifications, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#game").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	window.scrollTo(0, 0);
	ShowLoader($("#gameInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayGame", gbid: gbid },
     type: 'post',
     success: function(output) {
 		$("#gameInnerContainer").html(output);
 		var gameid = $("#gameContentContainer").attr("data-id");
 		var title = $("#gameContentContainer").attr("data-title");
 		GLOBAL_HASH_REDIRECT = "NO";
 		location.hash = "game/"+gameid+"/"+title;
 		AttachGameEvents(currentTab);
 		AttachScrollEvents();
 		if(type == "played"){
 			AddPlayedFabEvent();
 		}else{
 			AddWatchedFabEvent();
 		}
 		GAPage('Game', '/game/'+title);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachGameEvents(currentTab){
	$(".backButtonLabel").html("Back");
	
	if($(window).width() < 600){
		$(".backButtonLabel").css({"padding":"0"});
		$("#gameInnerContainer .backContainer").show();
		$("#gameInnerContainer .backContainer").css({"top":"7px", "position":"absolute"});
	}
	
	$('.gameNav').tabs();
	var iconOnHover="";
	if($(".fixed-action-btn .game-add-played-btn").length > 0)
		iconOnHover = "mdi-hardware-gamepad";
	else if($(".fixed-action-btn .game-add-watched-btn").length > 0)
		iconOnHover = "mdi-action-visibility";
	else
		iconOnHover = "mdi-action-bookmark";
		
	$(".ShowInfoBtn").on('click', function(){
  		var html = $('#infoModal').html();
  		ShowPopUp(html);
	});
	
	AttachEditEvents();
 	$(".critic-name-container, .myxp-details-agree-listitem").on("click", function(e){
  		e.stopPropagation();
 		ShowUserPreviewCard($(this).find(".user-preview-card"));
 	});
 	AttachAgrees();
  	Waves.displayEffect();
  	
  	$(".detailsBtn").on('click', function(e){ 
  		var uniqueid = $(this).attr("data-uid"); 
  		var html = $('#'+uniqueid).html();
  		ShowPopUp(html);
  	});
	
 	$(".backButton").on('click', function(){
		BackOutOfGame(currentTab);
 	});
 	
 	$(".ptalk-link-games").on("click", function(){
 		window.open("http://tidbits.io/c/games");
 	});
 	
 	AttachFloatingIconEvent(iconOnHover);
	AttachFloatingIconButtonEvents();
	AttachCriticBookmark();
}

function AttachCriticBookmark(){
	$(".no-critic-bookmark").on('click', function(e){
		SubmitBookmark("AddBookmark", $(".game-add-bookmark-btn").attr("data-gameid"));	
	});
}

function SubmitBookmark(serviceValue, gameid){
	$.ajax({ url: '../php/webService.php',
     data: {action: serviceValue, gameid: gameid },
     type: 'post',
     success: function(output) {
     	if(serviceValue == "AddBookmark"){
			ToastError("Added Bookmark");
			$(".game-remove-bookmark-btn").show();
			$(".game-add-bookmark-btn").hide();
			$(".GameMyStatusIcons .mybookmark").show();
			GAEvent('Game', 'Add Bookmark');
		}else{
			ToastError("Removed Bookmark");
			$(".game-remove-bookmark-btn").hide();
			$(".game-add-bookmark-btn").show();
			$(".GameMyStatusIcons .mybookmark").hide();
			GAEvent('Game', 'Remove Bookmark');
		}
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function SubmitOwned(serviceValue, gameid){
	$.ajax({ url: '../php/webService.php',
     data: {action: serviceValue, gameid: gameid },
     type: 'post',
     success: function(output) {
     	if(serviceValue == "AddOwned"){
			Toast("Added to your owned library");
			$(".game-remove-owned-btn").show();
			$(".game-add-owned-btn").hide();
			$(".GameMyStatusIcons .myowned").show();
			GAEvent('Game', 'Add to Owned');
		}else{
			Toast("Removed from your owned library");
			$(".game-remove-owned-btn").hide();
			$(".game-add-owned-btn").show();
			$(".GameMyStatusIcons .myowned").hide();
			GAEvent('Game', 'Remove from Owned');
		}
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function RequestUpdateFromGiantBomb(gameid){
	Toast("Updating Game...");
	$.ajax({ url: '../php/webService.php',
     data: {action: "RequestUpdateFromGiantBomb", gameid: gameid },
     type: 'post',
     success: function(output) {
		Toast("Game has been updated, refresh to see latest");
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachFloatingIconButtonEvents(){
	$(".game-remove-bookmark-btn").on('click touchend', function(){
		if($(".game-remove-owned-btn").css("opacity") == 1){
			SubmitBookmark("RemoveBookmark", $(this).attr("data-gameid"));
		}
	});
	$(".game-add-bookmark-btn").on('click touchend', function(){
		if($(".game-remove-owned-btn").css("opacity") == 1){
			SubmitBookmark("AddBookmark", $(this).attr("data-gameid"));
		}
	});
	$(".game-remove-owned-btn").on('click', function(){
		SubmitOwned("RemoveOwned", $(this).attr("data-gameid"));
	});
	$(".game-add-owned-btn").on('click', function(){
		SubmitOwned("AddOwned", $(this).attr("data-gameid")); 
	});
	$(".game-add-watched-btn").on('click touchend', function(){
		if($(".game-remove-owned-btn").css("opacity") == 1){
			AddWatchedFabEvent();
		}
	});
	$(".game-add-played-btn").on('click touchend', function(){
		if($(".game-remove-owned-btn").css("opacity") == 1){
			AddPlayedFabEvent();		
		}
	});
	$(".game-update-info-btn").on('click', function(){
		RequestUpdateFromGiantBomb($(this).attr("data-gameid"));	
	});
	$(".game-add-image-btn").on('click', function(){
		var html = "<div><span>Game ID: "+$(this).attr("data-gameid")+"</span> <span>Year: "+$(this).attr("data-gameyear")+"</span></div><br><iframe src='http://lifebar.io/utilities/FileUploader.php' style='width:100%;border:none;'></iframe>";
		ShowPopUp(html);	
	});
	$(".fab-login").on('click', function(){
		 $('#signupModal').openModal();
		 GAEvent('Game', 'Login');
	});
	$(".game-set-fav-btn").on("click", function(){
		if($(".game-set-fav-btn").css("opacity") == 1){
			DisplayEquipXP();
		}	
	});
}

function DisplayEquipXP(){
	var gameid = $("#gameContentContainer").attr("data-id");
	$.ajax({ url: '../php/webService.php',
     data: {action: 'DisplayEquipXP', gameid: gameid },
     type: 'post',
     success: function(output) {
		ShowBottomSheet(output);
		AttachEquipXPEvents(gameid);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachEquipXPEvents(gameid){
	$(".equip-xp-game-btn").on('click', function(){
		$(this).parent().find(".equip-xp-game-image").css({"opacity":"0"});
		if($(this).text() == "Equip"){
			$(this).text("Unequip");
			var image = $(".equip-xp-container").attr("data-newgame-image");
			$(this).parent().find(".equip-xp-game-image").css({"background":"url("+image+") 50% 50%", "background-size":"cover", "opacity":"1"});
			$(this).parent().find(".equip-xp-game-empty-image").css({"background":"url("+image+") 50% 50%", "background-size":"cover", "opacity":"1"});
			$(this).parent().find(".equip-xp-game-title").text($(".GameTitle").text());
			$(this).parent().find(".equip-xp-game-title").show();
			var slot = $(this).parent().attr("data-slot");
			UpdatePreferredXP(gameid, slot);
		}else{
			$(this).text("Equip");
			var oldgameid = $(this).parent().attr("data-previous");
			var image = $(this).parent().find(".equip-xp-game-image").attr("data-previous");
			$(this).parent().find(".equip-xp-game-image").css({"background":"url("+image+") 50% 50%", "background-size":"cover", "opacity":"1"});
			$(this).parent().find(".equip-xp-game-title").text($(this).parent().find(".equip-xp-game-title").attr("data-previous"));
			var slot = $(this).parent().attr("data-slot");
			UpdatePreferredXP(oldgameid, slot);
		}
	});
}

function AttachAgrees(){
	$(".agreeBtn").unbind();
	$(".disagreeBtn").unbind();
	AttachAgree();
	AttachDisagree();
}

function AttachAgree(){
	$(".agreeBtn").on('click', function(){
		var expid = $(this).attr("data-expid");
		var gameid = $(this).attr("data-gameid");
		var agreedwith = $(this).attr("data-agreedwith");
		var username = $(this).attr("data-username");
		SaveAgree(gameid, agreedwith, expid, username);
		var btncount = $(this).parent().parent().find(".agreeBtnCount");
		var total = parseInt(btncount.html(), 10);
		btncount.css({"display":"inline-block"});
		total = total || 0;
		total = total + 1;
		btncount.html(total);
		$(this).removeClass("agreeBtn");
		$(this).addClass("disagreeBtn");
		$(this).html("- 1up");
		MoveUpPostAgree($(this).parent().parent(), total);
		AttachAgrees();
		GAEvent('Game', 'Add 1up to User');
	});
}

function AttachDisagree(){
	$(".disagreeBtn").on('click', function(){
		var expid = $(this).attr("data-expid");
		var gameid = $(this).attr("data-gameid");
		var agreedwith = $(this).attr("data-agreedwith");
		var username = $(this).attr("data-username");
		RemoveAgree(gameid, agreedwith, expid, username);
		var btncount = $(this).parent().parent().find(".agreeBtnCount");
		var total = parseInt(btncount.html(), 10);
		total = total || 0;
		total = total - 1;
		btncount.html(total);
		if(total == 0)
			btncount.css({"display":"none"});
		$(this).removeClass("disagreeBtn");
		$(this).addClass("agreeBtn");
		$(this).html("+ 1up");
		MoveDownPostAgree($(this).parent().parent(), total);
		AttachAgrees();
		GAEvent('Game', 'Remove 1up from User');
	});
}

function SaveAgree(gameid, agreedwith, expid, username){
	$.ajax({ url: '../php/webService.php',
     data: {action: 'SaveAgreed', gameid: gameid, agreedwith: agreedwith, expid: expid },
     type: 'post',
     success: function(output) {
		Toast("You appreciated "+username+"'s thoughts ");
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function RemoveAgree(gameid, agreedwith, expid, username){
	$.ajax({ url: '../php/webService.php',
     data: {action: 'RemoveAgreed', gameid: gameid, agreedwith: agreedwith, expid: expid },
     type: 'post',
     success: function(output) {
		Toast("You no longer appreciate "+username+"'s thoughts ");
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function UpdatePreferredXP(gameid, slot){
 	var title = $("#gameContentContainer").attr("data-title");
	$.ajax({ url: '../php/webService.php',
     data: {action: 'UpdatePreferredXP', gameid: gameid, slot:slot },
     type: 'post',
     success: function(output) {
		//Toast("Equipped XP for "+title+" to your profile");
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});	
}

function MoveUpPostAgree(xp, count){
	var switched = false;
	if(xp.hasClass("critic-container")){
		$("#game-critic-tab").find(".critic-container").each(function(){
			var $this = $(this);
			var btncount = $this.find(".agreeBtnCount");
			var total = parseInt(btncount.html(), 10);
			total = total || 0;
			if(count > total && switched == false){
				$this.before("<div class='col s12 critic-container'>"+xp.html()+"</div>");
				xp.remove();
				NiceScroll($this.prev(), 300);
				$this.prev().css({"background-color":"#a5d6a7"});
				setTimeout(function(){
						$this.prev().css({"background-color":"white"});
					}
					,500);
				switched = true;
			}
		});
	}else{
		$("#game-user-tab").find(".user-container").each(function(){
			var $this = $(this);
			var btncount = $this.find(".agreeBtnCount");
			var total = parseInt(btncount.html(), 10);
			total = total || 0;
			if(count > total && switched == false){
				$this.before("<div class='col s12 user-container'>"+xp.html()+"</div>");
				xp.remove();
				NiceScroll($this.prev(), 300);
				$this.prev().css({"background-color":"#a5d6a7"});
				setTimeout(function(){
						$this.prev().css({"background-color":"white"});
					}
					,500);
				switched = true;
			}
		});
	}
}

function MoveDownPostAgree(xp, count){
	var switched = false;
	if(xp.hasClass("critic-container")){
		$($("#game-critic-tab").find(".critic-container").get().reverse()).each(function(){
			var $this = $(this);
			var btncount = $this.find(".agreeBtnCount");
			var total = parseInt(btncount.html(), 10);
			total = total || 0;
			if(count < total && switched == false){
				$this.after("<div class='col s12 critic-container'>"+xp.html()+"</div>");
				xp.remove();
				NiceScroll($this.next(), 300);
				$this.next().css({"background-color":"#ef9a9a"});
				setTimeout(function(){
						$this.next().css({"background-color":"white"});
					}
					,500);
				switched = true;
			}
		});
	}else{
		$($("#game-user-tab").find(".user-container").get().reverse()).each(function(){
			var $this = $(this);
			var btncount = $this.find(".agreeBtnCount");
			var total = parseInt(btncount.html(), 10);
			total = total || 0;
			if(count < total && switched == false){
				$this.after("<div class='col s12 user-container'>"+xp.html()+"</div>");
				xp.remove();
				NiceScroll($this.next(), 300);
				$this.next().css({"background-color":"#ef9a9a"});
				setTimeout(function(){
						$this.next().css({"background-color":"white"});
					}
					,500);
				switched = true;
			}
		});
	}
}

function BackOutOfGame(currentTab){
 	if($(window).width() < 600){
 		$(".backButtonLabel").css({"padding":"0 2em"});
 	}else{
 		$("#gameInnerContainer .backContainer").delay(200).velocity({"opacity":"0"});
 	}
 	$(document).unbind("scroll");
   	$(".backButtonLabel").removeClass("GameBackButtonDisappear");
   	var windowWidth = $(window).width();
   	if(currentTab == "" || currentTab == undefined){
   		ShowDiscoverHome();
		currentTab = $("#discover");
   	}
    currentTab.css({"display":"inline-block", "left": -windowWidth});
    $("#game").css({"display":"none"});
	$("#game").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	currentTab.velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	
	var tabname = currentTab.attr("id");
	if(tabname == "discover"){
		GLOBAL_TAB_REDIRECT = "GameNav";
		ManuallyNavigateToTab("#discover");
		GLOBAL_TAB_REDIRECT = "";
	}
	
	if(tabname == "activity"){
		GLOBAL_TAB_REDIRECT = "GameNav";
		ManuallyNavigateToTab("#activity");
		GLOBAL_TAB_REDIRECT = "";
	}
	
	
	//window.scrollTo(0, 0);
	$("#sideContainer").html(SideContentPop());
	var method = SideContentEventPop();
	if(method != undefined)
		method();
	GLOBAL_HASH_REDIRECT = "NO";
	//location.hash = "";
}

function HideGameContainer(){
	var windowWidth = $(window).width();
    $("#game").css({"display":"none"});
	$("#game").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
}

function AttachScrollEvents(){
	$(document).unbind("scroll");
	$(document).on("scroll", function(){
        if($(document).scrollTop() > 5){
        	if($(window).width() > 599){
	          	$(".GameHeaderContainer, .GameHeaderBackground").addClass("GameHeaderShrink");
	          	$(".GameHeaderBackground").addClass("GameBackgroundOpacity");
	          	$(".backButtonLabel").addClass("GameBackButtonDisappear");
	          	$(".GameTitle").addClass("GameTitleToBack");
	          	$(".game-tab").addClass("game-tab-shrink");
        	}
        }
        else
        {
        	if($(window).width() > 599){
	        	$(".GameHeaderContainer, .GameHeaderBackground").removeClass("GameHeaderShrink");
	        	$(".GameHeaderBackground").removeClass("GameBackgroundOpacity");
	        	$(".backButtonLabel").removeClass("GameBackButtonDisappear");
	        	$(".GameTitle").removeClass("GameTitleToBack");
	        	$(".game-tab").removeClass("game-tab-shrink");
        	}
        }
    });
}

function AttachEditEvents(){
	$(".myxp-edit-played").on('click', function(){
		UpdatePlayedEvent();
	});
	$(".myxp-edit-watched").on('click', function(){
		var watchid = $(this).attr("data-id");
		UpdateWatchedEvent(watchid);
	});
	$(".myxp-edit-tier-quote").on('click', function(){
		UpdateTierQuoteEvent();	
	});
}

function GameCardActions(element){
	if(element.hasClass("card-game-add-btn")){
		element.addClass("card-game-add-tier-container-active");
		element.parent().parent().find(".card-game-tier").hide();
		element.find(".card-tier-details").addClass("card-tier-details-active");
		element.find(".played-option").on('click', function(e){
			LoadGameDirect(element.parent().parent().attr("data-gbid"), $("#discover"), "played")
		});
		element.find(".watched-option").on('click', function(e){
			LoadGameDirect(element.parent().parent().attr("data-gbid"), $("#discover"), "watched")
		});
		element.find(".mdi-content-clear").on("click", function(e){
			e.stopPropagation();
			$(this).parent().parent().parent().removeClass("card-game-add-tier-container-active");
			$(this).parent().parent().removeClass("card-tier-details-active");
			$(this).parent().parent().parent().parent().find(".card-game-tier").show();
		});
		element.find(".login-option").on('click', function(){
			$('#loginModal').openModal();	
		});
		element.find(".signup-option").on('click', function(){
			$('#signupModal').openModal();	
		});
	}else{
		element.addClass("card-game-tier-container-active");
		element.parent().parent().find(".card-game-tier").hide();
		element.parent().parent().find(".c100").hide();
		element.find(".card-tier-details").addClass("card-tier-details-active");
		element.find(".mdi-content-clear").on("click", function(e){
			e.stopPropagation();
			$(this).parent().parent().parent().removeClass("card-game-tier-container-active");
			$(this).parent().parent().removeClass("card-tier-details-active");
			$(this).parent().parent().parent().parent().find(".card-game-tier").show();
			$(this).parent().parent().parent().parent().find(".c100").show();
		});
	}
}
    //set animation timing
	var animationDelay = 1750, //2500,
		//loading bar effect
		barAnimationDelay = 3800, //3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500,
		cardanimated = false;
		
		
		
	var options = [
    // {selector: '#landing_profile', offset: 0, callback: '$().slideUp("#landing_profile")' },
    {selector: '#landing_xp', offset: 200, callback: '$().slideLeft("#landing_xp")' },
    {selector: '#landing_discover', offset: 250, callback: '$().slideRight("#landing_discover")' },
    {selector: '#landing_activity', offset: 300, callback: '$().slideLeft("#landing_activity")' },
    {selector: '#landing_notifications', offset: 350, callback: '$().slideRight("#landing_notifications")' }
    ];
   
    $().scrollFire(options);

function ShowLanding(){
	var windowWidth = $(window).width();
    $("#landing").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #discover, #analytics, #admin, #notifications, #user, #game, #navigation-header").css({"display":"none"});
    $("#navigationContainer").css({"-webkit-box-shadow":"none", "box-shadow":"none"});
	$("#activity, #discover, #analytics, #admin, #notifications, #user, #game").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#landing").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
		ShowLoader($("#landingInnerContainer"), 'big', "<br><br><br>");
		$.ajax({ url: '../php/webService.php',
	     data: {action: "ShowLanding" },
	     type: 'post',
	     success: function(output) {
	 		$("#landingInnerContainer").html(output);
	 		location.hash = "landing";
 			$(".indicator").css({"display":"none"});
			$(".active").removeClass("active");
			$(".btn-register").on('click', function(e){ $('#signupModal').openModal(); });
			$(".landing-login, .landing-login-mobile").on('click', function(e){ $('#loginModal').openModal(); $("#username").focus(); });
			$(".card-game-tier-container").on("click", function(e){ GameCardActions($(this)); });
			$(".game-discover-card .card-image, .card-action a").on("click", function(e){ e.stopPropagation(); ShowGame($(this).parent().attr("data-gbid"), ''); });
  			$(".critic-name-container").on("click", function(e){
 				ShowUserWeave($(this).attr("data-id"));
 			});
			$(".landing-show-discover").on("click", function(e){
				ManuallyNavigateToTab("#discover");
			});
			$(".landing-show-activity").on("click", function(e){
				ManuallyNavigateToTab("#activity");
			});
			AttachSignUpEvents();
			window.scrollTo(0, 0);
			var graphRunYet = false;
			var scrolled = false;
			$(window).scroll(function(){
			 	if(isLandingScrolledIntoView(".landingGraphs") && graphRunYet == false){
			 		runGraphEvent();
			 		graphRunYet = true;
			 	}
			 	if(scrolled == false){
			 		$(".landing-monitor").css({"opacity":"1"});
			 		scrolled = true;
			 	}
			 });
			AttachSignUpLandingEvents();
			AnimateLanding();
			$('select').material_select();
			GAPage('Landing', '/landing');
            var formStarted = false;
            $("#signup_username").on('keypress keyup', function (e) {
                if (formStarted == false) { 
                    GAEvent('Landing', 'Begin-Signup');
                } 
            });
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
}

function AttachSignUpLandingEvents(){
	$("#SignupSubmitBtnLanding").on("click", function(e){
		var errors = "";
		if($("#landing-sign-up").find("#signup_username").val() === "")
			errors = errors + "Username cannot be blank<br>";
		if($("#landing-sign-up").find("#signup_email").val() === "")
			errors = errors + "Email cannot be blank<br>";
		if($("#landing-sign-up").find("#signup_password").val() === "")
			errors = errors + "Password cannot be blank<br>";
		//if($("#landing-sign-up").find("#signup_password").val() !== $("#landing-sign-up").find("#signup_confirm_password").val())
		//	errors = errors + "Passwords do not match<br>";
		if($("#landing-sign-up").find("#signup_username").val().indexOf(' ') >= 0)
			errors = errors + "Username can not have spaces<br>";
			
		if(errors === "")
			VerifyNewUserDataLanding($("#landing-sign-up").find("#signup_username").val(), $("#landing-sign-up").find("#signup_email").val());	
		else{
			$("#landing-sign-up").find(".validation").html(errors);
			$("#landing-sign-up").find(".validation").show();
		}
			
	});
}

function SignupFromLanding(username, password, email, first, last, birthyear){
	ShowLoader($("#landing-sign-up").find(".validation"), 'small', '');
	$.ajax({ url: '../php/webService.php',
         data: {action: "Signup", username: username, password: password, email: email, first: first, last: last, birthyear: birthyear },
         type: 'post',
         success: function(output) {
         			window.location.hash = "#notifications";
         			setCookie("RememberMe", $.trim(output), 14);
					window.location.reload(true);
  		},
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function VerifyNewUserDataLanding(username, email){
	var errors = "";
	$.ajax({ url: '../php/webService.php',
         data: {action: "VerifyNewUser", username: username, email: email },
         type: 'post',
         success: function(output) {
         			if(output.indexOf("Username is already used") >= 0){
         				errors = "Username is already used<br>";
         			}else if(output.indexOf("Email is already used") >= 0){
         				errors = errors + "Email is already used<br>";
         			}
         			if(errors !== ""){
         				$("#landing-sign-up").find(".validation").html(errors);
						$("#landing-sign-up").find(".validation").show();
         			}else{
         				SignupFromLanding($("#landing-sign-up").find("#signup_username").val(), $("#landing-sign-up").find("#signup_password").val(), $("#landing-sign-up").find("#signup_email").val(), '', '', $("#landing-sign-up").find("#birthyear").val());
         			}
        },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AnimateLanding(){
	$("#landing_profile").velocity({opacity: 0, translateY: "+100px"});
    $("#landing_profile").velocity({opacity: 1, translateY: "0"},
    { duration: 800, delay: 800, easing: [60, 10] });
    
    /*** Animate word ***/
	initHeadline();
}

	function initHeadline() {
		singleLetters($('.cd-headline.letters').find('b'));
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}

	var card  = document.querySelectorAll('.card-work');
  	var transEndEventNames = {
	      'WebkitTransition' : 'webkitTransitionEnd',
	      'MozTransition'    : 'transitionend',
	      'transition'       : 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

	function addDashes(name) {
		return name.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); });
	}

	function getPopup(id) {
		return document.querySelector('.popup[data-popup="' + id + '"]');
	}

	function getDimensions(el) {
	   return el.getBoundingClientRect();
	}

	function getDifference(card, popup) {
		var cardDimensions = getDimensions(card),
	    	popupDimensions = getDimensions(popup);

		return {
		  	height: popupDimensions.height / cardDimensions.height,
		  	width: popupDimensions.width / cardDimensions.width,
		  	left: popupDimensions.left - cardDimensions.left,
		  	top: popupDimensions.top - cardDimensions.top
		}
	}

	/*function transformCard(card, size) {
		return card.style[Modernizr.prefixed('transform')] = 'translate(' + size.left + 'px,' + size.top + 'px)' + ' scale(' + size.width + ',' + size.height + ')';
	}*/

	function hasClass(elem, cls) {
	    var str = " " + elem.className + " ";
	    var testCls = " " + cls + " ";
	    return(str.indexOf(testCls) != -1) ;
	}

	function closest(e) {
	   var el = e.target || e.srcElement;
	    if (el = el.parentNode) do { //its an inverse loop
	        var cls = el.className;
	        if (cls) {
	            cls = cls.split(" ");
	            if (-1 !== cls.indexOf("card-work")) {
	                return el;
	                break;
	            }
	        }
	    } while (el = el.parentNode);
	}

	function scaleCard(e) {
		var el = closest(e);
		var target = el,
		    id     = target.getAttribute('data-popup-id'),
		    popup  = getPopup(id);

		var size = getDifference(target, popup);

	   	target.style[Modernizr.prefixed('transitionDuration')] = '0.5s';
	   	target.style[Modernizr.prefixed('transitionTimingFunction')] = 'cubic-bezier(0.4, 0, 0.2, 1)';
	   	target.style[Modernizr.prefixed('transitionProperty')] = addDashes(Modernizr.prefixed('transform'));
	   	target.style['borderRadius'] = 0;
	   
	  	transformCard(target, size);
	  	onAnimated(target, popup);
	  	onPopupClick(target, popup);
	}

	function onAnimated(card, popup) {
	 	card.addEventListener(transEndEventName, function transitionEnded() {
	   		card.style['opacity'] = 0;
	   		popup.style['visibility'] = 'visible';
	   		popup.style['zIndex'] = 9999;
	   		card.removeEventListener(transEndEventName, transitionEnded);
	 	});
	}

	/*function onPopupClick(card, popup) {
		popup.addEventListener('click', function toggleVisibility(e) {
		  	var size = getDifference(popup, card);
		  
		  	card.style['opacity'] = 1;
		  	card.style['borderRadius'] = '6px';
		  	hidePopup(e);       
		  	transformCard(card, size);
		}, false);
	}*/


	function hidePopup(e) {
		e.target.style['visibility'] = 'hidden';
		e.target.style['zIndex'] = 2;
	}
	
	function runGraphEvent(){
	var timeoutcounter = 0;
	$(".bp-progress-item-bar").each(function(){
		var after = $(this).find(".bp-progress-item-bar-after");
		var before = $(this).find(".bp-progress-item-bar-before");
		var lvlup = $(this).parent().find(".bp-progress-item-levelup");
		//var left = after.attr("data-left");
		//after.css({"left":left});
		setTimeout(function(e){
			var width = after.attr("data-width");
			after.css({"width":width});
			if(lvlup.attr("data-levelup") == "Yes" && lvlup.html() != "LEVEL UP!"){
				lvlup.html("LEVEL UP!");
				setTimeout(function(e){
					before.css({"background-color":"#66BB6A"});
					after.css({"background-color":"#66BB6A"});
					lvlup.html("Level " + lvlup.attr("data-newlevel"));
				}, 1000);
			}
		}, timeoutcounter);
			timeoutcounter = timeoutcounter + 1000;
	});
}
	

      
function InitializeLogin(){
	$("#loginButton, #loginButtonSideNav").on('click', function(e){ $('#loginModal').openModal(); $("#username").focus(); });
	$("#signupButton, #signupButtonSideNav").on('click', function(e){ $('#signupModal').openModal(); });
	$('.signOutButton').on("click", function(e){ Logout(); });
	$("select").material_select();
	AttachLoginEvents();
	AttachSignUpEvents();
	AttachForgotPasswordEvents();
	CheckForPasswordReset();
}

function AttachSignUpEvents(){
	$("#SignupSubmitBtn").on("click", function(e){
		var errors = "";
		if($("#signup_username").val() === "")
			errors = errors + "Username cannot be blank<br>";
		if($("#signup_email").val() === "")
			errors = errors + "Email cannot be blank<br>";
		if($("#signup_password").val() === "" || $("#signup_confirm_password").val() === "")
			errors = errors + "Password cannot be blank<br>";
		if($("#signup_password").val() !== $("#signup_confirm_password").val())
			errors = errors + "Passwords do not match<br>";
		if($("#signup_username").val().indexOf(' ') >= 0)
			errors = errors + "Username can not have spaces<br>";
			
		if(errors === "")
			VerifyNewUserData($("#signup_username").val(), $("#signup_email").val());	
		else{
			$("#signupModal").find(".validation").html(errors);
			$("#signupModal").find(".validation").show();
		}
			
	});
}

function Signup(username, password, email, first, last, birthyear){
	ShowLoader($("#SignupSubmitBtn"), 'small', '');
	$.ajax({ url: '../php/webService.php',
         data: {action: "Signup", username: username, password: password, email: email, first: first, last: last, birthyear: birthyear },
         type: 'post',
         success: function(output) {
         			GAEvent('Signup', email);
         			setCookie("RememberMe", $.trim(output), 14);
          			window.location.hash = "#notifications";
					window.location.reload(true);
  		},
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function VerifyNewUserData(username, email){
	var errors = "";
	$.ajax({ url: '../php/webService.php',
         data: {action: "VerifyNewUser", username: username, email: email },
         type: 'post',
         success: function(output) {
         			if(output.indexOf("Username is already used") >= 0){
         				errors = "Username is already used<br>";
         			}else if(output.indexOf("Email is already used") >= 0){
         				errors = errors + "Email is already used<br>";
         			}
         			if(errors !== ""){
         				$("#signupModal").find(".validation").html(errors);
						$("#signupModal").find(".validation").show();
         			}else{
         				Signup($("#signup_username").val(), $("#signup_password").val(), $("#signup_email").val(), $("#first_name").val(), $("#last_name").val(), $("#birthyear").val());
         			}
        },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function CheckForPasswordReset(){
	var forgottenkey = getParameterByName('forgotkey');
	if(forgottenkey !== "" && forgottenkey !== undefined){
		$('#passwordResetModal').openModal();
		$("#ResetLoginBtn").on("click", function(e){
			if($("#resetpassword").val() === $("#confirmresetpassword").val() && $("#resetpassword").val() !== "")
				ResetPassword(forgottenkey, $("#resetpassword").val());	
			else
				DisplayLoginValidation(3);
		});
	}
}

function ResetPassword(key, password){
	$.ajax({ url: '../php/webService.php',
         data: {action: "ResetForgottenPassword", key: key, password: password },
         type: 'post',
         success: function(output) {
         				window.location = window.location.pathname; 
      	 },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachForgotPasswordEvents(){
	$(".forgotPasswordBtn").on("click", function(e){ 
		$(".forgotPassword").show(250); 
		$("#ForgotLoginSubmitBtn").on("click", function(e){
			if($("#forgotemail").val() !== "")
				RequestLoginReset($("#forgotemail").val());
			else
				DisplayLoginValidation(2);
		});
	});
}

function AttachLoginEvents(){
	$("#LoginSubmitBtn").on("click", function(e){
		Login($("#username").val(), $("#password").val());	
	});
	$("#username, #password").on('keypress keyup', function (e) {
		if (e.keyCode === 13) { 
			e.stopPropagation(); 	
			Login($("#username").val(), $("#password").val()); 
		} 
		
	});
}

function Login(user, pw){
	if(user === "" || pw === ""){
		DisplayLoginValidation(0);
	}else{
		ShowLoader($(".validation"), 'small');
		$.ajax({ url: '../php/webService.php',
	         data: {action: "Login", user: user, pw: pw },
	         type: 'post',
	         success: function(output) {
	         			if(output.indexOf("INCORRECT USERNAME OR PASSWORD") >= 0){
	         				DisplayLoginValidation(1);
	         			}else{
	         				GAEvent('Login', user);
	         				setCookie("RememberMe", $.trim(output), 14);
	         				location.hash = "#activity";
	         				location.reload();
	         			}
            },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
		});
	}
}

function DisplayLoginValidation(errorCode){
	if(errorCode === 0)
		$("#loginModal").find(".validation").html("Username/Password fields can not be blank");
	else if(errorCode == 1)
		$("#loginModal").find(".validation").html("Incorrect Username or Password");
	else if(errorCode == 2)
		$("#loginModal").find(".validation").html("Missing email address to reset password");
	else if(errorCode == 3)
		$("#passwordResetModal").find(".validation").html("Passwords do not match or are empty");
		
	$("#loginModal, #passwordResetModal").find(".validation").show();
}

function RequestLoginReset(email){
	ShowLoader($(".forgotPasswordBtn div"), 'small', '');
	$(".forgotPassword").html("");
	$.ajax({ url: '../php/webService.php',
     data: {action: "ForgotPassword", email: email },
     type: 'post',
     success: function(output) {
     			GAEvent('Login', 'Reset Password:'+email);
	 			$(".forgotPassword").html("<div style='text-align:center'>Please check your email to reset your password</div>");
 				$(".forgotPasswordBtn div").remove();
      },
	    error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
		},
		timeout:45000
	});
}

function Logout(){
	$.ajax({ url: '../php/webService.php',
     data: {action: "Logout" },
     type: 'post',
     success: function(output) {
     	setCookie("RememberMe", "removeMe", -1);
 		location.reload();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}
$(function() {
	InitializeNavigation();
	InitializeLogin();
	InitializeDiscover();
	ResizeEvents();
	IsTouchDevice();
	$(window).resize(function() {
		ResizeEvents();
	});
	//$(window).bind('hashchange', function(){
	//	ManageHashEvents();
	//});
});


function ManageHashEvents(){
	if(GLOBAL_HASH_REDIRECT == ""){
		var data = location.hash.split('/');
		if(location.hash == "#discover"){
			ShowDiscoverHome();
		}else if(location.hash == "#notifications"){
			ShowNotificationsHome();
		}else if(location.hash == "#admin"){
			ShowAdminHome();
		}else if(location.hash == "#activity"){
			ShowActivityHome();
		}else if(data[0] == "#game" && data[1] > 0){
			ShowGame(data[1], '', true, true);
		}else if(data[0] == "#profile" && data[1] > 0){
			ShowUserProfile(data[1], false, true);
		}else if(data[0] == "#landing"){
			ShowLanding();
		}else if(location.hash == "#!"){
			//do nothing
		}else{
			if($("#loginButton").length > 0){
				ShowLanding();
			}else{
				ShowActivityHome();
			}
		}
	}else{
		GLOBAL_HASH_REDIRECT = "";
	}
}

function NiceScroll(element, offset){
	if($(window).width() > 599){
		$('html, body').animate({
	        scrollTop: element.offset().top - offset
	    }, 500);
	}else{
		$('html, body').animate({
	        scrollTop: element.offset().top
	    }, 500);
	}
}

function ResizeEvents(){
		$('.mobileContainer').unbind();
		if($( window ).width() < 993)
			$('.mobileContainer').sideNav();

		if($(window).width() < 600){
		
			
		}

		if($(window).width() >= 993 && !$("#sideContainer").is(":visible")){
			$("#sideContainer").css({"display":"inline-block"});
			$("#sideContainer").velocity({"right":"0"}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 80});
		}
			
		//window.scrollTo(0, 0);
}

function ShowLoader(element,size,vertical){
	if(size == "")
		size = "big";
		element.html(vertical+"<div class='preloader-wrapper "+size+" active'><div class='spinner-layer spinner-blue'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer spinner-red'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer spinner-yellow'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer spinner-green'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>");
}

function ShowSideLoader(){
	$("#sideContainer").html("<div class='progress progress-side-bar'><div class='indeterminate'></div></div>");
}

function Toast(msg){
	toast(msg, 5000);
}

function ToastProgress(msg){
	toast(msg, 5000);
}


function ToastError(msg){
	toast(msg, 5000);
}

function ToastUpdate(){
	var msg = "New updates available! <span onclick='location.reload(true);' style='cursor:pointer;color:#FF8E00;font-weight: bold;padding: 0 10px 0 20px;'>REFRESH</span>";
	toast(msg, 3540000);
}

function ToastRight(msg){
		toastr.options = {
		  "debug": false,
		  "positionClass": "toast-bottom-right",
		  "onclick": null,
		  "fadeIn": 300,
		  "fadeOut": 1000,
		  "timeOut": 5000,
		  "extendedTimeOut": 1000
		};
		toastr.success(msg);
}

function ToastRightError(msg){
		toastr.options = {
		  "debug": false,
		  "positionClass": "toast-bottom-right",
		  "onclick": null,
		  "fadeIn": 300,
		  "fadeOut": 1000,
		  "timeOut": 120000,
		  "extendedTimeOut": 10000
		};
		toastr.success(msg);
}

function SideContentPush(content){
	 SIDE_CONTENT.push(content);
}

function SideContentPop(){
	if(SIDE_CONTENT.length == 1)
		return SIDE_CONTENT[0];
	else
	 	return SIDE_CONTENT.pop();
}

function SideContentEventPush(method){
	 SIDE_CONTENT_EVENTS.push(method);
}

function SideContentEventPop(){
	if(SIDE_CONTENT_EVENTS.length == 1)
		return SIDE_CONTENT_EVENTS[0];
	else
		return SIDE_CONTENT_EVENTS.pop();
}

function ClearSideContent(){
	SIDE_CONTENT_EVENT = new Array();
	SIDE_CONTENT = new Array();
}

function AttachFloatingIconEvent(icon) {
	if(icon == null)
		icon = "mdi-hardware-gamepad";
	
    // jQuery reverse
    jQuery.fn.reverse = [].reverse;
    $('.fixed-action-btn').unbind();
    $('.fixed-action-btn').each(function (i) {
      var $this = $(this);
      $this.find('ul a.btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: "40px"},
        { duration: 0 });
	 
      var timer;
      $this.hover(
        function() {
	      	$this.find("ul").css({"display":"block"});
	      	$this.addClass("activeFAB");
        	$this.find("a .large").velocity({ rotateZ: "360deg"}, 80, function(){ $this.find("a .large").removeClass("mdi-content-add"); $this.find("a .large").addClass(icon); });
        	
          var time = 0;
          $this.find('ul a.btn-floating').reverse().each(function () {
            $(this).velocity(
              { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"},
              { duration: 80, delay: time });
            time += 40;
          });
        }, function() {
          var time = 0;
          $this.find('ul a.btn-floating').velocity("stop", true);
          $this.find('ul a.btn-floating').velocity(
            { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: "40px"},
            { duration: 80 });
        	$this.find("a .large").velocity({ rotateZ: "-360deg"}, 80, function(){ $this.find("a .large").removeClass(icon); $this.find("a .large").addClass("mdi-content-add"); });
        	$this.find("ul").css({"display":"none"});
        	$this.removeClass("activeFAB");
        }
      );
    });
    /*
    $('.fixed-action-btn').each(function (i) {
      var $this = $(this);
     
      $this.find('ul a.btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: "40px"},
        { duration: 0 });
	 
      var timer;
      $this.on('click', function(e) {
      	  $this.addClass("activeFAB");
      	  $this.find("ul").css({"display":"block"});
          $this.find("a .large").velocity({ rotateZ: "360deg"}, 80, function(){ $this.find("a .large").removeClass("mdi-content-add"); $this.find("a .large").addClass(icon); });
          e.stopPropagation();
          var time = 0;
          $this.find('ul a.btn-floating').reverse().each(function () {
            $(this).velocity(
              { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"},
              { duration: 80, delay: time });
            time += 40;
          });
          
          $("html").on('click', function() {
	          var time = 0;
	          $this.find('ul a.btn-floating').velocity("stop", true);
	          $this.find('ul a.btn-floating').velocity(
	            { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: "40px"},
	            { duration: 80 });
	        	$this.find("a .large").velocity({ rotateZ: "-360deg"}, 80, function(){ $this.find("a .large").removeClass(icon); $this.find("a .large").addClass("mdi-content-add"); });
	          $this.find("ul").css({"display":"none"});
	          $this.removeClass("activeFAB");
          	}
	      );
          
        });
    });
    */
}

function isScrolledIntoView(elem)
{
	if(elem.offset() != undefined){
	    var docViewTop = $("#applicationContainer").scrollTop();
	    var docViewBottom = docViewTop + $( window ).height();
	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
    	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
}

function isLandingScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function IsTouchDevice() {  
  try {  
    document.createEvent("TouchEvent");  
    IS_TOUCH_DEVICE =  true;  
  } catch (e) {  
    IS_TOUCH_DEVICE = false;  
  }  
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function GAEvent(category, action){
	ga('send', {
	  hitType: 'event',
	  eventCategory: category,
	  eventAction: action,
	  eventLabel: 'Alpha'
	});
}

function GAPage(title, page){
	ga('send', {
	  hitType: 'pageview',
	  page: page,
      title: title
	});
}

//Globals
var GLOBAL_VERSION = 100000;
var GLOBAL_TAB_REDIRECT = "";
var GLOBAL_HASH_REDIRECT = "";
var SIDE_CONTENT_EVENTS = new Array();
var SIDE_CONTENT = new Array();
var IS_TOUCH_DEVICE = false;
var SCROLL_POS = 0;
var GLOBAL_VERSION=39;function InitializeNavigation(){
	$('.mainNav').tabs();
	$("#slide-out li").on('click', function(e){ SideNavigation($(this)); });
	UserAccountNav();
	AttachTabLoadingEvents();
	CheckForNotifications();
	CheckForUpdates();
}

function ManuallyNavigateToTab(tab){
	$("#navigation-header .row .col .tabs .tab a").each(function(){
		if($(this).attr("href") == tab){
			$(this).trigger("click");
		}
	});
}

function AttachTabLoadingEvents(){
	  $(".mainNav .tab a").on('click', function(){
		  if($(this).attr('href') == "#discover"){
		  	if(GLOBAL_TAB_REDIRECT == ""){
				ShowDiscoverHome();
		  	}
		  }else if($(this).attr('href') == "#notifications"){
	  		ShowNotificationsHome();
		  }else if($(this).attr('href') == "#activity"){
		  	ShowActivityHome();
		  }else if($(this).attr('href') == "#profile"){
  			var id = $(".userContainer").attr("data-id");
			ShowUserProfile(id, true);
		  }
	  });
	  $(".userNotificiations").on("click", function(){
	  	ManuallyNavigateToTab("#notifications");
	  });
	  $(".userPTalk").on("click", function(){
	  	window.open("http://tidbits.io/");
	  });
	  $(".userPTalkHelp, .supportButton").on("click", function(){
	  	var elem = $(".userContainer");
	  	var name = elem.attr("data-username");
	  	var email = elem.attr("data-email");
	  	//$(".freshwidget-button").trigger("click");
	  	ShowFreshDesk(name, email);
	  	//window.open("https://gitreports.com/issue/Lifebario/support?name="+name+"&email=Please%20do%20not%20include%20email");
	  });
  	  $(".supportForumButton").on("click", function(){
	  	window.open("https://lifebar.freshdesk.com");
	  });
	  $(".logoContainer").on("click", function(){
	  	if($("#userAccountNav").length > 0){
			ManuallyNavigateToTab("#profile");
	  	}else{
  			ShowLanding();
	  	}
	  });
}

function ShowFreshDesk(name, email){
	window.open("https://lifebar.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&screenshot=no&helpdesk_ticket[requester]="+email+"&formTitle=Lifebar+Help+%26+Support&helpdesk_ticket[name]="+name);
	//ShowPopUp("<iframe title='Feedback Form' class='freshwidget-embedded-form' id='freshwidget-embedded-form' src='https://lifebar.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&screenshot=no' scrolling='no' height='500px' width='100%'' frameborder='0' ></iframe>");
}

/*
*
* ExtraSettingsNavigation
*
*/
function UserAccountNav(){
	$('.userAccountNavButton').on('click', function(e){ e.stopPropagation(); $("#userAccountNav").show(250);});
	$('html').click(function(){
		if($("#userAccountNav").is(":visible"))
			$("#userAccountNav").hide(250);
	});
	$(".settingsButton").on('click', function(e){
		e.stopPropagation();
		HideFocus();
		$("#userAccountNav").hide(250);
		CloseSideNavigation();
		ShowUserSettings();
	});
	$(".adminButton").on('click', function(e){
		e.stopPropagation();
		HideFocus();
		$("#userAccountNav").hide(250);
		CloseSideNavigation();
		ShowAdminHome();
	});
	$(".profileButton, .userAvatar, .userNameTitle").on('click', function(e){
		var id = $(".userContainer").attr("data-id");
		e.stopPropagation();
		HideFocus();
		$("#userAccountNav").hide(250);
		CloseSideNavigation();
 		ManuallyNavigateToTab("#profile");
	});
}

/*
*
* SideContent
*/

function HideFocus(){
	$("#lean-overlay").velocity({"opacity":0}, { complete: function(a){ 
													$("#lean-overlay").hide(); 
													$("#lean-overlay").remove(); 
													$(".my-lean-overlay").each(function(){
														$(this).hide(); 
														$(this).remove(); 
													});
													}
												}
	);
}

/*
*
* Universal Pop Up
*
*/
function ShowPopUp(content){
	$("#universalPopUp").html(content);
	$("#universalPopUp").openModal();
  	$(".closeDetailsModal").unbind();
  	$(".closeDetailsModal").on('click', function(){
  		$("#universalPopUp").closeModal();
  		HideFocus();
  	});
}

/*
*
* Universal Bottomsheet
*
*/
function ShowBottomSheet(content){
	$("#universalBottomSheet").html(content);
	$("#universalBottomSheet").openModal();
  	$(".closeDetailsModal").unbind();
  	$(".closeDetailsModal").on('click', function(){
  		$("#universalBottomSheet").closeModal();
  		HideFocus();
  	});
}


/*
*
* BattleProgess
*
*/
function ShowBattleProgress(content){
	$("#BattleProgess").html(content);
	$("#BattleProgess").openModal();
  	$(".closeDetailsModal").unbind();
  	$(".closeDetailsModal").on('click', function(){
  		$("#BattleProgess").closeModal();
  		HideFocus();
  	});
  	AttachBPEvents();
}

/*
*
* ProfileDetails
*
*/
function ShowProfileDetails(content){
	$("#BattleProgess").html(content);
	$("#BattleProgess").openModal();
  	$(".closeDetailsModal").unbind();
  	$(".closeDetailsModal").on('click', function(){
  		$("#BattleProgess").closeModal();
  		HideFocus();
  	});
}

/*
*
* SideNavigation
*
*/
function SideNavigation(navItem){
	var container = navItem.find("a").attr("href");
	$("#navigation-header .row .col .tabs .tab a").each(function(){
		if($(this).attr("href") == container){
			$(this).trigger("click");
		}
	});
	
	CloseSideNavigation();
}


function CloseSideNavigation(){
  $('#sidenav-overlay').animate({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
    complete: function() {
      $(this).remove();
    } });
  var menuWidth = $("#slide-out").width();
  $("#slide-out").velocity({left: -1 * (menuWidth + 10)}, {duration: 300, queue: false, easing: 'easeOutQuad'});
  enable_scroll();
}

function enable_scroll() {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}

function wheel(e) {
  preventDefault(e);
}

function CheckForNotifications(){
	$.ajax({ url: '../php/webService.php',
     data: {action: "CheckForNotifications" },
     type: 'post',
     success: function(output) {
     		if($.trim(output) == "1"){
     			$(".userNotificiations").html("<i class='mdi-social-notifications'></i><div class='notifications-new-badge'>NEW</div>");
     		}else{
     			$(".userNotificiations").html("<i class='mdi-social-notifications-none'></i>");
     		}
  			setTimeout(CheckForNotifications,300000);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            //ToastError("Server Timeout");
	        } else {
	            //ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function CheckForUpdates(){
	var version = GLOBAL_VERSION;
	$.ajax({ url: '../php/webService.php',
     data: {action: "CheckVersion", version: version },
     type: 'post',
     success: function(output) {
     		if($.trim(output) == "UPDATE"){
     			ToastUpdate();
     		}else{
  				setTimeout(CheckForUpdates,3660000);
     		}
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            //ToastError("Server Timeout");
	        } else {
	            //ToastError(t);
	        }
    	},
    	timeout:45000
	});
}
function ShowNotificationsHome(){
	ShowNotificationMainContent();
}

function ShowNotificationMainContent(){
	$("#notifications").css({"display":"block"});
  	ShowLoader($("#notificationsInnerContainer"), 'big', "<br><br><br>");
    var windowWidth = $(window).width();
    $("#notifications").css({"display":"inline-block", "left": -windowWidth});
    $("#discover, #profile, #admin, #profiledetails, #settings, #activity, #game, #user, #landing").css({"display":"none"});
    $("#discover, #profile, #admin, #profiledetails, #settings, #activity, #game, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#notifications").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
  	
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayNotificationHome" },
     type: 'post',
     success: function(output) {
     	if($(".notifications-new-badge").length > 0)
     		GAPage('Notifications', '/notifications/new');
     	else
     		GAPage('Notifications', '/notifications/old');
     		
 		$("#notificationsInnerContainer").html(output);
 		 $(".indicator").css({"display":"none"});
 		AttachNotificationEvents();
  		Waves.displayEffect();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachNotificationEvents(){
	$(".notification-dismiss").on('click', function(){
		var notificationid = $(this).attr("data-id");
		DismissNotification(notificationid, $(this).parent().parent().parent().parent());
	});
	$(".notification-viewgame").on('click', function(){
		var gameid = $(this).attr("data-id");
		ShowGame($(this).attr("data-id"), $("#notifications"), true);
	});
	$(".notification-card-icon-image").on('click', function(e){
		$(this).parent().parent().find(".notification-viewgame").trigger('click');	
	});
	$('.notification-header-nav-btn').on('click', function(e){ e.stopPropagation(); $("#notification-header-nav").show(250);});
	$('html').click(function(){
		if($("#notification-header-nav").is(":visible"))
			$("#notification-header-nav").hide(250);
	});
	$(".user-avatar").unbind();
  	$(".user-avatar").on("click", function(e){
    	e.stopPropagation();
 		ShowUserPreviewCard($(this).parent().find(".user-preview-card"));
 	});
	$("#notification-header-nav li a").on('click', function(e){
		e.stopPropagation();
		$(".notificiation-filter-selected").removeClass("notificiation-filter-selected");
		var selected = $(this).attr("class");
		$(".notification-category-selected").removeClass("notification-category-selected");
		$(".notification-category-selector").each(function(){
			var category = $(this).attr("id");
			if(category == selected)
				$(this).addClass("notification-category-selected");
		});
		var icon = $(this).attr("data-icon");
		var iconloc = $(".notification-header-icon .notification-header-icon-picker");
		iconloc.removeClass();
		iconloc.addClass(icon);
		iconloc.addClass("notification-header-icon-picker");
		$(this).addClass("notificiation-filter-selected");
		$(".notification-card").hide();
		if(selected == "notification-all"){
			$(".notification-card").show();
		}else
			$("."+selected).show();
		$(".notification-header-nav-btn span").html($(this).html());
		$("#notification-header-nav").hide(250);
	});
	$(".notification-category-selector").on('click', function(){
		$(".notification-category-selected").removeClass("notification-category-selected");
		$(this).addClass("notification-category-selected");
		var selected = $(this).attr("id");
		$("."+selected).trigger("click");
	});
}

function DismissNotification(notificationid, notification){
	notification.removeClass("notification-card");
	var category = notification.attr("class");
	var alltotal = parseInt($("#notification-all").parent().find(".notification-category-total").html());
	alltotal = alltotal - 1;
	$("#notification-all").parent().find(".notification-category-total").html(alltotal);
	var cattotal = parseInt($("#"+category).parent().find(".notification-category-total").html());
	cattotal = cattotal - 1;
	$("#"+category).parent().find(".notification-category-total").html(cattotal);
	notification.remove(); 
	$.ajax({ url: '../php/webService.php',
     data: {action: "DismissNotification", notificationid: notificationid },
     type: 'post',
     success: function(output) {
     			Toast("Dismissed notification");
     			
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
	
}
function ShowUserProfile(id, mine, browserNav){
	ShowUserContent(id,mine);
}

function ShowUserContent(userid, mine, browserNav){
	var windowWidth = $(window).width();
	if(!mine){
		$(".indicator").css({"display":"none"});
		$(".active").removeClass("active");
	}
    $("#profile").css({"display":"inline-block", "left": -windowWidth});
    $("#activity, #discover, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").css({"display":"none"});
    $("#activity, #discover, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#profile").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}

  	ShowLoader($("#profileInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayWeave", userid: userid },
     type: 'post',
     success: function(output) {
     			$("#profileInnerContainer").html(output);
     			window.scrollTo(0, 0);
      			Waves.displayEffect();
  	 			var name = $("#profileContentContainer").attr("data-name");
  	 			GLOBAL_HASH_REDIRECT = "NO";
	 			location.hash = "profile/"+userid+"/"+name;
      			DisplayCriticGraph();
      			//DisplayTierPieChart();
      			DisplayLifeTimeChart();
      			DisplaySkillsChart();
      			AttachProfileEvents(userid);
  				AttachFabHoverEvent();
				AttachFloatingIconWeaveButtonEvents();
	 	 		if(browserNav)
 	 				GLOBAL_HASH_REDIRECT = "";
  				if(!mine)
  					GAPage('Profile', '/profile/'+name);
  				else
  					GAPage('Profile', '/profile/personal/'+name);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachProfileEvents(userid){
 	$(".userprofile-card-avatar").on("click", function(e){
  		e.stopPropagation();
 		ShowUserPreviewCard($(this).find(".user-preview-card"));
 	});
 	$(".userprofile-game-card-image").on('click', function(e){
 		e.stopPropagation();
 	 	var game = $(this).parent().attr("data-gbid");
	 	setTimeout(function(){ ShowGame(game, $("#profile")); }, 500);
 	});
	$(".card-tier-container").on('click', function(){
		$(this).addClass("card-tier-container-active");
		$(this).parent().parent().find(".card-tier").hide();
		$(this).find(".card-tier-details").addClass("card-tier-details-active");
		$(this).find(".mdi-content-add-circle").on("click", function(e){
			e.stopPropagation();
			$(this).parent().parent().parent().removeClass("card-tier-container-active");
			$(this).parent().parent().removeClass("card-tier-details-active");
			$(this).parent().parent().parent().parent().find(".card-tier").show();
		});
	});
	$(".badge-view-more").on('click', function(){
		DisplayUserBadges(userid);		
	});
	 $(".feed-bookmark-card, .feed-activity-game-link, .feed-release-card, .calendar-card, .profile-highlighted-game, .profile-best-game, .checkpoint-container").on("click", function(e){
	 	e.stopPropagation();
	 	var game = $(this).attr("data-gbid");
	 	setTimeout(function(){ ShowGame(game, $("#profile")); }, 500);
	 });
 	 $(".profile-highlighted-game-quote, .profile-highlighted-game-name").on("click", function(e){
	 	e.stopPropagation();
	 	var game = $(this).parent().find(".profile-highlighted-game").attr("data-gbid");
	 	setTimeout(function(){ ShowGame(game, $("#profile")); }, 500);
	 });
	 $(".ability-spy").on("click", function(){
 		DisplaySpy(userid);
	 });
	 $(".ability-charisma").on("click", function(){
	 	DisplayCharisma(userid);
	 });
 	 $(".ability-leadership").on("click", function(){
	 	DisplayLeadership(userid);
	 });
  	 $(".ability-tracking").on("click", function(){
	 	DisplayTracking(userid);
	 });
	 $(".abilities-view-more").on("click", function(){
 		DisplayAbilitiesViewMore(userid);
	 });
	 $(".knowledge-view-more").on("click", function(){
	 	DisplayKnowledgeViewMore(userid);
	 });
	 $(".knowledge-container").on("click", function(){
	 	DisplayKnowledgeDetails(userid, $(this).attr("data-objectid"), $(this).attr("data-progid"));
	 });
	 $(".gear-view-more").on("click", function(){
	 	DisplayGearViewMore(userid);
	 });
  	$(".badge-small").on("click", function(){
 		var id = $(this).attr("data-objectid");
 		var progid = $(this).attr("data-progid");
 		DisplayGearDetails(userid, id, progid);
 	});
 	$(".profile-best-view-more").on("click", function(){
 		DisplayBestViewMore(userid);	
 	});
 	 $(".developer-view-more").on("click", function(){
	 	DisplayDeveloperViewMore(userid);
	 });
 	 $(".developer-profile-item").on("click", function(){
	 	DisplayDeveloperDetails(userid, $(this).attr("data-objectid"), $(this).attr("data-progid"));
	 });
	 $(".mylibrary").on("click", function(){
	 	DisplayMyLibrary(userid);
	 });
	 /*
	 * New Profile
	 */
	 $(".newprofile-link-discover").on('click', function(){
 		ShowDiscoverHome();
	 });
	 $(".newprofile-skills-item").on("click", function(){
	 	AdvancedSearch('', '', '', '', '', $(this).attr("data-id"), '');
	 });
	 $(".newprofile-knowledge-item").on('click', function(){
	 	AdvancedSearch('', '', '', '', '', '', $(this).attr("data-id"));
	 });
 	 $(".newprofile-gear-item").on('click', function(){
	 	AdvancedSearch('', $(this).attr("data-id"), '', '', '', '', '');
	 });
  	 $(".newprofile-dev-item").on('click', function(){
	 	AdvancedSearch('', '', '', '', $(this).attr("data-id"), '', '');
	 });
  	 $(".newprofile-best-item").on('click', function(){
	 	ShowGame($(this).attr("data-id"), $("#profile"));
	 });
}

function EndlessMyLibraryLoader(userid){
	ShowLoader($("#mylibrary-endless-loader"), 'big', "<br><br><br>");
	$("#mylibrary-endless-loader").append("<br><br><br>");
	var page = $("#mylibrary-endless-loader").attr("data-page");
	var group = $("#mylibrary-endless-loader").attr("data-date");
	var filter = $("#mylibrary-endless-loader").attr("data-filter");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayMyLibraryEndless", userid: userid, page: page, group: group, filter: filter },
     type: 'post',
     success: function(output) {
		$("#mylibrary-endless-loader").before(output);
		$("#mylibrary-endless-loader").html("");
		$("#mylibrary-endless-loader").attr("data-page", parseInt(page) + 100);
		var lastdate = $("#mylibrary-endless-loader").parent().find(".feed-date-divider:last").attr("data-date");
		$("#mylibrary-endless-loader").attr("data-date", lastdate);
		AttachMyLibraryEvents(userid);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayTracking(userid){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	ShowLoader($(".universalBottomSheetLoading"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayTrackingAbility", userid: userid },
     type: 'post',
     success: function(output) {
 		$("#BattleProgess").html(output); 
 		$(".card-game-small").on("click", function(e){
 			e.stopPropagation();
 	 		var game = $(this).attr("data-gbid");
	 		ShowGame(game, $("#profile"));
	 		$("#lean-overlay").trigger("click");
     	});

     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayLeadership(userid){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	ShowLoader($(".universalBottomSheetLoading"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayLeadershipAbility", userid: userid },
     type: 'post',
     success: function(output) {
 			$("#BattleProgess").html(output); 
			$(".badge-card-ability-avatar").on("click", function(){
				ShowUserProfile($(this).attr("data-id"));
				$("#lean-overlay").trigger("click");
			});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayCharisma(userid){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	ShowLoader($(".universalBottomSheetLoading"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayCharismaAbility", userid: userid },
     type: 'post',
     success: function(output) {
 			$("#BattleProgess").html(output); 
			
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplaySpy(userid){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	ShowLoader($(".universalBottomSheetLoading"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplaySpyAbility", userid: userid },
     type: 'post',
     success: function(output) {
 			$("#BattleProgess").html(output); 
			$(".badge-card-ability-avatar").on("click", function(){
				ShowUserProfile($(this).attr("data-id"));
				$("#lean-overlay").trigger("click");
			});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayAbilitiesViewMore(userid){
	window.scrollTo(0, 0);
  	ShowLoader($("#profileInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayAbilitiesViewMore", userid: userid },
     type: 'post',
     success: function(output) {
 		$("#profileInnerContainer").html(output); 
 		$(".backButton").on("click", function(){
 			ShowUserProfile(userid);
 		});
		$(".badge-card-ability-avatar").on("click", function(){
			ShowUserPreviewCard($(this).find(".user-preview-card"));	
		});
 		$(".card-game-small").on("click", function(e){
 			e.stopPropagation();
 	 		var game = $(this).attr("data-gbid");
	 		ShowGame(game, $("#profile"));
     	});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayMyLibrary(userid){
	window.scrollTo(0, 0);
  	ShowLoader($("#profileInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayMyLibrary", userid: userid, filter: 'Alpha' },
     type: 'post',
     success: function(output) {
 		$("#profileInnerContainer").html(output); 
 		AttachMyLibraryEvents(userid);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachMyLibraryEvents(userid){
 	$(".card-game-list").on("click", function(e){
 		e.stopPropagation();
  		var game = $(this).attr("data-gbid");
 		ShowGame(game, $("#profile"));
 		$("#lean-overlay").trigger("click");
 	});
  	$(".backButton").on("click", function(){
 		ShowUserProfile(userid);
 	});
	$(window).scroll(function(){
	 	if(isScrolledIntoView($("#mylibrary-endless-loader"))){
	 		if($("#mylibrary-endless-loader").html() == "")
	  			EndlessMyLibraryLoader(userid);
	 	}
	 });
 	$('.mylib-tier').change(function() {
		if(this.checked){
			MyLibraryToggleTier(true, $(this).attr("data-tier"));
		}else{
			MyLibraryToggleTier(false, $(this).attr("data-tier"));
		}
 	});
}

function MyLibraryToggleTier(display, tier){
	$(".game-list-item").each( function(e){
		var tempTier = $(this).attr("data-tier");
		if(tier == tempTier){
			if(display)
				$(this).show();
			else
				$(this).hide();
		}
	});
}

function DisplayKnowledgeViewMore(userid){
	window.scrollTo(0, 0);
  	ShowLoader($("#profileInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayKnowledgeViewMore", userid: userid },
     type: 'post',
     success: function(output) {
 		$("#profileInnerContainer").html(output); 
 		$(".backButton").on("click", function(){
 			ShowUserProfile(userid);
 		});
  		$(".knowledge-container").on("click", function(){
	 		DisplayKnowledgeDetails(userid, $(this).attr("data-objectid"), $(this).attr("data-progid"));
	 	});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayKnowledgeDetails(userid, objectid, progressid){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	ShowLoader($(".universalBottomSheetLoading"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayKnowledgeDetails", userid: userid, objectid: objectid, progressid: progressid,  },
     type: 'post',
     success: function(output) {
 		$("#BattleProgess").html(output); 
 		$(".card-game-small").on("click", function(e){
 			e.stopPropagation();
 	 		var game = $(this).attr("data-gbid");
	 		ShowGame(game, $("#profile"));
	 		$("#lean-overlay").trigger("click");
     	});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayGearViewMore(userid){
	window.scrollTo(0, 0);
  	ShowLoader($("#profileInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayGearViewMore", userid: userid },
     type: 'post',
     success: function(output) {
 		$("#profileInnerContainer").html(output); 
  		$(".backButton").on("click", function(){
 			ShowUserProfile(userid);
 		});
  		$(".card-game-small").on("click", function(e){
 			e.stopPropagation();
 	 		var game = $(this).attr("data-gbid");
	 		ShowGame(game, $("#profile"));
	 		$("#lean-overlay").trigger("click");
     	});
     	$(".badge-small").on("click", function(){
     		var id = $(this).attr("data-objectid");
     		var progid = $(this).attr("data-progid");
     		DisplayGearDetails(userid, id, progid);
     	});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayGearDetails(userid, objectid, progressid){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	ShowLoader($(".universalBottomSheetLoading"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayGearDetails", userid: userid, objectid: objectid, progressid: progressid,  },
     type: 'post',
     success: function(output) {
 		$("#BattleProgess").html(output); 
 		$(".card-game-small").on("click", function(e){
 			e.stopPropagation();
 	 		var game = $(this).attr("data-gbid");
	 		ShowGame(game, $("#profile"));
	 		$("#lean-overlay").trigger("click");
     	});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
	
}

function DisplayBestViewMore(userid){
	window.scrollTo(0, 0);
  	ShowLoader($("#profileInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayBestViewMore", userid: userid },
     type: 'post',
     success: function(output) {
 		$("#profileInnerContainer").html(output); 
  		$(".backButton").on("click", function(){
 			ShowUserProfile(userid);
 		});
  		$(".card-game-small").on("click", function(e){
 			e.stopPropagation();
 	 		var game = $(this).attr("data-gbid");
	 		ShowGame(game, $("#profile"));
	 		$("#lean-overlay").trigger("click");
     	});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayDeveloperViewMore(userid){
	window.scrollTo(0, 0);
  	ShowLoader($("#profileInnerContainer"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayDeveloperViewMore", userid: userid },
     type: 'post',
     success: function(output) {
 		$("#profileInnerContainer").html(output); 
 		$(".backButton").on("click", function(){
 			ShowUserProfile(userid);
 		});
	 	 $(".knowledge-container").on("click", function(){
		 	DisplayDeveloperDetails(userid, $(this).attr("data-objectid"), $(this).attr("data-progid"));
		 });
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}


function DisplayDeveloperDetails(userid, objectid, progressid){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	ShowLoader($(".universalBottomSheetLoading"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayDeveloperDetails", userid: userid, objectid: objectid, progressid: progressid,  },
     type: 'post',
     success: function(output) {
 		$("#BattleProgess").html(output); 
 		$(".card-game-small").on("click", function(e){
 			e.stopPropagation();
 	 		var game = $(this).attr("data-gbid");
	 		ShowGame(game, $("#profile"));
	 		$("#lean-overlay").trigger("click");
     	});
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachNavInThread(){
	$(".thread-game-full-w-leftnav").on("click", function(){
		var current = $(this).parent().find(".thread-nav-active");
		current.removeClass("thread-nav-active");
		current.addClass("thread-nav-right");
		setTimeout(function(){ current.addClass("thread-nav-hidden"); current.removeClass("thread-nav-right");  }, 1000);
		var prev = current.prev();
		prev.removeClass("thread-nav-hidden");
		prev.addClass("thread-nav-active");
		var ondeck = prev.prev();
		if(!ondeck.hasClass("thread-nav-hidden")){
			$(this).parent().find(".thread-game-full-w-leftnav").hide();
		}else{
			$(this).parent().find(".thread-game-full-w-leftnav").show();
		}
		$(this).parent().find(".thread-game-full-w-rightnav").show();
	});
	$(".thread-game-full-w-rightnav").on("click", function(){
		var current = $(this).parent().find(".thread-nav-active");
		current.removeClass("thread-nav-active");
		current.addClass("thread-nav-left");
		setTimeout(function(){ current.addClass("thread-nav-hidden"); current.removeClass("thread-nav-left");  }, 1000);
		var next = current.next();
		next.removeClass("thread-nav-hidden");
		next.addClass("thread-nav-active");
		var ondeck = next.next();
		if(!ondeck.hasClass("thread-nav-hidden")){
			$(this).parent().find(".thread-game-full-w-rightnav").hide();
		}else{
			$(this).parent().find(".thread-game-full-w-rightnav").show();
		}
		$(this).parent().find(".thread-game-full-w-leftnav").show();
	});
	
}

function DisplayTierGraphChart(){
	if($(".GraphTiers").length > 0){
		$(".GraphTiers").each(function(){
			var experiencedUsersGraph = $(this).get(0).getContext("2d");
			var data = {
		    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
		    datasets: [
		        {
		            label: "Lifetime XP",
		            fillColor: "#A7A7CC",
		            strokeColor: "#555593",
		            pointColor: "#555593",
		            pointStrokeColor: "rgba(71,71,71,1)",
		            pointHighlightFill: "rgba(71,71,71,1)",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: [$(this).attr("data-t1"), $(this).attr("data-t2"), $(this).attr("data-t3"), $(this).attr("data-t4"), $(this).attr("data-t5")]
		        }
		    ]
		};
		$(this).attr('width', $(this).parent().width()-25);
    	$(this).attr('height', 200);
    		
		var temp = new Chart(experiencedUsersGraph).Line(data, { datasetStrokeWidth : 4, showScale: true, bezierCurve : true, pointDot : false, scaleFontColor : "rgba(71,71,71,1)", scaleShowGridLines : false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>", animation: true });
      	
		});
	}
	
	if($(".SmallerGraphTiers").length > 0){
		$(".SmallerGraphTiers").each(function(){
			var experiencedUsersGraph = $(this).get(0).getContext("2d");
			var data = {
		    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
		    datasets: [
		        {
		            label: "Lifetime XP",
		            fillColor: "rgb(255, 0, 97)",
		            strokeColor: "rgb(255, 0, 97)",
		            pointColor: "rgb(255, 0, 97)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgb(255, 0, 97)",
		            data: [$(this).attr("data-t1"), $(this).attr("data-t2"), $(this).attr("data-t3"), $(this).attr("data-t4"), $(this).attr("data-t5")]
		        }
		    ]
		};
		$(this).attr('width', $(this).parent().width()-10);
    	$(this).attr('height', 200);
    		
		var temp = new Chart(experiencedUsersGraph).Line(data, { datasetStrokeWidth : 4, showScale: true, bezierCurve : true, pointDot : false, scaleShowGridLines : false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>", animation: true });
      	
		});
	}
	
}

function AttachFabHoverEvent(){
 	var iconOnHover="";
	if($(".fixed-action-btn .user-unfollow-btn").length > 0)
		iconOnHover = "mdi-social-person-outline";
	else
		iconOnHover = "mdi-social-person-add";
		
 	AttachFloatingIconEvent(iconOnHover);
}

function AttachFloatingIconWeaveButtonEvents(){
	$(".user-add-small-image-btn").on('click', function(){
		var html = "<div><span>User ID: "+$(this).attr("data-userid")+"</span><br><iframe src='http://lifebar.io/utilities/FileImageUploaderSmall.php' style='width:100%;border:none;'></iframe>";
		ShowPopUp(html);	
	});
	$(".user-add-large-image-btn").on('click', function(){
		var html = "<div><span>User ID: "+$(this).attr("data-userid")+"</span><br><iframe src='http://lifebar.io/utilities/FileImageUploaderLarge.php' style='width:100%;border:none;'></iframe>";
		ShowPopUp(html);
	});
	$(".user-run-weave-cal-btn").on('click', function(){
		Toast("Calculating user's weave");
		$.ajax({ url: '../php/webService.php',
	     data: {action: "RunWeaveCalculator", userid: $(this).attr("data-userid")  },
	     type: 'post',
	     success: function(output) {
			Toast("Finished calculating and updating weave. Please refresh to see changes.")
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	});
	$(".user-set-title").on("click", function(){
		var userid = $(this).attr("data-userid");
		var html = "<div class='row'><div class='col s12 input-field'><input type=text name='updatetitle' id='updatetitle' /><label for='updatetitle'>Title/Publication</label></div><div class='btn wave-effect update-title-btn'>Update Title<div></div>";
		ShowPopUp(html);
			$(".update-title-btn").on('click', function(){
				$.ajax({ url: '../php/webService.php',
			     data: {action: "SaveTitle", userid: userid, title: $("#updatetitle").val()  },
			     type: 'post',
			     success: function(output) {
					Toast("Users Title/Publication updated. Please refresh to see changes.")
			     },
			        error: function(x, t, m) {
				        if(t==="timeout") {
				            ToastError("Server Timeout");
				        } else {
				            ToastError(t);
				        }
			    	},
			    	timeout:45000
				});
			});
	});
	$(".user-set-role").on("click", function(){
		var userid = $(this).attr("data-userid");
		DisplayRoleManagement(userid);
	});
	AttachFollowFABEvents();
}

function AttachFollowFABEvents(){
	$(".user-unfollow-btn, .user-follow-btn").unbind();
	$(".user-unfollow-btn").on('click', function(){
		UnfollowUserFromFab($(this).attr("data-userid"), $(this).attr("data-username"));
		$(this).removeClass("user-unfollow-btn");
		$(this).addClass("user-follow-btn");
		$(this).find(".GameHiddenActionLabelBigFab").html("Follow");
		$(this).find(".large").removeClass("mdi-social-person-outline");
		$(this).find(".large").addClass("mdi-social-group");
		AttachFabHoverEvent();
		AttachFollowFABEvents();
	});
	$(".user-follow-btn").on('click', function(){
		FollowUserFromFab($(this).attr("data-userid"), $(this).attr("data-username"));
		$(this).removeClass("user-follow-btn");
		$(this).addClass("user-unfollow-btn");
		$(this).find(".GameHiddenActionLabelBigFab").html("Unfollow");
		$(this).find(".large").removeClass("mdi-social-person-add");
		$(this).find(".large").addClass("mdi-social-group");
		AttachFabHoverEvent();
		AttachFollowFABEvents();
	});
}

function DisplayRoleManagement(userid){
	$.ajax({ url: '../php/webService.php',
     data: {action: "DisplayRoleManagement", userid: userid },
     type: 'post',
     success: function(output) {
 		ShowPopUp(output);
 		AttachRoleManagementEvents(userid);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachRoleManagementEvents(userid){
	$(".save-role-change").on('click', function(){
		var role = $("input[type=radio][name=rolegroup]:checked").attr("id");
		$.ajax({ url: '../php/webService.php',
	     data: {action: "UpdateRoleManagement", userid: userid, role: role },
	     type: 'post',
	     success: function(output) {
			Toast('Role has been updated');
	  		$("#universalPopUp").closeModal();
  			HideFocus();
	     },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	});
}

function FollowUserFromFab(followid, name){
	$.ajax({ url: '../php/webService.php',
     data: {action: "FollowUser", followid: followid },
     type: 'post',
     success: function(output) {
 		Toast("You are now following " + name); 
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function UnfollowUserFromFab(followid, name){
	$.ajax({ url: '../php/webService.php',
     data: {action: "UnfollowUser", followid: followid },
     type: 'post',
     success: function(output) {
 		Toast("You are no longer following " + name); 
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function DisplayTierPieChart(){
	if($(".GraphTierPieChart").length > 0){
		$(".GraphTierPieChart").each(function(){
			var experiencedUsersGraph = $(this).get(0).getContext("2d");
			var data = [
					    {
					        value: parseInt($(this).attr("data-t5")),
					        color:"#0A67A3",
					        highlight: "#1398f0",
					        label: "Tier 5"
					    },
					     {
					        value: parseInt($(this).attr("data-t4")),
					        color:"#00B25C",
					        highlight: "#00d771",
					        label: "Tier 4"
					    },
					     {
					        value: parseInt($(this).attr("data-t3")),
					        color:"#FF8E00",
					        highlight: "#ffac46",
					        label: "Tier 3"
					    },
					     {
					        value: parseInt($(this).attr("data-t2")),
					        color:"#FF4100",
					        highlight: "#ff632f",
					        label: "Tier 2"
					    },
					     {
					        value: parseInt($(this).attr("data-t1")),
					        color:"#DB0058",
					        highlight: "#ff247b",
					        label: "Tier 1"
					    }
		    ];
	    if($(window).width() >=600){
	    	$(this).attr('height', 200);
	    }else{
	    	$(this).attr('height', 125);
	    }
      	var tierChart = new Chart(experiencedUsersGraph).Doughnut(data, { animation: false, showTooltips: true });
		});
	}
}

function DisplayCriticGraph(){
	if($(".GraphCriticUsers").length > 0){
		$(".GraphCriticUsers").each(function(){
			var experiencedUsersGraph = $(this).get(0).getContext("2d");
			var data = {
		    labels: ["", "", "", "", ""],
		    datasets: [
		        {
		            label: "Lifetime XP",
		            fillColor: "rgba(85, 85, 147, 0.41)",
		            strokeColor: "rgba(85, 85, 147, 0.9)",
		            pointColor: "rgba(85, 85, 147, 0.9)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: [$(this).attr("data-t5"), $(this).attr("data-t4"), $(this).attr("data-t3"), $(this).attr("data-t2"), $(this).attr("data-t1")]
		        }
		    ]
		};
		$(this).attr('width', $(this).parent().width()-40);
        $(this).attr('height', 250);
		var temp = new Chart(experiencedUsersGraph).Line(data, { animation: false, datasetStrokeWidth : 4, showScale: true, bezierCurve : true, pointDot : false, scaleShowGridLines : false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>", animation: true });
      	
		});
	}
}

function DisplaySkillsChart(){
	if($(".GraphSkills").length > 0){
		$(".GraphSkills").each(function(){
			var skillGraph = $(this).get(0).getContext("2d");
			var dataLabels = $(this).attr('data-labels');
			var labelArray = dataLabels.split(",");
			var dataValues = $(this).attr('data-values');
			var valueArray = dataValues.split(",");
			var allLabels = [];
			var allValues = [];
	      	$.each( labelArray, function( key, value ) {
	      		allLabels.push(value);
	      	});
  	      	$.each( valueArray, function( key, value ) {
	      		allValues.push(value);
	      	});
	      	
  			var data = {
			    labels: allLabels,
			    datasets: [
			        {
			            label: "Skills",
			            fillColor: "rgba(156, 39, 176, 0.5)",
			            strokeColor: "rgba(156, 39, 176, 0.5)",
			            pointColor: "rgba(156, 39, 176, 0.5)",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(71,71,71,1)",
			            data: allValues
			        }
			    ]
			};
			$(this).attr('width', $(this).parent().width()-25);
			$(this).attr('height', 360);
			var temp = new Chart(skillGraph).Radar(data, { animation: false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>", scaleShowLine : false, angleLineColor : "rgba(0,0,0,.2)", pointLabelFontSize : 14 });
		});
	}
}

function DisplayLifeTimeChart(){
	if($(".GraphLifeTime").length > 0){
		$(".GraphLifeTime").each(function(){
			var lifetimeGraph = $(this).get(0).getContext("2d");
			var dataBirth = $(this).attr("data-birth");
      		var birthArray = dataBirth.split(",");
  			var dataPlayed = $(this).attr("data-played");
      		var playedArray = dataPlayed.split(",");
  			var dataWatched = $(this).attr("data-watched");
      		var watchedArray = dataWatched.split(",");
      		var allLabels = [];
      		var allPlayed = [];
      		var allWatched = [];
	      	$.each( birthArray, function( key, value ) {
	      		allLabels.push(value);
	      	});
  	      	$.each( playedArray, function( key, value ) {
	      		allPlayed.push(value);
	      	});
  	      	$.each( watchedArray, function( key, value ) {
	      		allWatched.push(value);
	      	});
			
			var data = {
		    labels: allLabels,
		    datasets: [
		        {
		            label: "Played XP",
		            fillColor: "rgba(156, 39, 176, 0.1)",
		            strokeColor: "rgb(156, 39, 176)",
		            pointColor: "rgb(156, 39, 176)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: allPlayed
		        },
		        {
		            label: "Watched XP",
		            fillColor: "rgba(3, 169, 244, 0.1)",
		            strokeColor: "rgb(3, 169, 244)",
		            pointColor: "rgb(3, 169, 244)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(71,71,71,1)",
		            data: allWatched
		        }
		    ]
		};
		$(this).attr('width', $(this).parent().width()-25);
        $(this).attr('height', 380);
		var temp = new Chart(lifetimeGraph).Line(data, { animation: false, datasetStrokeWidth : 4, showScale: true, bezierCurve : true, pointDot : false, scaleShowGridLines : false, multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>" });
      	
		});
	}
}

function ShowUserActivity(userid){
  	ShowLoader($("#activityInnerContainer"), 'big', "<br><br><br>");
  	var windowWidth = $(window).width();
    $("#activity").css({"display":"inline-block", "left": -windowWidth});
    $("#discover, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").css({"display":"none"});
    $("#discover, #profile, #admin, #profiledetails, #settings, #notifications, #game, #user, #landing").velocity({ "left": windowWidth }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	$("#activity").velocity({ "left": 0 }, {duration: 200, queue: false, easing: 'easeOutQuad'});
	if($(window).width() > 599){
		$("#navigation-header").css({"display":"block"});
		$("#navigationContainer").css({"-webkit-box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)", "box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"});
	}
	$.ajax({ url: '../php/webService.php',
     data: {action: "ShowUserProfileActivity", userid: userid },
     type: 'post',
     success: function(output) {
     			$("#activityInnerContainer").html(output);
     			window.scrollTo(0, 0);
      			Waves.displayEffect();
				AttachShowUserActivityEvents();
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachShowUserActivityEvents(){
		 $(".user-discover-card").on("click", function(e){
		  	e.stopPropagation();
		 	ShowUserPreviewCard($(this).find(".user-preview-card"), $("#activity"));
		 });
	 	 $(".feed-avatar, .user-avatar").on("click", function(e){
		  	e.stopPropagation();
		 	ShowUserPreviewCard($(this).parent().find(".user-preview-card"), $("#activity"));
		 });
		 $(".feed-bookmark-card, .feed-activity-game-link, .feed-release-card").on("click", function(e){
		 	e.stopPropagation(); 
		 	ShowGame($(this).attr("data-gbid"), $("#activity"));
		 })
		 $(".feed-card-image").on("click", function(e){
		 	e.stopPropagation(); 
		 	ShowGame($(this).parent().attr("data-gbid"), $("#activity"));
		 })
		 AttachAgreesFromActivity();
		 AttachSecondaryEvents();
		 $(window).unbind("scroll");
		 $(window).scroll(function(){
		 	if(isScrolledIntoView($("#feed-endless-loader"))){
		 		if($("#feed-endless-loader").html() == "")
	      			EndlessUserAcitivtyLoader($(".activity-top-level").attr("data-id"));
		 	}
	     }); 
}

function EndlessUserAcitivtyLoader(userid){
	ShowLoader($("#feed-endless-loader"), 'big', "<br><br><br>");
	$("#feed-endless-loader").append("<br><br><br>");
	var page = $("#feed-endless-loader").attr("data-page");
	var date = $("#feed-endless-loader").attr("data-date");
	var filter = $("#feed-endless-loader").attr("data-filter");
	$.ajax({ url: '../php/webService.php',
     data: {action: "ShowUserProfileActivityEndless", userid: userid, page: page, date: date },
     type: 'post',
     success: function(output) {
		$("#feed-endless-loader").before(output);
		$("#feed-endless-loader").html("");
		$("#feed-endless-loader").attr("data-page", parseInt(page) + 45);
		var lastdate = $("#feed-endless-loader").parent().find(".feed-date-divider:last").attr("data-date");
		$("#feed-endless-loader").attr("data-date", lastdate);
		AttachShowUserActivityEvents(userid);
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}
function ShowUserSettings(){
	ShowProfileDetails("<div class='universalBottomSheetLoading'></div>");
	$.ajax({ url: '../php/webService.php',
         data: {action: "UserSettings" },
         type: 'post',
         success: function(output) {
			$("#BattleProgess").html(output); 
            AttachUserSettingEvents();
            GAPage('Settings', '/settings');
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AttachUserSettingEvents(){
    $("#SaveUserSettingsSubmitBtn").on('click', function(e){
    	e.stopPropagation();
    	UserSettingsValidation();	
    });
}

function UserSettingsValidation(){
	var errors = "";
	if($("#settings_username").val() === "")
		errors = errors + "Username cannot be blank<br>";
	if($("#settings_email").val() === "")
		errors = errors + "Email cannot be blank<br>";
	if($("#settings_password").val() !== $("#settings_confirm_password").val())
		errors = errors + "Passwords do not match<br>";
	if($("#settings_username").val().indexOf(' ') >= 0)
		errors = errors + "Username can not have spaces<br>";
		
	if(errors === ""){
		VerifyUserData($("#settings_username").val(), $("#settings_email").val());	
	}else{
		$("#userSettings").find(".validation").html(errors);
		$("#userSettings").find(".validation").show();
	}
	
}

function VerifyUserData(username, email){
	var errors = "";
	$.ajax({ url: '../php/webService.php',
         data: {action: "VerifyNewUser", username: username, email: email },
         type: 'post',
         success: function(output) {
         			if(output.indexOf("Username is already used") >= 0 && $("#settings_username").val() !== $("#settings_username").attr('value')){
         				errors = "Username is already used<br>";
         			}else if(output.indexOf("Email is already used") >= 0 && $("#settings_email").val() !== $("#settings_email").attr('value')){
         				errors = errors + "Email is already used<br>";
         			}
         			if(errors !== ""){
         				$("#userSettings").find(".validation").html(errors);
						$("#userSettings").find(".validation").show();
         			}else{
         				var image = $("input[type=radio][name=avatargroup]:checked").attr("id");
         				if(image == "gravatar")
         					image = "Gravatar";
     					else if(image == "uploaded")
     						image = "Uploaded";
 						else if(image == "weburlradio")
 							image = $("#weburl").val();
         				SaveUserSettings($("#userSettings").attr("data-id"), $("#settings_username").val(), $("#settings_password").val(), $("#settings_email").val(), $("#first_name").val(), $("#last_name").val(), $("#birth_year").val(), $("#defaultWatchedSource").val(), $("#steam_id").val(), $("#psn_id").val(), $("#xbox_id").val(), $("#title_id").val(), $("#personalweb_id").val(), $("#twitter_id").val(), image);
         			}
        },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function SaveUserSettings(userid, username, password, email, first, last, birthyear, source, steam, psn, xbox, title, weburl, twitter, image){
	$("#userSettings").find(".validation").show();
	ShowLoader($("#userSettings").find(".validation"), 'small', '');
	$.ajax({ url: '../php/webService.php',
         data: {action: "SaveUserSettings", userid: userid, username: username, email: email, password: password, first: first, last: last, birthyear: birthyear, source: source, steam: steam, psn: psn, xbox: xbox, title: title, weburl: weburl, twitter: twitter, image: image },
         type: 'post',
         success: function(output) {
         	$("#userSettings").find(".validation").hide();
         	Toast("User Settings Saved");
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function ShowUserPreviewCard(usercard, element){
	ShowPopUpUserPreview(usercard.html());
	$(".user-preview-card-follow-action, .user-preview-card-view-profile").unbind();
	$(".user-preview-card-follow-action").on('click', function(e){
		FollowUser($(this).attr("data-userid"), $(this), $(this).attr("data-name"));
		$("#universalUserPreview").closeModal();
	});
	$(".user-preview-card-view-profile").on('click', function(e){
		if(element == undefined)
			element = $("#discover");
		ShowUserProfile($(this).attr("data-userid"));
		$("#universalUserPreview").closeModal();
	});
	$(".user-preview-card-view-activity").on('click', function(e){
		if(element == undefined)
			element = $("#discover");
		ShowUserActivity($(this).attr("data-userid"));
		$("#universalUserPreview").closeModal();
	});
}

function FollowUser(followid, elem, name){
	elem.velocity({"opacity":"0"}, function(){ elem.css({"display":"none"}); });
	$.ajax({ url: '../php/webService.php',
     data: {action: "FollowUser", followid: followid },
     type: 'post',
     success: function(output) {
 		Toast("You are now following " + name); 
     },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

/*
*
* Universal User Preview
*
*/
function ShowPopUpUserPreview(content){
	$("#universalUserPreview").html(content);
	$("#universalUserPreview").openModal();
  	$(".closeDetailsModal").unbind();
  	$(".closeDetailsModal").on('click', function(){
  		$("#universalUserPreview").closeModal();
  		HideFocus();
  	});
}
function AttachXPEvents(){
	$(".myxp-GraphLabel").on('click', function(){
		if(!$(this).hasClass("myxp-selected-tier")){
			var oldselection = $(".myxp-selected-tier");	
			var oldcount = parseInt(oldselection.attr("data-count"));
			if(oldcount > 0)
				oldcount = oldcount - 1;
			oldselection.attr("data-count", oldcount);
			oldselection.removeClass("myxp-selected-tier tier1BG tier2BG tier3BG tier4BG tier5BG");
			$(this).addClass("myxp-selected-tier tier"+ $(this).attr("data-tier") +"BG");
			var newcount = parseInt($(this).attr("data-count"));
			newcount++;
			$(this).attr("data-count", newcount);
			var total = parseInt($(".firsttier").attr("data-total"));
			if(total > 0){
				var oldgraph = Math.ceil(oldcount / total * 70);
				var newgraph = Math.ceil(newcount / total * 70);
			}else{
				oldgraph = 0;
				newgraph = 70;
			}
			$(this).next().css({"width": newgraph+"%"});
			oldselection.next().css({"width": oldgraph+"%"});
			ValidateXPEntry();
		}
	});
	$(".myxp-GraphBar").on('click', function(){
		var tier = $(this).parent().find(".myxp-GraphLabel").attr("data-tier");
		var year = $(".myxp-tiercontainer").attr("data-year");
		DisplayTierDetails(tier, year);	
	});
	$(".myxp-delete-btn").on('click', function(){
		var subxp = $(this).attr("data-id");
		DeleteXP(subxp);	
	});
	ListenAndBuildWatchedSentence();
	ListenAndBuildPlayedSentence();
	$(".myxp-cancel").on('click', function(){
		CancelXPEntry();
	});
	$(".myxp-save").on('click', function(){
		SaveXPEntry();
	});
}

function BuildSentenceOnLoad(){
	ToggleQuarter($("#myxp-year").val());
	var quarter = $("input[type=radio][name=dategroup]:checked").attr("id");
	if(quarter == "q0"){
		$(".myxp-sentence-quarter").html("");
		$(".myxp-sentence-year").html(" in "+$("#myxp-year").val());
	}else{
		$(".myxp-sentence-quarter").html("during "+$("input[type=radio][name=dategroup]:checked").attr("data-text"));
		$(".myxp-sentence-year").html(" of "+$("#myxp-year").val());
	}
	
	if($("#myxp-percent-completed").length > 0){
		$(".myxp-sentence-intro").html("I played");
		if($("#myxp-percent-completed").val() == 101){
			$(".myxp-sentence-intro").html("I played");
			$(".myxp-sentence-completion").html("multiple playthroughs");
		}else if($("#myxp-percent-completed").val() == 100){
			$(".myxp-sentence-completion").html("");
			$(".myxp-sentence-intro").html("I finished");
		}else{
			$(".myxp-sentence-intro").html("I played");
			$(".myxp-sentence-completion").html("through "+$("#myxp-percent-completed").val()+"%");
		}
	}
	
	if($('.myxp-platforms').length > 0){
		$('.myxp-platforms').each(function() {
			if(this.checked){
				if($(".myxp-sentence-platform").html() !== ""){
					$(".myxp-sentence-platform").html($(".myxp-sentence-platform").html() + " " + $(this).attr("data-text"));
				}else{
					$(".myxp-sentence-platform").html("on "+$(this).attr("data-text"));
				}
			}
		});
	}
	
	$(".myxp-sentence-src").html("on "+$("#myxp-view-source").val());
	
	if($('input[type=radio][name=viewingitemgroup]').length > 0){
		$(".myxp-sentence-intro").html("I watched");
		$(".myxp-sentence-exp").html($("input[type=radio][name=viewingitemgroup]:checked").attr("data-text"));
	}
	
	if($("#myxp-form-url").val() !== "")
			$(".myxp-sentence-src-url").html("<i class='mdi-content-link'><i>");
			
	ValidateXPEntry();
}

function ListenAndBuildPlayedSentence(){
	$('select').material_select();
	$("#myxp-year").on('change', function() { 
		ToggleQuarter($(this).val());
		var quarter = $("input[type=radio][name=dategroup]:checked").attr("id");
		if(quarter == "q0")
			$(".myxp-sentence-year").html(" in "+$(this).val());
		else
			$(".myxp-sentence-year").html(" of "+$(this).val());
		ValidateXPEntry();
	});
	$("input[type=radio][name=dategroup]").change(function() {
		if($(this).attr("data-text") != ""){
			$(".myxp-sentence-year").html(" of "+$("#myxp-year").val());
			$(".myxp-sentence-quarter").html("during "+$(this).attr("data-text"));
		}else{
			$(".myxp-sentence-year").html(" in "+$("#myxp-year").val());
			$(".myxp-sentence-quarter").html("");
		}
		ValidateXPEntry();
	});
	$('.myxp-platforms').change(function() {
		if(this.checked){
			$(".myxp-sentence-intro").html("I played");
			if($(".myxp-sentence-platform").html() !== ""){
				$(".myxp-sentence-platform").html($(".myxp-sentence-platform").html() + " " + $(this).attr("data-text"));
			}else{
				$(".myxp-sentence-platform").html("on "+$(this).attr("data-text"));
			}
		}else{
			var remove = $(this).attr("data-text");
			$(".myxp-sentence-platform").html($(".myxp-sentence-platform").html().replace(remove, ""));
			if($.trim($(".myxp-sentence-platform").html()) == "on")
				$(".myxp-sentence-platform").html("");
		}
		ValidateXPEntry();
	});
	$("#myxp-percent-completed").on("change", function() {
		if($(this).val() == 101){
			$(".myxp-sentence-intro").html("I played");
			$(".myxp-sentence-completion").html("multiple playthroughs");
		}else if($(this).val() == 100){
			$(".myxp-sentence-completion").html("");
			$(".myxp-sentence-intro").html("I finished");
		}else{
			$(".myxp-sentence-intro").html("I played");
			$(".myxp-sentence-completion").html("through "+$(this).val()+"%");
		}
		var quarter = $("input[type=radio][name=dategroup]:checked").attr("id");
		if(quarter == "q0"){
			$(".myxp-sentence-year").html(" in "+$("#myxp-year").val());
			$(".myxp-sentence-quarter").html("");
		}else{
			$(".myxp-sentence-year").html(" of "+$("#myxp-year").val());
			$(".myxp-sentence-quarter").html("during "+$("input[type=radio][name=dategroup]:checked").attr("data-text"));
		}
		ValidateXPEntry();
	});
	
}

function ListenAndBuildWatchedSentence(){
	$('select').material_select();
	$("#myxp-view-source").on('change', function() { 
		if($(this).val() == "YouTube" || $(this).val() == "Twitch" || $(this).val() == "UStream" || $(this).val() == "Other"){
			$("#myxp-source-link").parent().css({"display":"block"});
		}else{
			$("#myxp-source-link").parent().css({"display":"none"});
		}
		$(".myxp-sentence-src").html("on "+$(this).val());
	});
	$('input[type=radio][name=viewingitemgroup]').change(function() {
		$(".myxp-sentence-intro").html("I watched");
		$(".myxp-sentence-exp").html($(this).attr("data-text"));
		var quarter = $("input[type=radio][name=dategroup]:checked").attr("id");
		if(quarter == "q0"){
			$(".myxp-sentence-year").html(" in "+$(this).val());
			$(".myxp-sentence-quarter").html("");
		}else{
			$(".myxp-sentence-year").html(" of "+$(this).val());
			$(".myxp-sentence-quarter").html("during "+$("input[type=radio][name=dategroup]:checked").attr("data-text"));
		}
		if($("#myxp-view-source").val() !== "")
			$(".myxp-sentence-src").html("on "+$("#myxp-view-source").val());
		ValidateXPEntry();
	});
	$("#myxp-year").on('change', function() { 
		ToggleQuarter($(this).val());
		var quarter = $("input[type=radio][name=dategroup]:checked").attr("id");
		if(quarter == "q0")
			$(".myxp-sentence-year").html(" in "+$(this).val());
		else
			$(".myxp-sentence-year").html(" of "+$(this).val());
		ValidateXPEntry();
	});
	$("input[type=radio][name=dategroup]").change(function() {
		if($(this).attr("data-text") != ""){
			$(".myxp-sentence-year").html(" of "+$("#myxp-year").val());
			$(".myxp-sentence-quarter").html("during "+$(this).attr("data-text"));
		}else{
			$(".myxp-sentence-year").html(" in "+$("#myxp-year").val());
			$(".myxp-sentence-quarter").html("");
		}
		ValidateXPEntry();
	});
	$("#myxp-form-url").on('keyup', function(){
		if($(this).val() !== "")
			$(".myxp-sentence-src-url").html("<i class='mdi-content-link'><i>");
		else
			$(".myxp-sentence-src-url").html("");
	});
	$("#myxp-source-link").on('keyup', function(){
		if($(this).val() !== "")
			$(".myxp-sentence-src").html("on "+$(this).val() +"'s channel");
		else
			$(".myxp-sentence-src").html("");
	});
}


function ToggleQuarter(year){
	var currentYear = (new Date).getFullYear();
	if(year == currentYear -1){
		$(".myxp-quarter").show(100);
		$(".myxp-quarter").find(".myxp-form-box-header").html("Experienced Quarter <span style='margin-left:10px;font-weight:bold;font-size: 0.8em;'>optional</span>");
		$(".myxp-sentence-quarter").html("");
		$("#q0").prop("checked", true);
	}else if(year != currentYear){
		$(".myxp-quarter").hide(100);
		$(".myxp-sentence-quarter").html("");
		$("#q0").prop("checked", true);
	}else{
		$(".myxp-quarter").show(100);
		$(".myxp-quarter").find(".myxp-form-box-header").html("Experienced Quarter");
	}
}

function AddWatchedFabEvent(){
	HideFab();
	var gameid = $("#gameContentContainer").attr("data-id");
	ShowLoader($("#game-myxp-tab"), 'big', "<br><br><br>");
	$(".userGameTab").show();
	$(".userGameTab a").trigger('click');
	$.ajax({ url: '../php/webService.php',
         data: {action: "DisplayAddWatched", gameid: gameid },
         type: 'post',
         success: function(output) {
         	$("#game-myxp-tab").html(output);
         	$("#myxp-quote").focus();
         	AttachXPEvents();
         	window.scrollTo(0, 10);
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function AddPlayedFabEvent(){
	HideFab();
	$(".userGameTab").show();
	$(".userGameTab a").trigger('click');
	ShowLoader($("#game-myxp-tab"), 'big', "<br><br><br>");
	var gameid = $("#gameContentContainer").attr("data-id");
	$.ajax({ url: '../php/webService.php',
         data: {action: "DisplayAddPlayed", gameid: gameid },
         type: 'post',
         success: function(output) {	
         	$("#game-myxp-tab").html(output);
         	$("#myxp-quote").focus();
         	AttachXPEvents();
         	window.scrollTo(0, 10);
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function UpdatePlayedEvent(){
	HideFab();
	ShowLoader($("#game-myxp-tab"), 'big', "<br><br><br>");
	var gameid = $("#gameContentContainer").attr("data-id");
	$.ajax({ url: '../php/webService.php',
         data: {action: "DisplayUpdatePlayed", gameid: gameid },
         type: 'post',
         success: function(output) {	
         	$("#game-myxp-tab").html(output);
         	AttachXPEvents();
         	BuildSentenceOnLoad();
         	window.scrollTo(0, 10);
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function UpdateWatchedEvent(watchid){
	HideFab();
	ShowLoader($("#game-myxp-tab"), 'big', "<br><br><br>");
	var gameid = $("#gameContentContainer").attr("data-id");
	$.ajax({ url: '../php/webService.php',
         data: {action: "DisplayUpdateWatched", gameid: gameid, watchid: watchid },
         type: 'post',
         success: function(output) {	
         	$("#game-myxp-tab").html(output);
         	AttachXPEvents();
         	BuildSentenceOnLoad();
         	window.scrollTo(0, 10);
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function UpdateTierQuoteEvent(){
	HideFab();
	ShowLoader($("#game-myxp-tab"), 'big', "<br><br><br>");
	var gameid = $("#gameContentContainer").attr("data-id");
	$.ajax({ url: '../php/webService.php',
         data: {action: "DisplayTierQuote", gameid: gameid },
         type: 'post',
         success: function(output) {	
         	$("#game-myxp-tab").html(output);
         	AttachXPEvents();
         	ValidateXPEntry();
         	window.scrollTo(0, 10);
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function CancelXPEntry(){
	var gameid = $("#gameContentContainer").attr("data-id");
	ShowLoader($("#game-myxp-tab"), 'big', "<br><br><br>");
	$.ajax({ url: '../php/webService.php',
         data: {action: "DisplayMyXP", gameid: gameid },
         type: 'post',
         success: function(output) {
         	if($.trim(output) !== ""){
         		$("#game-myxp-tab").html(output);
         		ShowFab();
         	}else{
         		$(".userGameTab").hide();
         		$(".criticGameTab a").trigger('click');
         		ShowFab();
         	}
         	AttachEditEvents();
         	window.scrollTo(0, 0);
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function HideFab(){
	$("#game-fab").hide();
}

function ShowFab(){
	$("#game-fab").show();
}

function DisplayTierDetails(tier, year){
	ShowLoader($("#universalPopUp"), 'big', "<br>")
	$("#universalPopUp").openModal();
	$.ajax({ url: '../php/webService.php',
         data: {action: "GetTierBreakdownYearTier", year: year, tier: tier  },
         type: 'post',
         success: function(output) {
			$("#universalPopUp").html(output);
		  	$(".closeDetailsModal").unbind();
		  	$(".closeDetailsModal").on('click', function(){
		  		$("#universalPopUp").closeModal();
		  		HideFocus();
		  	});
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function ValidateXPEntry(){
	var validation = "";
	if($("#myxp-quote").length > 0){
		if($.trim($("#myxp-quote").val()) == "")
			validation = validation + "<li style='text-align:left;'><i class='mdi-alert-warning'></i> Summary of your experience required</li>";
	}
	if($(".myxp-tiercontainer").length > 0){
		if($(".myxp-selected-tier").length == 0)
			validation = validation + "<li style='text-align:left;'><i class='mdi-alert-warning'></i> Selecting a tier 1 - 5 is requried</li>";
	}
	if($("#myxp-percent-completed").length > 0){
		if($("#myxp-percent-completed").val() == "0")
			validation = validation + "<li style='text-align:left;'><i class='mdi-alert-warning'></i> Selecting a percentage completed is required</li>";
	}
	if($(".myxp-platforms").length > 0){
		var found = 0;
		$(".myxp-platforms").each(function(){
			if(this.checked)
				found++;
		});
		if(found == 0)
			validation = validation + "<li style='text-align:left;'><i class='mdi-alert-warning'></i> Selecting a platform played is required</li>";
	}
	if($('input[type=radio][name=viewingitemgroup]').length > 0){
		if($('input[type=radio][name=viewingitemgroup]:checked').length == 0)
			validation = validation + "<li style='text-align:left;'><i class='mdi-alert-warning'></i> Selecting a viewing experience is required</li>";
	}
	
	if(validation == "")
		$(".myxp-save").removeClass("disabled");
	else if(!$("#myxp-save").hasClass("disabled"))
		$(".myxp-save").addClass("disabled");
		
	return validation;
}

function SaveXPEntry(){
	if(!$(".myxp-save").hasClass("disabled")){
		$(".myxp-save").html("<div class='preloader-wrapper small active' style='vertical-align:text-top;margin-right:1em; width:15px; height:15px;'><div class='spinner-layer spinner-white-only'><div class='circle-clipper left'><div class='circle' style='border-width:2px;'></div></div><div class='gap-patch'><div class='circle' style='border-width:2px;'></div></div><div class='circle-clipper right'><div class='circle' style='border-width:2px;'></div></div></div></div> <span class='myxp-saving-label'>Saving XP</span>");
		var gameid = $("#gameContentContainer").attr("data-id");
		var quote = $("#myxp-quote").val();
		var tier = $(".myxp-selected-tier").attr("data-tier");
		var platforms = [];
		$('.myxp-platforms').each(function() {
			if(this.checked){
				platforms.push($(this).attr("data-text"));
			}
		});
		var completion = $("#myxp-percent-completed").val();
		var year = $("#myxp-year").val();
		var quarter = $("input[type=radio][name=dategroup]:checked").attr("id");
		var single = false;
		if($('#singleplayer:checked').length > 0)
			single = true;
		var multi = false;
		if($('#multiplayer:checked').length > 0)
			multi = true;
		var alpha = 0;
		if($('#alpha:checked').length > 0)
			alpha = 1;
		var beta = 0;
		if($('#beta:checked').length > 0)
			beta = 1;
		var early = 0;
		if($('#earlyaccess:checked').length > 0)
			early = 1;
		var demo = 0;
		if($('#demo:checked').length > 0)
			demo = 1;
		var dlc = false;
		if($('#dlc:checked').length > 0)
			dlc = true;
		var stream = false;
		if($('#streamed:checked').length > 0)
			stream = true;
		var viewing = $("input[type=radio][name=viewingitemgroup]:checked").attr("id");
		var viewsrc = $("#myxp-view-source").val();
		if((viewsrc == "YouTube" || viewsrc == "Twitch" || viewsrc == "UStream" || viewsrc == "Other") && $.trim($("#myxp-source-link").val()) != "")
			viewsrc = $("#myxp-source-link").val();
		var viewurl = $("#myxp-form-url").val();
		var criticlink = $("#myxp-form-critic-link").val();
		
		if($("#myxp-quote").length > 0 && $(".myxp-platforms").length > 0){
			$.ajax({ url: '../php/webService.php',
		         data: {action: "SavePlayedFull", gameid: gameid, quote: quote, tier: tier, platforms: platforms, completion: completion, year: year, quarter: quarter, single: single, multi: multi, alpha: alpha, beta: beta, early: early, demo: demo, dlc: dlc, stream: stream, criticlink: criticlink  },
		         type: 'post',
		         success: function(output) {
		         	GAEvent('XP', 'New Played Full');
	         		DisplayBattleProgress(output);
	         		GetGameFAB();
		         	window.scrollTo(0, 0);
		         	AttachEditEvents();
					Waves.displayEffect();
		         },
		        error: function(x, t, m) {
			        if(t==="timeout") {
			            ToastError("Server Timeout");
			        } else {
			            ToastError(t);
			        }
		    	},
		    	timeout:45000
			});
		}else if($("#myxp-quote").length > 0 && $('input[type=radio][name=viewingitemgroup]').length > 0){
			$.ajax({ url: '../php/webService.php',
		         data: {action: "SaveWatchedFull", gameid: gameid, quote: quote, tier: tier, viewing: viewing, viewsrc: viewsrc, viewurl: viewurl, year: year, quarter: quarter, criticlink: criticlink  },
		         type: 'post',
		         success: function(output) {
		         	GAEvent('XP', 'New Watched Full');
	         		DisplayBattleProgress(output);
	         		GetGameFAB();
		         	window.scrollTo(0, 0);
		         	AttachEditEvents();
					Waves.displayEffect();
		         },
		        error: function(x, t, m) {
			        if(t==="timeout") {
			            ToastError("Server Timeout");
			        } else {
			            ToastError(t);
			        }
		    	},
		    	timeout:45000
			});
		}else if($(".myxp-platforms").length > 0){
			$.ajax({ url: '../php/webService.php',
		         data: {action: "SavePlayed", gameid: gameid, platforms: platforms, completion: completion, year: year, quarter: quarter, single: single, multi: multi, alpha: alpha, beta: beta, early: early, demo: demo, dlc: dlc, stream: stream, criticlink: criticlink  },
		         type: 'post',
		         success: function(output) {
		         	GAEvent('XP', 'Add Played');
	         		DisplayBattleProgress(output);
	         		GetGameFAB();
		         	window.scrollTo(0, 0);
		         	AttachEditEvents();
					Waves.displayEffect();
		         },
		        error: function(x, t, m) {
			        if(t==="timeout") {
			            ToastError("Server Timeout");
			        } else {
			            ToastError(t);
			        }
		    	},
		    	timeout:45000
			});
		}else if($('input[type=radio][name=viewingitemgroup]').length > 0){
			var update = $(".myxp-edit-container").attr("data-watchid");
			if(update > 0){
				$.ajax({ url: '../php/webService.php',
			         data: {action: "UpdateWatched", subxpid: update, gameid: gameid, viewing: viewing, viewsrc: viewsrc, viewurl: viewurl, year: year, quarter: quarter  },
			         type: 'post',
			         success: function(output) {
			         	GAEvent('XP', 'Update Watched');
			         	DisplayBattleProgress(output);
		         		$("#game-myxp-tab").html(output);
		         		GetGameFAB();
			         	window.scrollTo(0, 0);
			         	AttachEditEvents();
						Waves.displayEffect();
			         },
			        error: function(x, t, m) {
				        if(t==="timeout") {
				            ToastError("Server Timeout");
				        } else {
				            ToastError(t);
				        }
			    	},
			    	timeout:45000
				});
			}else{
				$.ajax({ url: '../php/webService.php',
			         data: {action: "SaveWatched", gameid: gameid, viewing: viewing, viewsrc: viewsrc, viewurl: viewurl, year: year, quarter: quarter  },
			         type: 'post',
			         success: function(output) {
			         	GAEvent('XP', 'New Watched');
		         		DisplayBattleProgress(output);
		         		GetGameFAB();
			         	window.scrollTo(0, 0);
			         	AttachEditEvents();
						Waves.displayEffect();
			         },
			        error: function(x, t, m) {
				        if(t==="timeout") {
				            ToastError("Server Timeout");
				        } else {
				            ToastError(t);
				        }
			    	},
			    	timeout:45000
				});
			}
		}else if($("#myxp-quote").length > 0){
			$.ajax({ url: '../php/webService.php',
		         data: {action: "SaveTierQuote", gameid: gameid, quote: quote, tier: tier, criticlink: criticlink  },
		         type: 'post',
		         success: function(output) {
		         	GAEvent('XP', 'Update Tier-Quote');
	         		DisplayBattleProgress(output);
	         		AttachEditEvents();
					Waves.displayEffect();
		         	window.scrollTo(0, 0);
		         },
		        error: function(x, t, m) {
			        if(t==="timeout") {
			            ToastError("Server Timeout");
			        } else {
			            ToastError(t);
			        }
		    	},
		    	timeout:45000
			});
		}
	}else{
		ToastError(ValidateXPEntry());
	}
}

function DisplayBattleProgress(content){
	var contentsplit = $.trim(content).split("|**|");
	ShowBattleProgress(contentsplit[0]);
	$("#game-myxp-tab").html(contentsplit[1]);
}

function AttachBPEvents(){
	$(".bp-action-close").on('click', function(){
  		$("#BattleProgess").closeModal();
  		HideFocus();	
	});
	$(".bp-related-quests-image").on('click', function(){
  		$("#BattleProgess").closeModal();
  		HideFocus();
		ShowGame($(this).attr("data-gbid"), $("#discover"));
	});
	var timeoutcounter = 750;
	$(".bp-progress-item-bar").each(function(){
		var after = $(this).find(".bp-progress-item-bar-after");
		var before = $(this).find(".bp-progress-item-bar-before");
		var lvlup = $(this).parent().find(".bp-progress-item-levelup");
		//var left = after.attr("data-left");
		//after.css({"left":left});
		setTimeout(function(e){
			var width = after.attr("data-width");
			after.css({"width":width});
			if(lvlup.attr("data-levelup") == "Yes"){
				lvlup.html("LEVEL UP!");
				setTimeout(function(e){
					before.css({"background-color":"#66BB6A"});
					after.css({"background-color":"#66BB6A"});
					lvlup.html("Level " + lvlup.attr("data-newlevel"));
				}, 1000);
			}
		}, timeoutcounter);
		if(lvlup.attr("data-levelup") == "Yes")
			timeoutcounter = timeoutcounter + 2000;
		else
			timeoutcounter = timeoutcounter + 1000;
	});
	AttachEquipXPEvents($(".bp-container").attr("data-gameid"));
	$(".bp-container").unbind("scroll");
	$(".bp-container").on("scroll", function(){
		if($(".bp-container").scrollTop() > 5){
			$(".bp-header").addClass("bp-header-min");
			$(".bp-container").addClass("bp-container-min");
			$(".bp-top-row").addClass("bp-top-row-min");
			$(".lifebar-avatar-min").addClass("lifebar-avatar-min-min");
			$(".lifebar-dots-min").addClass("lifebar-dots-min-min");
			$(".lifebar-bar-container-min").addClass("lifebar-bar-container-min-min");
			$(".lifebar-username-min").addClass("lifebar-username-min-min");
			$(".lifebar-circle-fill").addClass("lifebar-circle-fill-min");
			setTimeout(function(){
				if($(".bp-container").scrollTop() > 5){
					//$(".lifebar-dots-min").hide();
					//$(".lifebar-bar-container-min").hide();
				}
			}, 500);
		}else{
			$(".bp-header").removeClass("bp-header-min");
			$(".bp-container").removeClass("bp-container-min");
			$(".bp-top-row").removeClass("bp-top-row-min");
			//$(".lifebar-dots-min").show(200);
			//$(".lifebar-bar-container-min").show(200);
			$(".lifebar-avatar-min").removeClass("lifebar-avatar-min-min");
			$(".lifebar-dots-min").removeClass("lifebar-dots-min-min");
			$(".lifebar-bar-container-min").removeClass("lifebar-bar-container-min-min");
			$(".lifebar-username-min").removeClass("lifebar-username-min-min");
			$(".lifebar-circle-fill").removeClass("lifebar-circle-fill-min");
		}
	});
}

function DeleteXP(subxpid){
	var gameid = $("#gameContentContainer").attr("data-id");
	HideFab();
	if($("#myxp-quote").length > 0){
		$.ajax({ url: '../php/webService.php',
	         data: {action: "RemoveEntireExperience", gameid: gameid  },
	         type: 'post',
	         success: function(output) {
         		$(".userGameTab").hide();
         		$(".criticGameTab a").trigger('click');
	         	AttachEditEvents();
	         	window.scrollTo(0, 0);
         		Toast("Removed All XP");
         		ShowXPDown();
         		ShowFab();
	         },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});
	}else{
		$.ajax({ url: '../php/webService.php',
	         data: {action: "RemoveSubExperience", gameid: gameid, subxpid: subxpid  },
	         type: 'post',
	         success: function(output) {
         		$("#game-myxp-tab").html(output);
         		Toast("Removed XP");
         		AttachEditEvents();
				Waves.displayEffect();
	         	window.scrollTo(0, 0);
	         	ShowFab();
	         },
	        error: function(x, t, m) {
		        if(t==="timeout") {
		            ToastError("Server Timeout");
		        } else {
		            ToastError(t);
		        }
	    	},
	    	timeout:45000
		});	
	}
}

function CalculateWeave(){
	$.ajax({ url: '../php/webService.php',
         data: {action: "CalculateWeave" },
         type: 'post',
         success: function() {
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            //ToastError("Server Timeout");
	        } else {
	            //ToastError(t);
	        }
    	},
    	timeout:450000
	});
}

function GetGameFAB(){
	var gameid = $("#gameContentContainer").attr("data-id");
	$.ajax({ url: '../php/webService.php',
         data: {action: "GetGameFAB", gameid: gameid  },
         type: 'post',
         success: function(output) {
     		$("#game-fab").html(output);
     		ShowFab();
 			var iconOnHover="";
			if($(".fixed-action-btn .game-add-played-btn").length > 0)
				iconOnHover = "mdi-hardware-gamepad";
			else if($(".fixed-action-btn .game-add-watched-btn").length > 0)
				iconOnHover = "mdi-action-visibility";
			else
				iconOnHover = "mdi-action-bookmark";
				
     		AttachFloatingIconEvent(iconOnHover);
			AttachFloatingIconButtonEvents();
         },
        error: function(x, t, m) {
	        if(t==="timeout") {
	            ToastError("Server Timeout");
	        } else {
	            ToastError(t);
	        }
    	},
    	timeout:45000
	});
}

function ShowXPUp(){
	var count = parseInt($(".userTotalXPLabel").html(), 10);
	count = count + 1;
	$(".userTotalXPLabel").html(count);
}

function ShowXPDown(){
	var count = parseInt($(".userTotalXPLabel").html(), 10);
	count = count - 1;
	$(".userTotalXPLabel").html(count);
}