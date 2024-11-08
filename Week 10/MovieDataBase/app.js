//VARIABLES
const apiKey = 'e50596e06f08ff0f93d070c9e32d65a0';


//DOM VARIABLES
const searchButton = document.querySelector(".submit");
const input = document.querySelector(".input");
const message = document.querySelector(".result-text");
const comedyBtn = document.querySelector(".comedy")
const dramaBtn = document.querySelector(".drama")
const actionBtn = document.querySelector(".action")
const thrillerBtn = document.querySelector(".romance")
const fantasyBtn = document.querySelector(".fantasy")
const animationBtn = document.querySelector(".animation")
const genreBtns = document.querySelectorAll(".genres a")


//EVENT LISTENERS
searchButton.addEventListener("click", () => {
    const query = document.querySelector(".input").value
    fetchFilm(query);
    clearSearch();
});

input.addEventListener('keypress',(event) => {
    if (event.key === "Enter") {
        const query = document.querySelector(".input").value;
    fetchFilm(query);
    clearSearch();
    
    }
})

/* comedyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchMoviesByGenre("comedy")
});
dramaBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchMoviesByGenre("drama")
});
actionBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchMoviesByGenre("action")
});
thrillerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchMoviesByGenre("thriller")
});
fantasyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchMoviesByGenre("fantasy")
});
animationBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchMoviesByGenre("animation")
}); */

genreBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
   event.preventDefault();

    //Deletes active class
    genreBtns.forEach(b => b.classList.remove('active'));

    //adds active class to the button
    event.target.classList.add('active');

    // launches the movie by genre
    fetchMoviesByGenre(event.target.textContent.toLowerCase());
  });
});




// ASYNC FUNCTION THAT FETCHES A MOVIE BY INPUT

let fetchFilm = async (query) => {
    if (!query || query === "")
        return;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.results && data.results.length > 0) {
            // Clear existing slides
            const swiperWrapper = document.querySelector(".swiper-result .swiper-wrapper");
            swiperWrapper.innerHTML = '';
             message.innerText = `These are the results for "${query}"`

            // Loop through the movie results and create slides
            data.results.forEach((movie) => {
                if (movie.poster_path) { // Check if poster is available
                    const slide = document.createElement("div");
                    slide.classList.add("swiper-slide", "movie-card");

                    // Create image element for the movie poster
                    const img = document.createElement("img");
                    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    img.alt = `${movie.title} Poster`;

                    // Append image to slide
                    slide.appendChild(img);

                    // Add slide to the swiper wrapper
                    swiperWrapper.appendChild(slide);
                }
               
            });
            
        }
         else {
                    message.innerText = `There are no results for "${query}"`
                }
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
};

// ASYNC FUNCTION THAT FETCHES LATEST RELEASES
let fetchLatestReleases = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.results && data.results.length > 0) {
            // Clear existing slides
            const swiperWrapperReleases = document.querySelector(".swiper-releases .swiper-wrapper");
            swiperWrapperReleases.innerHTML = '';

            // Loop through the movie results and create slides
            data.results.forEach((movie) => {
                if (movie.poster_path) { // Check if poster is available
                    const slide = document.createElement("div");
                    slide.classList.add("swiper-slide", "movie-card");

                    // Create image element for the movie poster
                    const img = document.createElement("img");
                    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    img.alt = `${movie.title} Poster`;

                    // Overlay content
    const overlay = document.createElement("div");
    overlay.classList.add("movie-info");

    // Movie title
    const title = document.createElement("h3");
    title.textContent = movie.title;

    // Release year
    const year = document.createElement("p");
    year.textContent = `${new Date(movie.release_date).getFullYear()}`;

    // IMDb rating
    const rating = document.createElement("p");
    rating.textContent = `${movie.vote_average || "N/A"}`;

    // Append all movie info to overlay
    overlay.appendChild(title);
    overlay.appendChild(year);
    overlay.appendChild(rating);


                  

                    // Append image and release date to slide
                    slide.appendChild(img);
                    slide.appendChild(overlay);
                    

                    // Add slide to the swiper wrapper
                    swiperWrapperReleases.appendChild(slide);
                }
            });

            
          
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
};

// Call the function to fetch the latest movie releases
fetchLatestReleases();

// ASYNC FUCTION THAT FETCHES MOVIES BY GENRES

let fetchMoviesByGenre = async (genre) => {
    let genreId;
    switch (genre) {
        case 'comedy':
            genreId = 35;
            break;
        case 'drama':
            genreId = 18;
            break;
        case 'action':
            genreId = 28;
            break;
        case 'thriller':
            genreId = 53;
            break;
        case 'fantasy':
            genreId = 14;
            break;
        case 'animation':
            genreId = 16;
            break;
        default:
            console.error('Invalid genre');
            return;
    }
 
  
  
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=en-US&page=1&region=US`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.results && data.results.length > 0) {
            // Clear existing slides
            const swiperWrapperGenre = document.querySelector(".swiper-genres .swiper-wrapper");
            swiperWrapperGenre.innerHTML = '';

            // Loop through the movie results and create slides
            data.results.forEach((movie) => {
                if (movie.poster_path) { // Check if poster is available
                    const slide = document.createElement("div");
                    slide.classList.add("swiper-slide", "movie-card");

                    // Create image element for the movie poster
                    const img = document.createElement("img");
                    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    img.alt = `${movie.title} Poster`;

    

                    // Append image and release date to slide
                    slide.appendChild(img);
                    

                    // Add slide to the swiper wrapper
                    swiperWrapperGenre.appendChild(slide);
                }
            });

           
          
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
};

        



// SWIPER HANDELING

//SWIPER RESULT
const swiper = new Swiper('.swiper-result', {
    navigation: {
        nextEl: '.swiper-button-next-search',
        prevEl: '.swiper-button-prev-search',
    },
    loop: true,
    preventClicks: false,
    spaceBetween: 10,
    watchOverflow: true,
    simulateTouch: true,
    slidesPerView: 4,
});

//SWIPER LATEST RELEASES

const swiperRealease = new Swiper('.swiper-releases', {
    navigation: {
        nextEl: '.swiper-button-next-release',
        prevEl: '.swiper-button-prev-release',
    },
    loop: true,
    preventClicks: false,
    spaceBetween: 10,
    watchOverflow: true,
    simulateTouch: true,
    slidesPerView: 4,
});

//SWIPER GENRES
const genreSwiper = new Swiper('.swiper-genres', {
                navigation: {
                    nextEl: '.swiper-button-next-genres',
                    prevEl: '.swiper-button-prev-genres',
                },
                loop: true,
                preventClicks: false,
                spaceBetween: 10,
                watchOverflow: true,
                simulateTouch: true,
                slidesPerView: 4,
})

//FUNCTION THAT CLEARS THE SEARCHBAR
const clearSearch = () => {
    document.querySelector(".search-input").value = "";
};