export const showCards = (cards, wrapper, score, aceCardsNumber) =>{
    console.log('showCards: ', cards);
    cards.forEach(card => {
      const imageContainer = document.createElement('div');
      const cardPicture = document.createElement('img');
      const value = card.value === "JACK" ? ( 2 ):
      (card.value === "QUEEN") ? ( 3 ):
      (card.value === "KING") ? ( 4 ):
      (card.value === "ACE") ? (11,
      aceCardsNumber++) : 
      (parseInt(card.value))
      score += value;
      console.log('card Value: ', card.value);
      
      imageContainer.className = "image-container";
      cardPicture.className = 'card-picture';
      cardPicture.src = card.image;
      imageContainer.appendChild(cardPicture);
      wrapper.appendChild(imageContainer);
      // console.log('test: ',  score);
      
      
    });
  };


const getCards = (deckId, howMany) => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${howMany}`)
  .then(response => response.json())
  .then(data => {
    console.log("cards is: ", data.cards);
  })
  .catch(err => console.log("blad: ", err))
  
};

export const getDeckId = (url, playBtn, getOneCardBtn, id) => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
 
   id = data.deck_id;
  console.log("deck id: ", id);
  })
  .then( () => {
    playBtn.addEventListener('click', () =>  getCards(id, 2));
    getOneCardBtn.addEventListener('click', () =>  getCards(id, 1));
  })
  .catch( err => console.log("blad: ", err));
};

