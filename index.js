const userInfo = require("./information");

let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I'm ${userInfo.name} from ${userInfo.campus}`,
    e: "oO",
    T: "U "
}));