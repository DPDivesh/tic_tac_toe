//gameboard module
const checkWinner = (()=>{
  //private vals
  let winCountPlayerOne = 0;
  let winCountPlayerTwo = 0;
  const checksForWins = () => {
    if(document.getElementById("textP1").innerHTML != PlayerOne.name +" Wins!" && document.getElementById("textP2").innerHTML != PlayerTwo.name +" Wins!" &&   document.getElementById("textP2").innerHTML !=" It's A Tie!"){
      console.log('test')
  let playerGameChoices = gameSelections.gameChoices;
  console.log(playerGameChoices);
if(playerGameChoices[0]=="X"&& playerGameChoices[1]=="X"&& playerGameChoices[2]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[3]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[5]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[6]=="X"&& playerGameChoices[7]=="X"&& playerGameChoices[8]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="X"&& playerGameChoices[3]=="X"&& playerGameChoices[6]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[1]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[7]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="X"&& playerGameChoices[5]=="X"&& playerGameChoices[8]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();
  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[8]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[6]=="X"){
  console.log("Player One winsdasdsadas");
  console.log(document.getElementById("textP1"));
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  console.log(winCountPlayerOne);
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="O"&& playerGameChoices[1]=="O"&& playerGameChoices[2]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo,"winCondition 1 P2");
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}

else if(playerGameChoices[3]=="O"&& playerGameChoices[4]=="O" && playerGameChoices[5]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo,"winCondition 2 P2");
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[6]=="O" && playerGameChoices[7]=="O" && playerGameChoices[8]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo,"winCondition 3 P2");
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="O"&& playerGameChoices[3]=="O" && playerGameChoices[6]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo,"winCondition 4 P2");
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[1]=="O"&& playerGameChoices[4]=="O" && playerGameChoices[7]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  console.log(winCountPlayerTwo,"winCondition 5 P2");
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo);
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="O"&& playerGameChoices[5]=="O"&& playerGameChoices[8]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo,"winCondition 6 P2");
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="O"&& playerGameChoices[4]=="O"&& playerGameChoices[8]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo,"winCondition 7 P2");
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="O"&& playerGameChoices[4]=="O"&& playerGameChoices[6]=="O"){
  console.log("Player Two winsdasdsadas");
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  console.log(winCountPlayerTwo,"winCondition 7 P2");
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();
}
else {
  console.log(winCountPlayerTwo);
for(let z=0, j=0; z < playerGameChoices.length; z++){
if(playerGameChoices[z]!=" "){
  j=j+1;
console.log(j);
if(j == 9){
  console.log("tie")
  console.log(document.getElementById("textP2"));
  document.getElementById("textP2").innerHTML =" It's A Tie!";
  console.log(winCountPlayerTwo);
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();
}
}
}
}
}

  }
return{
  //public vals
checksForWins,
winCountPlayerOne,winCountPlayerTwo
 
};

})();

//display Controller' Module
const displayController = (() =>{
 const resetGame =()=>{
  for(let i=8; i >= 0;i--){
    let temp = document.querySelectorAll(".squaresXO");
    // temp.remove(i);
    console.log(temp[i].remove());
    gameSelections.gameChoices[i]=' ';
    }
    document.getElementById("textP1").innerHTML =" ";
    document.getElementById("textP2").innerHTML =" ";
  }
    const onPlayerTwo=()=> {
      document.getElementById("overlayComputer").style.display = "block";
    }
    
    
    const onPlayerOne =()=> {
      document.getElementById("overlayPlayer").style.display = "block";
    }
    
    
    const offPlayerTwo=()=> {
      document.getElementById("overlayComputer").style.display = "none";
      resetGame();
      gameFlow.playTheGame();     
    }
    
    const offPlayerOne = ()=> {
      document.getElementById("overlayPlayer").style.display = "none";
      resetGame();
      gameFlow.playTheGame();


      
    }

return{
 onPlayerTwo,onPlayerOne,offPlayerTwo,offPlayerOne

};
})();

