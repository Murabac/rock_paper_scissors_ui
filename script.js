//Global Variables !!
let playerOptions = document.querySelector("#options");
let humanSelection = "";
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

  e.stopPropagation();

}
//End of the humanPick


function computerPlay (){
    let computerOptions = [
    "Rock",
    "Paper",
    "Scissors"
  ];
  let computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  return computerSelection;
  }

function computerOptionsDisplay(){
  let computerPick = computerPlay();

  if(computerPick == ""){
    let loader = document.getElementById('loader');
    loader.parentNode.removeChild(loader);
  }
}
console.log(computerPlay());
