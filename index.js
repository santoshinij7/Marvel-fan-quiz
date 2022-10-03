var readlineSync = require("readline-sync");

var score = 0;

function welcome() {
 var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+ userName +"!"+ " Are you a Marvel Fan ?");
}

welcome();
console.log("Let's play some quiz, here we go with our first question")
console.log("-------------------------------------")

function checkAnswers(questions) {
  for (var i = 0; i < questionsList.length; i++) {
    var userAnswer = readlineSync.question(questions[i].question);
    if (userAnswer == questionsList[i].answer) {
      score++;
      console.log("welldone! go for next");
      console.log("--------------------");

      } else {
      console.log(" bro! Try harder");
      console.log("--------------------");

    }
  }
}

// Objects of questions
var q1 = {
  question: "How many Infinity stones are there ? ",
  answer: 6
};

var q2 = {
  question: "Where is Captain America from ? ",
  answer: "brooklyn"
};

var q3 = {
  question: "What type of doctor is Doctor strange ? ",
  answer: "neurosurgeon"
};

var q4 = {
  question: "Tony Stark is known for ? ",
  answer: "iron man"
};

var q5 = {
  question: "Who was able to pick up Thor's Hammer in Endgame ? ",
  answer: "captain america"
};

//questionNewList
var q6 = {
  question: "Who did The Winter Soldier take shelter with during Infinity War ? ",
  answer: "black panther"
};

var q7 = {
  question: "In the first Avengers movie, how many avengers do we actually see ? ",
  answer: 6
};

var q8 = {
  question: "In Avengers Endgame, who kills Thanos in the first half of the movie ? ",
  answer: "Thor"
};

// Array of questions
var questionsList = [q1, q2, q3, q4, q5];
checkAnswers(questionsList);
var questionsNewList = [q6,q7,q8];
checkAnswers(questionsNewList);

if (score == questionsList.length) {
  console.log("Your score is: " + score + "/" + questionsList.length);
  console.log("Congratulations! You've advanced to next level.");
  console.log("--------------------")

  var score = 0;
  checkAnswers(questionsNewList);
  var totalQuestions = questionsList.length + questionsNewList.length;
  var finalScore = questionsList.length + score;
  console.log("Your score is: " + finalScore + "/" + totalQuestions);

} else {
  console.log("Your score is: " + score + "/" + questionsList.length);
}