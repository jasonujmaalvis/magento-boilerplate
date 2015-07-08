module.exports = {
    grunt: {
        files: ['Gruntfile.js'],
        options: {
            reload: true
        }
    },
    sprite: {
        files: ['images/sprites/core-src/*.png', 'images/sprites/core-src-2x/*.png'],
        tasks: ['sprite'],
        options: {
            livereload: true
        }
    },
    sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
        options: {
            livereload: true
        }
    }
};