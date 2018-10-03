// ES6, ES7, ES8 supported

jQuery($ => {

    $(document).ready(() => {

        //User dropdown click
        $('.dropdown-btn-js').click(function (e) {
            e.preventDefault();
           $('.header__dropdown').slideToggle(500);
        });

    });

});
