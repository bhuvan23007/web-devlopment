const movies = [
    { id: 1, title: "Movie 1", description: "Description of Movie 1" },
    { id: 2, title: "Movie 2", description: "Description of Movie 2" },
    { id: 3, title: "Movie 3", description: "Description of Movie 3" }
];

document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');
    const movieDetails = document.getElementById('movie-details');
    const videoPlayer = document.getElementById('video-player');

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.textContent = movie.title;
        movieElement.addEventListener('click', () => {
            showMovieDetails(movie);
        });
        movieList.appendChild(movieElement);
    });

    function showMovieDetails(movie) {
        movieDetails.style.display = 'block';
        videoPlayer.style.display = 'none';
        movieDetails.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <button onclick="simulateVideoPlayback()">Watch Now</button>
        `;
    }

    window.simulateVideoPlayback = () => {
        movieDetails.style.display = 'none';
        videoPlayer.style.display = 'block';
        videoPlayer.innerHTML = `<h2>Now Playing: Fake Video</h2>`;
    };
});
