module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),

    clean: ['./out'],

    exec: {
      generate: {
        cmd: './node_modules/.bin/docpad generate --env=production'
      },

      run: {
        cmd: './node_modules/.bin/docpad run'
      },

      deploy: {
        cmd: './node_modules/.bin/docpad deploy-gh-pages'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-node-version');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('run', ['clean','node_version','exec:run']);
  grunt.registerTask('gen', ['clean','node_version','exec:generate']);
  grunt.registerTask('deploy', ['clean','node_version', 'exec:deploy']);
};
