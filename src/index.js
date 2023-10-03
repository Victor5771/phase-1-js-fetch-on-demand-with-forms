document.addEventListener('DOMContentLoaded', init);
const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
      const movieDetails = document.querySelector('#movieDetails');
      const titleElement = movieDetails.querySelector('h4');
      const summaryElement = movieDetails.querySelector('p');
  
      // Fetch movie data based on the user's input
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then((data) => {
          // Update the movie details section with the fetched data
          titleElement.innerText = data.title;
          summaryElement.innerText = data.summary;
        })
        .catch((error) => {
          // Handle errors, e.g., display an error message to the user
          titleElement.innerText = 'Movie not found';
          summaryElement.innerText = '';
          console.error(error);
        });
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);
  