const url =
  ' https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6yqVLFpP806Nk1GJG4vd/scores';

class game {
  static getScore() {
    const res = await fetch(url);
    const data = await res.json();
    return data.result;
  }

  // POST request
  static addScore (obj) {
    const res = await fetch(url, {
       method: 'POST',
       body: JSON.stringify(obj),
       headers: {
         'Content-Type': 'application/json',
       }, // end headers
     })
     const data = await res.json();
     return data.result;
   }
}

export default game;