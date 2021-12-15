import './style.scss';
import game from './api';
import leaderboard from './board';

//event listeners on submit button
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

  //clear input fields
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});

