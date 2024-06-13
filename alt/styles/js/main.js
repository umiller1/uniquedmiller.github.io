// navigation
let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#mainnav');
let anchors = document.querySelector('#mainnav ul');

hamburger.addEventListener('click', function() {
  // hamburger.classList.toggle('isactive');
  menu.classList.toggle('mobstyle');
});
anchors.addEventListener('click', function() {
  // hamburger.classList.toggle('isactive');
  menu.classList.remove('mobstyle');
});