function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    bitton.on('click', (e) => {
        e.preventDefaul();
        $('html').animate({ scrollTop: 0 }, 1000);
    })
}

backToTop();