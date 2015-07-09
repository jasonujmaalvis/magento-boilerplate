var ProductGallery = (function ($) {
    "use strict";

    // private alias to settings
    var s,
        bp = 768;

    return {
        settings: {
            productImageBox: $(".product-img-box"),
            zoomEnabled:     Modernizr.mq("screen and (min-width:" + bp + "px)"),
            zoomThreshold:   20
        },

        init: function() {
            s = this.settings;

            this.galleryOne();
            this.galleryTwo();
            this.enquire();
            this.resizeHandler();
            this.bindUIActions();
            this.bindWindowActions();
        },

        galleryOne: function() {
            var owl = s.productImageBox.find(".product-image .owl-carousel");

            if(owl.length){
                owl.owlCarousel({
                    items: 1,
                    animateOut: 'fadeOut',
                    mouseDrag: false,
                    pullDrag: false,
                    nav: false,
                    responsive:{
                        0: {
                            dots: true
                        },
                        768: {
                            dots: false
                        }
                    }
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

        zoomInit: function() {
            // set zoom on visible image
            this.zoomCreate($(".no-touch .gallery-image.visible"));
        },

        zoomCreate: function(image) {
            // zoom not enabled || no image found
            if(!s.zoomEnabled || image.length <= 0){
                return;
            }

            if(image[0].naturalWidth && image[0].naturalHeight) {
                var widthDiff  = image[0].naturalWidth - image.width() - s.zoomThreshold,
                    heightDiff = image[0].naturalHeight - image.height() - s.zoomThreshold;

                if(widthDiff < 0 && heightDiff < 0) {
                    // image not big enough
                    image.parents(".product-image").removeClass("zoom-available");

                    return;
                } else {
                    image.parents(".product-image").addClass("zoom-available");
                }
            }

            image.elevateZoom({
                zoomWindowWidth: 430,
                zoomWindowHeight: 430,
                zoomWindowOffetx: 20,
                zoomWindowFadeIn: 200,
                zoomWindowFadeOut: 200,
                lensFadeIn: 200,
                lensFadeOut: 200
            });
        },

        zoomDestroy: function() {
            $(".zoomContainer").remove();
            $(".product-image-gallery").find(".gallery-image").removeData("elevateZoom");
        },

        swapImage: function(targetImage) {
            var owl = s.productImageBox.find(".product-image .owl-carousel");

            // destroy any zooms
            this.zoomDestroy();

            // move target image to correct place
            owl.trigger("to.owl.carousel", [targetImage, 300, true]);

            // classes
            owl.find(".gallery-image").removeClass("visible");
            owl.find("#image-" + targetImage).addClass("visible");

            // create new zoom on the new image
            this.zoomCreate($("#image-" + targetImage));
        },

        enquire: function(){
            enquire.register("screen and (min-width:" + bp + "px)", {
                match: function() {
                    s.zoomEnabled = true;
                    ProductGallery.zoomInit();
                },
                unmatch : function() {
                    ProductGallery.zoomDestroy();
                    s.zoomEnabled = false;
                }
            });
        },

        resizeHandler: function(){
            // generic, efficient window resize handler
            // using setTimeout since Web-Kit and some other browsers call the resize function constantly upon window resizing.
            var resizeTimer;

            $(window).resize(function (e) {
                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(function () {
                    $(window).trigger("delayed-resize", e);
                }, 250);
            });
        },

        bindUIActions: function(){
            // on clicking the thumbnails
            s.productImageBox.find(".more-views .owl-item").on("click", function(e){
                e.preventDefault();

                var target = $(this).find(".item").data("image-index");

                ProductGallery.swapImage(target);
            });
        },

        bindWindowActions: function(){
            // resizing the window causes problems with zoom -- reinitialize
            $(window).on("delayed-resize", function(e, resizeEvent) {
                ProductGallery.zoomDestroy();
                ProductGallery.zoomInit();
            });
        }
    };
})(jQuery);


$j(document).ready(function() {

    ProductGallery.init();

});