const gameSelections = (() =>{
  const playerOneAI = (gameChoices) =>{
    console.log("Problem?")
         randomSpot(gameChoices);
         checkWinner.checksForWins();
         minmax();

  }

  const bestMove = ()=>{
    let bestScore = -Infinity;
    let move;
    for(let i=0; i < 8;i++){
      console.log(i);
      if (gameChoices[i] == " "){
        gameChoices[i] = "X";
        let score = minmax(gameChoices,0, false);
        gameChoices[i] =" ";
       if(score > bestScore){
         bestScore = score;
        console.log(move ={i});
       }          
      }
  }
  console.log("YAYAYAY")
  gameChoices[move.i]="X";
}
const human ="O";
const ai = "X";

let scores = {
  'X' : 10,
  'O' : -10,
  'tie':0
}

//delete this and replace with reg board after
const origBoard = ["O",1,"X","X",4,"X",6,"O","O"];

const winning =(gameChoices, player)=>{
  if (
  (gameChoices[0] == player && gameChoices[1] == player && gameChoices[2] == player) ||
  (gameChoices[3] == player && gameChoices[4] == player && gameChoices[5] == player) ||
  (gameChoices[6] == player && gameChoices[7] == player && gameChoices[8] == player) ||
  (gameChoices[0] == player && gameChoices[3] == player && gameChoices[6] == player) ||
  (gameChoices[1] == player && gameChoices[4] == player && gameChoices[7] == player) ||
  (gameChoices[2] == player && gameChoices[5] == player && gameChoices[8] == player) ||
  (gameChoices[0] == player && gameChoices[4] == player && gameChoices[8] == player) ||
  (gameChoices[2] == player && gameChoices[4] == player && gameChoices[6] == player)
  ) {
  return true;
  } else {
  return false;
}
}

  const minmax = (gameChoices,depth,isMaximizing) =>{
    let result =checkWinners();
    console.log(result)
    if(result!=null){
      console.log("Done");
      return scores[result];

    }
    if (isMaximizing){
      let bestScore = -Infinity;
      for(let i=0; i < 8;i++){
        if (gameChoices[i] == " "){
          gameChoices[i] = "X";
          let score = minmax(gameChoices,depth+1, false);
          gameChoices[i] =" ";
          bestScore = Math.max(score,bestScore)          
        }
    }
    return bestScore;
  }
  else{
    let bestScore = Infinity;
    for(let i=0; i < 8;i++){
      console.log("loop");
      if (gameChoices[i] == " "){
        gameChoices[i] = "O";
        console.log(gameChoices);
        let score = minmax(gameChoices,depth+1, false);
        gameChoices[i] =" ";
        bestScore = Math.min(score,bestScore)

        
      }
  }
  return bestScore;
  }
}
let gameChoices = [" "," "," "," "," "," "," "," "," "];
let currentPlayer;
let isAIP1;
let isAIP2;

const makeSquares = () =>{
  currentPlayer ="PlayerOne";
  for(let i=0; i<gameChoices.length;i++){
    let makeGameSquares = document.getElementById("ticTacToeZone");
    let addSquare = document.createElement("div");
    addSquare.classList.add("squaresXO");
    addSquare.innerHTML = gameChoices[i];
    makeGameSquares.append(addSquare);
    let squareLocation =document.querySelectorAll('.squaresXO') ;
    console.log(document.querySelectorAll('.squaresXO'));
    console.log(document.getElementById("ticTacToeZone").childNodes)
    squareLocation[i].innerHTML =gameChoices[i];
    if(PlayerOne.isAI=="yes" && PlayerTwo.isAI=="yes"){
      if(currentPlayer=="PlayerOne"){
           gameChoices[i] = "X";
           currentPlayer = "PlayerTwo";
            squareLocation[i].innerHTML = gameChoices[i]; 
            checkWinner.checksForWins();
    
          }
        
          else if(currentPlayer=="PlayerTwo"){
            gameChoices[i]= "O";
            currentPlayer = "PlayerOne";
            squareLocation[i].innerHTML = gameChoices[i]; 
            checkWinner.checksForWins();
    
          }
    }
    else if(PlayerOne.isAI=="yes" && PlayerTwo.isAI=="no"){
      console.log("Called",currentPlayer,"Gameselect.",currentPlayer,"currentplayer");

      console.log("call")
        console.log("test",currentPlayer, squareLocation.length,"Length");
        if(9 <= squareLocation.length){
      if(currentPlayer=="PlayerOne" ){
        bestMove();
      currentPlayer="PlayerTwo"
console.log(currentPlayer);
       }
      }
       addSquare.addEventListener('click',()=>{
         if(gameChoices[i]==" "){
       if(currentPlayer=="PlayerTwo"){
        gameChoices[i]= "O";
        currentPlayer = "PlayerOne";
        console.log("test",currentPlayer);
        squareLocation[i].innerHTML = gameChoices[i]; 
        
        checkWinner.checksForWins();
        console.log(currentPlayer);
        if(currentPlayer=="PlayerOne"){
          bestMove();
          currentPlayer=="PlayerTwo"
          console.log(currentPlayer)
        }
        }
         }   
         console.log(currentPlayer);
  
  })

}

    else if(PlayerOne.isAI=="no" && PlayerTwo.isAI=="yes"){
    }
    else if(PlayerOne.isAI=="no" && PlayerTwo.isAI=="no"){
    addSquare.addEventListener('click',()=>{
      console.log(gameChoices[i]);
      if(gameChoices[i]==" "){
      
          // console.log("Player One yes", PlayerOne.isAI);
          //  if(currentPlayer=="PlayerOne" && PlayerOne.isAI == "yes"){
          //    randomizer.randomSpot(squareLocation);
          //  gameChoices[i] = "X";


          //   currentPlayer = "PlayerTwo";
          //   squareLocation[i+1].innerHTML = gameChoices[i]; 
          //   checkWinner.checksForWins();
    
          // }
        
          // else if(currentPlayer=="PlayerTwo"){
          //   gameChoices[i]= "O";
          //   currentPlayer = "PlayerOne";
          //   squareLocation[i+1].innerHTML = gameChoices[i]; 
          //   checkWinner.checksForWins();
    
          // }
      if(currentPlayer=="PlayerOne"){
        console.log(isAIP1);
        gameChoices[i] = "X";
        currentPlayer = "PlayerTwo";
        squareLocation[i].innerHTML = gameChoices[i]; 
        checkWinner.checksForWins();

      }
    
      else if(currentPlayer=="PlayerTwo"){
        gameChoices[i]= "O";
        currentPlayer = "PlayerOne";
        squareLocation[i].innerHTML = gameChoices[i]; 
        checkWinner.checksForWins();

      }
    }
    })
    // addSquare.innerHTML = gameChoices[i];

    // makeGameSquares.append(addSquare);
  }
}
}
const randomSpot =(gameArray)=>{
  let z = Math.round(Math.random()*(8-0)+0);
  
  let squareLocation = document.querySelectorAll('.squaresXO');
  console.log(currentPlayer)
     while( currentPlayer=="PlayerOne"){
    if(gameArray[z]==" "){
  
         gameArray[z]="X";
         squareLocation[z].innerHTML ="X"; 
       currentPlayer="PlayerTwo"  
         console.log(currentPlayer);      
  
       }
       else{
       z=Math.round(Math.random()*(8-0)+0);
  
       }
      }
      
     currentPlayer="PlayerTwo"  
  
  
     }

return{
gameChoices,
makeSquares,isAIP1,isAIP2,currentPlayer,playerOneAI
}
})();



