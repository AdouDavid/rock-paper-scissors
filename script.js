function playGame() {
    const choices = ["rock", "paper", "scissors"];
    const userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

    if (!choices.includes(userChoice)) {
        console.log("Invalid choice, please choose rock, paper, or scissors.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") 
        (userChoice === "paper" && computerChoice === "rock") 
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

playGame();