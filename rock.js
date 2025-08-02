const compPickImg = document.querySelector("#computerPick > img");
const playerPickImg = document.querySelector("#playerPick > img");
const rockImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIKNwQZfmbRPha-Jjpc4X0s7b5SfIA39qgw&s";
const paperImageUrl = "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg";
const scissorsImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9oUAbibZvFraj0t5LAIQUtgv8QBM_LJE2kEOkCUwTdSQwQyRGWHYtNdCBIq5Ls6powM&usqp=CAU";
const msg = document.querySelector("#msg");
const playerSco = document.querySelector("#playerScore");
const computerSco = document.querySelector("#computerScore");
function getComputerChoice(){
    //return either rock, paper or scissors.
    let randomValue = Math.floor(Math.random() * 3);
    if(randomValue == 0){
        compPickImg.setAttribute("src", rockImageUrl);
        return "rock";
    } 
    else if(randomValue == 1){
        compPickImg.setAttribute("src", paperImageUrl);
        return "paper";
    }
    else{
        compPickImg.setAttribute("src", scissorsImageUrl);
        return "scissors";
    }
}
let playerScore = 0;
let computerScore = 0;
const selectionSection = document.querySelector(".selectionSection");
function updateScore(playerS, computerS){
    playerSco.textContent = playerS;
    computerSco.textContent = computerS;
}
let humanSelection;
selectionSection.addEventListener("click", (event)=>{
    if(event.target.id == "rock"){
        playerPickImg.setAttribute("src", rockImageUrl);
        humanSelection = "rock";
    }
    else if(event.target.id == "paper"){
        playerPickImg.setAttribute("src", paperImageUrl);
        humanSelection = "paper";
    }
    else{ 
        playerPickImg.setAttribute("src", scissorsImageUrl);
        humanSelection = "scissors";
    }

    let computerSelection = getComputerChoice();
    if(humanSelection == computerSelection){
        msg.textContent = "drew the match!";
    }
    else if(humanSelection == "rock" && computerSelection == "scissors"){
        msg.textContent = "WIN!";
        playerScore++;
        updateScore(playerScore, computerScore);
    }
    else if(humanSelection == "scissors" && computerSelection == "rock"){
         msg.textContent = "LOSE!";
        computerScore++;
        updateScore(playerScore, computerScore);
    }
    else if(humanSelection == "paper" && computerSelection == "rock"){
        msg.textContent = "WIN!";
        playerScore++;
        updateScore(playerScore, computerScore);
    }
    else if(humanSelection == "paper" && computerSelection == "scissors"){
        msg.textContent = "LOSE!";
        computerScore++;
        updateScore(playerScore, computerScore);
    }
    else if(humanSelection == "rock" && computerSelection == "paper"){
        msg.textContent = "LOSE!";
        computerScore++;
        updateScore(playerScore, computerScore);
    }
    else{
         msg.textContent = "WIN!";
        playerScore++;
        updateScore(playerScore, computerScore); 
    }
});

    





