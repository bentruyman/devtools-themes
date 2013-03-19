module.exports = function (grunt) {

  'use strict';

  // defaults
  var defaultTheme = 'ir-black';

  // Project configuration.
  grunt.initConfig({
    clean: ['Custom.css'],
    watch: {
      files: ['Custom.less', 'themes/**/*.less'],
      tasks: 'build:' + defaultTheme
    }
  });

  // Default task.
  grunt.registerTask('default', 'build:' + defaultTheme);

  // Load NPM tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load local tasks.
  grunt.loadTasks('tasks');

};
