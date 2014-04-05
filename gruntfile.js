module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      general: {
        options: {
          banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          mangle: {
            except: ['starklines']
          }
        },
        files: {
          'public/javascripts/starklines.min.js': ['public/javascripts/vendor/classie.js', 'public/javascripts/vendor/gapi.js', 'public/javascripts/vendor/d3.v3.min.js', 'public/javascripts/vendor/gatrack.js', 'public/javascripts/vendor/moment.js', 'public/javascripts/vendor/lodash.js', 'public/javascripts/lodash-ext.js', 'public/javascripts/script.js', 'public/javascripts/user.js', 'public/javascripts/lines.js']
        }
      }
    },
    jshint: {
      files: ['gruntfile.js', 'public/javascripts/lines.js', 'public/javascripts/user.js', 'public/javascripts/script.js', 'public/javascripts/lodash-ext.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          'public/stylesheets/starklines.min.css': ['public/stylesheets/pure-min.css', 'public/stylesheets/icons.css', 'public/stylesheets/style.css']
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('crush', ['uglify', 'cssmin']);

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
};
