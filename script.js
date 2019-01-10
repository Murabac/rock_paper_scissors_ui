let again = document.getElementById('again');

let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissors');

let paper2 = document.getElementById('paper2')
let rock2 = document.getElementById('rock2');
let scissor2 =  document.getElementById('scissors2');

let header = document.getElementById('header');

let loader = document.getElementById('loader');
let playerScore = document.getElementsByClassName('score');
let computerScore = document.getElementsByClassName('score2');


var player;

//this is variable diclaration for storing wins and draws
cWin = 0;
pWin = 0;
draw = 0;
total = 0;
//Paper event hanlding
paper.addEventListener('click', function(){
  var player =  1;
  var computer = Math.floor(Math.random() * 3 + 1);
  rock.className = "hide";
  scissor.className = "hide";

  if (player === computer){
    loader.className = "hide";
    paper2.className = "";
    
    header.innerHTML = "Draw!!";
    draw++;

    console.log("draw = " + draw);
  }else if (player == 1 && computer === 2){
    loader.className = "hide";
    rock2.className = "";
    header.innerHTML = "You Win!";
    pWin++;
    console.log("player wins = " + pWin);
    for (var i = 0; i < pWin; i++){
      playerScore[i].style.color = "yellow"
    }

  }else if (player === 1 && computer === 3){
    loader.className = "hide";
    scissor2.className = "";
    header.innerHTML = "Computer Wins";
    cWin++;
    console.log("Computer wins = " + cWin);
    for (var i = 0; i < cWin; i++){
      computerScore[i].style.color = "yellow"
    }
  }
  total = draw + cWin + pWin;
})
//Rock event handling
rock.addEventListener('click', function(){
  var player =  2;
  var computer = Math.floor(Math.random() * 3 + 1);
  paper.className = "hide";
  scissor.className = "hide";
  loader.className = "hide";

  if (player === computer){
    rock2.className = "";
    header.innerHTML = "Draw";
    draw++;
    
    console.log("draw = " + draw);
    

  }else if (player == 2 && computer === 1){
    paper2.className = "";    

    header.innerHTML = "Computer Wins!"
    cWin++;
    
    console.log("Computer wins = " + cWin);
    for (var i = 0; i < cWin; i++){
      computerScore[i].style.color = "yellow"
    }

  }else if (player === 2 && computer === 3){
    scissor2.className = "";
    header.innerHTML = "You Win!";
    pWin++;
    
    console.log("player wins = " + pWin);
    
    for (var i = 0; i < pWin; i++){
      playerScore[i].style.color = "yellow"
    }
  }
  total = draw + cWin + pWin;
  
 
})
//Scisscor event handling
scissor.addEventListener('click', function(){
  var player =  3;
  var computer = Math.floor(Math.random() * 3 + 1);
  rock.className = "hide";
  paper.className = "hide";
  loader.className = "hide";

  if (player === computer){
    scissor2.className = "";
    header.innerHTML = "Draw!"
    draw++;
    total+=draw;
    console.log("draw = " + draw);

  }else if (player == 3 && computer === 2){
    rock2.className = "";

    header.innerHTML = "Computer Wins!"
    cWin++;
    total+=cWin;
    console.log("Computer wins = " + cWin);
    for (var i = 0; i < cWin; i++){
      computerScore[i].style.color = "yellow"
    }

  }else if (player === 3 && computer === 1){
    paper2.className = "";

    header.innerHTML = "You Win!";
    pWin++;
    total+=pWin;
    console.log("player wins = " + pWin);
    for (var i = 0; i < pWin; i++){
      playerScore[i].style.color = "yellow"
    }
  }
  total = draw + cWin + pWin;
})

//this is event handler for playing again when play again button is clicked


  again.addEventListener('click', function(){
    if (total < 5){
      paper.className = "";
      rock.className = "";
      scissor.className = "";
      paper2.className = "hide";
      rock2.className = "hide";
      scissor2.className = "hide";
      loader.className = "";
      header.innerHTML = "Rock Paper & Scissors";
     console.log("Total" + total);
    }else{
      alert("Game is over");
    }
 
  })

 

  
  
  






//Global Variables !!
