(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){

var func=require('custom_calculator');
global.result=function (o1,operator,o2){
	if(operator=="+")
  document.getElementById("display").innerHTML = "Result= "+func.add(o1,o2);   
  else if(operator=="-")
  document.getElementById("display").innerHTML = "Result= "+func.sub(o1,o2); 
if(operator=="*")
  document.getElementById("display").innerHTML = "Result= "+func.mul(o1,o2);   
  else if(operator=="/")
  document.getElementById("display").innerHTML = "Result= "+func.div(o1,o2);
}


}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"custom_calculator":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.div = exports.mul = void 0;

var _file = require("./file2");

var mul = _file.multiply;
exports.mul = mul;
var div = _file.divide;
exports.div = div;

exports.add = function (o1, o2) {
  return Number(o1) + Number(o2);
};

exports.sub = function (o1, o2) {
  return Number(o1) - Number(o2);
};

},{"./file2":3}],3:[function(require,module,exports){

exports.multiply=function(o1,o2){
	return Number(o1)*Number(o2);
}
exports.divide=function(o1,o2){
	return Number(o1)/Number(o2);
	}

},{}]},{},[1]);
