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

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { // function() {}
  addMovieModel.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

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
};

const backdropCLickHandler = () => {
  toggleBackdrop();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);