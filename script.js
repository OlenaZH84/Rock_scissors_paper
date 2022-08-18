//var btn = document.getElementById('pgId').disabled = true;
const getUserChoice = userInput => {

  userInput = document.getElementById("UserChoiceid").value;
  userInput = userInput.toLowerCase();
   //console.log(userInput);
if ((userInput == 'rock')||(userInput == 'scissors')||(userInput =='paper')||(userInput =='bomb')){
 //var btn = document.getElementById('pgId').disabled = false;
  return userInput; 
 }
   else {alert ('choose rock, scissors or paper');
      
        }

 }

function getComputerChoice(){
   // var computerChoice = Math.floor(Math.random()*3);
  
  var computerChoice = Math.random();
  
if (computerChoice < 0.34) {
    computerChoice = 'rock';
} else if(computerChoice <= 0.67) {
   computerChoice = 'paper';
} else {
  computerChoice = 'scissors';}
    //return computerChoice; 
   //document.getElementById('ComputerChoiceid').innerHTML=computerChoice;
  document.getElementById('ComputerChoiceid').value=computerChoice;
   //console.log(computerChoice);
}

function determinWinner(userChoice, computerChoice){
  var userChoice = document.getElementById('UserChoiceid').value;
  userChoice = userChoice.toLowerCase();
  var computerChoice = document.getElementById('ComputerChoiceid').value;
  if (userChoice === computerChoice){
    return alert('nobody won');
 }
 
  if (userChoice ==='rock'){
      if (computerChoice === 'scissors') {
                    return alert('You won!');      
                     }
      else {  
                    return alert('Computer won!');
                     }
  }
  if (userChoice == 'paper') {
      if (computerChoice == 'rock') {
                    return alert('You won!');
                     } 
    else {
                    return alert('Computer won!');
                     }
  }
  if (userChoice == 'scissors') {
      if (computerChoice == 'rock') {
                    return alert('Computer won!');
                     }
  else {
                    return alert('You won!');
                     }
            } 
   if (userChoice == 'bomb'){ return alert('You won!');
        }
  if (userChoice == ''){ clearAll();
                                }
  if ((userChoice != 'rock')||(userChoice != 'scissors')||(userChoice !='paper')||(userChoice !='bomb')||(userChoice != '')){ clearAll();
                                 }
    }

function playGame(){
   
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  
   // if (userChoice == ""){
  //    document.getElementById('ComputerChoiceid').value= "" ;
  // }
  var result = determinWinner(userChoice, computerChoice);
 //var btn = document.getElementById('pgId').disabled = true;

    
 // console.log(userChoice);
 // console.log(computerChoice);
}
function clearAll() {
a = document.getElementById("UserChoiceid");
b = document.getElementById("ComputerChoiceid");  
a.value = "";
b.value = "";
//var btn = document.getElementById('pgId').disabled = false;
}