// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {

   // Header scroll effect
   const header = document.getElementById('header');
   window.addEventListener('scroll', () => {
      if (header) {
         if (window.scrollY > 50) {
            header.classList.add('scrolled');
         } else {
            header.classList.remove('scrolled');
         }
      }
   });

   // Mobile menu toggle
   const menuToggle = document.getElementById('menuToggle');
   const navMenu = document.getElementById('navMenu');

   if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
         menuToggle.classList.toggle('active');
         navMenu.classList.toggle('active');
      });
   }

   // Close mobile menu when clicking a link
   document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
         if (menuToggle) menuToggle.classList.remove('active');
         if (navMenu) navMenu.classList.remove('active');
      });
   });

   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
            target.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
            });
         }
      });
   });

   // Active menu highlighting on scroll
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('.nav-menu a');

   window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
         }
      });

      navLinks.forEach(link => {
         link.classList.remove('active');
         if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
         }
      });
   });

   // Reveal animations on scroll (THIS FIXES YOUR INVISIBLE TEXT)
   const revealElements = document.querySelectorAll('.reveal');

   const revealOnScroll = () => {
      revealElements.forEach(element => {
         const elementTop = element.getBoundingClientRect().top;
         const elementVisible = 150;

         if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
         }
      });
   };

   window.addEventListener('scroll', revealOnScroll);
   revealOnScroll(); // Check on load
});
