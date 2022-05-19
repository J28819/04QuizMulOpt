var timer = document.querySelector("#start");
var displaycounter = document.getElementById("counter");
var num = 50;
var action = ""


timer.addEventListener("click", function(){
timerct("Start")
});

function punishment(){
  if (num > 6){
    num = num - 5;
  }
  
}

function reward(){
  num = num + 5;
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
    num = 0;
  }

}





  