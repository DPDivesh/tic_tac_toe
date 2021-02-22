//gameboard module
const checkWinner = (()=>{
  //private vals
  let winCountPlayerOne = 0;
  let winCountPlayerTwo = 0;
  const checksForWins = () => {
    if(document.getElementById("textP1").innerHTML != PlayerOne.name +" Wins!" && document.getElementById("textP2").innerHTML != PlayerTwo.name +" Wins!" &&   document.getElementById("textP2").innerHTML !=" It's A Tie!"){
  
  let playerGameChoices = gameSelections.gameChoices;
  
if(playerGameChoices[0]=="X"&& playerGameChoices[1]=="X"&& playerGameChoices[2]=="X"){
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[3]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[5]=="X"){
  
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[6]=="X"&& playerGameChoices[7]=="X"&& playerGameChoices[8]=="X"){
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;

  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="X"&& playerGameChoices[3]=="X"&& playerGameChoices[6]=="X"){

  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;

  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[1]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[7]=="X"){
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;

  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="X"&& playerGameChoices[5]=="X"&& playerGameChoices[8]=="X"){

  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;

  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();
  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[8]=="X"){
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="X"&& playerGameChoices[4]=="X"&& playerGameChoices[6]=="X"){
  document.getElementById("textP1").innerHTML =PlayerOne.name +" Wins!";
  
  winCountPlayerOne = winCountPlayerOne+1;
  
  buttonsPushed.scoreCountOne.innerHTML = winCountPlayerOne; 
  displayController.onPlayerOne();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="O"&& playerGameChoices[1]=="O"&& playerGameChoices[2]=="O"){

  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  winCountPlayerTwo = winCountPlayerTwo+1;
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}

else if(playerGameChoices[3]=="O"&& playerGameChoices[4]=="O" && playerGameChoices[5]=="O"){

  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[6]=="O" && playerGameChoices[7]=="O" && playerGameChoices[8]=="O"){
  
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="O"&& playerGameChoices[3]=="O" && playerGameChoices[6]=="O"){

  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[1]=="O"&& playerGameChoices[4]=="O" && playerGameChoices[7]=="O"){
 
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
 
  winCountPlayerTwo = winCountPlayerTwo+1;
 
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="O"&& playerGameChoices[5]=="O"&& playerGameChoices[8]=="O"){
   document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[0]=="O"&& playerGameChoices[4]=="O"&& playerGameChoices[8]=="O"){
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();

  // gameFlow.playTheGame();
}
else if(playerGameChoices[2]=="O"&& playerGameChoices[4]=="O"&& playerGameChoices[6]=="O"){
  document.getElementById("textP2").innerHTML =PlayerTwo.name +" Wins!";
  
  winCountPlayerTwo = winCountPlayerTwo+1;
  buttonsPushed.scoreCountTwo.innerHTML = winCountPlayerTwo; 
  displayController.onPlayerTwo();
}
else {
for(let z=0, j=0; z < playerGameChoices.length; z++){
if(playerGameChoices[z]!=" "){
  j=j+1;
if(j == 9){
  document.getElementById("textP2").innerHTML =" It's A Tie!";
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
    temp[i].remove();
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


function emptyIndexies(board){
  let tempBoard=[ ];
  for(let i=0; i<board.length;i++){
    if (board[i]==" "){
      tempBoard.push(i);
    }

  }
  return tempBoard;
}

const gameSelections = (() =>{
  const playerOneAI = (gameChoices) =>{
    // console.log("Problem?");
    let squareLocation =document.querySelectorAll('.squaresXO') ;
    let bestSpot=minmax(gameChoices,ai);
    console.log(bestSpot);
    gameChoices[bestSpot.index]="X";
    squareLocation[bestSpot.index].innerHTML="X";
         checkWinner.checksForWins();
         currentPlayer="PlayerTwo"  

        //  minmax();
  }
  const playerTwoAI = (gameChoices) =>{
    // console.log("Problem?");
    let squareLocation =document.querySelectorAll('.squaresXO') ;
    let bestSpot=minmaxTwo(gameChoices,ai);
    console.log(bestSpot);
    gameChoices[bestSpot.index]="O";
    squareLocation[bestSpot.index].innerHTML="O";
         checkWinner.checksForWins();

        //  minmax();
  }
  const human ="O";
const ai = "X";

const humanTwo="X";
const aiTwo ="O";

let scores = {
  'X' : 10,
  'O' : -10,
  'tie': 0
}



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

const minmaxTwo = (newBoard,player) =>{
  newBoard = Array.from(newBoard);
  let availSpots = emptyIndexies(newBoard);
  if (winning(newBoard, humanTwo)){
    return {score:-10};
 }
 else if (winning(newBoard, aiTwo)){
   return {score:10};
 }
 else if ( availSpots.length === 0){
   return {score:0};
 }

 var moves = [];

 // loop through available spots
 for (var i = 0; i <  availSpots.length; i++){
   //create an object for each and store the index of that spot 
   var move = {};
   move.index = availSpots[i];

   // set the empty spot to the current player
   newBoard[availSpots[i]] = player;

   /*collect the score resulted from calling minmax 
     on the opponent of the current player*/
   if (player == aiTwo){
     var result = minmaxTwo(newBoard, humanTwo);
     move.score = result.score;
   }
   else{
     var result = minmaxTwo(newBoard, aiTwo);
     move.score = result.score;
   }

   // reset the spot to empty
   newBoard[availSpots[i]] = move.index;
   // push the object to the array
   moves.push(move);
 }
 var bestMove;
if(player === aiTwo){
  var bestScore = -10000;
  for(var i = 0; i < moves.length; i++){
    if(moves[i].score > bestScore){
      bestScore = moves[i].score;
      bestMove = i;
    }
  }
}else{

// else loop over the moves and choose the move with the lowest score
  var bestScore = 10000;
  for(var i = 0; i < moves.length; i++){
    if(moves[i].score < bestScore){
      bestScore = moves[i].score;
      bestMove = i;
    }
  }
}

// return the chosen move (object) from the moves array
return moves[bestMove];
}

  const minmax = (newBoard,player) =>{
    newBoard = Array.from(newBoard);
    let availSpots = emptyIndexies(newBoard);
    if (winning(newBoard, human)){
      return {score:-10};
   }
   else if (winning(newBoard, ai)){
     return {score:10};
   }
   else if ( availSpots.length === 0){
     return {score:0};
   }

   var moves = [];

   // loop through available spots
   for (var i = 0; i <  availSpots.length; i++){
     //create an object for each and store the index of that spot 
     var move = {};
     move.index = availSpots[i];
 
     // set the empty spot to the current player
     newBoard[availSpots[i]] = player;
 
     /*collect the score resulted from calling minmax 
       on the opponent of the current player*/
     if (player == ai){
       var result = minmax(newBoard, human);
       move.score = result.score;
     }
     else{
       var result = minmax(newBoard, ai);
       move.score = result.score;
     }
 
     // reset the spot to empty
     newBoard[availSpots[i]] = move.index;
     // push the object to the array
     moves.push(move);
   }
   var bestMove;
  if(player === ai){
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{

// else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

// return the chosen move (object) from the moves array
  return moves[bestMove];
}
let gameChoices = [" "," "," "," "," "," "," "," "," "];
let currentPlayer;
let isAIP1;
let isAIP2;
let tempBoard=[];

const makeSquares = () =>{
  currentPlayer ="PlayerOne";
  for(let i=0; i<gameChoices.length;i++){
    let makeGameSquares = document.getElementById("ticTacToeZone");
    let addSquare = document.createElement("div");
    addSquare.classList.add("squaresXO");
    addSquare.innerHTML = gameChoices[i];
    makeGameSquares.append(addSquare);
    let squareLocation =document.querySelectorAll('.squaresXO') ;
  
    squareLocation[i].innerHTML =gameChoices[i];
    if(PlayerOne.isAI=="yes" && PlayerTwo.isAI=="yes" && squareLocation.length==9){
      randomSpot(gameChoices);
      currentPlayer="PlayerTwo"
      while(tempBoard.length!=9){
        console.log("Loops")
        if(currentPlayer=="PlayerOne" ){
          // bestMove();
          playerOneAI(gameChoices);

        currentPlayer="PlayerTwo"
         }
         if( currentPlayer =="PlayerTwo"){
            playerTwoAI(gameChoices);
            currentPlayer="PlayerOne"
          }

           for(let i=0; i<gameChoices.length;i++){
             if ((gameChoices[i]=="X")||(gameChoices[i]=="O")){
              tempBoard.push(i);
            }

           }
           console.log(tempBoard);
          }
    
  
    }
    else if(PlayerOne.isAI=="yes" && PlayerTwo.isAI=="no"){

        if(9 <= squareLocation.length){
      if(currentPlayer=="PlayerOne" ){
        // bestMove();
        randomSpot(gameChoices);
      currentPlayer="PlayerTwo"
       }
      }
       addSquare.addEventListener('click',()=>{
         if(gameChoices[i]==" "){
       if(currentPlayer=="PlayerTwo"){
        gameChoices[i]= "O";
        currentPlayer = "PlayerOne";
        squareLocation[i].innerHTML = gameChoices[i]; 
        checkWinner.checksForWins();       
        console.log('hand off to player One');
        if(gameChoices[i]=="O"){
          playerOneAI(gameChoices);
          currentPlayer="PlayerTwo"
        }
        }
         }   
     
  
  })

}

    else if(PlayerOne.isAI=="no" && PlayerTwo.isAI=="yes"){
      

         addSquare.addEventListener('click',()=>{
           if(gameChoices[i]==" "){
         if(currentPlayer=="PlayerOne"){
          gameChoices[i]= "X";
          currentPlayer = "PlayeTwo";
          squareLocation[i].innerHTML = gameChoices[i]; 
          checkWinner.checksForWins();       
          console.log('hand off to player One');
          if(gameChoices[i]=="X"){
            playerTwoAI(gameChoices);
            currentPlayer="PlayerOne"
          }
          }
           }   
       
    
    })
  
    }
    else if(PlayerOne.isAI=="no" && PlayerTwo.isAI=="no"){
    addSquare.addEventListener('click',()=>{
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
     while( currentPlayer=="PlayerOne"){
    if(gameArray[z]==" "){
  
         gameArray[z]="X";
         squareLocation[z].innerHTML ="X"; 
       currentPlayer="PlayerTwo"  
  
       }
       else{
       z=Math.round(Math.random()*(8-0)+0);
  
       }
      }
      
     currentPlayer="PlayerTwo"  
  
  
     }

return{
gameChoices,minmax,
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
          if(radios[i].value=="yes"){
            holdPlayerName = document.getElementById("playerOneName").value;
            currentPlayerName =holdPlayerName + " "+ " AI";
            gameSelections.isAIP1 = "yes";
          }
          else{
             currentPlayerName = document.getElementById("playerOneName").value;
             gameSelections.isAIP1 = "no";

          }

          // only one radio can be logically checked, don't check the rest
          break;
        }

      }


    if(currentPlayerName != "" ||currentPlayerName != undefined){
    PlayerOne =gamePlayers(currentPlayerName,gameSelections.isAIP1);
    document.getElementById("player1").innerHTML=PlayerOne.name;
    let setPlayerOne = document.getElementById("player1");

    setPlayerOne.style.width="17.4vw";
    setPlayerOne.style.fontSize ="3vw";

    scoreCountOne.classList.add("scoreCount");
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
        if(radios[i].value=="yes"){
          holdPlayerName = document.getElementById("playerTwoName").value;
          currentPlayerName =holdPlayerName + " "+ " AI";
          gameSelections.isAIP2 = "yes";
        }
        else{
           currentPlayerName = document.getElementById("playerTwoName").value;
           gameSelections.isAIP2 = "no";

        }
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }

    if(currentPlayerName != "" || currentPlayerName != undefined){
    PlayerTwo = gamePlayers(currentPlayerName,gameSelections.isAIP2);
    document.getElementById("player2").innerHTML=PlayerTwo.name;
    let setPlayerTwo = document.getElementById("player2");

    setPlayerTwo.style.width="17.4vw";
    setPlayerTwo.style.fontSize ="3vw";

    
    scoreCountTwo.classList.add("scoreCount");
    scoreCountTwo.innerHTML = checkWinner.winCountPlayerTwo; 
    scoreTwo.appendChild(scoreCountTwo);

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
  name;
  // playerNumber;

  gameFlow.numberOfPlayers.push(name);

  
  return{
    name,isAI
  }
}

// gameFlow.playTheGame();