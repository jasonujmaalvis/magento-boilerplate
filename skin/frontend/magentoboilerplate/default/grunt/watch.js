module.exports = {
    grunt: {
        files: ['Gruntfile.js'],
        options: {
            reload: true
        }
    },
    sprite: {
        files: ['images/sprites/source/*.png', 'images/sprites/source-2x/*.png'],
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