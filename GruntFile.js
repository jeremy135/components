module.exports = function(grunt) {
    grunt.initConfig({
        react: {

            components_jsx_to_js: {
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: ['components/**/*.jsx'],
                        dest: '',
                        ext: '.js'
                    }
                ]
            }
        },

        watch: {
            components_jsx_to_js: {
                files: ['components/**/*.jsx'],
                tasks: ['components_jsx_to_js']

            }
        }
    });
    grunt.registerTask('components_jsx_to_js', ['react:components_jsx_to_js']);

    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

