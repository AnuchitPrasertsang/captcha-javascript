'use strict';

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            'operand-factory.js',
            'string-operand.js',
            'number-operand.js',
            'app.js',

            'spec/**/*.js'
        ]
    });
};
