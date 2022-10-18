$(document).ready(function() {
    $('.aside__burger').click(function(event) {
        $('.aside__burger,.aside__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});