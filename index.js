// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanstdevpn=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),r.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function N(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,c,f,l,s,p,g,d,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,N(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!N(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+j(y):j(y)+p)),c+=n.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var V,$=Object.prototype,F=$.toString,P=$.__defineGetter__,C=$.__defineSetter__,I=$.__lookupGetter__,R=$.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(I.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var q=V;function B(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L=Object,G=/./;function M(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";z=W()?function(r){var e,t,n,i,o;if(null==r)return U.call(r);t=r[J],o=J,e=null!=(i=r)&&X.call(i,o);try{r[J]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[J]=t:delete r[J],n}:function(r){return U.call(r)};var H=z,K=Boolean,Q=Boolean.prototype.toString;var Y=W();function rr(r){return"object"==typeof r&&(r instanceof K||(Y?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function er(r){return M(r)||rr(r)}B(er,"isPrimitive",M),B(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,ir="object"==typeof global?global:null,or="object"==typeof globalThis?globalThis:null;var ar=function(r){if(arguments.length){if(!M(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(tr)return tr;if(nr)return nr;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var lr,sr=/^\s*function\s*([^(]*)/i;B(fr,"REGEXP",sr),lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var pr=lr;function gr(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr);function yr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(gr,"isObjectLikeArray",dr);var hr="function"==typeof G||"object"==typeof ur||"function"==typeof cr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};var br,vr,wr=Object.getPrototypeOf;vr=Object.getPrototypeOf,br="function"===hr(vr)?wr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var mr=br;function jr(r){return null==r?null:(r=L(r),mr(r))}function _r(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===H(r))return!0;r=jr(r)}return!1}function Er(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return _r(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function Nr(r){return r!=r}var Sr=Math.floor,xr=128;function kr(r,e,t,n){var i,o,a,c,u,f,l,s,p,g,d,y,h;if(r<=0)return 0;if(1===r||0===t)return e[n];if(i=n,r<8){for(d=0,h=0;h<r;h++)d+=e[i],i+=t;return d}if(r<=xr){for(o=e[i],a=e[i+t],c=e[i+2*t],u=e[i+3*t],f=e[i+4*t],l=e[i+5*t],s=e[i+6*t],p=e[i+7*t],i+=8*t,g=r%8,h=8;h<r-g;h+=8)o+=e[i],a+=e[i+t],c+=e[i+2*t],u+=e[i+3*t],f+=e[i+4*t],l+=e[i+5*t],s+=e[i+6*t],p+=e[i+7*t],i+=8*t;for(d=o+a+(c+u)+(f+l+(s+p));h<r;h++)d+=e[i],i+=t;return d}return y=Sr(r/2),kr(y-=y%8,e,t,i)+kr(r-y,e,t,i+y*t)}function Or(r,e,t){var n,i,o;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,o=0;o<r;o++)i+=e[n],n+=t;return i}return kr(r,e,t,n)}B(Or,"ndarray",kr);var Tr,Ar=Er((0,r.join)(__dirname,"./native.js")),Vr=Tr=_r(Ar)?Or:Ar;const{ndarray:$r}=Tr;function Fr(r,e,t,n,i,o){var a,c,u,f,l,s,p,g,d;if(c=n<0?(1-r)*n:0,u=o<0?-o:0,r<=0)return i[u]=NaN,i[u+o]=NaN,i;if(g=r-e,1===r||0===n)return i[u]=t[c],i[u+o]=g<=0?NaN:0,i;if(Nr(a=Vr(r,t,n)/r))return i[u]=NaN,i[u+o]=NaN,i;for(f=0,l=0,d=0;d<r;d++)f+=(s=t[c]-a)*s,l+=s,c+=n;return p=l/r,i[u]=a+p,i[u+o]=g<=0?NaN:f/g-p*(l/g),i}B(Fr,"ndarray",(function(r,e,t,n,i,o,a,c){var u,f,l,s,p,g,d,y,h;if(f=i,l=c,r<=0)return o[l]=NaN,o[l+a]=NaN,o;if(y=r-e,1===r||0===n)return o[l]=t[f],o[l+a]=y<=0?NaN:0,o;if(Nr(u=$r(r,t,n,i)/r))return o[l]=NaN,o[l+a]=NaN,o;for(s=0,p=0,h=0;h<r;h++)s+=(g=t[f]-u)*g,p+=g,f+=n;return d=p/r,o[l]=u+d,o[l+a]=y<=0?NaN:s/y-d*(p/y),o}));var Pr,Cr=Er((0,r.join)(__dirname,"./native.js")),Ir=Pr=_r(Cr)?Fr:Cr;const{ndarray:Rr}=Pr;var qr=Math.sqrt;function Br(r,e,t,n,i,o){var a;return Ir(r,e,t,n,i,o),i[a=o<0?0:o]=qr(i[a]),i}return B(Br,"ndarray",(function(r,e,t,n,i,o,a,c){var u=c+a;return Rr(r,e,t,n,i,o,a,c),o[u]=qr(o[u]),o})),Br}));
//# sourceMappingURL=index.js.map