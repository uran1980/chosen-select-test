MAIN = {};

//// setup chosen select ---------------------------------------------------------
//$('.chzn-select').chosen({
//    disable_search_threshold: 10, // <--- not work for "chzn-rtl" class
//    search_contains: true
//});
//// -----------------------------------------------------------------------------

// @see http://harvesthq.github.com/chosen/
MAIN.chosen = {
    initChosen: function () {
        var selectedLang = 'en';

        $('.chzn-select').each(function () {
            var disableSearchThreshold  = $(this).attr('disable_search_threshold')              || 10,
                disable_search          = $(this).attr('disable_search')                        || false,
                width                   = $(this).closest('.form-row').find('.holder').width()  || 0;

            if ( selectedLang === 'ar' ) {
                $(this).addClass('chzn-rtl');
            }

            // set chosen select params
            $(this).chosen({
                disable_search_threshold: disableSearchThreshold,
                search_contains: true
            });

            // set selected lang class
            if ( $(this).hasClass('language-choosen-select') ) {
                $('#language .chzn-single span').addClass(selectedLang);

                $(this).chosen().change(function () {
                    window.location = $(this).val();
                });

                $('#language .chzn-results li').click(function () {
                    $('#language .chzn-single span').removeAttr('class')
                        .addClass($(this).attr('class'));
                });
            }

            // fix width
            if ( width > 0 ) {
                $(this).closest('div').find('.chzn-container').width(width);
            }
        });
    }
};

MAIN.init = function () {
    // ...

    MAIN.chosen.initChosen();

    // ...
}

MAIN.init();
