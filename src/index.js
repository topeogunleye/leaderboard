import './style.scss';
import game from './api.js';
import leaderboard from './board.js';

const renderScores = async () => {
  const arrayOfScores = await game.getScore();
  leaderboard(arrayOfScores);
};

//  event listeners on submit button
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const user = document.querySelector('#name').value;
  const score = Number(document.querySelector('#score').value);
  const newScore = {
    user,
    score,
  };

  game.addScore(newScore);

  //  clear input fields
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});

// render onClick of refresh button
document
  .querySelector('#refresh-button')
  .addEventListener('click', renderScores);

// render on page load
document.addEventListener('DOMContentLoaded', renderScores);
