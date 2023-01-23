function isJavaScriptFile(str) {

    let s = str.includes(".js");
    return s;



}
let fileName = "jsFileCheaker.js";
let val = isJavaScriptFile(fileName);
console.log(val);
