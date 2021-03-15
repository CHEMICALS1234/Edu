'use strict';

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

// Image number modify
const imgNumModify = () => {
  document.querySelector('.img-number').innerHTML =
    '문제 ' + (counter + 1) + '.';
};

//Page move motion
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

// submit onClick
const answerInput = document.querySelector('.answer-input');
const submitBtn = document.querySelector('#submitBtn');

const answerObj = {
  answersArr: [],
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  answerObj.answersArr[counter] = objConstuctor(counter, answerInput.value);

  console.log(answerObj.answersArr);
});

// object constructor
function objConstuctor(problemIndex, problemAnswerValue) {
  return {
    problemIndex,
    problemAnswerValue,
  };
}
