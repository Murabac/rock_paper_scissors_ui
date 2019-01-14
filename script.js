function computerPlay (){
    let computerOptions = [
    "Rock",
    "Paper",
    "Scissors"
  ];
  let computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  return computerSelection;
  }


console.log(computerPlay());

//Global Variables !!
let playerOptions = document.querySelector("#options");
let humanSelection = "";
let humanRecord = null;
let computerRecord = null;
// function: humanPick to handle the user selection via Event listener
playerOptions.addEventListener("click", humanPick, false);
function humanPick(e){
  if(e.target.localName == "img"){
    let clickedItem = e.target.id;
    clickedItem = clickedItem.charAt(0).toUpperCase() + clickedItem.slice(1).toLowerCase();

    if(clickedItem == "Paper"){
      if(playerOptions != null){
        let rock = document.getElementById('rock');
        let scissors = document.getElementById('scissors');
        if(rock){
        rock.parentNode.removeChild(rock);
        scissors.parentNode.removeChild(scissors);
        }
      }
      humanSelection = clickedItem;
    }

    else if(clickedItem == "Rock"){
      if(playerOptions != null){
        let paper = document.getElementById('paper');
        let scissors = document.getElementById('scissors');
        if(paper){
        paper.parentNode.removeChild(paper);
        scissors.parentNode.removeChild(scissors);
        }
      }
      humanSelection = clickedItem;
    }

    else if(clickedItem == "Scissors"){
      if(playerOptions != null){
        let rock = document.getElementById('rock');
        let paper = document.getElementById('paper');
        if(paper){
        paper.parentNode.removeChild(paper);
        rock.parentNode.removeChild(rock);
        }
      }
      humanSelection = clickedItem;
    }

  }
  console.log(humanSelection);
  function computerOptionsDisplay(){
    let computerPick = computerPlay();

    if(computerPick != ""){
      let loader = document.getElementById('loader');
      loader.parentNode.removeChild(loader);

      let rock2 = document.getElementById('rock2');
      let paper2 = document.getElementById('paper2');
      let scissors2 = document.getElementById('scissors2');
      let header = document.getElementById('header');
      let empty = document.getElementById('empty');
      let full = document.getElementById('full');
      let empty2 = document.getElementById('empty2');
      let full2 = document.getElementById('full2');

      if(computerPick == "Paper"){
        paper2.className = "";
        if(humanSelection == "Paper"){
          header.innerText = "The Game is: TIE!";
          empty.className = "hide";
          full.className = ""
          empty2.className = "hide";
          full2.className = ""


        }
        else if (humanSelection == "Rock")
        {
          header.innerText = "You Lose! Rock loses to Paper"
          empty2.className = "hide";
          full2.className = ""
        }
        else if(humanSelection == "Scissors")
        {
          header.innerText = "You Win! Scissors beats Paper";
          empty.className = "hide";
          full.className = ""
        }
      }
      else if(computerPick == "Scissors"){
        scissors2.className = "";
        if(humanSelection == "Paper"){
          header.innerText = "You Lose! Paper loses to Scissors";
          empty2.className = "hide";
          full2.className = ""
        }
        else if (humanSelection == "Rock")
        {
          header.innerText = "You Win! Rock beats Scissors"
          empty.className = "hide";
          full.className = ""
        }
        else if(humanSelection == "Scissors")
        {
          header.innerText = "The Game is: TIE!";
          empty.className = "hide";
          full.className = ""
          empty2.className = "hide";
          full2.className = ""
        }
      }
      else if(computerPick == "Rock"){
        rock2.className = "";
        if(humanSelection == "Paper"){
          header.innerText = "You Win! Paper beats Rock";
          empty.className = "hide";
          full.className = "";
        }
        else if (humanSelection == "Rock")
        {
          header.innerText = "The Game is: TIE!";
          empty.className = "hide";
          full.className = ""
          empty2.className = "hide";
          full2.className = ""
        }
        else if(humanSelection == "Scissors")
        {
          header.innerText = "You Lose! Scissors loses to Rock";
          empty2.className = "hide";
          full2.className = ""
        }
      }

      switch (computerPick) {
        case expression:

          break;
        default:

      }

    }
  }
  computerOptionsDisplay();

}
//End of the humanPick
// a button to reset all scores
const reset = document.querySelector('a.reset');
reset.addEventListener('click', (e) => {
		location.reload();
	});
