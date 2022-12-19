// alert('hello');

const nav = document.querySelector('.header__nav'),
      btn = document.querySelector('.header__burger');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});