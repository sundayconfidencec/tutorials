
const OS  = require("os");


const user = OS.userInfo();
console.log(user);

const currentOS = {
    name: OS.type(),
    release: OS.release(),
    totalmem: OS.totalmem(),
    freemem: OS.freemem()
}
console.log(currentOS);
console.log(`the system uptime is ${OS.uptime()} seconds`);