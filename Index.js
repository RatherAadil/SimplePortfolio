const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-Ul');

hamburger.addEventListener('click' , () => {
  navUl.classList.toggle('show');
});
