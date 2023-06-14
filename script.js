const hamMenu = document.getElementById('ham-menu');
        const navBar = document.getElementById('nav-bar');
    
        hamMenu.addEventListener('click', function () {
          navBar.classList.toggle('active');
        });