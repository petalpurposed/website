window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000);
  });
  
  const hamMenu = document.getElementById('ham-menu');
  const navBar = document.getElementById('nav-bar');
  
  hamMenu.addEventListener('click', function () {
    navBar.classList.toggle('active');
  
    if (!navBar.classList.contains('active')) {
      // Delay scrolling until the menu is completely closed
      setTimeout(function () {
        scrollOnClick();
      }, 500); // Adjust the delay time (in milliseconds) as needed
    }
  });
  
  // Hometab
  const navLinks = document.querySelectorAll('#nav-bar li a');
  
  // Add event listeners for each link
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      // Remove the "active" class from the "hometab" link
      document.getElementById('hometab').classList.remove('active');
    });
  
    link.addEventListener('mouseout', () => {
      // Add the "active" class back to the "hometab" link
      document.getElementById('hometab').classList.add('active');
    });
  
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      navBar.classList.remove('active');
  
      // Delay scrolling until the menu is completely closed
      setTimeout(function () {
        scrollOnClick(link);
      }, 300); // Adjust the delay time (in milliseconds) as needed
    });
  });
  
  function scrollOnClick(link) {
    const targetId = link ? link.getAttribute('href') : '#home';
    const targetSection = document.querySelector(targetId);
  
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
