// notes jab hume parent k sare child ka access vchahiye hota hai to we use queryselectorall
const buttons=document.querySelectorAll('button');
const resultEl=document.getElementById("result");
let playerScoreEl=document.getElementById("user-score");
let computerScoreEl=document.getElementById("computer-score");
let playerScore=0;
let computerScore=0;
// !agr mai chahta hoo event listener hr ek child pr lage to hum use krte hai foreach ka usme se function pass phir event listner mai bhi same for each mtlb button k andr jitne bhi button honge sabpe lgega ab button paraameter mai pass krdo the uske pass lagaya and call back funmct jisse browsre yaad rkhe ab ye hoga
buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    // console.log("user-choice",button.id,"computer choice",computerPlay());
     const result=playRound(button.id,computerPlay());
     resultEl.textContent=result;
     
    //  console.log(result); hum chahte hai ab ye show ho to jaao result mai
   
  })
})
function computerPlay(){
  const choices=['rock','paper','scissor'];
  const randomChoices=Math.floor(Math.random()*choices.length);
  return choices[randomChoices];
}
function playRound(playerSelection,computerSelection){if(playerSelection===computerSelection){
  return "its tie";
}
else if(
  playerSelection==="scissor" && computerSelection==="paper"|| playerSelection==="rock"
  && computerSelection==="scissor"|| playerSelection==="paper" && computerSelection==="rock"){  playerScore++;
     playerScoreEl.textContent=playerScore;
     return "you win " + playerSelection+" beats " + computerSelection;
   
  }
  else{computerScore++;
computerScoreEl.textContent=computerScore;
    return "you lose " + computerSelection+ " beats "
+playerSelection;

  }


}