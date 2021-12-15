export default (score) => {
  const leaderboard = document.querySelector('.leaderboard-content');

  leaderboard.innerHTML = '';

  score.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user} - ${item.score}`;
    leaderboard.appendChild(li);
  });
};
