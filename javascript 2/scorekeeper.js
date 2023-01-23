let p1button = document.querySelector("#p1");
let p2button = document.getElementById("p2");    
let resetbutton = document.getElementById("reset");
let numInput = document.querySelector("input");
let p = document.querySelector("p");
let p1Score = 0;
let p2Score = 0;
let p1span = document.querySelector("#p1span");
let p2span = document.querySelector("#p2span");
let gameover = false;
winningScore = 5;
let winningScoreDisplay = document.querySelector("p span");

p1button.addEventListener("click",function(){
    if(!gameover){
   p1Score++; 
   if(p1Score === winningScore){
    p1span.classList.add("winner");
    gameover = true;
   }
   p1span.textContent = p1Score;
}  
});

p2button.addEventListener("click", function(){
    if(!gameover){
    p2Score++;
    if(p2Score === winningScore){
        p2span.classList.add("winner");
        gameover = true;
    }
    p2span.textContent=p2Score;
    }
}); 

resetbutton.addEventListener("click", function(){
    reset();
})

 function reset(){
   
        p1Score = 0;
        p2Score = 0;
        p1span.textContent = 0;
        p2span.textContent = 0;
        p1span.classList.remove("winner");
        p2span.classList.remove("winner");
        gameover = false;
 }


numInput.addEventListener("change", function(){
winningScoreDisplay.textContent = numInput.value;
winningScore = Number(numInput.value);
reset();
});