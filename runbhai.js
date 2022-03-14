const intrepreter = require("./intrepreter");

var thisisbhai = "";
try {
  thisisbhai = require("fs").readFileSync("./main.bhai", "utf8");
} catch (error) {
  // bhai ko idhaar likh do (error reason: maybe not a node process | maybe file not found)
  thisisbhai = ``;
}

intrepreter(thisisbhai);

// Author: Tuhin Kanti Pal <me@thetuhin.com>
// this is just for fun, main stuff is done by @aniketsingh0104 and @ristri at https://bhailang.js.org/
