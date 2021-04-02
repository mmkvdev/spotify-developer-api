const fetch = require("node-fetch");
const endpoint = "https://api.spotify.com/v1/recommendations";
const artists = '6sFIWsNpZYqfjUpaCgueju';
const danceability = encodeURIComponent('0.9');
const userAccessToken = 'BQD1te8Q053S4E9QeQB4bcs6lKFKHNWMlgtb70vAEGPTCpUXXz3VE7Mj3VzVvgYehZP1wJug90YhxH1r4sI';

fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
  method: "GET",
  headers: {
      Authorization: `Bearer ${userAccessToken}`
  }
})
.then(response => response.json())
.then(({tracks}) => {
  tracks.forEach(item => {
    console.log(`${item.name} by ${item.artists[0].name}`);
  })
})