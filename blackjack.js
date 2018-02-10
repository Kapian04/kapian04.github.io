//diaomond

let diamonds2 = {
	value: 2,
	name: '2 of diamonds',
}
let diamonds3 = {
	value: 4,
	name: '3 of diamonds',
}
let diamonds4 = {
	value: 4,
	name: '4 of diamonds',
}
let diamonds5 = {
	value: 5,
	name: '5 of diamonds',
}
let diamonds6 = {
	value: 6,
	name: '6 of diamonds',
}
let diamonds7 = {
	value: 7,
	name: '7 of diamonds',
}
let diamonds8 = {
	value: 8,
	name: '8 of diamonds',
}
let diamonds9 = {
	value: 9,
	name: '9 of diamonds',
}
let diamonds10 ={
	value: 10,
	name: '10 of diamonds',
}
let diamondsJack = {
	value: 10,
	name: 'Jack of diamonds',
}
let diamondsQueen = {
	value: 10,
	name: 'Queen of diamonds',
}
let diamondsKing = {
	value: 10,
	name: 'King of diamonds',
}
let diamondsAce = {
	value: 11,
	name: 'Ace of diamonds',
}

//spade

let spade2 = {
	value: 2,
	name: '2 of spade',
}
let spade3 = {
	value: 3,
	name: '3 of spade',
}
let spade4 = {
	value: 4,
	name: '4 of spade',
}
let spade5 = {
	value: 5,
	name: '5 of spade',
}
let spade6 = {
	value: 6,
	name: '6 of spade',
}
let spade7 = {
	value: 7,
	name: '7 of spade',
}
let spade8 = {
	value: 8,
	name: '8 of spade',
}
let spade9 = {
	value: 9,
	name: '9 of spade',
}
let spade10 = {
	value: 10,
	name: '10 of spade ',
}
let spadeJack = {
	value: 10,
	name: ' Jack of spade',
}
let spadeQueen = {
	value: 10,
	name: 'Queen of spade',
}
let spadeKing = {
	value: 10,
	name: 'King of spade',
}
let spadeAce = {
	value: 11,
	name: 'Ace of spade',
}

//club



let club2 = {
	value: 2,
	name: '2 of clubs',
}
let club3 = {
	value: 3,
	name: '3 of clubs',
}
let club4 = {
	value: 4,
	name: '4 of clubs',
}
let club5 = {
	value: 5,
	name: '5 of clubs',
}
let club6 = {
	value: 6,
	name: '6 of clubs',
}
let club7 = {
	value: 7,
	name: '7 clubs of ',
}
let club8 = {
	value: 8,
	name: '8 of clubs',
}
let club9 = {
	value: 9,
	name: '9 of clubs',
}
let club10 = {
	value: 10,
	name: '10 of clubs',
}
let clubJack = {
	value: 10,
	name: 'Jack of clubs',
}
let clubQueen = {
	value: 10,
	name: 'Queen of clubs',
}
let clubKing = {
	value: 10,
	name: 'King of clubs',
}
let clubAce = {
	value: 11,
	name: 'Ace of clubs',
}

//hearts

let hearts2 = {
	value: 2,
	name: '2 of hearts',
}
let hearts3 = {
	value: 3,
	name: '3 of hearts',
}
let hearts4 = {
	value: 4,
	name: '4 of hearts',
}
let hearts5 ={
	value: 5,
	name: '5 of hearts ',
}
let hearts6 = {
	value: 6,
	name: '6 of hearts',
}
let hearts7 = {
	value: 7,
	name: '7 of hearts',
}
let hearts8 = {
	value: 8,
	name: '8 of hearts',
}
let hearts9 = {
	value: 9,
	name: '9 of hearts',
}
let hearts10 = {
	value: 10,
	name: '10 of hearts',
}
let heartsJack = {
	value: 10,
	name: 'Jack of hearts',
}
let heartsQueen = {
	value: 10,
	name: 'Queen of hearts',
}
let heartsKing = {
	value: 10,
	name: 'King of hearts',
}
let heartsAce = {
	value: 11,
	name: 'Ace of hearts',
}


let deck = [ diamonds2, diamonds3, diamonds4, diamonds5,diamonds6, diamonds7, diamonds8, diamonds9, diamonds10, diamondsJack, diamondsQueen, 
diamondsKing, diamondsAce, spade2, spade3, spade4, spade5, spade6, spade7, spade8, spade9, spade10, spadeJack, 
spadeQueen, spadeKing, spadeAce, club2,
 club3, club4, club5, club6, club7, club8,
club9, club9, club10, clubJack, clubQueen, clubKing, hearts2, hearts3, hearts4, hearts5, hearts6, hearts7, hearts8, hearts9, 
hearts10, heartsJack, heartsQueen, heartsKing
, heartsAce,
 ];

 let discardPile = [];
 let playerHand = [];
 let dealerHand = [];



