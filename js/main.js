const fetchJoke = async type => {
  const response = await fetch(
    `https://v2.jokeapi.dev/joke/${type}?blacklistFlags=religious,political,racist,sexist,explicit&type=twopart`
  );
  const data = await response.json();
  return data;
};

const team = ['marta', 'sofia', 'pedro', 'filipe'];
team.map(member => {
  let category = '';
  switch (member) {
    case 'marta':
      category = 'Programming';
    case 'sofia':
      category = 'Miscellaneous';
    case 'pedro':
      category = 'Spooky';
    case 'filipe':
      category = 'Christmas';
  }
  fetchJoke(category).then(data => {
    document.getElementById(`${member}JokeSetup`).textContent += data.setup;
    document.getElementById(`${member}JokeDelivery`).textContent +=
      data.delivery;
  });
});

// const jokeMarta = fetchJoke('Programming').then(data => {
//   document.getElementById('martaJokeSetup').textContent += data.setup;
//   document.getElementById('martaJokeDelivery').textContent += data.delivery;
// });

// const jokeSofia = fetchJoke('Miscellaneous').then(data => {
//   document.getElementById('sofiaJokeSetup').textContent += data.setup;
//   document.getElementById('sofiaJokeDelivery').textContent += data.delivery;
// });

// const jokePedro = fetchJoke('Spooky').then(data => {
//   document.getElementById('pedroJokeSetup').textContent += data.setup;
//   document.getElementById('pedroJokeDelivery').textContent += data.delivery;
// });

// const filipePedro = fetchJoke('Christmas').then(data => {
//   document.getElementById('filipeJokeSetup').textContent += data.setup;
//   document.getElementById('filipeJokeDelivery').textContent += data.delivery;
// });
