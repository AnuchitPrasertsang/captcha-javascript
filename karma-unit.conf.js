'use strict';

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            'app.js',

            'spec/**/*.js'
        ]
    });
};
