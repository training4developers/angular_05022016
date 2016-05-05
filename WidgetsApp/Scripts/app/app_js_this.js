"use strict";

function doIt(a,b) {
	console.dir(this);
	console.log(a, b);
}

var o = {
	id: 2,
	doIt: doIt
};

doIt();
window.doIt();
o.doIt();
console.log(doIt === o.doIt);

o.doIt.call({ id: 4 }, 1, 2);
o.doIt.apply({ id: 4 }, [1, 2]);

var fn = o.doIt.bind({ id: 5 }, 1);
fn(5);

