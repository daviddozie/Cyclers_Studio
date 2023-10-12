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