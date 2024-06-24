"use strict";
/* Generic Interface */
var _a, _b;
function getResult(url) {
    return { data: null };
}
let userResult = getResult("http://myapp.com/user");
let productResult = getResult("http://myapp.com/product");
console.log((_a = userResult.data) === null || _a === void 0 ? void 0 : _a.name);
console.log((_b = productResult.data) === null || _b === void 0 ? void 0 : _b.title);
