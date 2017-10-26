var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"	
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
	
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"	
}];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}

// Allow user to flipCard
var flipCard = function () {
  // Select appropriate card
  cardId = this.getAttribute('data-id');
  console.log(cardId);

  // Append card to array of cards
  cardsInPlay.push(cards[cardId].card);

  // selete the source image for the card
  this.setAttribute('src', cards[cardId].cardImage);

  // Check of cards in play and check for a match
  if (cardsInPlay.length === 2) {
    // If match occurs, call function
    checkForMatch();
    // clear the array for the next round
    cardsInPlay = [];
  }
};

// Create Board function 
var createBoard = function () {
  // create elements for cards on the board
  for (var i = 0; i < cards.length; i++) {
    // Create image element to represent each card
    var cardElement = document.createElement('img');

    // Assign the appropriate image source to represent the back of the card
    cardElement.setAttribute('src', 'images/back.png');

	// Set the card's 'data-id' attribute to be the index of the current element
    cardElement.setAttribute('data-id', i);

	// Create event lister for when a user clicks a card
    cardElement.addEventListener('click', flipCard);

    // Append the card to the game board
    document.getElementById('game-board').appendChild(cardElement);

  }

}

// Create the board by calling the CreatBoad function
createBoard();