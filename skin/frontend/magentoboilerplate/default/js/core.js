var SiteCore = (function ($) {
    "use strict";

    // private alias to settings
    var s;

    return {
        settings: {
            lastScrollTop:      0,
            productImageBox:    $(".product-img-box"),
            siteBar:            $(".page-bar"),
            siteBarPanel:       null
        },

        init: function() {
            s = this.settings;

            this.tabs();
            this.toggleContent();
            this.bindWindowActions();
            this.bindUIActions();
        },

        detectDirection: function(){
            var start = $(window).scrollTop(),
                direction;

            // return if scroll hasn't reached offset
            // if (Math.abs(this.settings.lastScrollTop - start) <= 5) {
            //     return;
            // }

            if (start > this.settings.lastScrollTop) {
                direction = "down";
            } else {
                direction = "up";
            }

            this.settings.lastScrollTop = start;

            return direction;
        },

        toggleContentClasses: function(clickedItem, nav, group){
            var index = nav.index(clickedItem),
                i;

            for (i = 0; i < group.length; i++) {
                group[i].removeClass("open");
                group[i].eq(index).addClass("open");
            }
        },

        tabs: function(){
            // tabs
            $(".js-tabs").each(function(){
                var wrapper = $(this),
                    nav     = wrapper.find(".tab-nav a"),
                    panes   = wrapper.find(".tab-pane"),
                    group  = [nav, panes];

                nav.on("click", function(e){
                    e.preventDefault();
                    SiteCore.toggleContentClasses($(this), nav, group);
                });
            });
        },

        toggleContent: function(){
            // accordions
            $(".js-toggle-content").each(function(){
                var wrapper = $(this),
                    dl      = wrapper.children("dl:first"),
                    nav     = dl.children("dt"),
                    panes   = dl.children("dd"),
                    group   = [nav, panes];

                nav.on("click", function(){
                    // Clicked the current dt to close it. Restore the wrapper to unclicked state.
                    if ($(this).hasClass("open") && wrapper.hasClass("accordion-open")) {
                        wrapper.removeClass("accordion-open");
                    } else {
                        // Clicked something new. Reflect the explicit user interaction.
                        wrapper.addClass("accordion-open");
                    }

                    SiteCore.toggleContentClasses($(this), nav, group);
                });
            });
        },

        bodyFn: function(e){
            if(!$(e.target).parents().hasClass("active")){
                s.siteBar.find(".active").removeClass("active");
                s.siteBarPanel = null;

                // unbind body click
                $(document).unbind("click", SiteCore.bodyFn);
            }
        },

        bindWindowActions: function(){
            var height = s.siteBar.outerHeight();

            $(window).on("scroll", function(){
                var direction = SiteCore.detectDirection();

                if(direction === "down"){
                    s.siteBar.removeClass("fixed").css({
                        top: -height
                    });

                    // correct position for overscroll
                    if ($(window).scrollTop() <= 0) {
                        s.siteBar.removeClass("fixed").css({
                            top: 0
                        });
                    }
                } else if(direction === "up") {
                    s.siteBar.addClass("fixed").css({
                        top: 0
                    });

                    // correct position for overscroll
                    if ($(window).scrollTop() < height) {
                        s.siteBar.removeClass("fixed").attr("style", "");
                    }
                }
            });

            // default in case we load part way down the page
            if ($(window).scrollTop() > height) {
                s.siteBar.addClass("fixed").css({
                    top: 0
                });
            }
        },

        bindUIActions: function(){
            // site bar actions slide outs
            s.siteBar.find("label").on("click", function(){
                var _this     = $(this),
                    container = _this.parents(".js-slide-panel");

                if(container.hasClass("active")){
                    container.removeClass("active");
                    s.siteBarPanel = null;

                    // unbind body click
                    $(document).unbind("click", SiteCore.bodyFn);
                } else {
                    if(s.siteBarPanel !== null){
                        s.siteBarPanel.removeClass("active").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(){
                            container.addClass("active");
                            s.siteBarPanel = container;

                            // bind body click
                            $(document).bind("click", SiteCore.bodyFn);
                        });
                    } else {
                        container.addClass("active");
                        s.siteBarPanel = container;

                        // bind body click
                        $(document).bind("click", SiteCore.bodyFn);
                    }
                }
            });
        }
    };
})(jQuery);


$j(document).ready(function() {

    SiteCore.init();

});