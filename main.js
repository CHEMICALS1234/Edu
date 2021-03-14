const toggleBtn = document.querySelector('.navbar-toggle');
const list = document.querySelector('.navbar-list');
const icon = document.querySelector('.navbar-icon');

toggleBtn.addEventListener('click', () => {
  list.classList.toggle('active');
  icon.classList.toggle('active');
});
