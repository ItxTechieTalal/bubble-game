const makeBubble = () => {
 var clutter = "";
 var hitRN = 0

 for (var i = 1; i <= 80; i++) {
   let rn = Math.floor(Math.random() * 10);
   clutter += ` <div class="bubble">${rn}</div> `;
 }
 document.querySelector('#pbtm').innerHTML = clutter;
};

makeBubble();

var timer = 60;

function runTimer() {
 var intervalId = setInterval(function () {
   if (timer > 0) {
     timer--;
     document.querySelector('#timerVal').innerHTML = timer;
   } else {
     clearInterval(intervalId); // Stop the interval when timer reaches zero
 document.querySelector('#pbtm').innerHTML = `<h1>Game over!!!</h1>`;
     

   }
 }, 1000);
}

runTimer();

function getNewHit(){
 hitRN= Math.floor(Math.random() * 10)
 document.querySelector('#hitVal').textContent = hitRN
}
getNewHit()

var score = 0

function increaseScore(){
 score +=10
 document.querySelector('#scoreVal').textContent = score
}



document.querySelector('#pbtm').addEventListener('click',
 function(details){
  var clickedNo = Number(details.target.innerHTML)

  if(clickedNo === hitRN  ){ 
   increaseScore()
 makeBubble()
 getNewHit()
  }
 } )

 