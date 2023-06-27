/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

var burguer = document.getElementById('hamburguer');
var burguerButton = document.getElementById('burguerButton');
var icone = true;

function toggleIcon(){
    if(icone){
        burguer.innerHTML = '<i class="bi bi-x-lg"></i>';
        icone = false;
    } else {
        burguer.innerHTML = '<i class="bi bi-list"></i>';
        icone = true;
    }
        
}

burguerButton.addEventListener('click', toggleIcon);

const menuItems = document.querySelectorAll('.seletor');

menuItems.forEach(item => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;

        window.scroll({
            top: to - 100,
            behavior: "smooth",
        })
    });
})

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })    
});