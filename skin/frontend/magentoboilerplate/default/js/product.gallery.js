var ProductGallery = (function ($) {
    "use strict";

    // private alias to settings
    var s,
        bp = 768;

    return {
        settings: {
            productImageBox: $(".product-img-box"),
            zoomEnabled:     Modernizr.mq("screen and (min-width:" + bp + "px)"),
            zoomThreshold:   20,
            duration:        300,
            moving:          false,
            owlOne:          null,
            owlTwo:          null
        },

        init: function() {
            s = this.settings;

            this.galleryOne();
            this.galleryTwo();
            this.enquire();
            this.resizeHandler();
            this.bindWindowActions();
        },

        galleryOne: function() {
            s.owlOne = s.productImageBox.find(".product-image .owl-carousel");

            if(s.owlOne.length){
                s.owlOne.owlCarousel({
                    items: 1,
                    animateOut: 'fadeOut',
                    mouseDrag: false,
                    pullDrag: false,
                    nav: true,
                    responsive:{
                        0: {
                            dots: true
                        },
                        768: {
                            dots: false
                        }
                    }
                }).on("changed.owl.carousel", function (e) {
                    if (!s.moving) {
                        // if the no selection image exists the index is different as
                        // we have 1 extra image in owlOne than we do in owlTwo
                        var index = ($(".js-gallery-image-no-selection").length) ? e.item.index - 1 : e.item.index;

                        // set flag
                        s.moving = true;

                        // move owlTwo
                        s.owlTwo.trigger("to.owl.carousel", [index, s.duration, true]);

                        // class changes for styling purposes
                        s.owlTwo.find(".visible").removeClass("visible");
                        s.owlTwo.find(".owl-item").eq(index).find(".item").addClass("visible");

                        // create new zoom on the new image
                        ProductGallery.zoomCreate($(e.target).find(".owl-item").eq(index).find("img"));

                        // remove flag
                        s.moving = false;
                    }
                });
            }
        },

        galleryTwo: function() {
            s.owlTwo = s.productImageBox.find(".more-views .owl-carousel");

            if(s.owlTwo.length){
                s.owlTwo.owlCarousel({
                    margin: 10,
                    nav: false,
                    dots: false,
                    items: 3
                }).on("click", ".owl-item", function () {
                    // if the no selection image exists the index is different as
                    // we have 1 extra image in owlOne than we do in owlTwo
                    var _this = $(this),
                        index = ($(".js-gallery-image-no-selection").length) ? _this.index() + 1 : _this.index();

                    // move owlOne
                    s.owlOne.trigger("to.owl.carousel", [index, s.duration, true]);

                    // class changes for styling purposes
                    _this.parent().find(".visible").removeClass("visible");
                    _this.find(".item").addClass("visible");

                    // create new zoom on the new image
                    ProductGallery.zoomCreate(s.owlOne.find(".owl-item").eq(index).find("img"));
                }).on("changed.owl.carousel", function (e) {
                    if (!s.moving) {
                        // if the no selection image exists the index is different as
                        // we have 1 extra image in owlOne than we do in owlTwo
                        var index = ($(".js-gallery-image-no-selection").length) ? e.item.index + 1 : e.item.index;

                        // set flag
                        s.moving = true;

                        // move owlOne
                        s.owlOne.trigger("to.owl.carousel", [index, s.duration, true]);

                        // class changes for styling purposes
                        $(e.target).find(".visible").removeClass("visible");
                        $(e.target).find(".owl-item").eq(index).find(".item").addClass("visible");

                        // create new zoom on the new image
                        ProductGallery.zoomCreate(s.owlOne.find(".owl-item").eq(index).find("img"));

                        // remove flag
                        s.moving = false;
                    }
                });
            }
        },

        zoomInit: function() {
            // set zoom on visible image
            this.zoomCreate($(".no-touch .gallery-image.visible"));
        },

        zoomCreate: function(image) {
            // destroy any zooms
            this.zoomDestroy();

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