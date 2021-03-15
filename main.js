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
const pageMove = (moveTo) => {
  // if (counter <= 0) return;
  if (counter >= imgImages.length - 1) return;
  counter = moveTo;
  imgSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  imgNumModify();
};

// submit onClick
const answerInput = document.querySelector('.answer-input');
const submitBtn = document.querySelector('#submitBtn');

const answerObj = {
  answersArr: [],
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  answerObj.answersArr[counter] = objConstuctor(counter, answerInput.value);
  pageMove(counter + 1);
});

// object constructor
function objConstuctor(problemIndex, problemAnswerValue) {
  return {
    problemIndex,
    problemAnswerValue,
  };
}

// problem Button click event
const probBtn = document.querySelectorAll('.probBtn');

probBtn.forEach((buttons, index) => {
  buttons.addEventListener('click', () => {
    // console.log(index);
    pageMove(index);
  });
});
