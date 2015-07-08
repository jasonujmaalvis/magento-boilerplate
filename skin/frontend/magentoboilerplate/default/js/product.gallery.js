var ProductGallery = (function ($) {
    "use strict";

    // private alias to settings
    var s;

    return {
        settings: {
            productImageBox: $(".product-img-box")
        },

        init: function() {
            s = this.settings;

            this.galleryOne();
            this.galleryTwo();
            this.bindUIActions();
        },

        galleryOne: function() {
            var owl = s.productImageBox.find(".product-image .owl-carousel");

            if(owl.length){
                owl.owlCarousel({
                    mouseDrag: false,
                    pullDrag: false,
                    nav: false,
                    items: 1,
                    animateOut: 'fadeOut'
                });
            }
        },

        galleryTwo: function() {
            var owl = s.productImageBox.find(".more-views .owl-carousel");

            if(owl.length){
                owl.owlCarousel({
                    margin: 20,
                    nav: true,
                    dots: false,
                    items: 3
                });
            }
        },

       swapImage: function(targetImage) {
            var owl = s.productImageBox.find(".product-image .owl-carousel");

            // move target image to correct place
            owl.trigger("to.owl.carousel", [targetImage, 300, true]);
        },

        bindUIActions: function(){
            // on clicking the thumbnails
            s.productImageBox.find(".more-views .owl-item").on("click", function(e){
                e.preventDefault();

                var target = $(this).find(".item").data("image-index");

                ProductGallery.swapImage(target);
            });
        }
    };
})(jQuery);


$j(document).ready(function() {

    ProductGallery.init();

});