// import { Player } from './Player.js';
import { getDeckId } from './ShowCards.js';

const start = document.querySelector('.start');
const drawCard = document.querySelector('.draw-card');

const score = document.querySelector('.score-number');
// console.log('hello: ', score);
const main = document.querySelector('.main');
const deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
// let deckId;




document.addEventListener('DOMContentLoaded', () => {
  getDeckId(deckUrl, start, drawCard);
  
});

