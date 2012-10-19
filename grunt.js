module.exports = function (grunt) {
  
  'use strict';
  
  // Project configuration.
  grunt.initConfig({
    clean: ['Custom.css'],
    watch: {
      files: ['Custom.less', 'themes/**/*.less'],
      tasks: 'build:tomorrow-night-dark'
    }
  });
  
  // Default task.
  grunt.registerTask('default', 'build:tomorrow-night-dark');
  
  // Load NPM tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  // Load local tasks.
  grunt.loadTasks('tasks');
  
};
