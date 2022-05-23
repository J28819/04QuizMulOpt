var timer = document.querySelector("#start");
var scoreValue = document.querySelector("#scoreValue");
var displaycounter = document.getElementById("counter");
var back = document.querySelector("#back");
var clear = document.querySelector("#clear");
var submit = document.querySelector("#submit");
var scorename  = document.querySelector("#scorename");
var scorenumber = document.querySelector("#scorenumber");
var timesUp = document.querySelector("#timesUp");
var displayctd = document.querySelector('#displayctd');




var lastvalue = 0;
var num = 50;
var action = "";





timer.addEventListener("click", function(){
timerct("Start");
});

back.addEventListener("click", function(){
  document.location.reload();
  });

function punishment(){
  if (num > 6){
    num = num - 5;
  }
}

function reward(){
  num = num + 0;
}

function timerct(x){

  action = x
  
  if (action === "Start"){
    setInterval(function(){
      if(num > 51){
        return
      }
      //shows numbers in red if 10 sec close to times up
      if (num < 12){
        displaycounter.setAttribute("style", "color: red");
      }
      

      if (num > 0){
        num = num - 1;
      }
      if (num === 0){
        timesUp.setAttribute("style", "color: red");
        timesUp.innerHTML = "Times Up!!!";
        setInterval(() => {
          timesUp.innerHTML = "Try Again!!!";
          //displaycounter.setAttribute("style", "display: none");
          setInterval(() => {       
            window.location.reload();
          }, 2000);
        }, 1000);
      }
      displaycounter.innerHTML = num; 
    
    },1000)


  

  }

  if (action === "Stop"){
    lastvalue = num;
    scoreValue.innerHTML = num;
    displaycounter.setAttribute("style", "display: none");
    num = 99;
      //renderMessage();
      return
 
  }
}

submit.addEventListener("click", function(){
  
  showsConclusion.setAttribute("style", "display: none")
  highScores.setAttribute("style", "display: block")

  var Initials = document.getElementById("Initials").value;

  if (Initials <= 0){
    Initials  = "Anonymous"
  }
  var studentObj = {
      student: Initials,
      score: lastvalue
    };

    scorename.textContent = Initials
    scorenumber.textContent = lastvalue
    
    num = 99;

    displayctd.setAttribute("style", "display: none")
    var highscores = localStorage.getItem("HighScores");
   if(highscores === null){
    localStorage.setItem("HighScores", ("[" + JSON.stringify(studentObj) + "]") );
   }else{
   var highscoresjson = JSON.parse(highscores)
  
   highscoresjson.push(studentObj)
   
   localStorage.setItem("HighScores", JSON.stringify(highscoresjson));
   }
  
});



//

clear.addEventListener("click", function(){
  localStorage.clear();
  window.location.reload();
  });


  //Load the HighScores when the on load
  window.onload = function() {
    var tabledata = localStorage.getItem("HighScores");
    const myObj = JSON.parse(tabledata);
    if (myObj !== null){

      myObj.sort(function (a, b) {
        return  b.score - a.score;
      });
      var text = "<table border='1'>";
      text += '<thead class="thead-dark"><tr><th scope="col">Initials</th><th scope="col">Score</th></tr></thead>' ;
      for (let x in myObj) {
        if (x <= 6){
          text += "<tr><td>" + myObj[x].student + "</td><td>" + myObj[x].score + "</td></tr>";
        }
      }
      text += "</table>"    
      document.getElementById("demo").innerHTML = text;
    }
  }
  



  