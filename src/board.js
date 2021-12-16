export default (score) => {
  const leaderboard = document.querySelector('.leaderboard-content');

  leaderboard.innerHTML = '';

  score.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('leaderboard-item');
    li.innerHTML = `<span class="leaderboard-item-name">${item.user}</span> - <span class="leaderboard-item-score">${item.score}</span>`;
    leaderboard.appendChild(li);
  });
};
