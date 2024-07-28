// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,y,"$1e"),n=l.call(n,v,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,s,f,l,p,g,d,b;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),c+=n.arg||"",s+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var T,P=Object.prototype,V=P.toString,F=P.__defineGetter__,$=P.__defineSetter__,C=P.__lookupGetter__,R=P.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var I=T;function M(r,e,t){I(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function L(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var q=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,G=function(r){return q.exec(r).slice(1)};function Z(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=L(Q(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function z(r){var e=W(r),t="/"===Y(r,-1);return(r=L(Q(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function W(r){return"/"===r.charAt(0)}function U(){return z(Q(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function X(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=Z(r).substr(1),e=Z(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(i.slice(a))).join("/")}function D(r){var e=G(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function J(r,e){var t=G(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function H(r){return G(r)[3]}var K={extname:H,basename:J,dirname:D,sep:"/",delimiter:":",relative:X,join:U,isAbsolute:W,normalize:z,resolve:Z};function Q(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var Y="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},rr=B(Object.freeze({__proto__:null,basename:J,default:K,delimiter:":",dirname:D,extname:H,isAbsolute:W,join:U,normalize:z,relative:X,resolve:Z,sep:"/"}));var er=Object,tr=/./;function nr(r){return"boolean"==typeof r}var ir="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function or(){return ir&&"symbol"==typeof Symbol.toStringTag}var ar=Object.prototype.toString;var ur=Object.prototype.hasOwnProperty;var cr,sr="function"==typeof Symbol?Symbol:void 0,fr="function"==typeof sr?sr.toStringTag:"";cr=or()?function(r){var e,t,n,i,o;if(null==r)return ar.call(r);t=r[fr],o=fr,e=null!=(i=r)&&ur.call(i,o);try{r[fr]=void 0}catch(e){return ar.call(r)}return n=ar.call(r),e?r[fr]=t:delete r[fr],n}:function(r){return ar.call(r)};var lr=cr,pr=Boolean,gr=Boolean.prototype.toString;var dr=or();function br(r){return"object"==typeof r&&(r instanceof pr||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===lr(r)))}function hr(r){return nr(r)||br(r)}M(hr,"isPrimitive",nr),M(hr,"isObject",br);var vr="object"==typeof self?self:null,yr="object"==typeof window?window:null,wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},mr="object"==typeof wr?wr:null,jr="object"==typeof globalThis?globalThis:null;var _r=function(r){if(arguments.length){if(!nr(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(jr)return jr;if(vr)return vr;if(yr)return yr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Er=_r.document&&_r.document.childNodes,Nr=Int8Array;function Sr(){return/^\s*function\s*([^(]*)/i}var Or,kr=/^\s*function\s*([^(]*)/i;M(Sr,"REGEXP",kr),Or=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)};var xr=Or;function Ar(r){return null!==r&&"object"==typeof r}var Tr=function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!xr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ar);function Pr(r){var e,t,n,i;if(("Object"===(t=lr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=kr.exec(n.toString()))return e[1]}return Ar(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(Ar,"isObjectLikeArray",Tr);var Vr="function"==typeof tr||"object"==typeof Nr||"function"==typeof Er?function(r){return Pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Pr(r).toLowerCase():e};var Fr,$r,Cr=Object.getPrototypeOf;$r=Object.getPrototypeOf,Fr="function"===Vr($r)?Cr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===lr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Rr=Fr;function Ir(r){return null==r?null:(r=er(r),Rr(r))}function Mr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===lr(r))return!0;r=Ir(r)}return!1}function Br(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Mr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function Lr(r){return r!=r}var qr=Math.floor,Gr=128;function Zr(r,e,t,n){var i,o,a,u,c,s,f,l,p,g,d,b,h;if(r<=0)return 0;if(1===r||0===t)return e[n];if(i=n,r<8){for(d=0,h=0;h<r;h++)d+=e[i],i+=t;return d}if(r<=Gr){for(o=e[i],a=e[i+t],u=e[i+2*t],c=e[i+3*t],s=e[i+4*t],f=e[i+5*t],l=e[i+6*t],p=e[i+7*t],i+=8*t,g=r%8,h=8;h<r-g;h+=8)o+=e[i],a+=e[i+t],u+=e[i+2*t],c+=e[i+3*t],s+=e[i+4*t],f+=e[i+5*t],l+=e[i+6*t],p+=e[i+7*t],i+=8*t;for(d=o+a+(u+c)+(s+f+(l+p));h<r;h++)d+=e[i],i+=t;return d}return b=qr(r/2),Zr(b-=b%8,e,t,i)+Zr(r-b,e,t,i+b*t)}function zr(r,e,t){var n,i,o;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,o=0;o<r;o++)i+=e[n],n+=t;return i}return Zr(r,e,t,n)}M(zr,"ndarray",Zr);var Wr,Ur=Br((0,rr.join)("/home/runner/work/stats-base-dmeanstdevpn/stats-base-dmeanstdevpn/node_modules/@stdlib/blas-ext-base-dsumpw/lib","./native.js")),Xr=Wr=Mr(Ur)?zr:Ur;const{ndarray:Dr}=Wr;function Jr(r,e,t,n,i,o){var a,u,c,s,f,l,p,g,d;if(u=n<0?(1-r)*n:0,c=o<0?-o:0,r<=0)return i[c]=NaN,i[c+o]=NaN,i;if(g=r-e,1===r||0===n)return i[c]=t[u],i[c+o]=g<=0?NaN:0,i;if(Lr(a=Xr(r,t,n)/r))return i[c]=NaN,i[c+o]=NaN,i;for(s=0,f=0,d=0;d<r;d++)s+=(l=t[u]-a)*l,f+=l,u+=n;return p=f/r,i[c]=a+p,i[c+o]=g<=0?NaN:s/g-p*(f/g),i}M(Jr,"ndarray",(function(r,e,t,n,i,o,a,u){var c,s,f,l,p,g,d,b,h;if(s=i,f=u,r<=0)return o[f]=NaN,o[f+a]=NaN,o;if(b=r-e,1===r||0===n)return o[f]=t[s],o[f+a]=b<=0?NaN:0,o;if(Lr(c=Dr(r,t,n,i)/r))return o[f]=NaN,o[f+a]=NaN,o;for(l=0,p=0,h=0;h<r;h++)l+=(g=t[s]-c)*g,p+=g,s+=n;return d=p/r,o[f]=c+d,o[f+a]=b<=0?NaN:l/b-d*(p/b),o}));var Hr,Kr=Br((0,rr.join)("/home/runner/work/stats-base-dmeanstdevpn/stats-base-dmeanstdevpn/node_modules/@stdlib/stats-base-dmeanvarpn/lib","./native.js")),Qr=Hr=Mr(Kr)?Jr:Kr;const{ndarray:Yr}=Hr;var re=Math.sqrt;function ee(r,e,t,n,i,o){var a;return Qr(r,e,t,n,i,o),i[a=o<0?0:o]=re(i[a]),i}function te(r,e,t,n,i,o,a,u){var c=u+a;return Yr(r,e,t,n,i,o,a,u),o[c]=re(o[c]),o}M(ee,"ndarray",te);export{ee as default,te as ndarray};
//# sourceMappingURL=mod.js.map