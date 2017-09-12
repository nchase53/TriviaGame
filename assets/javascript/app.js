function timer(){
count--;
if (count <= 0) {
 clearInterval(counter);
 return;
}

 $("#timer").html("Time remaining: " + "00:" + count + " secs");
}


function check(){
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question1.value;
  var question3 = document.quiz.question1.value;
  var question4 = document.quiz.question1.value;
  var question5 = document.quiz.question1.value;
  var question6 = document.quiz.question1.value;
  var question7 = document.quiz.question1.value;
  var question8 = document.quiz.question1.value;
  var question9 = document.quiz.question1.value;
  var question10 = document.quiz.question1.value;
  var correct = 0;

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
      corrct++;
  }
      if (question9 == "Migos") {
      correct++;
  }
      if(question10 == "Rick Ross") {
      correct++;
  }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct")innerHTML = "You got " + correct + "correct.";
}

var currentquestion = 0;
var correctAnswers = 0;

