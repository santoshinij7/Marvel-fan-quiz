var readlineSync = require("readline-sync");
var score = 0;
console.log("Hello Boss!!");
console.log();

var userAnswer = readlineSync.question("Please type your name ");
console.log("WELCOME, " + userAnswer + " " + "jii 🙏");
console.log();

console.log("This is a Fun quiz about Marvel movies !! 😉");
console.log();

console.log("👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇")
console.log();

console.log("Let's START...");
console.log("")
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("well , That's Correct!");
    score = score + 1;
  } else {
    console.log("Oops! Try harder!")
  };
  console.log();
};

var myQues1 = {
  question: "1. How many Infinity stones are there ?  ",
  answer: "6"
};
var myQues2 = {
  question: "2. Where is Captain America from ?  ",
  answer: "brooklyn"
};
var myQues3 = {
  question: "3. Tony Stark is known for ?  ",
  answer: "iron man"
};
var myQues4 = {
  question: "4. Who was able to pick up Thor's Hammer in Endgame ?  ",
  answer: "captain america"
};
var myQues5 = {
  question: "5. In Avengers Endgame, who kills Thanos in the first half of the movie ?  ",
  answer: "thor"
};

var myQuiz = [myQues1, myQues2, myQues3, myQues4, myQues5]

for (var i = 0; i < myQuiz.length; i++) {
  var playQuiz = myQuiz[i];
  play(playQuiz.question, playQuiz.answer)
};

console.log("You scored " + score + " out of 5! ");
console.log();

var rating = {
  0: "You don't know at all!",
  1: "You should watch more, I guess",
  2: "You know little about MCU",
  3: "hmm..you are good at MCU",
  4: "Let's watch some movies together.",
  5: "Arey yaar❤️, you know everything!!!"
};

for (var i = 0; i < 1; i++) {
  console.log(rating[score])
};
