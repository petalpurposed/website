window.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1500);
});

const hamMenu = document.querySelector('.hamburger');
const navBar = document.getElementById('nav-bar');
const navLinks = navBar.querySelectorAll('li a');
const homeTab = document.getElementById('hometab');

hamMenu.addEventListener('click', function () {
  hamMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    const isInternalLink = href.startsWith('#') || href.startsWith(window.location.origin);

    if (isInternalLink) {
      event.preventDefault();
      hamMenu.classList.remove('active');
      navBar.classList.remove('active');
      scrollOnClick(link);
    }
  });
});

function scrollOnClick(link) {
  const targetId = link ? link.getAttribute('href') : '#home';
  const targetSection = document.querySelector(targetId);

  // Delay scrolling until the menu is completely closed
  setTimeout(function () {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  }, 300); // Adjust the delay time (in milliseconds) as needed
}

homeTab.addEventListener('mouseover', () => {
  homeTab.classList.remove('active');
});

homeTab.addEventListener('mouseout', () => {
  homeTab.classList.add('active');
});
