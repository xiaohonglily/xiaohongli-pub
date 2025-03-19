// Navigation Bar

// Select DOM Element
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-menu');
const navLinksItems = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section');

// 1. Switch Hamburger Menu On Clicking
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 2. Collapse Hamburger Menu When Clicking A Navigation Link
navLinksItems.forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});


// For security reasons this part has been removed, for more information please contact Xiaohong Li : https://xiaohongli.netlify.app/

// 3. Scroll To Highlight Current Section 

// 4. Validate and Sanitize Contact Form Inputs



