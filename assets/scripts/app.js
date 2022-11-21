/// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
const addMovieModel = document.getElementById('add-modal');

// const startAddButton = document.querySelector('header').lastElementChild;
const startAddMovieButton = document.querySelector('header button');

const toggleMovieModal = () => { // function() {}
  addMovieModel.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click', toggleMovieModal);