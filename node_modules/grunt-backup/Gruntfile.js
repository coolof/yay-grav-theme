/*
 * grunt-backup
 * https://github.com/igorzoriy/grunt-backup
 *
 * Copyright (c) 2013 Igor Zoriy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            },
        },
        clean: {
            tests: ['tmp']
        },
        nodeunit: {
            tests: ['tests/*Test.js']
        },
        backup: {
            defaultCompression: {
                src: 'tests/fixtures',
                dest: 'tmp/backup.tar.gz'
            },
            customCompression: {
                src: 'tests/fixtures',
                dest: 'tmp/backupWithCustomCompression.tar.gz',
                compressionLevel: 8
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['clean', 'backup', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'test']);
};
