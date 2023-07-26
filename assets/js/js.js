//navar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  // const navbarLinks = document.querySelector('.navbar-nav');

if (window.scrollY > 0) {
  navbar.classList.add('scrolled');
  // navbarLinks.classList.add('scrolled');
} else {
  navbar.classList.remove('scrolled');
  // navbarLinks.classList.remove('scrolled');
}
});























// const navbar = document.querySelector('.navbar');
// const links = document.querySelector(".nav-link");

// // Add a scroll event listener to the window object
// window.addEventListener('scroll', function() {
//   // Check the current scroll position
//   if (window.scrollY > 100) {
//     // If the scroll position is greater than 100px, change the background color
//     navbar.style.backgroundColor = '#002B5B';
    
//   } else {
//     // Otherwise, set the background color back to the default
//     navbar.style.backgroundColor = 'transparent';
//   }
// });
