var questions = ["What college did Kobe Bryant go to?","What year was Kobe Bryant drafted?","What country did Kobe Bryant live in when he was little?","How many Finals MVPs has Kobe been awarded?","What was the highest score Kobe has ever gotten in a single game?","How many points did Mr. Bryant score in his final game?","Is Kobe the GOAT?"]
var intervalId;

function showQuestions() {
	var count = 60;
	intervalId = setInterval(countdown, 1000);
	for (var i = 0; i < questions.length; i++) {

          console.log(questions[i]);

          $("#questions").append("<div>" + questions[i] +"</div>");
  	}
  	
  	function countdown() {
  		count--;
    
    //  show the time in the "display" div.
    $("#time").html(count);
	}

}

showQuestions();