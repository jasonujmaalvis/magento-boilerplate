var SiteCategory = (function ($) {
    "use strict";

    // private alias to settings
    var s;

    return {
        settings: function() {
            this.bpLarge = 64.0625;
        },

        init: function() {
            s = new this.settings();

            this.toggleLayeredNav();
        },

        toggleLayeredNav: function(){
            enquire.register('(max-width: ' + s.bpLarge + 'em)', {
                setup: function () {
                    this.elements = $j('.column-left .block-layered-nav .block-subtitle--filter');
                },
                match: function () {
                    this.elements.toggleSingle();
                },
                unmatch: function () {
                    this.elements.toggleSingle({destruct: true});
                }
            });
        }
    };
})(jQuery);


$j(document).ready(function() {

    SiteCategory.init();

});