/*
function cardsLeftInDeck (){
	for(var i = 0; i < deck.length; i++){
 		if(i === deck.length) {
 			return i - 1;
 		}
 	}
}


 function dealCards(){
 for(var i = 0; i < 2; i++){
 	let randomNumber = Math.floor(Math.random()* cardsLeftInDeck());
 	// dra ett kort från dealer hand
 	// ge kort till spelaren
 	// ta bort kort från dealer hand
 	return playerHand.push(deck[randomNumber]);
 }
 return dealerHand.push(deck[randomNumber]);
 }

function getRidOfCardsInDeck(){
 for(var i = 0; i < deck.length; i++){
 	for(var j = 0; j < playerHand.length; j++){
 		if(deck[i - 1] === playerhand[j - 1]){
 			return delete deck[i - 1];
 		}
 	}
 }
 for(var i = 0; i < deck.length; i++){
 	for(var j = 0; j < dealerHand.length; j++){
 		if(deck[i - 1] === dealerhand[j - 1]){
 			return delete deck[i - 1];
 		}
 	}
 }
}
*/


function dealCardsToPlayer(){
	for(var i = 0; i < 2; i++){
 	
 		let randomNumber = Math.floor(Math.random()* (deck.length-1));
 	
 		let choosenCard = deck[randomNumber];
		deck.splice(randomNumber, 1);

 		playerHand.push(choosenCard);
 	}
}


 	function dealCardsToDealerHand(){
 		for(var i = 0; i < 2; i++){
 		let randomNumber = Math.floor(Math.random()* (deck.length-1));
 	
 		let choosenCard = deck[randomNumber];

    	deck.splice(randomNumber, 1);

 		dealerHand.push(choosenCard);
	}	
}
 		

function hit(){

	let randomNumber = Math.floor(Math.random()* (deck.length-1));
 	
 	let choosenCard = deck[randomNumber];

	deck.splice(randomNumber, 1);

	playerHand.push(choosenCard);

	if(playerHand.length == 3){
		document.getElementById("AddHit").innerHTML = 'You hold ' + playerHand[0].name + ', ' + playerHand[1].name + ' and ' + playerHand[2].name + '.';

	totalValue = totalValue + playerHand[2].value;
		document.getElementById("totalValue").innerHTML = 'Your value is ' + totalValue + '.'; 

		if(totalValue > 21){
			document.getElementById("loss/stand").innerHTML = '<strong>You are bust and lose! &#x1f4b8;</strong>';
		}
	}

	if(playerHand.length == 4){
		document.getElementById("AddHit").innerHTML = 'You hold ' + playerHand[0].name + ', ' + playerHand[1].name + ', ' + playerHand[2].name + ' and ' + playerHand[3].name + '.';

	totalValue = totalValue + playerHand[3].value;
		document.getElementById("totalValue").innerHTML = 'Your value is ' + totalValue + '.'; 

		if(totalValue > 21){
			document.getElementById("loss/stand").innerHTML = '<strong>You are bust and lose! &#x1f4b8;</strong>';
		}
	}

	if(playerHand.length == 5){
		document.getElementById("AddHit").innerHTML = 'You hold ' + playerHand[0].name + ', ' + playerHand[1].name + ', ' + playerHand[2].name + ', ' + playerHand[3].name + ' and ' + playerHand[4].name +  '.';

	totalValue = totalValue + playerHand[4].value;
		document.getElementById("totalValue").innerHTML = 'Your value is ' + totalValue + '.'; 

		if(totalValue > 21){
			document.getElementById("loss/stand").innerHTML = '<strong>You are bust and lose! &#x1f4b8;</strong>';
		}
	}
	if(playerHand.length == 6){
		document.getElementById("AddHit").innerHTML = 'You hold ' + playerHand[0].name + ', ' + playerHand[1].name + ', ' + playerHand[2].name + ', ' + playerHand[3].name + ', ' + playerHand[4].name + ' and ' + playerHand[5].name + '.';

	totalValue = totalValue + playerHand[5].value;
		document.getElementById("totalValue").innerHTML = 'Your value is ' + totalValue + '.'; 

		if(totalValue > 21){
			document.getElementById("loss/stand").innerHTML = '<strong>You are bust and lose! &#x1f4b8;</strong>';
		}
	}
	if(playerHand.length == 7){
		document.getElementById("AddHit").innerHTML = 'You hold ' + playerHand[0].name + ', ' + playerHand[1].name + ', ' + playerHand[2].name + ', ' + playerHand[3].name + ', ' + playerHand[4].name + ', ' + playerHand[5].name + ' and ' + playerHand[6].name + '.';

	totalValue = totalValue + playerHand[6].value;
		document.getElementById("totalValue").innerHTML = 'Your value is ' + totalValue + '.'; 

		if(totalValue > 21){
			document.getElementById("loss/stand").innerHTML = '<strong>You are bust and lose! &#x1f4b8;</strong>';
		}
	}
}

