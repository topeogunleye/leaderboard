const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6yqVLFpP806Nk1GJG4vd/scores';
class game {
  static async getScore() {
    const res = await fetch(url);
    const data = await res.json();
    return data.result;
  }

  // POST request
  static async addScore(obj) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    return data.result;
  }
}

export default game;
