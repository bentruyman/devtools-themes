// TODO: consider making this task more configurable
// TODO: use more built-in grunt utilities

// core requirements
var path = require('path');

// vendor requirements
var less = require('less'),
    parser = new (less.Parser)({
      paths: ['themes']
    });

// constants
var THEMES_DIR = 'themes';

module.exports = function (grunt) {
  // generate a list of themes based on sources files in the "themes" directory
  var themes = grunt.file.expandFiles(THEMES_DIR + '/*.less').map(function (filename) {
    return path.basename(filename, '.less');
  });
  
  themes.forEach(function (theme) {
    grunt.registerTask('build:' + theme, 'Builds a version of the "' + theme + '" theme', createThemeTask(theme));
  });
  
  function createThemeTask (theme) {
    var filename = path.join(THEMES_DIR, theme + '.less'),
        foundation = grunt.file.read('Custom.less');
    
    return function () {
      var contents = grunt.file.read(filename),
          done = this.async();
      
      // join the contents of the theme stylesheet with the foundation
      contents = [foundation, contents].join('\n');
      
      // compile the less stylesheet
      parser.parse(contents, function (err, tree) {
        if (!err) {
          grunt.file.write('Custom.css', tree.toCSS());
          done(true);
        } else {
          grunt.fatal(err);
          done(false);
        }
      });
    };
  }
};