function stand(){

	if(dTotalValue < 17){	
 		while(dTotalValue < 17){

 			document.getElementById("loss/stand").innerHTML = 'You stand';
	 		getPlayerSum();
			getDealerSum();

	 		let randomNumber = Math.floor(Math.random()* (deck.length-1));
	 	
	 		let choosenCard = deck[randomNumber];

			deck.splice(randomNumber, 1);

			dealerHand.push(choosenCard);

			console.log(3, "dTotalValue is ", dTotalValue);

			if(dealerHand.length == 3){
				console.log("dealerhand is 3", dTotalValue, totalValue);

				document.getElementById("dealerHand").innerHTML = 'You hold ' + dealerHand[0].name + ', ' + dealerHand[1].name + ' and ' + dealerHand[2].name + '.';

				
			}
			if(dealerHand.length == 4){
				console.log("dealerhand is 4", dTotalValue, totalValue);

				document.getElementById("dealerHand").innerHTML = 'You hold ' + dealerHand[0].name + ', ' + dealerHand[1].name + ', ' + dealerHand[2].name + ' and ' + dealerHand[3].name + '.';
			}
			if(dealerHand.length == 5){
				console.log("dealerhand is 5", dTotalValue, totalValue);
				document.getElementById("dealerHand").innerHTML = 'You hold ' + dealerHand[0].name + ', ' + dealerHand[1].name + ', ' + dealerHand[2].name + ', ' + dealerHand[3].name + ' and ' + dealerHand[4].name +  '.';
			}
			// 26 21

			if(dTotalValue < totalValue && dTotalValue >= 17){
				console.log("you win");
				document.getElementById("loss/stand").innerHTML = '<br/><strong>You stand and you win!&#x1f44f;</strong>';
			}
			if(dTotalValue > totalValue && dTotalValue >= 17){
				console.log("dealer win");
				document.getElementById("loss/stand").innerHTML = '<br/><strong>You stand and the dealer wins!&#x1f4b8;</strong>';
			}
			if(dTotalValue > 21){
				document.getElementById("loss/stand").innerHTML = '<br/><stron> The dealer is bust and you win&#x1f44f;!</strong>';
			}
			if(dTotalValue === totalValue && dTotalValue >= 17 && dTotalValue <= 21){
				console.log("push");
				document.getElementById("loss/stand").innerHTML = '<br/><strong>You stand and its a push!&#x1f450;</strong>';
			}


			document.getElementById("dTotalValue").innerHTML = 'The dealers value is ' + dTotalValue + '.';

			console.log(4, "dTotalValue is ", dTotalValue);
		}

  	}
  	else if(dTotalValue >= 17){
  		if(totalValue < dTotalValue){
  			getPlayerSum();
			getDealerSum();
  			document.getElementById("dealerHand").innerHTML = 'The dealer holds ' + dealerHand[0].name +  ' and ' + dealerHand[1].name;
  			document.getElementById("loss/stand").innerHTML = 'You stand and you lose!';
			document.getElementById("dTotalValue").innerHTML = 'The dealers value is ' + dTotalValue + '!';
			

  		}
  		/*if(totalValue > dTotalValue){
  			getPlayerSum();
			getDealerSum();
  			document.getElementById("dealerHand").innerHTML = 'The dealer holds ' + dTotalValue + ' and ' + dealerHand[1].name;
  			document.getElementById("loss/stand").innerHTML = 'You stand and you win!';
			document.getElementById("dTotalValue").innerHTML = 'The dealers value is ' + dTotalValue + '.';
  		}
  		*/
  	}
 
}


dealCardsToPlayer();
dealCardsToDealerHand();

let totalValue = 0;

function getPlayerSum(){
	totalValue = 0;
	for(var i = 0; i < playerHand.length; i++){
 		totalValue = totalValue + playerHand[i].value
	}
}



let dTotalValue = 0;

function getDealerSum(){
	dTotalValue = 0;
	for(var i = 0; i < dealerHand.length; i++){
 		dTotalValue = dTotalValue + dealerHand[i].value
	}
}


getPlayerSum();
getDealerSum();

console.log(dealerHand);


document.write('<div id="AddHit">You hold ' + playerHand[0].name + ' and ' + playerHand[1].name + '. <br></div>'); 
//document.write('<div style="font-size:124px">&#x1f0a1;</div>');
document.write('<div id="totalValue">Your value is <strong>' + totalValue + '</strong>.<br></div>');
document.write('<div id="dealerHand">The dealer holds ' + dealerHand[0].name + ' and a hidden card.<br></div>');
document.write('<div id="dTotalValue">The dealers value is <strong> ' + dealerHand[0].value + '</strong>.<br><br></div>');
document.write('<div id = "loss/stand">');

if(playerHand[0].value + playerHand[1].value === 21){
 	document.write('<div>YOU WIN!</div>');
}
else {
	document.write('<div class="button hit" onClick="hit()">Hit</div>');
	document.write('<div class="button stand" onClick="stand()">Stand</div>')
}

document.write('</div>');

/*
else if(dSecondCard.value + dFirstCard.value < firstCard.value + secondCard.value){
	document.write('YOU WIN!');
} 
else if(dSecondCard.value + dFirstCard.value > firstCard.value + secondCard.value){
	document.write('THE DEALER WINS!');
}
else if(dSecondCard.value + dFirstCard.value === firstCard.value + secondCard.value){
	document.write('DRAW, ITS A PUSH');
}
*/

