const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: '1000',

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function onSignIn(googleUser) {
    // Access user information
    var profile = googleUser.getBasicProfile();
    console.log("User is signed in as: " + profile.getName());

    // You can perform actions with the user's information here
}

gapi.load('auth2', function () {
    gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID', // Replace with your OAuth 2.0 Client ID
    }).then(function () {
        // Create the sign-in button
        gapi.signin2.render('google-signin-button', {
            'scope': 'profile email', // Specify the scopes you need
            'theme': 'dark', // Choose 'dark' or 'light' for the button theme
            'onsuccess': onSignIn // Callback function for successful sign-in
        });
    });
});