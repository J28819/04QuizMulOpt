
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

var option1 = document.querySelector("#opt1");
var option2 = document.querySelector("#opt2");
var option3 = document.querySelector("#opt3");
var option4 = document.querySelector("#opt4");
var displayResult = document.getElementById("disAnswer")
var answer = ""



option1.textContent = ArrayV[0]["A"];
option2.textContent = ArrayV[0]["B"]
option3.textContent = ArrayV[0]["C"]
option4.textContent = ArrayV[0]["D"]
var correctAnswer = ArrayV[0]["R"]

option1.addEventListener("click", function() {
    answer = "A"
    answermsg(answer)
});

option2.addEventListener("click", function() {
    answer = "B"
    answermsg(answer)
});

option3.addEventListener("click", function() {
    answer = "C"
    answermsg(answer)
});

option4.addEventListener("click", function() {
    answer = "D"
    answermsg(answer)
});

var value = ""
function answermsg(){
    if (answer === correctAnswer) {
        value = "Correct!!!"
    }else{
        value = "Incorrect!!!"     
    }
    displayResult.innerHTML = value
}











    

