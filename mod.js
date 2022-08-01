// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===b(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(y(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function p(){var r=Array.prototype.slice.call(arguments,0);return s(y(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function y(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var b="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},v=/./;function d(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return j&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var w,h="function"==typeof Symbol?Symbol.toStringTag:"";w=m()?function(r){var t,n,e,o,u;if(null==r)return _.call(r);n=r[h],u=h,t=null!=(o=r)&&g.call(o,u);try{r[h]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[h]=n:delete r[h],e}:function(r){return _.call(r)};var N=w,O=Boolean.prototype.toString;var E=m();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===N(r)))}function A(r){return d(r)||S(r)}function P(){return new Function("return this;")()}l(A,"isPrimitive",d),l(A,"isObject",S);var B="object"==typeof self?self:null,T="object"==typeof window?window:null,k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof k?k:null;var M=function(r){if(arguments.length){if(!d(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(B)return B;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),V=M.document&&M.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===N(r)};var q=G;function I(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!q(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(I);function R(r){var t,n,e,o;if(("Object"===(n=N(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=L.exec(e.toString()))return t[1]}return I(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(I,"isObjectLikeArray",J);var U="function"==typeof v||"object"==typeof C||"function"==typeof V?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,X="function"===U(z)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===N(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var H=X;function K(r){return null==r?null:(r=Object(r),H(r))}function Q(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===N(r))return!0;r=K(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function W(r){return r!=r}var Y,Z=Math.floor;function $(r,t,n,e){var o,u,i,a,f,c,l,s,p,y,b,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)b+=t[o],o+=n;return b}if(r<=128){for(u=t[o],i=t[o+n],a=t[o+2*n],f=t[o+3*n],c=t[o+4*n],l=t[o+5*n],s=t[o+6*n],p=t[o+7*n],o+=8*n,y=r%8,d=8;d<r-y;d+=8)u+=t[o],i+=t[o+n],a+=t[o+2*n],f+=t[o+3*n],c+=t[o+4*n],l+=t[o+5*n],s+=t[o+6*n],p+=t[o+7*n],o+=8*n;for(b=u+i+(a+f)+(c+l+(s+p));d<r;d++)b+=t[o],o+=n;return b}return v=Z(r/2),$(v-=v%8,t,n,o)+$(r-v,t,n,o+v*n)}function rr(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o+=t[e],e+=n;return o}return $(r,t,n,e)}l(rr,"ndarray",$);var tr=Q(p("/home/runner/work/stats-base-dmeanstdevpn/stats-base-dmeanstdevpn/node_modules/@stdlib/blas-ext-base-dsumpw/lib","./native.js")),nr=Y=tr instanceof Error?rr:tr;const{ndarray:er}=Y;function or(r,t,n,e,o,u){var i,a,f,c,l,s,p,y,b;if(a=e<0?(1-r)*e:0,f=u<0?-u:0,r<=0)return o[f]=NaN,o[f+u]=NaN,o;if(y=r-t,1===r||0===e)return o[f]=n[a],o[f+u]=y<=0?NaN:0,o;if(W(i=nr(r,n,e)/r))return o[f]=NaN,o[f+u]=NaN,o;for(c=0,l=0,b=0;b<r;b++)c+=(s=n[a]-i)*s,l+=s,a+=e;return p=l/r,o[f]=i+p,o[f+u]=y<=0?NaN:c/y-p*(l/y),o}var ur;l(or,"ndarray",(function(r,t,n,e,o,u,i,a){var f,c,l,s,p,y,b,v,d;if(c=o,l=a,r<=0)return u[l]=NaN,u[l+i]=NaN,u;if(v=r-t,1===r||0===e)return u[l]=n[c],u[l+i]=v<=0?NaN:0,u;if(W(f=er(r,n,e,o)/r))return u[l]=NaN,u[l+i]=NaN,u;for(s=0,p=0,d=0;d<r;d++)s+=(y=n[c]-f)*y,p+=y,c+=e;return b=p/r,u[l]=f+b,u[l+i]=v<=0?NaN:s/v-b*(p/v),u}));var ir=Q(p("/home/runner/work/stats-base-dmeanstdevpn/stats-base-dmeanstdevpn/node_modules/@stdlib/stats-base-dmeanvarpn/lib","./native.js")),ar=ur=ir instanceof Error?or:ir;const{ndarray:fr}=ur;var cr=Math.sqrt;function lr(r,t,n,e,o,u){var i;return ar(r,t,n,e,o,u),o[i=u<0?0:u]=cr(o[i]),o}function sr(r,t,n,e,o,u,i,a){var f=a+i;return fr(r,t,n,e,o,u,i,a),u[f]=cr(u[f]),u}l(lr,"ndarray",sr);export{lr as default,sr as ndarray};
//# sourceMappingURL=mod.js.map
