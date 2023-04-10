console.info("start");
var a = true;

function learning() {
  return "I'm learning...";
}
function playGame(game) {
  //console.log(this);
  return `i'm playing ${game}. my name is ${this.name}`;
}

var Var1 = {
  age: 33,
  name: "Var1",
  skills: ["html", "css", `js`],
  learn: learning,
  play: playGame,
};
var Var2 = {
  age: 33,
  name: "Var2",
  skills: ["html", "css", `js`],
  learn: learning,
  play: playGame,
};
console.log(Var1.skills);
var l = Var1.learn();
console.warn(l);

console.warn(Var1.play("chess"));
console.warn(Var2.play("rubik"));

console.info(playGame.call(Var2, "HIDE & SEEK"));
console.info(playGame.apply(Var1, ["HIDE & SEEK"]));
console.info(playGame("HIDE & SEEK"));
