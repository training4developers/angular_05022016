"use strict";

// 0 is falsy
// false is falsy
// "" is falsy
// undefined is falsy
// null is falsy
// NaN is falsy

var t = 1 || "test";

function myFunc(someValue) {
	var y = someValue || "default value";

}


console.log(t);
