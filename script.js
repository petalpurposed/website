window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    setTimeout(function() {
        preloader.style.display = "none";
    }, 1000);
});


const hamMenu = document.getElementById('ham-menu');
        const navBar = document.getElementById('nav-bar');
    
        hamMenu.addEventListener('click', function () {
          navBar.classList.toggle('active');
        });




//Hometab
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
        });