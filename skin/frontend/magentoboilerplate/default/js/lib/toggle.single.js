// ==============================================
// UI Pattern - ToggleSingle
// ==============================================

// Use this plugin to toggle the visibility of content based on a toggle link/element.
// This pattern differs from the accordion functionality in the Toggle pattern in that each toggle group acts
// independently of the others. It is named so as not to be confused with the Toggle pattern below
//
// This plugin requires a specific markup structure. The plugin expects a set of elements that it
// will use as the toggle link. It then hides all immediately following siblings and toggles the sibling's
// visibility when the toggle link is clicked.
//
// Example markup:
// <div class="block">
//     <div class="block-title">Trigger</div>
//     <div class="block-content">Content that should show when </div>
// </div>
//
// JS: jQuery('.block-title').toggleSingle();
//
// Options:
//     destruct: defaults to false, but if true, the plugin will remove itself, display content, and remove event handlers
jQuery.fn.toggleSingle = function (options) {
    // passing destruct: true allows
    var settings = $j.extend({
        destruct: false
    }, options);

    return this.each(function () {
        if (!settings.destruct) {
            $j(this).on('click', function () {
                $j(this).toggleClass('active').next().toggleClass('no-display');
            });

            // Hide the content
            $j(this).next().addClass('no-display');
        } else {
            // Remove event handler so that the toggle link can no longer be used
            $j(this).off('click');

            // Remove all classes that were added by this plugin
            $j(this).removeClass('active').next().removeClass('no-display');
        }
    });
};