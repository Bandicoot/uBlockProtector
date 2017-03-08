// ==UserScript==
// @name AdBlock Protector Script
// @description Ultimate solution against AdBlock detectors
// @author X01X012013
// @version 6.87
// @encoding utf-8
// @include http://*/*
// @include https://*/*
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_openInTab
// @grant window.close
// @grant GM_registerMenuCommand
// @connect *
// @run-at document-start
// @homepage https://x01x012013.github.io/AdBlockProtector/
// @supportURL https://github.com/X01X012013/AdBlockProtector/issues
// @downloadURL https://github.com/X01X012013/AdBlockProtector/raw/master/AdBlockProtector.user.js
// ==/UserScript==
/*! jQueryFactory based on: jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
const jQueryFactory=function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r};
"use strict";
const a = function () {
    return "AdBlock Protector Core Library " + a.VERSION;
};
a.VERSION = "1.1";
a.init = function (excludedDomCmp, excludedDomInc) {
    a.$ = jQueryFactory(a.win, true);
    a.config();
    a.config.domExcluded = a.domCmp(excludedDomCmp, true) || a.domInc(excludedDomInc, true);
    if (a.config.debugMode && a.config.domExcluded) {
        a.out.warn("This domain is in excluded list. ");
    }
    a.mods();
    GM_registerMenuCommand("AdBlock Protector Settings Page", function () {
        GM_openInTab(a.c.settingsPage);
    });
    GM_registerMenuCommand("AdBlock Protector Home Page", function () {
        GM_openInTab(a.c.homePage);
    });
    GM_registerMenuCommand("AdBlock Protector Support Page", function () {
        GM_openInTab(a.c.supportPage);
    });
    if (a.domCmp(["x01x012013.github.io"], true) && a.doc.location.href.includes("x01x012013.github.io/AdBlockProtector")) {
        a.win.AdBlock_Protector_Script = true;
    }
    if (a.domCmp(["x01x012013.github.io"], true) && a.doc.location.href.includes("x01x012013.github.io/AdBlockProtector/settings.html")) {
        a.on("load", function () {
            a.win.init([a.config.debugMode, a.config.allowExperimental, a.mods.Facebook_JumpToTop, a.mods.Facebook_HidePeopleYouMayKnow, a.mods.Blogspot_AutoNCR,
a.mods.NoAutoplay], a.config.update);
        });
    }
    a.config.debugMode && a.out.warn("Domain: " + a.dom);
};
a.config = function () {
    a.config.debugMode = GM_getValue("config_debugMode", a.config.debugMode);
    a.config.allowExperimental = GM_getValue("config_allowExperimental", a.config.allowExperimental);
    a.mods.Facebook_JumpToTop = GM_getValue("mods_Facebook_JumpToTop", a.mods.Facebook_JumpToTop);
    a.mods.Facebook_HidePeopleYouMayKnow = GM_getValue("mods_Facebook_HidePeopleYouMayKnow", a.mods.Facebook_HidePeopleYouMayKnow);
    a.mods.Blogspot_AutoNCR = GM_getValue("mods_Blogspot_AutoNCR", a.mods.Blogspot_AutoNCR);
    a.mods.NoAutoplay = GM_getValue("mods_NoAutoplay", a.mods.NoAutoplay);
};
a.config.update = function (id, val) {
    const names = ["config_debugMode", "config_allowExperimental", "mods_Facebook_JumpToTop", "mods_Facebook_HidePeopleYouMayKnow", "mods_Blogspot_AutoNCR", "mods_NoAutoplay"];
    GM_setValue(names[id], val);
}
a.config.debugMode = false;
a.config.allowGeneric = true;
a.config.allowExperimental = true;
a.config.domExcluded = null;
a.win = unsafeWindow;
a.doc = a.win.document;
a.out = a.win.console;
a.dom = a.doc.domain;
a.on = function (event, func) {
    a.win.addEventListener(event, func);
};
a.$ = null;
a.c = {};
a.c.settingsPage = "https://x01x012013.github.io/AdBlockProtector/settings.html";
a.c.homePage = "https://x01x012013.github.io/AdBlockProtector/";
a.c.supportPage = "https://github.com/X01X012013/AdBlockProtector/issues";
a.c.syntaxBreaker = "])}\"'`])} \n\r \r\n */ ])}";
a.c.topFrame = (function () {
    try {
        return a.win.self === a.win.top;
    } catch (err) {
        return false;
    }
})();
a.mods = function () {
    if (a.domCmp(["facebook.com"], true)) {
        const addJumpToTop = function () {
            if (a.$("#AdBlock_Protector_FBMod_JumpToTop").length > 0) {
                return;
            }
            const navBar = a.$("div[role='navigation']");
            if (navBar.length > 0) {
                navBar.append(`<div class="_4kny _2s24" id="AdBlock_Protector_FBMod_JumpToTop"><div class="_4q39"><a class="_2s25" href="javascript: void(0);">Top</a></div></div>`);
                a.$("#AdBlock_Protector_FBMod_JumpToTop").click(function () {
                    a.win.scrollTo(a.win.scrollX, 0);
                });
            } else {
                a.win.setTimeout(addJumpToTop, 1000);
            }
        };
        const hidePeopleYouMayKnow = function () {
            a.observe("insert", function (node) {
                if (node.querySelector && node.querySelector("a[href^='/friends/requests/']")) {
                    node.remove();
                }
            });
        };
        if (a.mods.Facebook_JumpToTop) {
            addJumpToTop();
        }
        if (a.mods.Facebook_HidePeopleYouMayKnow) {
            hidePeopleYouMayKnow();
        }
    }
    if (a.c.topFrame && a.mods.Blogspot_AutoNCR && a.domInc(["blogspot"], true) && !a.domCmp(["blogspot.com"], true)) {
        const name = a.dom.replace("www.", "").split(".")[0];
        const path = a.win.location.href.split("/").slice(3).join("/");
        a.win.location.href = "http://" + name + ".blogspot.com/ncr/" + path;
    }
    if (a.mods.NoAutoplay) {
        if (a.domCmp(["x-link.pl"], true)) {
            a.observe("insert", function (node) {
                if (node.tagName === "VIDEO") {
                    node.onplay = (function () {
                        let playCount = 2;
                        return function () {
                            playCount--;
                            this.pause();
                            if (playCount === 0) {
                                this.onplay = null;
                            }
                        };
                    })();
                }
            });
        }
        if (a.domCmp(["komputerswiat.pl"], true)) {
            let token = a.win.setInterval(function () {
                if (a.$("video").length > 0) {
                    const player = a.$("video").first();
                    player[0].onplay = function () {
                        this.pause();
                    };
                    player.parents().eq(5).after(a.nativePlayer(player.attr("src"))).remove();
                    a.win.clearInterval(token);
                }
            }, 1000);
        }
    }
};
a.mods.Facebook_JumpToTop = true;
a.mods.Facebook_HidePeopleYouMayKnow = true;
a.mods.Blogspot_AutoNCR = true;
a.mods.NoAutoplay = true;
a.err = function (name) {
    if (name) {
        name = name + " ";
    } else {
        name = "";
    }
    a.out.error(`Uncaught AdBlock Error: ${name}AdBlocker detectors are not allowed on this device! `);
};
a.domCmp = function (domList, noErr) {
    for (let i = 0; i < domList.length; i++) {
        if (a.dom === domList[i] || a.dom.endsWith("." + domList[i])) {
            if (a.config.debugMode && !noErr) {
                a.err();
            }
            return true;
        }
    }
    return false;
};
a.domInc = function (domList, noErr) {
    for (let i = 0; i < domList.length; i++) {
        if (a.dom.startsWith(domList[i] + ".") || a.dom.includes("." + domList[i] + ".")) {
            if (a.config.debugMode && !noErr) {
                a.err();
            }
            return true;
        }
    }
    return false;
};
a.protectFunc = function () {
    a.protectFunc.enabled = true;
    const original = a.win.Function.prototype.toString;
    const newFunc = function () {
        const index = a.protectFunc.pointers.indexOf(this);
        if (index === -1) {
            return original.apply(this);
        } else {
            return a.protectFunc.masks[index];
        }
    };
    try {
        a.win.Function.prototype.toString = newFunc;
        a.protectFunc.pointers.push(newFunc);
        a.protectFunc.masks.push(original.toString());
        a.config.debugMode && a.out.warn("Functions protected. ");
    } catch (err) {
        a.config.debugMode && a.out.error("AdBlock Protector failed to protect functions! ");
        return false;
    }
    return true;
};
a.protectFunc.enabled = false;
a.protectFunc.pointers = [];
a.protectFunc.masks = [];
a.filter = function (func, filter) {
    filter = filter || /[\S\s]/;
    let original;
    let fNames;
    const newFunc = function () {
        if (a.config.debugMode) {
            a.out.warn(func + " is called with these arguments: ");
            for (let i = 0; i < arguments.length; i++) {
                a.out.warn(arguments[i].toString());
            }
        }
        for (let i = 0; i < arguments.length; i++) {
            if (filter.test(arguments[i].toString())) {
                a.config.debugMode && a.err();
                return;
            }
        }
        a.config.debugMode && a.out.info("Tests passed. ");
        if (typeof fNames === "object") {
            return original.apply(a.win[fNames[0]], arguments);
        } else {
            return original.apply(a.win, arguments);
        }
    };
    try {
        if (func.includes(".")) {
            fNames = func.split(".");
            original = a.win[fNames[0]][fNames[1]];
            a.win[fNames[0]][fNames[1]] = newFunc;
        } else {
            original = a.win[func];
            a.win[func] = newFunc;
        }
        if (a.protectFunc.enabled) {
            a.protectFunc.pointers.push(newFunc);
            a.protectFunc.masks.push(original.toString());
        }
        a.config.debugMode && a.out.warn("Filter activated on " + func);
    } catch (err) {
        a.config.debugMode && a.out.error("AdBlock Protector failed to activate filter on " + func + "! ");
        return false;
    }
    return true;
};
a.patchHTML = function (patcher) {
    a.win.stop();
    GM_xmlhttpRequest({
        method: "GET",
        url: a.doc.location.href,
        synchronous: true,
        headers: {
            "Referer": a.doc.referrer
        },
        onload: function (result) {
            a.doc.write(patcher(result.responseText));
        }
    });
};
a.crashScript = function (sample) {
    a.patchHTML(function (html) {
        return html.replace(sample, a.c.syntaxBreaker);
    });
};
a.readOnly = function (name, val) {
    try {
        if (name.includes(".")) {
            let nameArray = name.split(".");
            a.win.Object.defineProperty(a.win[nameArray[0]], nameArray[1], {
                configurable: false,
                set: function () { },
                get: function () {
                    return val;
                }
            });
        } else {
            a.win.Object.defineProperty(a.win, name, {
                configurable: false,
                set: function () { },
                get: function () {
                    return val;
                }
            });
        }
    } catch (err) {
        a.config.debugMode && a.out.error("AdBlock Protector failed to define read-only property " + name + "! ");
        return false;
    }
    return true;
};
a.noAccess = function (name) {
    const errMsg = "AdBlock Error: This property may not be accessed! ";
    try {
        if (name.includes(".")) {
            let nameArray = name.split(".");
            a.win.Object.defineProperty(a.win[nameArray[0]], nameArray[1], {
                configurable: false,
                set: function () {
                    throw errMsg;
                },
                get: function () {
                    throw errMsg;
                }
            });
        } else {
            a.win.Object.defineProperty(a.win, name, {
                configurable: false,
                set: function () {
                    throw errMsg;
                },
                get: function () {
                    throw errMsg;
                }
            });
        }
    } catch (err) {
        a.config.debugMode && a.out.error("AdBlock Protector failed to define non-accessible property " + name + "! ");
        return false;
    }
    return true;
};
a.css = function (str) {
    let temp = str.split(";");
    for (let i = 0; i < temp.length - 1; i++) {
        if (!temp[i].endsWith("!important")) {
            temp[i] += " !important";
        }
    }
    GM_addStyle(temp.join(";"));
};
a.bait = function (type, identifier) {
    let elem = a.$("<" + type + ">");
    if (identifier.startsWith("#")) {
        elem.attr("id", identifier.substr(1));
    } else if (identifier.startsWith(".")) {
        elem.addClass(identifier.substr(1));
    }
    elem.html("<br>").prependTo("html");
};
a.cookie = function (key, val, time, path) {
    if (val === "undefined") {
        const value = "; " + a.doc.cookie;
        let parts = value.split("; " + key + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        } else {
            return null;
        }
    } else {
        let expire = new a.win.Date();
        expire.setTime((new a.win.Date()).getTime() + (time || 31536000000));
        a.doc.cookie = key + "=" + a.win.encodeURIComponent(val) + ";expires=" + expire.toGMTString() + ";path=" + (path || "/");
    }
};
a.serialize = function (obj) {
    var str = "";
    for (var key in obj) {
        if (str !== "") {
            str += "&";
        }
        str += key + "=" + a.win.encodeURIComponent(obj[key]);
    }
    return str;
};
a.nativePlayer = function (source, typeIn, widthIn, heightIn) {
    let type;
    if (typeIn) {
        type = typeIn;
    } else {
        const temp = source.split(".");
        switch (temp[temp.length - 1]) {
            case "webm":
                type = "video/webm";
                break;
            case "mp4":
                type = "video/mp4";
                break;
            case "ogg":
                type = "video/ogg";
                break;
            default:
                type = "video/mp4";
                break;
        }
    }
    const width = widthIn || "100%";
    const height = heightIn || "auto";
    return `<video width='${width}' height='${height}' controls><source src='${source}' type='${type}'></video>`;
};
a.videoJS = function (sources, types, width, height) {
    let html = `<video id="AdBlock_Protector_Video_Player" class="video-js vjs-default-skin" controls preload="auto" width="${width}" height="${height}" data-setup="{}">`;
    for (let i = 0; i < sources.length; i++) {
        html += `<source src="${sources[i]}" type="${types[i]}">`;
    }
    html += `</video>`;
    return html;
};
a.videoJS.init = function () {
    try {
        a.win.HELP_IMPROVE_VIDEOJS = false;
    } catch (err) { }
    a.$("head").append(`<link href="//vjs.zencdn.net/5.4.6/video-js.min.css" rel="stylesheet"><script src="//vjs.zencdn.net/5.4.6/video.min.js"></script>`);
};
a.always = function (func) {
    func();
    a.on("DOMContentLoaded", func);
    a.on("load", func);
};
a.uid = function () {
    const chars = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str = "";
    for (let i = 0; i < 10; ++i) {
        str += chars.charAt(a.win.Math.floor(a.win.Math.random() * chars.length));
    }
    a.uid.counter++;
    return str + a.uid.counter.toString();
};
a.uid.counter = 0;
a.observe = function (type, callback) {
    if (!a.observe.init.done) {
        a.observe.init.done = true;
        a.observe.init();
    }
    if (type === "insert") {
        a.observe.insertCallbacks.push(callback);
    }
};
a.observe.init = function () {
    const observer = new a.win.MutationObserver(function (mutations) {
        for (let i = 0; i < mutations.length; i++) {
            if (mutations[i].addedNodes.length) {
                for (let ii = 0; ii < a.observe.insertCallbacks.length; ii++) {
                    for (let iii = 0; iii < mutations[i].addedNodes.length; iii++) {
                        a.observe.insertCallbacks[ii](mutations[i].addedNodes[iii]);
                    }
                }
            }
        }
    });
    observer.observe(a.doc, {
        childList: true,
        subtree: true
    });
};
a.observe.init.done = false;
a.observe.insertCallbacks = [];
a.generic = function () {
    //Based on: generic killers of Anti-Adblock Killer
    //License: https://github.com/reek/anti-adblock-killer/blob/master/LICENSE
    if (a.config.allowGeneric && !a.config.domExcluded) {
        const data = {};
        a.generic.FuckAdBlock("FuckAdBlock", "fuckAdBlock");
        a.generic.FuckAdBlock("BlockAdBlock", "blockAdBlock");
        a.readOnly("canRunAds", true);
        a.readOnly("canShowAds", true);
        a.readOnly("isAdBlockActive", false);
        let playwireZeus;
        a.win.Object.defineProperty(a.win, "Zeus", {
            configurable: false,
            set: function (val) {
                playwireZeus = val;
            },
            get: function () {
                a.config.debugMode && a.err("Playwire");
                try {
                    playwireZeus.AdBlockTester = {
                        check: function (a) { a(); }
                    };
                } catch (err) { }
                return playwireZeus;
            }
        });
        a.on("DOMContentLoaded", function () {
            if (a.win.XenForo && typeof a.win.XenForo.rellect === "object") {
                a.config.debugMode && a.err("XenForo");
                a.win.XenForo.rellect = {
                    AdBlockDetector: {
                        start: function () { }
                    }
                };
            }
            if (typeof a.win.closeAdbuddy === "function") {
                a.config.debugMode && a.err("Adbuddy");
                a.win.closeAdbuddy();
            }
            if (a.$("div.adb_overlay > div.adb_modal_img").length > 0) {
                a.config.debugMode && a.err("AdBlock Alerter");
                a.$("div.adb_overlay").remove();
                a.css("html,body {height:auto; overflow: auto;}");
            }
            if (a.$("#blockdiv").html() === "disable ad blocking or use another browser without any adblocker when you visit") {
                a.config.debugMode && a.out.err("Uncaught AdBlock Error: Generic block screens are not allowed on this device! ");
                a.$("#blockdiv").remove();
            }
            const styles = document.querySelectorAll("style");
            for (let i = 0; i < styles.length; i++) {
                const style = styles[i];
                const cssRules = style.sheet.cssRules;
                for (var j = 0; j < cssRules.length; j++) {
                    const cssRule = cssRules[j];
                    const cssText = cssRule.cssText;
                    const pattern = /^#([a-z0-9]{4,10}) ~ \* \{ display: none; \}/;
                    if (pattern.test(cssText)) {
                        const id = pattern.exec(cssText)[1];
                        if (a.$("script:contains(w.addEventListener('load'," + id + ",false))")) {
                            a.config.debugMode && a.err("Antiblock.org v2");
                            data.abo2 = id;
                            break;
                        }
                    }
                }
            }
            for (let prop in a.win) {
                try {
                    if (!prop.startsWith("webkit") && /^[a-z0-9]{4,12}$/i.test(prop) && prop !== "document" && (a.win[prop] instanceof a.win.HTMLDocument) === false && a.win.hasOwnProperty(prop) && typeof a.win[prop] === "object") {
                        const method = a.win[prop];
                        if (method.deferExecution &&
                            method.displayMessage &&
                            method.getElementBy &&
                            method.getStyle &&
                            method.insert &&
                            method.nextFunction) {
                            if (method.toggle) {
                                a.config.debugMode && a.err("BetterStopAdblock");
                                data.bsa = prop;
                            } else {
                                a.config.debugMode && a.err("Antiblock.org v3");
                                data.abo3 = prop;
                            }
                            a.win[prop] = null;
                        }
                        if (method.bab) {
                            a.config.debugMode && a.err("BlockAdBlock");
                            a.win[prop] = null;
                        } else if (a.win.Object.keys(method).length === 3 && a.win.Object.keys(method).join().length === 32) {
                            a.config.debugMode && a.err("BlockAdBlock");
                            a.win[prop] = null;
                        }
                    }
                } catch (err) { }
            }
        });
        const onInsertHandler = function (insertedNode) {
            if (insertedNode.nodeName === "DIV" &&
                insertedNode.id &&
                insertedNode.id.length === 4 &&
                /^[a-z0-9]{4}$/.test(insertedNode.id) &&
                insertedNode.firstChild &&
                insertedNode.firstChild.id &&
                insertedNode.firstChild.id === insertedNode.id &&
                insertedNode.innerHTML.includes("no-adblock.com")) {
                a.config.debugMode && a.err("No-Adblock");
                insertedNode.remove();
            }
            if (insertedNode.nodeName === "DIV" &&
                insertedNode.id &&
                insertedNode.id.length === 7 &&
                /^a[a-z0-9]{6}$/.test(insertedNode.id) &&
                insertedNode.parentNode &&
                insertedNode.parentNode.id &&
                insertedNode.parentNode.id === insertedNode.id + "2" &&
                insertedNode.innerHTML.includes("stopadblock.org")) {
                a.config.debugMode && a.err("StopAdblock");
                insertedNode.remove();
            }
            const reIframeId = /^(zd|wd)$/;
            const reImgId = /^(xd|gd)$/;
            const reImgSrc = /\/ads\/banner.jpg/;
            const reIframeSrc = /(\/adhandler\/|\/adimages\/|ad.html)/;
            if (insertedNode.id &&
                reImgId.test(insertedNode.id) &&
                insertedNode.nodeName === "IMG" &&
                reImgSrc.test(insertedNode.src) ||
                insertedNode.id &&
                reIframeId.test(insertedNode.id) &&
                insertedNode.nodeName === "IFRAME" &&
                reIframeSrc.test(insertedNode.src)) {
                a.config.debugMode && a.err("AntiAdblock");
                insertedNode.remove();
            }
            const reId = /^[a-z]{8}$/;
            const reClass = /^[a-z]{8} [a-z]{8}/;
            const reBg = /^[a-z]{8}-bg$/;
            if (typeof a.win.vtfab !== "undefined" &&
                typeof a.win.adblock_antib !== "undefined" &&
                insertedNode.parentNode &&
                insertedNode.parentNode.nodeName === "BODY" &&
                insertedNode.id &&
                reId.test(insertedNode.id) &&
                insertedNode.nodeName === "DIV" &&
                insertedNode.nextSibling &&
                insertedNode.nextSibling.className &&
                insertedNode.nextSibling.nodeName === "DIV") {
                if (insertedNode.className &&
                    reClass.test(insertedNode.className) &&
                    reBg.test(insertedNode.nextSibling.className) &&
                    insertedNode.nextSibling.style &&
                    insertedNode.nextSibling.style.display !== "none") {
                    a.config.debugMode && a.err("Adunblock Premium");
                    insertedNode.nextSibling.remove();
                    insertedNode.remove();
                } else if (insertedNode.nextSibling.id &&
                           reId.test(insertedNode.nextSibling.id) &&
                           insertedNode.innerHTML.includes("Il semblerait que vous utilisiez un bloqueur de publicité !")) {
                    a.config.debugMode && a.err("Adunblock Free");
                    insertedNode.remove();
                }
            }
            const reMsgId = /^[a-z0-9]{4,10}$/i;
            const reTag1 = /^(div|span|b|i|font|strong|center)$/i;
            const reTag2 = /^(a|b|i|s|u|q|p|strong|center)$/i;
            const reWords1 = /ad blocker|ad block|ad-block|adblocker|ad-blocker|adblock|bloqueur|bloqueador|Werbeblocker|adblockert|&#1570;&#1583;&#1576;&#1604;&#1608;&#1603; &#1576;&#1604;&#1587;|блокировщиком/i;
            const reWords2 = /kapat|disable|désactivez|désactiver|desactivez|desactiver|desative|desactivar|desactive|desactiva|deaktiviere|disabilitare|&#945;&#960;&#949;&#957;&#949;&#961;&#947;&#959;&#960;&#959;&#943;&#951;&#963;&#951;|&#1079;&#1072;&#1087;&#1088;&#1077;&#1097;&#1072;&#1090;&#1100;|állítsd le|publicités|рекламе|verhindert|advert|kapatınız/i;
            if (insertedNode.parentNode &&
                insertedNode.id &&
                insertedNode.style &&
                insertedNode.childNodes.length &&
                insertedNode.firstChild &&
                !insertedNode.firstChild.id &&
                !insertedNode.firstChild.className &&
                reMsgId.test(insertedNode.id) &&
                reTag1.test(insertedNode.nodeName) &&
                reTag2.test(insertedNode.firstChild.nodeName)) {
                a.config.debugMode && a.err("Antiblock.org");
                const audio = insertedNode.querySelector("audio[loop]");
                if (audio) {
                    audio.pause();
                    audio.remove();
                } else if ((data.abo2 && insertedNode.id === data.abo2) ||
                           (insertedNode.firstChild.hasChildNodes() && reWords1.test(insertedNode.firstChild.innerHTML) && reWords2.test(insertedNode.firstChild.innerHTML))) {
                    insertedNode.remove();
                } else if ((data.abo3 && insertedNode.id === data.abo3) ||
                           (insertedNode.firstChild.hasChildNodes() && insertedNode.firstChild.firstChild.nodeName === "IMG" && insertedNode.firstChild.firstChild.src.startsWith("data:image/png;base64"))) {
                    a.win[data.abo3] = null;
                    insertedNode.remove();
                } else if (data.bsa && insertedNode.id === data.bsa) {
                    a.win[data.bsa] = null;
                    insertedNode.remove();
                }
            }
        };
        a.observe("insert", onInsertHandler);
    } else if (a.config.debugMode) {
        a.out.warn("Generic protectors are disabled on this domain. ");
    }
};
a.generic.FuckAdBlock = function (constructorName, instanceName) {
    const patchedFuckAdBlock = function () {
        //Based on: FuckAdBlock
        //License: https://github.com/sitexw/FuckAdBlock/blob/master/LICENSE
        this._callbacks = [];
        a.on("load", (function () {
            this.emitEvent();
        }).bind(this));
        this.setOption = function () {
            return this;
        };
        this.check = function () {
            this.emitEvent();
            return true;
        };
        this.emitEvent = function () {
            for (let i = 0; i < this._callbacks.length; i++) {
                this._callbacks[i]();
            }
            return this;
        };
        this.clearEvent = function () {
            this._callbacks = [];
        };
        this.on = function (detected, func) {
            if (!detected) {
                this._callbacks.push(func);
            }
            return this;
        };
        this.onDetected = function () {
            return this;
        };
        this.onNotDetected = function (func) {
            return this.on(false, func);
        };
        this.debug = {};
        this.debug.set = (function () {
            return this;
        }).bind(this);
    };
    return a.readOnly(constructorName, patchedFuckAdBlock) && a.readOnly(instanceName, new a.win[constructorName]());
};
"use strict";
a.init(["360.cn", "apple.com", "ask.com", "baidu.com", "bing.com", "bufferapp.com", "chatango.com",
"chromeactions.com", "easyinplay.net", "ebay.com", "facebook.com", "flattr.com", "flickr.com", "ghacks.net",
"imdb.com", "imgbox.com", "imgur.com", "instagram.com", "jsbin.com", "jsfiddle.net", "linkedin.com", "live.com",
"mail.ru", "microsoft.com", "msn.com", "paypal.com", "pinterest.com", "preloaders.net", "qq.com", "reddit.com",
"stackoverflow.com", "tampermonkey.net", "twitter.com", "vimeo.com", "wikipedia.org", "w3schools.com",
"yandex.ru", "youtu.be", "youtube.com", "xemvtv.net", "vod.pl", "agar.io", "pandoon.info", "fsf.org",
"adblockplus.org", "plnkr.co", "exacttarget.com", "dolldivine.com", "popmech.ru", "calm.com"],
["google", "amazon", "yahoo"]);
if (a.domCmp(["blockadblock.com"])) {
    a.filter("eval");
    a.on("load", function () {
        a.$("#babasbmsgx").remove();
    });
}
if (a.domCmp(["sc2casts.com"])) {
    a.readOnly("scriptfailed", function () { });
    a.filter("setTimeout");
}
if (a.domCmp(["jagranjunction.com"])) {
    a.readOnly("canRunAds", true);
    a.readOnly("isAdsDisplayed", true);
}
if (a.domCmp(["usapoliticstoday.com"])) {
    a.filter("eval");
}
if (a.domCmp(["adf.ly", "ay.gy", "j.gs", "q.gs", "gamecopyworld.click"])) {
    //Based on: AdsBypasser
    //License: https://github.com/adsbypasser/adsbypasser/blob/master/LICENSE
    a.doc.write = function () { };
    a.win.btoa = function () { };
    a.on("DOMContentLoaded", function () {
        if (a.$("html").attr("id") === "main_html" && a.$("body").attr("id") === "home") {
            a.win.cookieCheck = function () { };
            let encodedURL = a.doc.head.innerHTML.match(/var eu = '(?!false)(.*)'/)[1];
            const index = encodedURL.indexOf('!HiTommy');
            if (index >= 0) {
                encodedURL = encodedURL.substring(0, index);
            }
            let var1 = "", var2 = "";
            for (let i = 0; i < encodedURL.length; ++i) {
                if (i % 2 === 0) {
                    var1 = var1 + encodedURL.charAt(i);
                } else {
                    var2 = encodedURL.charAt(i) + var2;
                }
            }
            let decodedURL = a.win.atob(var1 + var2);
            decodedURL = decodedURL.substr(2);
            if (a.win.location.hash) {
                decodedURL += a.win.location.hash;
            }
            a.win.onbeforeunload = null;
            a.win.location.href = decodedURL;
        } else {
            a.config.debugMode && a.out.info("This page isn't an adf.ly page");
        }
    });
}
if (a.domCmp(["jansatta.com", "financialexpress.com", "indianexpress.com"])) {
    a.readOnly("RunAds", true);
}
if (a.domCmp(["livemint.com"])) {
    a.readOnly("canRun1", true);
}
if (a.domCmp(["userscloud.com"])) {
    a.on("load", function () {
        a.$("#dl_link").show();
        a.$("#adblock_msg").remove();
    });
}
if (a.domCmp(["vidlox.tv"])) {
    a.readOnly("xRds", false);
    a.readOnly("cRAds", true);
}
if (a.domCmp(["cwtv.com"])) {
    a.readOnly("wallConfig", false);
}
if (a.domCmp(["theinquirer.net"])) {
    a.readOnly("_r3z", true);
}
if (a.domCmp(["tweaktown.com"])) {
    a.on("load", function () {
        a.css("html, body { overflow: scroll; }");
        const blockScreenRemover = function () {
            if (a.$("body").children("div").last().text().indexOf("Ads slowing you down?") > -1) {
                a.$("body").children("div").last().remove();
                a.$("body").children("div").last().remove();
            } else {
                a.win.setTimeout(blockScreenRemover, 500);
            }
        };
        a.win.setTimeout(blockScreenRemover, 500);
    });
}
if (a.domCmp(["ratemyprofessors.com"])) {
    a.readOnly("adBlocker", false);
    a.filter("addEventListener", "/resize/i");
}
if (a.domCmp(["gamepedia.com"])) {
    a.on("load", function () {
        a.$("#atflb").remove();
    });
}
if (a.domCmp(["cbox.ws"])) {
    a.readOnly("koddostu_com_adblock_yok", true);
}
if (a.domCmp(["ahmedabadmirror.com"])) {
    a.protectFunc();
    a.filter("document.addEventListener", /function \_0x/);
    a.protectFunc.masks[1] = "function addEventListener() { [native code] }";
}
if (a.domCmp(["pinkrod.com", "wetplace.com"])) {
    a.readOnly("getAd", function () { });
    a.readOnly("getUtm", function () { });
}
if (a.domInc(["hackintosh"])) {
    a.readOnly("eval", function () {
        var c = "babasbmsgx";
        document.getElementById(c).style.setProperty("visibility", "hidden", "important");
        document.getElementById(c).style.setProperty("display", "none", "important");
        document.getElementById(c).style.setProperty("opacity", "0", "important");
        document.getElementById(c).style.setProperty("animation", "none", "important");
        document.body.style.setProperty("visibility", "visible", "important");
    });
}
if (a.domCmp(["tvregionalna24.pl"])) {
    let text = [];
    a.readOnly("videojs", function (a, b, func) {
        let temp = "(" + func.toString().match(/var _ended=(.*);var _skipButton/)[1] + ")();";
        temp = temp.replace("player.dispose();", "");
        text.push(temp);
    });
    a.on("load", function replace() {
        if (text.length > 0 && a.$(".vjs-poster").length > 0) {
            for (let i = 0; i < text.length; i++) {
                a.win.eval(text[i]);
            }
        } else {
            a.win.setTimeout(replace, 1000);
        }
    });
}
if (a.domCmp(["tvn.pl", "tvnstyle.pl", "tvnturbo.pl"])) {
    const homePages = ["http://www.tvn.pl/", "http://www.tvn7.pl/", "http://www.tvnstyle.pl/",
"http://www.tvnturbo.pl/"];
    if (!homePages.includes(a.doc.location.href)) {
        a.on("load", function () {
            a.$(".videoPlayer").parent().after(a.nativePlayer(a.$(".videoPlayer").data("src"))).remove();
        });
    }
}
if (a.domCmp(["player.pl"])) {
    //Based on: solution from Anti-Adblock Killer
    //License: https://github.com/reek/anti-adblock-killer/blob/master/LICENSE
    a.on("load", function () {
        let elem;
        if (a.$("header.detailImage").length > 0) {
            elem = a.$("header.detailImage");
        } else {
            return;
        }
        const parts = a.doc.location.href.split(/[.,]/);
        const id = parts[parts.length - 2];
        const params = {
            platform: "ConnectedTV",
            terminal: "Panasonic",
            format: "json",
            authKey: "064fda5ab26dc1dd936f5c6e84b7d3c2",
            v: "3.1",
            m: "getItem",
            id: id
        };
        const api = "https://api.tvnplayer.pl/api/?" + a.serialize(params);
        const proxy = "http://www.proxy.xmc.pl/index.php?hl=3e5&q=";
        const requestURL = (a.cookie("tvn_location2") === "1") ? api : proxy +
a.win.encodeURIComponent(api);
        GM_xmlhttpRequest({
            method: "GET",
            url: requestURL,
            onload: function (result) {
                let url;
                try {
                    let data = JSON.parse(result.responseText);
                    let vidSources = data.item.videos.main.video_content;
                    if (vidSources[1].url) {
                        elem.html("").append(a.nativePlayer(vidSources[1].url));
                        a.$("video").css("max-height", "540px");
                    } else if (vidSources[0].src) {
                        a.config.debugMode && a.out.error("AdBlock Protector will not replace this video player " +
"because it is DRM prtected. ");
                    }
                } catch (err) {
                    a.config.debugMode && a.out.error("AdBlock Protector failed to find media URL! ");
                    return;
                }
            }
        });
    });
}
if (a.domCmp(["abczdrowie.pl", "autokrata.pl", "autokult.pl", "biztok.pl", "gadzetomania.pl", "hotmoney.pl",
"kafeteria.pl", "kafeteria.tv", "komediowo.pl", "komorkomania.pl", "money.pl", "pudelek.tv", "sfora.pl",
"snobka.pl", "wawalove.pl", "wp.pl", "wp.tv", "wrzuta.pl", "pudelek.pl", "fotoblogia.pl"]) &&
!a.domCmp(["i.wp.pl"], true)) {
    a.cookie("ABCABC", "true");
    let mid; //Media ID of next video
    let midArray1 = []; //Media IDs method 1
    let midArray2 = []; //Media IDs method 2
    let url = null; //URL of the next video
    let replaceCounter = 0; //The number of video players that are replaced
    let loadCounter = 0; //The index of next item to load
    let networkBusy = false; //A flag to prevent sending a new request before the first one is done
    let networkErrorCounter = 0; //Will stop sending request if this is over 5
    let isInBackground = false; //A flag to prevent excessive CPU usage when the tab is in background
    let containerMatcher = ".wp-player-outer, .player__container, .wp-player, .embed-container";
    const main = function () {
        if (isInBackground) {
            return;
        }
        a.config.debugMode && a.out.log(midArray1, midArray2);
        try {
            if (a.win.WP.player.list.length > midArray1.length) {
                let thisMid = a.win.WP.player.list[midArray1.length].p.url;
                if (thisMid) {
                    thisMid = thisMid.split("=")[1];
                }
                if (thisMid) {
                    midArray1.push(thisMid);
                }
            }
        } catch (err) {
            a.config.debugMode && a.out.error("AdBlock Protector failed to find media ID with method 1! ");
        }
        if (a.$(containerMatcher).length > 0) {
            const elem = a.$(containerMatcher).first().find(".titlecont a.title");
            let thisMid = elem.attr("href");
            if (thisMid) {
                thisMid = thisMid.match(/mid[=,]([0-9]+)/)[1].toString();
                elem.remove();
            }
            if (thisMid) {
                midArray2.push(thisMid);
            }
        }
        if (loadCounter === replaceCounter) {
            if (networkBusy || networkErrorCounter > 5) {
                return;
            }
            let mid;
            let midArray = (midArray1.length > midArray2.length) ? midArray1 : midArray2;
            if (midArray.length > loadCounter) {
                mid = midArray[loadCounter];
            } else {
                return;
            }
            networkBusy = true;
            GM_xmlhttpRequest({
                method: "GET",
                url: "http://wp.tv/player/mid," + mid + ",embed.json",
                onload: function (res) {
                    try {
                        const response = JSON.parse(res.responseText);
                        for (let i = 0; i < response.clip.url.length; i++) {
                            let item = response.clip.url[i];
                            if (item.quality === "HQ" && item.type.startsWith("mp4")) {
                                url = item.url;
                                break;
                            }
                        }
                        if (!url) {
                            throw "Media URL Not Found";
                        }
                        loadCounter++;
                        networkErrorCounter = 0;
                    } catch (err) {
                        a.config.debugMode && a.out.error("AdBlock Protector failed to find media URL! ");
                        networkErrorCounter += 1;
                    }
                    networkBusy = false;
                },
                onerror: function () {
                    a.config.debugMode && a.out.error("AdBlock Protector failed to load media JSON! ");
                    networkErrorCounter += 0.5;
                    networkBusy = false;
                }
            });
        } else {
            if (a.$(containerMatcher).length > 0) {
                if (a.config.debugMode) {
                    a.out.log("Replacing player... ");
                    a.out.log(a.$(containerMatcher)[0]);
                }
                a.$(containerMatcher).first().after(a.nativePlayer(url)).remove();
                url = null;
                replaceCounter++;
            }
        }
    };
    a.win.setInterval(main, 1000);
    a.on("focus", function () {
        isInBackground = false;
    });
    a.on("blur", function () {
        isInBackground = true;
    });
}
if (a.domCmp(["foxvalleyfoodie.com"])) {
    a.patchHTML(function (html) {
        return html.replace(/<script.*\/wp-includes\/js\/(?!jquery|comment|wp-embed).*<\/script>/g,
"<script>console.error('Uncaught AdBlock Error: Admiral is not allowed on this device! ');</script>");
    });
}
if (a.domCmp(["mid-day.com", "happytrips.com"])) {
    a.readOnly("canRun", true);
}
if (a.domCmp(["ewallstreeter.com"])) {
    a.readOnly("OAS_rdl", 1);
}
if (a.domCmp(["megogo.net"])) {
    a.readOnly("adBlock", false);
    a.readOnly("showAdBlockMessage", function () { });
}
if (a.domCmp(["elektroda.pl"])) {
    a.filter("setTimeout", /adBlockTest\.offsetHeight/);
}
if (a.domCmp(["anandabazar.com"])) {
    a.readOnly("canRunAds", false);
    a.config.allowGeneric = false;
}
if (a.domCmp(["wtkplay.pl"])) {
    a.readOnly("can_run_ads", true);
}
if (a.domCmp(["betterdocs.net"])) {
    a.filter("eval", /eval\(function\(p\,a\,c\,k\,e\,d\)/);
}
if (a.domCmp(["webqc.org"])) {
    a.filter("setTimeout", /function\(\)\{R\(e\)\}/);
}
if (a.domCmp(["wired.com"])) {
    a.readOnly("google_onload_fired", true);
}
if (a.domInc(["knowlet3389.blogspot"])) {
    a.filter("setTimeout", /\$\(\"\#gAds\"\)\.height\(\)/);
}
if (a.domCmp(["freegameserverhost.com"])) {
    a.css("#fab13 { height: 11px; }");
}
if (a.domCmp(["elahmad.com"])) {
    a.css("#adblock { height: 1px; }");
}
if (a.domCmp(["mrtzcmp3.net"])) {
    a.css(".rtm_ad { height: 1px; }");
}
if (a.domCmp(["bknime.com", "go4up.com", "debrido.com"])) {
    a.css(".myTestAd { height: 1px; }");
}
if (a.domCmp(["debridfast.com", "getdebrid.com", "debrid.us", "leecher.us"])) {
    a.css(".myTestAd, .my24Ad, .nabil { height: 1px; }");
    a.on("DOMContentLoaded", function () {
        a.$("#simpleAd").html(`<p style="display:none;">debridfast.com</p>`);
    })
}
if (a.domCmp(["bg-gledai.tv"])) {
    a.css(".myAd { height: 1px; }");
}
if (a.domCmp(["thepcspy.com"])) {
    a.css(".myTestAd { height: 1px; }");
    a.css(".blocked { display: none; }");
    a.on("DOMContentLoaded", function () {
        a.$(".blocked").remove();
    })
}
if (a.domCmp(["vg.no", "e24.no"])) {
    a.css(".ad { display: none; }");
}
if (a.domCmp(["automobile-sportive.com"])) {
    a.css(".myTestAd { height: 51px; display: none; }");
}
if (a.domCmp(["snsw.us"])) {
    a.css("#ad_1 { height: 1px; }");
}
if (a.domCmp(["urlchecker.net"])) {
    a.css("#adchecker { height: 20px; }");
}
if (a.domCmp(["skiplimite.tv"])) {
    a.css("div.addthis_native_toolbox + div[id] { height: 12px; }");
}
if (a.domCmp(["filecore.co.nz"])) {
    a.css(".adsense { height: 5px; }");
}
if (a.domCmp(["thomas-n-ruth.com"])) {
    a.css(".Google { height: 5px; }");
}
if (a.domCmp(["interfans.org"])) {
    a.css(".ad_global_header { height: 1px; display: none; }");
}
if (a.domCmp(["maxdebrideur.com"])) {
    a.css(".clear + div[id] { height: 12px; }");
}
if (a.domCmp(["topzone.lt"])) {
    a.css(".forumAd { height: 1px; display: none; }");
}
if (a.domInc(["nana10"])) {
    a.css("#advert-tracker { height: 1px; }");
}
if (a.domCmp(["plej.tv"])) {
    a.css(".advert_box { height: 1px; }");
}
if (a.domCmp(["mangamint.com"])) {
    a.css(".ad728 { height: 31px; }");
}
if (a.domCmp(["debrideurstream.fr"])) {
    a.css("#content div[id][align=center] { height: 12px; }");
}
if (a.domCmp(["preemlinks.com"])) {
    a.css("#divads { height: 1px; }");
}
if (a.domCmp(["hentai.to"])) {
    a.css("#hentaito123 { height: 11px; }");
}
if (a.domCmp(["prototurk.com"])) {
    a.css("#reklam { height: 1px; }");
}
if (a.domCmp(["mufa.de"])) {
    a.css("#leaderboard { height: 5px; }");
    a.css("#large-rectangle { height: 5px; }");
    a.css("#ad-header-468x60 { height: 5px; }");
}
if (a.domCmp(["watcharab.com"])) {
    a.css("#adblock { height: 5px; }");
}
if (a.domCmp(["freedom-ip.com"])) {
    a.css(".pub_vertical ins, .pub_vertical div { height: 11px; }");
}
if (a.domCmp(["wakanim.tv"])) {
    a.css("#detector { display: none; }");
    a.css("#nopub { display: block; }");
}
if (a.domCmp(["simply-debrid.com"])) {
    a.win.adsbygoogle = {};
    a.win.adsbygoogle.loaded = true;
}
if (a.domCmp(["manga9.com", "mangabee.co"])) {
    a.css(".adblock { height: 31px; }");
}
if (a.domCmp(["onemanga2.com"])) {
    a.css(".afs_ads { height: 5px; }");
}
if (a.domCmp(["mangabird.com"])) {
    a.css(".afs_ads { height: 5px; }");
}
if (a.domCmp(["kodilive.eu"])) {
    a.css(".Ad { height: 5px; }");
}
if (a.domCmp(["backin.net"])) {
    a.css("#divad { height: 31px; }");
}
if (a.domCmp(["mobile-tracker-free.com"])) {
    a.css("#myAds { height: 1px; }");
}
if (a.domCmp(["workupload.com"])) {
    a.always(function () {
        a.css(".adBlock, .adsbygoogle, #sad { height: 11px; }");
    });
}
if (a.domCmp(["intoday.in", "businesstoday.in"])) {
    a.css("#adbocker_alt { display: none; }");
    a.readOnly("openPopup", function () { });
}
if (a.domCmp(["jc-mp.com"])) {
    a.css(".adsense {width: 1px; height: 1px; visibility: hidden; display: block; position: absolute;}");
}
if (a.domCmp(["mariage-franco-marocain.net"])) {
    a.css("#my_ad_div {height: 1px;}");
}
if (a.domCmp(["happy-hack.ru"])) {
    a.css("#blockblockF4 {visibility:invisible;display:none;} #blockblockF4 td {visibility:invisible;display:" +
"none;} #blockblockF4 td p {visibility:invisible;display:none;} #blockblockD3 {visibility:visible;display:block;}");
}
if (a.domCmp(["forbes.com"])) {
    if (a.win.location.pathname.includes("/welcome")) {
        a.cookie("welcomeAd", "true", 86400000, "/");
        a.cookie("dailyWelcomeCookie", "true", 86400000, "/");
        a.win.location = cookie("toUrl") || "http://www.forbes.com/";
    }
}
if (a.domCmp(["bitcoinaliens.com"])) {
    a.bait("ins", ".adsbygoogle");
}
if (a.domCmp(["osoarcade.com", "d3brid4y0u.info", "fileice.net", "nosteam.ro", "openrunner.com", "easybillets.com",
"spox.fr", "yovoyages.com", "tv3.co.nz", "freeallmusic.info", "putlocker.com", "sockshare.com", "dramapassion.com",
"yooclick.com", "online.ua"])) {
    a.bait("div", "#tester");
}
if (a.domCmp(["filecom.net", "upshare.org", "skippyfile.com", "mwfiles.net", "up-flow.org"])) {
    a.bait("div", "#add");
}
if (a.domCmp(["leaguesecretary.com", "teknogods.com", "hellsmedia.com"])) {
    a.bait("div", "#adpbtest");
}
if (a.domCmp(["freesportsbet.com", "sportsplays.com"])) {
    a.bait("div", "#ad-tester");
}
if (a.domCmp(["tgo-tv.com"])) {
    a.css("#adb, #bannerad1, .load_stream { display: none; }");
    a.bait("div", "#tester");
    a.on("load", function () {
        a.win.threshold = 1000;
        a.$(".chat_frame").remove();
    })
}
if (a.domCmp(["freegamehosting.nl"])) {
    a.bait("div", "#adtest");
}
if (a.domCmp(["theweatherspace.com"])) {
    a.bait("div", "#ab-bl-advertisement");
}
if (a.domCmp(["cleodesktop.com"])) {
    a.bait("div", "#myTestAd");
}
if (a.domCmp(["imageraider.com"])) {
    a.bait("div", "#myGContainer");
}
if (a.domCmp(["voici.fr", "programme-tv.net"])) {
    a.bait("div", "#sas_script2");
}
if (a.domCmp(["mil.ink"])) {
    a.bait("div", "#ads_div");
}
if (a.domCmp(["stream4free.eu"])) {
    a.bait("div", "#jpayday");
    a.readOnly("jpayday_alert", 1);
}
if (a.domCmp(["lg-firmware-rom.com"])) {
    a.readOnly("killads", true);
}
if (a.domCmp(["badtv.it", "badtaste.it", "badgames.it", "badcomics.it"])) {
    a.cookie("adBlockChecked", "disattivo");
}
if (a.domCmp(["independent.co.uk"])) {
    a.cookie("adblock_detected", "ignored");
}
if (a.domCmp(["3dnews.ru"])) {
    a.cookie("adblockwarn", "1");
    a.css("#earAds { width: 401px; }");
    a.bait("div", "#earAds");
    a.readOnly("__AT_detected", true);
}
if (a.domCmp(["esmas.com"])) {
    a.readOnly("opened_adbblock", false);
}
if (a.domInc(["pinoy1tv"])) {
    a.readOnly("allowads", 1);
}
if (a.domCmp(["business-standard.com"])) {
    a.readOnly("adsLoaded", 1);
    a.cookie("_pw", "t");
}
if (a.domCmp(["thechive.com"])) {
    a.readOnly("stephaneDetector", {
        hook: function (cb) {
            cb(false);
        },
        init: function () { },
        broadcastResult: function () { }
    });
}
if (a.domCmp(["richonrails.com"])) {
    a.on("DOMContentLoaded", function () {
        const adsByGoogleHtml = `"<ins+id="aswift_0_expand"+style="display:inline-table;border:none;height:90px;` +
`margin:0;padding:0;position:relative;visibility:visible;width:750px;background-color:transparent"><ins+id="aswi` +
`ft_0_anchor"+style="display:block;border:none;height:90px;margin:0;padding:0;position:relative;visibility:visib` +
`le;width:750px;background-color:transparent"><iframe+marginwidth="0"+marginheight="0"+vspace="0"+hspace="0"+all` +
`owtransparency="true"+scrolling="no"+allowfullscreen="true"+onload="var+i=this.id,s=window.google_iframe_oncopy` +
`,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&am` +
`p;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else+if(h.match){try{h=s.upd(h,i)}catch(e){}w.` +
`location.replace(h)}}"+id="aswift_0"+name="aswift_0"+style="left:0;position:absolute;top:0;"+width="750"+frameb` +
`order="0"+height="90"></iframe></ins></ins>"`;
        a.$.ajax({
            url: a.$(".article-content").data("url"),
            dataType: "script",
            method: "post",
            data: {
                html: adsByGoogleHtml
            },
            success: function (result) {
                const exec = result.replace("$('.article-content')", "$('.article-content-2')");
                a.win.eval(exec);
            }
        });
        a.$(".article-content").after(`<div class="article-content-2"></div>`).remove();
    });
}
if (a.domCmp(["rmprepusb.com"])) {
    a.cookie("jot_viewer", "3");
}
if (a.domCmp(["cubeupload.com"])) {
    a.filter("document.write", /Please consider removing adblock to help us pay our bills/);
}
if (a.config.allowExperimental && a.domCmp(["neodrive.co"])) {
    a.on("load", function () {
        if (a.$(".player2").length > 0) {
            a.win.prompt("AdBlock Protector says: \nThis *might* be the real link, we could not redirect " +
"you automatically, please copy it and paste it into address bar manually: ", a.$(".player2").attr("href")
.split("'")[1]);
        }
    });
}
if (a.domCmp(["hentaihaven.org"])) {
    a.noAccess("desktop_variants");
}
if (a.domCmp(["primeshare.tv"])) {
    a.bait("div", "#adblock");
}
if (a.domCmp(["debridnet.com", "livedebrid.com"])) {
    a.css(".myTestAd2 { height: 5px; }");
    a.bait("div", ".myTestAd2");
}
if (a.domCmp(["bluesatoshi.com"])) {
    a.css("#test { height: 280px; }");
    a.bait("div", "#test");
}
if (a.domCmp(["razercrypt.com"])) {
    a.css("#test { height: 250px; }");
    a.bait("div", "#test");
}
if (a.domCmp(["satoshiempire.com"])) {
    a.css("#test { height: 250px; }");
    a.bait("div", "#test");
}
if (a.domCmp(["oneadfaucet.com"])) {
    a.css("#test { height: 250px; }");
    a.bait("div", "#test");
}
if (a.domCmp(["jkanime.net"])) {
    a.bait("div", "#reco");
}
if (a.domCmp(["720pmkv.com"])) {
    a.bait("div", "#advert");
}
if (a.domCmp(["paidverts.com"])) {
    a.bait("div", ".afs_ads");
}
if (a.domCmp(["italiatv.org"])) {
    a.bait("div", "#fab13");
}
if (a.domCmp(["eventhubs.com"])) {
    a.bait("div", "#blahyblaci1");
}
if (a.domCmp(["superanimes.com"])) {
    a.bait("div", "#bannerLoja");
}
if (a.domCmp(["forum.pac-rom.com"])) {
    a.bait("div", ".banner_ads");
}
if (a.domCmp(["litv.tv"])) {
    a.bait("div", ".player_mask");
}
if (a.domCmp(["leveldown.fr"])) {
    a.bait("div", "#adblock");
    a.bait("div", "#adblocktest");
}
if (a.domCmp(["globeslot.com"])) {
    a.bait("div", "#add");
    a.bait("div", "#add1");
}
if (a.domCmp(["antennesport.com", "serverhd.eu"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#pub .pubclose").remove();
        a.$("#pub .embed iframe").attr("src", "/embed/embed.php");
    });
}
if (a.domCmp(["drivearabia.com", "putlocker.com", "doatoolsita.altervista.org", "sockshare.com",
"free-movie-home.com", "pc.online143.com", "kooora.com", "str3amtv.co.nr", "str3amtv.altervista.org",
"str3am.altervista.org", "filecom.net", "pipocas.tv", "generatupremium.biz", "mega-debrid.eu",
"premiumst0re.blogspot.com", "dl-protect.com", "newsinlevels.com", "vipracing.biz", "businesstoday.in"])) {
    a.filter("alert");
}
if (a.domCmp(["generatupremium.biz"])) {
    a.cookie("genera", "false");
}
if (a.domCmp(["newstatesman.com"])) {
    a.cookie("donationPopup", "hide");
}
if (a.domCmp(["yes.fm"])) {
    a.readOnly("com_adswizz_synchro_initialize", function () { });
}
if (a.domCmp(["tek.no", "gamer.no", "teknofil.no", "insidetelecom.no", "prisguide.no", "diskusjon.no",
"teknojobb.no", "akam.no", "hardware.no", "amobil.no"])) {
    a.on("DOMContentLoaded", function () {
        a.$("<div>").attr("id", "google_ads_iframe_").html("<p></p>").appendTo("body");
    });
}
if (a.domInc(["planetatvonlinehd.blogspot"]) || a.domCmp(["planetatvonlinehd.com"])) {
    a.css(".adsantilok { height: 1px; }");
}
if (a.domCmp(["beta.speedtest.net"])) {
    a.readOnly("adsOoklaComReachable", true);
    a.readOnly("scriptsLoaded", function () { });
}
if (a.domCmp(["binbucks.com"])) {
    a.readOnly("testJuicyPay", true);
    a.readOnly("testSensePay", true);
}
if (a.domCmp(["whiskyprijzen.com", "whiskyprices.co.uk", "whiskypreise.com", "whiskyprix.fr"])) {
    a.readOnly("OA_show", true);
}
if (a.domCmp(["di.se"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#header_overlay").remove();
        a.$("#message_modal").remove();
    });
}
if (a.domCmp(["libertaddigital.com"])) {
    a.readOnly("ad_already_played", true);
    a.readOnly("puedeMostrarAds", true);
}
if (a.domCmp(["folha.uol.com.br"])) {
    a.readOnly("paywall_access", true);
    a.readOnly("folha_ads", true);
}
if (a.domCmp(["gamer.com.tw"])) {
    a.readOnly("AntiAd", null);
};
if (a.domCmp(["armorgames.com"])) {
    a.readOnly("ga_detect", null);
}
if (a.domCmp(["mangahost.com"])) {
    a.readOnly("testDisplay", false);
}
if (a.domCmp(["videowood.tv"])) {
    a.filter("open");
    a.win.config = {};
    a.readOnly("adb_remind", false);
}
if (a.domCmp(["infojobs.com.br"])) {
    a.win.webUI = {};
    a.win.webUI.Utils = {};
    a.win.Object.defineProperty(a.win.webUI.Utils, "StopAdBlock", {
        configurable: false,
        set: function () { },
        get: function () {
            return function () { };
        }
    });
}
if (a.domCmp(["cloudwebcopy.com"])) {
    a.filter("setTimeout");
}
if (a.domCmp(["narkive.com"])) {
    a.readOnly("adblock_status", function () {
        return false;
    });
}
if (a.domCmp(["pregen.net"])) {
    a.cookie("pgn", "1");
}
if (a.domCmp(["phys.org"])) {
    a.readOnly("chkAB", function () { });
}
if (a.domCmp(["onvasortir.com"])) {
    a.readOnly("JeBloque", function () { });
}
if (a.domCmp(["fullhdzevki.com"])) {
    a.readOnly("check", function () { });
}
if (a.domCmp(["freecoins4.me"])) {
    a.readOnly("check", function () {
        return false;
    });
}
if (a.domCmp(["ville-ideale.com"])) {
    a.readOnly("execsp", function () { });
}
if (a.domCmp(["notre-planete.info"])) {
    a.readOnly("pubpop", function () { });
}
if (a.domCmp(["apkmirror.com"])) {
    a.readOnly("doCheck", function () { });
}
if (a.domCmp(["mtlblog.com"])) {
    a.readOnly("puabs", function () { });
}
if (a.domCmp(["15min.lt"])) {
    a.noAccess("__adblock_config");
}
if (a.domCmp(["anizm.com"])) {
    a.always(function () {
        a.win.stopAdBlock = {};
    });
}
if (a.domCmp(["diarioinformacion.com"])) {
    a.readOnly("pr_okvalida", true);
}
if (a.domCmp(["cnbeta.com"])) {
    a.readOnly("JB", function () { });
}
if (a.domCmp(["themarker.com", "haaretz.co.il"])) {
    a.win.AdBlockUtil = {};
}
if (a.domCmp(["pipocas.tv"])) {
    a.cookie("popup_user_login", "yes");
}
if (a.domCmp(["sc2casts.com"])) {
    a.win._gaq = { push: function () { } }
    a.readOnly("showdialog", function () { });
    a.readOnly("showPopup2", function () { });
}
if (a.domCmp(["vgunetwork.com"])) {
    a.on("DOMContentLoaded", function () {
        a.cookie("stopIt", "1");
        a.$("#some_ad_block_key_close").click()
    });
}
if (a.domCmp(["eventosppv.me"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#nf37").remove();
    });
}
if (a.domCmp(["bolor-toli.com"])) {
    a.on("load", function () {
        a.$(".banner").html("<br>").css("height", "1px");
    });
}
if (a.domCmp(["vivo.sx"])) {
    a.on("load", function aa() {
        a.$("#alert-throttle").remove();
        a.$("button#access").removeAttr("id").removeAttr("disabled").html("Continue To Video");
        a.win.setTimeout(function () {
            a.$("input[name='throttle']").remove();
        }, 1000);
    });
}
if (a.domCmp(["luxyad.com"])) {
    a.on("DOMContentLoaded", function () {
        if (a.win.location.pathname === "/Information.php") {
            const href = location.href;
            a.win.location.href = href.substr(href.indexOf("url=") + 4, href.length);
        }
    });
}
if (a.domCmp(["dbplanet.net"])) {
    a.cookie("newnoMoreAdsNow", "1");
}
if (a.domCmp(["aidemu.fr"])) {
    a.cookie("adblockPopup", "true");
}
if (a.domCmp(["eami.in"])) {
    a.always(function () {
        a.cookie("ad_locked", "1");
    });
}
if (a.domCmp(["bigdownloader.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#anti_adblock").remove();
    });
}
if (a.domCmp(["freeskier.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#adb-not-enabled").css("display", "");
        a.$("#videoContainer").css("display", "");
    });
}
if (a.domCmp(["gametrailers.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#ad_blocking").remove();
    });
}
if (a.domCmp(["scan-mx.com", "onepiece-mx.net", "naruto-mx.net"])) {
    a.readOnly("ad_block_test", function () { });
    a.on("DOMContentLoaded", function () {
        a.$("#yop").attr("id", "");
    });
}
if (a.domCmp(["freebitcoins.nx.tc", "getbitcoins.nx.tc"])) {
    a.readOnly("ad_block_test", function () {
        return false;
    });
}
if (a.domCmp(["bitcoinker.com"])) {
    a.readOnly("claim", function () {
        return true;
    });
    a.on("DOMContentLoaded", function () {
        a.$("#E33FCCcX2fW").remove();
    });
}
if (a.domCmp(["moondoge.co.in", "moonliteco.in", "moonbit.co.in", "bitcoinzebra.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#AB, #E442Dv, #eCC5h").remove();
    });
}
if (a.domCmp(["bitcoiner.net", "litecoiner.net"])) {
    a.bait("div", "#tester");
    a.bait("div", "#ad-top");
}
if (a.domCmp(["torrent-tv.ru"])) {
    a.readOnly("c_Oo_Advert_Shown", true);
}
if (a.domCmp(["cwtv.com"])) {
    a.readOnly("CWTVIsAdBlocking", undefined);
}
if (a.domCmp(["inn.co.il"])) {
    a.win.TRC = {};
    a.win.TRC.blocker = {
        states: {
            ABP_DETECTION_DISABLED: -2,
            ABP_NOT_DETECTED: 0,
            ABP_DETECTED: 1
        },
        createBlockDetectionDiv: function () {
            return a.doc.createElement("div");
        },
        isBlockDetectedOnDiv: function () {
            return 0;
        },
        isBlockDetectedOnClassNames: function () {
            return 0;
        },
        getBlockedState: function () {
            return 0;
        }
    };
}
if (a.domCmp(["bhaskar.com", "divyabhaskar.co.in"])) {
    a.readOnly("openPopUpForBreakPage", function () { });
    a.readOnly("canABP", true);
    a.readOnly("canCheckAds", true);
}
if (a.domCmp(["turkanime.tv"])) {
    a.always(function () {
        a.win.adblockblock = function () { };
        a.win.BlokKontrol = {};
    });
}
if (a.domCmp(["wtfbit.ch"])) {
    a.readOnly("writeHTMLasJS", function () { });
}
if (a.domCmp(["ndtv.com"])) {
    a.readOnly("___p__p", 1);
    a.readOnly("getNoTopLatestNews", function () { });
}
if (a.domCmp(["lesechos.fr", "lesechos.com"])) {
    a.readOnly("checkAdBlock", function () { });
    a.readOnly("paywall_adblock_article", function () { });
    a.readOnly("call_Ad", 1);
}
if (a.domCmp(["bitvisits.com"])) {
    a.readOnly("blockAdblockUser", function () { });
}
if (a.domCmp(["exrapidleech.info"])) {
    let tomorrow = new a.win.Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    a.cookie("popcashpuCap", "1");
    a.cookie("popcashpu", "1");
    a.cookie("nopopatall", tomorrow.getTime().toString());
    a.cookie("noadvtday", "0");
    a.css("div.alert.alert-danger.lead {opacity:0;}");
    a.readOnly("bdvbnr_pid", []);
    a.readOnly("PopAds", 1);
    a.filter("open");
    a.$("<iframe>").attr("src", "http://bdfrm.bidvertiser.com/BidVertiser.dbm?pid=383865&bid=1737418&RD=")
.attr("id", "bdvi").css("display", "none").appendTo("html");
}
if (a.domCmp(["vipleague.is", "vipleague.ws", "vipleague.tv", "vipleague.se", "vipleague.tv", "vipleague.me",
"vipleague.mobi", "vipleague.co", "vipleague.sx", "vipleague.ch", "vipbox.tv", "vipbox.co", "vipbox.biz",
"vipbox.sx", "vipbox.eu", "vipbox.so", "vipbox.nu", "vipboxsa.co", "strikeout.co", "strikeout.me",
"homerun.re", "vipboxtv.co", "vipapp.me"])) {
    a.readOnly("iExist", true);
    a.cookie("xclsvip", "1");
    a.css(".vip_052x003 { height: 250px; }");
    a.css(".vip_09x827 { height: 26px; }");
    a.css("#overlay { display: none; }");
}
if (a.domCmp(["zoomtv.me"])) {
    a.readOnly("iaxpEnabled", true);
}
if (a.domCmp(["vg.no", "e24.no"])) {
    a.readOnly("__AB__", function () { });
}
if (a.domCmp(["pornve.com"])) {
    a.readOnly("adxjwupdate", 1);
}
if (a.domCmp(["lol.moa.tw"])) {
    a.on("DOMContentLoaded", function () {
        a.win.MoaObj = a.win.MoaObj || {};
        a.win.MoaObj.ad = a.win.MoaObj.ad || {};
        a.win.MoaObj.ad.hasAdblock = function () {
            return false;
        };
        a.win.MoaObj.ad.checkABP = function () {
            return false;
        };
    });
}
if (a.domCmp(["multiup.org"])) {
    a.cookie("visit", "1");
    a.readOnly("hi", function () { });
}
if (a.domCmp(["dailybitcoins.org"])) {
    a.on("DOMContentLoaded", function () {
        a.$(".ad-img").remove();
    });
}
if (a.domCmp(["kozaczek.pl", "zeberka.pl"])) {
    a.cookie("ablc", "1");
    a.cookie("cookie_policy", "1");
}
if (a.domCmp(["spankwire.com", "keezmovies.com", "extremetube.com", "mofosex.com"])) {
    a.cookie("abClosed", "true");
    a.cookie("hide_ad_msg", "1");
}
if (a.domCmp(["youporn.com", "youporngay.com"])) {
    a.cookie("adblock_message", "closed");
}
if (a.domCmp(["citationmachine.net"])) {
    a.cookie("sbm_cm_citations", "0");
}
if (a.domCmp(["psarips.com"])) {
    a.bait("div", "#advert");
}
if (a.domCmp(["extratorrent.cc", "extratorrent.com"])) {
    a.cookie("ppu_delay", "1");
    a.cookie("ppu_main", "1");
    a.cookie("ppu_sub", "1");
    a.cookie("ppu_show_on", "1");
}
if (a.domCmp(["tny.cz", "pasted.co"])) {
    a.cookie("__.popunderCap", "1");
    a.cookie("__.popunder", "1");
}
if (a.domCmp(["clubedohardware.com.br"])) {
    if (a.win.location.host.includes("forum")) {
        a.css("#banner, script { height: 51px; }");
        a.bait("div", "#banner");
    } else {
        a.bait("div", ".banner_topo");
    }
    a.on("DOMContentLoaded", function () {
        if (a.win.location.host.includes("forum")) {
            a.win.addBlocking.hide();
            a.win.addBlocking.kill();
        } else {
            a.doc.body.id = "";
            a.$(".adblock").remove();
        }
    });
}
if (a.domCmp(["debrastagi.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#stp-main").remove();
        a.$("#stp-bg").remove();
    });
}
if (a.domCmp(["ddlfrench.org"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#dle-content .d-content").removeClass();
        a.$("#content").attr("id", "");
    });
}
if (a.domCmp(["mega-debrid.eu"])) {
    a.on("load", function () {
        const elem = a.$(".realbutton")[0];
        elem.setAttribute("onclick", "");
        elem.setAttribute("type", "submit");
    });
}
if (a.domInc(["slideplayer"])) {
    a.on("load", function () {
        a.win.force_remove_ads = true;
        const slide_id = a.win.get_current_slide_id();
        const slide_srv = a.doc.getElementById("player_frame").src.split("/")[3];
        const time = 86400 + a.win.Math.floor(a.win.Date.now() / 1000);
        const secret = a.win.encodeURIComponent(a.win.strtr(a.win.MD5.base64("secret_preved slideplayer never solved " +
time + slide_id + ".ppt"), "+/", "- "));
        const url = "http://player.slideplayer.org/download/" + slide_srv + "/" + slide_id + "/" + secret + "/" +
time + "/" + slide_id + ".ppt";
        let links = a.doc.querySelectorAll("a.download_link");
        for (let i = 0; i < links.length; i++) {
            let events = a.win.$._data(links[i]).events.click;
            events.splice(0, events.length);
            links[i].href = url;
        }
    });
}
if (a.domCmp(["bokepspot.com"])) {
    a.cookie("hideDialog", "hide");
    a.on("DOMContentLoaded", function () {
        a.$("#tupiklan").remove();
    });
}
if (a.domCmp(["picload.org"])) {
    a.cookie("pl_adblocker", "false");
    a.on("DOMContentLoaded", function () {
        a.win.ads_loaded = true;
        a.win.imageAds = false;
        a.$("div[oncontextmenu='return false;']").remove();
    });
}
if (a.domCmp(["freezedownload.com"])) {
    a.on("DOMContentLoaded", function () {
        if (a.win.location.href.includes("freezedownload.com/download/")) {
            a.$("body > div[id]").remove();
        }
    });
}
if (a.domCmp(["monnsutogatya.com"])) {
    a.on("DOMContentLoaded", function () {
        a.css("#site-box {display:block;}");
        a.$("#for-ad-blocker").remove();
    });
}
if (a.domCmp(["rapid8.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("div.backk + #blcokMzg").remove();
        a.$("div.backk").remove();
    });
}
if (a.domCmp(["turkdown.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#duyuru").remove();
    });
}
if (a.domCmp(["privateinsta.com"])) {
    a.on("DOMContentLoaded", function () {
        a.win.dont_scroll = false;
        a.$("#overlay_div").remove();
        a.$("#overlay_main_div").remove();
    });
}
if (a.domCmp(["oneplaylist.eu.pn"])) {
    a.readOnly("makePopunder", false);
}
if (a.domCmp(["onmeda.de"])) {
    a.readOnly("$ADP", true);
    a.readOnly("sas_callAd", function () { });
    a.readOnly("sas_callAds", function () { });
}
if (a.domCmp(["rockfile.eu"])) {
    a.on("DOMContentLoaded", function () {
        a.$("<iframe>").attr("src", "about:blank").css("visibility", "hidden").appendTo("body");
    });
}
if (a.domCmp(["referencemega.com", "fpabd.com", "crackacc.com"])) {
    a.cookie("_lbGatePassed", "true");
}
if (a.domCmp(["link.tl"])) {
    a.css(".adblock { height:1px; }");
    a.readOnly("adblocker", false);
}
if (a.domCmp(["wstream.video"])) {
    a.css("#adiv { height:4px; }");
}
if (a.domCmp(["4shared.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("body").removeClass("jsBlockDetect");
    });
}
if (a.domCmp(["pro-zik.ws", "pro-tect.ws", "pro-ddl.ws", "pro-sport.ws"])) {
    a.cookie("visitedf", "true");
    a.cookie("visitedh", "true");
}
if (a.domCmp(["comptoir-hardware.com"])) {
    a.readOnly("adblock", "non");
}
if (a.domCmp(["bakersfield.com"])) {
    a.readOnly("AD_SLOT_RENDERED", true);
}
if (a.domCmp(["ekstrabladet.dk", "eb.dk"])) {
    a.always(function () {
        a.win.ADTECH = {};
    });
}
if (a.domCmp(["pcgames-download.net"])) {
    a.always(function () {
        a.cookie("noAdblockNiceMessage", "1");
        a.win.mgCanLoad30547 = true;
    });
}
if (a.domCmp(["lachainemeteo.com"])) {
    a.readOnly("js_loaded", true);
}
if (a.domCmp(["mac4ever.com"])) {
    a.readOnly("coquinou", function () { });
}
if (a.domCmp(["5278bbs.com"])) {
    a.readOnly("myaabpfun12", function () { });
}
if (a.domCmp(["thesimsresource.com"])) {
    a.readOnly("gadsize", true);
    a.readOnly("iHaveLoadedAds", true);
}
if (a.domCmp(["yellowbridge.com"])) {
    a.readOnly("finalizePage", function () { });
}
if (a.domCmp(["game-debate.com"])) {
    a.readOnly("ad_block_test", function () { });
}
if (a.domCmp(["kissanime.com", "kissanime.to", "kissanime.ru"])) {
    a.css("iframe[id^='adsIfrme'], .divCloseBut { display:none; }");
    a.on("DOMContentLoaded", function () {
        const divContentVideo = a.doc.querySelector("#divContentVideo");
        if (a.win.DoDetect2) {
            a.win.DoDetect2 = null;
            a.win.CheckAdImage = null;
        } else if (divContentVideo) {
            const divDownload = a.doc.querySelector("#divDownload").cloneNode(true);
            a.win.setTimeout(function () {
                divContentVideo.innerHTML = "";
                a.win.DoHideFake();
                divContentVideo.appendChild(divDownload);
                a.$("iframe[id^='adsIfrme'], .divCloseBut").remove();
            }, 5500);
        }
    });
}
if (a.domCmp(["kisscartoon.me", "kisscartoon.se"])) {
    a.readOnly("xaZlE", function () { });
    a.on("DOMContentLoaded", function () {
        a.$("iframe[id^='adsIfrme']").remove();
    });
}
if (a.domCmp(["openload.co", "openload.io", "openload.tv"])) {
    a.readOnly("adblock", false);
    a.readOnly("adblock2", false);
    a.readOnly("popAdsLoaded", true);
}
if (a.domCmp(["youwatch.org", "chouhaa.info", "ahzahg6ohb.com", "ahzahg6ohb.com"])) {
    a.readOnly("adsShowPopup1", 1);
    a.on("DOMContentLoaded", function () {
        a.$("#player_imj, #player_imj + div[id]").remove();
    });
}
if (a.domCmp(["exashare.com", "chefti.info", "bojem3a.info", "ajihezo.info", "yahmaib3ai.com",
"yahmaib3ai.com"])) {
    a.readOnly("adsShowPopup1", 1);
    a.on("DOMContentLoaded", function () {
        a.$("#player_gaz, #player_gaz + div[id]").remove();
    });
}
if (a.domCmp(["an1me.se"])) {
    a.readOnly("isBlockAds2", false);
}
if (a.domCmp(["hqq.tv"])) {
    a.on("DOMContentLoaded", function () {
        if (a.win.location.pathname === "/player/embed_player.php") {
            a.$("form[id^='form-']").submit();
        }
    });
}
if (a.domCmp(["koscian.net"])) {
    a.on("DOMContentLoaded", function () {
        a.$(".ban").remove();
    });
}
if (a.domCmp(["eclypsia.com"])) {
    a.generic.FuckAdBlock("MggAbd", "mggAbd");
}
if (a.domCmp(["gamingroom.tv"])) {
    a.readOnly("adblock_detect", function () { });
    a.readOnly("GR_adblock_hide_video", function () { });
    a.readOnly("adblock_video_msg_start", function () { });
    a.readOnly("adblock_video_msg_stop", function () { });
    a.readOnly("disable_chat", function () { });
}
if (a.domCmp(["rtl.de"])) {
    a.on("DOMContentLoaded", function () {
        a.$("div[data-widget='video']").each(function () {
            const url = a.$(this).data("playerLayerCfg").videoinfo.mp4url;
            a.$(this).after(a.nativePlayer(url));
            a.$(this).remove();
        });
    });
}
if (a.domCmp(["play.radio1.se", "play.bandit.se", "play.lugnafavoriter.com", "play.rixfm.se"])) {
    a.on("load", function () {
        a.win.setTimeout(function () {
            a.win.player_load_live(a.win.stream_id);
        }, 1000);
    });
}
if (a.domCmp(["dplay.com", "dplay.dk", "dplay.se"])) {
    let date = new a.win.Date();
    date.setDate(date.getDate() + 365);
    const timestamp = date.getTime().toString();
    const value = JSON.stringify({
        "notificationSubmission": "submitted",
        "reportingExpiry": timestamp,
        "notificationExpiry": timestamp
    });
    a.cookie("dsc-adblock", value);
}
if (a.domCmp(["viafree.no", "viafree.dk", "viafree.se", "tvplay.skaties.lv", "play.tv3.lt", "tv3play.tv3.ee"])) {
    const handler = function () {
        const elem = a.$("#video-player");
        if (elem.length === 0) {
            a.win.setTimeout(handler, 1000);
            return;
        }
        let videoID = elem.attr("poster").split("/");
        videoID = videoID[videoID.length - 2];
        if (!videoID) {
            a.win.setTimeout(handler, 1000);
            return;
        }
        GM_xmlhttpRequest({
            method: "GET",
            url: "http://playapi.mtgx.tv/v3/videos/stream/" + videoID,
            onload: function (result) {
                parser(result.responseText);
            }
        });
    };
    const parser = function (data) {
        let streams;
        try {
            const parsedData = JSON.parse(data);
            streams = parsedData.streams
        } catch (err) {
            a.config.debugMode && a.out.err("AdBlock Protector failed to find video URL! ");
            a.win.setTimeout(handler, 1000);
            return;
        }
        let sources = [], types = [];
        if (streams.high && streams.high !== "") {
            sources.push(streams.high);
            types.push("video/mp4");
        } else if (streams.hls && streams.hls !== "") {
            sources.push(streams.hls);
            types.push("application/x-mpegURL");
        } else if (streams.medium && streams.medium !== "") {
            sources.push(streams.medium);
            types.push(streams.medium.startsWith("rtmp") ? "rtmp/mp4" : "application/f4m+xml");
        } else {
            a.config.debugMode && a.out.err("AdBlock Protector failed to find video URL! ");
            return;
        }
        a.videoJS.init();
        const height = a.$("#video-player").height();
        const width = a.$("#video-player").width();
        a.$("#video-player").after(a.videoJS(sources, types, width, height)).remove();
        a.win.setTimeout(handler, 1000);
    };
    if (a.config.allowExperimental && a.win.confirm("AdBlock Protector says: \nThis fix is experimental " +
"and might not work, would you want to try it anyway? ")) {
        handler();
    }
}
if (a.domCmp(["firstrow.co", "firstrows.ru", "firstrows.tv", "firstrows.org", "firstrows.co",
"firstrows.biz", "firstrowus.eu", "firstrow1us.eu", "firstsrowsports.eu", "firstrowsportes.tv",
"firstrowsportes.com", "justfirstrowsports.com", "hahasport.me", "wiziwig.ru", "wiziwig.sx",
"wiziwig.to", "wiziwig.tv", "myp2p.biz", "myp2p.tv", "myp2p.la", "myp2p.ec", "myp2p.eu", "myp2p.sx",
"myp2p.ws", "myp2p.com", "atdhe.ru", "atdhe.se", "atdhe.bz", "atdhe.top", "atdhe.to", "atdhe.me",
"atdhe.mx", "atdhe.li", "atdhe.al"])) {
    a.filter("open");
    a.always(function () {
        a.cookie("adb", "1");
        a.css("#bannerInCenter, #hiddenBannerCanvas { display: none; }");
    });
}
if (a.domCmp(["buzina.xyz", "farmet.info", "rimladi.com", "kitorelo.com", "omnipola.com", "porosin.co.uk",
"rimleno.com", "simple4alls.com", "arsopo.com"])) {
    a.css("#adsframe { height: 151px; }");
    a.on("DOMContentLoaded", function () {
        a.$("#adsframe").remove();
        a.$("#remove-over").click();
    });
}
if (a.domCmp(["buzina.xyz"])) {
    a.css("#adsframe { height: 151px; }");
    a.on("DOMContentLoaded", function () {
        const elem = a.$("iframe[src*='.php?hash=']");
        if (elem.length > 0) {
            let parts = elem.attr("src").split("/");
            parts[2] = "arsopo.com";
            elem.attr("src", parts.join("/"));
        }
    });
}
if (a.domCmp(["allmyvideos.net", "amvtv.net"])) {
    a.cookie("_favbt33", "1");
}
if (a.domCmp(["ilive.to", "streamlive.to"])) {
    a.on("load", function () {
        if (a.win.location.pathname.toLowerCase().startsWith("/embedplayer.php")) {
            a.win.setTimeout(function () {
                a.win.removeOverlayHTML();
            }, 1000);
        }
    });
}
if (a.domCmp(["micast.tv"])) {
    a.cookie("vid_main", "true");
    a.cookie("vid_sub", "true");
    a.on("load", function () {
        if (a.win.removeOverlayHTML) {
            a.win.removeOverlayHTML();
        }
    })
}
if (a.domCmp(["pxstream.tv"])) {
    a.on("load", function () {
        if (a.win.location.pathname.startsWith("/embedrouter.php")) {
            a.win.setTimeout(function () {
                a.win.closeAd();
            }, 1000);
        }
    });
}
if (a.domCmp(["sawlive.tv"])) {
    a.on("DOMContentLoaded", function () {
        if (a.win.location.pathname.toLowerCase().startsWith("/embed/watch/")) {
            a.win.display = false;
            a.win.closeMyAd();
        }
    });
}
if (a.domCmp(["goodcast.co"])) {
    a.on("DOMContentLoaded", function () {
        if (a.win.location.pathname.startsWith("/stream.php")) {
            a.$(".advertisement").hide();
            a.$(".adsky iframe").attr("src", "about:blank");
        }
    });
}
if (a.domCmp(["showsport-tv.com"])) {
    a.on("DOMContentLoaded", function () {
        if (a.win.location.pathname.startsWith("/ch.php")) {
            a.$("#advertisement, .advertisement").remove();
        }
    });
}
if (a.domCmp(["sharecast.to"])) {
    a.on("DOMContentLoaded", function () {
        if (a.win.location.pathname.startsWith("/embed.php")) {
            const token = a.win.setInterval(function () {
                a.cookie("vid_main", "true");
                a.cookie("vid_sub", "2");
                a.cookie("vid_delay", "true");
            }, 100);
            a.win.setTimeout(function () {
                a.win.clearInterval(token);
            }, 5000);
            a.$("#table1").remove();
        }
    });
}
if (a.domCmp(["cityam.com", "computerworlduk.com", "techworld.com", "v3.co.uk"])) {
    a.on("DOMContentLoaded", function () {
        a.$("#r3z-wait").remove();
        a.$(".r3z-hide").removeClass("r3z-hide");
        a.win._r3z = null;
    });
}
if (a.domCmp(["next-episode.net", "kingmaker.news", "gamespowerita.com", "todayidol.com", "receive-a-sms.com",
"wakeupcallme.com", "ringmycellphone.com", "faqmozilla.org", "thememypc.com"])) {
    a.always(function () {
        a.win.google_jobrunner = {};
    });
}
if (a.domCmp(["dawn.com"])) {
    a.generic.FuckAdBlock("DetectAdBlock", "detectAdBlock");
}
if (a.domCmp(["sports.fr"])) {
    a.generic.FuckAdBlock("FabInstance", "fabInstance");
}
if (a.domCmp(["europe1.fr"])) {
    a.generic.FuckAdBlock("FabInstance", "fabInstance");
}
if (a.domCmp(["newyorker.com"])) {
    a.generic.FuckAdBlock("SniffAdBlock", "sniffAdBlock");
}
if (a.domCmp(["mangasproject.com.br", "mangasproject.net.br", "mangas.zlx.com.br"])) {
    a.generic.FuckAdBlock(a.uid(), "mangasLeitorSlider");
}
if (a.domCmp(["qnimate.com"])) {
    a.readOnly("adBlockDetected", function () { });
}
if (a.domCmp(["eurotransport.de"])) {
    a.generic.FuckAdBlock(a.uid(), "antiAdBlock");
}
if (a.domCmp(["tzetze.it", "beppegrillo.it", "la-cosa.it"])) {
    a.generic.FuckAdBlock("CADetect", "cadetect");
}
if (a.domCmp(["agario.sx", "agarabi.com"])) {
    a.generic.FuckAdBlock(a.uid(), "agario_SX_ads");
}
if (a.domCmp(["filespace.com"])) {
    a.generic.FuckAdBlock(a.uid(), "fAB");
}
if (a.domCmp(["topserialy.sk"])) {
    a.generic.FuckAdBlock(a.uid(), "sratNaVas");
}
if (a.domCmp(["sport-show.fr", "vipflash.net", "2site.me"])) {
    a.css("#blockblockA {visibility:invisible;display:none;} #blockblockA td {visibility:invisible;di" +
"splay:none;} #blockblockA td p {visibility:invisible;display:none;} #blockblockB {visibility:visible" +
";display:block;}");
}
if (a.domCmp(["gametransfers.com", "winandmac.com", "free-steam-giveaways.com", "canalwp.com",
"alphahistory.com", "nordpresse.be", "sospc.name", "baboo.com.br"])) {
    a.always(function () {
        a.cookie("anCookie", "true");
        a.win.anOptions = {};
    });
}
if (a.domCmp(["lewebtvbouquetfrancophone.overblog.com", "webtv.bloguez.com", "latelegratuite.blogspot.com",
"totaldebrid.org", "37.187.173.205", "tvgratuite.blogspot.com"])) {
    a.bait("div", "#my_ad_div");
    a.readOnly("jabbahud", function () { });
}
if (a.domCmp(["mybank.pl", "rapidgrab.pl"])) {
    a.filter("addEventListener", /\.nextFunction\(\)\}/);
}
if (a.domCmp(["linkdrop.net", "revclouds.com", "leporno.org", "uploadshub.com", "dasolo.org",
"fullstuff.net", "zeusnews.it", "cheminots.net", "lolsy.tv", "animes-mangas-ddl.com",
"noticiasautomotivas.com.br", "darkstars.org", "corepacks.com", "naturalbd.com",
"coolsoft.altervista.org", "openload.us", "cda-online.pl", "urbanplanet.org", "mamahd.com",
"sadeempc.com", "avmoo.com", "thailande-fr.com", "btaia.com", "tusoft.org", "hisse.net",
"europeup.com", "nrj.fr", "srnk.co", "animmex.co", "socketloop.com", "crackhex.com",
"revealedtricks4u.com", "pizzamaking.com", "computerworm.net", "yourlifeupdated.net"])) {
    a.filter("setTimeout", /bab\_elementid/);
}
if (a.domCmp(["fourchette-et-bikini.fr", "meteocity.com"])) {
    a.readOnly("adProtect", 1);
}
if (a.domCmp(["demo-phoenix.com", "dpstream.net", "gum-gum-streaming.com", "jeu.info", "sofoot.com",
"gaara-fr.com", "gaytube.com", "tuxboard.com", "xstory-fr.com", "hentaifr.net", "filmstreaming-hd.com",
"filmvf.net", "hentaihaven.org", "narutoshippudenvf.com", "thebadbuzz.com", "manga-news.com", "jeu.video",
"mangas-fr.com"])) {
    a.css("body {visibility: visible;}");
}
if (a.domCmp(["emuparadise.me"])) {
    a.always(function () {
        a.$("h2:contains('Bandwidth is expensive')").parent().remove();
    });
}
if (a.domCmp(["sapib.ca"])) {
    a.readOnly("Abd_Detector", function () { });
}
if (a.domCmp(["wowhead.com"])) {
    a.on("DOMContentLoaded", function () {
        a.$("div[id^='ad-']").parent().parent().parent().remove();
    });
}
if (a.domCmp(["epiotrkow.pl"])) {
    a.bait("div", "#adboxx");
}
if (a.domCmp(["fox.com.tr"])) {
    a.readOnly("adblockDetector", {
        init: function () { }
    });
}
if (a.domCmp(["thebatavian.com"])) {
    a.readOnly("broadstreet", true);
}
if (a.domCmp(["zrabatowani.pl"])) {
    a.cookie("adblockAlert", "yes");
}
if (a.domCmp(["hanime.tv"])) {
    const _open = a.win.open;
    a.win.open = function () {
        _open.apply(a.win, arguments);
        window.close();
    };
    a.readOnly("BetterJsPop", function () { });
}
if (a.domCmp(["firstonetv.eu"])) {
    a.readOnly("blocked", function () { });
    a.readOnly("adFuckBlock", function () { });
}
if (a.domCmp(["whosampled.com"])) {
    a.readOnly("showAdBlockerOverlay", function () { });
}
if (a.domCmp(["pornhub.com", "redtube.com", "youporn.com", "tube8.com", "pornmd.com",
"thumbzilla.com", "xtube.com", "peeperz.com"])) {
    a.win.open = function (arg) {
        if (arg.includes(a.dom)) {
            a.win.location.href = arg;
        }
    };
}
if (a.domCmp(["pastebin.com"])) {
    a.readOnly("abdd", "");
}
if (a.domCmp(["debridnet.com"])) {
    a.noAccess("_pop");
}
if (a.domCmp(["xnxx.com"])) {
    a.cookie("wpn-popupunder", "1");
    a.readOnly("openpop", function () { });
}
if (a.domCmp(["sidereel.com"])) {
    a.protectFunc();
    a.filter("setTimeout", /function \_0x[a-z0-9]{4,8}\(/);
}
if (a.domCmp(["burning-feed.com"])) {
    a.readOnly("ads_enable", function () { });
}
if (a.domCmp(["comicbook.com"])) {
    a.noAccess("stop");
}
if (a.domCmp(["ghame.ru"])) {
    a.$("<p class='adsbygoogle' style='display:none;'>hi</p>").prependTo("html");
}
if (a.domCmp(["thevideo.me"])) {
    a.win.open = function () { };
}
a.generic();
