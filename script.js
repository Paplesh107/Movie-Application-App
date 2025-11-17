const API_URL = 'movies.json'; // Path to the local JSON file containing movie data
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Fetch and display movies on page load
fetchMovies(API_URL);

// Function to fetch movies from the local JSON file
async function fetchMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(data); // Call function to display movies
}

// Function to display movies on the webpage
function displayMovies(movies) {
    main.innerHTML = ''; // Clear the main content area

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, genres, actors, release_year, trailer } = movie;

        // Create movie container
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        
        // Set the background image for the movie container
        movieEl.style.backgroundImage = `url(${poster_path})`;

        movieEl.innerHTML = `
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
                <p><strong>Genres:</strong> ${genres.join(', ')}</p>
                <p><strong>Actors:</strong> ${actors.join(', ')}</p>
                <p><strong>Release Year:</strong> ${release_year}</p>
                <a href="${trailer}" target="_blank">Watch Trailer</a>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

// Function to determine the rating class (color)
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

// Event listener for search functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value.toLowerCase();

    // Filter movies by title search term
    if (searchTerm && searchTerm !== '') {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                const filteredMovies = data.filter((movie) =>
                    movie.title.toLowerCase().includes(searchTerm)
                );
                displayMovies(filteredMovies);
            });

        search.value = ''; // Clear search field
    } else {
        fetchMovies(API_URL); // If search term is empty, display all movies
    }
});
