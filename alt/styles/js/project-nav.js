$(document).ready(function() {
  let listbtn = '#p-menu li';
  
  $(listbtn).on('click', function() {
      if (!$(this).hasClass('active')) {
          $(this).addClass('active');
      }
  });
});
// // navigation
// let ub = document.querySelector('#uxbtn');
// let eb = document.querySelector('#edbtn');
// let ab = document.querySelector('#pabtn');
// let uxp = document.querySelector('#uxp');
// let edp = document.querySelector('#edp');
// let pap = document.querySelector('#pap');
// let listbtn = document.querySelector('#p-menu li');

// $(document).ready(function() {
//   $(listbtn).on('click', function() {
//       if (!$(this).hasClass('active')) {
//           $(this).addClass('active');
//       }
//   });
// });
// anchors.addEventListener('click', function() {
//   // hamburger.classList.toggle('isactive');
//   menu.classList.remove('mobstyle');
// });