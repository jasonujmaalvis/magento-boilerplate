module.exports = {
    core: {
        src: 'images/sprites/core-src/**/*.*',
        destImg: 'images/sprites/sprite-core.png',
        destCSS: 'scss/utilities/sprites/_sprite-core.scss',
        imgPath: '../images/sprites/sprite-core.png',
        cssTemplate: 'scss/utilities/sprites.styl.mustache',
        cssVarMap: function (sprite) {
            sprite.name = 'sprite__' + sprite.name;
        },
        padding: 20
    },
    core_2x: {
        src: 'images/sprites/core-src-2x/**/*.*',
        destImg: 'images/sprites/sprite-core-2x.png',
        destCSS: 'scss/utilities/sprites/_sprite-core-2x.scss',
        imgPath: '../images/sprites/sprite-core-2x.png',
        cssTemplate: 'scss/utilities/sprites.styl.mustache',
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-2x__' + sprite.name;
        },
        padding: 40
    }
};