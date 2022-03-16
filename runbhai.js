import interpreter from "./interpreter.js";

var thisisbhai = "";
try {
  const fs = await import("fs");
  thisisbhai = fs.readFileSync("./main.bhai", "utf8");
} catch (error) {
  // bhai ko idhaar likh do (error reason: maybe not a node process | maybe file not found)
  thisisbhai = ``;
}

interpreter(thisisbhai);

// Author: Tuhin Kanti Pal <me@thetuhin.com>
// this is just for fun, main stuff is done by @aniketsingh0104 and @ristri at https://bhailang.js.org/
