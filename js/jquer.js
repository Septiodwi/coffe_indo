$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    pagination: true,
    autoplay: 500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
});