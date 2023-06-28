let de = document.querySelector('.menu-button');
let sd = document.querySelector('.slidediv');
let ham = document.querySelector('.ham');
let menuItems = document.querySelectorAll('.olist-a');

de.addEventListener('click', function() {
  sd.classList.toggle('active-slide');
  ham.classList.toggle('action-slide');
});

