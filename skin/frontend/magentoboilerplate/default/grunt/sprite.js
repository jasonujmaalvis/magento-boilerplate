module.exports = {
    build: {
        src: 'images/sprites/source/**/*.*',
        dest: 'images/sprites/sprite.png',
        destCss: 'scss/utilities/sprites/_sprite.scss',
        imgPath: '../images/sprites/sprite.png',
        cssTemplate: 'scss/utilities/sprites.styl.mustache',
        cssVarMap: function (sprite) {
            sprite.name = 'sprite__' + sprite.name;
        },
        padding: 20
    },
    buildRetina: {
        src: 'images/sprites/source-2x/**/*.*',
        dest: 'images/sprites/sprite-2x.png',
        destCss: 'scss/utilities/sprites/_sprite-2x.scss',
        imgPath: '../images/sprites/sprite-2x.png',
        cssTemplate: 'scss/utilities/sprites.styl.mustache',
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-2x__' + sprite.name;
        },
        padding: 40
    }
};