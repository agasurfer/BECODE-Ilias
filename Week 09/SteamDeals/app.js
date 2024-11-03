

// DOM VARIABLES
const gamesContainer = document.getElementById('gamesContainer');
const searchInput = document.getElementById('search');
const metacriticFilter = document.getElementById('metacriticFilter');
const dealRatingFilter = document.getElementById('dealRatingFilter');

// FETCHING FUNCTION
async function fetchGames() {
  try {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
    const games = await response.json();
    displayGames(games); 
  } catch (error) {
    console.error("Erreur lors de la récupération des jeux :", error);
  }
}

// FUNCTION TO DISPLAY GAMES
function displayGames(games) {
  gamesContainer.innerHTML = ''; 
  games.forEach(game => {
    
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';

    gameCard.innerHTML = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      <img src="${game.thumb}" alt="Miniature de ${game.title}" class="game-thumb">
      <h2>${game.title}</h2>
      <p><strong>Sale Price :</strong> $${game.salePrice}</p>
      <p><strong>Standard Price :</strong> $${game.normalPrice}</p>
      <p><strong>Metacritic Score :</strong> ${game.metacriticScore}</p>
      <p><strong>Steam Evaluation :</strong> ${game.steamRatingText || "N/A"}</p>
    </a>`;

    gamesContainer.appendChild(gameCard);
  });
}

// FUNCTION FOR FILTERS
function filterGames(games) {
  const searchTerm = searchInput.value.toLowerCase();
  const metacriticScore = parseInt(metacriticFilter.value, 10);
  const dealRating = parseFloat(dealRatingFilter.value);

  return games.filter(game => {
    const matchesName = game.title.toLowerCase().includes(searchTerm);
    const matchesMetacritic = !metacriticScore || game.metacriticScore >= metacriticScore;
    const matchesDealRating = !dealRating || game.dealRating >= dealRating;

    return matchesName && matchesMetacritic && matchesDealRating;
  });
}

// EVENT LISTENERS
[searchInput, metacriticFilter, dealRatingFilter].forEach(filterElement => {
  filterElement.addEventListener('input', async () => {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
    const games = await response.json();
    const filteredGames = filterGames(games); 
    displayGames(filteredGames);
  });
});

/* gameCard.addEventListener('click', () => {

}) */

fetchGames();
