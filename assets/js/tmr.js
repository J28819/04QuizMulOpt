var timer = document.querySelector("#start");
var scoreValue = document.querySelector("#scoreValue");
var displaycounter = document.getElementById("counter");
var back = document.querySelector("#back")
var clear = document.querySelector("#clear")
var submit = document.querySelector("#submit")
var scorename  = document.querySelector("#scorename");
var scorenumber = document.querySelector("#scorenumber");




var lastvalue = 0
var num = 50;
var action = ""





timer.addEventListener("click", function(){
timerct("Start")
});

back.addEventListener("click", function(){
  document.location.reload()
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
      if (num > 0){
        num = num - 1;
      }
     
      displaycounter.innerHTML = num;
      
    },1000)
  }
  if (action === "Stop"){
    lastvalue = num
    scoreValue.innerHTML = num;
    displaycounter.setAttribute("style", "display: none")
  

      //renderMessage();
  
      
      return

    

  
 
  }

}

submit.addEventListener("click", function(){
  console.log("submit Button")
  showsConclusion.setAttribute("style", "display: none")
  highScores.setAttribute("style", "display: block")

  var Initials = document.getElementById("Initials").value;
  var studentObj = {
      student: Initials,
      score: lastvalue
    };

    scorename.textContent = Initials
    scorenumber.textContent = lastvalue
    //localStorage.setItem("HighScores", JSON.stringify(studentObj));
    num = 0;
  var highscores = localStorage.getItem("HighScores");
  // console.log(highscores)
//
   if(highscores === null){
    localStorage.setItem("HighScores", ("[" + JSON.stringify(studentObj) + "]") );
   }else{
  var highscoresjson = JSON.parse(highscores)
  
   highscoresjson.push(studentObj)
   //console.log(highscoresjson)
   localStorage.setItem("HighScores", JSON.stringify(highscoresjson));
   }
   
   renderhighScores(highscoresjson);



});



//

clear.addEventListener("click", function(){
  localStorage.clear()
  window.location.reload()
  });


  //Load the HighScores when the on load
  window.onload = function() {
    var tabledata = localStorage.getItem("HighScores");
    const myObj = JSON.parse(tabledata);
    if (myObj.length > 0){

      myObj.sort(function (a, b) {
        return  b.score - a.score;
      });
      var text = "<table border='1'>"
      text += '<thead class="thead-dark"><tr><th scope="col">Initials</th><th scope="col">Score</th></tr></thead>' 
      for (let x in myObj) {
        if (x <= 9){
          text += "<tr><td>" + myObj[x].student + "</td><td>" + myObj[x].score + "</td></tr>";
        }
      }
      text += "</table>"    
      document.getElementById("demo").innerHTML = text;
    }
  }
  



  