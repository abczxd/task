$(document).ready(function () {
    $('.aside__burger').click(function (event) {
        $('.aside__burger,.aside__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.first_btn').click(function (event) {
        $('.btns__list li').toggleClass('active');
        $('.btns_back_wrapper').toggleClass('active_wrapper');
    });

});