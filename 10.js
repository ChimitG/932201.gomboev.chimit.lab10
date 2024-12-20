const background = document.querySelector('.background');
const lamp = document.querySelector('.lamp__image');
const light = document.querySelector('.light');
const figures = document.querySelector('.objects__figures');
const rabbit = document.querySelector('.objects__rabbit');
const bird = document.querySelector('.objects__bird');

background.addEventListener('click', () => {
   background.classList.add('remove');
});

lamp.addEventListener('mousedown', () => {
   lamp.classList.add('mousedown');
});

lamp.addEventListener('mouseup', () => {
   lamp.classList.remove('mousedown');
});

lamp.addEventListener('click', () => {
   light.classList.toggle('on');
   figures.classList.toggle('display');
});

rabbit.addEventListener('click', () => {
   rabbit.classList.add('hide');
   bird.classList.remove('hide');
});
bird.addEventListener('click', () => {
   bird.classList.add('hide');
   rabbit.classList.remove('hide');
});