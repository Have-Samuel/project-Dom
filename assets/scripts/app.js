/// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
const addMovieModel = document.getElementById('add-modal');
// const startAddButton = document.querySelector('header').lastElementChild;
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');
const confirmAddMovieButton = addMovieModel.querySelector('.btn--success');
const userInputs = addMovieModel.querySelectorAll('input');
// const userInput = addMovieModel.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');

// Adding movies
const movies = [];

// Updates the UI when the Array has some movies
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex ++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  // listRoot.children[movieIndex].remove();
  listRoot.removeChild(listRoot.children[movieIndex]);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class='movie-element__image'>
  <img src='${imageUrl}' alt='${title}'>
  </div>
  <div class='movie-element__info'>
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.appendChild(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { // function() {}
  addMovieModel.classList.toggle('visible');
  toggleBackdrop();
};

// clearing the Movie Inputs
const clearMovieInput = () => {
  for (const usrInput of userInputs) { // userInputs[0].value = '';
    usrInput.value = '';
  }
};

// Cancelling Button in the Modal
const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

// Adding Info to the modal
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (titleValue.trim() === ''
  || imageUrlValue.trim() === ''
  || ratingValue.trim() === ''
  || +(ratingValue < 1)
  || +ratingValue > 5) {
    alert('Please enter valid values,(rating between 1 and 5)');
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal(); // to close the model
  clearMovieInput();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();

  const backdropCLickHandler = () => {
    toggleBackdrop();
  };
};
startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