//gameboard module
const gameFlow = (()=>{
  //private vals
const numberOfPlayers = [];

const startPlayerPreReq=()=>{
  if(gameFlow.numberOfPlayers.length==2){
    document.getElementById("playersEnter").innerHTML="";
    gameFlow.playTheGame();

  }
}

const playTheGame = () => {
  gameSelections.makeSquares();

    

}
return{
  //public vals
  playTheGame,
  numberOfPlayers,
  startPlayerPreReq
};
})();
const buttonsPushed = (() =>{

  let scoreOne = document.getElementById("player1")
  let scoreCountOne = document.createElement("P");
  
  let scoreTwo = document.getElementById("player2");
  let scoreCountTwo = document.createElement("P");

  let formOneSubmit = document.getElementById("player1");
  let formTwoSubmit = document.getElementById("player2");

  const checkEventPlayerOne = () => formOneSubmit.preventDefault; formOneSubmit.addEventListener("submit",(e)=>{
    e.preventDefault();
      let currentPlayer;
      let holdPlayerName;
      
      const radios = document.getElementsByName("radBTN");
      for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          console.log(radios.value);
          if(radios[i].value=="yes"){
            holdPlayerName = document.getElementById("playerOneName").value;
            currentPlayerName =holdPlayerName + " "+ " AI";
            gameSelections.isAIP1 = "yes";
            console.log(gameSelections.isAIP1,"isAIP1")
          }
          else{
             currentPlayerName = document.getElementById("playerOneName").value;
             gameSelections.isAIP1 = "no";

          }

      console.log(currentPlayer);
          // only one radio can be logically checked, don't check the rest
          break;
        }

      }


    if(currentPlayerName != "" ||currentPlayerName != undefined){
    console.log("default prevented");
    PlayerOne =gamePlayers(currentPlayerName,gameSelections.isAIP1);
    console.log(PlayerOne.name);
    document.getElementById("player1").innerHTML=PlayerOne.name;
    let setPlayerOne = document.getElementById("player1");

    setPlayerOne.style.width="17.4vw";
    setPlayerOne.style.fontSize ="3vw";

    scoreCountOne.classList.add("scoreCount");
    console.log(checkWinner.winCountPlayerOne);
    scoreCountOne.innerHTML = checkWinner.winCountPlayerOne; 
    scoreOne.appendChild(scoreCountOne);
    gameFlow.startPlayerPreReq();

  }
  })
  // const checkEvent = () => console.log("hi");
  const checkEventPlayerTwo = () =>  formTwoSubmit.preventDefault; formTwoSubmit.addEventListener("submit",(e)=>{
    e.preventDefault();
    let currentPlayer;
    let holdPlayerName;
    const radios = document.getElementsByName("radBTN");
    for (let i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios.value);
        if(radios[i].value=="yes"){
          holdPlayerName = document.getElementById("playerTwoName").value;
          currentPlayerName =holdPlayerName + " "+ " AI";
          gameSelections.isAIP2 = "yes";
          console.log(gameSelections.isAIP2,"isAIP2")
        }
        else{
           currentPlayerName = document.getElementById("playerTwoName").value;
           gameSelections.isAIP2 = "no";

        }
    console.log(currentPlayer);
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }

    if(currentPlayerName != "" || currentPlayerName != undefined){
    console.log("default prevented");
    console.log(e.currentTarget);
    PlayerTwo = gamePlayers(currentPlayerName,gameSelections.isAIP2);
    document.getElementById("player2").innerHTML=PlayerTwo.name;
    let setPlayerTwo = document.getElementById("player2");

    setPlayerTwo.style.width="17.4vw";
    setPlayerTwo.style.fontSize ="3vw";

    
    scoreCountTwo.classList.add("scoreCount");
    console.log(checkWinner.winCountPlayerTwo);
    scoreCountTwo.innerHTML = checkWinner.winCountPlayerTwo; 
    scoreTwo.appendChild(scoreCountTwo);
    console.log(PlayerTwo.name);
    gameFlow.startPlayerPreReq();
    }
    

  })


  // if ( == && checkEventPlayerTwo
  return{
    checkEventPlayerOne,
    checkEventPlayerTwo,scoreCountOne,scoreCountTwo,
  };
})();

// buttonsPushed.checkEvent();

//factory Function to make players
const gamePlayers = (name,isAI) =>{
  isAI;
  console.log(isAI);
  name;
  // playerNumber;

  gameFlow.numberOfPlayers.push(name);
  console.log(gameFlow.numberOfPlayers.length);

  
  return{
    name,isAI
  }
}

// gameFlow.playTheGame();