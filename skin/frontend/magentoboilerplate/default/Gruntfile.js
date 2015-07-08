module.exports = function(grunt) {
    // load grunt config
    require('load-grunt-config')(grunt);

    // register task: default
    grunt.registerTask('default', [
        'sprite',
        'sass',
        'jshint',
        'concat',
        'uglify',
        'watch'
    ]);
};