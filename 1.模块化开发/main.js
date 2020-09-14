var aModule = require("./a")
var bModule = require("./b")

var func = bModule;
var num = aModule.a;
var res = func(aModule.a);

console.log(res);

var fs = require('fs')
console.log(fs);