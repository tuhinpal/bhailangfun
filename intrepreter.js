module.exports = function bhaiIntrepreter(thisisbhai) {
  try {
    thisisbhai = thisisbhai.trim();

    // chalo ab dekh lete hai bhai saccha hai ya nahi
    if (!(/\n|hi bhai/.test(thisisbhai) && /bye bhai|\n/.test(thisisbhai)))
      throw new Error("Ye ek saccha bhai nahi hai");

    // hi bhai & bye bhai ko remove kar do
    thisisbhai = thisisbhai.slice(7, -8);

    // bol bhai ko console.log() kar do
    thisisbhai = thisisbhai.replace(/bol bhai (.*);/g, `console.log($1);`);

    // bhai ye hai ko var kar do
    thisisbhai = thisisbhai.replace(/bhai ye hai (.*);/gi, `var $1;`);

    // agar bhai ko if kar do
    thisisbhai = thisisbhai.replace(/agar bhai (.*)/gi, `if $1`);

    // warna bhai ko else kar do
    thisisbhai = thisisbhai.replace(/warna bhai (.*)/gi, `else $1`);

    // jab tak bhai ko while kar do
    thisisbhai = thisisbhai.replace(/jab tak bhai (.*)/gi, `while $1`);

    // sahi ko true, galat ko false aur nalla ko null kar do
    // have to improve this
    thisisbhai = thisisbhai.replace(/sahi|galat|nalla/gi, (match) => {
      return match === "nalla" ? "null" : match === "sahi" ? "true" : "false";
    });

    // chalo ab run kar do
    var constractJS = `async function main() {${thisisbhai}}; main();`;
    eval(constractJS);
    return;
  } catch (error) {
    console.log(
      "Bhai mein dum nahi, here is the reason =>",
      error.message || error
    );
  }
};
