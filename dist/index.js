"use strict";var q=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var m=q(function(D,u){
var f=require('@stdlib/stats-base-dmeanvarpn/dist'),R=require('@stdlib/math-base-special-sqrt/dist');function _(i,r,v,s,n,e){var a;return f(i,r,v,s,n,e),e<0?a=0:a=e,n[a]=R(n[a]),n}u.exports=_
});var y=q(function(F,c){
var E=require('@stdlib/stats-base-dmeanvarpn/dist').ndarray,b=require('@stdlib/math-base-special-sqrt/dist');function g(i,r,v,s,n,e,a,t){var p=t+a;return E(i,r,v,s,n,e,a,t),e[p]=b(e[p]),e}c.exports=g
});var j=q(function(G,x){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=m(),k=y();h(o,"ndarray",k);x.exports=o
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),d,l=z(w(__dirname,"./native.js"));A(l)?d=B:d=l;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
