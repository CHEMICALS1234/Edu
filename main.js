const toggleBtn = document.querySelector('.navbar-toggle');
const list = document.querySelector('.navbar-list');
const icon = document.querySelector('.navbar-icon');

//navbar
toggleBtn.addEventListener('click', () => {
  list.classList.toggle('active');
  icon.classList.toggle('active');
});

//img

const imgSlide = document.querySelector('.img-slide');
const imgImages = document.querySelectorAll('.img-slide img');

//prev, next buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 0;
const size = imgImages[0].clientWidth;
console.log(size);

// Image number modify
const imgNumModify = () => {
  document.querySelector('.img-number').innerHTML =
    '문제 ' + (counter + 1) + '.';
};

// initial transform
// imgSlide.style.transform = 'translateX(' + -size * counter + 'px)';

//Button Listeners
nextBtn.addEventListener('click', () => {
  if (counter >= imgImages.length - 1) return;
  imgSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  imgSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  imgNumModify();
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  imgSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  imgSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  imgNumModify();
});

imgSlide.addEventListener('transitionend', () => {
  if (imgImages[counter].id === 'lastClone') {
    imgSlide.style.transition = 'none';
    // console.log('none');
    counter = imgImages.length - 2;
    imgSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  if (imgImages[counter].id === 'firstClone') {
    imgSlide.style.transition = 'none';
    // console.log('none');
    counter = imgImages.length - counter;
    imgSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});
