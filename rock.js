function getComputerChoice(){
    //return either rock, paper or scissors.
    let randomValue = Math.floor(Math.random() * 3);
    if(randomValue == 0){
        return "rock";
    } 
    else if(randomValue == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    //take user's input
    return (prompt("Rock, Paper, Scissors!!!")).toLowerCase();
}

function printScoreCard(humanScore, computerScore){
    console.log(`Your Score = ${humanScore} || Computer's Score = ${computerScore}`)
}

function printComputerChoice(computerChoice){
    let computerChoiceBeautified = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);
    console.log(`Computer = ${computerChoiceBeautified}`);
}

function printLine(){ 
    console.log("--------------------------------------------");
}

function playRound(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    if(humanSelection == computerSelection){
        printComputerChoice(computerSelection);
        console.log("It's a tie!");
        return 2;
    }
    else if(humanSelection == "rock" && computerSelection == "scissors"){
        printComputerChoice(computerSelection);
        console.log("You Win!");
        return 1;
    }
    else if(humanSelection == "scissors" && computerSelection == "rock"){
        printComputerChoice(computerSelection);
        console.log("You lose!");
        return 0;
    }
    else if(humanSelection == "paper" && computerSelection == "rock"){
        printComputerChoice(computerSelection);
        console.log("You Win!");
        return 1;
    }
    else if(humanSelection == "paper" && computerSelection == "scissors"){
        printComputerChoice(computerSelection);
        console.log("You lose!");
        return 0;
    }
    else if(humanSelection == "rock" && computerSelection == "paper"){
        printComputerChoice(computerSelection);
        console.log("You lose!");
        return 0;
    }
    else{
        printComputerChoice(computerSelection);
        console.log("You Win!");
        return 1;
    }
}

let humanScore = 0;
let computerScore = 0;

let numberOfRounds = Number(prompt("Number of rounds you want to play?"));

for(let i=1; i <= numberOfRounds; i++){
    let result = playRound();
    if (result == 2){
        printScoreCard(humanScore, computerScore);
        printLine();
    }
    else if(result){
        humanScore++;
        printScoreCard(humanScore, computerScore);
        printLine();
        }
    else if(result == 0){
        computerScore++;
        printScoreCard(humanScore, computerScore);
        printLine();
    }
}


