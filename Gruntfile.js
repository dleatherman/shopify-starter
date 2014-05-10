module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    less: {
      production: {
        options: {
          paths: ['css']
        },
        files: {
          'shopify_theme/assets/style.css.liquid': 'less/style.less'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'shopify_theme/assets/app.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'js/src/app.js']
        }
      }
    },

    watch: {
      js: {
        files: ['js/src/*', 'js/lib/*'],
      },
      less: {
        files: ['css/less/*'],
        tasks: ['less:production']
      },
      config: {
        files: ['Gruntfile.js', 'package.json'],
        options: {
          reload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);

};