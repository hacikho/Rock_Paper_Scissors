
let compChoice;
let playChoice;
var delayInMilliseconds = 1000; //1 second
let i = 0; //countdown starting
let playScore = 0;
let compScore = 0;



var count = ["3", "2", "1", "Rock !!! Paper !!! Scissors !!!"];


function checkvalue() {
	if (document.getElementById('rock').checked) {
		playChoice = document.getElementById('rock').value;
	}else if(document.getElementById('paper').checked) {
		playChoice = document.getElementById('paper').value;
	}else if(document.getElementById('scissors').checked) {
		playChoice = document.getElementById('scissors').value;
	}	

	 // Reference the submit button
   let btn = document.getElementById('play');
	 btn.disabled = false;
}

function displayImage(){
	switch(playChoice){
		case "1":
			document.getElementById('playerImage').innerHTML = `<img src="images/rock.png" alt="rock">`;
			break;
		case "2":
			document.getElementById('playerImage').innerHTML = `<img src="images/paper.png" alt="paper">`;
			break;
		case "3":
			document.getElementById('playerImage').innerHTML = `<img src="images/scissors.png" alt="scissors">`;
			break;
	}
}

function play(){
	computerChoice();
	displayImage();
	
	if (document.getElementById('rock').checked) {
		playChoice = document.getElementById('rock').value;
	}else if(document.getElementById('paper').checked) {
		playChoice = document.getElementById('paper').value;
	}else if(document.getElementById('scissors').checked) {
		playChoice = document.getElementById('scissors').value;
	}	
		
	if(compChoice == 1 && playChoice == 2){
		document.getElementById('result').innerHTML = "Player Won";
		playScore += 10;
		playerMessage(); 
	}else if(compChoice == 2 && playChoice == 1){
			document.getElementById('result').innerHTML = "Computer Won";
			compScore += 10;
			computerMessage();
	}else if( compChoice == 3 && playChoice == 1){
		document.getElementById('result').innerHTML = "Player Won";
		playScore += 10;
		playerMessage();
	}else if( compChoice == 1 && playChoice == 3){
		document.getElementById('result').innerHTML = "Computer Won";
		compScore += 10;
		computerMessage();
	}else if(compChoice == 2 && playChoice == 3){
		document.getElementById('result').innerHTML = "Player Won";
		playScore += 10;
		playerMessage();
	}else if(compChoice === 3 && playChoice == 2){
		document.getElementById('result').innerHTML = "Computer Won";
		compScore += 10;
		computerMessage();
	}else{
		document.getElementById('result').innerHTML = "Tie Game";
		compScore += 1;
		playScore += 1;
		tieGameMessage();
	}
	document.getElementById('playScore').innerHTML = playScore;
	document.getElementById('compScore').innerHTML = compScore;
	setTimeout(clearScreen, 2000);
	setTimeout(clearAllRadios, 2000);
}

function playerMessage() {
  var para = document.createElement("P");
  para.innerHTML = "Player Won";
  document.getElementById("i").appendChild(para);
}

function computerMessage() {
  var para = document.createElement("P");
  para.innerHTML = "Computer Won";
  document.getElementById("i").appendChild(para);
}

function tieGameMessage() {
  var para = document.createElement("P");
  para.innerHTML = "Tie Game";
  document.getElementById("i").appendChild(para);
}

function reset(){
	playScore = 0;
	compScore = 0;
	document.getElementById('playScore').innerHTML = playScore;
	document.getElementById('compScore').innerHTML = compScore;
	clearScreen();
	removeMessages();
}

function removeMessages(){
	var elem = document.getElementById("i");
  elem.parentNode.removeChild(elem);
}

function clearAllRadios() {
    var radList = document.getElementsByName('radio');
    for (var i = 0; i < radList.length; i++) {
      if(radList[i].checked) document.getElementById(radList[i].id).checked = false;
    }
  }

function clearScreen(){
	document.getElementById('compChoice').innerHTML = "";
	document.getElementById('playChoice').innerHTML = "";
	document.getElementById('playerImage').innerHTML="";
	document.getElementById('result').innerHTML ="";
	document.getElementById('countdown').innerHTML ="";
	// Reference the submit button
	let btn = document.getElementById('play');
  btn.disabled = true;
}

function computerChoice(){
	compChoice = Math.floor((Math.random()*3) + 1) ;
	if(compChoice == 1){
		document.getElementById('compChoice').innerHTML = `<img src="images/rock.png" alt="rock">`;
	}else if(compChoice == 2){
		document.getElementById('compChoice').innerHTML = `<img src="images/paper.png" alt="paper">`;
	}else if(compChoice == 3){
		document.getElementById('compChoice').innerHTML = `<img src="images/scissors.png" alt="scissors">`;
	}
}

function countDown() {	  
	if(i <= count.length-1){
	    document.getElementById('countdown').innerHTML = count[i];
	    i++;
		setTimeout(countDown, 700);
    }else{
		i=0;
	}	
}

