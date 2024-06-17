$(document).ready(function() {
  // Event listener using event delegation for all li elements under #p-menu
  $('#p-menu').on("click", "li", function() {
    // Remove 'active' class from all li elements
    $('#p-menu li').removeClass('active');

    // Add 'active' class to the clicked li element
    $(this).addClass('active');

    // Toggle corresponding accordion section
    var id = $(this).attr('id').slice(0, -3); // Extract id without 'btn'
    $('.accord').removeClass('active');
    $('#' + id + 'p').addClass('active');
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
//   // Event listener for element with ID "ub"
//   $(ub).on("click", function() {
//     if ($(this).hasClass("active")) {
//       $(this).removeClass("active");
//     } else {
//       $(this).addClass("active");
//     }
//   });

//   // Event listener for element with ID "eb"
//   $(eb).on("click", function() {
//     if ($(this).hasClass("active")) {
//       $(this).removeClass("active");
//     } else {
//       $(this).addClass("active");
//     }
//   });
// });