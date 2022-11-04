// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanstdevpn=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function p(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,b=function(r){return y.exec(r).slice(1)};function v(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=p(O(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function d(r){var t=m(r),e="/"===E(r,-1);return(r=p(O(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function m(r){return"/"===r.charAt(0)}function g(){var r=Array.prototype.slice.call(arguments,0);return d(O(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function j(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=v(r).substr(1),t=v(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),i=Math.min(n.length,o.length),u=i,a=0;a<i;a++)if(n[a]!==o[a]){u=a;break}var f=[];for(a=u;a<n.length;a++)f.push("..");return(f=f.concat(o.slice(u))).join("/")}function h(r){var t=b(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function _(r,t){var e=b(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function w(r){return b(r)[3]}var N={extname:w,basename:_,dirname:h,sep:"/",delimiter:":",relative:j,join:g,isAbsolute:m,normalize:d,resolve:v};function O(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var E="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},A=s(Object.freeze({__proto__:null,resolve:v,normalize:d,isAbsolute:m,join:g,relative:j,sep:"/",delimiter:":",dirname:h,basename:_,extname:w,default:N}));var S=/./;function P(r){return"boolean"==typeof r}var T="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function x(){return T&&"symbol"==typeof Symbol.toStringTag}var k=Object.prototype.toString;var B=Object.prototype.hasOwnProperty;var M,q="function"==typeof Symbol?Symbol.toStringTag:"";M=x()?function(r){var t,e,n,o,i;if(null==r)return k.call(r);e=r[q],i=q,t=null!=(o=r)&&B.call(o,i);try{r[q]=void 0}catch(t){return k.call(r)}return n=k.call(r),t?r[q]=e:delete r[q],n}:function(r){return k.call(r)};var C=M,V=Boolean.prototype.toString;var z=x();function F(r){return"object"==typeof r&&(r instanceof Boolean||(z?function(r){try{return V.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===C(r)))}function G(r){return P(r)||F(r)}function L(){return new Function("return this;")()}l(G,"isPrimitive",P),l(G,"isObject",F);var R="object"==typeof self?self:null,D="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof I?I:null;var U=function(r){if(arguments.length){if(!P(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return L()}if(R)return R;if(D)return D;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),X=U.document&&U.document.childNodes,$=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K,Q=/^\s*function\s*([^(]*)/i;l(H,"REGEXP",Q),K=Array.isArray?Array.isArray:function(r){return"[object Array]"===C(r)};var W=K;function Y(r){return null!==r&&"object"==typeof r}var Z=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!W(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Y);function rr(r){var t,e,n,o;if(("Object"===(e=C(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Q.exec(n.toString()))return t[1]}return Y(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(Y,"isObjectLikeArray",Z);var tr="function"==typeof S||"object"==typeof $||"function"==typeof X?function(r){return rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?rr(r).toLowerCase():t};var er,nr,or=Object.getPrototypeOf;nr=Object.getPrototypeOf,er="function"===tr(nr)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===C(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ir=er;function ur(r){return null==r?null:(r=Object(r),ir(r))}function ar(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===C(r))return!0;r=ur(r)}return!1}function fr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return ar(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function cr(r){return r!=r}var lr=Math.floor;function sr(r,t,e,n){var o,i,u,a,f,c,l,s,p,y,b,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)b+=t[o],o+=e;return b}if(r<=128){for(i=t[o],u=t[o+e],a=t[o+2*e],f=t[o+3*e],c=t[o+4*e],l=t[o+5*e],s=t[o+6*e],p=t[o+7*e],o+=8*e,y=r%8,d=8;d<r-y;d+=8)i+=t[o],u+=t[o+e],a+=t[o+2*e],f+=t[o+3*e],c+=t[o+4*e],l+=t[o+5*e],s+=t[o+6*e],p+=t[o+7*e],o+=8*e;for(b=i+u+(a+f)+(c+l+(s+p));d<r;d++)b+=t[o],o+=e;return b}return v=lr(r/2),sr(v-=v%8,t,e,o)+sr(r-v,t,e,o+v*e)}function pr(r,t,e){var n,o,i;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,i=0;i<r;i++)o+=t[n],n+=e;return o}return sr(r,t,e,n)}l(pr,"ndarray",sr);var yr,br=fr((0,A.join)("/home/runner/work/stats-base-dmeanstdevpn/stats-base-dmeanstdevpn/node_modules/@stdlib/blas-ext-base-dsumpw/lib","./native.js")),vr=yr=ar(br)?pr:br;const{ndarray:dr}=yr;function mr(r,t,e,n,o,i){var u,a,f,c,l,s,p,y,b;if(a=n<0?(1-r)*n:0,f=i<0?-i:0,r<=0)return o[f]=NaN,o[f+i]=NaN,o;if(y=r-t,1===r||0===n)return o[f]=e[a],o[f+i]=y<=0?NaN:0,o;if(cr(u=vr(r,e,n)/r))return o[f]=NaN,o[f+i]=NaN,o;for(c=0,l=0,b=0;b<r;b++)c+=(s=e[a]-u)*s,l+=s,a+=n;return p=l/r,o[f]=u+p,o[f+i]=y<=0?NaN:c/y-p*(l/y),o}l(mr,"ndarray",(function(r,t,e,n,o,i,u,a){var f,c,l,s,p,y,b,v,d;if(c=o,l=a,r<=0)return i[l]=NaN,i[l+u]=NaN,i;if(v=r-t,1===r||0===n)return i[l]=e[c],i[l+u]=v<=0?NaN:0,i;if(cr(f=dr(r,e,n,o)/r))return i[l]=NaN,i[l+u]=NaN,i;for(s=0,p=0,d=0;d<r;d++)s+=(y=e[c]-f)*y,p+=y,c+=n;return b=p/r,i[l]=f+b,i[l+u]=v<=0?NaN:s/v-b*(p/v),i}));var gr,jr=fr((0,A.join)("/home/runner/work/stats-base-dmeanstdevpn/stats-base-dmeanstdevpn/node_modules/@stdlib/stats-base-dmeanvarpn/lib","./native.js")),hr=gr=jr instanceof Error?mr:jr;const{ndarray:_r}=gr;var wr=Math.sqrt;function Nr(r,t,e,n,o,i){var u;return hr(r,t,e,n,o,i),o[u=i<0?0:i]=wr(o[u]),o}return l(Nr,"ndarray",(function(r,t,e,n,o,i,u,a){var f=a+u;return _r(r,t,e,n,o,i,u,a),i[f]=wr(i[f]),i})),Nr}));
//# sourceMappingURL=index.js.map
