const url =
  ' https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6yqVLFpP806Nk1GJG4vd/scores';

class game {
  static getScore() {
    const res = await fetch(url);
    const data = await res.json();
    return data.result;
  }
  
}

export default game;