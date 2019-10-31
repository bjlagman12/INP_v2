console.log('Initial rendering');

var slideIndex = 0;
const slideShow = () => {
  let slides = document.querySelectorAll('.mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(slideShow, 5000);
};
slideShow();

let mainNav = document.querySelector('#js-menu');
let navBarToggle = document.querySelector('#js-navbar-toggle');

navBarToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});
