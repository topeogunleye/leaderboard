export default (score) => {
  const leaderboard = document.querySelector('.leaderboard-content');

  leaderboard.innerHTML = '';

  score.forEach((item) => {
    console.log(item);
    const li = document.createElement('li');
    li.innerHTML = `${item.user} - ${item.score}`;
    leaderboard.appendChild(li);
  });
};
