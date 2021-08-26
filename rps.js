

let userScore = 0;
let CPUScore = 0;


// the game begins

const userScore_span = document.getElementById("user-score");
const CPUScore_span = document.getElementById("CPU-score");
const tableScore_div = document.querySelector(".tablescore");
const winner_p = document.querySelector (".winner> p");
const userHand= document.querySelector (".player-hand");
const CPUHand= document.querySelector (".CPU-hand");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const decisions_div = document.querySelectorAll(".decision");


 var opacity = 0;
        var intervalID = 0;
        window.onload = fadeIn;
  
        function fadeIn() {
            setInterval(show, 200);
        }
  
        function show() {
            var body = document.getElementById("body");
            opacity = Number(window.getComputedStyle(body)
                             .getPropertyValue("opacity"));
            if (opacity < 1) {
                opacity = opacity + 0.1;
                body.style.opacity = opacity
            } else {
                clearInterval(intervalID);
            }
        }


function getCPUChoice()  {
	const choices = ['rock','paper','scissors'];
	const randomChoice = Math.floor(Math.random()*3);
	return choices [randomChoice];
	
	
	
	
	
}	

function win(userChoice, CPUChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	CPUScore_span.innerHTML = CPUScore;
	winner_p.innerHTML = userChoice + " beats " + CPUChoice + " you win! ";
	
	userHand.src =`./${userChoice}.png`;
	CPUHand.src = `./${CPUChoice}.png`;		
	
}

function lose(userChoice, CPUChoice) {
	CPUScore++;
	userScore_span.innerHTML = userScore;
	CPUScore_span.innerHTML = CPUScore;
	winner_p.innerHTML = userChoice + " lose to " + CPUChoice + " you lost.. ";
	
	userHand.src =`./${userChoice}.png`;
	CPUHand.src = `./${CPUChoice}.png`;	
	
	
}

function draw(userChoice, CPUChoice) {
	winner_p.innerHTML = userChoice + " equal to " + CPUChoice + " It's a draw ";
	
	userHand.src =`./${userChoice}.png`;
	CPUHand.src = `./${CPUChoice}.png`;	
		
	
}
function game(userChoice) {
		const CPUChoice = getCPUChoice();
		console.log(CPUChoice);
		switch (userChoice + CPUChoice){
			case "rockscissors":
			case "paperrock":
			case "scissorspaper":
			  win(userChoice, CPUChoice);
			  break;
			case "rockpaper":
			case "paperscissors":
			case "scissorsrock": 
			  lose(userChoice, CPUChoice);
			  break;
			case "rockrock":
			case "paperpaper":
			case "scissorsscissors":
			  draw(userChoice, CPUChoice);
			  break;
		
		}
	decisions_div.forEach(decision => {
		decision.addEventListener("click", function() {
			
			
		
		})	
	})
}

function main() {
		rock_div.addEventListener('click', function() {
			game("rock");
		})		
		paper_div.addEventListener('click', function() {
			game("paper");
		})
		scissors_div.addEventListener('click', function() {
			game("scissors");
		})
		
		
	
		
		
}
main();