// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanstdevpn=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function y(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var _,m="function"==typeof Symbol?Symbol.toStringTag:"";_=v()?function(r){var t,e,n,o,u;if(null==r)return d.call(r);e=r[m],u=m,t=null!=(o=r)&&j.call(o,u);try{r[m]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[m]=e:delete r[m],n}:function(r){return d.call(r)};var g=_,w=Boolean.prototype.toString;var h=v();function N(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function O(r){return s(r)||N(r)}function E(){return new Function("return this;")()}y(O,"isPrimitive",s),y(O,"isObject",N);var S="object"==typeof self?self:null,P="object"==typeof window?window:null,A="object"==typeof global?global:null;var T=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(S)return S;if(P)return P;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),q=T.document&&T.document.childNodes,B=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var k,C=/^\s*function\s*([^(]*)/i;y(x,"REGEXP",C),k=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var M=k;function V(r){return null!==r&&"object"==typeof r}var F=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!M(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(V);function G(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(V,"isObjectLikeArray",F);var L="function"==typeof p||"object"==typeof B||"function"==typeof q?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};var R,$,D=Object.getPrototypeOf;$=Object.getPrototypeOf,R="function"===L($)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var I=R;function J(r){return null==r?null:(r=Object(r),I(r))}function U(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===g(r))return!0;r=J(r)}return!1}function X(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return U(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function z(r){return r!=r}var H=Math.floor;function K(r,t,e,n){var o,u,i,a,f,c,l,y,p,s,b,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)b+=t[o],o+=e;return b}if(r<=128){for(u=t[o],i=t[o+e],a=t[o+2*e],f=t[o+3*e],c=t[o+4*e],l=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,s=r%8,d=8;d<r-s;d+=8)u+=t[o],i+=t[o+e],a+=t[o+2*e],f+=t[o+3*e],c+=t[o+4*e],l+=t[o+5*e],y+=t[o+6*e],p+=t[o+7*e],o+=8*e;for(b=u+i+(a+f)+(c+l+(y+p));d<r;d++)b+=t[o],o+=e;return b}return v=H(r/2),K(v-=v%8,t,e,o)+K(r-v,t,e,o+v*e)}function Q(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o+=t[n],n+=e;return o}return K(r,t,e,n)}y(Q,"ndarray",K);var W,Y=X((0,r.join)(__dirname,"./native.js")),Z=W=U(Y)?Q:Y;const{ndarray:rr}=W;function tr(r,t,e,n,o,u){var i,a,f,c,l,y,p,s,b;if(a=n<0?(1-r)*n:0,f=u<0?-u:0,r<=0)return o[f]=NaN,o[f+u]=NaN,o;if(s=r-t,1===r||0===n)return o[f]=e[a],o[f+u]=s<=0?NaN:0,o;if(z(i=Z(r,e,n)/r))return o[f]=NaN,o[f+u]=NaN,o;for(c=0,l=0,b=0;b<r;b++)c+=(y=e[a]-i)*y,l+=y,a+=n;return p=l/r,o[f]=i+p,o[f+u]=s<=0?NaN:c/s-p*(l/s),o}y(tr,"ndarray",(function(r,t,e,n,o,u,i,a){var f,c,l,y,p,s,b,v,d;if(c=o,l=a,r<=0)return u[l]=NaN,u[l+i]=NaN,u;if(v=r-t,1===r||0===n)return u[l]=e[c],u[l+i]=v<=0?NaN:0,u;if(z(f=rr(r,e,n,o)/r))return u[l]=NaN,u[l+i]=NaN,u;for(y=0,p=0,d=0;d<r;d++)y+=(s=e[c]-f)*s,p+=s,c+=n;return b=p/r,u[l]=f+b,u[l+i]=v<=0?NaN:y/v-b*(p/v),u}));var er,nr=X((0,r.join)(__dirname,"./native.js")),or=er=nr instanceof Error?tr:nr;const{ndarray:ur}=er;var ir=Math.sqrt;function ar(r,t,e,n,o,u){var i;return or(r,t,e,n,o,u),o[i=u<0?0:u]=ir(o[i]),o}return y(ar,"ndarray",(function(r,t,e,n,o,u,i,a){var f=a+i;return ur(r,t,e,n,o,u,i,a),u[f]=ir(u[f]),u})),ar}));
//# sourceMappingURL=index.js.map