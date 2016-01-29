/**
 * Created by jk on 05/11/15.
 */

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: []
      },
      dist: {
        files: {
          'gruntDist/c.js': 'hapiCookies-es6.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);
};