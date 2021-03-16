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

//counter
let counter = 0;
let size = imgImages[0].clientWidth;

// submit onClick
const answerInput = document.querySelector('.answer-input');
const submitBtn = document.querySelector('#submitBtn');

const answerObj = {
  answersArr: [],
};

// problem Button click event
const probBtn = document.querySelectorAll('.probBtn');

// timer
const timer = document.querySelector('.timer');
let time = 3000;

setInterval(() => {
  let minute = parseInt(time / 60);
  let second = time % 60;
  timer.innerHTML = `남은시간 : ${minute}분 ${second}초`;
  time--;
}, 1000);

// Image number modify
const imgNumModify = () => {
  document.querySelector('.img-number').innerHTML =
    '문제 ' + (counter + 1) + '.';
};

// object constructor
const objConstuctor = (problemIndex, problemAnswerValue) => {
  return {
    problemIndex,
    problemAnswerValue,
  };
};

const probBtnColorizer = () => {
  //check answered problems
  for (let i = 0; i < 20; i++) {
    let x;
    try {
      x = answerObj.answersArr[i].problemAnswerValue === '';
    } catch (error) {
      x = true;
    }
    if (x) {
      probBtn[i].style.backgroundColor = 'var(--button-color)';
      probBtn[i].style.color = '#000000';
    } else {
      probBtn[i].style.backgroundColor = 'var(--color-light-blue)';
      probBtn[i].style.color = '#000000';
    }
  }
  probBtn[counter].style.backgroundColor = 'var(--color-blue)';
  probBtn[counter].style.color = '#ffffff';
};

//Page move motion
const pageMove = (moveTo) => {
  if (moveTo > imgImages.length - 1) return;
  counter = moveTo;
  imgSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  probBtnColorizer();
  imgNumModify();
};

probBtn.forEach((buttons, index) => {
  buttons.addEventListener('click', () => {
    pageMove(index);
  });
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  answerObj.answersArr[counter] = objConstuctor(counter, answerInput.value);
  pageMove(counter + 1);
  console.log(answerObj.answersArr);
});

probBtnColorizer();
