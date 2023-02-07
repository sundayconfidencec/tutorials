
const path = require("path");

console.log(path.sep);


const files = path.join("/content", "subfolder", "test.txt");


console.log(files);

const base = path.basename(files);

console.log(base);

const absolute = path.resolve(__dirname,"cotent", "subfolder", "test.txt");
console.log(absolute);