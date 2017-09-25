
var correct = 0;
var count = 60;

setInterval(timer,1000);
function timer(){
  count--;
  if (count <= 0) {
    clearInterval(counter);
    return;
  }

  $("#timer").html("Time remaining: " + "00:" + count + " secs");
}


function checkCorrectAnswers(){
  console.log("start to check");
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;


      if (question1 == "Snoop Dogg") {
      correct++;
  }
      if (question2 == "NWA") {
      correct++;  
  }
      if (question3 == "Reasonable Doubt") {
      correct++;
  }
      if (question4 == "Ice Cube") {
      correct++;
  }
      if (question5 == "Cardi B") {
      correct++;
  }
      if (question6 == "Wale") {
      correct++;  
  }
      if (question7 == "Jazzy Jeff and Will Smith") {
      correct++;
  }
      if (question8 == "Nas") {
      correct++;
  }
      if (question9 == "Migos") {
      correct++;
  }
      if(question10 == "Rick Ross") {
      correct++;
  }

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
}

console.log("You got " + correct + "correct.");