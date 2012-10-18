/*global module:false*/
module.exports = function(grunt) {
  
  'use strict';
  
  // Project configuration.
  grunt.initConfig({
    less: {
      devtools: {
        files: {
          'Custom.css': 'Custom.less'
        }
      }
    },
    watch: {
      files: ['Custom.less', 'themes/**/*.less'],
      tasks: 'less'
    }
  });
  
  // Default task.
  grunt.registerTask('default', 'less');
  
  // Load loadNpmTask tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  
};
