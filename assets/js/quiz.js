
var ArrayV = [
                {
                "Q": "Commonly used data types DO NOT include:",
                "A": "Strings",
                "B": "Booleans",
                "C": "Alerts",
                "D": "Numbers",
                "R": "C"        
                },
                   {
                "Q": "The condition in an if/else statment is enclosed within ______ .",
                "A": "Quotes",
                "B": "Curly Brackets",
                "C": "Parentheses",
                "D": "Square Brackets",
                "R": "B"        
                },
                   {
                "Q": "Arrays in Javascript can be used to store ______ .",
                "A": "Numbers and Strings",
                "B": "Other Arrays",
                "C": "Booleans",
                "D": "All of the above",
                "R": "D"        
                },
                   {
                "Q": "String values must be enclosed within ______ when being assigned to variables.",
                "A": "Commas",
                "B": "Curly brackets",
                "C": "Quotes",
                "D": "Parenthesis",
                "R": "D"        
                },
                 {
                "Q": "A very useful tool used during development and debugging for printing content to the debugger is:",
                "A": "Javascript",
                "B": "Terminal / Bash",
                "C": "For loops",
                "D": "Console.log()",
                "R": "D"        
                }
            ];



//Buttons to Press
var showsConclusion = document.querySelector("#conclusion");
var highScores = document.querySelector("#highScore");
var startButton = document.querySelector("#start");
var option1 = document.querySelector("#opt1");
var option2 = document.querySelector("#opt2");
var option3 = document.querySelector("#opt3");
var option4 = document.querySelector("#opt4");
// Sections to Shows and Hide
var showsQ = document.querySelector("#questionsdiv");
var question = document.querySelector("#Question");
var displayResult = document.querySelector('#disAnswer');
var titletop = document.querySelector('#titletop');
// variables init
var answer = "";
var step = 0;
var correctAnswer = "";

// make the Questions going randomly to preveent cheating...

let shuffled = ArrayV
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)


ArrayV = shuffled

startButton.addEventListener("click", function(){
    startButton.setAttribute("style", "display: none");
    showsQ.setAttribute("style", "display: block");
    displayResult.setAttribute("style", "display: block");
    titletop.setAttribute("style", "display: none");
    startquiz();
});



// Start function quiz displaying the array Questions in random order 
function startquiz() {

        if (step <= 4) {
            question.textContent = ArrayV[step]["Q"];
            option1.textContent = ArrayV[step]["A"];
            option2.textContent = ArrayV[step]["B"];
            option3.textContent = ArrayV[step]["C"];
            option4.textContent = ArrayV[step]["D"];
            correctAnswer = ArrayV[step]["R"];
        }else {
            showsQ.setAttribute("style", "display: none");
            showsConclusion.setAttribute("style", "display: block");
            displayResult.innerHTML = "Finish!!!";
            displayResult.setAttribute("style", "display: none");
            timerct("Stop");
        }

}

// Answer functions
option1.addEventListener("click", function() {
    answer = "A";
    answermsg(answer)});
option2.addEventListener("click", function() {
    answer = "B";
    answermsg(answer)});
option3.addEventListener("click", function() {
    answer = "C";
    answermsg(answer)});
option4.addEventListener("click", function() {
    answer = "D";
    answermsg(answer)});

//function to compute questions and answer
function answermsg(){
    var value = "";
    if (answer === correctAnswer) {
        value = "Correct!!!";
        step = step + 1;
        // function reward was to add  +5 to the timer for future implementation
        reward();
        startquiz();
    }else{
        value = "Incorrect!!!";
        step = step + 1;
        // function punishment was to add  -5 to the timer
        punishment();
        startquiz();     
    }
    displayResult.innerHTML = value;
}


 












    

