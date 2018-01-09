console.log("Up and running!");

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = []

var checkForMatch = function (){
if (cardsInPlay === 2) {
	console.log ("You found a match!");
	}else {
		console.log("Sorry, try again!")
}} 

var flipCard = function (cardId){
console.log("User flipped" + cards[cardId])
checkForMatch();
}
flipCard(0);
flipCard(2);


cardsInPlay.push(cards)
